import ButtonMailto from "./ButtonMailto.jsx";
import './Contact.css';

function Contact() {
  return (
    <div className="Contact">
      <div className="contactCard">  
        <p className="contactText">Vous voulez en savoir plus ou participer au projet Pulsr ?</p>            
        <ButtonMailto className="contactButton" label="Ecrivez-moi un email" mailto="mailto:mahe.juliette@outlook.com" />
      </div>
    </div>
  );
}

export default Contact;