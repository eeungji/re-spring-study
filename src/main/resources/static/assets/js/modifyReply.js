
// 수정 이벤트 등록
export function modifyReplyClickEvent() {

  document.getElementById('replyData').addEventListener('click', e => {
    
    //a버튼 링크 기능 제거
    e.preventDefault();

    // 버튼이 replyModBtn 이 아닐 경우 return(중지)
    if(!e.target.matches('#replyModBtn')) return;
    
    // 텍스트 읽기
    //console.log(e.target.closest('.row').firstElementChild.textContent);
    
    // 수정 버튼 근처 텍스트 읽기 dom을 어떻게 탐색해야 텍스트를 읽을 수 있을까
    // 읽은 텍스트를 모달에 가져오기

    // 수정 전 텍스트
    // e.target : 클릭된 버튼 요소
    // closest('.row') : e.target 요소에서 시작하여 가장 가까운 조상 요소 중에서
    // 클래스 이름이 `row`인 요소 찾기 만약 `row` 클래스의 조상 요소가 있다면
    // 그 조상 요소가 반환
    // `firstElementChild` 이 프로퍼티는 `row` 클래스의 요소 내에서
    // 첫 번째 자식 요소를 참조
    const replyText = e.target.closest('.row').firstElementChild.textContent
    
    // 모달의 textArea에 넣기
    // .value : HTML 폼 요소의 현재 값을 설정하거나 반환
    document.getElementById('modReplyText').value = replyText;
    
    

  });
}