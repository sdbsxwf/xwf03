"ui";
var yijianxue = require('./8yijianxue_mk.js'); //导入一键学模块。
ui.layout(
    <vertical>
        <text textSize="18sp" textColor="#000000" margin="10" textStyle="bold">
            爱学习--题库
        </text>
        <ScrollView>
            <vertical>
                <horizontal>
                    <text text="问题:"  textSize="10sp"/>
                    <input id="wwtt" hint="" text="" w="*" textSize="10sp" lines="3"/>
                </horizontal>
                <horizontal>
                    <text text="选项:" textSize="10sp"/>
                    <input id="xxxx" hint="" text="" w="*" textSize="10sp" lines="3"/>
                </horizontal>
                <horizontal>
                    <text text="答案:" textSize="10sp"/>
                    <input id="ddaa" hint="" text="" w="*" textSize="10sp" lines="3"/>
                </horizontal>
                <horizontal>
                    <text text="序列号:" />
                    <input id="id" hint="请输问题序号" text="0" inputType="number" />
                    <button id="sid" text="搜序号" />
                </horizontal>
                <horizontal>
                    <button id="sc" text="删除" />
                    <button id="zj" text="新增" />
                    <button id="xg" text="修改" />
                </horizontal>
                <horizontal>
                    <button id="bftk" text="备份题库" />
                    <button id="syt" text="上一题" />
                    <button id="xyt" text="下一题" />
                </horizontal>
                <horizontal>
                    <text text="关键词:" />
                    <input id="gjc" hint="输入问题或答案关键词" text="" />
                </horizontal>
                <horizontal>
                    <radiogroup orientation="horizontal"  layout_gravity="center_vertical">
                        <radio id="rbQuestion" text="题目" checked="true" />
                        <radio id="rbAnswer" text="答案" />
                    </radiogroup>
                    <button id="ssgjc" text="搜索" />
                </horizontal>
                <horizontal>
                    <button id="kxfcs" text="开悬浮窗搜" />
                    <button id="fzwt" text="复制" />
                    <button id="reset" text="重置" />
                </horizontal>
                <text id="su" text="" />
                <text id="da" text="" />
            </vertical>
        </ScrollView>
    </vertical>
);





//3.2题库备份事件
ui.bftk.click(function() {
    threads.start(function() {
        files.copy(files.path("./tk题库.txt"), "/sdcard/备份题库.txt");
        toastLog("已备份到:/sdcard/备份题库.txt")
    });
});
//3.3重置事件
ui.reset.click(function() {
    threads.start(function() {
        ui.run(() => {
            ui.gjc.setText(""); //关键词
            ui.id.setText("0"); //id
            ui.wwtt.setText(""); //问题 
            ui.xxxx.setText(""); //选项
            ui.ddaa.setText(""); //答案
            ui.su.setText(""); //搜索数量
            ui.da.setText(""); //搜索内容
        })
        threads.shutDownAll();
        toastLog("重置完毕!");
    })
});

//3.4删除题目事件
ui.sc.click(function() {
    threads.start(function() {
        var ttkk = duqutk()
        var cc = Number(ui.id.getText()); //获取id数
        var aa = ttkk[cc].wenti //读问题。
        dialogs.confirm("确实要删除吗", aa, function(b) {
            if (b) {
                sctm() //删除函数。
            } else {
                toastLog("已取消")
            }
        });
    });
});
//3.4.1删除函数。
function sctm() {   
    var ttkk = duqutk()
    var cc = Number(ui.id.text());
    var aa = ttkk[cc].wenti //问题。
    ttkk.splice(cc, 1);
    toastLog("删除中，请稍候……")
    var jsons = JSON.stringify(ttkk) //字典转字符串
    var texts = jsons.slice(1, text.length - 1);
    xiewenjian(texts+","); //3.7重新写入文件函数
}


//3.5修改题目事件
ui.xg.click(function() {
    threads.start(function() {
        //判断是否为空
        if (ui.wwtt.getText() != "" || ui.xxxx.getText() != "" || ui.ddaa.getText() != "") {
            xgwts() //修改函数。
        } else {
            toastLog("录入不全，请录入。")
        }
    })
})

//3.5.1修改函数。
function xgwts() {
    var ttkk = duqutk()
    var xzdx = new Object(); //创建对象
    var cc = Number(ui.id.text()); //获取id数
    var aas = ui.wwtt.text(); //获取问题 
    var abs = ui.xxxx.text(); //获取选项
    var bbs = ui.ddaa.text(); //获取答案
    xzdx.wenti = aas //问题赋值。  
    xzdx.xuanxiang = abs //选项赋值。   
    xzdx.daan = bbs //答案赋值。   
    ttkk[cc] = xzdx //修改
    toastLog("修改中，请稍候……")
    var jsons = JSON.stringify(ttkk) //字典转字符串
    var texts = jsons.slice(1, text.length - 1);
    xiewenjian(texts+","); //3.7重新写入文件函数
}

//3.6新增题目事件
ui.zj.click(function() {
    threads.start(function() {
        //判断是否为空
        if (ui.wwtt.getText() != "" || ui.xxxx.getText() != "" || ui.ddaa.getText() != "") {
            xzwt() //新增函数。
        } else {
            toastLog("录入不全，请录入。")
        }
    })
})

//3.6.1新增函数。
function xzwt() {
    var ttkk = duqutk()
    var xzdx = new Object();
    var cc = ttkk.length;
    var aas = ui.wwtt.text();
    var abs = ui.xxxx.text();
    var bbs = ui.ddaa.text();
    xzdx.wenti = aas //问题。  
    xzdx.xuanxiang = abs //选项。   
    xzdx.daan = bbs //答案。   
    ttkk[cc] = xzdx //修改
    toastLog("新增中，请稍候……")
    var jsons = JSON.stringify(ttkk) //字典转字符串
    var texts = jsons.slice(1, text.length - 1);
    xiewenjian(texts+","); //3.7重新写入文件函数
}

//3.7重新写入文件函数
function xiewenjian(datas) {
    //写文件。
    var path = "./tk题库.txt" //打开文件
    var file = open(path, "w", "utf-8"); //覆盖原内容
    file.write(datas); //写入
    //输出缓冲区
    file.flush();
    //关闭文件
    file.close();
    toastLog("已存入");
}


//3.9搜索序列号事件。
ui.sid.click(function() {
    threads.start(function() {
        var ttkk = duqutk()
        var dd = ui.id.getText(); //获取ID
        cc = Number(dd)
        //判断id小于等于题库数量执行，否则等于题库数
        if (cc <= ttkk.length - 1) {
            sid(cc) //通过序列数搜问题和答案函数。
        } else {
            cc = ttkk.length - 1
            sid(cc) //通过序列数搜问题和答案函数。
        }
    })
})


//3.9.1上一条事件。降
ui.syt.click(function() {
    threads.start(function() {
        var ttkk = duqutk()
        var dd = ui.id.getText(); //获取ID
        cc = Number(dd)
        cc--
        //判断id大于等于题库数量执行，否则等于题库数
        if (cc >= 0) {
            sid(cc) //通过序列数搜问题和答案函数。
        } else {
            cc = ttkk.length - 1
            //     toastLog(cc)
            sid(cc) //通过序列数搜问题和答案函数。
        }
    })

})
//3.9.2下一条事件。升
ui.xyt.click(function() {
    threads.start(function() {
        var ttkk = duqutk()
        var dd = ui.id.getText(); //获取ID
        cc = Number(dd)
        cc++
        //判断id小于等于题库数量执行，否则等于0
        if (cc <= ttkk.length - 1) {
            sid(cc) //通过序列数搜问题和答案函数。
        } else {
            cc = 0
            sid(cc) //通过序列数搜问题和答案函数。
        }
    })

})
//3.9.3通过序列数搜问题和答案函数。
function sid(cc) {
    var ttkk = duqutk()
    var aa = ttkk[cc].wenti //问题。
    var ab = ttkk[cc].xuanxiang //选项。
    var bb = ttkk[cc].daan //答案。
    ui.run(() => {
        ui.wwtt.setText(aa);
        ui.xxxx.setText(ab);
        ui.ddaa.setText(bb);
        ui.id.setText(String(cc));
    })
}

//打开悬浮窗
ui.kxfcs.click(function() {
    threads.start(function() {
        engines.execScriptFile(files.cwd() + "/4kxfcs.js"); //悬浮答题主函数 
    })
})


//3.8搜索关键词事件。
ui.ssgjc.click(function() {
    threads.start(function() {
        var ddss = ui.gjc.getText(); //获取关键词
        //判断关键词不为空
        if (ddss != "") {
            var wen = wenti_pp()
            //判断匹配不为空
            if (wen != "") {
                ui.run(() => {
                    ui.su.setText(String(wen[1])); //写入匹配数量
                    ui.da.setText(String(wen[0])); //写入匹配问题和答案
                })
            } else {
                ui.run(() => {
                    ui.da.setText("未找到!")
                })
            }
        } else {
            toastLog("请输入关键词")
        }
    })
})
//1.4.复制按钮事件。
ui.fzwt.click(function() {
    threads.start(function() {
        var dass = ui.da.getText()
        setClip(dass); //创建剪贴板。
        toastLog("已复制")
    })

})



/*
//3.10读取题库函数。
function duqutk() {
    //普通的字符串转成字典。
    //var path = "./22081.txt" //打开文件
    var path = files.path("./tk题库.txt");
    var file = open(path, "r", "utf-8"); //读取文件的所有内容
    var text = file.read();
    var zidian = eval('(' + text + ')');
    file.close();
    //  log(zidian.length);
    return zidian;

}
*/
//1.1打开题库。
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
    var dds = ui.gjc.getText(); //获取关键词
    var jie = []; //建空列表,放结果
    if (ui.rbQuestion.checked) { //按题目搜
        var wens = "wenti" //关键词匹配函数               
    } else { //按答案搜
        var wens = "daan" //关键词匹配函数              
    }
    for (var i = 0; i < ttkk.length; i++) {
        var ti = ttkk[i][wens];
        var jieguo = ti.indexOf(dds); //问题匹配筛选。
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


//开个线程检查网络是否匹配。
threads.start(function(){
    yijianxue.wangluopipei()
    })

