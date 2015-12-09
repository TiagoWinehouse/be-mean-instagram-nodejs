fs.readFile("file.json", function(error, value) {
    if ( error ) {
        console.error("unable to read file");
    }
    else {
        try {
            value = JSON.parse(val);
            console.log(val.success);
        }
        catch( e ) {
            console.error("invalid json in file");
        }
    }
});
