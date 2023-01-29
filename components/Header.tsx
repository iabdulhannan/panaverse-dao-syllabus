import React from 'react';
import {
  Link,
  Box,
  Flex,
  Stack,
  HStack,
  Heading,
  Container,
  Icon,
  Text,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Accordion,
  AccordionButton,
  AccordionPanel, AccordionItem, AccordionIcon, Divider
} from '@chakra-ui/react';
import DropDownMenu from './DropdownMenu';
// Here we have used react-icons package for the icons
import {GoChevronLeft, GoChevronRight} from 'react-icons/go';
import {FaGithub} from 'react-icons/fa';
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';
import Image from "next/image";
import LOGO from "daoRoot/assets/images/panaverseDaoLogoTransparent.png"
import LOGOIcon from "daoRoot/assets/images/panaverseDaoLogoIcon.png"
import {dropdownData} from "daoRoot/assets/data/data";

const GITHUB_REPO_LINK = 'https://github.com/MA-Ahmad/templateskart';


export default function Header() {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const text = useColorModeValue('gray.100', 'gray.900')

  return (
    <>
    <Box
      as="header"
      bg={useColorModeValue('white', 'gray.800')}
      px={4}
      boxShadow={useColorModeValue(
        '0 4px 6px rgba(160, 174, 192, 0.6)',
        '0 4px 6px rgba(9, 17, 28, 0.9)'
      )}
      position="fixed"
      width="100%"
      zIndex="55"
      top="0"
    >
      <Container maxW="calc(95vw)" p={{base: 0, md: 'inherit'}}>
        <Flex h={"16"} alignItems="center" justifyContent="space-between" mx="auto">
          <HStack alignItems="center" justifyContent={"space-between"} minW={'100%'}>
            {/*On Mobile*/}
            <IconButton
              size="md"
              icon={isOpen ? <AiOutlineClose/> : <GiHamburgerMenu/>}
              aria-label="Open Menu"
              display={{base: 'inherit', md: 'none'}}
              onClick={isOpen ? onClose : onOpen}
              bg={'transparent'}
            />

            <Link href="./" marginRight={"80"}>
              <Box cursor="pointer">
                <Image src={LOGO} width={150} height={100}
                       alt={'Panaverse Logo (Full)'}/>
              </Box>
            </Link>
            <HStack spacing={5}>
              {
                dropdownData.map((data, index) => {
                  return (
                    <DropDownMenu key={index} {...data}/>
                    // <DropDownMenu menuData={data}/>
                  )
                })
              }
            </HStack>

            <Link href={GITHUB_REPO_LINK} isExternal>
              <Flex
                as="button"
                p="0.6rem"
                cursor="pointer"
                _hover={{bg: useColorModeValue('gray.300', 'gray.600')}}
                justify="center"
              >
                <Icon as={FaGithub} color={'#000000'} fontSize={{base: 'xl', md: '3xl'}}/>
              </Flex>
            </Link>
          </HStack>
        </Flex>
      </Container>

      {isOpen ? (
        <Box pb={4} display={{base: 'inherit', sm: 'none'}}>
          <Accordion allowToggle>
            {
              dropdownData.map((data, index) => {
                return (
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Text as="h6" fontWeight={'600'} flex={1} textAlign='left'>
                          {data.title}
                        </Text>
                        <AccordionIcon/>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      {
                        data.items.map((item, index) => {
                          return (
                            <>
                              <Flex alignItems={"center"} key={index} px={2} py={3} rounded={'md'} borderBottomWidth={index === data.items.length -1 ? 0 : 1}>
                                <Link
                                  href={item.linkTo}
                                  onClick={() => onClose()}
                                >
                                  <Text noOfLines={2}>
                                    {item.courseName}
                                  </Text>
                                </Link>
                              </Flex>
                            </>
                          )
                        })
                      }
          </AccordionPanel>
        </AccordionItem>
      )
      })
      }
    </Accordion>
    {/*<Stack as="nav" spacing={1}>*/}
    {/*  {dropdownData.map((data, index) => (*/}
    {/*    <Link*/}
    {/*      key={index}*/}
    {/*      href={'#'}*/}
    {/*      px={3}*/}
    {/*      py={1}*/}
    {/*      lineHeight="inherit"*/}
    {/*      rounded="md"*/}
    {/*      _hover={{*/}
    {/*        textDecoration: 'none',*/}
    {/*        bg: text*/}
    {/*      }}*/}
    {/*      onClick={() => onClose()}*/}
    {/*    >*/}
    {/*      {data.title}*/}
    {/*    </Link>*/}
    {/*  ))}*/}
    {/*</Stack>*/}
    </Box>
  )
:
  null
}
</Box>
</>
)
  ;
}
