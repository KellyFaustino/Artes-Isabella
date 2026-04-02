import artigos from "@/data/artigos.json";

export async function GET() {
  return Response.json(artigos);
}
