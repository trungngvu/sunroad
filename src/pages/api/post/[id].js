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

export const deletePostApi = async (id) =>
  await prisma.post.delete({ where: { id: parseInt(id) } });

export default async function handler(req, res) {
  const { id } = req.query;
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }
  if (req.method === "GET") {
    const data = await postApi(id);
    res.status(200).json(data);
    return;
  }
  if (req.method === "PUT") {
    const data = await updatePostApi(id, req.body);
    res.status(200).json(data);
    return;
  }
  if (req.method === "DELETE") {
    const data = await deletePostApi(id);
    res.status(200).json(data);
    return;
  }

  res.status(405).json({ message: "Method not allowed" });
}
