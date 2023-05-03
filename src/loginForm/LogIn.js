import { useState } from 'react';
import { apis } from '../Api';
import { useMutation } from 'react-query';

function LogOut() {
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [name, setName] = useState('');
  const [age, SetAge] = useState('');

  let paramsData = {};
    
  const mutation = useMutation("login", () => apis.login(paramsData), {
      retry : 0 // error시 재실행 여부
      , onSuccess: data => {
        setLoading(false);
        console.log(data);
        setId('');
        setPw('');
        setName(data.data.name);
        SetAge(data.data.age);
        alert(data.data.resultMsg);
      }
      , onError: error => {
        setLoading(false);
        console.log(error); 
        alert("error~!!!!!!");
      }
    }
  );

  const login = () => {
    if(id == '') {
      alert('아이디를 입력하세요');
      return false;
    }
    if(pw == '') {
      alert('비밀번호를 입력하세요');
      return false;
    }
    paramsData = {
      "id":id
      , "pw":pw
    }
    console.log(paramsData);
    mutation.mutate(paramsData);
  }

  const changeIdText = (e) => {
    setId(e.target.value);
  }

  const changePwText = (e) => {
    setPw(e.target.value);
  }

  return (
    <div>
      <table>
            <tr>
              <td>id : <input type="text" id="id" name="id" width="100" height="100" placeholder="ID" value={id} onChange={changeIdText} /></td>
            </tr>
            <tr>
              <td>pw : <input type="password" id="pw" name="pw" width="100" height="100" placeholder="PW" value={pw} onChange={changePwText} /></td>
            </tr>
            <tr>
              <td><button onClick={login}>로그인</button> </td>
            </tr>
          </table>
    </div>
  );
}

export default LogOut;
