import React from 'react'
import { useNavigate } from 'react-router-dom'
type data = {
    id:string,title:string,description:string,images:string,mfddate:string
  }
  
  type PProps={
    datA:data[],
    setdata:React.Dispatch<React.SetStateAction<data[]>>
    logiN:login[]
    ediT:data[]
    setedit:React.Dispatch<React.SetStateAction<data[]>>
  }
  type login = {
    name:string,email:string,pwd:string
  }

const Posts = (props:PProps) => {
    var navigate=useNavigate()
    const editHandler=(i:number)=>{
        var obj ={id:props.datA[i].id,title:props.datA[i].title,description:props.datA[i].description,images:props.datA[i].images,mfddate:props.datA[i].mfddate}
        console.log(obj)
        props.ediT.push(obj)
        props.setedit([...props.ediT])
        navigate('/addPost')
    }

  return (
    <div className='col-12'>
        {props.datA.map((item,i)=>{
            return (
                <div className='col-10 p-2 border rounded border-dark-subtle m-auto mb-3'>
                    <p className='fw-bold'>{item.title}</p>
                    <div className='col-12 '>
                        <img className='col-6' src='https://www.shutterstock.com/image-photo/blog-spelled-out-old-typewriter-260nw-68177683.jpg' alt=''/>
                    </div>
                    <p>{item.description}
                    </p>
                    {props.logiN.length>0?
                    <button className='p-2 col-6 m-auto border-0 bg-dark-subtle rounded ' onClick={()=>editHandler(i)}>Edit Post</button>                 
                    :<p></p>}
                    <br/><span className='text-secondary fw-light'>Uploaded on {item.mfddate}</span>
                </div>
            )
        })}
    </div>
  )
}

export default Posts