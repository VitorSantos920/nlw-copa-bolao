// JSX -> JavaScript + XML (HTML)
// TSX -> TypeScript + JSX
interface HomeProps {
  count: number;
}

// Core do React: Componentes!
export default function Home(props: HomeProps) {
  return <h1>Contagem: {props.count}</h1>;
}

export const getServerSideProps = async () => {
  const reponse = await fetch("http://localhost:3333/pools/count");
  const data = await reponse.json();

  console.log({ data });

  return {
    props: {
      count: data.count,
    },
  };
};
