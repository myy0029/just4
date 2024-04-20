(function($){
    // 제이쿼리 방식으로 개발을 하는 사람들은 class 방식으로 하는게 좋다.
    // 클래스 객체(파스칼케이스) => 리터럴방식 class Shop {}
    // 클래스 내부 => 속성: 값 한쌍
    // 클래스 내부 => 메서드(Method) : 객체 안에서 속성과 function(){}이 결합된 형태
    // 메서드끼리는 콤마를 쓰지 않는다.
    // 실행 => 생성자(파스칼케이스) 방식 => 인스턴스 생성 사용(카멜케이스) == const shop = new Shop(); 
    // => 자바
    class Shop { // 생성자 Shop => 클래스 이름
        init(){ // 이게 메서드
            this.header();
            this.section1();
            this.section2();
            this.footer();
        }
        header(){
            
            //1. 메인버튼
            $('.main-btn').on({
                mouseenter(){
                    $('.sub').stop().slideUp(0);
                    $(this).next('.sub').stop().slideDown(200);
                    // 메인버튼
                    $('.main-btn').removeClass('on');
                    $(this).addClass('on');
                }
            });

            //2. 메인버튼과 서브메뉴 칸
            $('.col').on({
                mouseleave(){
                    $('.sub').stop().slideUp(200);
                    $('.main-btn').removeClass('on');
                }
            })


        }
        section1(){
            //1. 변수   
            let cnt=0;

            //2. 메인슬라이드함수 3개 우측에서 좌측으로 이동  0 1 2
            function mainSlide(){ 
                console.log("현재: " + (cnt-1<0?2:cnt-1),  "다음: " + cnt)                
                $('.slide').css({zIndex:1,opacity:1});
                $('.slide').eq(cnt).css({zIndex:2});
                $('.slide').eq( cnt-1 < 0 ? 2 : cnt-1 ).css({zIndex:3}).animate({opacity: 0}, 1000);
            }

            //3. 다음카운트함수
            function mextCount(){
                cnt++;                
                if(cnt>2) cnt=0;
                mainSlide();

            }

            //4. 자동타이머함수
            function autotimer(){
                setInterval(mextCount, 3000);
            }
            autotimer();

        }
        section2(){
           
            // 갤러리버튼 클릭 이벤트
            $('.gallery-btn').on({
                click(){
                    $('.gallery-btn').addClass('on');
                    $('.notice-btn').addClass('on');
                    $('.notice-box').hide();
                    $('.gallery-box').show();
                }
            })

             // 공지사항버튼 클릭 이벤트
            $('.notice-btn').on({
                click(){
                    $('.gallery-btn').removeClass('on');
                    $('.notice-btn').removeClass('on');
                    $('.notice-box').show();
                    $('.gallery-box').hide();
                }
            })

            // 팝업버튼 클릭 이벤트
            $('.popup-btn').on({
                click(){
                    $('.popup').css({display:'flex'}); // show().css({display:'flex'})
                }
            });
            // 팝업닫기버튼 클릭 이벤트
            $('.close-btn').on({
                click(){
                    // $('.popup').hide();
                    $('.popup').css({display:'none'}); // hide()
                }
            });


        }
        footer(){
            
        }
    }
    //const shop = new Shop();    // 객체변수
    //shop.init();
    //shop.section1();    // 메인 슬라이드 페이드인아웃 애니메이션

})(jQuery);