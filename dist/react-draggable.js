(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["ReactDraggable"] = factory(require("react"), require("react-dom"));
	else
		root["ReactDraggable"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
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

	'use strict';
	
	module.exports = __webpack_require__(1).default;
	module.exports.DraggableCore = __webpack_require__(9).default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(3);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _classnames = __webpack_require__(4);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _domFns = __webpack_require__(5);
	
	var _positionFns = __webpack_require__(8);
	
	var _shims = __webpack_require__(6);
	
	var _DraggableCore = __webpack_require__(9);
	
	var _DraggableCore2 = _interopRequireDefault(_DraggableCore);
	
	var _log = __webpack_require__(10);
	
	var _log2 = _interopRequireDefault(_log);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	// $FlowIgnore
	
	
	//
	// Define <Draggable>
	//
	
	var Draggable = function (_React$Component) {
	  _inherits(Draggable, _React$Component);
	
	  function Draggable(options) {
	    _classCallCheck(this, Draggable);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Draggable).call(this, options));
	
	    _this.onDragStart = function (e, coreEvent) {
	      (0, _log2.default)('Draggable: onDragStart: %j', coreEvent.position);
	
	      // Short-circuit if user's callback killed it.
	      var shouldStart = _this.props.onStart(e, (0, _domFns.createUIEvent)(_this, coreEvent));
	      // Kills start event on core as well, so move handlers are never bound.
	      if (shouldStart === false) return false;
	
	      _this.setState({ dragging: true, dragged: true });
	    };
	
	    _this.onDrag = function (e, coreEvent) {
	      if (!_this.state.dragging) return false;
	      (0, _log2.default)('Draggable: onDrag: %j', coreEvent.position);
	
	      var uiEvent = (0, _domFns.createUIEvent)(_this, coreEvent);
	
	      var newState = {
	        clientX: uiEvent.position.left,
	        clientY: uiEvent.position.top
	      };
	
	      // Keep within bounds.
	      if (_this.props.bounds) {
	        // Save original x and y.
	        var _clientX = newState.clientX;
	        var _clientY = newState.clientY;
	
	        // Add slack to the values used to calculate bound position. This will ensure that if
	        // we start removing slack, the element won't react to it right away until it's been
	        // completely removed.
	
	        newState.clientX += _this.state.slackX;
	        newState.clientY += _this.state.slackY;
	
	        // Get bound position. This will ceil/floor the x and y within the boundaries.
	
	
	        // Recalculate slack by noting how much was shaved by the boundPosition handler.
	
	        var _getBoundPosition = (0, _positionFns.getBoundPosition)(_this, newState.clientX, newState.clientY);
	
	        var _getBoundPosition2 = _slicedToArray(_getBoundPosition, 2);
	
	        newState.clientX = _getBoundPosition2[0];
	        newState.clientY = _getBoundPosition2[1];
	        newState.slackX = _this.state.slackX + (_clientX - newState.clientX);
	        newState.slackY = _this.state.slackY + (_clientY - newState.clientY);
	
	        // Update the event we fire to reflect what really happened after bounds took effect.
	        uiEvent.position.left = _clientX;
	        uiEvent.position.top = _clientY;
	        uiEvent.deltaX = newState.clientX - _this.state.clientX;
	        uiEvent.deltaY = newState.clientY - _this.state.clientY;
	      }
	
	      // Short-circuit if user's callback killed it.
	      var shouldUpdate = _this.props.onDrag(e, uiEvent);
	      if (shouldUpdate === false) return false;
	
	      _this.setState(newState);
	    };
	
	    _this.onDragStop = function (e, coreEvent) {
	      if (!_this.state.dragging) return false;
	
	      // Short-circuit if user's callback killed it.
	      var shouldStop = _this.props.onStop(e, (0, _domFns.createUIEvent)(_this, coreEvent));
	      if (shouldStop === false) return false;
	
	      (0, _log2.default)('Draggable: onDragStop: %j', coreEvent.position);
	
	      _this.setState({
	        dragging: false,
	        slackX: 0,
	        slackY: 0
	      });
	    };
	
	    _this.state = {
	      // Whether or not we are currently dragging.
	      dragging: false,
	
	      // Whether or not we have been dragged before.
	      dragged: false,
	
	      // Current transform x and y.
	      clientX: _this.props ? _this.props.start.x : 0, clientY: _this.props ? _this.props.start.y : 0,
	
	      // Used for compensating for out-of-bounds drags
	      slackX: 0, slackY: 0,
	
	      // Can only determine if SVG after mounting
	      isElementSVG: false
	    };
	    return _this;
	  }
	
	  /*
	  state: DraggableState = {
	  };
	  */
	
	  _createClass(Draggable, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      // Check to see if the element passed is an instanceof SVGElement
	      if (_reactDom2.default.findDOMNode(this) instanceof SVGElement) {
	        this.setState({ isElementSVG: true });
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.setState({ dragging: false }); // prevents invariant if unmounted while dragging
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var style = {},
	          svgTransform = null;
	
	      // Add a CSS transform to move the element around. This allows us to move the element around
	      // without worrying about whether or not it is relatively or absolutely positioned.
	      // If the item you are dragging already has a transform set, wrap it in a <span> so <Draggable>
	      // has a clean slate.
	      var transformOpts = {
	        // Set left if horizontal drag is enabled
	        x: (0, _positionFns.canDragX)(this) ? this.state.clientX : this.props.start.x,
	
	        // Set top if vertical drag is enabled
	        y: (0, _positionFns.canDragY)(this) ? this.state.clientY : this.props.start.y
	      };
	
	      // If this element was SVG, we use the `transform` attribute.
	      if (this.state.isElementSVG) {
	        svgTransform = (0, _domFns.createSVGTransform)(transformOpts);
	      } else {
	        style = (0, _domFns.createCSSTransform)(transformOpts);
	      }
	
	      // zIndex option
	      if (this.state.dragging && !isNaN(this.props.zIndex)) {
	        style.zIndex = this.props.zIndex;
	      }
	
	      // Mark with class while dragging
	      var className = (0, _classnames2.default)(this.props.children.props.className || '', 'react-draggable', {
	        'react-draggable-dragging': this.state.dragging,
	        'react-draggable-dragged': this.state.dragged
	      });
	
	      // Reuse the child provided
	      // This makes it flexible to use whatever element is wanted (div, ul, etc)
	      return _react2.default.createElement(
	        _DraggableCore2.default,
	        _extends({}, this.props, { onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop }),
	        _react2.default.cloneElement(_react2.default.Children.only(this.props.children), {
	          className: className,
	          style: _extends({}, this.props.children.props.style, style),
	          transform: svgTransform
	        })
	      );
	    }
	  }]);
	
	  return Draggable;
	}(_react2.default.Component);
	
	Draggable.displayName = 'Draggable';
	Draggable.propTypes = _extends({}, _DraggableCore2.default.propTypes, {
	
	  /**
	   * `axis` determines which axis the draggable can move.
	   *
	   *  Note that all callbacks will still return data as normal. This only
	   *  controls flushing to the DOM.
	   *
	   * 'both' allows movement horizontally and vertically.
	   * 'x' limits movement to horizontal axis.
	   * 'y' limits movement to vertical axis.
	   * 'none' limits all movement.
	   *
	   * Defaults to 'both'.
	   */
	  axis: _react.PropTypes.oneOf(['both', 'x', 'y', 'none']),
	
	  /**
	   * `bounds` determines the range of movement available to the element.
	   * Available values are:
	   *
	   * 'parent' restricts movement within the Draggable's parent node.
	   *
	   * Alternatively, pass an object with the following properties, all of which are optional:
	   *
	   * {left: LEFT_BOUND, right: RIGHT_BOUND, bottom: BOTTOM_BOUND, top: TOP_BOUND}
	   *
	   * All values are in px.
	   *
	   * Example:
	   *
	   * ```jsx
	   *   let App = React.createClass({
	   *       render: function () {
	   *         return (
	   *            <Draggable bounds={{right: 300, bottom: 300}}>
	   *              <div>Content</div>
	   *           </Draggable>
	   *         );
	   *       }
	   *   });
	   * ```
	   */
	  bounds: _react.PropTypes.oneOfType([_react.PropTypes.shape({
	    left: _react.PropTypes.Number,
	    right: _react.PropTypes.Number,
	    top: _react.PropTypes.Number,
	    bottom: _react.PropTypes.Number
	  }), _react.PropTypes.string, _react.PropTypes.oneOf([false])]),
	
	  /**
	   * `start` specifies the x and y that the dragged item should start at
	   *
	   * Example:
	   *
	   * ```jsx
	   *      let App = React.createClass({
	   *          render: function () {
	   *              return (
	   *                  <Draggable start={{x: 25, y: 25}}>
	   *                      <div>I start with transformX: 25px and transformY: 25px;</div>
	   *                  </Draggable>
	   *              );
	   *          }
	   *      });
	   * ```
	   */
	  start: _react.PropTypes.shape({
	    x: _react.PropTypes.number,
	    y: _react.PropTypes.number
	  }),
	
	  /**
	   * `zIndex` specifies the zIndex to use while dragging.
	   *
	   * Example:
	   *
	   * ```jsx
	   *   let App = React.createClass({
	   *       render: function () {
	   *           return (
	   *               <Draggable zIndex={100}>
	   *                   <div>I have a zIndex</div>
	   *               </Draggable>
	   *           );
	   *       }
	   *   });
	   * ```
	   */
	  zIndex: _react.PropTypes.number,
	
	  /**
	   * These properties should be defined on the child, not here.
	   */
	  className: _shims.dontSetMe,
	  style: _shims.dontSetMe,
	  transform: _shims.dontSetMe
	});
	Draggable.defaultProps = _extends({}, _DraggableCore2.default.defaultProps, {
	  axis: 'both',
	  bounds: false,
	  start: { x: 0, y: 0 },
	  zIndex: NaN
	});
	exports.default = Draggable;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.matchesSelector = matchesSelector;
	exports.addEvent = addEvent;
	exports.removeEvent = removeEvent;
	exports.outerHeight = outerHeight;
	exports.outerWidth = outerWidth;
	exports.innerHeight = innerHeight;
	exports.innerWidth = innerWidth;
	exports.createCSSTransform = createCSSTransform;
	exports.createSVGTransform = createSVGTransform;
	exports.addUserSelectStyles = addUserSelectStyles;
	exports.removeUserSelectStyles = removeUserSelectStyles;
	exports.styleHacks = styleHacks;
	exports.createCoreEvent = createCoreEvent;
	exports.createUIEvent = createUIEvent;
	
	var _shims = __webpack_require__(6);
	
	var _getPrefix = __webpack_require__(7);
	
	var _getPrefix2 = _interopRequireDefault(_getPrefix);
	
	var _reactDom = __webpack_require__(3);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var matchesSelectorFunc = '';
	function matchesSelector(el, selector) {
	  if (!matchesSelectorFunc) {
	    matchesSelectorFunc = (0, _shims.findInArray)(['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'], function (method) {
	      // $FlowIgnore: Doesn't think elements are indexable
	      return (0, _shims.isFunction)(el[method]);
	    });
	  }
	
	  // $FlowIgnore: Doesn't think elements are indexable
	  return el[matchesSelectorFunc].call(el, selector);
	}
	
	function addEvent(el, event, handler) {
	  if (!el) {
	    return;
	  }
	  if (el.attachEvent) {
	    el.attachEvent('on' + event, handler);
	  } else if (el.addEventListener) {
	    el.addEventListener(event, handler, true);
	  } else {
	    // $FlowIgnore: Doesn't think elements are indexable
	    el['on' + event] = handler;
	  }
	}
	
	function removeEvent(el, event, handler) {
	  if (!el) {
	    return;
	  }
	  if (el.detachEvent) {
	    el.detachEvent('on' + event, handler);
	  } else if (el.removeEventListener) {
	    el.removeEventListener(event, handler, true);
	  } else {
	    // $FlowIgnore: Doesn't think elements are indexable
	    el['on' + event] = null;
	  }
	}
	
	function outerHeight(node) {
	  // This is deliberately excluding margin for our calculations, since we are using
	  // offsetTop which is including margin. See getBoundPosition
	  var height = node.clientHeight;
	  var computedStyle = window.getComputedStyle(node);
	  height += (0, _shims.int)(computedStyle.borderTopWidth);
	  height += (0, _shims.int)(computedStyle.borderBottomWidth);
	  return height;
	}
	
	function outerWidth(node) {
	  // This is deliberately excluding margin for our calculations, since we are using
	  // offsetLeft which is including margin. See getBoundPosition
	  var width = node.clientWidth;
	  var computedStyle = window.getComputedStyle(node);
	  width += (0, _shims.int)(computedStyle.borderLeftWidth);
	  width += (0, _shims.int)(computedStyle.borderRightWidth);
	  return width;
	}
	function innerHeight(node) {
	  var height = node.clientHeight;
	  var computedStyle = window.getComputedStyle(node);
	  height -= (0, _shims.int)(computedStyle.paddingTop);
	  height -= (0, _shims.int)(computedStyle.paddingBottom);
	  return height;
	}
	
	function innerWidth(node) {
	  var width = node.clientWidth;
	  var computedStyle = window.getComputedStyle(node);
	  width -= (0, _shims.int)(computedStyle.paddingLeft);
	  width -= (0, _shims.int)(computedStyle.paddingRight);
	  return width;
	}
	
	function createCSSTransform(_ref) {
	  var x = _ref.x;
	  var y = _ref.y;
	
	  // Replace unitless items with px
	  var out = { transform: 'translate(' + x + 'px,' + y + 'px)' };
	  // Add single prefixed property as well
	  if (_getPrefix2.default) {
	    out[_getPrefix2.default + 'Transform'] = out.transform;
	  }
	  return out;
	}
	
	function createSVGTransform(_ref2) {
	  var x = _ref2.x;
	  var y = _ref2.y;
	
	  return 'translate(' + x + ',' + y + ')';
	}
	
	// User-select Hacks:
	//
	// Useful for preventing blue highlights all over everything when dragging.
	var userSelectStyle = ';user-select: none;';
	if (_getPrefix2.default) {
	  userSelectStyle += '-' + _getPrefix2.default.toLowerCase() + '-user-select: none;';
	}
	
	function addUserSelectStyles() {
	  var style = document.body.getAttribute('style') || '';
	  document.body.setAttribute('style', style + userSelectStyle);
	}
	
	function removeUserSelectStyles() {
	  var style = document.body.getAttribute('style') || '';
	  document.body.setAttribute('style', style.replace(userSelectStyle, ''));
	}
	
	function styleHacks() {
	  var childStyle = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	  // Workaround IE pointer events; see #51
	  // https://github.com/mzabriskie/react-draggable/issues/51#issuecomment-103488278
	  return _extends({
	    touchAction: 'none'
	  }, childStyle);
	}
	
	// Create an event exposed by <DraggableCore>
	function createCoreEvent(draggable, clientX, clientY) {
	  // State changes are often (but not always!) async. We want the latest value.
	  var state = draggable._pendingState || draggable.state;
	  var isStart = !(0, _shims.isNum)(state.lastX);
	
	  return {
	    node: _reactDom2.default.findDOMNode(draggable),
	    position: isStart ?
	    // If this is our first move, use the clientX and clientY as last coords.
	    {
	      deltaX: 0, deltaY: 0,
	      lastX: clientX, lastY: clientY,
	      clientX: clientX, clientY: clientY
	    } :
	    // Otherwise calculate proper values.
	    {
	      deltaX: clientX - state.lastX, deltaY: clientY - state.lastY,
	      lastX: state.lastX, lastY: state.lastY,
	      clientX: clientX, clientY: clientY
	    }
	  };
	}
	
	// Create an event exposed by <Draggable>
	function createUIEvent(draggable, coreEvent) {
	  return {
	    node: _reactDom2.default.findDOMNode(draggable),
	    position: {
	      left: draggable.state.clientX + coreEvent.position.deltaX,
	      top: draggable.state.clientY + coreEvent.position.deltaY
	    },
	    deltaX: coreEvent.position.deltaX,
	    deltaY: coreEvent.position.deltaY
	  };
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.findInArray = findInArray;
	exports.isFunction = isFunction;
	exports.isNum = isNum;
	exports.int = int;
	exports.dontSetMe = dontSetMe;
	
	// @credits https://gist.github.com/rogozhnikoff/a43cfed27c41e4e68cdc
	function findInArray(array, callback) {
	  for (var i = 0, length = array.length; i < length; i++) {
	    if (callback.apply(callback, [array[i], i, array])) return array[i];
	  }
	}
	
	function isFunction(func) {
	  return typeof func === 'function' || Object.prototype.toString.call(func) === '[object Function]';
	}
	
	function isNum(num) {
	  return typeof num === 'number' && !isNaN(num);
	}
	
	function int(a) {
	  return parseInt(a, 10);
	}
	
	function dontSetMe(props, propName, componentName) {
	  if (props[propName]) {
	    throw new Error('Invalid prop ' + propName + ' passed to ' + componentName + ' - do not set this, set it on the child.');
	  }
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.generatePrefix = generatePrefix;
	function generatePrefix() {
	  // Checking specifically for 'window.document' is for pseudo-browser server-side
	  // environments that define 'window' as the global context.
	  // E.g. React-rails (see https://github.com/reactjs/react-rails/pull/84)
	  if (typeof window === 'undefined' || typeof window.document === 'undefined') return '';
	
	  // Thanks David Walsh
	  var styles = window.getComputedStyle(document.documentElement, ''),
	      pre = (Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) || (styles.OLink === '' ? ['', 'o'] : []))[1];
	  // 'ms' is not titlecased
	  if (pre === undefined || pre === null) return '';
	  if (pre === 'ms') return pre;
	  if (pre === undefined || pre === null) return '';
	  return pre.slice(0, 1).toUpperCase() + pre.slice(1);
	}
	
	exports.default = generatePrefix();

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getBoundPosition = getBoundPosition;
	exports.snapToGrid = snapToGrid;
	exports.canDragX = canDragX;
	exports.canDragY = canDragY;
	exports.getControlPosition = getControlPosition;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _shims = __webpack_require__(6);
	
	var _reactDom = __webpack_require__(3);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _domFns = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getBoundPosition(draggable, clientX, clientY) {
	  // If no bounds, short-circuit and move on
	  if (!draggable.props.bounds) return [clientX, clientY];
	
	  // Clone new bounds
	  var bounds = draggable.props.bounds;
	
	  bounds = typeof bounds === 'string' ? bounds : cloneBounds(bounds);
	  var node = _reactDom2.default.findDOMNode(draggable);
	
	  if (typeof bounds === 'string') {
	    var boundNode = void 0;
	    if (bounds === 'parent') {
	      boundNode = node.parentNode;
	    } else {
	      boundNode = document.querySelector(bounds);
	      if (!boundNode) throw new Error('Bounds selector "' + bounds + '" could not find an element.');
	    }
	    var nodeStyle = window.getComputedStyle(node);
	    var boundNodeStyle = window.getComputedStyle(boundNode);
	    // Compute bounds. This is a pain with padding and offsets but this gets it exactly right.
	    bounds = {
	      left: -node.offsetLeft + (0, _shims.int)(boundNodeStyle.paddingLeft) + (0, _shims.int)(nodeStyle.borderLeftWidth) + (0, _shims.int)(nodeStyle.marginLeft),
	      top: -node.offsetTop + (0, _shims.int)(boundNodeStyle.paddingTop) + (0, _shims.int)(nodeStyle.borderTopWidth) + (0, _shims.int)(nodeStyle.marginTop),
	      right: (0, _domFns.innerWidth)(boundNode) - (0, _domFns.outerWidth)(node) - node.offsetLeft,
	      bottom: (0, _domFns.innerHeight)(boundNode) - (0, _domFns.outerHeight)(node) - node.offsetTop
	    };
	  }
	
	  // Keep x and y below right and bottom limits...
	  if ((0, _shims.isNum)(bounds.right)) clientX = Math.min(clientX, bounds.right);
	  if ((0, _shims.isNum)(bounds.bottom)) clientY = Math.min(clientY, bounds.bottom);
	
	  // But above left and top limits.
	  if ((0, _shims.isNum)(bounds.left)) clientX = Math.max(clientX, bounds.left);
	  if ((0, _shims.isNum)(bounds.top)) clientY = Math.max(clientY, bounds.top);
	
	  return [clientX, clientY];
	}
	
	function snapToGrid(grid, pendingX, pendingY) {
	  var x = Math.round(pendingX / grid[0]) * grid[0];
	  var y = Math.round(pendingY / grid[1]) * grid[1];
	  return [x, y];
	}
	
	function canDragX(draggable) {
	  return draggable.props.axis === 'both' || draggable.props.axis === 'x';
	}
	
	function canDragY(draggable) {
	  return draggable.props.axis === 'both' || draggable.props.axis === 'y';
	}
	
	// Get {clientX, clientY} positions from event.
	function getControlPosition(e) {
	  var position = e.targetTouches && e.targetTouches[0] || e;
	  return {
	    clientX: position.clientX,
	    clientY: position.clientY
	  };
	}
	
	// A lot faster than stringify/parse
	function cloneBounds(bounds) {
	  return {
	    left: bounds.left,
	    top: bounds.top,
	    right: bounds.right,
	    bottom: bounds.bottom
	  };
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _domFns = __webpack_require__(5);
	
	var _positionFns = __webpack_require__(8);
	
	var _shims = __webpack_require__(6);
	
	var _log = __webpack_require__(10);
	
	var _log2 = _interopRequireDefault(_log);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Simple abstraction for dragging events names.
	var eventsFor = {
	  touch: {
	    start: 'touchstart',
	    move: 'touchmove',
	    stop: 'touchend'
	  },
	  mouse: {
	    start: 'mousedown',
	    move: 'mousemove',
	    stop: 'mouseup'
	  }
	};
	
	// Default to mouse events.
	var dragEventFor = eventsFor.mouse;
	
	//
	// Define <DraggableCore>.
	//
	// <DraggableCore> is for advanced usage of <Draggable>. It maintains minimal internal state so it can
	// work well with libraries that require more control over the element.
	//
	
	var DraggableCore = function (_React$Component) {
	  _inherits(DraggableCore, _React$Component);
	
	  function DraggableCore() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, DraggableCore);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(DraggableCore)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      dragging: false,
	      // Used while dragging to determine deltas.
	      lastX: null, lastY: null
	    }, _this.handleDragStart = function (e) {
	      // Make it possible to attach event handlers on top of this one.
	      _this.props.onMouseDown(e);
	
	      // Only accept left-clicks.
	      if (!_this.props.allowAnyClick && typeof e.button === 'number' && e.button !== 0) return false;
	
	      // Short circuit if handle or cancel prop was provided and selector doesn't match.
	      if (_this.props.disabled || _this.props.handle && !(0, _domFns.matchesSelector)(e.target, _this.props.handle) || _this.props.cancel && (0, _domFns.matchesSelector)(e.target, _this.props.cancel)) {
	        return;
	      }
	
	      // Set touch identifier in component state if this is a touch event. This allows us to
	      // distinguish between individual touches on multitouch screens by identifying which
	      // touchpoint was set to this element.
	      if (e.targetTouches) {
	        _this.setState({ touchIdentifier: e.targetTouches[0].identifier });
	      }
	
	      // Add a style to the body to disable user-select. This prevents text from
	      // being selected all over the page.
	      if (_this.props.enableUserSelectHack) (0, _domFns.addUserSelectStyles)();
	
	      // Get the current drag point from the event. This is used as the offset.
	
	      var _getControlPosition = (0, _positionFns.getControlPosition)(e);
	
	      var clientX = _getControlPosition.clientX;
	      var clientY = _getControlPosition.clientY;
	
	      // Create an event object with all the data parents need to make a decision here.
	
	      var coreEvent = (0, _domFns.createCoreEvent)(_this, clientX, clientY);
	
	      (0, _log2.default)('DraggableCore: handleDragStart: %j', coreEvent.position);
	
	      // Call event handler. If it returns explicit false, cancel.
	      (0, _log2.default)('calling', _this.props.onStart);
	      var shouldUpdate = _this.props.onStart(e, coreEvent);
	      if (shouldUpdate === false) return;
	
	      // Initiate dragging. Set the current x and y as offsets
	      // so we know how much we've moved during the drag. This allows us
	      // to drag elements around even if they have been moved, without issue.
	      _this.setState({
	        dragging: true,
	
	        lastX: clientX,
	        lastY: clientY,
	        // Stored so we can adjust our offset if scrolled.
	        scrollX: document.body.scrollLeft,
	        scrollY: document.body.scrollTop
	      });
	
	      // Translate el on page scroll.
	      (0, _domFns.addEvent)(document, 'scroll', _this.handleScroll);
	      // Add events to the document directly so we catch when the user's mouse/touch moves outside of
	      // this element. We use different events depending on whether or not we have detected that this
	      // is a touch-capable device.
	      (0, _domFns.addEvent)(document, dragEventFor.move, _this.handleDrag);
	      (0, _domFns.addEvent)(document, dragEventFor.stop, _this.handleDragStop);
	    }, _this.handleDrag = function (e) {
	      // Return if this is a touch event, but not the correct one for this element
	      if (e.targetTouches && e.targetTouches[0].identifier !== _this.state.touchIdentifier) return;
	
	      var _getControlPosition2 = (0, _positionFns.getControlPosition)(e);
	
	      var clientX = _getControlPosition2.clientX;
	      var clientY = _getControlPosition2.clientY;
	
	      // Snap to grid if prop has been provided
	
	      if (Array.isArray(_this.props.grid)) {
	        var deltaX = clientX - _this.state.lastX,
	            deltaY = clientY - _this.state.lastY;
	
	        var _snapToGrid = (0, _positionFns.snapToGrid)(_this.props.grid, deltaX, deltaY);
	
	        var _snapToGrid2 = _slicedToArray(_snapToGrid, 2);
	
	        deltaX = _snapToGrid2[0];
	        deltaY = _snapToGrid2[1];
	
	        if (!deltaX && !deltaY) return; // skip useless drag
	        clientX = _this.state.lastX + deltaX, clientY = _this.state.lastY + deltaY;
	      }
	
	      var coreEvent = (0, _domFns.createCoreEvent)(_this, clientX, clientY);
	
	      (0, _log2.default)('DraggableCore: handleDrag: %j', coreEvent.position);
	
	      // Call event handler. If it returns explicit false, trigger end.
	      var shouldUpdate = _this.props.onDrag(e, coreEvent);
	      if (shouldUpdate === false) {
	        _this.handleDragStop({});
	        return;
	      }
	
	      _this.setState({
	        lastX: clientX,
	        lastY: clientY
	      });
	    }, _this.handleDragStop = function (e) {
	      if (!_this.state.dragging) return;
	
	      // Short circuit if this is not the correct touch event. `changedTouches` contains all
	      // touch points that have been removed from the surface.
	      if (e.changedTouches && e.changedTouches[0].identifier !== _this.state.touchIdentifier) return;
	
	      // Remove user-select hack
	      if (_this.props.enableUserSelectHack) (0, _domFns.removeUserSelectStyles)();
	
	      var _getControlPosition3 = (0, _positionFns.getControlPosition)(e);
	
	      var clientX = _getControlPosition3.clientX;
	      var clientY = _getControlPosition3.clientY;
	
	      var coreEvent = (0, _domFns.createCoreEvent)(_this, clientX, clientY);
	
	      (0, _log2.default)('DraggableCore: handleDragStop: %j', coreEvent.position);
	
	      // Reset the el.
	      _this.setState({
	        dragging: false,
	        lastX: null,
	        lastY: null
	      });
	
	      // Call event handler
	      _this.props.onStop(e, coreEvent);
	
	      // Remove event handlers
	      (0, _log2.default)('DraggableCore: Removing handlers');
	      (0, _domFns.removeEvent)(document, 'scroll', _this.handleScroll);
	      (0, _domFns.removeEvent)(document, dragEventFor.move, _this.handleDrag);
	      (0, _domFns.removeEvent)(document, dragEventFor.stop, _this.handleDragStop);
	    }, _this.handleScroll = function (e) {
	      var s = _this.state,
	          x = document.body.scrollLeft,
	          y = document.body.scrollTop;
	
	      // Create the usual event, but make the scroll offset our deltas.
	      var coreEvent = (0, _domFns.createCoreEvent)(_this);
	      coreEvent.position.deltaX = x - s.scrollX;
	      coreEvent.position.deltaY = y - s.scrollY;
	
	      _this.setState({
	        lastX: s.lastX + coreEvent.position.deltaX,
	        lastY: s.lastY + coreEvent.position.deltaY,
	        scrollX: x,
	        scrollY: y
	      });
	
	      _this.props.onDrag(e, coreEvent);
	    }, _this.onTouchStart = function (e) {
	      // We're on a touch device now, so change the event handlers
	      dragEventFor = eventsFor.touch;
	
	      return _this.handleDragStart(e);
	    }, _this.onTouchEnd = function (e) {
	      // We're on a touch device now, so change the event handlers
	      dragEventFor = eventsFor.touch;
	
	      return _this.handleDragStop(e);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(DraggableCore, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      // Remove any leftover event handlers. Remove both touch and mouse handlers in case
	      // some browser quirk caused a touch event to fire during a mouse move, or vice versa.
	      (0, _domFns.removeEvent)(document, eventsFor.mouse.move, this.handleDrag);
	      (0, _domFns.removeEvent)(document, eventsFor.touch.move, this.handleDrag);
	      (0, _domFns.removeEvent)(document, eventsFor.mouse.stop, this.handleDragStop);
	      (0, _domFns.removeEvent)(document, eventsFor.touch.stop, this.handleDragStop);
	      (0, _domFns.removeEvent)(document, 'scroll', this.handleScroll);
	      if (this.props.enableUserSelectHack) (0, _domFns.removeUserSelectStyles)();
	    }
	
	    // When the user scrolls, adjust internal state so the draggable moves along the page properly.
	    // This only fires when a drag is active.
	
	
	    // Same as onMouseDown (start drag), but now consider this a touch device.
	
	  }, {
	    key: 'render',
	    value: function render() {
	      // Reuse the child provided
	      // This makes it flexible to use whatever element is wanted (div, ul, etc)
	      return _react2.default.cloneElement(_react2.default.Children.only(this.props.children), {
	        style: (0, _domFns.styleHacks)(this.props.children.props.style),
	
	        // Note: mouseMove handler is attached to document so it will still function
	        // when the user drags quickly and leaves the bounds of the element.
	        onMouseDown: this.handleDragStart,
	        onTouchStart: this.onTouchStart,
	        onMouseUp: this.handleDragStop,
	        onTouchEnd: this.onTouchEnd
	      });
	    }
	  }]);
	
	  return DraggableCore;
	}(_react2.default.Component);
	
	DraggableCore.displayName = 'DraggableCore';
	DraggableCore.propTypes = {
	  /**
	   * `allowAnyClick` allows dragging using any mouse button.
	   * By default, we only accept the left button.
	   *
	   * Defaults to `false`.
	   */
	  allowAnyClick: _react.PropTypes.bool,
	
	  /**
	   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
	   * with the exception of `onMouseDown`, will not fire.
	   *
	   * Example:
	   *
	   * ```jsx
	   *   let App = React.createClass({
	   *       render: function () {
	   *           return (
	   *               <Draggable disabled={true}>
	   *                   <div>I can't be dragged</div>
	   *               </Draggable>
	   *           );
	   *       }
	   *   });
	   * ```
	   */
	  disabled: _react.PropTypes.bool,
	
	  /**
	   * By default, we add 'user-select:none' attributes to the document body
	   * to prevent ugly text selection during drag. If this is causing problems
	   * for your app, set this to `false`.
	   */
	  enableUserSelectHack: _react.PropTypes.bool,
	
	  /**
	   * `grid` specifies the x and y that dragging should snap to.
	   *
	   * Example:
	   *
	   * ```jsx
	   *   let App = React.createClass({
	   *       render: function () {
	   *           return (
	   *               <Draggable grid={[25, 25]}>
	   *                   <div>I snap to a 25 x 25 grid</div>
	   *               </Draggable>
	   *           );
	   *       }
	   *   });
	   * ```
	   */
	  grid: _react.PropTypes.arrayOf(_react.PropTypes.number),
	
	  /**
	   * `handle` specifies a selector to be used as the handle that initiates drag.
	   *
	   * Example:
	   *
	   * ```jsx
	   *   let App = React.createClass({
	   *       render: function () {
	   *         return (
	   *            <Draggable handle=".handle">
	   *              <div>
	   *                  <div className="handle">Click me to drag</div>
	   *                  <div>This is some other content</div>
	   *              </div>
	   *           </Draggable>
	   *         );
	   *       }
	   *   });
	   * ```
	   */
	  handle: _react.PropTypes.string,
	
	  /**
	   * `cancel` specifies a selector to be used to prevent drag initialization.
	   *
	   * Example:
	   *
	   * ```jsx
	   *   let App = React.createClass({
	   *       render: function () {
	   *           return(
	   *               <Draggable cancel=".cancel">
	   *                   <div>
	   *                     <div className="cancel">You can't drag from here</div>
	   *            <div>Dragging here works fine</div>
	   *                   </div>
	   *               </Draggable>
	   *           );
	   *       }
	   *   });
	   * ```
	   */
	  cancel: _react.PropTypes.string,
	
	  /**
	   * Called when dragging starts.
	   * If this function returns the boolean false, dragging will be canceled.
	   *
	   * Example:
	   *
	   * ```js
	   *  function (event, ui) {}
	   * ```
	   *
	   * `event` is the Event that was triggered.
	   * `ui` is an object:
	   *
	   * ```js
	   *  {
	   *    position: {top: 0, left: 0}
	   *  }
	   * ```
	   */
	  onStart: _react.PropTypes.func,
	
	  /**
	   * Called while dragging.
	   * If this function returns the boolean false, dragging will be canceled.
	   *
	   * Example:
	   *
	   * ```js
	   *  function (event, ui) {}
	   * ```
	   *
	   * `event` is the Event that was triggered.
	   * `ui` is an object:
	   *
	   * ```js
	   *  {
	   *    position: {top: 0, left: 0}
	   *  }
	   * ```
	   */
	  onDrag: _react.PropTypes.func,
	
	  /**
	   * Called when dragging stops.
	   *
	   * Example:
	   *
	   * ```js
	   *  function (event, ui) {}
	   * ```
	   *
	   * `event` is the Event that was triggered.
	   * `ui` is an object:
	   *
	   * ```js
	   *  {
	   *    position: {top: 0, left: 0}
	   *  }
	   * ```
	   */
	  onStop: _react.PropTypes.func,
	
	  /**
	   * A workaround option which can be passed if onMouseDown needs to be accessed,
	   * since it'll always be blocked (due to that there's internal use of onMouseDown)
	   */
	  onMouseDown: _react.PropTypes.func,
	
	  /**
	   * These properties should be defined on the child, not here.
	   */
	  className: _shims.dontSetMe,
	  style: _shims.dontSetMe,
	  transform: _shims.dontSetMe
	};
	DraggableCore.defaultProps = {
	  allowAnyClick: false, // by default only accept left click
	  cancel: null,
	  disabled: false,
	  enableUserSelectHack: true,
	  handle: null,
	  grid: null,
	  transform: null,
	  onStart: function onStart() {},
	  onDrag: function onDrag() {},
	  onStop: function onStop() {},
	  onMouseDown: function onMouseDown() {}
	};
	exports.default = DraggableCore;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = log;
	function log() {
	  var _console;
	
	  if (true) (_console = console).log.apply(_console, arguments);
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIi4uL3dlYnBhY2svYm9vdHN0cmFwIDQ5NmI5MTI3ZmE4NDRkNjI0ZDk0IiwiLi4vLi9pbmRleC5qcyIsIi4uLy4vbGliL0RyYWdnYWJsZS5lczYiLCIuLi9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwicmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImFtZFwiOlwicmVhY3RcIixcInJvb3RcIjpcIlJlYWN0XCJ9IiwiLi4vZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcInJlYWN0LWRvbVwiLFwiY29tbW9uanMyXCI6XCJyZWFjdC1kb21cIixcImFtZFwiOlwicmVhY3QtZG9tXCIsXCJyb290XCI6XCJSZWFjdERPTVwifSIsIi4uLy4vfi9jbGFzc25hbWVzL2luZGV4LmpzIiwiLi4vLi9saWIvdXRpbHMvZG9tRm5zLmVzNiIsIi4uLy4vbGliL3V0aWxzL3NoaW1zLmVzNiIsIi4uLy4vbGliL3V0aWxzL2dldFByZWZpeC5lczYiLCIuLi8uL2xpYi91dGlscy9wb3NpdGlvbkZucy5lczYiLCIuLi8uL2xpYi9EcmFnZ2FibGVDb3JlLmVzNiIsIi4uLy4vbGliL3V0aWxzL2xvZy5lczYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0EsUUFBTyxPQUFQLEdBQWlCLG9CQUFRLENBQVIsRUFBMkIsT0FBM0I7QUFDakIsUUFBTyxPQUFQLENBQWUsYUFBZixHQUErQixvQkFBUSxD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QVg7QUFDQSxZQUFTLG1CQUFVLEVBQVY7QUFDVCxXQUFRLGtCQUFVLEVBQVY7QUFDUixXQUFRLGtCQUFVLEVBQVY7QUFDUixnQkFBYSx1QkFBVSxFQUFWOzttQkE5TEksYzs7Ozs7Ozs7Ozs7bUJDdENHO0FBQVQsVUFBUyxHQUFULEdBQTJCOzs7QUFDeEMsT0FBSSxNQUE2QixxQkFBUSxHQUFSLDRCQUFqQyIsImZpbGUiOiIuL2Rpc3QvcmVhY3QtZHJhZ2dhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJyZWFjdC1kb21cIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIiwgXCJyZWFjdC1kb21cIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUmVhY3REcmFnZ2FibGVcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcInJlYWN0LWRvbVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiUmVhY3REcmFnZ2FibGVcIl0gPSBmYWN0b3J5KHJvb3RbXCJSZWFjdFwiXSwgcm9vdFtcIlJlYWN0RE9NXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXykge1xucmV0dXJuIFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuICoqLyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgNDk2YjkxMjdmYTg0NGQ2MjRkOTRcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL0RyYWdnYWJsZScpLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cy5EcmFnZ2FibGVDb3JlID0gcmVxdWlyZSgnLi9saWIvRHJhZ2dhYmxlQ29yZScpLmRlZmF1bHQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2luZGV4LmpzXG4gKiovIiwiLy8gQGZsb3dcbmltcG9ydCB7ZGVmYXVsdCBhcyBSZWFjdCwgUHJvcFR5cGVzfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbi8vICRGbG93SWdub3JlXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7Y3JlYXRlVUlFdmVudCwgY3JlYXRlQ1NTVHJhbnNmb3JtLCBjcmVhdGVTVkdUcmFuc2Zvcm19IGZyb20gJy4vdXRpbHMvZG9tRm5zJztcbmltcG9ydCB7Y2FuRHJhZ1gsIGNhbkRyYWdZLCBnZXRCb3VuZFBvc2l0aW9ufSBmcm9tICcuL3V0aWxzL3Bvc2l0aW9uRm5zJztcbmltcG9ydCB7ZG9udFNldE1lfSBmcm9tICcuL3V0aWxzL3NoaW1zJztcbmltcG9ydCBEcmFnZ2FibGVDb3JlIGZyb20gJy4vRHJhZ2dhYmxlQ29yZSc7XG5pbXBvcnQgbG9nIGZyb20gJy4vdXRpbHMvbG9nJztcblxuaW1wb3J0IHR5cGUge0NvcmVFdmVudH0gZnJvbSAnLi91dGlscy9kb21GbnMnO1xuZXhwb3J0IHR5cGUgQ29yZUV2ZW50SGFuZGxlciA9IChlOiBFdmVudCwgY29yZUV2ZW50OiBDb3JlRXZlbnQpID0+IHZvaWQgfCBmYWxzZTtcbmV4cG9ydCB0eXBlIERyYWdnYWJsZVN0YXRlID0ge1xuICBkcmFnZ2luZzogYm9vbGVhbixcbiAgZHJhZ2dlZDogYm9vbGVhbixcbiAgY2xpZW50WDogbnVtYmVyLCBjbGllbnRZOiBudW1iZXIsXG4gIHNsYWNrWDogbnVtYmVyLCBzbGFja1k6IG51bWJlcixcbiAgaXNFbGVtZW50U1ZHOiBib29sZWFuXG59O1xuXG4vL1xuLy8gRGVmaW5lIDxEcmFnZ2FibGU+XG4vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFnZ2FibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdEcmFnZ2FibGUnO1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLy8gQWNjZXB0cyBhbGwgcHJvcHMgPERyYWdnYWJsZUNvcmU+IGFjY2VwdHMuXG4gICAgLi4uRHJhZ2dhYmxlQ29yZS5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBgYXhpc2AgZGV0ZXJtaW5lcyB3aGljaCBheGlzIHRoZSBkcmFnZ2FibGUgY2FuIG1vdmUuXG4gICAgICpcbiAgICAgKiAgTm90ZSB0aGF0IGFsbCBjYWxsYmFja3Mgd2lsbCBzdGlsbCByZXR1cm4gZGF0YSBhcyBub3JtYWwuIFRoaXMgb25seVxuICAgICAqICBjb250cm9scyBmbHVzaGluZyB0byB0aGUgRE9NLlxuICAgICAqXG4gICAgICogJ2JvdGgnIGFsbG93cyBtb3ZlbWVudCBob3Jpem9udGFsbHkgYW5kIHZlcnRpY2FsbHkuXG4gICAgICogJ3gnIGxpbWl0cyBtb3ZlbWVudCB0byBob3Jpem9udGFsIGF4aXMuXG4gICAgICogJ3knIGxpbWl0cyBtb3ZlbWVudCB0byB2ZXJ0aWNhbCBheGlzLlxuICAgICAqICdub25lJyBsaW1pdHMgYWxsIG1vdmVtZW50LlxuICAgICAqXG4gICAgICogRGVmYXVsdHMgdG8gJ2JvdGgnLlxuICAgICAqL1xuICAgIGF4aXM6IFByb3BUeXBlcy5vbmVPZihbJ2JvdGgnLCAneCcsICd5JywgJ25vbmUnXSksXG5cbiAgICAvKipcbiAgICAgKiBgYm91bmRzYCBkZXRlcm1pbmVzIHRoZSByYW5nZSBvZiBtb3ZlbWVudCBhdmFpbGFibGUgdG8gdGhlIGVsZW1lbnQuXG4gICAgICogQXZhaWxhYmxlIHZhbHVlcyBhcmU6XG4gICAgICpcbiAgICAgKiAncGFyZW50JyByZXN0cmljdHMgbW92ZW1lbnQgd2l0aGluIHRoZSBEcmFnZ2FibGUncyBwYXJlbnQgbm9kZS5cbiAgICAgKlxuICAgICAqIEFsdGVybmF0aXZlbHksIHBhc3MgYW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzLCBhbGwgb2Ygd2hpY2ggYXJlIG9wdGlvbmFsOlxuICAgICAqXG4gICAgICoge2xlZnQ6IExFRlRfQk9VTkQsIHJpZ2h0OiBSSUdIVF9CT1VORCwgYm90dG9tOiBCT1RUT01fQk9VTkQsIHRvcDogVE9QX0JPVU5EfVxuICAgICAqXG4gICAgICogQWxsIHZhbHVlcyBhcmUgaW4gcHguXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOlxuICAgICAqXG4gICAgICogYGBganN4XG4gICAgICogICBsZXQgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgICAqICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAqICAgICAgICAgcmV0dXJuIChcbiAgICAgKiAgICAgICAgICAgIDxEcmFnZ2FibGUgYm91bmRzPXt7cmlnaHQ6IDMwMCwgYm90dG9tOiAzMDB9fT5cbiAgICAgKiAgICAgICAgICAgICAgPGRpdj5Db250ZW50PC9kaXY+XG4gICAgICogICAgICAgICAgIDwvRHJhZ2dhYmxlPlxuICAgICAqICAgICAgICAgKTtcbiAgICAgKiAgICAgICB9XG4gICAgICogICB9KTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBib3VuZHM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgbGVmdDogUHJvcFR5cGVzLk51bWJlcixcbiAgICAgICAgcmlnaHQ6IFByb3BUeXBlcy5OdW1iZXIsXG4gICAgICAgIHRvcDogUHJvcFR5cGVzLk51bWJlcixcbiAgICAgICAgYm90dG9tOiBQcm9wVHlwZXMuTnVtYmVyXG4gICAgICB9KSxcbiAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBQcm9wVHlwZXMub25lT2YoW2ZhbHNlXSlcbiAgICBdKSxcblxuICAgIC8qKlxuICAgICAqIGBzdGFydGAgc3BlY2lmaWVzIHRoZSB4IGFuZCB5IHRoYXQgdGhlIGRyYWdnZWQgaXRlbSBzaG91bGQgc3RhcnQgYXRcbiAgICAgKlxuICAgICAqIEV4YW1wbGU6XG4gICAgICpcbiAgICAgKiBgYGBqc3hcbiAgICAgKiAgICAgIGxldCBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgICogICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICogICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICogICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlIHN0YXJ0PXt7eDogMjUsIHk6IDI1fX0+XG4gICAgICogICAgICAgICAgICAgICAgICAgICAgPGRpdj5JIHN0YXJ0IHdpdGggdHJhbnNmb3JtWDogMjVweCBhbmQgdHJhbnNmb3JtWTogMjVweDs8L2Rpdj5cbiAgICAgKiAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxuICAgICAqICAgICAgICAgICAgICApO1xuICAgICAqICAgICAgICAgIH1cbiAgICAgKiAgICAgIH0pO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHN0YXJ0OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgeDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIHk6IFByb3BUeXBlcy5udW1iZXJcbiAgICB9KSxcblxuICAgIC8qKlxuICAgICAqIGB6SW5kZXhgIHNwZWNpZmllcyB0aGUgekluZGV4IHRvIHVzZSB3aGlsZSBkcmFnZ2luZy5cbiAgICAgKlxuICAgICAqIEV4YW1wbGU6XG4gICAgICpcbiAgICAgKiBgYGBqc3hcbiAgICAgKiAgIGxldCBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgICogICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICogICAgICAgICAgIHJldHVybiAoXG4gICAgICogICAgICAgICAgICAgICA8RHJhZ2dhYmxlIHpJbmRleD17MTAwfT5cbiAgICAgKiAgICAgICAgICAgICAgICAgICA8ZGl2PkkgaGF2ZSBhIHpJbmRleDwvZGl2PlxuICAgICAqICAgICAgICAgICAgICAgPC9EcmFnZ2FibGU+XG4gICAgICogICAgICAgICAgICk7XG4gICAgICogICAgICAgfVxuICAgICAqICAgfSk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgekluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogVGhlc2UgcHJvcGVydGllcyBzaG91bGQgYmUgZGVmaW5lZCBvbiB0aGUgY2hpbGQsIG5vdCBoZXJlLlxuICAgICAqL1xuICAgIGNsYXNzTmFtZTogZG9udFNldE1lLFxuICAgIHN0eWxlOiBkb250U2V0TWUsXG4gICAgdHJhbnNmb3JtOiBkb250U2V0TWVcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIC4uLkRyYWdnYWJsZUNvcmUuZGVmYXVsdFByb3BzLFxuICAgIGF4aXM6ICdib3RoJyxcbiAgICBib3VuZHM6IGZhbHNlLFxuICAgIHN0YXJ0OiB7eDogMCwgeTogMH0sXG4gICAgekluZGV4OiBOYU5cbiAgfTtcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgc3VwZXIob3B0aW9ucyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgLy8gV2hldGhlciBvciBub3Qgd2UgYXJlIGN1cnJlbnRseSBkcmFnZ2luZy5cbiAgICAgIGRyYWdnaW5nOiBmYWxzZSxcblxuICAgICAgLy8gV2hldGhlciBvciBub3Qgd2UgaGF2ZSBiZWVuIGRyYWdnZWQgYmVmb3JlLlxuICAgICAgZHJhZ2dlZDogZmFsc2UsXG5cbiAgICAgIC8vIEN1cnJlbnQgdHJhbnNmb3JtIHggYW5kIHkuXG4gICAgICBjbGllbnRYOiB0aGlzLnByb3BzID8gdGhpcy5wcm9wcy5zdGFydC54IDogMCwgY2xpZW50WTogdGhpcy5wcm9wcyA/IHRoaXMucHJvcHMuc3RhcnQueSA6IDAsXG5cbiAgICAgIC8vIFVzZWQgZm9yIGNvbXBlbnNhdGluZyBmb3Igb3V0LW9mLWJvdW5kcyBkcmFnc1xuICAgICAgc2xhY2tYOiAwLCBzbGFja1k6IDAsXG5cbiAgICAgIC8vIENhbiBvbmx5IGRldGVybWluZSBpZiBTVkcgYWZ0ZXIgbW91bnRpbmdcbiAgICAgIGlzRWxlbWVudFNWRzogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgLypcbiAgc3RhdGU6IERyYWdnYWJsZVN0YXRlID0ge1xuICB9O1xuICAqL1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIENoZWNrIHRvIHNlZSBpZiB0aGUgZWxlbWVudCBwYXNzZWQgaXMgYW4gaW5zdGFuY2VvZiBTVkdFbGVtZW50XG4gICAgaWYoUmVhY3RET00uZmluZERPTU5vZGUodGhpcykgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNFbGVtZW50U1ZHOiB0cnVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2RyYWdnaW5nOiBmYWxzZX0pOyAvLyBwcmV2ZW50cyBpbnZhcmlhbnQgaWYgdW5tb3VudGVkIHdoaWxlIGRyYWdnaW5nXG4gIH1cblxuICBvbkRyYWdTdGFydDogQ29yZUV2ZW50SGFuZGxlciA9IChlLCBjb3JlRXZlbnQpID0+IHtcbiAgICBsb2coJ0RyYWdnYWJsZTogb25EcmFnU3RhcnQ6ICVqJywgY29yZUV2ZW50LnBvc2l0aW9uKTtcblxuICAgIC8vIFNob3J0LWNpcmN1aXQgaWYgdXNlcidzIGNhbGxiYWNrIGtpbGxlZCBpdC5cbiAgICBsZXQgc2hvdWxkU3RhcnQgPSB0aGlzLnByb3BzLm9uU3RhcnQoZSwgY3JlYXRlVUlFdmVudCh0aGlzLCBjb3JlRXZlbnQpKTtcbiAgICAvLyBLaWxscyBzdGFydCBldmVudCBvbiBjb3JlIGFzIHdlbGwsIHNvIG1vdmUgaGFuZGxlcnMgYXJlIG5ldmVyIGJvdW5kLlxuICAgIGlmIChzaG91bGRTdGFydCA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe2RyYWdnaW5nOiB0cnVlLCBkcmFnZ2VkOiB0cnVlfSk7XG4gIH07XG5cbiAgb25EcmFnOiBDb3JlRXZlbnRIYW5kbGVyID0gKGUsIGNvcmVFdmVudCkgPT4ge1xuICAgIGlmICghdGhpcy5zdGF0ZS5kcmFnZ2luZykgcmV0dXJuIGZhbHNlO1xuICAgIGxvZygnRHJhZ2dhYmxlOiBvbkRyYWc6ICVqJywgY29yZUV2ZW50LnBvc2l0aW9uKTtcblxuICAgIGxldCB1aUV2ZW50ID0gY3JlYXRlVUlFdmVudCh0aGlzLCBjb3JlRXZlbnQpO1xuXG4gICAgbGV0IG5ld1N0YXRlID0ge1xuICAgICAgY2xpZW50WDogdWlFdmVudC5wb3NpdGlvbi5sZWZ0LFxuICAgICAgY2xpZW50WTogdWlFdmVudC5wb3NpdGlvbi50b3BcbiAgICB9O1xuXG4gICAgLy8gS2VlcCB3aXRoaW4gYm91bmRzLlxuICAgIGlmICh0aGlzLnByb3BzLmJvdW5kcykge1xuICAgICAgLy8gU2F2ZSBvcmlnaW5hbCB4IGFuZCB5LlxuICAgICAgbGV0IHtjbGllbnRYLCBjbGllbnRZfSA9IG5ld1N0YXRlO1xuXG4gICAgICAvLyBBZGQgc2xhY2sgdG8gdGhlIHZhbHVlcyB1c2VkIHRvIGNhbGN1bGF0ZSBib3VuZCBwb3NpdGlvbi4gVGhpcyB3aWxsIGVuc3VyZSB0aGF0IGlmXG4gICAgICAvLyB3ZSBzdGFydCByZW1vdmluZyBzbGFjaywgdGhlIGVsZW1lbnQgd29uJ3QgcmVhY3QgdG8gaXQgcmlnaHQgYXdheSB1bnRpbCBpdCdzIGJlZW5cbiAgICAgIC8vIGNvbXBsZXRlbHkgcmVtb3ZlZC5cbiAgICAgIG5ld1N0YXRlLmNsaWVudFggKz0gdGhpcy5zdGF0ZS5zbGFja1g7XG4gICAgICBuZXdTdGF0ZS5jbGllbnRZICs9IHRoaXMuc3RhdGUuc2xhY2tZO1xuXG4gICAgICAvLyBHZXQgYm91bmQgcG9zaXRpb24uIFRoaXMgd2lsbCBjZWlsL2Zsb29yIHRoZSB4IGFuZCB5IHdpdGhpbiB0aGUgYm91bmRhcmllcy5cbiAgICAgIFtuZXdTdGF0ZS5jbGllbnRYLCBuZXdTdGF0ZS5jbGllbnRZXSA9IGdldEJvdW5kUG9zaXRpb24odGhpcywgbmV3U3RhdGUuY2xpZW50WCwgbmV3U3RhdGUuY2xpZW50WSk7XG5cbiAgICAgIC8vIFJlY2FsY3VsYXRlIHNsYWNrIGJ5IG5vdGluZyBob3cgbXVjaCB3YXMgc2hhdmVkIGJ5IHRoZSBib3VuZFBvc2l0aW9uIGhhbmRsZXIuXG4gICAgICBuZXdTdGF0ZS5zbGFja1ggPSB0aGlzLnN0YXRlLnNsYWNrWCArIChjbGllbnRYIC0gbmV3U3RhdGUuY2xpZW50WCk7XG4gICAgICBuZXdTdGF0ZS5zbGFja1kgPSB0aGlzLnN0YXRlLnNsYWNrWSArIChjbGllbnRZIC0gbmV3U3RhdGUuY2xpZW50WSk7XG5cbiAgICAgIC8vIFVwZGF0ZSB0aGUgZXZlbnQgd2UgZmlyZSB0byByZWZsZWN0IHdoYXQgcmVhbGx5IGhhcHBlbmVkIGFmdGVyIGJvdW5kcyB0b29rIGVmZmVjdC5cbiAgICAgIHVpRXZlbnQucG9zaXRpb24ubGVmdCA9IGNsaWVudFg7XG4gICAgICB1aUV2ZW50LnBvc2l0aW9uLnRvcCA9IGNsaWVudFk7XG4gICAgICB1aUV2ZW50LmRlbHRhWCA9IG5ld1N0YXRlLmNsaWVudFggLSB0aGlzLnN0YXRlLmNsaWVudFg7XG4gICAgICB1aUV2ZW50LmRlbHRhWSA9IG5ld1N0YXRlLmNsaWVudFkgLSB0aGlzLnN0YXRlLmNsaWVudFk7XG4gICAgfVxuXG4gICAgLy8gU2hvcnQtY2lyY3VpdCBpZiB1c2VyJ3MgY2FsbGJhY2sga2lsbGVkIGl0LlxuICAgIGxldCBzaG91bGRVcGRhdGUgPSB0aGlzLnByb3BzLm9uRHJhZyhlLCB1aUV2ZW50KTtcbiAgICBpZiAoc2hvdWxkVXBkYXRlID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG4gIH07XG5cbiAgb25EcmFnU3RvcDogQ29yZUV2ZW50SGFuZGxlciA9IChlLCBjb3JlRXZlbnQpID0+IHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuZHJhZ2dpbmcpIHJldHVybiBmYWxzZTtcblxuICAgIC8vIFNob3J0LWNpcmN1aXQgaWYgdXNlcidzIGNhbGxiYWNrIGtpbGxlZCBpdC5cbiAgICBsZXQgc2hvdWxkU3RvcCA9IHRoaXMucHJvcHMub25TdG9wKGUsIGNyZWF0ZVVJRXZlbnQodGhpcywgY29yZUV2ZW50KSk7XG4gICAgaWYgKHNob3VsZFN0b3AgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cbiAgICBsb2coJ0RyYWdnYWJsZTogb25EcmFnU3RvcDogJWonLCBjb3JlRXZlbnQucG9zaXRpb24pO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkcmFnZ2luZzogZmFsc2UsXG4gICAgICBzbGFja1g6IDAsXG4gICAgICBzbGFja1k6IDBcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKTogUmVhY3RFbGVtZW50IHtcbiAgICBsZXQgc3R5bGUgPSB7fSwgc3ZnVHJhbnNmb3JtID0gbnVsbDtcblxuICAgIC8vIEFkZCBhIENTUyB0cmFuc2Zvcm0gdG8gbW92ZSB0aGUgZWxlbWVudCBhcm91bmQuIFRoaXMgYWxsb3dzIHVzIHRvIG1vdmUgdGhlIGVsZW1lbnQgYXJvdW5kXG4gICAgLy8gd2l0aG91dCB3b3JyeWluZyBhYm91dCB3aGV0aGVyIG9yIG5vdCBpdCBpcyByZWxhdGl2ZWx5IG9yIGFic29sdXRlbHkgcG9zaXRpb25lZC5cbiAgICAvLyBJZiB0aGUgaXRlbSB5b3UgYXJlIGRyYWdnaW5nIGFscmVhZHkgaGFzIGEgdHJhbnNmb3JtIHNldCwgd3JhcCBpdCBpbiBhIDxzcGFuPiBzbyA8RHJhZ2dhYmxlPlxuICAgIC8vIGhhcyBhIGNsZWFuIHNsYXRlLlxuICAgIGNvbnN0IHRyYW5zZm9ybU9wdHMgPSB7XG4gICAgICAvLyBTZXQgbGVmdCBpZiBob3Jpem9udGFsIGRyYWcgaXMgZW5hYmxlZFxuICAgICAgeDogY2FuRHJhZ1godGhpcykgP1xuICAgICAgICB0aGlzLnN0YXRlLmNsaWVudFggOlxuICAgICAgICB0aGlzLnByb3BzLnN0YXJ0LngsXG5cbiAgICAgIC8vIFNldCB0b3AgaWYgdmVydGljYWwgZHJhZyBpcyBlbmFibGVkXG4gICAgICB5OiBjYW5EcmFnWSh0aGlzKSA/XG4gICAgICAgIHRoaXMuc3RhdGUuY2xpZW50WSA6XG4gICAgICAgIHRoaXMucHJvcHMuc3RhcnQueVxuICAgIH07XG5cbiAgICAvLyBJZiB0aGlzIGVsZW1lbnQgd2FzIFNWRywgd2UgdXNlIHRoZSBgdHJhbnNmb3JtYCBhdHRyaWJ1dGUuXG4gICAgaWYgKHRoaXMuc3RhdGUuaXNFbGVtZW50U1ZHKSB7XG4gICAgICBzdmdUcmFuc2Zvcm0gPSBjcmVhdGVTVkdUcmFuc2Zvcm0odHJhbnNmb3JtT3B0cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlID0gY3JlYXRlQ1NTVHJhbnNmb3JtKHRyYW5zZm9ybU9wdHMpO1xuICAgIH1cblxuICAgIC8vIHpJbmRleCBvcHRpb25cbiAgICBpZiAodGhpcy5zdGF0ZS5kcmFnZ2luZyAmJiAhaXNOYU4odGhpcy5wcm9wcy56SW5kZXgpKSB7XG4gICAgICBzdHlsZS56SW5kZXggPSB0aGlzLnByb3BzLnpJbmRleDtcbiAgICB9XG5cbiAgICAvLyBNYXJrIHdpdGggY2xhc3Mgd2hpbGUgZHJhZ2dpbmdcbiAgICBsZXQgY2xhc3NOYW1lID0gY2xhc3NOYW1lcygodGhpcy5wcm9wcy5jaGlsZHJlbi5wcm9wcy5jbGFzc05hbWUgfHwgJycpLCAncmVhY3QtZHJhZ2dhYmxlJywge1xuICAgICAgJ3JlYWN0LWRyYWdnYWJsZS1kcmFnZ2luZyc6IHRoaXMuc3RhdGUuZHJhZ2dpbmcsXG4gICAgICAncmVhY3QtZHJhZ2dhYmxlLWRyYWdnZWQnOiB0aGlzLnN0YXRlLmRyYWdnZWRcbiAgICB9KTtcblxuICAgIC8vIFJldXNlIHRoZSBjaGlsZCBwcm92aWRlZFxuICAgIC8vIFRoaXMgbWFrZXMgaXQgZmxleGlibGUgdG8gdXNlIHdoYXRldmVyIGVsZW1lbnQgaXMgd2FudGVkIChkaXYsIHVsLCBldGMpXG4gICAgcmV0dXJuIChcbiAgICAgIDxEcmFnZ2FibGVDb3JlIHsuLi50aGlzLnByb3BzfSBvblN0YXJ0PXt0aGlzLm9uRHJhZ1N0YXJ0fSBvbkRyYWc9e3RoaXMub25EcmFnfSBvblN0b3A9e3RoaXMub25EcmFnU3RvcH0+XG4gICAgICAgIHtSZWFjdC5jbG9uZUVsZW1lbnQoUmVhY3QuQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKSwge1xuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICAgIHN0eWxlOiB7Li4udGhpcy5wcm9wcy5jaGlsZHJlbi5wcm9wcy5zdHlsZSwgLi4uc3R5bGV9LFxuICAgICAgICAgIHRyYW5zZm9ybTogc3ZnVHJhbnNmb3JtXG4gICAgICAgIH0pfVxuICAgICAgPC9EcmFnZ2FibGVDb3JlPlxuICAgICk7XG4gIH1cbn1cblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9saWIvRHJhZ2dhYmxlLmVzNlxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCB7XCJjb21tb25qc1wiOlwicmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImFtZFwiOlwicmVhY3RcIixcInJvb3RcIjpcIlJlYWN0XCJ9XG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJyZWFjdC1kb21cIixcImNvbW1vbmpzMlwiOlwicmVhY3QtZG9tXCIsXCJhbWRcIjpcInJlYWN0LWRvbVwiLFwicm9vdFwiOlwiUmVhY3RET01cIn1cbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE2IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZykpO1xuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NsYXNzbmFtZXMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBAZmxvd1xuaW1wb3J0IHtmaW5kSW5BcnJheSwgaXNGdW5jdGlvbiwgaXNOdW0sIGludH0gZnJvbSAnLi9zaGltcyc7XG5pbXBvcnQgYnJvd3NlclByZWZpeCBmcm9tICcuL2dldFByZWZpeCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0IHR5cGUgRHJhZ2dhYmxlIGZyb20gJy4uL0RyYWdnYWJsZSc7XG5pbXBvcnQgdHlwZSBEcmFnZ2FibGVDb3JlIGZyb20gJy4uL0RyYWdnYWJsZUNvcmUnO1xuXG5leHBvcnQgdHlwZSBDb3JlRXZlbnQgPSB7XG4gIG5vZGU6IEhUTUxFbGVtZW50LFxuICBwb3NpdGlvbjoge1xuICAgIGRlbHRhWDogbnVtYmVyLCBkZWx0YVk6IG51bWJlcixcbiAgICBsYXN0WDogbnVtYmVyLCBsYXN0WTogbnVtYmVyLFxuICAgIGNsaWVudFg6IG51bWJlciwgY2xpZW50WTogbnVtYmVyXG4gIH1cbn07XG5cbmV4cG9ydCB0eXBlIFVJRXZlbnQgPSB7XG4gIG5vZGU6IEhUTUxFbGVtZW50LFxuICBwb3NpdGlvbjoge1xuICAgIGxlZnQ6IG51bWJlciwgdG9wOiBudW1iZXJcbiAgfSxcbiAgZGVsdGFYOiBudW1iZXIsIGRlbHRhWTogbnVtYmVyXG59O1xuXG5sZXQgbWF0Y2hlc1NlbGVjdG9yRnVuYyA9ICcnO1xuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoZXNTZWxlY3RvcihlbDogSFRNTEVsZW1lbnQsIHNlbGVjdG9yOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKCFtYXRjaGVzU2VsZWN0b3JGdW5jKSB7XG4gICAgbWF0Y2hlc1NlbGVjdG9yRnVuYyA9IGZpbmRJbkFycmF5KFtcbiAgICAgICdtYXRjaGVzJyxcbiAgICAgICd3ZWJraXRNYXRjaGVzU2VsZWN0b3InLFxuICAgICAgJ21vek1hdGNoZXNTZWxlY3RvcicsXG4gICAgICAnbXNNYXRjaGVzU2VsZWN0b3InLFxuICAgICAgJ29NYXRjaGVzU2VsZWN0b3InXG4gICAgXSwgZnVuY3Rpb24obWV0aG9kKXtcbiAgICAgIC8vICRGbG93SWdub3JlOiBEb2Vzbid0IHRoaW5rIGVsZW1lbnRzIGFyZSBpbmRleGFibGVcbiAgICAgIHJldHVybiBpc0Z1bmN0aW9uKGVsW21ldGhvZF0pO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gJEZsb3dJZ25vcmU6IERvZXNuJ3QgdGhpbmsgZWxlbWVudHMgYXJlIGluZGV4YWJsZVxuICByZXR1cm4gZWxbbWF0Y2hlc1NlbGVjdG9yRnVuY10uY2FsbChlbCwgc2VsZWN0b3IpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkRXZlbnQoZWw6ID9Ob2RlLCBldmVudDogc3RyaW5nLCBoYW5kbGVyOiBGdW5jdGlvbik6IHZvaWQge1xuICBpZiAoIWVsKSB7IHJldHVybjsgfVxuICBpZiAoZWwuYXR0YWNoRXZlbnQpIHtcbiAgICBlbC5hdHRhY2hFdmVudCgnb24nICsgZXZlbnQsIGhhbmRsZXIpO1xuICB9IGVsc2UgaWYgKGVsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICAvLyAkRmxvd0lnbm9yZTogRG9lc24ndCB0aGluayBlbGVtZW50cyBhcmUgaW5kZXhhYmxlXG4gICAgZWxbJ29uJyArIGV2ZW50XSA9IGhhbmRsZXI7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUV2ZW50KGVsOiA/Tm9kZSwgZXZlbnQ6IHN0cmluZywgaGFuZGxlcjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgaWYgKCFlbCkgeyByZXR1cm47IH1cbiAgaWYgKGVsLmRldGFjaEV2ZW50KSB7XG4gICAgZWwuZGV0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBoYW5kbGVyKTtcbiAgfSBlbHNlIGlmIChlbC5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gJEZsb3dJZ25vcmU6IERvZXNuJ3QgdGhpbmsgZWxlbWVudHMgYXJlIGluZGV4YWJsZVxuICAgIGVsWydvbicgKyBldmVudF0gPSBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvdXRlckhlaWdodChub2RlOiBIVE1MRWxlbWVudCk6IG51bWJlciB7XG4gIC8vIFRoaXMgaXMgZGVsaWJlcmF0ZWx5IGV4Y2x1ZGluZyBtYXJnaW4gZm9yIG91ciBjYWxjdWxhdGlvbnMsIHNpbmNlIHdlIGFyZSB1c2luZ1xuICAvLyBvZmZzZXRUb3Agd2hpY2ggaXMgaW5jbHVkaW5nIG1hcmdpbi4gU2VlIGdldEJvdW5kUG9zaXRpb25cbiAgbGV0IGhlaWdodCA9IG5vZGUuY2xpZW50SGVpZ2h0O1xuICBsZXQgY29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICBoZWlnaHQgKz0gaW50KGNvbXB1dGVkU3R5bGUuYm9yZGVyVG9wV2lkdGgpO1xuICBoZWlnaHQgKz0gaW50KGNvbXB1dGVkU3R5bGUuYm9yZGVyQm90dG9tV2lkdGgpO1xuICByZXR1cm4gaGVpZ2h0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3V0ZXJXaWR0aChub2RlOiBIVE1MRWxlbWVudCk6IG51bWJlciB7XG4gIC8vIFRoaXMgaXMgZGVsaWJlcmF0ZWx5IGV4Y2x1ZGluZyBtYXJnaW4gZm9yIG91ciBjYWxjdWxhdGlvbnMsIHNpbmNlIHdlIGFyZSB1c2luZ1xuICAvLyBvZmZzZXRMZWZ0IHdoaWNoIGlzIGluY2x1ZGluZyBtYXJnaW4uIFNlZSBnZXRCb3VuZFBvc2l0aW9uXG4gIGxldCB3aWR0aCA9IG5vZGUuY2xpZW50V2lkdGg7XG4gIGxldCBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gIHdpZHRoICs9IGludChjb21wdXRlZFN0eWxlLmJvcmRlckxlZnRXaWR0aCk7XG4gIHdpZHRoICs9IGludChjb21wdXRlZFN0eWxlLmJvcmRlclJpZ2h0V2lkdGgpO1xuICByZXR1cm4gd2lkdGg7XG59XG5leHBvcnQgZnVuY3Rpb24gaW5uZXJIZWlnaHQobm9kZTogSFRNTEVsZW1lbnQpOiBudW1iZXIge1xuICBsZXQgaGVpZ2h0ID0gbm9kZS5jbGllbnRIZWlnaHQ7XG4gIGxldCBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gIGhlaWdodCAtPSBpbnQoY29tcHV0ZWRTdHlsZS5wYWRkaW5nVG9wKTtcbiAgaGVpZ2h0IC09IGludChjb21wdXRlZFN0eWxlLnBhZGRpbmdCb3R0b20pO1xuICByZXR1cm4gaGVpZ2h0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5uZXJXaWR0aChub2RlOiBIVE1MRWxlbWVudCk6IG51bWJlciB7XG4gIGxldCB3aWR0aCA9IG5vZGUuY2xpZW50V2lkdGg7XG4gIGxldCBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gIHdpZHRoIC09IGludChjb21wdXRlZFN0eWxlLnBhZGRpbmdMZWZ0KTtcbiAgd2lkdGggLT0gaW50KGNvbXB1dGVkU3R5bGUucGFkZGluZ1JpZ2h0KTtcbiAgcmV0dXJuIHdpZHRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ1NTVHJhbnNmb3JtKHt4LCB5fToge3g6IG51bWJlciwgeTogbnVtYmVyfSk6IE9iamVjdCB7XG4gIC8vIFJlcGxhY2UgdW5pdGxlc3MgaXRlbXMgd2l0aCBweFxuICBsZXQgb3V0ID0ge3RyYW5zZm9ybTogJ3RyYW5zbGF0ZSgnICsgeCArICdweCwnICsgeSArICdweCknfTtcbiAgLy8gQWRkIHNpbmdsZSBwcmVmaXhlZCBwcm9wZXJ0eSBhcyB3ZWxsXG4gIGlmIChicm93c2VyUHJlZml4KSB7XG4gICAgb3V0W2Jyb3dzZXJQcmVmaXggKyAnVHJhbnNmb3JtJ10gPSBvdXQudHJhbnNmb3JtO1xuICB9XG4gIHJldHVybiBvdXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTVkdUcmFuc2Zvcm0oe3gsIHl9OiB7eDogbnVtYmVyLCB5OiBudW1iZXJ9KTogc3RyaW5nIHtcbiAgcmV0dXJuICd0cmFuc2xhdGUoJyArIHggKyAnLCcgKyB5ICsgJyknO1xufVxuXG4vLyBVc2VyLXNlbGVjdCBIYWNrczpcbi8vXG4vLyBVc2VmdWwgZm9yIHByZXZlbnRpbmcgYmx1ZSBoaWdobGlnaHRzIGFsbCBvdmVyIGV2ZXJ5dGhpbmcgd2hlbiBkcmFnZ2luZy5cbmxldCB1c2VyU2VsZWN0U3R5bGUgPSAnO3VzZXItc2VsZWN0OiBub25lOyc7XG5pZiAoYnJvd3NlclByZWZpeCkge1xuICB1c2VyU2VsZWN0U3R5bGUgKz0gJy0nICsgYnJvd3NlclByZWZpeC50b0xvd2VyQ2FzZSgpICsgJy11c2VyLXNlbGVjdDogbm9uZTsnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVXNlclNlbGVjdFN0eWxlcygpIHtcbiAgbGV0IHN0eWxlID0gZG9jdW1lbnQuYm9keS5nZXRBdHRyaWJ1dGUoJ3N0eWxlJykgfHwgJyc7XG4gIGRvY3VtZW50LmJvZHkuc2V0QXR0cmlidXRlKCdzdHlsZScsIHN0eWxlICsgdXNlclNlbGVjdFN0eWxlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVVzZXJTZWxlY3RTdHlsZXMoKSB7XG4gIGxldCBzdHlsZSA9IGRvY3VtZW50LmJvZHkuZ2V0QXR0cmlidXRlKCdzdHlsZScpIHx8ICcnO1xuICBkb2N1bWVudC5ib2R5LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBzdHlsZS5yZXBsYWNlKHVzZXJTZWxlY3RTdHlsZSwgJycpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlSGFja3MoY2hpbGRTdHlsZTogT2JqZWN0ID0ge30pOiBPYmplY3Qge1xuICAvLyBXb3JrYXJvdW5kIElFIHBvaW50ZXIgZXZlbnRzOyBzZWUgIzUxXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9temFicmlza2llL3JlYWN0LWRyYWdnYWJsZS9pc3N1ZXMvNTEjaXNzdWVjb21tZW50LTEwMzQ4ODI3OFxuICByZXR1cm4ge1xuICAgIHRvdWNoQWN0aW9uOiAnbm9uZScsXG4gICAgLi4uY2hpbGRTdHlsZVxuICB9O1xufVxuXG4vLyBDcmVhdGUgYW4gZXZlbnQgZXhwb3NlZCBieSA8RHJhZ2dhYmxlQ29yZT5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb3JlRXZlbnQoZHJhZ2dhYmxlOiBEcmFnZ2FibGVDb3JlLCBjbGllbnRYOiBudW1iZXIsIGNsaWVudFk6IG51bWJlcik6IENvcmVFdmVudCB7XG4gIC8vIFN0YXRlIGNoYW5nZXMgYXJlIG9mdGVuIChidXQgbm90IGFsd2F5cyEpIGFzeW5jLiBXZSB3YW50IHRoZSBsYXRlc3QgdmFsdWUuXG4gIGxldCBzdGF0ZSA9IGRyYWdnYWJsZS5fcGVuZGluZ1N0YXRlIHx8IGRyYWdnYWJsZS5zdGF0ZTtcbiAgbGV0IGlzU3RhcnQgPSAhaXNOdW0oc3RhdGUubGFzdFgpO1xuXG4gIHJldHVybiB7XG4gICAgbm9kZTogUmVhY3RET00uZmluZERPTU5vZGUoZHJhZ2dhYmxlKSxcbiAgICBwb3NpdGlvbjogaXNTdGFydCA/XG4gICAgICAvLyBJZiB0aGlzIGlzIG91ciBmaXJzdCBtb3ZlLCB1c2UgdGhlIGNsaWVudFggYW5kIGNsaWVudFkgYXMgbGFzdCBjb29yZHMuXG4gICAgICB7XG4gICAgICAgIGRlbHRhWDogMCwgZGVsdGFZOiAwLFxuICAgICAgICBsYXN0WDogY2xpZW50WCwgbGFzdFk6IGNsaWVudFksXG4gICAgICAgIGNsaWVudFg6IGNsaWVudFgsIGNsaWVudFk6IGNsaWVudFlcbiAgICAgIH0gOlxuICAgICAgLy8gT3RoZXJ3aXNlIGNhbGN1bGF0ZSBwcm9wZXIgdmFsdWVzLlxuICAgICAge1xuICAgICAgICBkZWx0YVg6IGNsaWVudFggLSBzdGF0ZS5sYXN0WCwgZGVsdGFZOiBjbGllbnRZIC0gc3RhdGUubGFzdFksXG4gICAgICAgIGxhc3RYOiBzdGF0ZS5sYXN0WCwgbGFzdFk6IHN0YXRlLmxhc3RZLFxuICAgICAgICBjbGllbnRYOiBjbGllbnRYLCBjbGllbnRZOiBjbGllbnRZXG4gICAgICB9XG4gIH07XG59XG5cbi8vIENyZWF0ZSBhbiBldmVudCBleHBvc2VkIGJ5IDxEcmFnZ2FibGU+XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVUlFdmVudChkcmFnZ2FibGU6IERyYWdnYWJsZSwgY29yZUV2ZW50OiBDb3JlRXZlbnQpOiBVSUV2ZW50IHtcbiAgcmV0dXJuIHtcbiAgICBub2RlOiBSZWFjdERPTS5maW5kRE9NTm9kZShkcmFnZ2FibGUpLFxuICAgIHBvc2l0aW9uOiB7XG4gICAgICBsZWZ0OiBkcmFnZ2FibGUuc3RhdGUuY2xpZW50WCArIGNvcmVFdmVudC5wb3NpdGlvbi5kZWx0YVgsXG4gICAgICB0b3A6IGRyYWdnYWJsZS5zdGF0ZS5jbGllbnRZICsgY29yZUV2ZW50LnBvc2l0aW9uLmRlbHRhWVxuICAgIH0sXG4gICAgZGVsdGFYOiBjb3JlRXZlbnQucG9zaXRpb24uZGVsdGFYLFxuICAgIGRlbHRhWTogY29yZUV2ZW50LnBvc2l0aW9uLmRlbHRhWVxuICB9O1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9saWIvdXRpbHMvZG9tRm5zLmVzNlxuICoqLyIsIi8vIEBmbG93XG4vLyBAY3JlZGl0cyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9yb2dvemhuaWtvZmYvYTQzY2ZlZDI3YzQxZTRlNjhjZGNcbmV4cG9ydCBmdW5jdGlvbiBmaW5kSW5BcnJheShhcnJheTogQXJyYXk8YW55PiwgY2FsbGJhY2s6IEZ1bmN0aW9uKTogYW55IHtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGNhbGxiYWNrLmFwcGx5KGNhbGxiYWNrLCBbYXJyYXlbaV0sIGksIGFycmF5XSkpIHJldHVybiBhcnJheVtpXTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbihmdW5jOiBhbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuIHR5cGVvZiBmdW5jID09PSAnZnVuY3Rpb24nIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChmdW5jKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtKG51bTogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiB0eXBlb2YgbnVtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4obnVtKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGludChhOiBzdHJpbmcpOiBudW1iZXIge1xuICByZXR1cm4gcGFyc2VJbnQoYSwgMTApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG9udFNldE1lKHByb3BzOiBPYmplY3QsIHByb3BOYW1lOiBzdHJpbmcsIGNvbXBvbmVudE5hbWU6IHN0cmluZykge1xuICBpZiAocHJvcHNbcHJvcE5hbWVdKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHByb3AgJHtwcm9wTmFtZX0gcGFzc2VkIHRvICR7Y29tcG9uZW50TmFtZX0gLSBkbyBub3Qgc2V0IHRoaXMsIHNldCBpdCBvbiB0aGUgY2hpbGQuYCk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbGliL3V0aWxzL3NoaW1zLmVzNlxuICoqLyIsIi8vIEBmbG93XG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVQcmVmaXgoKTogc3RyaW5nIHtcbiAgLy8gQ2hlY2tpbmcgc3BlY2lmaWNhbGx5IGZvciAnd2luZG93LmRvY3VtZW50JyBpcyBmb3IgcHNldWRvLWJyb3dzZXIgc2VydmVyLXNpZGVcbiAgLy8gZW52aXJvbm1lbnRzIHRoYXQgZGVmaW5lICd3aW5kb3cnIGFzIHRoZSBnbG9iYWwgY29udGV4dC5cbiAgLy8gRS5nLiBSZWFjdC1yYWlscyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JlYWN0LXJhaWxzL3B1bGwvODQpXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygd2luZG93LmRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgcmV0dXJuICcnO1xuXG4gIC8vIFRoYW5rcyBEYXZpZCBXYWxzaFxuICBsZXQgc3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCAnJyksXG4gIHByZSA9IChBcnJheS5wcm90b3R5cGUuc2xpY2VcbiAgICAgICAgLmNhbGwoc3R5bGVzKVxuICAgICAgICAuam9pbignJylcbiAgICAgICAgLm1hdGNoKC8tKG1venx3ZWJraXR8bXMpLS8pIHx8IChzdHlsZXMuT0xpbmsgPT09ICcnID8gWycnLCAnbyddIDogW10pXG4gICAgICApWzFdO1xuICAvLyAnbXMnIGlzIG5vdCB0aXRsZWNhc2VkXG4gIGlmIChwcmUgPT09IHVuZGVmaW5lZCB8fCBwcmUgPT09IG51bGwpIHJldHVybiAnJztcbiAgaWYgKHByZSA9PT0gJ21zJykgcmV0dXJuIHByZTtcbiAgaWYgKHByZSA9PT0gdW5kZWZpbmVkIHx8IHByZSA9PT0gbnVsbCkgcmV0dXJuICcnO1xuICByZXR1cm4gcHJlLnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyBwcmUuc2xpY2UoMSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlUHJlZml4KCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2xpYi91dGlscy9nZXRQcmVmaXguZXM2XG4gKiovIiwiLy8gQGZsb3dcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2lzTnVtLCBpbnR9IGZyb20gJy4vc2hpbXMnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQge2lubmVyV2lkdGgsIGlubmVySGVpZ2h0LCBvdXRlcldpZHRoLCBvdXRlckhlaWdodH0gZnJvbSAnLi9kb21GbnMnO1xuXG5pbXBvcnQgdHlwZSBEcmFnZ2FibGUgZnJvbSAnLi4vRHJhZ2dhYmxlJztcbmV4cG9ydCB0eXBlIENvbnRyb2xQb3NpdGlvbiA9IHtcbiAgY2xpZW50WDogbnVtYmVyLCBjbGllbnRZOiBudW1iZXJcbn07XG5leHBvcnQgdHlwZSBCb3VuZHMgPSB7XG4gIGxlZnQ6IG51bWJlciwgdG9wOiBudW1iZXIsIHJpZ2h0OiBudW1iZXIsIGJvdHRvbTogbnVtYmVyXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Qm91bmRQb3NpdGlvbihkcmFnZ2FibGU6IERyYWdnYWJsZSwgY2xpZW50WDogbnVtYmVyLCBjbGllbnRZOiBudW1iZXIpOiBbbnVtYmVyLCBudW1iZXJdIHtcbiAgLy8gSWYgbm8gYm91bmRzLCBzaG9ydC1jaXJjdWl0IGFuZCBtb3ZlIG9uXG4gIGlmICghZHJhZ2dhYmxlLnByb3BzLmJvdW5kcykgcmV0dXJuIFtjbGllbnRYLCBjbGllbnRZXTtcblxuICAvLyBDbG9uZSBuZXcgYm91bmRzXG4gIGxldCB7Ym91bmRzfSA9IGRyYWdnYWJsZS5wcm9wcztcbiAgYm91bmRzID0gdHlwZW9mIGJvdW5kcyA9PT0gJ3N0cmluZycgPyBib3VuZHMgOiBjbG9uZUJvdW5kcyhib3VuZHMpO1xuICBsZXQgbm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKGRyYWdnYWJsZSk7XG5cbiAgaWYgKHR5cGVvZiBib3VuZHMgPT09ICdzdHJpbmcnKSB7XG4gICAgbGV0IGJvdW5kTm9kZTtcbiAgICBpZiAoYm91bmRzID09PSAncGFyZW50Jykge1xuICAgICAgYm91bmROb2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICBib3VuZE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJvdW5kcyk7XG4gICAgICBpZiAoIWJvdW5kTm9kZSkgdGhyb3cgbmV3IEVycm9yKCdCb3VuZHMgc2VsZWN0b3IgXCInICsgYm91bmRzICsgJ1wiIGNvdWxkIG5vdCBmaW5kIGFuIGVsZW1lbnQuJyk7XG4gICAgfVxuICAgIGxldCBub2RlU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICBsZXQgYm91bmROb2RlU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShib3VuZE5vZGUpO1xuICAgIC8vIENvbXB1dGUgYm91bmRzLiBUaGlzIGlzIGEgcGFpbiB3aXRoIHBhZGRpbmcgYW5kIG9mZnNldHMgYnV0IHRoaXMgZ2V0cyBpdCBleGFjdGx5IHJpZ2h0LlxuICAgIGJvdW5kcyA9IHtcbiAgICAgIGxlZnQ6IC1ub2RlLm9mZnNldExlZnQgKyBpbnQoYm91bmROb2RlU3R5bGUucGFkZGluZ0xlZnQpICtcbiAgICAgICAgICAgIGludChub2RlU3R5bGUuYm9yZGVyTGVmdFdpZHRoKSArIGludChub2RlU3R5bGUubWFyZ2luTGVmdCksXG4gICAgICB0b3A6IC1ub2RlLm9mZnNldFRvcCArIGludChib3VuZE5vZGVTdHlsZS5wYWRkaW5nVG9wKSArXG4gICAgICAgICAgICBpbnQobm9kZVN0eWxlLmJvcmRlclRvcFdpZHRoKSArIGludChub2RlU3R5bGUubWFyZ2luVG9wKSxcbiAgICAgIHJpZ2h0OiBpbm5lcldpZHRoKGJvdW5kTm9kZSkgLSBvdXRlcldpZHRoKG5vZGUpIC0gbm9kZS5vZmZzZXRMZWZ0LFxuICAgICAgYm90dG9tOiBpbm5lckhlaWdodChib3VuZE5vZGUpIC0gb3V0ZXJIZWlnaHQobm9kZSkgLSBub2RlLm9mZnNldFRvcFxuICAgIH07XG4gIH1cblxuICAvLyBLZWVwIHggYW5kIHkgYmVsb3cgcmlnaHQgYW5kIGJvdHRvbSBsaW1pdHMuLi5cbiAgaWYgKGlzTnVtKGJvdW5kcy5yaWdodCkpIGNsaWVudFggPSBNYXRoLm1pbihjbGllbnRYLCBib3VuZHMucmlnaHQpO1xuICBpZiAoaXNOdW0oYm91bmRzLmJvdHRvbSkpIGNsaWVudFkgPSBNYXRoLm1pbihjbGllbnRZLCBib3VuZHMuYm90dG9tKTtcblxuICAvLyBCdXQgYWJvdmUgbGVmdCBhbmQgdG9wIGxpbWl0cy5cbiAgaWYgKGlzTnVtKGJvdW5kcy5sZWZ0KSkgY2xpZW50WCA9IE1hdGgubWF4KGNsaWVudFgsIGJvdW5kcy5sZWZ0KTtcbiAgaWYgKGlzTnVtKGJvdW5kcy50b3ApKSBjbGllbnRZID0gTWF0aC5tYXgoY2xpZW50WSwgYm91bmRzLnRvcCk7XG5cbiAgcmV0dXJuIFtjbGllbnRYLCBjbGllbnRZXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNuYXBUb0dyaWQoZ3JpZDogW251bWJlciwgbnVtYmVyXSwgcGVuZGluZ1g6IG51bWJlciwgcGVuZGluZ1k6IG51bWJlcik6IFtudW1iZXIsIG51bWJlcl0ge1xuICBsZXQgeCA9IE1hdGgucm91bmQocGVuZGluZ1ggLyBncmlkWzBdKSAqIGdyaWRbMF07XG4gIGxldCB5ID0gTWF0aC5yb3VuZChwZW5kaW5nWSAvIGdyaWRbMV0pICogZ3JpZFsxXTtcbiAgcmV0dXJuIFt4LCB5XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbkRyYWdYKGRyYWdnYWJsZTogUmVhY3QuQ29tcG9uZW50KTogYm9vbGVhbiB7XG4gIHJldHVybiBkcmFnZ2FibGUucHJvcHMuYXhpcyA9PT0gJ2JvdGgnIHx8IGRyYWdnYWJsZS5wcm9wcy5heGlzID09PSAneCc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYW5EcmFnWShkcmFnZ2FibGU6IFJlYWN0LkNvbXBvbmVudCk6IGJvb2xlYW4ge1xuICByZXR1cm4gZHJhZ2dhYmxlLnByb3BzLmF4aXMgPT09ICdib3RoJyB8fCBkcmFnZ2FibGUucHJvcHMuYXhpcyA9PT0gJ3knO1xufVxuXG4vLyBHZXQge2NsaWVudFgsIGNsaWVudFl9IHBvc2l0aW9ucyBmcm9tIGV2ZW50LlxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRyb2xQb3NpdGlvbihlOiBFdmVudCk6IENvbnRyb2xQb3NpdGlvbiB7XG4gIGxldCBwb3NpdGlvbiA9IChlLnRhcmdldFRvdWNoZXMgJiYgZS50YXJnZXRUb3VjaGVzWzBdKSB8fCBlO1xuICByZXR1cm4ge1xuICAgIGNsaWVudFg6IHBvc2l0aW9uLmNsaWVudFgsXG4gICAgY2xpZW50WTogcG9zaXRpb24uY2xpZW50WVxuICB9O1xufVxuXG4vLyBBIGxvdCBmYXN0ZXIgdGhhbiBzdHJpbmdpZnkvcGFyc2VcbmZ1bmN0aW9uIGNsb25lQm91bmRzKGJvdW5kczogQm91bmRzKTogQm91bmRzIHtcbiAgcmV0dXJuIHtcbiAgICBsZWZ0OiBib3VuZHMubGVmdCxcbiAgICB0b3A6IGJvdW5kcy50b3AsXG4gICAgcmlnaHQ6IGJvdW5kcy5yaWdodCxcbiAgICBib3R0b206IGJvdW5kcy5ib3R0b21cbiAgfTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbGliL3V0aWxzL3Bvc2l0aW9uRm5zLmVzNlxuICoqLyIsIi8vIEBmbG93XG5pbXBvcnQge2RlZmF1bHQgYXMgUmVhY3QsIFByb3BUeXBlc30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHttYXRjaGVzU2VsZWN0b3IsIGNyZWF0ZUNvcmVFdmVudCwgYWRkRXZlbnQsIHJlbW92ZUV2ZW50LCBhZGRVc2VyU2VsZWN0U3R5bGVzLFxuICAgICAgICByZW1vdmVVc2VyU2VsZWN0U3R5bGVzLCBzdHlsZUhhY2tzfSBmcm9tICcuL3V0aWxzL2RvbUZucyc7XG5pbXBvcnQge2dldENvbnRyb2xQb3NpdGlvbiwgc25hcFRvR3JpZH0gZnJvbSAnLi91dGlscy9wb3NpdGlvbkZucyc7XG5pbXBvcnQge2RvbnRTZXRNZX0gZnJvbSAnLi91dGlscy9zaGltcyc7XG5pbXBvcnQgbG9nIGZyb20gJy4vdXRpbHMvbG9nJztcblxuLy8gU2ltcGxlIGFic3RyYWN0aW9uIGZvciBkcmFnZ2luZyBldmVudHMgbmFtZXMuXG5jb25zdCBldmVudHNGb3IgPSB7XG4gIHRvdWNoOiB7XG4gICAgc3RhcnQ6ICd0b3VjaHN0YXJ0JyxcbiAgICBtb3ZlOiAndG91Y2htb3ZlJyxcbiAgICBzdG9wOiAndG91Y2hlbmQnXG4gIH0sXG4gIG1vdXNlOiB7XG4gICAgc3RhcnQ6ICdtb3VzZWRvd24nLFxuICAgIG1vdmU6ICdtb3VzZW1vdmUnLFxuICAgIHN0b3A6ICdtb3VzZXVwJ1xuICB9XG59O1xuXG4vLyBEZWZhdWx0IHRvIG1vdXNlIGV2ZW50cy5cbmxldCBkcmFnRXZlbnRGb3IgPSBldmVudHNGb3IubW91c2U7XG5cbnR5cGUgRXZlbnRIYW5kbGVyID0gKGU6IEV2ZW50KSA9PiB2b2lkO1xudHlwZSBDb3JlU3RhdGUgPSB7XG4gIGRyYWdnaW5nOiBib29sZWFuLFxuICBsYXN0WDogP251bWJlcixcbiAgbGFzdFk6ID9udW1iZXJcbn07XG5cbi8vXG4vLyBEZWZpbmUgPERyYWdnYWJsZUNvcmU+LlxuLy9cbi8vIDxEcmFnZ2FibGVDb3JlPiBpcyBmb3IgYWR2YW5jZWQgdXNhZ2Ugb2YgPERyYWdnYWJsZT4uIEl0IG1haW50YWlucyBtaW5pbWFsIGludGVybmFsIHN0YXRlIHNvIGl0IGNhblxuLy8gd29yayB3ZWxsIHdpdGggbGlicmFyaWVzIHRoYXQgcmVxdWlyZSBtb3JlIGNvbnRyb2wgb3ZlciB0aGUgZWxlbWVudC5cbi8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWdnYWJsZUNvcmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdEcmFnZ2FibGVDb3JlJztcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIGBhbGxvd0FueUNsaWNrYCBhbGxvd3MgZHJhZ2dpbmcgdXNpbmcgYW55IG1vdXNlIGJ1dHRvbi5cbiAgICAgKiBCeSBkZWZhdWx0LCB3ZSBvbmx5IGFjY2VwdCB0aGUgbGVmdCBidXR0b24uXG4gICAgICpcbiAgICAgKiBEZWZhdWx0cyB0byBgZmFsc2VgLlxuICAgICAqL1xuICAgIGFsbG93QW55Q2xpY2s6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogYGRpc2FibGVkYCwgaWYgdHJ1ZSwgc3RvcHMgdGhlIDxEcmFnZ2FibGU+IGZyb20gZHJhZ2dpbmcuIEFsbCBoYW5kbGVycyxcbiAgICAgKiB3aXRoIHRoZSBleGNlcHRpb24gb2YgYG9uTW91c2VEb3duYCwgd2lsbCBub3QgZmlyZS5cbiAgICAgKlxuICAgICAqIEV4YW1wbGU6XG4gICAgICpcbiAgICAgKiBgYGBqc3hcbiAgICAgKiAgIGxldCBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgICogICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICogICAgICAgICAgIHJldHVybiAoXG4gICAgICogICAgICAgICAgICAgICA8RHJhZ2dhYmxlIGRpc2FibGVkPXt0cnVlfT5cbiAgICAgKiAgICAgICAgICAgICAgICAgICA8ZGl2PkkgY2FuJ3QgYmUgZHJhZ2dlZDwvZGl2PlxuICAgICAqICAgICAgICAgICAgICAgPC9EcmFnZ2FibGU+XG4gICAgICogICAgICAgICAgICk7XG4gICAgICogICAgICAgfVxuICAgICAqICAgfSk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogQnkgZGVmYXVsdCwgd2UgYWRkICd1c2VyLXNlbGVjdDpub25lJyBhdHRyaWJ1dGVzIHRvIHRoZSBkb2N1bWVudCBib2R5XG4gICAgICogdG8gcHJldmVudCB1Z2x5IHRleHQgc2VsZWN0aW9uIGR1cmluZyBkcmFnLiBJZiB0aGlzIGlzIGNhdXNpbmcgcHJvYmxlbXNcbiAgICAgKiBmb3IgeW91ciBhcHAsIHNldCB0aGlzIHRvIGBmYWxzZWAuXG4gICAgICovXG4gICAgZW5hYmxlVXNlclNlbGVjdEhhY2s6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogYGdyaWRgIHNwZWNpZmllcyB0aGUgeCBhbmQgeSB0aGF0IGRyYWdnaW5nIHNob3VsZCBzbmFwIHRvLlxuICAgICAqXG4gICAgICogRXhhbXBsZTpcbiAgICAgKlxuICAgICAqIGBgYGpzeFxuICAgICAqICAgbGV0IEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICAgKiAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgKiAgICAgICAgICAgcmV0dXJuIChcbiAgICAgKiAgICAgICAgICAgICAgIDxEcmFnZ2FibGUgZ3JpZD17WzI1LCAyNV19PlxuICAgICAqICAgICAgICAgICAgICAgICAgIDxkaXY+SSBzbmFwIHRvIGEgMjUgeCAyNSBncmlkPC9kaXY+XG4gICAgICogICAgICAgICAgICAgICA8L0RyYWdnYWJsZT5cbiAgICAgKiAgICAgICAgICAgKTtcbiAgICAgKiAgICAgICB9XG4gICAgICogICB9KTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBncmlkOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKSxcblxuICAgIC8qKlxuICAgICAqIGBoYW5kbGVgIHNwZWNpZmllcyBhIHNlbGVjdG9yIHRvIGJlIHVzZWQgYXMgdGhlIGhhbmRsZSB0aGF0IGluaXRpYXRlcyBkcmFnLlxuICAgICAqXG4gICAgICogRXhhbXBsZTpcbiAgICAgKlxuICAgICAqIGBgYGpzeFxuICAgICAqICAgbGV0IEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICAgKiAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgKiAgICAgICAgIHJldHVybiAoXG4gICAgICogICAgICAgICAgICA8RHJhZ2dhYmxlIGhhbmRsZT1cIi5oYW5kbGVcIj5cbiAgICAgKiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgKiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFuZGxlXCI+Q2xpY2sgbWUgdG8gZHJhZzwvZGl2PlxuICAgICAqICAgICAgICAgICAgICAgICAgPGRpdj5UaGlzIGlzIHNvbWUgb3RoZXIgY29udGVudDwvZGl2PlxuICAgICAqICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgKiAgICAgICAgICAgPC9EcmFnZ2FibGU+XG4gICAgICogICAgICAgICApO1xuICAgICAqICAgICAgIH1cbiAgICAgKiAgIH0pO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIGhhbmRsZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIGBjYW5jZWxgIHNwZWNpZmllcyBhIHNlbGVjdG9yIHRvIGJlIHVzZWQgdG8gcHJldmVudCBkcmFnIGluaXRpYWxpemF0aW9uLlxuICAgICAqXG4gICAgICogRXhhbXBsZTpcbiAgICAgKlxuICAgICAqIGBgYGpzeFxuICAgICAqICAgbGV0IEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICAgKiAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgKiAgICAgICAgICAgcmV0dXJuKFxuICAgICAqICAgICAgICAgICAgICAgPERyYWdnYWJsZSBjYW5jZWw9XCIuY2FuY2VsXCI+XG4gICAgICogICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgKiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FuY2VsXCI+WW91IGNhbid0IGRyYWcgZnJvbSBoZXJlPC9kaXY+XG4gICAgICogICAgICAgICAgICA8ZGl2PkRyYWdnaW5nIGhlcmUgd29ya3MgZmluZTwvZGl2PlxuICAgICAqICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAqICAgICAgICAgICAgICAgPC9EcmFnZ2FibGU+XG4gICAgICogICAgICAgICAgICk7XG4gICAgICogICAgICAgfVxuICAgICAqICAgfSk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgY2FuY2VsOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gZHJhZ2dpbmcgc3RhcnRzLlxuICAgICAqIElmIHRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgYm9vbGVhbiBmYWxzZSwgZHJhZ2dpbmcgd2lsbCBiZSBjYW5jZWxlZC5cbiAgICAgKlxuICAgICAqIEV4YW1wbGU6XG4gICAgICpcbiAgICAgKiBgYGBqc1xuICAgICAqICBmdW5jdGlvbiAoZXZlbnQsIHVpKSB7fVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogYGV2ZW50YCBpcyB0aGUgRXZlbnQgdGhhdCB3YXMgdHJpZ2dlcmVkLlxuICAgICAqIGB1aWAgaXMgYW4gb2JqZWN0OlxuICAgICAqXG4gICAgICogYGBganNcbiAgICAgKiAge1xuICAgICAqICAgIHBvc2l0aW9uOiB7dG9wOiAwLCBsZWZ0OiAwfVxuICAgICAqICB9XG4gICAgICogYGBgXG4gICAgICovXG4gICAgb25TdGFydDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hpbGUgZHJhZ2dpbmcuXG4gICAgICogSWYgdGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSBib29sZWFuIGZhbHNlLCBkcmFnZ2luZyB3aWxsIGJlIGNhbmNlbGVkLlxuICAgICAqXG4gICAgICogRXhhbXBsZTpcbiAgICAgKlxuICAgICAqIGBgYGpzXG4gICAgICogIGZ1bmN0aW9uIChldmVudCwgdWkpIHt9XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBgZXZlbnRgIGlzIHRoZSBFdmVudCB0aGF0IHdhcyB0cmlnZ2VyZWQuXG4gICAgICogYHVpYCBpcyBhbiBvYmplY3Q6XG4gICAgICpcbiAgICAgKiBgYGBqc1xuICAgICAqICB7XG4gICAgICogICAgcG9zaXRpb246IHt0b3A6IDAsIGxlZnQ6IDB9XG4gICAgICogIH1cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBvbkRyYWc6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gZHJhZ2dpbmcgc3RvcHMuXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOlxuICAgICAqXG4gICAgICogYGBganNcbiAgICAgKiAgZnVuY3Rpb24gKGV2ZW50LCB1aSkge31cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIGBldmVudGAgaXMgdGhlIEV2ZW50IHRoYXQgd2FzIHRyaWdnZXJlZC5cbiAgICAgKiBgdWlgIGlzIGFuIG9iamVjdDpcbiAgICAgKlxuICAgICAqIGBgYGpzXG4gICAgICogIHtcbiAgICAgKiAgICBwb3NpdGlvbjoge3RvcDogMCwgbGVmdDogMH1cbiAgICAgKiAgfVxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIG9uU3RvcDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBBIHdvcmthcm91bmQgb3B0aW9uIHdoaWNoIGNhbiBiZSBwYXNzZWQgaWYgb25Nb3VzZURvd24gbmVlZHMgdG8gYmUgYWNjZXNzZWQsXG4gICAgICogc2luY2UgaXQnbGwgYWx3YXlzIGJlIGJsb2NrZWQgKGR1ZSB0byB0aGF0IHRoZXJlJ3MgaW50ZXJuYWwgdXNlIG9mIG9uTW91c2VEb3duKVxuICAgICAqL1xuICAgIG9uTW91c2VEb3duOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFRoZXNlIHByb3BlcnRpZXMgc2hvdWxkIGJlIGRlZmluZWQgb24gdGhlIGNoaWxkLCBub3QgaGVyZS5cbiAgICAgKi9cbiAgICBjbGFzc05hbWU6IGRvbnRTZXRNZSxcbiAgICBzdHlsZTogZG9udFNldE1lLFxuICAgIHRyYW5zZm9ybTogZG9udFNldE1lXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBhbGxvd0FueUNsaWNrOiBmYWxzZSwgLy8gYnkgZGVmYXVsdCBvbmx5IGFjY2VwdCBsZWZ0IGNsaWNrXG4gICAgY2FuY2VsOiBudWxsLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBlbmFibGVVc2VyU2VsZWN0SGFjazogdHJ1ZSxcbiAgICBoYW5kbGU6IG51bGwsXG4gICAgZ3JpZDogbnVsbCxcbiAgICB0cmFuc2Zvcm06IG51bGwsXG4gICAgb25TdGFydDogZnVuY3Rpb24oKXt9LFxuICAgIG9uRHJhZzogZnVuY3Rpb24oKXt9LFxuICAgIG9uU3RvcDogZnVuY3Rpb24oKXt9LFxuICAgIG9uTW91c2VEb3duOiBmdW5jdGlvbigpe31cbiAgfTtcblxuICBzdGF0ZTogQ29yZVN0YXRlID0ge1xuICAgIGRyYWdnaW5nOiBmYWxzZSxcbiAgICAvLyBVc2VkIHdoaWxlIGRyYWdnaW5nIHRvIGRldGVybWluZSBkZWx0YXMuXG4gICAgbGFzdFg6IG51bGwsIGxhc3RZOiBudWxsXG4gIH07XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgLy8gUmVtb3ZlIGFueSBsZWZ0b3ZlciBldmVudCBoYW5kbGVycy4gUmVtb3ZlIGJvdGggdG91Y2ggYW5kIG1vdXNlIGhhbmRsZXJzIGluIGNhc2VcbiAgICAvLyBzb21lIGJyb3dzZXIgcXVpcmsgY2F1c2VkIGEgdG91Y2ggZXZlbnQgdG8gZmlyZSBkdXJpbmcgYSBtb3VzZSBtb3ZlLCBvciB2aWNlIHZlcnNhLlxuICAgIHJlbW92ZUV2ZW50KGRvY3VtZW50LCBldmVudHNGb3IubW91c2UubW92ZSwgdGhpcy5oYW5kbGVEcmFnKTtcbiAgICByZW1vdmVFdmVudChkb2N1bWVudCwgZXZlbnRzRm9yLnRvdWNoLm1vdmUsIHRoaXMuaGFuZGxlRHJhZyk7XG4gICAgcmVtb3ZlRXZlbnQoZG9jdW1lbnQsIGV2ZW50c0Zvci5tb3VzZS5zdG9wLCB0aGlzLmhhbmRsZURyYWdTdG9wKTtcbiAgICByZW1vdmVFdmVudChkb2N1bWVudCwgZXZlbnRzRm9yLnRvdWNoLnN0b3AsIHRoaXMuaGFuZGxlRHJhZ1N0b3ApO1xuICAgIHJlbW92ZUV2ZW50KGRvY3VtZW50LCAnc2Nyb2xsJywgdGhpcy5oYW5kbGVTY3JvbGwpO1xuICAgIGlmICh0aGlzLnByb3BzLmVuYWJsZVVzZXJTZWxlY3RIYWNrKSByZW1vdmVVc2VyU2VsZWN0U3R5bGVzKCk7XG4gIH1cblxuICBoYW5kbGVEcmFnU3RhcnQ6IEV2ZW50SGFuZGxlciA9IChlKSA9PiB7XG4gICAgLy8gTWFrZSBpdCBwb3NzaWJsZSB0byBhdHRhY2ggZXZlbnQgaGFuZGxlcnMgb24gdG9wIG9mIHRoaXMgb25lLlxuICAgIHRoaXMucHJvcHMub25Nb3VzZURvd24oZSk7XG5cbiAgICAvLyBPbmx5IGFjY2VwdCBsZWZ0LWNsaWNrcy5cbiAgICBpZiAoIXRoaXMucHJvcHMuYWxsb3dBbnlDbGljayAmJiB0eXBlb2YgZS5idXR0b24gPT09ICdudW1iZXInICYmIGUuYnV0dG9uICE9PSAwKSByZXR1cm4gZmFsc2U7XG5cbiAgICAvLyBTaG9ydCBjaXJjdWl0IGlmIGhhbmRsZSBvciBjYW5jZWwgcHJvcCB3YXMgcHJvdmlkZWQgYW5kIHNlbGVjdG9yIGRvZXNuJ3QgbWF0Y2guXG4gICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZWQgfHxcbiAgICAgICh0aGlzLnByb3BzLmhhbmRsZSAmJiAhbWF0Y2hlc1NlbGVjdG9yKGUudGFyZ2V0LCB0aGlzLnByb3BzLmhhbmRsZSkpIHx8XG4gICAgICAodGhpcy5wcm9wcy5jYW5jZWwgJiYgbWF0Y2hlc1NlbGVjdG9yKGUudGFyZ2V0LCB0aGlzLnByb3BzLmNhbmNlbCkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gU2V0IHRvdWNoIGlkZW50aWZpZXIgaW4gY29tcG9uZW50IHN0YXRlIGlmIHRoaXMgaXMgYSB0b3VjaCBldmVudC4gVGhpcyBhbGxvd3MgdXMgdG9cbiAgICAvLyBkaXN0aW5ndWlzaCBiZXR3ZWVuIGluZGl2aWR1YWwgdG91Y2hlcyBvbiBtdWx0aXRvdWNoIHNjcmVlbnMgYnkgaWRlbnRpZnlpbmcgd2hpY2hcbiAgICAvLyB0b3VjaHBvaW50IHdhcyBzZXQgdG8gdGhpcyBlbGVtZW50LlxuICAgIGlmIChlLnRhcmdldFRvdWNoZXMpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7dG91Y2hJZGVudGlmaWVyOiBlLnRhcmdldFRvdWNoZXNbMF0uaWRlbnRpZmllcn0pO1xuICAgIH1cblxuICAgIC8vIEFkZCBhIHN0eWxlIHRvIHRoZSBib2R5IHRvIGRpc2FibGUgdXNlci1zZWxlY3QuIFRoaXMgcHJldmVudHMgdGV4dCBmcm9tXG4gICAgLy8gYmVpbmcgc2VsZWN0ZWQgYWxsIG92ZXIgdGhlIHBhZ2UuXG4gICAgaWYgKHRoaXMucHJvcHMuZW5hYmxlVXNlclNlbGVjdEhhY2spIGFkZFVzZXJTZWxlY3RTdHlsZXMoKTtcblxuICAgIC8vIEdldCB0aGUgY3VycmVudCBkcmFnIHBvaW50IGZyb20gdGhlIGV2ZW50LiBUaGlzIGlzIHVzZWQgYXMgdGhlIG9mZnNldC5cbiAgICBsZXQge2NsaWVudFgsIGNsaWVudFl9ID0gZ2V0Q29udHJvbFBvc2l0aW9uKGUpO1xuXG4gICAgLy8gQ3JlYXRlIGFuIGV2ZW50IG9iamVjdCB3aXRoIGFsbCB0aGUgZGF0YSBwYXJlbnRzIG5lZWQgdG8gbWFrZSBhIGRlY2lzaW9uIGhlcmUuXG4gICAgbGV0IGNvcmVFdmVudCA9IGNyZWF0ZUNvcmVFdmVudCh0aGlzLCBjbGllbnRYLCBjbGllbnRZKTtcblxuICAgIGxvZygnRHJhZ2dhYmxlQ29yZTogaGFuZGxlRHJhZ1N0YXJ0OiAlaicsIGNvcmVFdmVudC5wb3NpdGlvbik7XG5cbiAgICAvLyBDYWxsIGV2ZW50IGhhbmRsZXIuIElmIGl0IHJldHVybnMgZXhwbGljaXQgZmFsc2UsIGNhbmNlbC5cbiAgICBsb2coJ2NhbGxpbmcnLCB0aGlzLnByb3BzLm9uU3RhcnQpO1xuICAgIGxldCBzaG91bGRVcGRhdGUgPSB0aGlzLnByb3BzLm9uU3RhcnQoZSwgY29yZUV2ZW50KTtcbiAgICBpZiAoc2hvdWxkVXBkYXRlID09PSBmYWxzZSkgcmV0dXJuO1xuXG5cbiAgICAvLyBJbml0aWF0ZSBkcmFnZ2luZy4gU2V0IHRoZSBjdXJyZW50IHggYW5kIHkgYXMgb2Zmc2V0c1xuICAgIC8vIHNvIHdlIGtub3cgaG93IG11Y2ggd2UndmUgbW92ZWQgZHVyaW5nIHRoZSBkcmFnLiBUaGlzIGFsbG93cyB1c1xuICAgIC8vIHRvIGRyYWcgZWxlbWVudHMgYXJvdW5kIGV2ZW4gaWYgdGhleSBoYXZlIGJlZW4gbW92ZWQsIHdpdGhvdXQgaXNzdWUuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkcmFnZ2luZzogdHJ1ZSxcblxuICAgICAgbGFzdFg6IGNsaWVudFgsXG4gICAgICBsYXN0WTogY2xpZW50WSxcbiAgICAgIC8vIFN0b3JlZCBzbyB3ZSBjYW4gYWRqdXN0IG91ciBvZmZzZXQgaWYgc2Nyb2xsZWQuXG4gICAgICBzY3JvbGxYOiBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQsXG4gICAgICBzY3JvbGxZOiBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcFxuICAgIH0pO1xuXG4gICAgLy8gVHJhbnNsYXRlIGVsIG9uIHBhZ2Ugc2Nyb2xsLlxuICAgIGFkZEV2ZW50KGRvY3VtZW50LCAnc2Nyb2xsJywgdGhpcy5oYW5kbGVTY3JvbGwpO1xuICAgIC8vIEFkZCBldmVudHMgdG8gdGhlIGRvY3VtZW50IGRpcmVjdGx5IHNvIHdlIGNhdGNoIHdoZW4gdGhlIHVzZXIncyBtb3VzZS90b3VjaCBtb3ZlcyBvdXRzaWRlIG9mXG4gICAgLy8gdGhpcyBlbGVtZW50LiBXZSB1c2UgZGlmZmVyZW50IGV2ZW50cyBkZXBlbmRpbmcgb24gd2hldGhlciBvciBub3Qgd2UgaGF2ZSBkZXRlY3RlZCB0aGF0IHRoaXNcbiAgICAvLyBpcyBhIHRvdWNoLWNhcGFibGUgZGV2aWNlLlxuICAgIGFkZEV2ZW50KGRvY3VtZW50LCBkcmFnRXZlbnRGb3IubW92ZSwgdGhpcy5oYW5kbGVEcmFnKTtcbiAgICBhZGRFdmVudChkb2N1bWVudCwgZHJhZ0V2ZW50Rm9yLnN0b3AsIHRoaXMuaGFuZGxlRHJhZ1N0b3ApO1xuICB9O1xuXG4gIGhhbmRsZURyYWc6IEV2ZW50SGFuZGxlciA9IChlKSA9PiB7XG4gICAgLy8gUmV0dXJuIGlmIHRoaXMgaXMgYSB0b3VjaCBldmVudCwgYnV0IG5vdCB0aGUgY29ycmVjdCBvbmUgZm9yIHRoaXMgZWxlbWVudFxuICAgIGlmIChlLnRhcmdldFRvdWNoZXMgJiYgKGUudGFyZ2V0VG91Y2hlc1swXS5pZGVudGlmaWVyICE9PSB0aGlzLnN0YXRlLnRvdWNoSWRlbnRpZmllcikpIHJldHVybjtcblxuICAgIGxldCB7Y2xpZW50WCwgY2xpZW50WX0gPSBnZXRDb250cm9sUG9zaXRpb24oZSk7XG5cbiAgICAvLyBTbmFwIHRvIGdyaWQgaWYgcHJvcCBoYXMgYmVlbiBwcm92aWRlZFxuICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMucHJvcHMuZ3JpZCkpIHtcbiAgICAgIGxldCBkZWx0YVggPSBjbGllbnRYIC0gdGhpcy5zdGF0ZS5sYXN0WCwgZGVsdGFZID0gY2xpZW50WSAtIHRoaXMuc3RhdGUubGFzdFk7XG4gICAgICBbZGVsdGFYLCBkZWx0YVldID0gc25hcFRvR3JpZCh0aGlzLnByb3BzLmdyaWQsIGRlbHRhWCwgZGVsdGFZKTtcbiAgICAgIGlmICghZGVsdGFYICYmICFkZWx0YVkpIHJldHVybjsgLy8gc2tpcCB1c2VsZXNzIGRyYWdcbiAgICAgIGNsaWVudFggPSB0aGlzLnN0YXRlLmxhc3RYICsgZGVsdGFYLCBjbGllbnRZID0gdGhpcy5zdGF0ZS5sYXN0WSArIGRlbHRhWTtcbiAgICB9XG5cbiAgICBjb25zdCBjb3JlRXZlbnQgPSBjcmVhdGVDb3JlRXZlbnQodGhpcywgY2xpZW50WCwgY2xpZW50WSk7XG5cbiAgICBsb2coJ0RyYWdnYWJsZUNvcmU6IGhhbmRsZURyYWc6ICVqJywgY29yZUV2ZW50LnBvc2l0aW9uKTtcblxuXG4gICAgLy8gQ2FsbCBldmVudCBoYW5kbGVyLiBJZiBpdCByZXR1cm5zIGV4cGxpY2l0IGZhbHNlLCB0cmlnZ2VyIGVuZC5cbiAgICBjb25zdCBzaG91bGRVcGRhdGUgPSB0aGlzLnByb3BzLm9uRHJhZyhlLCBjb3JlRXZlbnQpO1xuICAgIGlmIChzaG91bGRVcGRhdGUgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmhhbmRsZURyYWdTdG9wKHt9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGxhc3RYOiBjbGllbnRYLFxuICAgICAgbGFzdFk6IGNsaWVudFlcbiAgICB9KTtcbiAgfTtcblxuICBoYW5kbGVEcmFnU3RvcDogRXZlbnRIYW5kbGVyID0gKGUpID0+IHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuZHJhZ2dpbmcpIHJldHVybjtcblxuICAgIC8vIFNob3J0IGNpcmN1aXQgaWYgdGhpcyBpcyBub3QgdGhlIGNvcnJlY3QgdG91Y2ggZXZlbnQuIGBjaGFuZ2VkVG91Y2hlc2AgY29udGFpbnMgYWxsXG4gICAgLy8gdG91Y2ggcG9pbnRzIHRoYXQgaGF2ZSBiZWVuIHJlbW92ZWQgZnJvbSB0aGUgc3VyZmFjZS5cbiAgICBpZiAoZS5jaGFuZ2VkVG91Y2hlcyAmJiAoZS5jaGFuZ2VkVG91Y2hlc1swXS5pZGVudGlmaWVyICE9PSB0aGlzLnN0YXRlLnRvdWNoSWRlbnRpZmllcikpIHJldHVybjtcblxuICAgIC8vIFJlbW92ZSB1c2VyLXNlbGVjdCBoYWNrXG4gICAgaWYgKHRoaXMucHJvcHMuZW5hYmxlVXNlclNlbGVjdEhhY2spIHJlbW92ZVVzZXJTZWxlY3RTdHlsZXMoKTtcblxuICAgIGxldCB7Y2xpZW50WCwgY2xpZW50WX0gPSBnZXRDb250cm9sUG9zaXRpb24oZSk7XG4gICAgY29uc3QgY29yZUV2ZW50ID0gY3JlYXRlQ29yZUV2ZW50KHRoaXMsIGNsaWVudFgsIGNsaWVudFkpO1xuXG4gICAgbG9nKCdEcmFnZ2FibGVDb3JlOiBoYW5kbGVEcmFnU3RvcDogJWonLCBjb3JlRXZlbnQucG9zaXRpb24pO1xuXG4gICAgLy8gUmVzZXQgdGhlIGVsLlxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZHJhZ2dpbmc6IGZhbHNlLFxuICAgICAgbGFzdFg6IG51bGwsXG4gICAgICBsYXN0WTogbnVsbFxuICAgIH0pO1xuXG4gICAgLy8gQ2FsbCBldmVudCBoYW5kbGVyXG4gICAgdGhpcy5wcm9wcy5vblN0b3AoZSwgY29yZUV2ZW50KTtcblxuICAgIC8vIFJlbW92ZSBldmVudCBoYW5kbGVyc1xuICAgIGxvZygnRHJhZ2dhYmxlQ29yZTogUmVtb3ZpbmcgaGFuZGxlcnMnKTtcbiAgICByZW1vdmVFdmVudChkb2N1bWVudCwgJ3Njcm9sbCcsIHRoaXMuaGFuZGxlU2Nyb2xsKTtcbiAgICByZW1vdmVFdmVudChkb2N1bWVudCwgZHJhZ0V2ZW50Rm9yLm1vdmUsIHRoaXMuaGFuZGxlRHJhZyk7XG4gICAgcmVtb3ZlRXZlbnQoZG9jdW1lbnQsIGRyYWdFdmVudEZvci5zdG9wLCB0aGlzLmhhbmRsZURyYWdTdG9wKTtcbiAgfTtcblxuICAvLyBXaGVuIHRoZSB1c2VyIHNjcm9sbHMsIGFkanVzdCBpbnRlcm5hbCBzdGF0ZSBzbyB0aGUgZHJhZ2dhYmxlIG1vdmVzIGFsb25nIHRoZSBwYWdlIHByb3Blcmx5LlxuICAvLyBUaGlzIG9ubHkgZmlyZXMgd2hlbiBhIGRyYWcgaXMgYWN0aXZlLlxuICBoYW5kbGVTY3JvbGw6IEV2ZW50SGFuZGxlciA9IChlKSA9PiB7XG4gICAgY29uc3QgcyA9IHRoaXMuc3RhdGUsIHggPSBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQsIHkgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcblxuICAgIC8vIENyZWF0ZSB0aGUgdXN1YWwgZXZlbnQsIGJ1dCBtYWtlIHRoZSBzY3JvbGwgb2Zmc2V0IG91ciBkZWx0YXMuXG4gICAgbGV0IGNvcmVFdmVudCA9IGNyZWF0ZUNvcmVFdmVudCh0aGlzKTtcbiAgICBjb3JlRXZlbnQucG9zaXRpb24uZGVsdGFYID0geCAtIHMuc2Nyb2xsWDtcbiAgICBjb3JlRXZlbnQucG9zaXRpb24uZGVsdGFZID0geSAtIHMuc2Nyb2xsWTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbGFzdFg6IHMubGFzdFggKyBjb3JlRXZlbnQucG9zaXRpb24uZGVsdGFYLFxuICAgICAgbGFzdFk6IHMubGFzdFkgKyBjb3JlRXZlbnQucG9zaXRpb24uZGVsdGFZLFxuICAgICAgc2Nyb2xsWDogeCxcbiAgICAgIHNjcm9sbFk6IHlcbiAgICB9KTtcblxuICAgIHRoaXMucHJvcHMub25EcmFnKGUsIGNvcmVFdmVudCk7XG4gIH07XG5cbiAgLy8gU2FtZSBhcyBvbk1vdXNlRG93biAoc3RhcnQgZHJhZyksIGJ1dCBub3cgY29uc2lkZXIgdGhpcyBhIHRvdWNoIGRldmljZS5cbiAgb25Ub3VjaFN0YXJ0OiBFdmVudEhhbmRsZXIgPSAoZSkgPT4ge1xuICAgIC8vIFdlJ3JlIG9uIGEgdG91Y2ggZGV2aWNlIG5vdywgc28gY2hhbmdlIHRoZSBldmVudCBoYW5kbGVyc1xuICAgIGRyYWdFdmVudEZvciA9IGV2ZW50c0Zvci50b3VjaDtcblxuICAgIHJldHVybiB0aGlzLmhhbmRsZURyYWdTdGFydChlKTtcbiAgfTtcblxuICBvblRvdWNoRW5kOiBFdmVudEhhbmRsZXIgPSAoZSkgPT4ge1xuICAgIC8vIFdlJ3JlIG9uIGEgdG91Y2ggZGV2aWNlIG5vdywgc28gY2hhbmdlIHRoZSBldmVudCBoYW5kbGVyc1xuICAgIGRyYWdFdmVudEZvciA9IGV2ZW50c0Zvci50b3VjaDtcblxuICAgIHJldHVybiB0aGlzLmhhbmRsZURyYWdTdG9wKGUpO1xuICB9O1xuXG4gIHJlbmRlcigpOiBSZWFjdEVsZW1lbnQge1xuICAgIC8vIFJldXNlIHRoZSBjaGlsZCBwcm92aWRlZFxuICAgIC8vIFRoaXMgbWFrZXMgaXQgZmxleGlibGUgdG8gdXNlIHdoYXRldmVyIGVsZW1lbnQgaXMgd2FudGVkIChkaXYsIHVsLCBldGMpXG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChSZWFjdC5DaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pLCB7XG4gICAgICBzdHlsZTogc3R5bGVIYWNrcyh0aGlzLnByb3BzLmNoaWxkcmVuLnByb3BzLnN0eWxlKSxcblxuICAgICAgLy8gTm90ZTogbW91c2VNb3ZlIGhhbmRsZXIgaXMgYXR0YWNoZWQgdG8gZG9jdW1lbnQgc28gaXQgd2lsbCBzdGlsbCBmdW5jdGlvblxuICAgICAgLy8gd2hlbiB0aGUgdXNlciBkcmFncyBxdWlja2x5IGFuZCBsZWF2ZXMgdGhlIGJvdW5kcyBvZiB0aGUgZWxlbWVudC5cbiAgICAgIG9uTW91c2VEb3duOiB0aGlzLmhhbmRsZURyYWdTdGFydCxcbiAgICAgIG9uVG91Y2hTdGFydDogdGhpcy5vblRvdWNoU3RhcnQsXG4gICAgICBvbk1vdXNlVXA6IHRoaXMuaGFuZGxlRHJhZ1N0b3AsXG4gICAgICBvblRvdWNoRW5kOiB0aGlzLm9uVG91Y2hFbmRcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9saWIvRHJhZ2dhYmxlQ29yZS5lczZcbiAqKi8iLCIvLyBAZmxvd1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9nKC4uLmFyZ3M6IGFueSkge1xuICBpZiAocHJvY2Vzcy5lbnYuRFJBR0dBQkxFX0RFQlVHKSBjb25zb2xlLmxvZyguLi5hcmdzKTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbGliL3V0aWxzL2xvZy5lczZcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9