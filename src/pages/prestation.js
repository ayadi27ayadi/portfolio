import React from 'react'
import Layout from '../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHtml5, faLinkedin, faPhp} from '@fortawesome/free-brands-svg-icons'

const prestation = () =>{

    return(
        <Layout>
  <div class="containerServices">
    
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
        </Layout>
    )
}
export default prestation;