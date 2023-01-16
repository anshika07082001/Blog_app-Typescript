import React from 'react'
import { useNavigate } from 'react-router-dom'

type data = { id:string,title:string,description:string,images:string,mfddate:string,writtenBy:string }
  
type login = { name:string,email:string,pwd:string }

type PProps={ 
  datA:data[],
  setdata:React.Dispatch<React.SetStateAction<data[]>>
  logiN:login|null
  ediT:data|null
  setedit:React.Dispatch<React.SetStateAction<data|null>>
  indeX:number,
  setindex:React.Dispatch<React.SetStateAction<number>>
}

const Posts = (props:PProps) => {
  var navigate=useNavigate()
  // Function edits the post
  const editHandler=(i:number)=>{
    if(props.logiN!==null){
      if(props.logiN.email==props.datA[i].writtenBy){
      props.setindex(i)
      var obj ={id:props.datA[i].id,title:props.datA[i].title,description:props.datA[i].description,images:props.datA[i].images,mfddate:props.datA[i].mfddate,writtenBy:props.logiN.email}
      props.setedit(obj)
      navigate('/addPost')
      }
      else{
        alert('You are not allowed to edit the others data')
      }
    }
    else{
      alert('Without login you cannot edit data')
    }
  }
  // Function deletes the post
  const delHandler=(i:number)=>{
    if(props.logiN!==null){
      if(props.logiN.email==props.datA[i].writtenBy){
        if(window.confirm('Are you Sure you want to delete the posts')){
          props.datA.splice(i,1)
          props.setdata([...props.datA])
          var jsonArr = JSON.stringify(props.datA)
          localStorage.setItem('data',jsonArr)
        }
      }
      else{
        alert('You are not allowed to delete the others data')
      }
    }
    else{
      alert('You cannot delete data withou login')
    }
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
        <p>{item.description}</p>
        <>
        <button className='p-2 col-6 m-auto border-0 bg-dark-subtle rounded ' onClick={()=>editHandler(i)}>Edit Post</button>           
        <i className="bi bi-trash fs-3 ms-5 text-danger" onClick={()=>delHandler(i)}></i>
        </>
        <div className='text-secondary fw-bold d-flex justify-content-between'>
        <span>Written By- {item.writtenBy}</span>
        <span>Uploaded on {item.mfddate}</span>   
        </div>             
      </div>
      )
    })}
  </div>
  )
}

export default Posts