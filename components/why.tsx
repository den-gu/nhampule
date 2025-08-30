import React from 'react'
import Spacer from './spacer'
import { Button } from './ui/button'
import Link from 'next/link'

const Why: React.FC = () => {
    return (
        <section className='min-h-screen bg-[#111]'>
            <div className='relative max-w-7xl w-full mx-auto'>
                <Spacer />
                <div className="grid grid-cols-[1fr_2fr] items-start">
                    <div className='flex items-center gap-4'>
                        <div className="w-2 h-2 bg-[#acb58c]" />
                        <span className='text-[#acb58c] uppercase text-sm font-medium'>Porquê a Nhampule?</span>
                    </div>
                    <div className='ml-[1.8px]'>
                        <p className='text-5xl -mt-2'>Escolher a Nhampule é contar com <span className='text-[#acb58c]'>experiência comprovada e excelência</span> em serviços jurídicos.</p>
                        <Button asChild variant={'ghost'} className='mt-16 h-12 text-black/80 bg-[#c9f1a1] rounded-none'>
                            <Link href='/'>Solicite Orientação Jurídica</Link>
                        </Button>
                    </div>
                </div>
                <div className="relative -bottom-20 grid grid-cols-3 items-start gap-2 mt-6 z-10">
                    <div className="blank h-full" />
                    {/* <div className="grid grid-cols-2 items-start gap-2.5"> */}
                    <div className="bg-[#e3e3e3] h-[500px] flex flex-col justify-between p-10">
                        <div></div>
                        <div>
                            <h1 className='text-[#272727] text-xl font-medium'>Expertise Across Legal Markets</h1>
                            <p className='text-[#444] mt-4'>With deep knowledge of the legal industry, Nhampule offers unparalleled expertise in recruiting and consulting, ensuring that we meet the unique needs of each client.</p>
                        </div>
                    </div>
                    <div className="bg-[#c9f1a1] h-[500px] flex flex-col justify-between p-10">
                                                <div></div>
                        <div>
                            <h1 className='text-[#272727] text-xl font-medium'>Tailored, Confidential Search Process</h1>
                            <p className='text-[#444] mt-4'>Our personalized approach ensures that every search is customized to your specific requirements, with a strong commitment to confidentiality and discretion.</p>
                        </div>
                    </div>
                    <div className="bg-[#f9f9f9] h-[500px] flex flex-col justify-between p-10">
                                          <div></div>
                        <div>
                            <h1 className='text-[#272727] text-xl font-medium'>Extensive Network</h1>
                            <p className='text-[#444] mt-4'>We leverage a vast network of top-tier legal professionals and corporate clients, providing access to opportunities and candidates that are often not available through traditional channels.</p>
                        </div>
                    </div>
                    <div className="bg-[#d9dbd2] h-[500px] flex flex-col justify-between p-10">
                                    <div></div>
                        <div>
                            <h1 className='text-[#272727] text-xl font-medium'>Proven Success</h1>
                            <p className='text-[#444] mt-4'>Our track record of successful placements and satisfied clients speaks to our ability to deliver results that align with your strategic goals.</p>
                        </div>
                    </div>
                    <div className="blank h-full" />

                    {/* </div> */}
                </div>
                {/* <div className="grid grid-cols-[2fr_1fr] items-start mt-2.5">
                    <div className="grid grid-cols-2 items-start gap-2.5 mr-2">
            <div className="bg-[#f9f9f9] h-[500px]"></div>
                        <div className="bg-[#d9dbd2] h-[500px]"></div>
        </div>
            <div className="blank h-full" />
        </div> */}
                {/* <Spacer /> */}
            </div>
        </section>
    )
}

export default Why