import TodoForm from "../TodoForm/TodoForm"
import TodoItem from "../TodoItem/TodoItem"
import styles from "./TodoList.module.css"

const TodoList=({data,done,...props})=>{
    return(
        <div className={styles.container}>
            <TodoForm onAdd={props.onAdd}/>
            <div className={styles.parent}>
                {
                    data.map((item,index)=>
                        <TodoItem
                        key={item.id}
                        task={item}
                        onComplete={props.onComplete}
                        onCancel={props.onCancel}
                        />
                    )
                  
                }

            </div>
            {data.length>0 && <h3>{done}/{data.length}</h3>}
           
        </div>
    )
}
export default TodoList