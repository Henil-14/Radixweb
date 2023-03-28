to export a module first create a export file in that file define a class and function to upload 
use export {function,class,inteface} to export function and classes
in the main file use import { fun name ,className } from "./filename";
to import the function and classes
tsc -t es2017  --module commonjs  file.ts -w 
to compile the file