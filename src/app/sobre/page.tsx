"use client";

import Header from "@/components/header/header";
import Rodape from "@/components/rodape/rodape";
import Image from "next/image";
import Link from "next/link";

const Sobre = () => {
  const user = { name: "Kelly Faustino" };

  return (
    <>
      <div className="h-screen">
        <Header user={user} />
        <h1 className="mb-6 text-center text-5xl font-extrabold leading-snug tracking-tight text-bella-100 drop-shadow-lg">
          Sobre a Exposição
        </h1>

        <div className="mb-6 flex justify-center">
          <Image
            src="/perfil.jpg"
            alt="Isabella Faustino"
            width={150}
            height={200}
            className="h-[150px] w-[150px] rounded-full object-cover"
          />
        </div>

        <section className="mx-auto max-w-3xl px-4 py-6">
          <h2 className="mb-4 text-3xl font-semibold text-bella-200">
            Sobre a Artista
          </h2>
          <p className="text-dark-300 text-lg leading-relaxed tracking-wide">
            Isabella Faustino de Moura é uma estudante de 11 anos que reside em
            Osasco. Sua paixão pela arte começou desde os 4 anos, quando já
            criava desenhos inspiradores. A jovem artista tem uma visão única,
            explorando a arte como uma forma de expressar suas emoções e sua
            criatividade.
          </p>
        </section>

        <section className="mx-auto max-w-3xl px-4 py-6">
          <h2 className="mb-4 text-3xl font-semibold text-bella-200">
            A Exposição
          </h2>
          <p className="text-dark-300 text-lg leading-relaxed tracking-wide">
            Esta exposição reúne obras que exploram o contraste entre luz e
            sombra, a natureza e a emoção humana. Cada quadro possui uma
            história única que convida o espectador a uma reflexão profunda,
            transmitindo a visão do mundo de uma jovem artista com um talento
            impressionante.
          </p>
        </section>

        <div className="mt-8 text-center">
          <Link
            href="/galeria"
            className="text-xl text-bella-100 hover:text-bella-200"
          >
            Voltar para a Galeria
          </Link>
        </div>
      </div>
      <Rodape />
    </>
  );
};

export default Sobre;
