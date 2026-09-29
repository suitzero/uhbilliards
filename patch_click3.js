const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf8');

// Use regex to find and replace the mousedown listener completely
content = content.replace(
    /canvas\.addEventListener\('mousedown', \(e\) => \{[\s\S]*?\}\);/,
    `canvas.addEventListener('mousedown', (e) => {
    let mousePos = getMousePos(canvas, e);

    // Check if we clicked on a laser to toggle it
    let clickedSource = null;
    sources.forEach(source => {
        if (mousePos.dist(source.pos) < source.radius) {
            clickedSource = source;
        }
    });

    if (clickedSource) {
        clickedSource.isOn = !clickedSource.isOn;
        // Optional: play a click sound if we had one
        checkWinCondition();
        return; // Important: return here so we don't also start dragging it
    }

    // Check interaction with components (like mirrors/splitters/phase shifters)
    components.forEach(comp => {
        if (mousePos.dist(comp.pos) < comp.width / 2) {
            draggedComponent = comp;
        }
    });

    if (draggedComponent) {
        isDragging = true;
    }
});`
);

fs.writeFileSync('index.html', content);
