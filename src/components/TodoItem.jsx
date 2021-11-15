import React, {useState} from 'react';
import {v4 as uuid} from 'uuid';
import Pagination from './Pagination';
const TodoItem = () => {
    const [todo, setTodo] = useState([]);
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
        setTodo([...todo, payload]);
        console.log(todo.length);
        setText('');
    }

    const handleUpdate = (id) => {
        const b = prompt("Enter new todo");
        const updatedTodo = todo.map((item) => {
            return item.id===id ? {...item, title: b}: item
        });
        setTodo(updatedTodo);
    }
    const toggleStatus = (id) => {
        
    const b = todo.map((item) => {
     return item.id===id ? {...item, status : !item.status}:item
    })
    setTodo(b);
    }

    const handleDelete = (id) => {
        const a = todo.filter((item)=>{
            return item.id !== id
        });
        setTodo(a);
    }
    const handleFilterByStatus = () => {
        const a = todo.filter((item) => {
            return item.status === true
        });
        setTodo(a);
    }
    const handleCompleteAll = () => {
        const a = todo.map((item) => {
            return {...item, status: true}
        })
        setTodo(a);
    }
    let  end =  currentPage * postPerPage;
    let start = end - postPerPage;
    
    return (
        <div>
            <input value={text} onChange={handleInput} type="text" placeholder="Enter Todo" />
            <button onClick={handleAdd}>Add Todo</button>
            <button onClick={()=>handleFilterByStatus()}>completed tasks</button>
            <button onClick={()=>handleCompleteAll()}>complete All</button>
            <div>
                {todo.slice(start, end).map((item)=>(
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
            <Pagination postPerPage={postPerPage} totalPost={todo.length} nextPaginate={nextPaginate} prevPaginate={prevPaginate} currentPage={currentPage} paginate={paginate} />
            </div>
        </div>
    )
}

export default TodoItem
