import React from 'react'

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    agree: false,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleCheckboxChange = (e) => {
    setFormData((prevData) => ({ ...prevData, agree: e.target.checked }))
  }

  const safeSubmit = (event) => {
    event.preventDefault()
    const { password, confirmPassword, agree } = formData
    if (password !== confirmPassword) {
      alert('As senhas não coincidem!')
      return
    }
    if (!agree) {
      alert('Você deve concordar com os termos e condições.')
      return
    }

    onSubmit(formData)
  }

  return (
    <form
      onSubmit={safeSubmit}
      className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg"
    >
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Primeiro nome
          </label>
          <input
            type="text"
            id="first_name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Primeiro Nome"
            required
          />
        </div>
        <div>
          <label
            htmlFor="last_name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Sobrenome
          </label>
          <input
            type="text"
            id="last_name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Sobrenome"
            required
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Número de telefone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Telefone"
            required
          />
        </div>
      </div>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Endereço de e-mail
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          placeholder="email"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Senha
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          placeholder="Senha"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="confirm_password"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Confirmar senha
        </label>
        <input
          type="password"
          id="confirm_password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          placeholder="Confirma Senha"
          required
        />
      </div>
      <div className="flex items-start mb-6">
        <input
          id="remember"
          type="checkbox"
          value=""
          checked={formData.agree}
          onChange={handleCheckboxChange}
          className="w-4 h-4 border border-gray-300 rounded bg-gray-50"
          required
        />
        <label
          htmlFor="remember"
          className="ms-2 text-sm font-medium text-gray-900"
        >
          Eu concordo com os{' '}
          <a href="#" className="text-blue-600 hover:underline">
            termos e condições
          </a>
          .
        </label>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Enviar
      </button>
    </form>
  )
}

export default Form
