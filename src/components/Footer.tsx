'use client';

import { navigation } from '@/app/constants/constants';
import { company } from '@/app/constants/constants';

import Image from 'next/image';
import InstagramIcon from './icons/InstagramIcon';
import FacebookIcon from './icons/FacebookIcon';
import LocationIcon from './icons/LocationIcon';

import Link from 'next/link';
import GravityLogo from './icons/GravityLogo';
import EmailFillIcon from './icons/EmailFillIcon';
import WhatsappFillIcon from './icons/WhatsappFillIcon';

const Footer = () => {
  return (
    <footer className='relative bg-neutral-950 overflow-hidden'>
      <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Sección principal */}
        <div className='pt-8 pb-12 md:pt-12 md:pb-16'>
          {/* Header del footer */}
          <div className='flex flex-col items-start md:items-center justify-center md:text-center mb-8 md:mb-12'>
            <div className='inline-block mb-6'>
              {company.favicon ? (
                <div className='w-48 sm:w-52 md:w-52 lg:w-56 h-12 sm:h-14'>
                  <Image
                    className='w-full h-full object-contain object-left md:object-center'
                    src='/assets/company/logo.webp'
                    alt={`${company.name} logo`}
                    width={256}
                    height={64}
                  />
                </div>
              ) : (
                <div className='w-52 sm:w-52 md:w-56 lg:w-64 h-14 md:h-16'>
                  <Image
                    className='w-full h-full object-contain object-left md:object-center'
                    src='/assets/company/logo.webp'
                    alt={`${company.name} logo`}
                    width={240}
                    height={56}
                  />
                </div>
              )}
            </div>

            <p className='text-color-text-light text-lg max-w-lg leading-relaxed'>
              {company.footer}
            </p>
          </div>

          {/* Grid principal */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 lg:gap-16 mb-8 md:mb-12'>
            {/* Navegación */}
            <div className='lg:col-span-1'>
              <h3 className='text-color-title-light text-xl font-bold mb-6 relative'>
                Navegación
                <div className='absolute -bottom-2 left-0 w-12 h-0.5 bg-color-primary rounded-full'></div>
              </h3>
              <ul className='space-y-4'>
                {navigation.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={`${link.url}`}
                      className='text-color-text-light hover:text-color-title-light transition-all duration-300 flex items-center group'
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacto */}
            <div className='lg:col-span-1'>
              <h3 className='text-color-title-light text-xl font-bold mb-6 relative'>
                Contacto
                <div className='absolute -bottom-2 left-0 w-12 h-0.5 bg-color-primary rounded-full'></div>
              </h3>
              <div className='space-y-4'>
                {/* Dirección */}
                {(company.adress || company.city) && (
                  <a
                    href={`${company.googlemapsLink}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-3 group'
                  >
                    <div className='w-10 h-10 rounded-lg bg-neutral-700 flex items-center justify-center flex-shrink-0 group-hover:bg-neutral-600 transition-colors'>
                      <LocationIcon className='w-5 h-5 text-color-title-light' />
                    </div>
                    <span className='text-color-text-light group-hover:text-color-title-light transition-colors text-sm leading-relaxed'>
                      {company.adress && `${company.adress}, `}
                      {company.city && `${company.city}`}
                    </span>
                  </a>
                )}

                {/* WhatsApp */}
                {company.whatsapp &&
                  company.whatsapp.map((whatsappNumber, idx) => (
                    <a
                      key={idx}
                      href={`https://api.whatsapp.com/send?phone=549${whatsappNumber}&text=Hola! Quería hacer una consulta`}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-3 group'
                    >
                      <div className='w-10 h-10 rounded-lg bg-neutral-700 flex items-center justify-center flex-shrink-0 group-hover:bg-neutral-600 transition-colors'>
                        <WhatsappFillIcon className='w-5 h-5 text-color-title-light' />
                      </div>
                      <span className='text-color-text-light group-hover:text-color-title-light transition-colors text-sm'>
                        {whatsappNumber}
                      </span>
                    </a>
                  ))}

                {/* Email */}
                {company.email && (
                  <a
                    href={`mailto:${company.email}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-3 group'
                  >
                    <div className='w-10 h-10 rounded-lg bg-neutral-700 flex items-center justify-center flex-shrink-0 group-hover:bg-neutral-600 transition-colors'>
                      <EmailFillIcon className='w-5 h-5 text-color-title-light' />
                    </div>
                    <span className='text-color-text-light group-hover:text-color-title-light transition-colors text-sm'>
                      {company.email}
                    </span>
                  </a>
                )}
              </div>
            </div>

            {/* Redes sociales */}
            <div className='lg:col-span-1'>
              <h3 className='text-color-title-light text-xl font-bold mb-6 relative'>
                Síguenos
                <div className='absolute -bottom-2 left-0 w-12 h-0.5 bg-color-primary rounded-full'></div>
              </h3>
              <div className='space-y-4'>
                {company.instagram && (
                  <a
                    href={`https://www.instagram.com/${company.instagram}/`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-3 group'
                  >
                    <div className='w-10 h-10 rounded-lg bg-neutral-700 group-hover:bg-neutral-600 transition-colors flex items-center justify-center'>
                      <InstagramIcon className='w-5 h-5 text-color-title-light' />
                    </div>
                    <span className='text-color-text-light group-hover:text-color-title-light transition-colors text-sm'>
                      @{company.instagram}
                    </span>
                  </a>
                )}
                {company.facebook && (
                  <a
                    href={`${company.facebook}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-3 group'
                  >
                    <div className='w-10 h-10 rounded-lg bg-neutral-700 flex items-center justify-center group-hover:bg-neutral-600 transition-colors'>
                      <FacebookIcon className='w-5 h-5 text-color-title-light' />
                    </div>
                    <span className='text-color-text-light group-hover:text-color-title-light transition-colors text-sm'>
                      Facebook
                    </span>
                  </a>
                )}
              </div>
            </div>

            {/* Horarios o información adicional */}
            <div className='lg:col-span-1'>
              <h3 className='text-color-title-light text-xl font-bold mb-6 relative'>
                Horarios
                <div className='absolute -bottom-2 left-0 w-12 h-0.5 bg-color-primary rounded-full'></div>
              </h3>
              <div className='space-y-3'>
                {company.openDays.map((day) => (
                  <div className='text-color-text-light text-sm'>
                    <p className='font-semibold text-color-title-light'>
                      {day.title}
                    </p>
                    <p>{day.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Línea separadora decorativa */}
          <div className='relative'>
            <div className='h-0.5 bg-gradient-to-r from-transparent via-color-primary to-transparent'></div>
          </div>
        </div>

        {/* Sección inferior */}
        <div className='pb-8 md:pb-12'>
          <div className='flex flex-col lg:flex-row justify-between items-center gap-6'>
            <div className='text-color-text-light text-sm text-center lg:text-left'>
              © Copyright {new Date().getFullYear()} - {company.name}. Todos los
              derechos reservados.
            </div>

            <div className='flex items-center gap-1.5'>
              <span className='text-color-text-light text-sm'>
                Desarrollado por:
              </span>
              <a
                href='https://www.agenciagravity.com/'
                target='_blank'
                rel='noopener noreferrer'
                className=''
              >
                <GravityLogo className='w-20 text-color-title-light hover:text-[#D1FA2D] transition-colors' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
