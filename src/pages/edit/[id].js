import { Input, Button, Flex, Center, VStack, FormLabel } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";
import prisma from "../../../lib/prisma";

function EditBook({ books }) {
  const router = useRouter();
  const [title, setTitle] = useState(books.title);
  const [author, setAuthor] = useState(books.author);
  const [publisher, setPublisher] = useState(books.publisher);
  const [year, setYear] = useState(books.year);
  const [pages, setPage] = useState(books.pages);
  const [image, setImage] = useState("");

  const handleSubmit = () => {
    console.log(title, author, publisher, year, pages, image);

    fetch(`/api/books/${books.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        author,
        publisher,
        year: +year,
        pages: +pages,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Flex width="100vw" height="80vh" justifyContent="center" alignItems="center">
        <Center>
          <VStack spacing="5">
            <Input placeholder="masukan title" type="text" defaultValue={books.title} onChange={(e) => setTitle(e.target.value)} />
            <Input placeholder="masukan author" type="text" defaultValue={books.author} onChange={(e) => setAuthor(e.target.value)} />
            <Input placeholder="masukan publisher" type="text" defaultValue={books.publisher} onChange={(e) => setPublisher(e.target.value)} />
            <Input placeholder="masukan tahun" type="text" defaultValue={books.year} onChange={(e) => setYear(e.target.value)} />
            <Input placeholder="masukan halaman" type="text" defaultValue={books.pages} onChange={(e) => setPage(e.target.value)} />
            <FormLabel>Select File</FormLabel>
            <Input type="file" onChange={(e) => setImage(e.target.files[0])} />
            <Button onClick={handleSubmit}>Edit Data</Button>
          </VStack>
        </Center>
      </Flex>
    </>
  );
}

export const getServerSideProps = async ({ query }) => {
  const { id } = query;

  let books = await prisma.Book.findUnique({
    where: {
      id: +id,
    },
  });

  books = JSON.parse(JSON.stringify(books));
  return {
    props: {
      books,
    },
  };
};

export default EditBook;
