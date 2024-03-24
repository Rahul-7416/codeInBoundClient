import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { ThankYou, WelcomePage, SurveyForm } from './components/index.js';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='https://surveyformcodeinbound.netlify.app/' element={<WelcomePage/>} ></Route>
        <Route path='https://surveyformcodeinbound.netlify.app/survey-form' element={<SurveyForm/>} ></Route>
        <Route path='https://surveyformcodeinbound.netlify.app/thank-you' element={<ThankYou/>} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
