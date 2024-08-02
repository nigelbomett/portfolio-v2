import './App.css'
import '@mantine/core/styles.css';
import { Flex, Container, Title, Button, Text, Grid, Table, Group, NavLink, ActionIcon, ActionIconGroup } from '@mantine/core';
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, FaDev } from "react-icons/fa";
import { navigateTo } from './utils/navigation';
import Projects from './components/Projects';




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
        <Grid.Col span={5}><Text size="md" ta='justify'ml={30} mt={18} fw={600}>I'm a software developer who wants to play his part in making the world a better place.</Text></Grid.Col>
      </Grid>
      <Group mt={20}>
        <ActionIcon variant="transparent" aria-label="Email" color='black'
          onClick={navigateTo("mailto:nigelbomett@gmail.com?subject=Let's make the world a better place&amp;body=So what's up?")}><MdEmail size={30} />
        </ActionIcon>
        <ActionIcon variant="transparent" aria-label="GitHub" color='black'
          onClick={navigateTo("https://github.com/nigelbomett")}>
        <FaGithub size={30}/>
        </ActionIcon>
        <ActionIcon variant="transparent" aria-label="LinkedIn" color='black'
          onClick={navigateTo("https://www.linkedin.com/in/nigelbomett")}>
          <FaLinkedin size={30} />
        </ActionIcon>
        <ActionIcon variant="transparent" aria-label="Dev" color='black'
          onClick={navigateTo("https://dev.to/nigel_bomett")}>
          <FaDev size={30} />
        </ActionIcon>
      </Group>
      <Title order={3} mt={20}>Recent Work</Title>
      <Projects/>
    </Flex>

    
   
  )
}

export default App
