# Music Player

- [Live preview](#live-preview)
- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Useful resources](#useful-resources)
- [Functionality](#functionality)
  - [Buttons](#buttons)
  - [Range](#range)

## Live preview

https://fog-bc-music-player.netlify.app

## Overview

### The challenge

[Layout](https://postimg.cc/nsP0LB0m)

Users should be able to:

- [x] Select music files from the device's local storage
- [x] See album's thumbnail, if available
- [x] See music title, if available
- [x] See music artist name, if available
- [x] Play music
- [x] Pause music
- [x] Go to previous music
- [x] Go to next music
- [x] Scrub through music
- [x] See elapsed time
- [x] See remaining time

### Screenshots

[![boracodar-musicplayer.png](https://i.postimg.cc/0jXL6Jbc/boracodar-musicplayer.png)](https://postimg.cc/5QvPTy5C)

## My process

### Built with

- [JS MediaTags](https://github.com/aadsm/jsmediatags) - Media tags reader
- [Playwright](https://playwright.dev/) - Reliable end-to-end testing for modern web apps
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [Vitest](https://vitest.dev/) - Blazing Fast Unit Test Framework

### Useful resources

- [MDN's HTMLMediaElement events reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement#events)
- [Miguel Nunez's How to Extract Metadata from Music Files with JavaScript using the jsmediatags Library](https://medium.com/@codefoxx/how-to-extract-metadata-from-music-files-with-javascript-using-jsmediatags-619323bb2b16)

## Functionality

This music player should be able to play the selected music files from the device's local storage.

### Buttons

The buttons can be used by:

- mouse, clicking on them
- keyboard, tabbing into them and pressing `enter` or `space bar`

### Range

The range can be used by:

- mouse, clicking on it, or dragging it left or right
- keyboard, tabbing into it and pressing the `left arrow` or `right arrow` buttons
