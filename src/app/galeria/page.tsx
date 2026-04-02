"use client";

import QuadroCarrossel from "@/components/carrossel/carrossel";
import Header from "@/components/header/header";
import Rodape from "@/components/rodape/rodape";

const Galeria = () => {
  const user = { name: "Kelly Faustino" };

  return (
    <>
      <div className="h-screen">
        <Header user={user} />
        <h1 className="mb-6 text-center text-5xl font-extrabold leading-snug tracking-tight text-bella-100 drop-shadow-lg">
          Galeria de Artes
        </h1>
        <p className="mx-auto mb-10 mt-2 max-w-3xl text-center text-2xl leading-relaxed tracking-wide text-dark-200">
          Explore as artes incríveis de Isabella Faustino de Moura. Mergulhe em
          uma coleção única de arte que reflete a criatividade e a sensibilidade
          de uma jovem talentosa.
        </p>
        <QuadroCarrossel />
      </div>
      <Rodape />
    </>
  );
};

export default Galeria;
