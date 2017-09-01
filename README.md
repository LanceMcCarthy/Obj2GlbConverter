# Obj2GlbConverter
Create a glb for Windows Mixed Reality 3D Icons using an implementation of AnalyticalGraphicsInc's obj2gltf library.

![Screenshot of GLB result](https://github.com/LanceMcCarthy/Obj2GlbConverter/blob/master/screenshots/Result.png)

## Steps to recreate and usage

Prerequisite: You need to have Node.js installed https://nodejs.org/en/ 

1. Open Command Prompt (or Nodejs Command Prompt) in the folder you want to build the app (e.g. navigate to a newly created folder in File Explorer and enter "cmd" in the address bar)
2. Enter ```npm init``` and follow through the 10 app initialization prompts (hit enter for each step to use the defaults)
3. Once you're back at the prompt, enter ```npm install --save obj2gltf``` to intall the https://github.com/AnalyticalGraphicsInc/obj2gltf library to that app
4. Add a new file to the folder and name it `index.js` (you can use File Explorer for this, right click > New > Text Document)
5. Open `index.js` in your preferred code editor
6. Enter the following script into index.js 

```
// ---- Dependencies ---- //
// Converter library, see here for more https://github.com/AnalyticalGraphicsInc/obj2gltf
var obj2gltf = require('obj2gltf');

// Imported so that we can save the output buffer to a file. See here for more: https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback
var fs = require('fs');


// ---- Main Logic ---- //

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
```

7. Place the `obj` file you want to convert in the same folder as `index.js`
8. Adjust the values of `inputFile` to be the name of your file and `outputFile` to be the `glb` version, then save and close `index.js`. 
9. Now, you're ready to convert! Back in the command window, enter the following command: ```node index.js```, that will run your script, which converts the model and saves it to the file.


**Done!** 
Find the file now saved in the same folder as the  Go ahead and open it in View 3D to see the result


