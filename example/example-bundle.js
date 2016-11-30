/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _reactNmap = __webpack_require__(1);
	
	var _reactNmap2 = _interopRequireDefault(_reactNmap);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//Static data
	/*
	const data = [
	    {id: 1,x: 10, y: 10,weight: 1,class: 1},
	    {id: 2,x: 20, y: 20,weight: 1,class: 2},
	    {id: 3,x: 30, y: 30,weight: 1,class: 3},
	    {id: 4,x: 40, y: 40,weight: 1,class: 4},
	    {id: 5,x: 50, y: 50,weight: 1,class: 5}
	];
	ReactDOM.render(<Nmap data={data} width="1000" height="600" svgId="nmap" method="ac" />,document.getElementById('app'));
	*/
	
	//Data from CSV
	d3.csv("data/configuration01.csv", function (error, data) {
	    ReactDOM.render(React.createElement(_reactNmap2.default, { data: data, width: "1000", height: "600", svgId: "nmap", method: "ac" }), document.getElementById('app'));
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Nmap = function (_React$Component) {
	    _inherits(Nmap, _React$Component);
	
	    function Nmap(props) {
	        _classCallCheck(this, Nmap);
	
	        return _possibleConstructorReturn(this, (Nmap.__proto__ || Object.getPrototypeOf(Nmap)).call(this, props));
	    }
	
	    _createClass(Nmap, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var data = this.props.data;
	            var elements = [];
	            for (var i = 0; i < data.length; i++) {
	                elements.push(new nmap_element({
	                    id: data[i].id,
	                    x: data[i].x,
	                    y: data[i].y,
	                    weight: "weight" in data[i] ? data[i].weight : 1,
	                    klass: "class" in data[i] ? data[i].class : 1
	                }));
	            }
	            var map = new nmap({ x: 0, y: 0, width: parseInt(this.props.width), height: parseInt(this.props.height) });
	            var nmapData = null;
	            if (this.props.method == "ew") {
	                nmapData = map.equalWeight({ elements: elements });
	            } else {
	                nmapData = map.alternateCut({ elements: elements });
	            }
	
	            var svg = d3.select("#" + this.props.svgId);
	            svg.select("g.nmap").remove();
	            svg.append("g").attr("class", "nmap").selectAll("rect").data(nmapData).enter().append("rect").attr("x", function (d) {
	                return d.attr().x;
	            }).attr("y", function (d) {
	                return d.attr().y;
	            }).attr("fill", function (d) {
	                return "rgba(128,128," + Math.round(parseFloat(d.attr().element.attr().klass) * 255) + ",1)";
	            }).attr("width", function (d) {
	                return d.attr().width;
	            }).attr("height", function (d) {
	                return d.attr().height;
	            });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return React.createElement("svg", { id: this.props.svgId, width: this.props.width, height: this.props.height, method: "ew" });
	        }
	    }]);
	
	    return Nmap;
	}(React.Component);
	
	exports.default = Nmap;

/***/ }
/******/ ]);
//# sourceMappingURL=example-bundle.js.map