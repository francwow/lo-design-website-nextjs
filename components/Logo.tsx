import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="logo-container">
      <Link href={"/"}>
        <Image
          src={"/logo1.webp"}
          alt="logo"
          width={600}
          height={600}
          priority
        />
      </Link>
    </div>
  );
};

export default Logo;
