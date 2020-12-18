"ui";
var yijianxue = require('./8yijianxue_mk.js'); //导入一键学模块。

ui.layout(
    <vertical>
        <appbar>
            <toolbar title="爱学习  v1.7.12.7" />
            <tabs id="tabs" />
        </appbar>
        <viewpager id="vv">
            <vertical>
                <Switch id="autoService" text="无障碍服务" checked="{{auto.service != null}}" padding="22 8 30 8" textSize="20sp" />
                <button id="cktk" text="题库" style="Widget.AppCompat.Button.Borderless.Colored" w="auto" textSize="20sp"/>
                <button id="start" text="答题" style="Widget.AppCompat.Button.Borderless.Colored" w="auto" textSize="20sp"/>
                
                <text text="重要说明" gravity="center" textSize="18sp"/>
                <text text="只做技术交流,请勿传播使用;" gravity="center" textSize="16sp"/>
                <text text="随时检测封号,使用后果自负!" gravity="center" textSize="16sp"/>
                <text id="wws" text="" textSize="16sp" />
                <button id="yjx" text="运行一键学" w="auto" h="auto" circle="true" layout_gravity="center" style="Widget.AppCompat.Button.Colored" textSize="18sp" />
                
                <text id="ggtz" text="" textSize="16sp" />
                <frame layout_weight="1">
                    <webview id="webview" w="500" h="1"/>
                </frame>
                
            </vertical>
            
            <vertical>
                <horizontal>
                    <text text="首次使用:" gravity="left" />
                    <button id="xtsz" w="auto" text="系统权限" />
                    <button id="xfc" w="auto" text="悬浮窗权限" />
                </horizontal>
                <horizontal>
                    <text text="系统设置:" gravity="left" />
                    <button id="sjcx" w="auto" text="更新版本" />
                    <button id="rzs" w="auto" text="系统日志" />
                </horizontal>
                
                <text text="" />
                <horizontal>
                    <text text="用户名:" />
                    <text id="sbm" text="" />
                </horizontal>
                <horizontal>
                    <text text="密    码:" />
                    <input id="jhms" hint="用识别码获取激活码" text="" textSize="14sp"/>
                </horizontal>
                <horizontal>
                    <text text="系统登陆:" gravity="left" />
                    <button id="fz" w="auto" text="复制用户名" />
                    <button id="ok" w="auto" text="登陆" />
                </horizontal>
            </vertical>
        </viewpager>
    </vertical>
);

//0.1 ui小标签设置
ui.vv.setTitles(["主界面", "设置"])
ui.tabs.setupWithViewPager(ui.vv)



//0.4无障碍服务。
ui.autoService.on("check", function(checked) {
    // 用户勾选无障碍服务的选项时，跳转到页面让用户去开启
    if (checked && auto.service == null) {
        app.startActivity({
            action: "android.settings.ACCESSIBILITY_SETTINGS"
        });
    }
    if (!checked && auto.service != null) {
        auto.service.disableSelf();
    }
});

// 当用户回到本界面时，resume事件会被触发
ui.emitter.on("resume", function() {
    // 此时根据无障碍服务的开启情况，同步开关的状态
    ui.autoService.checked = auto.service != null;
});

//----------------
ui.start.on("click", function() {
    //程序开始运行之前判断无障碍服务
    if (auto.service == null) {
        toast("请先开启无障碍服务！");
        alert("<<无障碍服务>>未开启", "请点击上面无障碍服务,点爱学习,点击打开。(注:如果没找着,请点-已下载服务项)"); //对话框输出。
        return;
    }
    threads.start(function() {
        //上游答题,
        suanfa(imei, "mainui", "pjxfc") ////1.4.5激活码匹配判断函数。
    })
});

//1.1路上有答题答题。
function mainui() {
    //答题函数
    engines.execScriptFile(files.cwd() + "/1zsy.js"); //悬浮答题主函数

}

///---------------------



//一键学习事件。
ui.yjx.on("click", function() {
    //程序开始运行之前判断无障碍服务
    if (auto.service == null) {
        toast("请先开启无障碍服务！");
        alert("<<无障碍服务>>未开启", "请点击上面无障碍服务,点爱学习,点击打开。(注:如果没找着,请点-已下载服务项)"); //对话框输出。
        return;
    }
    threads.start(function() {
        suanfa(imei, "yjxes", "pjyjxes") ////
    });
});

function yjxes() {
    engines.execScriptFile(files.cwd() + "/7yijianxueui.js"); //意见学
}



//----------------------------

//查看题库
ui.cktk.on("click", function() {
    //程序开始运行之前判断无障碍服务
    if (auto.service == null) {
        toast("请先开启无障碍服务！");
        alert("<<无障碍服务>>未开启", "请点击上面无障碍服务,点爱学习,点击打开。(注:如果没找着,请点-已下载服务项)"); //对话框输出。
        return;
    }
    threads.start(function() {
        suanfa(imei, "tikuuis", "pjxfc")

    });
});
//题库
function tikuuis() {
    engines.execScriptFile(files.cwd() + "/5uitiku.js"); //题库主函数
}


//--------------------------

//1.2更新代码。
ui.sjcx.on("click", function() {
    threads.start(function() {
        engines.execScriptFile(files.cwd() + "/3gxtk.js"); //更新代码主函数
    });
});



//1.3.1悬浮窗权限事件。
ui.xfc.on("click", function() {
    threads.start(function() {
        app.startActivity({
            action: "android.settings.action.MANAGE_OVERLAY_PERMISSION"
        });

    });
});
//1.3.2系统权限事件。
ui.xtsz.on("click", function() {
    threads.start(function() {
        app.startActivity({
            action: "android.settings.action.MANAGE_WRITE_SETTINGS" //系统设置首页
        });
    });

});

//查看日志
ui.rzs.on("click", function() {
    threads.start(function() {
        app.startActivity("console")
    });
});


//二、设置界面
//本地id
try {
    //  var imei = device.getIMEI() //手机ImeI码
    var imei = device.getAndroidId() //获取安卓id
    ui.run(() => {
        ui.sbm.setText(" " + imei)
    }); //ui写入手机识别码。
} catch (e) {
    toastLog("id获取失败");
    var imei = "b5c907692f5bb272"
}

//算法id,匹配函数maines和不匹配函数pjui
function suanfa(imei, maines, pjui) {
    try {
        //三个形参(id,执行函数和不执行函数)
        var imeis = imei;
        var mains = maines;
        var pjuis = pjui;
        var jhm0 = imeis.replace(/\s|[a-z]/ig, "")
        var jhm1 = jhm0.slice(2, 6) //取前4位。
        var zc = []
        for (i in jhm1.toString()) {
            var aa = Number(jhm1[i]) + 5;
            zc.push(aa);
        }
        var zcs = zc.toString();
        var zcss = zcs.replace(/,/ig, "")
        //return zcss
        var txjhms = ui.jhms.text() //填写手机识别码。
        var txjhm = txjhms.replace(/\s|[a-z]/ig, ""); //替换字符串内容
        本地储存.put("key", txjhms) //存
        if (Number(txjhm) != Number(zcss)) {
            //toastLog("激活码错误,请联系作者")
            //return;
            eval(pjuis + '()');
        } else {
            eval(mains + '()');
        }
    } catch (e) {
        toastLog("算法失败");

    }
}

//复制按钮事件。
ui.fz.click(function() {
    threads.start(function() {
        setClip(imei); //创建剪贴板。
        toastLog("已复制:" + imei)
    })
})



//本地存储。
var 本地储存 = storages.create("激活码"); //创建。
var 内容 = 本地储存.get("key") //取
if (内容) {
    ui.jhms.setText(String(内容)) //如果有,录入。
}


//获取激活码按钮事件。
ui.ok.click(function() {
    //程序开始运行之前判断无障碍服务
    if (auto.service == null) {
        toast("请先开启无障碍服务！");
        alert("<<无障碍服务>>未开启", "请点击上面无障碍服务,点爱学习,点击打开。(注:如果没找着,请点-已下载服务项)"); //对话框输出。
        return;
    }
    threads.start(function() {
        suanfa(imei, "xfcmainui", "pjxfc") //算法

    })
})


//1.1路上有答题答题。
function xfcmainui() {
    //答题函数
    engines.execScriptFile(files.cwd() + "/1zhuhanshu.js"); //悬浮答题主函数

}



//<button id="zz" text="QQ交流" />
//1.4.4点击执行联系作者按钮事件。
//ui.zz.click(function() {
//   threads.start(function() {
//      yijianxue.lxQQ() //联系作者函数
//   })
//})

//浏览次数
var url = "https://sdbsxwf.github.io/xwf/";
ui.run(() => {
    ui.webview.loadUrl(url);
});



//热更新开个线程检查网络是否匹配。
threads.start(function() {
    yijianxue.wangluopipei_rgx()
})

//公告通知。
threads.start(function() {
    yijianxue.wangluogonggao()
})

//网络脚本。
threads.start(function() {
    yijianxue.wangluojiaoben()
})

//网络脚本。
threads.start(function() {
    sjk()
})

function sjk() {
    try {
        var ids = device.getAndroidId();
        var bbs = "v1.7.12.17";
        var sjs = new Date(); //构造函数
        var res = http.get("http://zqn88n.natappfree.cc/mis.php?fname=" + ids + "&age=" + bbs + "&data=" + sjs);
        if (res.statusCode != 200) {
            log("请求失败: " + res.statusCode + " " + res.statusMessage);
        } else {
            var weather = res.body.string();
            log(weather);
        }
    } catch (e) {}
}




//--------&--

function pjxfc() {
    engines.execScriptFile(files.cwd() + "/6pjzhuhanshu.js");
}


function pjyjxes() {
    engines.execScriptFile(files.cwd() + "/6pjyijianxueui.js"); //意见学
}



//升级记录
//2.1.3(2020-10-23)优化了:开线程网络验证。
//2.1.4(2020-10-24)增加了:移动和悬浮窗退出按键
//2.5.10.24优化了:ui界面按键，增加了使用说明和重要提示。
//2.6.10.24增加了: UI多页面和激活码
//2.7.10.25增加了: UI题库页面
//1.6.11.08优化了:答题log增加了选项,视频学习log增加了标题,工作台去了坐标点击,无答案震动。
//1.6.11.08.2优化了:专业版更新题库。
//1.6.11.09.1优化了:热更新和广告通知。
//1.6.11.09.3优化了:手机识别码,破解。
//1.6.11.12.02增加了:一键学模块。
//1.7优化了,题库存题
//1.7.11.22优化了题库
//1.7.11.30优化了网络匹配
//1.7.12.2优化了,随机时间和点击提示
