(function ($) {
    $.fn.extend({
        "alertColl": function (option, callback) {
            var defaultObj = {
                title: "收藏成功",
                con: "您可以在【个人中心 > 我的收藏】查看",
                ico: "http://pic.jiuyejia.com/guest/636313923263456159.png?x-oss-process=image/resize,m_mfit,w_250",
                confirm: false //是否是对话框
            };
            option = $.extend(defaultObj, option);
            var addhtml = '<div class="alert_fade" style="position: fixed;top:0px;width:100%;height:100%;background:rgba(0, 0, 0, 0.48);display: flex;align-items: center;justify-content: center;z-index:47483647;">';
            addhtml += '<div class="alert_bor" style="width:85%;background:white;margin:0px auto;align-items: center;justify-content: center;border:1px solid #d3d3d3;z-index:2147483647;position:relative"><div class="alert_center" style="width:100%;text-align:center;padding-bottom:12px;">';
            addhtml += '<div style="margin-top: 10px;"><img src="' + option.ico + '" /></div>';
            addhtml += '<div class="alert_title" style="text-align:center;font-weight:600;font-size:16px;line-height:40px;line-height:40px">' + option.title + '</div>';
            addhtml += '<div class="alert_font" style="padding-bottom:15px;border-bottom:1px solid #d3d3d3;width:100%;margin-bottom:15px">' + option.con + '</div>';
            if (option.confirm) {
                addhtml += '<div><a class="alert_leftbtn" style="background: gray;color: white;display: block;width: 50%;float: left;padding: 15px;">否</a>';
                addhtml += '<a class="alert_rightbtn"style="background: mediumseagreen;color: white;display: block;width: 50%;float: left; padding: 15px;">是</a></div>';
            } else {
                addhtml += '<div style="margin-bottom:0px;"><a class="iknow_btn" style="">我知道了<img src="http://pic.jiuyejia.com/guest/636313929248498177.png" /> </a></div>';
            };
            addhtml += '</div></div></div>';
            //打开弹窗时，给遮罩层注册点击事件
            $(document).on("click", ".alert_fade", function () {
                $(this).remove();
            });

            if (option.confirm) {
                $(document).on("click", ".alert_leftbtn", function () {
                    if (callback) {
                        $(this).parents(".alert_fade").remove();
                        callback(false);
                    };
                });
                $(document).on("click", ".alert_rightbtn", function () {
                    if (callback) {
                        $(this).parents(".alert_fade").remove();
                        callback(true);
                    };
                });
            } else {
                $(document).on("click", ".iknow_btn", function () {
                    $(this).parents(".alert_fade").remove();
                });
            };

            //阻止事件冒泡
            $(document).on("click", ".alert_bor", function () {
                return false;
            });
            $("body").append(addhtml);
        },
    });
})(window.jQuery);