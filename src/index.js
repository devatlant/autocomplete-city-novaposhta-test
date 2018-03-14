
import React from 'react';
import ReactDOM from 'react-dom';
import CitySuggestionComponent from "./CitySuggestionComponent.js"
import WarehouseSuggestionComponent from "./WarehouseSuggestionComponent.js"



class NovaPoshtaPickupPointDeliveryApp extends React.Component {
  constructor(props) {
    super(props);
  }

   render() {
    return (
      <div>
        <CitySuggestionComponent />
        <WarehouseSuggestionComponent/>
      </div>
    );
  }

}


ReactDOM.render(<NovaPoshtaPickupPointDeliveryApp/>, document.getElementById('root'));