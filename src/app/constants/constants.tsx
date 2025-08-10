export const company = {
  dark: true,
  darkmode: true,
  shortAdress: true,
  favicon: false,
  price: true,
  objectCover: '50%',
  id: 'merakautos',
  name: 'Merak Autos',
  adress: 'Av. de los incas 4345',
  city: 'Villa Urquiza',
  email: 'merakautos@hotmail.com',
  instagram: 'merakautos',
  facebook: 'https://www.facebook.com/MERAKAUTOS/',
  whatsapp: ['1165124137'],
  googlemapsLink: 'https://maps.app.goo.gl/1ZgPVSC5zJjiSbEV6',
  googlemaps:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.941892138972!2d-58.47270956410536!3d-34.58033683229093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb7a1f7d29677%3A0x9c8a3970f96216b5!2sMerak%20autos!5e0!3m2!1sen!2sar!4v1754540375732!5m2!1sen!2sar',
  openDays: [
    { day: 'Lunes', hours: ['10:00 a 19:00hs'] },
    { day: 'Martes', hours: ['10:00 a 19:00hs'] },
    { day: 'Miércoles', hours: ['10:00 a 19:00hs'] },
    { day: 'Jueves', hours: ['10:00 a 19:00hs'] },
    { day: 'Viernes', hours: ['10:00 a 19:00hs'] },
    { day: 'Sábado', hours: ['10:00 a 15:00hs'] },
    // { day: 'Domingo', hours: ['09:00 a 13:00hs'] },
  ],
  footer:
    'Compra y Venta de Autos: Vehículos seleccionados, atención personalizada.',
};

export const API_BASE_URL = 'https://dealership.agenciagrvity.com';
export const TENANT = 'accotto-automotores';

export const metadataCompany = {
  metadataBase: 'https://merakautos.vercel.app/',
  title: 'Merak Autos - Compra y Venta de Autos',
  description:
    'Compra y Venta de Autos: Vehículos seleccionados, atención personalizada.',
};

// Cambie el archivo data.json, necesito que actualices la informacion de catalogo.json. Las images tomalas de images de data.json, la descripcion tomala de caption de data.json, pero necesito que el texto este parseado, que no este todo junto sin espacios y saltos de linea. En name pone la marca y el modelo del vehiculo en title case, marca, marcaId todo esto acorde a la informacion de caption. Si en caption no se dice kilometraje o precio pone 999999, categoria estimala para el vehiculo (categorias tipicas de vehiculos en argentina. como utilitario, deportivo, suv, hatchback, etc). Transmision, motor, combustible y puertas estimalas acorde al vehiculo. La cantidad de vehiculos tiene que ser la de data.json, si en catalogo.json hay otros vehiculos removelos, los vehiclos de catalogo json tienen que ser los mismos que en data.json. No hagas un script, simplemente actualizalo con ia.

export const preguntas = [
  {
    id: 'preg-1',
    question: '¿Qué métodos de pago aceptan?',
    answer:
      'Aceptamos transferencia bancaria, efectivo y USD. Para tu tranquilidad, podés venir con tu mecánico de confianza a ver el auto, escanearlo y salir a probarlo. En el mismo momento que abonás, retirás el vehículo y nuestra gestoría se encarga de tomar la firma en el 08 para realizar todos los trámites.',
  },
  {
    id: 'preg-2',
    question: '¿Toman vehículos en parte de pago?',
    answer:
      'Sí, tomamos vehículos en parte de pago y es nuestra prioridad que quieras dejarlo en nuestras manos. Podés enviarnos fotos, detalles y kilómetros, y nuestro equipo de ventas se encarga de cotizarlo en el momento. Te damos la posibilidad de encargarnos y gestionar toda la documentación necesaria sin honorarios, solo abonando los aranceles correspondientes. En ningún momento te quedás sin vehículo, llave contra llave.',
  },
  {
    id: 'preg-3',
    question: '¿Ofrecen financiación?',
    answer:
      'Trabajamos con financieras directas con las mejores tasas, cuotas fijas y en pesos. Financiamos hasta el 40% de la unidad. Podés pedir vía WhatsApp la cotización del crédito a tu medida. Hacemos revisión de veraz en el acto. Señas el vehículo, la financiera se contacta con vos en 24hs, se arma el crédito y en 72hs estás firmando toda la documentación y retirando el vehículo.',
  },
  {
    id: 'preg-4',
    question: '¿Qué incluye la entrega del vehículo?',
    answer:
      'Todos nuestros vehículos se entregan con permiso de circulación o cédula vigente para tu tranquilidad. Es primordial para nosotros que el auto se vaya transferido en el menor tiempo posible. Gracias a que contamos con gestoría propia y mandatarios matriculados cubriendo todas las zonas, podemos llevar a cabo la transferencia de manera eficiente.',
  },
  {
    id: 'preg-5',
    question: '¿Ofrecen servicios de seguro?',
    answer:
      'Podemos cotizarte el seguro con nuestra productora sin ningún compromiso, brindándote el precio más bajo del mercado de las compañías más prestigiosas. Si te interesa nuestro presupuesto, nos encargamos de gestionar todo para que no tengas que preocuparte y salgas cubierto del concesionario. No tiene honorarios ni adicionales, buscamos brindarte todos los servicios en un mismo lugar.',
  },
];

export const navigation = [
  {
    id: '0',
    title: 'Inicio',
    url: '/',
  },
  {
    id: '1',
    title: 'Catálogo',
    url: '/catalogo',
  },
  {
    id: '2',
    title: 'Nosotros',
    url: '/nosotros',
  },
  {
    id: '3',
    title: 'Contacto',
    url: '/contacto',
    button: true,
  },
];
