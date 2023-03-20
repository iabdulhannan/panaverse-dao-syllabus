import React, {useEffect, useState} from 'react';
import {
  Box,
  Container,
  Text,
  HStack,
  VStack,
  Flex,
  useColorModeValue,
  useBreakpointValue,
  Heading,
  Collapse, Divider, Button, Tag, TagLabel
} from '@chakra-ui/react';
import Head from "next/head";
import {DottedSeparator} from "daoRoot/components/DottedSeparator";
import {dropdownData, metaverseCourseDetails, programDetail} from "daoRoot/assets/data/data";
import {CourseQuarter, ProgramDetailType} from "daoRoot/assets/types/types";
import {router} from "next/client";
import {useRouter} from "next/router";


const CourseDetails = ({programQuarters}: { programQuarters: ProgramDetailType }) => {
  const isMobile = useBreakpointValue({base: true, md: false});
  const isDesktop = useBreakpointValue({base: false, md: true});
  const router = useRouter();
  const {courseID} = router.query;
  const [program] = useState<ProgramDetailType>(programQuarters);

  // useEffect(() => {
  //   console.log("programQuarters", programQuarters)
  // }, []);

  // useEffect(() => {
  //   // console.log('Course ID: ', courseID)
  //   if (courseID) {
  //     const programQuarters = programDetail.find((item) => item.id.toString() === courseID.toString())
  //     // alert(JSON.stringify(programQuarters))
  //     setProgram(programQuarters)
  //   }
  // }, [courseID]);


  return (
    <>
      <Head>
        <title>{program?.title}</title>
        <meta name="description" content={program?.title}/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Container maxWidth="7xl" px={{base: 2, sm: 10}} py={{base: 8, sm: 10}} scrollMarginTop={16}>
        <Box mb={5}>
          <Heading as={'h3'} fontSize={{base: '2xl', md: '4xl'}} fontWeight="bold" mb={18} textAlign="center">
            {program?.title}
          </Heading>
          <Text color={'gray.600'} textAlign={{base: 'justify', md: 'center'}} fontWeight={'thin'}>
            {program?.description}
          </Text>
        </Box>
        {program?.quarters.map((detail, index) => (
          <Flex key={index} mb="10px">
            {/* Desktop view(left card) */}
            {isDesktop && detail.quarterNumber % 2 === 0 && (
              <>
                <DetailCard description={detail.description}/>
                <DottedSeparator/>
                <Card {...detail} />
              </>
            )}

            {/* Mobile view */}
            {isMobile && (
              <>
                <DottedSeparator/>
                <Card {...detail} />
              </>
            )}

            {/* Desktop view(right card) */}
            {isDesktop && detail.quarterNumber % 2 !== 0 && (
              <>
                <Card {...detail} />
                <DottedSeparator/>
                <DetailCard description={detail.description}/>
              </>
            )}
          </Flex>
        ))}
      </Container>
    </>
  );
};

const Card = ({duration, quarterNumber, title, isCore, syllabus}: CourseQuarter) => {
    const isEvenId = quarterNumber % 2 == 0;
    let borderWidthValue = isEvenId ? '15px 15px 15px 0' : '15px 0 15px 15px';
    let leftValue = isEvenId ? '-15px' : 'unset';
    let rightValue = isEvenId ? 'unset' : '-15px';
    const [show, setShow] = useState(false)
    const handleToggle = () => setShow(!show);

    const isMobile = useBreakpointValue({base: true, md: false});
    if (isMobile) {
      leftValue = '-15px';
      rightValue = 'unset';
      borderWidthValue = '15px 15px 15px 0';
    }

    return (
      <HStack
        id={quarterNumber.toString()}
        flex={1}
        p={{base: 3, sm: 6}}
        bg={useColorModeValue('gray.50', 'gray.800')}
        spacing={5}
        rounded="lg"
        alignItems="center"
        // pos="relative"
        _before={{
          content: `""`,
          w: '0',
          h: '0',
          borderColor: `transparent ${useColorModeValue('#f7fafc', '#1a202c')} transparent`,
          borderStyle: 'solid',
          borderWidth: borderWidthValue,
          position: 'absolute',
          left: leftValue,
          right: rightValue,
          display: 'block'
        }}
      >
        <Box w={'full'}>
          <Flex flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <Text fontSize="lg" color={'panaverseRed'}>
              {duration}
            </Text>

            {
              isCore ?
                (
                  <Tag size='lg' colorScheme='red' borderRadius='full'>
                    <TagLabel>Core</TagLabel>
                  </Tag>
                )
                :
                (
                  <Tag
                    size='lg' borderRadius='full'
                    variant='subtle'
                    colorScheme='green'
                  >
                    <TagLabel>Specialization</TagLabel>
                  </Tag>
                )
            }
          </Flex>
          <VStack spacing={4} mb={3} textAlign="left">

            <Heading as={'h1'} fontSize="2xl" lineHeight={1.2} fontWeight="bold" w="100%">
              {title}
            </Heading>
            <Box w={'100%'}>

              <Button onClick={handleToggle} textTransform="uppercase" bg={'transparent'} lineHeight="inherit"
                      rounded="md" borderWidth={1}
                      w={150}
                      fontWeight={400} fontSize={'sm'}
                      _hover={{borderColor: 'panaverseRed', fontWeight: 700}}
              >
                Check Syllabus
              </Button>
              <Collapse startingHeight={0} in={show} onClick={handleToggle}>
                <VStack spacing={2} divider={<Divider my={1}/>} p={5}>

                  {
                    syllabus.map((item, index) => {
                      return (
                        <Text key={index} w={'100%'} textAlign={'left'}>{item.title}</Text>
                      )
                    })
                  }
                </VStack>
              </Collapse>
            </Box>
          </VStack>
        </Box>
      </HStack>
    );
  }
;


const DetailCard = ({description}: { description: string }) => {
  const [show, setShow] = useState(false)

  const handleToggle = () => setShow(!show);

  return (
    <Box flex={{base: 0, md: 1}} p={{base: 0, md: 6}} bg="transparent" cursor={'pointer'}>
      <Collapse startingHeight={50} in={show} onClick={handleToggle}>
        <Text noOfLines={show ? 50 : 2}>
          {description}
        </Text>
      </Collapse>
    </Box>
  );
};


export async function getStaticPaths() {


  const paths = dropdownData[1].items.map(course => {
    return {
      params: {
        courseID: `${course.id}`
      }
    }
  })
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(context: any) {
  // console.log("Context Params: ", context.params.courseID)
  const courseID = context.params.courseID;
  let programQuarters = null;
  if (courseID) {
    programQuarters = programDetail.find((item) => item.id.toString() === courseID.toString())

  }
  return {
    props: {
      programQuarters
    }, // will be passed to the page component as props
  }
}


export default CourseDetails
