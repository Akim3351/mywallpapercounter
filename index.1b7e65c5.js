let t=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce(((t,n)=>t+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"),"");const n=document.getElementById("inputslist");document.getElementById("addinputbutton").addEventListener("click",(function(){const e=`\n    <li class="inputs__item" key=${t()}>\n    <select class="door__select">\n        <option value="door">Door</option>\n        <option value="window">Window</option>\n    </select>\n    <input type="number" class="door__input">\n    <input type="number" class="door__input">\n    <button type="button" id="deleteinputbutton" class="delete__button">\n        <svg class="button__icon">\n            <use href='./images/sprite.svg#delete'/>\n        </svg>\n    </button>\n</li>`;n.insertAdjacentHTML("beforeend",e)}));
//# sourceMappingURL=index.1b7e65c5.js.map