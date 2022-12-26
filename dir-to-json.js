import DirectoryStructureJSON from 'directory-structure-json';
import fs from 'fs';

DirectoryStructureJSON.getStructure(fs, 'public/images', (err, structure) => {
  if (err) console.log(err);
  console.log(JSON.stringify(structure, null, 2));
});
