import { shoe8 } from "../assets/images";
import Button from "../components/Button";
import "animate.css";
import TrackVisibility from "react-on-screen";

const SuperQuality = () => {
  const focusareas=["1. Deep Learning",

    "2. Reinforcement Learning",
    
    "3. Neural Networks",
    
    '4. Speech Recognition Technologies',
    
    '5. Computer Vision',
    
    "6. Natural Language Processing",
    
    "7. Robotic Applications",
    
    "8. Data Science & Big Data",
    
    "9. Cyber Security"
    
    ,"10. Security Certifications"]
    const areas= focusareas.map(area => <li key={area}>{area}</li>);
  return (
    <>
    
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex  flex-col gap-4">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-3">
            Focus Areas:
          </span>
          
        </h2>
        <ul className="font-sans text-xl flex flex-col  gap-2 text-slate-400">
          {areas}
        </ul>
        
      </div>
      <TrackVisibility partialVisibility once>
        {({ isVisible }) => (
          <div
            className={`flex-1 flex justify-center items-center w-full ${
              isVisible
                ? "animate__animated animate__fadeIn animate__slower"
                : ""
            }`}
          >
            <img
              src={shoe8}
              alt="shoe8"
              width={800}
              height={800}
              className="object-contain rounded-lg"
            />
          </div>
        )}
      </TrackVisibility>
    </section>
    </>
  );
};

export default SuperQuality;
