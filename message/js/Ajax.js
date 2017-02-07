 function parameterDeal(_parameter){
    var _sender="";
    if(_parameter instanceof Object){
        for(var k in _parameter){
            _sender+=k+"="+_parameter[k]+"&";
        }
        return _sender.replace(/\+\/+&$/g,"");
    }else{
        return _parameter;
    }
}

function createHttpRequest(){
	try{
		return new window.XMLHttpRequest();
	}catch(e){
		try{
			return new ActiveXObject("MSXML2.XMLHTTP.6.0");
		}catch(e){
			try{
				return new ActiveXObject("MSXML2.XMLHTTP.3.0");
			}catch(e){
				try{
					return new ActiveXObject("MSXML2.XMLHTTP");
				}catch(e){
					try{
						return new ActiveXObject("Microsoft.XMLHTTP");
					}catch(e){
						throw new Error("该浏览器版本太低,已经被大部分市场淘汰,请升级!!!");
						return;
					}
				}
			}
		}
	}
}
/**
 *_method:打开服务器交互的方式
 *_url:boolean类型
 *_fn:回调函数
*/
function ajax(_method,_url,_ansy,_parameter,_fn){
	var _xhr=createHttpRequest();
	if(_xhr){
		_xhr.onreadystatechange=function(){
			if(_xhr.readyState==4){
				_fn(_xhr.responseText);
			}
		}
		_xhr.open(_method,_url,_ansy);
		//URL传值，传get
		_xhr.setRequestHeader("content-type","application/x-www-form-urlencoded;charset=\"utf-8\"");
		_xhr.send(parameterDeal(_parameter));
	}else{
		alert("此浏览器不兼容请升级你的浏览器！！");
	}
}