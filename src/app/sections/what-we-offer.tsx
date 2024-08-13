export const WhatWeOffer = () => (
    <div className="w-full flex flex-col space-y-4 py-8 md:py-16 mb-8">
        <div className="flex flex-col space-y-4 w-full text-center items-center">
            <h1 data-aos="fade-in" className="text-white text-[20px] md:text-[40px] font-semibold">O QUE OFERECEMOS</h1>
            <h2 data-aos="fade-in" className="text-gray-300 text-[15px] md:text-[20px] max-w-[550px] w-full">
                O Sistema de Pagamentos Perfeito para o Seu Negócio Expanda suas operações sem barreiras.
            </h2>
        </div>
        <div className="flex justify-center items-center w-full">
            <div className="grid grid-rows-2 grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl px-4">
                <button data-aos="fade-right" className="rounded-xl bg-linear-purple w-full h-[100px] text-white hover:scale-105 transition-all duration-200">Checkout sólido e de alta conversão</button>
                <button data-aos="fade-left" className="rounded-xl bg-linear-purple w-full h-[100px] text-white hover:scale-105 transition-all duration-200">Checkout Builder (aparência personalizável)</button>
                <button data-aos="fade-right" className="rounded-xl bg-linear-purple w-full h-[100px] text-white hover:scale-105 transition-all duration-200">Estrutura sólida para escalar suas vendas</button>
                <button data-aos="fade-left" className="rounded-xl bg-linear-purple w-full h-[100px] text-white hover:scale-105 transition-all duration-200">Validação de dados do cliente, evitando recusa</button>
            </div>
        </div>
    </div>
);
