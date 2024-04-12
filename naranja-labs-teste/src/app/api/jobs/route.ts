import { NextRequest, NextResponse } from "next/server";
import fs from 'fs';
import path from 'path';
import { IJob } from "@/app/interfaces/IJob";


export async function GET(req: NextRequest, res: NextResponse) {

  const dataPath = path.join(__dirname, '..', '..', '..', '..', '..', 'src', 'app', 'database', 'jobs.ts');
  const allJobsDataString = fs.readFileSync(dataPath, 'utf-8').replace(/^const jobs = |;$/g, '');
  const allJobsData:IJob[] = eval(allJobsDataString);

  const { searchParams } = new URL(req.url);
  const level = searchParams.get("level");

  if(level) {
    const filteredJobsDataByLevel = allJobsData.filter((job:IJob) => {
      return job.level.toLowerCase() === level.toLowerCase();
    });
    if(filteredJobsDataByLevel.length === 0) {
      return NextResponse.json({mesage: `We have no currently jobs for level ${level}`})
    }
    return NextResponse.json({jobs: filteredJobsDataByLevel})
  }

  
  return NextResponse.json({ jobs: allJobsData});
}