import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import allPokemon from "./api/pokemonData.json";
import Image from "next/image";
import Link from "next/link";
import { FormControl, Card, Col, Row, Container } from "react-bootstrap";

export default function Home() {
  let [nameSearch, setNameSearch] = useState("");
  let [elementFilter, setElementFilter] = useState([]);
  let [offset, setOffset] = useState(0);
  let [searchBarLocation, setSearchBarLocation] = useState(0);

  let inputRef = useRef()

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, []);


console.log(offset)
console.log(searchBarLocation)

  let handleChange = (e) => {
    setNameSearch(e.target.value);
  };

  // Searches for text
  let searchPokemon = allPokemon.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(nameSearch.toLowerCase())
  );

  // Searches for 1 Element Type
  let elementSearch1 = searchPokemon.filter((pokemon) =>
    elementFilter[0]
      ? pokemon.type[0].toLowerCase().includes(elementFilter[0])
      : pokemon.name.includes("")
  );

  // Searches for multiple  Element Type
  let elementSearch2 = searchPokemon.filter((pokemon) =>
    pokemon.type[1]
      ? pokemon.type[0].toLowerCase().includes(elementFilter[0]) &
          pokemon.type[1].toLowerCase().includes(elementFilter[1]) ||
        pokemon.type[0].toLowerCase().includes(elementFilter[1]) &
          pokemon.type[1].toLowerCase().includes(elementFilter[0])
      : ""
  );

  let grass = () => {
    if (elementFilter.length >= 2) {
      console.log("max");
    } else if (elementFilter.includes("grass")) {
      setElementFilter(elementFilter);
    } else {
      setElementFilter(elementFilter.push("grass"));
    }
  };

  return (
    <div>
      <Head>
        <title>Pokedex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <div className="flex justify-center logo-spacing">
          <div className="fixed flex flex-col bg-white w-full max-height-40 ">
            <div className="flex justify-center">
          <Image
            height={150}
            width={350}
            src="/images/pokemon-logo.png"
          ></Image>
          </div>
        <Row>
          <Col></Col>
          <Col className="col-6 pt-4">
        <FormControl placeholder="Search" onChange={handleChange} />
        </Col>
        <Col></Col>
        </Row>
        </div>
        </div>
        <div className="index-padding-top">
        <Row  xs={2} sm={2} md={3} lg={4} xl={5}>
          {(elementFilter[1] ? elementSearch2 : elementSearch1).map(
            (pokemon, key) => (
              <div key={key} className="my-2">
                <Col>
                  <Link href={`/[id]?id=${pokemon.id}`} as={`/${pokemon.id}`}>
                    <Card className="cursor-pointer">
                      <Card.Img src={pokemon.image} />
                      <Card.Text>#{pokemon.id}</Card.Text>
                      <Card.Title className="text-center capital-first">
                        {pokemon.name}
                      </Card.Title>
                      <div className="flex flex-row justify-center">
                        <div>
                          <Image
                            height={30}
                            width={30}
                            src={`/images/${pokemon.type[0]}.png`}
                          />
                          {pokemon.type[1] ? (
                            <Image
                              height={30}
                              width={30}
                              src={`/images/${pokemon.type[1]}.png`}
                            />
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </Card>
                  </Link>
                </Col>
              </div>
            )
          )}
        </Row>
        </div>
      </Container>
    </div>
  );
}


