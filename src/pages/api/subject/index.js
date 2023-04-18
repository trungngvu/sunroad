import prisma from "../../../lib/prisma";

export const subjectsApi = async () =>
  await prisma.subject.findMany({
    include: {
      classes: true,
    },
  });

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }
  const data = await subjectsApi();
  res.status(200).json(data);
}
