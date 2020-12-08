var ertiku = files.path("./tk题库.txt")
//截图片存题
function qutu() {
    requestScreenCapture();
    var img = captureScreen();
    var xx = className("android.widget.ListView").findOne(1000); //答案选项控件。
    var tis = xx.parent().child(0).text(); //1.问题
    // log(tis);
    var shuliang = xx.childCount(); //选项数量。
    var lp = ["A、", "B、", "C、", "D、"];
    var jie = []; //2.选项存入列表。
    for (var i = 0; i < shuliang; i++) {
        var xxs = xx.child(i).child(0).child(1); //选项。
        jie.push(lp[i] + xxs.text()); //存入列表。

    }
    for (let i = 0; i < shuliang; i++) {
        var xxss = xx.child(i).child(0).child(1);
        var daan = xxss.text(); //3.答案
        var x = 118;
        var y = xxss.bounds().centerY();
        if (images.detectsColor(img, "#ff3dbf75", x, y)) {
            //挑战答题取色对比。
            var file = open(ertiku, "a");
            file.write('{"wenti":"' + tis + '","xuanxiang":"' + jie.toString() + '","daan":"' + daan + '"},'); //存入文件。
            file.close();
            toastLog("已存入备用题库......." + daan);
            // exit();
            return;
        }
        if (images.detectsColor(img, "#ff1ac97c", x, y)) {
            //争上游,取色对比。
            var files = open(ertiku, "a");
            files.write('{"wenti":"' + tis + '","xuanxiang":"' + jie.toString() + '","daan":"' + daan + '"},'); //存入文件。
            files.close();
            toastLog("已存入备用题库......." + daan);
            // exit();
            return;
        }
    }
    toastLog("提示:截图存题,要在答案变绿时快速点击！");
    return;
}

try {
    qutu();
} catch (err) {
   toastLog("请在答题页面使用")
}