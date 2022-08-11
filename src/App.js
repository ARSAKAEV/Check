import { useState } from 'react';

function App() {

const [text, setText] = useState('')
const [check, setCheck] = useState(false)
const [todos, setTodos] = useState([])

function handleChange(event){
  setText(event.target.value)
}

function handleChange1(event){
  setCheck(event.target.checked)
}


function handleAdd(){
  setTodos([
    {
      text: text,
      done: check
    },
    ...todos
  ])
}

return(
  <>
    <div>
      <div>
        <input type='text' value={text} onChange={handleChange}/>
        <input type='checkbox' value={check} onChange={handleChange1}/>
        <button onClick={handleAdd}>add</button>
      </div>
      <ul>
        {todos.map((item) =>{
            return(
              <li>
                {item.text}
                <input type='checkbox' checked={item.done} onChange={handleChange}/>
              </li>
            )
        })}
      </ul>
    </div>
  </>
)
}







// function App() {

//   const [text, setText] = useState('')

//   const [todos, setTodos] = useState([
//     {
//       text: 'React',
//       done: true
//     },    
//     {
//       text: 'Js',
//       done: true
//     },
//     {
//       text: 'HTML',
//       done: false
//     },
//   ])

//   function handleAdd(){
//     setTodos([
//       {
//         text: text,
//         done: text
//       },
//       ...todos
//     ])
//   }

//   function hadleChange(event){
//     setText(event.target.value)
//   }



//   return (
//     <>
//       <div>
//         <div>
//           <input
//             type='text' value={text} onChange={hadleChange}
//           />
//           <button onClick={handleAdd}>
//             add
//           </button>
//         </div>
//         <ul>
//           {todos.map((item) =>{
//             return(
//             <li key={item.id}>
//               {item.text}
//             </li>
//             )
//           })}
//         </ul>
//       </div>
//     </>
//   )


  // const [text, setText] = useState('')


  // function handleClick(){
  //   alert(text)
  // }

  // function hadleChange(event){
  //   setText(event.target.value)
  // }

  // return (
  //   <>
  //   <input type='text' value={text} onChange={hadleChange}/>
  //   <button onClick={handleClick}>
  //     tab
  //   </button>
  //   </>
  // );
  // }

export default App;
