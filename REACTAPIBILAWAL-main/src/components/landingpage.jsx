import { Grid } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Jumbotron,Container,Carousel,Card,CardDeck } from 'react-bootstrap';
import React from 'react';
import "../index.css"
const LandingPage = () => {
    return ( 
        <div>
        <Grid contained> 
        <Carousel className="img">
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://www.build-review.com/wp-content/uploads/2019/12/A-guide-to-construction-safety-for-homebuilders.jpg"
            alt="First slide"
            />
            <Carousel.Caption>
            <h3 style={{color :"black"}}>AL-GHANI Construction Company</h3>
            <p style={{color :"black"}}>C'mon Yeah Baby</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://www.projectmanager.com/wp-content/uploads/2020/02/200210_Blog_Feature_Construction_Schedule.jpg"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3 style={{color :"black"}}>Build homes in cheaper rates</h3>
            <p style={{color :"black"}}>Full Customer Satisfaction</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://content.fortune.com/wp-content/uploads/2019/11/CON12.19..jpg"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3 style={{color :"black"}}>Build Geek to New Homes</h3>
            <p style={{color :"black"}}>We have latest designing softwares</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
        </Grid>
        <Grid contained style={{marginTop:"10px"}}>
        <Grid contained>
        <section id="about-sec">
        <div className="container">
        <div className="row align-items-center">
        <div className ="col-lg-5 text-center">
        <img src="https://i.dawn.com/primary/2020/04/5e9bbe8df3a20.jpg" className="img-fluid sale-img" style={{marginBottom:"30px"}}></img>
        </div>
        <div className="col-lg-7 text-lg-right text-center text-color about-text">
        <h1>Fisrt come first served basis</h1>
        <p className="text">AL-GHANI enjoys the reputation of being one of the top engineering consultancy organizations in Pakistan. AL-GHANI was established in 2020 as a private limited company by the Government of Pakistan. The objective of its creation was to create a pool of talented engineers, attain self-reliance in engineering consultancy and replace foreign consultants. Currently AL-GHANI has total strength of over 40+ employees.
The Total estimated turnover for the year 2020 was Rs. 8 Million with the total cumulative cost of the projects undertaken by MCS is 30 Million.</p>
        </div>
        </div>
        </div>
        </section>
        </Grid>
        </Grid>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://venturebeat.com/wp-content/uploads/2017/12/construction.jpg?fit=1767%2C1168&strip=all"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://orientcement.com/wp-content/uploads/2016/04/project_management.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.technologyadvice.com/wp-content/uploads/2017/08/Fotolia_98303431_Subscription_Monthly_M-699x408.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        <section className="services py-5 text-center">
    <div className="container">
        <div className="row">
            
            <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                <span className="service-icon">
                <h1>374</h1>
                </span>
                <h5 className="font-wieght-bold text-uppercase">
                    ON GOING PROJECTS
                </h5>
                <p className="text-capitalize">
                347 Local and 27 Overseas Projects
                </p>
             </div>
             
            <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                <span className="service-icon">
                <h1>3651</h1>
                </span>
                <h5 className="font-wieght-bold text-uppercase">
                    COMPLETED PROJECTS
                </h5>
                <p className="text-capitalize">
                3117 Local and 534 Overseas Projects
                </p>
             </div>
             
            <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                <span className="service-icon">
                    <h1>4025</h1>
                </span>
                <h5 className="font-wieght-bold text-uppercase">
                    TOTAL PROJECTS
                </h5>
                <p className="text-capitalize">
                Total Ongoing and Completed Projects
                </p>
             </div>
             
        </div>
    </div>
</section>
        </div>
     );
}

 
export default LandingPage;