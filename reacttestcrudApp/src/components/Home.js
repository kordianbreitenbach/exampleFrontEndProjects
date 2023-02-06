import react, { Fragment } from "react";
import {Button,Table}from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Workers from "./workers";
import {Link,useNavigate} from "react-router-dom";
const Home =()=>{

    let history=useNavigate();
 const handleDelete =(id)=>{
      let index=Workers.map((e)=>{
        return e.id
      }).indexOf(id);
      Workers.splice(index,1);
      history('/');
   
 }
 const handleEdit=(id,Name,LastName)=>{
  localStorage.setItem('Name',Name);
  localStorage.setItem('LastName',LastName);
  localStorage.setItem('id',id);
 }
return(
 <Fragment>
    <div style={{margin:"7rem"}}>
   <Table striped bordered hover size="sm">
    <thead>
      <tr>
     <th>
        Name
     </th>
       <th>LastName</th>
          <th>
            Actions
          </th>
      </tr>


    </thead>
      <tbody>
        {
            Workers&&Workers.length>0?
            Workers.map(item=>{
                return(
                    <tr>
                        <td>
                            {item.Name}
                        </td>
                        <td>
                            {item.LastName}
                        </td>
                        <td>
                            <Link to={'/edit'}>
                            <Button variant="success" onClick={()=>{handleEdit(item.id,item.Name,item.LastName)}}>EDIT</Button>
                            </Link>
                            &nbsp;
                            <Button  variant="danger" onClick={()=>{handleDelete(item.id)}}>DELETE</Button>
                        </td>
                        
                    </tr>
                )
            })
            :
            "No data available"
        }
      </tbody>

   </Table>
      <br>
    
      </br>
  <Link className="d-grid gap-2" to={"/create"}>
    <Button size="lg" >CREATE</Button>
      </Link>

    </div>

 </Fragment>
);

};
export default Home;