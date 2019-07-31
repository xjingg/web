import React from "react";
import { Segment, Grid, Card, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Intro = ({ projlink }) => (
    <Segment>
        <Grid relaxed="very">
            <Grid.Column width={6}>
                <h2>website</h2>
                <p />
            </Grid.Column>
            <Grid.Column width={10}>
                <Card>
                    <Image
                        src="https://react.semantic-ui.com/images/avatar/large/ade.jpg"
                        wrapped
                        ui={false}
                    />
                    <Card.Content>
                        <Card.Header>Proj1</Card.Header>
                        <Card.Meta>Joined in 2016</Card.Meta>
                        <Card.Description>Web project 1</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Icon name="user" />
                        <Link to={projlink}>To</Link>
                    </Card.Content>
                </Card>
            </Grid.Column>
        </Grid>
        {/* <Divider vertical /> */}
    </Segment>
);

export default Intro;
