"use client"

import React from 'react'
import Spacer from './spacer'
import { Button } from './ui/button'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"

const Testimonials: React.FC = () => {

    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <section className='min-h-screen bg-[#111]'>
            <div className='relative max-w-7xl w-full mx-auto'>
                <Spacer />
                <div className="grid grid-cols-[1fr_2fr] items-start">
                    <div className='flex items-center gap-4'>
                        <div className="w-2 h-2 bg-[#acb58c]" />
                        <span className='text-[#acb58c] uppercase text-sm font-medium'>Testemunhos</span>
                    </div>
                    <div className='ml-[1.8px]'>
                        {/* <p className='text-5xl -mt-2'>By choosing Veritas Partners, <span className='text-[#acb58c]'>you gain an experienced partner</span> with a proven reputation in legal talent acquisition</p> */}
                        {/* <Button asChild variant={'ghost'} className='mt-16 h-12 text-black/80 bg-[#c9f1a1] rounded-none'>
                            <Link href='/contact'>Schedule a consultation</Link>
                        </Button> */}
                        <div className="w-full">
                            <Carousel setApi={setApi} className="w-full h-fit">
                                <div className='flex justify-between'>
                                    {/* Slide  */}
                                    <span className='text-2xl text-[#acb58c] font-medium'><span className='text-3xl -tracking-wider'>//</span> {current.toString().padStart(2, '0')}</span>
                                    {/* of {count} */}
                                    <div className='relative right-12 box-border'>
                                        <CarouselPrevious className='border border-[#acb58c] text-[#acb58c] bg-[#111] hover:bg-[#acb58c] hover:text-[#111] cursor-pointer transition-colors duration-200 ease-in-out' />
                                        <CarouselNext className='border border-[#acb58c] text-[#acb58c] bg-[#111] hover:bg-[#acb58c] hover:text-[#111] cursor-pointer transition-colors duration-200 ease-in-out' />
                                    </div>
                                </div>
                                <CarouselContent className='mt-20'>
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <CarouselItem key={index}>
                                            <Card className='bg-transparent border-none'>
                                                <CardContent className="relative p-0">
                                                    {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                                                    <div className="relative grid grid-cols-2 border-b border-neutral-800 pb-8">
                                                        <h2 className='text-3xl text-white font-light'>
                                                            Sócio-Gerente,<br />Nhampule
                                                        </h2>
                                                        <span className='text-lg text-[#828282] justify-self-end'>
                                                            Advogado Sénior, Direito Comercial e Societário,<br />Nhampule
                                                        </span>
                                                    </div>
                                                    <p className='mt-12 font-light text-lg text-white max-w-120'>
                                                        Trabalhar com a equipa da Nhampule foi uma experiência excepcional.
                                                        Demonstraram profundo conhecimento jurídico e capacidade de lidar com casos complexos de forma clara e eficiente.
                                                        Sempre informaram-me sobre cada passo do processo, equilibrando profissionalismo e atenção aos detalhes, garantindo que todas as necessidades fossem satisfeitas sem sobrecarregar-me com informações desnecessárias.
                                                    </p>

                                                </CardContent>
                                            </Card>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>
                        </div>
                    </div>
                </div>
                <Spacer />
            </div>
        </section>
    )
}

export default Testimonials