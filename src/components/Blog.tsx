import React from 'react'
import { Link } from 'react-router-dom'
import Posts from './Posts'
import Slick from './Slick'
type data = {
  id:string,title:string,description:string,images:string,mfddate:string
}
type login = {
  name:string,email:string,pwd:string
}

type BProps={
  datA:data[],
  setdata:React.Dispatch<React.SetStateAction<data[]>>,
  logiN:login[],
  setlogin:React.Dispatch<React.SetStateAction<login[]>>
  ediT:data[],
  setedit:React.Dispatch<React.SetStateAction<data[]>>
}

const Blog = (props:BProps) => {
  const logHandler=()=>{
    localStorage.removeItem("login");
    window.location.reload()
  }
  const addPost=()=>{
    props.ediT=[]
    props.setedit([...props.ediT])
  }
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
          <button className='bg-danger text-white border-0 rounded-pill p-2 ps-3 pe-3 m-1' onClick={logHandler}>LogOut</button>
        </div>
      </div>
      <div className='col-12 text-center'>
        <div className='col-12 '>
          {props.logiN.length>0?
          <Link to='/addpost' className='text-success fs-4 mt-2 pe-auto' onClick={addPost}>Add post <i className="bi bi-plus-square"></i></Link>
        :<p></p>}
          </div>
        <Slick/>
        <Posts datA={props.datA} setedit={props.setedit} setdata={props.setdata} logiN={props.logiN} ediT={props.ediT} />
      </div>
    </div>
  )
}

export default Blog