!function(){var t=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(t)).reduce((function(t,n){return t+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"}),"")},n=document.getElementById("inputslist");document.getElementById("addinputbutton").addEventListener("click",(function(){var e=t(),o='\n    <li class="inputs__item" key='.concat(e,'>\n    <select class="door__select">\n        <option value="door">Door</option>\n        <option value="window">Window</option>\n    </select>\n    <input type="number" class="door__input">\n    <input type="number" class="door__input">\n    <button type="button" id="deleteinputbutton" class="delete__button">\n        <svg class="button__icon">\n            <use href=\'./images/sprite.svg#delete\'/>\n        </svg>\n    </button>\n</li>');n.insertAdjacentHTML("beforeend",o)}))}();
//# sourceMappingURL=index.99a90bc5.js.map
