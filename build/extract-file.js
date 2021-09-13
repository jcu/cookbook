const { readFileSync, writeFileSync, mkdirSync } = require(`fs`)
const { basename, join, dirname,  } = require("path")
const glob = require("glob")
const path = require("path")

/*

  Extracts Files that are in Yarn PnP Packages
  Arguments (Separated by Colons): <Package Name>:<Asset Path Inside Package>:<Destination Directory of File(s)>

*/


const args = process.argv.slice(2)
for(const extract of args) {
  const [package, assetPath, destinationDir] = extract.split(':')
  const packageJson = require.resolve(join(package, 'package.json'))

  if(packageJson) {
    const basePackageDir = dirname(packageJson)
    const resolvedAsset = join(basePackageDir, assetPath)
    glob(resolvedAsset, (err, files) => {
      if(err) throw err
      for(const file of files) {
        const fileName = basename(file)
        // Retain original Directory Output for Directory Glob Patterns
        const isRecursiveWildCarded = assetPath.includes("**")
        const saveFilePath = isRecursiveWildCarded ? path.relative(basePackageDir, file) : basename(file)
        const fileDirectory = join(destinationDir, dirname(saveFilePath))
        const outputLocation = isRecursiveWildCarded ? join(fileDirectory, basename(file)) : join(fileDirectory, saveFilePath)
        mkdirSync(fileDirectory, { recursive: true })
        writeFileSync(outputLocation, readFileSync(file))
        console.log(`Extracted PnP File: ${fileName} -> ${outputLocation}`)
      }
    })
  }
}

