import { Flex, Image, Text } from "@chakra-ui/react";


export default function Card({ pokemon, loading,infoPokemon }: any) {
    
    return (
        <>
            {loading ? <Text>Loading...</Text> :
                pokemon.map((item: any) => {
                    return (
                        <>
                            <Flex
                                key={item.id}
                                onClick={() => infoPokemon(item)}
                                w='300px'
                                backgroundColor='#9EDEF9'
                                borderRadius='1rem'
                                boxShadow='0 5px 5px rgba(0,0,0,0.5)'
                                p='0 1.5rem'
                                alignItems='center'
                                justifyContent='space-between'
                                boxSizing="border-box"
                            >
                                <Text>{item.id}</Text>
                                <Image boxSize='4rem' margin={5} src={item.sprites.front_default} alt='Dan Abramov' />
                                <Text>{item.name}</Text>
                            </Flex>
                        </>
                    )
                })
            }

        </>
    )
}