import {
  Container,
  Stack,
  Heading,
  Text,
  Button,
  HStack,
  VStack,
} from '@chakra-ui/react';

import { Link } from 'react-scroll';

import CallToTopImage from "./atom/top_image"

export default function CallToActionWithVideo() {
  return (
    <Container maxW={'7xl'}>
      <Stack
        spacing={{ base: 8, md: 10 }}
        py={{ base: 14, md: 24 }}
        direction={{ base: 'column', md: 'row' }}>
        <VStack flex={1} spacing={{ base: 4, md: 7 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '3xl', lg: '5xl' }}>
            <Text
              id={'top'}
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
              建築 × IT
            </Text>
            <br />
            <Text as={'span'} color={'blue.400'} fontSize={{ base: '1xl', sm: '2xl', lg: '3xl' }}>
              に正面から取り組む
            </Text>
          </Heading>
          <Text color={'gray.500'}
            align={'left'}>
            株式会社manaは、建築・IT業界経験を有するメンバーによる、IT活用を特徴としています。
            建築業界の3Dパース作成・システム開発について、お気軽にお問合せください。
          </Text>
          <HStack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}
            justify='center'>
            <Link
                activeClass="active"
                to="perspective"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
            >
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}>
                3Dパース
              </Button>
            </Link>
            <Link
                activeClass="active"
                to="system_development"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
            >
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}>
                システム開発
              </Button>
            </Link>
            <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
            >
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'blue'}
                bg={'blue.400'}
                _hover={{ bg: 'blue.500' }}>
                お問合せ
              </Button>
            </Link>
          </HStack>
        </VStack>
        <CallToTopImage
          src = '/img/top.jpg'
        />
      </Stack>
    </Container>
  );
}
