const fs = require('fs');
const path = require('path');

const coursesDir = path.join(process.cwd(), 'app', '(page)', 'courses');

if (fs.existsSync(coursesDir)) {
    const contents = fs.readdirSync(coursesDir);
    console.log('Cleaning up:', contents);
    
    for (const item of contents) {
        if (item.startsWith('[') && item.endsWith(']')) {
            const p = path.join(coursesDir, item);
            console.log('Deleting dynamic route:', p);
            fs.rmSync(p, { recursive: true, force: true });
        }
    }
}
