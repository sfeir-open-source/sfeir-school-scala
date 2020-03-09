// import '../libs/revealjs/plugin/highlight/highlight.js';

class ScalaFiddle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    let blocks = this.shadowRoot.querySelectorAll('pre code');

    for (let i = 0; i < blocks.length; i++) {
      hljs.highlightBlock(blocks[i]);
      console.log(blocks[i])
    }
    this.shadowRoot.innerHTML = `${this.render()}`;
  }

  $(selector) {
    return this.shadowRoot.querySelector(selector);
  }

  $$(selector) {
    return this.shadowRoot.querySelectorAll(selector);
  }

  render() {
    return `
            <div data-scalafiddle data-layout="v50"><pre><code data-trim data-noescape class="scala">
                def increment(x: Int): Int = x + 1
            </code></pre></div>`;
  }
}

customElements.define('scala-fiddle', ScalaFiddle);
