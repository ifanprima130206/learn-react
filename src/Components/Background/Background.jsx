import './Background.css'
import video1 from '../../assets/video1.mp4'
import image1 from '../../assets/ot_1.jpg'
import image2 from '../../assets/ut-2.webp'
import image3 from '../../assets/ra1.jpg'

const Background = ({playStatus, heroCount}) => {
  let backgroundContent;

  if (playStatus) {
    backgroundContent = (
      <video className="background fade-in" autoPlay muted loop>
        <source src={video1} type="video/mp4" />
      </video>
    );
  } else if (heroCount === 0) {
    backgroundContent = <img className="background fade-in" src={image1} />;
  } else if (heroCount === 1) {
    backgroundContent = <img className="background fade-in" src={image2} />;
  } else if (heroCount === 2) {
    backgroundContent = <img className="background fade-in" src={image3} />;
  }

  return (
    <div className="background-container">
      {backgroundContent}
      <div className="overlay"></div>
    </div>
  );
}

export default Background;
