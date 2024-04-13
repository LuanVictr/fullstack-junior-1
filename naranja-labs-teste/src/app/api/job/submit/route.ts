import { NextRequest, NextResponse } from "next/server";
import { ICandidate } from "@/app/interfaces/ICandidate";

function validateBody(body: ICandidate) {
  
  if (!body.age) {
    return "age";
  }

  if (!body.city) {
    return "city";
  }

  if (!body.name) {
    return "name";
  }

  if (!body.phone) {
    return "phone";
  }

  if (!body.state) {
    return "state";
  }

  return false;
}

export async function POST(req: NextRequest) {
  try {
    const candidate: ICandidate = await req.json();

    if (candidate) {
      if (validateBody(candidate) !== false) {
        return NextResponse.json(
          { error: `Missing candidate's ${validateBody(candidate)} info` },
          { status: 422 }
        );
      }
      validateBody(candidate);
      return NextResponse.json({
        message: `Thank you for your application, ${candidate.name}`,
      });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Missing candidate's data from body" },
      { status: 400 }
    );
  }
}