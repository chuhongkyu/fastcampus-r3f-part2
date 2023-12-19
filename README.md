# 3D 인터랙티브 웹 개발 분야 이론 및 실습 강의 / 파트2 

# 3D 날씨 정보 웹 사이트

## 3D 개발 환경 구현

- [ ] 프로젝트 설명 및 개발 환경 설정 (vscode, github, r3f, node)
- [ ] 기본 Scene 구성 (canvas, box)
- [ ] 3D오브젝트 로드 방법 학습 (glb)
- [ ] 지구 3D 오브젝트 구현
- [ ] 날씨 3D오브젝트 구현 (해, 비, 구름, 미스트, 눈)

## Open API 활용 및 API KEY키 관리

- [ ] 날씨 Open API 소개 및 API KEY 관리 (API, 환경변수)
- [ ] 도시 날씨 데이터 호출 방법 학습 (fetch, promise)
- [ ] API 데이터와 3D오브젝트 연동
- [ ] 그룹 오브젝트 해당 오브젝트만 기억하기 (useMemo)
- [ ] 비동기 데이터(3D 오브젝트, API 데이터) 로딩 처리하기 (suspense)

## 3D 오브젝트 애니메이션 구현

- [ ] 3D오브젝트  회전 시키기 (useFrame)
- [ ] 3D오브젝트들 아치 형태로 위치시키기
- [ ] framer-motion-3D 라이브러리 소개
- [ ] 3D오브젝트 호버시 크기 변경

## Drei를 활용하여 인터랙티브 요소 제작

- [ ] Drei 라이브러리 간단 소개
- [ ] html,css를 Canvas에 구현 (Html)
- [ ] 카메라 인터랙션 구현 (Orbitcontrols)
- [ ] 3D오브젝트 클릭시 포커스 및 아웃 (Bounds, useBounds)

## 리액트 라우터 돔을 활용한 페이지 이동

- [ ] 리액트 라우터에 대한 이해
- [ ] API 데이터에 따른 상세 페이지 5개 제작
- [ ] 3D오브젝트 클릭시 해당 상세 페이지로 이동 시키기
- [ ] 페이지 이동간 애니메이션 관리 (AnimatePresence)

## 후처리 효과 및 실전 팁 바꾸기

- [ ] 마우스 형태 바꾸기 (css)
- [ ] 구름 효과 넣기 (Cloud)
- [ ] 별 효과 넣기 (Stars, Sparkles)


## 오류

```
프로젝트 예제 진행에 오류는 없지만...
Drei + CRA + webpack5

WARNING in ./node_modules/@mediapipe/tasks-vision/vision_bundle.mjs
Module Warning (from ./node_modules/source-map-loader/dist/cjs.js):
```

env 파일에 추가 하세요.

```
GENERATE_SOURCEMAP=false
```



[완성본 링크] - (https://mr-chu-weather.netlify.app/)