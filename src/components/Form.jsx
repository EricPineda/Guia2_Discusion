import React,{useState} from 'react';
import Todo from '../components/Todo';


const Form = () => {
    const [todo, setTodo] = useState ({todo:'',cantidad:''})
    const[todos,setTodos] = useState([
        /*{todo: 'todo 1', cantidad:4},
        {todo: 'todo 2',  cantidad:6},
        {todo: 'todo 3', cantidad:8},*/
    ])

    /*var nombre = ''
    var cant = ''*/
    //setTodo({[e.target.name]: e.target.value})
    const handleChange = e => {
        let cant = todo.cantidad
        setTodo({[e.target.name]: e.target.value, cantidad:cant})

    }
    const handleChangeC = e => {
        let nombre = todo.todo
        setTodo({todo:nombre,[e.target.name]: e.target.value})
    }

    const handleClick = e => {
        
       /* if (nombre.length === 0 || nombre.trim() === ''){
            alert('No campos vacíos')
            return
        }else{*/

            if(todo.todo.trim().length===0 || todo.cantidad.trim().length===0 ){
                alert('Complete correctamente las cajas de ingreso de datos.')
                return
            }else if(isNaN(todo.cantidad)){
                alert('La cantidad debe ser dato numérico.')
                return
            }

       // alert(nombre)
        //setTodo({todo:nombre,cantidad:cant})
        setTodos([...todos,todo])

        //}
    }

    const deleteTodo = indice => {
        const newTodos = [...todos] 
        newTodos.splice(indice,1)
        setTodos(newTodos)
    }

   
    return (
        <>
        <form onSubmit = {e => e.preventDefault()}>
            <label>Producto  </label> <br />
            <input type="text" name="todo" onChange={handleChange} />
            <br />
            <label>Cantidad  </label> <br />
            <input type="number" name="cantidad" onChange={handleChangeC} />
            <button onClick ={handleClick}>Agregar</button>
        </form>

        <p>Cantidad - Producto</p>

       {
           todos.map((value, index) => ( <Todo todo={value.todo} key={index} cantidad={value.cantidad} index={index} deleteTodo={deleteTodo}/>))
       }



        </>
        
    )
}
export default Form