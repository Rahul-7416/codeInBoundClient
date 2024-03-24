import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { ThankYou, WelcomePage, SurveyForm } from './components/index.js';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<WelcomePage/>} ></Route>
        <Route path='/survey-form' element={<SurveyForm/>} ></Route>
        <Route path='/thank-you' element={<ThankYou/>} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
