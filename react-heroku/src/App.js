import logo from './logo.svg';
import './App.css';
import Image1 from './main.jpg'
import Image2 from './pizzaWallpaper.jpg'
import {ChakraProvider, Box, Image, Badge, Heading, Text } from '@chakra-ui/react'
function App() {

  const store1 = {
    imageUrl: Image1,
    imageAlt: Image1,
    atribute1: 'reserva',
    badge: 'Novo',
    atribute2: 'Horário 12H as 15H',
    title: 'Parque das nações',
    morada: 'Alameda dos Oceanos 98 A, 1990-228 Lisboa',
}
const store2 = {
    imageUrl: Image2,
    imageAlt: Image2,
    badge: 'Esplanada',
    atribute1: 'Reserva',
    atribute2: 'Horário 12H as 00H',
    title: 'Belém',
    morada: 'Rua de Belém, 116/118, 1300-086 Lisboa',
}

const stores = [store1, store2]
  return (
    <ChakraProvider>
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
                {stores.map((store) => {
                    return (
                        <>
                            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' marginRight='50px'>
                                <Image src={store.imageUrl} alt={store.alt} />
                                <Box p='6'>
                                    <Box display='flex' alignItems='baseline'>
                                        <Badge borderRadius='full' px='2' colorScheme='teal'>
                                            {store.badge}
                                        </Badge>
                                        <Box marginLeft='5px' color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase'>
                                            {store.atribute1} &bull; {store.atribute2}
                                        </Box>
                                    </Box>
                                    <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' noOfLines={1}>
                                        {store.title}
                                    </Box>

                                    <Box>
                                        {store.morada}
                                    </Box>

                                </Box>
                            </Box>
                        </>
                    )
                }
                )}
            </Box>
        </div>
    </ChakraProvider>
  );
}

export default App;
