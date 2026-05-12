# System Design Interview Prep

A comprehensive, mobile-friendly website for system design interview preparation notes.

## 📱 Features

- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Dark Mode Support**: Automatic dark mode detection with manual toggle
- **Search Functionality**: Filter topics in real-time
- **Expandable Sections**: Click topics to expand/collapse detailed content
- **Difficulty Badges**: Beginner, Intermediate, and Advanced levels
- **GitHub Pages Ready**: Deploy directly to GitHub Pages with zero configuration

## 📚 Topics Covered

- Scalability
- Load Balancing
- Caching Strategies
- Database Design
- Microservices Architecture
- Message Queues
- API Design
- Authentication & Authorization
- Monitoring & Logging
- Consistency Models
- Deployment & DevOps

## 🚀 Quick Start

### Local Testing
Simply open `index.html` in your browser to view the website locally.

### Deploy to GitHub Pages

1. **Push to GitHub**:
   ```bash
   cd /Users/yokeshrana/InterviewPrep/systemdesign
   git add .
   git commit -m "Add system design prep website"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Under "Code and automation" → "Pages"
   - Select "Deploy from a branch"
   - Choose `main` branch and `/root` folder
   - Save

3. **Access Your Site**:
   - Your site will be available at: `https://<username>.github.io/systemdesign/`

## 🎨 Customization

### Adding More Topics

Edit `index.html` and add new objects to the `topics` array:

```javascript
{
    id: 'topic-id',
    title: 'Topic Title',
    badge: 'beginner', // 'beginner', 'intermediate', or 'advanced'
    content: `
        <h3>Section Title</h3>
        <p>Your content here</p>
        <ul>
            <li>Point 1</li>
            <li>Point 2</li>
        </ul>
    `
}
```

### Styling

Colors and responsive breakpoints can be modified in the CSS `<style>` section.

## 🔧 Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Fully responsive

## 📖 Keyboard Shortcuts

- `Ctrl+F` / `Cmd+F`: Search using browser's native search
- Click any topic to expand/collapse

## 🌙 Dark Mode

The website automatically detects your system's dark mode preference. You can also manually toggle using the button in the header.

## 📝 License

Free to use for interview preparation purposes.

---

**Happy studying! 🎓**
