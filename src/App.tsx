import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddEditPost from './components/AddEditPost';
import Blog from './components/Blog';
import LoginPage from './components/LoginPage';
import SignUp from './components/SignUp';

type sign = { name:string,email:string,phone:string,img:string,pwd:string,conPwd:string }

type login = { name:string,email:string,pwd:string }

type data = { id:string,title:string,description:string,images:string,mfddate:string,writtenBy:string }

var Data =[
  {writtenBy:'ashu782001@gmail.com', mfddate:"12 january 2023",id:"101",title:"Chocolate Mousse Torte Cake",description:"Two rich, chocolate cake layers are filled with luscious chocolate whipped cream mousse, then covered with milk chocolate frosting and a dark chocolate glaze. This best selling delight is then garnished with fudge rosettes and dark chocolate shaves. Includes a Chocolate Occasion Plaque, matching Greeting Card and is packaged in an elegant gift box!",images:"https://storage.sg.content-cdn.io/cdn-cgi/image/width=200,height=200,quality=75,format=auto,fit=cover,g=top/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/ProductImages/Source/100038315.jpg"},
]

function App() {
  var [sign,setSign] = useState<sign[]>([])
  var [login,setLogin] = useState<login|null>(null)
  var [data,setData]=useState<data[]>(Data)
  var [edit,setEdit]=useState<data |null>(null)
  var [index,setIndex]=useState<number>(0)

  useEffect(()=>{
    var jsonArr = localStorage.getItem("data")
    var signArr = localStorage.getItem('sign')
    var logArr = localStorage.getItem('login')
    if(jsonArr!==null){
      var parseArr = JSON.parse(jsonArr)
      setData(parseArr)
    }
    if(signArr!==null){
      var parseSign = JSON.parse(signArr)
      setSign(parseSign)
    }
    if(logArr!==null && logArr!==''){
      var parseLog = JSON.parse(logArr)
      setLogin(parseLog)
    }
  },[])

  return (
  <>
  <Routes>
    <Route path='/signUp' element={<SignUp sigN={sign} setsign={setSign}/>}/>
    <Route path='/login' element={<LoginPage sigN={sign} logiN={login} setlogin={setLogin} setsign={setSign}/>}/>
    <Route path='/' element={<Blog indeX={index} setindex={setIndex} ediT={edit} setedit={setEdit} datA={data} setdata={setData} logiN={login} setlogin={setLogin}/>}/>
    <Route path='/addPost' element={<AddEditPost indeX={index} setindex={setIndex} logiN={login} datA={data} setdata={setData} ediT={edit} setedit={setEdit} />}/>
  </Routes>
  </>
  );
}

export default App;
