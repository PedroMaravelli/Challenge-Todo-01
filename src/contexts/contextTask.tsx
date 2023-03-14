import React, { useState, createContext, ReactNode, SetStateAction, Context} from "react";



export interface ContextTaskProps {
    isDone: boolean;
}


interface TaskProviderProps {
    children: ReactNode
}

export const ContextTask = createContext({} as ContextTaskProps)



export function TaskProvider ({children}: TaskProviderProps)  {
    
    const isDone = false

   

    return(
        <ContextTask.Provider value={{
            isDone
        }}>
        {children}</ContextTask.Provider>

    )

    

}



