const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

// extract the script block
const scriptStart = html.indexOf('<script>') + 8;
const scriptEnd = html.indexOf('</script>');
const scriptContent = html.substring(scriptStart, scriptEnd);

fs.writeFileSync('script.js', scriptContent);
