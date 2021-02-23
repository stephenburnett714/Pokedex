import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState, useEffect} from 'react'
import { Card, Col, Row, Container } from "react-bootstrap"



export default function Home({allPokemon}) {

  return (
    <div>
      <Head>
        <title>Pokedex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
      <Row xs={1} sm={2} md={3} lg={4}>
      {allPokemon.map((pokemon, key) => (
<div key={key}>
        <Col >
        <Card>
        <Card.Img src={pokemon.image}/>
      <Card.Text>#{pokemon.indexPokemon}</Card.Text>
      <Card.Title  className="capital-first">{pokemon.name}</Card.Title>
      
      </Card>
      </Col>
      </div>
      ))}
      </Row>
      </Container>
      
      
      


    </div>
  )
}

export const getServerSideProps = async cxt => {
  let res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=250')
  let { results } = await res.json()
let allPokemon = results.map((pokemon, index) => {
    let indexPokemon = ("00" + (index + 1)).slice(-3)
    let image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${indexPokemon}.png`
  return { ... pokemon,
            indexPokemon,
            image,
          } 
})
return {
  props: {allPokemon}
}
}

