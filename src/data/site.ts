// All site content lives here so the template can be rebranded from one file.

export const site = {
  name: 'Redox',
  tagline: 'Creative Agency & Portfolio',
  email: 'hello@redox.studio',
  phone: '+1 (555) 014-2290',
  address: '24 Mercer Street, New York, NY 10013',
  socials: [
    { label: 'Dribbble', href: '#' },
    { label: 'Behance', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'LinkedIn', href: '#' },
  ],
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  hue: number;
  summary: string;
  services: string[];
  body: string[];
};

export const projects: Project[] = [
  {
    slug: 'aurora-rebrand',
    title: 'Aurora Rebrand',
    client: 'Aurora Labs',
    category: 'Branding',
    year: '2026',
    hue: 12,
    summary: 'A complete identity overhaul for a climate-tech startup going global.',
    services: ['Brand Strategy', 'Visual Identity', 'Motion'],
    body: [
      'Aurora Labs had outgrown its scrappy launch identity. We ran a three-week strategy sprint with the founding team to define a sharper positioning: optimistic, scientific and unmistakably human.',
      'The resulting system pairs a kinetic wordmark with a gradient palette inspired by the northern lights, and a motion language that brings product dashboards to life.',
    ],
  },
  {
    slug: 'nomad-app',
    title: 'Nomad Travel App',
    client: 'Nomad Inc.',
    category: 'UI/UX Design',
    year: '2026',
    hue: 210,
    summary: 'A booking experience that makes planning a trip feel like the trip itself.',
    services: ['Product Design', 'Prototyping', 'Design System'],
    body: [
      'We redesigned Nomad’s booking flow from the ground up, cutting the steps to checkout from nine to four.',
      'A modular design system now powers iOS, Android and web, letting the in-house team ship features twice as fast.',
    ],
  },
  {
    slug: 'kinfolk-commerce',
    title: 'Kinfolk Commerce',
    client: 'Kinfolk Goods',
    category: 'Development',
    year: '2025',
    hue: 145,
    summary: 'A headless storefront built for speed, storytelling and scale.',
    services: ['Web Development', 'E-commerce', 'Performance'],
    body: [
      'Kinfolk needed a storefront that felt like a magazine but converted like a store. We built a headless stack with editorial layouts editors can compose themselves.',
      'Page loads dropped below one second and conversion rose 38% in the first quarter after launch.',
    ],
  },
  {
    slug: 'pulse-campaign',
    title: 'Pulse Campaign',
    client: 'Pulse Audio',
    category: 'Marketing',
    year: '2025',
    hue: 280,
    summary: 'A launch campaign for wireless headphones that turned sound into colour.',
    services: ['Campaign', 'Art Direction', '3D'],
    body: [
      'For the launch of Pulse One, we visualised sound as living colour fields across out-of-home, social and retail.',
      'The campaign reached 40M impressions and sold out the first production run in eleven days.',
    ],
  },
  {
    slug: 'monolith-architecture',
    title: 'Monolith Studio',
    client: 'Monolith Architects',
    category: 'Web Design',
    year: '2024',
    hue: 35,
    summary: 'A portfolio site as considered and quiet as the buildings it shows.',
    services: ['Web Design', 'Photography Direction', 'CMS'],
    body: [
      'Monolith’s work speaks softly, so the site does too: generous whitespace, slow transitions and full-bleed imagery.',
      'A custom CMS lets the partners publish new projects in minutes.',
    ],
  },
  {
    slug: 'verde-packaging',
    title: 'Verde Packaging',
    client: 'Verde Botanics',
    category: 'Branding',
    year: '2024',
    hue: 95,
    summary: 'Plastic-free packaging for a skincare line rooted in botany.',
    services: ['Packaging', 'Illustration', 'Print'],
    body: [
      'Every Verde product now ships in compostable packaging illustrated with the plant it comes from.',
      'The line won a Pentaward and is now stocked in 300 stores across Europe.',
    ],
  },
];

export const services = [
  {
    no: '01',
    title: 'Brand Identity',
    text: 'Strategy, naming, logo systems and guidelines that give your brand a voice people remember.',
    items: ['Brand Strategy', 'Logo Design', 'Visual Systems', 'Guidelines'],
  },
  {
    no: '02',
    title: 'UI/UX Design',
    text: 'Research-led product design for apps and platforms that feel effortless to use.',
    items: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
  },
  {
    no: '03',
    title: 'Web Development',
    text: 'Fast, accessible and beautifully animated websites built on modern stacks.',
    items: ['Front-end', 'Headless CMS', 'E-commerce', 'Performance'],
  },
  {
    no: '04',
    title: 'Digital Marketing',
    text: 'Campaigns and content that turn attention into growth across every channel.',
    items: ['Campaigns', 'Social Media', 'SEO', 'Content'],
  },
  {
    no: '05',
    title: 'Motion & 3D',
    text: 'Animation and 3D that add depth, delight and drama to your story.',
    items: ['Motion Design', '3D Visuals', 'Video', 'Micro-interactions'],
  },
];

export const stats = [
  { value: 12, suffix: '+', label: 'Years of experience' },
  { value: 350, suffix: '+', label: 'Projects delivered' },
  { value: 98, suffix: '%', label: 'Client satisfaction' },
  { value: 24, suffix: '', label: 'Industry awards' },
];

export const clients = ['Aurora', 'Nomad', 'Kinfolk', 'Pulse', 'Monolith', 'Verde', 'Northwind', 'Lumen'];

export const team = [
  { name: 'Maya Chen', role: 'Founder & Creative Director', hue: 12 },
  { name: 'Leo Martins', role: 'Head of Design', hue: 210 },
  { name: 'Ava Okafor', role: 'Lead Developer', hue: 145 },
  { name: 'Noah Fischer', role: 'Motion Designer', hue: 280 },
];

export const testimonials = [
  {
    quote: 'Redox didn’t just redesign our brand — they gave us a clearer sense of who we are. The launch exceeded every target we set.',
    name: 'Sara Lindqvist',
    role: 'CEO, Aurora Labs',
  },
  {
    quote: 'The most collaborative agency we have worked with. Sharp thinking, flawless execution and genuinely fun to work with.',
    name: 'James Porter',
    role: 'CPO, Nomad Inc.',
  },
  {
    quote: 'Our new site loads in under a second and our conversion rate jumped 38%. The numbers speak for themselves.',
    name: 'Priya Raman',
    role: 'Founder, Kinfolk Goods',
  },
];

export const process = [
  { no: '01', title: 'Discover', text: 'We dig into your business, audience and goals to find the real problem worth solving.' },
  { no: '02', title: 'Define', text: 'We shape strategy, scope and a creative direction everyone can rally behind.' },
  { no: '03', title: 'Design', text: 'We explore, prototype and refine until every detail earns its place.' },
  { no: '04', title: 'Deliver', text: 'We build, launch and keep iterating with you after go-live.' },
];

export type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  hue: number;
  excerpt: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: 'motion-that-means-something',
    title: 'Motion that means something: animating with intent',
    date: '2026-09-18',
    category: 'Design',
    readTime: '6 min read',
    hue: 12,
    excerpt: 'Animation should guide, not decorate. Here is how we decide what moves, when and why.',
    body: [
      'Every animation on a page costs attention. Before we animate anything we ask one question: what does this movement tell the user that a static layout cannot?',
      'Good motion explains relationships — where something came from, where it went, what changed. Reveal-on-scroll is useful when it paces a story; it is noise when it delays content people came for.',
      'Our rule of thumb: keep durations between 200 and 800ms, ease out on entry, and always respect prefers-reduced-motion.',
    ],
  },
  {
    slug: 'brand-systems-that-scale',
    title: 'Brand systems that scale beyond the logo',
    date: '2026-08-02',
    category: 'Branding',
    readTime: '8 min read',
    hue: 210,
    excerpt: 'A logo is a signature. A system is a language. Why the second matters more as you grow.',
    body: [
      'Most rebrands fail not at launch, but six months later when the tenth team needs a slide template the guidelines never imagined.',
      'We design systems as toolkits: a small set of primitives — type, colour, grid, motion — with clear rules for combining them.',
      'The goal is a brand that stays recognisable even when we are not in the room.',
    ],
  },
  {
    slug: 'fast-sites-convert',
    title: 'Fast sites convert: performance as a design decision',
    date: '2026-06-21',
    category: 'Development',
    readTime: '5 min read',
    hue: 145,
    excerpt: 'Speed is a feature your visitors feel before they read a single word.',
    body: [
      'A one-second delay can cut conversions by double digits. Performance is not an engineering afterthought — it starts in the design file.',
      'We budget for weight the way we budget for time: every font, image and script has to justify its kilobytes.',
      'Static-first frameworks like Astro make this easier by shipping zero JavaScript unless a component needs it.',
    ],
  },
];

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
