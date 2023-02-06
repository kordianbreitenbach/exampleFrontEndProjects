import react,{useState,useEffect} from "react";
import {Button,Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Workers from "./workers";
import {v4 as uuid} from "uuid";
import {Link,useNavigate} from "react-router-dom";

const Edit =()=>{
    const [Name,setName]=useState('');
    const [lastName,setLastName]=useState('');
    const [id,setId]=useState('');
    let history=useNavigate();
    let index=Workers.map((e)=>{
        return e.id
      }).indexOf(id);

      const handleSubmit =(e)=>{
        e.preventDefault();
         let a=Workers[index];
         a.Name=Name;
         a.LastName=lastName;

          history('/');
 
     };
     useEffect(()=>{
        setName(localStorage.getItem('name'));
        setLastName(localStorage.getItem('LastName'));
        setId(localStorage.getItem('id'));
     },[])
return (
    <div>
         <Form className="d-grid gap-2">
                  <Form.Group className="mb-3" controlId="formName">
                     <Form.Control type="text" placeholder="enter name" value={Name} required onChange={(e)=>setName(e.target.value)}></Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formLastName">
                     <Form.Control type="text" placeholder="enter last name" value={lastName} required onChange={(e)=>setLastName(e.target.value)}></Form.Control>
                  </Form.Group>
                  <Button variant="info" onClick={(e)=>{handleSubmit(e)}} type="submit">update</Button>
            </Form>
    </div>
);

};
 export default Edit;