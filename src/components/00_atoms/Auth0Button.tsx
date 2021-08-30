// react
import React, { useEffect, useState } from 'react'

// modules
import { RedirectLoginOptions, useAuth0 } from '@auth0/auth0-react'

// project files
import Button from './Button'
import Typography from './Typography'

interface Props extends React.HTMLAttributes<Element> {
  mode: string
}

export default function AuthButton({ mode, ...props }: Props) {
  const { loginWithRedirect, logout } = useAuth0()
  const [title, setTitle] = useState('')

  useEffect(() => {
    switch (mode) {
      case 'login':
        setTitle('Log In')
        break
      case 'signup':
        setTitle('Sign Up')
        break
      case 'logout':
        setTitle('Log Out')
        break
    }
  }, [mode])

  const handleClick = () => {
    const loginOptions: RedirectLoginOptions = {
      display: 'popup',
    }
    const signUpOptions: RedirectLoginOptions = {
      display: 'popup',
      screen_hint: 'sign_up',
    }
    const logoutOptions = {
      returnTo: window.location.origin,
    }
    switch (mode) {
      case 'login':
        loginWithRedirect(loginOptions)
        break
      case 'signup':
        loginWithRedirect(signUpOptions)
        break
      case 'logout':
        logout(logoutOptions)
        break
    }
  }

  return (
    <Button onClick={handleClick}>
      <Typography component='body1' color='primary'>
        {title}
      </Typography>
    </Button>
  )
}
