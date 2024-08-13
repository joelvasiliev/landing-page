export const LoginButton = ({className}: {className?: string}) => {
  return (
    <a data-aos="fade-in" href="https://pay.iexclusivepay.com/login" className={`text-[10px] md:text-[20px] text-center justify-center flex items-center w-[80px] h-[30px] md:w-[300px] md:h-[50px] bg-gradient-custom text-white rounded-lg ${className}`}>
        Entrar
    </a>
  )
}
