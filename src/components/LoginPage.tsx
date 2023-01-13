import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

type sign = {
    name:string,email:string,phone:string,img:string,pwd:string,conPwd:string
}
type login = {
    name:string,email:string,pwd:string
}

type LProps={
    sigN:sign[]
    setsign:React.Dispatch<React.SetStateAction<sign[]>>
    logiN:login[]
    setlogin:React.Dispatch<React.SetStateAction<login[]>>
}

const LoginPage = (props:LProps) => {
    var nameRef = useRef<HTMLInputElement>(null)
    var emailRef = useRef<HTMLInputElement>(null)
    var pwdRef = useRef<HTMLInputElement>(null)
    var navigate = useNavigate()


    const loginHandler=()=>{
        if(nameRef.current!==null && emailRef.current!==null && pwdRef.current!==null){
            for(var i=0 ;i<props.sigN.length;i++){
                console.log(nameRef.current.value==props.sigN[i].name && emailRef.current.value==props.sigN[i].email && pwdRef.current.value==props.sigN[i].pwd)
                console.log(nameRef.current.value,props.sigN[i].name ,emailRef.current.value,props.sigN[i].email , pwdRef.current.value,props.sigN[i].pwd)
                if(nameRef.current.value==props.sigN[i].name && emailRef.current.value==props.sigN[i].email && pwdRef.current.value==props.sigN[i].pwd){
                    var obj ={name:nameRef.current.value,email:emailRef.current.value,pwd:pwdRef.current.value}
                    props.logiN.push(obj)
                    props.setlogin([...props.logiN])
                    var jsonArray = JSON.stringify(props.logiN)
                    localStorage.setItem('login',jsonArray)
                    nameRef.current.value=''
                    emailRef.current.value=''
                    pwdRef.current.value=''
                    navigate('/')
                }
            }
            
        }
        else{
            alert('Fill All Details correctly')
        }
    }

  return (
    <div className='col-12 signBg d-flex align-items-center' style={{height:'100vh'}}>
        <div className='col-4 d-flex flex-column border border-dark rounded ms-5'>
            <h1 className='p-3 text-center'>LogIn To Your Account</h1>
            <label className='ms-3'>Full Name</label>
            <input className='rounded border p-2 border-secondary border-1 ms-3 me-3' ref={nameRef}/>
            <label className='ms-3'>Enter Your Email Id</label>
            <input className='rounded border p-2 border-secondary border-1 ms-3 me-3' ref={emailRef} />
            <label className='ms-3'>Password</label>
            <input className='rounded border p-2 border-secondary border-1 ms-3 me-3'  type='password' ref={pwdRef} />
            <button className='rounded border p-1 m-3 border-secondary border-1 mt-3 bg-warning fs-4' onClick={loginHandler} >Log In</button>
        </div>
    </div>
  )
}

export default LoginPage