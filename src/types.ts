export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface Client {
  name: string;
}

export const SERVICES: Service[] = [
  {
    id: 'civil',
    title: 'Civil Works & Facilities Management',
    description: 'Complete end-to-end solutions for construction, paving, and building maintenance.',
    icon: 'Building2',
    image: 'https://picsum.photos/seed/construction/800/600'
  },
  {
    id: 'hospitality',
    title: 'Hospitality & Staffing Services',
    description: 'Premier hospitality service management, acquisition, and professional staffing solutions.',
    icon: 'Hotel',
    image: 'https://picsum.photos/seed/hospitality/800/600'
  },
  {
    id: 'interior',
    title: 'Interior Works',
    description: 'Bespoke interior design, office furniture, partitions, and high-quality carpentry.',
    icon: 'Layout',
    image: 'https://picsum.photos/seed/interior/800/600'
  },
  {
    id: 'shelving',
    title: 'Metal Shelving Solutions',
    description: 'Technical specifications for light, medium, and heavy-duty industrial shelving.',
    icon: 'Layers',
    image: 'https://picsum.photos/seed/warehouse/800/600'
  },
  {
    id: 'security',
    title: 'Security & Surveillance',
    description: 'Professional security guards, CCTV systems, and advanced surveillance technology.',
    icon: 'ShieldCheck',
    image: 'https://picsum.photos/seed/security/800/600'
  },
  {
    id: 'waterproofing',
    title: 'Water Proofing Solutions',
    description: 'Specialized water proofing and general maintenance services for all structures.',
    icon: 'Droplets',
    image: 'https://picsum.photos/seed/water/800/600'
  }
];

export const CLIENTS: Client[] = [
  { name: 'Ezdan Hotels' },
  { name: 'G4s' },
  { name: 'HBK' },
  { name: 'Qatar Flour Mills' },
  { name: 'Compass International School' },
  { name: 'Elan Qatar' },
  { name: 'Grand Mart Group' },
  { name: 'Almjal Trading' },
  { name: 'NASS Group' },
  { name: 'Smile Hyper Market' },
  { name: 'Philippine Embassy' },
  { name: 'Spacemaker' },
  { name: 'W Hotel' },
  { name: 'Hub Business Centre' },
  { name: 'ETA' },
  { name: 'Amana Qatar' }
];
