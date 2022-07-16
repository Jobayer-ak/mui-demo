import './App.css';
import MuiButton from './components/MuiButton';
import MuiCheckbox from './components/MuiCheckbox';
import MuiRadioButton from './components/MuiRadioButton';
import MuiSelect from './components/MuiSelect';
import MuiTextFiled from './components/MuiTextFiled';
import MuiTypography from './components/MuiTypography';

function App() {
  return (
    <div className="App">
      {/* <MuiTypography></MuiTypography> */}
      {/* <MuiButton></MuiButton> */}
      {/* <MuiTextFiled/> */}
      {/* <MuiSelect/> */}
      <MuiRadioButton/>
      <MuiCheckbox/>
    </div>
  );
}

export default App;
