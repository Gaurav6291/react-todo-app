import React, {useState} from 'react';
import {v4 as uuid} from 'uuid';
import Pagination from './Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { addTodos, DeleteTodo, toggleTodo, updateTodos } from '../Redux/Todos/actions';


const TodoItem = () => {
    let todos = useSelector((state)=> state.todos);
    const dispatch = useDispatch();
    
    const [text, setText] = useState('');
    const [postPerPage, setPostPerPage] = useState(3);
    const [currentPage, setCurrentPage] = useState(1);
   

    const handleInput = (e) => {
        setText(e.target.value);
    }
    const paginate = (number) => {
        setCurrentPage(number);
        console.log(currentPage);
    }
    const nextPaginate = () => {
        setCurrentPage(currentPage+1)
        console.log(currentPage)
    }
    const prevPaginate = () => {
        setCurrentPage(currentPage-1)
        console.log(currentPage)
    }
    const handleAdd = () => {
        const payload ={
            title: text,
            id: uuid(),
            status:false

        }
        // setTodo([...todo, payload]);
      //  console.log(todo.length);
        dispatch(addTodos(payload));
      setText('');
    }
  
    const handleUpdate = (id) => {
        const b = prompt("Enter new todo");
        // const updatedTodo = todo.map((item) => {
        //     return item.id===id ? {...item, title: b}: item
        // });
        const payload={
            title: b,
            id: id,
        }
        dispatch(updateTodos(payload));
        // setTodo(updatedTodo);
    }
    const toggleStatus = (id) => {
        
    // const b = todos.map((item) => {
    //  return item.id===id ? {...item, status : !item.status}:item
    // })
    dispatch(toggleTodo(id));
    // setTodo(b);
    }

    const handleDelete = (id) => {
        // const a = todos.filter((item)=>{
        //     return item.id !== id
        // });
        // setTodo(a);
        dispatch(DeleteTodo(id))
    }
    const handleFilterByStatus = () => {
        const a = todos.filter((item) => {
            return item.status === true
        });
        // setTodo(a);
    }
    const handleCompleteAll = () => {
        const a = todos.map((item) => {
            return {...item, status: true}
        })
        // setTodo(a);
    }
   
    const handleDeleteAll = () => {
        // setTodo([]);
        todos = [];
    }
    const handleSortByTitle = () => {
        const res = todos.sort((a,b)=>{
            if(a.title.toLowerCase() < b.title.toLowerCase()){
                return -1;
            }
            if(a.title.toLowerCase() > b.title.toLowerCase()){
                return 1;

            }
            return 0;
            // console.log(a.title.toLowerCase() - b.title.toLowerCase())
        });
        
            // setTodo(res)    
        // setText("");
    }

    let  end =  currentPage * postPerPage; // 1*3=3, 2*3=6
    let start = end - postPerPage; //3-3=0, 6-3=3
    
    return (
        <div>
            <input value={text} onChange={handleInput} type="text" placeholder="Enter Todo" />
            <button onClick={handleAdd}>Add Todo</button>
            <button onClick={()=>handleFilterByStatus()}>completed tasks</button>
            <button onClick={()=>handleCompleteAll()}>complete All</button>
            <button onClick={()=>handleDeleteAll()}>Delete All</button>
            <button onClick={()=>handleSortByTitle()}>Sort By Title</button>
            <div>
                {todos.slice(start, end).map((item)=>(
                    <div key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.status?"Done":"Not Done"}</p>
                        <button onClick={()=>toggleStatus(item.id)}>Toggle Status</button>
                        <button onClick={()=>handleUpdate(item.id)}>Edit</button>
                        <button onClick={()=>handleDelete(item.id)}>Delete</button>
                    </div>
                ))}
            </div>
            <div style={{width:'500px', textAlign:'center', margin:'auto', padding:'3% 12%'}}>
            <Pagination postPerPage={postPerPage} totalPost={todos.length} nextPaginate={nextPaginate} prevPaginate={prevPaginate} currentPage={currentPage} paginate={paginate} />
            </div>
        </div>
    )
}

export default TodoItem
