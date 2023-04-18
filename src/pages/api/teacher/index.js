import prisma from "../../../lib/prisma";

export const teachersApi = async () =>
  await prisma.teacher.findMany({
    include: {
      subjects: true,
    },
  });

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }
  const data = await teachersApi();
  res.status(200).json(teachers);
}
