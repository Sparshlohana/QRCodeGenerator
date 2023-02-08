import "./background.css";
import video from "../../assets/videos/video.mp4";

const Background = () => {
  return (
    <video className="video" muted loop autoPlay>
      <source src={video} type="video/mp4" />
    </video>
  );
};

export default Background;
