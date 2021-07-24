import React, { useEffect, useState } from 'react'
import axios from 'axios'
const DisplayDropDownApi =() =>{
    const[city,setCity] = useState("");
    const[student,setStudent] =useState([]);
    const onChangeEvent =(event)=>{
        // const {name,value} =event.target;
        setCity(event.target.value);
        console.log(city)
      
    }
    useEffect(()=>{
        axios.get("http://localhost:4000/students").then((response)=>{
            setStudent(response.data)
            console.log(student)
        }).catch(err =>console.log("=======>"+err))
    },[])

    return (
        <div className="col-lg-4 justify-content-center">
            <select className="form-control" onChange={onChangeEvent}>
                <option disabled>Open this select menu</option>   
                {student.map((d)=>{
                    return <option key={d.id} value={d.city}>{d.city}</option>
                })}
            
            </select>
            <br/>
                <br/>
                <br/>
                <div className="card w-100" style={{width: '18rem'}}>
                    <div className="card-header bg-info">
                        <h3>Student Data</h3>
                    </div>
                  <div className="card-body">
                    <table className="table table-border">
                        <tr><th>ID</th><th>City</th><th>Name</th><th>Age</th></tr>
                        {student.filter(x=>x.city == city).map((d)=>{
                            return (    <tr>
                                <td>{d.id}</td>
                                <td>{d.city}</td>
                                <td>{d.name}</td>
                                <td>{d.age}</td>
                            </tr>)
                                })}
                    </table>
                  </div>
                </div>  
            <div>
                
            </div>
        </div>
    )
}
export default DisplayDropDownApi;