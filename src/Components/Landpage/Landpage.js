import "./Landpage.css"
import "animate.css";

export default function Landpage(){
    return(
        <div id="landpage" className="animate__animated animate__slideInRight">
        <div className="landleft">
            <h1>Landing page template for developers & startups</h1>
            <p>Beautifully designed templates using React.js, ant design and styled-components! Save weeks of time and build your landing page in minutes.</p>
            <div className="buttons">
                <button id="btn1">Explore</button>
                <button id="btn2">Learn More</button>
            </div>
        </div>
        <img src="https://landy-web.netlify.app/img/svg/developer.svg" alt=""/>
    </div>
    )
}