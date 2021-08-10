const sass = require('sass')
const path = require('path')
const fs = require('fs')

const sassify = (options) => {
  const outputDir = path.dirname(options.outputFile)
  if(!fs.existsSync(outputDir))
    fs.mkdirSync(outputDir, { recursive: true })
  sass.render({
    // Settings Copied from old package.json
    // sass --style expanded --source-map --load-path=node_modules --embed-sources --no-error-css src/scss/fonts.scss dist/css/fonts.css
    file: options.inputFile,
    importer: (url) => {
      return (
        url.startsWith('~') ?
          { file: path.join(process.cwd(), "node_modules", url.replace('~', '')) } : null
      );
    },
    outFile: options.outputFile,
    outputStyle: options.outputStyle,
    sourceMap: options.sourceMap,
    sourceMapEmbed: options.sourceMapEmbed,
  }, (error, result) => {
    if (error)
      throw error
    fs.writeFile(options.outputFile, result.css, (err) => {
      if (err) throw err
      console.log(`Successfully compiled: ${options.inputFile} -> ${options.outputFile}`)
    })
    if (result.map) {
      const outputMap = `${options.outputFile}.map`
      fs.writeFile(outputMap, result.map, (err) => {
        if (err) throw err
        console.log(`Successfully create map: ${outputMap}`)
      })
    }
  }
  );
}

const args = process.argv
// Example Args -> node ./src/sassCompiler in-File-Name:out-File-Name
//                 [0]         [1]                    [2]
const [inputFile, outputFile] = args[2].split(':')
console.log(`Input: ${inputFile}`)
console.log(`Output: ${outputFile}`)

sassify({
  inputFile: inputFile,
  outputFile: outputFile,
  outputStyle: 'expanded',
  sourceMap: true,
  sourceMapEmbed: true,
})
