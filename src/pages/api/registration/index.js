import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  const { name, contact, classes } = req.body;

  const register = await prisma.registrationForm.create({
    data: {
      name,
      contact,
      classes: {
        connect: [{ id: 1 }, { id: 2 }],
      },
    },
  });

  res.status(200).json(register);
}
