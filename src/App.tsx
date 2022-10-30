import * as React from "react"
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from "@chakra-ui/react"
import CallToActionWithVideo from "./components/hero_header"
import AboutBim from "./components/about_bim"
import AboutSystemDevelopment from "./components/about_system_development"
import Contact from "./components/contact"
import CEOIntroduction from "./components/ceo_introduction"
import Footer from "./components/footer"
import {usePageTracking} from "./components/atom/useTracking"

export const App = () => {
  usePageTracking()
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid p={3}>
          <CallToActionWithVideo/>
        </Grid>
      </Box>
      <AboutBim/>
      <AboutSystemDevelopment/>
      <Contact />
      <CEOIntroduction />
      <Footer />
    </ChakraProvider>
  )
}
