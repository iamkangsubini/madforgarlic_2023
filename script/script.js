//main-swiper-slide
//const 변수명 = new Swiper(`적용대상`);
//const 변수명 = new Swiper(`적용대상`, {속성:값, 속성:값});
const madforgarlic_slide = new Swiper('#madforgarlic_slide',{
    //자동재생
    autoplay:{
        delay:5000,//슬라이드 간격(밀리초) 기본3초
        disableOnInteraction:false,//버튼 클릭후 자동재생유지
    }, //자동재생
    loop:true, //마지막슬라이드 ->첫번째슬라이드 자연스러운 변경
    /* effect:'fade', */ //제자리 자연스러운 슬라이드 효과
    direction: 'horizontal',
    navigation: { //이전, 다음 내비게이션 연결
        //next,prev 객체 연결 시 부모를 적으면 body 안에 있는 모든 swiper-next,prev를 인식하기 때문에 개별인식가능한 부모이름을 반드시 앞에 먼저 작성한다.
        nextEl: '#madforgarlic_slide .swiper-button-next',
        prevEl: '#madforgarlic_slide .swiper-button-prev',
    }
    // direction:'vertical'
});

// madforgarlic-slide2
const madforgarlic_slide2 = new Swiper('#madforgarlic_slide2',{
    autoplay:{delay:1000},
    loop:true,
    effect:'fade',
})
// madforgarlic-slide3
const madforgarlic_slide3 = new Swiper('#madforgarlic_slide2',{
    autoplay:{delay:1000},
    loop:true,
    effect:'fade',
})