//유튜브 재생목록시간
var select = document.querySelector('div.style-scope ytd-playlist-video-list-renderer')
var inner = select.querySelectorAll(':scope .style-scope ytd-thumbnail .style-scope ytd-thumbnail-overlay-time-status-renderer')

var day=0
var hour=0
var min=0
var sec=0

for(var i =0; i<inner.length; i++){
    var time = inner[i].innerText.split(":")
    min += parseInt(time[0])
    sec += parseInt(time[1])
}
p
min += parseInt(sec/60)
hour += parseInt(min/60)
day += parseInt(hour/24)

sec = sec%60
min = min%60
hour = hour%24

if(day == 0)
    console.log("총 재생기간은 " + hour + "시 " + min + "분 ", sec + "초입니다.")
else
    console.log("총 재생기간은 " + day + "일 " + hour + "시 " + min + "분 ", sec + "초입니다.")
