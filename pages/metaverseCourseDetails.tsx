import React, {useState} from 'react';
import {
  Box,
  chakra,
  Container,
  Text,
  HStack,
  VStack,
  Flex,
  useColorModeValue,
  useBreakpointValue,
  Heading,
  Collapse, Divider, Button, Badge, Tag, TagLabel
} from '@chakra-ui/react';
import {useRouter} from 'next/router';
import Head from "next/head";
import {DottedSeparator} from "daoRoot/components/DottedSeparator";
import {metaverseCourseDetails} from "daoRoot/assets/data/data";

const milestones = [
  {
    id: 1,
    date: 'MARCH 30, 2022',
    title: 'Chakra Hackathon',
    description: `Winner of first ever ChakraUI Hackathon. On sait depuis longtemps que travailler avec du texte lisible et contenant du sens.`
  },
  {
    id: 2,
    date: 'July 30, 2021',
    title: 'Open Source, first contribution',
    description: `Fixing a typo, to fix a bug, contributing to Open Source and collaborating to improve technology for everyone, Ahmad's world changed again!.`
  },
  {
    id: 3,
    date: 'July 30, 2018',
    title: 'Freelancing, started working for myself',
    description:
      'Ahmad starts his own business consulting for companies as a fullstack developer. Clients include UK Government departments, UK banks, global fintechs and startups.'
  }
];

interface CardProps {
  id: number;
  title: string;
  description: string;
  date: string;
}

const CourseDetails = () => {
  const isMobile = useBreakpointValue({base: true, md: false});
  const isDesktop = useBreakpointValue({base: false, md: true});

  return (
    <>
      <Head>
        <title>Web 3.0 and Metaverse Program Details</title>
        <meta name="description" content="Web 3.0 and Metaverse Program Details"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Container maxWidth="7xl" px={{base: 2, sm: 10}} py={{base: 8, sm: 10}} scrollMarginTop={16}>
        <Heading as={'h3'} fontSize={{base: '2xl', md: '4xl'}} fontWeight="bold" mb={18} textAlign="center">
          Details of Web 3.0 and Metaverse Development Program
        </Heading>
        {metaverseCourseDetails.map((detail, index) => (
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

const Card = ({duration, quarterNumber, title, isCore, syllabus}) => {
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
        id={quarterNumber}
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
        <Box>
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
        <Text noOfLines={!show && 2}>
          {description}
        </Text>
      </Collapse>
    </Box>
  );
};

export default CourseDetails
