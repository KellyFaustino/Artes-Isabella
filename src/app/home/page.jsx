'use client'
import data from '../../../artigos.json'
import Article from '../../components/DestaqueArtigo/DestaqueArtigo'
import Header from '../../components/Header/Header'
import Link from 'next/link'
import Rodape from '../../components/Rodape/Rodape'

const Home = () => {
  const user = { name: 'Kelly Faustino' }

  return (
    <>
      <Header user={user} />
      <section className="bg-bella-100 dark:bg-dark-200 text-white py-12 sm:m-5 rounded-2xl">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Bem-vindo à Exposição
          </h1>
          <p className="mt-4 text-xl">
            Explore a coleção de artes incríveis da Isabella Faustino de Moura.
          </p>
          <Link
            href="/galeria"
            className="mt-6 inline-block bg-bella-200 dark:bg-dark-200 text-white px-6 py-3 rounded-2xl hover:bg-bella-300 dark:hover:bg-dark-300 transition duration-300"
          >
            Visite a Galeria
          </Link>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-bella-100 dark:text-black">
            Destaques
          </h2>
          <div className="grid gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {data.slice(0, 3).map((props, index) => (
              <Article key={index} {...props} />
            ))}
          </div>
        </div>
      </section>
      <Rodape />
    </>
  )
}

export default Home