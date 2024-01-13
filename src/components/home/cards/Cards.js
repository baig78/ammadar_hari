import React from "react";
import Card from "react-bootstrap/Card";
import "../cards/Cards.css";

const Cards = () => {
  const cardsData = [
    {
      title: "Consulting",
      text: "Lorem Ipsum is simply dummy text of the printing and.",
      iconClass: "far fa-snowflake",
    },
    {
      title: "Technology",
      text: "Another example text for the second card.",
      iconClass: "fas fa-university",
    },
    {
      title: "Development Services",
      text: "And here's some more text for the third card.",
      iconClass: "fas fa-tools",
    },
    {
      title: "Application Outsourcing",
      text: "Another example text for the second card.",
      iconClass: "fas fa-university",
    },
    {
      title: "E-COMMERCE & e-Learning Solutions",
      text: "And here's some more text for the third card.",
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
