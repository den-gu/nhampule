"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import NavMenuToggle from './NavMenuToggle'
import Logo from "@/components/logo"
import { arrowMotion, contactArrowMotion, contactMotion, textReavealMotion } from '@/utils/animation'
import { motion } from 'framer-motion'
import Magnetic from './common/magnetic'
import Image from 'next/image'
// import { useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'

interface NavbarProps {
    open: boolean;
    setOpen: (_: boolean) => void;
}


// const links = [
//     {
//         label: 'Lawyers',
//         path: '/'
//     },
//     {
//         label: 'Law Firms',
//         path: '/'
//     },
//     {
//         label: 'In-House Legal',
//         path: '/'
//     },
//     {
//         label: 'About Us',
//         path: '/'
//     },
//     {
//         label: 'Insights',
//         path: '/'
//     }
// ]

const links = [
    {
        label: 'Início',
        path: '/advogados'
    },
    {
        label: 'Para Escritórios',
        path: '/escritorios'
    },
    {
        label: 'Para Empresas',
        path: '/empresas'
    },
    {
        label: 'Sobre Nós',
        path: '/sobre-nos'
    },
    {
        label: 'Artigos e Notícias',
        path: '/insights'
    }
];


const Navbar: React.FC<NavbarProps> = ({ open, setOpen }) => {

    // const t = useTranslations("Navbar")

    return (
        <div className='flex items-center justify-center w-full sticky top-0 z-30 mix-blend-difference bg-transparent'>
            <nav className='grid grid-cols-3 lg:grid-cols-[1fr_2fr_1fr] items-center max-w-7xl w-full h-16 mx-auto'>
                <ul className='flex items-center'>
                    <Link href="/" className='text-2xl font-black uppercase'>
                        {/* <Logo /> */}
                        {/* Planet Vox */}
                        <Image src="/nhampule-logo-02.png" width={60} height={70} alt='Bio TV' />
                    </Link>
                </ul>
                <ul className='hidden lg:flex items-center justify-center gap-6 text-sm font-normal'>
                    {links.map((link) => (
                        <Magnetic key={link.path}><li><Link href={link.path} className='flex items-center gap-1'>
                            {/* <div className="w-1 h-1 bg-[#acb58c]" /> */}
                            {link.label}</Link></li></Magnetic>
                    ))}
                </ul>
                <div className='flex lg:hidden justify-center'>
                    <NavMenuToggle open={open} setOpen={setOpen} />
                </div>

                <div className="flex items-center justify-self-end">
                    {/* <section className="flex items-center"> */}
                    <motion.div className="mx-auto flex-1 flex flex-col"
                        initial="initial"
                        animate="animate">
                        <div>
                            {/* <motion.div className="bg-red-300 h-9 rounded-full flex-1 hidden md:block origin-left"
                            initial={{ scaleX: 0 }}
                            animate={{
                              scaleX: 1,
                              transition: { duration: 1, ease: "backInOut" }
                            }}> */}

                            <motion.div className="flex gap-1 relative z-10"
                                initial="initial"
                                animate="animate"
                                whileHover="hover">
                                {/* <motion.div className="bg-red-300 h-9 rounded-full flex-1 hidden md:block origin-left" */}
                                {/* // </motion.div> */}
                                {/* <Magnetic>
                                    <Button asChild variant={'secondary'} className='lg:block rounded-full cursor-pointer bg-blue-300/70 text-black'>
                                        <Link href="#contact">Contacto</Link>
                                    </Button>
                                </Magnetic>
                                <motion.div variants={contactArrowMotion} className='hidden z-20 h-9 w-9 lg:hidden justify-center items-center rounded-full bg-red-300'>
                                    <svg className='w-[0.6rem] h-[0.6rem]' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_708_2)">
                                            <path d="M19.9729 5.09847C19.9729 4.35473 19.3914 3.81383 18.7424 3.81383C18.0797 3.81383 17.5252 4.3953 17.5252 5.04439V10.0342L17.7687 16.3492L15.5375 13.8341L2.10953 0.406126C1.86613 0.16272 1.56862 0.0410156 1.2576 0.0410156C0.581473 0.0410156 0 0.663056 0 1.31214C0 1.59611 0.135226 1.92066 0.378634 2.16407L13.7795 15.5785L16.2948 17.7963L9.69571 17.5798H4.98985C4.35428 17.5798 3.77281 18.1343 3.77281 18.7834C3.77281 19.4324 4.28666 20.0004 5.04394 20.0004H18.6477C19.459 20.0004 19.9594 19.473 19.9594 18.7023L19.9729 5.09847Z" fill="black" fillOpacity="0.85" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_708_2">
                                                <rect width="19.9729" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </motion.div> */}


                                <div className="">
                                    <Button asChild variant={'ghost'} className='h-10 border rounded-none'>
                                        <Link href='/contact'>Solicite Orientação Jurídica</Link>
                                    </Button>
                                </div>

                            </motion.div>
                            {/* <motion.h1 className="absolute right-0 z-20"
                        variants={textReavealMotion(0.2)}>in Plasticizable</motion.h1> */}
                        </div>
                    </motion.div>
                    {/* </section> */}
                    {/* <motion.div className='flex items-center gap-1 relative'
                    initial="initial"
                    animate="animate"
                    whileHover="hover">
                    <Button variant={'secondary'} className='flex-1 rounded-full cursor-pointer bg-red-300'>Contact</Button>
                    <motion.div variants={arrowMotion} className='relative h-9 w-9 flex justify-center items-center rounded-full right-0 bg-red-300'>
                        <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_708_2)">
                                <path d="M19.9729 5.09847C19.9729 4.35473 19.3914 3.81383 18.7424 3.81383C18.0797 3.81383 17.5252 4.3953 17.5252 5.04439V10.0342L17.7687 16.3492L15.5375 13.8341L2.10953 0.406126C1.86613 0.16272 1.56862 0.0410156 1.2576 0.0410156C0.581473 0.0410156 0 0.663056 0 1.31214C0 1.59611 0.135226 1.92066 0.378634 2.16407L13.7795 15.5785L16.2948 17.7963L9.69571 17.5798H4.98985C4.35428 17.5798 3.77281 18.1343 3.77281 18.7834C3.77281 19.4324 4.28666 20.0004 5.04394 20.0004H18.6477C19.459 20.0004 19.9594 19.473 19.9594 18.7023L19.9729 5.09847Z" fill="white" fillOpacity="0.85" />
                            </g>
                            <defs>
                                <clipPath id="clip0_708_2">
                                    <rect width="19.9729" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                    </motion.div>
                    <NavMenuToggle open={open} setOpen={setOpen} />
                </motion.div> */}
                </div>
            </nav>
        </div>
    )
}

export default Navbar