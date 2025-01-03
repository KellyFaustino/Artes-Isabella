import React from 'react'
import Link from 'next/link'

const Rodape = () => {
  return (
    <footer className="bg-bella-200 dark:bg-dark-200 text-gray-100 py-6">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
        <div className="mb-4 md:mb-0">
          <p>
            &copy; Exposição Artes Isabella 2013 - {new Date().getFullYear()} 
          </p>
        </div>
        <div className="flex space-x-4">
          <a href="/sobre" className="hover:text-gray-400">
            Sobre
          </a>
          <a href="/PoliticaPrivacidade" className="hover:text-gray-400">
            Política de Privacidade
          </a>
          <a href="/contato" className="hover:text-gray-400">
            Contato
          </a>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link
            href="https://www.facebook.com/kellycristinafaustino"
            className="hover:text-gray-400"
          >
            Facebook
          </Link>
          <Link
            href="https://www.instagram.com/isabellafmoura"
            className="hover:text-gray-400"
          >
            Instagram
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Rodape
