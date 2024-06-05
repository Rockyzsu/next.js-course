const { NextResponse } = require("next/server");

export const POST=(request)=> {
  console.log("call me login");
  return NextResponse.json({ status: 200, msg: "Login success" },{headers:{'Set-Cookie':'token=12345678;Path=/'}});
}
