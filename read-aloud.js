/* Optional, browser-provided text-to-speech controls for the active EDI in Action page.
   No voice, recording, server, or user account is supplied by this website. */
(() => {
  'use strict';
  const start = document.getElementById('ra-start');
  const pause = document.getElementById('ra-pause');
  const resume = document.getElementById('ra-resume');
  const stop = document.getElementById('ra-stop');
  const speed = document.getElementById('ra-speed');
  const status = document.getElementById('ra-status');
  if (!(start && pause && resume && stop && speed && status)) return;
  const supported = typeof window.speechSynthesis !== 'undefined' &&
                    typeof window.SpeechSynthesisUtterance === 'function';
  const engine = supported ? window.speechSynthesis : null;
  let parts = [];
  let nextIndex = 0;
  let generation = 0;
  let active = false;
  let paused = false;

  const announce = (message) => { status.textContent = message; };
  function refreshControls() {
    pause.hidden = paused;
    resume.hidden = !paused;
    pause.disabled = !active;
    resume.disabled = !active;
    stop.disabled = !active;
    start.setAttribute('aria-label', active ? 'Restart listening to this page' : 'Listen to this page');
    start.textContent = active ? 'Restart listening' : 'Listen to this page';
  }
  function speechText() {
    const main = document.getElementById('main');
    if (!main) return [];
    const nodes = Array.from(main.querySelectorAll('h1,h2,h3,h4,h5,p,li,summary,figcaption,blockquote,label'));
    const lines = [];
    nodes.forEach(el => {
      if (el.closest('[hidden],[aria-hidden="true"],script,style,nav')) return;
      if (!el.getClientRects().length) return;
      // A list item containing child paragraphs would otherwise read twice.
      if (el.matches('li') && el.querySelector('p,ul,ol,li')) return;
      // Browser innerText can join words separated by a visual <br>.
      let value;
      if (el.querySelector('br')) {
        const copy = el.cloneNode(true);
        copy.querySelectorAll('br').forEach(br => br.replaceWith(document.createTextNode(' ')));
        value = copy.textContent || '';
      } else {
        value = el.innerText || '';
      }
      value = value.replace(/\s+/g, ' ').trim();
      if (!value || value.length < 2) return;
      // Avoid identical adjacent lines in nested content.
      if (lines[lines.length - 1] !== value) lines.push(value);
    });
    if (lines.length === 0) {
      const fallback = (main.innerText || '').replace(/\s+/g, ' ').trim();
      if (fallback) lines.push(fallback);
    }
    // Short utterances improve responsiveness across browser speech engines.
    const chunks = [];
    lines.forEach(line => {
      const sentences = line.match(/[^.!?;]+[.!?;]+|[^.!?;]+$/g) || [line];
      let text = '';
      sentences.forEach(sentence => {
        sentence = sentence.trim();
        if (!sentence) return;
        if (text.length + sentence.length > 190 && text) {
          chunks.push(text.trim()); text = '';
        }
        while (sentence.length > 190) {
          const cut = sentence.lastIndexOf(' ', 190);
          const length = cut > 70 ? cut : 190;
          if (text) { chunks.push(text.trim()); text = ''; }
          chunks.push(sentence.slice(0, length).trim());
          sentence = sentence.slice(length).trim();
        }
        if (sentence) text += (text ? ' ' : '') + sentence;
      });
      if (text) chunks.push(text.trim());
    });
    return chunks.filter(Boolean);
  }
  function finish(message) {
    active = false; paused = false; parts = []; nextIndex = 0;
    refreshControls();
    announce(message);
  }
  function stopReading(message = 'Reading stopped.') {
    generation += 1;
    if (engine) { try { engine.cancel(); } catch (_) {} }
    finish(message);
  }
  function chooseVoice() {
    try {
      const voices = engine.getVoices();
      return voices.find(v => /^en\b/i.test(v.lang) && v.localService) ||
             voices.find(v => /^en\b/i.test(v.lang)) || null;
    } catch (_) { return null; }
  }
  function readNext(token) {
    if (token !== generation || !active || paused) return;
    if (nextIndex >= parts.length) {
      finish('Finished reading this page.'); return;
    }
    const phrase = parts[nextIndex++];
    const utterance = new SpeechSynthesisUtterance(phrase);
    utterance.lang = document.documentElement.lang || 'en';
    utterance.rate = Number(speed.value) || 1;
    const voice = chooseVoice();
    if (voice) utterance.voice = voice;
    utterance.onend = () => { if (token === generation) readNext(token); };
    utterance.onerror = (event) => {
      if (token !== generation) return;
      if (event.error === 'canceled' || event.error === 'interrupted') return;
      stopReading('Read aloud could not continue on this device. Please try your browser’s Read aloud feature or a screen reader.');
    };
    try { engine.speak(utterance); }
    catch (_) { stopReading('The browser could not play the narration. Try its built-in Read aloud feature or a screen reader.'); }
  }
  function begin() {
    if (!supported) return;
    stopReading('');
    parts = speechText(); nextIndex = 0;
    if (!parts.length) { announce('There is no visible page text to read.'); return; }
    const token = generation;
    active = true; paused = false; refreshControls();
    announce('Reading this page aloud. Use Pause or Stop whenever you choose.');
    readNext(token);
  }
  if (!supported) {
    start.disabled = true; speed.disabled = true;
    announce('Read aloud is not supported in this browser. Try Microsoft Edge Read aloud, NVDA, VoiceOver, or another screen reader.');
    const hint = document.getElementById('ra-hint');
    if (hint) hint.textContent = 'This browser does not provide speech synthesis. Use your browser’s Read aloud feature or a screen reader.';
  }
  start.addEventListener('click', begin);
  pause.addEventListener('click', () => {
    if (!active || paused || !engine) return;
    try { engine.pause(); paused = true; refreshControls(); announce('Reading paused.'); }
    catch (_) { stopReading('Unable to pause narration.'); }
  });
  resume.addEventListener('click', () => {
    if (!active || !paused || !engine) return;
    try { engine.resume(); paused = false; refreshControls(); announce('Reading resumed.'); }
    catch (_) { stopReading('Unable to resume narration.'); }
  });
  stop.addEventListener('click', () => stopReading());
  speed.addEventListener('change', () => {
    if (active) announce('Reading speed changed. It takes effect on the next passage.');
  });
  // Site uses hash routes. Do not let audio continue into a new activity.
  window.addEventListener('hashchange', () => { if (active) stopReading('Reading stopped because you opened another page.'); });
  window.addEventListener('pagehide', () => { if (active) stopReading(''); });
  refreshControls();
})();
