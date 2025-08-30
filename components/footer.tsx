import React from 'react'
import Spacer from './spacer'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'

const Footer: React.FC = () => {
    return (
        <section className='min-h-[90vh] bg-[#111]'>
            <div className='relative flex flex-col gap-20 max-w-7xl w-full mx-auto pt-20 pb-0'>
                <div className="grid grid-cols-2 items-start">
                    <div className='grid grid-cols-2 items-start'>
                        <Link href="/" className='text-2xl font-black uppercase'>
                            {/* <Logo /> */}
                            {/* Planet Vox */}
                            <Image src="/nhampule-logo-02.png" width={60} height={70} alt='Bio TV' />
                        </Link>
                        <ul className='uppercase flex flex-col gap-2'>
                            <li><Link href='/' className='hover:text-[#acb58c] transition-colors duration-400 ease-in-out'>Sobre Nós</Link></li>
                            <li><Link href='/' className='hover:text-[#acb58c] transition-colors duration-400 ease-in-out'>Artigos</Link></li>
                            <li><Link href='/' className='hover:text-[#acb58c] transition-colors duration-400 ease-in-out'>Contacte-nos</Link></li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-3">
                        {/* Coluna 1 */}
                        <ul className='flex flex-col gap-2'>
                            <h4 className='uppercase text-[#828282] mb-2'>Para Advogados</h4>
                            <li>
                                <Link href='/' className='hover:text-[#acb58c] transition-colors duration-400 ease-in-out'>
                                    Consultoria Jurídica Especializada
                                </Link>
                            </li>
                            <li>
                                <Link href='/' className='hover:text-[#acb58c] transition-colors duration-400 ease-in-out'>
                                    Acompanhamento Forense
                                </Link>
                            </li>
                        </ul>

                        {/* Coluna 2 */}
                        <ul className='flex flex-col gap-2'>
                            <h4 className='uppercase text-[#828282] mb-2'>Para Escritórios</h4>
                            <li>
                                <Link href='/' className='hover:text-[#acb58c] transition-colors duration-400 ease-in-out'>
                                    Consultoria Estratégica
                                </Link>
                            </li>
                            <li>
                                <Link href='/' className='hover:text-[#acb58c] transition-colors duration-400 ease-in-out'>
                                    Compliance e Controlo Interno
                                </Link>
                            </li>
                            <li>
                                <Link href='/' className='hover:text-[#acb58c] transition-colors duration-400 ease-in-out'>
                                    Gestão de Contratos
                                </Link>
                            </li>
                        </ul>

                        {/* Coluna 3 */}
                        <ul className='flex flex-col gap-2'>
                            <h4 className='uppercase text-[#828282] mb-2'>Para Empresas</h4>
                            <li>
                                <Link href='/' className='hover:text-[#acb58c] transition-colors duration-400 ease-in-out'>
                                    Assessoria Jurídica Interna
                                </Link>
                            </li>
                            <li>
                                <Link href='/' className='hover:text-[#acb58c] transition-colors duration-400 ease-in-out'>
                                    Direito Comercial e Societário
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="grid grid-cols-2 items-start">
                    <div className="blank" />
                    <div>
                        <h3 className='text-5xl font-bold border-b border-neutral-800 pb-4'>Contacte-nos</h3>
                        <ul className='flex flex-col gap-2 mt-10'>
                            {/* <h4 className='uppercase text-[#828282] mb-2'>For Law Firms</h4> */}
                            <li><Link href='tel:258840000000' className='hover:text-[#acb58c] transition-colors duration-400 ease-in-out'>84 00 00 000</Link></li>
                            <li><Link href='mailto:info@nhampule.co.mz' className='hover:text-[#acb58c] transition-colors duration-400 ease-in-out'>info@nhampule.co.mz</Link></li>
                            <li>Av. Malhangalene, Maputo, SE1 1DN</li>
                        </ul>
                    </div>
                </div>
                <div className="grid grid-cols-2 items-end">
                    <div className='grid grid-cols-2 items-end'>

                        <span className='text-[#828282] text-sm'>© 2025 Nhampule <br /> Advocacia & Solicitadoria Jurídica.</span>
                        <Link href='/'><span className='text-[#828282] text-sm'>Termos e Condições</span></Link>
                    </div>
                    <div className="grid grid-cols-2">
                        <Link href='/'><span className='text-[#828282] text-sm'>Política de Privacidade</span></Link>
                        <span className='text-[#828282] text-sm justify-self-end'>Code by <Link href='/' className='text-[#acb58c]'>Attemporal Studio</Link></span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer