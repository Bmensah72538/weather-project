/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildUI: () => (/* binding */ buildUI)
/* harmony export */ });
const buildUI = {
    cleanDiv(div) {
        while (div.firstChild) {
            div.removeChild(div.firstChild);
        }
    },
    displayWeather(weatherData) {
        let weatherArray = [];
        let currentDiv = document.body.getElementsByClassName('current')[0];
        this.cleanDiv(currentDiv);
        // City Name
        let cityName = document.createElement('h2');
        cityName.textContent = weatherData.location.name;
        weatherArray.push(cityName)
        // Temp
        let temp = document.createElement('div');
        temp.classList.add('temp')
        let tempNumber = document.createElement('p');
        tempNumber.textContent = `Temperature: ${weatherData.current.temp_f} farenheight`;
        temp.appendChild(tempNumber);
        weatherArray.push(temp);
        // feels like
        let feelsLike = document.createElement('div');
        feelsLike.classList.add('feels-like')
        let feelsLikeText = document.createElement('p');
        feelsLikeText.textContent = `Feels like: ${weatherData.current.feelslike_c}`;
        feelsLike.appendChild(feelsLikeText);
        weatherArray.push(feelsLike);
        // Condition 
        let condition = document.createElement('div');
        condition.classList.add('condition-container');
        let conditionText = document.createElement('p');
        let conditionIcon = document.createElement('img');

        conditionText.textContent = weatherData.current.condition.text;
        conditionIcon.src = weatherData.current.condition.icon;
        conditionIcon.src = `https://${conditionIcon.src.slice(7)}`;
        console.log(typeof conditionIcon.src);

        condition.appendChild(conditionText);
        condition.appendChild(conditionIcon);

        weatherArray.push(condition);


        

        




        weatherArray.forEach((value) => {
            currentDiv.appendChild(value);
        })





    },

}

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ "./src/UI.js");


async function fetchWeather (query) {
    const weatherJson = await fetch(query);
    const weatherData = await weatherJson.json();
    _UI__WEBPACK_IMPORTED_MODULE_0__.buildUI.displayWeather(weatherData);
    console.log(weatherData)
    return weatherData;
}
function pullWeather (location) {
    if(typeof location !== 'string') {
        return 'Error, not a string';
    }
    let query = `https://api.weatherapi.com/v1/current.json?key=71101254b6f34180943212833231608&q=${location}`;
    fetchWeather(query);
}

let currentWeather = pullWeather('london');

window.onload = () => {
    console.log(currentWeather);
    searchInit();
}

function searchInit() {
let searchButton = document.getElementsByClassName('search-button')[0];
searchButton.addEventListener('click', (e) => {
    console.log(e);
    let query = document.getElementById('search-input').value;
    pullWeather(query);
    console.log(query);
    
})
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELDRCQUE0QjtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsZ0NBQWdDO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1Q0FBdUMsMkJBQTJCO0FBQ2xFOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQSxTQUFTOzs7Ozs7QUFNVCxLQUFLOztBQUVMOzs7Ozs7VUM5REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ044Qjs7QUFFOUI7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3Q0FBTztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0dBQW9HLFNBQVM7QUFDN0c7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvVUkuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBidWlsZFVJID0ge1xuICAgIGNsZWFuRGl2KGRpdikge1xuICAgICAgICB3aGlsZSAoZGl2LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGRpdi5yZW1vdmVDaGlsZChkaXYuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRpc3BsYXlXZWF0aGVyKHdlYXRoZXJEYXRhKSB7XG4gICAgICAgIGxldCB3ZWF0aGVyQXJyYXkgPSBbXTtcbiAgICAgICAgbGV0IGN1cnJlbnREaXYgPSBkb2N1bWVudC5ib2R5LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2N1cnJlbnQnKVswXTtcbiAgICAgICAgdGhpcy5jbGVhbkRpdihjdXJyZW50RGl2KTtcbiAgICAgICAgLy8gQ2l0eSBOYW1lXG4gICAgICAgIGxldCBjaXR5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGNpdHlOYW1lLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEubG9jYXRpb24ubmFtZTtcbiAgICAgICAgd2VhdGhlckFycmF5LnB1c2goY2l0eU5hbWUpXG4gICAgICAgIC8vIFRlbXBcbiAgICAgICAgbGV0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGVtcC5jbGFzc0xpc3QuYWRkKCd0ZW1wJylcbiAgICAgICAgbGV0IHRlbXBOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRlbXBOdW1iZXIudGV4dENvbnRlbnQgPSBgVGVtcGVyYXR1cmU6ICR7d2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2Z9IGZhcmVuaGVpZ2h0YDtcbiAgICAgICAgdGVtcC5hcHBlbmRDaGlsZCh0ZW1wTnVtYmVyKTtcbiAgICAgICAgd2VhdGhlckFycmF5LnB1c2godGVtcCk7XG4gICAgICAgIC8vIGZlZWxzIGxpa2VcbiAgICAgICAgbGV0IGZlZWxzTGlrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmZWVsc0xpa2UuY2xhc3NMaXN0LmFkZCgnZmVlbHMtbGlrZScpXG4gICAgICAgIGxldCBmZWVsc0xpa2VUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBmZWVsc0xpa2VUZXh0LnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2U6ICR7d2VhdGhlckRhdGEuY3VycmVudC5mZWVsc2xpa2VfY31gO1xuICAgICAgICBmZWVsc0xpa2UuYXBwZW5kQ2hpbGQoZmVlbHNMaWtlVGV4dCk7XG4gICAgICAgIHdlYXRoZXJBcnJheS5wdXNoKGZlZWxzTGlrZSk7XG4gICAgICAgIC8vIENvbmRpdGlvbiBcbiAgICAgICAgbGV0IGNvbmRpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25kaXRpb24uY2xhc3NMaXN0LmFkZCgnY29uZGl0aW9uLWNvbnRhaW5lcicpO1xuICAgICAgICBsZXQgY29uZGl0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgbGV0IGNvbmRpdGlvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgICAgICBjb25kaXRpb25UZXh0LnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dDtcbiAgICAgICAgY29uZGl0aW9uSWNvbi5zcmMgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uO1xuICAgICAgICBjb25kaXRpb25JY29uLnNyYyA9IGBodHRwczovLyR7Y29uZGl0aW9uSWNvbi5zcmMuc2xpY2UoNyl9YDtcbiAgICAgICAgY29uc29sZS5sb2codHlwZW9mIGNvbmRpdGlvbkljb24uc3JjKTtcblxuICAgICAgICBjb25kaXRpb24uYXBwZW5kQ2hpbGQoY29uZGl0aW9uVGV4dCk7XG4gICAgICAgIGNvbmRpdGlvbi5hcHBlbmRDaGlsZChjb25kaXRpb25JY29uKTtcblxuICAgICAgICB3ZWF0aGVyQXJyYXkucHVzaChjb25kaXRpb24pO1xuXG5cbiAgICAgICAgXG5cbiAgICAgICAgXG5cblxuXG5cbiAgICAgICAgd2VhdGhlckFycmF5LmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBjdXJyZW50RGl2LmFwcGVuZENoaWxkKHZhbHVlKTtcbiAgICAgICAgfSlcblxuXG5cblxuXG4gICAgfSxcblxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgYnVpbGRVSSB9IGZyb20gJy4vVUknXG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlciAocXVlcnkpIHtcbiAgICBjb25zdCB3ZWF0aGVySnNvbiA9IGF3YWl0IGZldGNoKHF1ZXJ5KTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHdlYXRoZXJKc29uLmpzb24oKTtcbiAgICBidWlsZFVJLmRpc3BsYXlXZWF0aGVyKHdlYXRoZXJEYXRhKTtcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSlcbiAgICByZXR1cm4gd2VhdGhlckRhdGE7XG59XG5mdW5jdGlvbiBwdWxsV2VhdGhlciAobG9jYXRpb24pIHtcbiAgICBpZih0eXBlb2YgbG9jYXRpb24gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiAnRXJyb3IsIG5vdCBhIHN0cmluZyc7XG4gICAgfVxuICAgIGxldCBxdWVyeSA9IGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PTcxMTAxMjU0YjZmMzQxODA5NDMyMTI4MzMyMzE2MDgmcT0ke2xvY2F0aW9ufWA7XG4gICAgZmV0Y2hXZWF0aGVyKHF1ZXJ5KTtcbn1cblxubGV0IGN1cnJlbnRXZWF0aGVyID0gcHVsbFdlYXRoZXIoJ2xvbmRvbicpO1xuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRXZWF0aGVyKTtcbiAgICBzZWFyY2hJbml0KCk7XG59XG5cbmZ1bmN0aW9uIHNlYXJjaEluaXQoKSB7XG5sZXQgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VhcmNoLWJ1dHRvbicpWzBdO1xuc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICBsZXQgcXVlcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWlucHV0JykudmFsdWU7XG4gICAgcHVsbFdlYXRoZXIocXVlcnkpO1xuICAgIGNvbnNvbGUubG9nKHF1ZXJ5KTtcbiAgICBcbn0pXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9