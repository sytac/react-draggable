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
	
	  function Draggable() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Draggable);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Draggable)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
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
	    }, _this.onDragStart = function (e, coreEvent) {
	      (0, _log2.default)('Draggable: onDragStart: %j', coreEvent.position);
	
	      // Short-circuit if user's callback killed it.
	      var shouldStart = _this.props.onStart(e, (0, _domFns.createUIEvent)(_this, coreEvent));
	      // Kills start event on core as well, so move handlers are never bound.
	      if (shouldStart === false) return false;
	
	      _this.setState({ dragging: true, dragged: true });
	    }, _this.onDrag = function (e, coreEvent) {
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
	    }, _this.onDragStop = function (e, coreEvent) {
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
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIi4uL3dlYnBhY2svYm9vdHN0cmFwIDI4YjhmODJlOTlkYzdhMzQ3NDQxIiwiLi4vLi9pbmRleC5qcyIsIi4uLy4vbGliL0RyYWdnYWJsZS5lczYiLCIuLi9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwicmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImFtZFwiOlwicmVhY3RcIixcInJvb3RcIjpcIlJlYWN0XCJ9IiwiLi4vZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcInJlYWN0LWRvbVwiLFwiY29tbW9uanMyXCI6XCJyZWFjdC1kb21cIixcImFtZFwiOlwicmVhY3QtZG9tXCIsXCJyb290XCI6XCJSZWFjdERPTVwifSIsIi4uLy4vfi9jbGFzc25hbWVzL2luZGV4LmpzIiwiLi4vLi9saWIvdXRpbHMvZG9tRm5zLmVzNiIsIi4uLy4vbGliL3V0aWxzL3NoaW1zLmVzNiIsIi4uLy4vbGliL3V0aWxzL2dldFByZWZpeC5lczYiLCIuLi8uL2xpYi91dGlscy9wb3NpdGlvbkZucy5lczYiLCIuLi8uL2xpYi9EcmFnZ2FibGVDb3JlLmVzNiIsIi4uLy4vbGliL3V0aWxzL2xvZy5lczYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0EsUUFBTyxPQUFQLEdBQWlCLG9CQUFRLENBQVIsRUFBMkIsT0FBM0I7QUFDakIsUUFBTyxPQUFQLENBQWUsYUFBZixHQUErQixvQkFBUSxDQUFSLEVBQStCLE9BQS9CLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0EvQjs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FnQnFCOzs7Ozs7Ozs7Ozs7Ozt3TUFxSG5CLFFBQXdCOztBQUV0QixpQkFBVSxLQUFWOzs7QUFHQSxnQkFBUyxLQUFUOzs7QUFHQSxnQkFBUyxNQUFLLEtBQUwsR0FBYSxNQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLENBQWpCLEdBQXFCLENBQWxDLEVBQXFDLFNBQVMsTUFBSyxLQUFMLEdBQWEsTUFBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixDQUFqQixHQUFxQixDQUFsQzs7O0FBR3ZELGVBQVEsQ0FBUixFQUFXLFFBQVEsQ0FBUjs7O0FBR1gscUJBQWMsS0FBZDtjQWNGLGNBQWdDLFVBQUMsQ0FBRCxFQUFJLFNBQUosRUFBa0I7QUFDaEQsMEJBQUksNEJBQUosRUFBa0MsVUFBVSxRQUFWLENBQWxDOzs7QUFEZ0QsV0FJNUMsY0FBYyxNQUFLLEtBQUwsQ0FBVyxPQUFYLENBQW1CLENBQW5CLEVBQXNCLGtDQUFvQixTQUFwQixDQUF0QixDQUFkOztBQUo0QyxXQU01QyxnQkFBZ0IsS0FBaEIsRUFBdUIsT0FBTyxLQUFQLENBQTNCOztBQUVBLGFBQUssUUFBTCxDQUFjLEVBQUMsVUFBVSxJQUFWLEVBQWdCLFNBQVMsSUFBVCxFQUEvQixFQVJnRDtNQUFsQixRQVdoQyxTQUEyQixVQUFDLENBQUQsRUFBSSxTQUFKLEVBQWtCO0FBQzNDLFdBQUksQ0FBQyxNQUFLLEtBQUwsQ0FBVyxRQUFYLEVBQXFCLE9BQU8sS0FBUCxDQUExQjtBQUNBLDBCQUFJLHVCQUFKLEVBQTZCLFVBQVUsUUFBVixDQUE3QixDQUYyQzs7QUFJM0MsV0FBSSxVQUFVLGtDQUFvQixTQUFwQixDQUFWLENBSnVDOztBQU0zQyxXQUFJLFdBQVc7QUFDYixrQkFBUyxRQUFRLFFBQVIsQ0FBaUIsSUFBakI7QUFDVCxrQkFBUyxRQUFRLFFBQVIsQ0FBaUIsR0FBakI7UUFGUDs7O0FBTnVDLFdBWXZDLE1BQUssS0FBTCxDQUFXLE1BQVgsRUFBbUI7O2FBRWhCLFdBQW9CLFNBQXBCLFFBRmdCO2FBRVAsV0FBVyxTQUFYOzs7OztBQUZPO0FBT3JCLGtCQUFTLE9BQVQsSUFBb0IsTUFBSyxLQUFMLENBQVcsTUFBWCxDQVBDO0FBUXJCLGtCQUFTLE9BQVQsSUFBb0IsTUFBSyxLQUFMLENBQVcsTUFBWDs7O0FBUkM7Ozs7aUNBV2tCLDBDQUF1QixTQUFTLE9BQVQsRUFBa0IsU0FBUyxPQUFULEVBWDNEOzs7O0FBV3BCLGtCQUFTLE9BQVQseUJBWG9CO0FBV0Ysa0JBQVMsT0FBVCx5QkFYRTtBQWNyQixrQkFBUyxNQUFULEdBQWtCLE1BQUssS0FBTCxDQUFXLE1BQVgsSUFBcUIsV0FBVSxTQUFTLE9BQVQsQ0FBL0IsQ0FkRztBQWVyQixrQkFBUyxNQUFULEdBQWtCLE1BQUssS0FBTCxDQUFXLE1BQVgsSUFBcUIsV0FBVSxTQUFTLE9BQVQsQ0FBL0I7OztBQWZHLGdCQWtCckIsQ0FBUSxRQUFSLENBQWlCLElBQWpCLEdBQXdCLFFBQXhCLENBbEJxQjtBQW1CckIsaUJBQVEsUUFBUixDQUFpQixHQUFqQixHQUF1QixRQUF2QixDQW5CcUI7QUFvQnJCLGlCQUFRLE1BQVIsR0FBaUIsU0FBUyxPQUFULEdBQW1CLE1BQUssS0FBTCxDQUFXLE9BQVgsQ0FwQmY7QUFxQnJCLGlCQUFRLE1BQVIsR0FBaUIsU0FBUyxPQUFULEdBQW1CLE1BQUssS0FBTCxDQUFXLE9BQVgsQ0FyQmY7UUFBdkI7OztBQVoyQyxXQXFDdkMsZUFBZSxNQUFLLEtBQUwsQ0FBVyxNQUFYLENBQWtCLENBQWxCLEVBQXFCLE9BQXJCLENBQWYsQ0FyQ3VDO0FBc0MzQyxXQUFJLGlCQUFpQixLQUFqQixFQUF3QixPQUFPLEtBQVAsQ0FBNUI7O0FBRUEsYUFBSyxRQUFMLENBQWMsUUFBZCxFQXhDMkM7TUFBbEIsUUEyQzNCLGFBQStCLFVBQUMsQ0FBRCxFQUFJLFNBQUosRUFBa0I7QUFDL0MsV0FBSSxDQUFDLE1BQUssS0FBTCxDQUFXLFFBQVgsRUFBcUIsT0FBTyxLQUFQLENBQTFCOzs7QUFEK0MsV0FJM0MsYUFBYSxNQUFLLEtBQUwsQ0FBVyxNQUFYLENBQWtCLENBQWxCLEVBQXFCLGtDQUFvQixTQUFwQixDQUFyQixDQUFiLENBSjJDO0FBSy9DLFdBQUksZUFBZSxLQUFmLEVBQXNCLE9BQU8sS0FBUCxDQUExQjs7QUFFQSwwQkFBSSwyQkFBSixFQUFpQyxVQUFVLFFBQVYsQ0FBakMsQ0FQK0M7O0FBUy9DLGFBQUssUUFBTCxDQUFjO0FBQ1osbUJBQVUsS0FBVjtBQUNBLGlCQUFRLENBQVI7QUFDQSxpQkFBUSxDQUFSO1FBSEYsRUFUK0M7TUFBbEI7OztnQkF2TVo7O3lDQXNJQzs7QUFFbEIsV0FBRyxtQkFBUyxXQUFULENBQXFCLElBQXJCLGFBQXNDLFVBQXRDLEVBQWtEO0FBQ25ELGNBQUssUUFBTCxDQUFjLEVBQUUsY0FBYyxJQUFkLEVBQWhCLEVBRG1EO1FBQXJEOzs7OzRDQUtxQjtBQUNyQixZQUFLLFFBQUwsQ0FBYyxFQUFDLFVBQVUsS0FBVixFQUFmO0FBRHFCOzs7OEJBMEVBO0FBQ3JCLFdBQUksUUFBUSxFQUFSO1dBQVksZUFBZSxJQUFmOzs7Ozs7QUFESyxXQU9mLGdCQUFnQjs7QUFFcEIsWUFBRywyQkFBUyxJQUFULElBQ0QsS0FBSyxLQUFMLENBQVcsT0FBWCxHQUNBLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsQ0FBakI7OztBQUdGLFlBQUcsMkJBQVMsSUFBVCxJQUNELEtBQUssS0FBTCxDQUFXLE9BQVgsR0FDQSxLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLENBQWpCO1FBVEU7OztBQVBlLFdBb0JqQixLQUFLLEtBQUwsQ0FBVyxZQUFYLEVBQXlCO0FBQzNCLHdCQUFlLGdDQUFtQixhQUFuQixDQUFmLENBRDJCO1FBQTdCLE1BRU87QUFDTCxpQkFBUSxnQ0FBbUIsYUFBbkIsQ0FBUixDQURLO1FBRlA7OztBQXBCcUIsV0EyQmpCLEtBQUssS0FBTCxDQUFXLFFBQVgsSUFBdUIsQ0FBQyxNQUFNLEtBQUssS0FBTCxDQUFXLE1BQVgsQ0FBUCxFQUEyQjtBQUNwRCxlQUFNLE1BQU4sR0FBZSxLQUFLLEtBQUwsQ0FBVyxNQUFYLENBRHFDO1FBQXREOzs7QUEzQnFCLFdBZ0NqQixZQUFZLDBCQUFZLEtBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsS0FBcEIsQ0FBMEIsU0FBMUIsSUFBdUMsRUFBdkMsRUFBNEMsaUJBQXhELEVBQTJFO0FBQ3pGLHFDQUE0QixLQUFLLEtBQUwsQ0FBVyxRQUFYO0FBQzVCLG9DQUEyQixLQUFLLEtBQUwsQ0FBVyxPQUFYO1FBRmIsQ0FBWjs7OztBQWhDaUIsY0F3Q25COztzQkFBbUIsS0FBSyxLQUFMLElBQVksU0FBUyxLQUFLLFdBQUwsRUFBa0IsUUFBUSxLQUFLLE1BQUwsRUFBYSxRQUFRLEtBQUssVUFBTCxHQUF2RjtTQUNHLGdCQUFNLFlBQU4sQ0FBbUIsZ0JBQU0sUUFBTixDQUFlLElBQWYsQ0FBb0IsS0FBSyxLQUFMLENBQVcsUUFBWCxDQUF2QyxFQUE2RDtBQUM1RCxzQkFBVyxTQUFYO0FBQ0EsK0JBQVcsS0FBSyxLQUFMLENBQVcsUUFBWCxDQUFvQixLQUFwQixDQUEwQixLQUExQixFQUFvQyxNQUEvQztBQUNBLHNCQUFXLFlBQVg7VUFIRCxDQURIO1FBREYsQ0F2Q3FCOzs7O1VBdk5KO0dBQWtCLGdCQUFNLFNBQU47O0FBQWxCLFdBRVosY0FBYztBQUZGLFdBSVoseUJBRUYsd0JBQWMsU0FBZDs7Ozs7Ozs7Ozs7Ozs7O0FBZUgsU0FBTSxpQkFBVSxLQUFWLENBQWdCLENBQUMsTUFBRCxFQUFTLEdBQVQsRUFBYyxHQUFkLEVBQW1CLE1BQW5CLENBQWhCLENBQU47Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0QkEsV0FBUSxpQkFBVSxTQUFWLENBQW9CLENBQzFCLGlCQUFVLEtBQVYsQ0FBZ0I7QUFDZCxXQUFNLGlCQUFVLE1BQVY7QUFDTixZQUFPLGlCQUFVLE1BQVY7QUFDUCxVQUFLLGlCQUFVLE1BQVY7QUFDTCxhQUFRLGlCQUFVLE1BQVY7SUFKVixDQUQwQixFQU8xQixpQkFBVSxNQUFWLEVBQ0EsaUJBQVUsS0FBVixDQUFnQixDQUFDLEtBQUQsQ0FBaEIsQ0FSMEIsQ0FBcEIsQ0FBUjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCQSxVQUFPLGlCQUFVLEtBQVYsQ0FBZ0I7QUFDckIsUUFBRyxpQkFBVSxNQUFWO0FBQ0gsUUFBRyxpQkFBVSxNQUFWO0lBRkUsQ0FBUDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQSxXQUFRLGlCQUFVLE1BQVY7Ozs7O0FBS1I7QUFDQTtBQUNBOztBQTFHaUIsV0E2R1osNEJBQ0Ysd0JBQWMsWUFBZDtBQUNILFNBQU0sTUFBTjtBQUNBLFdBQVEsS0FBUjtBQUNBLFVBQU8sRUFBQyxHQUFHLENBQUgsRUFBTSxHQUFHLENBQUgsRUFBZDtBQUNBLFdBQVEsR0FBUjs7bUJBbEhpQixVOzs7Ozs7QUN6QnJCLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWdCOztBQUVoQjtBQUNBOztBQUVBLGtCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsR0FBRTtBQUNGO0FBQ0E7QUFDQSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7U0NyQmU7U0FrQkE7U0FZQTtTQVlBO1NBVUE7U0FTQTtTQVFBO1NBUUE7U0FVQTtTQVlBO1NBS0E7U0FLQTtTQVVBO1NBd0JBOztBQXhLaEI7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBc0JBLEtBQUksc0JBQXNCLEVBQXRCO0FBQ0csVUFBUyxlQUFULENBQXlCLEVBQXpCLEVBQTBDLFFBQTFDLEVBQXFFO0FBQzFFLE9BQUksQ0FBQyxtQkFBRCxFQUFzQjtBQUN4QiwyQkFBc0Isd0JBQVksQ0FDaEMsU0FEZ0MsRUFFaEMsdUJBRmdDLEVBR2hDLG9CQUhnQyxFQUloQyxtQkFKZ0MsRUFLaEMsa0JBTGdDLENBQVosRUFNbkIsVUFBUyxNQUFULEVBQWdCOztBQUVqQixjQUFPLHVCQUFXLEdBQUcsTUFBSCxDQUFYLENBQVAsQ0FGaUI7TUFBaEIsQ0FOSCxDQUR3QjtJQUExQjs7O0FBRDBFLFVBZW5FLEdBQUcsbUJBQUgsRUFBd0IsSUFBeEIsQ0FBNkIsRUFBN0IsRUFBaUMsUUFBakMsQ0FBUCxDQWYwRTtFQUFyRTs7QUFrQkEsVUFBUyxRQUFULENBQWtCLEVBQWxCLEVBQTZCLEtBQTdCLEVBQTRDLE9BQTVDLEVBQXFFO0FBQzFFLE9BQUksQ0FBQyxFQUFELEVBQUs7QUFBRSxZQUFGO0lBQVQ7QUFDQSxPQUFJLEdBQUcsV0FBSCxFQUFnQjtBQUNsQixRQUFHLFdBQUgsQ0FBZSxPQUFPLEtBQVAsRUFBYyxPQUE3QixFQURrQjtJQUFwQixNQUVPLElBQUksR0FBRyxnQkFBSCxFQUFxQjtBQUM5QixRQUFHLGdCQUFILENBQW9CLEtBQXBCLEVBQTJCLE9BQTNCLEVBQW9DLElBQXBDLEVBRDhCO0lBQXpCLE1BRUE7O0FBRUwsUUFBRyxPQUFPLEtBQVAsQ0FBSCxHQUFtQixPQUFuQixDQUZLO0lBRkE7RUFKRjs7QUFZQSxVQUFTLFdBQVQsQ0FBcUIsRUFBckIsRUFBZ0MsS0FBaEMsRUFBK0MsT0FBL0MsRUFBd0U7QUFDN0UsT0FBSSxDQUFDLEVBQUQsRUFBSztBQUFFLFlBQUY7SUFBVDtBQUNBLE9BQUksR0FBRyxXQUFILEVBQWdCO0FBQ2xCLFFBQUcsV0FBSCxDQUFlLE9BQU8sS0FBUCxFQUFjLE9BQTdCLEVBRGtCO0lBQXBCLE1BRU8sSUFBSSxHQUFHLG1CQUFILEVBQXdCO0FBQ2pDLFFBQUcsbUJBQUgsQ0FBdUIsS0FBdkIsRUFBOEIsT0FBOUIsRUFBdUMsSUFBdkMsRUFEaUM7SUFBNUIsTUFFQTs7QUFFTCxRQUFHLE9BQU8sS0FBUCxDQUFILEdBQW1CLElBQW5CLENBRks7SUFGQTtFQUpGOztBQVlBLFVBQVMsV0FBVCxDQUFxQixJQUFyQixFQUFnRDs7O0FBR3JELE9BQUksU0FBUyxLQUFLLFlBQUwsQ0FId0M7QUFJckQsT0FBSSxnQkFBZ0IsT0FBTyxnQkFBUCxDQUF3QixJQUF4QixDQUFoQixDQUppRDtBQUtyRCxhQUFVLGdCQUFJLGNBQWMsY0FBZCxDQUFkLENBTHFEO0FBTXJELGFBQVUsZ0JBQUksY0FBYyxpQkFBZCxDQUFkLENBTnFEO0FBT3JELFVBQU8sTUFBUCxDQVBxRDtFQUFoRDs7QUFVQSxVQUFTLFVBQVQsQ0FBb0IsSUFBcEIsRUFBK0M7OztBQUdwRCxPQUFJLFFBQVEsS0FBSyxXQUFMLENBSHdDO0FBSXBELE9BQUksZ0JBQWdCLE9BQU8sZ0JBQVAsQ0FBd0IsSUFBeEIsQ0FBaEIsQ0FKZ0Q7QUFLcEQsWUFBUyxnQkFBSSxjQUFjLGVBQWQsQ0FBYixDQUxvRDtBQU1wRCxZQUFTLGdCQUFJLGNBQWMsZ0JBQWQsQ0FBYixDQU5vRDtBQU9wRCxVQUFPLEtBQVAsQ0FQb0Q7RUFBL0M7QUFTQSxVQUFTLFdBQVQsQ0FBcUIsSUFBckIsRUFBZ0Q7QUFDckQsT0FBSSxTQUFTLEtBQUssWUFBTCxDQUR3QztBQUVyRCxPQUFJLGdCQUFnQixPQUFPLGdCQUFQLENBQXdCLElBQXhCLENBQWhCLENBRmlEO0FBR3JELGFBQVUsZ0JBQUksY0FBYyxVQUFkLENBQWQsQ0FIcUQ7QUFJckQsYUFBVSxnQkFBSSxjQUFjLGFBQWQsQ0FBZCxDQUpxRDtBQUtyRCxVQUFPLE1BQVAsQ0FMcUQ7RUFBaEQ7O0FBUUEsVUFBUyxVQUFULENBQW9CLElBQXBCLEVBQStDO0FBQ3BELE9BQUksUUFBUSxLQUFLLFdBQUwsQ0FEd0M7QUFFcEQsT0FBSSxnQkFBZ0IsT0FBTyxnQkFBUCxDQUF3QixJQUF4QixDQUFoQixDQUZnRDtBQUdwRCxZQUFTLGdCQUFJLGNBQWMsV0FBZCxDQUFiLENBSG9EO0FBSXBELFlBQVMsZ0JBQUksY0FBYyxZQUFkLENBQWIsQ0FKb0Q7QUFLcEQsVUFBTyxLQUFQLENBTG9EO0VBQS9DOztBQVFBLFVBQVMsa0JBQVQsT0FBb0U7T0FBdkMsV0FBdUM7T0FBcEMsV0FBb0M7OztBQUV6RSxPQUFJLE1BQU0sRUFBQyxXQUFXLGVBQWUsQ0FBZixHQUFtQixLQUFuQixHQUEyQixDQUEzQixHQUErQixLQUEvQixFQUFsQjs7QUFGcUUsMEJBSXpFLEVBQW1CO0FBQ2pCLFNBQUksc0JBQWdCLFdBQWhCLENBQUosR0FBbUMsSUFBSSxTQUFKLENBRGxCO0lBQW5CO0FBR0EsVUFBTyxHQUFQLENBUHlFO0VBQXBFOztBQVVBLFVBQVMsa0JBQVQsUUFBb0U7T0FBdkMsWUFBdUM7T0FBcEMsWUFBb0M7O0FBQ3pFLFVBQU8sZUFBZSxDQUFmLEdBQW1CLEdBQW5CLEdBQXlCLENBQXpCLEdBQTZCLEdBQTdCLENBRGtFO0VBQXBFOzs7OztBQU9QLEtBQUksa0JBQWtCLHFCQUFsQjtBQUNKLDBCQUFtQjtBQUNqQixzQkFBbUIsTUFBTSxvQkFBYyxXQUFkLEVBQU4sR0FBb0MscUJBQXBDLENBREY7RUFBbkI7O0FBSU8sVUFBUyxtQkFBVCxHQUErQjtBQUNwQyxPQUFJLFFBQVEsU0FBUyxJQUFULENBQWMsWUFBZCxDQUEyQixPQUEzQixLQUF1QyxFQUF2QyxDQUR3QjtBQUVwQyxZQUFTLElBQVQsQ0FBYyxZQUFkLENBQTJCLE9BQTNCLEVBQW9DLFFBQVEsZUFBUixDQUFwQyxDQUZvQztFQUEvQjs7QUFLQSxVQUFTLHNCQUFULEdBQWtDO0FBQ3ZDLE9BQUksUUFBUSxTQUFTLElBQVQsQ0FBYyxZQUFkLENBQTJCLE9BQTNCLEtBQXVDLEVBQXZDLENBRDJCO0FBRXZDLFlBQVMsSUFBVCxDQUFjLFlBQWQsQ0FBMkIsT0FBM0IsRUFBb0MsTUFBTSxPQUFOLENBQWMsZUFBZCxFQUErQixFQUEvQixDQUFwQyxFQUZ1QztFQUFsQzs7QUFLQSxVQUFTLFVBQVQsR0FBcUQ7T0FBakMsbUVBQXFCLGtCQUFZOzs7O0FBRzFEO0FBQ0Usa0JBQWEsTUFBYjtNQUNHLFdBRkwsQ0FIMEQ7RUFBckQ7OztBQVVBLFVBQVMsZUFBVCxDQUF5QixTQUF6QixFQUFtRCxPQUFuRCxFQUFvRSxPQUFwRSxFQUFnRzs7QUFFckcsT0FBSSxRQUFRLFVBQVUsYUFBVixJQUEyQixVQUFVLEtBQVYsQ0FGOEQ7QUFHckcsT0FBSSxVQUFVLENBQUMsa0JBQU0sTUFBTSxLQUFOLENBQVAsQ0FIdUY7O0FBS3JHLFVBQU87QUFDTCxXQUFNLG1CQUFTLFdBQVQsQ0FBcUIsU0FBckIsQ0FBTjtBQUNBLGVBQVU7O0FBRVI7QUFDRSxlQUFRLENBQVIsRUFBVyxRQUFRLENBQVI7QUFDWCxjQUFPLE9BQVAsRUFBZ0IsT0FBTyxPQUFQO0FBQ2hCLGdCQUFTLE9BQVQsRUFBa0IsU0FBUyxPQUFUO01BTFo7O0FBUVI7QUFDRSxlQUFRLFVBQVUsTUFBTSxLQUFOLEVBQWEsUUFBUSxVQUFVLE1BQU0sS0FBTjtBQUNqRCxjQUFPLE1BQU0sS0FBTixFQUFhLE9BQU8sTUFBTSxLQUFOO0FBQzNCLGdCQUFTLE9BQVQsRUFBa0IsU0FBUyxPQUFUO01BWFo7SUFGWixDQUxxRztFQUFoRzs7O0FBd0JBLFVBQVMsYUFBVCxDQUF1QixTQUF2QixFQUE2QyxTQUE3QyxFQUE0RTtBQUNqRixVQUFPO0FBQ0wsV0FBTSxtQkFBUyxXQUFULENBQXFCLFNBQXJCLENBQU47QUFDQSxlQUFVO0FBQ1IsYUFBTSxVQUFVLEtBQVYsQ0FBZ0IsT0FBaEIsR0FBMEIsVUFBVSxRQUFWLENBQW1CLE1BQW5CO0FBQ2hDLFlBQUssVUFBVSxLQUFWLENBQWdCLE9BQWhCLEdBQTBCLFVBQVUsUUFBVixDQUFtQixNQUFuQjtNQUZqQztBQUlBLGFBQVEsVUFBVSxRQUFWLENBQW1CLE1BQW5CO0FBQ1IsYUFBUSxVQUFVLFFBQVYsQ0FBbUIsTUFBbkI7SUFQVixDQURpRjs7Ozs7Ozs7Ozs7O1NDdktuRTtTQU1BO1NBSUE7U0FJQTtTQUlBOzs7QUFsQlQsVUFBUyxXQUFULENBQXFCLEtBQXJCLEVBQXdDLFFBQXhDLEVBQWlFO0FBQ3RFLFFBQUssSUFBSSxJQUFJLENBQUosRUFBTyxTQUFTLE1BQU0sTUFBTixFQUFjLElBQUksTUFBSixFQUFZLEdBQW5ELEVBQXdEO0FBQ3RELFNBQUksU0FBUyxLQUFULENBQWUsUUFBZixFQUF5QixDQUFDLE1BQU0sQ0FBTixDQUFELEVBQVcsQ0FBWCxFQUFjLEtBQWQsQ0FBekIsQ0FBSixFQUFvRCxPQUFPLE1BQU0sQ0FBTixDQUFQLENBQXBEO0lBREY7RUFESzs7QUFNQSxVQUFTLFVBQVQsQ0FBb0IsSUFBcEIsRUFBd0M7QUFDN0MsVUFBTyxPQUFPLElBQVAsS0FBZ0IsVUFBaEIsSUFBOEIsT0FBTyxTQUFQLENBQWlCLFFBQWpCLENBQTBCLElBQTFCLENBQStCLElBQS9CLE1BQXlDLG1CQUF6QyxDQURRO0VBQXhDOztBQUlBLFVBQVMsS0FBVCxDQUFlLEdBQWYsRUFBa0M7QUFDdkMsVUFBTyxPQUFPLEdBQVAsS0FBZSxRQUFmLElBQTJCLENBQUMsTUFBTSxHQUFOLENBQUQsQ0FESztFQUFsQzs7QUFJQSxVQUFTLEdBQVQsQ0FBYSxDQUFiLEVBQWdDO0FBQ3JDLFVBQU8sU0FBUyxDQUFULEVBQVksRUFBWixDQUFQLENBRHFDO0VBQWhDOztBQUlBLFVBQVMsU0FBVCxDQUFtQixLQUFuQixFQUFrQyxRQUFsQyxFQUFvRCxhQUFwRCxFQUEyRTtBQUNoRixPQUFJLE1BQU0sUUFBTixDQUFKLEVBQXFCO0FBQ25CLFdBQU0sSUFBSSxLQUFKLG1CQUEwQiwyQkFBc0IsMERBQWhELENBQU4sQ0FEbUI7SUFBckI7Ozs7Ozs7Ozs7OztTQ3BCYztBQUFULFVBQVMsY0FBVCxHQUFrQzs7OztBQUl2QyxPQUFJLE9BQU8sTUFBUCxLQUFrQixXQUFsQixJQUFpQyxPQUFPLE9BQU8sUUFBUCxLQUFvQixXQUEzQixFQUF3QyxPQUFPLEVBQVAsQ0FBN0U7OztBQUp1QyxPQU9uQyxTQUFTLE9BQU8sZ0JBQVAsQ0FBd0IsU0FBUyxlQUFULEVBQTBCLEVBQWxELENBQVQ7T0FDSixNQUFNLENBQUMsTUFBTSxTQUFOLENBQWdCLEtBQWhCLENBQ0EsSUFEQSxDQUNLLE1BREwsRUFFQSxJQUZBLENBRUssRUFGTCxFQUdBLEtBSEEsQ0FHTSxtQkFITixNQUcrQixPQUFPLEtBQVAsS0FBaUIsRUFBakIsR0FBc0IsQ0FBQyxFQUFELEVBQUssR0FBTCxDQUF0QixHQUFrQyxFQUFsQyxDQUgvQixDQUFELENBSUEsQ0FKQSxDQUFOOztBQVJ1QyxPQWNuQyxRQUFRLFNBQVIsSUFBcUIsUUFBUSxJQUFSLEVBQWMsT0FBTyxFQUFQLENBQXZDO0FBQ0EsT0FBSSxRQUFRLElBQVIsRUFBYyxPQUFPLEdBQVAsQ0FBbEI7QUFDQSxPQUFJLFFBQVEsU0FBUixJQUFxQixRQUFRLElBQVIsRUFBYyxPQUFPLEVBQVAsQ0FBdkM7QUFDQSxVQUFPLElBQUksS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLFdBQWhCLEtBQWdDLElBQUksS0FBSixDQUFVLENBQVYsQ0FBaEMsQ0FqQmdDO0VBQWxDOzttQkFvQlEsaUI7Ozs7Ozs7Ozs7O1NDUEM7U0F5Q0E7U0FNQTtTQUlBO1NBS0E7O0FBckVoQjs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFVTyxVQUFTLGdCQUFULENBQTBCLFNBQTFCLEVBQWdELE9BQWhELEVBQWlFLE9BQWpFLEVBQW9HOztBQUV6RyxPQUFJLENBQUMsVUFBVSxLQUFWLENBQWdCLE1BQWhCLEVBQXdCLE9BQU8sQ0FBQyxPQUFELEVBQVUsT0FBVixDQUFQLENBQTdCOzs7QUFGeUcsT0FLcEcsU0FBVSxVQUFVLEtBQVYsQ0FBVixPQUxvRzs7QUFNekcsWUFBUyxPQUFPLE1BQVAsS0FBa0IsUUFBbEIsR0FBNkIsTUFBN0IsR0FBc0MsWUFBWSxNQUFaLENBQXRDLENBTmdHO0FBT3pHLE9BQUksT0FBTyxtQkFBUyxXQUFULENBQXFCLFNBQXJCLENBQVAsQ0FQcUc7O0FBU3pHLE9BQUksT0FBTyxNQUFQLEtBQWtCLFFBQWxCLEVBQTRCO0FBQzlCLFNBQUksa0JBQUosQ0FEOEI7QUFFOUIsU0FBSSxXQUFXLFFBQVgsRUFBcUI7QUFDdkIsbUJBQVksS0FBSyxVQUFMLENBRFc7TUFBekIsTUFFTztBQUNMLG1CQUFZLFNBQVMsYUFBVCxDQUF1QixNQUF2QixDQUFaLENBREs7QUFFTCxXQUFJLENBQUMsU0FBRCxFQUFZLE1BQU0sSUFBSSxLQUFKLENBQVUsc0JBQXNCLE1BQXRCLEdBQStCLDhCQUEvQixDQUFoQixDQUFoQjtNQUpGO0FBTUEsU0FBSSxZQUFZLE9BQU8sZ0JBQVAsQ0FBd0IsSUFBeEIsQ0FBWixDQVIwQjtBQVM5QixTQUFJLGlCQUFpQixPQUFPLGdCQUFQLENBQXdCLFNBQXhCLENBQWpCOztBQVQwQixXQVc5QixHQUFTO0FBQ1AsYUFBTSxDQUFDLEtBQUssVUFBTCxHQUFrQixnQkFBSSxlQUFlLFdBQWYsQ0FBdkIsR0FDQSxnQkFBSSxVQUFVLGVBQVYsQ0FESixHQUNpQyxnQkFBSSxVQUFVLFVBQVYsQ0FEckM7QUFFTixZQUFLLENBQUMsS0FBSyxTQUFMLEdBQWlCLGdCQUFJLGVBQWUsVUFBZixDQUF0QixHQUNDLGdCQUFJLFVBQVUsY0FBVixDQURMLEdBQ2lDLGdCQUFJLFVBQVUsU0FBVixDQURyQztBQUVMLGNBQU8sd0JBQVcsU0FBWCxJQUF3Qix3QkFBVyxJQUFYLENBQXhCLEdBQTJDLEtBQUssVUFBTDtBQUNsRCxlQUFRLHlCQUFZLFNBQVosSUFBeUIseUJBQVksSUFBWixDQUF6QixHQUE2QyxLQUFLLFNBQUw7TUFOdkQsQ0FYOEI7SUFBaEM7OztBQVR5RyxPQStCckcsa0JBQU0sT0FBTyxLQUFQLENBQVYsRUFBeUIsVUFBVSxLQUFLLEdBQUwsQ0FBUyxPQUFULEVBQWtCLE9BQU8sS0FBUCxDQUE1QixDQUF6QjtBQUNBLE9BQUksa0JBQU0sT0FBTyxNQUFQLENBQVYsRUFBMEIsVUFBVSxLQUFLLEdBQUwsQ0FBUyxPQUFULEVBQWtCLE9BQU8sTUFBUCxDQUE1QixDQUExQjs7O0FBaEN5RyxPQW1Dckcsa0JBQU0sT0FBTyxJQUFQLENBQVYsRUFBd0IsVUFBVSxLQUFLLEdBQUwsQ0FBUyxPQUFULEVBQWtCLE9BQU8sSUFBUCxDQUE1QixDQUF4QjtBQUNBLE9BQUksa0JBQU0sT0FBTyxHQUFQLENBQVYsRUFBdUIsVUFBVSxLQUFLLEdBQUwsQ0FBUyxPQUFULEVBQWtCLE9BQU8sR0FBUCxDQUE1QixDQUF2Qjs7QUFFQSxVQUFPLENBQUMsT0FBRCxFQUFVLE9BQVYsQ0FBUCxDQXRDeUc7RUFBcEc7O0FBeUNBLFVBQVMsVUFBVCxDQUFvQixJQUFwQixFQUE0QyxRQUE1QyxFQUE4RCxRQUE5RCxFQUFrRztBQUN2RyxPQUFJLElBQUksS0FBSyxLQUFMLENBQVcsV0FBVyxLQUFLLENBQUwsQ0FBWCxDQUFYLEdBQWlDLEtBQUssQ0FBTCxDQUFqQyxDQUQrRjtBQUV2RyxPQUFJLElBQUksS0FBSyxLQUFMLENBQVcsV0FBVyxLQUFLLENBQUwsQ0FBWCxDQUFYLEdBQWlDLEtBQUssQ0FBTCxDQUFqQyxDQUYrRjtBQUd2RyxVQUFPLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBUCxDQUh1RztFQUFsRzs7QUFNQSxVQUFTLFFBQVQsQ0FBa0IsU0FBbEIsRUFBdUQ7QUFDNUQsVUFBTyxVQUFVLEtBQVYsQ0FBZ0IsSUFBaEIsS0FBeUIsTUFBekIsSUFBbUMsVUFBVSxLQUFWLENBQWdCLElBQWhCLEtBQXlCLEdBQXpCLENBRGtCO0VBQXZEOztBQUlBLFVBQVMsUUFBVCxDQUFrQixTQUFsQixFQUF1RDtBQUM1RCxVQUFPLFVBQVUsS0FBVixDQUFnQixJQUFoQixLQUF5QixNQUF6QixJQUFtQyxVQUFVLEtBQVYsQ0FBZ0IsSUFBaEIsS0FBeUIsR0FBekIsQ0FEa0I7RUFBdkQ7OztBQUtBLFVBQVMsa0JBQVQsQ0FBNEIsQ0FBNUIsRUFBdUQ7QUFDNUQsT0FBSSxXQUFXLENBQUMsQ0FBRSxhQUFGLElBQW1CLEVBQUUsYUFBRixDQUFnQixDQUFoQixDQUFuQixJQUEwQyxDQUEzQyxDQUQ2QztBQUU1RCxVQUFPO0FBQ0wsY0FBUyxTQUFTLE9BQVQ7QUFDVCxjQUFTLFNBQVMsT0FBVDtJQUZYLENBRjREO0VBQXZEOzs7QUFTUCxVQUFTLFdBQVQsQ0FBcUIsTUFBckIsRUFBNkM7QUFDM0MsVUFBTztBQUNMLFdBQU0sT0FBTyxJQUFQO0FBQ04sVUFBSyxPQUFPLEdBQVA7QUFDTCxZQUFPLE9BQU8sS0FBUDtBQUNQLGFBQVEsT0FBTyxNQUFQO0lBSlYsQ0FEMkM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUU3Qzs7OztBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7O0FBR0EsS0FBTSxZQUFZO0FBQ2hCLFVBQU87QUFDTCxZQUFPLFlBQVA7QUFDQSxXQUFNLFdBQU47QUFDQSxXQUFNLFVBQU47SUFIRjtBQUtBLFVBQU87QUFDTCxZQUFPLFdBQVA7QUFDQSxXQUFNLFdBQU47QUFDQSxXQUFNLFNBQU47SUFIRjtFQU5JOzs7QUFjTixLQUFJLGVBQWUsVUFBVSxLQUFWOzs7Ozs7Ozs7S0FnQkU7Ozs7Ozs7Ozs7Ozs7OzRNQWlNbkIsUUFBbUI7QUFDakIsaUJBQVUsS0FBVjs7QUFFQSxjQUFPLElBQVAsRUFBYSxPQUFPLElBQVA7Y0FjZixrQkFBZ0MsVUFBQyxDQUFELEVBQU87O0FBRXJDLGFBQUssS0FBTCxDQUFXLFdBQVgsQ0FBdUIsQ0FBdkI7OztBQUZxQyxXQUtqQyxDQUFDLE1BQUssS0FBTCxDQUFXLGFBQVgsSUFBNEIsT0FBTyxFQUFFLE1BQUYsS0FBYSxRQUFwQixJQUFnQyxFQUFFLE1BQUYsS0FBYSxDQUFiLEVBQWdCLE9BQU8sS0FBUCxDQUFqRjs7O0FBTHFDLFdBUWpDLE1BQUssS0FBTCxDQUFXLFFBQVgsSUFDRCxNQUFLLEtBQUwsQ0FBVyxNQUFYLElBQXFCLENBQUMsNkJBQWdCLEVBQUUsTUFBRixFQUFVLE1BQUssS0FBTCxDQUFXLE1BQVgsQ0FBM0IsSUFDckIsTUFBSyxLQUFMLENBQVcsTUFBWCxJQUFxQiw2QkFBZ0IsRUFBRSxNQUFGLEVBQVUsTUFBSyxLQUFMLENBQVcsTUFBWCxDQUEvQyxFQUFvRTtBQUNyRSxnQkFEcUU7UUFGdkU7Ozs7O0FBUnFDLFdBaUJqQyxFQUFFLGFBQUYsRUFBZ0I7QUFDbEIsZUFBSyxRQUFMLENBQWMsRUFBQyxpQkFBaUIsRUFBRSxhQUFGLENBQWdCLENBQWhCLEVBQW1CLFVBQW5CLEVBQWhDLEVBRGtCO1FBQXBCOzs7O0FBakJxQyxXQXVCakMsTUFBSyxLQUFMLENBQVcsb0JBQVgsRUFBaUMsbUNBQXJDOzs7QUF2QnFDO2lDQTBCWixxQ0FBbUIsQ0FBbkIsRUExQlk7O1dBMEJoQyxzQ0ExQmdDO1dBMEJ2Qjs7O0FBMUJ1QjtBQTZCckMsV0FBSSxZQUFZLG9DQUFzQixPQUF0QixFQUErQixPQUEvQixDQUFaLENBN0JpQzs7QUErQnJDLDBCQUFJLG9DQUFKLEVBQTBDLFVBQVUsUUFBVixDQUExQzs7O0FBL0JxQyx5QkFrQ3JDLENBQUksU0FBSixFQUFlLE1BQUssS0FBTCxDQUFXLE9BQVgsQ0FBZixDQWxDcUM7QUFtQ3JDLFdBQUksZUFBZSxNQUFLLEtBQUwsQ0FBVyxPQUFYLENBQW1CLENBQW5CLEVBQXNCLFNBQXRCLENBQWYsQ0FuQ2lDO0FBb0NyQyxXQUFJLGlCQUFpQixLQUFqQixFQUF3QixPQUE1Qjs7Ozs7QUFwQ3FDLFlBMENyQyxDQUFLLFFBQUwsQ0FBYztBQUNaLG1CQUFVLElBQVY7O0FBRUEsZ0JBQU8sT0FBUDtBQUNBLGdCQUFPLE9BQVA7O0FBRUEsa0JBQVMsU0FBUyxJQUFULENBQWMsVUFBZDtBQUNULGtCQUFTLFNBQVMsSUFBVCxDQUFjLFNBQWQ7UUFQWDs7O0FBMUNxQyw0QkFxRHJDLENBQVMsUUFBVCxFQUFtQixRQUFuQixFQUE2QixNQUFLLFlBQUwsQ0FBN0I7Ozs7QUFyRHFDLDRCQXlEckMsQ0FBUyxRQUFULEVBQW1CLGFBQWEsSUFBYixFQUFtQixNQUFLLFVBQUwsQ0FBdEMsQ0F6RHFDO0FBMERyQyw2QkFBUyxRQUFULEVBQW1CLGFBQWEsSUFBYixFQUFtQixNQUFLLGNBQUwsQ0FBdEMsQ0ExRHFDO01BQVAsUUE2RGhDLGFBQTJCLFVBQUMsQ0FBRCxFQUFPOztBQUVoQyxXQUFJLEVBQUUsYUFBRixJQUFvQixFQUFFLGFBQUYsQ0FBZ0IsQ0FBaEIsRUFBbUIsVUFBbkIsS0FBa0MsTUFBSyxLQUFMLENBQVcsZUFBWCxFQUE2QixPQUF2Rjs7a0NBRXlCLHFDQUFtQixDQUFuQixFQUpPOztXQUkzQix1Q0FKMkI7V0FJbEI7OztBQUprQjtBQU9oQyxXQUFJLE1BQU0sT0FBTixDQUFjLE1BQUssS0FBTCxDQUFXLElBQVgsQ0FBbEIsRUFBb0M7QUFDbEMsYUFBSSxTQUFTLFVBQVUsTUFBSyxLQUFMLENBQVcsS0FBWDthQUFrQixTQUFTLFVBQVUsTUFBSyxLQUFMLENBQVcsS0FBWCxDQUQxQjs7MkJBRWYsNkJBQVcsTUFBSyxLQUFMLENBQVcsSUFBWCxFQUFpQixNQUE1QixFQUFvQyxNQUFwQyxFQUZlOzs7O0FBRWpDLGtDQUZpQztBQUV6QixrQ0FGeUI7O0FBR2xDLGFBQUksQ0FBQyxNQUFELElBQVcsQ0FBQyxNQUFELEVBQVMsT0FBeEI7QUFIa0MsZ0JBSWxDLEdBQVUsTUFBSyxLQUFMLENBQVcsS0FBWCxHQUFtQixNQUFuQixFQUEyQixVQUFVLE1BQUssS0FBTCxDQUFXLEtBQVgsR0FBbUIsTUFBbkIsQ0FKYjtRQUFwQzs7QUFPQSxXQUFNLFlBQVksb0NBQXNCLE9BQXRCLEVBQStCLE9BQS9CLENBQVosQ0FkMEI7O0FBZ0JoQywwQkFBSSwrQkFBSixFQUFxQyxVQUFVLFFBQVYsQ0FBckM7OztBQWhCZ0MsV0FvQjFCLGVBQWUsTUFBSyxLQUFMLENBQVcsTUFBWCxDQUFrQixDQUFsQixFQUFxQixTQUFyQixDQUFmLENBcEIwQjtBQXFCaEMsV0FBSSxpQkFBaUIsS0FBakIsRUFBd0I7QUFDMUIsZUFBSyxjQUFMLENBQW9CLEVBQXBCLEVBRDBCO0FBRTFCLGdCQUYwQjtRQUE1Qjs7QUFLQSxhQUFLLFFBQUwsQ0FBYztBQUNaLGdCQUFPLE9BQVA7QUFDQSxnQkFBTyxPQUFQO1FBRkYsRUExQmdDO01BQVAsUUFnQzNCLGlCQUErQixVQUFDLENBQUQsRUFBTztBQUNwQyxXQUFJLENBQUMsTUFBSyxLQUFMLENBQVcsUUFBWCxFQUFxQixPQUExQjs7OztBQURvQyxXQUtoQyxFQUFFLGNBQUYsSUFBcUIsRUFBRSxjQUFGLENBQWlCLENBQWpCLEVBQW9CLFVBQXBCLEtBQW1DLE1BQUssS0FBTCxDQUFXLGVBQVgsRUFBNkIsT0FBekY7OztBQUxvQyxXQVFoQyxNQUFLLEtBQUwsQ0FBVyxvQkFBWCxFQUFpQyxzQ0FBckM7O2tDQUV5QixxQ0FBbUIsQ0FBbkIsRUFWVzs7V0FVL0IsdUNBVitCO1dBVXRCLHVDQVZzQjs7QUFXcEMsV0FBTSxZQUFZLG9DQUFzQixPQUF0QixFQUErQixPQUEvQixDQUFaLENBWDhCOztBQWFwQywwQkFBSSxtQ0FBSixFQUF5QyxVQUFVLFFBQVYsQ0FBekM7OztBQWJvQyxZQWdCcEMsQ0FBSyxRQUFMLENBQWM7QUFDWixtQkFBVSxLQUFWO0FBQ0EsZ0JBQU8sSUFBUDtBQUNBLGdCQUFPLElBQVA7UUFIRjs7O0FBaEJvQyxZQXVCcEMsQ0FBSyxLQUFMLENBQVcsTUFBWCxDQUFrQixDQUFsQixFQUFxQixTQUFyQjs7O0FBdkJvQyx5QkEwQnBDLENBQUksa0NBQUosRUExQm9DO0FBMkJwQyxnQ0FBWSxRQUFaLEVBQXNCLFFBQXRCLEVBQWdDLE1BQUssWUFBTCxDQUFoQyxDQTNCb0M7QUE0QnBDLGdDQUFZLFFBQVosRUFBc0IsYUFBYSxJQUFiLEVBQW1CLE1BQUssVUFBTCxDQUF6QyxDQTVCb0M7QUE2QnBDLGdDQUFZLFFBQVosRUFBc0IsYUFBYSxJQUFiLEVBQW1CLE1BQUssY0FBTCxDQUF6QyxDQTdCb0M7TUFBUCxRQWtDL0IsZUFBNkIsVUFBQyxDQUFELEVBQU87QUFDbEMsV0FBTSxJQUFJLE1BQUssS0FBTDtXQUFZLElBQUksU0FBUyxJQUFULENBQWMsVUFBZDtXQUEwQixJQUFJLFNBQVMsSUFBVCxDQUFjLFNBQWQ7OztBQUR0QixXQUk5QixZQUFZLG1DQUFaLENBSjhCO0FBS2xDLGlCQUFVLFFBQVYsQ0FBbUIsTUFBbkIsR0FBNEIsSUFBSSxFQUFFLE9BQUYsQ0FMRTtBQU1sQyxpQkFBVSxRQUFWLENBQW1CLE1BQW5CLEdBQTRCLElBQUksRUFBRSxPQUFGLENBTkU7O0FBUWxDLGFBQUssUUFBTCxDQUFjO0FBQ1osZ0JBQU8sRUFBRSxLQUFGLEdBQVUsVUFBVSxRQUFWLENBQW1CLE1BQW5CO0FBQ2pCLGdCQUFPLEVBQUUsS0FBRixHQUFVLFVBQVUsUUFBVixDQUFtQixNQUFuQjtBQUNqQixrQkFBUyxDQUFUO0FBQ0Esa0JBQVMsQ0FBVDtRQUpGLEVBUmtDOztBQWVsQyxhQUFLLEtBQUwsQ0FBVyxNQUFYLENBQWtCLENBQWxCLEVBQXFCLFNBQXJCLEVBZmtDO01BQVAsUUFtQjdCLGVBQTZCLFVBQUMsQ0FBRCxFQUFPOztBQUVsQyxzQkFBZSxVQUFVLEtBQVYsQ0FGbUI7O0FBSWxDLGNBQU8sTUFBSyxlQUFMLENBQXFCLENBQXJCLENBQVAsQ0FKa0M7TUFBUCxRQU83QixhQUEyQixVQUFDLENBQUQsRUFBTzs7QUFFaEMsc0JBQWUsVUFBVSxLQUFWLENBRmlCOztBQUloQyxjQUFPLE1BQUssY0FBTCxDQUFvQixDQUFwQixDQUFQLENBSmdDO01BQVA7OztnQkEzV1I7OzRDQXVNSTs7O0FBR3JCLGdDQUFZLFFBQVosRUFBc0IsVUFBVSxLQUFWLENBQWdCLElBQWhCLEVBQXNCLEtBQUssVUFBTCxDQUE1QyxDQUhxQjtBQUlyQixnQ0FBWSxRQUFaLEVBQXNCLFVBQVUsS0FBVixDQUFnQixJQUFoQixFQUFzQixLQUFLLFVBQUwsQ0FBNUMsQ0FKcUI7QUFLckIsZ0NBQVksUUFBWixFQUFzQixVQUFVLEtBQVYsQ0FBZ0IsSUFBaEIsRUFBc0IsS0FBSyxjQUFMLENBQTVDLENBTHFCO0FBTXJCLGdDQUFZLFFBQVosRUFBc0IsVUFBVSxLQUFWLENBQWdCLElBQWhCLEVBQXNCLEtBQUssY0FBTCxDQUE1QyxDQU5xQjtBQU9yQixnQ0FBWSxRQUFaLEVBQXNCLFFBQXRCLEVBQWdDLEtBQUssWUFBTCxDQUFoQyxDQVBxQjtBQVFyQixXQUFJLEtBQUssS0FBTCxDQUFXLG9CQUFYLEVBQWlDLHNDQUFyQzs7Ozs7Ozs7Ozs7OEJBbUtxQjs7O0FBR3JCLGNBQU8sZ0JBQU0sWUFBTixDQUFtQixnQkFBTSxRQUFOLENBQWUsSUFBZixDQUFvQixLQUFLLEtBQUwsQ0FBVyxRQUFYLENBQXZDLEVBQTZEO0FBQ2xFLGdCQUFPLHdCQUFXLEtBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsS0FBcEIsQ0FBMEIsS0FBMUIsQ0FBbEI7Ozs7QUFJQSxzQkFBYSxLQUFLLGVBQUw7QUFDYix1QkFBYyxLQUFLLFlBQUw7QUFDZCxvQkFBVyxLQUFLLGNBQUw7QUFDWCxxQkFBWSxLQUFLLFVBQUw7UUFSUCxDQUFQLENBSHFCOzs7O1VBbFhKO0dBQXNCLGdCQUFNLFNBQU47O0FBQXRCLGVBRVosY0FBYztBQUZGLGVBSVosWUFBWTs7Ozs7OztBQU9qQixrQkFBZSxpQkFBVSxJQUFWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CZixhQUFVLGlCQUFVLElBQVY7Ozs7Ozs7QUFPVix5QkFBc0IsaUJBQVUsSUFBVjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CdEIsU0FBTSxpQkFBVSxPQUFWLENBQWtCLGlCQUFVLE1BQVYsQ0FBeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkEsV0FBUSxpQkFBVSxNQUFWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JSLFdBQVEsaUJBQVUsTUFBVjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJSLFlBQVMsaUJBQVUsSUFBVjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJULFdBQVEsaUJBQVUsSUFBVjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQlIsV0FBUSxpQkFBVSxJQUFWOzs7Ozs7QUFNUixnQkFBYSxpQkFBVSxJQUFWOzs7OztBQUtiLDhCQTFLaUI7QUEyS2pCLDBCQTNLaUI7QUE0S2pCLDhCQTVLaUI7O0FBSkEsZUFtTFosZUFBZTtBQUNwQixrQkFBZSxLQUFmO0FBQ0EsV0FBUSxJQUFSO0FBQ0EsYUFBVSxLQUFWO0FBQ0EseUJBQXNCLElBQXRCO0FBQ0EsV0FBUSxJQUFSO0FBQ0EsU0FBTSxJQUFOO0FBQ0EsY0FBVyxJQUFYO0FBQ0EsWUFBUyxtQkFBVSxFQUFWO0FBQ1QsV0FBUSxrQkFBVSxFQUFWO0FBQ1IsV0FBUSxrQkFBVSxFQUFWO0FBQ1IsZ0JBQWEsdUJBQVUsRUFBVjs7bUJBOUxJLGM7Ozs7Ozs7Ozs7O21CQ3RDRztBQUFULFVBQVMsR0FBVCxHQUEyQjs7O0FBQ3hDLE9BQUksTUFBNkIscUJBQVEsR0FBUiw0QkFBakMiLCJmaWxlIjoiLi9kaXN0L3JlYWN0LWRyYWdnYWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInJlYWN0XCIsIFwicmVhY3QtZG9tXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlJlYWN0RHJhZ2dhYmxlXCJdID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJyZWFjdC1kb21cIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlJlYWN0RHJhZ2dhYmxlXCJdID0gZmFjdG9yeShyb290W1wiUmVhY3RcIl0sIHJvb3RbXCJSZWFjdERPTVwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX18pIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDI4YjhmODJlOTlkYzdhMzQ3NDQxXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9EcmFnZ2FibGUnKS5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuRHJhZ2dhYmxlQ29yZSA9IHJlcXVpcmUoJy4vbGliL0RyYWdnYWJsZUNvcmUnKS5kZWZhdWx0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9pbmRleC5qc1xuICoqLyIsIi8vIEBmbG93XG5pbXBvcnQge2RlZmF1bHQgYXMgUmVhY3QsIFByb3BUeXBlc30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG4vLyAkRmxvd0lnbm9yZVxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQge2NyZWF0ZVVJRXZlbnQsIGNyZWF0ZUNTU1RyYW5zZm9ybSwgY3JlYXRlU1ZHVHJhbnNmb3JtfSBmcm9tICcuL3V0aWxzL2RvbUZucyc7XG5pbXBvcnQge2NhbkRyYWdYLCBjYW5EcmFnWSwgZ2V0Qm91bmRQb3NpdGlvbn0gZnJvbSAnLi91dGlscy9wb3NpdGlvbkZucyc7XG5pbXBvcnQge2RvbnRTZXRNZX0gZnJvbSAnLi91dGlscy9zaGltcyc7XG5pbXBvcnQgRHJhZ2dhYmxlQ29yZSBmcm9tICcuL0RyYWdnYWJsZUNvcmUnO1xuaW1wb3J0IGxvZyBmcm9tICcuL3V0aWxzL2xvZyc7XG5cbmltcG9ydCB0eXBlIHtDb3JlRXZlbnR9IGZyb20gJy4vdXRpbHMvZG9tRm5zJztcbmV4cG9ydCB0eXBlIENvcmVFdmVudEhhbmRsZXIgPSAoZTogRXZlbnQsIGNvcmVFdmVudDogQ29yZUV2ZW50KSA9PiB2b2lkIHwgZmFsc2U7XG5leHBvcnQgdHlwZSBEcmFnZ2FibGVTdGF0ZSA9IHtcbiAgZHJhZ2dpbmc6IGJvb2xlYW4sXG4gIGRyYWdnZWQ6IGJvb2xlYW4sXG4gIGNsaWVudFg6IG51bWJlciwgY2xpZW50WTogbnVtYmVyLFxuICBzbGFja1g6IG51bWJlciwgc2xhY2tZOiBudW1iZXIsXG4gIGlzRWxlbWVudFNWRzogYm9vbGVhblxufTtcblxuLy9cbi8vIERlZmluZSA8RHJhZ2dhYmxlPlxuLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ2dhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnRHJhZ2dhYmxlJztcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8vIEFjY2VwdHMgYWxsIHByb3BzIDxEcmFnZ2FibGVDb3JlPiBhY2NlcHRzLlxuICAgIC4uLkRyYWdnYWJsZUNvcmUucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogYGF4aXNgIGRldGVybWluZXMgd2hpY2ggYXhpcyB0aGUgZHJhZ2dhYmxlIGNhbiBtb3ZlLlxuICAgICAqXG4gICAgICogIE5vdGUgdGhhdCBhbGwgY2FsbGJhY2tzIHdpbGwgc3RpbGwgcmV0dXJuIGRhdGEgYXMgbm9ybWFsLiBUaGlzIG9ubHlcbiAgICAgKiAgY29udHJvbHMgZmx1c2hpbmcgdG8gdGhlIERPTS5cbiAgICAgKlxuICAgICAqICdib3RoJyBhbGxvd3MgbW92ZW1lbnQgaG9yaXpvbnRhbGx5IGFuZCB2ZXJ0aWNhbGx5LlxuICAgICAqICd4JyBsaW1pdHMgbW92ZW1lbnQgdG8gaG9yaXpvbnRhbCBheGlzLlxuICAgICAqICd5JyBsaW1pdHMgbW92ZW1lbnQgdG8gdmVydGljYWwgYXhpcy5cbiAgICAgKiAnbm9uZScgbGltaXRzIGFsbCBtb3ZlbWVudC5cbiAgICAgKlxuICAgICAqIERlZmF1bHRzIHRvICdib3RoJy5cbiAgICAgKi9cbiAgICBheGlzOiBQcm9wVHlwZXMub25lT2YoWydib3RoJywgJ3gnLCAneScsICdub25lJ10pLFxuXG4gICAgLyoqXG4gICAgICogYGJvdW5kc2AgZGV0ZXJtaW5lcyB0aGUgcmFuZ2Ugb2YgbW92ZW1lbnQgYXZhaWxhYmxlIHRvIHRoZSBlbGVtZW50LlxuICAgICAqIEF2YWlsYWJsZSB2YWx1ZXMgYXJlOlxuICAgICAqXG4gICAgICogJ3BhcmVudCcgcmVzdHJpY3RzIG1vdmVtZW50IHdpdGhpbiB0aGUgRHJhZ2dhYmxlJ3MgcGFyZW50IG5vZGUuXG4gICAgICpcbiAgICAgKiBBbHRlcm5hdGl2ZWx5LCBwYXNzIGFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllcywgYWxsIG9mIHdoaWNoIGFyZSBvcHRpb25hbDpcbiAgICAgKlxuICAgICAqIHtsZWZ0OiBMRUZUX0JPVU5ELCByaWdodDogUklHSFRfQk9VTkQsIGJvdHRvbTogQk9UVE9NX0JPVU5ELCB0b3A6IFRPUF9CT1VORH1cbiAgICAgKlxuICAgICAqIEFsbCB2YWx1ZXMgYXJlIGluIHB4LlxuICAgICAqXG4gICAgICogRXhhbXBsZTpcbiAgICAgKlxuICAgICAqIGBgYGpzeFxuICAgICAqICAgbGV0IEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICAgKiAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgKiAgICAgICAgIHJldHVybiAoXG4gICAgICogICAgICAgICAgICA8RHJhZ2dhYmxlIGJvdW5kcz17e3JpZ2h0OiAzMDAsIGJvdHRvbTogMzAwfX0+XG4gICAgICogICAgICAgICAgICAgIDxkaXY+Q29udGVudDwvZGl2PlxuICAgICAqICAgICAgICAgICA8L0RyYWdnYWJsZT5cbiAgICAgKiAgICAgICAgICk7XG4gICAgICogICAgICAgfVxuICAgICAqICAgfSk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgYm91bmRzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIGxlZnQ6IFByb3BUeXBlcy5OdW1iZXIsXG4gICAgICAgIHJpZ2h0OiBQcm9wVHlwZXMuTnVtYmVyLFxuICAgICAgICB0b3A6IFByb3BUeXBlcy5OdW1iZXIsXG4gICAgICAgIGJvdHRvbTogUHJvcFR5cGVzLk51bWJlclxuICAgICAgfSksXG4gICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgUHJvcFR5cGVzLm9uZU9mKFtmYWxzZV0pXG4gICAgXSksXG5cbiAgICAvKipcbiAgICAgKiBgc3RhcnRgIHNwZWNpZmllcyB0aGUgeCBhbmQgeSB0aGF0IHRoZSBkcmFnZ2VkIGl0ZW0gc2hvdWxkIHN0YXJ0IGF0XG4gICAgICpcbiAgICAgKiBFeGFtcGxlOlxuICAgICAqXG4gICAgICogYGBganN4XG4gICAgICogICAgICBsZXQgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgICAqICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAqICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAqICAgICAgICAgICAgICAgICAgPERyYWdnYWJsZSBzdGFydD17e3g6IDI1LCB5OiAyNX19PlxuICAgICAqICAgICAgICAgICAgICAgICAgICAgIDxkaXY+SSBzdGFydCB3aXRoIHRyYW5zZm9ybVg6IDI1cHggYW5kIHRyYW5zZm9ybVk6IDI1cHg7PC9kaXY+XG4gICAgICogICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZT5cbiAgICAgKiAgICAgICAgICAgICAgKTtcbiAgICAgKiAgICAgICAgICB9XG4gICAgICogICAgICB9KTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBzdGFydDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICB5OiBQcm9wVHlwZXMubnVtYmVyXG4gICAgfSksXG5cbiAgICAvKipcbiAgICAgKiBgekluZGV4YCBzcGVjaWZpZXMgdGhlIHpJbmRleCB0byB1c2Ugd2hpbGUgZHJhZ2dpbmcuXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOlxuICAgICAqXG4gICAgICogYGBganN4XG4gICAgICogICBsZXQgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgICAqICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAqICAgICAgICAgICByZXR1cm4gKFxuICAgICAqICAgICAgICAgICAgICAgPERyYWdnYWJsZSB6SW5kZXg9ezEwMH0+XG4gICAgICogICAgICAgICAgICAgICAgICAgPGRpdj5JIGhhdmUgYSB6SW5kZXg8L2Rpdj5cbiAgICAgKiAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxuICAgICAqICAgICAgICAgICApO1xuICAgICAqICAgICAgIH1cbiAgICAgKiAgIH0pO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHpJbmRleDogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIFRoZXNlIHByb3BlcnRpZXMgc2hvdWxkIGJlIGRlZmluZWQgb24gdGhlIGNoaWxkLCBub3QgaGVyZS5cbiAgICAgKi9cbiAgICBjbGFzc05hbWU6IGRvbnRTZXRNZSxcbiAgICBzdHlsZTogZG9udFNldE1lLFxuICAgIHRyYW5zZm9ybTogZG9udFNldE1lXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAuLi5EcmFnZ2FibGVDb3JlLmRlZmF1bHRQcm9wcyxcbiAgICBheGlzOiAnYm90aCcsXG4gICAgYm91bmRzOiBmYWxzZSxcbiAgICBzdGFydDoge3g6IDAsIHk6IDB9LFxuICAgIHpJbmRleDogTmFOXG4gIH07XG5cbiAgc3RhdGU6IERyYWdnYWJsZVN0YXRlID0ge1xuICAgIC8vIFdoZXRoZXIgb3Igbm90IHdlIGFyZSBjdXJyZW50bHkgZHJhZ2dpbmcuXG4gICAgZHJhZ2dpbmc6IGZhbHNlLFxuXG4gICAgLy8gV2hldGhlciBvciBub3Qgd2UgaGF2ZSBiZWVuIGRyYWdnZWQgYmVmb3JlLlxuICAgIGRyYWdnZWQ6IGZhbHNlLFxuXG4gICAgLy8gQ3VycmVudCB0cmFuc2Zvcm0geCBhbmQgeS5cbiAgICBjbGllbnRYOiB0aGlzLnByb3BzID8gdGhpcy5wcm9wcy5zdGFydC54IDogMCwgY2xpZW50WTogdGhpcy5wcm9wcyA/IHRoaXMucHJvcHMuc3RhcnQueSA6IDAsXG5cbiAgICAvLyBVc2VkIGZvciBjb21wZW5zYXRpbmcgZm9yIG91dC1vZi1ib3VuZHMgZHJhZ3NcbiAgICBzbGFja1g6IDAsIHNsYWNrWTogMCxcblxuICAgIC8vIENhbiBvbmx5IGRldGVybWluZSBpZiBTVkcgYWZ0ZXIgbW91bnRpbmdcbiAgICBpc0VsZW1lbnRTVkc6IGZhbHNlXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHRoZSBlbGVtZW50IHBhc3NlZCBpcyBhbiBpbnN0YW5jZW9mIFNWR0VsZW1lbnRcbiAgICBpZihSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKSBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0VsZW1lbnRTVkc6IHRydWUgfSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZHJhZ2dpbmc6IGZhbHNlfSk7IC8vIHByZXZlbnRzIGludmFyaWFudCBpZiB1bm1vdW50ZWQgd2hpbGUgZHJhZ2dpbmdcbiAgfVxuXG4gIG9uRHJhZ1N0YXJ0OiBDb3JlRXZlbnRIYW5kbGVyID0gKGUsIGNvcmVFdmVudCkgPT4ge1xuICAgIGxvZygnRHJhZ2dhYmxlOiBvbkRyYWdTdGFydDogJWonLCBjb3JlRXZlbnQucG9zaXRpb24pO1xuXG4gICAgLy8gU2hvcnQtY2lyY3VpdCBpZiB1c2VyJ3MgY2FsbGJhY2sga2lsbGVkIGl0LlxuICAgIGxldCBzaG91bGRTdGFydCA9IHRoaXMucHJvcHMub25TdGFydChlLCBjcmVhdGVVSUV2ZW50KHRoaXMsIGNvcmVFdmVudCkpO1xuICAgIC8vIEtpbGxzIHN0YXJ0IGV2ZW50IG9uIGNvcmUgYXMgd2VsbCwgc28gbW92ZSBoYW5kbGVycyBhcmUgbmV2ZXIgYm91bmQuXG4gICAgaWYgKHNob3VsZFN0YXJ0ID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7ZHJhZ2dpbmc6IHRydWUsIGRyYWdnZWQ6IHRydWV9KTtcbiAgfTtcblxuICBvbkRyYWc6IENvcmVFdmVudEhhbmRsZXIgPSAoZSwgY29yZUV2ZW50KSA9PiB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmRyYWdnaW5nKSByZXR1cm4gZmFsc2U7XG4gICAgbG9nKCdEcmFnZ2FibGU6IG9uRHJhZzogJWonLCBjb3JlRXZlbnQucG9zaXRpb24pO1xuXG4gICAgbGV0IHVpRXZlbnQgPSBjcmVhdGVVSUV2ZW50KHRoaXMsIGNvcmVFdmVudCk7XG5cbiAgICBsZXQgbmV3U3RhdGUgPSB7XG4gICAgICBjbGllbnRYOiB1aUV2ZW50LnBvc2l0aW9uLmxlZnQsXG4gICAgICBjbGllbnRZOiB1aUV2ZW50LnBvc2l0aW9uLnRvcFxuICAgIH07XG5cbiAgICAvLyBLZWVwIHdpdGhpbiBib3VuZHMuXG4gICAgaWYgKHRoaXMucHJvcHMuYm91bmRzKSB7XG4gICAgICAvLyBTYXZlIG9yaWdpbmFsIHggYW5kIHkuXG4gICAgICBsZXQge2NsaWVudFgsIGNsaWVudFl9ID0gbmV3U3RhdGU7XG5cbiAgICAgIC8vIEFkZCBzbGFjayB0byB0aGUgdmFsdWVzIHVzZWQgdG8gY2FsY3VsYXRlIGJvdW5kIHBvc2l0aW9uLiBUaGlzIHdpbGwgZW5zdXJlIHRoYXQgaWZcbiAgICAgIC8vIHdlIHN0YXJ0IHJlbW92aW5nIHNsYWNrLCB0aGUgZWxlbWVudCB3b24ndCByZWFjdCB0byBpdCByaWdodCBhd2F5IHVudGlsIGl0J3MgYmVlblxuICAgICAgLy8gY29tcGxldGVseSByZW1vdmVkLlxuICAgICAgbmV3U3RhdGUuY2xpZW50WCArPSB0aGlzLnN0YXRlLnNsYWNrWDtcbiAgICAgIG5ld1N0YXRlLmNsaWVudFkgKz0gdGhpcy5zdGF0ZS5zbGFja1k7XG5cbiAgICAgIC8vIEdldCBib3VuZCBwb3NpdGlvbi4gVGhpcyB3aWxsIGNlaWwvZmxvb3IgdGhlIHggYW5kIHkgd2l0aGluIHRoZSBib3VuZGFyaWVzLlxuICAgICAgW25ld1N0YXRlLmNsaWVudFgsIG5ld1N0YXRlLmNsaWVudFldID0gZ2V0Qm91bmRQb3NpdGlvbih0aGlzLCBuZXdTdGF0ZS5jbGllbnRYLCBuZXdTdGF0ZS5jbGllbnRZKTtcblxuICAgICAgLy8gUmVjYWxjdWxhdGUgc2xhY2sgYnkgbm90aW5nIGhvdyBtdWNoIHdhcyBzaGF2ZWQgYnkgdGhlIGJvdW5kUG9zaXRpb24gaGFuZGxlci5cbiAgICAgIG5ld1N0YXRlLnNsYWNrWCA9IHRoaXMuc3RhdGUuc2xhY2tYICsgKGNsaWVudFggLSBuZXdTdGF0ZS5jbGllbnRYKTtcbiAgICAgIG5ld1N0YXRlLnNsYWNrWSA9IHRoaXMuc3RhdGUuc2xhY2tZICsgKGNsaWVudFkgLSBuZXdTdGF0ZS5jbGllbnRZKTtcblxuICAgICAgLy8gVXBkYXRlIHRoZSBldmVudCB3ZSBmaXJlIHRvIHJlZmxlY3Qgd2hhdCByZWFsbHkgaGFwcGVuZWQgYWZ0ZXIgYm91bmRzIHRvb2sgZWZmZWN0LlxuICAgICAgdWlFdmVudC5wb3NpdGlvbi5sZWZ0ID0gY2xpZW50WDtcbiAgICAgIHVpRXZlbnQucG9zaXRpb24udG9wID0gY2xpZW50WTtcbiAgICAgIHVpRXZlbnQuZGVsdGFYID0gbmV3U3RhdGUuY2xpZW50WCAtIHRoaXMuc3RhdGUuY2xpZW50WDtcbiAgICAgIHVpRXZlbnQuZGVsdGFZID0gbmV3U3RhdGUuY2xpZW50WSAtIHRoaXMuc3RhdGUuY2xpZW50WTtcbiAgICB9XG5cbiAgICAvLyBTaG9ydC1jaXJjdWl0IGlmIHVzZXIncyBjYWxsYmFjayBraWxsZWQgaXQuXG4gICAgbGV0IHNob3VsZFVwZGF0ZSA9IHRoaXMucHJvcHMub25EcmFnKGUsIHVpRXZlbnQpO1xuICAgIGlmIChzaG91bGRVcGRhdGUgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cbiAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcbiAgfTtcblxuICBvbkRyYWdTdG9wOiBDb3JlRXZlbnRIYW5kbGVyID0gKGUsIGNvcmVFdmVudCkgPT4ge1xuICAgIGlmICghdGhpcy5zdGF0ZS5kcmFnZ2luZykgcmV0dXJuIGZhbHNlO1xuXG4gICAgLy8gU2hvcnQtY2lyY3VpdCBpZiB1c2VyJ3MgY2FsbGJhY2sga2lsbGVkIGl0LlxuICAgIGxldCBzaG91bGRTdG9wID0gdGhpcy5wcm9wcy5vblN0b3AoZSwgY3JlYXRlVUlFdmVudCh0aGlzLCBjb3JlRXZlbnQpKTtcbiAgICBpZiAoc2hvdWxkU3RvcCA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcblxuICAgIGxvZygnRHJhZ2dhYmxlOiBvbkRyYWdTdG9wOiAlaicsIGNvcmVFdmVudC5wb3NpdGlvbik7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRyYWdnaW5nOiBmYWxzZSxcbiAgICAgIHNsYWNrWDogMCxcbiAgICAgIHNsYWNrWTogMFxuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpOiBSZWFjdEVsZW1lbnQge1xuICAgIGxldCBzdHlsZSA9IHt9LCBzdmdUcmFuc2Zvcm0gPSBudWxsO1xuXG4gICAgLy8gQWRkIGEgQ1NTIHRyYW5zZm9ybSB0byBtb3ZlIHRoZSBlbGVtZW50IGFyb3VuZC4gVGhpcyBhbGxvd3MgdXMgdG8gbW92ZSB0aGUgZWxlbWVudCBhcm91bmRcbiAgICAvLyB3aXRob3V0IHdvcnJ5aW5nIGFib3V0IHdoZXRoZXIgb3Igbm90IGl0IGlzIHJlbGF0aXZlbHkgb3IgYWJzb2x1dGVseSBwb3NpdGlvbmVkLlxuICAgIC8vIElmIHRoZSBpdGVtIHlvdSBhcmUgZHJhZ2dpbmcgYWxyZWFkeSBoYXMgYSB0cmFuc2Zvcm0gc2V0LCB3cmFwIGl0IGluIGEgPHNwYW4+IHNvIDxEcmFnZ2FibGU+XG4gICAgLy8gaGFzIGEgY2xlYW4gc2xhdGUuXG4gICAgY29uc3QgdHJhbnNmb3JtT3B0cyA9IHtcbiAgICAgIC8vIFNldCBsZWZ0IGlmIGhvcml6b250YWwgZHJhZyBpcyBlbmFibGVkXG4gICAgICB4OiBjYW5EcmFnWCh0aGlzKSA/XG4gICAgICAgIHRoaXMuc3RhdGUuY2xpZW50WCA6XG4gICAgICAgIHRoaXMucHJvcHMuc3RhcnQueCxcblxuICAgICAgLy8gU2V0IHRvcCBpZiB2ZXJ0aWNhbCBkcmFnIGlzIGVuYWJsZWRcbiAgICAgIHk6IGNhbkRyYWdZKHRoaXMpID9cbiAgICAgICAgdGhpcy5zdGF0ZS5jbGllbnRZIDpcbiAgICAgICAgdGhpcy5wcm9wcy5zdGFydC55XG4gICAgfTtcblxuICAgIC8vIElmIHRoaXMgZWxlbWVudCB3YXMgU1ZHLCB3ZSB1c2UgdGhlIGB0cmFuc2Zvcm1gIGF0dHJpYnV0ZS5cbiAgICBpZiAodGhpcy5zdGF0ZS5pc0VsZW1lbnRTVkcpIHtcbiAgICAgIHN2Z1RyYW5zZm9ybSA9IGNyZWF0ZVNWR1RyYW5zZm9ybSh0cmFuc2Zvcm1PcHRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUgPSBjcmVhdGVDU1NUcmFuc2Zvcm0odHJhbnNmb3JtT3B0cyk7XG4gICAgfVxuXG4gICAgLy8gekluZGV4IG9wdGlvblxuICAgIGlmICh0aGlzLnN0YXRlLmRyYWdnaW5nICYmICFpc05hTih0aGlzLnByb3BzLnpJbmRleCkpIHtcbiAgICAgIHN0eWxlLnpJbmRleCA9IHRoaXMucHJvcHMuekluZGV4O1xuICAgIH1cblxuICAgIC8vIE1hcmsgd2l0aCBjbGFzcyB3aGlsZSBkcmFnZ2luZ1xuICAgIGxldCBjbGFzc05hbWUgPSBjbGFzc05hbWVzKCh0aGlzLnByb3BzLmNoaWxkcmVuLnByb3BzLmNsYXNzTmFtZSB8fCAnJyksICdyZWFjdC1kcmFnZ2FibGUnLCB7XG4gICAgICAncmVhY3QtZHJhZ2dhYmxlLWRyYWdnaW5nJzogdGhpcy5zdGF0ZS5kcmFnZ2luZyxcbiAgICAgICdyZWFjdC1kcmFnZ2FibGUtZHJhZ2dlZCc6IHRoaXMuc3RhdGUuZHJhZ2dlZFxuICAgIH0pO1xuXG4gICAgLy8gUmV1c2UgdGhlIGNoaWxkIHByb3ZpZGVkXG4gICAgLy8gVGhpcyBtYWtlcyBpdCBmbGV4aWJsZSB0byB1c2Ugd2hhdGV2ZXIgZWxlbWVudCBpcyB3YW50ZWQgKGRpdiwgdWwsIGV0YylcbiAgICByZXR1cm4gKFxuICAgICAgPERyYWdnYWJsZUNvcmUgey4uLnRoaXMucHJvcHN9IG9uU3RhcnQ9e3RoaXMub25EcmFnU3RhcnR9IG9uRHJhZz17dGhpcy5vbkRyYWd9IG9uU3RvcD17dGhpcy5vbkRyYWdTdG9wfT5cbiAgICAgICAge1JlYWN0LmNsb25lRWxlbWVudChSZWFjdC5DaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgICAgc3R5bGU6IHsuLi50aGlzLnByb3BzLmNoaWxkcmVuLnByb3BzLnN0eWxlLCAuLi5zdHlsZX0sXG4gICAgICAgICAgdHJhbnNmb3JtOiBzdmdUcmFuc2Zvcm1cbiAgICAgICAgfSl9XG4gICAgICA8L0RyYWdnYWJsZUNvcmU+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2xpYi9EcmFnZ2FibGUuZXM2XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwiLFwicm9vdFwiOlwiUmVhY3RcIn1cbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcInJlYWN0LWRvbVwiLFwiY29tbW9uanMyXCI6XCJyZWFjdC1kb21cIixcImFtZFwiOlwicmVhY3QtZG9tXCIsXCJyb290XCI6XCJSZWFjdERPTVwifVxuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTYgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKSk7XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY2xhc3NuYW1lcy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIEBmbG93XG5pbXBvcnQge2ZpbmRJbkFycmF5LCBpc0Z1bmN0aW9uLCBpc051bSwgaW50fSBmcm9tICcuL3NoaW1zJztcbmltcG9ydCBicm93c2VyUHJlZml4IGZyb20gJy4vZ2V0UHJlZml4JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgdHlwZSBEcmFnZ2FibGUgZnJvbSAnLi4vRHJhZ2dhYmxlJztcbmltcG9ydCB0eXBlIERyYWdnYWJsZUNvcmUgZnJvbSAnLi4vRHJhZ2dhYmxlQ29yZSc7XG5cbmV4cG9ydCB0eXBlIENvcmVFdmVudCA9IHtcbiAgbm9kZTogSFRNTEVsZW1lbnQsXG4gIHBvc2l0aW9uOiB7XG4gICAgZGVsdGFYOiBudW1iZXIsIGRlbHRhWTogbnVtYmVyLFxuICAgIGxhc3RYOiBudW1iZXIsIGxhc3RZOiBudW1iZXIsXG4gICAgY2xpZW50WDogbnVtYmVyLCBjbGllbnRZOiBudW1iZXJcbiAgfVxufTtcblxuZXhwb3J0IHR5cGUgVUlFdmVudCA9IHtcbiAgbm9kZTogSFRNTEVsZW1lbnQsXG4gIHBvc2l0aW9uOiB7XG4gICAgbGVmdDogbnVtYmVyLCB0b3A6IG51bWJlclxuICB9LFxuICBkZWx0YVg6IG51bWJlciwgZGVsdGFZOiBudW1iZXJcbn07XG5cbmxldCBtYXRjaGVzU2VsZWN0b3JGdW5jID0gJyc7XG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hlc1NlbGVjdG9yKGVsOiBIVE1MRWxlbWVudCwgc2VsZWN0b3I6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAoIW1hdGNoZXNTZWxlY3RvckZ1bmMpIHtcbiAgICBtYXRjaGVzU2VsZWN0b3JGdW5jID0gZmluZEluQXJyYXkoW1xuICAgICAgJ21hdGNoZXMnLFxuICAgICAgJ3dlYmtpdE1hdGNoZXNTZWxlY3RvcicsXG4gICAgICAnbW96TWF0Y2hlc1NlbGVjdG9yJyxcbiAgICAgICdtc01hdGNoZXNTZWxlY3RvcicsXG4gICAgICAnb01hdGNoZXNTZWxlY3RvcidcbiAgICBdLCBmdW5jdGlvbihtZXRob2Qpe1xuICAgICAgLy8gJEZsb3dJZ25vcmU6IERvZXNuJ3QgdGhpbmsgZWxlbWVudHMgYXJlIGluZGV4YWJsZVxuICAgICAgcmV0dXJuIGlzRnVuY3Rpb24oZWxbbWV0aG9kXSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyAkRmxvd0lnbm9yZTogRG9lc24ndCB0aGluayBlbGVtZW50cyBhcmUgaW5kZXhhYmxlXG4gIHJldHVybiBlbFttYXRjaGVzU2VsZWN0b3JGdW5jXS5jYWxsKGVsLCBzZWxlY3Rvcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRFdmVudChlbDogP05vZGUsIGV2ZW50OiBzdHJpbmcsIGhhbmRsZXI6IEZ1bmN0aW9uKTogdm9pZCB7XG4gIGlmICghZWwpIHsgcmV0dXJuOyB9XG4gIGlmIChlbC5hdHRhY2hFdmVudCkge1xuICAgIGVsLmF0dGFjaEV2ZW50KCdvbicgKyBldmVudCwgaGFuZGxlcik7XG4gIH0gZWxzZSBpZiAoZWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIC8vICRGbG93SWdub3JlOiBEb2Vzbid0IHRoaW5rIGVsZW1lbnRzIGFyZSBpbmRleGFibGVcbiAgICBlbFsnb24nICsgZXZlbnRdID0gaGFuZGxlcjtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRXZlbnQoZWw6ID9Ob2RlLCBldmVudDogc3RyaW5nLCBoYW5kbGVyOiBGdW5jdGlvbik6IHZvaWQge1xuICBpZiAoIWVsKSB7IHJldHVybjsgfVxuICBpZiAoZWwuZGV0YWNoRXZlbnQpIHtcbiAgICBlbC5kZXRhY2hFdmVudCgnb24nICsgZXZlbnQsIGhhbmRsZXIpO1xuICB9IGVsc2UgaWYgKGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICAvLyAkRmxvd0lnbm9yZTogRG9lc24ndCB0aGluayBlbGVtZW50cyBhcmUgaW5kZXhhYmxlXG4gICAgZWxbJ29uJyArIGV2ZW50XSA9IG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG91dGVySGVpZ2h0KG5vZGU6IEhUTUxFbGVtZW50KTogbnVtYmVyIHtcbiAgLy8gVGhpcyBpcyBkZWxpYmVyYXRlbHkgZXhjbHVkaW5nIG1hcmdpbiBmb3Igb3VyIGNhbGN1bGF0aW9ucywgc2luY2Ugd2UgYXJlIHVzaW5nXG4gIC8vIG9mZnNldFRvcCB3aGljaCBpcyBpbmNsdWRpbmcgbWFyZ2luLiBTZWUgZ2V0Qm91bmRQb3NpdGlvblxuICBsZXQgaGVpZ2h0ID0gbm9kZS5jbGllbnRIZWlnaHQ7XG4gIGxldCBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gIGhlaWdodCArPSBpbnQoY29tcHV0ZWRTdHlsZS5ib3JkZXJUb3BXaWR0aCk7XG4gIGhlaWdodCArPSBpbnQoY29tcHV0ZWRTdHlsZS5ib3JkZXJCb3R0b21XaWR0aCk7XG4gIHJldHVybiBoZWlnaHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvdXRlcldpZHRoKG5vZGU6IEhUTUxFbGVtZW50KTogbnVtYmVyIHtcbiAgLy8gVGhpcyBpcyBkZWxpYmVyYXRlbHkgZXhjbHVkaW5nIG1hcmdpbiBmb3Igb3VyIGNhbGN1bGF0aW9ucywgc2luY2Ugd2UgYXJlIHVzaW5nXG4gIC8vIG9mZnNldExlZnQgd2hpY2ggaXMgaW5jbHVkaW5nIG1hcmdpbi4gU2VlIGdldEJvdW5kUG9zaXRpb25cbiAgbGV0IHdpZHRoID0gbm9kZS5jbGllbnRXaWR0aDtcbiAgbGV0IGNvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgd2lkdGggKz0gaW50KGNvbXB1dGVkU3R5bGUuYm9yZGVyTGVmdFdpZHRoKTtcbiAgd2lkdGggKz0gaW50KGNvbXB1dGVkU3R5bGUuYm9yZGVyUmlnaHRXaWR0aCk7XG4gIHJldHVybiB3aWR0aDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpbm5lckhlaWdodChub2RlOiBIVE1MRWxlbWVudCk6IG51bWJlciB7XG4gIGxldCBoZWlnaHQgPSBub2RlLmNsaWVudEhlaWdodDtcbiAgbGV0IGNvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgaGVpZ2h0IC09IGludChjb21wdXRlZFN0eWxlLnBhZGRpbmdUb3ApO1xuICBoZWlnaHQgLT0gaW50KGNvbXB1dGVkU3R5bGUucGFkZGluZ0JvdHRvbSk7XG4gIHJldHVybiBoZWlnaHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbm5lcldpZHRoKG5vZGU6IEhUTUxFbGVtZW50KTogbnVtYmVyIHtcbiAgbGV0IHdpZHRoID0gbm9kZS5jbGllbnRXaWR0aDtcbiAgbGV0IGNvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgd2lkdGggLT0gaW50KGNvbXB1dGVkU3R5bGUucGFkZGluZ0xlZnQpO1xuICB3aWR0aCAtPSBpbnQoY29tcHV0ZWRTdHlsZS5wYWRkaW5nUmlnaHQpO1xuICByZXR1cm4gd2lkdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDU1NUcmFuc2Zvcm0oe3gsIHl9OiB7eDogbnVtYmVyLCB5OiBudW1iZXJ9KTogT2JqZWN0IHtcbiAgLy8gUmVwbGFjZSB1bml0bGVzcyBpdGVtcyB3aXRoIHB4XG4gIGxldCBvdXQgPSB7dHJhbnNmb3JtOiAndHJhbnNsYXRlKCcgKyB4ICsgJ3B4LCcgKyB5ICsgJ3B4KSd9O1xuICAvLyBBZGQgc2luZ2xlIHByZWZpeGVkIHByb3BlcnR5IGFzIHdlbGxcbiAgaWYgKGJyb3dzZXJQcmVmaXgpIHtcbiAgICBvdXRbYnJvd3NlclByZWZpeCArICdUcmFuc2Zvcm0nXSA9IG91dC50cmFuc2Zvcm07XG4gIH1cbiAgcmV0dXJuIG91dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNWR1RyYW5zZm9ybSh7eCwgeX06IHt4OiBudW1iZXIsIHk6IG51bWJlcn0pOiBzdHJpbmcge1xuICByZXR1cm4gJ3RyYW5zbGF0ZSgnICsgeCArICcsJyArIHkgKyAnKSc7XG59XG5cbi8vIFVzZXItc2VsZWN0IEhhY2tzOlxuLy9cbi8vIFVzZWZ1bCBmb3IgcHJldmVudGluZyBibHVlIGhpZ2hsaWdodHMgYWxsIG92ZXIgZXZlcnl0aGluZyB3aGVuIGRyYWdnaW5nLlxubGV0IHVzZXJTZWxlY3RTdHlsZSA9ICc7dXNlci1zZWxlY3Q6IG5vbmU7JztcbmlmIChicm93c2VyUHJlZml4KSB7XG4gIHVzZXJTZWxlY3RTdHlsZSArPSAnLScgKyBicm93c2VyUHJlZml4LnRvTG93ZXJDYXNlKCkgKyAnLXVzZXItc2VsZWN0OiBub25lOyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRVc2VyU2VsZWN0U3R5bGVzKCkge1xuICBsZXQgc3R5bGUgPSBkb2N1bWVudC5ib2R5LmdldEF0dHJpYnV0ZSgnc3R5bGUnKSB8fCAnJztcbiAgZG9jdW1lbnQuYm9keS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgc3R5bGUgKyB1c2VyU2VsZWN0U3R5bGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVXNlclNlbGVjdFN0eWxlcygpIHtcbiAgbGV0IHN0eWxlID0gZG9jdW1lbnQuYm9keS5nZXRBdHRyaWJ1dGUoJ3N0eWxlJykgfHwgJyc7XG4gIGRvY3VtZW50LmJvZHkuc2V0QXR0cmlidXRlKCdzdHlsZScsIHN0eWxlLnJlcGxhY2UodXNlclNlbGVjdFN0eWxlLCAnJykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVIYWNrcyhjaGlsZFN0eWxlOiBPYmplY3QgPSB7fSk6IE9iamVjdCB7XG4gIC8vIFdvcmthcm91bmQgSUUgcG9pbnRlciBldmVudHM7IHNlZSAjNTFcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL216YWJyaXNraWUvcmVhY3QtZHJhZ2dhYmxlL2lzc3Vlcy81MSNpc3N1ZWNvbW1lbnQtMTAzNDg4Mjc4XG4gIHJldHVybiB7XG4gICAgdG91Y2hBY3Rpb246ICdub25lJyxcbiAgICAuLi5jaGlsZFN0eWxlXG4gIH07XG59XG5cbi8vIENyZWF0ZSBhbiBldmVudCBleHBvc2VkIGJ5IDxEcmFnZ2FibGVDb3JlPlxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvcmVFdmVudChkcmFnZ2FibGU6IERyYWdnYWJsZUNvcmUsIGNsaWVudFg6IG51bWJlciwgY2xpZW50WTogbnVtYmVyKTogQ29yZUV2ZW50IHtcbiAgLy8gU3RhdGUgY2hhbmdlcyBhcmUgb2Z0ZW4gKGJ1dCBub3QgYWx3YXlzISkgYXN5bmMuIFdlIHdhbnQgdGhlIGxhdGVzdCB2YWx1ZS5cbiAgbGV0IHN0YXRlID0gZHJhZ2dhYmxlLl9wZW5kaW5nU3RhdGUgfHwgZHJhZ2dhYmxlLnN0YXRlO1xuICBsZXQgaXNTdGFydCA9ICFpc051bShzdGF0ZS5sYXN0WCk7XG5cbiAgcmV0dXJuIHtcbiAgICBub2RlOiBSZWFjdERPTS5maW5kRE9NTm9kZShkcmFnZ2FibGUpLFxuICAgIHBvc2l0aW9uOiBpc1N0YXJ0ID9cbiAgICAgIC8vIElmIHRoaXMgaXMgb3VyIGZpcnN0IG1vdmUsIHVzZSB0aGUgY2xpZW50WCBhbmQgY2xpZW50WSBhcyBsYXN0IGNvb3Jkcy5cbiAgICAgIHtcbiAgICAgICAgZGVsdGFYOiAwLCBkZWx0YVk6IDAsXG4gICAgICAgIGxhc3RYOiBjbGllbnRYLCBsYXN0WTogY2xpZW50WSxcbiAgICAgICAgY2xpZW50WDogY2xpZW50WCwgY2xpZW50WTogY2xpZW50WVxuICAgICAgfSA6XG4gICAgICAvLyBPdGhlcndpc2UgY2FsY3VsYXRlIHByb3BlciB2YWx1ZXMuXG4gICAgICB7XG4gICAgICAgIGRlbHRhWDogY2xpZW50WCAtIHN0YXRlLmxhc3RYLCBkZWx0YVk6IGNsaWVudFkgLSBzdGF0ZS5sYXN0WSxcbiAgICAgICAgbGFzdFg6IHN0YXRlLmxhc3RYLCBsYXN0WTogc3RhdGUubGFzdFksXG4gICAgICAgIGNsaWVudFg6IGNsaWVudFgsIGNsaWVudFk6IGNsaWVudFlcbiAgICAgIH1cbiAgfTtcbn1cblxuLy8gQ3JlYXRlIGFuIGV2ZW50IGV4cG9zZWQgYnkgPERyYWdnYWJsZT5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVSUV2ZW50KGRyYWdnYWJsZTogRHJhZ2dhYmxlLCBjb3JlRXZlbnQ6IENvcmVFdmVudCk6IFVJRXZlbnQge1xuICByZXR1cm4ge1xuICAgIG5vZGU6IFJlYWN0RE9NLmZpbmRET01Ob2RlKGRyYWdnYWJsZSksXG4gICAgcG9zaXRpb246IHtcbiAgICAgIGxlZnQ6IGRyYWdnYWJsZS5zdGF0ZS5jbGllbnRYICsgY29yZUV2ZW50LnBvc2l0aW9uLmRlbHRhWCxcbiAgICAgIHRvcDogZHJhZ2dhYmxlLnN0YXRlLmNsaWVudFkgKyBjb3JlRXZlbnQucG9zaXRpb24uZGVsdGFZXG4gICAgfSxcbiAgICBkZWx0YVg6IGNvcmVFdmVudC5wb3NpdGlvbi5kZWx0YVgsXG4gICAgZGVsdGFZOiBjb3JlRXZlbnQucG9zaXRpb24uZGVsdGFZXG4gIH07XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2xpYi91dGlscy9kb21GbnMuZXM2XG4gKiovIiwiLy8gQGZsb3dcbi8vIEBjcmVkaXRzIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3JvZ296aG5pa29mZi9hNDNjZmVkMjdjNDFlNGU2OGNkY1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRJbkFycmF5KGFycmF5OiBBcnJheTxhbnk+LCBjYWxsYmFjazogRnVuY3Rpb24pOiBhbnkge1xuICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoY2FsbGJhY2suYXBwbHkoY2FsbGJhY2ssIFthcnJheVtpXSwgaSwgYXJyYXldKSkgcmV0dXJuIGFycmF5W2ldO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKGZ1bmM6IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gdHlwZW9mIGZ1bmMgPT09ICdmdW5jdGlvbicgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGZ1bmMpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOdW0obnVtOiBhbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuIHR5cGVvZiBudW0gPT09ICdudW1iZXInICYmICFpc05hTihudW0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW50KGE6IHN0cmluZyk6IG51bWJlciB7XG4gIHJldHVybiBwYXJzZUludChhLCAxMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb250U2V0TWUocHJvcHM6IE9iamVjdCwgcHJvcE5hbWU6IHN0cmluZywgY29tcG9uZW50TmFtZTogc3RyaW5nKSB7XG4gIGlmIChwcm9wc1twcm9wTmFtZV0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgcHJvcCAke3Byb3BOYW1lfSBwYXNzZWQgdG8gJHtjb21wb25lbnROYW1lfSAtIGRvIG5vdCBzZXQgdGhpcywgc2V0IGl0IG9uIHRoZSBjaGlsZC5gKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9saWIvdXRpbHMvc2hpbXMuZXM2XG4gKiovIiwiLy8gQGZsb3dcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVByZWZpeCgpOiBzdHJpbmcge1xuICAvLyBDaGVja2luZyBzcGVjaWZpY2FsbHkgZm9yICd3aW5kb3cuZG9jdW1lbnQnIGlzIGZvciBwc2V1ZG8tYnJvd3NlciBzZXJ2ZXItc2lkZVxuICAvLyBlbnZpcm9ubWVudHMgdGhhdCBkZWZpbmUgJ3dpbmRvdycgYXMgdGhlIGdsb2JhbCBjb250ZXh0LlxuICAvLyBFLmcuIFJlYWN0LXJhaWxzIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmVhY3QtcmFpbHMvcHVsbC84NClcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gJyc7XG5cbiAgLy8gVGhhbmtzIERhdmlkIFdhbHNoXG4gIGxldCBzdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsICcnKSxcbiAgcHJlID0gKEFycmF5LnByb3RvdHlwZS5zbGljZVxuICAgICAgICAuY2FsbChzdHlsZXMpXG4gICAgICAgIC5qb2luKCcnKVxuICAgICAgICAubWF0Y2goLy0obW96fHdlYmtpdHxtcyktLykgfHwgKHN0eWxlcy5PTGluayA9PT0gJycgPyBbJycsICdvJ10gOiBbXSlcbiAgICAgIClbMV07XG4gIC8vICdtcycgaXMgbm90IHRpdGxlY2FzZWRcbiAgaWYgKHByZSA9PT0gdW5kZWZpbmVkIHx8IHByZSA9PT0gbnVsbCkgcmV0dXJuICcnO1xuICBpZiAocHJlID09PSAnbXMnKSByZXR1cm4gcHJlO1xuICBpZiAocHJlID09PSB1bmRlZmluZWQgfHwgcHJlID09PSBudWxsKSByZXR1cm4gJyc7XG4gIHJldHVybiBwcmUuc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKSArIHByZS5zbGljZSgxKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVQcmVmaXgoKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbGliL3V0aWxzL2dldFByZWZpeC5lczZcbiAqKi8iLCIvLyBAZmxvd1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7aXNOdW0sIGludH0gZnJvbSAnLi9zaGltcyc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7aW5uZXJXaWR0aCwgaW5uZXJIZWlnaHQsIG91dGVyV2lkdGgsIG91dGVySGVpZ2h0fSBmcm9tICcuL2RvbUZucyc7XG5cbmltcG9ydCB0eXBlIERyYWdnYWJsZSBmcm9tICcuLi9EcmFnZ2FibGUnO1xuZXhwb3J0IHR5cGUgQ29udHJvbFBvc2l0aW9uID0ge1xuICBjbGllbnRYOiBudW1iZXIsIGNsaWVudFk6IG51bWJlclxufTtcbmV4cG9ydCB0eXBlIEJvdW5kcyA9IHtcbiAgbGVmdDogbnVtYmVyLCB0b3A6IG51bWJlciwgcmlnaHQ6IG51bWJlciwgYm90dG9tOiBudW1iZXJcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCb3VuZFBvc2l0aW9uKGRyYWdnYWJsZTogRHJhZ2dhYmxlLCBjbGllbnRYOiBudW1iZXIsIGNsaWVudFk6IG51bWJlcik6IFtudW1iZXIsIG51bWJlcl0ge1xuICAvLyBJZiBubyBib3VuZHMsIHNob3J0LWNpcmN1aXQgYW5kIG1vdmUgb25cbiAgaWYgKCFkcmFnZ2FibGUucHJvcHMuYm91bmRzKSByZXR1cm4gW2NsaWVudFgsIGNsaWVudFldO1xuXG4gIC8vIENsb25lIG5ldyBib3VuZHNcbiAgbGV0IHtib3VuZHN9ID0gZHJhZ2dhYmxlLnByb3BzO1xuICBib3VuZHMgPSB0eXBlb2YgYm91bmRzID09PSAnc3RyaW5nJyA/IGJvdW5kcyA6IGNsb25lQm91bmRzKGJvdW5kcyk7XG4gIGxldCBub2RlID0gUmVhY3RET00uZmluZERPTU5vZGUoZHJhZ2dhYmxlKTtcblxuICBpZiAodHlwZW9mIGJvdW5kcyA9PT0gJ3N0cmluZycpIHtcbiAgICBsZXQgYm91bmROb2RlO1xuICAgIGlmIChib3VuZHMgPT09ICdwYXJlbnQnKSB7XG4gICAgICBib3VuZE5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJvdW5kTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYm91bmRzKTtcbiAgICAgIGlmICghYm91bmROb2RlKSB0aHJvdyBuZXcgRXJyb3IoJ0JvdW5kcyBzZWxlY3RvciBcIicgKyBib3VuZHMgKyAnXCIgY291bGQgbm90IGZpbmQgYW4gZWxlbWVudC4nKTtcbiAgICB9XG4gICAgbGV0IG5vZGVTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgIGxldCBib3VuZE5vZGVTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGJvdW5kTm9kZSk7XG4gICAgLy8gQ29tcHV0ZSBib3VuZHMuIFRoaXMgaXMgYSBwYWluIHdpdGggcGFkZGluZyBhbmQgb2Zmc2V0cyBidXQgdGhpcyBnZXRzIGl0IGV4YWN0bHkgcmlnaHQuXG4gICAgYm91bmRzID0ge1xuICAgICAgbGVmdDogLW5vZGUub2Zmc2V0TGVmdCArIGludChib3VuZE5vZGVTdHlsZS5wYWRkaW5nTGVmdCkgK1xuICAgICAgICAgICAgaW50KG5vZGVTdHlsZS5ib3JkZXJMZWZ0V2lkdGgpICsgaW50KG5vZGVTdHlsZS5tYXJnaW5MZWZ0KSxcbiAgICAgIHRvcDogLW5vZGUub2Zmc2V0VG9wICsgaW50KGJvdW5kTm9kZVN0eWxlLnBhZGRpbmdUb3ApICtcbiAgICAgICAgICAgIGludChub2RlU3R5bGUuYm9yZGVyVG9wV2lkdGgpICsgaW50KG5vZGVTdHlsZS5tYXJnaW5Ub3ApLFxuICAgICAgcmlnaHQ6IGlubmVyV2lkdGgoYm91bmROb2RlKSAtIG91dGVyV2lkdGgobm9kZSkgLSBub2RlLm9mZnNldExlZnQsXG4gICAgICBib3R0b206IGlubmVySGVpZ2h0KGJvdW5kTm9kZSkgLSBvdXRlckhlaWdodChub2RlKSAtIG5vZGUub2Zmc2V0VG9wXG4gICAgfTtcbiAgfVxuXG4gIC8vIEtlZXAgeCBhbmQgeSBiZWxvdyByaWdodCBhbmQgYm90dG9tIGxpbWl0cy4uLlxuICBpZiAoaXNOdW0oYm91bmRzLnJpZ2h0KSkgY2xpZW50WCA9IE1hdGgubWluKGNsaWVudFgsIGJvdW5kcy5yaWdodCk7XG4gIGlmIChpc051bShib3VuZHMuYm90dG9tKSkgY2xpZW50WSA9IE1hdGgubWluKGNsaWVudFksIGJvdW5kcy5ib3R0b20pO1xuXG4gIC8vIEJ1dCBhYm92ZSBsZWZ0IGFuZCB0b3AgbGltaXRzLlxuICBpZiAoaXNOdW0oYm91bmRzLmxlZnQpKSBjbGllbnRYID0gTWF0aC5tYXgoY2xpZW50WCwgYm91bmRzLmxlZnQpO1xuICBpZiAoaXNOdW0oYm91bmRzLnRvcCkpIGNsaWVudFkgPSBNYXRoLm1heChjbGllbnRZLCBib3VuZHMudG9wKTtcblxuICByZXR1cm4gW2NsaWVudFgsIGNsaWVudFldO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc25hcFRvR3JpZChncmlkOiBbbnVtYmVyLCBudW1iZXJdLCBwZW5kaW5nWDogbnVtYmVyLCBwZW5kaW5nWTogbnVtYmVyKTogW251bWJlciwgbnVtYmVyXSB7XG4gIGxldCB4ID0gTWF0aC5yb3VuZChwZW5kaW5nWCAvIGdyaWRbMF0pICogZ3JpZFswXTtcbiAgbGV0IHkgPSBNYXRoLnJvdW5kKHBlbmRpbmdZIC8gZ3JpZFsxXSkgKiBncmlkWzFdO1xuICByZXR1cm4gW3gsIHldO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FuRHJhZ1goZHJhZ2dhYmxlOiBSZWFjdC5Db21wb25lbnQpOiBib29sZWFuIHtcbiAgcmV0dXJuIGRyYWdnYWJsZS5wcm9wcy5heGlzID09PSAnYm90aCcgfHwgZHJhZ2dhYmxlLnByb3BzLmF4aXMgPT09ICd4Jztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbkRyYWdZKGRyYWdnYWJsZTogUmVhY3QuQ29tcG9uZW50KTogYm9vbGVhbiB7XG4gIHJldHVybiBkcmFnZ2FibGUucHJvcHMuYXhpcyA9PT0gJ2JvdGgnIHx8IGRyYWdnYWJsZS5wcm9wcy5heGlzID09PSAneSc7XG59XG5cbi8vIEdldCB7Y2xpZW50WCwgY2xpZW50WX0gcG9zaXRpb25zIGZyb20gZXZlbnQuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29udHJvbFBvc2l0aW9uKGU6IEV2ZW50KTogQ29udHJvbFBvc2l0aW9uIHtcbiAgbGV0IHBvc2l0aW9uID0gKGUudGFyZ2V0VG91Y2hlcyAmJiBlLnRhcmdldFRvdWNoZXNbMF0pIHx8IGU7XG4gIHJldHVybiB7XG4gICAgY2xpZW50WDogcG9zaXRpb24uY2xpZW50WCxcbiAgICBjbGllbnRZOiBwb3NpdGlvbi5jbGllbnRZXG4gIH07XG59XG5cbi8vIEEgbG90IGZhc3RlciB0aGFuIHN0cmluZ2lmeS9wYXJzZVxuZnVuY3Rpb24gY2xvbmVCb3VuZHMoYm91bmRzOiBCb3VuZHMpOiBCb3VuZHMge1xuICByZXR1cm4ge1xuICAgIGxlZnQ6IGJvdW5kcy5sZWZ0LFxuICAgIHRvcDogYm91bmRzLnRvcCxcbiAgICByaWdodDogYm91bmRzLnJpZ2h0LFxuICAgIGJvdHRvbTogYm91bmRzLmJvdHRvbVxuICB9O1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9saWIvdXRpbHMvcG9zaXRpb25GbnMuZXM2XG4gKiovIiwiLy8gQGZsb3dcbmltcG9ydCB7ZGVmYXVsdCBhcyBSZWFjdCwgUHJvcFR5cGVzfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge21hdGNoZXNTZWxlY3RvciwgY3JlYXRlQ29yZUV2ZW50LCBhZGRFdmVudCwgcmVtb3ZlRXZlbnQsIGFkZFVzZXJTZWxlY3RTdHlsZXMsXG4gICAgICAgIHJlbW92ZVVzZXJTZWxlY3RTdHlsZXMsIHN0eWxlSGFja3N9IGZyb20gJy4vdXRpbHMvZG9tRm5zJztcbmltcG9ydCB7Z2V0Q29udHJvbFBvc2l0aW9uLCBzbmFwVG9HcmlkfSBmcm9tICcuL3V0aWxzL3Bvc2l0aW9uRm5zJztcbmltcG9ydCB7ZG9udFNldE1lfSBmcm9tICcuL3V0aWxzL3NoaW1zJztcbmltcG9ydCBsb2cgZnJvbSAnLi91dGlscy9sb2cnO1xuXG4vLyBTaW1wbGUgYWJzdHJhY3Rpb24gZm9yIGRyYWdnaW5nIGV2ZW50cyBuYW1lcy5cbmNvbnN0IGV2ZW50c0ZvciA9IHtcbiAgdG91Y2g6IHtcbiAgICBzdGFydDogJ3RvdWNoc3RhcnQnLFxuICAgIG1vdmU6ICd0b3VjaG1vdmUnLFxuICAgIHN0b3A6ICd0b3VjaGVuZCdcbiAgfSxcbiAgbW91c2U6IHtcbiAgICBzdGFydDogJ21vdXNlZG93bicsXG4gICAgbW92ZTogJ21vdXNlbW92ZScsXG4gICAgc3RvcDogJ21vdXNldXAnXG4gIH1cbn07XG5cbi8vIERlZmF1bHQgdG8gbW91c2UgZXZlbnRzLlxubGV0IGRyYWdFdmVudEZvciA9IGV2ZW50c0Zvci5tb3VzZTtcblxudHlwZSBFdmVudEhhbmRsZXIgPSAoZTogRXZlbnQpID0+IHZvaWQ7XG50eXBlIENvcmVTdGF0ZSA9IHtcbiAgZHJhZ2dpbmc6IGJvb2xlYW4sXG4gIGxhc3RYOiA/bnVtYmVyLFxuICBsYXN0WTogP251bWJlclxufTtcblxuLy9cbi8vIERlZmluZSA8RHJhZ2dhYmxlQ29yZT4uXG4vL1xuLy8gPERyYWdnYWJsZUNvcmU+IGlzIGZvciBhZHZhbmNlZCB1c2FnZSBvZiA8RHJhZ2dhYmxlPi4gSXQgbWFpbnRhaW5zIG1pbmltYWwgaW50ZXJuYWwgc3RhdGUgc28gaXQgY2FuXG4vLyB3b3JrIHdlbGwgd2l0aCBsaWJyYXJpZXMgdGhhdCByZXF1aXJlIG1vcmUgY29udHJvbCBvdmVyIHRoZSBlbGVtZW50LlxuLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ2dhYmxlQ29yZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ0RyYWdnYWJsZUNvcmUnO1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogYGFsbG93QW55Q2xpY2tgIGFsbG93cyBkcmFnZ2luZyB1c2luZyBhbnkgbW91c2UgYnV0dG9uLlxuICAgICAqIEJ5IGRlZmF1bHQsIHdlIG9ubHkgYWNjZXB0IHRoZSBsZWZ0IGJ1dHRvbi5cbiAgICAgKlxuICAgICAqIERlZmF1bHRzIHRvIGBmYWxzZWAuXG4gICAgICovXG4gICAgYWxsb3dBbnlDbGljazogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBgZGlzYWJsZWRgLCBpZiB0cnVlLCBzdG9wcyB0aGUgPERyYWdnYWJsZT4gZnJvbSBkcmFnZ2luZy4gQWxsIGhhbmRsZXJzLFxuICAgICAqIHdpdGggdGhlIGV4Y2VwdGlvbiBvZiBgb25Nb3VzZURvd25gLCB3aWxsIG5vdCBmaXJlLlxuICAgICAqXG4gICAgICogRXhhbXBsZTpcbiAgICAgKlxuICAgICAqIGBgYGpzeFxuICAgICAqICAgbGV0IEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICAgKiAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgKiAgICAgICAgICAgcmV0dXJuIChcbiAgICAgKiAgICAgICAgICAgICAgIDxEcmFnZ2FibGUgZGlzYWJsZWQ9e3RydWV9PlxuICAgICAqICAgICAgICAgICAgICAgICAgIDxkaXY+SSBjYW4ndCBiZSBkcmFnZ2VkPC9kaXY+XG4gICAgICogICAgICAgICAgICAgICA8L0RyYWdnYWJsZT5cbiAgICAgKiAgICAgICAgICAgKTtcbiAgICAgKiAgICAgICB9XG4gICAgICogICB9KTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBCeSBkZWZhdWx0LCB3ZSBhZGQgJ3VzZXItc2VsZWN0Om5vbmUnIGF0dHJpYnV0ZXMgdG8gdGhlIGRvY3VtZW50IGJvZHlcbiAgICAgKiB0byBwcmV2ZW50IHVnbHkgdGV4dCBzZWxlY3Rpb24gZHVyaW5nIGRyYWcuIElmIHRoaXMgaXMgY2F1c2luZyBwcm9ibGVtc1xuICAgICAqIGZvciB5b3VyIGFwcCwgc2V0IHRoaXMgdG8gYGZhbHNlYC5cbiAgICAgKi9cbiAgICBlbmFibGVVc2VyU2VsZWN0SGFjazogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBgZ3JpZGAgc3BlY2lmaWVzIHRoZSB4IGFuZCB5IHRoYXQgZHJhZ2dpbmcgc2hvdWxkIHNuYXAgdG8uXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOlxuICAgICAqXG4gICAgICogYGBganN4XG4gICAgICogICBsZXQgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgICAqICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAqICAgICAgICAgICByZXR1cm4gKFxuICAgICAqICAgICAgICAgICAgICAgPERyYWdnYWJsZSBncmlkPXtbMjUsIDI1XX0+XG4gICAgICogICAgICAgICAgICAgICAgICAgPGRpdj5JIHNuYXAgdG8gYSAyNSB4IDI1IGdyaWQ8L2Rpdj5cbiAgICAgKiAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxuICAgICAqICAgICAgICAgICApO1xuICAgICAqICAgICAgIH1cbiAgICAgKiAgIH0pO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIGdyaWQ6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5udW1iZXIpLFxuXG4gICAgLyoqXG4gICAgICogYGhhbmRsZWAgc3BlY2lmaWVzIGEgc2VsZWN0b3IgdG8gYmUgdXNlZCBhcyB0aGUgaGFuZGxlIHRoYXQgaW5pdGlhdGVzIGRyYWcuXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOlxuICAgICAqXG4gICAgICogYGBganN4XG4gICAgICogICBsZXQgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgICAqICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAqICAgICAgICAgcmV0dXJuIChcbiAgICAgKiAgICAgICAgICAgIDxEcmFnZ2FibGUgaGFuZGxlPVwiLmhhbmRsZVwiPlxuICAgICAqICAgICAgICAgICAgICA8ZGl2PlxuICAgICAqICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYW5kbGVcIj5DbGljayBtZSB0byBkcmFnPC9kaXY+XG4gICAgICogICAgICAgICAgICAgICAgICA8ZGl2PlRoaXMgaXMgc29tZSBvdGhlciBjb250ZW50PC9kaXY+XG4gICAgICogICAgICAgICAgICAgIDwvZGl2PlxuICAgICAqICAgICAgICAgICA8L0RyYWdnYWJsZT5cbiAgICAgKiAgICAgICAgICk7XG4gICAgICogICAgICAgfVxuICAgICAqICAgfSk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgaGFuZGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogYGNhbmNlbGAgc3BlY2lmaWVzIGEgc2VsZWN0b3IgdG8gYmUgdXNlZCB0byBwcmV2ZW50IGRyYWcgaW5pdGlhbGl6YXRpb24uXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOlxuICAgICAqXG4gICAgICogYGBganN4XG4gICAgICogICBsZXQgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgICAqICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAqICAgICAgICAgICByZXR1cm4oXG4gICAgICogICAgICAgICAgICAgICA8RHJhZ2dhYmxlIGNhbmNlbD1cIi5jYW5jZWxcIj5cbiAgICAgKiAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAqICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYW5jZWxcIj5Zb3UgY2FuJ3QgZHJhZyBmcm9tIGhlcmU8L2Rpdj5cbiAgICAgKiAgICAgICAgICAgIDxkaXY+RHJhZ2dpbmcgaGVyZSB3b3JrcyBmaW5lPC9kaXY+XG4gICAgICogICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICogICAgICAgICAgICAgICA8L0RyYWdnYWJsZT5cbiAgICAgKiAgICAgICAgICAgKTtcbiAgICAgKiAgICAgICB9XG4gICAgICogICB9KTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBjYW5jZWw6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiBkcmFnZ2luZyBzdGFydHMuXG4gICAgICogSWYgdGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSBib29sZWFuIGZhbHNlLCBkcmFnZ2luZyB3aWxsIGJlIGNhbmNlbGVkLlxuICAgICAqXG4gICAgICogRXhhbXBsZTpcbiAgICAgKlxuICAgICAqIGBgYGpzXG4gICAgICogIGZ1bmN0aW9uIChldmVudCwgdWkpIHt9XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBgZXZlbnRgIGlzIHRoZSBFdmVudCB0aGF0IHdhcyB0cmlnZ2VyZWQuXG4gICAgICogYHVpYCBpcyBhbiBvYmplY3Q6XG4gICAgICpcbiAgICAgKiBgYGBqc1xuICAgICAqICB7XG4gICAgICogICAgcG9zaXRpb246IHt0b3A6IDAsIGxlZnQ6IDB9XG4gICAgICogIH1cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBvblN0YXJ0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGlsZSBkcmFnZ2luZy5cbiAgICAgKiBJZiB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIGJvb2xlYW4gZmFsc2UsIGRyYWdnaW5nIHdpbGwgYmUgY2FuY2VsZWQuXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOlxuICAgICAqXG4gICAgICogYGBganNcbiAgICAgKiAgZnVuY3Rpb24gKGV2ZW50LCB1aSkge31cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIGBldmVudGAgaXMgdGhlIEV2ZW50IHRoYXQgd2FzIHRyaWdnZXJlZC5cbiAgICAgKiBgdWlgIGlzIGFuIG9iamVjdDpcbiAgICAgKlxuICAgICAqIGBgYGpzXG4gICAgICogIHtcbiAgICAgKiAgICBwb3NpdGlvbjoge3RvcDogMCwgbGVmdDogMH1cbiAgICAgKiAgfVxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIG9uRHJhZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiBkcmFnZ2luZyBzdG9wcy5cbiAgICAgKlxuICAgICAqIEV4YW1wbGU6XG4gICAgICpcbiAgICAgKiBgYGBqc1xuICAgICAqICBmdW5jdGlvbiAoZXZlbnQsIHVpKSB7fVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogYGV2ZW50YCBpcyB0aGUgRXZlbnQgdGhhdCB3YXMgdHJpZ2dlcmVkLlxuICAgICAqIGB1aWAgaXMgYW4gb2JqZWN0OlxuICAgICAqXG4gICAgICogYGBganNcbiAgICAgKiAge1xuICAgICAqICAgIHBvc2l0aW9uOiB7dG9wOiAwLCBsZWZ0OiAwfVxuICAgICAqICB9XG4gICAgICogYGBgXG4gICAgICovXG4gICAgb25TdG9wOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIEEgd29ya2Fyb3VuZCBvcHRpb24gd2hpY2ggY2FuIGJlIHBhc3NlZCBpZiBvbk1vdXNlRG93biBuZWVkcyB0byBiZSBhY2Nlc3NlZCxcbiAgICAgKiBzaW5jZSBpdCdsbCBhbHdheXMgYmUgYmxvY2tlZCAoZHVlIHRvIHRoYXQgdGhlcmUncyBpbnRlcm5hbCB1c2Ugb2Ygb25Nb3VzZURvd24pXG4gICAgICovXG4gICAgb25Nb3VzZURvd246IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogVGhlc2UgcHJvcGVydGllcyBzaG91bGQgYmUgZGVmaW5lZCBvbiB0aGUgY2hpbGQsIG5vdCBoZXJlLlxuICAgICAqL1xuICAgIGNsYXNzTmFtZTogZG9udFNldE1lLFxuICAgIHN0eWxlOiBkb250U2V0TWUsXG4gICAgdHJhbnNmb3JtOiBkb250U2V0TWVcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGFsbG93QW55Q2xpY2s6IGZhbHNlLCAvLyBieSBkZWZhdWx0IG9ubHkgYWNjZXB0IGxlZnQgY2xpY2tcbiAgICBjYW5jZWw6IG51bGwsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGVuYWJsZVVzZXJTZWxlY3RIYWNrOiB0cnVlLFxuICAgIGhhbmRsZTogbnVsbCxcbiAgICBncmlkOiBudWxsLFxuICAgIHRyYW5zZm9ybTogbnVsbCxcbiAgICBvblN0YXJ0OiBmdW5jdGlvbigpe30sXG4gICAgb25EcmFnOiBmdW5jdGlvbigpe30sXG4gICAgb25TdG9wOiBmdW5jdGlvbigpe30sXG4gICAgb25Nb3VzZURvd246IGZ1bmN0aW9uKCl7fVxuICB9O1xuXG4gIHN0YXRlOiBDb3JlU3RhdGUgPSB7XG4gICAgZHJhZ2dpbmc6IGZhbHNlLFxuICAgIC8vIFVzZWQgd2hpbGUgZHJhZ2dpbmcgdG8gZGV0ZXJtaW5lIGRlbHRhcy5cbiAgICBsYXN0WDogbnVsbCwgbGFzdFk6IG51bGxcbiAgfTtcblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAvLyBSZW1vdmUgYW55IGxlZnRvdmVyIGV2ZW50IGhhbmRsZXJzLiBSZW1vdmUgYm90aCB0b3VjaCBhbmQgbW91c2UgaGFuZGxlcnMgaW4gY2FzZVxuICAgIC8vIHNvbWUgYnJvd3NlciBxdWlyayBjYXVzZWQgYSB0b3VjaCBldmVudCB0byBmaXJlIGR1cmluZyBhIG1vdXNlIG1vdmUsIG9yIHZpY2UgdmVyc2EuXG4gICAgcmVtb3ZlRXZlbnQoZG9jdW1lbnQsIGV2ZW50c0Zvci5tb3VzZS5tb3ZlLCB0aGlzLmhhbmRsZURyYWcpO1xuICAgIHJlbW92ZUV2ZW50KGRvY3VtZW50LCBldmVudHNGb3IudG91Y2gubW92ZSwgdGhpcy5oYW5kbGVEcmFnKTtcbiAgICByZW1vdmVFdmVudChkb2N1bWVudCwgZXZlbnRzRm9yLm1vdXNlLnN0b3AsIHRoaXMuaGFuZGxlRHJhZ1N0b3ApO1xuICAgIHJlbW92ZUV2ZW50KGRvY3VtZW50LCBldmVudHNGb3IudG91Y2guc3RvcCwgdGhpcy5oYW5kbGVEcmFnU3RvcCk7XG4gICAgcmVtb3ZlRXZlbnQoZG9jdW1lbnQsICdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbCk7XG4gICAgaWYgKHRoaXMucHJvcHMuZW5hYmxlVXNlclNlbGVjdEhhY2spIHJlbW92ZVVzZXJTZWxlY3RTdHlsZXMoKTtcbiAgfVxuXG4gIGhhbmRsZURyYWdTdGFydDogRXZlbnRIYW5kbGVyID0gKGUpID0+IHtcbiAgICAvLyBNYWtlIGl0IHBvc3NpYmxlIHRvIGF0dGFjaCBldmVudCBoYW5kbGVycyBvbiB0b3Agb2YgdGhpcyBvbmUuXG4gICAgdGhpcy5wcm9wcy5vbk1vdXNlRG93bihlKTtcblxuICAgIC8vIE9ubHkgYWNjZXB0IGxlZnQtY2xpY2tzLlxuICAgIGlmICghdGhpcy5wcm9wcy5hbGxvd0FueUNsaWNrICYmIHR5cGVvZiBlLmJ1dHRvbiA9PT0gJ251bWJlcicgJiYgZS5idXR0b24gIT09IDApIHJldHVybiBmYWxzZTtcblxuICAgIC8vIFNob3J0IGNpcmN1aXQgaWYgaGFuZGxlIG9yIGNhbmNlbCBwcm9wIHdhcyBwcm92aWRlZCBhbmQgc2VsZWN0b3IgZG9lc24ndCBtYXRjaC5cbiAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCB8fFxuICAgICAgKHRoaXMucHJvcHMuaGFuZGxlICYmICFtYXRjaGVzU2VsZWN0b3IoZS50YXJnZXQsIHRoaXMucHJvcHMuaGFuZGxlKSkgfHxcbiAgICAgICh0aGlzLnByb3BzLmNhbmNlbCAmJiBtYXRjaGVzU2VsZWN0b3IoZS50YXJnZXQsIHRoaXMucHJvcHMuY2FuY2VsKSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBTZXQgdG91Y2ggaWRlbnRpZmllciBpbiBjb21wb25lbnQgc3RhdGUgaWYgdGhpcyBpcyBhIHRvdWNoIGV2ZW50LiBUaGlzIGFsbG93cyB1cyB0b1xuICAgIC8vIGRpc3Rpbmd1aXNoIGJldHdlZW4gaW5kaXZpZHVhbCB0b3VjaGVzIG9uIG11bHRpdG91Y2ggc2NyZWVucyBieSBpZGVudGlmeWluZyB3aGljaFxuICAgIC8vIHRvdWNocG9pbnQgd2FzIHNldCB0byB0aGlzIGVsZW1lbnQuXG4gICAgaWYgKGUudGFyZ2V0VG91Y2hlcyl7XG4gICAgICB0aGlzLnNldFN0YXRlKHt0b3VjaElkZW50aWZpZXI6IGUudGFyZ2V0VG91Y2hlc1swXS5pZGVudGlmaWVyfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIGEgc3R5bGUgdG8gdGhlIGJvZHkgdG8gZGlzYWJsZSB1c2VyLXNlbGVjdC4gVGhpcyBwcmV2ZW50cyB0ZXh0IGZyb21cbiAgICAvLyBiZWluZyBzZWxlY3RlZCBhbGwgb3ZlciB0aGUgcGFnZS5cbiAgICBpZiAodGhpcy5wcm9wcy5lbmFibGVVc2VyU2VsZWN0SGFjaykgYWRkVXNlclNlbGVjdFN0eWxlcygpO1xuXG4gICAgLy8gR2V0IHRoZSBjdXJyZW50IGRyYWcgcG9pbnQgZnJvbSB0aGUgZXZlbnQuIFRoaXMgaXMgdXNlZCBhcyB0aGUgb2Zmc2V0LlxuICAgIGxldCB7Y2xpZW50WCwgY2xpZW50WX0gPSBnZXRDb250cm9sUG9zaXRpb24oZSk7XG5cbiAgICAvLyBDcmVhdGUgYW4gZXZlbnQgb2JqZWN0IHdpdGggYWxsIHRoZSBkYXRhIHBhcmVudHMgbmVlZCB0byBtYWtlIGEgZGVjaXNpb24gaGVyZS5cbiAgICBsZXQgY29yZUV2ZW50ID0gY3JlYXRlQ29yZUV2ZW50KHRoaXMsIGNsaWVudFgsIGNsaWVudFkpO1xuXG4gICAgbG9nKCdEcmFnZ2FibGVDb3JlOiBoYW5kbGVEcmFnU3RhcnQ6ICVqJywgY29yZUV2ZW50LnBvc2l0aW9uKTtcblxuICAgIC8vIENhbGwgZXZlbnQgaGFuZGxlci4gSWYgaXQgcmV0dXJucyBleHBsaWNpdCBmYWxzZSwgY2FuY2VsLlxuICAgIGxvZygnY2FsbGluZycsIHRoaXMucHJvcHMub25TdGFydCk7XG4gICAgbGV0IHNob3VsZFVwZGF0ZSA9IHRoaXMucHJvcHMub25TdGFydChlLCBjb3JlRXZlbnQpO1xuICAgIGlmIChzaG91bGRVcGRhdGUgPT09IGZhbHNlKSByZXR1cm47XG5cblxuICAgIC8vIEluaXRpYXRlIGRyYWdnaW5nLiBTZXQgdGhlIGN1cnJlbnQgeCBhbmQgeSBhcyBvZmZzZXRzXG4gICAgLy8gc28gd2Uga25vdyBob3cgbXVjaCB3ZSd2ZSBtb3ZlZCBkdXJpbmcgdGhlIGRyYWcuIFRoaXMgYWxsb3dzIHVzXG4gICAgLy8gdG8gZHJhZyBlbGVtZW50cyBhcm91bmQgZXZlbiBpZiB0aGV5IGhhdmUgYmVlbiBtb3ZlZCwgd2l0aG91dCBpc3N1ZS5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRyYWdnaW5nOiB0cnVlLFxuXG4gICAgICBsYXN0WDogY2xpZW50WCxcbiAgICAgIGxhc3RZOiBjbGllbnRZLFxuICAgICAgLy8gU3RvcmVkIHNvIHdlIGNhbiBhZGp1c3Qgb3VyIG9mZnNldCBpZiBzY3JvbGxlZC5cbiAgICAgIHNjcm9sbFg6IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCxcbiAgICAgIHNjcm9sbFk6IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wXG4gICAgfSk7XG5cbiAgICAvLyBUcmFuc2xhdGUgZWwgb24gcGFnZSBzY3JvbGwuXG4gICAgYWRkRXZlbnQoZG9jdW1lbnQsICdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbCk7XG4gICAgLy8gQWRkIGV2ZW50cyB0byB0aGUgZG9jdW1lbnQgZGlyZWN0bHkgc28gd2UgY2F0Y2ggd2hlbiB0aGUgdXNlcidzIG1vdXNlL3RvdWNoIG1vdmVzIG91dHNpZGUgb2ZcbiAgICAvLyB0aGlzIGVsZW1lbnQuIFdlIHVzZSBkaWZmZXJlbnQgZXZlbnRzIGRlcGVuZGluZyBvbiB3aGV0aGVyIG9yIG5vdCB3ZSBoYXZlIGRldGVjdGVkIHRoYXQgdGhpc1xuICAgIC8vIGlzIGEgdG91Y2gtY2FwYWJsZSBkZXZpY2UuXG4gICAgYWRkRXZlbnQoZG9jdW1lbnQsIGRyYWdFdmVudEZvci5tb3ZlLCB0aGlzLmhhbmRsZURyYWcpO1xuICAgIGFkZEV2ZW50KGRvY3VtZW50LCBkcmFnRXZlbnRGb3Iuc3RvcCwgdGhpcy5oYW5kbGVEcmFnU3RvcCk7XG4gIH07XG5cbiAgaGFuZGxlRHJhZzogRXZlbnRIYW5kbGVyID0gKGUpID0+IHtcbiAgICAvLyBSZXR1cm4gaWYgdGhpcyBpcyBhIHRvdWNoIGV2ZW50LCBidXQgbm90IHRoZSBjb3JyZWN0IG9uZSBmb3IgdGhpcyBlbGVtZW50XG4gICAgaWYgKGUudGFyZ2V0VG91Y2hlcyAmJiAoZS50YXJnZXRUb3VjaGVzWzBdLmlkZW50aWZpZXIgIT09IHRoaXMuc3RhdGUudG91Y2hJZGVudGlmaWVyKSkgcmV0dXJuO1xuXG4gICAgbGV0IHtjbGllbnRYLCBjbGllbnRZfSA9IGdldENvbnRyb2xQb3NpdGlvbihlKTtcblxuICAgIC8vIFNuYXAgdG8gZ3JpZCBpZiBwcm9wIGhhcyBiZWVuIHByb3ZpZGVkXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5wcm9wcy5ncmlkKSkge1xuICAgICAgbGV0IGRlbHRhWCA9IGNsaWVudFggLSB0aGlzLnN0YXRlLmxhc3RYLCBkZWx0YVkgPSBjbGllbnRZIC0gdGhpcy5zdGF0ZS5sYXN0WTtcbiAgICAgIFtkZWx0YVgsIGRlbHRhWV0gPSBzbmFwVG9HcmlkKHRoaXMucHJvcHMuZ3JpZCwgZGVsdGFYLCBkZWx0YVkpO1xuICAgICAgaWYgKCFkZWx0YVggJiYgIWRlbHRhWSkgcmV0dXJuOyAvLyBza2lwIHVzZWxlc3MgZHJhZ1xuICAgICAgY2xpZW50WCA9IHRoaXMuc3RhdGUubGFzdFggKyBkZWx0YVgsIGNsaWVudFkgPSB0aGlzLnN0YXRlLmxhc3RZICsgZGVsdGFZO1xuICAgIH1cblxuICAgIGNvbnN0IGNvcmVFdmVudCA9IGNyZWF0ZUNvcmVFdmVudCh0aGlzLCBjbGllbnRYLCBjbGllbnRZKTtcblxuICAgIGxvZygnRHJhZ2dhYmxlQ29yZTogaGFuZGxlRHJhZzogJWonLCBjb3JlRXZlbnQucG9zaXRpb24pO1xuXG5cbiAgICAvLyBDYWxsIGV2ZW50IGhhbmRsZXIuIElmIGl0IHJldHVybnMgZXhwbGljaXQgZmFsc2UsIHRyaWdnZXIgZW5kLlxuICAgIGNvbnN0IHNob3VsZFVwZGF0ZSA9IHRoaXMucHJvcHMub25EcmFnKGUsIGNvcmVFdmVudCk7XG4gICAgaWYgKHNob3VsZFVwZGF0ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuaGFuZGxlRHJhZ1N0b3Aoe30pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbGFzdFg6IGNsaWVudFgsXG4gICAgICBsYXN0WTogY2xpZW50WVxuICAgIH0pO1xuICB9O1xuXG4gIGhhbmRsZURyYWdTdG9wOiBFdmVudEhhbmRsZXIgPSAoZSkgPT4ge1xuICAgIGlmICghdGhpcy5zdGF0ZS5kcmFnZ2luZykgcmV0dXJuO1xuXG4gICAgLy8gU2hvcnQgY2lyY3VpdCBpZiB0aGlzIGlzIG5vdCB0aGUgY29ycmVjdCB0b3VjaCBldmVudC4gYGNoYW5nZWRUb3VjaGVzYCBjb250YWlucyBhbGxcbiAgICAvLyB0b3VjaCBwb2ludHMgdGhhdCBoYXZlIGJlZW4gcmVtb3ZlZCBmcm9tIHRoZSBzdXJmYWNlLlxuICAgIGlmIChlLmNoYW5nZWRUb3VjaGVzICYmIChlLmNoYW5nZWRUb3VjaGVzWzBdLmlkZW50aWZpZXIgIT09IHRoaXMuc3RhdGUudG91Y2hJZGVudGlmaWVyKSkgcmV0dXJuO1xuXG4gICAgLy8gUmVtb3ZlIHVzZXItc2VsZWN0IGhhY2tcbiAgICBpZiAodGhpcy5wcm9wcy5lbmFibGVVc2VyU2VsZWN0SGFjaykgcmVtb3ZlVXNlclNlbGVjdFN0eWxlcygpO1xuXG4gICAgbGV0IHtjbGllbnRYLCBjbGllbnRZfSA9IGdldENvbnRyb2xQb3NpdGlvbihlKTtcbiAgICBjb25zdCBjb3JlRXZlbnQgPSBjcmVhdGVDb3JlRXZlbnQodGhpcywgY2xpZW50WCwgY2xpZW50WSk7XG5cbiAgICBsb2coJ0RyYWdnYWJsZUNvcmU6IGhhbmRsZURyYWdTdG9wOiAlaicsIGNvcmVFdmVudC5wb3NpdGlvbik7XG5cbiAgICAvLyBSZXNldCB0aGUgZWwuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkcmFnZ2luZzogZmFsc2UsXG4gICAgICBsYXN0WDogbnVsbCxcbiAgICAgIGxhc3RZOiBudWxsXG4gICAgfSk7XG5cbiAgICAvLyBDYWxsIGV2ZW50IGhhbmRsZXJcbiAgICB0aGlzLnByb3BzLm9uU3RvcChlLCBjb3JlRXZlbnQpO1xuXG4gICAgLy8gUmVtb3ZlIGV2ZW50IGhhbmRsZXJzXG4gICAgbG9nKCdEcmFnZ2FibGVDb3JlOiBSZW1vdmluZyBoYW5kbGVycycpO1xuICAgIHJlbW92ZUV2ZW50KGRvY3VtZW50LCAnc2Nyb2xsJywgdGhpcy5oYW5kbGVTY3JvbGwpO1xuICAgIHJlbW92ZUV2ZW50KGRvY3VtZW50LCBkcmFnRXZlbnRGb3IubW92ZSwgdGhpcy5oYW5kbGVEcmFnKTtcbiAgICByZW1vdmVFdmVudChkb2N1bWVudCwgZHJhZ0V2ZW50Rm9yLnN0b3AsIHRoaXMuaGFuZGxlRHJhZ1N0b3ApO1xuICB9O1xuXG4gIC8vIFdoZW4gdGhlIHVzZXIgc2Nyb2xscywgYWRqdXN0IGludGVybmFsIHN0YXRlIHNvIHRoZSBkcmFnZ2FibGUgbW92ZXMgYWxvbmcgdGhlIHBhZ2UgcHJvcGVybHkuXG4gIC8vIFRoaXMgb25seSBmaXJlcyB3aGVuIGEgZHJhZyBpcyBhY3RpdmUuXG4gIGhhbmRsZVNjcm9sbDogRXZlbnRIYW5kbGVyID0gKGUpID0+IHtcbiAgICBjb25zdCBzID0gdGhpcy5zdGF0ZSwgeCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCwgeSA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSB1c3VhbCBldmVudCwgYnV0IG1ha2UgdGhlIHNjcm9sbCBvZmZzZXQgb3VyIGRlbHRhcy5cbiAgICBsZXQgY29yZUV2ZW50ID0gY3JlYXRlQ29yZUV2ZW50KHRoaXMpO1xuICAgIGNvcmVFdmVudC5wb3NpdGlvbi5kZWx0YVggPSB4IC0gcy5zY3JvbGxYO1xuICAgIGNvcmVFdmVudC5wb3NpdGlvbi5kZWx0YVkgPSB5IC0gcy5zY3JvbGxZO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBsYXN0WDogcy5sYXN0WCArIGNvcmVFdmVudC5wb3NpdGlvbi5kZWx0YVgsXG4gICAgICBsYXN0WTogcy5sYXN0WSArIGNvcmVFdmVudC5wb3NpdGlvbi5kZWx0YVksXG4gICAgICBzY3JvbGxYOiB4LFxuICAgICAgc2Nyb2xsWTogeVxuICAgIH0pO1xuXG4gICAgdGhpcy5wcm9wcy5vbkRyYWcoZSwgY29yZUV2ZW50KTtcbiAgfTtcblxuICAvLyBTYW1lIGFzIG9uTW91c2VEb3duIChzdGFydCBkcmFnKSwgYnV0IG5vdyBjb25zaWRlciB0aGlzIGEgdG91Y2ggZGV2aWNlLlxuICBvblRvdWNoU3RhcnQ6IEV2ZW50SGFuZGxlciA9IChlKSA9PiB7XG4gICAgLy8gV2UncmUgb24gYSB0b3VjaCBkZXZpY2Ugbm93LCBzbyBjaGFuZ2UgdGhlIGV2ZW50IGhhbmRsZXJzXG4gICAgZHJhZ0V2ZW50Rm9yID0gZXZlbnRzRm9yLnRvdWNoO1xuXG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlRHJhZ1N0YXJ0KGUpO1xuICB9O1xuXG4gIG9uVG91Y2hFbmQ6IEV2ZW50SGFuZGxlciA9IChlKSA9PiB7XG4gICAgLy8gV2UncmUgb24gYSB0b3VjaCBkZXZpY2Ugbm93LCBzbyBjaGFuZ2UgdGhlIGV2ZW50IGhhbmRsZXJzXG4gICAgZHJhZ0V2ZW50Rm9yID0gZXZlbnRzRm9yLnRvdWNoO1xuXG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlRHJhZ1N0b3AoZSk7XG4gIH07XG5cbiAgcmVuZGVyKCk6IFJlYWN0RWxlbWVudCB7XG4gICAgLy8gUmV1c2UgdGhlIGNoaWxkIHByb3ZpZGVkXG4gICAgLy8gVGhpcyBtYWtlcyBpdCBmbGV4aWJsZSB0byB1c2Ugd2hhdGV2ZXIgZWxlbWVudCBpcyB3YW50ZWQgKGRpdiwgdWwsIGV0YylcbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KFJlYWN0LkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbiksIHtcbiAgICAgIHN0eWxlOiBzdHlsZUhhY2tzKHRoaXMucHJvcHMuY2hpbGRyZW4ucHJvcHMuc3R5bGUpLFxuXG4gICAgICAvLyBOb3RlOiBtb3VzZU1vdmUgaGFuZGxlciBpcyBhdHRhY2hlZCB0byBkb2N1bWVudCBzbyBpdCB3aWxsIHN0aWxsIGZ1bmN0aW9uXG4gICAgICAvLyB3aGVuIHRoZSB1c2VyIGRyYWdzIHF1aWNrbHkgYW5kIGxlYXZlcyB0aGUgYm91bmRzIG9mIHRoZSBlbGVtZW50LlxuICAgICAgb25Nb3VzZURvd246IHRoaXMuaGFuZGxlRHJhZ1N0YXJ0LFxuICAgICAgb25Ub3VjaFN0YXJ0OiB0aGlzLm9uVG91Y2hTdGFydCxcbiAgICAgIG9uTW91c2VVcDogdGhpcy5oYW5kbGVEcmFnU3RvcCxcbiAgICAgIG9uVG91Y2hFbmQ6IHRoaXMub25Ub3VjaEVuZFxuICAgIH0pO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2xpYi9EcmFnZ2FibGVDb3JlLmVzNlxuICoqLyIsIi8vIEBmbG93XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2coLi4uYXJnczogYW55KSB7XG4gIGlmIChwcm9jZXNzLmVudi5EUkFHR0FCTEVfREVCVUcpIGNvbnNvbGUubG9nKC4uLmFyZ3MpO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9saWIvdXRpbHMvbG9nLmVzNlxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=