import React from 'react'
import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import image2 from '../components/image2.jpg'
const apropos = () => {

    return(
        <Layout>
          <h3 style={{marginLeft:'40%', fontSize:'80px'}}> ABOUT ME </h3>
         <div class="container">
  <div class="row">
    <div class="col">
    An sincerity so extremity he additions. Her yet there truth merit. Mrs all projecting favourable now unpleasing. Son law garden chatty temper. Oh children provided to mr elegance marriage strongly. Off can admiration prosperous now devonshire diminution law.

Received overcame oh sensible so at an. Formed do change merely to county it. Am separate contempt domestic to to oh. On relation my so addition branched. Put hearing cottage she norland letters equally prepare too. Replied exposed savings he no viewing as up. Soon body add him hill. No father living really people estate if. Mistake do produce beloved demesne if am pursuit.

An sincerity so extremity he additions. Her yet there truth merit. Mrs all projecting favourable now unpleasing. Son law garden chatty temper. Oh children provided to mr elegance marriage strongly. Off can admiration prosperous now devonshire diminution law.
    </div>
    <div class="col">
      
<h5> PHP</h5>
    <div class="progress" style={{height:'8%'}}>
  <div class="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<h5> JAVASCRIPT</h5>
<div class="progress" style={{height:'8%'}} >
  <div class="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<h5> HTML CODING</h5>
<div class="progress" style={{height:'8%'}}>
  <div class="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>

<h5> SEO </h5>
<div class="progress" style={{height:'8%'}}>
  <div class="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<h5> SEM</h5>
<div class="progress" style={{height:'8%'}}>
  <div class="progress-bar" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>




    </div>
  </div>
  </div>
<img   src={image2} alt="image2" className="image2"/>

  <div> 

  </div>
        </Layout>
    )
}
export default apropos;