(()=>{"use strict";const e=[{name:"On & On",artist:"Cartoon x HAVSUN x WAYOUT, ft. Daniel Levi",imageSrc:"/dist/song-images/on&on.jpg",songSrc:"/dist/sample-songs/Cartoon - On & On (ft. Daniel Levi)(Cartoon x HAVSUN x WAYOUT Remix) [NCS Release].mp3",duration:"03:58"},{name:"Mortals",artist:"Warriyo, feat. Laura Brehm",imageSrc:"/dist/song-images/warriyo.jpg",songSrc:"/dist/sample-songs/Warriyo - Mortals (feat. Laura Brehm) [NCS Release].mp3",duration:"03:48"},{name:"Cradles",artist:"Sub Urban",imageSrc:"/dist/song-images/cradles.jpg",songSrc:"/dist/sample-songs/Sub Urban - Cradles [NCS Release].mp3",duration:"03:29"},{name:"Adventures",artist:"William Ekh, feat. Alexa Lusader",imageSrc:"/dist/song-images/adventures.jpg",songSrc:"/dist/sample-songs/William Ekh - Adventures (feat. Alexa Lusader) [NCS Release].mp3",duration:"03:11"},{name:"Set Me Free",artist:"Simbai & Frizzy The Streetz",imageSrc:"/dist/song-images/setmefree.jpg",songSrc:"/dist/sample-songs/Simbai & Frizzy The Streetz - Set Me Free [NCS Release].mp3",duration:"02:49"},{name:"Heroes Tonight",artist:"Janji, ft.Johnning",imageSrc:"/dist/song-images/janji.jpg",songSrc:"/dist/sample-songs/Janji - Heroes Tonight (feat. Johnning) [NCS Release].mp3",duration:"03:28"}],t=(e,t,n)=>{const s=document.createElement("img");s.classList.add("card-img"),s.src=e;const a=document.createElement("div");a.classList.add("music-name"),a.textContent=t;const i=document.createElement("div");i.classList.add("artist-name"),i.textContent=n;const c=document.createElement("div");return c.classList.add("cards"),c.appendChild(s),c.appendChild(a),c.appendChild(i),c},n=()=>{const n=document.querySelector(".main");for(;n.hasChildNodes();)n.removeChild(n.firstChild);const s=(()=>{const e=document.createElement("div");return e.classList="songCards",e})();let a=3;for(;a<6;){const n=e[a].imageSrc,i=e[a].name,c=e[a].artist,d=t(n,i,c);s.appendChild(d),a++}const i=(e=>{const t=document.createElement("img");return t.setAttribute("class","content-img"),t.src="",t})(),c=((e,t,n)=>{const s=document.createElement("div");s.classList="songData";const a=document.createElement("img");a.classList="mainImg",a.src=e;const i=document.createElement("div");i.classList="songName",i.textContent=t;const c=document.createElement("div");return c.classList="artist",c.textContent=n,s.appendChild(a),s.appendChild(i),s.appendChild(c),s})("","",""),d=(()=>{const e=document.createElement("div");return e.classList="lyrics",e})(),r=(()=>{const e=document.createElement("div");return e.classList="mediaPlayer",e.appendChild((()=>{const e=document.createElement("div");e.classList="songDetail";const t=document.createElement("div"),n=document.createElement("div"),s=document.createElement("img"),a=document.createElement("div");return t.classList="song-name",n.classList="artist-name",s.classList="music-gif",a.classList="duration",s.src="",e.appendChild(t),e.appendChild(n),e.appendChild(s),e.appendChild(a),e})()),e.appendChild((()=>{const e=document.createElement("input");return e.setAttribute("type","range"),e.classList="musicBar",e})()),e.appendChild((()=>{const e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("div"),s=document.createElement("div"),a=document.createElement("input"),i=document.createElement("img"),c=document.createElement("img"),d=document.createElement("img");return i.src="/dist/icons-and-images/previous-svgrepo-com.svg",c.src="/dist/icons-and-images/next-svgrepo-com.svg",d.src="/dist/icons-and-images/play-svgrepo-com.svg",d.classList.add("playBtnImg","control-img"),c.classList.add("nextBtnImg","control-img"),i.classList.add("prevBtnImg","control-img"),t.classList.add("prevBtn","controlBtn"),s.classList.add("playBtn","controlBtn"),n.classList.add("nextBtn","controlBtn"),t.appendChild(i),s.appendChild(d),n.appendChild(c),a.setAttribute("type","range"),a.classList="volume",e.classList="controls",e.appendChild(t),e.appendChild(s),e.appendChild(n),e.appendChild(a),e})()),e})();n.appendChild(i),n.appendChild(c),n.appendChild(d),n.appendChild(s),n.appendChild(r)},s=t=>{if("cards"==t.target.parentElement.className){const s=t.target.parentElement.children[1].textContent;let a;for(let t=0;t<e.length;t++)e[t].name==s&&(a=t);n()}},a=()=>{const n=document.querySelector(".main");for(;n.hasChildNodes();)n.removeChild(n.firstChild);const a=(()=>{const e=document.createElement("div");return e.classList="music-cards",e})();let i=0;for(;i<3;){const n=e[i].imageSrc,s=e[i].name,c=e[i].artist,d=t(n,s,c);a.appendChild(d),i++}const c=(()=>{const e=document.createElement("div");return e.classList="list-head",e.textContent="Play music",e})(),d=(()=>{const e=document.createElement("div");return e.classList="list-of-songs",e})();d.appendChild(c),d.appendChild(a);const r=(e=>{const t=document.createElement("img");return t.setAttribute("class","content-img"),t.src="",t})(),o=(()=>{const e=document.createElement("div");return e.setAttribute("class","content-data"),e.textContent="Get ready to enjoy the experience!",e})(),l=(()=>{const e=document.createElement("input");return e.setAttribute("type","search"),e.classList="search-bar",e})();n.appendChild(r),n.appendChild(o),n.appendChild(l),n.appendChild(d),document.querySelector(".music-cards").addEventListener("click",s)};(()=>{a();const e=document.querySelector(".home-btn"),t=document.querySelector(".music-list-btn");e.addEventListener("click",a),t.addEventListener("click",n)})()})();