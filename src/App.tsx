import './global.css'

import { Header } from './Components/Header'
import { InputCreateTask } from './Components/InputCreateTask'
import { CountTaskCompleted } from './Components/CountTaskCompleted'
import { CardTask } from './Components/CardTask'
import { TaskProvider } from './contexts/contextTask'


function App() {


  return (
    <TaskProvider>

        <body>
          <Header/>
          <InputCreateTask />

        </body>
    </TaskProvider>
  )
}

export default App
