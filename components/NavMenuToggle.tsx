"use client"

import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion';

interface NavMenuToggleProps {
    open: boolean;
    setOpen: (_: boolean) => void;
}

const NavMenuToggle: React.FC<NavMenuToggleProps> = ({ open, setOpen }) => {
    const path1Variants = {
        open: { d: "M3.06061 2.99999L21.0606 21" },
        closed: { d: "M0 8.5L24 8.5" },
    }
    const path2Variants = {
        open: { d: "M3.00006 21.0607L21 3.06064" },
        closed: { d: "M0 15.5L24 15.5" },
    }

    const path1Controls = useAnimation();
    const path2Controls = useAnimation();

    useEffect(() => {
        if(open) {
            path1Controls.start(path1Variants.open)
            path2Controls.start(path2Variants.open)
        } else {
            path1Controls.start(path1Variants.closed)
            path2Controls.start(path2Variants.closed)
        }
    }, [open])
    

    return (
                <div onClick={() => setOpen(!open)} className="lg:hidden z-20 h-9 w-9 flex justify-center items-center shrink-0 p-0 m-0 stroke-black stroke-2 cursor-pointer">
                <svg width={20} height={20} viewBox='0 0 24 24'>
                <motion.path {...path1Variants.closed} animate={path1Controls} transition={{duration: 0.2}} />
                <motion.path {...path2Variants.closed} animate={path2Controls} transition={{duration: 0.2}} />
            </svg>
            </div>
  )
}

export default NavMenuToggle