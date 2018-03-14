import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Autosuggest from 'react-autosuggest';
import IsolatedScroll from 'react-isolated-scroll';

const $ = window.$;

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = (value,cities) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  console.log('count of cities : '+cities.length)

  return inputLength === 0 ? [] : cities.filter(city =>
    city.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    <small>{suggestion.typeCode}</small> <b>{suggestion.name}</b> <small>, {suggestion.region} район, {suggestion.area} область</small>
  </div>
);

export default class CitySuggestionComponent extends React.Component {
  constructor() {
    super();

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: [],
      isLoading: false,
      cityRef: undefined
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value, reason }) => {
  	var cities;
  	if (reason === 'input-changed' && value.trim().length === 1){
  		this.setState({
  			isLoading: true
  		})
  		console.log('need to fetch data from the server...');
  		var url =  'https://localhost:8443/delivery/fetchCityList/'+value;
                $.ajax({
                    url : url,
                    type : 'get',
                    async: true,
                    success : (data) => {
                        cities=data;
                        console.log('received cities - '+data.length);
                        this.savedCities = cities;
                        this.setState({
				  			isLoading: false
				  		})

				  		this.setState({
					      suggestions: getSuggestions(value,this.savedCities)
					    });
        
                    },
                    statusCode : {
                        200 : function() {
                            //$alertOk.show().delay(2000).fadeOut(); TODO
                        },
                        500 : function() {
                            //$alertError.show().delay(2000).fadeOut(); TODO
                        }
                    }
                });
  	}
  	console.log('re-render')
  	if (this.savedCities) {
	    this.setState({
	      suggestions: getSuggestions(value,this.savedCities)
	    });
	}
    
  };

  onSuggestionSelected= (event, {suggestion}) =>{
  	console.log(suggestion);
  	this.setState({
  		cityRef: suggestion.ref
  	})
  }

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions, isLoading, cityRef } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Оберіть місто доставкі',
      value,
      onChange: this.onChange
    };

    // Finally, render it!
    return (
    	
    		
    	
    	<div>
    		  { isLoading && <div className="loader">Загрузка...</div> }
		      <Autosuggest
		        suggestions={suggestions}
		        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
		        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
		        onSuggestionSelected={this.onSuggestionSelected}
		        getSuggestionValue={getSuggestionValue}
		        renderSuggestion={renderSuggestion}
		        inputProps={inputProps}
		        
		      />
	      	  
	      	 <input type="text" name="city-ref" value={cityRef}/> 
        </div>
    );
  }
}