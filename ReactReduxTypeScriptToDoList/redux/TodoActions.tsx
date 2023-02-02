import { Dispatch } from "redux";

enum ActionType{
    ADD = 'ADD',
    DELETE='DELETE'
}
interface addMessage{
    type:ActionType.ADD
    message:string

}
interface deleteMessage{
    type:ActionType.DELETE
    id:number

}
type Action=addMessage|deleteMessage
export const addMessage = (message:string) => {
   return (dispatch:Dispatch<Action>)=>{
    dispatch({
        type: ActionType.ADD,
        message: message
    })
   }
        
    };
  

export const deleteMessage = (id:number) => {
    return (dispatch:Dispatch<Action>)=>{
     dispatch({
         type: ActionType.DELETE,
         id: id
     })
    }
         
     };
   