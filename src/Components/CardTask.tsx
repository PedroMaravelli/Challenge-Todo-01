import styles from './CardTask.module.css'
import removeTask from '../assets/removeTask.svg'
import { useEffect, useState, useContext } from 'react'
import { ContextTask } from '../contexts/contextTask'
import { Trash } from 'phosphor-react';
import check from '../assets/check.svg'
import checkList from '../assets/checkList.svg'


interface PropsTaskCard {
    contentTask: string,
    onDeleteComment: (comment: string) => void;
}



export function CardTask ({contentTask, onDeleteComment}: PropsTaskCard){

    function handleDeleteComment (){
        onDeleteComment(contentTask)
    }

    const [taskDidCompleted, setTaskDidCompleted ] = useState(false)

   
    let {isDone} = useContext(ContextTask)
    
    function taskIsCompleted(){
        

        if(taskDidCompleted){
            setTaskDidCompleted(false)
            isDone = -1

        }else{
            setTaskDidCompleted(true)
            isDone = +1
        }

    }
    


    return(
        <div className={styles.containerCardTask}>
            <div className={styles.taskCard}>
                <div className={styles.buttonAndText}>
                    <button 
                        onClick={taskIsCompleted}
                        className={styles.buttonSelectNone}
                        type='button'  
                        >
                            <img className={styles.checkImg} src={taskDidCompleted ? checkList : check }/>
                        </button>
                    
                    <p className={taskDidCompleted ? styles.paragraphStyleTaskIsDone : styles.buttonAndText}><div></div>{contentTask}</p>

                </div>
                    
                <button 
                type='submit'
                onClick={handleDeleteComment}

                ><Trash size={16}></Trash></button>
            </div>

        </div>
    )
}