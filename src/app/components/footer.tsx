import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => (
    <div className="w-full flex flex-col items-center mt-20 px-4">
      <Link href={"https://pay.iexclusivepay.com/"}>
      <Image
        src="/assets/logo-branca.png"
        alt="Logo"
        
        width={280}
        height={80}
        className="mb-10"
      />
      </Link>
      <div className="flex flex-col md:flex-row justify-evenly w-full md:w-[50%] mb-10">
        <div className='flex flex-col space-y-5'>
            <h1 className='text-white font-semibold uppercase'>Políticas da Eexclusive</h1>
            <ul className="list-disc list-inside text-gray-200">
                <li>Privacidade</li>
                <li>Termos de Uso</li>
                <li>Produtos Proibidos</li>
                <li>Aviso de Cookies</li>
            </ul>
        </div>
        <div className='flex flex-col space-y-5'>
            <h1 className='text-white font-semibold uppercase'>Suporte</h1>
            <ul className="list-disc list-inside text-gray-200">
                <li>FAQ</li>
                <li>Termos de Compra</li>
                <li>Espaço do Consumidor</li>
                <li>Contato</li>
            </ul>
        </div>
      </div>
      <div className='w-full md:w-[80%] text-center'>
        <p className='text-gray-400 text-[15px]'>
            A Eexclusive é uma empresa brasileira registrada no CNPJ nº 31.699.157/0001-80 com sede na Av. Andrômeda, 723 - Alphaville, Barueri - SP, 06473-000
        </p>
        <p className='text-gray-400 text-[15px] mt-3 mb-40'>
            A atividade de subcredenciamento é dispensada de autorização do Banco Central do Brasil, conforme termos da Circular nº 3.885/2018. Demais dispositivos aplicáveis, como o disposto nas Circulares nº 3.682/2013, 3.886/2018, 3.952/2019 e Resolução nº 24/2020 são rigorosamente cumpridos.
        </p>
      </div>
    </div>
);
