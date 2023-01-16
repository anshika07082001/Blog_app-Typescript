import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
type data = {
  id:string,title:string,description:string,images:string,mfddate:string,writtenBy:string
}
type login = { name:string,email:string,pwd:string }

type AddEditProps={
  datA:data[],
  setdata:React.Dispatch<React.SetStateAction<data[]>>
  ediT:data|null
  setedit:React.Dispatch<React.SetStateAction<data|null>>
  indeX:number,
  setindex:React.Dispatch<React.SetStateAction<number>>
  logiN:login|null
}

const AddEditPost = (props:AddEditProps) => {
  var titleRef = useRef<HTMLInputElement>(null as any)
  var imgRef = useRef<HTMLInputElement>(null)
  var desRef = useRef<HTMLTextAreaElement>(null as any)
  var month =['January','february','March','April','May','June','July','August','September','October','November','December']
  var navigate = useNavigate()

  useEffect(()=>{
    if(props.ediT!==null){
      titleRef.current.value=props.ediT.title
      desRef.current.value= props.ediT.description
    }
  })

  // Function Adds or updates post
  const addUpdHandler =(e:any)=>{
    var day = month[new Date().getMonth()]
    var date = `${new Date().getDate()} ${day} ${new Date().getFullYear()}`
    if(e.target.innerHTML=='Add Post'){
      if(titleRef.current!==null && imgRef.current!==null && desRef.current!==null){
        if(imgRef.current.value!==''){
          console.log(props.logiN)
          if(props.logiN!==null){
            var obj = {id:' ',title:titleRef.current.value,description:desRef.current.value,images:imgRef.current.value,mfddate:date,writtenBy:props.logiN.email}
            let temp=props.datA
            temp.push(obj)
            console.log('temp',temp)
            props.setdata([...temp])
            var jsonArr = JSON.stringify(temp)
            localStorage.setItem("data",jsonArr)
            navigate('/')
          }
        }
      }
      else{
        alert('Write something to add!!')
      }
    }
    if(e.target.innerHTML=='Upadte post'){
      console.log(props.datA)
      props.datA[props.indeX].title=titleRef.current.value     
      props.datA[props.indeX].description=desRef.current.value 
      props.datA[props.indeX].mfddate=date
      var jsonarr = JSON.stringify(props.datA)
      localStorage.setItem('data',jsonarr)
      navigate('/')
    }
  }
  // function navigates to home page
  const back=()=>{
    navigate('/')
  }

  if(props.ediT!==null){
  return (
  <div className='col-12' style={{height:'100vh',backgroundImage:'linear-gradient(90deg, rgba(222,221,218,1) 0%, rgba(200,199,195,1) 45%, rgba(244,243,240,1) 81%)'}}>
    <button onClick={back} className='p-2 m-2 rounded border-0 bg-secondary text-white ps-3 pe-3'>Back</button>
    <h1 className='text-center pt-4'>Edit Post</h1>
    <div className='col-6 border border-dark-subtle rounded m-auto d-flex flex-column p-2'>
        <label className='mt-1'>Enter Title For your Post</label>
        <input className='mt-1' placeholder='Enter The posts Title...' ref={titleRef}/>
        <label className='mt-1'>Description</label>
        <textarea className=" form-control" placeholder="Leave a comment here" ref={desRef} ></textarea>
        <button className=' p-2 mt-5 border-0 rounded bg-info text-white fs-5' onClick={addUpdHandler}>Upadte post</button>            
    </div>
  </div>
  )
  }
  else{
    return (
      <div className='col-12' style={{height:'100vh',backgroundImage:'linear-gradient(90deg, rgba(222,221,218,1) 0%, rgba(200,199,195,1) 45%, rgba(244,243,240,1) 81%)'}}>
        <button onClick={back} className='p-2 m-2 rounded border-0 bg-secondary text-white ps-3 pe-3'>Back</button>
        <h1 className='text-center pt-4'>Add Post</h1>
        <div className='col-6 border border-dark-subtle rounded m-auto d-flex flex-column p-2'>
            <label className='mt-1'>Enter Title For your Post</label>
            <input className='mt-1' placeholder='Enter The posts Title...' ref={titleRef}/>
            <label className='mt-1'>Select Image to upload</label>
            <input className='mt-1' type='file' ref={imgRef}/>
            <label className='mt-1'>Description</label>
            <textarea className=" form-control" placeholder="Leave a comment here" ref={desRef} ></textarea>
            <button className=' p-2 mt-5 border-0 rounded bg-info text-white fs-5' onClick={addUpdHandler}>Add Post</button>            
        </div>
    </div>
    )
  }
}

export default AddEditPost