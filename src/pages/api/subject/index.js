import prisma from "../../../lib/prisma";

export const subjectsApi = async () =>
  await prisma.subject.findMany({
    include: {
      classes: true,
    },
  });

export const addSubjectApi = async (title, description, classes, teachers) =>
  await prisma.subject.create({
    data: {
      title,
      description,
      classes: { connect: classes },
      teachers: { connect: teachers },
    },
  });

export default async function handler(req, res) {
  if (req.method === "GET") {
    const data = await subjectsApi();
    res.status(200).json(data);
    return;
  }
  if (req.method === "POST") {
    const { title, description, classes, teachers } = req.body;
    const data = await addSubjectApi(title, description, classes, teachers);
    res.status(200).json(data);
    return;
  }
  res.status(405).json({ message: "Method not allowed" });
}
