const encounterQuestions = [
  'What do you appreciate about Ms. Taylor’s project design?',
  'What learning opportunities does this project create?',
  'What assumptions might be embedded in these teaching decisions?',
  'What additional information would you like to know about the students and their learning context?'
];
const encounterNotes = ['', '', '', ''];
const encounterState = {step:0, topic:null, kept:new Set(), lens:0, all:false, flipped:new Set(), showAllFeatures:false, keptQuestionsOpen:false};
const encounterSteps = [['Meet the project','Read & investigate'],['Notice the design','Choose what to revisit'],['Change your lens','Consider another perspective'],['Pause & reflect','Gather your thoughts']];
const encounterTopics = [
  ['Food waste','What could learners investigate about food waste at school, and whose perspectives might help them understand what they notice?'],
  ['Energy consumption','What evidence could learners gather about energy use, and which questions could they investigate with the resources available at school?'],
  ['Water conservation','Where might learners begin investigating water use, and what would they need to understand before recommending a change?'],
  ['Plastic waste and recycling','What could learners find out about the materials used and discarded at school, and how might different perspectives shape their recommendations?'],
  ['Sustainable transportation','How could learners compare possible transport changes while considering different journeys, access needs, and practical constraints?']
];
// Each feature: title, teaching choice, reflection question, possible benefit.
const encounterFeatures = [
  [
    "An authentic question",
    "An open-ended driving question grounded in a real-world challenge.",
    "What would make this question meaningful to different learners?",
    "An authentic, open-ended question can connect learning to meaningful challenges and invite learners to investigate different perspectives."
  ],
  [
    "Student choice",
    "Choice of research topics and group members.",
    "What would you want to understand about how each learner experiences this choice?",
    "Student choice can strengthen ownership, connect inquiry with learners’ interests, and create opportunities to work with trusted peers."
  ],
  [
    "Collaborative inquiry",
    "Opportunities to investigate and solve problems together.",
    "How could you find out whose ideas influence the group’s decisions?",
    "Investigating together can bring different perspectives into the inquiry and help learners build understanding through discussion and shared problem-solving."
  ],
  [
    "Everyday connections",
    "Links between classroom learning and students’ everyday lives.",
    "Whose everyday experiences might be recognized, and what might remain unfamiliar?",
    "Connecting inquiry with everyday life can make learning relevant and create opportunities to draw on learners’ experiences and knowledge."
  ],
  [
    "Flexible project formats",
    "Posters, videos, models, and presentations.",
    "What access or support might learners need to make these options meaningful?",
    "Offering different project formats can give learners varied ways to communicate their ideas and make their understanding visible."
  ],
  [
    "Feedback and revision",
    "Regular formative feedback and opportunities to revisit ideas.",
    "How might learners have different opportunities to understand and use the feedback?",
    "Feedback and opportunities for revision can help learners clarify their thinking, recognize progress, and strengthen their work over time."
  ],
  [
    "An authentic audience",
    "Sharing recommendations with the school community.",
    "How could learners participate in the showcase in ways that make their thinking visible?",
    "Sharing recommendations with the school community can give communication a clear purpose and help learners connect inquiry with possible action."
  ],
  [
    "Group and individual learning",
    "Group assessment alongside individual reflection.",
    "What evidence could help you recognize both individual learning and shared contributions?",
    "Combining group assessment with individual reflection can recognize collective achievement while inviting learners to examine their own learning and contributions."
  ]
];
const encounterLenses = [
  ['Diversity','Recognizing and valuing learners’ diverse backgrounds, experiences, perspectives, strengths, and circumstances.','Which experiences and perspectives could inform this project, and how could learners choose whether and how to contribute them?'],
  ['Equity','Identifying and addressing barriers to accessing resources, support, and meaningful learning opportunities.','What resources, time, or support might different learners need to investigate their question and demonstrate their learning?'],
  ['Inclusion','Creating conditions in which every learner can contribute, influence decisions, participate meaningfully, and develop a sense of belonging.','How could learners influence group decisions and have their contributions recognized through different ways of participating?']
];

function encounterFlashcards(){return `<section class="ei-foundations" aria-labelledby="edi-foundations-heading"><div class="ei-foundations-heading"><div><p class="eyebrow">Before Encounter</p><h2 id="edi-foundations-heading">Three interconnected EDI dimensions</h2><p>The case is guided by these three dimensions. Open each card to reveal its meaning, or view all three together.</p></div><button type="button" class="ei-view-toggle" id="edi-definitions-toggle" aria-controls="edi-definition-0 edi-definition-1 edi-definition-2">Show all definitions</button></div><div class="ei-flashcards">${encounterLenses.map((lens,i)=>`<details class="ei-flashcard edi-dimension-${i}" data-edi-card><summary><span class="ei-flashcard-title">${lens[0]}</span><span class="ei-flashcard-cue"><span class="ei-cue-open">Reveal definition</span><span class="ei-cue-close">Hide definition</span><span class="ei-flashcard-plus" aria-hidden="true">+</span></span></summary><div class="ei-flashcard-definition" id="edi-definition-${i}"><p>${lens[1]}</p></div></details>`).join('')}</div><div class="ei-foundations-footer"><p>These dimensions work together. Keep all three in mind as you reflect on the project.</p><button class="btn secondary" type="button" id="edi-begin-encounter">Continue to Encounter</button></div></section>`;}

function encounter(){return `<div class="shell encounter-shell interactive-encounter">
  <div class="encounter-breadcrumb"><a href="#explore">Explore teaching designs</a><span aria-hidden="true">/</span><span>Case 1</span></div>
  <header class="ei-intro"><div><p class="eyebrow">Case 1 · A fictional classroom scenario</p><h1>A Project for <em>Everyone?</em></h1><p class="ei-subtitle">Rethinking Equity, Diversity, and Inclusion in Project-Based Learning</p><p>Project-based learning can create opportunities for agency, collaboration, creativity, and authentic learning. Does greater freedom and flexibility necessarily make learning more equitable and inclusive?</p></div><aside><span class="encounter-label">Begin with curiosity</span><p>Meet the project, notice its teaching choices, and gather questions to carry forward.</p><p class="ei-small">Untimed and ungraded. There is no single correct teaching choice. Every section is optional and open to revisit.</p><p class="ei-credit">Case developed by (Avery) Yan Gao</p></aside></header>
  ${case1Journey('encounter')}
  ${encounterFlashcards()}
  <div class="ei-route" id="encounter-start"><div class="ei-route-intro"><h2 id="encounter-start-heading" tabindex="-1">Encounter</h2><span>Choose any section, or move through them in order.</span></div><button class="ei-view-toggle" type="button" id="encounter-view-all" aria-pressed="${encounterState.all}">${encounterState.all?'Use guided view':'Read all sections'}</button></div>
  <nav class="ei-step-nav" aria-label="Encounter sections">${encounterSteps.map((s,i)=>`<button type="button" data-encounter-step="${i}"${!encounterState.all&&encounterState.step===i?' aria-current="step"':''}><span class="ei-step-number" aria-hidden="true">${i+1}</span><span><strong>${s[0]}</strong><small>${s[1]}</small></span></button>`).join('')}</nav>
  <div id="encounter-panels">${encounterPanelMarkup()}</div><div class="ei-pager" id="encounter-pager">${encounterPager()}</div>
  <aside class="ei-next"><p><strong>Next: Look beneath the surface</strong><br>Explore four moments in Ms. Taylor’s project and compare the possibilities behind each teaching decision.</p><a class="btn" href="#case1-explore">Continue to Explore</a></aside>
</div>`;}
function encounterPanelMarkup(){return encounterState.all?[0,1,2,3].map(encounterPanel).join(''):encounterPanel(encounterState.step);}
function encounterPanel(step){return `<section class="ei-panel" aria-labelledby="ei-heading-${step}" data-encounter-panel="${step}">${[encounterMeet,encounterDesign,encounterLens,encounterReflect][step]()}</section>`;}
function encounterPager(){if(encounterState.all)return '<p class="ei-small">All four sections are shown. You can return to guided view at any time.</p>';return `<span class="ei-page-position">Section ${encounterState.step+1} of 4</span><div>${encounterState.step>0?`<button class="btn secondary" type="button" data-encounter-step="${encounterState.step-1}">Previous section</button>`:''}${encounterState.step<3?`<button class="btn" type="button" data-encounter-step="${encounterState.step+1}">Next: ${encounterSteps[encounterState.step+1][0]}</button>`:'<button class="btn secondary" type="button" data-encounter-step="0">Revisit the project</button>'}</div>`;}

function encounterMeet(){return `<div class="ei-panel-heading"><p class="eyebrow">The classroom context</p><h2 id="ei-heading-0" tabindex="-1">Meet Ms. Taylor.</h2><p>Ms. Taylor is a Grade 7 teacher who believes that students learn best through authentic challenges, collaboration, and ownership of their learning.</p></div>
  <div class="ei-project-card"><div class="ei-project-title"><div><span class="encounter-label">Ms. Taylor’s interdisciplinary project</span><h3>Designing a More<br>Sustainable School</h3></div><dl><div><dt>Grade level</dt><dd>Grade 7</dd></div><div><dt>Duration</dt><dd>Four weeks</dd></div></dl></div><p class="ei-subjects">Science · Social studies · Mathematics · Communication</p><blockquote><span>The driving question</span>How can we make our school more environmentally sustainable?</blockquote>
  <p>Working in small groups, students investigate an environmental issue affecting their school. <strong>Select a possible topic to reveal a question to explore.</strong></p>
  <div class="ei-topic-buttons" role="group" aria-label="Possible environmental topics">${encounterTopics.map((t,i)=>`<button type="button" data-encounter-topic="${i}" aria-pressed="${encounterState.topic===i}">${t[0]}</button>`).join('')}</div>
  <div class="ei-topic-reveal" id="encounter-topic-reveal" aria-live="polite" aria-atomic="true">${encounterTopicMarkup()}</div>
  <div class="ei-project-process"><div><h4>Investigate & recommend</h4><p>Students gather information, examine evidence, consider different perspectives, and develop practical recommendations.</p></div><div><h4>Share with the community</h4><p>At a Sustainability Showcase, students present their findings and proposed solutions to classmates, teachers, and members of the school community.</p></div></div></div>
  <details class="ei-outcomes"><summary>View the five student learning outcomes<span aria-hidden="true">+</span></summary><div><p>By the end of Ms. Taylor’s Grade 7 project, students will be able to:</p><ol><li>Investigate a real-world environmental issue using relevant evidence.</li><li>Consider multiple perspectives when developing a sustainable solution.</li><li>Collaborate with peers to make informed decisions.</li><li>Communicate evidence-based recommendations to an authentic audience.</li><li>Reflect on their individual learning and contributions.</li></ol><p class="ei-small">These outcomes describe the fictional classroom project.</p></div></details>`;}
function encounterTopicMarkup(){if(encounterState.topic===null)return '<p class="ei-reveal-hint">Which topic catches your attention? Choose one above. You can revisit any topic.</p>';const t=encounterTopics[encounterState.topic];return `<span class="encounter-label">A question to explore · ${t[0]}</span><p>${t[1]}</p><span class="ei-small">An optional inquiry prompt for your reflection.</span>`;}

function encounterDesign(){return `<div class="ei-panel-heading"><p class="eyebrow">Key features of the project design</p><h2 id="ei-heading-1" tabindex="-1">What catches your attention?</h2><p>Ms. Taylor’s project appears engaging, student-centred, and thoughtfully designed. Before revealing a card, consider what the teaching choice might make possible and what you would want to know about the learners. Then compare your thinking with a possible benefit and an EDI reflection question.</p></div>
  <div class="ei-feature-toolbar"><p>Explore any card, or read both sides of all eight together.</p><button class="ei-view-toggle ei-feature-view-toggle" type="button" id="encounter-feature-view" aria-pressed="${encounterState.showAllFeatures}" aria-controls="encounter-feature-grid">${encounterState.showAllFeatures?'Use flip cards':'Show all reflections'}</button></div>
  <div class="ei-selection-bar"><p><strong>Keep for reflection</strong> bookmarks a feature; it does not rate it.</p><span id="encounter-kept-count" role="status">${encounterState.kept.size} ${encounterState.kept.size===1?'feature':'features'} kept</span></div>
  <div class="ei-feature-grid${encounterState.showAllFeatures?' is-reading':''}" id="encounter-feature-grid">${encounterFeatures.map(encounterFeatureCard).join('')}</div>
  <p class="ei-small ei-after-grid">These are perspectives to consider, not right or wrong answers. Keep as many or as few features as you wish. Your selections will appear in Pause &amp; reflect and in your download.</p>`;}

function encounterFeatureCard(f,i){
  const flipped=encounterState.flipped.has(i),all=encounterState.showAllFeatures,kept=encounterState.kept.has(i);
  const action=flipped?'Return to teaching choice':'Reveal another perspective';
  return `<article class="ei-feature ei-flip-card${flipped?' is-flipped':''}${kept?' is-kept':''}" data-feature-card="${i}" aria-labelledby="ei-feature-title-${i}">
    <div class="ei-feature-header"><h3 id="ei-feature-title-${i}">${f[0]}</h3><button class="ei-feature-flip" type="button" data-encounter-flip="${i}" aria-label="${action}: ${f[0]}" aria-controls="ei-feature-back-${i}" aria-expanded="${flipped}"${all?' hidden':''}>${action}</button></div>
    <div class="ei-feature-stage"><div class="ei-feature-rotator">
      <div class="ei-feature-face ei-feature-front" id="ei-feature-front-${i}" aria-hidden="${!all&&flipped}"><span class="encounter-label">Teaching choice</span><p>${f[1]}</p></div>
      <div class="ei-feature-face ei-feature-back" id="ei-feature-back-${i}" aria-hidden="${!all&&!flipped}"><div class="ei-feature-benefit"><span class="encounter-label">Possible benefit</span><p>${f[3]}</p></div><div class="ei-feature-reflection"><span class="encounter-label">EDI reflection</span><p>${f[2]}</p></div></div>
    </div></div>
    <div class="ei-feature-footer"><button class="ei-keep" type="button" data-encounter-keep="${i}" aria-pressed="${kept}" aria-label="${kept?'Kept for reflection — remove':'Keep for reflection — add'}: ${f[0]}">${kept?'Kept for reflection':'Keep for reflection'}</button></div>
  </article>`;
}

function refreshEncounterFeatureCard(card,i,animate=false){
  const flipped=encounterState.flipped.has(i),all=encounterState.showAllFeatures;
  card.classList.toggle('is-turning',animate);
  card.classList.toggle('is-flipped',flipped);
  card.querySelector('.ei-feature-front').setAttribute('aria-hidden',String(!all&&flipped));
  card.querySelector('.ei-feature-back').setAttribute('aria-hidden',String(!all&&!flipped));
  const button=card.querySelector('[data-encounter-flip]');
  const action=flipped?'Return to teaching choice':'Reveal another perspective';
  button.hidden=all;
  button.textContent=action;
  button.setAttribute('aria-label',`${action}: ${encounterFeatures[i][0]}`);
  button.setAttribute('aria-expanded',String(flipped));
}

function setEncounterFeatureView(){
  encounterState.showAllFeatures=!encounterState.showAllFeatures;
  const grid=document.getElementById('encounter-feature-grid');
  grid.classList.toggle('is-reading',encounterState.showAllFeatures);
  grid.querySelectorAll('[data-feature-card]').forEach(card=>refreshEncounterFeatureCard(card,Number(card.dataset.featureCard)));
  const button=document.getElementById('encounter-feature-view');
  button.textContent=encounterState.showAllFeatures?'Use flip cards':'Show all reflections';
  button.setAttribute('aria-pressed',String(encounterState.showAllFeatures));
}

function encounterLens(){return `<div class="ei-panel-heading"><p class="eyebrow">Three connected EDI perspectives</p><h2 id="ei-heading-2" tabindex="-1">Look again through another lens.</h2><p>Select a perspective and consider what it brings into focus. Diversity, equity, and inclusion are connected; you can move between all three.</p></div><div class="ei-lens-buttons" role="group" aria-label="EDI perspectives">${encounterLenses.map((l,i)=>`<button type="button" data-encounter-lens="${i}" aria-pressed="${encounterState.lens===i}"><span class="ei-lens-mark" aria-hidden="true"></span>${l[0]}</button>`).join('')}</div><div id="encounter-lens-reveal" class="ei-lens-reveal lens-${encounterState.lens}" aria-live="polite" aria-atomic="true">${encounterLensMarkup()}</div><div class="ei-kept-recap"><span class="encounter-label">Features you chose to revisit</span><div data-kept-summary>${encounterKeptMarkup()}</div><p class="ei-small">How might this perspective shape the questions you ask about these teaching choices?</p></div>`;}
function encounterLensMarkup(){const l=encounterLenses[encounterState.lens];return `<div class="ei-lens-definition"><span class="encounter-label">${l[0]}</span><h3>${['Whose experiences are recognized?','What makes access meaningful?','Who can influence and contribute?'][encounterState.lens]}</h3><p>${l[1]}</p></div><div class="ei-lens-question"><span class="encounter-label">Consider this project</span><p>${l[2]}</p></div>`;}
function encounterKeptMarkup(){if(!encounterState.kept.size)return '<p class="ei-no-selection">You have not kept any features. You can reflect on the whole project or return to Notice the design.</p>';return `<ul class="ei-kept-list">${[...encounterState.kept].sort((a,b)=>a-b).map(i=>`<li>${encounterFeatures[i][0]}</li>`).join('')}</ul>`;}
function encounterKeptQuestionsMarkup(){return [...encounterState.kept].sort((a,b)=>a-b).map(i=>`<li><h3>${encounterFeatures[i][0]}</h3><p>${encounterFeatures[i][2]}</p></li>`).join('');}
function encounterReflect(){return `<div class="ei-panel-heading"><p class="eyebrow">Initial reflection</p><h2 id="ei-heading-3" tabindex="-1">What will you carry forward?</h2><p>Reflect privately or discuss with colleagues. Use any of these prompts, and add a note if you wish. There is nothing to submit.</p></div>
  <div class="ei-reflection-context"><div><span class="encounter-label">Features you chose to revisit</span><div data-kept-summary>${encounterKeptMarkup()}</div></div><div><span class="encounter-label">Your most recent topic</span><p id="encounter-topic-summary">${encounterState.topic===null?'No topic selected.':encounterTopics[encounterState.topic][0]}</p></div></div>
  <details class="ei-outcomes ei-kept-questions" id="encounter-kept-questions"${encounterState.kept.size?'':' hidden'}${encounterState.keptQuestionsOpen?' open':''}><summary>Revisit the questions you kept<span aria-hidden="true">+</span></summary><div><p>Use any of these questions to support your notes below.</p><ul class="ei-kept-question-list" data-kept-questions>${encounterKeptQuestionsMarkup()}</ul></div></details>
  <div class="ei-reflection-save" data-encounter-download-area><div class="ei-save-main"><div class="ei-save-copy"><h3>Keep your notes before you leave.</h3><p id="encounter-note-help">Your selections and notes stay in this open page. Download or copy them before refreshing or closing; they are not submitted or automatically saved.</p></div><button class="btn secondary" id="download-encounter-notes-top" data-download-encounter type="button">Download my reflections</button></div><p id="encounter-download-status-top" data-encounter-download-status role="status" class="ei-download-status"></p></div>
  <div class="ei-reflection-fields">${encounterQuestions.map((q,i)=>`<div class="ei-reflection-field"><label for="encounter-note-${i}">${q}</label><span class="ei-optional">Optional private note</span><textarea id="encounter-note-${i}" data-encounter-note="${i}" rows="3" aria-describedby="encounter-note-help" placeholder="A thought, a possibility, or something to find out…">${esc(encounterNotes[i])}</textarea></div>`).join('')}</div>
  <div data-encounter-download-area><div class="ei-reflection-actions"><p>Keep a copy of your notes and the questions you bookmarked.</p><button class="btn" id="download-encounter-notes" data-download-encounter type="button">Download my reflections</button></div><p id="encounter-download-status" data-encounter-download-status role="status" class="ei-download-status"></p></div>`;}

function showEncounterStep(step,all=false){encounterState.step=step;encounterState.all=all;const panels=document.getElementById('encounter-panels');if(!panels)return;panels.innerHTML=encounterPanelMarkup();document.getElementById('encounter-pager').innerHTML=encounterPager();document.querySelectorAll('.ei-step-nav [data-encounter-step]').forEach(b=>{if(!all&&Number(b.dataset.encounterStep)===step)b.setAttribute('aria-current','step');else b.removeAttribute('aria-current');});const toggle=document.getElementById('encounter-view-all');toggle.textContent=all?'Use guided view':'Read all sections';toggle.setAttribute('aria-pressed',String(all));document.getElementById('ei-heading-'+(all?0:step)).focus({preventScroll:true});document.querySelector('.ei-step-nav').scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}
function refreshEncounterSummaries(){document.querySelectorAll('[data-kept-summary]').forEach(el=>el.innerHTML=encounterKeptMarkup());const questions=document.getElementById('encounter-kept-questions');if(questions){questions.hidden=!encounterState.kept.size;questions.querySelector('[data-kept-questions]').innerHTML=encounterKeptQuestionsMarkup();}const count=document.getElementById('encounter-kept-count');if(count)count.textContent=`${encounterState.kept.size} ${encounterState.kept.size===1?'feature':'features'} kept`;const topic=document.getElementById('encounter-topic-summary');if(topic)topic.textContent=encounterState.topic===null?'No topic selected.':encounterTopics[encounterState.topic][0];}
document.addEventListener('input',event=>{const field=event.target.closest('[data-encounter-note]');if(field)encounterNotes[Number(field.dataset.encounterNote)]=field.value;});
document.addEventListener('toggle',event=>{if(event.target.matches('#encounter-kept-questions')){encounterState.keptQuestionsOpen=event.target.open;return;}if(!event.target.matches('[data-edi-card]'))return;const cards=[...document.querySelectorAll('[data-edi-card]')];const toggle=document.getElementById('edi-definitions-toggle');if(toggle)toggle.textContent=cards.every(card=>card.open)?'Hide all definitions':'Show all definitions';},true);
document.addEventListener('click',event=>{
  if(event.target.closest('#edi-definitions-toggle')){const cards=[...document.querySelectorAll('[data-edi-card]')];const open=!cards.every(card=>card.open);cards.forEach(card=>card.open=open);return;}
  if(event.target.closest('#edi-begin-encounter')){document.getElementById('encounter-start-heading').focus({preventScroll:true});document.getElementById('encounter-start').scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});return;}
  const step=event.target.closest('[data-encounter-step]');if(step){showEncounterStep(Number(step.dataset.encounterStep));return;}
  if(event.target.closest('#encounter-view-all')){showEncounterStep(encounterState.step,!encounterState.all);return;}
  const topic=event.target.closest('[data-encounter-topic]');if(topic){encounterState.topic=Number(topic.dataset.encounterTopic);document.querySelectorAll('[data-encounter-topic]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.encounterTopic)===encounterState.topic)));document.getElementById('encounter-topic-reveal').innerHTML=encounterTopicMarkup();refreshEncounterSummaries();return;}
  if(event.target.closest('#encounter-feature-view')){setEncounterFeatureView();return;}
  const flip=event.target.closest('[data-encounter-flip]');if(flip){const i=Number(flip.dataset.encounterFlip);if(encounterState.flipped.has(i))encounterState.flipped.delete(i);else encounterState.flipped.add(i);refreshEncounterFeatureCard(flip.closest('[data-feature-card]'),i,true);return;}
  const keep=event.target.closest('[data-encounter-keep]');if(keep){const i=Number(keep.dataset.encounterKeep);if(encounterState.kept.has(i))encounterState.kept.delete(i);else encounterState.kept.add(i);const selected=encounterState.kept.has(i);keep.setAttribute('aria-pressed',String(selected));keep.setAttribute('aria-label',`${selected?'Kept for reflection — remove':'Keep for reflection — add'}: ${encounterFeatures[i][0]}`);keep.textContent=selected?'Kept for reflection':'Keep for reflection';keep.closest('.ei-feature').classList.toggle('is-kept',selected);refreshEncounterSummaries();return;}
  const lens=event.target.closest('[data-encounter-lens]');if(lens){encounterState.lens=Number(lens.dataset.encounterLens);document.querySelectorAll('[data-encounter-lens]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.encounterLens)===encounterState.lens)));const panel=document.getElementById('encounter-lens-reveal');panel.className=`ei-lens-reveal lens-${encounterState.lens}`;panel.innerHTML=encounterLensMarkup();return;}
  const download=event.target.closest('[data-download-encounter]');if(download){const selected=[...encounterState.kept].sort((a,b)=>a-b);const text='EDI IN ACTION\nA Project for Everyone? — My Encounter reflections\n\nMost recent topic\n'+(encounterState.topic===null?'No topic selected.':encounterTopics[encounterState.topic][0]+'\nQuestion to explore: '+encounterTopics[encounterState.topic][1])+'\n\nFeatures I chose to revisit\n'+(selected.length?selected.map(i=>'- '+encounterFeatures[i][0]+'\n  Teaching choice: '+encounterFeatures[i][1]+'\n  Possible benefit: '+encounterFeatures[i][3]+'\n  Question to carry forward: '+encounterFeatures[i][2]).join('\n'):'No features kept.')+'\n\nCurrent EDI lens (Diversity is shown by default)\n'+encounterLenses[encounterState.lens][0]+'\n'+encounterLenses[encounterState.lens][2]+'\n\n'+encounterQuestions.map((q,i)=>q+'\n'+(encounterNotes[i]||'No note added.')).join('\n\n')+'\n\nSelections are prompts for reflection, not ratings or judgments of the teaching design.\n';const url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='EDI-in-Action-Encounter-Reflections.txt';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);const area=download.closest('[data-encounter-download-area]');document.querySelectorAll('[data-encounter-download-status]').forEach(status=>status.textContent=status.closest('[data-encounter-download-area]')===area?'Your reflections are ready. Check your browser’s downloads.':'');}
});
