import styles from './InputCreateTask.module.css'

import criar from '../assets/criar.svg'
import { ChangeEvent, FormEvent, useState } from 'react'
import { CountTaskCompleted } from './CountTaskCompleted'

import { CardTask } from './CardTask'


export function InputCreateTask(){

    const [taskDescription, setTaskDescription] = useState(['Fazer lição de inglês'])
    const [newTask, setNewTask] = useState('')

    function handleNewTask (event: ChangeEvent<HTMLInputElement>){
        setNewTask(event.target.value)
    }

    function insertNewTaskInList (event: FormEvent){
        event.preventDefault()
        setTaskDescription([...taskDescription, newTask ])
        setNewTask('')
        
    }

    function deleteComment (commentDelete: string){
        const taskWithoutDeleteOne = taskDescription.filter((task)=>{
            return task !== commentDelete
        })

        setTaskDescription(taskWithoutDeleteOne)
    }

    const countTaskCreate = taskDescription.length
    
    return(
        <div className={styles.containerOfCardTaskCenter}>

            <form onSubmit={insertNewTaskInList} className={styles.task}>
                <input 
                onChange={handleNewTask}
                type="text" 
                value={newTask}
                placeholder='Adicione uma nova tarefa' 
                name="task" />
                <button 
                    type='submit' 
                    >Criar
                    <img src={criar}></img></button>
            </form>
            <CountTaskCompleted countTaskCreate={countTaskCreate}></CountTaskCompleted>
            {
                taskDescription.map((task)=>{
                    return(
                        <CardTask contentTask={task} onDeleteComment={deleteComment}></CardTask>
                    )
                })
            }
        </div>
    )
}