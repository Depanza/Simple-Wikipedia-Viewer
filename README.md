# Wikipedia Viewer

A web application that enables real-time Wikipedia article searches with dynamic results display.

## Features

- Real-time Wikipedia article search
- Article previews with titles and snippets
- Direct links to full Wikipedia articles
- Clean, responsive interface

## Quick Start

1. Clone and run:
```bash
git clone https://github.com/your-username/wikipedia-viewer.git
cd wikipedia-viewer
```

2. Open `index.html` in your browser

## Tech Stack

- HTML/CSS/JavaScript
- [Wikipedia API](https://www.mediawiki.org/wiki/API:Main_page)

## Project Structure

```
├── index.html      # Main HTML file
├── styles.css      # Styling
└── script.js       # Application logic
```

## API Integration

Uses Wikipedia's `action=query` endpoint with:
```javascript
{
  list: 'search',
  srsearch: 'query',
  format: 'json',
  origin: '*'
}
```

## Common Issues

- **No results**: Try broader search terms
- **CORS errors**: Ensure browser allows cross-origin requests
- **Slow response**: Check network connection

## Roadmap

- [ ] Random article feature
- [ ] Enhanced mobile responsiveness
- [ ] Loading indicators
- [ ] Detailed article previews

## Contributing

Issues and pull requests are welcome. Please check existing issues before submitting new ones.

## License

MIT Licensed. See [LICENSE](LICENSE) for details.