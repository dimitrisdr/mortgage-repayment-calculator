import './App.css'
import Calculator from './components/calculator'
import Results from './components/results'
import { ValidateContext } from './hooks/validateContext'
import { useState } from 'react'
function App() {

  const [formIsValid, setFormIsValid] = useState(false)
  const data = {amount:'', term:'', rate:'', mortageType: ''}
  
  return (
    
    <main className='main grid-item'>
      <ValidateContext.Provider value={null}>
        <Calculator data= {data} />
        <Results data= {data} />
      </ValidateContext.Provider>
    </main>
  )
}

export default App
