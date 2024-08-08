import { CreateAccountButton } from "../components/buttons/create-account"

export const HomeSection = () => (
    <div className="relative w-full h-[700px] bg-1">
        <div className="relative z-10 flex flex-col space-y-1 p-4 mt-32 ml-40 w-[720px] h-full">
            <h1 className="text-white text-[40px] font-semibold uppercase">A maneira inteligente de maximizar pagamentos para o seu negócio digital</h1>
            <p className="text-gray-400 text-[20px]">E-commerces, SaaS e infoprodutores utilizam eexclusive para vender mais, de forma fácil e eficiente</p>
            <CreateAccountButton/>
        </div>
    </div>
)
