const fs = require('fs');
const path = require('path');
const targetDir = path.join(__dirname, 'app', '(page)', 'courses');
const directories = fs.readdirSync(targetDir);
console.log('Current directories:', directories);
for (const d of directories) {
    if (d.includes('courseId')) {
        const fullPath = path.join(targetDir, d);
        console.log('Attempting to delete:', fullPath);
        fs.rmSync(fullPath, { recursive: true, force: true });
        console.log('Deleted:', fullPath);
    }
}
