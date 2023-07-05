import connectMongo from "@/database/conn";
import { NextResponse, NextRequest } from "next/server";

export async function GET() {
  connectMongo()
    .then()
    .catch(() =>
      NextResponse.json({ error: "Error in the connection" }, { status: 405 })
    );
  try {
    return NextResponse.json({ test: "test user" });
  } catch (error) {}
}
