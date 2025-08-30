"use client"

import React, { useState } from 'react'
import Arrow from "../public/arrow.svg"
import { arrowMotion, dividerMotion, itemContentMotion, itemCoverMotion } from '@/utils/animations';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface NavMenuItemProps {
  index: number;
  title: string;
  url: string;
  // func?: Function;
  open: boolean;
  setOpen: (_: boolean) => void;
}

const NavMenuItem: React.FC<NavMenuItemProps> = ({ index, title, url, open, setOpen }) => {

  const [loading, setLoading] = useState<boolean>(true)

  // console.log(open, setOpen)

  return (
    <motion.li className={`cursor-pointer py-6 relative w-full
      ${loading ? 'pointer-events-none' : 'pointer-events-auto'}`}
      key={index.toLocaleString("en-US", { minimumIntegerDigits: 2 })}
      onClick={() => setOpen(!open)}
      initial="initial"
      animate="animate"
      whileHover="hover"
      onAnimationComplete={() => setLoading(false)}>
      <Link href={url}>
        <div className='flex items-center relative w-full'>
          <motion.div variants={itemCoverMotion} className='absolute inset-0 bg-blue-200' />
          <motion.span variants={itemContentMotion} className='w-[4ch] text-xl sm:text-2xl md:text-3xl'>({index.toLocaleString("en-US", { minimumIntegerDigits: 2 })})</motion.span>
          <h1 className='uppercase tracking-wide text-3xl sm:text-4xl md:text-5xl flex-1'>{title}</h1>
          <motion.div variants={arrowMotion}>
            {/* <Arrow className="w-6 h-6" /> */}
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_708_2)">
                <path d="M19.9729 5.09847C19.9729 4.35473 19.3914 3.81383 18.7424 3.81383C18.0797 3.81383 17.5252 4.3953 17.5252 5.04439V10.0342L17.7687 16.3492L15.5375 13.8341L2.10953 0.406126C1.86613 0.16272 1.56862 0.0410156 1.2576 0.0410156C0.581473 0.0410156 0 0.663056 0 1.31214C0 1.59611 0.135226 1.92066 0.378634 2.16407L13.7795 15.5785L16.2948 17.7963L9.69571 17.5798H4.98985C4.35428 17.5798 3.77281 18.1343 3.77281 18.7834C3.77281 19.4324 4.28666 20.0004 5.04394 20.0004H18.6477C19.459 20.0004 19.9594 19.473 19.9594 18.7023L19.9729 5.09847Z" fill="black" fillOpacity="0.85" />
              </g>
              <defs>
                <clipPath id="clip0_708_2">
                  <rect width="19.9729" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>

          </motion.div>
        </div>
        <motion.div
          variants={dividerMotion}
          className='absolute bottom-0 h-[2px] bg-black w-full origin-left' />
      </Link>
    </motion.li>
  )
}

export default NavMenuItem