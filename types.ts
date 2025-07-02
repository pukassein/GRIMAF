
export interface Member {
  name: string;
  imageUrl: string;
  isProfessor: boolean;
  lattesUrl?: string;
  details?: React.ReactNode;
}

export interface Student {
  name: string;
  level: 'phd-postdoc' | 'masters' | 'undergraduate';
  project: string;
  startYear: number;
  advisor: string;
  coAdvisor?: string;
  isPostdoc?: boolean;
}

export interface ResearchProject {
  title: string;
  description: string;
  imageUrl: string;
  details?: React.ReactNode;
}

export interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: number;
  doiUrl?: string;
}

export interface Lab {
    name: string;
    imageUrl: string;
    details: React.ReactNode;
    schedulingUrl?: string;
    schedulingButtonText?: string;
}

export interface ResearchArea {
  name: string;
  category: 'core' | 'application' | 'methodology';
}

export interface ModalData {
    title: string;
    content: React.ReactNode;
    image?: string;
}

export interface PeriodicElement {
  symbol: string;
  name: string;
  atomicMass: number;
}

export interface RecentActivity {
  title: string;
  date: string;
  location: string;
  details: string;
  link?: string;
  imageUrl: string;
}
