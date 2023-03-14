
import { useState } from 'react'
import { CardTask } from './CardTask'
import styles from './CountTaskCompleted.module.css'

interface PropsCountTask {
    countTaskCreate:number
}


export function CountTaskCompleted (props: PropsCountTask){

    return(
        <div className={styles.containerMaids}>
            <div className={styles.maidsTasks}>
                <div className={styles.countTasks}>
                    <strong>Tarefas criadas</strong>
                    <p>{props.countTaskCreate}</p>
                </div>
                <div className={styles.taskCompleted}>
                    <strong >Concluídas</strong>
                    <p>2 de 5</p>
                </div>

            </div>
            
           
            
        </div>
    )
}