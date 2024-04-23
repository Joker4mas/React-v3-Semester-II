
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Spacer,
  Flex,
  Input,
  Box,
  Text,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

function ListRepos() {
  const [repositories, setRepositories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = repositories.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await axios.get("https://api.github.com/users/Joker4mas/repos");
        setRepositories(response.data);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };
    fetchRepositories();
  }, []);

  const totalPages = Math.ceil(repositories.length / itemsPerPage);

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Flex mt="2rem" p="4" alignItems="center" justifyContent="space-between">
        <Box bg="#744210" p="2" borderRadius="xl" color="white">
          <Text>Total Repositories: {repositories.length}</Text>
        </Box>
        <Box p="4" bg="white" borderRadius="xl">
          <Input placeholder="Search repo" size="sm" />
        </Box>
        <Button colorScheme="teal">New Repositories</Button>
      </Flex>

      <TableContainer mt="4">
        <Table variant="simple">
          <Thead bg="#AF8260" color="white">
            <Tr>
              <Th>Repository Name</Th>
              <Th>Language Used</Th>
              <Th>View Repo</Th>
            </Tr>
          </Thead>
          <Tbody bg="#AF8260" color="white">
            {currentItems.map(repo => (
              <Tr key={repo.id}>
                <Td><a href={repo.html_url}>{repo.name}</a></Td>
                <Td>{repo.language}</Td>
                <Td>
                  <Button colorScheme="green" as="a" href={repo.html_url} target="_blank">
                    View More
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      <ButtonGroup mt="4">
        {Array.from({ length: totalPages }, (_, i) => (
          <Button
            key={i + 1}
            colorScheme={currentPage === i + 1 ? "blue" : "yellow"}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
}

export default ListRepos;