import React,{ useState } from "react";

const ContactCard = (props) =>{
    // here we are using react hook
    // react gives us props thay you can pass to the components that initializes it on first load
    const [showAge, setShowAge] = useState(false);
    console.log(props);
    return(
        <div className="contact-card">
            <img 
            src={props.avatarURL} 
            alt="profile">
            </img>
            <div className="user-details">
                <p>Name: {props.name}</p>
                <p>Email: {props.email}</p>
                <button onClick={ () => setShowAge(!showAge)}>Show Age</button>
                { showAge ? <p>Age : {props.age}</p> : null}
            </div>
        </div>
    )
}

export default ContactCard;