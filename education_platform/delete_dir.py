import shutil
import os
path = os.path.join(os.getcwd(), 'app', '(page)', 'courses', '[courseId]')
if os.path.exists(path):
    shutil.rmtree(path)
    print('Deleted')
else:
    print('Not found')
