import './App.css';
import { l } from './helpers/languageTools';
import { selectService } from './services/selectService';
import { newParameters } from './helpers/urlTools';

function App() {
  const officialEmail = "caballerosoftwareinc@gmail.com";
  const backendUrl = "https://caballero-account.herokuapp.com/";
  //const backendUrl = "http://localhost:8080/";

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const lang: string = urlParams.get('lang')!;
  const signed: boolean = (localStorage.getItem('email') === null) || (localStorage.getItem('email') === '');
  

  if ((lang === 'en') || (lang === 'fr')) {
    document.getElementById("html")!.lang = l({
      "en": "en",
      "fr": "fr"
    }, lang);
    return selectService({
      lang,
      queryString,
      urlParams,
      backendUrl,
      officialEmail,
      signed
    })
  } else {
    newParameters(`?serv=main&page=welcome&lang=en`);
    return <noscript />
  }
}

export default App;
