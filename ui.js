//auto.waitFor(); //判断是否打开无障碍。

"ui";
ui.layout(
    <vertical>
        <appbar>
            <toolbar title="爱学习"/>
        </appbar>
        <Switch id="autoService" text="无障碍服务" checked="{{auto.service != null}}" padding="8 8 8 8" textSize="15sp"/>
        <frame height="200" gravity="center">
            <text text="还没有想好，相关配置..." gravity="center"/>
        </frame>
        <button id="start" text="开始运行"/>
        <button id="sjcx" text="更新题库"/>
    </vertical>
);

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

ui.start.on("click", function() {
    //程序开始运行之前判断无障碍服务
    if (auto.service == null) {
        toast("请先开启无障碍服务！");
        return;
    }
    main();
});


function main() {
    // 这里写脚本的主逻辑
    threads.start(function() {
        toastLog("开始运行");
        //    sleep(2000);
        engines.execScriptFile("./mains.js");
        //   engines.execScriptFile
        toastLog("运行结束");
    });
}

ui.sjcx.on("click", function() {
    //程序开始运行之前判断无障碍服务
    if (auto.service == null) {
        toast("请先开启无障碍服务！");
        return;
    }
    engines.execScriptFile("./gxtk.js");
});


