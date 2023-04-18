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

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }
  const data = await postsApi();

  res.status(200).json(data);
}
