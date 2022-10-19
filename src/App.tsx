import { FC, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const App: FC = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
    </div>
  )
}

export default App
