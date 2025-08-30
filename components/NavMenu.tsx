import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { easings } from '@/utils/animation'
import NavMenuItem from './NavMenuItem'
// import { useTranslations } from 'next-intl';

interface NavMenuProps {
    open: boolean;
    setOpen: (_: boolean) => void;
}

const NavMenu: React.FC<NavMenuProps> = ({open, setOpen}) => {

    // const t = useTranslations("Navbar")

    // const navItems = [
    //     {
    //         title: t("link1"),
    //         url: "#projects"
    //     },
    //     {
    //         title: t("link2"),
    //         url: "#about"
    //     },
    //     {
    //         title: t("link3"),
    //         url: "#news"
    //     },
    //     {
    //         title: t("link4"),
    //         url: "#contact"
    //     }
    // ];

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
    // const [open, setOpen] = useState(true);

  return (
    <motion.nav className="fixed top-0 left-0 flex lg:hidden flex-col justify-end w-full h-screen py-4 max-w-5xl px-4 lg:px-10 mx-auto z-40 bg-blue-200"
    initial={{ y: "-100%", opacity: 0.3 }}
    animate={{
        y: 0,
        opacity: 1,
        transition: {duration: 1, ease: [0.25, 1, 0.5, 1]}
    }}
    exit={{
        y: "-100%",
        opacity: 0.8,
        transition: {duration: 0.4}
    }}
    >
        <ul>            
            {links.map((item, idx) => (
                <NavMenuItem key={idx} index={idx + 1} title={item.label} url={item.path} open={open} setOpen={setOpen} />
            ))}
        </ul>
    </motion.nav>
  )
}

export default NavMenu