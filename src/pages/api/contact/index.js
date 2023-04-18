import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  const { name, contact, subject, content } = req.body;

  const touch = await prisma.contactForm.create({
    data: {
      name,
      contact,
      subject,
      content
    },
  });

  res.status(200).json(touch);
}
