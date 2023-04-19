import prisma from "../../../lib/prisma";

export const register = async (name, contact, classes) =>
  await prisma.registrationForm.create({
    data: {
      name,
      contact,
      classes: {
        connect: classes,
      },
    },
  });

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, contact, classes } = req.body;
    const data = await register(name, contact, classes);
    res.status(200).json(data);
    return;
  }

  res.status(405).json({ message: "Method not allowed" });
}
