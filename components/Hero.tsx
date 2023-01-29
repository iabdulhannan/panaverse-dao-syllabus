import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  createIcon, Center,
} from '@chakra-ui/react';
import Link from "next/link";
import HomeBg from "../assets/images/homebg.webp";

export default function Hero() {
  return (
    <>
      <Container position={'relative'} maxW={'3xl'} h={'calc(100vh)'} justifyContent={'center'}
                 alignItems={"center"}>
        <Center h={'full'}>

          <Stack
            as={Box}
            textAlign={'center'}
            spacing={{base: 8, md: 14}}
            py={{base: 20, md: 36}}
          >
            <Heading
              fontWeight={600}
              fontSize={{base: '3xl', sm: '4xl', md: '6xl'}}
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

