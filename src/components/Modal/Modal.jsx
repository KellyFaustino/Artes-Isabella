import { useState } from 'react'

const Modal = ({ onClose }) => {
  const [isRegistering, setIsRegistering] = useState(false)
  const [receiveEmails, setReceiveEmails] = useState(false)

  const handleCheckboxChange = () => {
    setReceiveEmails(!receiveEmails)
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[500px] relative">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          onClick={onClose}
        >
          ✕
        </button>
        {!isRegistering ? (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center">
              Faça seu login
            </h2>
            <p className="text-sm mb-6 text-center">
              Acesse agora a sua conta entre com seu e-mail e senha.
            </p>
            <input
              type="email"
              placeholder="E-mail"
              className="w-full mb-4 p-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
            <input
              type="password"
              placeholder="Senha"
              className="w-full mb-6 p-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
            <button className="bg-blue-600 text-white w-full py-3 rounded-md hover:bg-blue-700">
              ENTRAR
            </button>
            <p className="text-sm mt-4 text-center">
              <button className="underline text-blue-600 hover:text-blue-800">
                Esqueci minha senha
              </button>
            </p>
            <p className="text-sm mt-2 text-center">
              Não possui uma conta?{' '}
              <button
                onClick={() => setIsRegistering(true)}
                className="underline text-blue-600 hover:text-blue-800"
              >
                Cadastre-se Agora!
              </button>
            </p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center">
              Cadastrar Nova Conta
            </h2>
            <p className="text-sm mb-6 text-center">
              Crie sua conta, fique por dentro das novidades.
            </p>
            <input
              type="email"
              placeholder="E-mail"
              className="w-full mb-4 p-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nome"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
              <input
                type="text"
                placeholder="Sobrenome"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <input
                type="text"
                placeholder="CPF"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
              <input
                type="text"
                placeholder="Telefone"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <input
                type="password"
                placeholder="Senha"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
              <input
                type="password"
                placeholder="Confirme sua senha"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="mt-6">
              <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                <input
                  type="checkbox"
                  checked={receiveEmails}
                  onChange={handleCheckboxChange}
                  className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span>
                  Desejo receber e-mails sobre novidades dos quadros da Isabella
                </span>
              </label>
            </div>
            <div className="flex justify-between mt-8">
              <button
                onClick={() => setIsRegistering(false)}
                className="bg-gray-200 text-gray-700 py-3 px-6 rounded-md hover:bg-gray-300"
              >
                VOLTAR
              </button>
              <button className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700">
                CADASTRAR CONTA
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Modal
