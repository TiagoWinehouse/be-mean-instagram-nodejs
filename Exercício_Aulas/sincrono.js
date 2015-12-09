try {
    var value = JSON.parse(fs.readFileSync("file.json"));
    console.log(value.success);
}
// Syntax actually not supported in JS but drives the point.
catch(SyntaxError e) {
    console.error("invalid json in file");
}
catch(Error e) {  
    console.error("unable to read file")
}
