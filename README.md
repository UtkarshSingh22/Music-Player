# Music-Player
A project on building a voice-activated music player with various features.

Live -> https://music-player-69865.web.app

Basic Structure of the Website: 
The website consists of 3 pages. They are the homepage, a music player page and a playlist page. Except the playlist page, the user can access the other two pages without logging in with Google. The header and the voice activation button are common for the three pages. A total of six sample(Non - Copyrighted) songs are used on the webapp. 

Header:
- The buttons on the header are used to switch between the pages. 
- It also consists of the Login button.

Homepage:
- It consists of the header.
- A search bar, and 
- All the six music-cards for playing the songs.

Music Page:
- It shows the details of the current music that is being played. The user can add songs to his playlist once he/she is logged in from the button beside the current song cover picture.
- A music player is present at the bottom with various buttons like pause/play, next, previous, volume, etc.
- This page also has the music cards on the right for playing the music directly from there.

Playlist Page:
- Can be used only after Google authorization.
- The user can see all the added songs. He/she can also play the songs from this page or delete the song from the playlist.

The code is written using the module pattern. 

Tech Involved:

- HTML, CSS and JavaScript are used for the frontend.
- Webpack is used for bundling the modules.
- Firebase is used for Google authorization, storing the songs for a user in a playlist and for hosting the website.
