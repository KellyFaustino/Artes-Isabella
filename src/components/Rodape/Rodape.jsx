import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-bella-200 dark:bg-dark-200 text-gray-100 py-6">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
        <div className="mb-4 md:mb-0">
          <p>
            &copy; 2013 Artes Isabella Faustino. Todos os direitos reservados.
          </p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400">
            Sobre
          </a>
          <a href="#" className="hover:text-gray-400">
            Política de Privacidade
          </a>
          <a href="/contato" className="hover:text-gray-400">
            Contato
          </a>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://www.facebook.com/kellycristinafaustino"
            className="hover:text-gray-400"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/isabellafmoura"
            className="hover:text-gray-400"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
