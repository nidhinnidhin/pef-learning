import Image from "next/image";
import React from "react";

const Destination = () => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="destination">
            <h1>
              Explore Study Destinations <span>Worldwide</span>
            </h1>
            <p>
              Find the ideal country for your studies and take the first step
              toward a world-class education and global career opportunities!
            </p>
            <button>Book Free Consultation</button>
          </div>
        </div>
      </section>

      <section>
        <div className="abroad-destination">
          <div>
            <h1>
              How to Choose the Right Study <span>Abroad Destination</span> ?
            </h1>
          </div>
          <div>
            <Image
              className="abroad-image"
              src="/images/abroad.png"
              alt="abroad"
              height={100}
              width={100}
            />
          </div>
          <div>
            <ul className="program-list">
              <li>
                <p>Language</p>Consider the language spoken in the country and
                whether you’ll need to learn a new language
              </li>
              <li>
                <p>Culture</p>Compare the cost of living in different countries
                including tuition fees, accommodation and living expenses
              </li>
              <li>
                <p>Cost of living</p>Compare the cost of living in different
                countries including tuition fees, accommodation and living
                expenses
              </li>
              <li>
                <p>Climate</p>
                Consider the climate and whether it suits your preferences
              </li>
              <li>
                <p>Safety</p>Research the safety and security situation in
                country
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="experience">
          <h1>
            Looking for the Best <span>Study Abroad </span>
            Experience?
          </h1>
          <button>Book Consultation</button>

          <div className="plane-wrapper">
            <div className="plane-container">
              <Image
                className="plane-img"
                src="/images/plane.png"
                alt="plane"
                width={40}
                height={40}
              />
              <svg
                className="plane-path"
                xmlns="http://www.w3.org/2000/svg"
                width="343"
                height="106"
                viewBox="0 0 343 106"
                fill="none"
              >
                <path
                  d="M1.77179 5.86989C50.653 30.3364 132.832 63.2344 183.678 80.5721C238.199 99.1629 304.93 110.653 361.61 118.3C385.37 121.505 416.797 122.464 445.304 117.775C471.442 113.476 500.602 103.167 512.398 79.4497C515.516 73.1822 516.993 65.5676 515.271 56.1961C514.855 48.5559 510.198 40.6894 504.788 34.022C494.47 21.3047 479.667 13.4103 464.844 6.44773L453.247 1"
                  stroke="#F0531D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="9 9"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destination;
