import { AnswerCard } from "../components/answer-card";
import { LoginButton } from "../components/buttons/login";

export const FAQSection = () => (
    <div className="w-full bg-4 flex flex-col items-center mt-40 overflow-hidden">
        <h1 className="text-white text-[20px] md:text-[35px] font-semibold max-w-[800px] w-full text-center mb-32">Eexclusive: Facilidade e Conversões Elevadas, Diga Adeus aos Pix Não Pagos!</h1>
        <div className="flex flex-col md:flex-row justify-center w-full md:space-x-12 space-y-4 md:space-y-0">
    <div className="flex flex-col space-y-3 items-center md:items-start">
        <div className="flex space-x-3 items-center">
            <div className="rounded-full bg-purple-500 w-[20px] h-[20px] md:w-[30px] md:h-[30px]"/>
            <p className="text-white text-[12px] md:text-[16px]">Cartão de Crédito</p>
        </div>
        <div className="flex space-x-3 items-center">
            <div className="rounded-full bg-purple-500 w-[20px] h-[20px] md:w-[30px] md:h-[30px]"/>
            <p className="text-white text-[12px] md:text-[18px]">Pix</p>
        </div>
        <div className="flex space-x-3 items-center">
            <div className="rounded-full bg-purple-500 w-[20px] h-[20px] md:w-[30px] md:h-[30px]"/>
            <p className="text-white text-[12px] md:text-[18px]">Boleto</p>
        </div>
    </div>
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-white text-lg md:text-2xl font-semibold">Taxas e Tarifas</h1>
        <h2 className="text-gray-400 text-[14px] md:text-[18px] max-w-[90%] md:max-w-[400px] mb-4">
            Custos Reduzidos e Altas Taxas de Aprovação para Impulsionar Seu Negócio
        </h2>
    </div>
</div>

        <LoginButton className="mt-10"/>
        <h1 className="text-white text-4xl font-semibold mt-60 mb-32">Perguntas frequentes</h1>
        <AnswerCard answer="1- Uma pergunta" response="Uma resposta"/>
        <AnswerCard answer="2- Outra pergunta" response="Uma resposta"/>
        <AnswerCard answer="3- Outra pergunta" response="Uma resposta"/>
        <AnswerCard answer="4- Outra pergunta" response="Uma resposta"/>
        <AnswerCard answer="5- Outra pergunta" response="Uma resposta"/>

        <LoginButton className="w-[70%] md:w-[500px] mt-5 mb-20"/>
    </div>
)