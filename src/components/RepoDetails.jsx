
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
  Heading,
} from "@chakra-ui/react";

function ListRepos() {
  const [repositories, setRepositories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [record, setRecord] = useState();
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = repositories.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await axios.get("https://api.github.com/users/Joker4mas/repos");
       { setRepositories(response.data)
           setRecord(response.data)
        }
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

  const Filter = (event) =>{
    setRecord(repositories.filter(f => f.name.toLowerCase().includes(event.target.value)))
  }

  return (
    <div className="text-center">
      <Flex mt="2rem" p="4" alignItems="center" justifyContent="space-between">
        {/* <Box bg="teal" p="2" borderRadius="xl" color="white">
          <Text>Total Repositories: {repositories.length}</Text>
        </Box> */}
        <Box p="4" bg="white" borderRadius="xl">
          <Input placeholder="Search repo" size="sm" borderRadius='md' onChange={Filter}/>
        </Box>
        <Button colorScheme="teal">New Repositories</Button>
      </Flex>

      <TableContainer mt="4" p='4' borderRadius='xl'>
        <Table variant="simple">
          <Thead bg="#AF8260" color="white" mb='4' >
            <Tr>
              <Th><Text fontSize='1.5em'>Repository Name</Text> </Th>
              <Th><Text fontSize='1.5em'>Language</Text></Th>
              <Th><Text fontSize='1.5em'>View</Text></Th>
            </Tr>
          </Thead>
          <Tbody bg="#AF8260" color="white" my='4' rounded={'md'}>
            {currentItems.map(repo => (
              <Tr key={repo.id} >
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


   <ButtonGroup my="4">
        {Array.from({ length: totalPages }, (_, i) => (
          <Button
            key={i + 1}
            colorScheme={currentPage === i + 1 ? "green" : "yellow"}
            onClick={() => handlePageChange(i + 1)}
           textAlign={'center'}>
            {i + 1}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
}

export default ListRepos;