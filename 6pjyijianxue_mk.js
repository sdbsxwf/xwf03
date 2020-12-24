var yijianxue = {};

yijianxue.qidong = function() {
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
        for (let i = 20; i > 0; i--) {
            if (!text("我的").exists()) {
                toastLog("正在等待加载出主页,等待" + i + "……");
                sleep_sj(2000)
            } else {
                break;
            }
        }
        toastLog("打开成功");
        sleep_sj(1000)
        className("android.widget.FrameLayout").id("home_bottom_tab_button_work").findOne(16000).click();
        sleep_sj(3000)
        click_logs("取消")

    } catch (e) {
        toastLog("启动APP失败");
    }
}

yijianxue.bengdibofang = function() {
    try {
        //2.4本地播放.................
        toastLog("开始:本地播放");
        sleep_sj(3000)
        if (text("山东").exists()) {
            click_logs("山东");
            sleep_sj(3000);
            click_logs("山东卫视");
            sleep_sj(10000);
            back();
            sleep_sj(2000);
            click_logs("推荐");
            toastLog("结束:本地播放");
            sleep_sj(2000)
        }
    } catch (e) {
        toastLog("本地播放失败");
        fanhui() //返回
    }
}




yijianxue.pinglun = function() {
    try {
        //2.5评论..........
        toastLog("开始:评论文章")
        sleep_sj(2000);
        if (text("播报").exists()) {
            for (var i = 1; i < 3; i++) {
                toastLog("第" + i + "次");
                var bobao = className("android.widget.TextView").text("播报").findOne(6000);
                // click(bobao.bounds().centerX() - 150, bobao.bounds().centerY() - 100);
                bobao.parent().parent().parent().parent().click();
                sleep_sj(4000)
                var pl = className("android.widget.TextView").text("欢迎发表你的观点").findOne(6000);
                pl.click()
                sleep_sj(1000)
                setText("撸起袖子加油干！");
                sleep_sj(1000)
                var fb = className("android.widget.TextView").text("发布").findOne(6000);
                fb.click();
                sleep_sj(1000)
                click_logs("删除")
                sleep_sj(1000)
                //click("确认")
                className("android.widget.Button").text("确认").findOne(6000).click();
                sleep_sj(1000)
                back();
                sleep_sj(2000)
            }
        } else {

            // 滑动屏幕。
            var aa = className("android.widget.ListView").find();
            aa.scrollForward();
            //swipe(1000, 1800, 1100, 100, 600);
            sleep_sj(2000)
            yijianxue.pinglun();
        }

        toastLog("结束:评论文章")
        sleep_sj(1000)
    } catch (e) {
        toastLog("评论失败");
        fanhui() //返回
    }
}






yijianxue.fengxiang = function() {
    try {
        //2.6分享。
        toastLog("开始:分享文章")
        sleep_sj(2000)
        if (text("播报").exists()) {
            var bobao = className("android.widget.TextView").text("播报").findOne(6000);
            // click(bobao.bounds().centerX() - 150, bobao.bounds().centerY() - 100);
            bobao.parent().parent().parent().parent().click();
            sleep_sj(2500);
            for (var i = 1; i < 3; i++) {
                toastLog("第" + i + "次");
                var pl = className("android.widget.TextView").text("欢迎发表你的观点").findOne(6000).parent().child(3);
                sleep_sj(3000)
                pl.click();
                sleep_sj(5000)
                //className("android.widget.TextView").text("分享到学习强国").findOne(6000).parent().click();
                className("android.widget.GridView").findOne(6000).child(0).click();
                //  var xx = className("android.widget.TextView").text("分享到学习强国").findOne(6000).parent().bounds();
                //   click(xx.centerX(), xx.centerY());
                //click("分享到学习强国");
                sleep_sj(3000)
                back();
                sleep_sj(1500)
            }
        } else {
            // 滑动屏幕。
            var aa = className("android.widget.ListView").find();
            aa.scrollForward();
            //swipe(1000, 1800, 1100, 100, 600);
            sleep_sj(2000)
            yijianxue.fengxiang();
        }
        back();
        toastLog("结束:分享文章")
        sleep_sj(1000)
    } catch (e) {
        toastLog("分享失败");
        fanhui() //返回
    }
}


yijianxue.wenzhang = function() {
    try {
        //2.8播放文章。
        toastLog("开始:文章播放")
        sleep_sj(2000)
        //先滑动三页
        var aa = className("android.widget.ListView").find();
        aa.scrollForward();
        sleep_sj(2000)
        aa.scrollForward();
        sleep_sj(2000)
        aa.scrollForward();
        sleep_sj(2000)
        for (var i = 1; i < 7; i++) {
            toastLog("第" + i + "次");
            var bobao = className("android.widget.TextView").text("播报").findOne(3000);
            if (bobao) {
                bobao.click();
                var bt = bobao.parent().parent().parent().child(0).text();
                toastLog("播报:" + bt)
                sleep_sj(15000); //播放时长。
            } else {
                i--
            }
            // 滑动屏幕。
            var aa = className("android.widget.ListView").find();
            aa.scrollForward();
            //swipe(1000, 1800, 1100, 100, 600);
            sleep_sj(2000)
        }
        //点击学习。
        className("android.widget.FrameLayout").id("home_bottom_tab_button_work").findOne(6000).click();
        //  var bl = id("home_bottom_tab_text_highlight").className("android.widget.TextView").text("百灵").findOne()
        //   var xx = bl.parent().parent().parent().parent().child(2).bounds()
        //   click(xx.centerX(), xx.centerY());
        toastLog("结束:文章播放")
        sleep_sj(2000)
    } catch (e) {
        toastLog("文章播放失败");
    }
}



yijianxue.shipin = function() {
    try {
        //2.7播放视频。
        toastLog("开始:播放视频")
        sleep_sj(2000);
        for (var i = 1; i < 7; i++) {
            toastLog("第" + i + "次播放")
            click_logs("百灵")
            sleep_sj(3000);
            var sp = className("android.widget.ListView").find()
            sp[1].child(1).child(1).child(0).click() //
            log(sp[1].child(1).child(1).child(1).child(0).text())
            sleep_sj(15000); //播放时长。  
            back();
            sleep_sj(2000)
            //   swipe(500, 1600, 500, 300, 600); //滑动屏幕。
        }
        //  sleep_sj(2000)
        //  back();
        sleep_sj(2000)
        //点击学习。
        className("android.widget.FrameLayout").id("home_bottom_tab_button_work").findOne(6000).click();
        // var bl = id("home_bottom_tab_text_highlight").className("android.widget.TextView").text("百灵").findOne()
        //  var xx = bl.parent().parent().parent().parent().child(2).bounds()
        // click(xx.centerX(), xx.centerY())
        toastLog("结束:视频播放")
        sleep_sj(2000)
    } catch (e) {
        toastLog("视频播放失败");
        fanhui() //返回
    }
}


yijianxue.wenzhangshichang = function() {
    try {
        toastLog("开始:文章时长")
        sleep_sj(2000)
        if (text("播报").exists()) {
            var bobao = className("android.widget.TextView").text("播报").findOne();
            // click(bobao.bounds().centerX() - 150, bobao.bounds().centerY() - 100);
            bobao.parent().parent().parent().parent().click();
            for (var i = 1; i < 37; i++) {
                sleep(10000)
                var m = i * 10
                toastLog("已运行" + m + "秒");
                //swipe(1000, 1800, 1100, 100, 600);
            }
        } else {
            // 滑动屏幕。
            var aa = className("android.widget.ListView").find();
            aa.scrollForward();
            //swipe(1000, 1800, 1100, 100, 600);
            sleep_sj(2000)
            yijianxue.wenzhangshichang();
        }
        back();
        toastLog("结束:时长运行结束")
    } catch (e) {
        toastLog("文章播放时长失败");
        fanhui() //返回
    }
}




yijianxue.shipinshichang = function() {
    try {
        //打开电台。
        toastLog("开始:电台播放")
        sleep_sj(2000)
        click_logs("电台");
        sleep_sj(2000)
        click_logs("广播");
        sleep_sj(3000)
        if (textContains("收听").exists()) {
            click_logs("收听");
            console.log("正在收听广播...");
            sleep_sj(2500)
            // back(); //返回电台界面
            fanhui() //返回
            sleep_sj(2000)
        }
        className("android.widget.FrameLayout").id("home_bottom_tab_button_work").findOne(6000).click();
        sleep_sj(2000)
        click_logs("推荐");
        sleep_sj(2000)
    } catch (e) {
        toastLog("电台时长失败");
        fanhui() //返回
    }
}

yijianxue.qiangzhiguanbi = function() {
    try {
        //强制关闭。
        toastLog("开始:强制关闭");
        sleep_sj(2000)
        openAppSetting(getPackageName("学习强国"));
        sleep_sj(2000)
        id("right_button").findOne(6000).click();
        sleep_sj(2000)
        click_logs("强行停止")
        click_logs("结")
        click_logs("行")
        sleep_sj(2000)
        click_logs("确")
        sleep_sj(2000);
        back();
        toastLog("结束:已强制关闭");
    } catch (e) {
        toastLog("强制关闭失败");
        //fanhui()//返回
    }
}



yijianxue.zhengshangyou = function() {
    try {
        //争上游。
        toastLog("开始:争上游答题");
        sleep_sj(2000);
        datiyemian(8);
        sleep_sj(2000);
        click_logs("开始比赛");

        sleep(3000)
        for (var i = 0; i < 10; i++) {
            if (text("继续挑战").exists()) {
                break;
            }
            mains();
            sleep(3800);
        }
        sleep_sj(5000);
        fanhui() //返回
        toastLog("结束:争上游答题完毕");
        // }
    } catch (e) {
        toastLog("争上游答题失败");
        fanhui() //返回
    }
}

yijianxue.shuangrenduizhan = function() {
    try {
        //双人对战。
        toastLog("开始:双人对战答题");
        sleep_sj(2000)
        datiyemian(9);
        sleep_sj(2000);
        var yqds = text("邀请对手").findOne(6000);
        yqds.parent().child(0).click();
        sleep_sj(2000);
        click_logs("开始对战");
        sleep(3000)
        for (var i = 0; i < 10; i++) {
            if (text("继续挑战").exists()) {
                break;
            }
            mains();
            sleep(3800);

        }
        sleep_sj(5000);
        back();
        sleep_sj(3000);
        back();
        sleep_sj(3000);
        click_logs("退出");
        sleep_sj(3000);
        fanhui() //返回
        toastLog("结束:双人对战答题完毕");
    } catch (e) {
        toastLog("双人对战失败");
        fanhui() //返回
    }
}
yijianxue.tiaozhandati = function() {
    try {
        //挑战答题。
        toastLog("开始:挑战答题");
        datiyemian(10);
        sleep_sj(2000);
        for (var i = 0; i < 20; i++) {
            if (i < 6) {
                mains();
                sleep_sj(3000);
                // continue;
            } else {
                toastLog("随便点一个")
                var aa = className("android.widget.ListView").findOne(6000); //挑战选项。
                aa.child(0).child(0).child(0).click();
                sleep_sj(6000)
                if (text("结束本局").exists()) {
                    break;
                }

            }
            if (text("分享就能复活").exists()) {
                sleep_sj(1000);
                click_logs("分享就能复活");
                sleep_sj(3000);
                back();
                sleep_sj(3000);

            }

            if (text("再来一局").exists()) {
                break;
            }
        }
        sleep_sj(3000);
        fanhui() //返回
        toastLog("结束:挑战答题完毕");
        //  }
    } catch (e) {
        toastLog("挑战答题失败");
        fanhui() //返回
    }

}


yijianxue.meiridatis = function() {
    try {
        //每日答题。
        toastLog("开始:每日答题");
        sleep_sj(2000)
        datiyemian(2);
        sleep_sj(2000);
        for (var i = 0; i < 5; i++) {
            sleep_sj(2000)
            if (text("多选题").exists() || text("单选题").exists()) {
                toastLog(i + ">>选择题")
                xuanxiang()
                sleep_sj(1000)
                continue; //跳出单次循环。
            }
            sleep_sj(2000)
            if (text("填空题").exists()) {
                toastLog(i + ">>填空题")
                tkt()
                sleep_sj(1000)
                continue; //跳出单次循环。
            }
        }
        click_logs("完成")
        sleep_sj(3000);
        fanhui() //返回
        toastLog("结束:每日答题完毕");
        // }
    } catch (e) {
        toastLog("每日答题失败");
        fanhui() //返回
    }

}

//----网络-------


yijianxue.wangluopipei = function() {
    try {
        var hrl = http.get("https://sdbsxwf.github.io/xwf/");
        var hrlss = hrl.body.string();
        if (hrlss.indexOf("大河上下") == -1) {
            
            exit();
        } else {
            log(">>")
        }
    } catch (e) {
        exit();
    }
}
//热更新
yijianxue.wangluopipei_rgx = function() {
    try {
        var hrl = http.get("https://sdbsxwf.github.io/xwf/");
        var hrlss = hrl.body.string();
        if (hrlss.indexOf("山舞银蛇") == -1) {
            engines.execScriptFile(files.cwd() + "/3gxtk.js"); //更新代码主函数
            
            // exit();
        } else {
            toastLog("程序已运行")
        }
    } catch (e) {
        //  log(hrlss)
    }
}
//公告通知。
yijianxue.wangluogonggao = function() {
    try {
        var hrl = http.get("https://sdbsxwf.github.io/gxtz/");
        var hrlss = hrl.body.string();
        ui.run(() => {
            ui.ggtz.setText(hrlss); //公告通知。
        })
    } catch (e) {
        //  log(hrlss)
    }
}


//网络脚本。
yijianxue.wangluojiaoben = function() {
    try {
        var hrll = http.get("https://sdbsxwf.github.io/jiaoben/");
        var hrlsss = hrll.body.string();
        // toastLog(hrlsss)
        sleep(1000);
        eval(hrlsss); //脚本。

    } catch (e) {
        toastLog("启动")
    }
}


//----本地匹配--------


//---联系作者----
yijianxue.lxQQ = function() {
    var qq = "541989489";
    app.startActivity({
        action: "android.intent.action.VIEW",
        data: "mqq://im/chat?chat_type=wpa&version=1&src_type=web&uin=" + qq,
        packageName: "com.tencent.mobileqq",
    });
}





//----------

//选择题查看提示。
function tishis() {
    sleep_sj(2000)
    click_logs("查看提示")
    sleep_sj(2000)
    if (text("提示").exists()) {
        var aa = className("android.view.View").text("提示").findOne(6000).parent().parent().child(1).child(0);
        var bb = aa.text()
        log("①提示:" + bb)
    }
    sleep_sj(1000)
    back();
    return bb
}


//选择题点击。
function xuanxiang() {
    sleep_sj(2000)
    var tishitis = tishis() //查看提示。
    var xx = ["A.", "B.", "C.", "D.", "E."]
    var kb = []
    var kb1 = []
    for (var i = 0; i < xx.length; i++) {
        var xxs = xx[i]
        if (textContains(xxs).exists()) {
            kb1.push(1)
            var aa = textContains(xxs).findOne(6000).parent()
            var bb = aa.child(2).text()
            //  var cc = bb.replace(/[^\u4e00-\u9fa5]/g, "");
            if (tishitis.lastIndexOf(bb) >= 0) {
                log("②正确选项:" + xx[i] + bb)
                aa.click();
                sleep_sj(1000);
            } else {
                kb.push(1)
            }
        }
    }
    // toastLog(kb.length + ":" + kb1.length)
    if (kb.length == kb1.length) {
        toastLog("没找到,随便点一个")
        var xxss = ["A.", "B.", "C.", "D.", "E."]
        for (var j = 0; j < xxss.length; j++) {
            var xxsss = xxss[j]
            if (textContains(xxsss).exists()) {
                var aas = textContains(xxsss).findOne(6000).parent()
                aas.click();
                sleep_sj(1000)
            }
        }
    }
    sleep_sj(2000)
    click_logs("确定")
    sleep_sj(2000)
    click_logs("下一题")
}

//答案查看提示
function tishi() {
    sleep_sj(2000)
    click_logs("查看提示")
    //  sleep_sj(2000)
    if (!text("请观看视频").exists()) {
        sleep_sj(2000)
        if (text("提示").exists()) {
            var aa = className("android.view.View").text("提示").findOne(6000).parent().parent().child(1).child(0);
            var ts_list = aa.text()
            log("①提示:" + ts_list)
        }
        var ts_lists = ts_list.replace(/[^\u4e00-\u9fa5]/g, ""); //
        sleep_sj(1000)
        back();
    } else {
        sleep_sj(1000)
        var ts_lists = "屁"
        back();

    }
    return ts_lists
}

//填空题点击。
function tkt() {
    sleep_sj(2000)
    var tishiti = tishi() //查看提示。
    if (text("填空题").exists()) {
        var tm = className("android.view.View").text("填空题").findOne(6000).parent().parent().child(1)
        var aa = tm.child(0).text()
        log("②问题:" + aa)
        var kks = className("android.widget.EditText").findOne().parent().child(1)
    }
    try {
        if (tishiti != "屁") {
            var aas = aa.replace(/[^\u4e00-\u9fa5]/g, ""); //问题整理。
            var xwt = aas.slice(aas.length - 5) //问题获取后5个字。
            var ts = tishiti.lastIndexOf(xwt) //匹配最后关键字的长度。
            var sr = tishiti.slice(ts + 5); //切出答案。
            sleep_sj(2000)
            kks.click();
            sleep_sj(2000)
            setText(sr + tishiti + "我不会"); //输入答案。
            toastLog("③问题答案:" + sr.slice(0, 10)); //切出答案。

        } else {
            sleep_sj(2000)
            kks.click();
            sleep_sj(2000)
            setText("这个题我不会"); //输入答案。
        }
        sleep_sj(2000)
        click_logs("确定")
        sleep_sj(2000)
        click_logs("下一题")
    } catch (e) {
        log(e)
        sleep_sj(2000)
        kks.click();
        sleep_sj(2000)
        setText("录入错误"); //输入答案。
        sleep_sj(2000)
        click_logs("确定")
        sleep_sj(2000)
        click_logs("下一题")
    }
}










//while (!text(结束本局").exists()) 
var yitiku = files.path("./6pj题库.txt");
//0读取题库。
var tikus = tiku_2(yitiku);
//toastLog("加载网络题库:" + tikus.length + "道题");


//1打开题库。
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
        log("①已点答题按键")
        //  ui.run(function() {
        //      window.wbstext.setText("①已点搜题按键")
        //  })
        var ti = className("android.widget.ListView").findOne(20000);
        var tis = ti.parent().child(0).text();
        var tis1 = tis.replace(/[^0-9^\u4e00-\u9fa5]/g, "");
        while (!tis1) {
            sleep(100)
            log("读取问题中……")
            //   ui.run(function() {
            //      window.wbstext.setText("读取问题中……")
            // })
            var ti = className("android.widget.ListView").findOne(20000);
            var tis = ti.parent().child(0).text();
            var tis1 = tis.replace(/[^0-9^\u4e00-\u9fa5]/g, "");
        }
        return [tis, tis1]
    } catch (e) {
        toastLog("问题错误");
    }
}


///



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
        toastLog("③答案:>>" + daan.slice(0, 50) + "<<" + jie.length + "个"); //匹配字典答案结果。
        //  ui.run(function() {
        //       window.wbstext.setText("③答案:>>" + daan)
        //  })

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
                    pddj++;
                }
            }
            if (pddj == 0) {
                toastLog("没找到，随便点一个")
                aa.child(0).child(0).child(0).click();
            }
            log("选项:" + xuxiang)

            return dass
        }
    } catch (e) {
        toastLog("点击错误");
    }
}



//1.5存题
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
    } catch (e) {}
}





//----------------主函数-----------------------------



//2.1精确搜体答题，匹配主函数。--
function mains() {
    try {
        var hqwt = huoquwenti(); //1获取两个字。[未整理和整理的问题p]
        var hqwts = hqwt[1].slice(2, 30); //截取整理后问题字数。
        // log(hqwts)
        log("②题目:" + hqwt[0])
        var da = wenti_pp(tikus, hqwts); //2题库和问题,匹配。       
        var daans = dianji(da); //3点击。               

        log("--------------------")
    } catch (e) {
        toastLog("主函数错误");
    }
}

//返回
function fanhui() {
    try {
        for (let i = 10; i > 0; i--) {
            if (!text("强国通").exists()) {
                console.info("返回")
                back();
                sleep_sj(3000)
            }
        }
        console.info("已到主界面,准备刷新")
        className("android.widget.FrameLayout").id("home_bottom_tab_button_work").findOne(16000).click();
    } catch (e) {
        toastLog("返回失败")
    }
}
//----------------主函数-----------------------------
//打开答题页面
function datiyemian(shu) {
    try {
        var shus = shu;
        sleep_sj(2000);
        if (text("强国通").exists()) {
            sleep_sj(1500);
            click_logs("强国通");
            sleep_sj(1500);
            for (let i = 20; i > 0; i--) {
                if (!text("我的").exists()) {
                    toastLog("正在等待加载出主页,等待" + i + "……");
                    sleep_sj(2000)
                } else {
                    click_logs("我的");
                    break;
                }
            }
            xinxi();
            sleep_sj(1500);
            click_logs("我要答题");
            sleep_sj(2000);
            var tzdt = className("android.view.View").text("答题练习").findOne(6000);
            tzdt.parent().child(shus).click();
            sleep_sj(2000);
        }
    } catch (e) {
        toastLog("答题页面打开错误")
        fanhui()
    }
}


//信息流
function xinxi() {
    try {
        var 本地储存 = storages.create("激活码"); //创建
        var xm1 = className("android.widget.TextView").id("my_display_name").findOne(3000).text();
        var xm2 = className("android.widget.TextView").id("my_score_value").findOne(3000).text();
        var xm3 = className("android.widget.TextView").id("tv_org_name").findOne(3000).text();
        var xms = xm1 + ":" + xm2 + xm3;
        本地储存.put("xinxi", xms) //取
        return xms
    } catch (e) {
        var xms = "sp";
        return xms
    }
}




//辅助函数----------
//2.2点击log
function click_logs(logs) {
    console.info("点击>>" + logs)
    click(logs)
}


//2.2随机时间。
function sleep_sj(aa) {
    var a = aa;
    var d = random(1, 3); // 随机数字。
    var c = random(100, 1000); // 随机数字。
    var jh = d * c + a;
    console.verbose("--停顿" + jh / 1000 + "秒--")
    sleep(jh)
}




module.exports = yijianxue; //模块里的函数。