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
import {specializedTracks} from "daoRoot/assets/data/data";
export const SpecializedTracks = () => {

  return (
    <Container pt={16} mx={-5} id={'specializedTracks'} minW={'calc(100vw)'} maxW={'max'}
               minH={{base: 'calc(50vh)',md: 'calc(100vh)'}} position={'relative'}
               bgImage={{base: 'none', md: 'linear-gradient(45deg, #e9ecef 25%, rgba(0, 0, 0, 0) 95%)'}}
    >

      {
        specializedTracks.map((track, index) => {
          return(
            <Flex
              key={index}
              direction={{base: 'column', md: index % 2 === 0 ? 'row' : "row-reverse"}}
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
                px={{md:'5'}}
              >
                {/*<Heading*/}
                {/*  fontSize={{base: '2xl', sm: '4xl'}}*/}
                {/*  lineHeight={1}*/}
                {/*  fontWeight="bold"*/}
                {/*  textAlign="left"*/}
                {/*  as={'h2'}*/}
                {/*  mb={5}*/}
                {/*>*/}
                {/*  Specialized Track <br/>*/}
                {/*</Heading>*/}
                <Heading
                  fontSize={{base: '3xl', sm: '5xl'}}
                  lineHeight={1}
                  fontWeight="bold"
                  // textAlign={index % 2 === 0 ? 'left' : "right"}
                  textAlign={'center'}
                  as={'h1'}
                  mb={5}
                >
                  {track?.title}
                </Heading>
                <Text
                  fontSize="1.2rem"
                  textAlign={'center'}
                  lineHeight="1.375"
                  fontWeight="400"
                  color={'gray.500'}
                  mb={5}
                  noOfLines={2}
                >
                  {track?.description}
                </Text>
                {/*<Flex direction={'row'} justifyContent={{base: 'center', md: index % 2 === 0 ? 'flex-start' : "flex-end"}}>*/}
                <Flex direction={'row'} justifyContent={{base: 'center'}}>
                  <Button
                    as={Link}
                    href={track.linkTo}
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
                <Image src={track.imageURL} alt={'Metaverse'} width={'700'} height={'700'}/>
              </Box>
            </Flex>
          )
        })
      }

    </Container>
  );
};
