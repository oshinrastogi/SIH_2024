import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardComponent from './CardComponent';
import ML from "../assets/ML.jpg";
import IOT from "../assets/IOT.jpg";
import AI from "../assets/AI.jpg";
import WEB from "../assets/WEB.jpg";
import DATA from "../assets/DATA.jpg";
import MATH from "../assets/MATH.jpg";
import SCI from "../assets/SCI.jpg";
import DATAMIN from "../assets/DATAMIN.jpg";

const cardData = [
  {
    title: "Machine Learning",
    imgSrc: ML,
    text: "Learn the basics of Machine Learning, covering key algorithms and hands-on projects with real-world datasets.",
    listItems: ["Supervised Learning", "Unsupervised Learning", "Model Evaluation"],
    links: [{ href: "#", text: "Course link" }, { href: "#", text: "Syllabus" }],
  },
  {
    title: "Internet of Things (IoT)",
    imgSrc: IOT,
    text: "Discover how to connect and control devices via the internet, focusing on smart home applications.",
    listItems: ["IoT Architecture", "Sensors & Actuators", "IoT Security"],
    links: [{ href: "#", text: "Course link" }, { href: "#", text: "Syllabus" }],
  },
  {
    title: "Artificial Intelligence (AI)",
    imgSrc: AI,
    text: "Explore AI principles like machine learning and neural networks, along with their real-world applications.",
    listItems: ["Machine Learning", "Neural Networks", "NLP"],
    links: [{ href: "#", text: "Course link" }, { href: "#", text: "Syllabus" }],
  },
  {
    title: "Web Development",
    imgSrc: WEB,
    text: "Gain the skills to build modern websites using HTML, CSS, JavaScript, and back-end development.",
    listItems: ["HTML & CSS", "JavaScript", "Responsive Design"],
    links: [{ href: "#", text: "Course link" }, { href: "#", text: "Syllabus" }],
  },
  {
    title: "Data Science",
    imgSrc: DATA,
    text: "Learn data analysis and visualization techniques, with a focus on Python programming and machine learning.",
    listItems: ["Python Programming", "Data Visualization", "Statistical Modeling"],
    links: [{ href: "#", text: "Course link" }, { href: "#", text: "Syllabus" }],
  },
  {
    title: "Mathematics",
    imgSrc: MATH,
    text: "Build a strong foundation in calculus, algebra, and statistics for success in advanced STEM courses.",
    listItems: ["Calculus", "Algebra", "Statistics"],
    links: [{ href: "#", text: "Course link" }, { href: "#", text: "Syllabus" }],
  },
  {
    title: "Science",
    imgSrc: SCI,
    text: "Understand core concepts in physics, chemistry, and biology to build a solid scientific foundation.",
    listItems: ["Physics", "Chemistry", "Biology"],
    links: [{ href: "#", text: "Course link" }, { href: "#", text: "Syllabus" }],
  },
  {
    title: "Data Mining",
    imgSrc: DATAMIN,
    text: "Learn to extract insights from data using classification, clustering, and association techniques.",
    listItems: ["Classification", "Clustering", "Association Analysis"],
    links: [{ href: "#", text: "Course link" }, { href: "#", text: "Syllabus" }],
  },
];

const CardGrid = () => {
  return (
    <Container className="mt-4">
      <Row>
        {cardData.map((card, index) => (
          <Col md={3} className="mb-4" key={index}>
            <CardComponent {...card} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardGrid;
