Node.js follows the CommonJS module system, and the builtin require
function is the easiest way to include modules that exist in separate files.
The basic functionality of require is that it reads a javascript file, executes the file,
and then proceeds to return the exports object.