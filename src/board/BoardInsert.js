import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useParams } from 'react-router-dom';
import { apis } from '../Api';

function BoardInsert() {
  // let title = ''; // 제목
  // let content = '';
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [mutationLoading, setMutationLoading] = useState(false);
  const [mutationError, setMutationError] = useState(false);

  let paramsData = {};

  const mutation = useMutation("boardInsert", () => apis.boardInsert(paramsData), {
      retry : 0 // error시 재실행 여부
      , onSuccess: data => {
        setMutationLoading(false);
        console.log(data);
        alert(data.resultMsg);
      }
      , onError: error => {
        setMutationLoading(false);
        setMutationError(true);
        console.log(error); 
        alert("error~!!!!!!");
      }
    }
  );

  if(mutationLoading){return <span>Loading.....</span>}
  if(mutationError){return <span>Error.....</span>}

  const InsBoardData = () => {
    paramsData = {
      "title" : title
      , "content" : content
    }

    setMutationLoading(true);
    mutation.mutate(paramsData);
    
  }

  const changTitle = (e) => {
    setTitle(e.target.value);
  }

  const changContent = (e) => {
    setContent(e.target.value);
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>게시판 작성</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>제목</td>
            <td>
              <input type="text" id="title" name="title" width="100" height="100" value={title} placeholder="제목입력" onChange={changTitle} />
            </td>
          </tr>
          <tr>
            <td>내용</td>
            <td>
              <textarea placeholder="내용 입력" id="content" name="content" onChange={changContent}> 
                {content}
              </textarea>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>
              <button onClick={InsBoardData}>작성</button> 
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default BoardInsert;
