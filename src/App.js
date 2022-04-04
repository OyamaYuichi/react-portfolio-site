import './App.css';
// Headerコンポーネントをimportする
import { Header } from './components/Header';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

function App() {
  return (
    // 実は１つのJSXには１つの親要素だけしか含められない。その親の中に複数の子・孫を含めることはもちろん可能。
    // 今回の例でいえばHeaderとSkillsそれぞれを覆う親要素が必要。
    // Fragmentは子要素をまとめるために、不要なノード(divやspanなど)を追加せずに、唯一の親要素として機能してくれる。
    // <React.Fragment>...</React.Fragment>とするか、それを省略して<>...</>でも可能。
    <>
      <Header />
      <Skills />
      <Contact />
    </>
  );
}

// このファイルを外部から参照するためにはexportする必要がある
export default App;
