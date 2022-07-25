import * as React from 'react'
import Image1 from './main.jpg'
import Image2 from './pizzaWallpaper.jpg'
import {ChakraProvider, Box, Image, Heading, Text,Link } from '@chakra-ui/react'

function App() {

  return (
    
    <div className="App">
            <Heading
                textAlign={'center'}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', md: '5xl' }}
                marginBottom={50}>
                Food-Delivery <br />
                <Text fontSize={{ base: '2xl', sm: '4xl', md: '2xl' }} as={'span'} color={'blue.400'}>
                    Escolha a loja
                </Text>
            </Heading>
            <Box display='flex'>
                        <Link href='https://ps-burger.herokuapp.com/'>
                            <Box cursor='pointer' maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' marginRight='50px'>
                                <Image src={Image1} alt={Image1} />
                                <Box p='6'>
                                    <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' noOfLines={1}>
                                        Good Burger
                                    </Box>
                                </Box>
                            </Box>
                            </Link>

                            <Link href='https://fast-pizza-client.herokuapp.com/'>
                            <Box cursor='pointer' maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' marginRight='50px'>
                                <Image src={Image2} alt={Image2} />
                                <Box p='6'>
                                    <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' noOfLines={1}>
                                        Fast Pizza
                                    </Box>
                                </Box>
                            </Box>
                            </Link>
            </Box>
        </div>
  );
}

export default App;
