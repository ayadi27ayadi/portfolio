import React from 'react'
import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import imageT from '../images/imageTemoin.png'

const temoinage = () =>{

    return(
        <div id="temoinage" style={{backgroundColor:'#F6F5F6', marginTop:'4%'}} >

<h3 style={{marginLeft:'35%', fontSize:'50px'}}> MY CUSTOMERS SAID <br/> </h3>
<h3 style={{marginLeft:'40%', fontSize:'50px'}}> ABOUT ME</h3>

<p style={{marginLeft:'10%', fontSize:'30px'}} > I am always glad to hear that my customers leave satisfied. Some of them shared with you their insights on our cooperation.</p>
       


<div className="card-deck" style={{width:'80%', marginLeft:'10%'}} >
  <div className="card">
    <div className="card-body">
      <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. 
      This content is a little bit longer.
      This is a wider card with supporting text below as a natural lead-in to additional content.</p>
      <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
    <div className="card-body">
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
    <div className="card-body">
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
    <div className="card-body">
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>


<img src={imageT} alt='image de temoinage'  style={{ marginTop:'5%'}} />

        </div>
    )
}
export default temoinage;