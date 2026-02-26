import { NextResponse } from "next/server";

const VALID_INTENTS = ["product_review", "service_inquiry", "general_contact"] as const;
type Intent = (typeof VALID_INTENTS)[number];

const isNonEmptyString = (value: unknown) => typeof value === "string" && value.trim().length > 0;

const sanitizeOptionalString = (value: unknown) => (typeof value === "string" ? value.trim() : "");

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const intent = sanitizeOptionalString(body?.intent);

    const payload = {
      name: sanitizeOptionalString(body?.name),
      email: sanitizeOptionalString(body?.email),
      company: sanitizeOptionalString(body?.company),
      message: sanitizeOptionalString(body?.message),
      intent,
      primary_service: sanitizeOptionalString(body?.primary_service),
      additional_services: Array.isArray(body?.additional_services)
        ? body.additional_services
            .map((item: unknown) => sanitizeOptionalString(item))
            .filter((item: string) => item.length > 0)
        : [],
      product_url: sanitizeOptionalString(body?.product_url),
      current_state: sanitizeOptionalString(body?.current_state),
      biggest_priority: sanitizeOptionalString(body?.biggest_priority),
      topic: sanitizeOptionalString(body?.topic),
    };

    if (
      !isNonEmptyString(payload.name) ||
      !isNonEmptyString(payload.email) ||
      !isNonEmptyString(payload.message) ||
      !VALID_INTENTS.includes(payload.intent as Intent)
    ) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (payload.intent === "general_contact" && !isNonEmptyString(payload.topic)) {
      return NextResponse.json({ error: "Topic is required for general contact" }, { status: 400 });
    }

    if (payload.intent === "service_inquiry" && !isNonEmptyString(payload.primary_service)) {
      return NextResponse.json({ error: "Primary service is required for service inquiry" }, { status: 400 });
    }

    // Log server-side only.
    console.log("Contact Form Submission:", payload);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
