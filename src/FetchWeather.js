import React, { Component} from 'react';

class FetchWeather extends Component {
    constructor() {
        super();
        this.state = {
            weatherData = [],
        };

    }

    componentDidMount() {
        fetch('localhost:8080/forecast/la%20garenne-colombes')
        .then(results => {
            return results.json();
        }).then(data => {
            let weatherData = data.results.map((wData) => { 
                return(
                    <div key={wData.results}>
                        <img src={wData.forecast_weather} />
                    </div>
            )
        })
        this.setState({weatherData : weatherData})
        console.log("state", this.state.weatherData)
        })
    }
}