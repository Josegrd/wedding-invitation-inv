import React,{ useState } from 'react';
import { Box, Text, Button, Image, Heading } from '@chakra-ui/react';
import { Fade } from 'react-awesome-reveal';
import { ArrowLeftIcon, ArrowRightIcon } from '../../../assets/icons/Icon';
import FsLightbox from 'fslightbox-react';
import images from '../../../components/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const OpeningSection = () => {
  // const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });
  const [activeIndex, setActiveIndex] = useState(0);


  // const handleNext = () => {
  //   setCurrentSlide((prev) => (prev + 1) % images.length); // Loop back to the first image
  // };

  // const handlePrev = () => {
  //   setCurrentSlide((prev) => (prev - 1 + images.length) % images.length); // Loop to the last image
  // };

  const handleSlideClick = (index: number) => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: index + 1,
    });
  };

  
  return (
    <Box
      id="opening_section"
      color="black"
      padding="50px 0 100px"
      textAlign="center"
      height="100vh"
    >
      <Box
        fontFamily="poppins"
        letterSpacing="2px"
        textTransform="uppercase"
        textAlign="center"
      >
        <Text fontSize="12px">DEAR MR-MRS-MS,</Text>
        <Text fontSize="12px">FAMILY & FRIENDS</Text>
      </Box>
      <Box>
        <Fade duration={1000} direction="up" triggerOnce>
          <Heading
            fontSize="32px"
            padding="24px 0"
            fontFamily="butler_normal"
            fontWeight="500"
          >
            Welcome to
            <br />
            Tiffany & Jared’s
            <br />
            Wedding Website
          </Heading>
        </Fade>
      </Box>
      <Box>
        <Fade duration={1000} direction="up" triggerOnce>
          <Text
            padding="0px 10% 24px"
            fontSize="18px"
            marginBottom="18px"
            fontFamily="newsreader_italic"
          >
            Together with joyful hearts and the grace of God, we joyfully
            announce the upcoming of our marriage.
          </Text>
        </Fade>
      </Box>

      <Box position="relative">
        <Box
          display={'flex'}
          flexFlow={'wrap'}
          boxSizing="border-box"
          justifyContent={'space-between'}
          width={'100%'}
          userSelect={'none'}
          height="400px"
          overflow="hidden"
          maxWidth="840px"
          outline={'none'}
        >            
          <Swiper
          slidesPerView={1.5} 
          centeredSlides={true} 
          loop={true} 
          autoplay={{ delay: 3000, disableOnInteraction: false }}           
          navigation={{
            nextEl: '.next-button', 
            prevEl: '.prev-button', 
          }}
          speed={2000}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          modules={[Pagination, Navigation, Autoplay]}           
          className="mySwiper"
          spaceBetween={0}
        >
          {images.map((src, index) => {            
            return(
            <SwiperSlide key={index} style={{margin: 0, padding: 0}}>
              <Box
                onClick={() => handleSlideClick(index)}
                transform={index === activeIndex ? 'scale(1)' : 'scale(0.9)'}
                transition="transform 3s ease-in-out, opacity 0.5s ease-in-out"
                cursor="pointer"
                height={{ base: '500px', lg: '390px' }}
                width="100%"
                margin={0}
              >
                <Image
                  src={src}
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  borderRadius="2px"
                  alt={`Slide ${index + 1}`}
                />
              </Box>
            </SwiperSlide>
          )})}
        </Swiper>
   
          <Button
            className='next-button'
            type="button"
            position="absolute"
            right="2.5rem"
            bottom="-60px"
            alignSelf="center"
            border="1px solid rgb(26, 27, 29)"
            borderRadius={'0px'}
            cursor="pointer"
            height="30px"
            lineHeight="1"
            textAlign="center"
            width="70px"
            padding="5px 10px"
            // onClick={}
            transform="translateY(-50%)"

          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="100%"
              height="100%"
              fontSize="24px"
            >
              <ArrowLeftIcon />
            </Box>
          </Button>
          <Button
            className='prev-button'
            type="button"
            position="absolute"
            right="120px"
            bottom="-60px"
            alignSelf="center"
            borderRadius={'0px'}
            background="bgSecondary"
            border="1px solid rgb(26, 27, 29)"
            cursor="pointer"
            height="30px"
            lineHeight="1"
            textAlign="center"
            width="70px"
            padding="5px 10px"
            // onClick={handlePrev}
            transform="translateY(-50%)"
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="100%"
              height="100%"
              fontSize="24px"
            >
              <ArrowRightIcon />
            </Box>
          </Button>
        </Box>
        <FsLightbox
          toggler={lightboxController.toggler}
          sources={images}
          slide={lightboxController.slide}
          captions={['', '']}
        />
      </Box>
    </Box>
  );
};

export default OpeningSection;
