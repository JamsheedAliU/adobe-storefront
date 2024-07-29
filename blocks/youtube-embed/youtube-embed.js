export default function youtubevideo(block) {
  const urlElement = block.querySelector('div');
  if (!urlElement) return;

  const url = urlElement.textContent.trim();

  const videoIdmatch = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  if (!videoIdmatch || !videoIdmatch[1]) return;

  const videoId = videoIdmatch[1];

  const iframe = document.createElement('iframe');
  iframe.src = `https://www.youtube.com/embed/${videoId}`;
  iframe.frameborder = '0';
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
  iframe.width = '100%';
  iframe.height = '500px';
  iframe.allowFullscreen = true;

  block.innerHTML = '';
  block.appendChild(iframe);
}
