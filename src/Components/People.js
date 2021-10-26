import React from 'react'
import { Card, Grid } from 'semantic-ui-react'


export default function People({ data }) {
    return (
        <>
            <h1>People</h1>
            <Grid columns={3}>
                {data.map((people, i) => {
                   return (
                    <Grid.Column key={i}>
                        <Card>
                            <Card.Content>
                                <Card.Header>{people.name}</Card.Header>
                                <Card.Description>
                                    <strong>Height</strong>
                                    <p>{people.height}</p>
                                    <strong>Mass</strong>
                                    <p>{people.mass}</p>
                                    <strong>Hair Color</strong>
                                    <p>{people.hair_color}</p>
                                    <strong>Gender</strong>
                                    <p>{people.gender}</p>
                                    <strong>Eye Color</strong>
                                    <p>{people.eye_color}</p>
                                    <strong>Skin Color</strong>
                                    <p>{people.skin_color}</p>
                                </Card.Description>
                            </Card.Content> 
                        </Card>
                    </Grid.Column>
                   ) 
                })}
            </Grid>  
        </>
    )
}