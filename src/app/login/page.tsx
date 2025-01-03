'use client'
import LoginForm from '@/components/Login/Login'
import { useState } from 'react'
import Home from '../home/page'

const Login = () => {
  const [user, setUser] = useState(null)
  const hasUser = Boolean(user)

  return (
    <div className="h-screen">
      {!hasUser && <LoginForm onLogin={setUser} />}
      {hasUser && <Home />}
    </div>
  )
}

export default Login
