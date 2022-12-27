import fs from 'fs';
import path from 'path';

// eslint-disable-next-line import/no-anonymous-default-export
export default (_req, res) => {
  const filePath = path.join(process.cwd(), 'public', 'resume.json');

  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.status(500).json({ message: 'Error reading file' });
      return;
    }

    res.status(200).json(JSON.parse(data));
  });
};
