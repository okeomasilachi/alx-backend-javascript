import fs from 'fs';

export const readDatabase = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
            } else {
                const lines = data.split('\n').filter(line => line.trim() !== '');
                const fields = {};
                lines.slice(1).forEach(line => {
                    const [firstName, , , field] = line.split(',');
                    if (field) {
                        if (!fields[field]) fields[field] = [];
                        fields[field].push(firstName);
                    }
                });
                resolve(fields);
            }
        });
    });
};
