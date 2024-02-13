class Navigation extends HTMLElement {

    
    connectedCallback() {

    this.innerHTML = "<nav class=\"navbar navbar-expand-sm navbar-light bg-light\">\n" + //
    "        <a class=\"navbar-brand\" href=\"#\">Builders</a>\n" + //
    "        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n" + //
    "          <span class=\"navbar-toggler-icon\"></span>\n" + //
    "        </button>\n" + //
    "      \n" + //
    "        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n" + //
    "          <ul class=\"navbar-nav mr-auto\">\n" + //
    "            <li class=\"nav-item active\">\n" + //
    "              <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n" + //
    "            </li>\n" + //
    "            <li class=\"nav-item\">\n" + //
    "              <a class=\"nav-link\" href=\"#\">Locate a Builder</a>\n" + //
    "            </li>\n" + //
    "            <li class=\"nav-item dropdown\">\n" + //
    "              <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" + //
    "                Dropdown\n" + //
    "              </a>\n" + //
    "              <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n" + //
    "                <a class=\"dropdown-item\" href=\"#\">How can I become a builder?</a>\n" + //
    "                <a class=\"dropdown-item\" href=\"#\">How can I refer a builder?</a>\n" + //
    "                <div class=\"dropdown-divider\"></div>\n" + //
    "                <a class=\"dropdown-item\" href=\"#\">How do I apply as a builder?</a>\n" + //
    "              </div>\n" + //
    "            </li>\n" + //
    "            <li class=\"nav-item\">\n" + //
    "              <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n" + //
    "            </li>\n" + //
    "          </ul>\n" + //
    "          <form class=\"form-inline my-2 my-lg-0\" id=\"finderForm\">\n" + //
    "            <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\" id=\"search\">\n" + //
    "            <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Find</button>\n" + //
    "          </form>\n" + //
    "        </div>\n" + //
    "      </nav>";;
    }
}

customElements.define("dream-nav", Navigation);