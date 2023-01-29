import Head from 'next/head'
import React from "react";
import {Box} from "@chakra-ui/react";
import Header from "daoRoot/components/Header";
import Hero from "daoRoot/components/Hero";
import CoreCourses from "daoRoot/components/CoreCourses";
import SpecializedCourses from "daoRoot/components/SpecializedCourses";
import {SpecializedTrack} from "daoRoot/components/SpecializedTrack";

export default function Home() {
  return (
    <>
      <Head>
        <title>Panaverse DAO Syllabus</title>
        <meta name="description" content="Panaverse DAO Syllabus"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main>
        <Box textAlign="center" fontSize="xl" scrollBehavior={'smooth'}>
          <Hero/>
          <CoreCourses/>
          {/*<SpecializedCourses/>*/}
          <SpecializedTrack/>
        </Box>
      </main>
    </>
  );
}
