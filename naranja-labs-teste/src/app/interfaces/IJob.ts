export interface IJob {
    id: number;
    job: string;
    level: 'Junior' | 'Mid-Level' | 'Senior'; 
    status: 'open' | 'closed';
  };