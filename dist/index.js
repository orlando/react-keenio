"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _keenJs = require("keen-js");

var _keenJs2 = _interopRequireDefault(_keenJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chart = function (_React$Component) {
  _inherits(Chart, _React$Component);

  function Chart(props) {
    _classCallCheck(this, Chart);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Chart).call(this, props));

    _this.initChart = _this.initChart.bind(_this);
    return _this;
  }

  _createClass(Chart, [{
    key: "initChart",
    value: function initChart() {
      this._chart = new Keen.Dataviz().el(this._chartRef).chartType(this.props.chartType).title(this.props.title).library(this.props.library).height(this.props.height).width(this.props.width).colors(this.props.colors).colorMapping(this.props.colorMapping).chartOptions(this.props.chartOptions).prepare();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.initChart();
      this.props.client.run(this.props.query, function (err, res) {
        if (err) {
          // Display the API error
          _this2._chart.error(err.message);
        } else {
          var customParse = _this2.props.customFunction;
          var data = res.result;

          // Handle the response
          if (customParse) {
            data = customParse(data);
          }

          _this2._chart.parseRawData({ result: data }).labelMapping(_this2.props.labelMapping).labels(_this2.props.labels).render();
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement("div", { ref: function ref(c) {
          return _this3._chartRef = c;
        } });
    }
  }]);

  return Chart;
}(_react2.default.Component);

exports.default = Chart;


Chart.propTypes = {
  client: _react2.default.PropTypes.object.isRequired,
  query: _react2.default.PropTypes.object.isRequired,
  chartType: _react2.default.PropTypes.string.isRequired,
  title: _react2.default.PropTypes.string,
  library: _react2.default.PropTypes.string,
  height: _react2.default.PropTypes.number,
  width: _react2.default.PropTypes.number,
  colors: _react2.default.PropTypes.array,
  colorMapping: _react2.default.PropTypes.object,
  labelMapping: _react2.default.PropTypes.object,
  labels: _react2.default.PropTypes.array,
  chartOptions: _react2.default.PropTypes.object,
  customFunction: _react2.default.PropTypes.func
};

Chart.defaultProps = {
  title: "",
  library: "",
  height: 400,
  width: 600,
  colors: [],
  colorMapping: {},
  labelMapping: {},
  labels: [],
  chartOptions: {}
};
module.exports = exports["default"];
//# sourceMappingURL=index.js.map