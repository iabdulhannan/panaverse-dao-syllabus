import {
  chakra,
  Box,
  Stack,
  Text,
  Container,
  Button,
  ButtonProps,
  useColorModeValue, Heading, Collapse, Flex, Badge
} from '@chakra-ui/react';
import React, {PropsWithChildren, useState} from 'react';
import {CourseCardType} from "daoRoot/assets/types/types";
import Link from "next/link";
import Image from "next/image";


const CourseCard = (props: CourseCardType) => {
  const [show, setShow] = useState(false)

  const handleToggle = () => setShow(!show)
  return (
    <Container py={{base: 5, md: 5}} maxW={props.isCore ? {base: 'md', md: 'md'} : {base: 'sm', md: 'xs'}}>
      <Box
        cursor={'pointer'}
        borderWidth="1px"
        _hover={{shadow: 'lg', scale: '75', borderColor: 'gray.300'}}
        rounded="md"
        overflow="hidden"
        bg={useColorModeValue('white', 'gray.800')}
      >
        <Image src={props.image} alt={''}
          width="500"
          height="500"
        />
        <Box p={{base: 3, sm: 5}}>
          <Box mb={6}>
            <Flex style={{
              minHeight: 90
            }} alignItems={'center'} direction={'row'}>
              <Heading
                as={'h3'}
                fontSize={{base: 'xl', sm: '2xl'}}
                fontWeight="bold"
                lineHeight="1.2"
                mb={2}
                noOfLines={3}
              >
                {props.title}
              </Heading>
            </Flex>
            <Box fontSize={{base: 'lg'}} textAlign={'justify'} cursor={'pointer'}>
              <Collapse startingHeight={110} in={show} onClick={handleToggle}>
                {props.description}
              </Collapse>
            </Box>
          </Box>
          <Stack
            justify="flex-end"
            direction={{base: 'column', sm: 'row'}}
            spacing={{base: 2, sm: 0}}
          >
            <Link href={`${props.linkTo}`}>
              <Button textTransform="uppercase" lineHeight="inherit" rounded="md" bg={'white'} borderWidth={1} w={150}
                      fontWeight={400}
                      _hover={{bg: 'transparent', borderColor: 'panaverseRed', fontWeight: 700}}
              >
                Learn More
              </Button>
            </Link>

          </Stack>
        </Box>
      </Box>
    </Container>
  );
};


export default CourseCard;

CourseCard.defaulProps = {
  isCore: false
}
