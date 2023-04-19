import prisma from "../../../lib/prisma";

export const postApi = async (id) =>
  await prisma.post.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      author: true,
      comments: {
        include: { replies: true },
      },
    },
  });

export const updatePostApi = async (id, updates) =>
  await prisma.post.update({
    where: { id: parseInt(id) },
    data: updates,
  });

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { id } = req.query;
    const data = await postApi(id);
    res.status(200).json(data);
    return;
  }
  if (req.method === "PUT") {
    const { id } = req.query;
    const data = await updatePostApi(id, req.body);
    res.status(200).json(data);
    return;
  }

  res.status(405).json({ message: "Method not allowed" });
}
