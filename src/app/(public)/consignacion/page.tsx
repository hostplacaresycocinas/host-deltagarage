'use client';

import { company } from '@/app/constants/constants';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { motion } from 'framer-motion';
import Image from 'next/image';
import WhatsappFillIcon from '@/components/icons/WhatsappFillIcon';

const ConsignacionPage = () => {
  const beneficios = [
    {
      titulo: 'Tasación Profesional',
      descripcion:
        'Evaluación precisa del valor de tu vehículo basada en el mercado actual.',
      icono: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-8 h-8'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      ),
    },
    {
      titulo: 'Gestión Completa',
      descripcion:
        'Nos encargamos de todas las consultas, negociaciones y visitas.',
      icono: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-8 h-8'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z'
          />
        </svg>
      ),
    },
    {
      titulo: 'Asesoramiento Legal',
      descripcion: 'Soporte completo en todos los trámites administrativos.',
      icono: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-8 h-8'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
          />
        </svg>
      ),
    },
    {
      titulo: 'Seguridad Total',
      descripcion:
        'Proceso seguro y transparente en cada etapa de la operación.',
      icono: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-8 h-8'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className='relative h-44 md:h-60 lg:h-72 flex items-center justify-center overflow-hidden'>
        {/* Imagen de fondo con overlay */}
        <div className='absolute inset-0 z-0'>
          <Image
            src='/assets/consignacion/consignacion-banner.webp'
            alt={`Consignación de vehículos - ${company.name}`}
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
            } text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4 lg:mb-6 font-anton uppercase tracking-wide`}
          >
            Consignación
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-xl md:text-2xl text-white/90 font-medium leading-relaxed'
          >
            Vendemos tu vehículo de forma segura y profesional
          </motion.p>
        </div>
      </section>

      {/* Descripción */}
      <section className='py-16 md:py-20'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-2xl md:text-3xl lg:text-4xl text-white mb-6 font-anton uppercase tracking-wide'>
              ¿Por qué{' '}
              <span className='text-color-primary-light'>consignar</span> con
              nosotros?
            </h2>
            <div className='w-20 h-1 bg-color-primary mx-auto mb-8'></div>
            <p className='text-color-text-light text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto'>
              En{' '}
              <span className='text-color-primary-light font-semibold'>
                {company.name}
              </span>{' '}
              ofrecemos un servicio integral de consignación para la venta de tu
              automóvil. Nos ocupamos de todo el proceso con transparencia y
              eficiencia.
            </p>
          </motion.div>

          {/* Beneficios Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8'>
            {beneficios.map((beneficio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='group'
              >
                <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full'>
                  <div className='w-16 h-16 bg-gradient-to-br from-color-primary/20 to-color-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4'>
                    <div className='text-color-primary'>{beneficio.icono}</div>
                  </div>
                  <h3 className='text-lg lg:text-xl font-semibold text-white mb-2 text-center'>
                    {beneficio.titulo}
                  </h3>
                  <p className='text-color-text-light text-center lg:text-lg leading-relaxed'>
                    {beneficio.descripcion}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className='pb-16 md:pb-20 relative'>
        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-color-primary/5 to-transparent'></div>

        <div className='max-w-4xl mx-auto px-4 sm:px-6 relative z-10'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='bg-gradient-to-br from-color-primary/10 to-color-primary/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-color-primary/20 text-center'
          >
            <div className='mb-6'>
              <div className='w-20 h-20 bg-gradient-to-br from-color-primary/30 to-color-primary/10 rounded-full flex items-center justify-center mx-auto mb-6'>
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
                    d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>
              <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4'>
                Maximizamos el valor de tu vehículo
              </h3>
              <p className='text-color-text-light text-lg max-w-2xl mx-auto leading-relaxed'>
                Nuestro equipo está listo para asesorarte y concretar la
                consignación de tu auto. Contactanos ahora y obtené la mejor
                oferta.
              </p>
            </div>

            <a
              href={`https://api.whatsapp.com/send?phone=549${company.whatsapp[0]}&text=Hola! Quiero consignar mi vehículo`}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-3 bg-color-primary hover:bg-color-primary-dark text-color-title py-4 px-10 rounded-xl font-semibold text-lg transition-colors shadow-lg'
            >
              <WhatsappFillIcon className='w-6 h-6' />
              Consignar mi vehículo
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ConsignacionPage;
