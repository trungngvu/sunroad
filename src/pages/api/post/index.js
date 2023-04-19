import prisma from "../../../lib/prisma";

export const postsApi = async () =>
  await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });

export const addPostApi = async (title, content, published, tags) =>
  await prisma.post.create({ data: { title, content, published, tags } });

export default async function handler(req, res) {
  if (req.method === "GET") {
    const data = await postsApi();
    res.status(200).json(data);
    return;
  }
  if (req.method === "POST") {
    const { title, content, published, tags } = req.body;
    const data = await addPostsApi(title, content, published, tags);
    res.status(200).json(data);
    return;
  }
  res.status(405).json({ message: "Method not allowed" });
}
