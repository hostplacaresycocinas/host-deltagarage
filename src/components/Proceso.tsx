'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { company } from '@/app/constants/constants';

const beneficios = [
  {
    titulo: 'Experiencia',
    descripcion:
      'Más de 25 años de experiencia en el mercado automotriz nos respaldan para brindarte el mejor servicio y asesoría especializada.',
    icono: (
      <div className='w-full h-full flex items-center justify-center bg-color-primary text-black rounded-full font-extrabold text-3xl'>
        +25
      </div>
    ),
  },
  {
    titulo: 'Seguridad y tranquilidad',
    descripcion:
      'Nuestro salón de exposición de 800m² y contratos personalizados garantizan seguridad y tranquilidad en tus operaciones. Todas nuestras unidades se entregan transferidas.',
    icono: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='w-full h-full'
        fill='currentColor'
        viewBox='0 0 24 24'
      >
        <path d='M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z' />
      </svg>
    ),
  },
  {
    titulo: 'Sin preocupaciones',
    descripcion:
      'Confia en nosotros para vender tu auto sin costos adicionales, nuestro equipo se ocupa de todo para que no tengas que preocuparte de nada.',
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
];

const Proceso = () => {
  return (
    <section
      className={`flex flex-col items-center justify-center py-10 md:py-16 `}
    >
      <div className='max-w-7xl w-full flex flex-col px-4 md:px-8'>
        {/* Título y subtítulo */}
        <div className='text-center mb-8 md:mb-12'>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            className='text-3xl md:text-4xl lg:text-5xl text-white mb-4 tracking-wide font-anton uppercase'
          >
            ¿Por qué
            <span className='text-color-primary-light'> elegirnos</span> ?
          </motion.h2>
          <div className='w-16 h-1 bg-color-primary mx-auto mb-6'></div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            className='text-white/70 max-w-2xl mx-auto text-lg lg:text-xl leading-relaxed'
          >
            La mejor experiencia en la compra y venta de vehículos
          </motion.p>
        </div>
        {/* Título */}
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
