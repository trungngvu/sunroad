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

export const updateSubjectApi = async (id, updates) =>
  await prisma.subject.update({
    where: { id: parseInt(id) },
    data: updates,
  });

export const deleteSubjectApi = async (id) =>
  await prisma.subject.delete({ where: { id: parseInt(id) } });

export default async function handler(req, res) {
  const { id } = req.query;
  if (req.method === "GET") {
    const data = subjectApi(id);
    res.status(200).json(data);
    return;
  }
  if (req.method === "PUT") {
    const data = await updateSubjectApi(id, req.body);
    res.status(200).json(data);
    return;
  }
  if (req.method === "DELETE") {
    const data = deleteSubjectApi(id);
    res.status(200).json(data);
    return;
  }
  res.status(405).json({ message: "Method not allowed" });
}
