import React, { useState, createContext, ReactNode} from "react";



export interface ContextTaskProps {
    isDone: number;
    toggleDone?: () => void;
}


const DEFAULT_PROPS  = {
    isDone: 0
}

export const ContextTask = createContext<ContextTaskProps>(DEFAULT_PROPS)
