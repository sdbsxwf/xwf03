//爱强国v2.0(2020-10-21)
auto.waitFor(); //判断是否打开无障碍。
//悬浮窗界面。
var yijianxue = require('./8yijianxue_mk.js'); //导入一键学模块。

var window = floaty.window(
    <vertical>
        <input id="wbstext" text="" hint="" textSize="12sp"   bg="#77dddddd" lines="4"/>
        <button id="exit" text="退出悬浮窗按键" w="90" h="40" bg="#77ffffff"  textSize="10sp" />
        <horizontal>
            <button id="qd_app"  text="app"  w="45" h="40" bg="#77ffffff" textSize="10sp"  />
            <button id="yijian"  text="一键学"  w="45" h="40" bg="#77eeeeee" textSize="10sp"/>
        </horizontal>
        <horizontal>
            <button id="xbtz" text="¹停止" w="45" h="40" bg="#77ffffff"  textSize="10sp" />
            <button id="kzt"  text="²窗开"  w="45" h="40" bg="#77eeeeee" textSize="10sp" />
        </horizontal>
        <button id="cc"  text="空白"  w="90" h="40" bg="#77ffffff" textSize="10sp"/>
        <horizontal>
            <button id="tikuui"  text="题库"  w="45" h="40" bg="#77ffffff" textSize="10sp"  />
            <button id="tikuxfc"  text="ui题库"  w="45" h="40" bg="#77ffffff" textSize="10sp"  />
        </horizontal>
        <horizontal>
            <button id="da"  text="答案搜"  w="45" h="40" bg="#77ffffff" textSize="10sp"/>
            <button id="jqtz"  text="单次答" w="45" h="40" bg="#77ffffff" textSize="10sp"/>
        </horizontal>
        <button id="zddt" text="连续答题"  w="90" h="40" bg="#77eeeeee" textSize="10sp"/>
        <button id="action" text="移动"  w="90" h="40" bg="#77eeeeee" textSize="10sp"/>
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
            if (new Date().getTime() - downTime > 9000) {
                exit();
            }
            return true;
        case event.ACTION_UP:
            //手指弹起时如果偏移很小则判断为点击
            if (Math.abs(event.getRawY() - y) < 5 && Math.abs(event.getRawX() - x) < 5) {
                // onClick();
                toastLog("请按住拖动!")
            }
            return true;
    }
    return true;
});
//console.show();
toastLog("---爱强国v2.3---\n启动中，请稍后……");

var yitiku = files.path("./tk题库.txt");
//log("①获取网络题库:" + yitiku);
var chutichunti = files.path("./2jietu.js");
//log("②获取存题模块" + chutichunti);
var yijianxueui = files.path("./7yijianxueui.js");
//log("③一键学模块" + yijianxueui);
var tikuui = files.path("./5uitiku.js");
//log("④题库模块" + tikuui);
var kxfcs = files.path("./4kxfcs.js");
//log("⑤ui题库模块" + kxfcs);
//0读取题库。
var tikus = tiku_2(yitiku);
toastLog("加载网络题库:" + tikus.length + "道题");
log("加载完成，请使用！");
//log("提示:按住(自动答题)可以移动位置")
log("---------------")




//-------答题\按钮点击事件------------------------
//0.0 悬浮窗的退出
window.exit.click(() => {
    toastLog(" 退出！");
    exit();
});

//0.1自动答题
window.zddt.click(function() {
    if (window.zddt.getText() == '连续答题') {
        threads.start(function() {
            auto_1()
        }); //启动
        ui.run(function() {
            window.zddt.setText('停止运行');
        })
    } else {
        toastLog("全部停止")
        ui.run(function() {
            window.zddt.setText('连续答题');
        })
        threads.shutDownAll();

    }
});

//0.11自动答题函数。
function auto_1() {
    for (var i = 0; i < 50; i++) {
        mains();
        sleep(3500);
    }
}
//0.2精确答题。
window.jqtz.click(function() {
    threads.start(function() {
        mains() //精确搜
    });
})


//0.4选项搜题。
window.da.click(function() {
    threads.start(function() {
        xuanxiang_pp();
    });
})

//0.5错题存题。
window.cc.click(function() {
    threads.start(function() {
        log("已点击错题存题")
        engines.execScriptFile(chutichunti); //导入脚本。
    })
})









//-------自动学习类\按钮点击事件--------
//1.1全部停止
window.xbtz.click(function() {
    ui.run(function() {
        window.wbstext.setText("")
    })
    threads.start(function() {
        toastLog("已全部停止")
        threads.shutDownAll();
    }); //启动答案答题)//开一个线程
})

//1.2打开控制台。
window.kzt.click(function() {
    
    threads.start(function() {
        kztkj();
    });
})

//1.2.1控制台开关。
function kztkj() {
    if (window.kzt.getText() == '²窗开') {
        console.show();
        ui.run(function() {
            window.kzt.setText('²窗关');
        })
    } else {
        console.hide();
        ui.run(function() {
            window.kzt.setText("²窗开");
        })
    }
}

//1.3打开APP。
window.qd_app.click(function() {
    threads.start(function() {
        toastLog("已点击学习强国软件")
        start_app();
    });
})




//1.4一键学习自动函数。
window.yijian.click(function() {
    threads.start(function() {
        toastLog("已点击一键学")
        engines.execScriptFile(yijianxueui); //导入一键学习。
    })
})
//1.4体库模块函数。
window.tikuui.click(function() {
    threads.start(function() {
        toastLog("已点tk")
        engines.execScriptFile(tikuui); //导入一键学习。
    })
})
//1.4ui题库模块函数。
window.tikuxfc.click(function() {
    threads.start(function() {
        toastLog("已点uitk")
        engines.execScriptFile(kxfcs); //导入一键学习。
    })
})




//------答题函数-------------




//1.1打开题库。
function tiku_2(tikues) {
    try {
        var tikubl = tikues
        var file = open(tikubl, "r", "utf-8"); //读取文件的所有内容
        var text = file.read();
        var ytext = text.slice(0, 3)
        if (ytext.indexOf("[")) {
            var qukongge = text.replace(/\s/g, "");
            if (qukongge.length > 0) {
                var texts = qukongge.slice(0, text.length - 1);
                var ass = "[" + texts + "]";
                var zidians = eval('(' + ass + ')');
            }
        } else {
            var zidians = eval('(' + text + ')');
        }
        file.close();
        return zidians;

    } catch (e) {
        toastLog("备份题库打开失败");
    }
}

//
//1.2获取问题。
function huoquwenti() {
    try {
        var ti = className("android.widget.ListView").findOne(20000);
        var tis = ti.parent().child(0).text();
        var tis1 = tis.replace(/[^0-9^\u4e00-\u9fa5]/g, "");
        while (!tis1) {
            sleep(100)
            log("读取问题中……")
            var ti = className("android.widget.ListView").findOne(10000);
            var tis = ti.parent().child(0).text();
            var tis1 = tis.replace(/[^0-9^\u4e00-\u9fa5]/g, "");
        }
        return [tis, tis1]
    } catch (e) {
        toastLog("问题错误");
    }
}







//1.3问题匹配。------返回结果:匹配字典答案结果。
function wenti_pp(zidians, qiepanss) {
    try {
        var zidian = zidians; //打开题库。
        var qiepaness = qiepanss; //获取的问题。
        var jie = []; //建空列表,放结果
        for (var i = 0; i < zidian.length; i++) {
            var ti = zidian[i].wenti;
            var tis = ti.replace(/[^0-9^\u4e00-\u9fa5]/g, ""); //字典只保留汉字。       
            var jieguo = tis.indexOf(qiepaness); //问题匹配筛选。
            if (jieguo >= 0) {
                var jieslist = zidian[i];
                var jies = jieslist.daan;
                var jies_1 = jies.replace(/\s|^[A-D][\.\、]/ig, ""); //字典答案只保留汉字和数字。
                var jies_2 = "【" + jies_1 + "】"; //加上中括号，提高准确度。
                jie.push(jies_2); //结果放入列表。
            }
        }
        if (jie == false) {
            device.vibrate(300);
        }
        var daan = jie.toString(); //转成字符串。    
        return daan; //返回匹配字典答案结果。
    } catch (e) {
        toastLog("问题匹配错误");
    }
}

////


///{


//1.4通过选项点击--匹配字典答案结果,匹配选项,点击。
function dianji(tiss) {
    try {
        var xuxiang = []
        var pddj = 0
        if (className("android.widget.ListView").exists()) {
            var aa = className("android.widget.ListView").findOne(10000); //挑战选项。
            for (var i = 0; i < aa.childCount(); i++) {
                var xxs = aa.child(i).child(0).child(1);
                var xuanx = xxs.text(); //选项
                xuxiang.push(xuanx);
                var xuanx_1 = xuanx.replace(/\s|^[A-D][\.\、]/ig, ""); //选项只保留汉字和数字。
                var xuanx_2 = "【" + xuanx_1 + "】"; //添加中括号，提高精确度。
                var jieguo = tiss.search(xuanx_2); //匹配选项筛选结果。
                if (jieguo >= 0) {
                    aa.child(i).child(0).child(0).click();
                    var dass = aa.child(i).child(0).child(1).text();
                    log("④此轮点击完成");
                    pddj++
                }
            }
            if (pddj == 0) {
                toastLog("没找到，随便点一个")
                // aa.child(0).child(0).child(0).click();
                //   
            }
            log("选项:" + xuxiang)
            return dass
        }
    } catch (e) {
        toastLog("点击错误");
    }
}



//1.5存题,暂时不用。
function qutus(daanes) {
    try {
        var ertiku = files.path("./tk存题.txt")
        var xx = className("android.widget.ListView").findOne(); //答案选项控件。
        var tis = xx.parent().child(0).text(); //1.问题
        // log(tis);
        var shuliang = xx.childCount(); //选项数量。
        var lp = ["A、", "B、", "C、", "D、"];
        var jie = []; //2.选项存入列表。
        for (var i = 0; i < shuliang; i++) {
            var xxs = xx.child(i).child(0).child(1); //选项。
            jie.push(lp[i] + xxs.text()); //存入列表。
        }
        var file = open(ertiku, "a");
        file.write('{"wenti":"' + tis + '","xuanxiang":"' + jie.toString() + '","daan":"' + daanes + '"},'); //存入文件。
        file.close();
        toastLog("已存入备用题库......." + daanes);
    } catch (e) {
        toastLog("主函数错误");
    }
}





//----------------主函数-----------------------------



//2.1精确搜体答题，匹配主函数。--
function mains() {
    try {
        log("①已点答题按键")
        ui.run(function() {
            window.wbstext.setText("①已点搜题按键")
        })
        var hqwt = huoquwenti(); //1获取两个字。[未整理和整理的问题p]
        var hqwts = hqwt[1].slice(2, 30); //截取整理后问题字数。  
        log("②题目:" + hqwt[0])
        var da = wenti_pp(tikus, hqwts); //2题库和问题,匹配。  
        toastLog("③答案:>>" + da.slice(0, 50) + "<<"); //匹配字典答案结果。
        ui.run(function() {
            window.wbstext.setText("③答案:>>" + da)
        })
        var daanes = dianji(da); //3点击。               
        //  qutus(daanes) //存入答案。
        log("--------------------")
    } catch (e) {
        toastLog("主函数错误");
    }
}













//---------选项搜题-------------
//3.1选项用的题库。返回结果:选项匹配字典答案结果。
function wenjians(qiepan) { //选项与题库答案匹配    
    try {
        var jie = [];
        for (var i = 0; i < tikus.length; i++) { //遍历题库
            var tilist = tikus[i];
            var ti = tilist.daan; //题库答案
            var ti_1 = ti.replace(/^A|^B|^C|^D|[^a-z^0-9\u4e00-\u9fa5]/ig, "");
            var jieguo = ti_1.search(qiepan); //匹配结果
            if (jieguo >= 0) {
                jie.push(ti);
            }
        }
        var daan = jie.toString();
        return daan;
    } catch (e) {
        toastLog(" 选项匹配错误");
    }
}

//3.2选项匹配主函数。
function xuanxiang_pp() {
    try {
        log("已点选项搜题:")
        var xx = className("android.widget.ListView").findOne(15000); //挑战选项。
        var lp = ["A", "B", "C", "D"];
        var dalist = []
        for (var i = 0; i < xx.childCount(); i++) {
            var xxs = xx.child(i).child(0).child(1);
            var xuanx = xxs.text(); //选项
            var xuanx_1 = xuanx.replace(/^A|^B|^C|^D|[^a-z^0-9\u4e00-\u9fa5]/ig, "");
            var da = wenjians(xuanx_1); //选项匹配字典答案
            toastLog("■答案查" + lp[i] + ":【" + da + "】");
            dalist.push("■" + lp[i] + ":【" + da + "】\n")

        }
        ui.run(function() {
            window.wbstext.setText(String(dalist))
        })
        log("---------------")
    } catch (e) {
        toastLog("选项匹配主函数错误");
    }
}







//2.3启动强国函数。
function start_app() {
    try {
        //1启动强国函数。
        toastLog("正在启动app,\n请等待7秒……");
        device.setMusicVolume(0); //媒体静音
        launchApp("学习强国")
        if (!launchApp("学习强国")) //启动学习强国app
        {
            console.error("找不到学习强国App!");
            return;
        }
        for (let i = 10; i > 0; i--) {
            if (!text("我的").exists()) {
                sleep(2000)
                toastLog("正在等待加载出主页,等待" + i + "……");

            } else {
                break;
            }
        }

        click("我的");
        sleep(1500);
        click("我要答题");
        sleep(2000);

        toastLog("打开成功");
    } catch (e) {

    }
};





//开个线程检查网络是否匹配。
threads.start(function() {
    yijianxue.wangluopipei()
})