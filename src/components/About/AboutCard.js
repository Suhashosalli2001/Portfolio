import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Suhas T Hosalli  </span>
            from <span className="purple"> Bangalore, India.</span>
            <br />
            I am currently pursuing my MCA from PES University, Bangalore.
            <br />
            I have completed BCA from KLE Society's S Nijalingappa College, Bangalore.
            <br />
            I'm a passionate about building user-friendly and interactive web experiences. 
            <br />
            Projects that I have completed -
            <br/>
            1.Scientific and Age Calculator (Android Development) -
            I used Android Studio software to develop this application. 
            This was an android application which features of finding exact age of the user and also scientific and basic calculations.
           
            <br />
            2. Weather Forecast (Web Application)-
            Developed a Weather Forecast App using Angular for a responsive UI, displaying real-time weather data.
            Integrated RESTful APIs (e.g., OpenWeatherMap) to fetch temperature, humidity, and conditions.
            Built a Node.js and Express.js back-end to manage API requests and secure data handling.
            Implemented asynchronous operations and error handling for smooth data retrieval.
            Optimized for performance and scalability to ensure seamless cross-device functionality.
            <br/>
            <br />

            <br/>
            <br/>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Painting
            </li>
            <li className="about-activity">
              <ImPointRight /> Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Suhas T Hosalli</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
