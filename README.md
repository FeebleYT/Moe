# Moe-
Code is very messy but oh well.

https://discord.gg/M6hRKwF

### Self-Hosting
**Configuration**
```
{
"token":"Bot Token",
"prefix":"Prefix",
"ownerID":"Owner ID"
}
```
**Requirements**
```
npm i
```
If that doesn't work, do this.
```
npm i discord.js ffmpeg-binaries node-opus opusscript moment moment-duration-format random-puppy kitsu.js animequote
```
All in one line & if that doesn't do it, try installing them seperately.

**Running The Bot**

I wouldn't suggest running with shard.js unless you plan on having it on 1,000+ servers.
```
node moe.js
```
Run with autorestart
```
npm i -g pm2
pm2 start moe.js
pm2 restart moe.js
pm2 stop moe.js
```
