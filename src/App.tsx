import './App.css'
import '@mantine/core/styles.css';
import { Flex, Container, Title, Button, Text, Grid, Table, Group } from '@mantine/core';
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, FaDev } from "react-icons/fa";




function App() {
  const containerProps = {
    bg: 'var(--mantime-color-blue-light)',
    h:50,
    mt:'md'
  };

  return (
    <Flex
      gap="md"
      justify="flex-start"
      align="flex-start"
      direction="column"
      wrap="wrap"
      ml="150"
      mt="20"
      
    >
      <Grid align='flex-start' justify='flex-start'>
        <Grid.Col span={2}><Title order={2} ta='start'>Nigel Bomett</Title></Grid.Col>
        <Grid.Col span={5}><Text size="md" ta='justify'ml={30} mt={18} fw={600}>I'm a software developer who wants to make the world a better place.</Text></Grid.Col>
      </Grid>
      <Group mt={20}>
        <MdEmail size={30} />
        <FaGithub size={30} />
        <FaLinkedin size={30}/>
        <FaDev size={30} />

      </Group>
    </Flex>

    
   
  )
}

export default App
