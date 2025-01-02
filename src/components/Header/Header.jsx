import { useState } from 'react'
import ToggleTheme from '../../components/ToggleTheme/ToggleTheme'
import Link from 'next/link'
import Image from 'next/image'
import Modal from '../../components/Modal/Modal'

const Header = ({ user }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <header className="flex h-24 bg-bella-200 dark:bg-dark-200 justify-between items-center px-5 sm:rounded-xl sm:m-5">
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
          </div>
        ) : (
          <button
            className="text-gray-300 text-sm underline"
            onClick={() => setModalOpen(true)}
          >
            Faça seu login ou cadastro
          </button>
        )}
      </div>

      <h1 className="text-gray-100 text-xl sm:hover:text-2xl sm:cursor-pointer text-center flex-1 truncate">
        Exposição de Artes de Isabella Faustino de Moura
      </h1>

      {/* Botão de menu (somente para dispositivos pequenos) */}
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

      {isModalOpen && <Modal onClose={() => setModalOpen(false)} />}
    </header>
  )
}

export default Header
