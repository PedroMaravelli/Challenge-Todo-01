import './global.css'

import { Header } from './Components/Header'
import { InputCreateTask } from './Components/InputCreateTask'
import { CountTaskCompleted } from './Components/CountTaskCompleted'
import { CardTask } from './Components/CardTask'
import { ContextTask } from './contexts/contextTask'


function App() {


  return (
    <ContextTask.Provider
      value={{
        isDone:0,
        
      }}
    >

        <body>
          <Header/>
          <InputCreateTask />

        </body>
    </ContextTask.Provider>
  )
}

export default App
