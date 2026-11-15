export interface Competency {
  id: string;
  sku: string;
  monogram: string;
  title: string;
  category: string;
  metric: string;
  description: string;
  icon: "cpu" | "terminal" | "database" | "code";
}

export interface Project {
  id: string;
  code: string;
  sku: string;
  monogram: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  outcome: string;
  stack: string[];
  architecture: string[];
  repoUrl: string;
  icon: "bot" | "keyboard" | "database" | "cpu";
}

export interface TimelineItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  location: string;
  impact: string;
  tag: string;
}

export const PROFILE = {
  fullName: "Christ Tiantse",
  legalName: "Christ Aimant Tiantse Takamgno",
  brandCode: "ATELIER.006",
  role: "Étudiant en génie informatique · IA & Génie Logiciel",
  location: "Gatineau, QC",
  availability: "Disponible pour un stage",
  heroHeadline:
    "Christ Tiantse — Étudiant en informatique passionné par les systèmes embarqués et l’IA appliquée.",
  heroValueProp:
    "Étudiant en génie informatique à l'UQO. Je développe des logiciels et des systèmes (IA locale, Linux, embarqué, web) et je recherche un stage ou un poste en ingénierie.",
  aboutBio:
    "Étudiant en génie informatique à l'Université du Québec en Outaouais (UQO), je m'implique activement dans la vie étudiante comme membre exécutif (Affaires internes) et gestionnaire du site web et de l'infrastructure (ceguqo.ca) au Conseil des étudiants en génie. J'ai également participé aux Jeux de Génie 2026. Mes passions : les systèmes d'exploitation, les systèmes embarqués et le basket.",
  email: "tiac02@uqo.ca",
  secondaryEmail: "tiantsechrist@gmail.com",
  linkedin: "https://www.linkedin.com/in/tiantse-christ-3a71062b8",
  github: "https://github.com/christyl753",
  alyxRepo: "https://github.com/christyl753/Alyx",
  languages: "Français (courant) · Anglais (intermédiaire B1)",
};

export const COMPETENCIES: Competency[] = [
  {
    id: "comp-ai",
    sku: "SKU-01 · IA",
    monogram: "PY",
    title: "IA Locale & Orchestration",
    category: "Ollama · LM Studio · Gemma",
    metric: "Tool Calling",
    description:
      "Développement d'assistants hors ligne en Python avec modèles de langage locaux (Ollama, LM Studio, Gemma) et appel d'outils sécurisé.",
    icon: "cpu",
  },
  {
    id: "comp-linux",
    sku: "SKU-02 · SYS",
    monogram: "LNX",
    title: "Linux & Systèmes Embarqués",
    category: "Arch · Fedora · ARM/AVR",
    metric: "Noyau & VM",
    description:
      "Administration Linux (Arch, Fedora/Nobara), pilotes matériels (clavier 4×4 Arduino), chaînes ARM/AVR et personnalisation KDE Plasma.",
    icon: "terminal",
  },
  {
    id: "comp-sql",
    sku: "SKU-03 · WEB/BDD",
    monogram: "SQL",
    title: "Développement Web, API REST & SQL",
    category: "Node.js · SQL · UML",
    metric: "Web & API",
    description:
      "Bases solides en développement front-end (HTML, CSS, JavaScript) et back-end (Node.js, API REST, SQL), complétées par la modélisation UML sous Modelio.",
    icon: "database",
  },
  {
    id: "comp-cpp",
    sku: "SKU-04 · DEV",
    monogram: "C++",
    title: "Langages C / C++, Java & GPU",
    category: "C · C++ · Java · NVIDIA",
    metric: "Notions GPU",
    description:
      "Programmation système en C/C++, développement orienté objet en Java et notions d'architecture des GPU NVIDIA avec apprentissage continu autour de CUDA.",
    icon: "code",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "alyx",
    code: "PRJ-001",
    sku: "SKU-ALYX-01",
    monogram: "AI",
    title: "Alyx — Assistant de bureau IA hors ligne",
    category: "IA Locale · Python & .NET 8",
    year: "2026",
    summary:
      "Assistant de bureau multiplateforme (Windows et Linux) propulsé par un backend Python et une interface .NET 8, dialoguant avec des modèles locaux sans dépendance cloud.",
    outcome:
      "Ouverture/fermeture d'applications, gestion de fichiers, mode vocal et validation explicite de l'utilisateur avant toute action sensible.",
    stack: ["Python", ".NET 8", "Ollama / LM Studio / Gemma", "Tool Calling"],
    architecture: [
      "Backend Python orchestrant des modèles locaux (Ollama, LM Studio, Gemma) avec appel d'outils.",
      "Interface de bureau .NET 8 compatible Windows et Linux intégrant un mode vocal.",
      "Garde-fou de sécurité demandant systématiquement l'accord de l'utilisateur avant les actions sensibles.",
    ],
    repoUrl: "https://github.com/christyl753/Alyx",
    icon: "bot",
  },
  {
    id: "pilote-linux",
    code: "PRJ-002",
    sku: "SKU-LNX-02",
    monogram: "LNX",
    title: "Pilote Clavier 4×4 Arduino & Linux Personnalisé",
    category: "Systèmes Embarqués & Arch Linux",
    year: "2025–2026",
    summary:
      "Pilote Linux permettant d'écrire avec un clavier matriciel 4×4 Arduino sur ordinateur, complété par un système Arch Linux personnalisé orienté développement embarqué.",
    outcome:
      "Environnement complet testé en machine virtuelle avec bureau KDE Plasma, application d'accueil PyQt6 et chaînes ARM/AVR.",
    stack: ["C", "Arch Linux", "PyQt6", "ARM / AVR · Arduino IDE"],
    architecture: [
      "Interfaçage d'un clavier matriciel 4×4 Arduino vers les entrées clavier sous Linux.",
      "Base Arch Linux avec environnement KDE Plasma et application de bienvenue développée en Python (PyQt6).",
      "Intégration des chaînes de compilation embarquées ARM, AVR et Arduino IDE, validée en machine virtuelle.",
    ],
    repoUrl: "https://github.com/christyl753",
    icon: "keyboard",
  },
  {
    id: "sql-systemes",
    code: "PRJ-003",
    sku: "SKU-SQL-03",
    monogram: "SQL",
    title: "TicketPulse, Gestion de Stock & SQL",
    category: "Architecture Logicielle · SQL & Web",
    year: "2025–2026",
    summary:
      "Plateforme de billetterie en temps réel TicketPulse (projet d'équipe GEN1423), site de gestion de stock avec API REST Node.js et modélisation de systèmes (réservation d'hôtel, transport en commun).",
    outcome:
      "API REST fonctionnelle, routage structuré, requêtes SQL optimisées et diagrammes UML complets réalisés sous Modelio.",
    stack: ["SQL", "Node.js", "API REST", "UML (Modelio)"],
    architecture: [
      "TicketPulse (GEN1423) : conception collaborative d'une plateforme de billetterie en temps réel.",
      "Site de gestion de stock : création et configuration d'une API REST en Node.js avec gestion des routes.",
      "Modélisation complète sous Modelio (diagrammes UML) pour un système de réservation d'hôtel et de navigation pour transport en commun.",
    ],
    repoUrl: "https://github.com/christyl753",
    icon: "database",
  },
  {
    id: "cpp-ingenierie",
    code: "PRJ-004",
    sku: "SKU-CPP-04",
    monogram: "C++",
    title: "Ingénierie Systèmes C / C++ & Java",
    category: "Programmation Bas-Niveau & Conception",
    year: "2024–2026",
    summary:
      "Réalisations académiques et techniques en C, C++ et Java mettant l'accent sur les structures de données, la gestion mémoire et les patrons de conception.",
    outcome:
      "Code modulaire, fiable et documenté, aligné sur les bonnes pratiques du génie logiciel et du développement système.",
    stack: ["C", "C++", "Java", "Git & GitHub"],
    architecture: [
      "Gestion rigoureuse de la mémoire, pointeurs et structures dynamiques en C et C++.",
      "Application des patrons de conception (Design Patterns) et principes orientés objet en Java.",
      "Versionnement collaboratif avec Git et GitHub.",
    ],
    repoUrl: "https://github.com/christyl753",
    icon: "cpu",
  },
];

export const TIMELINE: TimelineItem[] = [
  {
    id: "tl-ceg-infra",
    period: "SEPT. 2026 — PRÉSENT",
    role: "Gestionnaire du site web et de l'infrastructure",
    organization: "Conseil des étudiants en génie (CEG), UQO",
    location: "Gatineau, QC",
    impact:
      "Achat, configuration et gestion du nom de domaine (ceguqo.ca) et des paramètres DNS. Déploiement des outils en ligne, calendriers partagés (Outlook) et soutien technique.",
    tag: "INFRASTRUCTURE",
  },
  {
    id: "tl-ceg-exec",
    period: "2026 — PRÉSENT",
    role: "Membre exécutif (Affaires internes)",
    organization: "Conseil des étudiants en génie (CEG), UQO",
    location: "Gatineau, QC",
    impact:
      "Accueil et orientation des étudiants, suivi des demandes et coordination inter-départements pour l'organisation des activités.",
    tag: "LEADERSHIP",
  },
  {
    id: "tl-jdg",
    period: "2026",
    role: "Participant — Délégation UQO",
    organization: "Jeux de Génie 2026",
    location: "Québec",
    impact:
      "Résolution de défis d'ingénierie chronométrés en équipe multidisciplinaire sous contrainte technique et organisationnelle.",
    tag: "COMPÉTITION",
  },
  {
    id: "tl-uqo",
    period: "EN COURS",
    role: "Baccalauréat en génie informatique",
    organization: "Université du Québec en Outaouais (UQO)",
    location: "Gatineau, QC",
    impact:
      "Formation en systèmes d'exploitation, IA locale, génie logiciel, bases de données et architecture matérielle.",
    tag: "FORMATION",
  },
  {
    id: "tl-saleka",
    period: "JUIN 2023 — JUILL. 2025",
    role: "Stage en développement web",
    organization: "Saleka",
    location: "Yaoundé",
    impact:
      "Conception et mise en ligne de sites web professionnels à l'aide de systèmes de gestion de contenu (CMS) durant les vacances scolaires.",
    tag: "EXPÉRIENCE",
  },
];
