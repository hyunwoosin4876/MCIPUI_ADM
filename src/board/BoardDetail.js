import { apis } from '../Api';
import { useQuery } from "react-query";
import { useParams } from 'react-router-dom';

function BoardDetail() {
  const params = useParams();
  const paramsData = {"seq" : params.id};

  const { isLoading, isError, data, error} = useQuery("reactBoardDetail", () => apis.boardDetail(paramsData)
    , {
      retry : 0 // error시 재실행 여부
      , onSuccess: data => {
        console.log(data);
      }
      , onError: error => {
        console.log(error); 
      }
    }
  );
  
  if(isLoading) {return <span>Loading....</span>}
  if(isError) {return <span>Error....</span>}
  
  const goUpdBoarPage = () => {
    window.location.href = "/BoardUpdate/"+ params.id;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>
               게시판
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>제목</td>
            <td>{data.data.title}</td>
          </tr>
          <tr>
            <td>내용</td>
            <td>{data.data.content}</td>
          </tr>
        </tbody>
        <tfoot>
          <button onClick={goUpdBoarPage}>글수정</button>
        </tfoot>
      </table>
    </div>
  );
}

export default BoardDetail;
