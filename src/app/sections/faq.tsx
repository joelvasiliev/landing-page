import { AnswerCard } from "../components/answer-card";
import { LoginButton } from "../components/buttons/login";

export const FAQSection = () => (
    <div className="w-full bg-4 flex flex-col items-center mt-40 overflow-hidden">
        <h1 className="text-white text-[35px] font-semibold max-w-[800px] w-full text-center mb-32">Eexclusive: Facilidade e Conversões Elevadas, Diga Adeus aos Pix Não Pagos!</h1>
        <div className="flex justify-center w-full space-x-52">
            <div className="flex flex-col space-y-3">
                <div className="flex space-x-3">
                    <div className="rounded-full bg-purple-500 w-[30px] h-[30px] "/>
                    <p className="text-white text-[18px]">Cartão de Credito</p>
                </div>
                <div className="flex space-x-3">
                    <div className="rounded-full bg-purple-500 w-[30px] h-[30px] "/>
                    <p className="text-white text-[18px]">Pix</p>
                </div>
                <div className="flex space-x-3">
                    <div className="rounded-full bg-purple-500 w-[30px] h-[30px] "/>
                    <p className="text-white text-[18px]">Boleto</p>
                </div>
            </div>
            <div className="flex flex-col">
                <h1 className="text-white text-3xl font-semibold">Taxas e Tarifas</h1>
                <h2 className="text-gray-400 text-[20px] max-w-[400px] mb-5">Custos Reduzidos e Altas Taxas de Aprovação para Impulsionar Seu Negócio</h2>
                <LoginButton/>
            </div>
        </div>
        <h1 className="text-white text-4xl font-semibold mt-60 mb-32">Perguntas frequentes</h1>
        <AnswerCard answer="1- Uma pergunta" response="Uma resposta"/>
        <AnswerCard answer="2- Outra pergunta" response="Uma resposta"/>
        <AnswerCard answer="3- Outra pergunta" response="Uma resposta"/>
        <AnswerCard answer="4- Outra pergunta" response="Uma resposta"/>
        <AnswerCard answer="5- Outra pergunta" response="Uma resposta"/>

        <LoginButton className="w-[500px] mt-5 mb-20"/>
    </div>
)