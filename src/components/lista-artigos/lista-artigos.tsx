import data from "@/data/artigos.json";

import Article from "../destaque-artigo/destaque-artigo";

const ListaDeArtigos = () => {
  return (
    <div className="lg:grid-cold-3 m-auto mt-5 grid max-w-2xl gap-5 sm:mt-0 sm:grid-cols-2 lg:max-w-[1000px]">
      {data.map((props, index) => (
        <Article key={index} {...props} />
      ))}
    </div>
  );
};

export default ListaDeArtigos;
