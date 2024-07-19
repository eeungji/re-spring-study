package com.study.springstudy.springmvc.chap05.dto.request;
import com.study.springstudy.springmvc.chap05.entity.Reply;
import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EqualsAndHashCode
public class ReplyModifyDto {

    @NotNull //검증
    private Long rno; // 수정할 댓글의 댓글 번호
    @NotBlank
    private String newText; // 새로운 댓글 내용
    @NotNull
    private Long bno; // 수정 완료 후 새로운 목록을 조회하기 위해

    // 수정하려면 엔터티로 변환되야함
    // 엔터리로 변환하는 메서드
    public Reply toEntity() {
        return Reply.builder()
                .replyText(this.newText) //필드설정
                .replyNo(this.rno) //필드설정
                .boardNo(this.bno) //필드설정
                .build(); //build()를 호출하여 객체 반환
    }
}
