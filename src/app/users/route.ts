import { headers } from "next/headers";

export const users = [
    {id: 1, name: "Kushang"},
    {id: 2, name: "Atul"},
    {id: 3, name: "Ganesh"},
    {id: 4, name: "Vishal"},
]

export async function GET() {
    return Response.json(users)
}
export async function POST(request: Request) {
    const user = await request.json();
    const newUser = {
        id: users.length + 1,
        name: user.name
    };
    users.push(newUser)

    return new Response(JSON.stringify(newUser),{
        headers: {"Content-Type": "application/json"},
        status: 201
    }
)}