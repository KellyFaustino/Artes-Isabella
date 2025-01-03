import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import ToggleTheme from '../../components/ToggleTheme/ToggleTheme'
import Link from 'next/link'
import Image from 'next/image'

const Header = ({ user }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [menuVisible, setMenuVisible] = useState(false)
  const toggleMenu = () => setMenuVisible(!menuVisible)

  return (
    <header className="relative flex h-24 bg-bella-200 dark:bg-dark-200 justify-between items-center px-5 sm:rounded-xl sm:m-5">
      <div className="flex flex-col items-start">
        {user?.name ? (
          <div className="flex items-center space-x-3">
            <Image
              src="/avatar.jpg"
              alt="Avatar"
              className="w-12 h-12 rounded-full object-cover"
              width={48}
              height={48}
            />
            <span className="text-gray-100 font-medium">
              Bem-vindo, {user.name}
            </span>

            <button
              className="text-gray-100 ml-3 p-1 rounded-full hover:bg-gray-200 transition duration-300"
              onClick={toggleMenu}
              aria-label="Abrir menu"
            >
              <FaChevronDown />
            </button>

            {menuVisible && (
              <div
                className="absolute left-16 top-12 w-40 bg-white dark:bg-dark-200 border border-gray-300 dark:border-dark-400 rounded-lg shadow-lg transition-all duration-300 ease-in-out p-3"
                aria-live="polite"
              >
                <button
                  onClick={() => alert('Saindo...')}
                  className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 dark:hover:bg-dark-300 rounded-lg transition duration-200"
                >
                  Sair
                </button>
                <button
                  onClick={() => alert('Abrindo configurações...')}
                  className="block w-full text-left px-4 py-2 text-blue-600 hover:bg-gray-100 dark:hover:bg-dark-300 rounded-lg transition duration-200"
                >
                  Configurações
                </button>
              </div>
            )}
          </div>
        ) : (
          <button className="text-gray-300 text-sm underline">
            Faça seu login ou cadastro
          </button>
        )}
      </div>

      <h1 className="text-gray-100 text-xl sm:hover:text-2xl sm:cursor-pointer text-center flex-1 truncate">
        Exposição de Artes de Isabella Faustino de Moura
      </h1>

      <button
        className="text-gray-100 sm:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <nav className="flex items-center space-x-4">
        <ul className="flex flex-col sm:flex-row sm:space-x-4">
          <li>
            <Link href="/home" className="text-gray-100 hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/galeria" className="text-gray-100 hover:underline">
              Galeria
            </Link>
          </li>
          <li>
            <Link href="/sobre" className="text-gray-100 hover:underline">
              Sobre
            </Link>
          </li>
          <li>
            <Link href="/contato" className="text-gray-100 hover:underline">
              Contato
            </Link>
          </li>
        </ul>
        <ToggleTheme />
      </nav>
    </header>
  )
}

export default Header
