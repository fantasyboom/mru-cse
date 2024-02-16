import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";
import "animate.css";
import TrackVisibility from "react-on-screen";

const SpecialOffer = () => {
  return (
    <section
      id="acheivements"
      className={`flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container `}
    >
      <TrackVisibility partialVisibility once>
        {({ isVisible }) => (
          <div
            className={`flex-1 ${
              isVisible
                ? "animate__animated animate__fadeIn animate__slower"
                : ""
            }`}
          >
            <img
              src={offer}
              alt="offer"
              width={800}
              height={800}
              className="object-contain rounded-lg"
            />
          </div>
        )}
      </TrackVisibility>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-purple-900">Internships & Placements</span>
          
        </h2>
        <p className="mt-4 info-text">
          Students explore various computer science fields through Internships.
        </p>
        <p className="mt-6 info-text">
          Our placements ensure students get a good package and a very good start to their career. Many of our students have already been placed with the top MNCs.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          {" "}
          <Button label="Explore" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
