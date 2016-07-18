(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Define Dependencies
var detect = require('./modules/detect')

// Detect if JavaScript is enabled
detect()

// Print success message to console
console.log('<head> scripts loaded.')

},{"./modules/detect":2}],2:[function(require,module,exports){
/**
 * Replace `.no-js` class with `.js` class on <html> element. Use as a
 * simple method to detect if JavaScript it enabled in the browser.
 */

module.exports = function () {
  var html = document.documentElement
  html.className = html.className.replace(/\bno-js\b/g, '') + ' js '
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzb3VyY2UvX2Fzc2V0cy9zY3JpcHRzL2hlYWQuanMiLCJzb3VyY2UvX2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvZGV0ZWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIERlZmluZSBEZXBlbmRlbmNpZXNcbnZhciBkZXRlY3QgPSByZXF1aXJlKCcuL21vZHVsZXMvZGV0ZWN0JylcblxuLy8gRGV0ZWN0IGlmIEphdmFTY3JpcHQgaXMgZW5hYmxlZFxuZGV0ZWN0KClcblxuLy8gUHJpbnQgc3VjY2VzcyBtZXNzYWdlIHRvIGNvbnNvbGVcbmNvbnNvbGUubG9nKCc8aGVhZD4gc2NyaXB0cyBsb2FkZWQuJylcbiIsIi8qKlxuICogUmVwbGFjZSBgLm5vLWpzYCBjbGFzcyB3aXRoIGAuanNgIGNsYXNzIG9uIDxodG1sPiBlbGVtZW50LiBVc2UgYXMgYVxuICogc2ltcGxlIG1ldGhvZCB0byBkZXRlY3QgaWYgSmF2YVNjcmlwdCBpdCBlbmFibGVkIGluIHRoZSBicm93c2VyLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaHRtbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFxuICBodG1sLmNsYXNzTmFtZSA9IGh0bWwuY2xhc3NOYW1lLnJlcGxhY2UoL1xcYm5vLWpzXFxiL2csICcnKSArICcganMgJ1xufVxuIl19
