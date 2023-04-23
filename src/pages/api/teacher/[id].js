import prisma from "../../../lib/prisma";

export const teacherApi = async (id) =>
  await prisma.teacher.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      subjects: true,
    },
  });

export const updateTeacherApi = async (id, name, description, subjects) =>
  await prisma.teacher.update({
    where: { id: parseInt(id) },
    data: {
      name,
      description,
      subjects: { set: subjects },
    },
  });

export const deleteTeacherApi = async (id) =>
  await prisma.teacher.delete({ where: { id: parseInt(id) } });

export default async function handler(req, res) {
  const { id } = req.query;
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }
  if (req.method === "GET") {
    const data = await teacherApi(id);
    res.status(200).json(data);
    return;
  }
  if (req.method === "PUT") {
    const { name, description, subjects } = req.body;
    const data = await updateTeacherApi(id, name, description, subjects);
    res.status(200).json(data);
    return;
  }
  if (req.method === "DELETE") {
    const data = await deleteTeacherApi(id);
    res.status(200).json(data);
    return;
  }
  res.status(405).json({ message: "Method not allowed" });
}
