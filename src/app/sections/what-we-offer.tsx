export const WhatWeOffer = () => (
    <div className="h-[500px] w-full flex flex-col space-y-4">
      <div className="flex flex-col space-y-4 w-full text-center items-center">
        <h1 className="text-white text-[40px] font-semibold">O QUE OFERECEMOS</h1>
        <h2 className="text-gray-300 text-[20px] max-w-[550px] w-full">
            O Sistema de Pagamentos Perfeito para o Seu Negócio Expanda suas operações sem barreiras.
        </h2>
      </div>
        <div className="flex justify-center items-center"> 
        <div className="grid grid-rows-2 grid-cols-2 gap-8"> 
            <button className="rounded-xl bg-linear-purple w-[300px] h-[100px] text-white">Checkout sólido e de alta conversão</button>
            <button className="rounded-xl bg-linear-purple w-[300px] h-[100px] text-white">Checkout Builder (aparência personalizável)</button>
            <button className="rounded-xl bg-linear-purple w-[300px] h-[100px] text-white">Estrutura sólida para escalar suas vendas</button>
            <button className="rounded-xl bg-linear-purple w-[300px] h-[100px] text-white">Validação de dados do cliente, evitando recusa</button>
        </div>
    </div>

    </div>
)