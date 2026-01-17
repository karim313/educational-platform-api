const fs = require('fs');
const path = require('path');

const coursesDir = 'e:\\educational platform\\education_platform\\app\\(page)\\courses';
console.log('Targeting hardcoded path:', coursesDir);

if (fs.existsSync(coursesDir)) {
    const contents = fs.readdirSync(coursesDir);
    console.log('Contents:', contents);
    
    for (const item of contents) {
        if (item.includes('[') || item.includes('id') || item.includes('course')) {
            if (fs.lstatSync(path.join(coursesDir, item)).isDirectory()) {
                const p = path.join(coursesDir, item);
                console.log('Deleting:', p);
                fs.rmSync(p, { recursive: true, force: true });
            }
        }
    }
} else {
    console.log('PATH NOT FOUND');
}
