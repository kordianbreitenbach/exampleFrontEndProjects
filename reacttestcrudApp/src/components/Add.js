import react,{useState} from "react";
import {Button,Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Workers from "./workers";
import {v4 as uuid} from "uuid";
import {Link,useNavigate} from "react-router-dom";

const Add=()=>{
    const [Name,setName]=useState('');
    const [lastName,setLastName]=useState('');
    let history=useNavigate();
    const handleSubmit =(e)=>{
       e.preventDefault();
         const ids=uuid();
         let uniqueId=ids.slice(0,8);
         let a=Name;
         let b=lastName;
         Workers.push({id:uniqueId,Name:a,LastName:b});

         history('/');

    };
    return(
        <div>
            <Form className="d-grid gap-2">
                  <Form.Group className="mb-3" controlId="formName">
                     <Form.Control type="text" placeholder="enter name" required onChange={(e)=>setName(e.target.value)}></Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formLastName">
                     <Form.Control type="text" placeholder="enter last name" required onChange={(e)=>setLastName(e.target.value)}></Form.Control>
                  </Form.Group>
                  <Button variant="info" onClick={(e)=>{handleSubmit(e)}} type="submit">submit</Button>
            </Form>
        </div>
    );
}
 export default Add;