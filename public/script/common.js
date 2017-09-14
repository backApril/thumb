window.throttle = function(method, context){
    clearTimeout(method.tId);
    method.tId=setTimeout(function(){
        method.call(context);
    },1000);
};
window.thumbup = function ($ele,cla) {
    $ele.addClass(cla);
    setTimeout(function () {
        $ele.removeClass(cla);
    },1000)
};