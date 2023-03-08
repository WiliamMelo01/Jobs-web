import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { IJobContext, JobContext } from './Jobs';

interface ICityProvider {
  children: ReactNode;
}

export interface ICity {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
}

export const CityContext = createContext<ICity | null>(null);

export default function CityProvider({ children }: ICityProvider) {
  const [city, setCity] = useState('');

  const { setJobs } = useContext(JobContext) as IJobContext;

  useEffect(() => {
    (async () => {
      if (city) {
        const response = await fetch(
          `https://wiliam-melo-job-api.up.railway.app/jobs/city/${city}`,
        );
        const data = await response.json();

        console.log(data);
      }
    })();
  }, [city]);

  return (
    <CityContext.Provider value={{ city, setCity }}>
      {children}
    </CityContext.Provider>
  );
}
