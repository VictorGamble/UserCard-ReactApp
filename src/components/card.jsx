import React, { Component } from 'react';


class Card extends Component{
    state = {
        quote: "loading"
    }
    async componentDidMount() {
        try {
          const response = await fetch(`https://randomuser.me/`);
          const data = await response.json();
          console.log('data is', data);
          this.setState({
            quote: data.value
          })
        } catch (error) {
          console.error("Error", error);
          return error;
        }
    }
    render() {
        const { quote } = this.state
        return (
            <div>
                <div>
                    <p>{quote}</p>
                </div>
            </div>
        )
    }
}


export default Card;
