var arr=[
    { songname:"Hello", url:"./Hello.mp3", image:"./song.jpg "},
    { songname:"Moonlight", url:"./Moonlight - Harnoor (DJJOhAL.Com).mp3", image:"./song2.jpg "},
    { songname:"Tasbih", url:"./Tasbih.mp3", image:"./song3.jpg "},
    { songname:"Teriyan Deedan", url:"./Teriyan_Deedan-Prabh_Gill_Ft_Parmish-(JattZone.com).mp3", image:"./song4.jpg "}

]
// console.log(arr)
// arr.forEach(function(obj){
//     console.log(obj.songname)
// })
var allsongs =  document.querySelector("#all-songs")
var audio = new Audio()
var poster = document.querySelector("#left")
var play = document.querySelector("#play")
var back = document.querySelector("#back")
var forward = document.querySelector("#forward")

var selectedsong = 0

function mainFunction(){

    var clutter=""
arr.forEach(function(elem,index){

          clutter +=`  <div class="song-card" id=${index}>
          <div class="part-1">
            <img src=${elem.image} alt="">
              <h4>${elem.songname}</h4>
          </div>
          <h6>3:33</h6>
      </div>`
})
 
 allsongs.innerHTML = clutter

 audio.src = arr[selectedsong].url
 poster.style.backgroundImage = `url(${arr[selectedsong].image})`
}
mainFunction()

 allsongs.addEventListener("click",function(dets){

       selectedsong = dets.target.id
       mainFunction()
       play.innerHTML = ` <i class="ri-pause-mini-fill"></i>`
       flag = 1

        audio.play()
 })
 var flag = 1
 play.addEventListener("click",function(){
    if(flag == 0)
    {
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
    mainFunction()
    audio.play()
    flag = 1

    }
    else{
            play.innerHTML = `<i class="ri-play-fill"></i>`
            mainFunction()
            audio.pause()
            flag = 0
            
    }
 })

 forward.addEventListener("click",function(){

    if(selectedsong < arr.length-1)
    {
    selectedsong++
    mainFunction()
    audio.play()
    play.innerHTML = ` <i class="ri-pause-mini-fill"></i>`
    back.style.opacity=10
    }
    else
    {
        forward.style.opacity = 0.4
        audio.pause()
        play.innerHTML = `<i class="ri-play-fill"></i>`
    }
 })

 back.addEventListener("click",function(){
    if(selectedsong >= 0)
    {
    selectedsong--
    mainFunction()
    audio.play()
    play.innerHTML = ` <i class="ri-pause-mini-fill"></i>`
    forward.style.opacity = 10
    }
    else
    {
        back.style.opacity = 0.4
        audio.pause()
        play.innerHTML = `<i class="ri-play-fill"></i>`
    }
 })

