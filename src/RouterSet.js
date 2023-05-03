import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Main';
import BoardList from './board/BoardList';
import BoardDetail from './board/BoardDetail';
import BoardInsert from './board/BoardInsert';
import BoardUpdate from './board/BoardUpdate';

function RouterSet() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/BoardList" element={<BoardList />}></Route>
          <Route path="/BoardDetail/:id" element={<BoardDetail />}></Route>
          <Route path="/BoardInsert" element={<BoardInsert />}></Route>
          <Route path="/BoardUpdate/:id" element={<BoardUpdate />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default RouterSet;
