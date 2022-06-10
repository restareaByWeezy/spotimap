#  :cd: 추억이 담긴 장소에서 들었던 노래를 기록하세요!

* Spotify api와 kakao map api를 활용한 노래 검색 및 지도 저장 서비스

# 배포 링크

https://spotimap.vercel.app/

## Dependencies

<span><img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/></span>
<span><img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/></span>
<span><img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=ESLint&logoColor=white"/></span>
<span><img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=Prettier&logoColor=white"/></span>
<span><img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white"/></span>
<span><img src="https://img.shields.io/badge/stylelint-263238?style=flat-square&logo=stylelint&logoColor=white"/></span>
<span><img src="https://img.shields.io/badge/ReactRouter-CA4245?style=flat-square&logo=ReactRouter&logoColor=white"/></span>
<span><img src="https://img.shields.io/badge/recoil-FFFF00?style=flat-square&logo=recoil&logoColor=white"/></span>
<span><img src="https://img.shields.io/badge/store-00FF00?style=flat-square&logo=store&logoColor=white"/></span>


## 실행 화면과 기능

![ezgif-2-d7b0eb1131](https://user-images.githubusercontent.com/64529155/173087860-bd2dc15e-d917-42ae-81ac-d744435fe30b.gif)

* 사용자에게 spotify 로그인을 요구하지 않게 Client Credentials Flow를 이용
-> 참고: [Client Credentials Flow | Spotify for Developers](https://developer.spotify.com/documentation/general/guides/authorization/client-credentials/)

* 첫 화면 랜더시 인증 정보를 저장하고 로컬스토리지에 저장된 맵마커에 대한 정보가 있다면 가져오고 없다면 빈 지도가 나오게 됩니다.
* 원하는 장소를 맵 상에서 클릭하고 원하는 노래를 검색해서 클릭하면  오른쪽 위 노래와 좌표를 선택하라는 문구가 사라집니다.
* 맵마커의 이미지는 해당 앨범자켓이 들어가게 됩니다.
* 맵마커를 클릭하면 해당 마커의 노래 정보와 앨범자켓을 표시합니다.
* 맵마커 내부에 휴지통 버튼을 클릭하면 마커가 지워집니다.
* 삭제하지 않는 한 새로고침해도 지워지지 않습니다.


## 어려웠던 점, 배운 점, 느낀 점

* 화면 우상단에 노래 스트리밍 기능을 붙히려고 했으나 token scopes를 추가하는데 어려움이 있어 이 부분에 있어 추가적인 공부를 하고 기능 추가 예정입니다.
-> 참고: [Authorization Scopes | Spotify for Developers](https://developer.spotify.com/documentation/general/guides/authorization/scopes/)

* kakao map같은 경우 타입스크립트에 어려움을 느껴 라이브러리를 이용하였는데 아직 정형화 되지 않은 라이브러리여서 의문점이 많아 처음으로 이슈도 남겨보고 답도 받게되었습니다.
-> 참고: [‘클릭한 위치에 마커 표시하기’ undefined 타입 오류 · Issue #20 · JaeSeoKim/react-kakao-maps-sdk · GitHub](https://github.com/JaeSeoKim/react-kakao-maps-sdk/issues/20)


* map marker의 스타일링이 기본으로 들어가 있는데 라이브러리를 뜯어봐도 해제하는 법을 아직 찾지 못해 조금 더 공부해보고 원하는 스타일로 바꿀 예정입니다.

* 전부터 만들어보고 싶은 서비스였습니다.  만든 프로덕트가 직접적으로 유저와 인터렉팅이 되는 매력을 느껴 프론트엔드에 대해 공부하였는데 이번 프로젝트를 통해 다시 한 번 그 재미를 느끼는 계기가 되었습니다.
