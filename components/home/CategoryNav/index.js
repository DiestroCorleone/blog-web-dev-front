import dynamic from "next/dynamic";
import { Container, useMediaQuery } from "@chakra-ui/react";

const NavDesktop = dynamic(() => import("./NavDesktop"));
const NavMobile = dynamic(() => import("./NavMobile"));

import { CATEGORIES_LINKS } from "./constant";

const CategoryNav = () => {
  // default breakpoint md https://chakra-ui.com/docs/theming/theme#breakpoints
  const [isMobile] = useMediaQuery("(max-width: 48em)");

  return (
    <>
      <Container maxW="container.xl">
        {isMobile ? (
          <NavMobile categoriesLinks={CATEGORIES_LINKS} />
        ) : (
          <NavDesktop categoriesLinks={CATEGORIES_LINKS} />
        )}
      </Container>
    </>
  );
};

export default CategoryNav;
