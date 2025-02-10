import "./Contact.css"

export default function Contact(){
    return(
        <div className="Contact">
            <div className="Contactleft">
                <h1>
                Contact form</h1>
                <p>The following form demonstrates form validation in action. Contact form component reduces the amount of time it is being re-rendered by the user as it embraces uncontrolled form validation to reduce any unnecessary performance penalty..</p>
            </div>
            <div className="Contactright">
                <div className="name">
                <p>Name</p>
                <input placeholder="Your Name"></input>
                </div>
                <div className="email">
                <p>Email</p>
                <input placeholder="Your Email"></input>
                </div>
                <div className="msg">
                <p>Message</p>
                <textarea placeholder="Your Message"></textarea>
                </div>
            </div>


        
    </div>
    )
}