import { NextResponse } from "next/server";

export const GET = (request, { params }) => {
  return NextResponse.json({ message: "Hello World", data: {id:params.id }});
};
