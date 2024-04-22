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
  Link,
  Button,
  // FormControl,
} from "@chakra-ui/react";
// import {Paginator} from 'primereact/paginator';

function ListRepos() {
  const [repositories, setRepositories] = useState([]);
  const [records, setRecords] = useState([]);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);
  // Set your Personal Access Token

  useEffect(() => {
    // fetch repositories from GitHub API
    const fetchRepositories = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/Joker4mas/repos"
        );
        setRepositories(response.data);
        setRecords(response.data);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };
    fetchRepositories();
  }, []);

    const Filter = (event) => {
        setRecords(repositories.filter(f =>f.name.toLowerCase().includes(event.target.value)))
    }

        
    // const onPageChange = (event) => {
    //     setFirst(event.first);
    //     setRows(event.rows);
    // };
  return (
    <div>
      <div className="p-4">
        <div>
          <Flex mt={'2rem'}>
            <Box as="i" p="2" textAlign={'center'} color={'white'} w={'220px'} bg="#744210" borderRadius={'xl'}>
           <Text>
            Total Repositories {repositories.length }
           </Text>
            </Box>
            <Spacer />
            <Box as="i" p="4" bg="#fff" color={'black'} borderRadius={'xl'}>
              Search Repositories
              <Input placeholder='Search repo' size='sm' className="form-control" onChange={Filter} />
            </Box>
            <Spacer/>
           
            <Button colorScheme='teal' size='md'>
              New Repositories
              </Button>
          
          </Flex>
        </div>

        <div>
          <TableContainer>
            <Table variant="simple">
              <Thead  bg={"#744210"} color={'white'} >
                <Tr>
                  <Th>Repository Name</Th>
                  <Th> Language Used</Th>
                  <Th> Delete Repo</Th>
                </Tr>
              </Thead>
              <Tbody bg={'#AF8260'} color={'white'}>
                {repositories.map((repo) => (
                  <Tr key={repo.id}>
                    <Link href=" https://api.github.com/users/Joker4mas/repos">
                    <Td>{repo.name}</Td>
                    </Link>
                    <Td>{repo.language}</Td>
                  <Td>
                  <Box as="i" p="4"  color={'white'} borderRadius={'xl'}>
            <Button colorScheme='green' size='md'>
              View more
              </Button>
            </Box>
                  </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      </div>
      {/* <Paginator
                first={first}
                rows={rows}
                totalRecords={120}
                rowsPerPageOptions={[10, 20, 30]}
                onPageChange={onPageChange}
            /> */}
    </div>
  );
}
export default ListRepos;
