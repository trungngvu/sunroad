import prisma from "../../../lib/prisma";

export const subjectApi = async (id) =>
  await prisma.subject.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      classes: true,
    },
  });

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }
  const { id } = req.query;
  const data = subjectApi(id);
  res.status(200).json(data);
}
