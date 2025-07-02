
import React from 'react';
import { Member, ResearchProject, Publication, Lab, ResearchArea, Student, RecentActivity } from './types';

export const MEMBERS: Member[] = [
  { 
    name: '🧑‍🔬 Prof. Dr. Márcio de Sousa Góes',
    isProfessor: true, 
    imageUrl: '/pictures/marcio.jpg', 
    lattesUrl: 'http://lattes.cnpq.br/3874503187249364',
    details: (
      <>
        <h4 className="text-lg font-semibold text-primary/90 mt-2 mb-2">Resumo Profissional</h4>
        <p>Márcio de Sousa Góes é Doutor em Química e atua como Professor Associado (Nível 2) na UNILA, Foz do Iguaçu/PR, vinculado ao Centro Interdisciplinar em Ciências Naturais (CICN). Possui ampla experiência na área de Química de Materiais, com foco em eletroquímica e caracterização de materiais funcionais.</p>
        
        <h4 className="text-lg font-semibold text-primary/90 mt-4 mb-2">Formação Acadêmica</h4>
        <p>Graduado em Química com Licenciatura (2003), Mestre (2006) e Doutor (2010) em Ciência e Tecnologia de Materiais, todos pela UNESP – Instituto de Química de Araraquara.</p>
        
        <h4 className="text-lg font-semibold text-primary/90 mt-4 mb-2">Áreas de Pesquisa</h4>
        <p>Atua na síntese, desenvolvimento e caracterização de materiais funcionais e avançados (eletroquímica, difração de raios X, refinamento Rietveld), com aplicações em geração e conversão de energia e biossensores.</p>
        
        <h4 className="text-lg font-semibold text-primary/90 mt-4 mb-2">Atuação Institucional</h4>
        <ul className="list-disc ml-5 space-y-1">
            <li>Coordenador do Curso de Química Licenciatura (2015–2016)</li>
            <li>Vice-Diretor do ILACVN (2016–2017; 2023–2025)</li>
            <li>Coordenador do CICN (2017–2019)</li>
            <li>Pró-Reitor Adjunto de Pesquisa e Pós-graduação da UNILA (2019–2023)</li>
        </ul>

        <h4 className="text-lg font-semibold text-primary/90 mt-4 mb-2">Funções no GRIMAF</h4>
        <p>Líder do Grupo Interdisciplinar em Materiais Avançados e Funcionais (GRIMAF), no ILACVN–UNILA.</p>
      </>
    )
  },
  { 
    name: '👩‍🔬 Prof.ª Dr.ª Janine Padilha Botton',
    isProfessor: true, 
    imageUrl: '/pictures/janine.jpg',
    lattesUrl: 'http://lattes.cnpq.br/6247260645281245',
    details: (
       <>
        <h4 className="text-lg font-semibold text-primary/90 mt-2 mb-2">Resumo Profissional</h4>
        <p>Janine Padilha Botton é uma pesquisadora interdisciplinar com sólida experiência acadêmica e profissional nas áreas de Química e Engenharia Química. Atualmente, é professora na UNILA, onde coordena projetos voltados à produção e armazenamento de energia com foco em sustentabilidade.</p>

        <h4 className="text-lg font-semibold text-primary/90 mt-4 mb-2">Formação Acadêmica</h4>
        <p>Graduada em Química Industrial e Química Licenciatura Plena pela UFSM; Doutora em Ciência dos Materiais pela UFRGS; Doutorado em Química pela Université de Rennes 1 (cotutela).</p>

        <h4 className="text-lg font-semibold text-primary/90 mt-4 mb-2">Áreas de Pesquisa</h4>
        <p>Atua nas áreas de eletroquímica analítica e aplicada, com ênfase em materiais eletroativos, sensores e processos de conversão de energia.</p>

        <h4 className="text-lg font-semibold text-primary/90 mt-4 mb-2">Atuação Institucional</h4>
        <p>Professora da UNILA, orientadora de projetos de iniciação científica, mestrado e doutorado. Vice-coordenadora do Programa de Pós-Graduação em Energia e Sustentabilidade (PPGEnS).</p>

        <h4 className="text-lg font-semibold text-primary/90 mt-4 mb-2">Funções no GRIMAF</h4>
        <p>Colaboradora em projetos do grupo GRIMAF voltados à eletroquímica e aplicações sustentáveis em materiais funcionais.</p>
      </>
    )
  },
  { 
    name: '👨‍🔬 Prof. Dr. Johan Alexander Cortés Suárez',
    isProfessor: true, 
    imageUrl: '/pictures/johan.jpg',
    lattesUrl: 'http://lattes.cnpq.br/0901353687665223',
    details: (
      <>
        <h4 className="text-lg font-semibold text-primary/90 mt-2 mb-2">Resumo Profissional</h4>
        <p>Engenheiro físico e pesquisador com sólida atuação nas áreas de materiais cerâmicos avançados, materiais funcionais e eletroquímica. É professor do curso de Engenharia Física da UNILA, onde coordena projetos voltados à síntese e caracterização de materiais para aplicações em dispositivos de energia e sensores eletroquímicos.</p>

        <h4 className="text-lg font-semibold text-primary/90 mt-4 mb-2">Formação Acadêmica</h4>
        <p>Graduado em Engenharia Física pela Universidad Nacional de Colombia (2012), mestre e doutor em Ciência e Tecnologia de Materiais pela UNESP (Guaratinguetá). Realizou pós-doutorado na mesma instituição com foco em cerâmicas multifuncionais.</p>

        <h4 className="text-lg font-semibold text-primary/90 mt-4 mb-2">Áreas de Pesquisa</h4>
        <p>Atua em síntese e caracterização de cerâmicas semicondutoras e multifuncionais (na forma de pó, bulk e filmes), com aplicações em varistores, sensores, dielétricos, supercapacitores e catálise. Tem expertise em difração de raios X e refinamento Rietveld, além de pesquisa em automação, controle PID e desenvolvimento de dispositivos laboratoriais.</p>

        <h4 className="text-lg font-semibold text-primary/90 mt-4 mb-2">Atuação Institucional</h4>
        <p>Professor permanente da UNILA, orientador de alunos de graduação e pós-graduação, coordenador de projetos de extensão e ensino com foco em divulgação científica, economia circular e eletrônica aplicada. Atua como revisor de periódicos internacionais como Ceramics International e Chemical Engineering Journal.</p>

        <h4 className="text-lg font-semibold text-primary/90 mt-4 mb-2">Funções no GRIMAF</h4>
        <p>Pesquisador colaborador, atuando em projetos voltados a materiais para energia e sensores eletroquímicos, com foco em síntese, caracterização estrutural e desempenho funcional.</p>
      </>
    )
  },
];

export const STUDENTS: Student[] = [
  // Doutorado e Pós-Doutorado
  { name: 'Lynn Ahmad Sayah', level: 'phd-postdoc', project: 'Desenvolvimento e Análise de Baterias de Al-CO₂ com Eletrólito AlCl₃/EMImCl para Captura de Carbono e Geração de Energia', startYear: 2025, advisor: 'Márcio' },
  { name: 'Fabiano Cerri', level: 'phd-postdoc', project: 'Níveis de alfabetização energética em estudantes de licenciatura em uma universidade federal: uma análise transversal', startYear: 2024, advisor: 'Márcio' },
  { name: 'Maria Luiza Guimarães Dias dos Santos', level: 'phd-postdoc', project: 'Síntese e caracterização de filmes nanoestruturados à base BiVO₄ para aplicação fotocatalítica', startYear: 2024, advisor: 'Márcio', coAdvisor: 'Janine' },
  { name: 'Ana Paula Gomes da Silva Castro', level: 'phd-postdoc', project: 'Intercalação de hidretos/óxidos metálicos aplicados em sistemas de conversão e armazenamento de energia', startYear: 2023, advisor: 'Márcio' },
  { name: 'Cristhian Rolando Agüero Dominguez', level: 'phd-postdoc', project: 'Resíduos orgânicos para a produção de H₂ por reforma gasosa', startYear: 2024, advisor: 'Janine' },
  { name: 'Adelio Conter', level: 'phd-postdoc', project: 'Monitoramento discreto de saúde para diagnóstico de doenças em veículo elétrico', startYear: 2021, advisor: 'Janine' },
  { name: 'Marcelo Miguel', level: 'phd-postdoc', project: 'Viabilidade do hidrogênio na matriz energética do Brasil, Paraguai e Argentina', startYear: 2020, advisor: 'Janine' },
  { name: 'Alana Fernandes Golin', level: 'phd-postdoc', project: '', startYear: 2024, advisor: 'Janine', isPostdoc: true },
  
  // Mestrado
  { name: 'Ana Beatriz Rodrigues Gonzaga', level: 'masters', project: 'Síntese de Hidretos Metálicos por moagem reativa e aplicação em compósito polimérico para armazenagem de Hidrogênio', startYear: 2025, advisor: 'Márcio' },
  { name: 'Brenda Monteiro Rodrigues', level: 'masters', project: 'Desenvolvimento de nanomateriais para captura de CO₂', startYear: 2024, advisor: 'Janine', coAdvisor: 'Márcio' },
  { name: 'Larissa Yamile Segovia Ramirez', level: 'masters', project: 'Avaliação de biomassas para a produção de Biochar', startYear: 2024, advisor: 'Janine', coAdvisor: 'Márcio' },
  { name: 'Manuel Bendecene Levene', level: 'masters', project: 'Compósitos à base de ZnO para sistemas de monitoramento e análise', startYear: 2024, advisor: 'Janine', coAdvisor: 'Márcio' },
  { name: 'Hussein Abdul Karim Moussa', level: 'masters', project: 'Nanocompósito de óxidos metálicos e de (óxido de) grafeno para aplicação em sistemas de armazenamento de energia: supercapacitores', startYear: 2023, advisor: 'Márcio', coAdvisor: 'Johan' },
  { name: 'Esdras Rebecchi De Almeida', level: 'masters', project: 'Estudo de óxidos dopados com Európio por XPS', startYear: 2025, advisor: 'Rodrigo', coAdvisor: 'Johan' },

  // Graduação
  { name: 'Anna Beatriz Mota de Moura', level: 'undergraduate', project: 'Nanotubos de carbono modificados para a produção de H₂', startYear: 2025, advisor: 'Janine' },
  { name: 'Pamela Viana Duniz', level: 'undergraduate', project: 'Armazenamento de energia em supercapacitores obtidos a partir de resíduos', startYear: 2025, advisor: 'Janine' },
  { name: 'Melany Monserrat Lou Valinotti', level: 'undergraduate', project: 'Cerâmicas multiferroicas BiFeO₃ em sensores e dispositivos de energia', startYear: 2024, advisor: 'Johan' },
  { name: 'Aurora Fernandes da Cruz Bessa', level: 'undergraduate', project: 'Síntese, caracterização e aplicações elétricas e sensoras de CaNxCu₃₋ₓMyTi₄₋yO₁₂', startYear: 2024, advisor: 'Johan' },
  { name: 'Gabriel Lima Diniz', level: 'undergraduate', project: 'Cerâmicas perovskitas e plasma: uma sinergia para a sustentabilidade', startYear: 2024, advisor: 'Johan' },
];

export const RESEARCH_AREAS: ResearchArea[] = [
  { name: 'Eletroquímica', category: 'core' },
  { name: 'Química de Materiais', category: 'core' },
  { name: 'Síntese e Caracterização de Materiais Funcionais', category: 'core' },
  { name: 'Bioeletroquímica', category: 'application' },
  { name: 'Sensores', category: 'application' },
  { name: 'Supercapacitores', category: 'application' },
  { name: 'Espectroscopia de Impedância', category: 'methodology' },
  { name: 'Difração de Raios X (DRX)', category: 'methodology' },
  { name: 'Rietveld', category: 'methodology' },
  { name: 'Automação e Instrumentação Científica', category: 'methodology' },
];

export const RESEARCH_PROJECTS: ResearchProject[] = [
  {
    title: 'Nanocompósitos à Base de Óxidos Metálicos',
    description: 'Desenvolvimento e caracterização de nanocompósitos de óxidos metálicos (Fe₂O₃, MnO₂, BiVO₄, etc.) com aplicações em energia e sensores eletroquímicos sustentáveis.',
    imageUrl: 'https://picsum.photos/seed/energysustainability/400/300',
  },
  {
    title: 'Materiais Funcionais para Aplicação em Dispositivos',
    description: 'Eletrodos nanoestruturados aplicados em sensores e células solares, com foco em caracterização eletroquímica e tecnologias sustentáveis.',
    imageUrl: 'https://picsum.photos/seed/functionalmaterials/400/300',
  },
  {
    title: 'Estudo Estrutural por DRX em Diferentes Temperaturas',
    description: 'Análise da transição de fases em materiais nanoestruturados por DRX de -100 °C a 1100 °C usando o equipamento Empyrean PANalytical.',
    imageUrl: 'https://picsum.photos/seed/xraydiffraction/400/300',
  },
  {
    title: 'Eletrocatalisadores para Células a Combustível',
    description: 'Desenvolvimento de catalisadores suportados em carbono (grafeno, nanotubos, etc.) para oxidação de H₂, metanol e etanol em sistemas de baixa temperatura.',
    imageUrl: 'https://picsum.photos/seed/fuelcells/400/300',
  },
  {
    title: 'Promoção da Resiliência Energética e Ambiental nas Cidades',
    description: 'Projeto internacional com desenvolvimento de tetos frios e nano-revestimentos para captura de CO₂ e produção de H₂ visando mitigar impactos urbanos.',
    imageUrl: 'https://picsum.photos/seed/cityresilience/400/300',
  },
  {
    title: 'Energia e Sustentabilidade: Abordagens Multidisciplinares',
    description: 'Estudos em produção de hidrogênio, biogás e descarbonização, integrando ciência dos materiais, economia e sustentabilidade energética.',
    imageUrl: 'https://picsum.photos/seed/energysustainability/400/300',
  },
  {
    title: 'Sistemas Cerâmicos com Estrutura Perovskita',
    description: 'Síntese e caracterização de materiais com estrutura perovskita para uso em dispositivos eletroquímicos e eletroeletrônicos.',
    imageUrl: 'https://picsum.photos/seed/perovskite/400/300',
  },
  {
    title: 'Ampliação da Estrutura Multiusuária em Energia e Meio Ambiente',
    description: 'Projeto de aquisição de grandes equipamentos para apoiar pesquisas interdisciplinares nas áreas de energia, biotecnologia e meio ambiente.',
    imageUrl: 'https://picsum.photos/seed/labstructure/400/300',
  },
];

export const PUBLICATIONS: Publication[] = [
  {
    title: "Influence of the sintering temperature on ferroelectric properties of potassium-sodium niobate piezoelectric ceramics",
    authors: "Cortés, J. A.; Camargo, J.; Rachia, M. F.; Rubio-Marcos, F.; Ramajo, L.; Castro, M.; Ramírez, M. A.",
    journal: "Journal of Advanced Dielectrics",
    year: 2021,
    doiUrl: "http://dx.doi.org/10.1142/S2010135X21400026"
  },
  {
    title: "Dielectric and non-ohmic analysis of Sr2+ influences on CaCu3Ti4O12-based ceramic composites",
    authors: "Cortés, J. A.; Moreno, H.; Orrego, S.; Bezzon, V. D. N.; Ramírez, M. A.",
    journal: "Materials Research Bulletin",
    year: 2021,
    doiUrl: "https://linkinghub.elsevier.com/retrieve/pii/S002554082031552X"
  },
  {
    title: "Brazil’s New Gas Law: Analysis, Implications, and Remuneration of Gas Processing Plants",
    authors: "Junior, Samuel M. A.; Padilha, Janine C.; Arrieche, Leonardo",
    journal: "International Journal of Energy Economics and Policy",
    year: 2024,
    doiUrl: "http://dx.doi.org/10.32479/ijeep.15127"
  },
  {
    title: "Distribuição espacial e deslocamento dos alunos na Amazônia Legal",
    authors: "Cerri, Fabiano N.; Souza, Sophia A. A.; Matiello, S.; Padilha, Janine C.; Zara, K. R. F.",
    journal: "Observatorio de la Economía Latinoamericana",
    year: 2024,
    doiUrl: "http://dx.doi.org/10.55905/oelv22n1-050"
  },
  {
    title: "Sawdust and chicken fat briquettes as alternative solid fuel",
    authors: "Imberti, Rodrigo M.; Padilha, Janine C.; Da Silva Arrieche, Leonardo",
    journal: "Renewable Energy",
    year: 2024,
    doiUrl: "http://dx.doi.org/10.1016/j.renene.2024.120638"
  },
  {
    title: "Biomethane and CO2 recovery from brewers’ spent grains",
    authors: "Lins, L.; Furtado, A. C.; Martinez, D. G.; Padilha, Janine C.",
    journal: "Biocatalysis and Agricultural Biotechnology",
    year: 2023,
    doiUrl: "http://dx.doi.org/10.1016/j.bcab.2022.102579"
  },
  {
    title: "Electrical response in zinc oxide films sprayed from ethanolic salts",
    authors: "Ramajo, L. A.; Smirnoff, D.; Schipani, F.; Martín, R.; Villegas, E.; Sousa Góes, M.; Martín, F.; Parra, R.",
    journal: "Materials Research Bulletin",
    year: 2025,
    doiUrl: "http://dx.doi.org/10.1016/j.materresbull.2024.113174"
  },
  {
    title: "Effect of Eu2O3 on structural and luminescence properties",
    authors: "Faleiro, J. H.; Santos, K. E. S.; Dantas, N. O.; Goes, M. S.; Ferrari, J. L. et al.",
    journal: "Journal of Luminescence",
    year: 2025,
    doiUrl: "http://dx.doi.org/10.1016/j.jlumin.2025.121348"
  },
  {
    title: "Advances in Layered MX2-Based Materials for Optoelectronics",
    authors: "Pinto, F. M.; Goes, M. S.; La Porta, F. A. et al.",
    journal: "Catalysts",
    year: 2024,
    doiUrl: "http://dx.doi.org/10.3390/catal14060388"
  },
  {
    title: "Emission of TiO2:Y3+ and Eu3+ in water medium under UV",
    authors: "Oliveira, L. S.; Goes, M. S.; Ferrari, J. L. et al.",
    journal: "Journal of Luminescence",
    year: 2023,
    doiUrl: "http://dx.doi.org/10.1016/j.jlumin.2022.119639"
  }
];


export const LABS: Lab[] = [
    { 
        name: 'Síntese e Caracterização de Materiais I (SiCaMat)', 
        imageUrl: '/pictures/sicam.jpg',
        details: (
            <>
                <h4 className="text-md font-semibold text-primary/90 mb-2">Principais Técnicas</h4>
                <ul className="list-disc ml-5 space-y-1 mb-4">
                  <li>Síntese de produtos orgânicos naturais;</li>
                  <li>Síntese de líquidos iônicos;</li>
                  <li>Preparação de eletrodos e eletrólitos para a produção de hidrogênio e célula a combustível;</li>
                  <li>Preparação de materiais semicondutores para dispositivos fotovoltaicos;</li>
                  <li>Estudo de pilhas e baterias;</li>
                  <li>Síntese e obtenção de materiais 2D e nanocompósitos;</li>
                  <li>Esfoliação química por ultrassom e esfoliação mecânica para a obtenção de grafeno e outros materiais bidimensionais;</li>
                </ul>
                <h4 className="text-md font-semibold text-primary/90 mt-4 mb-2">Equipamentos</h4>
                <ul className="list-disc ml-5 space-y-1">
                    <li>Potenciostatos Metrohm Autolab</li>
                </ul>
            </>
        )
    },
    { 
        name: 'Laboratório Interdisciplinar de Ciências Físicas (LICF)', 
        imageUrl: '/pictures/licf.jpg',
        details: (
             <>
                <h4 className="text-md font-semibold text-primary/90 mb-2">Principais Técnicas</h4>
                <ul className="list-disc ml-5 space-y-1 mb-4">
                  <li>Difração de raios X;</li>
                  <li>Radiografia industrial;</li>
                  <li>Microtomografia;</li>
                  <li>Óptica de raios X;</li>
                  <li>Mecânica de superfícies, moagem, fabricação e tratamento térmico de amostras.</li>
                </ul>
                <h4 className="text-md font-semibold text-primary/90 mt-4 mb-2">Equipamentos</h4>
                <ul className="list-disc ml-5 space-y-1">
                    <li>Difratômetro multipropósito Empyrean – PANalytical</li>
                </ul>
            </>
        ),
        schedulingUrl: 'https://sites.google.com/view/agenda-drx-unila',
        schedulingButtonText: 'Agendar DRX'
    },
    { 
        name: 'Laboratório de Microscopia Eletrônica de Varredura (LMEV)', 
        imageUrl: '/pictures/lmev.jpg',
        details: (
            <>
                <h4 className="text-md font-semibold text-primary/90 mb-2">Principais Técnicas</h4>
                <ul className="list-disc ml-5 space-y-1 mb-4">
                  <li>Imagens de alta resolução por detecção de elétrons secundários e elétrons retroespalhados;</li>
                  <li>Imagens por STEM;</li>
                  <li>Análise química por EDS/EDX com mapeamento.</li>
                </ul>
                <h4 className="text-md font-semibold text-primary/90 mt-4 mb-2">Equipamentos</h4>
                <ul className="list-disc ml-5 space-y-1">
                    <li>Microscópio eletrônico de varredura Zeiss EVO-MA10</li>
                </ul>
            </>
        ),
        schedulingUrl: 'https://sites.google.com/view/agenda-mev-unila',
        schedulingButtonText: 'Agendar MEV'
    },
];

export const RECENT_ACTIVITIES: RecentActivity[] = [
  { 
    title: '2º Encontro de Física Aplicada na Tríplice Fronteira',
    date: '04–06 de novembro de 2025',
    location: 'ILACVN - UNILA, Itaipu Parquetec, Foz do Iguaçu, PR',
    details: 'Reuniu pesquisadores da tríplice fronteira (Argentina, Brasil, Paraguai) para consolidar parcerias em Física Aplicada, com apoio do PPGFISA-UNILA.',
    link: 'https://www.even3.com.br/2efisa3f/',
    imageUrl: '/pictures/evento_fronteras.jpg'
  },
  { 
    title: 'Participação no 9° Encuentro de Investigadores',
    date: '2025',
    location: 'Assunção, Paraguai',
    details: 'Hussein Abdul Karim Moussa apresentou resultados de sua dissertação no evento da Sociedade Científica do Paraguai.',
    link: 'https://portal.unila.edu.br/informes/fisica-aplicada-5',
    imageUrl: '/pictures/hussein_evento.jpeg'
  },
  { 
    title: 'Limpeza do Laboratório SICaMat',
    date: '23 de junho de 2025',
    location: 'Laboratório SICaMat – UNILA',
    details: 'Professores do GRIMAF e o grupo do Prof. José Ricardo Salgado organizaram uma limpeza e reestruturação completa do laboratório.',
    imageUrl: '/pictures/limpeza.jpg'
  },
];