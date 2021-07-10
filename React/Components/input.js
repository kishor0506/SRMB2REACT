
import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Input = () => {

    const [student, setStudent] = useState({
        id:Math.floor((Math.random() * 100000) + 1),
        firstName: '',
        lastName: '',
        mobileNo: '',
        email: '',
        dpt: ''
    })
    const [viewStudent,setViewStudent] =useState([])
    
    
    const onChange = (e) => {

        setStudent((prv)=>{
            return {
                ...prv,
                [e.target.name]:e.target.value
            }
        })
        console.log(student)
    }
    useEffect(()=>{
        axios.get("http://localhost:4000/students").then((r)=>{
            console.log(r.data);
            setViewStudent(r.data);
        }).catch(err=>console.error(err))
    },[])


    const onSubmit = () => {
        axios.post("http://localhost:4000/students", student).then((res) => {
            console.log(res.data);
        }).catch((err) => console.error(err))
    }
  

    return (
        <div>
            <section className="testimonial py-5" id="testimonial">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-4 py-5 bg-primary text-white text-center ">
                            <div className=" ">
                                <div className="card-body">
                                    <img src="https://cdn.dribbble.com/users/35253/screenshots/3984334/ideate_dribb.gif" />
                                    <h2 className="py-3">Registration</h2>
                                    <p>

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 py-5 border">
                            <h4 className="pb-4">Please fill with your details</h4>
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input id="FirstName" name="firstName" placeholder="FirstName" className="form-control" type="text" onChange={onChange} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="text" name="lastName" className="form-control" id="inputEmail4" placeholder="LastName" onChange={onChange} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input id="Mobile No" name="mobileNo" placeholder="Mobile No" className="form-control" onChange={onChange} required="required" type="number" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="text" name="email" className="form-control" id="inputEmail4" onChange={onChange} placeholder="Email" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input id="dept" name="dept" placeholder="Department" className="form-control" onChange={onChange} required="required" type="text" />
                                    </div>

                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <div className="form-group">
                                            <div className="form-check">


                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="form-row">
                                    <button type="button" className="btn btn-danger" onClick={onSubmit}>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        
            {viewStudent.map((d)=>{
                return <p>{d.id}</p>
            })}
        </div>
    )
}
export default Input;