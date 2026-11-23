function planField(field, extraClass='') {
  const [id,label,hint,placeholder]=field;
  return `<div class="form-field ${extraClass}"><label for="plan-${id}">${label}</label><span class="hint" id="hint-${id}">${hint}</span><textarea id="plan-${id}" name="${id}" rows="3" aria-describedby="hint-${id} plan-privacy" placeholder="${placeholder}">${esc(state.plan[id])}</textarea></div>`;
}

function plan(fromCase=false) {
  const isCulture=fromCase==='culture';
  const reflectRoute=isCulture?'#culture-reflect':'#case1-reflect';
  return `<div class="shell contribute-shell">
    ${fromCase?(isCulture?culturalBreadcrumb('Contribute'):case1Breadcrumb('Contribute')):''}
    <header class="contribute-intro"><p class="eyebrow">Contribute</p><h1>From Reflection to Your Own Teaching Practice</h1><p>Think about a lesson, project, classroom activity, or assessment that you currently use or plan to develop.</p><p>You do not need to redesign the entire learning experience. Instead, identify one teaching decision that you would like to examine through an EDI lens.</p></header>
    ${fromCase?(isCulture?culturalJourney('contribute'):case1Journey('contribute')):''}
    <div class="plan-layout">
      <form class="plan-form" id="plan-form" aria-labelledby="action-plan-title">
        <h2 id="action-plan-title">Your Action Plan</h2><p class="plan-optional">All prompts are optional. Write what is useful to your own context.</p>
        <p class="draft-note" id="plan-privacy">Your notes stay in this open page and are not submitted or automatically saved. Moving between website sections keeps your notes. Download or copy them before refreshing, closing, or leaving the website.</p>
        ${fields.map(field=>planField(field,['diversity','equity','inclusion'].includes(field[0])?'plan-lens plan-lens-'+field[0]:'')).join('')}
        <details class="plan-source-notes"${state.plan.reasoning?' open':''}><summary>Principle and source notes <span>(optional)</span></summary>${planField(reasoningField)}</details>
        <div class="form-field plan-review-date"><label for="plan-date">A date to revisit <span class="micro">(optional)</span></label><input type="date" id="plan-date" name="date" value="${esc(state.plan.date)}"></div>
        <div class="button-row"><button type="button" class="btn" id="download-plan">Download my plan</button><button type="button" class="btn secondary" id="print-plan">Print or save as PDF</button></div>
        <p class="micro">Download creates an editable text file. The print dialog can save a PDF where your device supports it.</p><p id="plan-status" class="plan-status" role="status"></p>
      </form>
      <aside class="plan-aside">
        <div><p class="eyebrow">One decision at a time</p><h2>A starting point for your practice.</h2><p>Keep the intended learning goal in view. Choose a manageable change, try it in your context, and revisit what you notice.</p><a class="text-link" href="#toolkit">Revisit the EDI Toolkit</a>${fromCase?`<p><a class="text-link" href="${reflectRoute}">Return to your case reflections</a></p>`:''}</div>
        <details><summary>See an example plan</summary>${examplePlan}<p class="micro">An illustration to adapt, not a prescribed solution.</p></details>
        <div><h2>Your plan is separate from Padlet.</h2><p>Writing here does not post to Padlet. You decide whether to share a separate insight, question, or idea.</p><a class="text-link" href="#privacy">Privacy and sharing</a></div>
      </aside>
    </div>
    <section class="contribute-connect" aria-labelledby="connect-title"><div class="connect-heading"><p class="eyebrow">Continue the conversation</p><h2 id="connect-title">Connect with Other Educators</h2><p>Learning about EDI is an ongoing and collaborative process. Other educators may notice different aspects of the same teaching design or approach similar challenges in different ways.</p></div><div class="connect-body"><p>Visit our Padlet discussion space to share an insight, question, or teaching idea.</p><p>You might consider sharing:</p><ul><li>A teaching decision that you have reconsidered.</li><li>An EDI tension that you have encountered or anticipate in your teaching.</li><li>A practical strategy that you would like to explore.</li><li>A question that you would like to discuss with other educators.</li></ul><p>Read others’ contributions and, if you wish, respond by offering an alternative perspective, a question, or a constructive suggestion.</p><p class="connect-privacy"><strong>Sharing is voluntary.</strong> Check the board’s visibility before posting. Share a small insight rather than your full plan, avoid identifiable or confidential information, and respond respectfully. Hiding your name does not guarantee anonymity.</p><a class="btn" id="join-padlet" href="https://padlet.com/zkeisse/edi-in-action-s025pjsvtqq6rkrj7ius" target="_blank" rel="noopener noreferrer" aria-describedby="padlet-access">Join the Conversation on Padlet</a><p id="padlet-access" class="micro">Opens in a new tab. The link is confirmed; board visibility, sign-in, moderation, and the removal-request route are still awaiting team confirmation. Your action plan is not shared automatically.</p><a href="#privacy" class="text-link">Read privacy and sharing details before posting</a></div></section>
    <div class="contribute-footer"><a class="text-link" href="${fromCase?reflectRoute:'#explore'}">${fromCase?'Back to Reflect & Decide':'Return to the activities'}</a><a class="text-link" href="#toolkit">Explore the EDI Toolkit</a></div>
    <div class="print-only" id="print-plan-content"></div>
  </div>`;
}
