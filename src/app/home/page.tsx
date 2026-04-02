"use client";

import Article from "@/components/destaque-artigo/destaque-artigo";
import Header from "@/components/header/header";
import Rodape from "@/components/rodape/rodape";
import Link from "next/link";
import { useEffect, useState } from "react";

type ArticleData = {
  title: string;
  text: string[];
  tags: string[];
  image?: string;
};

const Home = () => {
  const user = { name: "Kelly Faustino" };

  const [data, setData] = useState<ArticleData[]>([]);

  useEffect(() => {
    fetch("/api/artigos")
      .then((res) => res.json())
      .then((data: ArticleData[]) => setData(data));
  }, []);

  return (
    <>
      <Header user={user} />

      <section className="rounded-2xl bg-bella-100 py-12 text-white sm:m-5">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Bem-vindo à Exposição
          </h1>

          <p className="mt-4 text-xl">
            Explore a coleção de artes incríveis da Isabella Faustino de Moura.
          </p>

          <Link
            href="/galeria"
            className="mt-6 inline-block rounded-2xl bg-bella-200 px-6 py-3 text-white"
          >
            Visite a Galeria
          </Link>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-semibold text-bella-100">Destaques</h2>

          {data.length === 0 ? (
            <p>Carregando...</p>
          ) : (
            <div className="mt-6 grid justify-items-center gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {data.slice(0, 3).map((props: ArticleData, index: number) => (
                <Article key={index} {...props} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Rodape />
    </>
  );
};

export default Home;
