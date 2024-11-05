import './App.css'
import Calculator from './components/calculator'
import Results from './components/results'
import { DataContext } from './hooks/clearContext'
import { useState } from 'react'

const data = {amount:'', term:'', rate:'', mortageType: ''};

function App() {
  const [formIsValid, setFormIsValid] = useState(false);
  const [inputValues, setInputValues] = useState(data)
  
  return (
    <main className='main grid-item'>
      <DataContext.Provider value={{inputValues, setInputValues, formIsValid, setFormIsValid}}>
        <Calculator data={data} />
        <Results data={data} />
      </DataContext.Provider>
    </main>
  )
}

export default App
