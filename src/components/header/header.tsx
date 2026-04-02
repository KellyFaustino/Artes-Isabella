import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import ToggleTheme from "../../components/ToggleTheme/ToggleTheme";

type User = {
  name?: string;
};

type HeaderProps = {
  user?: User | null;
};

const Header = ({ user }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => setMenuVisible(!menuVisible);

  return (
    <header className="relative flex h-24 items-center justify-between bg-bella-200 px-5 dark:bg-dark-200 sm:m-5 sm:rounded-xl">
      <div className="flex flex-col items-start">
        {user?.name ? (
          <div className="flex items-center space-x-3">
            <Image
              src="/avatar.jpg"
              alt="Avatar"
              className="h-12 w-12 rounded-full object-cover"
              width={48}
              height={48}
            />

            <span className="font-medium text-gray-100">
              Bem-vindo, {user.name}
            </span>

            <button
              className="ml-3 rounded-full p-1 text-gray-100 transition duration-300 hover:bg-gray-200"
              onClick={toggleMenu}
              aria-label="Abrir menu"
            >
              <FaChevronDown />
            </button>

            {menuVisible && (
              <div
                className="dark:border-dark-400 absolute left-16 top-12 w-40 rounded-lg border border-gray-300 bg-white p-3 shadow-lg transition-all duration-300 ease-in-out dark:bg-dark-200"
                aria-live="polite"
              >
                <button
                  onClick={() => alert("Saindo...")}
                  className="text-red-600 dark:hover:bg-dark-300 block w-full rounded-lg px-4 py-2 text-left transition duration-200 hover:bg-gray-100"
                >
                  Sair
                </button>

                <button
                  onClick={() => alert("Abrindo configurações...")}
                  className="dark:hover:bg-dark-300 block w-full rounded-lg px-4 py-2 text-left text-blue-600 transition duration-200 hover:bg-gray-100"
                >
                  Configurações
                </button>
              </div>
            )}
          </div>
        ) : (
          <button className="text-sm text-gray-300 underline">
            Faça seu login ou cadastro
          </button>
        )}
      </div>

      <h1 className="flex-1 truncate text-center text-xl text-gray-100 sm:cursor-pointer sm:hover:text-2xl">
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
  );
};

export default Header;
