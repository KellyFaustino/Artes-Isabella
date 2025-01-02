'use client'

import Header from '../../components/Header/Header'
import Link from 'next/link'
import Image from 'next/image'
import Rodape from '../../components/Rodape/Rodape'

const Sobre = () => {
  const user = { name: 'Kelly Faustino' }

  return (
    <>
      <div className="h-screen">
        <Header user={user} />
        <h1 className="text-5xl font-extrabold text-center text-bella-100 tracking-tight leading-snug mb-6 drop-shadow-lg">
          Sobre a Exposição
        </h1>

        <div className="flex justify-center mb-6">
          <Image
            src="/perfil.jpg"
            alt="Isabella Faustino"
            width={150}
            height={200}
            className="rounded-full w-[150px] h-[150px] object-cover"
          />
        </div>

        <section className="max-w-3xl mx-auto px-4 py-6">
          <h2 className="text-3xl font-semibold text-bella-200 mb-4">
            Sobre a Artista
          </h2>
          <p className="text-lg text-dark-300 leading-relaxed tracking-wide">
            Isabella Faustino de Moura é uma estudante de 11 anos que reside em
            Osasco. Sua paixão pela arte começou desde os 4 anos, quando já
            criava desenhos inspiradores. A jovem artista tem uma visão única,
            explorando a arte como uma forma de expressar suas emoções e sua
            criatividade.
          </p>
        </section>

        <section className="max-w-3xl mx-auto px-4 py-6">
          <h2 className="text-3xl font-semibold text-bella-200 mb-4">
            A Exposição
          </h2>
          <p className="text-lg text-dark-300 leading-relaxed tracking-wide">
            Esta exposição reúne obras que exploram o contraste entre luz e
            sombra, a natureza e a emoção humana. Cada quadro possui uma
            história única que convida o espectador a uma reflexão profunda,
            transmitindo a visão do mundo de uma jovem artista com um talento
            impressionante.
          </p>
        </section>

        <div className="text-center mt-8">
          <Link
            href="/galeria"
            className="text-bella-100 hover:text-bella-200 text-xl"
          >
            Voltar para a Galeria
          </Link>
        </div>
      </div>
      <Rodape />
    </>
  )
}

export default Sobre
