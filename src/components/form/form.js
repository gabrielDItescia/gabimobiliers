import React, { Component } from 'react';

export default class Form extends Component {
    state = {
        isFurnished : false,
        city : "",
        maxPrice : 500000,
    };

    setPrice(event){
        const {maxPrice} = this.state;
        this.setState({
            maxPrice : event.target.value
        });
    }

    toggleFurnished(){
        const {isFurnished} = this.state;
        this.setState({
            isFurnished : !isFurnished
        });
    }

    render() {
        const {maxPrice} = this.state;
        return (
            <div className="Form">
                <div className="form-container">
                    <form>
                    <p>Plus de critères</p>
                        <select>
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
                    </form>
                </div>
            </div>
        );
    }
}
