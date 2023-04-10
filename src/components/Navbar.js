import { Flex, Stack, HStack } from "@chakra-ui/react";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <Flex justifyContent="flex-end" bg="blue.400">
        <HStack spacing="5" padding="2" marginRight="5" color="white" fontWeight="medium">
          <Link href="/">Home</Link>
          <Link href="/add">Tambah Data</Link>
        </HStack>
      </Flex>
    </>
  );
}

export default Navbar;
