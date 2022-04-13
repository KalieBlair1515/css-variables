"use strict";
const inputs = document.querySelectorAll(".controls input");
function handleUpdate(element, event) {
    var _a;
    if ("sizing" in element.dataset === false)
        return;
    const suffix = (_a = element.dataset.sizing) !== null && _a !== void 0 ? _a : "";
    document.documentElement.style.setProperty(`--${event.target.name}`, event.target.value + suffix);
}
inputs.forEach(input => input.addEventListener("change", (e) => handleUpdate(input, e)));
inputs.forEach(input => input.addEventListener("mousemove", (e) => handleUpdate(input, e)));
//# sourceMappingURL=index.js.map