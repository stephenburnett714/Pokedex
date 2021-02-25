

export default function id({pokemon}) {
    console.log(pokemon)
    return (
        <div>Hello</div>
    );
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
