import React from 'react'
import useForm from '../hooks/useForm'
import AuthService from '../services/auth'

function Home() {
  const authService = new AuthService()
  const [form, handleInputs] = useForm()

  const handleSignup = () => {
    authService
      .signup(form)
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleLogin = () => {
    authService
      .login(form)
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const isItWork = () => {
    authService
      .profile()
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        if (err.response.status === 401) {
          console.log(err.response.data.message)
        }
      })
  }

  const handleLogout = () => {
    authService
      .logout()
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <main>
      <div className="signup">
        <h2>Signup</h2>
        <input type="text" name="name" placeholder="Name" onChange={e => handleInputs(e)} />
        <input type="email" name="email" onChange={e => handleInputs(e)} />
        <input type="password" name="password" onChange={e => handleInputs(e)} />
        <button onClick={handleSignup}>Signup</button>
      </div>
      <div className="login">
        <h2>Login</h2>
        <input type="email" name="email" onChange={e => handleInputs(e)} />
        <input type="password" name="password" onChange={e => handleInputs(e)} />
        <button onClick={handleLogin}>Login</button>
      </div>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div>
        <button onClick={isItWork}>Is it works?</button>
      </div>
    </main>
  )
}

export default Home
