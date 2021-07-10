import React,{useState} from 'react'
import Studparent from './Studparent'
const Studchild=()=> {

    const[reg,setreg]=useState({
        firstname:'',
        email:'',
        mobile:0,
        comment:''
  })
  const pass=(event)=>{
      const{name,value}=event.target
      setreg((prev)=>{
          return{
              ...prev,
              [name]:value
          }

      })
      console.log(reg)
      }
  }
    
    return (
        <div>
            <Studparent data={pass}/>
        </div>
    )

export default Studchild;