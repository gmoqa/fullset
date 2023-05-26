import { Box, Button, HStack, Spacer, Text } from '@chakra-ui/react'

export const Navbar = () => {
    return (
        <Box bgColor={'#0C0F0A'} >
            <Box p={4}>
                <HStack>
                    <Text color={'yellow.400'} fontWeight={'extrabold'} fontSize={'3xl'}>#fullset.cl</Text>
                    <Spacer />
                    <HStack spacing="3">
                        <Button>Ingresar</Button>
                        <Button variant="primary" color={'yellow.400'}>Registrar</Button>
                    </HStack>
                </HStack>
            </Box>
        </Box>
    )
}
