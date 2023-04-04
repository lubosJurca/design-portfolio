// css
import './App.css';

// images
import logo from "./images/logo.jpg"
import profile from "./images/profile.png"
import { ReactComponent as GraphicDesign } from './images/graphicDesign.svg';
import { ReactComponent as UxUi } from './images/uxUi.svg';
import { ReactComponent as Apps } from './images/apps.svg';
import { ReactComponent as Photgraphy } from './images/photography.svg';
import { ReactComponent as Illustrations } from './images/illustrations.svg';
import { ReactComponent as MotionGraphic } from './images/motionGraphic.svg';

// slider
import ImageSlider from './components/ImageSlider';
import images from './assets/imagesData';



function App() {
  return (
    <div className="App">
      <div className="navigation">
        <img src={logo} alt="logo" />
        <button className="btn nav-btn">Free Consultation</button>
      </div>
      <header>
        <h1>Design solutions made easy</h1>
        <p>With over ten years of experience in various design disciplines, I’m your one-stop shop for your design needs.</p>
      </header>
      <section className="grid">
        <div className="graphic-design box">
          <GraphicDesign className="img" />
          <h3 className="text">Graphic Design</h3>
        </div>
        <div className="uxUi box">
          <UxUi className="img" />
          <h3 className="text">UX/UI</h3>
        </div>
        <div className="apps box">
          <Apps className="img" />
          <h3 className="text">Apps</h3>
        </div>
        <div className="photography box">
          <Photgraphy className="img" />
          <h3 className="text">Photography</h3>
        </div>
        <div className="illustrations box">
          <Illustrations className="img" />
          <h3 className="text">Illustrations</h3>
        </div>
        <div className="motionGraphics box">
          <MotionGraphic className="img" />
          <h3 className="text">Motion Graphics</h3>
        </div>

      </section>

      <section className="flex">
          <img src={profile} alt="profile-image" className='profile-img'/>
          <div className="about">
            <h2>I’m Amy, and I’d love to work on your next project</h2>
            <p>I love working with others to create beautiful design solutions. I’ve designed everything from brand illustrations to complete mobile apps. I’m also handy with a camera!</p>
            <button className="btn about-btn">Free Consultation</button>
          </div>
      </section>
      <section className='work'>
        <ImageSlider images={images} />
      </section>
      <section className='book-call'>
        <div className='info-section'>
          <h2>Book a call with me</h2>
          <p>I’d love to have a chat to see how I can help you. The best first step is for us to discuss your project during a free consultation. Then we can move forward from there.</p>
        </div>
        <button className="btn">Free Consultation</button>
      </section>
      <div className="footer">
        <img src={logo} alt="logo" />
        <button className="btn nav-btn">Free Consultation</button>
      </div>
    </div>
  );
}

export default App;
