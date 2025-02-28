import { MdOutlineTitle } from 'react-icons/md'
import { defineConfig } from 'vitepress'

export default defineConfig({
  head: [
    [
    'link',
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css'
    }
  ],
  ],
  title: "GrinTic | Docs",
  description: "A VitePress Site",
  themeConfig: {
    logo: "https://img.icons8.com/?size=100&id=NkdlSUR5LFuw&format=png&color=000000",
    siteTitle: 'GrinTic',
    outlineTitle: 'Contendo', // Cambia el texto aquí
    nav: [
      { text: 'Inicio', link: '/' },
      {
        text: 'Desarrollo',
        items: [
          { text: 'Frontend', link: '/Frontend/' },
          { text: 'Backend', link: '/backend/' },
          { text: 'Database', link: '/backend/database' },
        ]
      },
      {
        text: 'Operaciones',
        items: [
          { text: 'Infraestructura', link: '/operations/docker' },
          { text: 'Contenedores', link: '/operaciones/contenedores/info' },
        ]
      },/*
      {
        text: 'Seguridad',
          items: [
            { text: 'Seguridad de la Infraestructura', link: '/security/infrastructure' },
            { text: 'Seguridad de la Aplicación', link: '/security/application' },
            { text: 'Compliance - Regulaciones', link: '/security/communication' },
          ]
      },
      {
        text: 'Arquitectura',
          items: [
            { text: 'Patrones de diseño', link: '/architecture/overview' },
            { text: 'Cloud Arquitecture', link: '/architecture/design' },
            { text: 'Escalabilida', link: '/architecture/deployment' },
          ]
      },
      {
        text: 'Data',
          items: [
            { text: 'Big Data', link: '/data/overview' },
            { text: 'Data Science', link: '/data/design' },
            { text: 'Data Engineering', link: '/data/deployment' },
          ]
      },*/
      {
        text: 'Metodologías',
          items: [
            { text: 'SRE', link: '/methodology/sre' },
            { text: 'DevOps', link: '/methodology/devops' },
          ]
      },
      {
        text: 'Herramientas',
          items: [
            { text: 'Control de versiones', link: '/tools/docker' },
            { text: 'IDEs', link: '/tools/kubernetes' },
            { text: 'Colaboration Tools', link: '/tools/git' },
          ]
      },
      {
        text: 'Cloud',
          items: [
            { text: 'GCP', link: '/cloud/gcp' },
            { text: 'AWS', link: '/cloud/aws' },
            { text: 'Azure', link: '/cloud/azure' },
          ]
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Introduction', link: '/guide/introduction' },
            { text: 'Installation', link: '/guide/installation' }
          ]
        }
      ],
      '/Frontend/': [
        {
          text: 'Frontend',
          items: [
            { text: 'Html', link: '/Frontend/markdown-examples' },
            { text: 'Css', link: '/Frontend/api-examples' },
            { text: 'Javascript', link: '/Frontend/javascript-examples' },
            {
              text: 'Java',
              collapsed: true,
                items: [
                  { text: 'Introduction', link: '/backend/java/introduction' },
                  { text: 'Installation', link: '/backend/java/installation' }
                ]
            }
          ]
        }
      ],
      '/backend/': [
        {
          text: 'Backend',
          items: [
            { text: 'API Examples', link: '/backend/api' },
            { text: 'Database Examples', link: '/backend/database' },
          ]
        }
      ],
      /* PESTAÑA CONTENEDORES */
      '/operaciones/contenedores': [
        {
          text: 'Contenedores',
          items: [
            { text: 'Docker',
              collapsed: false,
                items: [
                  { text: 'Instalación', link: '/operaciones/contenedores/docker/instalacion' },
                  { text: 'Comandos', link: '/operaciones/contenedores/docker/comandos' },
                  { text: 'Configurar Logs', link: '/operaciones/contenedores/docker/configuraciones/logs'},
                  { text: 'Limitar Recursos', link: '/operaciones/contenedores/docker/configuraciones/recursos'},
                ]
              },
              { text: 'Docker Compose',
                collapsed: false,
                  items: [
                    { text: 'Instalación', link: '/operaciones/docker-compose/instalacion' },
                    { text: 'Configuraciones', link: '/operaciones/docker-compose/configuracion' },
  
                  ]
                },
            { text: 'Docker Swarm', link: '/operaciones/docker-swarm' },
            { text: 'Kubernets', link: '/operaciones/kubernets' },
              
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/vuejs-vitepress/' }
    ],
  },
    vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.includes('-')
      }
    }
  }
})




