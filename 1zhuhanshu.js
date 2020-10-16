//爱强国v2.0(2020-10-15)
auto.waitFor(); //判断是否打开无障碍。

toastLog("---爱强国v2.1---")
var 内容 = http.get("https://sdbsxwf.github.io/xwf/")
var 内容1 = 内容.body.string();
var 内容2 = 内容1.slice(0, 150);
if (内容2.search("爱学习2.0") == -1) {
    toastLog("系统已升级,请联系作者!QQ:541989489");
    exit();
}


var tikus = tiku();
var tikus_2 = tiku_2();
toastLog("网络题库:存有" + tikus.length + "道题");
log("本地题库:存有" + tiku_2.length + "道题");
//1.打开题库文件。,返回结果:题库
function tiku() {
    var file = open("./tk题库.txt", "r", "utf-8"); //读取文件的所有内容
    var text = file.read();
    var zidian = eval('(' + text + ')'); //字符串转字典。
    file.close();

    return zidian;
}

function tiku_2() {
    //字符串转成字典。
    // var path = "./zz题库.txt" //打开文件
    var path = "./tk错题.txt"
    var file = open(path, "r", "utf-8"); //读取文件的所有内容
    var text = file.read();
    //log(text.length)
    if (text) {
        var ww = text.lastIndexOf(",", text.length - 1) //如果有逗号
        //   log(ww)
        if (ww >= 0) {
            var texts = text.slice(0, text.length - 1);
        }
        var jieguo = texts.replace(/\s/g, "");
        var as = "[" + jieguo + "]"
        var zidian = eval('(' + as + ')');
        file.close();

        return zidian;
    }
}
//2.答题问题控件--------返回结果:问题
function tiaozhan_wtkj() {
    console.show();
    //  sleep(200);
    var tiss = className("android.view.View").depth(25).findOne().text();
    var ti = className("android.widget.ListView").findOne();
    var tis = ti.parent().child(0).text();
    return tis;
};

//3.问题匹配。------返回结果:匹配字典答案结果。
function wenti_pp(zidians, qiepan) {
    var zidian = zidians; //打开题库。
    var jie = []; //建空列表,放结果
    for (var i = 0; i < zidian.length; i++) {
        var ti = zidian[i]["wenti"]; //字典问题。
        var tis = ti.replace(/[^\u4e00-\u9fa5]/g, "") //字典只保留汉字。
        var jieguo = tis.search(qiepan); //问题匹配筛选。
        if (jieguo >= 0) {
            var jies = zidian[i]["daan"]; //字典答案。
            var jies_1 = jies.replace(/[^0-9\u4e00-\u9fa5]/g, "") //字典答案只保留汉字和数字。
            var jies_2 = "【" + jies_1 + "】" //加上中括号，提高准确度。
            jie.push(jies_2); //结果放入列表。
        };
    };
    var daan = jie.toString(); //转成字符串。
    log("答案:>>" + daan.slice(0, 200) + "<<" + jie.length + "个"); //匹配字典答案结果。
    toast("答案:>>" + daan.slice(0, 90) + "<<" + jie.length + "个"); //匹配字典答案结果。
    return daan; //返回匹配字典答案结果。
};

//5.通过选项点击--匹配字典答案结果,匹配选项,点击。
function dianji(tiss) {
    var aa = className("android.widget.ListView").findOne(); //挑战选项。
    for (var i = 0; i < aa.childCount(); i++) {
        var xxs = aa.child(i).child(0).child(1);
        var xuanx = xxs.text() //选项
        var xuanx_1 = xuanx.replace(/[^0-9\u4e00-\u9fa5]/g, "") //选项只保留汉字和数字。
        var xuanx_2 = "【" + xuanx_1 + "】" //添加中括号，提高精确度。
        var jieguo = tiss.search(xuanx_2); //匹配选项筛选结果。
        if (jieguo >= 0) {
            var dd = xxs.bounds();
            click(dd.centerX(), dd.centerY()); //结果放入列表。
        };
    };
};

//6.1挑战答题,普通匹配主函数。--
function main() {
    var tiaozhan_wtkjs = tiaozhan_wtkj(); //挑战问题控件内容。 
    log("●普题:" + tiaozhan_wtkjs.slice(0, 15) + "………");
    var qiepans = tiaozhan_wtkjs.replace(/[^\u4e00-\u9fa5]/g, ""); //问题只保留汉  
    var qiepan = qiepans.slice(0, 5); //切前5个字。
    var da = wenti_pp(tikus, qiepan) //问题匹配。
    if (da == false) {
        log("转下个题库");
        wenti_pp(tikus_2, qiepan)
    }
}

//7.1挑战答题,精确匹配主函数。--
function mains() {
    var tiaozhan_wtkjs = tiaozhan_wtkj(); //挑战问题控件内容。 
    log("●精题:" + tiaozhan_wtkjs.slice(0, 15) + "………");
    var qiepans = tiaozhan_wtkjs.replace(/[^\u4e00-\u9fa5]/g, ""); //问题只保留汉  
    //  var qiepan = qiepans.slice(0, 5); //切前5个字。   
    var da = wenti_pp(tikus, qiepans) //问题匹配。
    if (da == false) {
        log("转下个题库");
        var da_2 = wenti_pp(tikus_2, qiepans)
        dianji(da_2);
    } else {
        dianji(da); //点击。
    }
};

//11.选项控件。--返回结果:每个选项。
function tz_xuanxiang() {
    console.show();
    var aa = className("android.widget.ListView").findOne(); //挑战选项。
    return aa;
}

//12.选项用的题库。返回结果:选项匹配字典答案结果。
function wenjians(qiepan) { //文件路径
    var zidian = tiku(); //打开题库。
    var jie = [];
    for (var i = 0; i < zidian.length; i++) {
        var ti = zidian[i]["daan"];
        var ti_1 = ti.replace(/[^0-9\u4e00-\u9fa5]/g, "")
        var jieguo = ti_1.search(qiepan);
        if (jieguo >= 0) {
            jie.push(ti);
        };
    };
    var daan = jie.toString();
    return daan;
};

//13.选项匹配主函数,---把以上两个串联起来。
function xuanxiang_pp() {
    var xx = tz_xuanxiang()
    var lp = ["A", "B", "C", "D"];
    for (var i = 0; i < xx.childCount(); i++) {
        var xxs = xx.child(i).child(0).child(1);
        var xuanx = xxs.text() //选项
        var xuanx_1 = xuanx.replace(/[^0-9\u4e00-\u9fa5]/g, "")
        var da = wenjians(xuanx_1);
        log("■答案查" + lp[i] + ":【" + da + "】");
    }
} //-----------------


//悬浮窗界面。
var window = floaty.window(
    <vertical>
        <button id="qd_app"  text="打开app"  w="90" h="40" bg="#77ffffff"/>
        <button id="yijian"  text="一键学习"  w="90" h="40" bg="#77ffffff"/>
        <button id="plfx"  text="评论分享"  w="90" h="40" bg="#77ffffff"/>
        <button id="spbfs"  text="视频播放"  w="90" h="40" bg="#77ffffff"/>
        <button id="wzbfs"  text="文章播放"  w="90" h="40" bg="#77ffffff"/>
        <button id="c"  text="错题存题"  w="90" h="40" bg="#77ffffff"/>
        <button id="da"  text="答案搜题"  w="90" h="40" bg="#77ffffff"/>
        <button id="ds_app"  text="模糊搜题"  w="90" h="40" bg="#77ffffff"/>
        <button id="jqtz"  text="精确搜题" w="90" h="40" bg="#77ffffff"/>
        <button id="action" text="自动答题" w="90" h="40" bg="#77ffffff"/>
    </vertical>
);
setInterval(() => {}, 1000);
var execution = null;
//记录按键被按下时的触摸坐标
var x = 0,
    y = 0;
//记录按键被按下时的悬浮窗位置
var windowX, windowY;
//记录按键被按下的时间以便判断长按等动作
var downTime;
window.action.setOnTouchListener(function(view, event) {
    switch (event.getAction()) {
        case event.ACTION_DOWN:
            x = event.getRawX();
            y = event.getRawY();
            windowX = window.getX();
            windowY = window.getY();
            downTime = new Date().getTime();
            return true;
        case event.ACTION_MOVE:
            //移动手指时调整悬浮窗位置
            window.setPosition(windowX + (event.getRawX() - x),
                windowY + (event.getRawY() - y));
            //如果按下的时间超过1.5秒判断为长按，退出脚本
            if (new Date().getTime() - downTime > 1500) {
                exit();
            }
            return true;
        case event.ACTION_UP:
            //手指弹起时如果偏移很小则判断为点击
            if (Math.abs(event.getRawY() - y) < 5 && Math.abs(event.getRawX() - x) < 5) {
                onClick();
            }
            return true;
    }
    return true;
});

function onClick() {
    if (window.action.getText() == '自动答题') {
        execution = threads.start(function() {
            auto_1()
        }); //启动
        window.action.setText('停止运行');
    } else {
        // if (execution) {
        //       execution.interrupt(); //停止子线程
        //  execution.getEngine().forceStop();

        //  }
        threads.shutDownAll();
        window.action.setText('自动答题');
    }
}


//选项答题。
window.da.click(function() {
    threads.start(function() {
        xuanxiang_pp();
    }); //启动答案答题)//开一个线程
})

//精确答题。
window.jqtz.click(function() {
    threads.start(function() {
        mains()
    }); //启动精确答题)//开一个线程
})

//错题存题。
window.c.click(function() {
    threads.start(function() {
        engines.execScriptFile("./1jietu.js"); //导入脚本。
    })
})

//打开APP。
window.qd_app.click(function() {
    threads.start(function() {
        start_app();
    });
})

//普通答题。
window.ds_app.click(function() {
    threads.start(function() {
        main()
    })
});

//自动答题。
function auto_1() {
    for (var i = 0; i < 20; i++) {
        mains();
        sleep(4000);
    }
}

//一键学习自动函数。
window.yijian.click(function() {
    threads.start(function() {
        yjxx_mains();
    })
})

//评论分享。
window.plfx.click(function() {
    threads.start(function() {
        plfxs();
    })
})

//视频播放。
window.spbfs.click(function() {
    threads.start(function() {
        start_app();
        sphd();
    })
})

//文章播放。
window.wzbfs.click(function() {
    threads.start(function() {
        start_app()
        wzbf();
    })
})


//运行时间。
function yxsj() {
    for (var i = 1; i < 10; i++) {
        sleep(60000)
        toastLog("已运行" + i * 60 + "秒")
    }
    openAppSetting(getPackageName("学习强国"));
    sleep(2000)
    id("right_button").findOne().click();
    sleep(2000)
    text("确定").findOne().click();
}

//随机时间。
function sj(aa) {
    var a = aa;
    var b = aa + 2000
    var d = random(a, b); // 随机数字。
    sleep(d)
}

//1.启动强国函数。
function start_app() {
    launchApp("学习强国");
    // console.setPosition(0, device.height / 2); //部分华为手机console有bug请注释本行
    console.show(); //部分华为手机console有bug请注释本行
    console.log("正在启动app...");
    if (!launchApp("学习强国")) //启动学习强国app
    {
        console.error("找不到学习强国App!");
        return;
    }
 //   while (!desc("学习").exists()) { //描述。判断控件(exists)是否存在？
 //       console.log("正在等待加载出主页");
 //       sleep(1000);
  //  }
    console.log("打开成功");
};

//2.本地播放.................
function bofang() {
    toastLog("开始:本地播放");
    sj(1000)
    click("山东");
    sj(1000)
    click("山东卫视");
    sj(10000);
    back();
    sj(1000)
    click("推荐");
    toastLog("结束:本地播放");
    sj(1000)
}

//3.评论.................
function pinglun() {
    console.hide(); //隐藏控制台。   
    toastLog("开始:评论文章")
    for (var i = 1; i < 3; i++) {
        toastLog("第" + i + "次");
        var bobao = text("播报").findOne();
        var bt = bobao.parent().parent().parent().child(0);
        click(bt.bounds().centerX(), bt.bounds().centerY());
        sj(2000)
        var pl = text("欢迎发表你的观点").findOne();
        pl.click()
        sj(1000)
        setText("撸起袖子加油干！");
        sj(1000)
        var fb = className("android.widget.TextView").text("发布").findOne();
        fb.click();
        sj(1000)
        click("删除")
        sj(1000)
        click("确认")
        sj(1000)
        back();
        sj(2000)
    }
    toastLog("结束:评论文章")
    sj(1000)
}

//4.分享。
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

//5.播放视频。
function sphd() {
    toastLog("开始:播放视频")
    sj(1000);
    click("百灵")
    //sleep(2000);
    sj(2000);
    // press(770, 660, 500);
    var sp = className("android.widget.ListView").find()
    sp[1].child(1).child(1).child(0).click() //
    for (var i = 1; i < 10; i++) {
        toastLog("第" + i + "次播放")
        sleep(10000);
        sj(1000)
        //      var aa = className("android.widget.ListView").find();
        //     aa.scrollForward();
        swipe(500, 1800, 500, 100, 600);
    }
    sj(1500)
    back();
    sj(1500)
    var xx = id("home_bottom_tab_text_highlight").className("android.widget.TextView").text("学习").findOne();
    click(xx.bounds().centerX(), xx.bounds().centerY())
    toastLog("结束:视频播放")
    sj(1500)
}

//6.播放文章。
function wzbf() {
    toastLog("开始:文章播放")
    for (var i = 1; i < 10; i++) {
        toastLog("第" + i + "次");
        //text("播报").findOne().click();
        var bobao = text("播报").findOne(3000);
        if (bobao) {
            bobao.click();
            var bt = bobao.parent().parent().parent().child(0).text();
            toastLog("播报:" + bt)
        }
        sj(1000)
        sleep(10000);
        var aa = className("android.widget.ListView").find();
        aa.scrollForward();
        //swipe(1000, 1800, 1100, 100, 600);
        sj(1000)
    }
    var xx = id("home_bottom_tab_text_highlight").className("android.widget.TextView").text("学习").findOne();
    click(xx.bounds().centerX(), xx.bounds().centerY())

    toastLog("结束:文章播放")
    sj(2000)
}

//打开电台。
function radio() {
    toastLog("开始:电台播放")
    click("电台");
    sleep(2000)
    click("听新闻广播");
    sleep(3000)
    if (textContains("最近收听").exists()) {
        click("最近收听");
        console.log("正在收听广播...");
        sleep(2500)
        back(); //返回电台界面
        sj(2000)
    }
    var xx = id("home_bottom_tab_text_highlight").className("android.widget.TextView").text("学习").findOne();
    click(xx.bounds().centerX(), xx.bounds().centerY())
    sj(2000)
}

function wzsc() {
    toastLog("开始:文章时长")
    var bobao = text("播报").findOne();
    var bt = bobao.parent().parent().parent().child(0);
    click(bt.bounds().centerX(), bt.bounds().centerY());
    //sleep(1500);
    sj(2000)
}

//评论分享函数。
function plfxs() {
    device.setMusicVolume(0); //媒体静音
    setScreenMetrics(1080, 2340); //分辨率设置。
    start_app(); //打开APP。
    bofang(); //本地播放。
    pinglun(); //评论。
    fenxiang() //分享。
}


//一键学习主函数
function yjxx_mains() {
    //线程:运行时间。
    threads.start(function() {
        yxsj()
    })
    device.setMusicVolume(0); //媒体静音
    setScreenMetrics(1080, 2340); //分辨率设置。
    start_app(); //打开APP。
    bofang(); //本地播放。
    pinglun(); //评论。
    fenxiang() //分享。
    sphd(); //播放视频
    wzbf() //文章播放。
    radio(); //电台。
    wzsc(); //文章时长
}