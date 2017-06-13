var $ = require('jquery');
var douPo={
    douInit:function () {
       this.huadong(); //点击左右滑动
       this.yemian(); //当页面加载完后自执行 底部 Aa隐藏， 字体显示
       this.zhuti(); //主体点击时，头部，底部，显示隐藏。底部中间Aa显示,字体隐藏
       this.dibu_zuo(); //底部左侧点击时 让内容隐藏，主目录显示。
       this.dibu_zhong(); //底部中侧点击时 让字体显示，Aa隐藏
       this.ziti(); //大 中 小 字体
       this.zhumulu(); //主目录点击时，让内容显示，主目录和底部隐藏
       this.erji(); //耳机一个点击播放 暂停事件
    },
    //点击左右滑动
    huadong:function () {
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 30,
            hashnav: true,
            hashnavWatchState: true
        });
    },

    //当页面加载完后自执行 底部 Aa隐藏， 字体显示
    yemian:function () {
        $(document).ready(function(){
            $(".mulu_c span").show();
            $(".mulu_c button").hide();

        });
        },

    //主体点击时，头部，底部，显示隐藏。底部中间Aa显示,字体隐藏
    zhuti:function () {
        $(".main").click(function(){
            $(".header").toggle();
            $(".footer").toggle();
            $(".mulu_c button").hide();
            $(".mulu_c span").show();
        });
    },

    //底部左侧点击时 让内容隐藏，主目录显示。
    dibu_zuo:function () {
        $('.mulu_l').click(function () {
//  alert('功能完善中。。。');
            $(".main").toggle();
            $(".zhegai").show();
        });
    },

    //底部中侧点击时 让字体显示，Aa隐藏
    dibu_zhong:function () {
        $('.mulu_c').click(function () {
            $(".mulu_c span").hide();
            $(".mulu_c button").show();

        });
    },

    //大 中 小 字体
    ziti:function () {
        $(".mulu_c button").eq(0).click(function(){
            $(".main").css("font-size","2.4rem");
        });
        $(".mulu_c button").eq(1).click(function(){
            $(".main").css("font-size","2rem");
        });
        $(".mulu_c button").eq(2).click(function(){
            $(".main").css("font-size","1.6rem");
        });
    },

    //主目录点击时，让内容显示，主目录和底部隐藏
    zhumulu:function () {
        $('.zhegai').click(function () {
//        $(".zhegai").hide();
            $(".main").show();
            $(".header").hide();
            $(".footer").hide();

        });
    },

    //耳机一个点击播放 暂停事件
    erji:function () {
        $('.erji').click(function () {
            var audio = document.getElementById('music1');
            if(audio!==null){
                //检测播放是否已暂停.audio.paused 在播放器播放时返回false.
                alert(audio.paused);
                if(audio.paused)                     {
                    audio.play();//audio.play();// 这个就是播放
                }else{
                    audio.pause();// 这个就是暂停
                }
            }
        });
    }
};

//执行函数
douPo.douInit();