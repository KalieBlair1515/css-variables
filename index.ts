const inputs = document.querySelectorAll<HTMLInputElement>(".controls input");

type HTMLInputEvent = Event & { target: HTMLInputElement }

function handleUpdate(element: HTMLElement, event: HTMLInputEvent) {
    if ("sizing" in element.dataset === false) return

    const { name, value } = event.target

    const suffix = element.dataset.sizing ?? "";
    
    document.documentElement.style.setProperty(`--${name}`, value + suffix);
}

inputs.forEach(input => input.addEventListener("change", (e: HTMLInputEvent) => handleUpdate(input, e)));
inputs.forEach(input => input.addEventListener("mousemove", (e: HTMLInputEvent) => handleUpdate(input, e)));
