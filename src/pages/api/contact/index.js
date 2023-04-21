import prisma from "../../../lib/prisma";

export const contactApi = async (name, contact, subject, content) =>
  await prisma.contactForm.create({
    data: {
      name,
      contact,
      subject,
      content,
    },
  });

export const getContactApi = async () => await prisma.contactForm.findMany({});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, contact, subject, content } = req.body;
    const data = await contactApi(name, contact, subject, content);
    res.status(200).json(touch);
    return;
  }
  if (req.method === "GET") {
    const data = await getContactApi();
    res.status(200).json(data);
    return;
  }
  res.status(405).json({ message: "Method not allowed" });
}
