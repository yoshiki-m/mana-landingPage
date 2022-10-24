import {
  Box,
  Container,
  Stack,
  Text,
  Flex,
  VStack,
  Button,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  Grid,
  GridItem
} from '@chakra-ui/react';

import SplitWithImage from './molecule/split_with_image'

import {
  IoConstructOutline,
  IoCloudOutline,
  IoThumbsUp
} from 'react-icons/io5';

import { Link } from 'react-scroll';

export default function AboutBim() {
  return (
    <Container maxW={'6xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 1 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 14, md: 18 }}>
        <Flex>
        <SplitWithImage
          button_text='システム開発'
          id='system_development'
          main_text='建築を理解したシステム開発'
          explanation='建築の設計・施工を経験したシステムエンジニアがシステム開発を行います。'
          feature_1_icon={IoConstructOutline}
          feature_1_detail={{ text: '業務理解', color: 'yellow.500', bg_color1: 'yellow.100', bg_color2: 'yellow.900'}}
          feature_2_icon={IoCloudOutline}
          feature_2_detail={{ text: 'クラウド活用', color: 'green.500', bg_color1: 'green.100', bg_color2: 'green.900'}}
          feature_3_icon={IoThumbsUp}
          feature_3_detail={{ text: '高可用性', color: 'purple.500', bg_color1: 'purple.100', bg_color2: 'purple.900'}}
          src='https://www.youtube.com/embed/tW2dmEFeeys'
          title='about_system_development'
        
        
        />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text fontSize={'lg'}>
                建築に関する経験を有するエンジニアチームがシステム要件の整理から関わらせていただきます。
                弊社が管理する場合、クラウドシステムを活用するため、システム停止等のリスクはかなり低いです。
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Features
              </Text>
              <Grid templateColumns='repeat(6, 1fr)' gap={4}>
                <GridItem colSpan={1}>
                  <Text as={'span'} fontWeight={'bold'}>
                    対象システム：<br></br>
                    対象分野<br></br>
                    クラウドシステム：<br></br>
                  </Text>
                </GridItem>
                <GridItem colSpan={5}>
                  <Text as={'span'}>
                    御社業務システム、他社販売用システム<br></br>
                    建築・不動産の知識・経験があるエンジニアが所属しています。お気軽にご相談ください。<br></br>
                    Google Cloud Platform<br></br>
                  </Text>
                </GridItem>
              </Grid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Product Details
              </Text>
              <Grid templateColumns='repeat(6, 1fr)' gap={4}>
                <GridItem colSpan={1}>
                  <Text as={'span'} fontWeight={'bold'}>
                    対象プロセス：<br></br>
                    プログラミング言語：<br></br>
                    最終成果物：<br></br><br></br>
                  </Text>
                </GridItem>
                <GridItem colSpan={5}>
                  <Text as={'span'}>
                    要件定義から弊社が参画することが可能です。<br></br>
                    HTML,CSS,Javascript,Python,shell等<br></br>
                    御社のサーバーで管理するか、弊社が維持管理するか選択できます。<br></br><br></br>
                  </Text>
                </GridItem>
              </Grid>
              <Text as={'span'}>
                詳しくはお問合せください。
              </Text>
            </Box>
          </Stack>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
          >
            <Button
              color={'blue.400'}
              rounded={'full'}
              w={'full'}
              mt={4}
              size={'lg'}
              py={'4'}
              colorScheme={'blue'}
              bg={useColorModeValue('blue.50', 'blue.900')}
              border='1px'
              borderColor='blue.100'
              _hover={{ bg: 'blue.100' }}>
              お問合せ
            </Button>
          </Link>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}