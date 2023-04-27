import prisma from "../../../lib/prisma";

export const classApi = async (id) =>
  await prisma.class.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      subject: true,
    },
  });

export const updateClassApi = async (
  id,
  { title, students, description, startDate, endDate, subjectId }
) => {
  await prisma.class.update({
    where: { id: parseInt(id) },
    data: {
      title,
      students: parseInt(students),
      description,
      startDate,
      endDate,
      subjectId: parseInt(subjectId),
    },
  });
};
export const deleteClassApi = async (id) =>
  await prisma.class.delete({ where: { id: parseInt(id) } });

export default async function handler(req, res) {
  const { id } = req.query;
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }
  if (req.method === "GET") {
    const data = await classApi(id);
    res.status(200).json(data);
    return;
  }
  if (req.method === "PUT") {
    const data = await updateClassApi(id, req.body);
    res.status(200).json(data);
    return;
  }
  if (req.method === "DELETE") {
    const data = deleteClassApi(id);
    res.status(200).json(data);
    return;
  }
  res.status(405).json({ message: "Method not allowed" });
}
