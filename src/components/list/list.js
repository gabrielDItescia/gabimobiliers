import React, { Component } from 'react';
import logo from '../../logo.svg';

export default class List extends Component {
    state = {
        error: null,
        isLoaded : true,
        items :[]
    };

    componentDidMount() {
        fetch("https://api.example.com/items")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.items
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="App">
                    <table>
                        {items.map(item => (<Row name={item.name} price={item.price} city={item.city} description={item.description}/>))}
                    </table>
                </div>
            );
        }
    }
}

function Row(props){
    return <tr><th><img src={logo} className="App-logo" alt="logo" /></th>
    <th><p className="App-intro">
    {props.name}
    </p>
    <p className="App-intro">
    {props.city}
    </p></th>
    <th><p className="App-intro">
    {props.description}
    </p></th>
    <th><p className="App-intro">
    {props.price}€
    </p></th></tr>
}
