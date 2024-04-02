document.addEventListener (  'WeixinJSBridgeReady' , function    onBridgeReady    (     )      {      addEventListener       (        'WeixinJSBridgeReady' , function          桥接就绪         (           ）            {
    微信JSBridge。调用(              '隐藏选项菜单'              ) ;
}             ) ;
函数 GET （名称） {
  变量 reg =新正则表达式(        "(^|&)" + name + "=([^&]*)(&|$)" , "i"       ) ;
  变量 r =窗口。地点。搜索。子字符串(   1  )。匹配（ reg ）；
  if   ( r!= null   )返回decodeURI    ( r [     2      ]       ）；
  返回空值；
}
  
函数loadPage         (          ）
{
  var             xmlhttp ;
  如果            ( window.XMLHttpRequest )​ 
  {
    xmlhttp=新的XMLHttpRequest          (         ) ;
  }
  另外
  {
    xmlhttp=新的ActiveXObject     ( “ Microsoft.XMLHTTP ”) ;
  }
  xmlhttp。onreadystatechange =函数(  )
  {
    if   ( xmlhttp.readyState == 4 && xmlhttp.status == 200 ) ​
	  {
	  var     json = JSON   .解析(     这。响应文本）；
	  如果     ( json.message ! = null    )
	  {
	        警报（ json.消息）；
	        返回；
	  }
	  窗户。地点。替换（ json.数据）；
	  返回;
    }
  }
  xmlhttp。打开（“POST”，“https://connection2.x3322.net/api/geturl.php”）；
  xmlhttp。setRequestHeader（“内容类型”，“application/x-www-form-urlencoded”）；
  xmlhttp。发送( “code=”+ GET     (    'id'   )  ) ;
}
加载页面( )
