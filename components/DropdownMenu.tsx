import {
  Stack,
  Box,
  Popover,
  Link,
  Text,
  Icon,
  HStack,
  PopoverTrigger,
  PopoverContent,
  useDisclosure,
  useColorModeValue, VStack
} from '@chakra-ui/react';
import {DropdownData} from 'daoRoot/assets/types/types';
import {FaChevronDown} from 'react-icons/fa';


const DropDownMenu = (props: DropdownData) => {
  const panaverseRed = useColorModeValue('panaverseRed', 'panaverseRed');
  const {onOpen, onClose, isOpen} = useDisclosure();

  return (
    <Stack direction="row" spacing={4} display={{base: 'none', md: 'flex'}}>
      <Popover trigger="hover" placement="bottom-start" onOpen={onOpen} onClose={onClose}>
        <PopoverTrigger>
          <HStack alignItems="center" cursor="pointer" role="group">
            <Link
              href="#"
              p={2}
              fontSize={{sm: 'md', md: 'lg'}}
              fontWeight="bold"
              color={useColorModeValue('gray.600', 'gray.200')}
              // _groupHover={{
              //   color: panaverseRed
              // }}
            >
              {props.title}
            </Link>
            <Icon
              as={FaChevronDown}
              h={4}
              w={4}
              // _groupHover={{
              //   color: panaverseRed
              // }}
              transition="all .25s ease-in-out"
              transform={isOpen ? 'rotate(180deg)' : ''}
            />
          </HStack>
        </PopoverTrigger>

        <PopoverContent
          border={0}
          boxShadow={useColorModeValue(
            '2px 4px 6px rgba(160, 174, 192, 0.6)',
            '0 4px 6px rgba(9, 17, 28, 0.9)'
          )}
          bg={useColorModeValue('white', 'gray.800')}
          p={4}
          rounded="lg"
          minW="md"
        >
          <Stack>
            {props?.items.map((data: any, index: number) => (
              <DropDownItem key={index} {...data} />
            ))}
          </Stack>
        </PopoverContent>
      </Popover>
    </Stack>
  );
};

const DropDownItem = ({courseName, linkTo, subtitle}:{courseName:string, linkTo:string, subtitle:string}) => {
  return (
    <Link
      href={linkTo}
      display="block"
      p={2}
      rounded="md"
      _hover={{bg: useColorModeValue('gray.100', 'gray.900')}}
    >
      <Stack direction="row" align="center">
        <VStack spacing={2}>
          <Text noOfLines={2} textAlign={'left'}  fontWeight={500}>{courseName}</Text>
          <Text fontSize="sm" textAlign={'left'}>{subtitle}</Text>
        </VStack>
      </Stack>
    </Link>
  );
};

export default DropDownMenu;
