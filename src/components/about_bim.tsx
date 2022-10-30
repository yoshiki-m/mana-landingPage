import {
  Box,
  Container,
  Stack,
  Text,
  Button,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  Grid,
  GridItem
} from '@chakra-ui/react';

import SplitWithImage from './molecule/split_with_image'

import {
  IoBulbOutline,
  IoBasket,
  IoBuild,
} from 'react-icons/io5';

import { Link } from 'react-scroll';

export default function AboutBim() {
  return (
    <Container maxW={'6xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 1 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 14, md: 18 }}>
        <SplitWithImage
          button_text='3Dパース'
          id='perspective'
          main_text='BIMソフトによる3Dパース作成'
          explanation='国内外の優秀なメンバーが、Autodesk社のRevitを用いて、3Dパースを作成します。'
          feature_1_icon={IoBulbOutline}
          feature_1_detail={{ text: '高品質', color: 'yellow.500', bg_color1: 'yellow.100', bg_color2: 'yellow.900'}}
          feature_2_icon={IoBasket}
          feature_2_detail={{ text: '15万円〜', color: 'green.500', bg_color1: 'green.100', bg_color2: 'green.900'}}
          feature_3_icon={IoBuild}
          feature_3_detail={{ text: '2回まで修正可', color: 'purple.500', bg_color1: 'purple.100', bg_color2: 'purple.900'}}
          src='https://www.youtube.com/embed/clpF3qnw7ug'
          title='about_bim'
        />
        <Stack
          spacing={{ base: 4, sm: 6 }}
          direction={'column'}
          divider={
            <StackDivider
              borderColor={useColorModeValue('gray.200', 'gray.600')}
            />
          }>
          <Text fontSize={'lg'}>
            建築の平面図、4面の立面図をいただくことで、建築の3Dパースを作成します。
            敷地の形状や周辺環境が分かる資料をいただくことで、パースに反映させることができます。
          </Text>
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
              <GridItem colSpan={{ base: 6, md: 1 }}>
                <Text as={'span'} fontWeight={'bold'}>
                  使用ソフト：
                </Text>
              </GridItem>
              <GridItem colSpan={{ base: 6, md: 5 }}>
                <Text as={'span'}>
                  Revit
                </Text>
              </GridItem>
              <GridItem colSpan={{ base: 6, md: 1 }}>
                <Text as={'span'} fontWeight={'bold'}>
                  必要資料：
                </Text>
              </GridItem>
              <GridItem colSpan={{ base: 6, md: 5 }}>
                <Text as={'span'}>
                  平面図・4面の立面図、内部仕様の資料(任意)、敷地の資料(任意)
                </Text>
              </GridItem>
              <GridItem colSpan={{ base: 6, md: 1 }}>
                <Text as={'span'} fontWeight={'bold'}>
                  修正可能回数：
                </Text>
              </GridItem>
              <GridItem colSpan={{ base: 6, md: 5 }}>
                <Text as={'span'}>
                  2回
                </Text>
              </GridItem>
              <GridItem colSpan={{ base: 6, md: 1 }}>
                <Text as={'span'} fontWeight={'bold'}>
                  納品パース数：
                </Text>
              </GridItem>
              <GridItem colSpan={{ base: 6, md: 5 }}>
                <Text as={'span'}>
                  10枚程度(調整可能)
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
              <GridItem colSpan={{ base: 6, md: 1 }}>
                <Text as={'span'} fontWeight={'bold'}>
                  プロセス：
                </Text>
              </GridItem>
              <GridItem colSpan={{ base: 6, md: 5 }}>
                <Text as={'span'}>
                  ヒアリング・図面受領→パース作成・共有→修正(2回まで)→納品
                </Text>
              </GridItem>
              <GridItem colSpan={{ base: 6, md: 1 }}>
                <Text as={'span'} fontWeight={'bold'}>
                  納品物：
                </Text>
              </GridItem>
              <GridItem colSpan={{ base: 6, md: 5 }}>
                <Text as={'span'}>
                  PDF・画像ファイル、追加料金でRevitの元データ
                </Text>
              </GridItem>
            </Grid>
            <Grid
              templateRows='repeat(1, 1fr)'
              templateColumns='repeat(2, 1fr)'
              gap={4}
              mt={6}
            >
              <Box>
                <Text as={'span'} fontWeight={'bold'}>
                  以下の内容は追加料金なし：<br></br>
                </Text>
                <Text as={'span'}>
                  ・修正2回まで<br></br>
                  ・3Kレンダリング<br></br>
                  ・モデル内への車・人の配置<br></br>
                  ・データ保管5年間まで<br></br><br></br>
                </Text>
              </Box>
              <Box>
                <Text as={'span'} fontWeight={'bold'}>
                  追加料金が発生する例：<br></br>
                </Text>
                <Text as={'span'}>
                  ・3回以上修正<br></br>
                  ・4Kレンダリング<br></br>
                  ・Revitファイルの納品<br></br>
                  ・夜景パースレンダリング・バードアイビューレンダリング<br></br>
                  ・データ保管10年間まで<br></br><br></br>
                </Text>
              </Box>
            </Grid>
          </Box>
        </Stack>
        <Box>
          <Text as={'span'}>
            詳しくはお問合せください。
          </Text>
        </Box>
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
      </SimpleGrid>
    </Container>
  );
}