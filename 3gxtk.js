//console.show();
//toastLog("检查是否最新版本,请等待一分钟……");

function dmgx() {
    var url = "https://github.com/sdbsxwf/xwf03/archive/main.zip";
    var r = http.get(url); //打开网址。
    log(r.statusCode); //测试是否200？
    var zipFile = r.body.bytes(); //读取二进制。
    var path = files.join(files.cwd(), "/test.zip"); //建路晋。
    files.createWithDirs(path); //没有就创建路晋。
  //  log("path=", path); // path= /storage/emulated/0/脚本/zip文件专用/test.zip
    files.writeBytes(path, zipFile); //写入文件。
    sleep(8000);

    //免费版解压。
    try {
        com.stardust.io.Zip.unzip(new java.io.File(path), new java.io.File(files.cwd()));
    } catch (err) {
      //  toastLog("解压中…")
        //por专业版解压。
        $zip.unzip(path, files.cwd());
    }

    var dir = files.cwd() + "/xwf03-main/";
    var jsFiles = files.listDir(dir); //查看文件夹内所有文件。
    log(jsFiles); //更新的内容。
    for (var i = 0; i < jsFiles.length; i++) {
        var mz = jsFiles[i];
        files.move(files.cwd() + "/xwf03-main/" + mz, files.cwd() + "/" + mz); //移动所有文件。
    }
}
dmgx();
sleep(1000);
engines.execScriptFile(files.cwd() + "/0ui.js");
//toastLog("已是最新版本!");