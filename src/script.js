function convert(apiType, format) {
  var youtubeUrlInput = document.getElementById('youtubeUrlInput');
  var youtubeUrl = youtubeUrlInput.value;

  if (!youtubeUrl) {
    alert('Please enter a YouTube video URL.');
    return;
  }

  displayConversionStatus('Converting video, please wait...');

  var apiUrl = 'https://convert2mp3s.com/api/' + apiType + '/' + format;
  var iframe = document.createElement('iframe');
  iframe.src = apiUrl + '?url=' + encodeURIComponent(youtubeUrl);
  iframe.width = '100%';
  iframe.height = '100%';
  iframe.allowtransparency = 'true';
  iframe.scrolling = 'no';
  iframe.style.border = 'none';

  var statusMessage = document.getElementById('statusMessage');
  statusMessage.innerHTML = '';
  statusMessage.appendChild(iframe);
}

function displayConversionStatus(message) {
  var statusMessage = document.getElementById('statusMessage');
  statusMessage.innerHTML = message;
}
