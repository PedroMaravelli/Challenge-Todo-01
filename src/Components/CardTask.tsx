import styles from './CardTask.module.css'
import removeTask from '../assets/removeTask.svg'
import { FocusEvent, useEffect, useState } from 'react'
import { TaskProvider } from '../contexts/contextTask'

interface PropsTaskCard {
    contentTask: string
}



export function CardTask (props: PropsTaskCard){


    return(
        <div className={styles.containerCardTask}>
            <div className={styles.taskCard}>
                <div className={styles.buttonAndText}>
                    <button className={styles.buttonSelecteNone}></button>
                
                    <p>{props.contentTask}</p>

                </div>
                    
                <button type='submit'><img src={removeTask}></img></button>
            </div>

        </div>
    )
}