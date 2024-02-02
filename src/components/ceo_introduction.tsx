import {
  Box,
  Container,
  Stack,
  Text,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  Grid,
  GridItem,
} from "@chakra-ui/react";

export default function CEOIntroduction() {
  return (
    <Container maxW={"6xl"} mb={10}>
      <SimpleGrid
        columns={{ base: 1, lg: 1 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 14, md: 18 }}
      >
        <Stack spacing={{ base: 6, md: 10 }}>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <Text color={"gray.600"} fontSize={"2xl"}>
              代表取締役
            </Text>
            <Text fontWeight={"bold"}>真鍋　義貴</Text>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                経歴
              </Text>
              <Text>
                2010年　京都大学　工学部建築学科卒<br></br>
                2012年　京都大学　工学部研究科建築学専攻修了<br></br>
                大学院では、鉄骨構造に関する研究を行う。<br></br>
                <br></br>
                2012年〜2015年　ゼネコンで、施工管理を行う。既存建物の解体から、オフィスビルの竣工までを経験する。
                <br></br>
                <br></br>
                2015年　現在の株式会社mana設立。<br></br>
                <br></br>
                2018年〜2022年<br></br>
                設計事務所と協力し、建築設計業務、確認申請業務、BIMソフトウェアを使ったモデル作成業務などを行う。
                <br></br>
                また、建築と不動産の知見を生かしたシステム開発を行う。<br></br>
                <br></br>
                2021年〜
                東証プライムの企業にシステム開発エンジニアとして参画。GCPを用いたデータ活用基盤を構築している。
                <br></br>
                IT業界にも通用するシステム開発を習得している。
              </Text>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                保有資格等
              </Text>
              <Grid templateColumns="repeat(6, 1fr)" gap={4}>
                <GridItem colSpan={{ base: 6, md: 1 }}>
                  <Text as={"span"} fontWeight={"bold"}>
                    保有資格：
                  </Text>
                </GridItem>
                <GridItem colSpan={{ base: 6, md: 5 }}>
                  <Text as={"span"}>
                    一級建築士、1級建築施工管理技士、ITストラテジスト、システムアーキテクト、応用情報技術者、日商簿記2級、2級FP技能士、宅地建物取引士
                  </Text>
                </GridItem>
                <GridItem colSpan={{ base: 6, md: 1 }}>
                  <Text as={"span"} fontWeight={"bold"}>
                    得意分野：
                  </Text>
                </GridItem>
                <GridItem colSpan={{ base: 6, md: 5 }}>
                  <Text as={"span"}>
                    建築全般、不動産、マーケティング、Webシステム開発、データサイエンス
                  </Text>
                </GridItem>
                <GridItem colSpan={{ base: 6, md: 1 }}>
                  <Text as={"span"} fontWeight={"bold"}>
                    得意言語・技術：
                  </Text>
                </GridItem>
                <GridItem colSpan={{ base: 6, md: 5 }}>
                  <Text as={"span"}>Python,JavaScript,React,HTML,CSS,GCP</Text>
                </GridItem>
              </Grid>
            </Box>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
