import React from 'react'
import { Link } from 'react-router-dom'
import Posts from './Posts'
import Slick from './Slick'
type data = {
  id:string,title:string,description:string,images:string
}

type BProps={
  datA:data[],
  setdata:React.Dispatch<React.SetStateAction<data[]>>
}

const Blog = (props:BProps) => {
  return (
    <div className='col-12'>
      <div className='col-12 d-flex flex-row bg-warning-subtle align-items-center justify-content-around'>
        <img src='icon.png' alt='' style={{height:'60px',width:'150px'}}/>
        <div className='d-flex bg-white flex-row col-5 align-items-center rounded justify-content-center ms-4 border border-grey text-light-emphasis'>
          <input placeholder='Search Your Blog...' className='col-11 p-2 border-0' style={{outline:'none'}}/>
          <i className="bi bi-search ps-1"></i>
        </div>
        <Link to='/signUp'>
          <button className='bg-success text-white border-0 rounded-pill p-2 ps-3 pe-3'>SIGN UP</button>
        </Link>
      </div>
      <div className='col-12 text-center'>
        <div className='col-12 '>
          <h3 className='text-warning mt-2'>Welcome to My Blog</h3>
        </div>
        <Slick/>
        <div className='col-12 '>
          <img className='col-6' src='https://www.shutterstock.com/image-photo/blog-spelled-out-old-typewriter-260nw-68177683.jpg' alt=''/>
        </div>
        <Posts datA={props.datA} setdata={props.setdata}/>
      </div>
    </div>
  )
}

export default Blog