(()=>{"use strict";const e=[{name:"On & On",artist:"Cartoon x HAVSUN x WAYOUT, ft. Daniel Levi",imageSrc:"/dist/song-images/on&on.jpg",songSrc:"/dist/sample-songs/Cartoon - On & On (ft. Daniel Levi)(Cartoon x HAVSUN x WAYOUT Remix) [NCS Release].mp3",duration:"03:58"},{name:"Mortals",artist:"Warriyo, feat. Laura Brehm",imageSrc:"/dist/song-images/warriyo.jpg",songSrc:"/dist/sample-songs/Warriyo - Mortals (feat. Laura Brehm) [NCS Release].mp3",duration:"03:48"},{name:"Cradles",artist:"Sub Urban",imageSrc:"/dist/song-images/cradles.jpg",songSrc:"/dist/sample-songs/Sub Urban - Cradles [NCS Release].mp3",duration:"03:29"},{name:"Adventures",artist:"William Ekh, feat. Alexa Lusader",imageSrc:"/dist/song-images/adventures.jpg",songSrc:"/dist/sample-songs/William Ekh - Adventures (feat. Alexa Lusader) [NCS Release].mp3",duration:"03:11"},{name:"Set Me Free",artist:"Simbai & Frizzy The Streetz",imageSrc:"/dist/song-images/setmefree.jpg",songSrc:"/dist/sample-songs/Simbai & Frizzy The Streetz - Set Me Free [NCS Release].mp3",duration:"02:49"},{name:"Heroes Tonight",artist:"Janji, ft.Johnning",imageSrc:"/dist/song-images/janji.jpg",songSrc:"/dist/sample-songs/Janji - Heroes Tonight (feat. Johnning) [NCS Release].mp3",duration:"03:28"}],t=(e,t,n)=>{const s=document.createElement("img");s.classList.add("card-img"),s.src=e;const a=document.createElement("div");a.classList.add("music-name"),a.textContent=t;const c=document.createElement("div");c.classList.add("artist-name"),c.textContent=n;const i=document.createElement("div");return i.classList.add("cards"),i.appendChild(s),i.appendChild(a),i.appendChild(c),i},n=t=>{const n=document.querySelector(".main");"songData"==n.lastChild.className&&n.removeChild(n.lastChild),n.appendChild((t=>{const n=document.createElement("div");n.classList="songData";const s=document.createElement("img");s.classList="mainImg",s.setAttribute("src",e[t].imageSrc);const a=document.createElement("div");a.classList="songName",a.textContent=e[t].name;const c=document.createElement("div");return c.classList="artist",c.textContent=e[t].artist,n.appendChild(s),n.appendChild(a),n.appendChild(c),n})(t))},s=t=>{let s=document.querySelector(".audioElement"),a=document.querySelector(".playBtn"),c=document.querySelector(".playBtnImg");const i=document.querySelector(".volume");s.setAttribute("src",e[t].songSrc);let r=s.play();void 0!==r&&r.then((()=>{s.play()})).catch((e=>{})),a.addEventListener("click",(()=>{s.paused?(s.play(),c.src="/dist/icons-and-images/pause-svgrepo-com.svg"):(s.pause(),c.src="/dist/icons-and-images/play-svgrepo-com.svg")}));const d=document.querySelector(".musicBar");s.addEventListener("timeupdate",(()=>{let e=s.currentTime/s.duration*100;d.value=e})),d.addEventListener("click",(e=>{s.currentTime=e.offsetX/e.srcElement.clientWidth*s.duration}));const o=document.querySelector(".prevBtn");document.querySelector(".nextBtn").addEventListener("click",(()=>{t==e.length-1?t=0:t++,n(t),s.setAttribute("src",e[t].songSrc);let a=s.play();void 0!==a&&a.then((()=>{s.play()})).catch((e=>{}))})),o.addEventListener("click",(()=>{0==t?t=e.length-1:t--,n(t),s.setAttribute("src",e[t].songSrc);let a=s.play();void 0!==a&&a.then((()=>{s.play()})).catch((e=>{}))})),i.addEventListener("click",(e=>{s.volume=e.offsetX/e.srcElement.clientWidth}))},a=()=>{const c=document.querySelector(".main");for(;c.hasChildNodes();)c.removeChild(c.firstChild);const i=(()=>{const e=document.createElement("div");return e.classList="songCards",e})();let r=3;for(;r<6;){const n=e[r].imageSrc,s=e[r].name,a=e[r].artist,c=t(n,s,a);i.appendChild(c),r++}const d=(e=>{const t=document.createElement("img");return t.setAttribute("class","content-img"),t.src="",t})(),o=(()=>{const e=document.createElement("div");return e.classList="lyrics",e})(),l=(()=>{const e=document.createElement("div");return e.classList="mediaPlayer",e.appendChild((()=>{let e=document.createElement("audio");return e.classList="audioElement",e.src="",e})()),e.appendChild((()=>{const e=document.createElement("div");e.classList="songDetail";const t=document.createElement("div"),n=document.createElement("div"),s=document.createElement("img"),a=document.createElement("div");return t.classList="song-name",n.classList="artist-name",s.classList="music-gif",a.classList="duration",s.src="",e.appendChild(t),e.appendChild(n),e.appendChild(s),e.appendChild(a),e})()),e.appendChild((()=>{const e=document.createElement("input");return e.setAttribute("type","range"),e.classList="musicBar",e.value=0,e})()),e.appendChild((()=>{const e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("div"),s=document.createElement("div"),a=document.createElement("input");a.value=100;const c=document.createElement("img"),i=document.createElement("img"),r=document.createElement("img");return c.src="/dist/icons-and-images/previous-svgrepo-com.svg",i.src="/dist/icons-and-images/next-svgrepo-com.svg",r.src="/dist/icons-and-images/pause-svgrepo-com.svg",r.classList.add("playBtnImg","control-img"),i.classList.add("nextBtnImg","control-img"),c.classList.add("prevBtnImg","control-img"),t.classList.add("prevBtn","controlBtn"),s.classList.add("playBtn","controlBtn"),n.classList.add("nextBtn","controlBtn"),t.appendChild(c),s.appendChild(r),n.appendChild(i),a.setAttribute("type","range"),a.classList="volume",e.classList="controls",e.appendChild(t),e.appendChild(s),e.appendChild(n),e.appendChild(a),e})()),e})();c.appendChild(d),c.appendChild(o),c.appendChild(i),c.appendChild(l),document.querySelector(".songCards").addEventListener("click",(t=>{if("cards"==t.target.parentElement.className){const c=t.target.parentElement.children[1].textContent;let i;for(let t=0;t<e.length;t++)e[t].name==c&&(i=t);a(),n(i),s(i)}}))},c=t=>{if("cards"==t.target.parentElement.className){const c=t.target.parentElement.children[1].textContent;let i;for(let t=0;t<e.length;t++)e[t].name==c&&(i=t);a(),n(i),s(i)}},i=()=>{const n=document.querySelector(".main");for(;n.hasChildNodes();)n.removeChild(n.firstChild);const s=(()=>{const e=document.createElement("div");return e.classList="music-cards",e})();let a=0;for(;a<3;){const n=e[a].imageSrc,c=e[a].name,i=e[a].artist,r=t(n,c,i);s.appendChild(r),a++}const i=(()=>{const e=document.createElement("div");return e.classList="list-head",e.textContent="Play music",e})(),r=(()=>{const e=document.createElement("div");return e.classList="list-of-songs",e})();r.appendChild(i),r.appendChild(s);const d=(e=>{const t=document.createElement("img");return t.setAttribute("class","content-img"),t.src="",t})(),o=(()=>{const e=document.createElement("div");return e.setAttribute("class","content-data"),e.textContent="Get ready to enjoy the experience!",e})(),l=(()=>{const e=document.createElement("input");return e.setAttribute("type","search"),e.classList="search-bar",e})();n.appendChild(d),n.appendChild(o),n.appendChild(l),n.appendChild(r),document.querySelector(".music-cards").addEventListener("click",c)};(()=>{i();const e=document.querySelector(".home-btn"),t=document.querySelector(".music-list-btn");e.addEventListener("click",i),t.addEventListener("click",a)})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YyxPQUdwQyxPQUZBNEUsRUFBSzNFLFVBQVksZ0JBRVYyRSxHQXFEV0MsR0FDbEJGLEVBQVVuRSxZQUFZZ0UsR0FDdEJHLEVBQVVuRSxZQUFZb0MsR0FFdEIsTUFBTUcsRUE3RWMsQ0FBQ2xELElBQ3JCLE1BQU1tRCxFQUFZakQsU0FBU0MsY0FBYyxPQUl6QyxPQUhBZ0QsRUFBVWhDLGFBQWEsUUFBUyxlQUNoQ2dDLEVBQVU3QyxJQW1ETyxHQWpEVjZDLEdBd0VTLEdBQ1Y4QixFQXRFVyxNQUNqQixNQUFNL0QsRUFBT2hCLFNBQVNDLGNBQWMsT0FJcEMsT0FIQWUsRUFBS0MsYUFBYSxRQUFTLGdCQUMzQkQsRUFBS1YsWUFBYyxxQ0FFWlUsR0FpRVNnRSxHQUVWQyxFQTFDVyxNQUNqQixNQUFNQyxFQUFNbEYsU0FBU0MsY0FBYyxTQUluQyxPQUhBaUYsRUFBSWpFLGFBQWEsT0FBUSxVQUN6QmlFLEVBQUloRixVQUFZLGFBRVRnRixHQXFDV0MsR0FFbEJ4RSxFQUFLRixZQUFZdUMsR0FDakJyQyxFQUFLRixZQUFZc0UsR0FDakJwRSxFQUFLRixZQUFZd0UsR0FDakJ0RSxFQUFLRixZQUFZbUUsR0RoRUc1RSxTQUFTWSxjQUFjLGdCQUUvQmtCLGlCQUFpQixRQUFTMEMsSUV4QnRCLE1BQ2hCLElBRUEsTUFBTVksRUFBVXBGLFNBQVNZLGNBQWMsYUFDakMwQyxFQUFjdEQsU0FBU1ksY0FBYyxtQkFHM0N3RSxFQUFRdEQsaUJBQWlCLFFBQVMsR0FDbEN3QixFQUFZeEIsaUJBQWlCLFFBQVMsSUNUMUMsSSIsInNvdXJjZXMiOlsid2VicGFjazovL211c2ljLXBsYXllci8uL3NyYy9tb2R1bGVzL1NvbmdzTGlzdC9zb25nc0RhdGEuanMiLCJ3ZWJwYWNrOi8vbXVzaWMtcGxheWVyLy4vc3JjL21vZHVsZXMvRnVuY3Rpb25hbGl0aWVzL21ha2VNdXNpY0NhcmRzLmpzIiwid2VicGFjazovL211c2ljLXBsYXllci8uL3NyYy9tb2R1bGVzL0Z1bmN0aW9uYWxpdGllcy9idWlsZEN1cnJlbnRNdXNpY0NhcmQuanMiLCJ3ZWJwYWNrOi8vbXVzaWMtcGxheWVyLy4vc3JjL21vZHVsZXMvRnVuY3Rpb25hbGl0aWVzL3BsYXlNdXNpYy5qcyIsIndlYnBhY2s6Ly9tdXNpYy1wbGF5ZXIvLi9zcmMvbW9kdWxlcy9tdXNpY1BhZ2UuanMiLCJ3ZWJwYWNrOi8vbXVzaWMtcGxheWVyLy4vc3JjL21vZHVsZXMvRnVuY3Rpb25hbGl0aWVzL2J1aWxkTXVzaWNQbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vbXVzaWMtcGxheWVyLy4vc3JjL21vZHVsZXMvVXNlciBJbnRlcmZhY2UvbXVzaWNQYWdlVUkuanMiLCJ3ZWJwYWNrOi8vbXVzaWMtcGxheWVyLy4vc3JjL21vZHVsZXMvVXNlciBJbnRlcmZhY2UvaG9tZVVJLmpzIiwid2VicGFjazovL211c2ljLXBsYXllci8uL3NyYy9tb2R1bGVzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vbXVzaWMtcGxheWVyLy4vc3JjL21vZHVsZXMvd2VicGFnZS5qcyIsIndlYnBhY2s6Ly9tdXNpYy1wbGF5ZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc29uZ0xpc3QgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiBcIk9uICYgT25cIixcbiAgICAgICAgYXJ0aXN0OiBcIkNhcnRvb24geCBIQVZTVU4geCBXQVlPVVQsIGZ0LiBEYW5pZWwgTGV2aVwiLFxuICAgICAgICBpbWFnZVNyYzogXCIvZGlzdC9zb25nLWltYWdlcy9vbiZvbi5qcGdcIixcbiAgICAgICAgc29uZ1NyYzpcbiAgICAgICAgICAgIFwiL2Rpc3Qvc2FtcGxlLXNvbmdzL0NhcnRvb24gLSBPbiAmIE9uIChmdC4gRGFuaWVsIExldmkpKENhcnRvb24geCBIQVZTVU4geCBXQVlPVVQgUmVtaXgpIFtOQ1MgUmVsZWFzZV0ubXAzXCIsXG4gICAgICAgIGR1cmF0aW9uOiBcIjAzOjU4XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiTW9ydGFsc1wiLFxuICAgICAgICBhcnRpc3Q6IFwiV2Fycml5bywgZmVhdC4gTGF1cmEgQnJlaG1cIixcbiAgICAgICAgaW1hZ2VTcmM6IFwiL2Rpc3Qvc29uZy1pbWFnZXMvd2Fycml5by5qcGdcIixcbiAgICAgICAgc29uZ1NyYzpcbiAgICAgICAgICAgIFwiL2Rpc3Qvc2FtcGxlLXNvbmdzL1dhcnJpeW8gLSBNb3J0YWxzIChmZWF0LiBMYXVyYSBCcmVobSkgW05DUyBSZWxlYXNlXS5tcDNcIixcbiAgICAgICAgZHVyYXRpb246IFwiMDM6NDhcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJDcmFkbGVzXCIsXG4gICAgICAgIGFydGlzdDogXCJTdWIgVXJiYW5cIixcbiAgICAgICAgaW1hZ2VTcmM6IFwiL2Rpc3Qvc29uZy1pbWFnZXMvY3JhZGxlcy5qcGdcIixcbiAgICAgICAgc29uZ1NyYzogXCIvZGlzdC9zYW1wbGUtc29uZ3MvU3ViIFVyYmFuIC0gQ3JhZGxlcyBbTkNTIFJlbGVhc2VdLm1wM1wiLFxuICAgICAgICBkdXJhdGlvbjogXCIwMzoyOVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIkFkdmVudHVyZXNcIixcbiAgICAgICAgYXJ0aXN0OiBcIldpbGxpYW0gRWtoLCBmZWF0LiBBbGV4YSBMdXNhZGVyXCIsXG4gICAgICAgIGltYWdlU3JjOiBcIi9kaXN0L3NvbmctaW1hZ2VzL2FkdmVudHVyZXMuanBnXCIsXG4gICAgICAgIHNvbmdTcmM6XG4gICAgICAgICAgICBcIi9kaXN0L3NhbXBsZS1zb25ncy9XaWxsaWFtIEVraCAtIEFkdmVudHVyZXMgKGZlYXQuIEFsZXhhIEx1c2FkZXIpIFtOQ1MgUmVsZWFzZV0ubXAzXCIsXG4gICAgICAgIGR1cmF0aW9uOiBcIjAzOjExXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiU2V0IE1lIEZyZWVcIixcbiAgICAgICAgYXJ0aXN0OiBcIlNpbWJhaSAmIEZyaXp6eSBUaGUgU3RyZWV0elwiLFxuICAgICAgICBpbWFnZVNyYzogXCIvZGlzdC9zb25nLWltYWdlcy9zZXRtZWZyZWUuanBnXCIsXG4gICAgICAgIHNvbmdTcmM6XG4gICAgICAgICAgICBcIi9kaXN0L3NhbXBsZS1zb25ncy9TaW1iYWkgJiBGcml6enkgVGhlIFN0cmVldHogLSBTZXQgTWUgRnJlZSBbTkNTIFJlbGVhc2VdLm1wM1wiLFxuICAgICAgICBkdXJhdGlvbjogXCIwMjo0OVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIkhlcm9lcyBUb25pZ2h0XCIsXG4gICAgICAgIGFydGlzdDogXCJKYW5qaSwgZnQuSm9obm5pbmdcIixcbiAgICAgICAgaW1hZ2VTcmM6IFwiL2Rpc3Qvc29uZy1pbWFnZXMvamFuamkuanBnXCIsXG4gICAgICAgIHNvbmdTcmM6XG4gICAgICAgICAgICBcIi9kaXN0L3NhbXBsZS1zb25ncy9KYW5qaSAtIEhlcm9lcyBUb25pZ2h0IChmZWF0LiBKb2hubmluZykgW05DUyBSZWxlYXNlXS5tcDNcIixcbiAgICAgICAgZHVyYXRpb246IFwiMDM6MjhcIixcbiAgICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgc29uZ0xpc3Q7XG4iLCJjb25zdCBtYWtlTXVzaWNDYXJkcyA9IChzb3VyY2UsIG5hbWUsIGFydGlzdCkgPT4ge1xuICAgIGNvbnN0IHNvbmdJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHNvbmdJbWcuY2xhc3NMaXN0LmFkZChcImNhcmQtaW1nXCIpO1xuICAgIHNvbmdJbWcuc3JjID0gc291cmNlO1xuXG4gICAgY29uc3Qgc29uZ05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNvbmdOYW1lLmNsYXNzTGlzdC5hZGQoXCJtdXNpYy1uYW1lXCIpO1xuICAgIHNvbmdOYW1lLnRleHRDb250ZW50ID0gbmFtZTtcblxuICAgIGNvbnN0IGFydGlzdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFydGlzdE5hbWUuY2xhc3NMaXN0LmFkZChcImFydGlzdC1uYW1lXCIpO1xuICAgIGFydGlzdE5hbWUudGV4dENvbnRlbnQgPSBhcnRpc3Q7XG5cbiAgICBjb25zdCBtYWluQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbkNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRzXCIpO1xuXG4gICAgbWFpbkNhcmQuYXBwZW5kQ2hpbGQoc29uZ0ltZyk7XG4gICAgbWFpbkNhcmQuYXBwZW5kQ2hpbGQoc29uZ05hbWUpO1xuICAgIG1haW5DYXJkLmFwcGVuZENoaWxkKGFydGlzdE5hbWUpO1xuXG4gICAgcmV0dXJuIG1haW5DYXJkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFrZU11c2ljQ2FyZHM7XG4iLCJpbXBvcnQgc29uZ0xpc3QgZnJvbSBcIi4uL1NvbmdzTGlzdC9zb25nc0RhdGFcIjtcblxuY29uc3QgYnVpbGRTb25nSW5mbyA9IChpbmRleCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRhdGEuY2xhc3NMaXN0ID0gXCJzb25nRGF0YVwiO1xuXG4gICAgY29uc3Qgc29uZ0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgc29uZ0ltZy5jbGFzc0xpc3QgPSBcIm1haW5JbWdcIjtcbiAgICBzb25nSW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBzb25nTGlzdFtpbmRleF0uaW1hZ2VTcmMpO1xuXG4gICAgY29uc3Qgc29uZ05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNvbmdOYW1lLmNsYXNzTGlzdCA9IFwic29uZ05hbWVcIjtcbiAgICBzb25nTmFtZS50ZXh0Q29udGVudCA9IHNvbmdMaXN0W2luZGV4XS5uYW1lO1xuXG4gICAgY29uc3Qgc29uZ1dyaXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc29uZ1dyaXRlci5jbGFzc0xpc3QgPSBcImFydGlzdFwiO1xuICAgIHNvbmdXcml0ZXIudGV4dENvbnRlbnQgPSBzb25nTGlzdFtpbmRleF0uYXJ0aXN0O1xuXG4gICAgZGF0YS5hcHBlbmRDaGlsZChzb25nSW1nKTtcbiAgICBkYXRhLmFwcGVuZENoaWxkKHNvbmdOYW1lKTtcbiAgICBkYXRhLmFwcGVuZENoaWxkKHNvbmdXcml0ZXIpO1xuXG4gICAgcmV0dXJuIGRhdGE7XG59O1xuXG5jb25zdCBnZXRTb25nRGV0YWlscyA9IChpbmRleCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG5cbiAgICBpZiAobWFpbi5sYXN0Q2hpbGQuY2xhc3NOYW1lID09IFwic29uZ0RhdGFcIikge1xuICAgICAgICBtYWluLnJlbW92ZUNoaWxkKG1haW4ubGFzdENoaWxkKTtcbiAgICB9XG4gICAgbWFpbi5hcHBlbmRDaGlsZChidWlsZFNvbmdJbmZvKGluZGV4KSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRTb25nRGV0YWlscztcbiIsImltcG9ydCBzb25nTGlzdCBmcm9tIFwiLi4vU29uZ3NMaXN0L3NvbmdzRGF0YVwiO1xuaW1wb3J0IGdldFNvbmdEZXRhaWxzIGZyb20gXCIuL2J1aWxkQ3VycmVudE11c2ljQ2FyZFwiO1xuXG5jb25zdCBhZGRDb250cm9sc0Z1bmN0aW9uYWxpdHkgPSAoaW5kZXgpID0+IHtcbiAgICBsZXQgY3VycmVudFNvbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF1ZGlvRWxlbWVudFwiKTtcbiAgICBsZXQgcGxheUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheUJ0blwiKTtcbiAgICBsZXQgcGxheUJ0bkltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheUJ0bkltZ1wiKTtcbiAgICBjb25zdCB2b2wgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZvbHVtZVwiKTtcblxuICAgIGN1cnJlbnRTb25nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBzb25nTGlzdFtpbmRleF0uc29uZ1NyYyk7XG5cbiAgICBsZXQgcGxheVByb21pc2UgPSBjdXJyZW50U29uZy5wbGF5KCk7XG5cbiAgICBpZiAocGxheVByb21pc2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwbGF5UHJvbWlzZVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTb25nLnBsYXkoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7fSk7XG4gICAgfVxuXG4gICAgcGxheUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoY3VycmVudFNvbmcucGF1c2VkKSB7XG4gICAgICAgICAgICBjdXJyZW50U29uZy5wbGF5KCk7XG4gICAgICAgICAgICBwbGF5QnRuSW1nLnNyYyA9IFwiL2Rpc3QvaWNvbnMtYW5kLWltYWdlcy9wYXVzZS1zdmdyZXBvLWNvbS5zdmdcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGN1cnJlbnRTb25nLnBhdXNlKCk7XG4gICAgICAgICAgICBwbGF5QnRuSW1nLnNyYyA9IFwiL2Rpc3QvaWNvbnMtYW5kLWltYWdlcy9wbGF5LXN2Z3JlcG8tY29tLnN2Z1wiO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBtdXNpY0JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXVzaWNCYXJcIik7XG5cbiAgICBjdXJyZW50U29uZy5hZGRFdmVudExpc3RlbmVyKFwidGltZXVwZGF0ZVwiLCAoKSA9PiB7XG4gICAgICAgIC8vZ2V0IHZhbHVlIGluIHBlcmNlbnRcbiAgICAgICAgbGV0IHNvbmdQcm9ncmVzcyA9XG4gICAgICAgICAgICAoY3VycmVudFNvbmcuY3VycmVudFRpbWUgLyBjdXJyZW50U29uZy5kdXJhdGlvbikgKiAxMDA7XG5cbiAgICAgICAgbXVzaWNCYXIudmFsdWUgPSBzb25nUHJvZ3Jlc3M7XG4gICAgfSk7XG5cbiAgICBtdXNpY0Jhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgY3VycmVudFNvbmcuY3VycmVudFRpbWUgPVxuICAgICAgICAgICAgKGUub2Zmc2V0WCAvIGUuc3JjRWxlbWVudC5jbGllbnRXaWR0aCkgKiBjdXJyZW50U29uZy5kdXJhdGlvbjtcbiAgICB9KTtcblxuICAgIGNvbnN0IHByZXZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZXZCdG5cIik7XG4gICAgY29uc3QgbmV4dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV4dEJ0blwiKTtcblxuICAgIG5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKGluZGV4ID09IHNvbmdMaXN0Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0U29uZ0RldGFpbHMoaW5kZXgpO1xuICAgICAgICBjdXJyZW50U29uZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgc29uZ0xpc3RbaW5kZXhdLnNvbmdTcmMpO1xuXG4gICAgICAgIGxldCBwbGF5UHJvbWlzZSA9IGN1cnJlbnRTb25nLnBsYXkoKTtcblxuICAgICAgICBpZiAocGxheVByb21pc2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcGxheVByb21pc2VcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTb25nLnBsYXkoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHt9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcHJldkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoaW5kZXggPT0gMCkge1xuICAgICAgICAgICAgaW5kZXggPSBzb25nTGlzdC5sZW5ndGggLSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5kZXgtLTtcbiAgICAgICAgfVxuICAgICAgICBnZXRTb25nRGV0YWlscyhpbmRleCk7XG4gICAgICAgIGN1cnJlbnRTb25nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBzb25nTGlzdFtpbmRleF0uc29uZ1NyYyk7XG5cbiAgICAgICAgbGV0IHBsYXlQcm9taXNlID0gY3VycmVudFNvbmcucGxheSgpO1xuXG4gICAgICAgIGlmIChwbGF5UHJvbWlzZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBwbGF5UHJvbWlzZVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFNvbmcucGxheSgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge30pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2b2wuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGN1cnJlbnRTb25nLnZvbHVtZSA9IGUub2Zmc2V0WCAvIGUuc3JjRWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFkZENvbnRyb2xzRnVuY3Rpb25hbGl0eTtcbiIsImltcG9ydCBzb25nTGlzdCBmcm9tIFwiLi9Tb25nc0xpc3Qvc29uZ3NEYXRhXCI7XG5pbXBvcnQgbWFrZU11c2ljQ2FyZHMgZnJvbSBcIi4vRnVuY3Rpb25hbGl0aWVzL21ha2VNdXNpY0NhcmRzXCI7XG5pbXBvcnQgYnVpbGRTb25nSW5mbyBmcm9tIFwiLi9GdW5jdGlvbmFsaXRpZXMvYnVpbGRDdXJyZW50TXVzaWNDYXJkLmpzXCI7XG5pbXBvcnQgYnVpbGRQbGF5ZXIgZnJvbSBcIi4vRnVuY3Rpb25hbGl0aWVzL2J1aWxkTXVzaWNQbGF5ZXJcIjtcbmltcG9ydCBhZGRGdW5jdGlvbmFsaXR5VG9DYXJkc09uTXVzaWNQYWdlIGZyb20gXCIuL1VzZXIgSW50ZXJmYWNlL211c2ljUGFnZVVJXCI7XG5cbmNvbnN0IGdldEx5cmljcyA9ICgpID0+IHtcbiAgICBjb25zdCBseXJpY3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGx5cmljcy5jbGFzc0xpc3QgPSBcImx5cmljc1wiO1xuXG4gICAgcmV0dXJuIGx5cmljcztcbn07XG5cbmNvbnN0IGFkZENhcmRzID0gKCkgPT4ge1xuICAgIGNvbnN0IGNhcmRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkc0NvbnRhaW5lci5jbGFzc0xpc3QgPSBcInNvbmdDYXJkc1wiO1xuXG4gICAgcmV0dXJuIGNhcmRzQ29udGFpbmVyO1xufTtcblxuY29uc3QgYnVpbGRDb250ZW50SW1nID0gKHNvdXJjZSkgPT4ge1xuICAgIGNvbnN0IGhvbWVCZ0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaG9tZUJnSW1nLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29udGVudC1pbWdcIik7XG4gICAgaG9tZUJnSW1nLnNyYyA9IHNvdXJjZTtcblxuICAgIHJldHVybiBob21lQmdJbWc7XG59O1xuXG5jb25zdCBsb2FkTXVzaWNQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG5cbiAgICB3aGlsZSAobWFpbi5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgbWFpbi5yZW1vdmVDaGlsZChtYWluLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIC8vIGhvbWUtYmFja2dyb3VuZCBpbWFnZSBzcmNcbiAgICBjb25zdCBpbGx1c1NyYyA9IFwiXCI7XG5cbiAgICBjb25zdCBjYXJkc0NvbnRhaW5lciA9IGFkZENhcmRzKCk7XG5cbiAgICBsZXQgaW5kZXggPSAzO1xuICAgIHdoaWxlIChpbmRleCA8IDYpIHtcbiAgICAgICAgY29uc3Qgc3JjID0gc29uZ0xpc3RbaW5kZXhdLmltYWdlU3JjO1xuICAgICAgICBjb25zdCBuYW1lID0gc29uZ0xpc3RbaW5kZXhdLm5hbWU7XG4gICAgICAgIGNvbnN0IGFydGlzdCA9IHNvbmdMaXN0W2luZGV4XS5hcnRpc3Q7XG5cbiAgICAgICAgY29uc3QgY2FyZCA9IG1ha2VNdXNpY0NhcmRzKHNyYywgbmFtZSwgYXJ0aXN0LCBpbmRleCArIDEpO1xuICAgICAgICBjYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcblxuICAgICAgICBpbmRleCsrO1xuICAgIH1cblxuICAgIGNvbnN0IGJnSW1hZ2UgPSBidWlsZENvbnRlbnRJbWcoaWxsdXNTcmMpO1xuXG4gICAgY29uc3QgbHlyaWNzID0gZ2V0THlyaWNzKCk7XG5cbiAgICBjb25zdCBtdXNpY1BsYXllciA9IGJ1aWxkUGxheWVyKCk7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGJnSW1hZ2UpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQobHlyaWNzKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNhcmRzQ29udGFpbmVyKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKG11c2ljUGxheWVyKTtcblxuICAgIGFkZEZ1bmN0aW9uYWxpdHlUb0NhcmRzT25NdXNpY1BhZ2UoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRNdXNpY1BhZ2U7XG4iLCJjb25zdCBhZGRBdWRpb0VsZW1lbnQgPSAoKSA9PiB7XG4gICAgbGV0IGF1ZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImF1ZGlvXCIpO1xuICAgIGF1ZGlvLmNsYXNzTGlzdCA9IFwiYXVkaW9FbGVtZW50XCI7XG4gICAgYXVkaW8uc3JjID0gXCJcIjtcblxuICAgIHJldHVybiBhdWRpbztcbn07XG5cbmNvbnN0IGFkZE11c2ljUmFuZ2VCYXIgPSAoKSA9PiB7XG4gICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgcmFuZ2Uuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhbmdlXCIpO1xuICAgIHJhbmdlLmNsYXNzTGlzdCA9IFwibXVzaWNCYXJcIjtcbiAgICByYW5nZS52YWx1ZSA9IDA7XG5cbiAgICByZXR1cm4gcmFuZ2U7XG59O1xuXG5jb25zdCBhZGRTb25nSW5mbyA9ICgpID0+IHtcbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbmZvLmNsYXNzTGlzdCA9IFwic29uZ0RldGFpbFwiO1xuXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgYXJ0aXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBnaWYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIG5hbWUuY2xhc3NMaXN0ID0gXCJzb25nLW5hbWVcIjtcbiAgICBhcnRpc3QuY2xhc3NMaXN0ID0gXCJhcnRpc3QtbmFtZVwiO1xuICAgIGdpZi5jbGFzc0xpc3QgPSBcIm11c2ljLWdpZlwiO1xuICAgIGR1cmF0aW9uLmNsYXNzTGlzdCA9IFwiZHVyYXRpb25cIjtcblxuICAgIC8vVE9ETyA6IEFkZCBnaWYgc291cmNlXG4gICAgZ2lmLnNyYyA9IFwiXCI7XG5cbiAgICBpbmZvLmFwcGVuZENoaWxkKG5hbWUpO1xuICAgIGluZm8uYXBwZW5kQ2hpbGQoYXJ0aXN0KTtcbiAgICBpbmZvLmFwcGVuZENoaWxkKGdpZik7XG4gICAgaW5mby5hcHBlbmRDaGlsZChkdXJhdGlvbik7XG5cbiAgICByZXR1cm4gaW5mbztcbn07XG5cbmNvbnN0IGFkZENvbnRyb2xzID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRyb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNvbnN0IHByZXZCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG5leHRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHBsYXlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgY29uc3Qgdm9sdW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHZvbHVtZS52YWx1ZSA9IDEwMDtcblxuICAgIGNvbnN0IHByZXZCdG5JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGNvbnN0IG5leHRCdG5JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGNvbnN0IHBsYXlCdG5JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXG4gICAgcHJldkJ0bkltZy5zcmMgPSBcIi9kaXN0L2ljb25zLWFuZC1pbWFnZXMvcHJldmlvdXMtc3ZncmVwby1jb20uc3ZnXCI7XG4gICAgbmV4dEJ0bkltZy5zcmMgPSBcIi9kaXN0L2ljb25zLWFuZC1pbWFnZXMvbmV4dC1zdmdyZXBvLWNvbS5zdmdcIjtcbiAgICBwbGF5QnRuSW1nLnNyYyA9IFwiL2Rpc3QvaWNvbnMtYW5kLWltYWdlcy9wYXVzZS1zdmdyZXBvLWNvbS5zdmdcIjtcblxuICAgIHBsYXlCdG5JbWcuY2xhc3NMaXN0LmFkZChcInBsYXlCdG5JbWdcIiwgXCJjb250cm9sLWltZ1wiKTtcbiAgICBuZXh0QnRuSW1nLmNsYXNzTGlzdC5hZGQoXCJuZXh0QnRuSW1nXCIsIFwiY29udHJvbC1pbWdcIik7XG4gICAgcHJldkJ0bkltZy5jbGFzc0xpc3QuYWRkKFwicHJldkJ0bkltZ1wiLCBcImNvbnRyb2wtaW1nXCIpO1xuXG4gICAgcHJldkJ0bi5jbGFzc0xpc3QuYWRkKFwicHJldkJ0blwiLCBcImNvbnRyb2xCdG5cIik7XG4gICAgcGxheUJ0bi5jbGFzc0xpc3QuYWRkKFwicGxheUJ0blwiLCBcImNvbnRyb2xCdG5cIik7XG4gICAgbmV4dEJ0bi5jbGFzc0xpc3QuYWRkKFwibmV4dEJ0blwiLCBcImNvbnRyb2xCdG5cIik7XG5cbiAgICBwcmV2QnRuLmFwcGVuZENoaWxkKHByZXZCdG5JbWcpO1xuICAgIHBsYXlCdG4uYXBwZW5kQ2hpbGQocGxheUJ0bkltZyk7XG4gICAgbmV4dEJ0bi5hcHBlbmRDaGlsZChuZXh0QnRuSW1nKTtcblxuICAgIHZvbHVtZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFuZ2VcIik7XG4gICAgdm9sdW1lLmNsYXNzTGlzdCA9IFwidm9sdW1lXCI7XG5cbiAgICBjb250cm9scy5jbGFzc0xpc3QgPSBcImNvbnRyb2xzXCI7XG5cbiAgICBjb250cm9scy5hcHBlbmRDaGlsZChwcmV2QnRuKTtcbiAgICBjb250cm9scy5hcHBlbmRDaGlsZChwbGF5QnRuKTtcbiAgICBjb250cm9scy5hcHBlbmRDaGlsZChuZXh0QnRuKTtcbiAgICBjb250cm9scy5hcHBlbmRDaGlsZCh2b2x1bWUpO1xuXG4gICAgcmV0dXJuIGNvbnRyb2xzO1xufTtcblxuY29uc3QgYnVpbGRQbGF5ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgbWVkaWFQbGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lZGlhUGxheWVyLmNsYXNzTGlzdCA9IFwibWVkaWFQbGF5ZXJcIjtcblxuICAgIG1lZGlhUGxheWVyLmFwcGVuZENoaWxkKGFkZEF1ZGlvRWxlbWVudCgpKTtcbiAgICBtZWRpYVBsYXllci5hcHBlbmRDaGlsZChhZGRTb25nSW5mbygpKTtcbiAgICBtZWRpYVBsYXllci5hcHBlbmRDaGlsZChhZGRNdXNpY1JhbmdlQmFyKCkpO1xuICAgIG1lZGlhUGxheWVyLmFwcGVuZENoaWxkKGFkZENvbnRyb2xzKCkpO1xuXG4gICAgcmV0dXJuIG1lZGlhUGxheWVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYnVpbGRQbGF5ZXI7XG4iLCJpbXBvcnQgc29uZ0xpc3QgZnJvbSBcIi4uL1NvbmdzTGlzdC9zb25nc0RhdGFcIjtcbmltcG9ydCBhZGRDb250cm9sc0Z1bmN0aW9uYWxpdHkgZnJvbSBcIi4uL0Z1bmN0aW9uYWxpdGllcy9wbGF5TXVzaWNcIjtcbmltcG9ydCBnZXRTb25nRGV0YWlscyBmcm9tIFwiLi4vRnVuY3Rpb25hbGl0aWVzL2J1aWxkQ3VycmVudE11c2ljQ2FyZFwiO1xuaW1wb3J0IGxvYWRNdXNpY1BhZ2UgZnJvbSBcIi4uL211c2ljUGFnZVwiO1xuXG5jb25zdCBhZGRGdW5jdGlvbmFsaXR5VG9DYXJkc09uTXVzaWNQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGNhcmRzUGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zb25nQ2FyZHNcIik7XG5cbiAgICBjYXJkc1BhcmVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lID09IFwiY2FyZHNcIikge1xuICAgICAgICAgICAgY29uc3Qgc29uZ05hbWUgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzFdLnRleHRDb250ZW50O1xuXG4gICAgICAgICAgICBsZXQgc29uZ0luZGV4O1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb25nTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChzb25nTGlzdFtpXS5uYW1lID09IHNvbmdOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHNvbmdJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9hZE11c2ljUGFnZSgpO1xuICAgICAgICAgICAgZ2V0U29uZ0RldGFpbHMoc29uZ0luZGV4KTtcbiAgICAgICAgICAgIGFkZENvbnRyb2xzRnVuY3Rpb25hbGl0eShzb25nSW5kZXgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhZGRGdW5jdGlvbmFsaXR5VG9DYXJkc09uTXVzaWNQYWdlO1xuIiwiaW1wb3J0IGxvYWRNdXNpY1BhZ2UgZnJvbSBcIi4uL211c2ljUGFnZVwiO1xuaW1wb3J0IHNvbmdMaXN0IGZyb20gXCIuLi9Tb25nc0xpc3Qvc29uZ3NEYXRhXCI7XG5pbXBvcnQgYWRkQ29udHJvbHNGdW5jdGlvbmFsaXR5IGZyb20gXCIuLi9GdW5jdGlvbmFsaXRpZXMvcGxheU11c2ljXCI7XG5pbXBvcnQgYnVpbGRTb25nSW5mbyBmcm9tIFwiLi4vRnVuY3Rpb25hbGl0aWVzL2J1aWxkQ3VycmVudE11c2ljQ2FyZFwiO1xuXG5jb25zdCBnZXRDbGlja2VkID0gKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc05hbWUgPT0gXCJjYXJkc1wiKSB7XG4gICAgICAgIGNvbnN0IHNvbmdOYW1lID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5jaGlsZHJlblsxXS50ZXh0Q29udGVudDtcblxuICAgICAgICBsZXQgc29uZ0luZGV4O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNvbmdMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoc29uZ0xpc3RbaV0ubmFtZSA9PSBzb25nTmFtZSkge1xuICAgICAgICAgICAgICAgIHNvbmdJbmRleCA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsb2FkTXVzaWNQYWdlKCk7XG4gICAgICAgIGJ1aWxkU29uZ0luZm8oc29uZ0luZGV4KTtcbiAgICAgICAgYWRkQ29udHJvbHNGdW5jdGlvbmFsaXR5KHNvbmdJbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn07XG5cbmNvbnN0IGFkZEZ1bmN0aW9uYWxpdHlUb011c2ljQ2FyZHMgPSAoKSA9PiB7XG4gICAgY29uc3QgY2FyZHNQYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm11c2ljLWNhcmRzXCIpO1xuXG4gICAgY2FyZHNQYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdldENsaWNrZWQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYWRkRnVuY3Rpb25hbGl0eVRvTXVzaWNDYXJkcztcbiIsImltcG9ydCBzb25nTGlzdCBmcm9tIFwiLi9Tb25nc0xpc3Qvc29uZ3NEYXRhXCI7XG5pbXBvcnQgbWFrZU11c2ljQ2FyZHMgZnJvbSBcIi4vRnVuY3Rpb25hbGl0aWVzL21ha2VNdXNpY0NhcmRzXCI7XG5pbXBvcnQgYWRkRnVuY3Rpb25hbGl0eVRvTXVzaWNDYXJkcyBmcm9tIFwiLi9Vc2VyIEludGVyZmFjZS9ob21lVUlcIjtcblxuY29uc3QgYnVpbGRDb250ZW50SW1nID0gKHNvdXJjZSkgPT4ge1xuICAgIGNvbnN0IGhvbWVCZ0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaG9tZUJnSW1nLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29udGVudC1pbWdcIik7XG4gICAgaG9tZUJnSW1nLnNyYyA9IHNvdXJjZTtcblxuICAgIHJldHVybiBob21lQmdJbWc7XG59O1xuXG5jb25zdCBidWlsZENvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGF0YS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvbnRlbnQtZGF0YVwiKTtcbiAgICBkYXRhLnRleHRDb250ZW50ID0gXCJHZXQgcmVhZHkgdG8gZW5qb3kgdGhlIGV4cGVyaWVuY2UhXCI7XG5cbiAgICByZXR1cm4gZGF0YTtcbn07XG5cbmNvbnN0IGdldFNvbmdzTGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsaXN0LmNsYXNzTGlzdCA9IFwibGlzdC1vZi1zb25nc1wiO1xuXG4gICAgcmV0dXJuIGxpc3Q7XG59O1xuXG5jb25zdCBhZGRIZWFkID0gKCkgPT4ge1xuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWQuY2xhc3NMaXN0ID0gXCJsaXN0LWhlYWRcIjtcbiAgICBoZWFkLnRleHRDb250ZW50ID0gXCJQbGF5IG11c2ljXCI7XG5cbiAgICByZXR1cm4gaGVhZDtcbn07XG5cbmNvbnN0IGFkZENhcmRzID0gKCkgPT4ge1xuICAgIGNvbnN0IGNhcmRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkc0NvbnRhaW5lci5jbGFzc0xpc3QgPSBcIm11c2ljLWNhcmRzXCI7XG5cbiAgICByZXR1cm4gY2FyZHNDb250YWluZXI7XG59O1xuXG5jb25zdCBhZGRTZWFyY2hCYXIgPSAoKSA9PiB7XG4gICAgY29uc3QgYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGJhci5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic2VhcmNoXCIpO1xuICAgIGJhci5jbGFzc0xpc3QgPSBcInNlYXJjaC1iYXJcIjtcblxuICAgIHJldHVybiBiYXI7XG59O1xuXG5jb25zdCBsb2FkSG9tZSA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuXG4gICAgd2hpbGUgKG1haW4uaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgIG1haW4ucmVtb3ZlQ2hpbGQobWFpbi5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICAvLyBob21lLWJhY2tncm91bmQgaW1hZ2Ugc3JjXG4gICAgY29uc3QgaWxsdXNTcmMgPSBcIlwiO1xuXG4gICAgY29uc3QgY2FyZHNDb250YWluZXIgPSBhZGRDYXJkcygpO1xuXG4gICAgLy8gc29uZydzIGltYWdlIGFuZCBuYW1lXG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICB3aGlsZSAoaW5kZXggPCAzKSB7XG4gICAgICAgIGNvbnN0IHNyYyA9IHNvbmdMaXN0W2luZGV4XS5pbWFnZVNyYztcbiAgICAgICAgY29uc3QgbmFtZSA9IHNvbmdMaXN0W2luZGV4XS5uYW1lO1xuICAgICAgICBjb25zdCBhcnRpc3QgPSBzb25nTGlzdFtpbmRleF0uYXJ0aXN0O1xuXG4gICAgICAgIGNvbnN0IGNhcmQgPSBtYWtlTXVzaWNDYXJkcyhzcmMsIG5hbWUsIGFydGlzdCwgaW5kZXggKyAxKTtcbiAgICAgICAgY2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XG5cbiAgICAgICAgaW5kZXgrKztcbiAgICB9XG5cbiAgICBjb25zdCBsaXN0SGVhZCA9IGFkZEhlYWQoKTtcblxuICAgIGNvbnN0IHNvbmdzTGlzdCA9IGdldFNvbmdzTGlzdCgpO1xuICAgIHNvbmdzTGlzdC5hcHBlbmRDaGlsZChsaXN0SGVhZCk7XG4gICAgc29uZ3NMaXN0LmFwcGVuZENoaWxkKGNhcmRzQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGJnSW1hZ2UgPSBidWlsZENvbnRlbnRJbWcoaWxsdXNTcmMpO1xuICAgIGNvbnN0IGhvbWVNc2cgPSBidWlsZENvbnRlbnQoKTtcblxuICAgIGNvbnN0IHNlYXJjaEJhciA9IGFkZFNlYXJjaEJhcigpO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChiZ0ltYWdlKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGhvbWVNc2cpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoc2VhcmNoQmFyKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKHNvbmdzTGlzdCk7XG5cbiAgICBhZGRGdW5jdGlvbmFsaXR5VG9NdXNpY0NhcmRzKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkSG9tZTtcbiIsImltcG9ydCBsb2FkSG9tZSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgbG9hZE11c2ljUGFnZSBmcm9tIFwiLi9tdXNpY1BhZ2VcIjtcblxuY29uc3QgbG9hZFdlYnBhZ2UgPSAoKSA9PiB7XG4gICAgbG9hZEhvbWUoKTtcblxuICAgIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWUtYnRuXCIpO1xuICAgIGNvbnN0IG1lZGlhUGxheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tdXNpYy1saXN0LWJ0blwiKTtcbiAgICAvL2NvbnN0IHBsYXlsaXN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInBsYXlsaXN0LWJ0blwiKTtcblxuICAgIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvYWRIb21lKTtcbiAgICBtZWRpYVBsYXllci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbG9hZE11c2ljUGFnZSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkV2VicGFnZTtcbiIsImltcG9ydCBsb2FkV2VicGFnZSBmcm9tIFwiLi9tb2R1bGVzL3dlYnBhZ2VcIjtcblxubG9hZFdlYnBhZ2UoKTtcbiJdLCJuYW1lcyI6WyJuYW1lIiwiYXJ0aXN0IiwiaW1hZ2VTcmMiLCJzb25nU3JjIiwiZHVyYXRpb24iLCJzb3VyY2UiLCJzb25nSW1nIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwic3JjIiwic29uZ05hbWUiLCJ0ZXh0Q29udGVudCIsImFydGlzdE5hbWUiLCJtYWluQ2FyZCIsImFwcGVuZENoaWxkIiwiaW5kZXgiLCJtYWluIiwicXVlcnlTZWxlY3RvciIsImxhc3RDaGlsZCIsImNsYXNzTmFtZSIsInJlbW92ZUNoaWxkIiwiZGF0YSIsInNldEF0dHJpYnV0ZSIsInNvbmdXcml0ZXIiLCJidWlsZFNvbmdJbmZvIiwiY3VycmVudFNvbmciLCJwbGF5QnRuIiwicGxheUJ0bkltZyIsInZvbCIsInBsYXlQcm9taXNlIiwicGxheSIsInVuZGVmaW5lZCIsInRoZW4iLCJjYXRjaCIsImVycm9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhdXNlZCIsInBhdXNlIiwibXVzaWNCYXIiLCJzb25nUHJvZ3Jlc3MiLCJjdXJyZW50VGltZSIsInZhbHVlIiwiZSIsIm9mZnNldFgiLCJzcmNFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJwcmV2QnRuIiwidm9sdW1lIiwiaGFzQ2hpbGROb2RlcyIsImZpcnN0Q2hpbGQiLCJjYXJkc0NvbnRhaW5lciIsImFkZENhcmRzIiwiY2FyZCIsImJnSW1hZ2UiLCJob21lQmdJbWciLCJidWlsZENvbnRlbnRJbWciLCJseXJpY3MiLCJnZXRMeXJpY3MiLCJtdXNpY1BsYXllciIsIm1lZGlhUGxheWVyIiwiYXVkaW8iLCJhZGRBdWRpb0VsZW1lbnQiLCJpbmZvIiwiZ2lmIiwiYWRkU29uZ0luZm8iLCJyYW5nZSIsImFkZE11c2ljUmFuZ2VCYXIiLCJjb250cm9scyIsIm5leHRCdG4iLCJwcmV2QnRuSW1nIiwibmV4dEJ0bkltZyIsImFkZENvbnRyb2xzIiwidGFyZ2V0IiwicGFyZW50RWxlbWVudCIsImNoaWxkcmVuIiwic29uZ0luZGV4IiwiaSIsImdldENsaWNrZWQiLCJsaXN0SGVhZCIsImhlYWQiLCJhZGRIZWFkIiwic29uZ3NMaXN0IiwibGlzdCIsImdldFNvbmdzTGlzdCIsImhvbWVNc2ciLCJidWlsZENvbnRlbnQiLCJzZWFyY2hCYXIiLCJiYXIiLCJhZGRTZWFyY2hCYXIiLCJob21lQnRuIl0sInNvdXJjZVJvb3QiOiIifQ==