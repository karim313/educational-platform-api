const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'app', '(page)', 'courses', '[courseId]');
if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
    console.log('Deleted successfully');
} else {
    console.log('Directory not found');
}
