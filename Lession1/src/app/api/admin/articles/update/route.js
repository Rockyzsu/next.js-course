import { NextResponse } from "next/server";
import { articles } from "../../../db/model";

const POST = async (req) => {
  let body_data = await req.json();
  console.log("start -----");
  console.log(body_data);
  console.log("end -----");

  const result = await articles.update({ title: body_data.title, content: body_data.content }, { where: { id: body_data.id } });
  console.log(result);
  return NextResponse.json({ code: 200, data: result });
};
export { POST };
