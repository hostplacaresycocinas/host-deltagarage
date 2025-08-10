'use client';

import { navigation } from '@/app/constants/constants';
import { company } from '@/app/constants/constants';

import Image from 'next/image';
import InstagramIcon from './icons/InstagramIcon';
import FacebookIcon from './icons/FacebookIcon';
import WhatsappIcon from './icons/WhatsappIcon';
import LocationIcon from './icons/LocationIcon';
import ClockIcon from './icons/ClockIcon';

import Link from 'next/link';
import GravityLogo from './icons/GravityLogo';

const Footer = () => {
  return (
    <footer
      className={`relative ${company.darkmode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      {/* Fondo con patrón sutil */}
      <div className='absolute inset-0 opacity-100 bg-[#020B26]'></div>

      <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Sección principal */}
        <div className='py-16 md:py-20'>
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-12'>
            {/* Columna 1 - Logo y descripción */}
            <div className='lg:col-span-2'>
              <div className='mb-6'>
                {company.favicon ? (
                  <div className='w-48 sm:w-52 md:w-56 h-12 sm:h-14'>
                    <Image
                      className='w-full h-full object-contain object-left'
                      src='/assets/company/logo.webp'
                      alt={`${company.name} logo`}
                      width={288}
                      height={72}
                    />
                  </div>
                ) : (
                  <div className='w-52 sm:w-52 lg:w-56 xl:w-56 h-14 md:h-16'>
                    <Image
                      className='w-full h-full object-contain object-left'
                      src='/assets/company/logo.webp'
                      alt={`${company.name} logo`}
                      width={288}
                      height={72}
                    />
                  </div>
                )}
              </div>

              <p
                className={`${
                  company.darkmode ? 'text-gray-300' : 'text-gray-600'
                } text-base leading-relaxed mb-8 max-w-md`}
              >
                {company.footer}
              </p>

              {/* Redes sociales */}
              <div className='flex gap-4'>
                {company.instagram && (
                  <a
                    href={`https://www.instagram.com/${company.instagram}/`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      company.darkmode
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                        : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    } shadow-lg hover:shadow-xl hover:scale-110`}
                  >
                    <InstagramIcon className='w-5 h-5' />
                  </a>
                )}
                {company.facebook && (
                  <a
                    href={`${company.facebook}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      company.darkmode
                        ? 'bg-blue-600 text-white'
                        : 'bg-blue-600 text-white'
                    } shadow-lg hover:shadow-xl hover:scale-110`}
                  >
                    <FacebookIcon className='w-5 h-5' />
                  </a>
                )}
                {company.whatsapp && (
                  <a
                    href={`https://api.whatsapp.com/send?phone=549${company.whatsapp[0]}&text=Hola! Quería hacer una consulta`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      company.darkmode
                        ? 'bg-green-500 text-white'
                        : 'bg-green-500 text-white'
                    } shadow-lg hover:shadow-xl hover:scale-110`}
                  >
                    <WhatsappIcon className='w-5 h-5' />
                  </a>
                )}
              </div>
            </div>

            {/* Columna 2 - Navegación */}
            <div>
              <h3
                className={`text-lg font-semibold mb-6 ${
                  company.darkmode ? 'text-white' : 'text-gray-900'
                }`}
              >
                Navegación
              </h3>
              <ul className='space-y-3'>
                {navigation.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={`${link.url}`}
                      className={`${
                        company.darkmode
                          ? 'text-gray-300 hover:text-white'
                          : 'text-gray-600 hover:text-gray-900'
                      } transition-all duration-300 hover:pl-2 inline-block`}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Columna 3 - Contacto */}
            <div>
              <h3
                className={`text-lg font-semibold mb-6 ${
                  company.darkmode ? 'text-white' : 'text-gray-900'
                }`}
              >
                Contacto
              </h3>
              <div className='space-y-4'>
                {/* Dirección */}
                {(company.adress || company.city) && (
                  <div className='flex items-center gap-3'>
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        company.darkmode ? 'bg-gray-800' : 'bg-gray-100'
                      }`}
                    >
                      <LocationIcon
                        className={`w-5 h-5 ${
                          company.darkmode ? 'text-gray-300' : 'text-gray-600'
                        }`}
                      />
                    </div>
                    <div>
                      <a
                        href={`${company.googlemapsLink}`}
                        target='_blank'
                        rel='noopener noreferrer'
                        className={`${
                          company.darkmode
                            ? 'text-gray-300 hover:text-white'
                            : 'text-gray-600 hover:text-gray-900'
                        } text-base transition-all duration-300 hover:pl-2 inline-block`}
                      >
                        {company.adress && `${company.adress}, `}
                        {company.city && `${company.city}`}
                      </a>
                    </div>
                  </div>
                )}

                {/* WhatsApp */}
                {company.whatsapp &&
                  company.whatsapp.map((whatsappNumber, idx) => (
                    <div key={idx} className='flex items-center gap-3'>
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                          company.darkmode ? 'bg-gray-800' : 'bg-gray-100'
                        }`}
                      >
                        <WhatsappIcon
                          className={`w-5 h-5 ${
                            company.darkmode ? 'text-gray-300' : 'text-gray-600'
                          }`}
                        />
                      </div>
                      <a
                        href={`https://api.whatsapp.com/send?phone=549${whatsappNumber}&text=Hola! Quería hacer una consulta`}
                        target='_blank'
                        rel='noopener noreferrer'
                        className={`${
                          company.darkmode
                            ? 'text-gray-300 hover:text-white'
                            : 'text-gray-600 hover:text-gray-900'
                        } text-base transition-all duration-300 hover:pl-2 inline-block`}
                      >
                        {whatsappNumber}
                      </a>
                    </div>
                  ))}

                {/* Instagram */}
                {company.instagram && (
                  <div className='flex items-center gap-3'>
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        company.darkmode ? 'bg-gray-800' : 'bg-gray-100'
                      }`}
                    >
                      <InstagramIcon
                        className={`w-5 h-5 ${
                          company.darkmode ? 'text-gray-300' : 'text-gray-600'
                        }`}
                      />
                    </div>
                    <a
                      href={`https://www.instagram.com/${company.instagram}/`}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={`${
                        company.darkmode
                          ? 'text-gray-300 hover:text-white'
                          : 'text-gray-600 hover:text-gray-900'
                      } text-base transition-all duration-300 hover:pl-2 inline-block`}
                    >
                      @{company.instagram}
                    </a>
                  </div>
                )}

                {/* Email */}
                {company.email && (
                  <div className='flex items-center gap-3'>
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        company.darkmode ? 'bg-gray-800' : 'bg-gray-100'
                      }`}
                    >
                      <svg
                        className={`w-5 h-5 ${
                          company.darkmode ? 'text-gray-300' : 'text-gray-600'
                        }`}
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                        />
                      </svg>
                    </div>
                    <a
                      href={`mailto:${company.email}`}
                      className={`${
                        company.darkmode
                          ? 'text-gray-300 hover:text-white'
                          : 'text-gray-600 hover:text-gray-900'
                      } text-base transition-all duration-300 hover:pl-2 inline-block`}
                    >
                      {company.email}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Línea separadora */}
        <div
          className={`border-t ${
            company.darkmode ? 'border-gray-800' : 'border-gray-200'
          }`}
        ></div>

        {/* Sección inferior */}
        <div className='pt-6 pb-10'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <div
              className={`${
                company.darkmode
                  ? 'text-color-text-light'
                  : 'text-color-text-light'
              } text-base text-center md:text-left`}
            >
              © Copyright {new Date().getFullYear()} - {company.name}
            </div>

            <div className='flex items-center gap-3'>
              <span
                className={`text-base ${
                  company.darkmode
                    ? 'text-color-text-light'
                    : 'text-color-text-light'
                }`}
              >
                Desarrollado por:
              </span>
              <a
                href='https://www.agenciagravity.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='transition-transform duration-300'
              >
                <GravityLogo
                  className={`w-20 md:w-24 ${
                    company.darkmode
                      ? 'text-white hover:text-[#D1FA2D]'
                      : 'text-black hover:text-black/70'
                  } transition-colors`}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
