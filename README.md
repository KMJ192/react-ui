# @kmj/react-ui

- Personal Design System

### 구조

- atomic design

- atoms
  - Button
  - HamburgerMenu
  - Tab
    - 수평, 수직
  - Popup
  - Radio
  - Checkbox
  - Spinner
  - Text
  - Input
  - Switch
  - ProgressBar (예정)
  - Toast (예정)
  - Row (예정)
  - Slider (예정)
- molecules
  - Floating (진행 중)
    - 일반 타입, 확장 타입, 드래그 타입
  - Select (예정)
    - 기본선택, 검색선택, 다중선택 타입
  - Radio Group (예정)
  - Check Group (예정)
  - List
- organisms
  - DatePicker (예정)
  - DateRangePicker (예정)
  - Nav (예정)
  - SideNav (예정)
  - Header (예정)
  - Footer (예정)
  - Modal (예정)
  - Table (예정)
- template
  - PageTemplate (예정)

##### Project start

- dev start

```
yarn start
```

- storybook build

```
yarn build:story
```

- library build

```
yarn build:lib
```

##### dev

- Storybook v7
- React
- Typescript
- sass
- vite

##### Deployed Storybook link

- https://kmj-react-ui.vercel.app/

##### git commit message

- [날짜][액션] 커밋 내용

- 액션

```
feat: 기능 추가, 삭제, 변경 (코드 수정)
fix: 버그 수정
style: 코드 형식 변경
design: UI 변경
refactor: 코드 리팩토링
docs: 코드 외 문서의 추가, 삭제, 변경
test: 테스트 코드 추가, 삭제, 변경
etc: 위 해당 사항이 없는 모든 변경 사항
```
