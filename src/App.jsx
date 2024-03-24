import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { ThankYou, WelcomePage, SurveyForm } from './components/index.js';

function App() {

  return (
    // <div className='h-lvh w-lvw flex justify-center items-center p-5 bg-slate-600'>
    //   {/* <WelcomePage/> */}
    //   {/* <InputBox/> */}
    //   <SurveyForm/>
    //   {/* <ThankYou/> */}
    // </div>

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
