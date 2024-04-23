import {useState, useEffect} from 'react';
import axios from 'axios';
import { Grid, GridItem, Text, Image } from "@chakra-ui/react";


const HeroSection = () => {
    const [page, setPage] = useState([]);

    useEffect (()=>{
        const fetchData = async () => {
            try {
              const response = await axios.get(
                "https://api.github.com/users/Joker4mas",
              );
              setPage(response.data);
            } catch (error) {
              console.error("Error fetching Data:", error);
            }
          };
      fetchData();
    },[])

    return (
        <>
          <div className=' p-4'>
        <Grid
          h="200px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={4} mt={'1rem'} mx='auto'
        >
          <GridItem
            rowSpan={2}
            colSpan={1}
            bg="#AF8260"
            textAlign={"center"}
            // mx={"auto"}  
            boxShadow="sm"
            rounded="md"
            TextAlign={"center"}
          >
              <Image
              src={page.avatar_url}
              boxSize="120px"
              borderRadius="full"
              m={'.5rem'}
              p={'.5rem'}
              mx={'auto'}
            />
            <Text color={'white'} as={'b'} p={'.5rem'}>{page.name}</Text>
            <br />
            <Text as="i"  color={'white'} >{page.login}</Text>
          </GridItem>

          <GridItem colSpan={4} bg="#AF8260" boxShadow="sm" rounded="md">
            <Text
              noOfLines={[1, 2, 3]}
              color="white"
              p="1rem"
              m="1rem"
              mx="auto"
              justify="center"
              textAlign={"center"}
              fontSize="xl"
            >
            <Text>{page.bio}</Text>
            </Text>
          </GridItem>
          <GridItem
            colSpan={2}
            bg="grey"
            color="white"
            p="1rem"
            justify="center"
            textAlign={"center"}
            fontSize="xl"
            boxShadow="sm"
            rounded="md"
          >
            <Text>Number of Repository : {page.public_repos}</Text>
          </GridItem>
          <GridItem
            colSpan={1}
            bg="grey"
            boxShadow="sm"
            rounded="md"
            color="white"
            p="1rem"
            justify="center"
            textAlign={"center"}
            fontSize="xl"
          >
            <Text>Followers : {page.followers}</Text>
          </GridItem>
          <GridItem
            colSpan={1}
            bg="grey"
            boxShadow="sm"
            rounded="md"
            color="white"
            p="1rem"
            justify="center"
            textAlign={"center"}
            fontSize="xl"
          >
            <Text>Following : {page.following}</Text>
          </GridItem>
        </Grid>
      </div>
    </>
    )
};

export default HeroSection;
