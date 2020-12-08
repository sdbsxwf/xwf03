var window = floaty.window(
    <vertical>
        <input id="wbtext" text="" hint="" textSize="12sp"   bg="#77dddddd" lines="10"/>
        <input id="input" text="" hint="输入题目或答案关键词" textSize="14sp" bg="#77dddddd" />
        <radiogroup orientation="horizontal"  layout_gravity="center_vertical">
            <radio id="rbQuestion" text="题目" checked="true" />
            <radio id="rbAnswer" text="答案" />
        </radiogroup>
        <horizontal>
            <button id="exit" text="关闭" w="40" h="40" bg="#77ffffff"/>
            <button id="kzts" text="开悬浮窗" w="80" h="40" bg="#77ffffff"/>
            <button id="qk" text="清空" w="40" h="40" bg="#77dddddd"/>
            <button id="action" text="搜题  移动" w="80" h="40" bg="#77ffffff"/>
        </horizontal>
        
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
            if (new Date().getTime() - downTime > 15000) {
                exit();
            }
            return true;
        case event.ACTION_UP:
            //手指弹起时如果偏移很小则判断为点击
            if (Math.abs(event.getRawY() - y) < 5 && Math.abs(event.getRawX() - x) < 5) {
                stmain();
            }
            return true;
    }
    return true;
});


window.input.on("key", function(keyCode, event) {
    if (event.getAction() == event.ACTION_DOWN && keyCode == keys.back) {
        window.disableFocus();
        event.consumed = true;
    }
});

window.input.on("touch_down", () => {
    window.requestFocus();
    window.input.requestFocus();
});


window.exit.click(() => {
    threads.start(function() {
        toastLog(" 退出！");
        exit();
    })
});


//清空控制台内容。
window.qk.click(function() {
    //  threads.start(function() {
    ui.run(function() {
        window.wbtext.setText("");
        window.input.setText("");
    })
    console.clear()
    toastLog("已清空")
    window.disableFocus();
    //   })
})


////1.2打开控制台。
window.kzts.click(function() {
    threads.start(function() {
        kztkj();
    });
})

//1.2.1控制台开关。
function kztkj() {
    if (window.kzts.getText() == '开悬浮窗') {
        console.show();
        ui.run(function() {
            window.kzts.setText('关悬浮窗');
        })
    } else {
        console.hide();
        ui.run(function() {
            window.kzts.setText("开悬浮窗");
        })
    }
}


//3.8搜索关键词事件。

function stmain() {
    var ddss = String(window.input.getText()); //获取关键词
    //判断关键词不为空
    if (ddss != "") {
        var wen = wenti_pp()
        //判断匹配不为空
        if (wen != "") {
            var shu = String(wen[1]); //写入匹配数量
            var jg = String(wen[0]); //写入匹配问题和答案            
            ui.run(function() {
                    window.wbtext.setText(shu + "\n" + jg);
            })
        log(shu + "\n" + jg)
        window.disableFocus();
    }
} else {
    toastLog("请输入关键词")
}
}




//3.10读取题库函数。
function duqutk() {
    try {
        var tikubl =files.path("./tk题库.txt");
        var file = open(tikubl, "r", "utf-8"); //读取文件的所有内容
        var text = file.read();
        var ytext = text.slice(0, 3)
        if (ytext.indexOf("[")) {
            var qukongge = text.replace(/\s/g, "");
            if (qukongge.length > 0) {
                var texts = qukongge.slice(0, text.length - 1);
                var ass = "[" + texts + "]";
                var zidian = eval('(' + ass + ')');
            }
        } else {
            var zidian = eval('(' + text + ')');
        }
        file.close();
        return zidian;

    } catch (e) {
        toastLog("备份题库打开失败");
    }
}






//3.11问题匹配函数。------返回结果:匹配字典答案结果。
function wenti_pp() {
    var ttkk = duqutk()
    var dds = String(window.input.getText());
    var ddst = dds.replace(/[\s|\~|`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g, "");
    var jie = []; //建空列表,放结果
    if (window.rbQuestion.checked) { //按题目搜
        var wens = "wenti" //关键词匹配函数               
    } else { //按答案搜
        var wens = "daan" //关键词匹配函数              
    }
    for (var i = 0; i < ttkk.length; i++) {
        var ti = ttkk[i][wens];
        var tit = ti.replace(/[\s|\~|`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g, "");
        var jieguo = tit.indexOf(ddst); //问题匹配筛选。
        if (jieguo >= 0) {
            var ti = ttkk[i].wenti;
            var dd = ttkk[i].daan;
            jie.push("id:" + i + ">>" + ti + "--" + dd + "<<\n"); //结果放入列表。
        }
    }
    var guo = String(jie) //返回结果。
    var guos = guo.replace(/\n,/ig, "\n") //全局替换。
    var tj = "共搜到:" + jie.length + "条"; //返回个数。
    return [guos, tj]; //返回匹配数组。
}