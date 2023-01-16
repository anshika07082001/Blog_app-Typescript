import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Posts from './Posts'
import Slick from './Slick'
type data = { id:string,title:string,description:string,images:string,mfddate:string,writtenBy:string }
type login = { name:string,email:string,pwd:string }

type BProps={
  datA:data[],
  setdata:React.Dispatch<React.SetStateAction<data[]>>,
  logiN:login|null,
  setlogin:React.Dispatch<React.SetStateAction<login|null>>
  ediT:data|null,
  setedit:React.Dispatch<React.SetStateAction<data|null>>
  indeX:number,
  setindex:React.Dispatch<React.SetStateAction<number>>
}
const Blog = (props:BProps) => {
  var navigate = useNavigate()
  // function logout the user from application
  const logHandler=()=>{
    props.setlogin(null)
    localStorage.setItem('login',JSON.stringify({}))
  }
  // function navigates to add post page
  const addPost=()=>{
    if(props.logiN!==null){
      props.setedit(null)
      navigate('addPost')
    }
    if(props.logiN==null){
      alert('Not Allowed to add post Without SignIn')
    }
  }
  console.log(props.logiN)
  return (
  <div className='col-12'>
    <div className='col-12 d-flex flex-row bg-dark-subtle align-items-center justify-content-around'>
      <img src='icon.png' alt='' style={{height:'60px',width:'150px'}}/>
      <div className='d-flex bg-white flex-row col-5 align-items-center rounded justify-content-center ms-4 border border-grey text-light-emphasis'>
        <input placeholder='Search Your Blog...' className='col-11 p-2 border-0' style={{outline:'none'}}/>
        <i className="bi bi-search ps-1"></i>
      </div>
      <div>
        <Link to='/signUp'>
          <button className='bg-success text-white border-0 rounded-pill p-2 ps-3 pe-3 m-1'>SIGN UP</button>
        </Link>
        
        {props.logiN!==null?
        <button className='bg-danger text-white border-0 rounded-pill p-2 ps-3 pe-3 m-1' onClick={logHandler}>Log Out</button>
        :<></>}
        {props.logiN==null?
        <Link to='/login'>
        <button className='bg-danger text-white border-0 rounded-pill p-2 ps-3 pe-3 m-1' onClick={logHandler}>Log In</button>
        </Link>:<></>}
        </div>
    </div>
    <div className='col-12 text-center'>
      <div className='col-12 '>
        {props.logiN!==null ?
        <label className='text-success fs-4 mt-2 pe-auto' onClick={addPost}>Add post <i className="bi bi-plus-square"></i></label>
        :<></>}
        </div>
      <Slick/>
      <Posts datA={props.datA} indeX={props.indeX} setindex = {props.setindex} setedit={props.setedit} setdata={props.setdata} logiN={props.logiN} ediT={props.ediT} />
    </div>
  </div>
  )
}

export default Blog