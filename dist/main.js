(()=>{"use strict";const e=[{name:"On & On",artist:"Cartoon x HAVSUN x WAYOUT, ft. Daniel Levi",imageSrc:"/dist/song-images/on&on.jpg",songSrc:"/dist/sample-songs/Cartoon - On & On (ft. Daniel Levi)(Cartoon x HAVSUN x WAYOUT Remix) [NCS Release].mp3",duration:"03:58"},{name:"Mortals",artist:"Warriyo, feat. Laura Brehm",imageSrc:"/dist/song-images/warriyo.jpg",songSrc:"/dist/sample-songs/Warriyo - Mortals (feat. Laura Brehm) [NCS Release].mp3",duration:"03:48"},{name:"Cradles",artist:"Sub Urban",imageSrc:"/dist/song-images/cradles.jpg",songSrc:"/dist/sample-songs/Sub Urban - Cradles [NCS Release].mp3",duration:"03:29"},{name:"Adventures",artist:"William Ekh, feat. Alexa Lusader",imageSrc:"/dist/song-images/adventures.jpg",songSrc:"/dist/sample-songs/William Ekh - Adventures (feat. Alexa Lusader) [NCS Release].mp3",duration:"03:11"},{name:"Set Me Free",artist:"Simbai & Frizzy The Streetz",imageSrc:"/dist/song-images/setmefree.jpg",songSrc:"/dist/sample-songs/Simbai & Frizzy The Streetz - Set Me Free [NCS Release].mp3",duration:"02:49"},{name:"Heroes Tonight",artist:"Janji, ft.Johnning",imageSrc:"/dist/song-images/janji.jpg",songSrc:"/dist/sample-songs/Janji - Heroes Tonight (feat. Johnning) [NCS Release].mp3",duration:"03:28"}],t=(e,t,s,n)=>{const a=document.createElement("img");a.classList=`card-img card-${n}-img`,a.src=e;const i=document.createElement("div");i.classList=`music-name name-${n}`,i.textContent=t;const r=document.createElement("div");i.classList=`artist-name artistName-${n}`,i.textContent+=" - "+s;const c=document.createElement("div");return c.classList=`cards card-${n}`,c.appendChild(a),c.appendChild(i),c.appendChild(r),c},s=()=>{const s=document.querySelector(".main");for(;s.hasChildNodes();)s.removeChild(s.firstChild);const n=(()=>{const e=document.createElement("div");return e.classList="music-cards",e})();console.log(e[0].name);let a=0;for(;a<3;){const s=e[a].imageSrc,i=e[a].name,r=e[a].artist,c=t(s,i,r,a+1);n.appendChild(c),a++}const i=(()=>{const e=document.createElement("div");return e.classList="list-head",e.textContent="Play music",e})(),r=(()=>{const e=document.createElement("div");return e.classList="list-of-songs",e})();r.appendChild(i),r.appendChild(n);const c=(e=>{const t=document.createElement("img");return t.setAttribute("class","content-img"),t.src="",t})(),o=(()=>{const e=document.createElement("div");return e.setAttribute("class","content-data"),e.textContent="Get ready to enjoy the experience!",e})(),d=(()=>{const e=document.createElement("input");return e.setAttribute("type","search"),e.classList="search-bar",e})();s.appendChild(c),s.appendChild(o),s.appendChild(d),s.appendChild(r)},n=(e,t,s)=>{const n=document.createElement("img");n.classList=`cardImg card-${s}`,n.src=e;const a=document.createElement("div");a.classList=`musicName songName-${s}`,a.textContent=t;const i=document.createElement("div");return i.classList=`cardsList cardNum-${s}`,i.appendChild(n),i.appendChild(a),i},a=()=>{const e=document.querySelector(".main");for(;e.hasChildNodes();)e.removeChild(e.firstChild);const t=n("","song 1",1),s=n("","song 2",2),a=n("","song 3",3),i=(()=>{const e=document.createElement("div");return e.classList="songCards",e})();i.appendChild(t),i.appendChild(s),i.appendChild(a);const r=((e,t,s)=>{const n=document.createElement("div");n.classList="songData";const a=document.createElement("img");a.classList="mainImg",a.src="/dist/Sample-songs/Sub Urban - Cradles [NCS Release].mp3";const i=document.createElement("div");i.classList="songName",i.textContent="";const r=document.createElement("div");return r.classList="writer",r.textContent="",n.appendChild(a),n.appendChild(i),n.appendChild(r),n})(),c=(()=>{const e=document.createElement("div");return e.classList="lyrics",e})(),o=(e=>{const t=document.createElement("audio");return t.src="/dist/Sample-songs/Sub Urban - Cradles [NCS Release].mp3",t.setAttribute("controls","controls"),t})(),d=(e=>{const t=document.createElement("img");return t.setAttribute("class","content-img"),t.src="",t})();e.appendChild(d),e.appendChild(r),e.appendChild(c),e.appendChild(i),e.appendChild(o)};(()=>{s();const e=document.querySelector(".home-btn"),t=document.querySelector(".music-list-btn");e.addEventListener("click",s),t.addEventListener("click",a)})()})();