enum simple{
  atr1=1,
  atr2,
  atr3
}
document.getElementById("ans1")!.innerHTML=`${simple[1]}  ${simple[2]} ${simple[3]}`
enum str{
  val1="macbook",
  val2="play station",
  val3="xbox",
  val4="intel"
}
document.getElementById('ans4')!.innerHTML=`the value of string enum is ${str.val1}`

enum bool{
  f=0,
  t="yes"
}
document.getElementById("ans2")!.innerHTML=`value of bool enum is ${bool.f} and ${bool.t}`
enum cnt{
  a,
  b,
  c
}
function init(obj:{a:number,b:number,c:number}):number{
  return obj.a;
}
let i=init(cnt)
document.getElementById("ans3")!.innerHTML=`the value of const enum is ${i}`