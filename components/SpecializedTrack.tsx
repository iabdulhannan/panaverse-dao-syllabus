import * as React from 'react';
import {
  HStack,
  Text,
  Box,
  Flex,
  Heading,
  useColorModeValue, Button, Container
} from '@chakra-ui/react';
import MetaverseBG from '../assets/images/half-man-wearing-vr-headset-portrait-human-user-social-media-avatar-in-metaverse-world-free-png.webp'
import Image from "next/image";
import Link from "next/link";
export const SpecializedTrack = () => {

  return (
    <Container pt={16} mx={-5} id={'specializedTracks'} minW={'calc(100vw)'} maxW={'max'}
               minH={{base: 'calc(50vh)',md: 'calc(100vh)'}} position={'relative'}
               bgImage={{base: 'none', md: 'linear-gradient(45deg, #e9ecef 25%, rgba(0, 0, 0, 0) 95%)'}}
    >
      <Flex
        direction={{base: 'column', md: 'row'}}
        // backgroundSize="calc(100vh)"
        // backgroundPosition="center right"
        // backgroundRepeat="no-repeat"
        minH={{md: 'calc(100vh)'}}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Flex
          zIndex={1}
          direction="column"
          justifyContent="center"
          maxW="650px"
          minH={'100%'}
          pl={{md:'5'}}
        >
          <Heading
            fontSize={{base: '2xl', sm: '4xl'}}
            lineHeight={1}
            fontWeight="bold"
            textAlign="left"
            as={'h2'}
            mb={5}
          >
            Specialized Track <br/>
          </Heading>
          <Heading
            fontSize={{base: '3xl', sm: '5xl'}}
            lineHeight={1}
            fontWeight="bold"
            textAlign="left"
            as={'h1'}
            mb={5}
          >
            Web 3.0 (Blockchain) and Metaverse <br/>
          </Heading>
          <Text
            fontSize="1.2rem"
            textAlign="justify"
            lineHeight="1.375"
            fontWeight="400"
            color={useColorModeValue('gray.500', 'gray.700')}
            mb={5}
          >
            This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences
            for the next generation of the internet by specializing in building worlds that merge the best of
            cutting-edge decentralized distributed blockchains with 3D Metaverse client experiences.
          </Text>
          <Flex direction={'row'} justifyContent={{base: 'center', md: 'flex-start'}}>
            <Button
              as={Link}
              href={'metaverseCourseDetails#4'}
              h={10}
              px={6}
              color="white"
              variant="solid"
              fontSize="md"
              rounded="md"
              mb={{base: 2, sm: 0}}
              zIndex={5}
              lineHeight={1}
              bg="gray.500"
              _hover={{bg: 'panaverseRed'}}
            >
              Explore
            </Button>
          </Flex>
        </Flex>
        <Box maxH={'calc(100vh)'} px={5} minW={'calc(50vw)'} display={{base: 'none', md: 'block'}}>
          <Image src={MetaverseBG} alt={'Metaverse'} width={'700'}/>
        </Box>
      </Flex>
    </Container>
  );
};
