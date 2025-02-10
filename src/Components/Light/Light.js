import "./Light.css"
import "animate.css";


export default function Light(){
    return(
        <div className="Light animate__animated animate__slideInLeft">
         <img src="https://landy-web.netlify.app/img/svg/graphs.svg" alt=""/>
         <div className="lightright">
            <h1>Light, fast & responsive</h1>
            <p>This template is ready to use, so you don't need to change anything at a component level, unless you want to customize the default styling.</p>
            <div className="comp">
                <div className="comp1">
                    <img src="https://landy-web.netlify.app/img/svg/notes.svg" alt=""></img>
                    <p className="y">Why Antd?</p>
                    <p className="text">Ant Design is a React UI library that has a lot of easy-to-use components for building elegant UI</p>
                  </div>
                  <div className="comp1">
                    <img src="https://landy-web.netlify.app/img/svg/notes.svg" alt=""></img>
                    <p className="y">Why styled-components?</p>
                    <p className="text">Styled Components gives you total control over your components.</p>
                  </div>
              

            </div>
         </div>

        
    </div>
    )
}