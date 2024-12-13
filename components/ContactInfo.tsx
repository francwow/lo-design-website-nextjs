"use client";

import { useLanguage } from "@/contexts/ContextHooks";
import Icon from "./GoogleIcon";
import Link from "next/link";

const ContactInfo = () => {
  const { language } = useLanguage();

  return (
    <div className="contact-info">
      {/* <div className="contact-info-text">
        <h1>

        </h1>
      </div> */}
      <div className="contact-info-item">
        <Link
          href={"https://maps.app.goo.gl/5NWuXCU3R3RogfEi8"}
          target="_blank"
        >
          <Icon icon="location_on" />
          <span>calle 38 # 8a-34 El Troncal, Cali, Colombia</span>
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
          <span>+57 6024027144</span>
        </Link>
      </div>
      <div className="contact-info-item">
        <Link
          href={
            "https://api.whatsapp.com/send/?phone=573173204403&text&app_absent=0"
          }
          target="_blank"
        >
          <Icon icon="smartphone" />
          <span> +57 314 743 4383</span>
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
