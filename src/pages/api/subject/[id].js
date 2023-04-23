import prisma from "../../../lib/prisma";

export const subjectApi = async (id) =>
  await prisma.subject.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      classes: true,
      teachers: true,
    },
  });

export const updateSubjectApi = async (
  id,
  title,
  description,
  classes,
  teachers
) =>
  await prisma.subject.update({
    where: { id: parseInt(id) },
    data: {
      title,
      description,
      classes: { set: classes },
      teachers: { set: teachers },
    },
  });

export const deleteSubjectApi = async (id) =>
  await prisma.subject.delete({ where: { id: parseInt(id) } });

export default async function handler(req, res) {
  const { id } = req.query;
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }
  if (req.method === "GET") {
    const data = await subjectApi(id);
    res.status(200).json(data);
    return;
  }
  if (req.method === "PUT") {
    const { title, description, classes, teachers } = req.body;
    const data = await updateSubjectApi(
      id,
      title,
      description,
      classes,
      teachers
    );
    res.status(200).json(data);
    return;
  }
  if (req.method === "DELETE") {
    const data = await deleteSubjectApi(id);
    res.status(200).json(data);
    return;
  }
  res.status(405).json({ message: "Method not allowed" });
}
