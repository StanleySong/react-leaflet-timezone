'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactLeaflet = require('react-leaflet');

var _leafletTimezone = require('./leaflet-timezone');

var _leafletTimezone2 = _interopRequireDefault(_leafletTimezone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Timezone = function (_MapLayer) {
	_inherits(Timezone, _MapLayer);

	function Timezone() {
		_classCallCheck(this, Timezone);

		return _possibleConstructorReturn(this, (Timezone.__proto__ || Object.getPrototypeOf(Timezone)).apply(this, arguments));
	}

	_createClass(Timezone, [{
		key: 'createLeafletElement',
		value: function createLeafletElement(props) {
			return null;
		}
	}, {
		key: 'updateLeafletElement',
		value: function updateLeafletElement(fromProps, toProps) {
			return null;
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			console.log(this.props);
			var map = this.props.leaflet.map;
			// map.addLayer(this.leafletElement)

			_leafletTimezone2.default.bindPopup(function (layer) {
				return new Date().toLocaleString('en-GB', { timeZone: layer.feature.properties.tz_name1st, timeZoneName: 'short' });
			}).addTo(map);
		}
	}, {
		key: 'render',
		value: function render() {
			return null;
		}
	}]);

	return Timezone;
}(_reactLeaflet.MapLayer);

exports.default = (0, _reactLeaflet.withLeaflet)(Timezone);

