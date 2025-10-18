// Joins multiple path segments into one, handling slashes correctly.
const fullPath = path.join("/users", "natnael", "documents", "file.txt");
console.log(fullPath);
// /users/natnael/documents/file.txt

// Turns a relative path into an absolute path based on the current working directory.
const absolutePath = path.resolve("files", "myfile.txt");
console.log(absolutePath);
// /home/user/project/files/myfile.txt  (Linux example)

// Gets the file name from a path.
const file = "/users/natnael/docs/file.txt";
console.log(path.basename(file)); // file.txt
console.log(path.basename(file, ".txt")); // file (without extension)

//Gets the directory part of a path.
console.log(path.dirname("/users/natnael/docs/file.txt"));
// /users/natnael/docs

// Gets the file extension.
console.log(path.extname("/users/natnael/docs/file.txt"));
// .txt

// Breaks a path into its parts:
const parsed = path.parse("/users/natnael/docs/file.txt");
console.log(parsed);
/*
{
  root: '/',
  dir: '/users/natnael/docs',
  base: 'file.txt',
  ext: '.txt',
  name: 'file'
}
*/
