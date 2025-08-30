'use client'

import Image from "next/image";
import Pic1 from '../public/3dlogo.png'
import Pic2 from '../public/banner.png'
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from 'lenis';
import { MotionValue } from "framer-motion";
import Spacer from "./spacer";
import { Button } from "./ui/button";
import Link from "next/link";
import Accordion from "./accordion";
// import Line from "./line";
// import Text from "./Text";
// import Scene from "./Scene";

interface SectionProps {
    scrollYProgress: MotionValue<number>;
}

export default function Parallax() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        // target: container,
        target: container,
        offset: ["start start", "end end"]
    })

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time: any) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    return (
        <main ref={container} id="steps" className="relative h-[180vh]">
            <Section1 scrollYProgress={scrollYProgress} />
            <Section2 scrollYProgress={scrollYProgress} />
        </main>
    );
}

const Section1 = ({ scrollYProgress }: SectionProps) => {

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
    return (
        <motion.div style={{ scale, rotate }} className="sticky top-0 h-[90vh] bg-[#f9f9f9] border border-neutral-200 pb-[10vh] px-[8rem]">
            {/* <h3 className="text-lime-600">A little more about us</h3>
      <p>We chose to take on the challenge of transforming one of the greatest problems of our time: plastic pollution. We are driven by a clear purpose—to leave the planet in a better state than we found it.</p>
      <div className="flex gap-4"> */}
            {/* <Line theme="dark" /> */}
            {/* <p>Section</p> */}
            <Spacer light />
            <div className="grid grid-cols-2 items-start pb-4">
                <div className='flex flex-col gap-4'>
                    <div className="flex items-center justify-between w-[240px] text-2xl text-[#444] font-medium">
                        <span className='text-xl -tracking-wider'>//</span>
                        <span className=''>01</span>
                    </div>
                    <Image src='/form1.webp' width={240} height={200} alt="" className="mt-20" />
                </div>
                <div className='ml-[1.8px] flex items-start justify-between'>
                    <div>
                        {/* <p className='text-2xl text-[#444] font-normal'>Partners</p>
                        <p className='font-light text-[18px] mt-4 text-[#444] max-w-90'>Advance your career by securing a leadership role that aligns with your expertise and aspirations.</p> */}
                        <p className='text-2xl text-[#444] font-normal'>Direito Civil e Contencioso Geral</p>
                        <p className='font-light text-[18px] mt-4 text-[#444] max-w-90'>
                            Obtenha apoio jurídico especializado em processos civis e contenciosos, com acompanhamento completo em todas as instâncias.
                        </p>

                        {/* <ul className="text-[#111] mt-16">
                            <div className="flex items-center justify-between text-lg">
                                <span>Personalized Career Guidance</span>
                                <span>+</span>
                            </div>
                        </ul> */}

                        <Accordion />
                    </div>
                    <Button asChild variant={'ghost'} className='h-12 text-black/80 bg-[#c9f1a1] rounded-none'>
                        <Link href='/contact'>Saiba mais</Link>
                    </Button>
                    {/* <p className="uppercase text-sm font-medium text-[#828282]">Services</p> */}
                </div>
            </div>
            {/* </div> */}
        </motion.div>
    )
}

const Section2 = ({ scrollYProgress }: SectionProps) => {

    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

    return (
        <motion.div style={{ scale, rotate }} className="sticky top-0 h-[90vh] bg-[#d9dbd2] pb-[10vh] px-[8rem]">
            {/* <div className="w-full h-20 px-8 py-8">
            <span className="float-right text-white text-[3.4rem] -tracking-wide  leading-16 uppercase scale-y-200">
            Our Amazing <br/>Designers
        </span>
        </div> */}
            {/* <Text />
      <Scene /> */}

            {/* <Line theme="light" /> */}
            {/* <Image 
        src={Pic2}
        alt="img"
        placeholder="blur"
        fill
      /> */}
            <Spacer light />
            <div className="grid grid-cols-2 items-start pb-4">
                <div className='flex flex-col gap-4'>
                    <div className="flex items-center justify-between w-[240px] text-2xl text-[#444] font-medium">
                        <span className='text-xl -tracking-wider'>//</span>
                        <span className=''>02</span>
                    </div>
                    <Image src='/form.webp' width={240} height={200} alt="" className="mt-20" />
                </div>
                <div className='ml-[1.8px] flex items-start justify-between'>
                    <div>
                        {/* <p className='text-2xl text-[#444] font-normal'>Associates</p>
                        <p className='font-light text-[18px] mt-4 text-[#444] max-w-90'>Find the perfect position that offers both professional growth and a supportive environment.</p> */}
                        <p className='text-2xl text-[#444] font-normal'>Direito Comercial e Societário</p>
                        <p className='font-light text-[18px] mt-4 text-[#444] max-w-90'>
                            A Nhampule apoia empresas na constituição, reestruturação e gestão societária, oferecendo soluções jurídicas claras e estratégicas para cada negócio.
                        </p>

                        {/* <ul className="text-[#111] mt-16">
                            <div className="flex items-center justify-between text-lg">
                                <span>Personalized Career Guidance</span>
                                <span>+</span>
                            </div>
                        </ul> */}

                        <Accordion />
                    </div>
                    <Button asChild variant={'ghost'} className='h-12 text-black/80 bg-[#c9f1a1] rounded-none'>
                        <Link href='/contact'>Saiba mais</Link>
                    </Button>
                    {/* <p className="uppercase text-sm font-medium text-[#828282]">Services</p> */}
                </div>
            </div>
        </motion.div>
    )
}

const Section3 = ({ scrollYProgress }: SectionProps) => {

    const scale = useTransform(scrollYProgress, [0, 1], [1, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 0])
    return (
        <motion.div style={{ scale, rotate }} className="relative h-screen bg-[#f4f4f4] border border-zinc-300 text-[2.5vw] flex flex-col items-center justify-center text-black pb-[10vh] px-[8rem]">
            {/* <h3 className="text-lime-600">A little more about us</h3>
      <p>We chose to take on the challenge of transforming one of the greatest problems of our time: plastic pollution. We are driven by a clear purpose—to leave the planet in a better state than we found it.</p>
      <div className="flex gap-4"> */}
            {/* <Line theme="dark" /> */}
            {/* <p>Section</p> */}
            <div className="relative w-[12.5vw]">
                <Image
                    src={Pic1}
                    alt="img"
                    placeholder="blur"
                    fill
                />
            </div>
            <p>Transition</p>
            {/* </div> */}
        </motion.div>
    )
}