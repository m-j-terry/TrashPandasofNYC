/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Instagram.js":
/*!*************************************!*\
  !*** ./src/components/Instagram.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Instagram)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

(__webpack_require__(/*! dotenv */ "./node_modules/dotenv/lib/main.js").config)();
function Instagram() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null));
}

/***/ }),

/***/ "./src/components/NavBar.js":
/*!**********************************!*\
  !*** ./src/components/NavBar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

const NavBar = props => {
  return /*#__PURE__*/React.createElement("nav", {
    className: "NavBar"
  }, props.routes.map(_ref => {
    let {
      key,
      path
    } = _ref;
    return /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Link, {
      key: key,
      to: path
    }, key);
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);

/***/ }),

/***/ "./src/components/Sheets.js":
/*!**********************************!*\
  !*** ./src/components/Sheets.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return /*#__PURE__*/React.createElement("div", {
    className: "SheetsComponent"
  }, /*#__PURE__*/React.createElement("iframe", {
    className: "iframe",
    src: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQGM2bcNxW9mAuIU95k3llQI_n396jS7gEC-2j7huUvP8ctfU_OlkSygpK2A3uA2kjIphcQX8L_oJ6p/pubhtml"
  }));
}

/***/ }),

/***/ "./src/components/WasteFacts.js":
/*!**************************************!*\
  !*** ./src/components/WasteFacts.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WasteFacts)
/* harmony export */ });
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function WasteFacts() {
  return /*#__PURE__*/React.createElement("div", {
    className: "WasteFactsComponent"
  }, /*#__PURE__*/React.createElement("h2", null, "Putting Waste into Perspective"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    href: "https://www.janssenpmp.com/sustainability/articles/up-to-40-percent-of-food-is-wasted-before-it-reaches-the-market#:~:text=According%20to%20the%20Food%20and,not%20reach%20the%20end%20consumer."
  }, "40% of food"), " is wasted each year in the United States. But what does that look like? Where does that all go\u2014or not go? That is nearly ", /*#__PURE__*/React.createElement("a", {
    href: "https://www.rts.com/resources/guides/food-waste-america/"
  }, "60 million tons"), "\u2014120 billion pounds\u2014each year, worth ", /*#__PURE__*/React.createElement("a", {
    href: "https://www.forbes.com/sites/chloesorvino/2022/07/14/food-waste-costs-us-taxpayers-billions-of-dollars-a-year/?sh=51a4114542ea"
  }, "$400 billion"), ".", /*#__PURE__*/React.createElement("sup", {
    className: "superscript"
  }, "1"), " ", /*#__PURE__*/React.createElement("a", {
    href: "https://www.ers.usda.gov/data-products/ag-and-food-statistics-charting-the-essentials/food-security-and-nutrition-assistance/#:~:text=The%20prevalence%20of%20food%20insecurity,of%20a%20lack%20of%20resources."
  }, "12.8% of households"), /*#__PURE__*/React.createElement("sup", {
    className: "superscript"
  }, "2"), " in the US\u2014including ", /*#__PURE__*/React.createElement("a", {
    href: "https://www.feedingamerica.org/hunger-in-america/child-hunger-facts#:~:text=More%20than%2013%20million%20children,will%20get%20their%20next%20meal."
  }, "13 million children"), "\u2014are food insecure while 40% of the food resources are wasted. Hunger is not unsolvable; it is not a problem of resources but of structure."), /*#__PURE__*/React.createElement("p", null, "What about that $400 billion? Wasted food costs taxpayers ", /*#__PURE__*/React.createElement("a", {
    href: "https://www.forbes.com/sites/chloesorvino/2022/07/14/food-waste-costs-us-taxpayers-billions-of-dollars-a-year/?sh=51a4114542ea"
  }, "billions"), " each year, as corporations receive a tax-deduction for the 'cost of shrinkage' or loss of profits.", /*#__PURE__*/React.createElement("sup", {
    className: "superscript"
  }, "3"), " Produce that winds up in the landfill cannot break down properly due to a lack of oxygen and produces methane, which has a greenhouse effect ", /*#__PURE__*/React.createElement("a", {
    href: "https://energy.ec.europa.eu/topics/oil-gas-and-coal/methane-emissions_en#:~:text=In%20fact%2C%20methane's%20ability%20to,on%20a%2020%2Dyear%20timescale."
  }, "~80x more potent than that of CO2"), ". Globally, food waste accounts for ", /*#__PURE__*/React.createElement("a", {
    href: "https://www.forbes.com/sites/chloesorvino/2022/07/14/food-waste-costs-us-taxpayers-billions-of-dollars-a-year/?sh=51a4114542ea"
  }, "8% of all greenhouse gas emisions"), "."), /*#__PURE__*/React.createElement("p", null, "Moreover, the farming practices used to maintain the steady flow of food through the market has adverse effects on soil health and nutrient density in food. Monocropping depletes soil of nutrients and affects ", /*#__PURE__*/React.createElement("a", {
    href: "https://www.nhm.ac.uk/discover/soil-degradation.html#:~:text=Soil%20can%20lose%20certain%20physical,such%20as%20poor%20land%20management."
  }, "the biodiversity of microbiota"), " that play a crucial symbiotic role in fighting off pests and promoting plant growth and health. Disrupting the topsoil also diminishes the amount of fixed carbon it can store ", /*#__PURE__*/React.createElement("a", {
    href: "https://www.nhm.ac.uk/discover/soil-degradation.html#:~:text=Soil%20can%20lose%20certain%20physical,such%20as%20poor%20land%20management."
  }, "by 50-75%"), ", thereby contributing to and exacerbating the effects of climate change. In order to combat weeds and pests, farmers resort to toxic pesticides and herbicides that further damage the soil microbiome, creating a negative feedback loop."), /*#__PURE__*/React.createElement("p", null, "As of 2019, estimates say that the food industry generates ", /*#__PURE__*/React.createElement("a", {
    href: "https://www.plasticsoupfoundation.org/en/2021/12/food-production-causes-plastic-pollution/#:~:text=FAO%20estimates%20that%20in%202019,biggest%20user%2C%20up%20to%202030."
  }, "12.5 million tons of single use plastic"), " annually. Assuming an even 40% of this plastic goes to the landfill, that is 5 million tons of unnecessary plastic each year. Plastic is not 'broken down' and recycled like organic molecules; instead, it breaks apart into smaller microplastics and nanoplastics, which get into our water and food. These microplastics have been detected in blood samples in almost ", /*#__PURE__*/React.createElement("a", {
    href: "https://www.theguardian.com/environment/2022/mar/24/microplastics-found-in-human-blood-for-first-time#:~:text=Microplastic%20pollution%20has%20been%20detected,and%20may%20lodge%20in%20organs."
  }, "80% of people tested"), " and in ", /*#__PURE__*/React.createElement("a", {
    href: "https://www.theguardian.com/environment/2024/feb/27/microplastics-found-every-human-placenta-tested-study-health-impact#:~:text=The%20research%2C%20published%20in%20the,common%20plastics%20detected%2C%20after%20polyethylene."
  }, "every human placenta tested"), ". While research on ", /*#__PURE__*/React.createElement("a", {
    href: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10151227/"
  }, "the health effects of exposure to microplastics on humans"), " is still limited, research shows that high ", /*#__PURE__*/React.createElement("a", {
    href: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9205308/"
  }, "high concentrations of microplastics are harmful to smaller life forms"), "."), /*#__PURE__*/React.createElement("div", {
    className: "footnotes"
  }, /*#__PURE__*/React.createElement("h3", null, "Footnotes"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("sup", {
    className: "superscript"
  }, "1"), " The average grocer in the U.S. is estimated to waste between ", /*#__PURE__*/React.createElement("a", {
    href: "https://www.forbes.com/sites/chloesorvino/2022/07/14/food-waste-costs-us-taxpayers-billions-of-dollars-a-year/?sh=51a4114542ea"
  }, "$5,000 and $10,000"), " of food each week."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("sup", {
    className: "superscript"
  }, "2"), " The 2022 ", /*#__PURE__*/React.createElement("a", {
    href: "https://www.census.gov/library/publications/2023/demo/p60-279.html#:~:text=Highlights,and%20Table%20A%2D1)."
  }, "average annual household income was $74580"), ". That is ~ $6,215 per month; in other words, the average grocer wastes more than the average household monthly income nearly every single week of the year."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("sup", {
    className: "superscript"
  }, "3"), " Current tax law actually creates \"", /*#__PURE__*/React.createElement("a", {
    href: "https://www.forbes.com/sites/chloesorvino/2022/07/14/food-waste-costs-us-taxpayers-billions-of-dollars-a-year/?sh=51a4114542ea"
  }, "a powerful disincentive"), "\" to improving or eradicating this problem.")));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ "./src/router/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.getElementById("app"));
root.render( /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null, /*#__PURE__*/React.createElement(_router__WEBPACK_IMPORTED_MODULE_2__["default"], null)));

/***/ }),

/***/ "./src/pages/About.js":
/*!****************************!*\
  !*** ./src/pages/About.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ About)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Sheets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Sheets */ "./src/components/Sheets.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function About(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "AboutPage"
  }, /*#__PURE__*/React.createElement("center", null, /*#__PURE__*/React.createElement("h1", null, "This is the ", props.page, " page"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Trash Pandas Waste Spreadsheet"), /*#__PURE__*/React.createElement(_components_Sheets__WEBPACK_IMPORTED_MODULE_1__["default"], null))));
}

/***/ }),

/***/ "./src/pages/Contact.js":
/*!******************************!*\
  !*** ./src/pages/Contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Contact)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Instagram__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Instagram */ "./src/components/Instagram.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function Contact(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ContactPage"
  }, /*#__PURE__*/React.createElement("center", null, /*#__PURE__*/React.createElement("h1", null, "This is the ", props.page, " page"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Trash Pandas Instagram"), /*#__PURE__*/React.createElement(_components_Instagram__WEBPACK_IMPORTED_MODULE_1__["default"], null))));
}

/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_WasteFacts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/WasteFacts */ "./src/components/WasteFacts.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function Home(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "HomePage"
  }, /*#__PURE__*/React.createElement("center", null, /*#__PURE__*/React.createElement("div", {
    className: "background"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://media.istockphoto.com/id/838559072/photo/new-york-skyline-at-sunset.jpg?s=612x612&w=0&k=20&c=HTV4d0kBuAHQjOjfORFv9BJmnNjM359-acMFe83zoIc="
  })), /*#__PURE__*/React.createElement("h1", null, "Trash Pandas NYC"), /*#__PURE__*/React.createElement(_components_WasteFacts__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
}

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/NavBar */ "./src/components/NavBar.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ "./src/router/routes.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



const AppRouter = () => {
  return /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.BrowserRouter, null, /*#__PURE__*/React.createElement(_components_NavBar__WEBPACK_IMPORTED_MODULE_0__["default"], {
    routes: _routes__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Routes, null, _routes__WEBPACK_IMPORTED_MODULE_1__["default"].map(_ref => {
    let {
      Component,
      key,
      path
    } = _ref;
    return /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {
      key: key,
      path: path,
      element: /*#__PURE__*/React.createElement(Component, {
        page: key
      })
    });
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppRouter);

/***/ }),

/***/ "./src/router/routes.js":
/*!******************************!*\
  !*** ./src/router/routes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pages_About__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/About */ "./src/pages/About.js");
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/Home */ "./src/pages/Home.js");
/* harmony import */ var _pages_Contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/Contact */ "./src/pages/Contact.js");



const routes = [{
  Component: _pages_Contact__WEBPACK_IMPORTED_MODULE_2__["default"],
  key: 'Contact',
  path: '/contact'
}, {
  Component: _pages_Home__WEBPACK_IMPORTED_MODULE_1__["default"],
  key: 'Home',
  path: '/'
}, {
  Component: _pages_About__WEBPACK_IMPORTED_MODULE_0__["default"],
  key: 'About',
  path: '/about'
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);

/***/ }),

/***/ "?a0c3":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"App": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbig_poppa_code_react_starter_kit"] = self["webpackChunkbig_poppa_code_react_starter_kit"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_dotenv_lib_main_js-node_modules_react-dom_client_js-node_modules_react-r-348d40"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=App.3814db6a07cd5953b4791d570d436577.js.map