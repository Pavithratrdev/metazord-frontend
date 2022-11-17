import Header from "../components/navbar";
import {
    Form,
    Card,
    Button,
    Alert
} from 'react-bootstrap'
import { useState, useEffect } from "react";
import axios from 'axios' 
import 'bootstrap/dist/js/bootstrap.min.js'
import { useNavigate, useParams } from "react-router-dom";
    
const UpdateStudInfo = () =>{

    let {id} = useParams();

    const[name,setName] = useState('')
    const [Rollno,setRollno] = useState('')
    const [dept,setDept] = useState('')
    const [email,setemail] = useState('')
    const [photo,setPhoto] = useState('')
    const [phone,setPhone] = useState(0)
    const [msg,setMsg] = useState()
    const [variant,setvariant] = useState()
    const navigate = useNavigate()

    useEffect(() => { 
  
        axios.get(`http://localhost:5000/students/getStudOne/${id}`)
          .then(function (response) {
            console.log(response)
           
            setName(response.data.allStudents.name);
            setRollno(response.data.allStudents.rollno);
            setDept(response.data.allStudents.department);
            setemail(response.data.allStudents.emailid);
            setPhone(response.data.allStudents.phonenumber);    
               
          })
          .catch(function (error) {
            console.log(error);
            alert("Error");
          });     
    
      }, [])
    
    const Submit = async(e) =>{
        e.preventDefault();
        const body={
            name: name,
            rollno: Rollno,
            department: dept,
            emailid: email,
            released: Date.now(),
            phonenumber: phone
        }
        axios.patch(`http://localhost:5000/students/update/${id}`,body).then(res=>{
            console.log(res)
            setvariant("success")
            setMsg("Form updated Sucessfully")
            navigate('/studentlist',{replace:true});
        }).catch(e=>{
            console.log(e);
            setvariant("danger")
            setMsg("Not sent")
        })
    }

    

    return(
        <div>
            <Header />
            <div className="card-temp">
                <h1 className="mb-5">Register</h1>
                <Card className="col-md-5">
                    <Card.Header>Register</Card.Header>
                    <Card.Body>
                        <Form onSubmit={Submit}>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="Full Name" className="col-md-4" >Full Name : </Form.Label>
                                <Form.Control type="text" name="fullname" value={name} onChange={e=>setName(e.target.value)} placeholder="fullname" className="col-md-6" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="Roll No" className="col-md-4" >Roll No : </Form.Label>
                                <Form.Control type="text" name="rollno" placeholder="Roll no" className="col-md-6" value={Rollno} onChange={e=>setRollno(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="Department" className="col-md-4" >Department : </Form.Label>
                                <Form.Control type="text" name="dept" placeholder="Department" className="col-md-6" value={dept} onChange={e=>setDept(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="Email Id" className="col-md-4" >Email Id : </Form.Label>
                                <Form.Control type="email" name="email" placeholder="Emailid" className="col-md-6" value={email} onChange={e=>setemail(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="Photo" className="col-md-4" >Photo : </Form.Label>
                                <Form.Control type="file" name="photo" placeholder="Your Photo" className="col-md-6"  />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="Phone No" className="col-md-4" >Phone No : </Form.Label>
                                <Form.Control type="number" name="phone" placeholder="phone no" className="col-md-6"  value={phone} onChange={e=>setPhone(e.target.value)}/>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
                {msg && <Alert variant={variant} className="mt-5" dismissible>{msg}</Alert>}
            </div>
        </div>
    )
}
export default UpdateStudInfo;