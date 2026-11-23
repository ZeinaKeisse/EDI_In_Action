const culturalToolkitEntries = [
  {
    id: 'voices', title: 'Authentic Indigenous voices',
    explanation: 'Look for the people and perspectives involved in creating the resource.',
    question: 'Ask who authored or meaningfully informed the resource and whose knowledge is centered.',
    citation: 'Chrona, 2022, pp. 179–180',
    source: 'https://luudisk.com/2022/01/14/authentic-indigenous-resources/',
    sourceLabel: 'Jo Chrona: Authentic Indigenous Resources'
  },
  {
    id: 'representation', title: 'Specific and contemporary representation',
    explanation: 'Consider the specificity and range of the perspectives presented.',
    question: 'Ask whether Nations and communities are named and whether living Indigenous Peoples are represented beyond historical portrayals.',
    citation: 'Chrona, 2022, pp. 179–180',
    source: 'https://luudisk.com/2022/01/14/authentic-indigenous-resources/',
    sourceLabel: 'Read Chrona’s resource-selection guidance'
  },
  {
    id: 'illustrations', title: 'Respectful illustrations',
    explanation: 'Examine visual representation alongside the written content.',
    question: 'Ask whether images are accurate and appropriate to the depicted people, place, and context.',
    citation: 'Chrona, 2022, pp. 179–180',
    source: 'https://luudisk.com/2022/01/14/authentic-indigenous-resources/',
    sourceLabel: 'Read Chrona’s guidance on illustrations'
  },
  {
    id: 'learning', title: 'Learning from Indigenous Peoples',
    explanation: 'Reflect on whose knowledge guides the learning experience.',
    question: 'Ask whether Indigenous voices and knowledge holders are engaged as sources of learning rather than simply as subjects.',
    citation: 'Chrona, 2022; Archibald, 2008',
    source: 'https://www.ubcpress.ca/indigenous-storywork',
    sourceLabel: 'Indigenous Storywork: book information'
  },
  {
    id: 'context', title: 'Context and appropriate use',
    explanation: 'Record what is known about the resource and what still needs checking.',
    question: 'Ask what source, permission, or cultural protocol needs verification.',
    citation: 'Antoine et al., 2018',
    source: 'https://opentextbc.ca/indigenizationcurriculumdevelopers/chapter/appropriate-use-of-indigenous-content/',
    sourceLabel: 'Appropriate Use of Indigenous Content'
  }
];

function culturalToolkitMarkup() {
  return `<section class="cultural-toolkit" aria-labelledby="cultural-toolkit-title">
    <div class="cultural-toolkit-intro"><p class="eyebrow">An Indigenous-resource evaluation pathway</p><h2 id="cultural-toolkit-title">Questions to carry into your resource choices.</h2><p>The toolkit also offers an Indigenous-resource evaluation pathway informed by Chrona (2022): authenticity, representation, and illustrations. Participants may use it to plan a change without submitting identifiable information.</p><p class="cultural-toolkit-note">The entries below are the team’s practical interpretations, not direct quotations or a reproduction of the full rubric. Read the sources and consider their relevance to your teaching context.</p><a class="text-link" href="#culture">Return to the cultural representation activity</a></div>
    <div class="cultural-principle-grid">${culturalToolkitEntries.map(entry=>`<article class="cultural-principle"><h3>${entry.title}</h3><p>${entry.explanation}</p><p class="cultural-principle-question">${entry.question}</p><p class="cultural-principle-citation">${entry.citation}</p><div class="cultural-principle-links">${sourceLink(entry.source,entry.sourceLabel)}<button type="button" class="btn small secondary" data-cultural-principle="${entry.id}" aria-label="Add ${entry.title} prompt to my plan">Use this reflection prompt</button></div></article>`).join('')}</div>
    <p class="cultural-toolkit-note">A prompt added to your plan appears in the optional <strong>Principle and source notes</strong> field. Adapt it after reviewing the source. <em>Pulling Together</em> addresses a postsecondary context; consider its relevance and limits for your own setting.</p>
    ${culturalSlideResourceCard()}
    <section class="cultural-optional-resources" aria-labelledby="cultural-media-title"><div><p class="eyebrow">Optional resources</p><h3 id="cultural-media-title">Continue your learning.</h3><p>You can complete the cultural representation activity using its text alone. These resources offer opportunities for further reflection; viewing a video is optional.</p></div><div class="cultural-resource-list">
      <article><p class="cultural-resource-provider">First Nations Education Steering Committee</p><h4>The Importance of Including Authentic First Peoples Resources in BC Classrooms</h4><p>Visit FNESC’s official resource page for the video and related resource-selection guidance.</p>${sourceLink('https://www.fnesc.ca/authenticresources/','Open FNESC’s authentic resources page')}</article>
      <article><p class="cultural-resource-provider">Open School BC</p><h4>Continuing Our Learning Journey: Indigenous Education in BC</h4><p>Find <strong>Module 3: Authentic Resources</strong> and choose “Watch Module 3 Authentic Resources.” Part 1 focuses on resource selection.</p>${sourceLink('https://www.openschool.bc.ca/indigenoused/','Explore Module 3 and its resources')}${sourceLink('https://www.openschool.bc.ca/indigenoused/pdf/Module3VideoTranscript.pdf','Read the Module 3 transcript (PDF)')}</article>
      <article><p class="cultural-resource-provider">Jo-ann Archibald · Learning with Syeyutsus</p><h4>Indigenous Storywork in Practice</h4><p>An optional extension on storywork and educational practice. This webinar is linked from Archibald’s own resource page.</p>${sourceLink('https://www.youtube.com/watch?v=DyKsCsZnRHI','Open Indigenous Storywork in Practice')}${sourceLink('https://indigenousstorywork.com/resources/','Read the author’s resource context')}</article><article><p class="cultural-resource-provider">University of British Columbia</p><h4>What I Learned in Class Today</h4><p>Explore the video resources alongside the Toolkit’s reflection on participation and tokenization. Consider how the university context relates to your own setting.</p>${sourceLink('https://intheclass.arts.ubc.ca/video/','Explore What I Learned in Class Today')}</article>
    </div></section>
  </section>`;
}

function culturalReferencesMarkup(referenceName) {
  const references={
    archibald: `<li>Archibald, J.-a. (2008). <em>Indigenous storywork: Educating the heart, mind, body, and spirit.</em> UBC Press.<br>${sourceLink('https://www.ubcpress.ca/indigenous-storywork','Book information')}</li>`,
    chrona: `<li>Chrona, J. (2022). <em>Wayi wah! Indigenous pedagogies: An act for reconciliation and anti-racist education.</em> Portage &amp; Main Press.<br>${sourceLink('https://www.portageandmainpress.com/Books/W/Wayi-Wah!-Indigenous-Pedagogies','Book information')}<br>${sourceLink('https://luudisk.com/2022/01/14/authentic-indigenous-resources/','Related resource-selection guidance from the author')}</li>`
  };
  return referenceName ? (references[referenceName]||'') : references.archibald+references.chrona;
}

function toolkitReferencesMarkup() {
  const directLink=(url,label)=>`<div class="toolkit-reference-link"><span>${label}</span>${sourceLink(url,url)}</div>`;
  return `<details class="knowledge toolkit-references" id="references">
    <summary>References, source contributions, and use</summary>
    <div class="toolkit-reference-intro"><p class="toolkit-reference-status">Source selection: for team review</p><p>These sources inform the team’s practical interpretations and reflection prompts. They do not validate the website’s activities or establish that a teaching change will work in every context. Use the notes below to identify what a source contributes and what still requires judgment.</p><p>Links open the original source or its publisher’s page in a new tab. Book links provide publication information; full access may require a library or purchased copy.</p></div>
    <h2 class="toolkit-reference-heading">Core readings and guidance</h2>
    <ol class="toolkit-reference-list">
      <li><p class="toolkit-reference-citation">Antoine, A., Mason, R., Mason, R., Palahicky, S., &amp; Rodriguez de France, C. (2018). <em>Pulling together: A guide for curriculum developers.</em> BCcampus.</p><p><strong>Contribution:</strong> Informs questions about whose knowledge is represented, cultural context, diverse sources, and appropriate resource use.</p><p><strong>Scope and limits:</strong> Written for a postsecondary context. Consider its relevance to K–12 and the specific resource, Nation, community, and learning goal; the guide does not supply permission for every story or image.</p>${directLink('https://opentextbc.ca/indigenizationcurriculumdevelopers/','Complete guide')}<div class="toolkit-reference-sublinks"><h3>Useful sections for the cultural representation activity</h3>${directLink('https://opentextbc.ca/indigenizationcurriculumdevelopers/chapter/appropriate-use-of-indigenous-content/','Appropriate Use of Indigenous Content')}<p>Questions about authorship, cultural context, and conditions of use; examples do not grant permission for other resources.</p>${directLink('https://opentextbc.ca/indigenizationcurriculumdevelopers/chapter/diverse-sources-of-indigenous-knowledge/','Diverse Sources of Indigenous Knowledge')}<p>Supports naming particular Peoples and recognizing varied sources of knowledge; avoid generalizing across Nations.</p></div></li>
      <li><p class="toolkit-reference-citation">Archibald, J.-a. (2008). <em>Indigenous storywork: Educating the heart, mind, body, and spirit.</em> UBC Press.</p><p><strong>Contribution:</strong> Provides further context for the team’s prompt about learning from Indigenous Peoples and knowledge holders.</p><p><strong>Scope and limits:</strong> Read the book in its own context. The Toolkit prompt is a team interpretation; citing this work does not establish permission to reproduce or adapt a particular story.</p>${directLink('https://www.ubcpress.ca/indigenous-storywork','Publisher’s book page')}</li>
      <li><p class="toolkit-reference-citation">Bossavit, B., &amp; Parsons, S. (2018). Outcomes for design and learning when teenagers with autism codesign a serious game: A pilot study. <em>Journal of Computer Assisted Learning, 34</em>(3), 293–305.</p><p><strong>Contribution:</strong> Offers a perspective on involving learners in design and attending to their experiences.</p><p><strong>Scope and limits:</strong> A pilot study of game co-design with teenagers with autism. It does not validate this website’s participation rubrics, proposed teaching decisions, or learning impact.</p>${directLink('https://doi.org/10.1111/jcal.12242','Article DOI')}</li>
      <li><p class="toolkit-reference-citation">Chrona, J. (2022). <em>Wayi wah! Indigenous pedagogies: An act for reconciliation and anti-racist education.</em> Portage &amp; Main Press.</p><p class="toolkit-reference-focus"><strong>Relevant section:</strong> Chapter 6, pp. 179–180, identified by the team for the authenticity, representation, and illustrations criteria.</p><p><strong>Contribution:</strong> Informs the cultural-resource review’s three areas and its four original rating labels. The author’s related resource-selection guidance is linked below.</p><p><strong>Scope and limits:</strong> The website uses condensed, team-authored questions rather than reproducing the full rubric. “Unable to Determine” is a team-added option; the short rating explanations and contextual feedback are also the team’s wording.</p>${directLink('https://www.portageandmainpress.com/Books/W/Wayi-Wah!-Indigenous-Pedagogies','Publisher’s book page')}${directLink('https://luudisk.com/2022/01/14/authentic-indigenous-resources/','Related guidance from Jo Chrona: Authentic Indigenous Resources')}</li>
      <li><p class="toolkit-reference-citation">First Nations Education Steering Committee. (n.d.). <em>Authentic First Peoples resources.</em></p><p><strong>Contribution:</strong> Provides resource-selection guidance and the optional video <em>The Importance of Including Authentic First Peoples Resources in BC Classrooms.</em></p><p><strong>Scope and limits:</strong> Consider the guidance’s BC context and the needs of your learners. A resource still requires review for the intended classroom use; linking to this page is not an endorsement of the team’s fictional case.</p>${directLink('https://www.fnesc.ca/authenticresources/','Official FNESC resource page')}</li>
      <li><p class="toolkit-reference-citation"><em>Topic 2: Tokenization.</em> (n.d.). What I Learned in Class Today, University of British Columbia.</p><p><strong>Contribution:</strong> Informs reflection on voluntary participation and avoiding expectations that someone speak for an entire community.</p><p><strong>Scope and limits:</strong> The project addresses university classroom experiences. Consider how its questions relate to your setting without requiring learners to disclose identities or personal experiences.</p>${directLink('https://intheclass.arts.ubc.ca/discussion-topics/topic-2-tokenization/','Tokenization discussion resource')}</li>
    </ol>
    <h2 class="toolkit-reference-heading">Optional media and supporting resources</h2>
    <p class="toolkit-reference-media-note">These resources extend the reflection. Visitors can complete the activities without watching videos.</p>
    <ol class="toolkit-reference-list">
      <li><p class="toolkit-reference-citation">Open School BC. (n.d.). <em>Continuing our learning journey: Indigenous education in BC.</em></p><p><strong>Contribution:</strong> Module 3, <em>Authentic Resources</em>, offers further professional learning about resource selection; Part 1 addresses evaluating materials.</p><p><strong>Scope and limits:</strong> Developed in a BC educational context. Review its relevance to your learners. A Module 3 transcript is available; its presence does not establish the accessibility of every linked media item.</p>${directLink('https://www.openschool.bc.ca/indigenoused/','Official learning resource')}${directLink('https://www.openschool.bc.ca/indigenoused/pdf/Module3VideoTranscript.pdf','Module 3 transcript (PDF)')}</li>
      <li><p class="toolkit-reference-citation">SD68NanaimoLadysmith. (2021, January 20). <em>Indigenous storywork in practice</em> [Video]. YouTube.</p><p><strong>Contribution:</strong> An optional Learning with Syeyutsus webinar featuring Jo-ann Archibald, extending reflection on storywork and educational practice.</p><p><strong>Scope and limits:</strong> A webinar offers context for further learning, not permission to reuse the stories or cultural material it discusses. The author’s resource page provides additional context for the recording.</p>${directLink('https://www.youtube.com/watch?v=DyKsCsZnRHI','Webinar recording')}${directLink('https://indigenousstorywork.com/resources/','Jo-ann Archibald’s resource page')}</li>
      <li><p class="toolkit-reference-citation"><em>Video.</em> (n.d.). What I Learned in Class Today, University of British Columbia.</p><p><strong>Contribution:</strong> The page links to <em>What I Learned in Class Today: Aboriginal Issues in the Classroom</em>, offering further classroom perspectives alongside the project’s tokenization discussion resource.</p><p><strong>Scope and limits:</strong> These are university classroom experiences. Use the material for reflection without assuming that every learner or classroom shares the same experience.</p>${directLink('https://intheclass.arts.ubc.ca/video/','Official video resource page')}</li>
    </ol>
    <section class="toolkit-creator-note" aria-labelledby="toolkit-creator-title"><h2 id="toolkit-creator-title">Creator credit and appropriate use</h2><p>EDI in Action was developed collaboratively by <strong>(Avery) Yan Gao, Shishona Austin, and Zeina Keisse</strong>. Avery led the participation case; Shishona led the cultural representation content; and Zeina led the website design, development, and content integration. All members contributed to reviewing and refining the project.</p><p>The supporting presentation, <em>Authentic Indigenous Resources</em>, was created by <strong>Shishona Austin</strong>. Its slide layout and source acknowledgements are retained.</p><p>The cases are team-created fictional examples. The condensed criteria, prompts, and feedback are team interpretations informed by the cited sources; they are not the full published rubric or a reproduction of Indigenous stories or cultural images.</p><p>The FNESC video loads within slide 4 using Vimeo’s player and attempts to play automatically with sound, subject to browser settings. Other external videos open on their source websites. Before adding new media or adapting published material, the team will check creator credits, publication details, contextual guidance, permissions or conditions of use, captions, and text alternatives. Caption availability and accessibility have not been checked for every external video.</p></section>
  </details>`;
}

document.addEventListener('click', event => {
  const button=event.target.closest('[data-cultural-principle]');
  if(!button)return;
  const entry=culturalToolkitEntries.find(item=>item.id===button.dataset.culturalPrinciple);
  if(!entry)return;
  const note=`${entry.title} — team interpretation\n${entry.question}\nSource to review: ${entry.citation}.\nIn my teaching context, this matters because…\nWhat I still need to verify…`;
  state.plan.reasoning+=(state.plan.reasoning?'\n\n':'')+note;
  location.hash='plan';
  setTimeout(()=>{const status=document.querySelector('#plan-status');if(status)status.textContent='Reflection prompt added to your optional Principle and source notes. Adapt it after reviewing the source.';},0);
});
