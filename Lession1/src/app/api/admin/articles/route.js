import { NextResponse } from "next/server";
import { articles } from "../../db/model";

const GET = async () => {
  const data = await articles.findAll({});
  console.log(data);
  return NextResponse.json({ code: 200, data: data });
};

const POST = async(req) => {
    const result = await articles.create(req.json())
  return NextResponse.json({ code: 200, data: result });
};
export { GET, POST };
