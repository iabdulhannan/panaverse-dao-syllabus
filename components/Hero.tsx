import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Center,
} from '@chakra-ui/react';
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <Container position={'relative'} maxW={'100%'} h={'calc(100vh)'} justifyContent={'center'}
                 alignItems={"center"}
                 backgroundPosition="center"
                 backgroundRepeat="no-repeat"
                 backgroundSize="contain"
                 backgroundImage={{md: `url(/heroBG.png)`}}
      >
        <Center h={'full'}>

          <Stack
            maxW={{base: '3xl', md: '65%', lg: '3xl'}}
            as={Box}
            textAlign={'center'}
            spacing={{base: 8, md: 14}}
            py={{base: 20, md: 36}}
          >
            <Heading
              fontWeight={600}
              fontSize={{base: '3xl', sm: '4xl', md: '5xl', lg: '6xl'}}
              lineHeight={'110%'}>
              <Text as={'span'} color={'panaverseRed'}>
                Earn&nbsp;
              </Text>
              while you Learn <br/>
            </Heading>
            <Text color={'gray.500'} textAlign={{base: 'center'}}>
              Learn how to make money and boost exports in within a short time span of 6 months from the start of
              program,
              resembling a cross between a corporate venture and an educational project.
            </Text>
            <Stack
              direction={'column'}
              spacing={3}
              align={'center'}
              alignSelf={'center'}
              position={'relative'}>
              <Link href={'#coreCourses'}>
                <Button
                  colorScheme={'green'}
                  bg={'gray.500'}
                  rounded={'full'}
                  px={6}
                  _hover={{
                    bg: 'panaverseRed',
                  }}>
                  Explore
                </Button>
              </Link>

            </Stack>
          </Stack>
        </Center>
      </Container>
    </>
  );
}

