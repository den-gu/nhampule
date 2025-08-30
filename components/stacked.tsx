"use client"

import { contactArrowMotion } from "@/utils/animation";
import { motion, useTransform, useScroll } from "framer-motion";
// import { ChevronsDown, ChevronsUp, ChevronUp } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";

interface CardProps {
  card: {
    id: number;
    title: string;
    desc: string;
    url: string;
  };
}

const Stacked = () => {
  
  return (
    <div id="news" className="bg-white">
      <div className="flex h-48 flex-col items-center justify-center">
        {/* <ChevronsDown className="animate-bounce text-zinc-400 ease-in-out inset-y-full" /> */}
        <span className="font-semibold uppercase text-neutral-500">
          "action.scroll.down"
        </span>
      </div>
      <Carousel />
      <div className="flex h-48 flex-col items-center justify-center">
        {/* <ChevronsUp className="animate-bounce text-zinc-400 ease-in-out inset-y-full" /> */}
        <span className="font-semibold uppercase text-neutral-500">
          "action.scroll.up"
        </span>
      </div>
    </div>
  );
};

const Carousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);


const cards = [
  {
    url: "https://www.youtube.com/embed/kBIOxg3V7Ww?si=SWFyh1tEymy_WkDZ&amp;start=3",
    title: "news.title1",
    desc: "news.desc1",
    id: 1,
  },
  {
    url: "https://www.youtube.com/embed/lrZUfQEnX4E?si=FLWvaUGZvOOIOZCI",
    title: "news.title2",
    desc: "news.desc2",
    id: 2,
  },
  {
    url: "https://www.youtube.com/embed/B2IE3NRk7WY?si=Qz68U5L4E2Il5cy_&amp;start=1",
    title: "news.title3",
    desc: "news.desc3",
    id: 3,
  },
  // {
  //   url: "/green-trees-beside-river-under-blue-sky-during-daytime.jpg",
  //   title: "Comunidade Replanta Mangais",
  //   desc: "Projeto comunitário recupera zona costeira.",
  //   id: 4,
  // },
  //   {
  //   url: "/a-fence-with-a-bunch-of-solar-panels-on-top-of-it.jpg",
  //   title: "Energia Solar Ganha Força",
  //   desc: "Painéis solares abastecem vilas remotas e reduzem custos de energia.",
  //   id: 5,
  // },
  // {
  //   url: "/two-zebras-on-grass-field.jpg",
  //   title: "Nova Reserva em Moçambique",
  //   desc: "Área protegida vai salvar espécies ameaçadas.",
  //   id: 6,
  // },
  // {
  //   url: "/imgs/abstract/7.jpg",
  //   title: "News 7",
  //   id: 7,
  // },
];

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 flex flex-col h-screen xl:items-center justify-center gap-10 overflow-hidden">
        <h3 className="font-black text-xl text-center">"div.h3"</h3>
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <Link href={card.url} target="_blank" key={card.id}>
    <motion.div
      className="group relative h-[390px] w-[400px] overflow-hidden bg-neutral-200 hover: cursor-pointer"
      initial="initial"
      animate="animate"
      whileHover="hover"
    >
      <div
        style={{
          // backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      {/* <LoopVideo url={card.url} key={card.id} /> */}
      {/* <iframe width="100%" height="100%" src={card.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
      <div className="absolute inset-0 z-10 flex flex-col pointer-events-auto justify-between w-full h-full bg-black/40 hover:bg-black/70">
        <div className="flex items-center justify-between p-6">
          <h1 className="text-md font-black uppercase text-white">
            Planet Vox | Bio TV
          </h1>
          <motion.div variants={contactArrowMotion} className='z-20 h-9 w-9 flex justify-center items-center rounded-full bg-black/30'>
            <svg className='w-[0.6rem] h-[0.6rem]' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        </div>
        <div className="p-6 text-white">
          <p className="text-xl font-black uppercase">
            {card.title}
          </p>
          <p className="mt-2">{card.desc}</p>
        </div>
      </div>
    </motion.div>
    </Link>
  );
};

export default Stacked;
