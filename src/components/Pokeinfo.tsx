import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function Pokeinfo({ data }: any) {
    return (
        <>
            {
                (!data) ? "Click no Card pra ver as Habilidade do Pokemon" : (
                    <>
                        <Text key={data.id} textTransform='uppercase' fontWeight='bold' letterSpacing='1px'>{data.name}</Text>
                        <Box display='flex' alignItems='center' justifyContent='center'>
                            <Image key={data.id} m='2rem' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt='Dan Abramov' />
                        </Box>

                        <Flex w='30%' margin='auto' justifyContent='space-around' alignItems='center' marginTop='1rem'>
                            {
                                data.abilities.map((poke: any) => {
                                    return (
                                        <>
                                            <Box backgroundColor='#b74555' color='white' p='0.5rem' fontSize='12px' borderRadius='8px'>
                                                <Text key={poke.id} fontSize={15}>{poke.ability.name}</Text>
                                            </Box>
                                        </>
                                    )
                                })
                            }
                        </Flex>
                        <Box marginTop='2rem'>
                            {
                                data.stats.map((poke: any) => {
                                    return (
                                        <>
                                            <Text key={poke.id}>{poke.stat.name} : {poke.base_stat}</Text>
                                        </>
                                    )
                                })
                            }
                        </Box>
                    </>
                )
            }

        </>
    )
}