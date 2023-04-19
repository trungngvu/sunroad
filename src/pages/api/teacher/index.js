import prisma from "../../../lib/prisma";

export const teachersApi = async () =>
  await prisma.teacher.findMany({
    include: {
      subjects: true,
    },
  });

export const addTeacherApi = async (name, description, subjects) =>
  await prisma.teacher.create({
    data: {
      name,
      description,
      subjects: { connect: subjects },
    },
  });

export default async function handler(req, res) {
  if (req.method === "GET") {
    const data = await teachersApi();
    res.status(200).json(data);
    return;
  }
  res.status(405).json({ message: "Method not allowed" });
}
