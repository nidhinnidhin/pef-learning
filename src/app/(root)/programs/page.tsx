import Image from "next/image";
import React from "react";

const programCategories = [
  {
    title: "Medical & Healthcare",
    image: "/images/medical.png",
  },
  {
    title: "Engineering & Technology",
    image: "/images/engineering.png",
  },
  {
    title: "Business & Management",
    image: "/images/business.png",
  },
  {
    title: "Short-Term & Vocational",
    image: "/images/vocational.png",
  },
];

const academicPrograms = [
  {
    title: "Undergraduate Programs",
    description:
      "Bachelor’s degree programs in various fields, such as business, engineering, arts and sciences.",
    details: [
      "Earn an internationally recognized degree",
      "Study at top universities worldwide",
      "Gain cultural and global exposure",
    ],
    duration: "Duration: 3-4 years",
  },
  {
    title: "Graduate Programs",
    description:
      "Master’s and Ph.D. programs in specialized fields such as business, law, medicine, and engineering.",
    details: [
      "Advance your career with a higher degree",
      "Learn from top faculty and industry experts",
      "Research opportunities in leading institutions",
    ],
    duration: "Duration: 3-4 years",
  },
  {
    title: "Exchange Programs",
    description:
      "Short-term programs that allow students to study abroad for a semester or academic year.",
    details: [
      "Experience different education systems",
      "Transfer credits to your home university",
      "Cultural exchange and networking",
    ],
    duration: "Duration: 3-4 years",
  },
  {
    title: "Language Programs",
    description:
      "Programs that focus on language learning and cultural immersion.",
    details: [
      "Learn from native-speaking instructors",
      "Practice in real-world environments",
      "Experience full cultural immersion",
    ],
    duration: "Duration: 3-4 years",
  },
  {
    title: "Internship Programs",
    description: "Programs that combine study with practical work experience.",
    details: [
      "Gain hands-on industry experience",
      "Build your international career network",
      "Boost employability with global exposure",
    ],
    duration: "Duration: 3-4 years",
  },
  {
    title: "Pathway Programs",
    description:
      "Preparatory programs designed to help students transition into undergraduate or graduate studies.",
    details: [
      "Improve academic and language skills",
      "Meet entry requirements for universities",
      "Smooth transition into degree programs",
    ],
    duration: "Duration: 3-4 years",
  },
];

const Programs = () => {
  return (
    <div className="container">
      <section>
        <div className="program-container">
          <div className="program-title">
            <h1>
              Your Future, Your <span>Program</span> Find It Today
            </h1>
            <p className="p">
              Find the right program that fits your career goals. Browse through
              our categories and discover opportunities worldwide.
            </p>
          </div>

          <div className="search-container">
            <input
              type="text"
              placeholder="Find programs by name, country, or category..."
              className="search-input"
            />
            <button className="search-button">Search</button>
          </div>
          <div className="category-grid">
            {programCategories.map((category, index) => (
              <div className="category-card" key={index}>
                <Image
                  className="program-image"
                  src={category.image}
                  alt={category.title}
                  height={100}
                  width={100}
                />
                <h5>{category.title}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="opportunities-container">
          <div className="opportunity-title">
            <h1 className="text-center">
              Explore Your Academic <span>Opportunities</span>
            </h1>
            <p className="text-center">
              Explore diverse academic programs, each designed to enrich your
              education, broaden your perspective, and immerse you in new
              cultures.
            </p>
          </div>
          <div className="programs-cards">
            {academicPrograms.map((program, index) => (
              <div className="program-card" key={index}>
                <h2>{program.title}</h2>
                <p>{program.description}</p>
                <div className="duration">
                  <img src="/images/icons/calender.png" alt="calender" />
                  <span>{program.duration}</span>
                </div>
                <ul>
                  {program.details.map((item, idx) => (
                    <div className="duration">
                      <img src="/images/icons/vector.png" alt="" />
                      <li key={idx}>{item}</li>
                    </div>
                  ))}
                </ul>
                <button>+ More Details</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div>
          <div className="medical-section-content">
            <div className="section-image">
              <Image
              className="medical-image"
                src="/images/medical.png"
                alt="Medical & Healthcare"
                width={280}
                height={180}
              />
            </div>
            <div className="section-details">
              <h2>
                <span>Medical</span> & Health care
              </h2>
              <p>
                Looking to build a career in medicine and healthcare? Studying
                abroad gives you access to top universities, advanced
                facilities, and global career opportunities.
              </p>
              <h3>We offer programs in :</h3>
              <ul className="program-list">
                <li>Medicine & Surgery (MBBS, MD, BDS)</li>
                <li>Nursing (BSc, MSc)</li>
                <li>Pharmacy (BPharm, PharmD)</li>
                <li>
                  Allied Health Sciences (Physiotherapy, Radiology, Lab
                  Technology)
                </li>
                <li>Public Health & Healthcare Management (MPH, MHA)</li>
                <li>Public Health & Healthcare Management (MPH, MHA)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
