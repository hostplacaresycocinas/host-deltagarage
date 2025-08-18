'use client';

import { company, preguntas } from '@/app/constants/constants';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PreguntasHome = () => {
  const [activeAnswer, setActiveAnswer] = useState<string | null>('preg-1');

  const toggleAnswer = (id: string) => {
    if (activeAnswer !== id) {
      setActiveAnswer(id);
    }
  };

  return (
    <section id='preguntasSection' className='py-20 md:py-28 relative'>
      {/* Fondo sutil */}
      <div
        className={`absolute inset-0 ${
          company.dark
            ? 'bg-gradient-to-b from-transparent via-gray-900/20 to-transparent'
            : 'bg-gradient-to-b from-transparent via-gray-900/20 to-transparent'
        }`}
      ></div>

      <div className='max-w-4xl mx-auto px-6 lg:px-8 relative z-10'>
        {/* Header */}
        <div className='text-center mb-6 md:mb-10'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-3xl md:text-4xl lg:text-5xl font-light text-color-title-light mb-4'
          >
            Preguntas Frecuentes
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className='w-24 h-0.5 bg-color-primary mx-auto mb-6'
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className='text-color-text-light text-lg md:text-xl max-w-2xl mx-auto font-light'
          >
            Todo lo que necesitas saber sobre nuestros servicios
          </motion.p>
        </div>

        {/* Lista de preguntas */}
        <div className='space-y-4'>
          {preguntas.map((pregunta, index) => (
            <motion.div
              key={pregunta.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                onClick={() => toggleAnswer(pregunta.id)}
                className={`group relative rounded-xl border transition-all duration-300 cursor-pointer overflow-hidden
                  ${
                    company.dark
                      ? `bg-color-bg-secondary ${
                          activeAnswer === pregunta.id
                            ? 'border-color-primary/40 shadow-lg shadow-color-primary/20'
                            : 'border-gray-700 hover:border-gray-600 hover:shadow-md'
                        }`
                      : `bg-color-bg-secondary ${
                          activeAnswer === pregunta.id
                            ? 'border-color-primary/40 shadow-lg shadow-color-primary/20'
                            : 'border-gray-700 hover:border-gray-600 hover:shadow-md'
                        }`
                  }`}
              >
                {/* Contenido principal */}
                <div className='p-8'>
                  <div className='flex items-start justify-between gap-6'>
                    <div className='flex-1'>
                      <h4
                        className={`text-xl font-medium transition-colors duration-300
                        ${
                          activeAnswer === pregunta.id
                            ? 'text-color-primary'
                            : 'text-color-title-light group-hover:text-color-primary'
                        }`}
                      >
                        {pregunta.question}
                      </h4>
                    </div>

                    {/* Icono */}
                    <div className='flex-shrink-0'>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300
                          ${
                            activeAnswer === pregunta.id
                              ? `bg-color-primary ${
                                  company.dark
                                    ? 'text-color-title-light'
                                    : 'text-color-title'
                                }`
                              : company.dark
                              ? 'bg-color-text text-color-title-light group-hover:bg-color-primary group-hover:text-color-title-light'
                              : 'bg-color-text-light text-color-title group-hover:bg-color-primary group-hover:text-color-title'
                          }`}
                      >
                        <div className='relative w-4 h-4'>
                          {/* Línea horizontal (siempre visible) */}
                          <div className='absolute top-1/2 left-0 w-full h-[3px] bg-current transform -translate-y-1/2 rounded-full'></div>
                          {/* Línea vertical (solo cuando está cerrada) */}
                          <div
                            className={`absolute left-1/2 top-0 w-[3px] h-full bg-current transform -translate-x-1/2 transition-all duration-300 rounded-full ${
                              activeAnswer === pregunta.id
                                ? 'opacity-0'
                                : 'opacity-100'
                            }`}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Respuesta expandible */}
                  <AnimatePresence>
                    {activeAnswer === pregunta.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className='overflow-hidden'
                      >
                        <div
                          className={`mt-6 pt-6 border-t ${
                            company.dark
                              ? 'border-neutral-700'
                              : 'border-gray-100'
                          }`}
                        >
                          <p className='text-color-text-light leading-relaxed text-base'>
                            {pregunta.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Efecto de brillo en hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-transparent via-color-primary/5 to-transparent opacity-0 transition-opacity duration-300
                  ${
                    activeAnswer === pregunta.id
                      ? 'opacity-100'
                      : 'group-hover:opacity-100'
                  }`}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreguntasHome;
