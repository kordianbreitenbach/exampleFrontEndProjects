

const ADD = 'ADD';
const DELETE='DELETE';
const todos:any=[];
 const messageReducer= (state:any = todos, action:any) => {
    switch (action.type) {
      case ADD:
        return [
          ...state,
          action.message
        ];
      case DELETE:
        return [...state.slice(0,action.id),...state.slice(action.id+1,state.length)];
      default:
        return state;
    }
  };
  export default messageReducer;
