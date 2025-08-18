'use client';

import Image from 'next/image';
import { company } from '@/app/constants/constants';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const NosotrosPage = () => {
  return (
    <>
      <Header />

      {/* Hero Section con imagen de fondo */}
      <section className='relative h-48 md:h-60 lg:h-72 flex items-center justify-center overflow-hidden'>
        {/* Imagen de fondo con overlay */}
        <div className='absolute inset-0 z-0'>
          <Image
            src='/assets/nosotros/nosotros-1.webp'
            alt={`Equipo de ${company.name}`}
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/80'></div>
        </div>

        {/* Contenido centrado */}
        <div className='relative z-10 text-center px-4 max-w-4xl mx-auto'>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-2xl md:text-3xl lg:text-4xl font-semibold text-color-primary-light mb-3 md:mb-4 lg:mb-6'
          >
            Nosotros
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-xl md:text-2xl text-white/90 font-medium leading-relaxed'
          >
            Más de una década transformando sueños en realidad sobre ruedas
          </motion.p>
        </div>
      </section>

      {/* Sección de historia */}
      <section className='py-10 md:py-16'>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
            {/* Texto */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className='text-3xl md:text-4xl font-bold text-color-title-light mb-6'>
                Nuestra Historia
              </h2>
              <div className='space-y-4 text-color-text-light text-lg leading-relaxed'>
                <p>
                  {company.name} nació de la pasión por los autos y el
                  compromiso con nuestros clientes.
                </p>
                <p>
                  Desde nuestros inicios, nos hemos dedicado a seleccionar
                  cuidadosamente cada vehículo, garantizando que cumpla con los
                  más altos estándares de calidad y seguridad.
                </p>
                <p>
                  Hoy, somos referentes en el mercado de autos usados,
                  reconocidos por nuestra transparencia, profesionalismo y el
                  acompañamiento integral que brindamos a cada cliente.
                </p>
              </div>
            </motion.div>

            {/* Estadísticas */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='grid grid-cols-1 gap-6'
            >
              <div className='bg-color-bg-primary rounded-2xl p-6 text-center border border-color-border'>
                <div className='text-3xl md:text-4xl font-bold text-color-primary mb-2'>
                  10+
                </div>
                <div className='text-color-text-light font-medium'>
                  Años de Experiencia
                </div>
              </div>
              <div className='bg-color-bg-primary rounded-2xl p-6 text-center border border-color-border'>
                <div className='text-3xl md:text-4xl font-bold text-color-primary mb-2'>
                  40+
                </div>
                <div className='text-color-text-light font-medium'>
                  Vehículos en Stock
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sección de valores */}
      <section className='py-10 md:py-16'>
        <div className='max-w-6xl mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-3xl md:text-4xl font-bold text-color-title-light mb-4'>
              Nuestros Valores
            </h2>
            <p className='text-color-text-light text-lg max-w-2xl mx-auto'>
              Los pilares que guían cada decisión y acción en {company.name}
            </p>
          </motion.div>

          <div className='grid md:grid-cols-3 gap-8'>
            {/* Valor 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className='group relative'
            >
              <div className='bg-gradient-to-br from-color-primary/0 to-color-primary/5 rounded-3xl p-8 h-full border border-color-primary/20'>
                <div className='w-16 h-16 bg-color-primary/20 rounded-2xl flex items-center justify-center mb-6'>
                  <svg
                    className='w-8 h-8 text-color-primary'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
                  </svg>
                </div>
                <h3 className='text-xl font-bold text-color-title-light mb-4'>
                  Excelencia
                </h3>
                <p className='text-color-text-light leading-relaxed'>
                  Buscamos la perfección en cada detalle, desde la selección de
                  vehículos hasta el servicio postventa, garantizando la mejor
                  experiencia posible.
                </p>
              </div>
            </motion.div>

            {/* Valor 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className='group relative'
            >
              <div className='bg-gradient-to-br from-color-primary/0 to-color-primary/5 rounded-3xl p-8 h-full border border-color-primary/20'>
                <div className='w-16 h-16 bg-color-primary/20 rounded-2xl flex items-center justify-center mb-6'>
                  <svg
                    className='w-8 h-8 text-color-primary'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                    />
                  </svg>
                </div>
                <h3 className='text-xl font-bold text-color-title-light mb-4'>
                  Confianza
                </h3>
                <p className='text-color-text-light leading-relaxed'>
                  Construimos relaciones duraderas basadas en la transparencia,
                  honestidad y el cumplimiento de cada promesa que hacemos a
                  nuestros clientes.
                </p>
              </div>
            </motion.div>

            {/* Valor 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className='group relative'
            >
              <div className='bg-gradient-to-br from-color-primary/0 to-color-primary/5 rounded-3xl p-8 h-full border border-color-primary/20'>
                <div className='w-16 h-16 bg-color-primary/20 rounded-2xl flex items-center justify-center mb-6'>
                  <svg
                    className='w-8 h-8 text-color-primary'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M13 10V3L4 14h7v7l9-11h-7z'
                    />
                  </svg>
                </div>
                <h3 className='text-xl font-bold text-color-title-light mb-4'>
                  Innovación
                </h3>
                <p className='text-color-text-light leading-relaxed'>
                  Nos mantenemos a la vanguardia de las tendencias del mercado,
                  implementando nuevas tecnologías y procesos para mejorar
                  continuamente.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default NosotrosPage;
