import PropTypes from "prop-types";

import NexLink from "next/link";
import { Box, Image, Heading, Text, Link, VStack } from "@chakra-ui/react";

export const PostCard = ({ date, title, excert, slug, image }) => {
  const dateFormatted = (date) => {
    // navigator.languag run in browser. Get languaje in server side too
    // const browserLanguage = navigator ? navigator.language : "es-ES";
    const browserLanguage = "es-ES";

    return new Intl.DateTimeFormat(browserLanguage, {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  return (
    <Box>
      <Box>
        <Image src={image} alt={title} />
      </Box>

      <Box p={2}>
        <VStack spacing={3} align="stretch">
          <Box as="small">
            <Box as="time">{dateFormatted(date)}</Box>
          </Box>
          <Heading as="h3" size="md">
            {title}
          </Heading>
          <Text>{excert}</Text>

          <NexLink href={slug}>
            <Link>Read More</Link>
          </NexLink>
        </VStack>
      </Box>
    </Box>
  );
};

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  excert: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
