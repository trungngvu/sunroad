import prisma from "../../../lib/prisma";

export const classesApi = async () => await prisma.class.findMany({});

export const createClassApi = async (
  title,
  students,
  description,
  startDate,
  endDate,
  subjectId
) =>
  prisma.class.create({
    data: {
      title,
      students: parseInt(students),
      description,
      startDate,
      endDate,
      subjectId: parseInt(subjectId),
    },
  });

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }
  if (req.method === "GET") {
    const data = await classesApi();
    res.status(200).json(data);
    return;
  }
  if (req.method === "POST") {
    const { title, students, description, startDate, endDate, subjectId } =
      req.body;
    const data = await createClassApi(
      title,
      students,
      description,
      startDate,
      endDate,
      subjectId
    );
    res.status(200).json(data);
    return;
  }
  res.status(405).json({ message: "Method not allowed" });
}
