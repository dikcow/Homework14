import { Input, Button, Flex, Center, VStack } from "@chakra-ui/react";
import { useState, useEfect } from "react";

function Add() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [year, setYear] = useState("");
  const [pages, setPage] = useState("");

  const handleSubmit = () => {
    fetch("/api/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        author,
        publisher,
        year,
        pages,
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
            <Input placeholder="masukan title" type="text" onChange={(e) => setTitle(e.target.value)} />
            <Input placeholder="masukan author" type="text" onChange={(e) => setAuthor(e.target.value)} />
            <Input placeholder="masukan publisher" type="text" onChange={(e) => setPublisher(e.target.value)} />
            <Input placeholder="masukan tahun" type="text" onChange={(e) => setYear(e.target.value)} />
            <Input placeholder="masukan halaman" type="text" onChange={(e) => setPage(e.target.value)} />
            <Button onClick={handleSubmit}>Input Data</Button>
          </VStack>
        </Center>
      </Flex>
    </>
  );
}

export default Add;
