import styles from './CardTask.module.css'
import removeTask from '../assets/removeTask.svg'
import { FocusEvent, useEffect, useState } from 'react'
import { TaskProvider } from '../contexts/contextTask'
import { Trash } from 'phosphor-react';

interface PropsTaskCard {
    contentTask: string,
    onDeleteComment: (comment: string) => void;
}



export function CardTask ({contentTask, onDeleteComment}: PropsTaskCard){

    function handleDeleteComment (){
        onDeleteComment(contentTask)
    }


    return(
        <div className={styles.containerCardTask}>
            <div className={styles.taskCard}>
                <div className={styles.buttonAndText}>
                    <button className={styles.buttonSelecteNone}></button>
                
                    <p>{contentTask}</p>

                </div>
                    
                <button 
                type='submit'
                onClick={handleDeleteComment}

                ><Trash size={16}></Trash></button>
            </div>

        </div>
    )
}