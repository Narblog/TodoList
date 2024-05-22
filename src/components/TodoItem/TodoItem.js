import styles from "./TodoItem.module.css"
import { convert } from "../../lib/convert"


const TodoItem=({task,onComplete,onCancel})=>{
    const st=task.done? styles.completed:styles.task
    return(
        <div className={st}>
            <h3>{task.text}</h3>
            <p>onAdded <b>{convert(task.timeAdded)}</b></p>
         
             {
                !task.done
                ?<button onClick={()=>onComplete(task)} >Complete</button>
                :<button onClick={()=>onCancel(task)}>Cancel</button>
              }


         
        </div>
    )
}
export default TodoItem