// ---- Dependecnies ---- //
// Converter library, see here for more https://github.com/AnalyticalGraphicsInc/obj2gltf
var obj2gltf = require('obj2gltf');

// Imported so that we can save the output buffer to a file. See here for more: https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback
var fs = require('fs');


// ---- Main logic ---- //

var inputFile = "Breach.obj";
var outputFile = "Breach.glb";

// Options for the converter library, see here for other flags: https://github.com/AnalyticalGraphicsInc/obj2gltf#usage
var options = {
    binary: true,
    output: outputFile
}

// Calls the converter library with options
obj2gltf(inputFile, options)
    .then(function (glbBuffer) {

        // Write the buffer to a file
        fs.writeFile(outputFile, glbBuffer, (error) => {
            if (error) throw err;

            console.log("Exported successful! " + "Saved as:" + outputFile + ", " + glbBuffer.length + " bytes");
        });
    });