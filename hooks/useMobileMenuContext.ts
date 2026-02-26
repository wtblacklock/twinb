import { createContext, useContext } from "react";

interface MobileMenuContextType {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export const MobileMenuContext = createContext<MobileMenuContextType>({
  mobileMenuOpen: false,
  setMobileMenuOpen: () => {},
});

export function useMobileMenu() {
  return useContext(MobileMenuContext);
}
