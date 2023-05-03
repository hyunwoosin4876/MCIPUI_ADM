import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useParams } from 'react-router-dom';
import { apis } from '../Api';

function BoardInsert() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [mutationLoading, setMutationLoading] = useState(false);
  const [mutationError, setMutationError] = useState(false);
  let paramsData = {};

  const params = useParams(); 
  paramsData =  {
    "seq" : params.id
  };
  const { isLoading, isError, data, error} = useQuery("reactBoardDetail", () => apis.boardDetail(paramsData)
    , {
      retry : 0 // error시 재실행 여부
      , onSuccess: data => {
        console.log(data);
        console.log(data.data.title);
        console.log(data.data.content);
        setTitle(data.data.title);
        setContent(data.data.content);
        console.log(title);
        console.log(content);
      }
       , onError: error => {
        console.log(error); 
      }
    }
  );
  
  const mutation = useMutation("boardUpdate", () => apis.boardUpdate(paramsData), {
      retry : 0 // error시 재실행 여부
      , onSuccess: data => {
        setMutationLoading(false);
        console.log(data);
        alert(data.data.resultMsg);
      }
      , onError: error => {
        setMutationLoading(false);
        setMutationError(true);
        console.log(error); 
      }
    }
  );

  if(mutationLoading){return <span>Loading.....</span>}
  if(mutationError){return <span>Error.....</span>}

  if(isLoading) {
    return <span> Loading....... </span>
  }

  if(isError) {
    return <span> error : {error}</span>
  }


  const UpdBoardData = () => {
    paramsData = {
      "seq" : params.id
      , "title" : title
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
                <button onClick={UpdBoardData}>수정</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default BoardInsert;
