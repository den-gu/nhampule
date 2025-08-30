'use client';
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import Preloader from '@/components/preloader';
import { Layout } from '@/containers/layout';
import Magnetic from "@/components/common/magnetic";
import Navbar from '@/components/navbar';
import Lenis from 'lenis';
import { easings, textReavealMotion } from "@/utils/animation";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Parallax from '@/components/services';
import Stacked from '@/components/stacked';
import Why from '@/components/why';
import Reach from '@/components/reach';
import Footer from '@/components/footer';
import Testimonials from '@/components/testimonials';
import ParallaxImage from '@/components/parallax';
import Spacer from '@/components/spacer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false)
  const container = useRef(null);


  const { scrollY, scrollYProgress } = useScroll({
    target: container,
    offset: ["start center", "end center"],
  });

  useEffect(() => {
    const lenis = new Lenis()
    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();

        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default'
          window.scrollTo(0, 0);
        }, 2000)
      }
    )()
    requestAnimationFrame(raf)
  }, [])

  const imageScale = useTransform(scrollYProgress, [0.5, 1.1], [1.200, 1]);
  // const videoScale = useTransform(scrollYProgress, [0.2, 1.2], [1.3, 1]);
  // const videoOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.7, 0]);
  // const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <main>
      <AnimatePresence>
        {isLoading && <Preloader />}
      </AnimatePresence>
      {/* <Layout> */}
      <Navbar open={open} setOpen={setOpen} />
      <section id="hero" ref={container} className="flex items-center h-screen bg-white overflow-hidden">
        <motion.div className="sticky -top-16 h-full w-full px-2.5 sm:px-3 md:px-4 lg:px-6 mx-auto flex-1 flex flex-col justify-center gap-16 text-neutral-100 text-5xl font-medium leading-snug sm:text-5xl md:text-7xl md:leading-tight lg:text-[6.2rem] xl:text-[4.3rem]"
          initial="initial"
          animate="animate">
          <motion.div
            className="absolute w-full h-full"
            style={{
              scale: imageScale,
              // opacity: videoOpacity,
            }}
          >
            <Image
              className="w-full h-full object-cover"
              src='/banner.png'
              alt="Building a Greener Future"
              width={1200}
              height={1200}
            // fill
            />
          </motion.div>
          <div className="absolute inset-0 bg-black/70 w-full h-full object-cover" />
          <div className='-tracking-wider z-20'>
            {/* <Magnetic> */}
              <motion.h1 className="md:pl-[7%] z-20"
                variants={textReavealMotion(0)}><span className='text-[#acb58c]'>Impulsionando a Excelência Jurídica</span> com</motion.h1>
            {/* </Magnetic> */}
            <div className="hidden items-center z-10">
              {/* <Magnetic> */}
                <motion.div className="bg-white h-[6px] flex-1  max-w-xl md:mr-8 hidden md:block origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: 1,
                    transition: { duration: 1, ease: "backInOut" }
                  }} />
              {/* </Magnetic> */}
              {/* <Magnetic>
              <motion.h1 className="z-20 flex-1"
                variants={textReavealMotion(0.2)}>fragment2</motion.h1>
            </Magnetic> */}
            </div>
            <div className="z-20">
              {/* <Magnetic> */}
                <motion.h1
                  className="md:pl-[7%]"
                  variants={textReavealMotion(0.4)}>Soluções Estratégicas de Advocacia e Consultoria</motion.h1>
              {/* </Magnetic> */}
            </div>
          </div>
          <div className="z-30 md:text-left w-full pt-4 md:pl-[0%] text-base normal-case tracking-normal leading-normal">
            <div className="grid grid-cols-2">
              <div></div>
              <div>
                <motion.p className="max-w-sm font-normal text-white"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { delay: 0.6, duration: 1, ease: "backInOut" }
                  }}>Com profundo conhecimento jurídico, a Nhampule oferece serviços especializados que ajudam empresas, escritórios e profissionais a prosperar.</motion.p>
              </div>
            </div>
          </div>
          <div className="md:pl-[7%] z-20 flex items-center w-full gap-4">
            <Button asChild variant={'ghost'} className='h-12 text-black/80 bg-[#c9f1a1] rounded-none'>
              <Link href='/contact'>Explore Nossos Serviços</Link>
            </Button>
            <Button asChild variant={'ghost'} className='h-12 border border-[#acb58c] rounded-none'>
              <Link href='/contact'>Entre em Contacto</Link>
            </Button>
          </div>
        </motion.div>
      </section>
<div>
  <Spacer />
        <div className="grid grid-cols-2 items-end border-b border-neutral-300 pb-4 px-[8rem]">
                <div className='flex items-center gap-4'>
                    <div className="w-2 h-2 bg-[#111]" />
                    <span className='text-[#444] uppercase text-sm font-medium'>O que oferecemos?</span>
                </div>
                <div className='flex items-end justify-between'>
                    <p className='text-5xl text-[#444] font-medium'>Áreas de Actuação</p>
                    {/* <Button asChild variant={'ghost'} className='h-12 text-black/80 bg-[#c9f1a1] rounded-none'>
                            <Link href='/contact'>Schedule a consaultation</Link>
                        </Button> */}
                    <p className="uppercase text-sm font-medium text-[#828282]">Serviços</p>
                </div>
            </div>
</div>
            
      <Parallax />
      <Why />
      {/* <Stacked /> */}
      {/* <section className='sticky top-0'>
        <div className="h-[200vh]">
          <div className="relative h-screen bg-amber-400">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor iste voluptas, porro consectetur provident hic nihil vitae ea beatae praesentium consequuntur cum adipisci a molestiae magni non expedita dolorum. Aspernatur.
            At eos voluptatum alias dolores, ducimus earum enim culpa molestias voluptatibus quaerat, aliquid repudiandae nemo veritatis explicabo deleniti ipsam voluptatem, atque corrupti. Eius velit pariatur asperiores beatae dolores ut quisquam!
            Quo reprehenderit voluptatem nulla. Unde quos sit, aspernatur voluptatibus minima pariatur delectus necessitatibus recusandae corrupti ducimus laboriosam, minus rem facere asperiores voluptatum in nesciunt qui nisi, quidem doloribus itaque accusantium.
            Eveniet excepturi sequi possimus quae, quo labore at corporis temporibus consequuntur perferendis natus voluptatem illum dolores eaque veniam nostrum aperiam voluptates hic cumque impedit! Vero, doloremque. Hic sit aliquid expedita!
            Nulla, aliquid dolorum! Alias a obcaecati magni maxime nesciunt autem, consequuntur ipsum quis odit aperiam dolorum sequi nihil nulla saepe aliquam, hic veritatis? Nemo cum ab, ratione aperiam voluptas tempora?
            Cumque dignissimos, totam repellendus fuga voluptates iusto odio architecto similique obcaecati voluptas eveniet vel, autem eos. Ad nostrum doloribus ullam ab aspernatur, vel itaque sed tenetur dolorem veniam quae facere.
            Optio minus pariatur ad fuga accusantium sequi provident similique perferendis illum? Minima suscipit voluptatum officia impedit omnis consequuntur totam, eum, earum minus nobis ullam labore doloribus eveniet aperiam ratione assumenda.
            Magni, sit qui, totam ullam voluptatem et consectetur veniam distinctio perferendis natus neque consequuntur reiciendis esse quod in minima at vero nisi recusandae excepturi quidem. Odit quam omnis temporibus maiores!</p>
          </div>
        <div className="relative h-screen bg-emerald-800"></div>
        </div>
      </section> */}
      {/* </Layout> */}
      {/* <div className='relative h-screen'>
          <div className="absolute inset-0 bg-black/30 w-full h-full object-cover" />
        <Image src='/team.webp' width={1300} height={1300} alt='' className='w-full h-full object-cover' />
      </div> */}
      <ParallaxImage />
      <Testimonials />
      <Reach />
      <Footer />
    </main>
  );
}
