import React, { Component } from 'react';


class Card extends Component{
    state = {
        quote: "loading",
        pic:"pic"
    }
    async componentDidMount() {
        try {
          const response = await fetch(`https://randomuser.me/api/?results=1`);
          const data = await response.json();
          console.log('data is=>', data);
          this.setState({
              quote: data.results[0].name.first,
              pic: data.results[0].picture.large
          })
        } catch (error) {
          console.error("Error", error);
          return error;
        }
    }
    render() {
        const { quote } = this.state
        const {pic} = this.state
        return (
            <div>
                <div>
                    <img src={pic} alt="pic"></img>
                    <p>{quote}</p>
                </div>
            </div>
        )
    }
}


export default Card;
