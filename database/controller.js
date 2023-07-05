/** Controller */

import Users from "@/model/user";
import { NextResponse } from "next/server";

export async function getUsers() {
  try {
    // const users = await Users.find({});
    // if (!users)
    //   return NextResponse.json(
    //     { error: "Error in the connection" },
    //     { status: 405 }
    //   );
    return NextResponse.json({ test: "this is get request" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error While Fetching Data" },
      { status: 404 }
    );
  }
}
