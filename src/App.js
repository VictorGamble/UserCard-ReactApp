import React, {Component} from 'react';
import ProCard from './components/ProCard';
import 'bulma/css/bulma.css'



class App extends Component{
  
  state = {
    userData: [],
    title: "Fetching Data"
  }
  
  dataLoad = async () => {
    try {
      const response = await fetch(`https://randomuser.me/api/?results=2`)
      const data = await response.json()
      return data.results 
    } catch (error) {
      console.error("Error", error);
      return error;
    }
  }
  
  clickHandler = async () => {
    const newData = await this.dataLoad();
    this.setState({
      userData: newData
    })
  }
  

  async componentDidMount() {
    const userData = await this.dataLoad();
    this.setState({
      userData : userData
    })
  }
  
  render() {
    const { title, userData } = this.state;
    console.log("userData is =>", userData);
    return (
      <div className="App">
        <h1>{title}</h1>
        <ProCard userData={userData} />
        <button onClick={this.clickHandler}>New Users</button>
      </div>
    )
  }
}

export default App;