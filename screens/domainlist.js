import React from "react";
import {View,Text,StyleSheet,Dimensions} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Container, Content, Grid,Row,Col, Card, CardItem,Body } from "native-base";

import CustomCard from "../components/CustomCard";

import Colors from "../constants/colors";

const DomainList = props => {
    return <ScrollView>
        <Container style={styles.container}>
            <Content>
                <Grid>
                    <Row style = {styles.column}>
                        <Col>
                            <CustomCard title="Robotics" domainId = "1" navigation = {props.navigation}/>
                        </Col>
                        <Col>
                            <CustomCard title="Coding" domainId = "2" navigation = {props.navigation}/>
                        </Col>
                    </Row>
                    <Row style = {styles.column}>
                        <Col>
                            <CustomCard title="Gaming" domainId = "3" navigation = {props.navigation}/>
                        </Col>
                        <Col>
                            <CustomCard title="General" domainId = "4" navigation = {props.navigation}/>
                        </Col>
                    </Row>
                    <Row style = {styles.column}>
                        <Col>
                            <CustomCard title="Civil" domainId = "5" navigation = {props.navigation}/>
                        </Col>
                        <Col>
                            <CustomCard title="Electrical" domainId = "6" navigation = {props.navigation}/>
                        </Col>
                    </Row>
                </Grid>
            </Content>
        </Container>
    </ScrollView>
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        // alignItems: "center",
        backgroundColor: Colors.primary,
    },
    column:{
        height: Dimensions.get("screen").height / 3.3,
    }
});

export default DomainList;