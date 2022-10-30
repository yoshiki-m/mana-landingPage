import {
    Container,
    SimpleGrid,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactElement } from 'react';

  import CallToVideoBox from '../atom/video_box'

  interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
  }
  
  const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  type feature_props = {
    text: string,
    color: string,
    bg_color1: string
    bg_color2: string
  }
  type Props = {
    button_text: string,
    id: string,
    main_text: string
    explanation: string
    feature_1_icon: any;
    feature_1_detail: feature_props,
    feature_2_icon: any;
    feature_2_detail: feature_props,
    feature_3_icon: any;
    feature_3_detail: feature_props,
    src: string,
    title: string
  }
  
  export default function SplitWithImage(props: Props) {
    return (
      <Container maxW={'6xl'} py={5}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'blue.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('blue.50', 'blue.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}
              id={props.id}>
              {props.button_text}
            </Text>
            <Heading>{props.main_text}</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
              {props.explanation}
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
              <Feature
                icon={
                  <Icon as={props.feature_1_icon} color={props.feature_1_detail.color} w={5} h={5} />
                }
                iconBg={useColorModeValue(props.feature_1_detail.bg_color1, props.feature_1_detail.bg_color2)}
                text={props.feature_1_detail.text}
              />
              <Feature
                icon={
                  <Icon as={props.feature_2_icon} color={props.feature_2_detail.color} w={5} h={5} />
                }
                iconBg={useColorModeValue(props.feature_2_detail.bg_color1, props.feature_2_detail.bg_color2)}
                text={props.feature_2_detail.text}
              />
              <Feature
                icon={
                  <Icon as={props.feature_3_icon} color={props.feature_3_detail.color} w={5} h={5} />
                }
                iconBg={useColorModeValue(props.feature_3_detail.bg_color1, props.feature_3_detail.bg_color2)}
                text={props.feature_3_detail.text}
              />
            </Stack>
          </Stack>
          <Flex>
            <CallToVideoBox
              src={props.src}
              title={props.title}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    );
  }