'use client'

import { useState } from 'react'
import Home from './home/page'
import LoginForm from '../components/Login/Login'

const App = () => {
  const [user, setUser] = useState(null)
  const hasUser = Boolean(user)

  return (
    <div className="h-screen">
      {!hasUser && <LoginForm onLogin={setUser} />}
      {hasUser && <Home />}
    </div>
  )
}

export default App
