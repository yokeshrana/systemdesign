// PDF Viewer with Bookmarking Support
// Uses PDF.js to render the PDF and localStorage to save bookmarks

const STORAGE_KEY = 'pdf-bookmarks';
const PDF_URL = '../../assets/system_design.pdf';

let pdfDoc = null;
let currentPage = 1;
let pageCount = 0;
let bookmarks = new Set();

// Initialize PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

// Load bookmarks from localStorage
function loadBookmarks() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    bookmarks = new Set(JSON.parse(stored));
  }
}

// Save bookmarks to localStorage
function saveBookmarks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(bookmarks)));
}

// Render a specific page
async function renderPage(pageNum) {
  if (pageNum < 1 || pageNum > pageCount) return;
  
  currentPage = pageNum;
  const page = await pdfDoc.getPage(pageNum);
  const canvas = document.getElementById('pdf-canvas');
  const ctx = canvas.getContext('2d');
  
  const viewport = page.getViewport({ scale: 1.5 });
  canvas.width = viewport.width;
  canvas.height = viewport.height;
  
  const renderContext = {
    canvasContext: ctx,
    viewport: viewport
  };
  
  await page.render(renderContext).promise;
  
  // Update page info
  document.getElementById('page-info').textContent = `Page ${currentPage} of ${pageCount}`;
  
  // Update bookmark button state
  updateBookmarkButton();
}

// Update bookmark button based on current page
function updateBookmarkButton() {
  const btn = document.getElementById('bookmark-page');
  if (bookmarks.has(currentPage)) {
    btn.textContent = '⭐ Bookmarked';
    btn.classList.add('bookmarked');
  } else {
    btn.textContent = '☆ Bookmark';
    btn.classList.remove('bookmarked');
  }
}

// Toggle bookmark for current page
function toggleBookmark() {
  if (bookmarks.has(currentPage)) {
    bookmarks.delete(currentPage);
  } else {
    bookmarks.add(currentPage);
  }
  saveBookmarks();
  updateBookmarkButton();
  updateBookmarksList();
}

// Update bookmarks list UI
function updateBookmarksList() {
  const list = document.getElementById('bookmarks-list');
  list.innerHTML = '';
  
  if (bookmarks.size === 0) {
    list.innerHTML = '<li style="color: #999; padding: 10px;">No bookmarks yet. Click ⭐ to bookmark a page.</li>';
    return;
  }
  
  const sortedBookmarks = Array.from(bookmarks).sort((a, b) => a - b);
  
  sortedBookmarks.forEach(pageNum => {
    const li = document.createElement('li');
    li.style.cssText = 'padding: 8px; margin: 4px 0; background: #f0f0f0; border-radius: 4px; cursor: pointer; user-select: none;';
    li.textContent = `Page ${pageNum}`;
    li.onclick = () => {
      renderPage(pageNum);
      document.getElementById('bookmarks-panel').style.display = 'none';
    };
    li.onmouseover = () => li.style.background = '#e0e0e0';
    li.onmouseout = () => li.style.background = '#f0f0f0';
    list.appendChild(li);
  });
}

// Initialize PDF viewer
async function initPDF() {
  try {
    pdfDoc = await pdfjsLib.getDocument(PDF_URL).promise;
    pageCount = pdfDoc.numPages;
    
    loadBookmarks();
    renderPage(1);
    updateBookmarksList();
    
    // Setup event listeners
    document.getElementById('prev-page').onclick = () => renderPage(currentPage - 1);
    document.getElementById('next-page').onclick = () => renderPage(currentPage + 1);
    document.getElementById('bookmark-page').onclick = toggleBookmark;
    document.getElementById('toggle-bookmarks').onclick = () => {
      const panel = document.getElementById('bookmarks-panel');
      panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
    };
    document.getElementById('clear-bookmarks').onclick = () => {
      if (confirm('Clear all bookmarks?')) {
        bookmarks.clear();
        saveBookmarks();
        updateBookmarksList();
        updateBookmarkButton();
      }
    };
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') renderPage(currentPage - 1);
      if (e.key === 'ArrowRight') renderPage(currentPage + 1);
    });
    
  } catch (error) {
    console.error('Error loading PDF:', error);
    document.getElementById('pdf-viewer').innerHTML = `
      <div style="padding: 20px; color: #d32f2f; background: #ffebee; border-radius: 4px;">
        <strong>Error loading PDF:</strong> ${error.message}<br/>
        <small>Make sure the PDF file is located at: docs/assets/system_design.pdf</small>
      </div>
    `;
  }
}

// Start when DOM is ready
document.addEventListener('DOMContentLoaded', initPDF);
