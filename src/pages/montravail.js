import React from 'react'
import Layout from '../components/layout'
import IMG1 from '../images/w1.png'
import IMG2 from '../images/w2.png'
import IMG3 from '../images/w3.jpg'
import IMG4 from '../images/w4.jpg'

//import { graphql } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image";
//import Img from 'gatsby-image';
//import {useStaticQuery, graphql} from 'gatsby'

const montravail = () =>{ 
  
    return(
          
        <div id="mywork" style={{width:'80%', marginLeft:'10%'}}>
        <h3 style={{marginLeft:'35%', fontSize:'50px'}}> MY WORK  </h3>

<p style={{marginLeft:'10%', fontSize:'30px'}} > I have worked on dozens of projects so I have picked only the latest for you   </p>
    
<div className="container">  
<div className="card-deck">
  <div className="card" style={{width:'50%'}}>
        {/* <Img fluid={data.file.childImageSharp.fluid}  alt="image1" />    */}
  {/* <img className="card-img-top" src="../images/image1.jpg"  alt="Card image cap"/> 
 <StaticImage src="../images/w1.png" alt="A dinosaur" /> */}
    <div className="overlay">
    <div className="text">Project Name 1</div>
  </div>
  </div>
  <div className="card">
    <img className="card-img-top" src={IMG2}  alt="Card image cap"/>
    <div className="overlay2">
    <div className="text2">Project Name 2</div>
  </div>
  </div>
  <div className="card">
    <img className="card-img-top"src={IMG3}  alt="Card image cap"/>
    <div className="overlay3">
    <div className="text3">Project Name 3</div>
  </div>
  </div>
  <div className="card">
    <img className="card-img-top" src={IMG4}  alt="Card image cap"/>
    <div className="overlay4">
    <div className="text4">Project Name 4</div>
  </div>
  </div>
</div>
</div>
<div className="card-deck" style={{marginTop:'4%'}}>
  <div className="card">
    <img className="card-img-top" src={IMG1}  alt="Card image cap"/>
    <div className="overlay">
    <div className="text">Project Name 5</div>
  </div>
  </div>
  <div className="card">
    <img className="card-img-top" src={IMG2}  alt="Card image cap"/>
    <div className="overlay">
    <div className="text">Project Name 6</div>
  </div>
  </div>
  <div className="card">
    <img class="card-img-top" src={IMG3}  alt="Card image cap"/>
    <div className="overlay">
    <div className="text">Project Name 7</div>
  </div>
  </div>
  <div className="card">
    <img className="card-img-top" src={IMG4}  alt="Card image cap"/>
    <div className="overlay">
    <div className="text">Project Name 8</div>
  </div>
  </div>
</div>



        </div>
    )
}
export default montravail;

