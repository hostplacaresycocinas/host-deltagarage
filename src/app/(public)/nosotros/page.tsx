'use client';

import Image from 'next/image';
import { company } from '@/app/constants/constants';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import CarStrokeIcon from '@/components/icons/CarStrokeIcon';

const NosotrosPage = () => {
  return (
    <>
      <Header />

      {/* Hero Section con imagen de fondo */}
      <section className='relative h-48 md:h-60 lg:h-72 flex items-center justify-center overflow-hidden'>
        {/* Imagen de fondo con overlay */}
        <div className='absolute inset-0 z-0'>
          <Image
            src='/assets/nosotros/nosotros-banner.webp'
            alt={`Equipo de ${company.name}`}
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-black/80'></div>
        </div>

        {/* Contenido centrado */}
        <div className='relative z-10 text-center px-4 max-w-4xl mx-auto'>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`${
              company.secondaryColor
                ? 'text-color-secondary-light'
                : 'text-color-primary-light'
            } text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 md:mb-4 lg:mb-6`}
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
      <section className='py-16 md:py-20'>
        <div className='max-w-6xl mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-3xl md:text-4xl font-bold text-color-primary-light mb-4'>
              Nuestra Historia
            </h2>
            <p className='text-color-text-light text-lg max-w-3xl mx-auto'>
              Una empresa familiar que nació de la pasión por los autos y el
              compromiso inquebrantable con la excelencia
            </p>
          </motion.div>

          <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
            {/* Texto */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className='space-y-6 text-color-text-light text-lg leading-relaxed'>
                <p>
                  {company.name} nació de la pasión por los automóviles y el
                  compromiso inquebrantable con la excelencia en el servicio.
                  Desde nuestros inicios, nos hemos dedicado a seleccionar
                  cuidadosamente cada vehículo, garantizando que cumpla con los
                  más altos estándares de calidad y seguridad.
                </p>
                <p>
                  Hoy, seguimos siendo fieles a esos principios fundamentales.
                  Cada auto que seleccionamos, cada cliente que atendemos y cada
                  detalle que cuidamos refleja nuestro compromiso con brindar la
                  mejor experiencia posible en la compra de vehículos usados.
                </p>
              </div>
            </motion.div>

            {/* Imagen */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='relative'
            >
              <div className='relative h-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl'>
                <Image
                  src='/assets/nosotros/nosotros-1.webp'
                  alt='Nuestro equipo trabajando'
                  fill
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent'></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nueva sección: Nuestro Compromiso */}
      <section className='mt-8 mb-16 md:mt-12 md:mb-24'>
        <div className='max-w-5xl mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-3xl md:text-4xl font-bold text-color-primary-light mb-4'>
              Nuestro Compromiso
            </h2>
            <p className='text-color-text-light text-lg max-w-3xl mx-auto'>
              Más que vender autos, construimos relaciones y cumplimos sueños
            </p>
          </motion.div>

          <div className='grid md:grid-cols-2 gap-8'>
            {/* Compromiso 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className='text-center'
            >
              <div className='w-20 h-20 bg-color-primary/20 rounded-full flex items-center justify-center mx-auto mb-4'>
                <svg
                  className='w-10 h-10 text-color-primary'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>
              <h3 className='text-lg font-semibold text-color-title-light mb-2'>
                Calidad Garantizada
              </h3>
              <p className='text-color-text-light text-sm'>
                Cada vehículo pasa por rigurosas inspecciones
              </p>
            </motion.div>

            {/* Compromiso 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className='text-center'
            >
              <div className='w-20 h-20 bg-color-primary/20 rounded-full flex items-center justify-center mx-auto mb-4'>
                <svg
                  className='w-10 h-10 text-color-primary'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>
              <h3 className='text-lg font-semibold text-color-title-light mb-2'>
                Respuesta Rápida
              </h3>
              <p className='text-color-text-light text-sm'>
                Te respondemos en el menor tiempo posible
              </p>
            </motion.div>

            {/* Compromiso 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className='text-center'
            >
              <div className='w-20 h-20 bg-color-primary/20 rounded-full flex items-center justify-center mx-auto mb-4'>
                <svg
                  className='w-10 h-10 text-color-primary'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z'
                  />
                </svg>
              </div>
              <h3 className='text-lg font-semibold text-color-title-light mb-2'>
                Financiación Flexible
              </h3>
              <p className='text-color-text-light text-sm'>
                Opciones de pago adaptadas a tus necesidades
              </p>
            </motion.div>

            {/* Compromiso 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className='text-center'
            >
              <div className='w-20 h-20 bg-color-primary/20 rounded-full flex items-center justify-center mx-auto mb-4'>
                <CarStrokeIcon className='w-[52px] h-[52px] text-color-primary stroke-2' />
              </div>
              <h3 className='text-lg font-semibold text-color-title-light mb-2'>
                Amplio Stock
              </h3>
              <p className='text-color-text-light text-sm'>
                Gran variedad de vehículos para elegir
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default NosotrosPage;
