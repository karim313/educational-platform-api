const fs = require('fs');
const path = require('path');
const coursesDir = 'e:\\educational platform\\education_platform\\app\\(page)\\courses';
const oldP = path.join(coursesDir, '[courseId]');
const newP = path.join(coursesDir, 'temp_dir');
if (fs.existsSync(oldP)) {
    fs.renameSync(oldP, newP);
    fs.rmSync(newP, { recursive: true, force: true });
    console.log('Success');
} else {
    console.log('Not found');
}
const oldP2 = path.join(coursesDir, '[id]');
if (fs.existsSync(oldP2)) {
    fs.rmSync(oldP2, { recursive: true, force: true });
}
