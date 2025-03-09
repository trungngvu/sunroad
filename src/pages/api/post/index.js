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

export const postsApiServer = async () =>
  await prisma.post.findMany({
    include: {
      author: {
        select: { name: true },
      },
    },
  });

export const addPostApi = async (title, content, published, tags, authorId) =>
  await prisma.post.create({
    data: { title, content, published, tags: tags.join(','), authorId },
  });

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }
  if (req.method === "GET") {
    const isFromFrontend =
      req.headers.referer &&
      req.headers.referer.includes(process.env.NEXT_PUBLIC_SITE_URL);

    const data = isFromFrontend ? await postsApi() : await postsApiServer();
    res.status(200).json(data);
    return;
  }
  if (req.method === "POST") {
    const { title, content, published, tags, authorId } = req.body;
    const data = await addPostApi(title, content, published, tags, authorId);
    res.status(200).json(data);
    return;
  }
  res.status(405).json({ message: "Method not allowed" });
}
