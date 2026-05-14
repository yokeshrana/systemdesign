# Grokking System Design Interview



## PDF Viewer

<div id="pdf-container" class="pdf-viewer-container">
  <div class="pdf-controls">
    <button id="prev-page" title="Previous page">← Previous</button>
    <span id="page-info">Loading...</span>
    <button id="next-page" title="Next page">Next →</button>
    <button id="toggle-bookmarks" title="Show/hide bookmarks">🔖 Bookmarks</button>
    <button id="bookmark-page" title="Bookmark this page">⭐ Bookmark</button>
    <button id="fit-width" class="fit-btn active" title="Fit width">↔ Fit Width</button>
    <button id="fit-height" class="fit-btn" title="Fit height">↕ Fit Height</button>
    <button id="fullscreen-btn" title="Fullscreen">⛶ Fullscreen</button>
    <a id="download-pdf" href="../../assets/system_design.pdf" download="Grokking_System_Design_Interview.pdf" title="Download PDF">📥 Download</a>
  </div>
  
  <div id="pdf-viewer" class="pdf-viewer">
    <canvas id="pdf-canvas"></canvas>
  </div>
  
  <div id="bookmarks-panel" class="bookmarks-panel" style="display: none;">
    <h3>Bookmarked Pages</h3>
    <ul id="bookmarks-list"></ul>
    <button id="clear-bookmarks" class="clear-btn">Clear All</button>
  </div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
<script src="../../assets/javascripts/pdf-viewer.js"></script>

## How to Use

1. **Navigate**: Use Previous/Next buttons to move through pages, or click page numbers in bookmarks.
2. **Bookmark**: Click the ⭐ button to bookmark the current page. Bookmarks are saved in your browser's local storage.
3. **Search**: Use Ctrl+F (Cmd+F on Mac) to search the PDF content.
4. **Download**: Click 📥 to download the full PDF.

## Content Overview

This resource covers:

- System design fundamentals and terminology
- The seven-step interview framework
- Real-world case studies
- Component design (caching, databases, etc.)
- Scaling strategies and trade-offs
- Practical estimation techniques

## Tips

- Start with Chapter 1 to understand the framework.
- Use bookmarks to mark sections you want to revisit.
- Cross-reference with the [Interview Framework](../interview-framework/index.md) section for deeper dives.
- Practice applying the seven-step method from the PDF to the [Case Studies](../case-studies/index.md).
