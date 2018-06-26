import React, { Component } from 'react';

export default class Form extends Component {
    state = {
        isFurnished : false,
        city : "Paris",
        maxPrice : 500000,
    };

    setPrice(event){
        const {maxPrice} = this.state;
        this.setState({
            maxPrice : event.target.value
        });
    }
    
    setCity(event){
        const {city} = this.state;
        this.setState({
            city : event.target.value
        });
    }

    toggleFurnished(){
        const {isFurnished} = this.state;
        this.setState({
            isFurnished : !isFurnished
        });
    }

    setList(){
        const {isFurnished, maxPrice, city} = this.state;
        alert("isFurnished :" + isFurnished + "; maxPrice : " + maxPrice + "; city : " + city);
    }

    render() {
        const {maxPrice} = this.state;
        return (
            <div className="Form">
                <div className="form-container">
                    <form>
                    <p>Plus de critères</p>
                        <select onChange={this.setCity.bind(this)}>
                            <option value="Paris">Paris</option>
                            <option value="Lille">Lille</option>
                            <option value="Lyon">Lyon</option>
                            <option value="Marseille">Marseille</option>
                            <option value="Toulouse">Toulouse</option>
                        </select>
                        <label for="checkFurnished">Meublé</label>
                        <input type="checkbox" id="checkFurnished" onChange={this.toggleFurnished.bind(this)}/>
                        <label for="setMax">Prix max : {maxPrice}</label>
                        <input type="range" max="5000000" min="500000" step="100000" id="setMax" onChange={this.setPrice.bind(this)}/>
                        <input type="button" onClick={this.setList.bind(this)} value="Go"/>
                    </form>
                </div>
            </div>
        );
    }
}
