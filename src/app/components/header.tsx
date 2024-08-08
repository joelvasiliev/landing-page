import Image from "next/image"
import { CreateAccountButton } from "./buttons/create-account"
import { LoginButton } from "./buttons/login"

export const Header = () => {
  return (
    <div className="w-full h-[150px] flex md:flex-row md:justify-evenly items-center">
      <Image
        src="/assets/logo-branca-e-roxa.png"
        alt="Logo"
        width={354}
        height={110}
        className="mb-4 md:mb-0 w-[100px] h-auto md:w-[300px] md:h-auto"
      />
      <div className="space-x-4 flex md:flex-row md:space-x-4">
        <CreateAccountButton/>
        <LoginButton/>
      </div>
    </div>
  )
}
