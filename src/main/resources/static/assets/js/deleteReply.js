import { BASE_URL } from "./reply.js"
import { fetchInfScrollReplies } from "./getReply.js";
//댓글 삭제 비동기 요청 처리 함수 ID(`rno`) 댓글번호를 인자로 받음.
const fetchDeleteReply = async(rno) => {

//`rno`(댓글번호)를 포함한 URL로 DELETE 요청을 보냄
  const res = await fetch(`${BASE_URL}/${rno}`, {
    method : 'DELETE'
  });
// 응답 상태 코드가 200(성공)이 아니면, 경고창 띄움
  if (res.status !== 200) {
    alert('삭제에 실패했습니다!');
    return;
  }

// 성공적으로 삭제되면, `fetchInfScrollReplies` 함수를 호출하여 댓글 목록 갱신
  fetchInfScrollReplies();
  window.scrollTo(0, 0); // 삭제 후 페이지 상단으로 이동

};

//댓글 삭제 처리 이벤트 등록 함수
export function removeReplyClickEvent() {

  // id가 'replyData' 에 클릭이벤트 적용
  document.getElementById('replyData').addEventListener('click', e => {
    
    //삭제버튼이 a태그이며, 기능 중지시키기
    e.preventDefault();
  
    //e.taget : 클릭된 실제 요소
    //클릭된 요소 id가 replyDelBtn과 일치하는지 확인
    //일치하지 않으면 함수 실행 종료
    if(!e.target.matches('#replyDelBtn')) return;

    //확인 클릭하면 true 취소하면 false => 취소 시 함수 실행 종료
    if(!confirm('정말 삭제할까요??')) return;

    //console.log('삭제버튼 클릭!');
    const rno = e.target.closest('#replyContent').dataset.replyId;
    fetchDeleteReply(rno);

  });
  
}