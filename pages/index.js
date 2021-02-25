import Head from 'next/head'
import { useState } from 'react'
import allPokemon from "./api/pokemonData.json"
import Image from "next/image"
import Link from "next/link"
import { FormControl, Card, Col, Row, Container } from "react-bootstrap"



export default function Home() {

let [nameSearch, setNameSearch] = useState("")
// let [nameSearchPokemon, setNameSearchPokeon] = useState()

    let handleChange = e => {
      setNameSearch(e.target.value);
    };

  let searchPokemon = allPokemon.filter((pokemon) => pokemon.name.toLowerCase().includes(nameSearch.toLowerCase()))


  return (
    <div>

      <Head>
        <title>Pokedex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <div className="flex justify-center logo-spacing"><Image  height={200} width={500} src="/images/pokemon-logo.png"></Image></div>
        <FormControl 
        placeholder="Search"
        onChange={handleChange}
        />

      <Row  xs={2} sm={2} md={3} lg={4} xl={5}>
      
      {searchPokemon.map((pokemon, key) => (
        <div key={key} className="my-2">
<Col >
<Link href={`/[id]?id=${pokemon.id}`} as={`/${pokemon.id}`}>
          <Card>
          
          <Card.Img src={pokemon.image}/>
        <Card.Text>#{pokemon.id}</Card.Text>
        <Card.Title  className="text-center capital-first">{pokemon.name}</Card.Title>
        <div className="flex flex-row justify-center">
        <div >
          <Image height={30} width={30} src={`/images/${pokemon.type[0]}.png`} />
          {pokemon.type[1] ? <Image height={30} width={30} src={`/images/${pokemon.type[1]}.png`} /> : ""}
          </div>
        </div>
        
        </Card>
        </Link>
        </Col>
        </div>
       
      ))}
      
      </Row>
      </Container>
      
      
      


    </div>
  )
}

// export const getServerSideProps = async cxt => {
//   let  res = pokemonApi
//   let allPokemon = res.slice(0, 809).map((pokemon, index) => {
    
//         let id = newApi[index].id
//         let base = newApi[index].base
//         let type = newApi[index].type
//   return { ... pokemon,
//           id,
//           base,
//           type,
//           } 
// })
// return {
//   props: {allPokemon}
// }
// }

