import Image from 'next/image';

export const BanksBarSection = () => (
    <div className="w-full h-[150px] bg-linear-purple overflow-x-auto flex items-center justify-evenly">
        <div className="flex items-center space-x-4  justify-evenly">
            <Image src="/assets/cards/pix.png" alt="Bank 1" width={100} height={100} />
            <Image src="/assets/cards/mastercard.png" alt="Bank 2" width={101} height={100} className='bg-white rounded-lg' />
            <Image src="/assets/cards/visa.png" alt="Bank 2" width={101} height={100}  />
            <Image src="/assets/cards/hiper.png" alt="Bank 2" width={101} height={100} />
            <Image src="/assets/cards/banco-do-brasil.png" alt="Bank 2" width={101} height={100} />
            <Image src="/assets/cards/elo.png" alt="Bank 2" width={101} height={100} />
            <Image src="/assets/cards/inter.png" alt="Bank 2" width={101} height={100} />
            <Image src="/assets/cards/bradesco.png" alt="Bank 2" width={101} height={100} />
            <Image src="/assets/cards/boleto.png" alt="Bank 2" width={101} height={100} />
            <Image src="/assets/cards/bs2.png" alt="Bank 2" width={101} height={100} />
            <Image src="/assets/cards/genial.png" alt="Bank 2" width={101} height={100} />
            <Image src="/assets/cards/starbank.png" alt="Bank 2" width={101} height={100} />
        </div>
    </div>
);
