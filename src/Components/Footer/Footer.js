import "./Footer.css"

function Footer(){
    return(
        <div id="footerMain">
           <div id="footer-main1">
           <div id="F-Div1">
                <h2>Contact</h2>
                <p>Tell us everything</p>
                <p>Do you have any question? 
                    Feel free to reach out.</p>
                <p id="underline">Let's Chat</p>
            </div>
            <div id="F-Div2">
                <h2>Policy</h2>
                <p>Application Security</p>
                <p>Software Principles</p>
            </div>
            <div id="F-Div3">
                <p>Support Center</p>
                <p>Customer Support</p>
            </div>
            <div id="F-Div4">
                <h2>Address</h2>
                <p>Rancho Santa Margarita
                    2131 Elk Street
                    California</p>
            </div>
            <div id="F-Div5">
                <h2>Company</h2>
                <p>About</p>
                <p>Blog</p>
                <p>Press</p>
                <p>Careers & Culture</p>
            </div>
            <div id="F-Div6">
                <h2>Language</h2>
                <div id="images">
                <img src="https://landy-web.netlify.app/img/svg/united-states.svg"/>
                <img src="https://landy-web.netlify.app/img/svg/spain.svg"/>
                </div>
            </div>
           </div>
           {/* <SubFooter></SubFooter> */}
           <div id="sub-footer-main">
            <div id="sub-footer-left">
                 <img src="https://landy-web.netlify.app/img/svg/logo.svg"/>
            </div>
            <div id="sub-footer-right">
                <img src="https://landy-web.netlify.app/img/svg/github.svg"/>
                <img src="https://landy-web.netlify.app/img/svg/twitter.svg"/>
                <img src="https://landy-web.netlify.app/img/svg/linkedin.svg"/>
                <img src="https://landy-web.netlify.app/img/svg/medium.svg"/>
                <button>Buy Me a Coffee</button>
            </div>
        </div>
        </div>
        
    )
}



export default Footer;