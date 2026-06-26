import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, BrainCircuit, Cloud, Code2, Database, GitBranch, Rocket, Sparkles, Workflow, CheckCircle2, Compass, GraduationCap, Clock, Filter, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import logoOne from '@/assets/logo-one.png';
import logoAlura from '@/assets/logo-alura.png';

const formations = [
  {
    id: 'nivelacion',
    title: 'Nivelamento',
    badge: 'Para começar com uma base sólida',
    icon: GraduationCap,
    hours: 44,
    level: 'Inicial',
    audience: ['Iniciantes', 'Transição de carreira', 'Primeiro emprego em tech'],
    bestFor: 'Estudantes que ainda estão construindo seus fundamentos de lógica, programação, IA, Python e Git/GitHub.',
    summary:
      'Uma rota de entrada para quem precisa fortalecer as bases antes de avançar para IA, dados, back-end ou automação.',
    courses: [
      { title: 'Pensamento Computacional: Fundamentos da Computação e Lógica de Programação', hours: 8, tags: ['Lógica', 'Computação'], content: [
    'Fundamentos de computação: integração hardware/software e operações lógico-aritméticas',
    'Decomposição de problemas e criação de algoritmos com fluxogramas e linguagem natural',
    'Arquitetura de Von Neumann e uso de IDEs para o desenvolvimento',
    'Modularização de código com funções e tradução para código de máquina (compiladores e interpretadores)',
    'Comandos básicos no terminal para interação com o sistema operacional',
    'Planejamento de soluções e gestão estruturada de erros',
    'Impacto do software na economia criativa e na transformação digital'
  ] },
      { title: 'Fundamentos de IA: estrutura e abordagens dos sistemas inteligentes', hours: 8, tags: ['IA', 'Agentes'], content: [
    'Evolução e história da IA dentro das ciências da computação',
    'Aplicações práticas da IA em diferentes contextos do mundo real',
    'Agentes inteligentes: conceitos, estruturas e modelagem por espaço de estados',
    'Algoritmos de busca aplicados a problemas reais e dinâmicos',
    'Tipos de raciocínio: dedutivo, indutivo e abdutivo',
    'Representação e processamento do conhecimento com lógica formal e sistemas baseados em regras',
    'Raciocínio probabilístico para o tratamento de incerteza em ambientes dinâmicos',
    'Pensamento crítico sobre limitações e potencialidades dos métodos de IA',
    'Planejamento de soluções de IA aplicáveis a diversos desafios'
  ] },
      { title: 'Fundamentos de IA: algoritmos e abordagens de Machine Learning', hours: 8, tags: ['Machine Learning', 'Dados'], content: [
      'Fundamentos do machine learning e suas principais abordagens (supervisionado, não supervisionado e por reforço)',
      'Preparação e manipulação de dados para a construção de modelos preditivos',
      'Algoritmos de classificação, regressão e agrupamento para análise de dados',
      'Avaliação e comparação de modelos com métricas, validação cruzada e ajuste de hiperparâmetros',
      'Modelos pré-treinados aplicados à visão computacional e ao processamento de linguagem natural',
      'Redes neurais convolucionais e seu uso na análise de imagens',
      'Aprendizado por reforço e tomada de decisão baseada em recompensas',
      'Pensamento crítico sobre desafios, limitações e boas práticas em ML',
      'Planejamento de soluções de ML aplicáveis a problemas do mundo real'
  ]},
      { title: 'Python: Inteligência Artificial Aplicada', hours: 12, tags: ['Python', 'IA aplicada'], content: [
        'Explore a sintaxe básica do Python e a manipulação de variáveis, strings e estruturas condicionais',
        'Aplique loops e funções para estruturar lógicas e resolver desafios',
        'Utilize o Google Colab para praticar e validar os conceitos apresentados',
        'Manipule listas e dicionários para criar estruturas de dados eficientes',
        'Integre APIs de inteligência artificial e desenvolva chatbots interativos',
        'Analise grandes conjuntos de dados utilizando bibliotecas como Pandas e NumPy'
      ]
      },
      { title: 'Git e GitHub: compartilhando e colaborando em projetos', hours: 8, tags: ['Git', 'Portfólio'], content: [
        'Crie seu portfólio de projetos no GitHub',
        'Aprenda a compartilhar o código de seus projetos no GitHub',
        'Entenda como colaborar em projetos',
        'Versione um projeto de software utilizando Git',
        'Lide com conflitos no código utilizando Git',
        'Analise e modifique o histórico de commits de um repositório Git'
      ]
      },
    ],
    recommendation: 'Comece por aqui se você vem de outra área, tem pouca experiência prática ou quer revisar os fundamentos antes do challenge.',
    color: 'from-slate-50 to-slate-100',
    link: 'https://cursos.alura.com.br/app/learning-guide/alura/nivelamento-one-ai-for-tech-g10'
  },
  {
    id: 'generativa',
    title: 'Desenvolvimento e Orquestração com IA Generativa',
    badge: 'IA para criar, testar e melhorar código',
    icon: BrainCircuit,
    hours: 21,
    level: 'Inicial a intermediário',
    audience: ['Back-end', 'Front-end', 'Full-stack', 'Produtividade dev'],
    bestFor: 'Pessoas que querem usar IA para acelerar protótipos, melhorar código e entender como conectar LLMs com Python e LangChain.',
    summary:
      'Formação voltada para o uso prático de ferramentas como ChatGPT, Gemini, Claude e Grok para desenvolvimento, prototipagem e preparação profissional.',
    courses: [
      { title: 'IA para Desenvolvedores: desenvolvendo códigos com ChatGPT, Grok, Claude e Gemini', hours: 5, tags: ['Prompts', 'Código'], content: [
        'Explore o uso de ChatGPT, Claude, Grok e Google Gemini para otimizar o desenvolvimento de código',
        'Aplique técnicas de refatoração e validação de código em tempo real utilizando IA',
        'Aprimore a geração de protótipos funcionais e a correção dinâmica do código',
        'Compreenda a criação de \*prompts\* precisos para obter respostas eficazes das ferramentas de IA',
        'Experimente a integração com ambientes como CodePen e Google Colab para realizar testes práticos',
        'Utilize linguagens como Python e JavaScript para ajustes e melhorias no código'
      ]
      },
      { title: 'Gemini e Python: orquestrando LLMs com LangChain', hours: 8, tags: ['Python', 'LangChain'], content: [
        'Aprenda a utilizar Python e Gemini para explorar o potencial do LangChain',
        'Compreenda como orquestrar diferentes LLMs e integrar soluções inteligentes',
        'Crie agentes que analisem imagens e forneçam respostas precisas',
        'Domine ferramentas de IA para aumentar sua produtividade'
      ]
      },
      { title: 'Inteligência Artificial: preparação para o mercado', hours: 8, tags: ['Portfólio', 'Carreira'], content: [
        'Desenvolva projetos práticos e construa um portfólio relevante',
        'Mantenha-se atualizado em relação às tendências e inovações do setor de tecnologia',
        'Prepare-se para os processos seletivos de grandes empresas de tecnologia',
        'Conecte-se com uma comunidade de especialistas e entusiastas da área',
        'Abra portas para oportunidades profissionais em um campo de alta demanda'
      ]
      },
    ],
    recommendation: 'Ideal após o Nivelamento ou em paralelo, caso você já programe e queira aplicar IA no seu fluxo de trabalho.',
    color: 'from-violet-50 to-indigo-100',
    link: 'https://cursos.alura.com.br/app/learning-guide/alura/desenvolvimento-e-orquestracao-com-ia-one'
  },
  {
    id: 'agentes',
    title: 'Engenharia de Agentes e Automação com IA',
    badge: 'Agentes, LangGraph e workflows inteligentes',
    icon: Workflow,
    hours: 26,
    level: 'Intermediário',
    audience: ['Back-end', 'Front-end', 'Full-stack', 'Automação', 'DevOps inicial'],
    bestFor: 'Estudantes com base em programação que querem construir agentes, multiagentes e automações com n8n, LangGraph e serviços externos.',
    summary:
      'Uma rota para criar sistemas que raciocinam, usam ferramentas, automatizam processos e conectam serviços como GitHub, Gmail, Sheets ou Slack.',
    courses: [
      { title: 'Agentes de IA com LangGraph', hours: 2, tags: ['LangGraph', 'Agentes'], 
        content: [
            'Usar o LangChain para criar cadeias de processamento com LLMs como o Google Gemini',
            'Equipar LLMs com ferramentas para tarefas práticas, como buscas na web',
            'Implementar agentes autônomos (ReAct) que raciocinam e escolhem ferramentas',
            'Modelar fluxos de trabalho de IA como grafos com a biblioteca LangGraph',
            'Criar sistemas multiagente usando roteadores e supervisores para orquestrar tarefas',
            'Publicar a aplicação em uma interface web interativa usando Gradio'
        ]
      },
      { title: 'LangGraph: orquestração de agentes e multiagentes', hours: 10, tags: ['Multiagentes', 'Fluxos'], content: [
        'Desenvolva agentes inteligentes que integrem pensamento e ação',
        'Automatize interações em sistemas de chat e processos de coleta de dados',
        'Implemente estratégias de ciclo de pensamento e ação utilizando fluxos de controle',
        'Crie grafos de decisão com nós e arestas condicionais para orientar escolhas',
        'Configure o armazenamento seguro de chaves de API e o gerenciamento de estados com SQLite',
        'Integre técnicas de web scraping com Selenium e BeautifulSoup para análise de dados'
      ]},
      { title: 'n8n: crie automações inteligentes', hours: 4, tags: ['n8n', 'Automação'], content: [
        'Compreenda os fundamentos para criar fluxos de trabalho básicos no N8N',
        'Configure gatilhos personalizados (triggers) para serviços de e-mail como o Gmail',
        'Conecte e utilize APIs para realizar buscas e integrar dados da web',
        'Implemente a lógica de inteligência artificial em fluxos de trabalho condicionais',
        'Gerencie e estabeleça conexões para o tratamento de arquivos com o Google Drive',
        'Crie contas e configure os serviços necessários dentro do Google Cloud Console',
        'Desenvolva projetos de automação sob medida para suas necessidades'
      ]},
      { title: 'Automação de fluxos: integrando n8n e IA', hours: 8, tags: ['IA', 'Operações'], content: [
        'Configure e personalize fluxos automatizados utilizando a interface de arrastar e soltar do N8N',
        'Integre serviços como Gmail, Outlook e Google Sheets para automatizar tarefas diárias',
        'Aplique gatilhos e condições para gerenciar respostas e classificar e-mails',
        'Implemente análises de sentimento em comentários e automatize o envio de relatórios',
        'Utilize integrações com ferramentas de IA como o ChatGPT para otimizar os processos operacionais'
      ]},
      { title: 'n8n para devs: construindo workflows inteligentes', hours: 2, tags: ['GitHub', 'Dev workflow'], content: [
        'Desenvolva um pipeline completo para a revisão de Pull Requests',
        'Agilize o fluxo de trabalho da equipe de desenvolvimento',
        'Mapeie rotas ideais com tratamento robusto de dados e saídas',
        'Implemente lógicas para pular etapas em caso de erros ou falta de informação',
        'Domine o uso de nós essenciais como GitHub, Código e Tela',
        'Organize a ramificação do fluxo utilizando o nó IF',
        'Integre notificações automáticas por e-mail e Slack',
        'Aplique Inteligência Artificial no processo com o nó do Gemini',
        'Gerencie os registros e a auditoria interna utilizando o Data Table',
        'Monitore e limpe o histórico de execuções do sistema'
      ]},
    ],
    recommendation: 'Recomendada para quem já tem fundamentos e quer construir soluções úteis para processos reais.',
    color: 'from-emerald-50 to-teal-100',
    link: 'https://cursos.alura.com.br/app/learning-guide/alura/engenharia-de-agentes-e-automacao-com-ia-one'
  },
  {
    id: 'rag',
    title: 'Inteligência de Dados e RAG Avançado',
    badge: 'Dados, documentos, agentes e recuperação aumentada',
    icon: Database,
    hours: 24,
    level: 'Intermediário a avançado',
    audience: ['Ciência de dados', 'Analytics', 'IA aplicada', 'Back-end com dados'],
    bestFor: 'Pessoas interessadas em criar assistentes que consultam documentos, CSVs, bases vetoriais e pipelines de recuperação de informação.',
    summary:
      'Formação focada em RAG, embeddings, LangChain, análise de dados com agentes, PDFs, CSVs, Streamlit e avaliação de respostas.',
    courses: [
      { title: 'RAG e agentes de IA', hours: 2, tags: ['RAG', 'LangChain'], content: [
        'Aprenda a configuração e instanciamento de modelos de linguagem com Langchain',
        'Realize o projeto de prompts e controle de saídas para guiar o comportamento dos LLMs',
        'Conheça a criação e o armazenamento de embeddings em bancos de dados vetoriais',
        'Construa sistemas de recuperação e resposta com RAG',
        'Implemente agentes autônomos utilizando grafos de estado com LangGraph',
        'Realize o teste e a execução de agentes autônomos em diferentes cenários'
      ]},
      { title: 'LangChain: técnicas avançadas de RAG', hours: 10, tags: ['Embeddings', 'Vector DB'], content: [
        'Compreenda os fundamentos e a aplicação de pipelines de recuperação aumentada',
        'Configure ambientes de desenvolvimento isolados com virtualenv e Jupyter Notebook',
        'Explore a integração com modelos de linguagem utilizando LangChain e técnicas de chunking',
        'Implemente estratégias para criar embeddings de texto e armazenar dados em bancos de dados vetoriais',
        'Ajuste prompts e reestruture consultas com métodos avançados de recuperação',
        'Monitore e avalie o desempenho dos pipelines com ferramentas como o LangSmith'
      ]},
      { title: 'LangChain: automatizando a análise de dados com agentes', hours: 12, tags: ['CSV', 'Streamlit'], content: [
        'Automatize tarefas repetitivas de análise de dados com LLMs',
        'Desenvolva ferramentas personalizadas para gerar relatórios exploratórios e estatísticos, além de uma ferramenta dedicada à visualização de dados por meio de gráficos',
        'Crie um agente com LangChain que possa responder perguntas sobre arquivos CSV',
        'Orquestre diferentes ferramentas em um único fluxo automatizado com LangChain',
        'Construa uma interface interativa com Streamlit para facilitar o uso do agente',
        'Implemente a aplicação na nuvem, tornando seu assistente de análise de dados acessível pelo navegador'
      ]},
    ],
    recommendation: 'A rota mais indicada para perfis de dados, IA aplicada ou estudantes que querem criar projetos com informações próprias.',
    color: 'from-sky-50 to-cyan-100',
    link: 'https://cursos.alura.com.br/app/learning-guide/alura/inteligencia-de-dados-e-rag-avancado-one'
  },
  {
    id: 'oci',
    title: 'Oracle Cloud Infrastructure',
    badge: 'Nuvem, deploy e infraestrutura',
    icon: Cloud,
    hours: 18,
    level: 'Intermediário',
    audience: ['Back-end', 'Front-end', 'Full-stack', 'Cloud', 'Infraestrutura'],
    bestFor: 'Estudantes que desejam aprender a implantar aplicações, configurar servidores, bancos de dados, redes e recursos na nuvem da Oracle.',
    summary:
      'Formação voltada para levar projetos para a nuvem, trabalhar com infraestrutura como código, Object Storage, aplicações NodeJS e ambientes LAMP.',
    courses: [
      { title: 'Oracle Cloud Infrastructure: implementação de uma aplicação na nuvem', hours: 8, tags: ['Cloud', 'Deploy'], content: [
        'Aprenda os conceitos básicos de computação em nuvem',
        'Compreenda a arquitetura da Oracle Cloud',
        'Crie uma conta na Oracle Cloud',
        'Aprenda a criar redes virtuais e load balancers na Oracle Cloud',
        'Aprenda a criar e configurar computes em uma VCN',
        'Implemente uma aplicação básica na Oracle Cloud'
      ]},
      { title: 'Oracle Cloud Infrastructure: banco de dados e infraestrutura como código', hours: 10, tags: ['Banco de dados', 'IaC'], content: [
        'Compreenda os conceitos de bancos de dados em nuvem',
        'Aprenda a criar e configurar um compute para hospedar uma aplicação NodeJS',
        'Hospede uma página estática no Object Storage da Oracle Cloud',
        'Conheça a implementação de infraestrutura como código na Oracle Cloud'
      ]},
    ],
    recommendation: 'Muito útil se o seu challenge precisa ser publicado, implantado ou conectado a serviços de nuvem.',
    color: 'from-orange-50 to-amber-100',
    link: 'https://cursos.alura.com.br/app/learning-guide/alura/nivelamento-one-ai-for-tech-g10'
  },
];

const paths = [
  {
    id: 'beginner',
    title: 'Estou começando ou venho de outra área',
    icon: Compass,
    filter: 'Iniciantes',

    totalHours: 65,
    weeklyHours: '6-8h',
    intensity: 'Moderado',
    duration: '8 semanas',

    steps: [
      'Nivelamento',
      'Desenvolvimento e Orquestração com IA Generativa',
      'Oracle Cloud Infrastructure',
      'Challenge',
    ],

    note:
      'Trilha recomendada para quem está começando. A combinação de Nivelamento e IA Generativa oferece uma base sólida para participar do challenge com mais segurança e autonomia.',
  },

  {
    id: 'backend',
    title: 'Quero crescer em back-end ou full-stack',
    icon: Code2,
    filter: 'Back-end',

    totalHours: 65,
    weeklyHours: '7-8h',
    intensity: 'Moderado',
    duration: '8 semanas',

    steps: [
      'Desenvolvimento e Orquestração com IA Generativa',
      'Engenharia de Agentes e Automação com IA',
      'Oracle Cloud Infrastructure',
      'Challenge',
    ],

    note:
      'Uma trilha voltada para quem quer criar aplicações mais completas, automações inteligentes e projetos implantados na nuvem.',
  },

  {
    id: 'data',
    title: 'Tenho interesse em ciência de dados ou IA aplicada',
    icon: Database,
    filter: 'Dados',

    totalHours: 89,
    weeklyHours: '10-12h',
    intensity: 'Intensivo',
    duration: '8 semanas',

    steps: [
      'Desenvolvimento e Orquestração com IA Generativa',
      'Inteligência de Dados e RAG Avançado',
      'Oracle Cloud Infrastructure',
      'Challenge',
    ],

    note:
      'A trilha mais intensa do programa. Recomendada para estudantes que queiram se aprofundar em RAG, embeddings, análise de dados e assistentes com informações próprias.',
  },

  {
    id: 'frontend',
    title: 'Tenho perfil front-end e quero somar IA',
    icon: Sparkles,
    filter: 'Front-end',

    totalHours: 65,
    weeklyHours: '7-8h',
    intensity: 'Leve a moderado',
    duration: '8 semanas',

    steps: [
      'Desenvolvimento e Orquestração com IA Generativa',
      'Engenharia de Agentes e Automação com IA',
      'Oracle Cloud Infrastructure',
      'Challenge',
    ],

    note:
      'Ideal para desenvolvedores front-end que queiram integrar IA, assistentes e automações em seus projetos sem focar profundamente em infraestrutura ou ciência de dados.',
  },
];

const filters = ['Todas', 'Iniciantes', 'Back-end', 'Front-end', 'Dados', 'Full-stack', 'Automatização', 'Cloud'];

function totalHours(items) {
  return items.reduce((sum, item) => sum + item.hours, 0);
}

export default function FormacionesG10Site() {
  const [activeFilter, setActiveFilter] = useState('Todas');
  const [expandedCourses, setExpandedCourses] = useState({});

  const toggleCourse = (courseId) => {
    setExpandedCourses((prev) => ({
      ...prev,
      [courseId]: !prev[courseId],
    }));
  };

  const visibleFormations = useMemo(() => {
    if (activeFilter === 'Todas') return formations;
    if (activeFilter === 'Datos') return formations.filter((f) => f.audience.some((a) => a.includes('datos') || a.includes('Analítica') || a.includes('IA aplicada')) 
      || f.id === 'rag' || f.id === 'generativa' || f.id === 'oci' || f.id === 'oci'); 
    return formations.filter((f) => f.audience.some((a) => a.toLowerCase().includes(activeFilter.toLowerCase())) || f.title.toLowerCase().includes(activeFilter.toLowerCase()));
  }, [activeFilter]);

  const programHours = totalHours(formations);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden px-6 pb-16 pt-6 sm:px-10 lg:px-20">
        <div className="absolute inset-0 opacity-30" aria-hidden="true">
          <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-indigo-500 blur-3xl" />
          <div className="absolute bottom-0 right-10 h-80 w-80 rounded-full bg-cyan-500 blur-3xl" />
        </div>

        {/* Header section with brand logos and program tracks */}
        <header className="relative z-10 mx-auto mb-16 flex max-w-7xl flex-col gap-6 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <div className="flex items-center gap-6">
            <img src={logoOne} alt="G10 ONE Logo" className="h-8 md:h-9 w-auto object-contain" />
            <img src={logoAlura} alt="Alura Logo" className="h-7 md:h-8 w-auto object-contain" />
          </div>
          
          <div className="flex items-center">
              <div className="rounded-full bg-white px-5 py-1.5 text-xs md:text-sm font-semibold tracking-wider text-slate-950 shadow-md">
                IA • Dados • Automatização • OCI
              </div>
          </div>
        </header>

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-cyan-100 backdrop-blur">
              <Rocket className="h-4 w-4" /> Programa educativo gratuito
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Escolha sua trilha de aprendizagem para se preparar melhor para o challenge
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              As formações são conjuntos de cursos pensados para ajudar você a avançar de acordo com o seu perfil: nível inicial, back-end, dados, full-stack, automação, IA generativa ou nuvem. Nenhuma formação é obrigatória: o único conteúdo obrigatório será o challenge individual.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#rutas"><Button className="rounded-2xl px-5 py-6 text-base">Descobrir minha trilha</Button></a>
              <a href="#formaciones"><Button variant="outline" className="rounded-2xl border-white/20 bg-white/5 px-5 py-6 text-base text-white hover:bg-white/10">Ver formações</Button></a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55, delay: 0.1 }}>
            <Card className="rounded-[2rem] border-white/10 bg-white/10 text-white shadow-2xl backdrop-blur">
              <CardContent className="p-7">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-3xl bg-white/10 p-5">
                    <p className="text-sm text-slate-300">Formações</p>
                    <p className="mt-2 text-4xl font-bold">5</p>
                  </div>
                  <div className="rounded-3xl bg-white/10 p-5">
                    <p className="text-sm text-slate-300">Cursos sugeridos</p>
                    <p className="mt-2 text-4xl font-bold">18</p>
                  </div>
                  <div className="rounded-3xl bg-white/10 p-5">
                    <p className="text-sm text-slate-300">Carga total</p>
                    <p className="mt-2 text-4xl font-bold">{programHours}h</p>
                  </div>
                  <div className="rounded-3xl bg-white/10 p-5">
                    <p className="text-sm text-slate-300">Obrigatório</p>
                    <p className="mt-2 text-4xl font-bold">1</p>
                    <p className="mt-1 text-xs text-slate-300">Challenge individual</p>
                  </div>
                </div>
                <div className="mt-5 rounded-3xl border border-cyan-200/20 bg-cyan-300/10 p-5">
                  <p className="flex items-center gap-2 font-semibold text-cyan-100"><CheckCircle2 className="h-5 w-5" />Como usar este site</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Revise primeiro a trilha recomendada para o seu perfil. Depois, escolha a formação que mais ajude você a construir seu projeto e fortalecer seu portfólio.</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section id="rutas" className="bg-slate-50 px-6 py-16 text-slate-900 sm:px-10 lg:px-20">
              <div className="mx-auto max-w-7xl">
                <div className="max-w-3xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">Orientação por perfil</p>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Qual formação devo escolher?</h2>
                  <p className="mt-4 text-lg leading-8 text-slate-600">Você não precisa fazer tudo. Escolha uma sequência realista de acordo com o seu momento, sua área de interesse e o tipo de projeto que você quer criar para o challenge.</p>
                </div>
      
                <div className="mt-10 grid gap-5 md:grid-cols-2">
                  {paths.map((path, index) => {
                    const Icon = path.icon;
                    return (
                      <motion.div key={path.id} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.05 }}>
                        <Card className="h-full rounded-3xl border-slate-200 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                          <CardContent className="p-6">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
                              <Icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold">{path.title}</h3>
                            <div className="mt-5 space-y-3">
                              {path.steps.map((step, stepIndex) => (
                                <div key={step} className="flex items-start gap-3">
                                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">{stepIndex + 1}</div>
                                  <p className="text-sm font-medium text-slate-700">{step}</p>
                                </div>
                              ))}
                            </div>

                            <a 
                              onClick={() => {
                                setActiveFilter(path.filter);
                                document.getElementById('formaciones')?.scrollIntoView({ behavior: 'smooth' });
                              }}
                            >
                              <Button className="mt-4 rounded-full">Quero começar!</Button>
                            </a>

                            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                              <div className="rounded-2xl bg-slate-100 p-3">
                                <p className="text-xs text-slate-500">Carga total</p>
                                <p className="text-lg font-bold">{path.totalHours}h</p>
                              </div>
      
                              <div className="rounded-2xl bg-slate-100 p-3">
                                <p className="text-xs text-slate-500">Semanal</p>
                                <p className="text-lg font-bold">{path.weeklyHours}</p>
                              </div>
      
                              <div className="rounded-2xl bg-slate-100 p-3">
                                <p className="text-xs text-slate-500">Duração</p>
                                <p className="text-lg font-bold">{path.duration}</p>
                              </div>
      
                              <div className="rounded-2xl bg-slate-100 p-3">
                                <p className="text-xs text-slate-500">Ritmo</p>
                                <p className="text-sm font-bold">{path.intensity}</p>
                              </div>
                            </div>
                            <p className="mt-5 rounded-2xl bg-slate-100 p-4 text-sm leading-6 text-slate-600">{path.note}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </section>

      <section id="challenge" className="bg-white px-6 py-16 text-slate-900 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <Card className="overflow-hidden rounded-[2rem] border-indigo-100 shadow-sm">
            <CardContent className="grid gap-8 p-0 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="bg-slate-900 p-8 text-white sm:p-10">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                  <GitBranch className="h-7 w-7" />
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Conteúdo obrigatório</p>
                <h2 className="mt-3 text-3xl font-bold">Challenge individual</h2>
                <p className="mt-4 leading-7 text-slate-300">Este será o projeto que cada estudante deverá criar individualmente. As formações funcionam como apoio para chegar com mais clareza, prática e confiança.</p>
              </div>
              <div className="p-8 sm:p-10">
                <div className="rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50 p-8 text-center">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Espaço reservado</p>
                  <h3 className="mt-3 text-2xl font-bold">Aqui serão inseridas as informações do desafio</h3>
                  <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-600">Acrescenta mais adiante o objetivo do projeto, critérios de entrega, datas, tecnologias sugeridas, rubrica de avaliação e exemplos de entregáveis.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="formaciones" className="bg-slate-50 px-6 py-16 text-slate-900 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">Catálogo de formações</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Explore as formações disponíveis</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">Filtre por interesse e veja o que você vai aprender, para quem cada formação foi pensada e como ela pode ajudar no seu projeto.</p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-1 inline-flex items-center gap-2 text-sm font-medium text-slate-500"><Filter className="h-4 w-4" />Filtrar:</span>
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${activeFilter === filter ? 'bg-slate-900 text-white shadow' : 'bg-white text-slate-600 hover:bg-slate-100'}`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6">
            {visibleFormations.map((formation, index) => {
              const Icon = formation.icon;
              return (
                <motion.article key={formation.id} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.04 }}>
                  <Card className={`overflow-hidden rounded-[2rem] border-slate-200 bg-gradient-to-br ${formation.color} shadow-sm`}>
                    <CardContent className="grid gap-6 p-6 lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
                      <div>
                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                          <Icon className="h-7 w-7 text-slate-900" />
                        </div>
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">{formation.badge}</p>
                        <h3 className="mt-3 text-2xl font-bold sm:text-3xl">{formation.title}</h3>
                        <p className="mt-4 leading-7 text-slate-700">{formation.summary}</p>
                        {formation.link && (
                          <a href={formation.link} target="_blank" rel="noopener noreferrer">
                            <Button className="mt-4 rounded-full">Ver formação completa</Button>
                          </a>
                        )}
                        <div className="mt-5 grid gap-3 sm:grid-cols-2">
                          <div className="rounded-2xl bg-white/70 p-4">
                            <p className="flex items-center gap-2 text-sm font-semibold text-slate-500"><Clock className="h-4 w-4" />Carga horária</p>
                            <p className="mt-1 text-2xl font-bold">{formation.hours}h</p>
                          </div>
                          <div className="rounded-2xl bg-white/70 p-4">
                            <p className="text-sm font-semibold text-slate-500">Nível sugerido</p>
                            <p className="mt-1 text-lg font-bold">{formation.level}</p>
                          </div>
                        </div>
                        <div className="mt-5 rounded-2xl bg-white/80 p-4 text-sm leading-6 text-slate-700">
                          <strong>Recomendação:</strong> {formation.recommendation}
                        </div>
                      </div>

                      <div className="rounded-3xl bg-white/80 p-5 shadow-sm">
                        <p className="mb-4 flex items-center gap-2 font-bold text-slate-900"><BookOpen className="h-5 w-5" /> Cursos da formação</p>
                        <div className="space-y-3">
                          {formation.courses.map((course) => {
                            const courseId = `${formation.id}-${course.title}`;
                            const isExpanded = expandedCourses[courseId];
                            return (
                              <div key={course.title} className="rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-200 hover:shadow-md">
                                <div 
                                  className="flex gap-3 cursor-pointer select-none"
                                  onClick={() => toggleCourse(courseId)}
                                >
                                  <ChevronRight className={`mt-1 h-4 w-4 shrink-0 text-indigo-600 transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`} />
                                  <div className="flex-1">
                                    <h4 className="font-semibold leading-6 text-slate-900 transition-colors hover:text-indigo-600">{course.title}</h4>
                                    <div className="mt-3 flex flex-wrap items-center gap-2">
                                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{course.hours}h</span>
                                      {course.tags.map((tag) => (
                                        <span key={tag} className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">{tag}</span>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                                
                                <AnimatePresence initial={false}>
                                  {isExpanded && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: "auto", opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.2, ease: "easeInOut" }}
                                      className="overflow-hidden"
                                    >
                                      <div className="mt-4 border-t border-slate-100 pt-3 text-sm text-slate-600">
                                        <p className="font-semibold text-slate-800 mb-2">Conteúdo principal do curso:</p>
                                        {course.content && course.content.length > 0 ? (
                                          <ul className="list-disc list-inside space-y-1.5 pl-1 text-slate-600">
                                            {course.content.map((item, idx) => (
                                              <li key={idx}>{item}</li>
                                            ))}
                                          </ul>
                                        ) : (
                                          <ul className="list-disc list-inside space-y-1.5 pl-1 text-slate-600">
                                            <li>Conceito e fundamento da tecnologia.</li>
                                            <li>Práticas guiadas passo a passo com código real.</li>
                                            <li>Integração do conteúdo no Challenge Individual.</li>
                                            <li>Arquitetura limpa e metodologias recomendadas.</li>
                                          </ul>
                                        )}
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            );
                          })}
                        </div>
                        <div className="mt-5 rounded-2xl bg-slate-900 p-4 text-white">
                          <p className="text-sm font-semibold">Para quem é melhor:</p>
                          <p className="mt-2 text-sm leading-6 text-slate-300">{formation.bestFor}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 text-slate-900 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="rounded-3xl border-slate-200 shadow-sm lg:col-span-2">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold">Conselho final para estudantes</h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">Não escolha a formação mais longa: escolha a mais útil para o seu objetivo. Se você está começando, priorize o Nivelamento. Se quer construir soluções com IA, avance para IA Generativa, Agentes ou RAG. Se quer publicar seu projeto, inclua OCI.</p>
              </CardContent>
            </Card>
            <Card className="rounded-3xl border-slate-200 bg-slate-900 text-white shadow-sm">
              <CardContent className="p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Lembrete</p>
                <h3 className="mt-3 text-2xl font-bold">As formações não são obrigatórias</h3>
                <p className="mt-4 leading-7 text-slate-300">São trilhas de apoio para que você chegue ao challenge com mais recursos, ideias e confiança.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-indigo blur-3 text-white px-6 py-12 sm:px-10 lg:px-20 border-t border-[#C8A27A]/20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 items-start">

            {/* Coluna 1: Logo e Marca */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 border-l-2 border-[#C8A27A] pl-4">
                <div className="flex flex-col">
                  <span className="text-xl font-black tracking-tighter uppercase leading-none">ONE</span>
                  <span className="text-lg font-medium leading-tight opacity-70">Oracle Next Education</span>
                </div>
                <div className="h-8 w-px bg-white/20" />
                <span className="text-xl font-bold tracking-tighter text-[#C8A27A]">AI FOR TECH</span>
              </div>
              <p className="text-md text-slate-400 max-w-xs leading-relaxed">
                Um programa de educação tecnológica focado na empregabilidade e no domínio da Inteligência Artificial.
              </p>
            </div>

            {/* Coluna 2: Contato (Destaque) */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[#C8A27A]">
                Suporte e Contato
              </h4>
              <div className="flex flex-col gap-2">
                <p className="text-md text-slate-400">Você tem dúvidas sobre o programa?</p>
                <a
                  href="mailto:contato-one@alura.com.br"
                  className="text-lg font-semibold hover:text-[#C8A27A] transition-colors flex items-center gap-2 group"
                >
                  contato-one@alura.com.br
                  <div className="h-1 w-1 rounded-full bg-[#C8A27A] opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>

        

          </div>

          {/* Linha Inferior: Copyright */}
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs uppercase tracking-widest text-slate-500">
              © 2026 AI FOR TECH - Todos os direitos reservados
            </p>
            <div className="flex gap-6">
              {/* Espaço para ícones de redes sociais se houver */}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
