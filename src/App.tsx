import './App.css'
import TestButton from './Buttons/Button';
import TestCard from './Card/Card';
import TestSpinn from './Loading/Loading';

function App() {
  return (
    <div className={'w-full flex flex-col h-screen'}>
      Card
      <TestCard />

      Button
      <TestButton />

      Spinner
      <TestSpinn />

    </div>
  )
}

export default App
