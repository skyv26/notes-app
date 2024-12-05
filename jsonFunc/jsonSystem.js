import fs from 'fs';

class JsonClass {
    reader = (fileName) => {
        fs.readFile(fileName, 'utf-8', (err, data) => {
            if(err) {
                return new Error('Oops! Something happend');
            }
            return JSON.parse(data.toString());
        })
    }
}

export default JsonClass;