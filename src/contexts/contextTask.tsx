import React, { useState, createContext, ReactNode, SetStateAction, Context} from "react";



export interface ContextTaskProps {
    taskDescription: string[],
    idTask: number,
    newTask: string,
    setIdTask: React.Dispatch<SetStateAction<number>>,
    setTaskDescription: React.Dispatch<SetStateAction<Array<string>>>,
    setNewTask: (value: React.SetStateAction<string>) => void,

    
}


interface TaskProviderProps {
    children: ReactNode
}

export const ContextTask = createContext({} as ContextTaskProps)



export function TaskProvider ({children}: TaskProviderProps)  {
    const [taskDescription, setTaskDescription] = useState([''])
    const [idTask, setIdTask] = useState(0)
    const [newTask, setNewTask] = useState('')

   

    return(
        <ContextTask.Provider value={{
            taskDescription,
            idTask,
            newTask,
            setIdTask,
            setTaskDescription,
            setNewTask
            
        }}>
        {children}</ContextTask.Provider>

    )

    

}



