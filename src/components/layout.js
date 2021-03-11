import React from 'react'; 
import Header from './header'
import '../styles/index.scss';
import './layaout_module.scss';
import Image from '../images/image1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHtml5, faLinkedin, faPhp} from '@fortawesome/free-brands-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import Apropos from '../pages/apropos'
import Prestation from '../pages/prestation'
import Temoinage from '../pages/temoinage'
import Mywork from '../pages/montravail'

const Layout = (props) => {
 console.log(props.children, 'props')
    return(
        <div>
            <Header />

<img src={Image} alt="image1" style={{width:'100%' , marginBottom:'1.45rem'}} />

<Apropos  />
<Prestation />
 <Temoinage />
 <Mywork />

        </div>
    )

}
export default Layout;