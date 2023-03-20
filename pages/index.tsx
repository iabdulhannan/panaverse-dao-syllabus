import Head from 'next/head'
import React from "react";
import {Box} from "@chakra-ui/react";
import Hero from "daoRoot/components/Hero";
import CoreCourses from "daoRoot/components/CoreCourses";
import {SpecializedTracks} from "daoRoot/components/SpecializedTracks";

export default function Home() {
  return (
    <>
      <Head>
        <title>Panaverse DAO Syllabus</title>
        <meta name="description" content="Panaverse DAO Syllabus"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" type="image/x-icon" href={'/favicon.ico'}/>
      </Head>
      <main>
        <Box textAlign="center" fontSize="xl" scrollBehavior={'smooth'}>
          <Hero/>
          <CoreCourses/>
          <SpecializedTracks/>
        </Box>
      </main>
    </>
  );
}
// http://localhost:3000/courseDetails/1
