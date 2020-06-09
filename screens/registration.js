import React from "react";
import {View,Text,StyleSheet} from "react-native";
import { Container, Content,Form,Input,Label,Item,Button } from "native-base";

const Registration = props => {
    return <Container>
        <Content>
        <Form>
            <Item floatingLabel>
              <Label>First Name</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Last Name</Label>
              <Input />
            </Item>
            <Item floatingLabel >
              <Label>Email</Label>
              <Input />
            </Item>
            <Item floatingLabel >
              <Label>Phone</Label>
              <Input />
            </Item>
            <Item floatingLabel >
              <Label>College</Label>
              <Input />
            </Item>
          </Form>
          {/* <Button small rounded success>
                    <Text>
                        Submit
                    </Text>
          </Button> */}
        </Content>
    </Container>
};

const styles = StyleSheet.create({

});

export default Registration;