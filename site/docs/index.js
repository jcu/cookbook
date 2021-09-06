
(function() {
  VERSION = "3.0.0"; // Release Version of the Docs
  const [docsVersionMajor, docsVersionMinor, docsVersionPatch] = VERSION.split('.');
  integrityTemplate = integrity => `<span class="na">integrity</span><span class="o">=</span><span class="s">&#34;${integrity}&#34;</span> `;

  const cssUrl = document.getElementById("css-url");
  const fontUrl = document.getElementById("font-url");
  const bsJsUrl = document.getElementById("bootstrap-js-url");
  const popperJsUrl = document.getElementById("popper-js-url");
  const mdiUrl = document.getElementById("mdi-css-url");

  const cssHash = document.getElementById("css-integrity-hash");
  const fontHash = document.getElementById("font-integrity-hash");
  const bsJsHash = document.getElementById("bootstrap-js-integrity-hash");
  const popperJsHash = document.getElementById("popper-js-integrity-hash");
  const mdiHash = document.getElementById("mdi-css-integrity-hash");

  const npmPkg = document.getElementById("npm-pkg-name");
  const yarnPkg = document.getElementById("yarn-pkg-name");


  fetch('https://cdn.jcu.edu.au/cookbook/latest/version.txt').then(r => r.text().then(version => {

    // Check if we are not the latest release
    if (version) {
      version = version.substring(0, version.length - 1); // Remove new Line
      const [currentVersionMajor, currentVersionMinor, currentVersionPatch] = version.split('.');

      // See if we are out of date
      // The comparison will be against two strings that have number content. Should still work..
      // can always parseInt() if need be
      if (docsVersionMajor < currentVersionMajor) {
        const banner = document.getElementById('out-of-date-banner');
        banner.innerHTML = `<a href="/docs/${currentVersionMajor}.${currentVersionMinor}/"><div class="alert alert-warning text-center" role="alert">Version ${version} of CookBook has been released!</div></a>`

        npmPkg.innerHTML += `@^${VERSION}`
        yarnPkg.innerHTML += `@^${VERSION}`
      }
    }
    else console.error("Failed to get Latest version of CookBook");

    // Update Urls to latest (maybe Not)
    cssUrl.innerHTML = `https://cdn.jcu.edu.au/cookbook/${VERSION}/css/cookbook.min.css`
    fontUrl.innerHTML = `https://cdn.jcu.edu.au/cookbook/${VERSION}/css/fonts.min.css`
    mdiUrl.innerHTML = `https://cdn.jcu.edu.au/cookbook/${VERSION}/css/materialdesignicons.min.css`
    bsJsUrl.innerHTML = `https://cdn.jcu.edu.au/cookbook/${VERSION}/js/bootstrap.min.js`
    popperJsUrl.innerHTML = `https://cdn.jcu.edu.au/cookbook/${VERSION}/js/popper.min.js`

    // Update Integrity hashes
    fetch(`${cssUrl.innerHTML}.hash.txt`).then(r => r.text().then(hash => cssHash.innerHTML = integrityTemplate(hash))).catch(e => console.error("Failed to get Integrity Hash for cookbook.min.css"));
    fetch(`${fontUrl.innerHTML}.hash.txt`).then(r => r.text().then(hash => fontHash.innerHTML = integrityTemplate(hash))).catch(e => console.error("Failed to get Integrity Hash for fonts.min.js"));
    fetch(`${mdiUrl.innerHTML}.hash.txt`).then(r => r.text().then(hash => mdiHash.innerHTML = integrityTemplate(hash))).catch(e => console.error("Failed to get Integrity Hash for materialdesignicons.min.js"));
    fetch(`${bsJsUrl.innerHTML}.hash.txt`).then(r => r.text().then(hash => bsJsHash.innerHTML = integrityTemplate(hash))).catch(e => console.error("Failed to get Integrity Hash for bootstrap.min.js"));
    fetch(`${popperJsUrl.innerHTML}.hash.txt`).then(r => r.text().then(hash => popperJsHash.innerHTML = integrityTemplate(hash))).catch(e => console.error("Failed to get Integrity Hash for bootstrap.min.js"));

  })).catch(e => console.error("Failed to get Version:\n" + e));
})()
