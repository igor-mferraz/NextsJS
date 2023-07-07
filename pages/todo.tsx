import { Todo } from "@/types/Todo";
import { useEffect, useState } from "react";


//CSR pode ser usado com o SSG
const Todo = () =>{
    const [todoList, setTodoList] = useState<Todo[]>([]);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        loadingTodos()
    },[])

    const loadingTodos = async () =>{
        setLoading(true)
        const res = await fetch('https://jsonplaceholder.typicode.com/todos')
        const list: Todo[]= await res.json()
        setTodoList(list)
        setLoading(false)
    }


    return(
        <div>
            <h1>Lista de tarefas</h1>
            {loading && <div>Carregando...</div>}
            <ul>
                {todoList.map((todoItem, index)=>(
                    <li key={index}>{todoItem.title} - {todoItem.completed.toString()}</li>
                ))}
            </ul>
        </div>
    )
}
export default Todo;





// SSR = a cada requisição executa, antes de carregar o componente
// export const getServerSideProps = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/todos')
//     const todoList: Todo[]= await res.json()
//     return {
//         props: {
//             todo: todoList
//         }
//     }
// }
// recebe no componente como prop