import React from 'react'
type data = {
    id:string,title:string,description:string,images:string
  }
  
  type PProps={
    datA:data[],
    setdata:React.Dispatch<React.SetStateAction<data[]>>
  }

const Posts = (props:PProps) => {
  return (
    <div className='grid'>
        {props.datA.map((item)=>{
            return (
                <div className='col-10 p-2 border border-dark-subtle m-auto mb-3'>
                    <img src={item.images} alt=''/>
                    
                </div>
            )
        })}
    </div>
  )
}

export default Posts