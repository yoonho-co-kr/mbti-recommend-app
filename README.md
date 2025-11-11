````markdown
# 🌟 MBTI 라이프 추천 가이드 (mbti-recommend-app)

MBTI 테스트를 통해 사용자의 성격 유형을 진단하고, 그 결과에 따라 맞춤형 직업 및 라이프스타일 추천을 제공하는 싱글 페이지 애플리케이션(SPA)입니다.

## ✨ 주요 기능

* **MBTI 테스트 진행:** 12가지 핵심 질문에 기반한 간결하고 신속한 테스트 환경 제공.
* **유형별 결과 분석:** 16가지 MBTI 유형별 이름, 상세 설명, 그리고 추천 분야 제시.
* **반응형 UI:** Tailwind CSS를 활용하여 모든 기기에서 최적화된 사용자 경험(UX) 제공.
* **점수 시각화 (예정):** 테스트 후 각 지표(E/I, S/N, T/F, J/P)의 점수를 시각적으로 표시하여 분석의 신뢰도 향상.

## 🛠️ 기술 스택 (Tech Stack)

| 구분 | 기술 | 설명 |
| :--- | :--- | :--- |
| **Frontend Framework** | **React** (with Hooks) | 상태 관리 및 컴포넌트 기반 UI 구성 |
| **Build Tool** | **Vite** | 빠르고 효율적인 개발 환경 및 번들링 |
| **Language** | **TypeScript** | 안정성과 유지보수성을 위한 정적 타입 지원 |
| **Styling** | **Tailwind CSS** | 유틸리티 기반의 빠르고 일관된 스타일링 |
| **Package Manager** | **Yarn Berry (v4)** | PnP(Plug and Play)를 활용한 의존성 관리 |

## 🚀 시작하는 방법 (Getting Started)

로컬 환경에서 개발 서버를 실행하고 프로젝트를 배포하는 방법을 안내합니다.

### 1. 프로젝트 복제

```bash
git clone [https://github.com/yoonho-co-kr/mbti-recommend-app.git](https://github.com/yoonho-co-kr/mbti-recommend-app.git)
cd mbti-recommend-app
````

### 2\. 의존성 설치

Yarn Berry PnP 환경이므로, `node_modules` 없이 간결하게 의존성을 설치합니다.

```bash
# Corepack이 활성화되어 있어야 합니다. (nvm 사용 시 npm install -g corepack)
yarn install
```

### 3\. 개발 서버 실행

```bash
yarn dev
```

> 서버가 시작되면 일반적으로 `http://localhost:5173`과 같은 주소로 접속할 수 있습니다.

### 4\. 프로젝트 빌드

프로덕션 배포를 위한 최적화된 파일을 생성합니다. 결과물은 `dist` 폴더에 저장됩니다.

```bash
yarn build
```

## 🌐 배포 (Deployment)

이 프로젝트는 GitHub Pages를 통해 배포됩니다.

**배포 URL:** [https://yoonho-co-kr.github.io/mbti-recommend-app/](https://yoonho-co-kr.github.io/mbti-recommend-app/)

### GitHub Pages 배포 명령

```bash
# 빌드된 파일을 'gh-pages' 브랜치로 푸시하여 배포
yarn deploy
```

## 📁 폴더 구조

프로젝트의 핵심 폴더 구조입니다.

```
src/
├── assets/         # 로고, 이미지 등
├── components/     # 재사용 가능한 UI 컴포넌트 (Header 등)
├── pages/          # 앱의 라우팅 페이지 (Home, Test, Result)
├── data/           # MBTI 질문 및 결과 데이터 (questions.js, results.js)
├── hooks/          # 커스텀 Hook (useMbtiTest.ts)
├── styles/         # 전역 스타일
└── App.tsx         # 메인 라우팅 및 상태 관리 컴포넌트
```

````

---

README 파일 수정 후, 다음 단계인 **기능 확장 및 디자인 개선**을 계속 진행하시거나, 아니면 **GitHub에 README를 푸시**하시겠어요?

```bash
git add README.md
git commit -m "docs: README.md 파일 작성 및 추가"
git push origin main # 또는 master
````
