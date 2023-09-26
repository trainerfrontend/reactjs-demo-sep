import Logo from './components/Global/Logo';
import Button from './components/Common/Button';
import Form from './Form/Form';
import NoState from './Form/NoState';
import './App.css';
import Heading from './components/Global/Heading/Heading';
import Counter from './Counter/Counter';
import { A, C } from './Form/MultipleComponents'
import OptimizedForm from './Form/OptimizedForm';
import List from './List/List'
import FetchUsers from './APIRequest/FetchUsers';
import AxiosUsers from './APIRequest/AxiosUsers';

const courseName = "jquery";

function App() {
  return (
    <>
      <AxiosUsers />
      <Counter initialCount={10} />
      {/* <List />
      <OptimizedForm /> */}
      {/* <Counter initialCount={10} />
      <Logo logoName={courseName} link={courseName} /> */}
    </>
  )
}

export default App;
