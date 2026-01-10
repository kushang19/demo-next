import { NextRequest } from "next/server";
import { users } from "../route";

export async function GET(
  _request: NextRequest,
  context: { params: { id: string } }
) {
    const {id} = context.params;
    const user = users.find(user => user.id === +id)

    return Response.json(user);
}
