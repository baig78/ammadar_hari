import React from "react";
import Card from "react-bootstrap/Card";
import "../cards/Cards.css";

const Cards = () => {
  const cardsData = [
    {
      title: "Consulting & Development Services",
      text: "At Ammadar we believe in supporting our clients in every situation.",
      iconClass: "far fa-snowflake",
    },
    {
      title: "Technology",
      text: "Our Off-shore development centre is based on a partnership spirit with a long-term view.",
      iconClass: "fas fa-university",
    },
    {
      title: "Development Services",
      text: "We specialize in software development, maintenance, testing, and business transformation.",
      iconClass: "fas fa-tools",
    },
    {
      title: "Application Outsourcing",
      text: "Ammadar optimizes application portfolios, aligns IT investments, and provides outsourcing solutions.",
      iconClass: "fas fa-university",
    },
    {
      title: "E-COMMERCE & e-Learning Solutions",
      text: "We specialize in e-Commerce solutions for diverse sectors, offering customization.",
      iconClass: "fas fa-tools",
    },
  ];

  return (
    <>
      <div class="section">
        <div class="section-heading-services">Our Services</div>
        <div className="d-flex flex-wrap">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              style={{
                width: "22rem",
                margin: "10px",
                border: "1px solid #ebebeb",
              }}
            >
              <i
                className={card.iconClass}
                style={{
                  fontSize: "50px",
                  color: "var(--primary-color)",
                  margin: "20px 20px",
                }}
              ></i>
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
