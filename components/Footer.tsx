import {
  Box,
  Stack,
  HStack,
  VStack,
  Link,
  Divider,
  Text,
  Button,
  IconButton,
  LinkProps, Heading, Flex, Center
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import {FaFacebook, FaGithub, FaTwitter, FaYoutube} from 'react-icons/fa';
import {BsDiscord} from 'react-icons/bs';
import LOGO from '../assets/images/panaverseDaoLogoTransparent.png'
import Image from "next/image";

export const Footer = () => {
  return (
    <Box px={5} py={{base: 5, md: 8}} maxW={{base: "calc(100vw)", md: 'calc(95vw)'}} marginInline="auto">
      <Flex
        justifyContent="space-between"
        direction={{base: 'column', md: 'row'}}
        alignItems={'center'}
      >
        <Flex direction={{base: 'column'}}
              justifyContent={{base: 'center', md: 'center'}}
              alignItems={{base: 'center', md: 'flex-start'}}>
          <Center>
            {/*<Link href="https://www.panaverse.co/" isExternal>*/}
            <Image src={LOGO} alt={'LOGO'} width={300}/>
            {/*</Link>*/}
          </Center>
          <Heading
            fontWeight={600}
            pl={{base: 0, md: '16'}}
            fontSize={{base: 'xl', sm: '2xl', md: '2xl'}}
            lineHeight={'110%'}>
            <Text as={'span'} color={'panaverseRed'}>
              Earn&nbsp;
            </Text>
            while you Learn <br/>
          </Heading>
        </Flex>
        <Box maxW={{md: 'calc(50vw)'}} mt={{base: 5, md: 0}}>
          <Heading
            as={'h5'}
            fontSize={{base: 'md'}}
            color={'gray.600'}
          >
            Program
          </Heading>
          <Text color={'gray.500'} textAlign={'justify'} as={'p'}>
            This curriculum is intended for beginners who want to learn software development from the ground up. The
            first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming
            and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that
            includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis
            will be on hands-on learning by educating students to produce projects. To accommodate everyone, courses
            will be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid
            teaching format, with core onsite classes complemented by online Zoom laboratories and recorded videos.
          </Text>
        </Box>

      </Flex>

      <Divider my={4}/>

      <Stack direction={{base: 'column', md: 'row'}} spacing={5} justifyContent="space-between">
        <Text fontSize="md" alignSelf={'center'}>
          Developed by{' '}
          <Link
            href="https://github.com/iabdulhannan"
            textDecoration="underline"
            _hover={{textDecoration: 'underline'}}
            isExternal
          >
            Abdul Hannan
          </Link>
        </Text>
        <Stack spacing={2} direction={{md: 'row'}} display={{base: 'none', md: 'flex'}}>
          <Button leftIcon={<FaFacebook/>} as={Link} href="https://www.facebook.com/groups/panaverse " isExternal
                  rounded="md" bg={'#2a81f2'} color={'#ffffff'}>
            Facebook
          </Button>
          <Button leftIcon={<FaGithub/>} as={Link} href="https://github.com/panaverse" isExternal rounded="md"
                  colorScheme="gray">
            Github
          </Button>
          <Button leftIcon={<FaTwitter/>} as={Link} href="https://twitter.com/Panaverse_edu" isExternal rounded="md"
                  bg={'#1d9bf0'} color={'#ffffff'}>
            Twitter
          </Button>
          <Button leftIcon={<FaYoutube/>} as={Link} href="https://github.com/panaverse" isExternal rounded="md"
                  bg={'#cc0000'} color={'#ffffff'}>
            Youtube
          </Button>
        </Stack>

        <Box display={{base: "flex", md: 'none'}} mt={"10"} justifyContent={'center'}>
          <HStack spacing={4}>
            <IconButton size="md" icon={<FaFacebook/>} as={Link} href="https://www.facebook.com/groups/panaverse "
                        isExternal aria-label="Open Facebook"
                        rounded="full" bg={'#2a81f2'} color={'#ffffff'}>
              Facebook
            </IconButton>
            <IconButton size="md" icon={<FaGithub/>} as={Link} href="https://github.com/panaverse" isExternal
                        rounded="full" aria-label="Open Github"
                        colorScheme="gray">
              Github
            </IconButton>

            <IconButton size="md" icon={<FaTwitter/>} as={Link} href="https://twitter.com/Panaverse_edu" isExternal
                        rounded="full" aria-label="Open Twitter"
                        bg={'#1d9bf0'} color={'#ffffff'}>
              Twitter
            </IconButton>
            <IconButton size="md" icon={<FaYoutube/>} as={Link} href="https://www.youtube.com/@panaverse/streams"
                        isExternal rounded="full" aria-label="Open YouTube"
                        bg={'#cc0000'} color={'#ffffff'}>
              Youtube
            </IconButton>
          </HStack>
        </Box>
      </Stack>
    </Box>
  );
};
