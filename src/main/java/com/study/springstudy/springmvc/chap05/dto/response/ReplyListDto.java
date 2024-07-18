package com.study.springstudy.springmvc.chap05.dto.response;

import com.study.springstudy.springmvc.chap04.common.PageMaker;
import lombok.*;

import java.util.List;

@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
/*
{
        "replies":[
             {}, {}, {}
        ]
}
*/
// 댓글 목록 dto
public class ReplyListDto {

    /*
    [
    {}, {}, {}
    ]
     */

    private PageMaker pageInfo; // 이름이 key값이 됨.
    //댓글들 뭉텅이들이 들어 있음(뭉텅이 안에는 ReplyDetailDto 포함)
    private List<ReplyDetailDto> replies;
}
