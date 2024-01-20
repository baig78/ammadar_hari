import React from "react";
import image3 from "../../assets/3.png";

const About = () => {
  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "400px",
          overflow: "hidden",
        }}
      >
        <img
          src={image3}
          alt="About Page"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#353a41cd",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            padding: "20px",
            boxSizing: "border-box",
          }}
        >
          <h2>About Us</h2>
        </div>
      </div>
      <div className="container">
        <h2 className="mt-5">About Us</h2>
        <p>
          Ammadar is located in Lexington, South Carolina USA. Ammadar is a fast
          growing, goal-oriented Information Technology (IT) Services Company
          that helps companies realize the potential of e-Business through the
          use of Internet Technology and Client Server business systems.
        </p>
        <p>
          As a global IT solutions provider, Ammadar helps clients improve their
          business efficiencies by building, supporting and optimizing
          innovative Internet-based solutions / enterprise applications. In
          addition to that, Ammadar provides professional consultancy services
          for clients' short-term/ long-term project needs on various IT
          platforms. As a client centric business, our business model focuses on
          having long-term strategic relationships with our clients.
        </p>
        <p>
          Ammadar has offices in USA & India. Our offshore development centres,
          stretched out in various geographical locations in India, take pride
          in the latest technology and its highly talented and spirited IT
          professionals to provide services at a cost-effective rate to all our
          customers.
        </p>
        <p>
          Ammadar is a software solutions and IT consulting company that
          specializes in Application Development, Software Testing and
          Technology Consulting to corporations and government institutions. We
          provide developing projects and supporting clients to assist and
          develop the systems as per their needs, and provide consulting
          services to work with business team to develop the solutions from
          client place as well as from Ammadar office. We provide training,
          advisory and assurance services. We have made a long-term commitment
          to become the leading professional consulting firm of choice for our
          clients and our people.
        </p>
        <p>
          Ammadar has the competency to provide cost effective services of
          experienced consultants, in a broad array of technologies. We have the
          capability to provide organizations with software solutions that
          correspond to their strategic aim in an efficient cost effective
          manner.
        </p>
        <p>
          Ammadar stands apart for its core corporate values - Innovation and
          Entrepreneurship, focusing on initiating and creating strategic
          innovative products and solutions in existing market, while inventing
          new avenues and domains, for the growth of both its clients and
          itself.
        </p>
        <p>
          Ammadar provides consulting service and complete software solutions
          for business clients and the computer industry, we are a staff
          augmentation firm specializing in staffing for Information Technology
          projects across the project lifecycle. As a company, we are proud of
          our reputation for professionalism, integrity and ethical business
          code. We help customers achieve results by identifying mission
          critical issues and implementing innovative and customized solutions
          designed to generate revenue, reduce costs and access the right
          information at the right time. We know how businesses differ from one
          another. Client's issues, challenges, market conditions, operations
          and goals are all subject to unique influences, which we take into
          consideration. We recruit people with true strength of character and
          integrity, who genuinely share our values, and we treat every
          assignment as another step toward building long-term relationships.
          Our goal is to help leading corporations create and sustain
          competitive advantage. At the most of all we are proud of being able
          to deliver what has been promised. As a service orientated
          organization, we know that our continued success depends on the
          success of our clients; we are therefore pledged to help you achieve
          your goals. To act in good faith within the system and to promote the
          good name and reputation of the organization throughout the business
          and professional community.
        </p>
        <p>
          <strong> MISSION </strong> The mission of Ammadar is to be a world
          class IT consulting and development firm that provides best value for
          the clients and employees alike. To provide Consulting Services and
          Complete IT Solutions for business clients across various industry
          verticals and add value through an uncompromising commitment to client
          satisfaction.
        </p>
        <p>
          <strong> CORE VALUES </strong> Our Core Values include "Innovation",
          "Expeditious Delivery" and "Quality Processes". Our entire
          organization adheres to these core values, and we continue to enhance
          them through out our organization from the front office, back office
          staff, Sales and Recruiting. While Strategies and Tactics may change,
          our guiding principles endure as the standards by which we conduct our
          business.
        </p>
      </div>
    </>
  );
};

export default About;
