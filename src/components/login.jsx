import { useEffect, useState } from 'react'
import '../styles/register.css'

export function LoginFrom () {
  const [email, setEmail] = useState('')

  const handleSubmit = (event) => {
    return 0
  }

  return (
    <div className='mainContainer'>
      <div className='titleContainer'>
        <div>Login</div>
      </div>
      {false}
      <form className='form' onSubmit={handleSubmit}>
        <input
          type='text'
          id='email'
          name='email'
          placeholder='Email' required
          onChange={({ target }) => setEmail(target.value)}
        />
      </form>
    </div>
  )
}
