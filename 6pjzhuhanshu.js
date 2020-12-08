//爱强国v2.0(2020-10-21)
auto.waitFor(); //判断是否打开无障碍。
//悬浮窗界面。
var window = floaty.window(
    <vertical>
        <input id="wbstext" text="" hint="" textSize="12sp"   bg="#77dddddd" lines="2"/>
        <button id="exit" text="退出悬浮窗按键" w="90" h="40" bg="#77ffffff"  textSize="10sp" />                            
        <horizontal>
            <button id="qd_app"  text="app"  w="45" h="40" bg="#77ffffff" textSize="10sp"  />
            <button id="kzt"  text="²窗开"  w="45" h="40" bg="#77eeeeee" textSize="10sp" />            
        </horizontal>               
        <button id="zddt" text="自动答题"  w="90" h="40" bg="#77eeeeee" textSize="10sp"/>
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
//toastLog("---爱强国v2.3---\n启动中，请稍后……");

//0.0 悬浮窗的退出
window.exit.click(() => {
    toastLog(" 退出！");
    exit();
});
