// The Curriculum User Guide lives on the website. Its controls and checklist
// are optional, unscored, and retained only while this page remains open.
const guideState = { caseId: 'case1', mode: 'individual', stage: 'encounter', all: false, checked: new Set() };
const guideChecklist = [
  'I identified a teaching decision or question to examine.',
  'I considered more than one possible approach.',
  'I considered diversity, equity, and inclusion in my context.',
  'I connected my thinking to a relevant source.',
  'I chose a practical next step and how I could review it.',
  'I kept any reflection notes or action-plan entries I want to revisit.'
];
const guideCases = {
  case1: {
    name: 'A Project for Everyone?', label: 'Case 1 · Equitable participation',
    outcomes: [
      'Examine how choice, access to resources, group roles, and a showcase may be experienced differently by learners.',
      'Compare possible approaches and explain how context could affect your decision.',
      'Identify one practical change that could support more equitable and meaningful participation in your teaching context.'
    ],
    stages: {
      encounter: {
        title: 'Meet Ms. Taylor’s project',
        lead: 'Begin with a thoughtfully designed Grade 7 sustainability project. Notice its opportunities before looking for possible barriers.',
        steps: [
          'Reveal the Diversity, Equity, and Inclusion definitions individually, or choose <strong>Show all definitions</strong>.',
          'In <strong>Meet the project</strong>, read the overview and five student learning outcomes. Select a topic to reveal an inquiry prompt.',
          'In <strong>Notice the design</strong>, expand teaching features and choose <strong>Keep for reflection</strong> for any you want to revisit. These bookmarks are not ratings.',
          'Use <strong>Change your lens</strong> to switch between the three EDI perspectives, then <strong>Pause &amp; reflect</strong> for four initial questions. <strong>Read all sections</strong> displays all four sections together.',
          'Choose <strong>Download my reflections</strong> to keep your Encounter selections and notes. This is separate from the Explore download and your action plan.'
        ],
        prompt: 'What do you appreciate about the design, and what would you like to know about the learners?',
        route: '#encounter', action: 'Open Case 1 Encounter', secondary: ''
      },
      explore: {
        title: 'Look beneath the surface',
        lead: 'Move freely among four project moments: Freedom to Choose, Access to Resources, Everyone Has a Role, and Celebrating Success.',
        steps: [
          'Read the situation and identify the tension in the teaching decision.',
          'Open an approach to see its potential benefits, limitations, and a question to consider. <strong>Compare all approaches</strong> displays the three possibilities together.',
          'Keep a private note about the context or evidence that could affect your decision.',
          'Use <strong>Reflect &amp; Decide</strong> to bring the moments together. Choose <strong>Download my case reflections</strong> to keep the project-moment notes and later reflections before refreshing or closing.'
        ],
        prompt: 'What would you retain, revise, or investigate, and why?',
        route: '#case1-explore', action: 'Open the four project moments',
        secondary: '<a class="text-link" href="#case1-reflect">Go to Reflect &amp; Decide</a>'
      },
      contribute: {
        title: 'Plan one change in your own teaching',
        lead: 'Choose a lesson, project, activity, or assessment from your own setting. A useful next step can be small and specific.',
        steps: [
          'Use the six prompts: Context and learning goal, Diversity, Equity, Inclusion, Proposed change, and Review.',
          'Consult the <strong>EDI Toolkit</strong>. After reading a relevant source, <strong>Use this reflection prompt</strong> opens the plan and adds a starter prompt to <strong>Principle and source notes</strong>. Adapt it to your reasoning.',
          'Decide what evidence or learner feedback could help you review the change. Add an optional date to revisit it.',
          'Choose <strong>Download my plan</strong> or select and copy entries to keep them. This saves the plan separately from your case reflections. Sharing a separate insight on Padlet is voluntary.'
        ],
        prompt: 'What is one change you could try while preserving the intended learning goal?',
        route: '#case1-contribute', action: 'Open Case 1 action plan',
        secondary: '<a class="text-link" href="#toolkit">Find a principle or source</a>'
      }
    }
  },
  case2: {
    name: 'Choosing Authentic Indigenous Resources', label: 'Case 2 · Cultural representation',
    outcomes: [
      'Review a fictional resource for authenticity, representation, and illustrations.',
      'Distinguish concerns supported by the record from information that still needs to be verified.',
      'Identify one action to improve how you select or evaluate Indigenous classroom resources.'
    ],
    stages: {
      encounter: {
        title: 'Meet the resource and its context',
        lead: 'Read the fictional Grade 4 classroom scenario and resource record. Begin with the information supplied and the questions it leaves open.',
        steps: [
          'Identify the teacher’s learning goal and the decision about using the resource.',
          'Read what is known about authorship, Indigenous collaboration, Nations and communities, illustrations, and sources.',
          'Keep missing information as something to investigate. A missing author credit does not by itself prove that the resource is inauthentic.',
          'If useful, open Shishona Austin’s presentation or read its slide text. The main activity can be completed without watching a video or viewing the slides.'
        ],
        prompt: 'What evidence would help you decide whether this resource is appropriate for your setting?',
        route: '#culture', action: 'Open Case 2 Encounter',
        secondary: '<a class="text-link" href="#culture-slides">View the optional presentation</a>'
      },
      explore: {
        title: 'Review the evidence and possible responses',
        lead: 'Consider authenticity, representation, and illustrations. Use the categories as prompts for careful review, then compare possible next steps.',
        steps: [
          'Read the questions in each category. Optional ratings are Excellent, Fair, Poor, N/A, and Unable to Determine.',
          'Use N/A when a criterion does not apply. Use Unable to Determine when the evidence is insufficient. These meanings are different. The fictional record supplies no full resource pages or sample illustrations, so some criteria may lack enough evidence.',
          'Consider possible responses. Open one or choose <strong>Compare all responses</strong> to read the contextual feedback. Add evidence or questions in your private notes. Ratings are provisional and unscored.',
          'Continue to <strong>Reflect &amp; Decide</strong> to review your ratings and reflections, then explain what you would use, adapt, verify, or replace in your own context. Choose <strong>Download my resource review</strong> before leaving.'
        ],
        prompt: 'Which concerns are supported by the record, and which need further verification?',
        route: '#culture-explore', action: 'Open the resource review',
        secondary: '<a class="text-link" href="#culture-reflect">Go to Reflect &amp; Decide</a>'
      },
      contribute: {
        title: 'Apply your reflection to resource selection',
        lead: 'Choose one resource-selection or teaching decision you would like to examine in your own practice.',
        steps: [
          'Use the six prompts: Context and learning goal, Diversity, Equity, Inclusion, Proposed change, and Review.',
          'Connect your change to an EDI principle, source, and specific resource or community context. In the <strong>EDI Toolkit</strong>, <strong>Use this reflection prompt</strong> opens the plan and adds a starter prompt to <strong>Principle and source notes</strong>.',
          'Identify what you would verify, whom you would appropriately consult, or what alternative you would examine. Plan how to review the decision.',
          'Choose <strong>Download my plan</strong> to keep the plan separately from your resource review, or select and copy your entries. You may share a separate insight, question, or idea on Padlet if you choose.'
        ],
        prompt: 'What practical action could improve how you select or evaluate a classroom resource?',
        route: '#culture-contribute', action: 'Open Case 2 action plan',
        secondary: '<a class="text-link" href="#toolkit">Find a principle or source</a>'
      }
    }
  }
};

function guideStageMarkup(stage) {
  const item = guideCases[guideState.caseId].stages[stage];
  return `<article class="ug-stage"><p class="eyebrow">${stage}</p><h3 id="guide-stage-${stage}">${item.title}</h3><p>${item.lead}</p><ol class="ug-step-list">${item.steps.map(text => `<li>${text}</li>`).join('')}</ol>${guideState.caseId==='case2' && stage==='explore' ? guideResourceExampleMarkup() : ''}<div class="ug-pause"><strong>A question to carry with you</strong><p>${item.prompt}</p></div><div class="button-row"><a class="btn" href="${item.route}">${item.action}</a>${item.secondary}</div></article>`;
}
function guideJourneyMarkup() {
  const selected = guideCases[guideState.caseId];
  return `<div class="ug-case-goals"><h3>What you will work towards</h3><p>By the end of this case, you will be able to:</p><ul>${selected.outcomes.map(outcome=>`<li>${outcome}</li>`).join('')}</ul><p class="ug-note">These educator learning goals guide your reflection; there is no test or required submission.</p></div>` + (guideState.all ? ['encounter', 'explore', 'contribute'] : [guideState.stage]).map(guideStageMarkup).join('');
}
function guideSessionMarkup() {
  return guideState.mode === 'individual'
    ? `<h3>Make room for your own thinking.</h3><p class="ug-time">Suggested time: 20–30 minutes for one case and a plan. Adjust this to your needs; there is no timer.</p><ul><li>Choose the case closest to a question in your teaching.</li><li>Read the scenario, explore more than one possibility, and pause when a prompt is useful.</li><li>Use the Toolkit to examine a source in context, then plan one manageable change.</li><li>Download or copy notes you want to keep before leaving.</li></ul>`
    : `<h3>Use the differences in your interpretations.</h3><p class="ug-time">Suggested time: 35–45 minutes with discussion. Allow more time or return later if useful.</p><ul><li>Agree on one case. Read independently or share a screen, then allow quiet thinking time.</li><li>Invite each person to name an observation or question. Offer the option to pass or respond in writing.</li><li>Compare the evidence and assumptions behind different interpretations. You do not need to reach one shared answer.</li><li>Avoid asking anyone to speak for a community or disclose a personal experience. Invite perspectives voluntarily.</li><li>Each person can make an individual plan. Sharing an insight or posting to Padlet is optional.</li></ul>`;
}
function guideChecklistStatus() {
  return `${guideState.checked.size} of ${guideChecklist.length} personal reminders checked. This is not a score or a completion requirement.`;
}

function guideFrameworkMapMarkup() {
  return `<div class="ug-framework-map">
    <article><h4>Case 1 · A Project for Everyone?</h4><dl>
      <dt>Know</dt><dd>Recognize teaching choices about group formation, resources, roles, and assessment.</dd>
      <dt>Do</dt><dd>Compare approaches across the four project moments and justify a possible revision.</dd>
      <dt>Understand</dt><dd>Choice and flexibility may be experienced differently by different learners. Examine what meaningful participation requires in your context.</dd>
    </dl></article>
    <article><h4>Case 2 · Choosing Authentic Indigenous Resources</h4><dl>
      <dt>Know</dt><dd>Identify what is known or missing about creators, Nations, collaboration, representation, and images.</dd>
      <dt>Do</dt><dd>Review the evidence, consider provisional ratings, and identify verification or selection steps.</dd>
      <dt>Understand</dt><dd>Resource suitability depends on evidence, cultural specificity, context, and appropriate use. Missing evidence and demonstrated concerns call for different reasoning.</dd>
    </dl></article>
  </div>`;
}

function guideIndigenizationMarkup() {
  return `<details class="ug-disclosure"><summary>Indigenization, decolonization, and reconciliation in context</summary>
    <p>Choosing a resource involves asking whose knowledge guides the learning, which Nations and communities are represented, and what cultural context or conditions of use matter.</p>
    <p><em>Pulling Together</em> distinguishes three connected processes. <strong>Indigenization</strong> brings Indigenous knowledges and approaches into education as distinct systems rooted in particular lands and communities. <strong>Decolonization</strong> challenges colonial assumptions, structures, and unequal power; Indigenous leadership is central. <strong>Reconciliation</strong> involves addressing harms and rebuilding relationships through sustained action.</p>
    <p><a href="https://opentextbc.ca/indigenizationcurriculumdevelopers/chapter/indigenization-decolonization-and-reconciliation/" target="_blank" rel="noopener noreferrer">Read the three concepts in Pulling Together (opens a new tab)</a></p>
    <p>Indigenization and multiculturalism have different purposes and responsibilities. They can coexist, while Indigenous histories, relationships to land, and experiences of colonization require specific attention. Including a range of cultures does not by itself address these responsibilities.</p>
    <p><a href="https://opentextbc.ca/indigenizationcurriculumdevelopers/chapter/the-need-to-indigenize/" target="_blank" rel="noopener noreferrer">Read The Need to Indigenize (opens a new tab)</a></p>
    <p>The Truth and Reconciliation Commission’s <strong>Calls to Action 62–63</strong> address curriculum, teacher preparation, Indigenous knowledge, and intercultural understanding. Call 62 addresses governments; Call 63 addresses the Council of Ministers of Education, Canada. A resource review can inform your practice, but completing this activity does not fulfil those institutional responsibilities.</p>
    <p><a href="https://nctr.ca/wp-content/uploads/2021/01/Calls_to_Action_English2.pdf#page=11" target="_blank" rel="noopener noreferrer">Read TRC Calls to Action 62–63 (2015, p. 7; PDF, opens a new tab)</a></p>
    <p><strong>Apply this to Case 2:</strong> distinguish evidence from assumptions, verify authorship and community context, and check appropriate use. Where consultation is needed, follow established school and community relationships and protocols. Do not expect an Indigenous learner or colleague to represent a whole community.</p>
    <p class="ug-note">The explanations above paraphrase Antoine et al. (2018) and the TRC (2015). Pulling Together was written for postsecondary curriculum developers; consider how its guidance applies to your setting. Continue with the <a href="#toolkit">EDI Toolkit and references</a>.</p>
  </details>`;
}

function guideResourceExampleMarkup() {
  return `<details class="ug-disclosure ug-worked-example"><summary>Worked example: from resource evidence to a next step</summary>
    <p>This example uses the website’s invented resource, <em>Indigenous Peoples: Traditions and Cultures</em>. It models one possible reasoning process, not an answer key or a review of a real publication.</p>
    <div class="ug-evidence-example">
      <article><h4>Authenticity: separate an unknown from a conclusion</h4><p><strong>In the record:</strong> Authors are not identified and Indigenous collaboration is not indicated.</p><p><strong>Possible reasoning:</strong> <em>Unable to Determine</em> can express insufficient evidence about who created or informed the resource. The absence of a credit does not prove that no collaboration occurred.</p><p><strong>Evidence to seek:</strong> Creator information, original publication details, and any account of Indigenous involvement.</p></article>
      <article><h4>Representation: name the concern you can support</h4><p><strong>In the record:</strong> Several Nations are discussed without much specificity, and portrayals are mainly historical.</p><p><strong>Possible reasoning:</strong> These details raise concerns about generalization and the visibility of contemporary Indigenous lives. Explain the concern using the record, while identifying what a fuller review would need.</p></article>
      <article><h4>Illustrations: acknowledge the limits of the evidence</h4><p><strong>In the activity:</strong> No sample illustrations or full resource pages are supplied.</p><p><strong>Possible reasoning:</strong> The record signals limited contemporary representation, but you cannot verify the accuracy or appropriate use of a particular image. <em>Unable to Determine</em> expresses an evidence gap; <em>N/A</em> means the criterion does not apply.</p></article>
    </div>
    <p><strong>One possible next step:</strong> Open <strong>Investigate before use</strong> and compare its considerations with <strong>Use with additional context</strong> and <strong>Select another resource</strong>. Check authorship, Nation and community context, and conditions of use. If crucial information remains unavailable, examine a better-documented alternative without abandoning Indigenous perspectives.</p>
    <h4>Try this with a resource from your own classroom</h4><ol class="ug-step-list"><li>Name your learning goal and the resource you are considering.</li><li>Separate what the resource establishes from your assumptions and unanswered questions.</li><li>Use the three areas and a relevant Toolkit source to identify what you would verify, adapt, retain, or replace.</li><li>Record one next step in <strong>Proposed change</strong> and how you will examine its effect in <strong>Review</strong>.</li></ol>
  </details>`;
}

function guideCorePathMarkup() {
  return `<div class="ug-priority-grid">
    <div class="ug-core-path"><h3>A suggested core pathway</h3><p>For a connected first visit, follow one case through all three stages:</p><ol><li>Read the scenario and identify a teaching question.</li><li>Examine possible approaches and use <strong>Reflect &amp; Decide</strong> to consider their implications.</li><li>Consult a relevant Toolkit source, then identify one change and how you could review it.</li></ol><p class="ug-note">These are the main learning moves. You may reflect without typing; no step is locked, timed, or scored.</p></div>
    <div class="ug-optional-path"><h3>Optional ways to go further</h3><ul><li>Explore the second case or every approach.</li><li>Write notes, select ratings, bookmark features, or use the personal checklist.</li><li>View the presentation, videos, or additional sources.</li><li>Discuss with colleagues or share a separate insight on Padlet.</li></ul><p class="ug-note">Keep downloads if you want a lasting copy. The website does not save a completed session for your next visit.</p></div>
  </div>`;
}

function guideDownloadMarkup() {
  return `<details class="ug-disclosure"><summary>Step by step: keep the right download</summary>
    <p>Each download keeps a different part of your work. Use the matching control in the activity where you wrote your notes.</p>
    <dl class="ug-download-list">
      <dt>Case 1 · Encounter</dt><dd><strong>Download my reflections</strong> keeps your selected topic, bookmarked design features, EDI lens, and initial reflections. <a href="#encounter">Open Encounter</a>.</dd>
      <dt>Case 1 · Explore / Reflect &amp; Decide</dt><dd><strong>Download my case reflections</strong> keeps project-moment notes, the last approaches opened, and later reflections. <a href="#case1-reflect">Open Reflect &amp; Decide</a>.</dd>
      <dt>Case 2 · Resource review</dt><dd><strong>Download my resource review</strong> keeps ratings, evidence notes, unknowns, the last response opened, and reflections. <a href="#culture-reflect">Open the resource reflection</a>.</dd>
      <dt>Contribute · Your Action Plan</dt><dd><strong>Download my plan</strong> keeps the six prompts, optional principle and source notes, and revisit date. <a href="#plan">Open the plan</a>.</dd>
    </dl>
    <p><strong>To keep all your Case 1 work:</strong> download Encounter reflections, case reflections, and your action plan separately.</p>
    <figure class="ug-control-screenshot"><img src="assets/guide/plan-controls.jpg" width="751" height="310" loading="lazy" alt="Action plan controls: expandable Principle and source notes, an optional revisit date, Download my plan, and Print or save as PDF."><figcaption>The saving controls below the action-plan prompts. Use <strong>Download my plan</strong> for an editable text file. The steps below describe the same controls in text.</figcaption></figure>
    <h3>Download your action plan</h3><ol class="ug-step-list"><li>Open <strong>Contribute</strong> from a case, or <strong>Take action</strong> in the main navigation.</li><li>Write in any of the six prompts. If useful, open <strong>Principle and source notes</strong> and add <strong>A date to revisit</strong>.</li><li>Select <strong>Download my plan</strong> below the fields.</li><li>Find the editable text file in your browser’s downloads and open it to check the entries you want to keep.</li></ol>
    <p>You can select and copy notes into your own document. <strong>Print or save as PDF</strong> is another option for your personal plan where your device supports it; it does not change the online format of this guide.</p>
  </details>`;
}

function guideFollowupMarkup() {
  return `<section class="ug-section" aria-labelledby="guide-follow-up"><p class="eyebrow">Return to your practice</p><h2 id="guide-follow-up" tabindex="-1">After you try your change.</h2>
    <p>Before trying a change, use <strong>Review</strong> in your action plan to identify what you will notice or ask. Add an optional revisit date. Afterwards, respond in your downloaded plan or your own notes:</p>
    <ol class="ug-step-list"><li>What did I change, and what happened in relation to the learning goal?</li><li>What evidence suggests an improvement, a remaining barrier, or an unintended effect?</li><li>What did learners choose to share about the experience? Whose perspectives or contributions are still less visible?</li><li>What will I retain, revise, or investigate next, and when will I look again?</li></ol>
    <details class="ug-disclosure"><summary>A follow-up lens for Case 1: meaningful participation</summary><p>Look at whose ideas and evidence influenced the group’s decisions, how roles were negotiated, and whether learners could access the resources and support they needed. Consider written, spoken, creative, and other relevant contributions. Avoid treating the number of times someone speaks as the whole picture of participation.</p><p><strong>Example question:</strong> After providing shared research time and revisiting roles, what changed in how learners contributed to the recommendation? What voluntary feedback helps explain what I noticed?</p></details>
    <details class="ug-disclosure"><summary>A follow-up lens for Case 2: cultural representation</summary><p>Revisit the resource and learner work. Are particular Nations and communities named accurately? Are contemporary Indigenous lives and perspectives visible? What shows how learners understood the resource’s context, and what still needs correction or verification?</p><p><strong>Example question:</strong> After changing the resource, what evidence suggests learners are making fewer generalizations and attending to the specific people, context, and sources represented?</p></details>
    <p class="ug-note">This is a reflection on your teaching, not a website score. Keep notes without identifiable student details, and revisit over time. Reopening the website does not restore an earlier plan; keep your downloaded copy.</p><a class="text-link" href="#plan">Plan how you will review a change</a>
  </section>`;
}

function guideLearningApproachMarkup() {
  return `<details class="ug-disclosure"><summary>How the learning experience works</summary><p>Encounter begins with an example. Explore invites you to compare possibilities, examine assumptions, and explain your reasoning. Contribute connects that reflection to an action in your own practice.</p><p>There is no predetermined correct teaching choice. The feedback offers considerations; it does not replace your knowledge of the learners, the evidence, and the setting.</p><h3>Connect what you know, do, and understand</h3><p>Our design draws on British Columbia’s Know–Do–Understand framing. The descriptions below are the team’s application to this experience. These dimensions connect with one another; they are not additional steps to complete in order.</p><ul><li><strong>Know:</strong> Recognize participation, cultural representation, context, and assumptions.</li><li><strong>Do:</strong> Compare responses, justify a possible design revision, and plan how to review it.</li><li><strong>Understand:</strong> Teaching choices can recognize or overlook contributions and knowledge; their implications depend on context.</li></ul><h3>How the two cases put this into practice</h3>${guideFrameworkMapMarkup()}<p>Use the <a href="#toolkit">EDI Toolkit</a> to examine principles and cited sources alongside your own teaching context.</p></details><details class="ug-disclosure"><summary>Learning-design foundations and references</summary><p>These sources inform the design. The fictional cases, prompts, and examples are the team’s interpretations; they are not validated assessment instruments.</p><ul class="ug-reference-list"><li><p><strong>Connecting knowledge, action, and understanding.</strong> British Columbia Ministry of Education. (n.d.). <em>BC’s redesigned curriculum: An orientation guide.</em></p><a href="https://curriculum.gov.bc.ca/sites/curriculum.gov.bc.ca/files/pdf/supports/curriculum_brochure.pdf" target="_blank" rel="noopener noreferrer">Read the curriculum orientation brochure (PDF; opens a new tab)</a></li><li><p><strong>Considering whose perspectives shape a design.</strong> Garcia, A., &amp; Morrell, E. (2013). City youth and the pedagogy of participatory media. <em>Learning, Media and Technology, 38</em>(2), 123–127.</p><a href="https://doi.org/10.1080/17439884.2013.782040" target="_blank" rel="noopener noreferrer">View the publication record (opens a new tab)</a></li><li><p><strong>Learning through sustained collegial inquiry.</strong> Wenger, E. (1998). Communities of practice: Learning as a social system. <em>The Systems Thinker, 9</em>(5), 1–5.</p><a href="https://thesystemsthinker.com/wp-content/uploads/pdfs/090501pk.pdf" target="_blank" rel="noopener noreferrer">Read the article (PDF; opens a new tab)</a><p>A shared visit can begin a conversation; sustained inquiry develops through continued participation and revisiting practice.</p></li></ul><p>For the sources informing the EDI principles and cultural-resource review, including Chrona (2022) and <em>Pulling Together</em>, visit the <a href="#toolkit">EDI Toolkit and references</a>.</p></details>`;
}

function guide() {
  return `<div class="shell online-guide">
    <header class="page-intro ug-intro"><p class="eyebrow">Curriculum User Guide · Interactive web guide</p><h1>A little guidance,<br>when you need it.</h1><p class="lead">Build awareness, deepen reflection, and plan action in your teaching. Choose a case, follow the Encounter–Explore–Contribute journey, and use the guidance that fits your context.</p><p class="ug-promise">This interactive guide follows the website’s current activities. Begin with the suggested core pathway, or explore freely. Nothing is timed, graded, or locked.</p></header>
    <div class="ug-layout">
      <aside class="ug-sidebar"><nav class="ug-toc" aria-label="Within the Curriculum User Guide"><p class="eyebrow">In this guide</p><button type="button" data-guide-jump="guide-purpose">Purpose &amp; learning goals</button><button type="button" data-guide-jump="guide-pathway">Choose your pathway</button><button type="button" data-guide-jump="guide-session">Plan your session</button><button type="button" data-guide-jump="guide-notes">Keep notes &amp; share</button><button type="button" data-guide-jump="guide-follow-up">Review your classroom change</button><button type="button" data-guide-jump="guide-checklist">Your personal checklist</button><button type="button" data-guide-jump="guide-help">Help &amp; access</button><div class="ug-sidebar-note">Return to <strong>User guide</strong> in the main navigation whenever you need help.</div></nav></aside>
      <div class="ug-content">
        <section class="ug-section" aria-labelledby="guide-purpose"><p class="eyebrow">Begin with a purpose</p><h2 id="guide-purpose" tabindex="-1">A guide for your teaching context.</h2><p>EDI in Action supports in-service K–12 educators in building <strong>awareness</strong> of how teaching choices shape access, representation, participation, and belonging; using <strong>reflection</strong> to examine those choices; and planning <strong>action</strong> in their own practice. The fictional cases are set in Grade 7 and Grade 4. If you teach in another setting, consider what transfers and what needs adapting to your learners and learning goals.</p><p>By working through a case and applying it to your own practice, you will have opportunities to:</p><ul class="ug-outcomes"><li><strong>Notice</strong> a possible barrier or assumption in a teaching design.</li><li><strong>Consider</strong> representation and the implications of different approaches.</li><li><strong>Connect</strong> a proposed revision to an EDI principle, a source, and your context.</li><li><strong>Plan</strong> a practical next step and decide how you will revisit it.</li></ul><p class="ug-note">These are goals for educators using this website. Ms. Taylor’s five student learning outcomes describe the fictional classroom project within Case 1.</p><details class="ug-disclosure"><summary>Revisit the three EDI dimensions</summary><div class="ug-dimensions"><div><h3>Diversity</h3><p>Recognizing and valuing learners’ diverse backgrounds, experiences, perspectives, strengths, and circumstances.</p></div><div><h3>Equity</h3><p>Identifying and addressing barriers to accessing resources, support, and meaningful learning opportunities.</p></div><div><h3>Inclusion</h3><p>Creating conditions in which every learner can contribute, influence decisions, participate meaningfully, and develop a sense of belonging.</p></div></div><p>Keep the dimensions connected. Each teaching approach can have benefits, limitations, and contextual considerations.</p></details>${guideLearningApproachMarkup()}${guideIndigenizationMarkup()}</section>

        <section class="ug-section" aria-labelledby="guide-pathway"><p class="eyebrow">Choose a starting point</p><h2 id="guide-pathway" tabindex="-1">See the route through your case.</h2><p>Select a case to see its learning goals and walkthrough. The three stages connect noticing a teaching decision, examining possibilities, and planning a change. <strong>Reflect &amp; Decide</strong> sits within Explore; <strong>Take action</strong> opens Contribute.</p><fieldset class="ug-case-picker"><legend>Which case would you like guidance for?</legend>${Object.entries(guideCases).map(([id,item])=>`<label class="ug-case-choice"><input type="radio" name="guide-case" value="${id}" data-guide-case${guideState.caseId===id?' checked':''}><span><small>${item.label}</small><strong>${item.name}</strong></span></label>`).join('')}</fieldset><div class="ug-journey-bar"><ol class="ug-stage-buttons" aria-label="Encounter–Explore–Contribute learning journey">${[['encounter','Notice opportunities, assumptions, and unknowns.'],['explore','Compare possibilities, then reflect and decide.'],['contribute','Plan a change and how you will review it.']].map(([stage,description])=>`<li><button type="button" data-guide-stage="${stage}" aria-pressed="${!guideState.all&&guideState.stage===stage}" aria-controls="guide-journey-content"><strong>${stage[0].toUpperCase()+stage.slice(1)}</strong><span>${description}</span></button></li>`).join('')}</ol><button class="ug-text-button" type="button" id="guide-view-all" aria-pressed="${guideState.all}" aria-controls="guide-journey-content">${guideState.all?'Show one stage':'Read the full journey'}</button></div><p class="ug-selection-label" id="guide-selected-case">${guideCases[guideState.caseId].label} · ${guideCases[guideState.caseId].name}</p><div id="guide-journey-content" class="ug-journey-content">${guideJourneyMarkup()}</div><p class="ug-live" id="guide-pathway-status" role="status" aria-live="polite"></p><p class="ug-note">Here, <strong>Read the full journey</strong> shows all three stages of this guide. In Case 1 Encounter, <strong>Read all sections</strong> shows that activity’s four sections. Opening an approach explores its considerations; it does not submit a final teaching decision.</p></section>

        <section class="ug-section" aria-labelledby="guide-session"><p class="eyebrow">Make it work for you</p><h2 id="guide-session" tabindex="-1">Plan your session.</h2>${guideCorePathMarkup()}<fieldset class="ug-mode-picker"><legend>How are you using the experience?</legend><label><input type="radio" name="guide-mode" value="individual" data-guide-mode${guideState.mode==='individual'?' checked':''}> On my own</label><label><input type="radio" name="guide-mode" value="colleagues" data-guide-mode${guideState.mode==='colleagues'?' checked':''}> With colleagues</label></fieldset><div id="guide-session-content" class="ug-session-panel">${guideSessionMarkup()}</div><p id="guide-session-status" class="ug-live" role="status" aria-live="polite"></p><details class="ug-disclosure"><summary>Questions to support a discussion</summary><ul><li>What do we know from the scenario, and what are we assuming?</li><li>Whose perspectives or contributions might not yet be visible?</li><li>How might the same approach work differently in another context?</li><li>What would we need to investigate before making a change?</li><li>What could we try, and how could we learn whether it helps?</li></ul></details></section>

        <section class="ug-section" aria-labelledby="guide-notes"><p class="eyebrow">Keep what is useful</p><h2 id="guide-notes" tabindex="-1">Your thinking stays yours.</h2><div class="ug-save-callout"><h3>Keep your notes before leaving.</h3><p>Your choices, ratings, reflections, action plan, and guide checklist stay in this open page. Navigation within the website keeps them. Refreshing, closing the tab, or leaving the website can clear them. They are not submitted or automatically saved.</p></div><div class="ug-two-col"><div><h3>Save a private copy</h3><p>Use the activity’s reflection download or <strong>Download my plan</strong> to create a text file. You can also select and copy your entries into your own document.</p><p>The action plan’s <strong>Print or save as PDF</strong> control is an optional way to keep your own plan. The Curriculum User Guide itself is this interactive webpage.</p><a class="text-link" href="#plan">Open my action plan</a></div><div><h3>Share only if you choose</h3><p>Contribute includes a separate Padlet link. Nothing from your private notes is posted automatically.</p><p>Check the board’s visibility before posting. Share an insight, question, or teaching idea without identifiable student information or confidential details. You can complete the experience without posting.</p><a class="text-link" href="#privacy">Read privacy &amp; sharing details</a></div></div>${guideDownloadMarkup()}<details class="ug-disclosure"><summary>What might a practical action plan look like?</summary><p><strong>Context and learning goal:</strong> Groups investigate school food waste and develop evidence-based recommendations.</p><p><strong>Diversity:</strong> Invite learners to identify experiences, interests, and ways of contributing that could inform the inquiry, without requiring personal disclosure.</p><p><strong>Equity:</strong> Find out whether every group has the time, materials, and support needed to gather evidence at school.</p><p><strong>Inclusion:</strong> Use a brief round of written or spoken ideas so each learner can influence the group’s question and roles.</p><p><strong>Proposed change:</strong> Provide shared research time and materials at school, with a structured opportunity to revisit group roles.</p><p><strong>Review:</strong> Review whose evidence and ideas inform the recommendation, and invite voluntary feedback on participation and support.</p><p class="ug-note">This is an example to adapt, not a required answer.</p></details></section>

        ${guideFollowupMarkup()}

        <section class="ug-section" aria-labelledby="guide-checklist"><p class="eyebrow">Pause before you leave</p><h2 id="guide-checklist" tabindex="-1">Your personal learning checklist.</h2><p>Use any of these reminders to reflect on what you want to carry forward. Check the ones that are useful to you; nothing is locked or required.</p><div class="ug-checklist">${guideChecklist.map((text,i)=>`<label><input type="checkbox" data-guide-check="${i}"${guideState.checked.has(i)?' checked':''}><span>${text}</span></label>`).join('')}</div><p class="ug-check-status" id="guide-checklist-status" role="status" aria-live="polite">${guideChecklistStatus()}</p><p class="ug-note">These are your own checkmarks, not an automatic record of completed activities. They reset when the page is refreshed or closed.</p></section>

        <section class="ug-section" aria-labelledby="guide-help"><p class="eyebrow">Help when you need it</p><h2 id="guide-help" tabindex="-1">Technology, access, and support.</h2><div class="ug-help"><details class="ug-disclosure" open><summary>What do I need to get started?</summary><p>Use a computer, tablet, or phone with a current web browser and JavaScript enabled. The online website and external resources require an internet connection. No additional application is needed for the activities.</p><p>Use the main navigation to move between sections. Select <strong>Explore</strong> for both cases, <strong>EDI Toolkit</strong> for principles and sources, <strong>User guide</strong> for these instructions, or <strong>Take action</strong> for the plan.</p></details><details class="ug-disclosure"><summary>Do I need an account or permission?</summary><p>The activities do not ask for an activity-specific account. This static copy does not require a ChatGPT account. Access depends on its hosting settings; a standard GitHub Pages publication is publicly accessible. Use the website link supplied by the project team or your facilitator.</p><p>If you cannot open the site, ask the person who shared it to check your access. Padlet and linked resources have their own access requirements.</p></details><details class="ug-disclosure"><summary>How do I find slide text and available transcripts?</summary><p>All essential case content and feedback are available as website text. The optional presentation is not a prerequisite for either case.</p><ol class="ug-step-list"><li>Open the <a href="#culture-slides">optional Authentic Indigenous Resources presentation</a> from Case 2.</li><li>Use <strong>Previous slide</strong>, <strong>Next slide</strong>, or <strong>Choose a slide</strong>. Open <strong>Read this slide’s text</strong> below the slide image, or <strong>Read all slide text</strong> further down the page. <strong>Download slide text</strong> keeps a text copy.</li><li>For Open School BC’s separate learning resource, open the <a href="#toolkit">EDI Toolkit</a>, find <strong>Continuing Our Learning Journey: Indigenous Education in BC</strong> under the video resources, and follow <strong>Read the Module 3 transcript (PDF)</strong>.</li></ol><p>The Module 3 transcript belongs to that Open School BC resource. It is not the transcript of every video linked from this website.</p><p>Slide 4 of the presentation loads an external Vimeo video and attempts to play with sound. You can pause, skip it, or leave the slide to stop playback. If the player is unavailable, its resource-page link provides another route. The slide text is not a transcript of that video.</p></details><details class="ug-disclosure"><summary>What accessibility options can I use?</summary><p>Use Tab and Shift+Tab to move through controls, Enter to activate links and buttons, and Space to toggle checkboxes or expandable sections. Use arrow keys within radio groups. Visible focus indicators help identify the selected control.</p><p>The website provides structured headings, labelled fields, text-based feedback, responsive layouts, browser zoom support, and reduced-motion support based on your device preference. No activity has a time limit. You may pass, work in writing, or complete the experience independently.</p><p>Broader assistive-technology testing is still needed; this guide does not claim full accessibility conformance.</p><a class="text-link" href="#accessibility">Read accessibility &amp; support details</a></details><details class="ug-disclosure"><summary>What if a control, download, or link does not work?</summary><p>Select and copy any notes you want to keep before refreshing. Check that JavaScript is enabled. For a missing download, check your browser’s downloads and any blocked-download notice.</p><p>For an external resource, check your connection or continue with the website’s text. If an issue remains, note the page, the action, your browser or device, and what happened. Share this with the project team through your existing course contact route.</p><p>There is no issue-reporting form on this preview.</p></details><details class="ug-disclosure"><summary>Where can I find sources and project credits?</summary><p>The <a href="#toolkit">EDI Toolkit</a> includes principles, source links, and references. Read sources in context and consider their relevance and limits before applying them.</p><p>Visit <a href="#team">Our team</a> for the project contributors and course context. Keep creator attribution and relevant conditions of use when consulting or sharing resources.</p></details></div></section>
        <div class="ug-finish"><div><h2>Begin with one thoughtful question.</h2><p>Choose a case, explore a possibility, and bring one practical next step to your teaching.</p></div><a class="btn" href="#explore">Explore the activities</a></div>
      </div>
    </div>
  </div>`;
}

function refreshGuideJourney() {
  const panel = document.getElementById('guide-journey-content');
  if (!panel) return;
  panel.innerHTML = guideJourneyMarkup();
  document.getElementById('guide-selected-case').textContent = `${guideCases[guideState.caseId].label} · ${guideCases[guideState.caseId].name}`;
  document.querySelectorAll('[data-guide-stage]').forEach(button => button.setAttribute('aria-pressed', String(!guideState.all && button.dataset.guideStage === guideState.stage)));
  const toggle = document.getElementById('guide-view-all');
  toggle.textContent = guideState.all ? 'Show one stage' : 'Read the full journey';
  toggle.setAttribute('aria-pressed', String(guideState.all));
  document.getElementById('guide-pathway-status').textContent = `${guideCases[guideState.caseId].label}. Showing ${guideState.all ? 'the full journey' : guideState.stage + ' guidance'}.`;
}

document.addEventListener('click', event => {
  const jump = event.target.closest('[data-guide-jump]');
  if (jump) {
    const heading = document.getElementById(jump.dataset.guideJump);
    if (heading) {
      heading.focus({preventScroll:true});
      heading.scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
    }
    return;
  }
  const stage = event.target.closest('[data-guide-stage]');
  if (stage) { guideState.stage = stage.dataset.guideStage; guideState.all = false; refreshGuideJourney(); return; }
  if (event.target.closest('#guide-view-all')) { guideState.all = !guideState.all; refreshGuideJourney(); }
});
document.addEventListener('change', event => {
  if (event.target.matches('[data-guide-case]')) { guideState.caseId = event.target.value; refreshGuideJourney(); return; }
  if (event.target.matches('[data-guide-mode]')) {
    guideState.mode = event.target.value;
    document.getElementById('guide-session-content').innerHTML = guideSessionMarkup();
    document.getElementById('guide-session-status').textContent = guideState.mode === 'individual' ? 'Showing guidance for independent use.' : 'Showing guidance for use with colleagues.';
    return;
  }
  if (event.target.matches('[data-guide-check]')) {
    const index = Number(event.target.dataset.guideCheck);
    if (event.target.checked) guideState.checked.add(index); else guideState.checked.delete(index);
    document.getElementById('guide-checklist-status').textContent = guideChecklistStatus();
  }
});
