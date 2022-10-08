## 프로젝트 소개

### GREEN STEP

우리가 그리는 푸른 발자국이 지구를 구하도록
하루하루 일상 속에서 지구를 지키는 한 발, 그린 스탭.

개발기간 2022.08.26- 2022. 10.05

<a href='https://greenstepapp.com'> 그린스텝 사용하기 (모바일 전용)  </a>

## 팀원소개

- FE: (L)김은혜, 강인호, 우수진
- BE: (VL)김현서, 심규현, 하지혜
- Designer: 이시은

## 기술스택

- **백엔드**


**프론트엔드**

- React

   - redux-toolkit
 
   - react-router-dom
 
   - react-intersection-observer
 
   - axios


## 핵심기능

- 로그인 페이지

 - 카카오톡 소셜 로그인

- 미션 페이지 

 - 미션 투두리스트 제공
 
 - 미션 촬영 기능
 
 - 미션 포스트 아카이빙 기능
 
- 피드 페이지 
 
 - 피드 제공 기능 (무한스크롤링)
 
 - 박수 기능 (좋아요 기능)

## 데모영상

<a href=https://youtu.be/L4lZPjanLBY>영상 바로가기</a>


## 트러블 슈팅


- 렌더링 지연 문제

  - 문제상황 : 로그인페이지와 미션페이지에서 미션들과 사진들을 불러오는데 지연되는 문제가 발생하였다.
  
  - 원인파악 : 사용중이던 이미지의 용량이 너무 컸고, 페이지에서 3번의 요청이 발생해야 하는데 12번의 요청이 발생하는것을 확인.
  
  - 해결 
        
        1️ : WebP로 이미지 리사이징. 총 6개의 이미지 평균 용량 94% 감소
        
        2 : 각각의 데일리미션의 컴포넌트가 요청을 보내고 있었고, 불필요한 요청을 삭제 후 서버 지연시간이 4109ms->64ms로 98.44% 단축
 
 
 - S3 버킷으로 빌드 배포 시 유저가 브라우저에 캐시를 삭제해야 업데이트가 되는 문제
 
  - 문제상황 : 메인서버에 빌드 후 배포하여도 유저에게 바로 반영이 되지 않는 문제가 발생
  
  - 원인파악 : CRA 빌드 시에 JS와 CSS 번들 정적 파일의 해시값이 변경되지 않는 것을 확인했다.
  
  - 시도한 방법 
  
     1 : CloudFront에서 캐시 무효화 → 여전히 유저가 캐시를 삭제해야만 최신 버전이 나타난다.
     
     2 : S3 버킷에서 index.html에 메타데이터로 cache-control 값 추가 → 빌드 할 때마다 index.html 파일이 새로 업로드돼서 추가되어서 일일이 다시 해줘야 했다.
 
  - 해결 
   
    CRA 빌드 시에 정적 파일의 이름을 그때그때 다르게 한다면 브라우저에서 새로운 파일로 인식하므로 이전 캐시에서 불러오지 않고 최신 버전을 불러오게 된다.

    CRA 환경에서 webpack 설정을 커스텀 할 필요가 있었고, react-app-rewired라는 라이브러리가 있어 사용하였다.

    설치 후 프로젝트 root경로에 config-overrides.js 파일을 생성한 뒤 다음과 같은 코드를 작성하였다.
    
    ```
    module.exports = {
    webpack: function (config, env) {
    config.output.filename = `static/js/[name].[hash:8]-${Date.now()}.js`;
    config.output.chunkFilename = `static/js/[name].[hash:8]-${Date.now()}.chunk.js`;

    const miniCSSExtractPlugin = config.plugins.find(
      (element) => element.constructor.name === "MiniCssExtractPlugin"
    );

    miniCSSExtractPlugin.options.filename = `static/css/[name].[hash:8]-${Date.now()}.css`;
    miniCSSExtractPlugin.options.chunkFilename = `static/css/[name].[hash:8]-${Date.now()}.chunk.css`;
    return config;
    },
    };
    ```

        
        
