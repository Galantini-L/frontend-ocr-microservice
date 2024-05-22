/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import '../styles/register.css'
import { useSignUp } from '../hooks/useSignup'

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
const REGISTER_URL = '/register'

export function RegisterForm () {
  const [email, setEmail] = useState('')

  const [username, setUsername] = useState('')
  const [validUsername, setValidUsername] = useState(false)

  const [pwd, setPwd] = useState('')
  const [matchPwd, setMatchPwd] = useState('')
  const [validPwd, setValidPwd] = useState(false)
  const [validMatch, setValidMatch] = useState(false)

  const [errMsg, setErrMsg] = useState(null)

  useEffect(() => {
    setErrMsg(null)
    if (username.charAt(0) === ' ') {
      console.log('empty space on username')
      setErrMsg('Username can not start with empty space')
    }
    setValidUsername(USER_REGEX.test(username))
  }, [username])

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd))
    setValidMatch(pwd === matchPwd)
  }, [pwd, matchPwd])

  const handleSubmit = (event) => {
    // const signUpuseSignUp()
  }

  return (
    <div className='mainContainer'>
      <div className='titleContainer'>
        <div>Sign up</div>
      </div>
      {errMsg && <p style={{ color: 'red' }}>{errMsg}</p>}
      <form className='form' onSubmit={handleSubmit}>
        <input
          type='text'
          id='username'
          name='username'
          autoComplete='off'
          placeholder='Username' required
          onChange={({ target }) => setUsername(target.value)}
        />

        <input
          type='email'
          id='emailAddress'
          name='emial'
          autoComplete='off'
          placeholder='Email Address' required
          onChange={({ target }) => setEmail(target.value)}
        />

        <input
          type='password' placeholder='Password' required
          name='password'
          onChange={({ target }) => setPwd(target.value)}
        />

        <input
          type='password' placeholder='Confirm Password' required
          onChange={({ target }) => setMatchPwd(target.value)}
        />

        <button type='submit'>Sign Up</button>
      </form>
      <button type='button'>check pass</button>
    </div>
  )
}
