(function ($) {
    $.fn.extend({
        "alertColl": function (option) {
            var defaultObj = {
                title: "收藏成功",
                con: "您可以在【个人中心 > 我的收藏】查看",
                ico: "http://pic.jiuyejia.com/guest/636313923263456159.png?x-oss-process=image/resize,m_mfit,w_250"
            };
            option = $.extend(defaultObj, option);
            var addhtml = '<div class="alert_fade" style="position: fixed;top:0px;width:100%;height:100%;background:rgba(0, 0, 0, 0.48);display: flex;align-items: center;justify-content: center;z-index:47483647;">';
            addhtml += '<div class="alert_bor" style="width:85%;background:white;margin:0px auto;align-items: center;justify-content: center;border:1px solid #d3d3d3;z-index:2147483647;position:relative"><div class="alert_center" style="width:100%;text-align:center;padding-bottom:12px;">';
            addhtml += '<div style="margin-top: 10px;"><img src="' + option.ico + '" /></div>';
            addhtml += '<div class="alert_title" style="text-align:center;font-weight:600;font-size:16px;line-height:40px;line-height:40px">' + option.title + '</div>';
            addhtml += '<div class="alert_font" style="padding-bottom:15px;border-bottom:1px solid #d3d3d3;width:100%;margin-bottom:15px">' + option.con + '</div>';
            addhtml += '<a style="">我知道了<img src="http://pic.jiuyejia.com/guest/636313929248498177.png" /> </a></div></div></div>';
            $("body").append(addhtml);

            //打开弹窗时，给遮罩层注册点击事件
            $(document).on("click", ".alert_fade", function () {
                $(this).remove();
            });
        },
    });
})(window.jQuery);