export interface Todo {
   id: number;
   todo: string;
   isDone: boolean; 
}

// type Actions = 
//    | { type: 'add', payload: string }
//    | { type: 'remove', payload: number }
//    | { type: 'done', payload: number }

//  import React, { useReducer } from 'react'
 
//  const ToDoReducer = (state: Todo[], action: Actions) => {
//    switch (action.type) {
//       case 'add':
//          return [
//             ...state,
//             { id: Date.now(), todo: action.payload, isDone: false}
//          ]
//       case'remove':
//          return state.filter(todo => todo.id!== action.payload)
//       case 'done':
//          return state.map((todo) => 
//             todo.id !== action.payload ? { ...todo, isDone: !todo.isDone} : {}
//          )
//    }
//  }

//  const ReducerExample = () => {

//    const [state, dispatch] = useReducer(ToDoReducer, [])

//    return (
//    )
//  }
 
//  export default ReducerExample