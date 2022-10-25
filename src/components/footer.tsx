
import {
    Box,
    Container,
    Stack,
    Text,
    useColorModeValue,
    Image,
    Center,
    Link
  } from '@chakra-ui/react';

  export default function Footer() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Center>
          <Image
            alt={'Logo Image'}
            fit={'cover'}
            align={'center'}
            w={'80px'}
            h={'80px'}
            src={`${process.env.PUBLIC_URL}/img/logo.png`}
          />
          <Text
            as={'span'}
            mt={2}
            fontWeight={'bold'}
          >
              株式会社 mana
          </Text>
        </Center>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          spacing={4}
          justify={'center'}
          align={'center'}>
          <Stack direction={'row'} spacing={6}>
            <Link href={'#top'}>TOP</Link>
            <Link href={'#perspective'}>3Dパース</Link>
            <Link href={'#system_development'}>システム開発</Link>
            <Link href={'#contact'}>お問合せ</Link>
          </Stack>
        </Container>
  
        <Box
          borderTopWidth={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}>
          <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}>
            <Text>© 2022 mana Corp. All rights reserved</Text>
          </Container>
        </Box>
      </Box>
    );
  }