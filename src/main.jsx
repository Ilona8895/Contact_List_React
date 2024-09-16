import { createRoot } from "react-dom/client";
import App from "./App";

// const el = document.createElement("div");
// el.classList.add("classic");
// el.innerHTML = ob.name + " ,pet:" + ob.pets;
// document.querySelector("body").appendChild(el);

createRoot(document.getElementById("root")).render(<App />);
