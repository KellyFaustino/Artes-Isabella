'use client'

import Header from '../../components/Header/Header'
import Rodape from '../../components/Rodape/Rodape'

const Contato = () => {
  const user = { name: 'Kelly Faustino' }

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header user={user} />
        <main className="flex-grow">
          <h1 className="text-5xl font-extrabold text-center text-bella-100 tracking-tight leading-snug mb-6 drop-shadow-lg">
            Contato
          </h1>
          <p className="text-2xl text-center text-dark-200 mt-2 mb-10 max-w-3xl mx-auto leading-relaxed tracking-wide">
            Entre em contato conosco para mais informações sobre a exposição,
            agendamentos ou dúvidas gerais. Estamos ansiosos para ouvir de você!
          </p>

          <section className="max-w-3xl mx-auto px-4 py-6">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-dark-300"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bella-100"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-dark-300"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bella-100"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-medium text-dark-300"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bella-100"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="w-full px-6 py-2 bg-bella-100 text-white font-semibold rounded-md hover:bg-bella-200 transition duration-300"
                >
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </section>

          <section className="max-w-3xl mx-auto px-4 py-6 text-center">
            <h2 className="text-3xl font-semibold text-bella-200 mb-4">
              Outras Formas de Contato
            </h2>
            <p className="text-lg text-dark-300 leading-relaxed tracking-wide">
              Você também pode nos encontrar nas redes sociais ou enviar um
              e-mail diretamente para{' '}
              <a
                href="mailto:contato@isabellafmoura.com"
                className="text-bella-100 hover:underline"
              >
                IsabellaFaustino@gmail.com
              </a>
            </p>
            <div className="text-center mt-8"></div>
          </section>
        </main>
        <Rodape />
      </div>
    </>
  )
}

export default Contato
