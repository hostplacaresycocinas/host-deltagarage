'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { company } from '@/app/constants/constants';

const beneficios = [
  {
    titulo: 'Trayectoria',
    descripcion:
      'Contamos con mas de 10 años de trayectoria en este mismo local, estamos asociadios a la Camara de Comercio Automotor y habilitados por el Registro de la Propiedad Automotor (DNRPA).',
    icono: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='w-full h-full'
        fill='currentColor'
        viewBox='0 0 24 24'
      >
        <path d='M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z' />
      </svg>
    ),
  },
  {
    titulo: 'Misión',
    descripcion:
      'Generar un proceso de venta amistoso, con un servicio de post venta excelente para que nos vuelvan a elegir.',
    icono: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='w-full h-full'
        fill='currentColor'
        viewBox='0 0 24 24'
      >
        <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
      </svg>
    ),
  },
  {
    titulo: 'Nuestros valores',
    descripcion:
      'Cercanía al Cliente, Alto Desempeño, Crear Valores, Respeto, Responsabilidad, Desarrollo Sustentable.',
    icono: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='w-full h-full'
        fill='currentColor'
        viewBox='0 0 24 24'
      >
        <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' />
      </svg>
    ),
  },
];

const Proceso = () => {
  return (
    <section
      className={`flex flex-col items-center justify-center py-10 md:py-16 `}
    >
      <div className='max-w-7xl w-full flex flex-col px-4 md:px-8'>
        {/* Título */}
        <div className='text-center mb-8 md:mb-12'>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            className={`text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 ${
              company.darkmode ? 'text-color-title-light' : 'text-blue-900'
            }`}
          >
            ¿Por qué comprar en {company.name}?
          </motion.h2>
        </div>

        {/* Layout de tres columnas */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12'>
          {beneficios.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, margin: '0px 0px -100px 0px' }}
              className='flex flex-col items-center text-center'
            >
              {/* Icono */}
              <div
                className={`flex items-center justify-center w-16 h-16 md:w-20 md:h-20 mb-4 md:mb-6 ${
                  company.darkmode ? 'text-color-primary' : 'text-blue-600'
                }`}
              >
                {b.icono}
              </div>

              {/* Título */}
              <h3
                className={`text-xl md:text-2xl font-bold mb-3 md:mb-4 ${
                  company.darkmode ? 'text-color-title-light' : 'text-blue-900'
                }`}
              >
                {b.titulo}
              </h3>

              {/* Descripción */}
              <p
                className={`text-sm md:text-base leading-relaxed max-w-sm ${
                  company.darkmode ? 'text-color-text-light' : 'text-gray-600'
                }`}
              >
                {b.descripcion}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proceso;
