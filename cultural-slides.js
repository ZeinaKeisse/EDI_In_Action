const culturalSlideState = { index: 0, expanded: false };
const culturalSlideAsset = index => `assets/cultural-slides/slide-${String(index + 1).padStart(2, '0')}.jpg`;

function culturalSlideTextMarkup(slide) {
  return `${(slide.paragraphs || []).map(paragraph => `<p>${esc(paragraph)}</p>`).join('')}${(slide.links || []).length ? `<div class="cultural-slide-source-links"><h3>Links for this slide</h3>${slide.links.filter(link => /^https?:\/\//.test(link.url)).map(link => sourceLink(esc(link.url), esc(link.label))).join('')}</div>` : ''}`;
}

function hasCulturalSlideVideo(slide) {
  return (slide.links || []).some(link => /^https:\/\/player\.vimeo\.com\/video\/522356808(?:[?#]|$)/.test(link.url));
}

function culturalSlideMediaMarkup(slide) {
  return hasCulturalSlideVideo(slide) ? `<iframe title="FNESC: The Importance of Including Authentic First Peoples Resources in BC Classrooms" src="https://player.vimeo.com/video/522356808?dnt=1&amp;autoplay=1&amp;muted=0&amp;playsinline=1" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen referrerpolicy="strict-origin-when-cross-origin" tabindex="0"></iframe>` : '';
}

function culturalSlideVideoHelpMarkup(slide) {
  return hasCulturalSlideVideo(slide) ? `<p class="cultural-slide-video-instructions">The video attempts to play automatically with sound. If your browser blocks playback or starts it silently, press Play or use the player’s sound control to unmute. You can pause at any time. Changing slides stops playback.</p>${sourceLink('https://www.fnesc.ca/authenticresources/', 'If the video is unavailable, view it on FNESC’s resource page')}` : '';
}

function culturalSlideResourceCard() {
  return `<section class="cultural-slide-resource"><img src="assets/cultural-slides/slide-01.jpg" alt="" width="720" height="540" loading="lazy"><div><p class="eyebrow">Optional presentation</p><h2>Choosing Indigenous Resources: Questions for Reflection</h2><p>Explore Shishona Austin’s presentation, <em>Authentic Indigenous Resources</em>, alongside this activity. View the slides, read the accompanying text, or download a copy.</p><p class="cultural-slide-credit">Presentation by Shishona Austin · ${culturalSlidesData.length} slides</p><a class="btn secondary" href="#culture-slides">View Shishona’s slides</a><p class="cultural-slide-optional-note">You can complete the main activity without viewing the presentation.</p></div></section>`;
}

function culturalSlides() {
  const total = culturalSlidesData.length;
  culturalSlideState.index = Math.min(Math.max(0, culturalSlideState.index), total - 1);
  const index = culturalSlideState.index;
  const slide = culturalSlidesData[index];
  return `<div class="shell cultural-slides-shell${culturalSlideState.expanded ? ' is-expanded' : ''}">
    ${culturalBreadcrumb('Presentation')}
    <header class="cultural-slides-intro"><p class="eyebrow">Cultural representation · Optional presentation</p><h1>Choosing Indigenous Resources: Questions for Reflection</h1><p class="cultural-slide-credit">Presentation by Shishona Austin</p><p>Original presentation: <em>Authentic Indigenous Resources</em>. Explore the slides at your own pace, or read the slide text below. The main cultural representation activity can be completed without viewing this presentation.</p><p>For prompts that invite discussion with a partner, you may reflect independently or explore them with colleagues. Slide 4 loads a Vimeo video automatically and attempts to play with sound.</p></header>
    <section id="cultural-slide-viewer" class="cultural-slide-viewer" aria-label="Shishona Austin’s presentation">
      <div class="cultural-slide-controls"><div class="cultural-slide-step-controls"><button type="button" class="btn secondary" data-cultural-slide-step="-1"${index === 0 ? ' disabled' : ''}>Previous slide</button><p id="cultural-slide-counter" role="status" aria-live="polite" aria-atomic="true">Slide ${index + 1} of ${total}</p><button type="button" class="btn secondary" data-cultural-slide-step="1"${index === total - 1 ? ' disabled' : ''}>Next slide</button></div><div class="cultural-slide-jump"><label for="cultural-slide-select">Choose a slide</label><div class="cultural-slide-select-wrap"><select id="cultural-slide-select">${culturalSlidesData.map((item, i) => `<option value="${i}"${i === index ? ' selected' : ''}>${i + 1}. ${esc(item.title)}</option>`).join('')}</select></div></div><button type="button" id="cultural-slide-expand" class="btn secondary cultural-slide-expand" data-cultural-expand aria-pressed="${culturalSlideState.expanded}" aria-controls="cultural-slide-viewer">${culturalSlideState.expanded ? 'Return to standard view' : 'Expand slideshow'}</button></div>
      <h2 id="cultural-slide-title" class="cultural-slide-title">${esc(slide.title)}</h2>
      <figure class="cultural-slide-figure"><div id="cultural-slide-stage" class="cultural-slide-stage${hasCulturalSlideVideo(slide) ? ' has-video' : ''}"><img id="cultural-slide-image" src="${culturalSlideAsset(index)}" alt="Slide ${index + 1}: ${esc(slide.title)}. The slide text is available below." width="720" height="540"><div id="cultural-slide-media" class="cultural-slide-media"${hasCulturalSlideVideo(slide) ? '' : ' hidden'}>${culturalSlideMediaMarkup(slide)}</div></div></figure>
      <div id="cultural-slide-video-help" class="cultural-slide-video-help">${culturalSlideVideoHelpMarkup(slide)}</div>
      <details class="cultural-slide-text" open><summary>Read this slide’s text</summary><div id="cultural-slide-text-content">${culturalSlideTextMarkup(slide)}</div></details>
      <p class="cultural-slide-viewer-help">Use Previous slide, Next slide, or the slide menu. Choose Expand slideshow for a larger view on this page; Return to standard view restores the original size. You can also press Escape while focus is outside the video. There is no automatic slide advance or time limit. Links within the slide text open separately.</p>
    </section>
    <section class="cultural-slide-downloads" aria-labelledby="cultural-slide-downloads-title"><div><h2 id="cultural-slide-downloads-title">Keep a copy</h2><p>Download the slides as a PDF or keep the accompanying text. Video playback is available in the website’s slideshow; videos are not included in the PDF.</p></div><div class="cultural-slide-download-links"><a class="btn secondary" href="assets/cultural-slides/Authentic_Indigenous_Resources.pdf" download="Authentic_Indigenous_Resources.pdf">Download PDF</a><a class="text-link" href="assets/cultural-slides/Authentic_Indigenous_Resources.txt" download="Authentic_Indigenous_Resources.txt">Download slide text</a></div></section>
    <details class="cultural-all-slide-text"><summary>Read all slide text</summary>${culturalSlidesData.map((item, i) => `<section><h2>Slide ${i + 1}: ${esc(item.title)}</h2>${culturalSlideTextMarkup(item)}</section>`).join('')}</details>
    <div class="cultural-slides-return"><a class="btn" href="#culture-explore">Continue to the resource review</a><a class="text-link" href="#culture">Return to the scenario</a><a class="text-link" href="#toolkit">Explore the EDI Toolkit</a></div>
  </div>`;
}

function setCulturalSlide(nextIndex) {
  const index = Math.min(Math.max(0, nextIndex), culturalSlidesData.length - 1);
  const image = document.querySelector('#cultural-slide-image');
  if (!image) return;
  if (index === culturalSlideState.index) return;
  culturalSlideState.index = index;
  const slide = culturalSlidesData[index];
  const media = document.querySelector('#cultural-slide-media');
  media.replaceChildren();
  image.src = culturalSlideAsset(index);
  image.alt = `Slide ${index + 1}: ${slide.title}. The slide text is available below.`;
  document.querySelector('#cultural-slide-title').textContent = slide.title;
  document.querySelector('#cultural-slide-stage').classList.toggle('has-video', hasCulturalSlideVideo(slide));
  media.hidden = !hasCulturalSlideVideo(slide);
  media.innerHTML = culturalSlideMediaMarkup(slide);
  document.querySelector('#cultural-slide-video-help').innerHTML = culturalSlideVideoHelpMarkup(slide);
  document.querySelector('#cultural-slide-text-content').innerHTML = culturalSlideTextMarkup(slide);
  document.querySelector('#cultural-slide-select').value = String(index);
  document.querySelector('[data-cultural-slide-step="-1"]').disabled = index === 0;
  document.querySelector('[data-cultural-slide-step="1"]').disabled = index === culturalSlidesData.length - 1;
  document.querySelector('#cultural-slide-counter').textContent = `Slide ${index + 1} of ${culturalSlidesData.length}`;
}

function setCulturalSlideExpanded(expanded) {
  const shell = document.querySelector('.cultural-slides-shell');
  const button = document.querySelector('#cultural-slide-expand');
  if (!shell || !button) return;
  culturalSlideState.expanded = expanded;
  shell.classList.toggle('is-expanded', expanded);
  button.setAttribute('aria-pressed', String(expanded));
  button.textContent = expanded ? 'Return to standard view' : 'Expand slideshow';
  document.querySelector('.cultural-slide-controls').scrollIntoView({ block: 'start', behavior: 'instant' });
}

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && culturalSlideState.expanded && document.querySelector('.cultural-slides-shell')) {
    setCulturalSlideExpanded(false);
    document.querySelector('#cultural-slide-expand').focus({ preventScroll: true });
  }
});

document.addEventListener('click', event => {
  if (event.target.closest('[data-cultural-expand]')) {
    setCulturalSlideExpanded(!culturalSlideState.expanded);
    return;
  }
  const button = event.target.closest('[data-cultural-slide-step]');
  if (button) setCulturalSlide(culturalSlideState.index + Number(button.dataset.culturalSlideStep));
});

document.addEventListener('change', event => {
  if (event.target.id === 'cultural-slide-select') setCulturalSlide(Number(event.target.value));
});
