export default defineAppConfig({
  global: {
    meetingLink: 'https://cal.com/hugorcd/15min',
    available: true,
  },
  profile: {
    name: 'Vincent Evers',
    job: 'Student HBO-ICT',
    email: 'contact@evers-it-solutions.nl',
    phone: '(+31) 6 38 48 29 08',
    picture: 'https://raw.githubusercontent.com/EarlyBirdREAL/Portfolio/3b8c7ad6215910b73890457d3ad9fc03bcc3ec12/src/assets/pfp.jpg',
  },
  socials: {
    github: 'https://github.com/EarlyBirdREAL',
    // twitter: 'https://twitter.com/HugoRCD__',
    linkedin: 'https://www.linkedin.com/in/vincent-evers-900745168/',
    instagram: 'https://www.instagram.com/that_one_dutch_dude',
    // spotify: 'https://open.spotify.com/user/yuvl0zpp3bpx4hne1ag7huten?si=df7ee2777c0c4fc4',
  },
  seo: {
    title: 'Portfolio Vincent Evers',
    description: 'Een portfolio gemaakt met Nuxt en TailwindCSS',
    url: 'https://evers-it-solutions.nl',
  },
  ui: {
    colors: {
      primary: 'emerald',
      neutral: 'neutral',
    },
    notifications: {
      position: 'top-0 bottom-auto',
    },
    notification: {
      progress: {
        base: 'absolute bottom-0 end-0 start-0 h-0',
        background: 'bg-transparent dark:bg-transparent',
      },
    },
    button: {
      slots: {
        base: 'cursor-pointer',
      },
      defaultVariants: {
        color: 'neutral',
      },
    },
    input: {
      defaultVariants: {
        color: 'neutral',
      },
    },
    textarea: {
      defaultVariants: {
        color: 'neutral',
      },
    },
    icons: {
      loading: 'lucide:loader',
    },
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
})
