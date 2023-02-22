# Chat

- [Live preview](#live-preview)
- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Useful resources](#useful-resources)
- [Functionality](#functionality)

## Live preview

https://fog-bc-chat.fly.dev/

## Overview

### The challenge

[Layout](https://postimg.cc/y3Yq4Q4F)

Users should be able to:

- [x] Set a 32 characters username
- [x] Send 128 characters messages
- [x] Receive messages

### Screenshots

[![boracodar-chat.png](https://i.postimg.cc/yYXV8qgD/boracodar-chat.png)](https://postimg.cc/ZCnkwMLm)

## My process

### Built with

- HTML5, CSS3, JS and Node
- [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
- [nodemon](https://nodemon.io/) - Reload, automatically
- [string-strip-html](https://codsen.com/os/string-strip-html) - Strip HTML tags from strings
- [ws](https://github.com/websockets/ws) - A Node.js WebSocket library
- [Fly.io](https://fly.io) - Deploy app servers close to your users

### Useful resources

- [websocket's ws documentation](https://github.com/websockets/ws/blob/master/doc/ws.md)
- [MDN's WebSocket API](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)
- [fly-apps' chat example](https://github.com/fly-apps/flychat-ws)

## Functionality

- Chat should be able to handle multiple users
- Messages aren't persisted
- Production environment times out after 60s of inactivity
