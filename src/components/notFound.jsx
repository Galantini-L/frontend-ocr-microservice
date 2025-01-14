import { useRouteError } from 'react-router-dom'

export function NotFound () {
  const error = useRouteError()
  console.error('crazy error jaja')

  return (
    <div id='error-page'>
      <h1>Oops</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
