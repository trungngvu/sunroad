import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  const { text, postId, author } = req.body;

  const newComment = await prisma.comment.create({
    data: {
      text,
      postId,
      author,
    },
  });

  res.status(200).json(newComment);
}
