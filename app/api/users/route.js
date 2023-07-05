import connectMongo from "@/database/conn";
// import getUsers from "@/database/controller";
import Users from "@/model/user";
import { NextResponse, NextRequest } from "next/server";

export async function GET() {
  connectMongo()
    .then(() => {
      console.log("connection runs");
    })
    .catch(() =>
      NextResponse.json({ error: "Error in the connection" }, { status: 405 })
    );
  try {
    // const users = await fetch("https://jsonplaceholder.typicode.com/users");
    // const data1 = await users.json();
    // console.log(data1, "test users------");
    const datatest = await Users.find();
    // const data = await datatest.json();
    // console.log(data, "test usersmodel------");
    if (!datatest)
      return NextResponse.json({ error: "No users found" }, { status: 405 });
    return NextResponse.json(datatest, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error in data fetching" },
      { status: 404 }
    );
  }
}

export async function POST(request) {
  connectMongo()
    .then(() => {
      console.log("connection runs");
    })
    .catch(() =>
      NextResponse.json({ error: "Error in the connection" }, { status: 405 })
    );
  console.log(
    request,
    "request---------",
    NextRequest.bind,
    "response---------"
  );
  try {
    const formData = {
      name: "Prachi Kwatra",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      email: "deanlych@gmail.com",
      salary: "25000",
      date: "2022-06-08",
      status: "Active",
    };
    Users.create(formData);
    return NextResponse.json({ data: "posted success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 404 });
  }
  // return NextResponse.json({ name: "POST Request" });
}

export async function PUT() {
  connectMongo().catch(() =>
    NextResponse.json({ error: "Error in the connection" }, { status: 405 })
  );
  return NextResponse.json({ name: "PUT Request" });
}

export async function DELETE() {
  connectMongo().catch(() =>
    NextResponse.json({ error: "Error in the connection" }, { status: 405 })
  );
  return NextResponse.json({ name: "DELETE Request" });
}
