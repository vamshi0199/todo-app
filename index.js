function create(){
  if (document.getElementById("innermain").contains(document.getElementById("empty"))){
  var first=document.getElementById("empty")
  first.remove()
  }
  let list=document.createElement("div")
  list.setAttribute("class","boxx")
  list.setAttribute("id",val)
  let tripp=document.createElement("p")
  tripp.setAttribute("class","trip")
  tripp.innerHTML=val
  let line=document.createElement("hr")
  let databo=document.createElement("div")
  databo.setAttribute("class","databox")
  databo.setAttribute("id",val+"in")
  let innerdatabo=document.createElement("div")
  innerdatabo.setAttribute("class","databoxin")
  innerdatabo.setAttribute("id",val+"inner")
  let icon = document.createElement("span")
  icon.setAttribute("class", val+"icco")
  icon.setAttribute("onclick","obtaindata(this.getAttribute('class'))")
  icon.innerHTML = '<i class="fas fa-plus-square fa-2x aria-hidden="true" "></i>'
  let icon2 = document.createElement("span")
  icon2.setAttribute("class", val+"iccodel")
  icon2.setAttribute("onclick","delvalue(this.getAttribute('class'))")
  icon2.innerHTML ='<i class="fas fa-trash-alt fa-2x aria-hidden="true" "></i>'
  databo.appendChild(innerdatabo)
  databo.appendChild(icon)
  databo.appendChild(icon2)
  list.appendChild(tripp)
  list.appendChild(line)
  list.appendChild(databo)
  document.getElementById("innermain").appendChild(list) 
} 
function obtainvalue(){
  var inputbx=document.createElement("div")
  inputbx.setAttribute("id","inputbox")
  var labe=document.createElement("label")
  labe.setAttribute("for","datatrip")
  labe.innerHTML="Enter task list";
  var inputfiel=document.createElement("input")
  inputfiel.setAttribute("name","datatrip")
  inputfiel.setAttribute("id","datatrip")
  inputfiel.setAttribute("type", "text")
  var butto=document.createElement("button")
  butto.setAttribute("id","adde")
  butto.setAttribute("type","submit")
  butto.innerHTML="add"  
  butto.setAttribute("onclick","dop()")
  var butto2 = document.createElement("button")
  butto2.setAttribute("id", "del")
  butto2.setAttribute("type", "submit")
  butto2.innerHTML = "close"
  butto2.setAttribute("onclick", "drop()")
  inputbx.appendChild(labe)
  inputbx.appendChild(inputfiel)
  inputbx.appendChild(butto)
  inputbx.appendChild(butto2)
  document.getElementById("main1").appendChild(inputbx)
  var master=document.getElementById("main")
  master.style.filter="blur(7px)"
}
let val;
function dop() {
  var a = document.getElementById("datatrip")
  val=a.value
  var master=document.getElementById("main")
  master.style.filter="none"
  var del=document.getElementById("inputbox")
  del.remove()
  create() 
}
function drop(){
  var master = document.getElementById("main")
  master.style.filter = "none"
  var del = document.getElementById("inputbox")
  del.remove()
}
let task;
function againdop() {
  var a = document.getElementById("datatrip")
  task = a.value
  var master = document.getElementById("main")
  master.style.filter = "none"
  var del = document.getElementById("inputbox")
  del.remove()
  hit()
}
function hit(){
  var taskbo=document.createElement("p")
  taskbo.setAttribute("class", "taskdata")
  taskbo.setAttribute("id",val+task+"task")
  var dat=document.createElement("span")
  dat.setAttribute("class","markdata")
  dat.setAttribute('id',val+task+"markdata")
  dat.innerText=task
  var mar=document.createElement("span")
  mar.setAttribute("class","mark")
  mar.setAttribute("id",val+task+"mark")
  mar.setAttribute("onclick","und(this.getAttribute('id'))")
  mar.innerText="mark"
  var pe = document.getElementsByClassName(addres)
  var i = pe[0].previousElementSibling
  var re=i.id
  taskbo.appendChild(dat)
  taskbo.appendChild(mar)
  document.getElementById(re).appendChild(taskbo)
}
 function und(el){
  var i=document.getElementById(el)
  var t=i.previousElementSibling
   t.style.textDecorationLine = "line-through";
   i.remove()
}
var addres
function obtaindata(el){
  var inputbx = document.createElement("div")
  inputbx.setAttribute("id", "inputbox")
  var labe = document.createElement("label")
  labe.setAttribute("for", "datatrip")
  labe.innerHTML = "Enter task list";
  var inputfiel = document.createElement("input")
  inputfiel.setAttribute("name", "datatrip")
  inputfiel.setAttribute("id", "datatrip")
  inputfiel.setAttribute("type", "text")
  var butto = document.createElement("button")
  butto.setAttribute("id", "adde")
  butto.setAttribute("type", "submit")
  butto.innerHTML = "add"
  butto.setAttribute("onclick", "againdop()")
  var butto2 = document.createElement("button")
  butto2.setAttribute("id", "del")
  butto2.setAttribute("type", "submit")
  butto2.innerHTML = "close"
  butto2.setAttribute("onclick", "drop()")
  addres=el
  inputbx.appendChild(labe)
  inputbx.appendChild(inputfiel)
  inputbx.appendChild(butto)
  inputbx.appendChild(butto2)
  document.getElementById("main1").appendChild(inputbx)
  var master = document.getElementById("main")
  master.style.filter = "blur(7px)" 
}
function delvalue(el){
  var i=document.getElementsByClassName(el)
   var a=i[0].previousElementSibling
  var b=a.previousElementSibling
  b=b.id
  let re = document.getElementById(b)
  var master=re.childElementCount
  if(master!=0){
      var select=document.getElementById(b)
      select.removeChild(select.lastChild)
  }
  else{
      var main=document.getElementById(b)
        var mmain=main.parentNode.parentNode
         var parentbox=mmain.id
        mainbox=document.getElementById(parentbox)
        var isemp=mainbox.parentNode
        mainbox.remove()
        var count=isemp.childElementCount
        if(count==0)
        {
        var empty=document.createElement("span")
        empty.setAttribute("id","empty")
        empty.innerText="task list is empty"
        isemp.appendChild(empty)
        }
  }
}