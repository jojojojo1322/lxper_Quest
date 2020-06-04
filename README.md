# 프로젝트 실행

- git clone https://github.com/jojojojo1322/lxper_Quest
- yarn
- yarn start

# 사용한 외부 라이브러리

- axios = HTTP 통신을 위한 라이브러리
- react router dom - Link등의 라우팅을 위한 라이브러리

# 전체 페이지 구성

- [x] 문제 리스트 화면
- [x] 문제 디테일 화면
- [x] 문제 생성/수정 화면
- [x] 틀린 문제 리스트 화면

## 출제자 / 학생 구분

- 로그인시 localStorage "role" true / false
- 로그인시 localStorage "true/fasle quest" 배열

### 출제자 일 경우

- [x] 화면에 출제 버튼 출력
- [x] 문제 디테일 화면 "삭제/수정"버튼 출력

### 학생 일 경우

- [x] 문제 CUD 불가능
- [x] localStorage에 맞힌 문제 / 틀린 문제
- [x] 틀린 문제 리스트 페이지 구현

# 소스폴더구조

└─src
│ index.js
│  
├─Components
│ │ App.js
│ │ Auth.js -인증기능
│ │ Header.js -navigator
│ │ Routes.js -Router
│ │  
│ └─style
│ App.css  
│ Header.css
│  
└─Routes
├─Quest - 문제 리스트 기능( +오답 문제 리스트 )
│ Quest.css
│ Quest.js
│ QuestWrong.js
│  
├─QuestCreate - 문제 생성 기능
│ QuestCreate.css
│ QuestCreate.js
│  
├─QuestDetail - 문제 디테일 기능 (문제풀이 피드백)
│ QuestDetail.css
│ QuestDetail.js
│  
└─QuestEdit - 문제 수정 기능
QuestEdit.css
QuestEdit.js
