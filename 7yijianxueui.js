"ui";

var PrefCheckBox = require('./9xuanzhekuang_mk.js'); //选择框模块。
var yijianxue = require('./8yijianxue_mk.js'); //导入一键学模块。
ui.layout(
    <vertical>
        <appbar>
            <toolbar id="toolbar"  title="一键学 v2.0" />
            
        </appbar>
        <ScrollView>
            <vertical>
                <pref-checkbox id="perf99" text="提示框(可不选)"/>
                <pref-checkbox id="perf0" text="启动app(*必选*)"/>
                <pref-checkbox id="perf1" text="本地播放(+1分)"/>
                <pref-checkbox id="perf2" text="评论(+1分)"/>
                <pref-checkbox id="perf3" text="分享(+1分)"/>
                <pref-checkbox id="perf4" text="文章(+6分)"/>
                <pref-checkbox id="perf5" text="视频(+6分)"/>
                <pref-checkbox id="perf6" text="视频时长(+6分)"/>
                <pref-checkbox id="perf7" text="文章时长(+6分)"/>
                <pref-checkbox id="perf8" text="挑战答题(+6分)"/>
                <pref-checkbox id="perf9" text="双人对战(+2分)"/>
                <pref-checkbox id="perf10" text="争上游(+5分)"/>
                <pref-checkbox id="perf11" text="每日答题(+5分)"/>
                <pref-checkbox id="perf12" text="关闭app"/>
                <horizontal>
                    <button id="qx" text="全选"/>
                    <button id="fx" text="反选"/>
                    <button id="gb" text="退出"/>
                </horizontal>
                
                <button id="btn" text="开始一键学"/>
            </vertical>
        </ScrollView>
    </vertical>
);

//创建选项菜单(右上角)
ui.emitter.on("create_options_menu", menu => {
    menu.add("设置");
    menu.add("日志");
    menu.add("关于");
    menu.add("退出");
});
//监听选项菜单点击
ui.emitter.on("options_item_selected", (e, item) => {
    switch (item.getTitle()) {
        case "设置":
            //  app.startActivity({
            //      action: "android.settings.action.MANAGE_WRITE_SETTINGS" //系统设置首页
            //   });
            app.startActivity("settings");
            break;
        case "日志":
            app.startActivity("console")
            break;
        case "关于":
            alert("关于", "爱学习  v1.7.12.19");
            break;
        case "退出":
            engines.stopAllAndToast();
            break;
    }
    e.consumed = true;
});
activity.setSupportActionBar(ui.toolbar);




ui.btn.on("click", function() {
    // toast("配置1为" + PrefCheckBox.getPref().get("perf1"));
    //   toast("配置2为" + PrefCheckBox.getPref().get("perf2"));
    var bbb = [];
    if (PrefCheckBox.getPref().get("perf99")) {
        bbb.push(99)
    }
    //  if (PrefCheckBox.getPref().get("perf0")) {
    bbb.push(0)
    //  }
    if (PrefCheckBox.getPref().get("perf1")) {
        bbb.push(1)
    }
    if (PrefCheckBox.getPref().get("perf2")) {
        bbb.push(2)
    }
    if (PrefCheckBox.getPref().get("perf3")) {
        bbb.push(3)
    }
    if (PrefCheckBox.getPref().get("perf4")) {
        bbb.push(4)
    }
    if (PrefCheckBox.getPref().get("perf5")) {
        bbb.push(5)
    }
    if (PrefCheckBox.getPref().get("perf6")) {
        bbb.push(6)
    }
    if (PrefCheckBox.getPref().get("perf7")) {
        bbb.push(7)
    }
    if (PrefCheckBox.getPref().get("perf8")) {
        bbb.push(8)
    }
    if (PrefCheckBox.getPref().get("perf9")) {
        bbb.push(9)
    }
    if (PrefCheckBox.getPref().get("perf10")) {
        bbb.push(10)
    }
    if (PrefCheckBox.getPref().get("perf11")) {
        bbb.push(11)
    }
    if (PrefCheckBox.getPref().get("perf12")) {
        bbb.push(12)
    }
    log(bbb)
    threads.start(function() {
        //  
        for (var i = 0; i < bbb.length; i++) {
            var xunhao = bbb[i]
            log(xunhao)
            if (xunhao == 99) {
                console.show(); //提示框。
            }
            if (xunhao == 0) {
                yijianxue.qidong() //启动app。
            }
            if (xunhao == 1) {
                sleep(2000)
                yijianxue.bengdibofang(); //本地播放。
            }
            if (xunhao == 2) {
                sleep(2000)
                yijianxue.pinglun(); //评论。
            }
            if (xunhao == 3) {
                sleep(2000)
                yijianxue.fengxiang(); //分享。
            }
            if (xunhao == 4) {
                sleep(2000)
                yijianxue.wenzhang(); //文章。
            }
            if (xunhao == 5) {
                sleep(2000)
                yijianxue.shipin(); //视频。
            }
            if (xunhao == 6) {
                sleep(2000)
                yijianxue.shipinshichang(); //视频时长。
            }
            if (xunhao == 7) {
                sleep(2000)
                yijianxue.wenzhangshichang(); //文章时长。
            }
            if (xunhao == 8) {
                sleep(2000)
                yijianxue.tiaozhandati(); //挑战答题。
            }
            if (xunhao == 9) {
                sleep(2000)
                yijianxue.shuangrenduizhan(); //双人对战          
            }
            if (xunhao == 10) {
                sleep(2000)
                yijianxue.zhengshangyou(); //争上游。
                sleep(2000)
                yijianxue.zhengshangyou(); //争上游。
            }
            if (xunhao == 11) {
                sleep(2000)
                yijianxue.meiridatis(); //每日答题。
                sleep(2000)
                yijianxue.meiridatis(); //每日答题。

            }
            if (xunhao == 12) {
                sleep(2000)
                yijianxue.qiangzhiguanbi(); //强制关闭。
            }

        }
    })
});
ui.qx.on("click", function() {
    threads.start(function() {
        var xx = className("android.widget.CheckBox").find()
        for (var i = 0; i < 14; i++) {
            if (xx[i].checked() == false) {
                xx[i].click()
            }
        }
    })
})
ui.fx.on("click", function() {
    threads.start(function() {
        var xx = className("android.widget.CheckBox").find()
        for (var i = 0; i < 14; i++) {
            if (xx[i].checked() == true) {
                xx[i].click()
            }
        }
    })
})

ui.gb.on("click", function() {
    threads.start(function() {
        engines.stopAllAndToast();
    })
})



//开个线程检查网络是否匹配。
threads.start(function() {
    yijianxue.wangluopipei()
})