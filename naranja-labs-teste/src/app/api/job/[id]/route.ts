import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { IJob } from "@/app/interfaces/IJob";
import { IParams } from "@/app/interfaces/IParams";

export async function GET(req: NextRequest, { params }: IParams) {
  const dataPath = path.join(
    __dirname,
    "..",
    "..",
    "..",
    "..",
    "..",
    "..",
    "src",
    "app",
    "database",
    "jobs.ts"
  );
  const id = parseInt(params.id);
  const allJobsDataString = fs
    .readFileSync(dataPath, "utf-8")
    .replace(/^const jobs = |;$/g, "");
  const allJobsData: IJob[] = eval(allJobsDataString);

  if (params.id) {
    const id = parseInt(params.id);
    const [allJobsDataFilteredById] = allJobsData.filter(
      (job: IJob) => job.id === id
    );

    if (!allJobsDataFilteredById) {
      return NextResponse.json(
        { error: `No job found with id ${id}` },
        { status: 404 }
      );
    };

    return NextResponse.json({ job: allJobsDataFilteredById });
  }
}
