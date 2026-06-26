# 🎓 G10 ONE AI FOR TECH - Localizador de Formaciones

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Shadcn UI](https://img.shields.io/badge/Shadcn_UI-000000?style=for-the-badge&logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)

Um portal interativo e dinâmico desenvolvido em React para ajudar os estudantes da **Geração 10 (G10) do programa Oracle Next Education (ONE) - Trilha AI for Tech** a escolherem suas rotas de aprendizado ideais de forma inteligente e personalizada para o desenvolvimento do seu *Challenge Individual*.

---

## 📌 Índice
1. [Sobre o Projeto](#-sobre-o-projeto)
2. [Funcionalidades](#-funcionalidades)
3. [Tecnologias Utilizadas](#-tecnologias-utilizadas)
4. [Estrutura do Componente](#-estrutura-do-componente)
5. [Como Instalar e Rodar](#-como-instalar-e-rodar)
6. [Estrutura das Rotas de Aprendizado](#-estrutura-das-rotas-de-aprendizado)
7. [Visualização do Fluxo](#-visualizacao-do-fluxo)

---

## 📖 Sobre o Projeto

Este projeto consiste em uma interface web moderna de página única (SPA), implementada no componente [sitio_formaciones_g_10_es.jsx](file:///c:/Users/ericm/Documents/ALURA/G10%20ONE%20AI%20FOR%20TECH%20LAD%20SITE/sitio_formaciones_g_10_es.jsx). O objetivo principal é orientar os alunos em relação à carga horária, níveis de dificuldade e sequências sugeridas de cursos de acordo com o seu perfil profissional ou nível de conhecimento prévio.

O portal enfatiza que **nenhuma formação é obrigatória**, funcionando apenas como suporte para que os alunos construam a base técnica necessária para a entrega do **Challenge Individual**.

---

## ✨ Funcionalidades

- **🧭 Orientação por Perfil (Rotas Recomendadas):** Exibe caminhos de aprendizagem específicos para iniciantes, desenvolvedores back-end/full-stack, cientistas de dados/IA aplicada e desenvolvedores front-end que desejam integrar IA.
- **🔍 Filtro Dinâmico de Formações:** Permite filtrar o catálogo de cursos instantaneamente por categorias como *Todas*, *Principiantes*, *Back-end*, *Datos*, *Full-stack*, *Automatización* e *Cloud*.
- **📊 Painel de Estatísticas Integrado:** Mostra rapidamente a quantidade de formações (5), total de cursos sugeridos (18), carga horária total somada dinamicamente (133h) e informações sobre o challenge obrigatório.
- **📚 Detalhamento de Cursos:** Cada card de formação se expande em uma visão detalhada mostrando a carga horária de cada curso interno, tags de competências, público-alvo recomendado e sugestões de aplicação prática.
- **🎨 Design Moderno e Responsivo:** Visual premium construído com modo escuro nativo (dark mode), efeitos de glassmorphism, gradientes harmônicos e micro-animações interativas de hover e scroll.

---

## 🛠️ Tecnologias Utilizadas

- **Core:** [React](https://react.dev/) (Hooks: `useState`, `useMemo`)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **Animações:** [Framer Motion](https://www.framer.com/motion/)
- **Componentes de UI:** [Shadcn UI](https://ui.shadcn.com/) (Card, Button)
- **Ícones:** [Lucide React](https://lucide.dev/)

---

## 📂 Estrutura do Componente

O arquivo principal é o [sitio_formaciones_g_10_es.jsx](file:///c:/Users/ericm/Documents/ALURA/G10%20ONE%20AI%20FOR%20TECH%20LAD%20SITE/sitio_formaciones_g_10_es.jsx). Ele contém duas estruturas de dados fundamentais:

1. **`formations`**: Array de objetos contendo as formações (Nivelación, Generativa, Agentes, RAG, OCI), seus cursos internos, carga horária, recomendações e esquemas de cores.
2. **`paths`**: Array de objetos que define as rotas recomendadas por perfil profissional.

---

## 🚀 Como Instalar e Rodar

Como o projeto utiliza componentes do **Shadcn UI** e **Tailwind CSS**, siga as instruções abaixo para integrá-lo em seu projeto React (criado com Vite ou Next.js):

### 1. Instalar as dependências necessárias
No terminal do seu projeto, execute:
```bash
npm install framer-motion lucide-react class-variance-authority clsx tailwind-merge
```

### 2. Configurar o Shadcn UI (se aplicável)
Certifique-se de que sua aplicação possui os componentes de `Card` e `Button` instalados. Caso utilize a CLI do Shadcn:
```bash
npx shadcn@latest add card button
```
*Caso contrário, copie os componentes base nos caminhos correspondentes (`@/components/ui/card` e `@/components/ui/button`).*

### 3. Adicionar o Componente
Coloque o arquivo [sitio_formaciones_g_10_es.jsx](file:///c:/Users/ericm/Documents/ALURA/G10%20ONE%20AI%20FOR%20TECH%20LAD%20SITE/sitio_formaciones_g_10_es.jsx) na pasta de componentes ou páginas de sua aplicação (ex: `src/pages/Formaciones.jsx`) e faça a importação dele em seu arquivo de rotas ou `App.jsx`:

```jsx
import FormacionesG10Site from './components/sitio_formaciones_g_10_es';

function App() {
  return <FormacionesG10Site />;
}

export default App;
```
git commit --allow-empty -m "trigger deploy"
git push origin master
---

## 🗺️ Estrutura das Rotas de Aprendizado

Abaixo está o resumo das 5 formações oferecidas:

| Formação | Carga Horária | Nível | Foco Principal |
| :--- | :---: | :---: | :--- |
| **Nivelación** | 44h | Inicial | Lógica de programação, Git/GitHub, Introdução à IA e Python. |
| **Desarrollo y Orquestación con IA Generativa** | 21h | Inicial a Intermédio | Prompt Engineering, LangChain e Preparação para o Mercado. |
| **Ingeniería de Agentes y Automatización con IA** | 26h | Intermédio | Construção de agentes inteligentes com LangGraph e n8n. |
| **Inteligencia de Datos y RAG Avanzado** | 24h | Intermédio a Avançado | Bancos de dados vetoriais, técnicas RAG e Streamlit. |
| **Oracle Cloud Infrastructure (OCI)** | 18h | Intermédio | Deploy na nuvem, infraestrutura como código (IaC) e banco de dados. |

---

## 📊 Visualização do Fluxo

O diagrama abaixo ilustra a jornada recomendada de acordo com as escolhas de trilhas do estudante:

```mermaid
flowchart TD
    %% Estilos de nós
    classDef main fill:#1e1b4b,stroke:#4f46e5,stroke-width:2px,color:#e0e7ff;
    classDef path fill:#022c22,stroke:#0d9488,stroke-width:2px,color:#ccfbf1;
    classDef challenge fill:#7c2d12,stroke:#ea580c,stroke-width:2px,color:#ffedd5;

    %% Nós Principais
    Start(["Início dos Estudos - ONE G10"]):::main

    %% Decisões de Perfil
    Start --> RouteA{"Qual o seu perfil?"}

    RouteA -->|"Iniciante / Transição"| P1["Rota 1: Iniciante"]:::path
    RouteA -->|"Back-end / Full-stack"| P2["Rota 2: Back-end"]:::path
    RouteA -->|"Dados / IA Aplicada"| P3["Rota 3: Dados & RAG"]:::path
    RouteA -->|"Front-end + IA"| P4["Rota 4: Front-end"]:::path

    %% Mapeamento das rotas
    P1 --> F_Niv["1. Nivelación - 44h"]
    F_Niv --> F_Gen["2. IA Generativa - 21h"]
    F_Gen --> F_OCI["3. Oracle Cloud Infrastructure - 18h - Opcional"]

    P2 --> F_Niv_Opt["1. Nivelación - Opcional"]
    F_Niv_Opt --> F_Gen2["2. IA Generativa - 21h"]
    F_Gen2 --> F_Age["3. Engenharia de Agentes - 26h"]
    F_Age --> F_OCI2["4. Oracle Cloud Infrastructure - 18h"]

    P3 --> F_Niv_Data["1. Nivelación - 44h"]
    F_Niv_Data --> F_Gen3["2. IA Generativa - 21h"]
    F_Gen3 --> F_RAG["3. Dados e RAG Avançado - 24h"]

    P4 --> F_Gen4["1. IA Generativa - 21h"]
    F_Gen4 --> F_Age2["2. Engenharia de Agentes - 26h"]
    F_Age2 --> F_OCI3["3. Oracle Cloud Infrastructure - Opcional"]

    %% Finalização
    F_OCI --> Chal["CHALLENGE INDIVIDUAL"]:::challenge
    F_OCI2 --> Chal
    F_RAG --> Chal
    F_OCI3 --> Chal
```

---

*Desenvolvido para apoiar a trilha educativa de IA aplicada no projeto Oracle Next Education (ONE) - Alura.*
