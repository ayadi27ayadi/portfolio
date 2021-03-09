import React from 'react'; 
import Header from './header'
import '../styles/index.scss';
import './layaout_module.scss'
import Image from '../images/image1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHtml5, faLinkedin, faPhp} from '@fortawesome/free-brands-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import image2 from './image2.jpg'
const Layout = (props) => {
 
    return(
        <div>
            <Header />

<img src={Image} alt="image1" style={{width:'100%' , marginBottom:'1.45rem'}} />
{props.children}




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






  <div>
    
    <hr/>
  <h3 style={{marginLeft:'40%', fontSize:'80px'}}> SERVICES </h3>
  <hr/>
 
  <div class="row">
    <div class="col-sm">
        <i class="fas fa-search"></i>
        <h3> Consulting </h3>
        On on produce colonel pointed. Just four sold need over how any. In to september suspicion determine he prevailed admitting. On adapted an as affixed limited on. Giving cousin warmly things no spring mr be abroad. Relation breeding be as repeated strictly followed margaret. One gravity son brought shyness waiting regular led ham.
    </div>
    <div class="col-sm">
    
    <FontAwesomeIcon icon={faHtml5} />
    
    <FontAwesomeIcon icon={faLinkedin} />
    
    <FontAwesomeIcon icon={faPhp} />
    <h3> HTML coding </h3>
    Manor we shall merit by chief wound no or would. Oh towards between subject passage sending mention or it. Sight happy do burst fruit to woody begin at. Assurance perpetual he in oh determine as.
    </div>
    <div class="col-sm">
      <h3> PHP webdelopment </h3>
    Rooms oh fully taken by worse do. Points afraid but may end law lasted. Was out laughter raptures returned outweigh. Luckily cheered colonel me do we attacks on highest enabled. Tried law yet style child. Bore of true of no be deal.
   <hr/>
    </div>
  </div>
</div>

        </div>
    )

}
export default Layout;