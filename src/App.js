import './App.css';
import Input from './components/input/Input';
import Button from './components/button/Button';
import Form from './components/form/Form';
import { useState } from 'react';
function App() {

  const [user, setUser] = useState({ name: '', password: '', RememberMe: 'false' });
  const handleChange = (e) => {
    setUser({ ...user, name: e.target.value });
    console.log(user);
  }
  const handleChange1 = (e) => {
    setUser({ ...user, password: e.target.value });
    console.log(user);
  }
  const LogIn = () => {
    if (user.name===''){
      alert('Email is required');
    }
    else if(user.password===''){
      alert('Password is required')
    }
    

  }

  return (
    <div className="App">
      <div className="hyp">
        <h3> Hypance </h3>
      </div>
      <Form >
        <h1> Log In </h1>
        <Input type={'email'} required={Input.required} value={user.name} placeHolder={'Enter email or username'} onChange={handleChange} />
        <Input type={'password'} required={Input.required} value={user.password} placeHolder={'Enter password'} onChange={handleChange1} />
        <div className="cb">
          <Input type={'checkbox'} value={'false'} id="rememberme" name="rememberme" />  Remember me  
        </div>
        <Button onClick={LogIn} />
        <div className='links'>
          <a href="/componentAdi"> Forgot password ? </a>
          <a href="/componentAdi"> Create a new account </a>
        </div>
      </Form>
    </div>
  );
}

export default App;
