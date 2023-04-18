import prisma from "../../../lib/prisma";

export const classesApi = async () => await prisma.class.findMany({});

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }
  const data = await classesApi();

  res.status(200).json(data);
}
