import { NextResponse } from "next/server";
import { articles } from "../../../../db/model";

const DELETE = async (req, { params }) => {
  const { id } = params;
  const result = await articles.destroy({ where: { id: id } });
  console.log("result ----------");
  console.log(result);
  return NextResponse.json({ code: 200, msg: "success delete article", result: JSON.stringify(result) });
};

export { DELETE };
