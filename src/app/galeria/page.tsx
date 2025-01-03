'use client'

import Rodape from '@/components/Rodape/Rodape'
import Header from '../../components/Header/Header'
import QuadroCarrossel from '../../components/Carrossel/Carrossel'

const Galeria = () => {
  const user = { name: 'Kelly Faustino' }

  return (
    <>
      <div className="h-screen">
        <Header user={user} />
        <h1 className="text-5xl font-extrabold text-center text-bella-100 tracking-tight leading-snug mb-6 drop-shadow-lg">
          Galeria de Artes
        </h1>
        <p className="text-2xl text-center text-dark-200 mt-2 mb-10 max-w-3xl mx-auto leading-relaxed tracking-wide">
          Explore as artes incríveis de Isabella Faustino de Moura. Mergulhe em
          uma coleção única de arte que reflete a criatividade e a sensibilidade
          de uma jovem talentosa.
        </p>
        <QuadroCarrossel />
      </div>
      <Rodape />
    </>
  )
}

export default Galeria
