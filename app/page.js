"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var link_1 = require("next/link");
var NavBar_1 = require("./components/NavBar");
var React = require("react");
var Home = function () {
    var items = ["Home", "Product", "Service"];
    return (React.createElement("div", null,
        React.createElement(NavBar_1.default, { brandName: "My Brand", imageSrcPath: "./assets/IronOreEgg.png", navItems: items }),
        React.createElement("h1", null, "Home"),
        React.createElement("p", null, "Hello World! This is the Home page"),
        React.createElement("p", null,
            "Visit the ",
            React.createElement(link_1.default, { href: "/about" }, "About"),
            " page.")));
};
exports.default = Home;
//# sourceMappingURL=page.js.map