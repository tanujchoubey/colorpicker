import logo from './logo.svg';
import './App.css';
// import ColorPicker from './colorpicker';
import ColorPicker from './ColorPicker';

const App = () => {
  const colors = ['#FF0000', '#00FF00', '#0000FF'];

  return (
    <div className="app">
      <h1>Color Picker</h1>
      <ColorPicker colors={colors} />
    </div>
  );
};

export default App;
