import { NextResponse } from "next/server";
import { articles } from "../../db/model";

const GET = async () => {
  const data = await articles.findAll({});
  console.log('===========')
  console.log(data);

  return NextResponse.json({ code: 200, data: data });
};

const POST = async (req) => {
  let body_data = await req.json();
  console.log(body_data);
  body_data["created_at"] = new Date().toISOString();
  const result = await articles.create(body_data);
  console.log(result);
  return NextResponse.json({ code: 200, data: result });
};
export { GET, POST };
