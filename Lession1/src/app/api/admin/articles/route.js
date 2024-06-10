import { NextResponse } from "next/server";
import { articles } from "../../db/model";

const GET = async (req) => {
  const page = Number(req.nextUrl.searchParams.get("page") || 1);
  const pageSize = Number(req.nextUrl.searchParams.get("pageSize") || 10);
  const data = await articles.findAll({ offset: (page - 1) * pageSize, limit: pageSize });
  console.log("===========");
  // console.log(data);
  const convert_data = data.map((item) => ({ id: item.id, title: item.title, content: item.content, created_at: item.created_at }));
  console.log(convert_data);
  return NextResponse.json({ code: 200, data: convert_data });
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
