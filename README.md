# EDI in Action — complete GitHub Pages package

This is the complete static website, including the latest interactive
Curriculum User Guide and the changes made in response to the group peer review.

The package is ready for **GitHub Pages: main branch, /(root) folder**.
No package installation, build command, database, API key, or ChatGPT account is
required to run this copy.

## What is included

- The home page and current navigation.
- Case 1: **A Project for Everyone?** — Ms. Taylor’s project, interactive
  Encounter sections, four project moments, reflections, and Contribute.
- Case 2: **Choosing Authentic Indigenous Resources** — the fictional resource
  record, optional ratings, response comparisons, reflections, and Contribute.
- The **EDI Toolkit**, sources, and references.
- The **interactive Curriculum User Guide**, including case-specific goals,
  a visual learning journey, worked resource example, Know–Do–Understand mapping,
  follow-up reflection, saving instructions, and optional checklist.
- The action plan, private-note downloads, and optional Padlet link (with three optional prompts and two team examples).
- An optional browser-based **Listen to this page** toolbar with play, pause, resume, stop and speed controls. Speech availability and voice choice depend on browser/device.
- Team, accessibility, and privacy pages, including Zeina Keisse’s supplied
  portrait in Our Team (`assets/team/zeina-keisse.png`).
- All local styles, JavaScript, the logo, guide screenshot, and slideshow assets.
- Slide 4’s English caption data and controller, the original WebVTT caption
  file, a clean text transcript, and the locally bundled Vimeo Player SDK with
  its MIT license.
- The optional presentation PDF and slide-text file. The Curriculum User Guide
  itself is the interactive webpage, not a PDF.

**Case 1 → Encounter → Notice the design:** eight flip cards show a teaching
choice, then a possible benefit and an EDI reflection question. **Show all
reflections** displays both sides together. **Keep for reflection** bookmarks a
feature independently of turning a card or changing views. The **Curriculum
User Guide** now explains these controls and the optional reading view.

Before turning a card, visitors are invited to consider what the teaching choice
might make possible and what they would want to know about the learners.
In **Pause & reflect**, visitors who kept features can optionally open
**Revisit the questions you kept** to see their feature titles and EDI questions.
A saving reminder appears before the note fields. **Download my reflections**
appears above and below the notes; both buttons create the same Encounter
download. Writing and revisiting kept questions remain optional.

## Upload the package

1. Download and extract `EDI_in_Action_GitHub_Pages.zip` on your computer.
2. Open or create a GitHub repository, for example `edi-in-action`. GitHub Free
   supports Pages from public repositories; other plans may support private
   repositories. Choose visibility with that in mind.
3. In the repository, use **Add file → Upload files**. For a newly created empty
   repository, use its link to upload existing files.
4. Upload the **contents inside the extracted folder**, including the `assets`
   and `vendor` folders and all their subfolders. Keep every filename and folder
   name intact.
   Uploading only the ZIP does not unpack and publish the website.
5. Commit the uploaded files to `main`. If your repository uses a pull request,
   merge it into the branch you will publish.

`index.html` must be at the top level of the repository, beside `app.js`,
`styles.css`, and the other website scripts and styles. The `assets` and `vendor`
folders must also be at that level. Do not put an extra package folder above
`index.html`.

The package includes `.nojekyll`, an empty marker that tells Pages to serve this
static site without Jekyll processing. It may be hidden in your file manager;
include it in the upload, or create the same empty file at the repository root.

## Publish with GitHub Pages

In the repository, open **Settings → Pages**. Under **Build and deployment**:

| Setting | Choose |
| --- | --- |
| Source | Deploy from a branch |
| Branch | main (or the branch containing these files) |
| Folder | /(root) |

Select **Save**. When deployment finishes, use **Visit site** on the Pages
settings screen. Share that published website link with visitors.

A standard Pages publication is publicly accessible. Repository visibility and
website access are separate settings; a private repository does not by itself
make a Pages website private. This package includes no authentication system.

## Search-engine indexing

The HTML head contains these explicit indexing rules:

```html
<meta name="robots" content="noindex, nofollow, noimageindex">
<meta name="googlebot" content="noindex, nofollow, noimageindex">
```

Every activity and guide section uses the same `index.html`, so the rules remain
in place across the website’s hash routes. They ask supporting search engines
not to index the page, follow its links, or index images from this page.

Allow Google to crawl the HTML so it can read `noindex`; do not combine this with
a `robots.txt` rule that blocks the page. Existing search results can remain
until Google processes the updated page.

These tags do not require a login or prevent visits through a direct link. They
apply to this HTML document, not the public GitHub repository or separately
accessible PDF, image, and text files. Non-HTML resources require their own
indexing controls, such as an `X-Robots-Tag` HTTP response header.

Sources: [Google’s noindex guidance](https://developers.google.com/search/docs/crawling-indexing/block-indexing)
and [robots meta tag specifications](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag).

## Open the guide directly

The website opens on **Start here**. Choose **Curriculum User Guide** in the main navigation.
To share the guide directly, open Curriculum User Guide on your published site and copy the
URL from the browser. Its hash route is `#guide`.

Other current routes include:

| Route | Content |
| --- | --- |
| `#explore` | Choose a case |
| `#encounter` | Case 1 Encounter |
| `#case1-explore` | Case 1 project moments |
| `#case1-reflect` | Case 1 Reflect & Decide |
| `#case1-contribute` | Case 1 action plan |
| `#culture` | Case 2 Encounter |
| `#culture-explore` | Case 2 resource review |
| `#culture-reflect` | Case 2 Reflect & Decide |
| `#culture-contribute` | Case 2 action plan |
| `#culture-slides` | Optional presentation |
| `#toolkit` | EDI Toolkit |
| `#plan` | Action plan |
| `#guide` | Interactive Curriculum User Guide |

These hash routes and the relative asset paths work when the website is hosted
inside a GitHub repository path. No routing rewrite is required.

## Local opening and editing

Open `index.html` in a current browser with JavaScript enabled. Keep its companion
files and `assets` folder in place. Edit the files below when changing content:

| Files | Purpose |
| --- | --- |
| `index.html` | Shared page structure and stylesheet/script loading order |
| `app.js`, `styles.css` | Shared navigation, common pages, and main visual design |
| `read-aloud.js`, `accessibility.css` | Optional read-aloud controls plus visual/accessibility refinements |
| `guide.js`, `guide.css` | Interactive Curriculum User Guide |
| `encounter.js`, `encounter.css` | Case 1 Encounter |
| `case1-content.js`, `case1-explore.js`, `case1-explore.css` | Case 1 teaching moments and reflections |
| `culture.js`, `culture.css` | Case 2 resource review |
| `contribute.js`, `contribute.css` | Action-plan interface |
| `cultural-toolkit.js`, `cultural-toolkit.css` | Indigenous-resource Toolkit material and references |
| `cultural-slides-data.js`, `cultural-slides.js`, `cultural-slides.css` | Presentation viewer and text |
| `cultural-video-captions.js` | Local English caption cues, readable transcript, caption controls, and synchronization with the Vimeo player |
| `vendor/vimeo-player.js`, `vendor/VIMEO-LICENSE.md` | Locally bundled Vimeo Player SDK and its MIT license |
| `assets/cultural-slides/authentic-first-peoples-texts.en.vtt` | Original downloadable WebVTT captions for the slide 4 video |
| `assets/cultural-slides/authentic-first-peoples-texts-transcript.txt` | Clean downloadable video transcript, separate from slide text |
| Other files in `assets/` | Images, presentation PDF, slide text, and guide illustration |

Preserve the existing script order in `index.html`. After editing, upload the
changed files to the same publishing branch and check the deployed result.

## Slide 4 video, captions, and transcript

Open the optional presentation at `#culture-slides` and choose **slide 4**.
The FNESC Vimeo video attempts to play with sound, subject to browser settings.
English captions prepared by **Zeina Keisse** appear below the video and are on
by default. Use **Captions on/off** to show or hide them. They follow the
player’s media time, including pauses and seeks.

Choose **Expand slideshow** to enlarge the video and keep the website’s captions
visible together. These captions are displayed by the website outside the Vimeo
frame; they do not appear in Vimeo’s separate native fullscreen or
picture-in-picture views.

If you prefer to read, pause the video and open **Read video transcript**. Use
**Download video transcript (.txt)** for the clean text copy, or **Download
captions (.vtt)** for the original timed caption file. The presentation’s slide
text is a separate document. Caption wording and timing preserve the supplied
VTT; this package does not claim that their accuracy has been verified against
the audio.

Caption data, the transcript, and the Vimeo Player SDK are included locally.
The video itself still streams from Vimeo and requires an internet connection.
If video playback or live caption synchronization is unavailable, the readable
transcript and its download remain available. Changing slides or leaving the
presentation stops the player and its caption controller.

## How visitor data and external resources work

- Choices and notes stay in the memory of the open page. Internal navigation
  retains them; refreshing, closing, or leaving may clear them. There is no
  autosave, account database, or server submission of activity responses.
- Visitors can download their reflections, resource review, and plan. Case 1
  Encounter notes and Explore reflections are separate downloads.
- Padlet sharing is optional and separate. Nothing from a private plan is
  posted automatically. The board’s access and moderation arrangements remain
  as described on the website.
- External videos, Padlet, and reference links require internet access and use
  the providers’ access and privacy arrangements.
- The optional presentation loads a Vimeo player on slide 4. Autoplay with sound
  depends on browser settings. The slide’s English captions and video transcript
  are hosted with the website. Slide text remains separate from that transcript.

## If the page does not look right

- **Unstyled or mostly blank:** confirm every `.css` and `.js` file was uploaded
  and that JavaScript is enabled. Keep the file and folder names unchanged.
- **Images are missing:** upload the whole `assets` folder, preserving its
  subfolders and capitalization.
- **Live captions are unavailable:** confirm that `cultural-video-captions.js`
  and the complete `vendor` folder were uploaded. Check the internet connection
  needed for Vimeo. Use **Read video transcript** while playback is unavailable.
- **404 at the homepage:** check that `index.html` is in the selected publishing
  folder, and that Pages is using the branch you uploaded to and `/(root)`.
- **Old content:** check that the deployment completed, then reload the page.
  Keep any notes before refreshing.
- **ZIP visible in the repository but no website:** extract it locally and upload
  the files inside it.

## Project status and attribution

The package preserves the current website’s teaching content, visual design,
working-preview labels, creator credits, and search-engine `noindex` request.
`noindex` is not a password or access restriction. This export clarifies hosting and account access for a static GitHub copy and
includes explicit search-engine indexing rules in the HTML head.

EDI in Action is an ETEC 510 design project by **(Avery) Yan Gao, Shishona Austin,
and Zeina Keisse**, at the University of British Columbia. Retain the creator
credits and source acknowledgements, including those in Shishona Austin’s
presentation. Linked and included third-party material retains its own terms.
Captions were not provided with the original video. English captions were
prepared by **Zeina Keisse** for EDI in Action to support accessibility.
A readable transcript is also available on slide 4. The video’s original
creator credits and source acknowledgements are retained. The
locally bundled Vimeo Player SDK retains its MIT license in
`vendor/VIMEO-LICENSE.md`; this does not license the video or other teaching
resources. This package does not add a new license for third-party resources.

## Official GitHub instructions

- [Upload files and folders](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)
- [Configure the publishing branch and folder](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Create and view a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)

Published source commit: `b3ffaacd88c983e4fcfc753230a0f547f3effe3c`.
This package includes the slide 4 captions and transcript, with hosting/access
wording adapted for a standalone GitHub Pages deployment.

## Optional read aloud and accessibility

The reader is available above the main content on each website route. Select
**Listen to this page** to hear the currently visible content; **Pause**,
**Resume**, and **Stop** control narration. Choose a **Speed** before or during
playback; changes take effect at the next spoken passage. Moving to another
website section stops the narration.

The feature uses the browser's built-in `speechSynthesis` API, requires a user
click to start, and does not read private text typed into activity fields.
Supported voices and how they are provided vary by browser and device; certain
voices may rely on browser services. No separate speech API is shipped with the
website. The toolbar does not replace a screen reader. If speech synthesis is
unavailable, visitors can use native Read aloud/VoiceOver/NVDA or read the
website text. To avoid competing audio, pause or mute the slide 4 video
before listening to the page; the FNESC video retains autoplay-with-sound
(subject to the browser's policies).

The additional CSS strengthens keyboard focus, borders and placeholder contrast.
The Padlet invitation describes the current welcome, three prompts and two
team examples. Accessibility is an ongoing practice: the team should complete
assistive-technology and media testing before claiming WCAG conformance.

## Release information

This package integrates the previously proposed EDI in Action refinements,
without altering the programme's teaching cases, team credits, video playback,
noindex directives or existing activity downloads. It is a local release
package for GitHub Pages; uploading to GitHub or other hosting is a separate
action.
