import {
    Flex,
    Box,
    Image,
    Icon,
    IconProps,
    useColorModeValue,
  } from '@chakra-ui/react';

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CallToTopImage() {
    return (
        <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            <Blob
            w={'150%'}
            h={'150%'}
            position={'absolute'}
            top={'-20%'}
            left={0}
            zIndex={-1}
            color={useColorModeValue('blue.50', 'blue.400')}
            />
            <Box
              position={'relative'}
              height={'300px'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}>
              <ImageSlider />
            </Box>
        </Flex>
  );
}

const Blob = (props: IconProps) => {
    return (
        <Icon
        width={'100%'}
        viewBox="0 0 578 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
            fill="currentColor"
        />
        </Icon>
    );
};

const ImageSlider = () => {
    const slides: Array<{image: string}> = [
        {image: "carousel_1.jpg"},
        {image: "carousel_2.jpg"},
        {image: "carousel_3.jpg"},
        {image: "carousel_4.jpg"},
        {image: "carousel_5.jpg"},
    ]
    return (
      <Carousel
        infiniteLoop
        interval={5000}
        // transitionTime={5000}
        autoPlay={true}
        showThumbs={false}
    >
        {slides.map((slide) => {
          return <Image
          alt={'Top Image'}
          fit={'cover'}
          align={'center'}
          width={'full'}
          height={'300px'}
          src={`${process.env.PUBLIC_URL}/img/carousel/${slide.image}`}
          key={slide.image}
      /> ;
        })}
      </Carousel>
    );
  };
