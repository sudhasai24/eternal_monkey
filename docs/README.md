# eternal monk(ey) - Poetry Collection

A contemplative collection of poetry exploring nature, wisdom, and the inner journey of the soul.

## GitHub Pages Setup

To add this to your GitHub Pages:

1. Create a new repository on GitHub
2. Upload these files to your repository:
   - `index.html`
   - `styles.css` 
   - `script.js`
   - `README.md`

3. Go to your repository Settings
4. Scroll down to "Pages" section
5. Under "Source", select "Deploy from a branch"
6. Choose "main" branch and "/ (root)" folder
7. Click "Save"

Your site will be available at: `https://yourusername.github.io/your-repository-name`

## Customizing Your Poems

To add your own poems, edit the `script.js` file and modify the `poems` object. Each poem should have:

- `id`: unique identifier
- `title`: poem title
- `preview`: array of 4-8 lines for the tile preview
- `fullPoem`: array of all lines in the complete poem

Example:
```javascript
{
    id: 'my-poem',
    title: 'My Beautiful Poem',
    preview: [
        'First line of preview',
        'Second line of preview',
        'Third line of preview',
        'Fourth line of preview'
    ],
    fullPoem: [
        'First line of preview',
        'Second line of preview', 
        'Third line of preview',
        'Fourth line of preview',
        '',
        'Fifth line (full poem)',
        'Sixth line (full poem)',
        // ... more lines
    ]
}
```

## Features

- Responsive design that works on all devices
- Smooth section navigation
- Expandable poem tiles
- Beautiful gradient backgrounds
- Hover effects and animations
- Clean, modern typography

## Browser Support

Works in all modern browsers including Chrome, Firefox, Safari, and Edge.