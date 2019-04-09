var item = $('.menu-item'); //유사 배열
console.log(item);
var itemSubLink = $('.sub-menu a');
console.log(itemSubLink);
var tab = $('.tab');
var section = $('.notice, .pds');
console.log(section);
var subItem = $('.sub-item');


//디자인 영역을 스크립트로 한번에 처리
itemSubLink.attr('class','icon-dot-circled');

// 메인 메뉴의 하위 메뉴 제어을 위한 스크립트

// .on() 여러 이벤트를 한번에
// 키보드로 접근하게 하기 위해서는?? -- focusin
item.on('mouseover focusin',function(){
    item.removeClass('menu-act');
    $(this).addClass('menu-act');
});

$('.header').mouseout(function(){
    item.removeClass('menu-act');
});

subItem.focusout(function(){
    item.removeClass('menu-act');
});

// 탭 콘텐츠 제어를 위한 스크립트
// a태그는 click 이벤트로 key 이벤트까지 대응이 가능하다.

tab.on('click keyup', function(e){
    e.preventDefault();
    // e.type : 이벤트 타입이 클릭인지 물어본다.
    if(e.keyCode === 13 || e.type === 'click'){
        section.removeClass('board-act');
        $(this).parent().addClass('board-act');
    }
});