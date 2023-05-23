import * as __WEBPACK_EXTERNAL_MODULE_http_localhost_4201_remoteEntry_mjs_ba8924b6__ from "http://localhost:4201/remoteEntry.mjs";
/******/ var __webpack_modules__ = ({

/***/ 9071:
/*!********************************!*\
  !*** ./apps/shell/src/main.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {



Promise.all(/*! import() */[__webpack_require__.e("default-webpack_sharing_consume_default_angular_core_angular_core"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_rxjs"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_operators_rxjs_operators"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_common_angular_common"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_platform-browser_animations_angular_platform--1f5ace"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_platform-browser_angular_platform-browser"), __webpack_require__.e("default-webpack_sharing_consume_default_ngrx_store_ngrx_store"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_material_button_angular_material_button-webpa-e6b60c"), __webpack_require__.e("default-webpack_sharing_consume_default_ngrx_effects_ngrx_effects"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_material_dialog_angular_material_dialog"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_core_rxjs-interop_angular_core_rxjs-interop"), __webpack_require__.e("default-webpack_sharing_consume_default_kanbanboard_shared_ui-material_kanbanboard_shared_ui--8ab55f"), __webpack_require__.e("apps_shell_src_bootstrap_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./bootstrap */ 8357)).catch(err => console.error(err));

/***/ }),

/***/ 6057:
/*!********************************************************!*\
  !*** external "http://localhost:4201/remoteEntry.mjs" ***!
  \********************************************************/
/***/ ((module) => {

var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
module.exports = __WEBPACK_EXTERNAL_MODULE_http_localhost_4201_remoteEntry_mjs_ba8924b6__;

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/******/ // expose the modules object (__webpack_modules__)
/******/ __webpack_require__.m = __webpack_modules__;
/******/ 
/******/ // expose the module cache
/******/ __webpack_require__.c = __webpack_module_cache__;
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/chunk loaded */
/******/ (() => {
/******/ 	var deferred = [];
/******/ 	__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 		if(chunkIds) {
/******/ 			priority = priority || 0;
/******/ 			for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 			deferred[i] = [chunkIds, fn, priority];
/******/ 			return;
/******/ 		}
/******/ 		var notFulfilled = Infinity;
/******/ 		for (var i = 0; i < deferred.length; i++) {
/******/ 			var [chunkIds, fn, priority] = deferred[i];
/******/ 			var fulfilled = true;
/******/ 			for (var j = 0; j < chunkIds.length; j++) {
/******/ 				if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 					chunkIds.splice(j--, 1);
/******/ 				} else {
/******/ 					fulfilled = false;
/******/ 					if(priority < notFulfilled) notFulfilled = priority;
/******/ 				}
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferred.splice(i--, 1)
/******/ 				var r = fn();
/******/ 				if (r !== undefined) result = r;
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/create fake namespace object */
/******/ (() => {
/******/ 	var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 	var leafPrototypes;
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 16: return value when it's Promise-like
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = this(value);
/******/ 		if(mode & 8) return value;
/******/ 		if(typeof value === 'object' && value) {
/******/ 			if((mode & 4) && value.__esModule) return value;
/******/ 			if((mode & 16) && typeof value.then === 'function') return value;
/******/ 		}
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		var def = {};
/******/ 		leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 		for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 			Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 		}
/******/ 		def['default'] = () => (value);
/******/ 		__webpack_require__.d(ns, def);
/******/ 		return ns;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/ensure chunk */
/******/ (() => {
/******/ 	__webpack_require__.f = {};
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = (chunkId) => {
/******/ 		return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 			__webpack_require__.f[key](chunkId, promises);
/******/ 			return promises;
/******/ 		}, []));
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/get javascript chunk filename */
/******/ (() => {
/******/ 	// This function allow to reference async chunks
/******/ 	__webpack_require__.u = (chunkId) => {
/******/ 		// return url for filenames based on template
/******/ 		return "" + chunkId + ".js";
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/get mini-css chunk filename */
/******/ (() => {
/******/ 	// This function allow to reference async chunks
/******/ 	__webpack_require__.miniCssF = (chunkId) => {
/******/ 		// return url for filenames based on template
/******/ 		return undefined;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("67b591063ca1284f")
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/load script */
/******/ (() => {
/******/ 	var inProgress = {};
/******/ 	var dataWebpackPrefix = "shell:";
/******/ 	// loadScript function to load a script via script tag
/******/ 	__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 		if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 		var script, needAttach;
/******/ 		if(key !== undefined) {
/******/ 			var scripts = document.getElementsByTagName("script");
/******/ 			for(var i = 0; i < scripts.length; i++) {
/******/ 				var s = scripts[i];
/******/ 				if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 			}
/******/ 		}
/******/ 		if(!script) {
/******/ 			needAttach = true;
/******/ 			script = document.createElement('script');
/******/ 			script.type = "module";
/******/ 			script.charset = 'utf-8';
/******/ 			script.timeout = 120;
/******/ 			if (__webpack_require__.nc) {
/******/ 				script.setAttribute("nonce", __webpack_require__.nc);
/******/ 			}
/******/ 			script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 			script.src = __webpack_require__.tu(url);
/******/ 		}
/******/ 		inProgress[url] = [done];
/******/ 		var onScriptComplete = (prev, event) => {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var doneFns = inProgress[url];
/******/ 			delete inProgress[url];
/******/ 			script.parentNode && script.parentNode.removeChild(script);
/******/ 			doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 			if(prev) return prev(event);
/******/ 		}
/******/ 		var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 		script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 		script.onload = onScriptComplete.bind(null, script.onload);
/******/ 		needAttach && document.head.appendChild(script);
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/remotes loading */
/******/ (() => {
/******/ 	var chunkMapping = {
/******/ 		"webpack_container_remote_board_Module": [
/******/ 			1761
/******/ 		]
/******/ 	};
/******/ 	var idToExternalAndNameMapping = {
/******/ 		"1761": [
/******/ 			"default",
/******/ 			"./Module",
/******/ 			6057
/******/ 		]
/******/ 	};
/******/ 	__webpack_require__.f.remotes = (chunkId, promises) => {
/******/ 		if(__webpack_require__.o(chunkMapping, chunkId)) {
/******/ 			chunkMapping[chunkId].forEach((id) => {
/******/ 				var getScope = __webpack_require__.R;
/******/ 				if(!getScope) getScope = [];
/******/ 				var data = idToExternalAndNameMapping[id];
/******/ 				if(getScope.indexOf(data) >= 0) return;
/******/ 				getScope.push(data);
/******/ 				if(data.p) return promises.push(data.p);
/******/ 				var onError = (error) => {
/******/ 					if(!error) error = new Error("Container missing");
/******/ 					if(typeof error.message === "string")
/******/ 						error.message += '\nwhile loading "' + data[1] + '" from ' + data[2];
/******/ 					__webpack_require__.m[id] = () => {
/******/ 						throw error;
/******/ 					}
/******/ 					data.p = 0;
/******/ 				};
/******/ 				var handleFunction = (fn, arg1, arg2, d, next, first) => {
/******/ 					try {
/******/ 						var promise = fn(arg1, arg2);
/******/ 						if(promise && promise.then) {
/******/ 							var p = promise.then((result) => (next(result, d)), onError);
/******/ 							if(first) promises.push(data.p = p); else return p;
/******/ 						} else {
/******/ 							return next(promise, d, first);
/******/ 						}
/******/ 					} catch(error) {
/******/ 						onError(error);
/******/ 					}
/******/ 				}
/******/ 				var onExternal = (external, _, first) => (external ? handleFunction(__webpack_require__.I, data[0], 0, external, onInitialized, first) : onError());
/******/ 				var onInitialized = (_, external, first) => (handleFunction(external.get, data[1], getScope, 0, onFactory, first));
/******/ 				var onFactory = (factory) => {
/******/ 					data.p = 1;
/******/ 					__webpack_require__.m[id] = (module) => {
/******/ 						module.exports = factory();
/******/ 					}
/******/ 				};
/******/ 				handleFunction(__webpack_require__, data[2], 0, 0, onExternal, 1);
/******/ 			});
/******/ 		}
/******/ 	}
/******/ })();
/******/ 
/******/ /* webpack/runtime/sharing */
/******/ (() => {
/******/ 	__webpack_require__.S = {};
/******/ 	var initPromises = {};
/******/ 	var initTokens = {};
/******/ 	__webpack_require__.I = (name, initScope) => {
/******/ 		if(!initScope) initScope = [];
/******/ 		// handling circular init calls
/******/ 		var initToken = initTokens[name];
/******/ 		if(!initToken) initToken = initTokens[name] = {};
/******/ 		if(initScope.indexOf(initToken) >= 0) return;
/******/ 		initScope.push(initToken);
/******/ 		// only runs once
/******/ 		if(initPromises[name]) return initPromises[name];
/******/ 		// creates a new share scope if needed
/******/ 		if(!__webpack_require__.o(__webpack_require__.S, name)) __webpack_require__.S[name] = {};
/******/ 		// runs all init snippets from all modules reachable
/******/ 		var scope = __webpack_require__.S[name];
/******/ 		var warn = (msg) => (typeof console !== "undefined" && console.warn && console.warn(msg));
/******/ 		var uniqueName = "shell";
/******/ 		var register = (name, version, factory, eager) => {
/******/ 			var versions = scope[name] = scope[name] || {};
/******/ 			var activeVersion = versions[version];
/******/ 			if(!activeVersion || (!activeVersion.loaded && (!eager != !activeVersion.eager ? eager : uniqueName > activeVersion.from))) versions[version] = { get: factory, from: uniqueName, eager: !!eager };
/******/ 		};
/******/ 		var initExternal = (id) => {
/******/ 			var handleError = (err) => (warn("Initialization of sharing external failed: " + err));
/******/ 			try {
/******/ 				var module = __webpack_require__(id);
/******/ 				if(!module) return;
/******/ 				var initFn = (module) => (module && module.init && module.init(__webpack_require__.S[name], initScope))
/******/ 				if(module.then) return promises.push(module.then(initFn, handleError));
/******/ 				var initResult = initFn(module);
/******/ 				if(initResult && initResult.then) return promises.push(initResult['catch'](handleError));
/******/ 			} catch(err) { handleError(err); }
/******/ 		}
/******/ 		var promises = [];
/******/ 		switch(name) {
/******/ 			case "default": {
/******/ 				register("@angular/animations/browser", "16.0.1", () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_angular_core_angular_core"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_animations_angular_animations"), __webpack_require__.e("default-node_modules_angular_animations_fesm2022_browser_mjs")]).then(() => (() => (__webpack_require__(/*! ./node_modules/@angular/animations/fesm2022/browser.mjs */ 2571))))));
/******/ 				register("@angular/animations", "16.0.1", () => (__webpack_require__.e("node_modules_angular_animations_fesm2022_animations_mjs").then(() => (() => (__webpack_require__(/*! ./node_modules/@angular/animations/fesm2022/animations.mjs */ 2223))))));
/******/ 				register("@angular/cdk/a11y", "16.0.1", () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_angular_core_angular_core"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_rxjs"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_operators_rxjs_operators"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_common_angular_common"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_coercion_angular_cdk_coercion"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_platform_angular_cdk_platform"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_keycodes_angular_cdk_keycodes"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_observers_angular_cdk_observers"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_a11y_mjs")]).then(() => (() => (__webpack_require__(/*! ./node_modules/@angular/cdk/fesm2022/a11y.mjs */ 6958))))));
/******/ 				register("@angular/cdk/bidi", "16.0.1", () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_angular_core_angular_core"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_common_angular_common"), __webpack_require__.e("common")]).then(() => (() => (__webpack_require__(/*! ./node_modules/@angular/cdk/fesm2022/bidi.mjs */ 4564))))));
/******/ 				register("@angular/cdk/coercion", "16.0.1", () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_angular_core_angular_core"), __webpack_require__.e("common")]).then(() => (() => (__webpack_require__(/*! ./node_modules/@angular/cdk/fesm2022/coercion.mjs */ 867))))));
/******/ 				register("@angular/cdk/collections", "16.0.1", () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_angular_core_angular_core"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_rxjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_collections_mjs")]).then(() => (() => (__webpack_require__(/*! ./node_modules/@angular/cdk/fesm2022/collections.mjs */ 5778))))));
/******/ 				register("@angular/cdk/dialog", "16.0.1", () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_angular_core_angular_core"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_rxjs"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_operators_rxjs_operators"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_common_angular_common"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_platform_angular_cdk_platform"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_bidi_angular_cdk_bidi"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_a11y_angular_cdk_a11y"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_keycodes_angular_cdk_keycodes"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_portal_angular_cdk_portal"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_overlay_angular_cdk_overlay"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_dialog_mjs")]).then(() => (() => (__webpack_require__(/*! ./node_modules/@angular/cdk/fesm2022/dialog.mjs */ 5598))))));
/******/ 				register("@angular/cdk/drag-drop", "16.0.1", () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_angular_core_angular_core"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_rxjs"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_operators_rxjs_operators"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_common_angular_common"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_coercion_angular_cdk_coercion"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_platform_angular_cdk_platform"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_bidi_angular_cdk_bidi"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_a11y_angular_cdk_a11y"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_scrolling_angular_cdk_scrolling"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_drag-drop_mjs")]).then(() => (() => (__webpack_require__(/*! ./node_modules/@angular/cdk/fesm2022/drag-drop.mjs */ 808))))));
/******/ 				register("@angular/cdk/keycodes", "16.0.1", () => (__webpack_require__.e("node_modules_angular_cdk_fesm2022_keycodes_mjs").then(() => (() => (__webpack_require__(/*! ./node_modules/@angular/cdk/fesm2022/keycodes.mjs */ 4387))))));
/******/ 				register("@angular/cdk/layout", "16.0.1", () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_angular_core_angular_core"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_rxjs"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_operators_rxjs_operators"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_coercion_angular_cdk_coercion"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_platform_angular_cdk_platform"), __webpack_require__.e("common")]).then(() => (() => (__webpack_require__(/*! ./node_modules/@angular/cdk/fesm2022/layout.mjs */ 919))))));
/******/ 				register("@angular/cdk/observers", "16.0.1", () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_angular_core_angular_core"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_rxjs"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_operators_rxjs_operators"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_coercion_angular_cdk_coercion"), __webpack_require__.e("common")]).then(() => (() => (__webpack_require__(/*! ./node_modules/@angular/cdk/fesm2022/observers.mjs */ 8577))))));
/******/ 				register("@angular/cdk/overlay", "16.0.1", () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_angular_core_angular_core"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_rxjs"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_operators_rxjs_operators"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_common_angular_common"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_coercion_angular_cdk_coercion"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_platform_angular_cdk_platform"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_bidi_angular_cdk_bidi"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_keycodes_angular_cdk_keycodes"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_scrolling_angular_cdk_scrolling"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_portal_angular_cdk_portal"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_overlay_mjs")]).then(() => (() => (__webpack_require__(/*! ./node_modules/@angular/cdk/fesm2022/overlay.mjs */ 2778))))));
/******/ 				register("@angular/cdk/platform", "16.0.1", () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_angular_core_angular_core"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_common_angular_common"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_platform_mjs")]).then(() => (() => (__webpack_require__(/*! ./node_modules/@angular/cdk/fesm2022/platform.mjs */ 5712))))));
/******/ 				register("@angular/cdk/portal", "16.0.1", () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_angular_core_angular_core"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_common_angular_common"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_portal_mjs")]).then(() => (() => (__webpack_require__(/*! ./node_modules/@angular/cdk/fesm2022/portal.mjs */ 2035))))));
/******/ 				register("@angular/cdk/scrolling", "16.0.1", () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_angular_core_angular_core"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_rxjs"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_operators_rxjs_operators"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_common_angular_common"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_coercion_angular_cdk_coercion"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_platform_angular_cdk_platform"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_bidi_angular_cdk_bidi"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_scrolling_mjs")]).then(() => (() => (__webpack_require__(/*! ./node_modules/@angular/cdk/fesm2022/scrolling.mjs */ 3947))))));
/******/ 				register("@angular/cdk/text-field", "16.0.1", () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_angular_core_angular_core"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_rxjs"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_operators_rxjs_operators"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_common_angular_common"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_coercion_angular_cdk_coercion"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_platform_angular_cdk_platform"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_text-field_mjs")]).then(() => (() => (__webpack_require__(/*! ./node_modules/@angular/cdk/fesm2022/text-field.mjs */ 264))))));
/******/ 				register("@angular/cdk", "16.0.1", () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_angular_core_angular_core"), __webpack_require__.e("common")]).then(() => (() => (__webpack_require__(/*! ./node_modules/@angular/cdk/fesm2022/cdk.mjs */ 6346))))));
/******/ 				register("@angular/common/http", "16.0.1", () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_angular_core_angular_core"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_rxjs"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_operators_rxjs_operators"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_common_angular_common"), __webpack_require__.e("default-node_modules_angular_common_fesm2022_http_mjs")]).then(() => (() => (__webpack_require__(/*! ./node_modules/@angular/common/fesm2022/http.mjs */ 3765))))));
/******/ 				register("@angular/common", "16.0.1", () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_angular_core_angular_core"), __webpack_require__.e("default-node_modules_angular_common_fesm2022_common_mjs")]).then(() => (() => (__webpack_require__(/*! ./node_modules/@angular/common/fesm2022/common.mjs */ 6477))))));
/******/ 				register("@angular/core/rxjs-interop", "16.0.1", () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_angular_core_angular_core"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_rxjs"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_operators_rxjs_operators"), __webpack_require__.e("default-node_modules_angular_core_fesm2022_rxjs-interop_mjs")]).then(() => (() => (__webpack_require__(/*! ./node_modules/@angular/core/fesm2022/rxjs-interop.mjs */ 188))))));
/******/ 				register("@angular/core", "16.0.1", () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_rxjs_rxjs"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_operators_rxjs_operators"), __webpack_require__.e("node_modules_angular_core_fesm2022_core_mjs")]).then(() => (() => (__webpack_require__(/*! ./node_modules/@angular/core/fesm2022/core.mjs */ 6839))))));
/******/ 				register("@angular/material/button", "16.0.1", () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_angular_core_angular_core"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_common_angular_common"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_coercion_angular_cdk_coercion"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_platform_angular_cdk_platform"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_material_core_angular_material_core"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_platform-browser_animations_angular_platform--1f5ace"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_a11y_angular_cdk_a11y"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_button_mjs")]).then(() => (() => (__webpack_require__(/*! ./node_modules/@angular/material/fesm2022/button.mjs */ 3677))))));
/******/ 				register("@angular/material/core", "16.0.1", () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_angular_core_angular_core"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_rxjs"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_operators_rxjs_operators"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_common_angular_common"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_coercion_angular_cdk_coercion"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_platform_angular_cdk_platform"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_bidi_angular_cdk_bidi"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_platform-browser_animations_angular_platform--1f5ace"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_a11y_angular_cdk_a11y"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_keycodes_angular_cdk_keycodes"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_core_mjs")]).then(() => (() => (__webpack_require__(/*! ./node_modules/@angular/material/fesm2022/core.mjs */ 443))))));
/******/ 				register("@angular/material/dialog", "16.0.1", () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_angular_core_angular_core"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_rxjs"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_operators_rxjs_operators"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_common_angular_common"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_coercion_angular_cdk_coercion"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_material_core_angular_material_core"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_platform-browser_animations_angular_platform--1f5ace"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_a11y_angular_cdk_a11y"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_keycodes_angular_cdk_keycodes"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_animations_angular_animations"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_portal_angular_cdk_portal"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_overlay_angular_cdk_overlay"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_dialog_mjs")]).then(() => (() => (__webpack_require__(/*! ./node_modules/@angular/material/fesm2022/dialog.mjs */ 7486))))));
/******/ 				register("@angular/material/form-field", "16.0.1", () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_angular_core_angular_core"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_rxjs"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_operators_rxjs_operators"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_common_angular_common"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_coercion_angular_cdk_coercion"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_platform_angular_cdk_platform"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_bidi_angular_cdk_bidi"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_material_core_angular_material_core"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_platform-browser_animations_angular_platform--1f5ace"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_animations_angular_animations"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_observers_angular_cdk_observers"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_form-field_mjs")]).then(() => (() => (__webpack_require__(/*! ./node_modules/@angular/material/fesm2022/form-field.mjs */ 750))))));
/******/ 				register("@angular/material/icon", "16.0.1", () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_angular_core_angular_core"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_rxjs"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_operators_rxjs_operators"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_common_angular_common"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_coercion_angular_cdk_coercion"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_material_core_angular_material_core"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_platform-browser_angular_platform-browser"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_common_http_angular_common_http"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_icon_mjs")]).then(() => (() => (__webpack_require__(/*! ./node_modules/@angular/material/fesm2022/icon.mjs */ 9941))))));
/******/ 				register("@angular/material/input", "16.0.1", () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_angular_core_angular_core"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_rxjs"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_operators_rxjs_operators"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_common_angular_common"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_coercion_angular_cdk_coercion"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_platform_angular_cdk_platform"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_material_core_angular_material_core"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_material_form-field_angular_material_form-fie-e8d221"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_input_mjs")]).then(() => (() => (__webpack_require__(/*! ./node_modules/@angular/material/fesm2022/input.mjs */ 322))))));
/******/ 				register("@angular/platform-browser/animations", "16.0.1", () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_angular_core_angular_core"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_common_angular_common"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_animations_angular_animations"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_platform-browser_angular_platform-browser"), __webpack_require__.e("default-node_modules_angular_platform-browser_fesm2022_animations_mjs")]).then(() => (() => (__webpack_require__(/*! ./node_modules/@angular/platform-browser/fesm2022/animations.mjs */ 9240))))));
/******/ 				register("@angular/platform-browser", "16.0.1", () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_angular_core_angular_core"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_common_angular_common"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_common_http_angular_common_http"), __webpack_require__.e("default-node_modules_angular_platform-browser_fesm2022_platform-browser_mjs")]).then(() => (() => (__webpack_require__(/*! ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs */ 2512))))));
/******/ 				register("@angular/router", "16.0.1", () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_angular_core_angular_core"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_rxjs"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_operators_rxjs_operators"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_common_angular_common"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_platform-browser_angular_platform-browser"), __webpack_require__.e("default-node_modules_angular_router_fesm2022_router_mjs")]).then(() => (() => (__webpack_require__(/*! ./node_modules/@angular/router/fesm2022/router.mjs */ 6679))))));
/******/ 				register("@kanbanboard/shared/board/data-access", "0.0.0", () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_angular_core_angular_core"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_rxjs"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_common_angular_common"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_common_http_angular_common_http"), __webpack_require__.e("default-webpack_sharing_consume_default_ngrx_store_ngrx_store"), __webpack_require__.e("default-webpack_sharing_consume_default_ngrx_entity_ngrx_entity"), __webpack_require__.e("default-webpack_sharing_consume_default_ngrx_effects_ngrx_effects"), __webpack_require__.e("default-libs_shared_board_data-access_src_index_ts")]).then(() => (() => (__webpack_require__(/*! ./libs/shared/board/data-access/src/index.ts */ 9889))))));
/******/ 				register("@kanbanboard/shared/common/data-access", "0.0.0", () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_angular_core_angular_core"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_rxjs"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_common_angular_common"), __webpack_require__.e("default-webpack_sharing_consume_default_ngrx_store_ngrx_store"), __webpack_require__.e("default-webpack_sharing_consume_default_ngrx_entity_ngrx_entity"), __webpack_require__.e("default-webpack_sharing_consume_default_ngrx_effects_ngrx_effects"), __webpack_require__.e("common")]).then(() => (() => (__webpack_require__(/*! ./libs/shared/common/data-access/src/index.ts */ 2539))))));
/******/ 				register("@kanbanboard/shared/common/ui", "0.0.0", () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_angular_core_angular_core"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_rxjs"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_operators_rxjs_operators"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_common_angular_common"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_material_form-field_angular_material_form-fie-e8d221"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_material_input_angular_material_input"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_material_dialog_angular_material_dialog"), __webpack_require__.e("default-webpack_sharing_consume_default_kanbanboard_shared_ui-material_kanbanboard_shared_ui--8ab55f"), __webpack_require__.e("common")]).then(() => (() => (__webpack_require__(/*! ./libs/shared/common/ui/src/index.ts */ 1779))))));
/******/ 				register("@kanbanboard/shared/ui-material", "0.0.0", () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_angular_core_angular_core"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_common_angular_common"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_material_input_angular_material_input"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_material_button_angular_material_button-webpa-e6b60c"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_material_dialog_angular_material_dialog"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_drag-drop_angular_cdk_drag-drop"), __webpack_require__.e("common")]).then(() => (() => (__webpack_require__(/*! ./libs/shared/ui-material/src/index.ts */ 261))))));
/******/ 				register("@ngrx/effects", "16.0.0", () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_angular_core_angular_core"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_rxjs"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_operators_rxjs_operators"), __webpack_require__.e("default-webpack_sharing_consume_default_ngrx_store_ngrx_store"), __webpack_require__.e("default-node_modules_ngrx_effects_fesm2022_ngrx-effects_mjs")]).then(() => (() => (__webpack_require__(/*! ./node_modules/@ngrx/effects/fesm2022/ngrx-effects.mjs */ 2847))))));
/******/ 				register("@ngrx/entity", "16.0.0", () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_angular_core_angular_core"), __webpack_require__.e("default-webpack_sharing_consume_default_ngrx_store_ngrx_store"), __webpack_require__.e("default-node_modules_ngrx_entity_fesm2022_ngrx-entity_mjs")]).then(() => (() => (__webpack_require__(/*! ./node_modules/@ngrx/entity/fesm2022/ngrx-entity.mjs */ 1623))))));
/******/ 				register("@ngrx/store", "16.0.0", () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_angular_core_angular_core"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_rxjs"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_operators_rxjs_operators"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_core_rxjs-interop_angular_core_rxjs-interop"), __webpack_require__.e("default-node_modules_ngrx_store_fesm2022_ngrx-store_mjs")]).then(() => (() => (__webpack_require__(/*! ./node_modules/@ngrx/store/fesm2022/ngrx-store.mjs */ 4307))))));
/******/ 				register("rxjs/operators", "7.8.1", () => (Promise.all([__webpack_require__.e("default-node_modules_rxjs_dist_esm_internal_operators_auditTime_js-node_modules_rxjs_dist_esm-9f2bd5"), __webpack_require__.e("node_modules_rxjs_dist_esm_operators_index_js")]).then(() => (() => (__webpack_require__(/*! ./node_modules/rxjs/dist/esm/operators/index.js */ 9768))))));
/******/ 				register("rxjs", "7.8.1", () => (Promise.all([__webpack_require__.e("default-node_modules_rxjs_dist_esm_internal_operators_auditTime_js-node_modules_rxjs_dist_esm-9f2bd5"), __webpack_require__.e("node_modules_rxjs_dist_esm_index_js")]).then(() => (() => (__webpack_require__(/*! ./node_modules/rxjs/dist/esm/index.js */ 7288))))));
/******/ 				initExternal(6057);
/******/ 			}
/******/ 			break;
/******/ 		}
/******/ 		if(!promises.length) return initPromises[name] = 1;
/******/ 		return initPromises[name] = Promise.all(promises).then(() => (initPromises[name] = 1));
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/trusted types policy */
/******/ (() => {
/******/ 	var policy;
/******/ 	__webpack_require__.tt = () => {
/******/ 		// Create Trusted Type policy if Trusted Types are available and the policy doesn't exist yet.
/******/ 		if (policy === undefined) {
/******/ 			policy = {
/******/ 				createScriptURL: (url) => (url)
/******/ 			};
/******/ 			if (typeof trustedTypes !== "undefined" && trustedTypes.createPolicy) {
/******/ 				policy = trustedTypes.createPolicy("angular#bundler", policy);
/******/ 			}
/******/ 		}
/******/ 		return policy;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/trusted types script url */
/******/ (() => {
/******/ 	__webpack_require__.tu = (url) => (__webpack_require__.tt().createScriptURL(url));
/******/ })();
/******/ 
/******/ /* webpack/runtime/publicPath */
/******/ (() => {
/******/ 	var scriptUrl;
/******/ 	if (typeof import.meta.url === "string") scriptUrl = import.meta.url
/******/ 	// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 	// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 	if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 	scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 	__webpack_require__.p = scriptUrl;
/******/ })();
/******/ 
/******/ /* webpack/runtime/consumes */
/******/ (() => {
/******/ 	var parseVersion = (str) => {
/******/ 		// see webpack/lib/util/semver.js for original code
/******/ 		var p=p=>{return p.split(".").map((p=>{return+p==p?+p:p}))},n=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(str),r=n[1]?p(n[1]):[];return n[2]&&(r.length++,r.push.apply(r,p(n[2]))),n[3]&&(r.push([]),r.push.apply(r,p(n[3]))),r;
/******/ 	}
/******/ 	var versionLt = (a, b) => {
/******/ 		// see webpack/lib/util/semver.js for original code
/******/ 		a=parseVersion(a),b=parseVersion(b);for(var r=0;;){if(r>=a.length)return r<b.length&&"u"!=(typeof b[r])[0];var e=a[r],n=(typeof e)[0];if(r>=b.length)return"u"==n;var t=b[r],f=(typeof t)[0];if(n!=f)return"o"==n&&"n"==f||("s"==f||"u"==n);if("o"!=n&&"u"!=n&&e!=t)return e<t;r++}
/******/ 	}
/******/ 	var rangeToString = (range) => {
/******/ 		// see webpack/lib/util/semver.js for original code
/******/ 		var r=range[0],n="";if(1===range.length)return"*";if(r+.5){n+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var e=1,a=1;a<range.length;a++){e--,n+="u"==(typeof(t=range[a]))[0]?"-":(e>0?".":"")+(e=2,t)}return n}var g=[];for(a=1;a<range.length;a++){var t=range[a];g.push(0===t?"not("+o()+")":1===t?"("+o()+" || "+o()+")":2===t?g.pop()+" "+g.pop():rangeToString(t))}return o();function o(){return g.pop().replace(/^\((.+)\)$/,"$1")}
/******/ 	}
/******/ 	var satisfy = (range, version) => {
/******/ 		// see webpack/lib/util/semver.js for original code
/******/ 		if(0 in range){version=parseVersion(version);var e=range[0],r=e<0;r&&(e=-e-1);for(var n=0,i=1,a=!0;;i++,n++){var f,s,g=i<range.length?(typeof range[i])[0]:"";if(n>=version.length||"o"==(s=(typeof(f=version[n]))[0]))return!a||("u"==g?i>e&&!r:""==g!=r);if("u"==s){if(!a||"u"!=g)return!1}else if(a)if(g==s)if(i<=e){if(f!=range[i])return!1}else{if(r?f>range[i]:f<range[i])return!1;f!=range[i]&&(a=!1)}else if("s"!=g&&"n"!=g){if(r||i<=e)return!1;a=!1,i--}else{if(i<=e||s<g!=r)return!1;a=!1}else"s"!=g&&"n"!=g&&(a=!1,i--)}}var t=[],o=t.pop.bind(t);for(n=1;n<range.length;n++){var u=range[n];t.push(1==u?o()|o():2==u?o()&o():u?satisfy(u,version):!o())}return!!o();
/******/ 	}
/******/ 	var ensureExistence = (scopeName, key) => {
/******/ 		var scope = __webpack_require__.S[scopeName];
/******/ 		if(!scope || !__webpack_require__.o(scope, key)) throw new Error("Shared module " + key + " doesn't exist in shared scope " + scopeName);
/******/ 		return scope;
/******/ 	};
/******/ 	var findVersion = (scope, key) => {
/******/ 		var versions = scope[key];
/******/ 		var key = Object.keys(versions).reduce((a, b) => {
/******/ 			return !a || versionLt(a, b) ? b : a;
/******/ 		}, 0);
/******/ 		return key && versions[key]
/******/ 	};
/******/ 	var findSingletonVersionKey = (scope, key) => {
/******/ 		var versions = scope[key];
/******/ 		return Object.keys(versions).reduce((a, b) => {
/******/ 			return !a || (!versions[a].loaded && versionLt(a, b)) ? b : a;
/******/ 		}, 0);
/******/ 	};
/******/ 	var getInvalidSingletonVersionMessage = (scope, key, version, requiredVersion) => {
/******/ 		return "Unsatisfied version " + version + " from " + (version && scope[key][version].from) + " of shared singleton module " + key + " (required " + rangeToString(requiredVersion) + ")"
/******/ 	};
/******/ 	var getSingleton = (scope, scopeName, key, requiredVersion) => {
/******/ 		var version = findSingletonVersionKey(scope, key);
/******/ 		return get(scope[key][version]);
/******/ 	};
/******/ 	var getSingletonVersion = (scope, scopeName, key, requiredVersion) => {
/******/ 		var version = findSingletonVersionKey(scope, key);
/******/ 		if (!satisfy(requiredVersion, version)) typeof console !== "undefined" && console.warn && console.warn(getInvalidSingletonVersionMessage(scope, key, version, requiredVersion));
/******/ 		return get(scope[key][version]);
/******/ 	};
/******/ 	var getStrictSingletonVersion = (scope, scopeName, key, requiredVersion) => {
/******/ 		var version = findSingletonVersionKey(scope, key);
/******/ 		if (!satisfy(requiredVersion, version)) throw new Error(getInvalidSingletonVersionMessage(scope, key, version, requiredVersion));
/******/ 		return get(scope[key][version]);
/******/ 	};
/******/ 	var findValidVersion = (scope, key, requiredVersion) => {
/******/ 		var versions = scope[key];
/******/ 		var key = Object.keys(versions).reduce((a, b) => {
/******/ 			if (!satisfy(requiredVersion, b)) return a;
/******/ 			return !a || versionLt(a, b) ? b : a;
/******/ 		}, 0);
/******/ 		return key && versions[key]
/******/ 	};
/******/ 	var getInvalidVersionMessage = (scope, scopeName, key, requiredVersion) => {
/******/ 		var versions = scope[key];
/******/ 		return "No satisfying version (" + rangeToString(requiredVersion) + ") of shared module " + key + " found in shared scope " + scopeName + ".\n" +
/******/ 			"Available versions: " + Object.keys(versions).map((key) => {
/******/ 			return key + " from " + versions[key].from;
/******/ 		}).join(", ");
/******/ 	};
/******/ 	var getValidVersion = (scope, scopeName, key, requiredVersion) => {
/******/ 		var entry = findValidVersion(scope, key, requiredVersion);
/******/ 		if(entry) return get(entry);
/******/ 		throw new Error(getInvalidVersionMessage(scope, scopeName, key, requiredVersion));
/******/ 	};
/******/ 	var warnInvalidVersion = (scope, scopeName, key, requiredVersion) => {
/******/ 		typeof console !== "undefined" && console.warn && console.warn(getInvalidVersionMessage(scope, scopeName, key, requiredVersion));
/******/ 	};
/******/ 	var get = (entry) => {
/******/ 		entry.loaded = 1;
/******/ 		return entry.get()
/******/ 	};
/******/ 	var init = (fn) => (function(scopeName, a, b, c) {
/******/ 		var promise = __webpack_require__.I(scopeName);
/******/ 		if (promise && promise.then) return promise.then(fn.bind(fn, scopeName, __webpack_require__.S[scopeName], a, b, c));
/******/ 		return fn(scopeName, __webpack_require__.S[scopeName], a, b, c);
/******/ 	});
/******/ 	
/******/ 	var load = /*#__PURE__*/ init((scopeName, scope, key) => {
/******/ 		ensureExistence(scopeName, key);
/******/ 		return get(findVersion(scope, key));
/******/ 	});
/******/ 	var loadFallback = /*#__PURE__*/ init((scopeName, scope, key, fallback) => {
/******/ 		return scope && __webpack_require__.o(scope, key) ? get(findVersion(scope, key)) : fallback();
/******/ 	});
/******/ 	var loadVersionCheck = /*#__PURE__*/ init((scopeName, scope, key, version) => {
/******/ 		ensureExistence(scopeName, key);
/******/ 		return get(findValidVersion(scope, key, version) || warnInvalidVersion(scope, scopeName, key, version) || findVersion(scope, key));
/******/ 	});
/******/ 	var loadSingleton = /*#__PURE__*/ init((scopeName, scope, key) => {
/******/ 		ensureExistence(scopeName, key);
/******/ 		return getSingleton(scope, scopeName, key);
/******/ 	});
/******/ 	var loadSingletonVersionCheck = /*#__PURE__*/ init((scopeName, scope, key, version) => {
/******/ 		ensureExistence(scopeName, key);
/******/ 		return getSingletonVersion(scope, scopeName, key, version);
/******/ 	});
/******/ 	var loadStrictVersionCheck = /*#__PURE__*/ init((scopeName, scope, key, version) => {
/******/ 		ensureExistence(scopeName, key);
/******/ 		return getValidVersion(scope, scopeName, key, version);
/******/ 	});
/******/ 	var loadStrictSingletonVersionCheck = /*#__PURE__*/ init((scopeName, scope, key, version) => {
/******/ 		ensureExistence(scopeName, key);
/******/ 		return getStrictSingletonVersion(scope, scopeName, key, version);
/******/ 	});
/******/ 	var loadVersionCheckFallback = /*#__PURE__*/ init((scopeName, scope, key, version, fallback) => {
/******/ 		if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 		return get(findValidVersion(scope, key, version) || warnInvalidVersion(scope, scopeName, key, version) || findVersion(scope, key));
/******/ 	});
/******/ 	var loadSingletonFallback = /*#__PURE__*/ init((scopeName, scope, key, fallback) => {
/******/ 		if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 		return getSingleton(scope, scopeName, key);
/******/ 	});
/******/ 	var loadSingletonVersionCheckFallback = /*#__PURE__*/ init((scopeName, scope, key, version, fallback) => {
/******/ 		if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 		return getSingletonVersion(scope, scopeName, key, version);
/******/ 	});
/******/ 	var loadStrictVersionCheckFallback = /*#__PURE__*/ init((scopeName, scope, key, version, fallback) => {
/******/ 		var entry = scope && __webpack_require__.o(scope, key) && findValidVersion(scope, key, version);
/******/ 		return entry ? get(entry) : fallback();
/******/ 	});
/******/ 	var loadStrictSingletonVersionCheckFallback = /*#__PURE__*/ init((scopeName, scope, key, version, fallback) => {
/******/ 		if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 		return getStrictSingletonVersion(scope, scopeName, key, version);
/******/ 	});
/******/ 	var installedModules = {};
/******/ 	var moduleToHandlerMapping = {
/******/ 		856: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/core", [2,16,0,0], () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_rxjs_rxjs"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_operators_rxjs_operators"), __webpack_require__.e("node_modules_angular_core_fesm2022_core_mjs")]).then(() => (() => (__webpack_require__(/*! @angular/core */ 6839))))))),
/******/ 		3635: () => (loadStrictSingletonVersionCheckFallback("default", "rxjs", [2,7,8,0], () => (Promise.all([__webpack_require__.e("default-node_modules_rxjs_dist_esm_internal_operators_auditTime_js-node_modules_rxjs_dist_esm-9f2bd5"), __webpack_require__.e("node_modules_rxjs_dist_esm_index_js")]).then(() => (() => (__webpack_require__(/*! rxjs */ 7288))))))),
/******/ 		5893: () => (loadStrictSingletonVersionCheckFallback("default", "rxjs/operators", [2,7,8,0], () => (Promise.all([__webpack_require__.e("default-node_modules_rxjs_dist_esm_internal_operators_auditTime_js-node_modules_rxjs_dist_esm-9f2bd5"), __webpack_require__.e("node_modules_rxjs_dist_esm_operators_index_js")]).then(() => (() => (__webpack_require__(/*! rxjs/operators */ 9768))))))),
/******/ 		2946: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/common", [2,16,0,0], () => (__webpack_require__.e("default-node_modules_angular_common_fesm2022_common_mjs").then(() => (() => (__webpack_require__(/*! @angular/common */ 6477))))))),
/******/ 		7130: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/platform-browser/animations", [2,16,0,0], () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_angular_animations_angular_animations"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_platform-browser_angular_platform-browser"), __webpack_require__.e("default-node_modules_angular_platform-browser_fesm2022_animations_mjs")]).then(() => (() => (__webpack_require__(/*! @angular/platform-browser/animations */ 9240))))))),
/******/ 		9278: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/platform-browser", [2,16,0,0], () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_angular_common_http_angular_common_http"), __webpack_require__.e("default-node_modules_angular_platform-browser_fesm2022_platform-browser_mjs")]).then(() => (() => (__webpack_require__(/*! @angular/platform-browser */ 2512))))))),
/******/ 		6564: () => (loadStrictSingletonVersionCheckFallback("default", "@ngrx/store", [1,16,0,0], () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_rxjs_rxjs"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_operators_rxjs_operators"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_core_rxjs-interop_angular_core_rxjs-interop"), __webpack_require__.e("default-node_modules_ngrx_store_fesm2022_ngrx-store_mjs")]).then(() => (() => (__webpack_require__(/*! @ngrx/store */ 4307))))))),
/******/ 		8972: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/material/icon", [1,16,0,1], () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_rxjs_rxjs"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_operators_rxjs_operators"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_coercion_angular_cdk_coercion"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_material_core_angular_material_core"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_platform-browser_angular_platform-browser"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_common_http_angular_common_http"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_icon_mjs")]).then(() => (() => (__webpack_require__(/*! @angular/material/icon */ 9941))))))),
/******/ 		4049: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/material/button", [1,16,0,1], () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_coercion_angular_cdk_coercion"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_platform_angular_cdk_platform"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_material_core_angular_material_core"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_platform-browser_animations_angular_platform--1f5ace"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_a11y_angular_cdk_a11y"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_button_mjs")]).then(() => (() => (__webpack_require__(/*! @angular/material/button */ 3677))))))),
/******/ 		6716: () => (loadStrictSingletonVersionCheckFallback("default", "@ngrx/effects", [1,16,0,0], () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_rxjs_operators_rxjs_operators"), __webpack_require__.e("default-node_modules_ngrx_effects_fesm2022_ngrx-effects_mjs")]).then(() => (() => (__webpack_require__(/*! @ngrx/effects */ 2847))))))),
/******/ 		1447: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/material/dialog", [1,16,0,1], () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_rxjs_rxjs"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_operators_rxjs_operators"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_coercion_angular_cdk_coercion"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_material_core_angular_material_core"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_platform-browser_animations_angular_platform--1f5ace"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_a11y_angular_cdk_a11y"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_keycodes_angular_cdk_keycodes"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_animations_angular_animations"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_portal_angular_cdk_portal"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_overlay_angular_cdk_overlay"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_dialog_mjs")]).then(() => (() => (__webpack_require__(/*! @angular/material/dialog */ 7486))))))),
/******/ 		9561: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/core/rxjs-interop", [2,16,0,0], () => (__webpack_require__.e("default-node_modules_angular_core_fesm2022_rxjs-interop_mjs").then(() => (() => (__webpack_require__(/*! @angular/core/rxjs-interop */ 188))))))),
/******/ 		4741: () => (loadFallback("default", "@kanbanboard/shared/ui-material", () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_angular_material_input_angular_material_input"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_material_button_angular_material_button-webpa-e6b60c"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_drag-drop_angular_cdk_drag-drop"), __webpack_require__.e("common")]).then(() => (() => (__webpack_require__(/*! @kanbanboard/shared/ui-material */ 261))))))),
/******/ 		2823: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/router", [2,16,0,0], () => (__webpack_require__.e("default-node_modules_angular_router_fesm2022_router_mjs").then(() => (() => (__webpack_require__(/*! @angular/router */ 6679))))))),
/******/ 		4645: () => (loadFallback("default", "@kanbanboard/shared/board/data-access", () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_angular_common_http_angular_common_http"), __webpack_require__.e("default-webpack_sharing_consume_default_ngrx_entity_ngrx_entity"), __webpack_require__.e("default-libs_shared_board_data-access_src_index_ts")]).then(() => (() => (__webpack_require__(/*! @kanbanboard/shared/board/data-access */ 9889))))))),
/******/ 		1433: () => (loadFallback("default", "@kanbanboard/shared/common/ui", () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_angular_material_form-field_angular_material_form-fie-e8d221"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_material_input_angular_material_input"), __webpack_require__.e("common")]).then(() => (() => (__webpack_require__(/*! @kanbanboard/shared/common/ui */ 1779))))))),
/******/ 		7332: () => (loadFallback("default", "@kanbanboard/shared/common/data-access", () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_ngrx_entity_ngrx_entity"), __webpack_require__.e("common")]).then(() => (() => (__webpack_require__(/*! @kanbanboard/shared/common/data-access */ 2539))))))),
/******/ 		2564: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/animations", [2,16,0,0], () => (__webpack_require__.e("node_modules_angular_animations_fesm2022_animations_mjs").then(() => (() => (__webpack_require__(/*! @angular/animations */ 2223))))))),
/******/ 		5333: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/cdk/coercion", [1,16,0,1], () => (__webpack_require__.e("common").then(() => (() => (__webpack_require__(/*! @angular/cdk/coercion */ 867))))))),
/******/ 		3675: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/cdk/platform", [1,16,0,1], () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_angular_common_angular_common"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_platform_mjs")]).then(() => (() => (__webpack_require__(/*! @angular/cdk/platform */ 5712))))))),
/******/ 		2069: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/cdk/keycodes", [1,16,0,1], () => (__webpack_require__.e("node_modules_angular_cdk_fesm2022_keycodes_mjs").then(() => (() => (__webpack_require__(/*! @angular/cdk/keycodes */ 4387))))))),
/******/ 		5321: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/cdk/observers", [1,16,0,1], () => (__webpack_require__.e("common").then(() => (() => (__webpack_require__(/*! @angular/cdk/observers */ 8577))))))),
/******/ 		5121: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/cdk/layout", [1,16,0,1], () => (__webpack_require__.e("common").then(() => (() => (__webpack_require__(/*! @angular/cdk/layout */ 919))))))),
/******/ 		3068: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/cdk/bidi", [1,16,0,1], () => (__webpack_require__.e("common").then(() => (() => (__webpack_require__(/*! @angular/cdk/bidi */ 4564))))))),
/******/ 		908: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/cdk/a11y", [1,16,0,1], () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_rxjs_rxjs"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_operators_rxjs_operators"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_coercion_angular_cdk_coercion"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_platform_angular_cdk_platform"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_keycodes_angular_cdk_keycodes"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_observers_angular_cdk_observers"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_a11y_mjs")]).then(() => (() => (__webpack_require__(/*! @angular/cdk/a11y */ 6958))))))),
/******/ 		8142: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/cdk/portal", [1,16,0,1], () => (__webpack_require__.e("default-node_modules_angular_cdk_fesm2022_portal_mjs").then(() => (() => (__webpack_require__(/*! @angular/cdk/portal */ 2035))))))),
/******/ 		3662: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/cdk/overlay", [1,16,0,1], () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_coercion_angular_cdk_coercion"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_platform_angular_cdk_platform"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_bidi_angular_cdk_bidi"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_scrolling_angular_cdk_scrolling"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_overlay_mjs")]).then(() => (() => (__webpack_require__(/*! @angular/cdk/overlay */ 2778))))))),
/******/ 		3168: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/cdk/scrolling", [1,16,0,1], () => (__webpack_require__.e("default-node_modules_angular_cdk_fesm2022_scrolling_mjs").then(() => (() => (__webpack_require__(/*! @angular/cdk/scrolling */ 3947))))))),
/******/ 		1382: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/cdk/collections", [1,16,0,1], () => (__webpack_require__.e("default-node_modules_angular_cdk_fesm2022_collections_mjs").then(() => (() => (__webpack_require__(/*! @angular/cdk/collections */ 5778))))))),
/******/ 		6606: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/material/core", [1,16,0,1], () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_rxjs_rxjs"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_operators_rxjs_operators"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_platform_angular_cdk_platform"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_bidi_angular_cdk_bidi"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_platform-browser_animations_angular_platform--1f5ace"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_a11y_angular_cdk_a11y"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_keycodes_angular_cdk_keycodes"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_core_mjs")]).then(() => (() => (__webpack_require__(/*! @angular/material/core */ 443))))))),
/******/ 		6298: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/cdk", [1,16,0,1], () => (__webpack_require__.e("common").then(() => (() => (__webpack_require__(/*! @angular/cdk */ 6346))))))),
/******/ 		9064: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/cdk/dialog", [1,16,0,1], () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_platform_angular_cdk_platform"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_bidi_angular_cdk_bidi"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_dialog_mjs")]).then(() => (() => (__webpack_require__(/*! @angular/cdk/dialog */ 5598))))))),
/******/ 		671: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/common/http", [2,16,0,0], () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_rxjs_rxjs"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_operators_rxjs_operators"), __webpack_require__.e("default-node_modules_angular_common_fesm2022_http_mjs")]).then(() => (() => (__webpack_require__(/*! @angular/common/http */ 3765))))))),
/******/ 		137: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/material/form-field", [1,16,0,1], () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_coercion_angular_cdk_coercion"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_platform_angular_cdk_platform"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_bidi_angular_cdk_bidi"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_material_core_angular_material_core"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_platform-browser_animations_angular_platform--1f5ace"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_animations_angular_animations"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_observers_angular_cdk_observers"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_form-field_mjs")]).then(() => (() => (__webpack_require__(/*! @angular/material/form-field */ 750))))))),
/******/ 		187: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/cdk/text-field", [1,16,0,1], () => (__webpack_require__.e("default-node_modules_angular_cdk_fesm2022_text-field_mjs").then(() => (() => (__webpack_require__(/*! @angular/cdk/text-field */ 264))))))),
/******/ 		1701: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/animations/browser", [2,16,0,0], () => (__webpack_require__.e("default-node_modules_angular_animations_fesm2022_browser_mjs").then(() => (() => (__webpack_require__(/*! @angular/animations/browser */ 2571))))))),
/******/ 		8096: () => (loadStrictSingletonVersionCheckFallback("default", "@ngrx/entity", [1,16,0,0], () => (__webpack_require__.e("default-node_modules_ngrx_entity_fesm2022_ngrx-entity_mjs").then(() => (() => (__webpack_require__(/*! @ngrx/entity */ 1623))))))),
/******/ 		666: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/material/input", [1,16,0,1], () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_rxjs_rxjs"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_operators_rxjs_operators"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_coercion_angular_cdk_coercion"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_platform_angular_cdk_platform"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_material_core_angular_material_core"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_material_form-field_angular_material_form-fie-e8d221"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_input_mjs")]).then(() => (() => (__webpack_require__(/*! @angular/material/input */ 322))))))),
/******/ 		1372: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/cdk/drag-drop", [1,16,0,1], () => (Promise.all([__webpack_require__.e("default-webpack_sharing_consume_default_rxjs_rxjs"), __webpack_require__.e("default-webpack_sharing_consume_default_rxjs_operators_rxjs_operators"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_coercion_angular_cdk_coercion"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_platform_angular_cdk_platform"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_bidi_angular_cdk_bidi"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_a11y_angular_cdk_a11y"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_cdk_scrolling_angular_cdk_scrolling"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_drag-drop_mjs")]).then(() => (() => (__webpack_require__(/*! @angular/cdk/drag-drop */ 808)))))))
/******/ 	};
/******/ 	// no consumes in initial chunks
/******/ 	var chunkMapping = {
/******/ 		"default-webpack_sharing_consume_default_angular_core_angular_core": [
/******/ 			856
/******/ 		],
/******/ 		"default-webpack_sharing_consume_default_rxjs_rxjs": [
/******/ 			3635
/******/ 		],
/******/ 		"default-webpack_sharing_consume_default_rxjs_operators_rxjs_operators": [
/******/ 			5893
/******/ 		],
/******/ 		"default-webpack_sharing_consume_default_angular_common_angular_common": [
/******/ 			2946
/******/ 		],
/******/ 		"default-webpack_sharing_consume_default_angular_platform-browser_animations_angular_platform--1f5ace": [
/******/ 			7130
/******/ 		],
/******/ 		"default-webpack_sharing_consume_default_angular_platform-browser_angular_platform-browser": [
/******/ 			9278
/******/ 		],
/******/ 		"default-webpack_sharing_consume_default_ngrx_store_ngrx_store": [
/******/ 			6564
/******/ 		],
/******/ 		"default-webpack_sharing_consume_default_angular_material_button_angular_material_button-webpa-e6b60c": [
/******/ 			8972,
/******/ 			4049
/******/ 		],
/******/ 		"default-webpack_sharing_consume_default_ngrx_effects_ngrx_effects": [
/******/ 			6716
/******/ 		],
/******/ 		"default-webpack_sharing_consume_default_angular_material_dialog_angular_material_dialog": [
/******/ 			1447
/******/ 		],
/******/ 		"default-webpack_sharing_consume_default_angular_core_rxjs-interop_angular_core_rxjs-interop": [
/******/ 			9561
/******/ 		],
/******/ 		"default-webpack_sharing_consume_default_kanbanboard_shared_ui-material_kanbanboard_shared_ui--8ab55f": [
/******/ 			4741
/******/ 		],
/******/ 		"apps_shell_src_bootstrap_ts": [
/******/ 			2823,
/******/ 			4645,
/******/ 			1433,
/******/ 			7332
/******/ 		],
/******/ 		"default-webpack_sharing_consume_default_angular_animations_angular_animations": [
/******/ 			2564
/******/ 		],
/******/ 		"default-webpack_sharing_consume_default_angular_cdk_coercion_angular_cdk_coercion": [
/******/ 			5333
/******/ 		],
/******/ 		"default-webpack_sharing_consume_default_angular_cdk_platform_angular_cdk_platform": [
/******/ 			3675
/******/ 		],
/******/ 		"default-webpack_sharing_consume_default_angular_cdk_keycodes_angular_cdk_keycodes": [
/******/ 			2069
/******/ 		],
/******/ 		"default-webpack_sharing_consume_default_angular_cdk_observers_angular_cdk_observers": [
/******/ 			5321
/******/ 		],
/******/ 		"default-node_modules_angular_cdk_fesm2022_a11y_mjs": [
/******/ 			5121
/******/ 		],
/******/ 		"default-webpack_sharing_consume_default_angular_cdk_bidi_angular_cdk_bidi": [
/******/ 			3068
/******/ 		],
/******/ 		"default-webpack_sharing_consume_default_angular_cdk_a11y_angular_cdk_a11y": [
/******/ 			908
/******/ 		],
/******/ 		"default-webpack_sharing_consume_default_angular_cdk_portal_angular_cdk_portal": [
/******/ 			8142
/******/ 		],
/******/ 		"default-webpack_sharing_consume_default_angular_cdk_overlay_angular_cdk_overlay": [
/******/ 			3662
/******/ 		],
/******/ 		"default-webpack_sharing_consume_default_angular_cdk_scrolling_angular_cdk_scrolling": [
/******/ 			3168
/******/ 		],
/******/ 		"default-node_modules_angular_cdk_fesm2022_scrolling_mjs": [
/******/ 			1382
/******/ 		],
/******/ 		"default-webpack_sharing_consume_default_angular_material_core_angular_material_core": [
/******/ 			6606
/******/ 		],
/******/ 		"default-node_modules_angular_material_fesm2022_core_mjs": [
/******/ 			6298
/******/ 		],
/******/ 		"default-node_modules_angular_material_fesm2022_dialog_mjs": [
/******/ 			9064
/******/ 		],
/******/ 		"default-webpack_sharing_consume_default_angular_common_http_angular_common_http": [
/******/ 			671
/******/ 		],
/******/ 		"default-webpack_sharing_consume_default_angular_material_form-field_angular_material_form-fie-e8d221": [
/******/ 			137
/******/ 		],
/******/ 		"default-node_modules_angular_material_fesm2022_input_mjs": [
/******/ 			187
/******/ 		],
/******/ 		"default-node_modules_angular_platform-browser_fesm2022_animations_mjs": [
/******/ 			1701
/******/ 		],
/******/ 		"default-webpack_sharing_consume_default_ngrx_entity_ngrx_entity": [
/******/ 			8096
/******/ 		],
/******/ 		"default-webpack_sharing_consume_default_angular_material_input_angular_material_input": [
/******/ 			666
/******/ 		],
/******/ 		"default-webpack_sharing_consume_default_angular_cdk_drag-drop_angular_cdk_drag-drop": [
/******/ 			1372
/******/ 		]
/******/ 	};
/******/ 	__webpack_require__.f.consumes = (chunkId, promises) => {
/******/ 		if(__webpack_require__.o(chunkMapping, chunkId)) {
/******/ 			chunkMapping[chunkId].forEach((id) => {
/******/ 				if(__webpack_require__.o(installedModules, id)) return promises.push(installedModules[id]);
/******/ 				var onFactory = (factory) => {
/******/ 					installedModules[id] = 0;
/******/ 					__webpack_require__.m[id] = (module) => {
/******/ 						delete __webpack_require__.c[id];
/******/ 						module.exports = factory();
/******/ 					}
/******/ 				};
/******/ 				var onError = (error) => {
/******/ 					delete installedModules[id];
/******/ 					__webpack_require__.m[id] = (module) => {
/******/ 						delete __webpack_require__.c[id];
/******/ 						throw error;
/******/ 					}
/******/ 				};
/******/ 				try {
/******/ 					var promise = moduleToHandlerMapping[id]();
/******/ 					if(promise.then) {
/******/ 						promises.push(installedModules[id] = promise.then(onFactory)['catch'](onError));
/******/ 					} else onFactory(promise);
/******/ 				} catch(e) { onError(e); }
/******/ 			});
/******/ 		}
/******/ 	}
/******/ })();
/******/ 
/******/ /* webpack/runtime/jsonp chunk loading */
/******/ (() => {
/******/ 	// no baseURI
/******/ 	
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/ 	
/******/ 	__webpack_require__.f.j = (chunkId, promises) => {
/******/ 			// JSONP chunk loading for javascript
/******/ 			var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 			if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 	
/******/ 				// a Promise means "currently loading".
/******/ 				if(installedChunkData) {
/******/ 					promises.push(installedChunkData[2]);
/******/ 				} else {
/******/ 					if(/^(default\-(node_modules_(angular_(c(dk_fesm2022_(a11y|collections|dialog|drag\-drop|overlay|platform|portal|scrolling|text\-field)_mjs|o(mmon_fesm2022_(common|http)_mjs|re_fesm2022_rxjs\-interop_mjs))|material_fesm2022_((butt|ic)on|core|dialog|form\-field|input)_mjs|platform\-browser_fesm2022_(animations|platform\-browser)_mjs|(animations_fesm2022_brows|router_fesm2022_rout)er_mjs)|ngrx_(effects_fesm2022_ngrx\-effects|entity_fesm2022_ngrx\-entity|store_fesm2022_ngrx\-store)_mjs|rxjs_dist_esm_internal_operators_auditTime_js\-node_modules_rxjs_dist_esm\-9f2bd5)|libs_shared_board_data\-access_src_index_ts|webpack_sharing_consume_default_angular_material_form\-field_angular_material_form\-fie\-e8d221)|node_modules_(angular_(animations_fesm2022_animations|cdk_fesm2022_keycodes|core_fesm2022_core)_mjs|rxjs_dist_esm_(|operators_)index_js)|apps_shell_src_bootstrap_ts|common|main|vendor)$/.test(chunkId)) {
/******/ 						// setup Promise in chunk cache
/******/ 						var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 						promises.push(installedChunkData[2] = promise);
/******/ 	
/******/ 						// start chunk loading
/******/ 						var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 						// create error before stack unwound to get useful stacktrace later
/******/ 						var error = new Error();
/******/ 						var loadingEnded = (event) => {
/******/ 							if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 								installedChunkData = installedChunks[chunkId];
/******/ 								if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 								if(installedChunkData) {
/******/ 									var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 									var realSrc = event && event.target && event.target.src;
/******/ 									error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 									error.name = 'ChunkLoadError';
/******/ 									error.type = errorType;
/******/ 									error.request = realSrc;
/******/ 									installedChunkData[1](error);
/******/ 								}
/******/ 							}
/******/ 						};
/******/ 						__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 					} else installedChunks[chunkId] = 0;
/******/ 				}
/******/ 			}
/******/ 	};
/******/ 	
/******/ 	// no prefetching
/******/ 	
/******/ 	// no preloaded
/******/ 	
/******/ 	// no HMR
/******/ 	
/******/ 	// no HMR manifest
/******/ 	
/******/ 	__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 	
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 		var [chunkIds, moreModules, runtime] = data;
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0;
/******/ 		if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 		}
/******/ 		if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				installedChunks[chunkId][0]();
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		return __webpack_require__.O(result);
/******/ 	}
/******/ 	
/******/ 	var chunkLoadingGlobal = self["webpackChunkshell"] = self["webpackChunkshell"] || [];
/******/ 	chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 	chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ })();
/******/ 
/************************************************************************/
/******/ 
/******/ // module cache are used so entry inlining is disabled
/******/ // startup
/******/ // Load entry module and return exports
/******/ __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__(6856)))
/******/ var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__(9071)))
/******/ __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 

//# sourceMappingURL=main.js.map