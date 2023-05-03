import { Link } from 'react-router-dom';
import LogIn from './loginForm/LogIn'

function Main() {
  return (
    <div>
      <ul>
        <li>React Test </li>
        <li>
          <LogIn />
        </li>
        <li>
            <Link to="BoardList">board</Link>
          </li>
      </ul>
    </div>
  );
}

export default Main;
