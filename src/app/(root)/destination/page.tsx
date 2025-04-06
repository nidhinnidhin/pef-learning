import Image from "next/image";
import React from "react";

const Destination = () => {
  return (
    <>
    <div  className="container">
      <section>
        <div>
          <div className="destination">
            <h1 className="mb-24">
              Explore Study Destinations <span>Worldwide</span>
            </h1>
            <p className="mb-24">
              Find the ideal country for your studies and take the first step
              toward a world-class education and global <br /> career opportunities!
            </p>
            <button className="mb-24">Book Free Consultation</button>
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
          <div className="abroad-destination-section">
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
                    <h5>Language</h5>Consider the language spoken in the country and
                    whether you’ll need to learn a new language
                </li>
                <li>
                    <h5>Culture</h5>Compare the cost of living in different countries
                    including tuition fees, accommodation and living expenses
                </li>
                <li>
                    <h5>Cost of living</h5>Compare the cost of living in different
                    countries including tuition fees, accommodation and living
                    expenses
                </li>
                <li>
                    <h5>Climate</h5>
                    Consider the climate and whether it suits your preferences
                </li>
                <li>
                    <h5>Safety</h5>Research the safety and security situation in
                    country
                </li>
                </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
      <section>
        <div className="experience">
          <h1>
            Looking for the Best <span>Study Abroad </span><br />
            Experience?
          </h1>
          <button>Book Consultation</button>
        </div>
      </section>
      </>
  );
};

export default Destination;
