import {
  Box,
  Heading,
  Container,
  Stack,
  Flex, Text,
} from '@chakra-ui/react';
import React from "react";

export default function SpecializedCourses() {
  return (

    <Container id={'specializedCourses'} maxW={'max'} minH={{md: 'calc(100vh)'}}>
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{base: 8}}
        pt={'20'}
      >
        <Heading
          fontWeight={600}
          fontSize={{base: '2xl', md: '4xl'}}>
          <Text as={'span'} color={'panaverseRed'}>
            Specialized&nbsp;
          </Text>
          Tracks
        </Heading>
        {/*Courses*/}
        {/*<Flex direction={'row'} flexWrap={'wrap'} justifyContent={'space-around'}>*/}
        {/*  {*/}
        {/*    specializedTracks.map((track, index) => {*/}
        {/*      return (*/}
        {/*        <CourseCard key={index} title={track.title} image={track.image} description={track.description}*/}
        {/*                    linkTo={track.linkTo}/>*/}
        {/*      )*/}
        {/*    })*/}
        {/*  }*/}

        {/*</Flex>*/}
      </Stack>
    </Container>
  );
}

