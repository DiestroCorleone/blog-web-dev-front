import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  Center,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

import { FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <Box as="header" h="100vh" maxHeight={{ base: "700px", md: "800px" }}>
        <Container maxW="container.xl" centerContent={true} h="100%">
          <Grid
            templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
            gap={16}
            h="100%"
          >
            <Center>
              <GridItem>
                <Stack spacing={10}>
                  <Box>
                    <Stack spacing={2}>
                      <Heading as="h1" fontSize={{ base: "30px", md: "56px" }}>
                        Blog Posts
                      </Heading>

                      <Heading
                        as="h2"
                        fontSize={{ base: "30px", md: "56px" }}
                        fontWeight="normal"
                      >
                        I think so, this is it.
                      </Heading>
                    </Stack>
                  </Box>

                  <Text>
                    Design begins after I begin to think about how to present an
                    experience most successfully, whether a button I put in can
                    solve a problem. The only point in design is not ui design,
                    if the user does not have a good experience at the end of
                    the product, the design will be considered unsuccessful in
                    my opinion.
                  </Text>

                  <Stack spacing={2} direction="row">
                    <Button
                      borderRadius={0}
                      colorScheme="facebook"
                      fontSize={{ base: "10px", md: "16px" }}
                      height={{ base: "42px", md: "60px" }}
                      leftIcon={<FaFacebook />}
                      maxWidth={{ base: "102px", md: "200px" }}
                      width="100%"
                    >
                      Facebook
                    </Button>

                    <Button
                      borderRadius={0}
                      colorScheme="twitter"
                      fontSize={{ base: "10px", md: "16px" }}
                      height={{ base: "42px", md: "60px" }}
                      leftIcon={<FaTwitter />}
                      maxWidth={{ base: "102px", md: "200px" }}
                      width="100%"
                    >
                      Twitter
                    </Button>

                    <Button
                      borderRadius={0}
                      colorScheme="linkedin"
                      fontSize={{ base: "10px", md: "16px" }}
                      height={{ base: "42px", md: "60px" }}
                      leftIcon={<FaLinkedinIn />}
                      maxWidth={{ base: "102px", md: "200px" }}
                      width="100%"
                    >
                      Linkedin
                    </Button>
                  </Stack>
                </Stack>
              </GridItem>
            </Center>

            <GridItem display={{ base: "none", lg: "block" }}>
              <Center h="100%">
                <Image
                  src="img/Group296.svg"
                  alt="Blog hero image"
                  width="407px"
                  height="408px"
                />
              </Center>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Header;
