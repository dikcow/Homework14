import nextConnect from "next-connect";
import prisma from "../../../../lib/prisma";

const handler = nextConnect()
  .get(async (req, res) => {
    console.log("mashok edit");
  })

  .put(async (req, res) => {
    console.log(req.query);
    console.log(req.body);

    const { id } = req.query;
    const { title, author, publisher, year, pages } = req.body;

    const updateBook = await prisma.Book.update({
      where: {
        id: +id,
      },
      data: {
        title,
        author,
        publisher,
        year: +year,
        pages: +pages,
        image: "",
      },
    });

    res.status(200).json({ message: "books update successfuly" });
  })

  .delete(async (req, res) => {
    console.log(req.query, "<<<<<<<<");
    const { id } = req.query;

    await prisma.Book.delete({
      where: {
        id: +id,
      },
    });

    res.status(200).json({ message: "delete successfuly" });
  });

export default handler;
