export const initialStore=()=>{
  return{
    message: null,
    contacts: [
      {
        name: "John Doe",
        phone: "777-666-555",
        email: "jdoe@gmail.com",
        address: "123 Main St.",
        id: 14,
      },
      {
        name: "Jane Doe",
        phone: "111-222-3333",
        email: "janed@gmail.com",
        address: "123 Elm St.",
        id: 15,
      }
    ]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    default:
      throw Error('Unknown action.');
  }    
}
