import React from 'react'
import Slider from "react-slick";

const Slick = () => {
    const image =['https://thumbs.dreamstime.com/b/blog-computer-keyboard-piggy-bank-194500622.jpg',
'https://dvyvvujm9h0uq.cloudfront.net/com/articles/1574675612-design-blogs.jpg',
'https://www.dreamhost.com/blog/wp-content/uploads/2019/01/Blog-experts-opt-750x498.jpg',
'https://www.emergingedtech.com/wp/wp-content/uploads/2018/04/blogging.jpg',
'https://dvyvvujm9h0uq.cloudfront.net/com/articles/1574675612-design-blogs.jpg',
'https://www.dreamhost.com/blog/wp-content/uploads/2019/01/Blog-experts-opt-750x498.jpg',
    ]
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };
  return (
  <div style={{width:'1200px'}} className='p-3 m-auto'>
    <Slider {...settings}>
      {image.map((item)=>{
        return (
          <img src={item} alt='' className='m-1 p-1'/>
        )
      })}
    </Slider>
  </div>
  )
}

export default Slick