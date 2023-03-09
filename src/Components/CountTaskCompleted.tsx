
import { useState } from 'react'
import { CardTask } from './CardTask'
import styles from './CountTaskCompleted.module.css'




export function CountTaskCompleted (){

    return(
        <div className={styles.containerMaids}>
            <div className={styles.maidsTasks}>
                <div className={styles.countTasks}>
                    <strong>Tarefas criadas</strong>
                    <p>5</p>
                </div>
                <div className={styles.taskCompleted}>
                    <strong >Concluídas</strong>
                    <p>2 de 5</p>
                </div>

            </div>
            
           
            
        </div>
    )
}