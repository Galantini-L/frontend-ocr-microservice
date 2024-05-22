import { useEffect, useState } from 'react'

function usePassword () {
  const [pwd, setPwd] = useState('')
  const [matchPwd, setMatchPwd] = useState('')
  const [validPwd, setValidPwd] = useState(false)
  const [validMatch, setValidMatch] = useState(false)

  const validatePwd = () => {
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/

    setValidPwd(PWD_REGEX.test(pwd))
    setValidMatch(pwd === matchPwd)
  }

  useEffect([], [pwd, matchPwd])

  return (validatePwd)
}
