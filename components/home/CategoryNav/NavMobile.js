import { useState } from "react";

import { Select, Box } from "@chakra-ui/react";

export default function NavMobile({ categoriesLinks }) {
  const [category, setCategory] = useState(categoriesLinks[0].name);

  const handleChangeCategory = ({ target }) => {
    setCategory(target.value);
  };

  return (
    <Select variant="flushed" onChange={handleChangeCategory} fontWeight="bold">
      {categoriesLinks.map((category) => (
        <Box as="option" key={category.name} value={category.name}>
          {category.name}
        </Box>
      ))}
    </Select>
  );
}
