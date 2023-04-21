import prisma from "../../../lib/prisma";

export const addCommentApi = async (text, postId, author) =>
  await prisma.comment.create({
    data: {
      text,
      postId,
      author,
    },
  });

export const commentApi = async () => await prisma.comment.findMany({});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { text, postId, author } = req.body;
    const data = await addCommentApi(text, postId, author);
    res.status(200).json(data);
    return;
  }
  if (req.method === "GET") {
    const data = await commentApi();
    res.status(200).json(data);
    return;

  }

  res.status(405).json({ message: "Method not allowed" });
}
