import React, { Component } from "react";
import { Card, CardImage, CardContent, Column, Columns } from "bloomer";
class UserCard extends Component {
  state = {
    firstName: "First Name",
    lastName: "Last Name",
    pic: "pic",
    email: "email",
    phone: "phone"
  };

  async componentDidMount() {
    try {
      const response = await fetch(`https://randomuser.me/api/?results=1`);
      const data = await response.json();
      console.log("data is=>", data);
      this.setState({
        firstName: data.results[0].name.first,
        lastName: data.results[0].name.last,
        pic: data.results[0].picture.thumbnail,
        email: data.results[0].email,
        phone: data.results[0].phone
      });
    } catch (error) {
      console.error("Error", error);
      return error;
    }
  }
  render() {
    const { firstName } = this.state;
    const { pic } = this.state;
    const { lastName } = this.state;
    const { email } = this.state;
    const { phone } = this.state;
    return (
      <div>
        <Column>
          <Card>
            <CardImage image src={pic}></CardImage>
            <CardContent>{firstName}</CardContent>
            <CardContent>{lastName}</CardContent>
            <CardContent>{email}</CardContent>
            <CardContent>{phone}</CardContent>
          </Card>
        </Column>
      </div>
    );
  }
}

export default UserCard;
