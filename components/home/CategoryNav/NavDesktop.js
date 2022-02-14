import NextLink from "next/link";
import { UnorderedList, ListItem, Link } from "@chakra-ui/react";

export default function NavDesktop({ categoriesLinks }) {
  return (
    <UnorderedList styleType="none" display="flex" ml={0}>
      {categoriesLinks.map((category) => (
        <ListItem key={category.name}>
          <NextLink href={category.path}>
            <Link
              _hover={{ borderColor: "teal" }}
              borderBottom="1px solid transparent"
              display="block"
              fontWeight="bold"
              px={6}
              py={2}
            >
              {category.name}
            </Link>
          </NextLink>
        </ListItem>
      ))}
    </UnorderedList>
  );
}
