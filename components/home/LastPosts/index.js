import PropTypes from "prop-types";

import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
import { PostCard } from "components/common/PostCard";

const LastPosts = ({ posts }) => {
  return (
    <Box as="section" py={10}>
      <Container maxW="container.xl">
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          columnGap={6}
          rowGap={14}
        >
          {posts.map((post) => (
            <GridItem key={post.slug}>
              <PostCard {...post} />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

LastPosts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      excert: PropTypes.string.isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
      slug: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
};

export default LastPosts;
