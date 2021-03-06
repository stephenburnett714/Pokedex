import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-center">
      <Link href="/">
        <Image height={100} width={250} src="/images/pokemon-logo.png"/>
      </Link>
    </div>
  );
};

export default Header;
