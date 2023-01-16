import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

type sign = {
    name:string,email:string,phone:string,img:string,pwd:string,conPwd:string
}

type signProps={
    sigN:sign[]
    setsign:React.Dispatch<React.SetStateAction<sign[]>>
}

const SignUp = (props:signProps) => {
    var nameRef = useRef<HTMLInputElement>(null)
    var emailRef = useRef<HTMLInputElement>(null)
    var phoneRef = useRef<HTMLInputElement>(null)
    var imgRef = useRef<HTMLInputElement>(null)
    var pwdRef = useRef<HTMLInputElement>(null)
    var cPwdRef = useRef<HTMLInputElement>(null)
    var [msg,setMsg]=useState('')

    // Function validates the name field
    const namehandler=()=>{
        if(nameRef.current!==null){
            if(nameRef.current.value.match(/^[A-Z][a-z]+\s[A-Z][a-z]+$/)){
                setMsg('')
            }
            else{
                setMsg('firstname,middlename, lastname should start with capital letters')
            }
        }
    }
    // Function Validates the email Field
    const emailhandler=()=>{
        if(emailRef.current!==null){
            if(emailRef.current.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
                setMsg('')
            }
            else{
                setMsg('assign valid email (eg: ashu782001@gmail.com)')
            }
        }
    }
    // function Validates the contact Number Field
    const phoneHandler=()=>{
        if(phoneRef.current!==null){
            if(phoneRef.current.value.match(/^\+?[1-9][0-9]{0,9}$/)){
                setMsg('')
            }
            else{
                setMsg('number should be of 10 digit')
            }
        }
    }
    // function validates the Password Field
    const pwdHandler=()=>{
        if(pwdRef.current!==null){
            if(pwdRef.current.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)){
                setMsg('')
            }
            else{
                setMsg('pwd should contain 1 special character 1 Capital letter and min length should be 8')
            }
        }
    }
    // Function Matches the password and Confirm Password Field
    const cPwdHandler=()=>{
        if(cPwdRef.current!==null && pwdRef.current!==null){
            if(pwdRef.current.value==cPwdRef.current.value){
                setMsg('')
            }
            else{
                setMsg('password confirm Password must be same')
            }
        }
    }
    // Function Submits the Form
    const signHandler=()=>{
        if(msg=='' && nameRef.current!==null && emailRef.current!==null && phoneRef.current!==null && imgRef.current!==null && pwdRef.current!==null && cPwdRef.current!==null){
            if(imgRef.current.value!==''){
                var obj ={name:nameRef.current.value,email:emailRef.current.value,phone:phoneRef.current.value,img:imgRef.current.value,pwd:pwdRef.current.value,conPwd:cPwdRef.current.value}
                props.sigN.push(obj)
                props.setsign([...props.sigN])
                var jsonArray = JSON.stringify(props.sigN);
                localStorage.setItem("sign",jsonArray)
                alert('SignUp Successfully!!')
            }
            else{
                alert('please select the file!!')
            }
            nameRef.current.value='';
            emailRef.current.value='';
            phoneRef.current.value='';
            imgRef.current.value='';
            pwdRef.current.value='';
            cPwdRef.current.value='';
        }
        else{
            alert('fill all details Correctly')
        }
    }
    
    return (
    <div className='col-12 signBg d-flex align-items-center' style={{height:'100vh'}}>
        <div className='col-4 d-flex flex-column border border-dark rounded ms-5'>
            <h1 className='p-3 text-center'>Sign Up</h1>
            <span className='text-danger ps-3'>{msg}</span>
            <label className='ms-3'>Full Name</label>
            <input className='rounded border p-2 border-secondary border-1 ms-3 me-3' onChange={namehandler}  ref={nameRef}/>
            <label className='ms-3'>Enter Your Email Id</label>
            <input className='rounded border p-2 border-secondary border-1 ms-3 me-3' ref={emailRef} onChange={emailhandler} />
            <label className='ms-3'>Enter Your Contact Number</label>
            <input className='rounded border p-2 border-secondary border-1 ms-3 me-3' ref={phoneRef} type='number' onChange={phoneHandler}/>
            <label className='ms-3'>Enter Your Contact Number</label>
            <input type='file'className='ms-3' ref={imgRef} />
            <label className='ms-3'>Password</label>
            <input className='rounded border p-2 border-secondary border-1 ms-3 me-3'  type='password' ref={pwdRef} onChange={pwdHandler}/>
            <label className='ms-3'>Confirm Password</label>
            <input className='rounded border p-2 border-secondary border-1 ms-3 me-3'  type='password' ref={cPwdRef} onChange={cPwdHandler}/>
            <Link to={'/login'} className='p-3 m-auto'>Login to Your Account</Link>
            <button className='rounded border p-1 m-3 border-secondary border-1 mt-3 bg-warning fs-4' onClick={signHandler} >Sign Up</button>
        </div>
    </div>
    )
}

export default SignUp