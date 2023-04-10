import nextConnect from "next-connect";
import prisma from "../../../../lib/prisma";

const handler = nextConnect({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
})
  .get(async (req, res) => {
    const data = await prisma.Book.findMany();

    res.status(200).json(data);
  })

  .post(async (req, res) => {
    console.log(req.body);
    const { title, author, publisher, year, pages } = req.body;

    const data = await prisma.Book.create({
      data: {
        title,
        author,
        publisher,
        year: +year,
        pages: +pages,
        image: "",
      },
    });

    res.status(201).json({ message: "books created successfuly" });
  })

  .delete(async (req, res) => {
    console.log(req.params, "<<<<<<<<");
  });

export default handler;
