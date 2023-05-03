import axios from 'axios';

const boardApi = axios.create({
	baseURL: '',
	headers: {
		'Content-type': 'application/json; charset=UTF-8'
		, 'accept': 'application/json,'
    , 'Access-Control-Allow-Origin': '*'
    , 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,OPTIONS'
    , 'Access-Control-Allow-Headers':'Content-Type, Authorization, Content-Length, X-Requested-With'
	}
});

export const apis = {
  login : (data) => boardApi.post('/api/member/login.do', data)
	, boardList: (data) => boardApi.get('/api/board/ReactBoardList.do', data)
  , boardDetail: (data) => boardApi.post('/api/board/ReactBoardDetail.do', data)
  , boardInsert: (data) => boardApi.post('/api/board/ReactBoardInsert.do', data)
  , boardUpdate: (data) => boardApi.post('/api/board/ReactBoardUpdate.do', data)
}