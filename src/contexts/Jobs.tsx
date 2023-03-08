import { createContext, ReactNode, useEffect, useState } from 'react';
import { useQuery } from 'react-query';

interface JobProviderProps {
  children: ReactNode;
}

export interface Job {
  _id: string;
  title: string;
  companyName: string;
  companyImage: string;
  citys: string[];
  tags: string[];
  createdAt: Date;
  howToApply: string;
  description: string[];
  fulltime: boolean;
  __v: number;
}

export interface IJobContext {
  setJobs: React.Dispatch<React.SetStateAction<Job[]>>;
  jobs: Job[];
}

export const JobContext = createContext<IJobContext | null>(null);

export default function JobProvider({ children }: JobProviderProps) {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    (async () => {
      const result = await fetch(
        'https://wiliam-melo-job-api.up.railway.app/jobs/',
      ).then((res) => res.json());
      setJobs(result);
    })();
  }, []);
  return (
    <JobContext.Provider value={{ jobs, setJobs }}>
      {children}
    </JobContext.Provider>
  );
}
