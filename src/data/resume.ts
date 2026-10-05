export interface Experience {
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  summary: string;
  bullets: string[];
  badges?: string[];
}

export interface Education {
  degree: string;
  field: string;
  school: string;
  start: string;
  end: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

/** Work history — newest first. Shown on /work */
export const experience: Experience[] = [
  {
    role: 'Licenciada en Comercion Exterior',
    company: 'Aktion Projects & Logistics',
    companyUrl: 'https://aktion.com.ec',
    location: 'Remote',
    start: 'Mar 2024',
    end: 'Present',
    current: true,
    summary: 'Dirijo la part de ventas de la compañia.',
    bullets: [
      '+1000 contenedores cotizados.',
      'Comercio Exterior. Numero de referencia: 0986547512',
      'Simplemente una gran empresa',
    ],
    badges: ['MSL', 'GLOBAL WORKSHIP', 'Intermodal'],
  },
  {
    role: 'Ing. Comercio Exterior',
    company: 'Aktion Projects & Logistics.',
    companyUrl: 'https://aktion.com.ec',
    location: 'Guayaquil, GYE',
    start: 'Mar 2012',
    end: 'Feb 2024',
    summary: 'Solo hazlo.',
    bullets: [
      'Dirigido por mi misma',
      'Creado por todos y para todos',
    ],
  },
];

/** Smaller/older roles — rendered as compact rows under the main timeline */
export const earlierRoles: { rol: string; compañia: string; empezo: string; termino: string }[] = [
  { role: 'Comañia de ingenieria', company: 'TOSFON', start: '2025', end: '2026' },
];

export const education: Education[] = [
  {
    grado: 'Bachillerato',
    especializacion: 'Informatica',
    Escuela: 'Jean Piaget',
    start: '2021',
    end: '2027',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Lenguajes',
    skills: ['SQL', 'Python', 'C++'],
  },
  {
    title: 'Plataformas y herramientas',
    skills: ['React', 'PostgreSQL', 'Docker', 'AWS'],
  },
  {
    title: 'Intereses',
    skills: ['Programacion', 'Soporte tecnico', 'Diseño Web'],
  },
];

/** Words typed out one character at a time in the hero */
export const typingRoles = [
  'software engineer',
  'occasional photographer',
  'weekend hiker',
  'coffee enthusiast',
];
