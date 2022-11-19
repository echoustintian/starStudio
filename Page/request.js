// 封装请求方法
var RequestFuction={
  get: function(url, fn) {
    // XMLHttpRequest实例用于请求 
    var xhr = new XMLHttpRequest();            
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
      // readyState：存有服务器响应的状态信息
      // 0: 请求未初始化（代理被创建，但尚未调用 open() 方法）
      // 1: 服务器连接已建立（open方法已经被调用）
      // 2: 请求已接收（send方法已经被调用，并且头部和状态已经可获得）
      // 3: 请求处理中（下载中，responseText 属性已经包含部分数据）
      // 4: 请求已完成，且响应已就绪（下载操作已完成）
      if (xhr.readyState == 4 && xhr.status == 200 || xhr.status == 304) { 
        // 从服务器获得数据 , 执行回调函数，并将回调的this指向返回的数据
        fn.call(this, xhr.responseText);
      }
    };
    xhr.send();
  },
  
  
  post: function (url, data, fn) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    // 添加http头，发送信息至服务器时内容编码类型
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");  
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
        fn.call(this, xhr.responseText);
      }
    };
    xhr.send(data);
  }
}