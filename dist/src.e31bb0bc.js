// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"index.js":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Site = /*#__PURE__*/function () {
  function Site() {
    _classCallCheck(this, Site);

    this.siteArr = [{
      title: "掘金",
      url: "https://juejin.im",
      desc: "程序员社区"
    }, {
      title: "百度",
      url: "https://www.baidu.com",
      desc: "搜索引擎"
    }, {
      title: "bilibili",
      url: "https://www.bilibili.com",
      desc: "二次元网站"
    }, {
      title: "acfun",
      url: "https://www.acfun.cn",
      desc: "搜索引擎"
    }, {
      title: "weibo",
      url: "https://www.weibo.com",
      desc: "新浪微博"
    }, {
      title: "语雀",
      url: "https://yuque.com",
      desc: "阿里笔记神器"
    }];
    this.loadSites();
    this.renderSites();
  }

  _createClass(Site, [{
    key: "addSite",
    value: function addSite(title, url, desc) {
      if (!url.match(/^https?:\/\//)) {
        url = "https://" + url;
      }

      this.siteArr.push({
        title: title,
        url: url,
        desc: desc
      });
      this.renderSites();
    }
  }, {
    key: "loadSites",
    value: function loadSites() {
      if (window.localStorage.sites) {
        var arr = JSON.parse(window.localStorage.sites);

        if (Array.isArray(arr)) {
          this.siteArr = arr;
        }
      }
    }
  }, {
    key: "removeSite",
    value: function removeSite(index) {
      this.siteArr.splice(index, 1);
      this.renderSites();
    }
  }, {
    key: "saveSites",
    value: function saveSites() {
      window.localStorage.sites = JSON.stringify(this.siteArr);
    }
  }, {
    key: "clearCache",
    value: function clearCache() {
      window.localStorage.sites = "";
    }
  }, {
    key: "renderSites",
    value: function renderSites() {
      var content = this.siteArr.map(function (_ref, index) {
        var title = _ref.title,
            url = _ref.url,
            desc = _ref.desc;
        return "\n        <li class=\"site\" data-siteindex=\"".concat(index, "\">\n          <div class=\"site-wrapper\">\n            <div class=\"site-content\">\n              <div class=\"site-head\">\n                <img\n                  src=\"").concat(url, "/favicon.ico\"\n                  alt=\"\"\n                  class=\"site-img\"\n                />\n                <span class=\"site-title\">").concat(title, "</span>\n              </div>\n              <p class=\"site-desc\">").concat(desc, "</p>\n            </div>\n            <div class=\"site-remove-mobile-btn\">\u5220\u9664</div>\n            <div class=\"site-remove-pc-btn\">\n              <svg class=\"icon\" aria-hidden=\"true\">\n                <use xlink:href=\"#icon-baseline-close-px\"></use>\n              </svg>\n            </div>\n          </div>\n        </li>");
      }).join("\n");
      $(".site-list .add-site").siblings().remove().end().before(content);
      bindSlideSiteEvent();
    }
  }]);

  return Site;
}();

function loadBackgroundImage() {
  var height = $(window).height();
  var width = $(window).width();
  var topic = "universe";
  var url = "https://source.unsplash.com/".concat(width, "x").concat(height, "/?").concat(topic);
  var img = new Image();
  img.src = url;

  img.onload = function () {
    $("#bgImage").attr("src", url).fadeIn();
  };
}

function bindAddSiteEvent() {
  $(".add-site").on("click", function (e) {
    console.log(e.currentTarget);
    var title = window.prompt("请输入网站标题");
    if (!title) return;
    var url = window.prompt("请输入网站地址");
    if (!url) return;
    var desc = window.prompt("请输入网站描述");
    s.addSite(title, url, desc);
  });
}

function isRemoveBtn(ele) {
  var $ele = $(ele);

  while ($ele[0] !== document && !$ele.hasClass("site-remove-mobile-btn") && !$ele.hasClass("site-remove-pc-btn")) {
    $ele = $ele.parent();
    console.log($ele[0]);
  }

  return $ele[0] !== document;
}

function bindRemoveSiteEvent() {
  $(".site-list").on("click", removeEventhandler);

  function removeEventhandler(e) {
    e.stopPropagation();
    var target = e.target;
    if (!isRemoveBtn(target)) return;

    while (target.dataset && target.dataset.siteindex === undefined && target !== document) {
      target = target.parentNode;
    }

    var index = target.dataset.siteindex;

    if (window.confirm("\u786E\u5B9A\u5220\u9664\u7F51\u7AD9".concat(s.siteArr[index].title, "\uFF1F"))) {
      s.removeSite(index);
    }
  }
}

function bindOpenSiteEvent() {
  $(".site-list").on("click", openEventHandler);

  function openEventHandler(e) {
    var target = e.target;
    if (isRemoveBtn(target)) return;

    while (target.dataset && target.dataset.siteindex === undefined && target !== document) {
      target = target.parentNode;
    }

    if (target === document) return;
    var index = target.dataset.siteindex;
    window.open(s.siteArr[index].url);
  }
}

function bindSlideSiteEvent() {
  var isTouching = false;
  var isSlided = false;
  var originX;
  var deltaXRec;
  var LIMIT = $(".site-wrapper").width() / 2;
  $(".site-wrapper").on("touchstart", function (e) {
    var left = parseInt($(this).css("left"));
    isSlided = Math.abs(left) === LIMIT;
    isTouching = true;
    deltaXRec = 0;
    originX = e.touches[0].clientX;
    $(this).removeClass("animate");
  }).on("touchmove", function (e) {
    var curX = e.touches[0].clientX;
    var deltaX = curX - originX;

    if (isSlided) {
      if (deltaX < LIMIT && deltaX > 0) {
        $(this).css("left", "".concat(-LIMIT + deltaX, "px"));
      }
    } else {
      if (deltaX > -LIMIT && deltaX < 0) {
        $(this).css("left", "".concat(deltaX, "px"));
      }
    }

    deltaXRec = deltaX;
  }).on("touchend", function (e) {
    isTouching = false;
    $(this).addClass("animate"); // 幅度不够

    if (Math.abs(deltaXRec) < LIMIT * 0.9) {
      $(this).css("left", isSlided ? "".concat(-LIMIT, "px") : "0px");
    } else {
      $(this).css("left", isSlided ? "0px" : "".concat(-LIMIT, "px"));
    }
  });
} // loadBackgroundImage();


s = new Site();
bindAddSiteEvent();
bindOpenSiteEvent();
bindRemoveSiteEvent();
},{}],"../../../../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "42219" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map