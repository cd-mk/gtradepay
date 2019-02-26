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
- 브라우저 별 통일 및 초기화 css는 **reset.css**에 작성
- 공통 스타일은 **common.css**에 작성
- 그 외 페이지 별 스타일은 **페이지명.css**로 생성하여 작성

### Image
common, admin, front 폴더로 구분하여 사용
- common폴더는 admin, front 공통으로 사용되는 이미지를 저장

### Plugin
플러그인 사용 시 css, js폴더 내 plugins 폴더에 저장하여 사용

## git setting
충돌 방지를 위해 각자 branch 생성 하여 작업 후 master에 merge
### flow
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