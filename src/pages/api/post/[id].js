import prisma from "../../../lib/prisma";

export const postApi = async (id) =>
  await prisma.post.findUnique({
    where: {
      id,
    },
    include: {
      author: true,
      comments: {
        include: { replies: true },
      },
    },
  });

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }
  const { id } = req.query;
  const data = await postApi(id);
  res.status(200).json(data);
}
