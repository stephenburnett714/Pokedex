import pokemonJSON from "./api/pokemonData.json";
import { ProgressBar, Col, Row, Container, Button } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image"

export default function id({ pokemon }) {
    let maxHP = 255
    let maxAttack = 180
    let maxDefense = 230
    let maxSpAttack = 180
    let maxSpDefense = 230
    let maxSpeed = 180
  return (
    <Container>
        <Link href="/"><div className="flex justify-center logo-spacing"><Image  height={200} width={500} src="/images/pokemon-logo.png"></Image></div></Link>
      <div className="capital-first pokemon-font pokemon-header text-center">
        {pokemon.name}
      </div>

      <div className="flex flex-row justify-center">
      <Row   xs={1} sm={2}>
        <Col className="flex space-around">
        <div className="flex flex-col place-content-center">
          <img height={250} width={250} src={pokemon.image} />
        
        <div className="flex justify-center flex-col">
            <div className="text-center">{pokemon.type[0]}{pokemon.type[1] ? `, ${pokemon.type[1]}` : ""}</div>
            <div className="flex justify-center flex-row">
          <Image height={50} width={50} src={`/images/${pokemon.type[0]}.png`} />
          {pokemon.type[1] ? <Image height={30} width={30} src={`/images/${pokemon.type[1]}.png`} /> : ""}
          </div>
          </div>
          </div>
        </Col>
        <Col>
        <div className="flex flex-col justify-center py-2">
          <div className="text-center pokemon-font">Stats</div>
          <div className="py-2">{`HP: ${pokemon.base.HP}/${maxHP}`} <ProgressBar striped variant="success" now={pokemon.base.HP} max={maxHP}/></div>
          
          <div className="py-2">{`Attack: ${pokemon.base.Attack}/${maxAttack}`}<ProgressBar striped variant="danger" now={pokemon.base.Attack} max={maxAttack}/></div>
          <div className="py-2">{`Defense: ${pokemon.base.Defense}/${maxDefense}`}<ProgressBar striped variant="primary" now={pokemon.base.Defense} max={maxDefense}/></div>
          <div className="py-2">{`Special Attack ${pokemon.base.SpAttack}/${maxSpAttack}`}<ProgressBar striped variant="secondary" now={pokemon.base.SpAttack} max={maxSpAttack}/></div>
          <div className="py-2">{`Special Defense ${pokemon.base.SpDefense}/${maxSpDefense}`}<ProgressBar striped variant="info" now={pokemon.base.SpDefense} max={maxDefense}/></div>
          <div className="py-2">{`Speed: ${pokemon.base.Speed}/${maxSpeed}`} <ProgressBar striped variant="warning" now={pokemon.base.Speed} max={maxSpeed}/></div>
        </div>
        </Col>
        </Row>
      </div>
      <div className="flex justify-center">
        <Link href="/" className="text-center flex justify-items-center">
          <Button>Back</Button>
        </Link>
      </div>
    </Container>
  );
}

id.getInitialProps = ({ query }) => {
  let id = parseInt(query.id, 10);
  let pokemon = pokemonJSON[id - 1];

  return { pokemon };
};
