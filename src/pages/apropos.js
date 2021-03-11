import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import image2 from "../images/image2.jpg"

const apropos = () => {
  return (
    <div id="apropos">
      <div className="container">
        <h3 style={{ marginLeft: "40%", fontSize: "80px" }}> A Propos </h3>
        <div className="row">
          <div className="col">
            An sincerity so extremity he additions. Her yet there truth merit.
            Mrs all projecting favourable now unpleasing. Son law garden chatty
            temper. Oh children provided to mr elegance marriage strongly. Off
            can admiration prosperous now devonshire diminution law. Received
            overcame oh sensible so at an. Formed do change merely to county it.
            Am separate contempt domestic to to oh. On relation my so addition
            branched. Put hearing cottage she norland letters equally prepare
            too. Replied exposed savings he no viewing as up. Soon body add him
            hill. No father living really people estate if. Mistake do produce
            beloved demesne if am pursuit. An sincerity so extremity he
            additions. Her yet there truth merit. Mrs all projecting favourable
            now unpleasing. Son law garden chatty temper. Oh children provided
            to mr elegance marriage strongly. Off can admiration prosperous now
            devonshire diminution law.
          </div>
          <div className="col">
            <h5> PHP</h5>
            <div className="progress" style={{ height: "8%" }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "25%" }}
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <h5> JAVASCRIPT</h5>
            <div className="progress" style={{ height: "8%" }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "25%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <h5> HTML CODING</h5>
            <div className="progress" style={{ height: "8%" }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "50%" }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>

            <h5> SEO </h5>
            <div className="progress" style={{ height: "8%" }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "75%" }}
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <h5> SEM</h5>
            <div className="progress" style={{ height: "8%" }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "100%" }}
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>

        <img src={image2} alt="image2" className="image2" />
      </div>
    </div>
  )
}
export default apropos
/* 
le premier caractére du nom du Compsant doit être en maj et aussi le nom du fichier
import du fichier style du bootstrap doit etre dans le fichier gatsby-config.js;
evitez l'utilisation style inline " style={{}} "
evitez de recopier le code du progress-bar et le mettre dans un composant avec des props;

style:
le titre doit être un composant "<Title />" avec des props
style du text non conforme font-size & mot clé en gras
 */