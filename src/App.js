import logo from './logo.svg';
import './App.css';
import GlobalStyle from './styles/GlobalStyle';
import { Counter } from './Components/Counter/Counter';
import Logo from './Components/logo/Logo';

function App() {
  return (
  <>
    <Counter/>
    <Logo/>
    <GlobalStyle/>
  </>
  )
}

export default App;
