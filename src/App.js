import './App.css';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="flex h-screen p-5">
      <Navbar />

      <div className='basis-1/4' >
        <TransactionForm />
      </div>
      <div className='basis-3/4 h-screen'>
        <TransactionList />
      </div>
    </div>
  );
}

export default App;
