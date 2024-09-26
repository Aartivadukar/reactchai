import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>aarti</h1>
     <Card username="aarti" btnText="click me"/>
        </>
  )
}

export default App
