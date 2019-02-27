# GTP
## Rule
충돌 방지를 위한 간단한 Rule 정의
### Common
- Tab 사이즈는 2로 사용 (vs code에서 "ctrl + ," 를 입력 뒤 Tab Size : 4 -> 2)로 변경
### CSS
- css는 개행하여 작성
```css
body {
  font-family: 'notokr' sans-serif;
  font-size: 14px;
}
```

## 폴더 구조
간략한 파일 용도별 저장 위치
### HTML
html은 루트경로의 admin, front로 구분하여 생성

### CSS
- html에서는 **app.css** 하나만을 import하여 사용
- 브라우저 별 통일 및 초기화 css는 **reset.css**에 작성
- 공통 스타일은 **common.css**에 작성
- 그 외 페이지 별 스타일은 **페이지명.css**로 생성하여 작성
- **페이지명.css** 생성 후 **app.css**에 신규 css파일을 import(기존 page.css import 구문 밑에 append하는 방식으로 작업)
```css
/* common.css */
@import url(./common.css);

/* page.css */
@import url(./main.css);
@import url(./notice.css);
@import url(./faq.css);
```

### Image
common, admin, front 폴더로 구분하여 사용
- common폴더는 admin, front 공통으로 사용되는 이미지를 저장

### Plugin
플러그인 사용 시 css, js폴더 내 plugins 폴더에 저장하여 사용

## git setting
1. github에서 프로젝트(저장소) fork

2. fork받은 프로젝트를 clone
```bash
$ git clone http://fork받은 저장소 주소
```

3. upstream연결 추가
```bash
$ git remote add upstream http://fork받기위해 들어간 저장소 주소
```
후 제대로 되어있는지 확인
```bash
$ git remote -v
```
를 하면 origin주소에는 내가 포크 받은 나의 저장소 주소가 upstream에는 원저장소 주소가 보여야 올바르게 연결한 것임
### work flow
- develop 브랜치만 작업 브랜치로 사용
- master 브랜치는 일정 주기를 가지고 develop의 변경사항을 merge하여 형상관리 용도로 사용
- 아래의 순서로 작업이 진행됨

1. local repo에 develop브랜치 생성
```bash
$ git checkout -b develop --track upstream/develop
```

2. origin에 develop 브랜치 생성
```bash
(branch on develop) $ git push origin develop
```

3. 작업

4. commit & rebase
```bash
$ git commit -m "commit 메시지"
```
여러개의 커밋이 존재할경우 rebase하여 커밋을 합침 ("HEAD~"뒤 숫자는 합칠 커밋의 갯수)
```bash
$ git rebase -i HEAD~2
```

5. upstream/develop 의 변경사항을 pull
```bash
$ git pull --rebase upstream develop
```
이때 충돌이 발생할 경우 충돌발생한 부분 수정하여 충돌 해결

6. push & Pull Request
```bash
$ git push origin develop
```
origin develop에 push 후 PR 생성 후 upstream/develop에 self merge

```
한번 develop 브랜치를 생성하고난 뒤에는 1,2번은 생략하고 3~6 반복
```