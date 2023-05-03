import { apis } from '../Api';
import { QueryClient, useQuery } from 'react-query';
import { Link } from 'react-router-dom';

function BoardList() {
  const goInsBoarPage = () => {
    window.location.href = "/BoardInsert";
  }

  const { isLoading, isError, data, error} = useQuery("boardList", () => apis.boardList(), {    
    retry : 0 // error시 재실행 여부
    , onSuccess: data => {
      console.log('성공');
    }
    , onError: error => {
      console.log('실패' + error)
    }
  }, {});
  if(isLoading) {return <span>Loading....</span>}
  if(isError) {return <span>Error....</span>}

  return (
    <div>
      게시판 리스트 입니다.
      <table board='1'>
        <thead>
          <tr> 
            <td>일련번호</td>
            <td>제목</td>
          </tr>
        </thead>
        <tbody>
            
              {
                data.data.map(item => {
                  return <tr>
                            <td>{item.seq}</td>
                            <td><Link to={'/BoardDetail/'+item.seq}>{item.title}</Link></td>
                          </tr>
                })
              }
        </tbody>
        <tfoot>
          <tr>
            <td>
              <button onClick={goInsBoarPage}>글쓰기</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default BoardList;
