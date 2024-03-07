import Icon from "./GoogleIcon";
import Link from "next/link";

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <div className="contact-info-text">
        <h1>CONTACTO</h1>
      </div>
      <div className="contact-info-item">
        <Link
          href={"https://maps.app.goo.gl/5NWuXCU3R3RogfEi8"}
          target="_blank"
        >
          <Icon icon="location_on" />
          <span>cra 4 # 34-28, Barrio El Porvenir</span>
        </Link>
      </div>
      <div className="contact-info-item">
        <Link
          href={
            "https://api.whatsapp.com/send/?phone=573173204403&text&app_absent=0"
          }
          target="_blank"
        >
          <Icon icon="call" />
          <span>+57 314 743 4383</span>
        </Link>
      </div>
      <div className="contact-info-item">
        <Link href={"mailto:comercial1@lodesign.com.co"} target="_blank">
          <Icon icon="mail" />
          <span>comercial1@lodesign.com.co</span>
        </Link>
      </div>
    </div>
  );
};

export default ContactInfo;
