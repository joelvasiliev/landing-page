import Image from 'next/image';
import { LoginButton } from '../components/buttons/login';

export const SmartphonesSection = () => (
    <div className="w-full h-[600px] flex items-center justify-evenly overflow-hidden">
        <Image
            src="/assets/smartphones.png"
            alt="duas fotos de smartphones com o app da eexclusive aberto"
            width={400}
            height={600}
            className="object-contain"
            style={{
                transform: 'translateX(-0%)',
            }}
        />
        <div className='w-[600px]'>
            <h1 className='text-white text-[40px] font-semibold'>Aumente as suas conversões com o Checkout eexclusive</h1>
            <p className='text-gray-200 text-[20px] mt-4'>Otimize e escale suas vendas digitais com a eexclusive</p>
            <p className='text-gray-400 text-[20px] mb-10'>
                Empresas de e-commerce, SaaS e infoprodutores utilizam a eexclusive para aumentar suas vendas de forma fácil e eficiente.
            </p>
            <LoginButton/>
        </div>
    </div>
);
 