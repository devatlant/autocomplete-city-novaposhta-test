import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Autosuggest from 'react-autosuggest';
import IsolatedScroll from 'react-isolated-scroll';

const $ = window.$;

const warehousesList = [{"description":"Відділення №1: вул. Купріна, 123б","descriptionRu":"Отделение №1: ул. Куприна, 123б","siteKey":"142"},{"description":"Відділення №2: вул. Леоніда Бородича, 17","descriptionRu":"Отделение №2: ул. Леонида Бородича, 17","siteKey":"4"},{"description":"Відділення №3 (до 30 кг на одне місце): вул. Кропивницького, 29в","descriptionRu":"Отделение №3 (до 30 кг на одно место): ул. Кропивницкого, 29в","siteKey":"117"},{"description":"Відділення №4 (до 30 кг на одне місце): вул. Вадима Гурова (ран. Постишева), 2a","descriptionRu":"Отделение №4 (до 30 кг на одно место): ул. Вадима Гурова (ран. Постишева), 2a","siteKey":"152"},{"description":"Відділення №5 (до 30 кг): просп. Перемоги, буд. 16, прим. 2 (ст. Інгулець)","descriptionRu":"Отделение №5 (до 30 кг): просп. Победы, дом 16, пом. 2 (ст. Ингулец)","siteKey":"234"},{"description":"Відділення №6 (до 30 кг на одне місце): вул. Едуарда Фукса (ран. Тухачевського), 41 (прим.65)","descriptionRu":"Отделение №6 (до 30 кг на одно место): ул. Эдуарда Фукса (ран. Тухачевского), 41 (пом.65)","siteKey":"239"},{"description":"Відділення №7 (до 30 кг на одне місце): вул. Свято-Миколаївська (ран. Леніна), 55","descriptionRu":"Отделение №7 (до 30 кг на одно место): ул. Свято-Николаевская (ран. Ленина), 55","siteKey":"256"},{"description":"Відділення №8: вул. Курчатова, 1г","descriptionRu":"Отделение №8: ул. Курчатова, 1г","siteKey":"369"},{"description":"Відділення №9: просп. Перемоги, 41а","descriptionRu":"Отделение №9: просп. Победы, 41а","siteKey":"13720"},{"description":"Відділення №10 (до 30 кг на одне місце): вул. Магістральна (ран. Кириленка), 25","descriptionRu":"Отделение №10 (до 30 кг на одно место): ул. Магистральная (ран. Кириленка), 25","siteKey":"611"},{"description":"Відділення №11 (до 30 кг на одне місце): вул. Героїв АТО (ран. Димитрова), 61","descriptionRu":"Отделение №11 (до 30 кг на одно место): ул. Героев АТО (ран. Димитрова), 61","siteKey":"615"},{"description":"Відділення №12 (до 30 кг на одне місце): просп. Південний, 17, кв. 83","descriptionRu":"Отделение №12 (до 30 кг на одно место): просп. Южный, 17, кв. 83","siteKey":"655"},{"description":"Відділення №13 (до 30 кг на одне місце): вул. Володимира Великого (ран. Мелешкіна), 9, прим. 3","descriptionRu":"Отделение №13 (до 30 кг на одно место): ул. Владимира Великого (ран. Мелешкина), 9, пом. 3","siteKey":"696"},{"description":"Відділення №14 (до 30 кг на одне місце): вул. Лісового, 9 а","descriptionRu":"Отделение №14 (до 30 кг на одно место): ул. Лисового, 9 а","siteKey":"742"},{"description":"Відділення №15 (до 30 кг на одне місце): просп. Миру, 31","descriptionRu":"Отделение №15 (до 30 кг на одно место): просп. Мира, 31","siteKey":"865"},{"description":"Відділення №16 (до 30 кг на одне місце): вул. Електрозаводська, 10а","descriptionRu":"Отделение №16 (до 30 кг на одно место): вул. Электрозаводская, 10а","siteKey":"875"},{"description":"ВІдділення №17 (до 30 кг на одне місце): вул. Володимира Терещенка (ран. Федоренка), 5а","descriptionRu":"Отделение №17 (до 30 кг на одно место): ул. Владимира Терещенко (ран. Федоренко), 5а","siteKey":"897"},{"description":"Відділення №18: вул. Лермонтова, 10а","descriptionRu":"Отделение №18: ул. Лермонтова, 10а","siteKey":"11293"},{"description":"Відділення №19 (до 30 кг на одне місце): вул. Мусоргського, 16","descriptionRu":"Отделение №19 (до 30 кг на одно место): ул. Мусоргского, 16","siteKey":"10281"},{"description":"Відділення №20 (до 30 кг на одне місце): мікрорайон Сонячний, 41а","descriptionRu":"Отделение №20 (до 30 кг на одно место): микрорайон Солнечный, 41а","siteKey":"10303"},{"description":"Відділення №21: вул. Адмірала Головко, 44а","descriptionRu":"Отделение №21: ул. Адмирала Головко, 44а","siteKey":"10339"},{"description":"Відділення №23 (до 15 кг): Міні-відділення, просп. Гагаріна, 4б","descriptionRu":"Отделение №23 (до 15кг): Мини-отделение, просп. Гагарина, 4б","siteKey":"12718"},{"description":"Відділення №24 (до 15 кг), Міні-відділення: просп. Героїв-Підпільників (ран. Дзержи-го), 1б (VARUS)","descriptionRu":"Отделение №24 (до 15 кг), Мини-отделение: просп. Героев-Подпольщиков (ран. Дзержи-го), 1б (VARUS)","siteKey":"11243"},{"description":"Відділення №25 (до 15 кг), Міні-відділення: просп. Металургів, 36 (маг.\"Фокстрот\")","descriptionRu":"Отделение №25 (до 15 кг), Мини-отделение: просп. Металлургов, 36 (маг.\"Фокстрот\")","siteKey":"11306"},{"description":"Відділення №27 ( до 15 кг), Міні-відділення: вул. Володимира Великого (ран. Мелешкіна), 51а (АТБ)","descriptionRu":"Отделение №27 ( до 15 кг), Мини-отделение: ул. Владимира Великого (ран. Мелешкина), 51а (АТБ)","siteKey":"10746"},{"description":"Відділення №28 ( до 15 кг), Міні-відділення: вул. Павла Глазового (ран. Балакіна), 28а (маг.\"АТБ\")","descriptionRu":"Отделение №28 ( до 15 кг), Мини-отделение: ул. Павла Глазового (ран. Балакина), 28а (маг.\"АТБ\")","siteKey":"10767"},{"description":"Відділення №29 (до 15 кг), Міні-відділення: вул. Водоп'яного, 9","descriptionRu":"Отделение №29 (до 15 кг), Мини-отделение: ул. Водопьяного, 9 ","siteKey":"13268"},{"description":"Поштомат \"ПриватБанк\" №1001 : вул. Січеславська, 25","descriptionRu":"Почтомат \"ПриватБанк\" №1001: ул. Сечеславская, 25","siteKey":"10415"},{"description":"Поштомат \"ПриватБанк\" №1002: пр. Південний, 20","descriptionRu":"Почтомат \"ПриватБанк\" №1002: пр. Южный, 20","siteKey":"11007"},{"description":"Поштомат \"ПриватБанк\" №1004: просп. Поштовий, 3","descriptionRu":"Почтомат \"ПриватБанк\" №1004: просп. Почтовый, 3","siteKey":"11009"},{"description":"Поштомат \"ПриватБанк\" №1005: вул. Адмiрала Головка, 40, прим. 13","descriptionRu":"Почтомат \"ПриватБанк\" №1005: ул. Адмирала Головко, 40, пом. 3","siteKey":"11010"},{"description":"Поштомат \"ПриватБанк\" №1006: просп. Гагарiна, 27, прим. 10","descriptionRu":"Почтомат \"ПриватБанк\" №1006: просп. Гагарина, 27, пом. 10","siteKey":"11011"},{"description":"Поштомат \"ПриватБанк\" №1007: вул. Світальського Миколи, 7б","descriptionRu":"Почтомат \"ПриватБанк\" №1007: ул. Свитальского Николая, 7б","siteKey":"11012"},{"description":"Поштомат \"ПриватБанк\" №1008: вул. Володимира Великого, 18","descriptionRu":"Почтомат \"ПриватБанк\" №1008: ул. Владимира Великого, 18","siteKey":"11013"},{"description":"Поштомат \"ПриватБанк\" №1009: просп. Перемоги, 35, прим. 131","descriptionRu":"Почтомат \"ПриватБанк\" №1009: просп. Победы, 35, пом. 131","siteKey":"11017"},{"description":"Поштомат \"ПриватБанк\" №1010: вул. Героїв АТО, 61, прим. 54","descriptionRu":"Почтомат \"ПриватБанк\" №1010: ул. Героев АТО, 61, пом. 54","siteKey":"11019"},{"description":"Поштомат \"ПриватБанк\" №1011: мікрорайон 5-й Зарічний, 5, прим. 65","descriptionRu":"Почтомат \"ПриватБанк\" №1011: мкр. 5-й Заречный, пом. 65","siteKey":"11021"},{"description":"Поштомат \"ПриватБанк\" №1012: просп. Перемоги, 28","descriptionRu":"Почтомат \"ПриватБанк\" №1012: просп. Победы, 28","siteKey":"11022"},{"description":"Поштомат \"ПриватБанк\" №1014: вул. Терещенка Володимира, 5а, прим. 15","descriptionRu":"Почтомат \"ПриватБанк\" №1014: ул. Терещенко Владимира, 5а, пом. 15","siteKey":"11023"},{"description":"Поштомат \"ПриватБанк\" №1016: вул. Калнишевського Петра, 7","descriptionRu":"Почтомат \"ПриватБанк\" №1016: ул. Калнышевского Петра, 7","siteKey":"11961"},{"description":"Поштомат \"ПриватБанк\" №1017: вул. Лермонтова, 29","descriptionRu":"Почтомат \"ПриватБанк\" №1017: ул. Лермонтова, 29","siteKey":"11962"},{"description":"Поштомат \"ПриватБанк\" №1018: просп. Миру, 7","descriptionRu":"Почтомат \"ПриватБанк\" №1018: просп. Мира, 7","siteKey":"11963"},{"description":"Поштомат \"ПриватБанк\" №1019: вул. Героїв АТО, 35","descriptionRu":"Почтомат \"ПриватБанк\" №1019: ул. Героев АТО, 35","siteKey":"11964"},{"description":"Поштомат \"ПриватБанк\" №1020: вул. Соборності, 94","descriptionRu":"Почтомат \"ПриватБанк\" №1020: ул. Соборности, 94","siteKey":"11965"},{"description":"Поштомат \"ПриватБанк\" №1021: вул. Криворіжсталі, 9, прим. 16","descriptionRu":"Почтомат \"ПриватБанк\" №1021: ул. Криворожстали, 9, пом. 16","siteKey":"11966"},{"description":"Поштомат \"ПриватБанк\" №1022: вул. Співдружності, 68а","descriptionRu":"Почтомат \"ПриватБанк\" №1022: ул. Содружества, 68а","siteKey":"12418"},{"description":"Поштомат \"ПриватБанк\" №1023: вул. Колачевського Сергія, 56","descriptionRu":"Почтомат \"ПриватБанк\" №1023: ул. Колачевского Сергея, 56","siteKey":"12419"},{"description":"Поштомат \"ПриватБанк\" №1024: вул. Ватутіна, 68","descriptionRu":"Почтомат \"ПриватБанк\" №1024: ул. Ватутина, 68","siteKey":"12420"},{"description":"Поштомат \"ПриватБанк\" №1025: вул. Січеславська, 7, кв. 10","descriptionRu":"Почтомат \"ПриватБанк\" №1025: ул. Сечеславская, 7, кв. 10","siteKey":"12421"},{"description":"Поштомат \"ПриватБанк\" №1026: мкрн. Ювілейний, 4, прим. 101","descriptionRu":"Почтомат \"ПриватБанк\" №1026: мкрн. Юбилейный, 4, пом. 101","siteKey":"12422"},{"description":"Поштомат \"ПриватБанк\" №1027: бул. Вечірній, 18/253","descriptionRu":"Почтомат \"ПриватБанк\" №1027: бул. Вечерний, 18/253","siteKey":"12423"},{"description":"Поштомат \"ПриватБанк\" №1028: пл. Визволення, 1к","descriptionRu":"Почтомат \"ПриватБанк\" №1028: пл. Освобождения, 1к","siteKey":"12424"},{"description":"Поштомат \"ПриватБанк\" №1029: вул. Фукса Едуарда, 63/19","descriptionRu":"Почтомат \"ПриватБанк\" №1029: ул. Фукса Эдуарда, 63/19","siteKey":"12425"},{"description":"Поштомат \"ПриватБанк\" №1030: вул. Володимира Великого, 40","descriptionRu":"Почтомат \"ПриватБанк\" №1030: ул. Владимира Великого, 40","siteKey":"12426"},{"description":"Поштомат \"ПриватБанк\" №1031: вул. Авраменко Івана, 21","descriptionRu":"Почтомат \"ПриватБанк\" №1031: ул. Авраменко Ивана, 21","siteKey":"12427"},{"description":"Поштомат \"ПриватБанк\" №1032: вул. Ватутіна, 31","descriptionRu":"Почтомат \"ПриватБанк\" №1032: ул. Ватутина, 31","siteKey":"12428"},{"description":"Поштомат \"ПриватБанк\" №1033: вул. Колачевського Сергія, 24, кв. 60","descriptionRu":"Почтомат \"ПриватБанк\" №1033: ул. Колачевского Сергея, 24, кв. 60","siteKey":"12749"},{"description":"Поштомат \"ПриватБанк\" №1034: мкр. 7-й Зарічний, 19, кв. 3","descriptionRu":"Почтомат \"ПриватБанк\" №1034: мкр. 7-й  Заречный, 19, кв. 3","siteKey":"12750"},{"description":"Поштомат \"ПриватБанк\" №1035: вул. Соборності, 7, прим. 18","descriptionRu":"Почтомат \"ПриватБанк\" №1035: ул. Соборности, 7, пом. 18","siteKey":"12751"},{"description":"Поштомат \"ПриватБанк\" №1036: вул. Костенка, 21","descriptionRu":"Почтомат \"ПриватБанк\" №1036: ул. Костенко, 21","siteKey":"12752"},{"description":"Поштомат \"ПриватБанк\" №1037: просп. Гагаріна, 4/а ТЦ Плаза-2","descriptionRu":"Почтомат \"ПриватБанк\" №1036: просп. Гагарина, 4/а ТЦ Плаза 2","siteKey":"13430"}]

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = (value,warehouses) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  console.log('count of warehouses : '+warehouses.length)

  return warehouses;
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.description;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
     <b>{suggestion.description}</b>
  </div>
);

export default class WarehouseSuggestionComponent extends React.Component {
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
  	console.log('re-render')
  	this.setState({
        suggestions: getSuggestions(value,warehousesList)
      });
    
  };

  onSuggestionSelected= (event, {suggestion}) =>{
  	console.log(suggestion);
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
      placeholder: 'Оберіть Відділення',
      value,
      onChange: this.onChange
    };

    // Finally, render it!
    return (
    	
    		
    	
    	<select>
        { warehousesList.map( (item) => 
           <option value={item.description} key={item.siteKey}>{item.description}</option>
        )};
      </select>
    );
  }
}