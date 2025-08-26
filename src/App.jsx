import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Collab from "../src/features/sections/Collab.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className="min-h-screen grid place-items-center">
        {/* <h1 className="text-3xl font-bold text-brand-500">Tailwind v4 funker</h1> */}
        <Collab/>
      </main>
    </>
  )
}

export default App
