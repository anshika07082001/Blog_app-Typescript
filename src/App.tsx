import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddEditPost from './components/AddEditPost';
import Blog from './components/Blog';
import LoginPage from './components/LoginPage';
import SignUp from './components/SignUp';

type sign = {
  name:string,email:string,phone:string,img:string,pwd:string,conPwd:string
}

type login = {
  name:string,email:string,pwd:string
}

type data = {
  id:string,title:string,description:string,images:string,mfddate:string
}
const Data =[
  {mfddate:"12 january 2023",id:"101",title:"Chocolate Mousse Torte Cake",description:"Two rich, chocolate cake layers are filled with luscious chocolate whipped cream mousse, then covered with milk chocolate frosting and a dark chocolate glaze. This best selling delight is then garnished with fudge rosettes and dark chocolate shaves. Includes a Chocolate Occasion Plaque, matching Greeting Card and is packaged in an elegant gift box!",images:"https://storage.sg.content-cdn.io/cdn-cgi/image/width=200,height=200,quality=75,format=auto,fit=cover,g=top/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/ProductImages/Source/100038315.jpg"},
  {mfddate:"12 March 2023",id:'102',title:'Bluehost',description:'Bluehost gives you a free domain name and l ost gives you a free domain name and l ost gives you a free domain name and lets you create a website from an easy-to-use interface. You also get an SSL and additional features without limiting any customizations. You’re the sole owner of your website, which is not standard with some of the other platforms.',images:'https://mllj2j8xvfl0.i.optimole.com/cb:pJlS~36fbd/w:200/h:1280/q:90/f:avif/https://s15165.pcdn.co/wp-content/uploads/2021/12/Bluehost.png'},
  {mfddate:"12 Decenber 2001",id:'103',title:'Mountains',description:'The worlds tallest mountain ranges form when pieces of Earths crust—called plates—smash against each other in a process called plate tectonics, and buckle up like the hood of a car in a head-on collision. The Himalaya in Asia formed from one such massive wreck that started about 55 million years ago. Thirty of the world’s highest mountains are in the Himalaya',images:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/alpe-di-siusi-sunrise-with-sassolungo-or-langkofel-royalty-free-image-1623254127.jpg'},
  {mfddate:"12 january 2020",id:'104',title:'e-Learning',description:'E-learning (sometimes called web-based training) is anywhere, any-time instruction delivered over the internet or a corporate Intranet to browser-equipped learners. Contrary to traditional learning methods, e-learning allows students, employees in training and casual learners to participate in an organized learning experience regardless of their physical location',images:'https://mtsn1tanahbumbu.com/wp-content/uploads/2020/10/unnamed.png'}
  ]
function App() {
  var [sign,setSign] = useState<sign[]>([])
  var [login,setLogin] = useState<login[]>([])
  var [data,setData]=useState<data[]>(Data)
  var [edit,setEdit]=useState<data[]>([])

  useEffect(()=>{
    var jsonArr = localStorage.getItem("data")
    if(jsonArr!==null){
    var parseArr = JSON.parse(jsonArr)
    setData(parseArr)
    }
    var signArr = localStorage.getItem('sign')
    if(signArr!==null){
      var parseSign = JSON.parse(signArr)
      setSign(parseSign)
    }
    var logArr = localStorage.getItem('login')
    if(logArr!==null){
      var parseLog = JSON.parse(logArr)
      setLogin(parseLog)
    }
  },[])
  // console.log(data,localStorage.getItem('data'))
  // console.log(localStorage.getItem('sign'))

  return (
    <>
    <Routes>
      <Route path='/signUp' element={<SignUp sigN={sign} setsign={setSign}/>}/>
      <Route path='/login' element={<LoginPage sigN={sign} logiN={login} setlogin={setLogin} setsign={setSign}/>}/>
      <Route path='/' element={<Blog ediT={edit} setedit={setEdit} datA={data} setdata={setData} logiN={login} setlogin={setLogin}/>}/>
      <Route path='/addPost' element={<AddEditPost datA={data} setdata={setData} ediT={edit} setedit={setEdit} />}/>
    </Routes>
    </>
  );
}

export default App;
