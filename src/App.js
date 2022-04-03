import './App.css';
// Headerコンポーネントをimportする
import { Header } from './components/Header';

function App() {
  return (
    <Header /> // Headerコンポーネントを呼び出す
  );
}

// このファイルを外部から参照するためにはexportする必要がある
export default App;
