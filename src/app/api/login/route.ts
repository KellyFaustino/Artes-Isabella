import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET as string;

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (!SECRET) {
    throw new Error("JWT_SECRET não definido");
  }

  if (email === "kellykelinha_86@hotmail.com" && password === "123") {
    const token = jwt.sign({ email }, SECRET, { expiresIn: "1h" });
    return Response.json({ token });
  }

  return new Response("Credenciais inválidas", { status: 401 });
}
