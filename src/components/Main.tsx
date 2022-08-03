import { Box, Grid, Flex, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Card from '../components/Card'
import Pokeinfo from '../components/Pokeinfo'
import axios from "axios";

export default function Main() {
    const [pokeData, setPokeData] = useState([])
    const [loading, setLoading] = useState(true)
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
    const [nextUrl, setNextUrl] = useState()
    const [prevUrl, setPrevUrl] = useState()
    const [pokeDax, setPokeDax] = useState()

    const pokeFun = async () => {
        setLoading(true)

        const response = await axios.get(url)
        setNextUrl(response.data.next)
        setPrevUrl(response.data.previous)
        getPokemon(response.data.results)
        setLoading(false)

    }
    const getPokemon = async (response: any) => {
        response.map(async (item: any) => {
            const result = await axios.get(item.url)
            setPokeData(state => {
                state = [...state, result.data]
                state.sort((a, b) => a.id > b.id ? 1 : -1)
                return state
            })
        })
    }
    useEffect(() => {
        pokeFun()
    }, [url]);
    return (
        <>
            <Flex w='90%' margin='auto' paddingTop='100px'>
                <Grid templateColumns='repeat(2, 1fr)' gridGap={6}>
                    <Card pokemon={pokeData} loading={loading} infoPokemon={(poke: any) => setPokeDax(poke)} />

                    <Flex>
                        {prevUrl && <Button w='150px' p='0.3rem 0' m='1rem' fontSize='17px' fontWeight='bold' color='white' bg='#b74555' onClick={() => {
                            setPokeData([])
                            setUrl(prevUrl)
                        }}>Previous</Button>}
                        {nextUrl && <Button w='150px' p='0.3rem 0' m='1rem' fontSize='17px' fontWeight='bold' color='white' bg='#b74555' onClick={() => {
                            setPokeData([])
                            setUrl(nextUrl)
                        }}>Next</Button>}
                    </Flex>
                </Grid>

                <Box w='50%' textAlign='center' color='black' position='fixed' top='100px' right='10px'>
                    <Pokeinfo data={pokeDax} />
                </Box>

            </Flex>
        </>
    )
}