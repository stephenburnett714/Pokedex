import pokemonJSON from "./api/pokemonData.json";
import { Button } from "react-bootstrap";
import Link from "next/link"

export default function id({ pokemon }) {  return (
    <div>
      <div className="capital-first">{pokemon.name}</div>
      <div>
        <img height={200} width={200} src={pokemon.image} />
      </div>
      <div>
        <div>Stats</div>
        <div>{`HP: ${pokemon.base.HP}`}</div>
        <div>{`Attack: ${pokemon.base.Attack}`}</div>
        <div>{`Defense: ${pokemon.base.Defense}`}</div>
        <div>{`Special Attack ${pokemon.base.SpAttack}`}</div>
        <div>{`Special Defense ${pokemon.base.SpDefense}`}</div>
        <div>{`Speed: ${pokemon.base.Speed}`}</div>
        <div></div>
      </div>

      <Link href="/"><Button>Back to search</Button></Link>
    </div>
  );
}

id.getInitialProps = ({ query }) => {
  let id = parseInt(query.id, 10);
  let pokemon = pokemonJSON[id - 1];

  return { pokemon };
};
