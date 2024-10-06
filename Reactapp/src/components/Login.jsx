import React from 'react'

const Login = () => {
  return (
    <div>
          <h1>Login</h1>
          username<input type="text" name="username" id="username" /><br />
          password<input type="password" name="password" id="password" /><br />
          <button>submit</button>
          <button>reset</button>
    </div>
  )
}

export default Login
