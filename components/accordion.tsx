import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

// Definindo os tipos para as props do componente
interface AccordionItemProps {
    title: string;
    content: string;
}

const AccordionItem = ({ title, content }: AccordionItemProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const itemRef = useRef<HTMLLIElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (itemRef.current && !itemRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [itemRef]);

    return (
        <motion.li
            ref={itemRef}
            onClick={() => setIsOpen(!isOpen)}
            initial={{ '--animated-border-width': '0%' }}
            whileHover={{ '--animated-border-width': '100%' }}
            transition={{ duration: 0.5 }}
            className="relative py-4 cursor-pointer text-lg text-gray-800"
        >
            <div className="flex justify-between items-center">
                <span>{title}</span>
                <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.1 }}
                    className="text-gray-500"
                >
                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg> */}
                    <Plus size={16} />
                </motion.span>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.p
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: '1rem' }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-sm text-gray-600 overflow-hidden"
                    >
                        {content}
                    </motion.p>
                )}
            </AnimatePresence>

            <div className="absolute bottom-0 left-0 w-full h-px bg-gray-300" />
            <div
                style={{
                    height: '1px',
                    background: 'black',
                    width: 'var(--animated-border-width)',
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                }}
            />
        </motion.li>
    );
};

// Componente pai
const Accordion = () => {
    const items: AccordionItemProps[] = [
        {
            title: 'Consultoria Jurídica Personalizada',
            content: 'Soluções adaptadas às necessidades específicas do seu caso ou empresa.',
        },
        {
            title: 'Serviços Especializados',
            content: 'Acesso a expertise em diversas áreas do direito, incluindo civil, comercial e bancário.',
        },
        {
            title: 'Confidencialidade e Discrição',
            content: 'Tratamos cada processo com total sigilo e respeito pelos interesses do cliente.',
        },
        {
            title: 'Apoio Estratégico Continuado',
            content: 'Acompanhamento ao longo de todas as fases do processo jurídico e consultivo.',
        },
    ];


    return (
        <ul className="list-none w-full max-w-90 mt-16">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                />
            ))}
        </ul>
    );
};

export default Accordion;