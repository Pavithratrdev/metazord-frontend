import Header from "../components/navbar";
import Table from 'react-bootstrap/Table';
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap/dist/css/bootstrap.min.css" 
import { Button, Alert } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import Table1 from "../components/Table";


const GetStudInformation =() => {   

    const [data, setData] = useState([]);
    const [msg,setMsg] = useState()
    const [variant,setvariant] = useState()
    const navigate = useNavigate()

    function Delete(id) {
        axios.delete(`http://localhost:5000/students/deletestud/${id}`).then(res=>{
            console.log(res)
            setvariant("success")
            setMsg("Deleted Sucessfully")
            navigate('/studentlist',{replace:true})
            window.location.reload(false);
        }).catch(e=>{
            console.log(e);
            setvariant("danger")
            setMsg("Not sent")
        })
    }


    useEffect(() => {
  
       axios.get('http://localhost:5000/students/getAllStu')
        .then(function (response) {          
          setData(response.data.allStudents);   
          console.log(response.data.allStudents);         
        })
        .catch(function (error) {
          console.log(error);
          alert("Error");
        });
    }, [])

    return (
        <div>
             <Header/>
             <div className='table-container'>
           
             <h1 className='mt-5'>Student Details</h1>
             <div className='table1'>
                 <Table striped className='col-md-6'>
                     <thead>
                         <tr>
                         <th>Roll No</th>
                         <th>Name</th>
                         <th>Department</th>
                         <th>Email ID</th>
                         <th>Phone Number</th>
                         <th>Options</th>
                         </tr>
                     </thead>
                     <tbody>
                     { data? data.map( item=>  (   
                            <tr>
                             {console.log(item._id)}
                             
                              <td>{item.rollno}</td>
                              <td>{item.name}</td> 
                              <td>{item.department}</td> 
                              <td>{item.emailid}</td> 
                              <td>{item.phonenumber}</td>  
                              <td>
                                 <div className='btn'>
                                     <Link to={`/update/${item._id}`}><Button variant='primary'>Edit</Button></Link> 
                                     <button className='button' onClick={()=>{Delete(item._id)
                                    }} >Delete</button>
                                 </div>
                             </td>                         
                           </tr>
                            )) : <div style={{
                                width:"100%",
                                height:"100%",
                                display:"flex",
                                justifyContent:"center",
                                alignItems:"center",
                                fontSize:"200px",
                             }}>No Data</div> }
                     </tbody>
                 </Table>
                 {msg && <Alert variant={variant} className="mt-5" dismissible>{msg}</Alert>}
             </div>
         </div>
        </div>
      );
}

export default GetStudInformation;