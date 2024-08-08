import { CreateAccountButton } from "../components/buttons/create-account"

export const HomeSection = () => (
    <div className="w-full h-[700px] bg-1">
        <div className="flex flex-col space-y-1 p-4 mt-96 md:ml-40 w-[400px] md:w-[720px] h-full md:mt-32 items-center md:items-start">
            <h1 className="text-white text-[20px] md:text-[40px] font-semibold uppercase text-center md:text-left">A maneira inteligente de maximizar pagamentos para o seu negócio digital</h1>
            <p className="text-gray-400 text-[20px] text-center md:text-left">E-commerces, SaaS e infoprodutores utilizam eexclusive para vender mais, de forma fácil e eficiente</p>
            <CreateAccountButton/>
        </div>
    </div>
)
