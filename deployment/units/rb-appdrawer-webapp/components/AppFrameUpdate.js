"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _AppFrameContext = _interopRequireDefault(require("./AppFrameContext"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};if (desc.get || desc.set) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}}newObj.default = obj;return newObj;}}

class AppFrameUpdateExecutor extends _react.default.Component



{
  componentDidMount() {
    const { title, setTitle } = this.props;

    setTitle(title);
  }

  componentWillUnmount() {
    const { clearTitle } = this.props;

    clearTitle();
  }

  render() {
    return _react.default.createElement(_react.Fragment, null);
  }}


class AppFrameUpdate extends _react.default.Component

{
  render() {
    const { title } = this.props;

    return (
      _react.default.createElement(_AppFrameContext.default.Consumer, null,
      ({ setTitle, clearTitle }) =>
      _react.default.createElement(AppFrameUpdateExecutor, { title: title, setTitle: setTitle, clearTitle: clearTitle })));



  }}var _default =


AppFrameUpdate;exports.default = _default;
//# sourceMappingURL=AppFrameUpdate.js.map