(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("CustomVideoPlayer", [], factory);
	else if(typeof exports === 'object')
		exports["CustomVideoPlayer"] = factory();
	else
		root["CustomVideoPlayer"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var CustomVideoPlayer = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  function CustomVideoPlayer() {
    _classCallCheck(this, CustomVideoPlayer);
    this.playerCount = 0;
  }
  return _createClass(CustomVideoPlayer, [{
    key: "createVideoPlayer",
    value: function createVideoPlayer(videoUrl) {
      var brandLogo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var thumbnail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var playerId = "video-player-".concat(this.playerCount++);
      return "\n            <div class=\"custom-video-player\">\n                <div class=\"video-container\" data-player-id=\"".concat(playerId, "\">\n                    <div class=\"video-wrapper\">\n                        ").concat(brandLogo ? "\n                            <div class=\"branding-logo\">\n                                <img src=\"".concat(brandLogo, "\" alt=\"Brand Logo\">\n                            </div>\n                        ") : '', "\n                        \n                        <video class=\"video-player\" preload=\"metadata\" ").concat(thumbnail ? "poster=\"".concat(thumbnail, "\"") : '', ">\n                            <source src=\"").concat(videoUrl, "\" type=\"video/mp4\">\n                            Your browser does not support the video tag.\n                        </video>\n\n                        <div class=\"loading-spinner\"></div>\n\n                        <div class=\"controls-container\">\n                            <div class=\"progress-container\">\n                                <div class=\"buffer-bar\"></div>\n                                <div class=\"progress-bar\"></div>\n                            </div>\n                            \n                            <div class=\"controls\">\n                                <button class=\"control-button play-pause\">\n                                    <svg class=\"play-icon\" viewBox=\"0 0 24 24\">\n                                        <path d=\"M8 5v14l11-7z\"/>\n                                    </svg>\n                                </button>\n\n                                <div class=\"volume-container\">\n                                    <button class=\"control-button mute\">\n                                        <svg viewBox=\"0 0 24 24\">\n                                            <path d=\"M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z\"/>\n                                        </svg>\n                                    </button>\n                                    <input type=\"range\" class=\"volume-slider\" min=\"0\" max=\"1\" step=\"0.1\" value=\"1\">\n                                </div>\n\n                                <span class=\"time-display\">0:00 / 0:00</span>\n                                \n                                <div class=\"spacer\"></div>\n\n                                <button class=\"control-button pip\">\n                                    <svg viewBox=\"0 0 24 24\">\n                                        <path d=\"M19 11h-8v6h8v-6zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H3V4.97h18v14.05z\"/>\n                                    </svg>\n                                </button>\n\n                                <button class=\"control-button fullscreen\">\n                                    <svg viewBox=\"0 0 24 24\">\n                                        <path d=\"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z\"/>\n                                    </svg>\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        ");
    }
  }, {
    key: "initializePlayers",
    value: function initializePlayers() {
      var _this = this;
      document.querySelectorAll('.video-container').forEach(function (container) {
        _this.initializePlayer(container);
      });
    }
  }, {
    key: "initializePlayer",
    value: function initializePlayer(container) {
      var video = container.querySelector('.video-player');
      var controls = container.querySelector('.controls-container');
      var playPauseBtn = container.querySelector('.play-pause');
      var muteBtn = container.querySelector('.mute');
      var volumeSlider = container.querySelector('.volume-slider');
      var progressContainer = container.querySelector('.progress-container');
      var progressBar = container.querySelector('.progress-bar');
      var bufferBar = container.querySelector('.buffer-bar');
      var timeDisplay = container.querySelector('.time-display');
      var pipBtn = container.querySelector('.pip');
      var fullscreenBtn = container.querySelector('.fullscreen');
      var loadingSpinner = container.querySelector('.loading-spinner');
      var hideControlsTimeout;

      // Format time in seconds to MM:SS format
      var formatTime = function formatTime(seconds) {
        var minutes = Math.floor(seconds / 60);
        seconds = Math.floor(seconds % 60);
        return "".concat(minutes, ":").concat(seconds.toString().padStart(2, '0'));
      };

      // Update play/pause button icon
      var updatePlayButton = function updatePlayButton() {
        playPauseBtn.innerHTML = video.paused ? '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>' : '<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>';
      };

      // Update volume button icon
      var updateVolumeButton = function updateVolumeButton() {
        var volume = video.volume;
        var isMuted = video.muted || volume === 0;
        muteBtn.innerHTML = isMuted ? '<svg viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>' : volume < 0.5 ? '<svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>' : '<svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>';
      };

      // Update progress bar
      var updateProgress = function updateProgress() {
        var percentage = video.currentTime / video.duration * 100;
        progressBar.style.width = "".concat(percentage, "%");
        timeDisplay.textContent = "".concat(formatTime(video.currentTime), " / ").concat(formatTime(video.duration));

        // Update buffer bar
        if (video.buffered.length > 0) {
          var bufferedEnd = video.buffered.end(video.buffered.length - 1);
          var bufferPercentage = bufferedEnd / video.duration * 100;
          bufferBar.style.width = "".concat(bufferPercentage, "%");
        }
      };

      // Toggle play/pause
      var togglePlay = function togglePlay() {
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
        updatePlayButton();
      };

      // Toggle mute
      var toggleMute = function toggleMute() {
        video.muted = !video.muted;
        volumeSlider.value = video.muted ? 0 : video.volume;
        updateVolumeButton();
      };

      // Seek video
      var seek = function seek(e) {
        var rect = progressContainer.getBoundingClientRect();
        var pos = (e.clientX - rect.left) / rect.width;
        video.currentTime = pos * video.duration;
      };

      // Toggle fullscreen
      var toggleFullscreen = function toggleFullscreen() {
        if (!document.fullscreenElement) {
          container.requestFullscreen();
        } else {
          document.exitFullscreen();
        }
      };

      // Toggle Picture in Picture
      var togglePiP = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                if (!document.pictureInPictureElement) {
                  _context.next = 6;
                  break;
                }
                _context.next = 4;
                return document.exitPictureInPicture();
              case 4:
                _context.next = 8;
                break;
              case 6:
                _context.next = 8;
                return video.requestPictureInPicture();
              case 8:
                _context.next = 13;
                break;
              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                console.error('PiP failed:', _context.t0);
              case 13:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[0, 10]]);
        }));
        return function togglePiP() {
          return _ref.apply(this, arguments);
        };
      }();

      // Show/hide controls
      var showControls = function showControls() {
        controls.style.opacity = '1';
        clearTimeout(hideControlsTimeout);
      };
      var hideControls = function hideControls() {
        if (!video.paused) {
          hideControlsTimeout = setTimeout(function () {
            controls.style.opacity = '0';
          }, 2000);
        }
      };

      // Event Listeners
      video.addEventListener('play', updatePlayButton);
      video.addEventListener('pause', updatePlayButton);
      video.addEventListener('timeupdate', updateProgress);
      video.addEventListener('volumechange', updateVolumeButton);
      video.addEventListener('waiting', function () {
        return loadingSpinner.style.display = 'block';
      });
      video.addEventListener('canplay', function () {
        return loadingSpinner.style.display = 'none';
      });
      playPauseBtn.addEventListener('click', togglePlay);
      muteBtn.addEventListener('click', toggleMute);
      volumeSlider.addEventListener('input', function (e) {
        video.volume = e.target.value;
        video.muted = e.target.value === '0';
        updateVolumeButton();
      });
      progressContainer.addEventListener('click', seek);
      fullscreenBtn.addEventListener('click', toggleFullscreen);
      pipBtn.addEventListener('click', togglePiP);
      container.addEventListener('mousemove', showControls);
      container.addEventListener('mouseleave', hideControls);

      // Keyboard controls
      document.addEventListener('keydown', function (e) {
        if (container.contains(document.activeElement)) {
          switch (e.code) {
            case 'Space':
              e.preventDefault();
              togglePlay();
              break;
            case 'KeyM':
              toggleMute();
              break;
            case 'KeyF':
              toggleFullscreen();
              break;
            case 'KeyP':
              togglePiP();
              break;
            case 'ArrowLeft':
              video.currentTime = Math.max(video.currentTime - 5, 0);
              break;
            case 'ArrowRight':
              video.currentTime = Math.min(video.currentTime + 5, video.duration);
              break;
            case 'ArrowUp':
              video.volume = Math.min(video.volume + 0.1, 1);
              volumeSlider.value = video.volume;
              break;
            case 'ArrowDown':
              video.volume = Math.max(video.volume - 0.1, 0);
              volumeSlider.value = video.volume;
              break;
          }
        }
      });

      // Initial setup
      updatePlayButton();
      updateVolumeButton();

      // Touch device optimizations
      if ('ontouchstart' in window) {
        var toggleControls = function toggleControls() {
          controls.style.opacity = controls.style.opacity === '1' ? '0' : '1';
        };
        video.addEventListener('click', toggleControls);
      }
    }
  }]);
}()));
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});