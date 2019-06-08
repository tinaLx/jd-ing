function $(id){
    return document.getElementById(id);
}
function js_hide(id){
    id.style.display = "none";
}
function js_show(id){
    id.style.display = "block";
}

// $("jd_arrleft").onclick || $("jd_arrright").onclick = function(){
//     // alert(11);
//     $("jd_arrleft").style.backgroundColor = "rgba(0,0,0,.5)";   
// }

function bgc_change(id,value){
    id.style.backgroundColor = "rgba(0,0,0,"+value+")";  
}

function scroll(){
    // ie9+和其他浏览器
    if(window.pageYOffset != null){
        return  {
            left:window.pageXOffset,
            top:window.pageYOffset
        }
    }
    // 申明头文件
    else if(document.compatMode = "CSS1Compat"){
        return {
            left:document.documentElement.scrollLeft,
            top:document.documentElement.scrollTop
        }
    }
    // 怪异模式
    else{
        return {
            left:document.body.scrollLeft,
            top:document.body.scrollTop
        }
    }
}

function animate(obj,json,fn){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var flag = true;
        for (var attr in json){
            var current = 0;
            if(attr == "opacity"){
                current = Math.round(getStyle(obj,attr))*100 || 0;
            }
            else{
                current = parseInt(getStyle(obj,attr));
            }
            var step = (json[attr] - current)/10;
            step = step >0 ? Math.ceil(step) : Math.floor(step);
            if(attr == "opacity"){
                if("opacity" in obj.style){
                    obj.style.opacity = (current + step)/100;
                }
                else{
                    obj.style.filter = "alpha(opacity = "+(current+step)+")";
                }
            }
            else if(attr == "zIndex"){
                obj.style.zIndex = json[attr];
            }
            else{
                obj.style[attr] = current + step + "px";
            }
            
            if(current != json[attr]){
                flag = false;
            }
        }
        if(flag){
            clearInterval(obj.timer);
            if(fn){
                fn();
            }
        }
    },30);
}
function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }
    else{
        return window.getComputedStyle(obj,null)[attr];
    }
}