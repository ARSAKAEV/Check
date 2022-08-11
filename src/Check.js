import { useState } from "react";

function Check() {
    // const [check, setCheck] = useState(true)

    // function handleCheck1() {
    //     setCheck(!check)
    // }

    // return(
    //     <input type='checkbox' checked={check} onChange={handleCheck1}/>
    // )




    const [text, setText] = useState()

    const [todos, setTodos] = useState([
      {
        done: true
      },    
      {
        done: true
      },
      {
        done: false
      },
    ])
  
    function handleAdd(){
      setTodos([
        {
          done: text
        },
        ...todos
      ])
    }
  
    function hadleChange(event){
      setText(event.target.value)
    }
  
  
  
    return (
      <>
        <div>
          <div>
            <input
              type='checkbox' Check={text} onChange={hadleChange}
            />
            
            <button onClick={handleAdd}>
              add
            </button>
          </div>
          <ul>
            {todos.map((item) =>{
              return(
              <li>
                <input type='checkbox' checked={item.done}/>
              </li>
              )
            })}
          </ul>
        </div>
      </>
    )
}

export default Check;