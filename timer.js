var seco=0
var minu=0
var hour=0

function start2(){
    int=setInterval(() => {
        seco++
        if(seco===60){
            seco=0
            minu++
        }
        if(minu===60){
            minu=0
            hour++
        }
        if(hour===24){
            stop2()
        }

        document.getElementById('timer2').innerHTML=`${hour.toString().padStart(2,"0")}:${minu.toString().padStart(2,"0")}:${seco.toString().padStart(2,"0")}`
    },1000)
}

function stop2(){
    clearInterval(int)
}

function reset2(){
    timer2.innerHTML="00:00:00"
    var tableBody = document.getElementById("tableBody");
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }

    stop2()
    seco=0
    minu=0
 
   hour=0
   i=0
  
}


var i=0
 function flag2(){
    if(tableBody.children.length<10){
        document.getElementById("tableHead").style.display = 'block'
        var tr = document.createElement('tr')
        var td2 = tr.appendChild(document.createElement('td'))
        var td1 = tr.appendChild(document.createElement('td'))
        var td = tr.appendChild(document.createElement('td'))
        i++
        td2.innerHTML=`${i}`
           td1.innerHTML=`  RECORDING ${i} `
        td.innerHTML = `${hour.toString().padStart(2,"0")}:${minu.toString().padStart(2,"0")}:${seco.toString().padStart(2,"0")}`}
        document.getElementById("tableBody").appendChild(tr)

        if(i===10){
           alert("This is your last recording.Reset to record again!!!")
        }
 }




