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
          <a href="https://eexclusive.com.br/2024.05.23%20-%20Termos%20de%20Uso%20-%20IExclusive%20Pay%20v1.pdf">
            <li>Termos de Uso</li>
          </a>
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
    <div className='w-[60%] text-center my-4 text-wrap'>
      <p className='text-gray-400 text-[15px] text-wrap'>
        42.608.128/0001-82 Eexclusive Payments LTDA Alameda Rio Negro 503 Sala 2020 Alphaville Centro Industrial e Empresarial/Alphaville Barueri SP 06454-000
      </p>
    </div>
  </div>
);
