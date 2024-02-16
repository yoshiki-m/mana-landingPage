import * as React from "react";
import { ChakraProvider, Box, Grid, theme, Text, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import CallToActionWithVideo from "./components/hero_header";
import AboutBim from "./components/about_bim";
import AboutSystemDevelopment from "./components/about_system_development";
import Contact from "./components/contact";
import CEOIntroduction from "./components/ceo_introduction";
import Footer from "./components/footer";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Text
          id={"top"}
          as={"span"}
          position={"relative"}
          fontSize={{ base: "1xl", sm: "2xl", lg: "3xl" }}
        >
          株式会社manaのサイトは、以下に移動しました。
          <br />
        </Text>
        <Link href="https://www.mana-it-arch.com/" isExternal>
          新しいサイトはこちらです。 <ExternalLinkIcon mx="2px" />
        </Link>
        <Grid p={3}>
          <CallToActionWithVideo />
        </Grid>
      </Box>
      <AboutBim />
      <AboutSystemDevelopment />
      <Contact />
      <CEOIntroduction />
      <Footer />
    </ChakraProvider>
  );
};
