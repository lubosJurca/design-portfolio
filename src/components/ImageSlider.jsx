import React,{useRef} from 'react'

// slick carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// material ui Icons
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



const ImageSlider = ({images}) => {
    const arrowRef = useRef(null);
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1
        }
      }
    ]
 
  };

  
  return (
    <>
    <div className="tag">
          <h1>My work</h1>
          
    </div>
      <div className="imgslider">
        <Slider {...settings} ref={arrowRef}>
          {images.map((item,index) => (
            <div key={item.id}>
              <img src={item.src}  alt={item.alt} className="img-car" />
            </div>
          ))}
        </Slider>
        <div className="buttons">
            <button 
            onClick={() => arrowRef.current.slickPrev()}
            className='slider-btn'><ArrowBackIcon /></button>
            <button 
            onClick={() => arrowRef.current.slickNext()}
            className='slider-btn'><ArrowForwardIcon /></button>
        </div>
      </div>
          </>
  )
}
export default ImageSlider;


