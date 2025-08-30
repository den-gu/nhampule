import React from 'react'
import Spacer from './spacer'
import { Button } from './ui/button'
import Link from 'next/link'

const Reach: React.FC = () => {
    return (
        <section className='min-h-screen bg-white'>
            <div className='relative max-w-7xl w-full mx-auto'>
                <Spacer light />
                <div className="grid grid-cols-2 items-start">
                    <div className='ml-[1.8px]'>
                        <h3 className='text-6xl text-[#272727] -mt-2'>Contactar</h3>
                            <p className='max-w-96 text-[#444] mt-10'>Com profundo conhecimento do setor jurídico, a Nhampule oferece serviços de advocacia e consultoria especializados, garantindo soluções ajustadas às necessidades únicas de cada cliente.</p>
                    </div>
                    <div className='h-[600px] flex flex-col items-center gap-10 p-20 bg-[#111]'>
                        <input type="text" name="" id="" placeholder='Nome*' className='pb-4 border-b border-neutral-800 outline-none w-full' />
                        <input type="text" name="" id="" placeholder='Email*' className='pb-4 border-b border-neutral-800 outline-none w-full' />
                        <input type="text" name="" id="" placeholder='Assunto*' className='pb-4 border-b border-neutral-800 outline-none w-full' />
                        <textarea name="" id="" placeholder='Messagem*' className='pb-4 border-b border-neutral-800 outline-none w-full' />
                        <Button asChild variant={'ghost'} className='w-full mt-10 h-12 text-black/80 bg-[#c9f1a1] rounded-none'>
                            <Link href='/contact'>Enviar messagem</Link>
                        </Button>
                    </div>
                </div>
                <Spacer light />
            </div>
        </section>
    )
}

export default Reach