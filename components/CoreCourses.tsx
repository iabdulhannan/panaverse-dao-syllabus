import {
  Box,
  Heading,
  Container,
  Stack,
  Flex,
  Text,
  VStack
} from '@chakra-ui/react';
import CourseCard from "daoRoot/components/CourseCard";
import React from "react";
import {coreCoursesCards} from "daoRoot/assets/data/data";

export default function CoreCourses() {
  return (
    <Container id={'coreCourses'} maxW={'calc(100vw)'} minH={{md: 'calc(100vh)'}}>
      <Stack
        textAlign={'center'}
        spacing={{base: 8}}
        pt={'20'}
      >
        <Heading
          fontWeight={600}
          fontSize={{base: '2xl', md: '4xl'}}>
          <Text as={'span'} color={'panaverseRed'}>
            Core&nbsp;
          </Text>
          Courses
        </Heading>
        {/*Courses*/}
        <Flex direction={'row'} flexWrap={'wrap'} justifyContent={'center'}>
          {
            coreCoursesCards.map((course, index) => {
              return (
                // <CourseCard key={index} title={course.title} image={course.image} description={course.description}
                //             linkTo={course.linkTo} isCore={course.isCore}/>
                <CourseCard key={index} {...course}/>
              )
            })
          }

        </Flex>
      </Stack>
    </Container>
  );
}

