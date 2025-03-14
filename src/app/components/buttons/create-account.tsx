export const CreateAccountButton = ({ className }: { className?: string }) => {
  return (
    <a data-aos="fade-in" href="https://pay.iexclusivepay.com/register" className={`text-center justify-center flex items-center w-[80px] h-[30px] md:w-[300px] md:h-[50px] bg-[#3E0DFF] text-white rounded-lg text-[10px] md:text-[20px] ${className}`}>
      Criar conta
    </a>
  )
}