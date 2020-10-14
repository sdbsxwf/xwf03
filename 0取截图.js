function qutu() {
    requestScreenCapture();
    var xx = className("android.widget.ListView").findOne();//答案选项控件。
    var tis = xx.parent().child(0).text(); //1.问题
   // log(tis);
    var shuliang = xx.childCount() //选项数量。
    var lp = ["A、", "B、", "C、", "D、"];
    var jie = [];  //2.选项存入列表。
    for (var i = 0; i < shuliang; i++) {
        var xxs = xx.child(i).child(0).child(1);//选项。
        jie.push(lp[i] + xxs.text());//存入列表。
        var img = captureScreen();//截图片。
    }
    for (var i = 0; i < shuliang; i++) {
        var xxs = xx.child(i).child(0).child(1);
        var daan = xxs.text(); //3.答案
        var x = 118;
        var y = xxs.bounds().centerY();
        if (images.detectsColor(img, "#ff3dbf75", x, y)) {
            //挑战答题取色对比。
            var file = open("./xwf03-main/tk存不会的.txt", "a");
            file.write('{"wenti":"' + tis + '","xuanxiang":"' + jie.toString() + '","daan":"' + daan + '"},');//存入文件。
            file.close();
            toastLog("已存入备用题库......." + daan);
            exit();
        }
        if (images.detectsColor(img, "#ff1ac97c", x, y)) {
            //争上游,取色对比。
            var file = open("./xwf03-main/tk存不会的.txt", "a");
            file.write('{"wenti":"' + tis + '","xuanxiang":"' + jie.toString() + '","daan":"' + daan + '"},');//存入文件。
            file.close();
            toastLog("已存入备用题库......." + daan);
            exit();
        }
    }
    toastLog("截图慢了,没找到！")
}
qutu();