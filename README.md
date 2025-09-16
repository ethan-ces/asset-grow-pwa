# Asset Grow PWA

자산 성장 추적을 위한 Progressive Web Application입니다.

## 프로젝트 개요

Asset Grow PWA는 사용자의 자산 성장을 추적하고 분석할 수 있는 웹 애플리케이션입니다. 모던한 React 기반 기술 스택을 사용하여 구축되었으며, PWA 기능을 통해 모바일 환경에서도 최적화된 경험을 제공합니다.

## 기술 스택

- **Frontend**: React 19 + TypeScript
- **UI Framework**: [Mantine](https://mantine.dev/) 8.3.1
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: React Router v7
- **Styling**: PostCSS with [mantine-postcss-preset](https://mantine.dev/styles/postcss-preset)
- **Testing**: [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- **Development Tools**: [Storybook](https://storybook.js.org/), ESLint, Prettier
- **Package Manager**: Yarn 4.9.4

## 시작하기

### 사전 요구사항

- Node.js 18 이상
- Yarn 4.9.4

### 설치

```bash
yarn install
```

## 개발 스크립트

### 개발 및 빌드

- `yarn dev` – 개발 서버 시작
- `yarn build` – 프로덕션 빌드 생성
- `yarn preview` – 프로덕션 빌드 미리보기

### 코드 품질

- `yarn typecheck` – TypeScript 타입 검사
- `yarn lint` – ESLint와 Stylelint 실행
- `yarn eslint` – ESLint만 실행
- `yarn stylelint` – CSS 파일 린팅
- `yarn prettier` – 코드 포맷팅 검사
- `yarn prettier:write` – 코드 자동 포맷팅

### 테스트

- `yarn vitest` – 테스트 한 번 실행
- `yarn vitest:watch` – 테스트 감시 모드
- `yarn test` – 전체 테스트 스위트 실행 (타입체크 + 린팅 + 테스트 + 빌드)

### Storybook

- `yarn storybook` – Storybook 개발 서버 시작 (포트 6006)
- `yarn storybook:build` – Storybook 프로덕션 빌드

## 프로젝트 구조

```
src/
├── components/         # 재사용 가능한 컴포넌트
├── pages/             # 페이지 컴포넌트
├── App.tsx            # 메인 앱 컴포넌트
├── Router.tsx         # 라우팅 설정
├── theme.ts           # Mantine 테마 설정
└── main.tsx           # 앱 진입점

test-utils/            # 테스트 유틸리티
.storybook/            # Storybook 설정
```

## 개발 가이드

### 컴포넌트 구조

각 컴포넌트는 다음과 같은 파일들로 구성됩니다:

- `ComponentName.tsx` – 메인 컴포넌트
- `ComponentName.module.css` – CSS 모듈 스타일
- `ComponentName.story.tsx` – Storybook 스토리
- `ComponentName.test.tsx` – 유닛 테스트

### 테스트 작성

컴포넌트 테스트 시 `test-utils/render.tsx`의 커스텀 render 함수를 사용하세요. 이 함수는 MantineProvider로 컴포넌트를 래핑합니다.

```tsx
import { render } from '@test-utils';
import { MyComponent } from './MyComponent';

test('should render correctly', () => {
  render(<MyComponent />);
  // 테스트 코드...
});
```
