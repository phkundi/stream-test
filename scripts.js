// Get Content Identifier
function contentId(src) {
  let l = document.createElement("a");
  l.href = src;
  console.log(l.pathname);
  return l.pathname;
}

let options = {
  html5: {
    // Recommended values from documentation
    hlsjsConfig: {
      maxBufferSize: 0,
      maxBufferLength: 30,
      liveSyncDuration: 30,
      liveMaxLatencyDuration: Infinity
    }
  },
  // Allow P2P interaction between different sources
  dnaConfig: {
    contentIdGenerator: contentId
  }
};

let player = videojs("demoplayer", options);

// Toggle Upload
let toggleUploadBtn = document.getElementById("toggleUpload");
toggleUploadBtn.addEventListener("click", function(e) {
  if (Streamroot.instances[0].dnaUploadAllowed) {
    Streamroot.instances[0].dnaUploadAllowed = false;
    e.target.textContent = "Allow P2P Upload";
  } else {
    Streamroot.instances[0].dnaUploadAllowed = true;
    e.target.textContent = "Disallow P2P Upload";
  }
});
