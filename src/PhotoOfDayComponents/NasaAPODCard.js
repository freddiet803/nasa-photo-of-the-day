import React from 'react';
import '../App.css';
import StyleParagraph from './NasaAPODPara.js';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col
} from 'reactstrap';

export default function NasaApodCard(props) {
  return (
    // <div className="APOD-card">
    //   <h3>{props.title}</h3>
    //   <h5>{props.date}</h5>
    //   <button
    //     onClick={() => {
    //       alert('clicked pic');
    //     }}
    //   >
    //     <img src={props.url} alt="The Picture" />
    //   </button>
    //   <p>{props.explanation}</p>
    // </div>
    <Row>
      <Col sm={{ size: 6, offset: 3 }} md={{ size: 8, offset: 2 }}>
        <Card>
          <CardBody>
            <CardTitle>{props.title}</CardTitle>
            <CardSubtitle>{props.date}</CardSubtitle>
            <Button
              onClick={() => {
                alert('Clicked Pic');
              }}
            >
              <CardImg src={props.url} alt="The Picture" />
            </Button>
            <StyleParagraph>{props.explanation}</StyleParagraph>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}
