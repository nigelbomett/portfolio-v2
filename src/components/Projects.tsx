import { Card, Grid, Group, Image, Text } from '@mantine/core'
import React  from 'react'
import {projects} from '../data/projects'

const iconProps = {
    size: 25
}
const Projects: React.FC = () => {
  return (
    <Grid>
        {projects.map((project,index) => (
            <Grid.Col key={index} span={12} onClick={() => {console.log("pressed")}} style={{cursor:'pointer'}}>
                <Card shadow="sm" padding="lg" radius="lg">
                    <Card.Section>
                        <Image
                            src={project.image}
                            height={380}
                            alt="project"
                        />
                    </Card.Section>
                    <Group style={{marginBottom: 5}}>
                        <Text fw={500}>{project.name}</Text>
                        <project.icon {...iconProps} color='#2c9843' style={{marginLeft:'35'}}/>
                    </Group>
                    <Text size='sm' style={{lineHeight:1.5}}>
                        {project.description}
                    </Text>
                </Card>
            </Grid.Col>
        ))}
    </Grid>
  )
}

export default Projects