import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  const subjects = await prisma.subject.findMany({
    include: {
      classes: true,
    },
  });
  res.status(200).json(subjects);
}
