device.setMusicVolume(0); //媒体静音
setScreenMetrics(1080, 2340); //分辨率设置。
//运行时间。
function yxsj() {
    for (var i = 1; i < 77; i++) {
        sleep(10000)
        toastLog("已运行" + i * 10 + "秒")
    }
}

threads.start(function() {
    yxsj()
})

//随机时间。
function sj(aa) {
    var a = aa;
    var b = aa + 2000
    var d = random(a, b); // 随机数字。
    sleep(d)
}

//启动强国函数。
function start_app() {
    launchApp("学习强国");
    console.setPosition(0, device.height / 2); //部分华为手机console有bug请注释本行
    console.show(); //部分华为手机console有bug请注释本行
    console.log("正在启动app...");
    if (!launchApp("学习强国")) //启动学习强国app
    {
        console.error("找不到学习强国App!");
        return;
    }
    while (!desc("学习").exists()) { //描述。判断控件(exists)是否存在？
        console.log("正在等待加载出主页");
        sleep(1000);
    }
    console.log("打开成功");
};
//本地播放.................
function bofang() {
    toastLog("开始:本地播放");
    //sleep(1500)
    sj(1000)
    click("山东");
    //sleep(1500)
    sj(1000)
    click("山东卫视");
    //sleep(10000);
    sj(10000);
    back();
    sj(1000)
    click("推荐");
    toastLog("结束:本地播放");
    sj(1000)
}


//评论.................
function pinglun() {
    console.hide(); //隐藏控制台。   
    toastLog("开始:评论文章")
    for (var i = 1; i < 3; i++) {
        toastLog("第" + i + "次");
        var bobao = text("播报").findOne();
        var bt = bobao.parent().parent().parent().child(0);
        click(bt.bounds().centerX(), bt.bounds().centerY());
        //sleep(1500);
        sj(2000)
        var pl = text("欢迎发表你的观点").findOne();
        pl.click()
        //sleep(1500)
        sj(1000)
        setText("撸起袖子加油干！");
        //sleep(1500)
        sj(1000)
        var fb = className("android.widget.TextView").text("发布").findOne();
        fb.click();
        //sleep(1500);
        sj(1000)
        click("删除")
        //sleep(1500);
        sj(1000)
        click("确认")
        //sleep(1500)
        sj(1000)
        back();
        sj(2000)
        // sleep(3000);

    }
    toastLog("结束:评论文章")
    sj(1000)
}
//分享。
function fenxiang() {
    toastLog("开始:分享文章")
    var bobao = text("播报").findOne();
    var bt = bobao.parent().parent().parent().child(0);
    click(bt.bounds().centerX(), bt.bounds().centerY());
    //sleep(1500);
    sj(1000);
    for (var i = 1; i < 3; i++) {
        toastLog("第" + i + "次");
        var pl = text("欢迎发表你的观点").findOne();
        pl.parent().child(3).click();
        // sleep(1500)
        sj(1000)
        click("分享到学习强国");
        //sleep(1500)
        sj(1000)
        back();
        sj(1000)
        // sleep(1500);
    }

    back();
    toastLog("结束:分享文章")
    sj(1000)
}

function sphd() {
    toastLog("开始:播放视频")
    sj(1000);
    click("百灵")
    //sleep(2000);
    sj(2000);
    press(770, 660, 500);
    for (var i = 1; i < 11; i++) {
        toastLog("第" + i + "次播放")
        sleep(30000);
        sj(1000)
        swipe(1000, 1800, 1100, 100, 600);

    }
    sj(1500)
    back();
    sj(1500)
    var xx = id("home_bottom_tab_text_highlight").className("android.widget.TextView").text("学习").findOne();
    click(xx.bounds().centerX(), xx.bounds().centerY())
    toastLog("结束:视频播放")
    sj(1500)
}

function wzbf() {
    toastLog("开始:文章播放")
    for (var i = 1; i < 11; i++) {
        toastLog("第" + i + "次");
        //text("播报").findOne().click();
        var bobao = text("播报").findOne();
        bobao.click();
        var bt = bobao.parent().parent().parent().child(0).text();
        toastLog("播报:" + bt)
        sj(1000)
        sleep(30000);
        swipe(1000, 1800, 1100, 100, 600);
        sj(1000)
    }
    toastLog("结束:文章播放")
    sj(1000)
}
//console.hide(); //隐藏控制台。   


//执行播报代
function mains() {
    start_app(); //打开APP。
    bofang(); //本地播放。
    pinglun(); //评论。
    fenxiang() //分享。
    sphd(); //播放视频
    wzbf() //文章播放。
}


mains();