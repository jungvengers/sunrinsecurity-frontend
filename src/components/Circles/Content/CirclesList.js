import React from "react";
import Circles from "./CirclesContent";

import './List.scss';

const CirclesList = () => {
    const lists = [
        ["Emotion", "이모션은 선린인터넷고등학교 정보보호과 전공동아리로 인공지능에 관심을 가진 학생들이 모여 구성된 인공지능 개발 동아리입니다. 저희는 인공지능 개발에 기본이 되는 프로그래밍 언어 파이썬을 배우고, 파이썬을 이용한 데이터 분석과 인공지능의 기초적인 부분과 인공지능에서 꼭 알아야 하는 중요 개념들을 위주로 수업을 진행합니다. 또한 다양한 프로젝트를 진행함으로써 자신의 프로그래밍 실력과 인공지능 개발 실력을 향상시키는 동아리입니다.", "/images/Circles/emotion.png", "http://www.ernotion.kr"],
        ["Layer7", "Layer7은 2001년 부터 보안에 관심 있는 학생들끼리 모여 동아리를 만들고, 해킹이라는 흔치 않은 분야에서 서로가 서로를 도우며 보안을 공부해왔습니다. 체계적인 커리큘럼과 동아리원들의 열정, 책임감은 20년이라는 역사를 뒷받침해왔습니다. 세계 해커들의 올림픽이라는 데프콘, 국방부에서 주관하는 WITHCON 등 유명 대회에서 수상하고, 국제 해킹 컨퍼런스 코드게이트 등에서 준비한 프로젝트를 발표하며, 다양한 분야에서 실적을 내고 있습니다.", "/images/Circles/layer7.png", "https://layer7.kr/"],
        ["Nefus", "NEFUS는 2003년에 시작된 선린인터넷고등학교 정보보호과 IoT / Network 전공동아리입니다. 올해로 19년째 이어지고 있는 유서 깊은 동아리이며, 처음 동아리 개설 당시에 네트워크를 공부하고자 하는 학생들이 모여서 현재는 IoT에 대해서 공부하며 여러 가지 분야에서 실적을 내며 두각을 드러내고 있는 동아리입니다. 또한 특유의 선,후배 사이 끈끈한 인적 네트워크를 기반으로 네트워크, 개발 등을 포함한 다양한 분야의 노하우를 주고받으며 공부하고 있습니다.", "/images/Circles/nefus.png", "http://www.nefus.kr/"],
        ["TeamLog", "TeamLog는 선린인터넷고등학교 정보보호과 네트워크/서버 전공동아리입니다. 네트워크 시뮬레이션 툴인 패킷트레이서를 활용하여 네트워크를 가상으로 구축해 보고, Node.js를 활용한 서버 프로그래밍(백엔드) 개발, 다양한 웹 해킹 기법과 서버 구축 및 보안을 주로 학습하고 있습니다. 이외에도 웹 디자인, 시스템 해킹 등의 특강들을 통해 다양한 분야의 인재를 양성할 수 있도록 노력하고 있습니다.", "/images/Circles/teamlog.png", "http://www.teamlog.kr/"],
        ["Unifox", "Unifox는 선린인터넷고등학교 정보보호과 전공동아리로 웹, 보안, 알고리즘 등 다양한 분야를 공부하는 학생들이 모여 구성된 프로그래밍 동아리입니다. 저희는 부원들의 관심 분야에 맞추어 웹개발, 해킹, 알고리즘 등 다양한 분야의 수업을 진행하고 선후배간 멘토링을 통해 자신이 원하는 분야를 자유롭게 공부합니다. 또한 팀, 개인 프로젝트를 진행하며 자신이 공부하고 싶은 분야의 실력을 향상시킵니다.", "/images/Circles/unifox.png", "http://unifox.kr/"],
    ]

    const Content = lists.map(list => (
        <div className="circles-content">
            <a href={list[3]} >
                <Circles name={list[0]} content={list[1]} img={list[2]} />
            </a>
        </div>
    ))

    return (
        <div className="circles-list">
            {Content}
        </div>
    )
}

export default CirclesList;