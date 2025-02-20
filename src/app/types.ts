export interface Project {
    id: number;
    title: string;
    description: string;
    tech: string[];
    show: boolean;
    links: {
      github: string;
      live: {
        url: string;
        show: boolean;
      };
    };
    details: {
      show: boolean;
      description?: string;
      image?: string;
    };
  }
  