import Image from "next/image"
import Link from "next/link"
import { CreateAccountButton } from "./buttons/create-account"
import { LoginButton } from "./buttons/login"

export const Header = () => {
  return (
    <div className="w-full h-[150px] flex md:flex-row md:justify-evenly items-center">
      <Link href={"https://pay.iexclusivepay.com/"}>
        <Image
          data-aos="fade-right"
          src="/assets/logo-branca-e-roxa.png"
          alt="Logo"
          width={354}
          height={110}
          className="ml-5 md:ml-0 mb-4 md:mb-0 w-[100px] h-auto md:w-[300px] md:h-auto"
        />
      </Link>
      <div data-aos="fade-left" className="space-x-4 flex md:flex-row md:space-x-4 ml-auto md:ml-0 mr-5 md:mr-0">
        <CreateAccountButton />
        <LoginButton />
      </div>
    </div>
  )
}
