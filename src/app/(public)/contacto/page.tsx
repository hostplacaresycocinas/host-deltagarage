'use client';

import { company } from '@/app/constants/constants';
import ClockIcon from '@/components/icons/ClockIcon';
import LocationIcon from '@/components/icons/LocationIcon';
import InstagramIcon from '@/components/icons/InstagramIcon';
import WhatsappFillIcon from '@/components/icons/WhatsappFillIcon';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

const ContactoPage = () => {
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
          <div className='absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/50'></div>
        </div>

        {/* Contenido centrado */}
        <div className='relative z-10 text-center px-4 max-w-4xl mx-auto'>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-2xl md:text-3xl lg:text-4xl font-semibold text-color-primary-light mb-3 md:mb-4 lg:mb-6'
          >
            Contacto
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-xl md:text-2xl text-white/90 font-medium leading-relaxed'
          >
            Contactanos para cualquier consulta
          </motion.p>
        </div>
      </section>

      {/* Información de contacto principal */}
      <section>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start'>
            {/* Columna izquierda - Información de contacto */}
            <div className='space-y-6'>
              {/* Tarjetas de contacto */}
              <div className='space-y-6'>
                {/* WhatsApp */}
                <motion.a
                  href={`https://api.whatsapp.com/send?phone=549${company.whatsapp[0]}&text=Hola! Quería hacer una consulta sobre un vehículo`}
                  target='_blank'
                  rel='noopener noreferrer'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className='group flex items-center p-6 bg-color-bg-secondary rounded-2xl shadow-lg hover:shadow-xl transition-colors duration-300 border border-gray-700 hover:border-color-primary/30 hover:scale-[1.02]'
                >
                  <div className='flex-shrink-0 w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg'>
                    <WhatsappFillIcon className='w-7 h-7 text-white' />
                  </div>
                  <div className='ml-6 flex-1'>
                    <h3 className='text-lg font-semibold text-color-title-light group-hover:text-color-primary transition-colors'>
                      WhatsApp
                    </h3>
                    <p className='text-color-text-light text-base font-medium'>
                      {company.whatsapp[0]}
                    </p>
                    <p className='text-sm text-color-primary font-medium mt-1'>
                      Respuesta inmediata →
                    </p>
                  </div>
                </motion.a>

                {/* Instagram */}
                <motion.a
                  href={`https://www.instagram.com/${company.instagram}/`}
                  target='_blank'
                  rel='noopener noreferrer'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className='group flex items-center p-6 bg-color-bg-secondary rounded-2xl shadow-lg hover:shadow-xl transition-colors duration-300 border border-gray-700 hover:border-color-primary/30 hover:scale-[1.02]'
                >
                  <div className='flex-shrink-0 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg'>
                    <InstagramIcon className='w-7 h-7 text-white' />
                  </div>
                  <div className='ml-6 flex-1'>
                    <h3 className='text-lg font-semibold text-color-title-light group-hover:text-color-primary transition-colors'>
                      Instagram
                    </h3>
                    <p className='text-color-text-light text-base font-medium'>
                      @{company.instagram}
                    </p>
                    <p className='text-sm text-color-primary font-medium mt-1'>
                      Seguinos y enterate de las novedades →
                    </p>
                  </div>
                </motion.a>

                {/* Ubicación */}
                <motion.a
                  href={company.googlemapsLink || ''}
                  target='_blank'
                  rel='noopener noreferrer'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className='group flex items-center p-6 bg-color-bg-secondary rounded-2xl shadow-lg hover:shadow-xl transition-colors duration-300 border border-gray-700 hover:border-color-primary/30 hover:scale-[1.02]'
                >
                  <div className='flex-shrink-0 w-14 h-14 bg-color-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg'>
                    <LocationIcon
                      className={`${
                        company.dark ? 'text-white' : 'text-black'
                      } w-7 h-7`}
                    />
                  </div>
                  <div className='ml-6 flex-1'>
                    <h3 className='text-lg font-semibold text-color-title-light group-hover:text-color-primary transition-colors'>
                      Ubicación
                    </h3>
                    <p className='text-color-text-light text-base font-medium'>
                      {company.adress}, {company.city}
                    </p>
                    <p className='text-sm text-color-primary font-medium mt-1'>
                      Ver en Google Maps →
                    </p>
                  </div>
                </motion.a>
              </div>
            </div>

            {/* Columna derecha - Horarios y mapa */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, margin: '0px 100px -100px 0px' }}
              className='space-y-8 h-full'
            >
              {/* Horarios */}
              <div className='bg-gradient-to-br from-color-bg-secondary to-color-bg-secondary-dark rounded-3xl shadow-xl p-4 sm:p-6 lg:p-8 border border-gray-700 h-full'>
                <div className='text-center mb-6 sm:mb-8'>
                  <div className='inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-color-primary rounded-xl sm:rounded-2xl shadow-lg mb-3 sm:mb-4'>
                    <ClockIcon
                      className={`${
                        company.dark ? 'text-white' : 'text-black'
                      } w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8`}
                    />
                  </div>
                  <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold text-color-title-light mb-2'>
                    Horarios de Atención
                  </h3>
                  <p className='text-color-text-light text-xs sm:text-sm lg:text-base'>
                    Te esperamos para brindarte la mejor atención
                  </p>
                </div>

                <div className='space-y-2 sm:space-y-3'>
                  <div className='relative flex flex-col gap-2 sm:gap-3'>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                      className='flex items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-color-bg-secondary-dark/80 to-color-bg-secondary/80 rounded-xl sm:rounded-2xl border border-neutral-800'
                    >
                      <div className='flex items-center space-x-2 sm:space-x-4'>
                        <div className='w-2 h-2 sm:w-3 sm:h-3 bg-color-primary rounded-full shadow-sm'></div>
                        <span className='font-bold text-color-title-light text-sm sm:text-base lg:text-lg'>
                          Lunes a Viernes: 10:00 a 19:00hs
                        </span>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                      className='flex items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-color-bg-secondary-dark/80 to-color-bg-secondary/80 rounded-xl sm:rounded-2xl border border-neutral-800'
                    >
                      <div className='flex items-center space-x-2 sm:space-x-4'>
                        <div className='w-2 h-2 sm:w-3 sm:h-3 bg-color-primary rounded-full shadow-sm'></div>
                        <span className='font-bold text-color-title-light text-sm sm:text-base lg:text-lg'>
                          Sábados: 10:00 a 15:00hs
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className='bg-color-bg-secondary rounded-2xl shadow-lg overflow-hidden border border-gray-700 lg:col-span-2'>
              <div className='relative'>
                <iframe
                  className='w-full h-80 sm:h-96 md:h-[28rem] lg:h-[32rem]'
                  src={`${company.googlemaps}`}
                  width='100%'
                  height='400'
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                  style={{
                    minWidth: '450px',
                    border: 'none',
                  }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactoPage;
