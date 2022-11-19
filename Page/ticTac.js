// 井字棋JS代码
let list = document.getElementsByClassName("item");
let arr = [0,0,0,0,0,0,0,0,0];
// 共有8种获胜情况
const win =[
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], 
  [0, 4, 8],
  [6, 4, 2]
];
let count = 0;


// 判断是否有人获得胜利的方法
function isWin(){
  let judge = false;
  for(let i = 0;i < 8; i++){
    if (arr[win[i][0]] == arr[win[i][1]] && arr[win[i][0]] == arr[win[i][2]] && arr[win[i][0]] != 0){
      
      judge = true;
    }
    if (judge) {
      break;
    }
  }
  return judge;
};

// 给每个格子绑定事件
for(let i = 0; i < list.length; i++){
  list[i].addEventListener("click",()=>{
    // 判断该格子有没有被点击过
    if(arr[i] != 0){
      return null;
    }
    // 添加o和×
    if(count % 2 == 0){
      list[i].innerHTML = "o"
      arr[i] = 2
    }else{
      list[i].innerHTML = "×"
      arr[i] = 1
    }
    count++;
    if (isWin()){
      // dom.innerHTML 是异步添加数据，所以需给alert一定时间的延迟，以便添加完数据后再弹窗
      setTimeout(()=>{
        alert("有人赢了")
      },100)
    }
  },false)
}