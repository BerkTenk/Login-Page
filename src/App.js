import logo from './logo.svg';
import './App.css';
import Input from './components/input/Input';
import Button from './components/button/Button';
import Form from './components/form/Form';
import { useState } from 'react';
function App() {

  const [user, setUser, iki, üc, dört] = useState({ name: '', password: '', RememberMe: 'false' });
  const handleChange = (e) => {
    setUser({ ...user, name: e.target.value });
    console.log(user);
  }
  const handleChange1 = (e) => {
    setUser({ ...user, password: e.target.value });
    console.log(user);
  }

  return (
    <div className="App">
      <div className="hyp">
        <h3> Hypance </h3>
      </div>
      <Form >
        <h1> Log in </h1>
        <Input type={'email'} value={user.name} placeHolder={'Enter email or username'} onChange={handleChange} />
        <Input type={'password'} value={user.password} placeHolder={'Enter password'} onChange={handleChange1} />
        <div className="cb">
          <Input type={'checkbox'} value = {'false'} id="topping" name="topping" />Remember Me
        </div>
        <Button onClick={() => { alert("merhaba") }} />
      </Form>
    </div>
  );
}

export default App;
