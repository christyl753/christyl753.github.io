export interface Competency {
  id: string;
  symbol: string;
  title: string;
  keywords: string;
  description: string;
}

export interface WorkflowStep {
  num: string;
  title: string;
  description: string;
}

export interface TechnicalChoice {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  number: string;
  slugPath: string;
  categoryLabel: string;
  cardCategory: string;
  title: string;
  heroTitle: string;
  subtitle: string;
  cardSummary: string;
  stackLine: string;
  repoUrl: string;
  visualType: "alyx" | "arduino" | "grid" | "terminal";
  codeHeader: string;
  codeSnippet: string;
  ideaParagraph: string;
  challenge: string;
  pillars: string[];
  workflowTitle: string;
  workflowSteps: WorkflowStep[];
  workflowFootnote: string;
  choices: TechnicalChoice[];
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
  shortHandle: "ct_",
  fullName: "Christ Tiantse",
  legalName: "Christ Aimant Tiantse Takamgno",
  role: "Étudiant en génie informatique · UQO, Gatineau.",
  heroHeadline: "Du silicium à l’IA locale.",
  heroStack: "IA Locale · Linux & Embarqué · C/C++ · SQL & API",
  location: "Gatineau, QC",
  availability: "Disponible pour un stage",
  aboutBio:
    "Étudiant en génie informatique à l'Université du Québec en Outaouais (UQO), je m'implique activement dans la vie étudiante comme membre exécutif (Affaires internes) et gestionnaire du site web et de l'infrastructure au Conseil des étudiants en génie. J'ai également participé aux Jeux de Génie 2026. Mes passions : les systèmes d'exploitation, les systèmes embarqués et le basket.",
  email: "tiac02@uqo.ca",
  linkedin: "https://www.linkedin.com/in/tiantse-christ-3a71062b8",
  github: "https://github.com/christyl753",
  languages: "Français (courant) · Anglais (intermédiaire B1)",
};

export const COMPETENCIES: Competency[] = [
  {
    id: "comp-ai",
    symbol: "AI",
    title: "IA Locale & Python",
    keywords: "Ollama · Gemma · tool calling",
    description:
      "Assistants hors ligne en Python avec modèles de langage locaux (Ollama, LM Studio, Gemma) et appel d'outils sécurisé.",
  },
  {
    id: "comp-os",
    symbol: "OS",
    title: "Linux & Embarqué",
    keywords: "Arch · Arduino · ARM / AVR",
    description:
      "Systèmes Arch et Fedora/Nobara, pilotes clavier 4×4 Arduino, KDE Plasma et chaînes de développement embarqué.",
  },
  {
    id: "comp-web",
    symbol: "SQL",
    title: "Web, API & Modélisation",
    keywords: "Node.js · API REST · UML",
    description:
      "Bases en front-end (HTML, CSS, JS) et back-end (Node.js, API REST, SQL) ainsi que modélisation UML sous Modelio.",
  },
  {
    id: "comp-gpu",
    symbol: "{ }",
    title: "C / C++, Java & GPU",
    keywords: "Pointeurs · patrons · notions CUDA",
    description:
      "Programmation C/C++ et Java, notions d'architecture des GPU NVIDIA et apprentissage continu autour de CUDA.",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "alyx",
    number: "01",
    slugPath: "~/portfolio/projet_01",
    categoryLabel: "PROJET 01 / IA LOCALE",
    cardCategory: "IA LOCALE / PYTHON / .NET 8",
    title: "Alyx — Assistant IA hors ligne",
    heroTitle: "Alyx, assistant IA hors ligne.",
    subtitle:
      "Orchestrer des modèles locaux et piloter son ordinateur en toute confidentialité.",
    cardSummary:
      "Assistant de bureau Windows/Linux avec backend Python, interface .NET 8, mode vocal et appel d'outils sécurisé.",
    stackLine: "PYTHON · .NET 8 · OLLAMA · LM STUDIO · GEMMA",
    repoUrl: "https://github.com/christyl753/Alyx",
    visualType: "alyx",
    codeHeader: "VOIX / TEXTE → PYTHON → .NET 8",
    codeSnippet: `// alyx_agent.py

model = load_local("gemma")
intent = model.call_tool(prompt)

if intent.is_sensitive():
  ask_user_approval(intent)

execute_local(intent)`,
    ideaParagraph:
      "Un assistant de bureau multiplateforme (Windows et Linux) propulsé par un backend Python et une interface .NET 8 qui dialogue avec des modèles locaux (Ollama, LM Studio, Gemma) pour gérer des fichiers, ouvrir des applications et répondre en mode vocal.",
    challenge:
      "Exécuter des actions système concrètes via l'appel d'outils (tool calling) sans jamais compromettre le contrôle ni la confidentialité des données.",
    pillars: [
      "01 / Inférence 100 % locale",
      "02 / Appel d'outils système",
      "03 / Validation utilisateur",
    ],
    workflowTitle: "De la commande à l'action sécurisée.",
    workflowSteps: [
      {
        num: "01",
        title: "Capturer",
        description:
          "Recevoir la requête par texte ou via le mode vocal dans l'interface .NET 8.",
      },
      {
        num: "02",
        title: "Interpréter",
        description:
          "Transmettre le contexte au modèle local (Ollama, LM Studio ou Gemma).",
      },
      {
        num: "03",
        title: "Planifier",
        description:
          "Identifier l'outil système requis (fichiers, lancement ou fermeture d'app).",
      },
      {
        num: "04",
        title: "Confirmer",
        description:
          "Demander l'accord explicite de l'utilisateur avant toute action sensible.",
      },
      {
        num: "05",
        title: "Exécuter",
        description:
          "Appliquer l'action en local et retourner le résultat sans appel cloud.",
      },
    ],
    workflowFootnote:
      "✓ Toutes les inférences et opérations restent sur la machine de l'utilisateur.",
    choices: [
      {
        title: "Séparation Python / .NET 8",
        description:
          "Découpler l'orchestration IA en Python de l'interface de bureau .NET 8 pour faciliter la portabilité Windows et Linux.",
      },
      {
        title: "Garde-fou avant action sensible",
        description:
          "Toute opération critique sur les fichiers ou applications passe par une confirmation manuelle avant exécution.",
      },
    ],
  },
  {
    id: "pilote-linux",
    number: "02",
    slugPath: "~/portfolio/projet_02",
    categoryLabel: "PROJET 02 / EMBARQUÉ & LINUX",
    cardCategory: "EMBARQUÉ / C / ARCH LINUX",
    title: "Pilote 4×4 Arduino & Linux perso",
    heroTitle: "Clavier 4×4 & Linux personnalisé.",
    subtitle:
      "Relier un clavier matriciel Arduino au système et bâtir un environnement Arch Linux embarqué.",
    cardSummary:
      "Pilote Linux pour clavier 4×4 Arduino et distribution Arch Linux (KDE Plasma, PyQt6, chaînes ARM/AVR) testée en VM.",
    stackLine: "C · ARCH LINUX · ARDUINO · PYQT6 · ARM / AVR",
    repoUrl: "https://github.com/christyl753",
    visualType: "arduino",
    codeHeader: "ARDUINO 4×4 → SÉRIE → LINUX",
    codeSnippet: `// keypad_driver.c

key = scan_matrix_4x4();
if (debounce_ok(key)) {
  serial_send(key_code);
}

// host_linux: map_to_input(key_code);`,
    ideaParagraph:
      "D'un côté, un pilote Linux permettant d'écrire directement sur ordinateur à l'aide d'un clavier matriciel 4×4 relié à un Arduino. De l'autre, un système Linux personnalisé sur base Arch Linux doté de KDE Plasma, d'une application d'accueil en Python (PyQt6) et des chaînes ARM/AVR.",
    challenge:
      "Traduire de façon fiable chaque frappe matérielle sans rebond et assembler un environnement Linux embarqué reproductible en machine virtuelle.",
    pillars: [
      "01 / Balayage matriciel 4×4",
      "02 / Mappage d'entrée Linux",
      "03 / Environnement Arch & PyQt6",
    ],
    workflowTitle: "De la touche physique au système.",
    workflowSteps: [
      {
        num: "01",
        title: "Balayer",
        description:
          "Lire les lignes et colonnes de la matrice 4×4 sur le microcontrôleur Arduino.",
      },
      {
        num: "02",
        title: "Filtrer",
        description:
          "Éliminer les rebonds mécaniques pour isoler chaque pression de touche.",
      },
      {
        num: "03",
        title: "Transmettre",
        description:
          "Envoyer le code de touche vers l'hôte Linux via la liaison série.",
      },
      {
        num: "04",
        title: "Traduire",
        description:
          "Convertir le signal reçu en événement clavier reconnu par le système.",
      },
      {
        num: "05",
        title: "Tester en VM",
        description:
          "Valider le tout dans l'environnement Arch Linux (KDE Plasma, PyQt6, ARM/AVR).",
      },
    ],
    workflowFootnote:
      "↻ Environnement embarqué complet validé en machine virtuelle avant déploiement matériel.",
    choices: [
      {
        title: "Base Arch Linux modulable",
        description:
          "Construire le système paquet par paquet avec KDE Plasma et uniquement les chaînes ARM, AVR et Arduino IDE nécessaires.",
      },
      {
        title: "Application d'accueil PyQt6",
        description:
          "Offrir un point d'entrée clair en Python pour vérifier rapidement les outils de développement dès le démarrage.",
      },
    ],
  },
  {
    id: "sql-systemes",
    number: "03",
    slugPath: "~/portfolio/projet_03",
    categoryLabel: "PROJET 03 / WEB, API & SQL",
    cardCategory: "WEB / NODE.JS / SQL / UML",
    title: "TicketPulse, Gestion de Stock & SQL",
    heroTitle: "API REST, SQL & modélisation UML.",
    subtitle:
      "Structurer des données relationnelles, des routes Node.js et des architectures logicielles claires.",
    cardSummary:
      "Billetterie temps réel TicketPulse (GEN1423), site de gestion de stock avec API REST Node.js et diagrammes UML sous Modelio.",
    stackLine: "SQL · NODE.JS · API REST · HTML / CSS / JS · UML",
    repoUrl: "https://github.com/christyl753",
    visualType: "grid",
    codeHeader: "CLIENT → API REST → SQL",
    codeSnippet: `// routes/stock.js

app.get("/api/items", async (req, res) => {
  const rows = await db.query(
    "SELECT id, nom, qte FROM stock"
  );
  res.json(rows);
});`,
    ideaParagraph:
      "Un ensemble de projets académiques à l'UQO combinant bases front-end et back-end : la plateforme de billetterie en temps réel TicketPulse (projet d'équipe GEN1423), un site de gestion de stock avec API REST en Node.js, et la modélisation UML sous Modelio (réservation d'hôtel, transport en commun).",
    challenge:
      "Assurer la cohérence entre le modèle conceptuel (UML), les requêtes SQL et les routes exposées par l'API REST.",
    pillars: [
      "01 / Modéliser en UML",
      "02 / Structurer les routes REST",
      "03 / Fiabiliser les données SQL",
    ],
    workflowTitle: "Du diagramme à l'API fonctionnelle.",
    workflowSteps: [
      {
        num: "01",
        title: "Modéliser",
        description:
          "Concevoir les cas d'utilisation, classes et séquences dans Modelio.",
      },
      {
        num: "02",
        title: "Normaliser",
        description:
          "Traduire les entités en tables relationnelles SQL cohérentes.",
      },
      {
        num: "03",
        title: "Exposer",
        description:
          "Créer et configurer les routes REST en Node.js pour le stock et les billets.",
      },
      {
        num: "04",
        title: "Connecter",
        description:
          "Relier l'interface HTML/CSS/JS aux points de terminaison de l'API.",
      },
      {
        num: "05",
        title: "Vérifier",
        description:
          "Tester les parcours utilisateurs et la validité des réponses en équipe.",
      },
    ],
    workflowFootnote:
      "✓ Travail en équipe structuré avec Git, GitHub et revues de conception UML.",
    choices: [
      {
        title: "Conception UML avant le code",
        description:
          "Poser les diagrammes dans Modelio réduit les incohérences lors du travail collaboratif sur TicketPulse.",
      },
      {
        title: "API REST lisible en Node.js",
        description:
          "Organiser les routes par ressource pour séparer proprement la logique serveur de l'interface web.",
      },
    ],
  },
  {
    id: "cpp-ingenierie",
    number: "04",
    slugPath: "~/portfolio/projet_04",
    categoryLabel: "PROJET 04 / SYSTÈMES & BAS-NIVEAU",
    cardCategory: "SYSTÈMES / C / C++ / JAVA",
    title: "Ingénierie C / C++, Java & GPU",
    heroTitle: "Fondamentaux C/C++ & notions GPU.",
    subtitle:
      "Maîtriser la mémoire, les patrons de conception et explorer l'architecture des GPU NVIDIA.",
    cardSummary:
      "Structures de données, gestion mémoire en C/C++, conception orientée objet en Java et apprentissage continu autour de CUDA.",
    stackLine: "C · C++ · JAVA · GIT · ARCHITECTURE GPU NVIDIA",
    repoUrl: "https://github.com/christyl753",
    visualType: "terminal",
    codeHeader: "MÉMOIRE → STRUCTURES → CONCEPTION",
    codeSnippet: `// core_module.cpp

struct Buffer {
  size_t size;
  int* data;
};

// Gestion rigoureuse mémoire + patrons OO
// Exploration continue : architecture GPU / CUDA`,
    ideaParagraph:
      "Un socle de réalisations en C, C++ et Java centré sur la gestion fine de la mémoire, les structures de données et les patrons de conception, complété par des notions d'architecture des GPU NVIDIA et un apprentissage actif de CUDA.",
    challenge:
      "Écrire un code bas-niveau sûr et maintenable tout en construisant progressivement une compréhension solide du calcul parallèle sur GPU.",
    pillars: [
      "01 / Gestion mémoire C/C++",
      "02 / Patrons de conception Java",
      "03 / Apprentissage GPU / CUDA",
    ],
    workflowTitle: "De la logique au code maîtrisé.",
    workflowSteps: [
      {
        num: "01",
        title: "Concevoir",
        description:
          "Choisir les structures de données et patrons de conception adaptés.",
      },
      {
        num: "02",
        title: "Implémenter",
        description:
          "Développer les modules en C, C++ ou Java avec un découpage clair.",
      },
      {
        num: "03",
        title: "Contrôler",
        description:
          "Vérifier l'allocation, la libération mémoire et les cas limites.",
      },
      {
        num: "04",
        title: "Versionner",
        description:
          "Suivre les évolutions et organiser le dépôt avec Git et GitHub.",
      },
      {
        num: "05",
        title: "Approfondir",
        description:
          "Poursuivre l'exploration de l'architecture des GPU NVIDIA et de CUDA.",
      },
    ],
    workflowFootnote:
      "✓ Approche pragmatique : valider la justesse du programme avant toute optimisation.",
    choices: [
      {
        title: "Rigueur mémoire en C/C++",
        description:
          "Privilégier des responsabilités claires sur la durée de vie des données pour éviter les comportements indéfinis.",
      },
      {
        title: "Montée en compétence GPU progressive",
        description:
          "S'appuyer sur les bases d'architecture matérielle NVIDIA pour aborder le parallélisme CUDA étape par étape.",
      },
    ],
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
      "Configuration et gestion du nom de domaine de l'association et des paramètres DNS. Déploiement des outils en ligne, calendriers partagés (Outlook) et soutien technique.",
    tag: "INFRASTRUCTURE",
  },
  {
    id: "tl-ceg-exec",
    period: "2026 — PRÉSENT",
    role: "Membre exécutif (Affaires internes)",
    organization: "Conseil des étudiants en génie (CEG), UQO",
    location: "Gatineau, QC",
    impact:
      "Accueil et orientation des étudiants, suivi des demandes et coordination inter-départements pour les activités de l'association.",
    tag: "LEADERSHIP",
  },
  {
    id: "tl-jdg",
    period: "2026",
    role: "Participant — Délégation UQO",
    organization: "Jeux de Génie 2026",
    location: "Québec",
    impact:
      "Résolution de défis d'ingénierie chronométrés en équipe multidisciplinaire sous contrainte technique.",
    tag: "COMPÉTITION",
  },
  {
    id: "tl-uqo",
    period: "EN COURS",
    role: "Baccalauréat en génie informatique",
    organization: "Université du Québec en Outaouais (UQO)",
    location: "Gatineau, QC",
    impact:
      "Systèmes d'exploitation, IA locale, génie logiciel, bases de données SQL et architecture matérielle.",
    tag: "FORMATION",
  },
  {
    id: "tl-saleka",
    period: "JUIN 2023 — JUILL. 2025",
    role: "Stage en développement web",
    organization: "Saleka",
    location: "Yaoundé",
    impact:
      "Conception de sites web avec des systèmes de gestion de contenu (CMS) durant les vacances scolaires.",
    tag: "EXPÉRIENCE",
  },
];
