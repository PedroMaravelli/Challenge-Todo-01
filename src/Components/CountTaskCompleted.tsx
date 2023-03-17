
import { useContext, useEffect, useState } from 'react'
import { ContextTask } from '../contexts/contextTask'
import { CardTask } from './CardTask'
import styles from './CountTaskCompleted.module.css'

interface PropsCountTask {
    countTaskCreate:number
}


export function CountTaskCompleted (props: PropsCountTask){

    let {isDone} = useContext(ContextTask)
    const [ countCompleteTask, setCountCompleteTask] = useState(0)

    useEffect(() => {
        setCountCompleteTask(isDone)

    }, [isDone])

    return(
        <div className={styles.containerMaids}>
            <div className={styles.maidsTasks}>
                <div className={styles.countTasks}>
                    <strong>Tarefas criadas</strong>
                    <p>{props.countTaskCreate}</p>
                </div>
                <div className={styles.taskCompleted}>
                    <strong >Concluídas</strong>
                    <p>{countCompleteTask} de {props.countTaskCreate}</p>
                </div>

            </div>
        </div>
    )
}