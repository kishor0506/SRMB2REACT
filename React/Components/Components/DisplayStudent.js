import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import ApiUrl from '../ApiUrl'
import {Modal,Button} from 'react-bootstrap'
import { Formik, Form } from 'formik';
import { TextField } from '../InputField/TextField';
import * as Yup from 'yup';
import Popup from './Popup'
import Card from 'react-bootstrap/Card'
const DisplayStudent = ()=> {
    const[students,setStudents]=useState([]);
    
    const [studId,setStudId] =useState();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = (e) => {
        console.log(e.target.value);
        setStudId(e.target.value)
        setShow(true);
    }

    useEffect(()=>{
      axios.get(`${ApiUrl}Student`).then(res=>{
        setStudents(res.data)
      }).catch((err) =>Swal.fire(err,"","error"));
     console.log(students)
    },[])
    const fetchurl = async () =>{
        let d =await axios.get(`${ApiUrl}Student`)
        return d.data;
    }
    const handleView=(e)=>{
        console.log(e)
    }
    return (
        
        <div>
            <card>
             <table className="table table-border table-hover">
            <thead>
                <th>S.No</th>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Password</th>
            </thead>
            <tbody>
                {students.map((d)=>{return(
                    <tr key={d.id}>
                        <td>{d.id}</td>
                        <td>{d.firstName}</td>
                        <td>{d.lastName}</td>
                        <td>{d.email}</td>
                        <td>{d.password}</td>
                        <td><Button variant="primary" value={d.id} onClick={handleShow}>View</Button></td>
                    </tr>
                )})}
            </tbody>
        </table>
        </card>
        <Popup data={students} dataid={studId} show={show} close={handleClose} onUserAdd={handleView}/>
     
        </div>
       

    )
}
export default DisplayStudent;