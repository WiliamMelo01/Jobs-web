import React from "react";
import Heading from "../components/Heading";
import JobCard from "../components/JobCard";
import SearchArea from "../components/SearchArea";
import SearchConfig from "../components/SearchConfig";
import { useQuery } from "react-query";

interface Job {
  _id: string;
  title: string;
  companyName: string;
  companyImage: string;
  citys: string[];
  tags: string[];
  createdAt: string;
  howToApply: string;
  description: string[];
  fulltime: boolean;
  __v: number;
}

export default function Home() {
  const { isLoading, error, data } = useQuery<Job[]>("repoData", () =>
    fetch("https://wiliam-melo-job-api.up.railway.app/jobs/").then((res) =>
      res.json()
    )
  );

  return (
    <div className="px-3 min-[768px]:px-[30px] min-[1024px]:px-[80px] min-[1440px]:px-[150px] min-[1650px]:px-[200px]">
      <Heading />
      <SearchArea />
      <div className="flex flex-col min-[768px]:flex-row min-[768px]:justify-between">
        <SearchConfig />
        <div className="mt-[35px] flex flex-col gap-[23px] min-[768px]:w-[60%]">
          {data?.map((job) => {
            return (
              <JobCard
                imgURL={job.companyImage}
                companyName={job.companyName}
                createdAt={new Date(job.createdAt)}
                jobTitle={job.title}
                location={job.citys}
                fulltime={job.fulltime}
                description={job.description}
                howToApply={job.howToApply}
                key={job._id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
