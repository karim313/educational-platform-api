const fs = require('fs');
const path = require('path');

const coursesDir = path.join(process.cwd(), 'app', '(page)', 'courses');
console.log('Targeting:', coursesDir);

if (fs.existsSync(coursesDir)) {
    const contents = fs.readdirSync(coursesDir);
    console.log('Contents:', contents);
    
    for (const item of contents) {
        if (item === '[courseId]') {
            const oldPath = path.join(coursesDir, '[courseId]');
            const newPath = path.join(coursesDir, '[id]');
            
            console.log('Found [courseId] at', oldPath);
            if (fs.existsSync(newPath)) {
                console.log('[id] already exists, deleting [courseId]');
                fs.rmSync(oldPath, { recursive: true, force: true });
            } else {
                console.log('Renaming to', newPath);
                fs.renameSync(oldPath, newPath);
            }
        }
    }
} else {
    console.log('Directory NOT found');
}
