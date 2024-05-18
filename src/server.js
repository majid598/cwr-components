// entry-server.js
import { renderToString } from "react-dom/server";
import { Helmet } from "react-helmet";
import App from "./App";

export function render(url, context) {
  const html = renderToString(<App />);
  const helmet = Helmet.renderStatic();
  return { html, helmet };
}
