# 단어 공부 웹앱 토이 프로젝트 - SSULEC
React + Firebase를 이용한 프로젝트
## 프로젝트 소개
모바일을 우선적으로 생각해서 만든 웹프로젝트로 리액트를 사용하여 보이는 부분을 작성하고 파이어베이스를 이용하여 서버 파트 구성함.
## 개발기간
6.26 ~ 8.26
## 멤버 구성
cywin1018 
## 개발 환경
React, Firebase, 네이버API
### 주요기능
홈화면 : 첫화면에서 로그인을 하지 않아도 추천단어장을 볼 수 있으며, 로그인을 하면 단어를 북마크 할 수 있다. <br/>
검색화면 : 모르는 단어가 생기면 단어를 검색해서 그 뜻과 예문 등을 볼 수 있다. <br/>
로그인 : 구글계정이 있으면 직접 로그인이 가능하다. 없어도 회원가입시 생성한 계정으로 회원가입 가능. <br/>
회원가입 : 이메일,비밀번호, 닉네임을 입력받아 회원가입을 하거나, 구글 계정이 있으면 소셜 회원가입가능. <br/>
설정 : 로그인 시 내 정보 관리, 비밀번호 변경, 로그아웃, 버전 및 공지사항, 업데이트 등을 제공. <br/>
마이페이지 : 로그인 시 자신의 닉네임과 이메일을 확인하고, 북마크 한 단어를 볼 수 있으며 나만의 단어장으로 등록한 단어를 볼 수 있다. <br/>
비밀번호 찾기 : 비밀번호가 기억나지 않으면 이메일 인증을 이용하여 비밀번호를 재설정 할 수 있다. <br/>

### 아쉬웠던 부분
처음 배우는 React가 이해하기 어려웠고, 아무리 난이도가 낮은 Firebase라고 해도 혼자 하기에는 힘들었다.
또한 디자인 쪽을 구상하는데도 오래 걸렸으며, 개발하다가 디자인을 수정해야하는 일이 꽤 있었어서, 원래 구상했던 앱과 조금 달라졌다.
단어검색기능을 구현할 때, 네이버 API를 이용했는데, 원래는 네이버 외국어 사전 같은걸 가져와 결과를 보여주는 걸 생각했지만 있지 않아서
백과사전 api와 연결되어 있다. 나중에 papago API를 알게되어서 추후 업데이트 예정이다.
비밀번호 재설정 및 찾기를 하는 경우, 이메일 인증을 받는데 이메일 인증을 받으면 다음 버튼을 누를수 있도록 할려고 했는데,
이메일 인증과 다음버튼이 독립적으로 작동하는 부분이 아쉬웠다.

### 디자인툴 : Figma 사용
