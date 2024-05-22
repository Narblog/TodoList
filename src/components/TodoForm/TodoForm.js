import { useState } from "react"
import styles from "./TodoForm.module.css"

const TodoForm=({onAdd})=>{
    const [text,setText]=useState("")
    return(
       <form onSubmit={(e)=>{
        e.preventDefault()
        if(!text.trim()){
            return
        }
        onAdd({
            id:Date.now(),
            text,
            timeAdded:Date.now(),
            timeCompleted:null,
            done:false
        })
    
        setText("")
       }}>
        <input 
                type="text" 
                className={styles.control}
                value={text}
                onChange={e=>setText(e.target.value)}/>
        <button>Save</button>

       </form>
    )
}
export default TodoForm