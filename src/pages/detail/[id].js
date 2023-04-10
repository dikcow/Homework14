import prisma from "../../../lib/prisma";
import { Card, CardHeader, CardBody, Stack, Box, Heading, StackDivider, Text } from "@chakra-ui/react";

export const getServerSideProps = async ({ query }) => {
  const { id } = query;

  let book = await prisma.Book.findUnique({
    where: {
      id: +id,
    },
  });

  book = JSON.parse(JSON.stringify(book));
  return {
    props: {
      book,
    },
  };
};

function BookDetail({ book }) {
  return (
    <>
      <Card>
        <CardHeader>
          <Heading size="md">Book Detail</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Title
              </Heading>
              <Text pt="2" fontSize="sm">
                {book.title}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Author
              </Heading>
              <Text pt="2" fontSize="sm">
                {book.author}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Publisher
              </Heading>
              <Text pt="2" fontSize="sm">
                {book.publisher}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Year
              </Heading>
              <Text pt="2" fontSize="sm">
                {book.year}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Pages
              </Heading>
              <Text pt="2" fontSize="sm">
                {book.pages}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Image
              </Heading>
              <Text pt="2" fontSize="sm">
                {book.image}
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}
export default BookDetail;
