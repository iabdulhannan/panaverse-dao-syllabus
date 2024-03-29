import React from 'react';
import {
  Link,
  Box,
  Flex,
  HStack,
  Container,
  Icon,
  Text,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Accordion,
  AccordionButton,
  AccordionPanel, AccordionItem, AccordionIcon
} from '@chakra-ui/react';
import DropDownMenu from './DropdownMenu';
import {FaGithub} from 'react-icons/fa';
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';
import Image from "next/image";
import LOGO from "daoRoot/assets/images/panaverseDaoLogoTransparent.png"
import {dropdownData} from "daoRoot/assets/data/data";
import {useRouter} from "next/router";

const GITHUB_REPO_LINK = 'https://github.com/iabdulhannan/panaverse-dao-syllabus';

export default function Header() {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const router = useRouter();

  return (
    <>
      <Box
        as="header"
        bg={'white'}
        px={4}
        boxShadow={'0 4px 6px rgba(160, 174, 192, 0.6)'}
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

              <Link onClick={()=> router.push('/')} marginRight={"80"}>
                <Box cursor="pointer">
                  <Image src={LOGO} width={150} height={100}
                         alt={'Panaverse Logo (Full)'}/>
                </Box>
              </Link>
              <Flex dir={'row'} justifyContent={'space-evenly'} alignItems={'center'} display={{base: 'none', md: 'flex'}} minWidth={"40%"}>
                {
                  dropdownData.map((data, index) => {
                    return (
                      <DropDownMenu key={index} {...data}/>
                    )
                  })
                }
              </Flex>

              <Link href={GITHUB_REPO_LINK} isExternal>
                <Flex
                  as="button"
                  p="0.6rem"
                  cursor="pointer" rounded={'full'}
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
                      <AccordionItem key={index}>
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
                                  <Flex alignItems={"center"} key={index} px={2} py={3} rounded={'md'}
                                        borderBottomWidth={index === data.items.length - 1 ? 0 : 1}>
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
