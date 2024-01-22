import Image from "next/image";
import logo from "@/assets/jpgImages/logo1.png";
import Link from "next/link";

const LandingPage = () => {
  return (
    <>
      <div className="landing-wrapper">
        <div className="landing-overlay"></div>
      </div>
      <div className="landing-container">
        <div className="logo-container">
          <Image
            className="logo"
            src={logo}
            alt="logo"
            width={700}
            height={700}
            priority
          />
        </div>
        <hr />
        <div className="landing-text">
          <h1>Estamos en renovación.</h1>
          <p>
            Pronto podrás acceder a todo el catálogo de nuestros productos y
            servicios. Por el momento te puedes comunicar con nosotros por medio
            de nuestro whatsapp.
          </p>
        </div>
        <div className="landing-btn">
          <Link
            target="_blank"
            href={
              "https://api.whatsapp.com/send/?phone=573173204403&text&app_absent=0"
            }
          >
            contactar
          </Link>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
