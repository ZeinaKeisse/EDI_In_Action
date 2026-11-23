# EDI in Action — complete GitHub Pages package

This is the complete static website, including the latest interactive Curriculum
User Guide and the changes made in response to the group peer review.

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
- The action plan, private-note downloads, and optional Padlet link.
- Team, accessibility, and privacy pages.
- All local styles, JavaScript, the logo, guide screenshot, and slideshow assets.
- The optional presentation PDF and slide-text file. The Curriculum User Guide
  itself is the interactive webpage, not a PDF.

## Upload the package

1. Download and extract `EDI_in_Action_GitHub_Pages.zip` on your computer.
2. Open or create a GitHub repository, for example `edi-in-action`. GitHub Free
   supports Pages from public repositories; other plans may support private
   repositories. Choose visibility with that in mind.
3. In the repository, use **Add file → Upload files**. For a newly created empty
   repository, use its link to upload existing files.
4. Upload the **contents inside the extracted folder**, including the `assets`
   folder and all its subfolders. Keep every filename and folder name intact.
   Uploading only the ZIP does not unpack and publish the website.
5. Commit the uploaded files to `main`. If your repository uses a pull request,
   merge it into the branch you will publish.

`index.html` must be at the top level of the repository, beside `app.js`,
`styles.css`, and the other website scripts and styles. The `assets` folder must
also be at that level. Do not put an extra package folder above `index.html`.

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

The website opens on **Start here**. Choose **User guide** in the main navigation.
To share the guide directly, open User guide on your published site and copy the
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
| `guide.js`, `guide.css` | Interactive Curriculum User Guide |
| `encounter.js`, `encounter.css` | Case 1 Encounter |
| `case1-content.js`, `case1-explore.js`, `case1-explore.css` | Case 1 teaching moments and reflections |
| `culture.js`, `culture.css` | Case 2 resource review |
| `contribute.js`, `contribute.css` | Action-plan interface |
| `cultural-toolkit.js`, `cultural-toolkit.css` | Indigenous-resource Toolkit material and references |
| `cultural-slides-data.js`, `cultural-slides.js`, `cultural-slides.css` | Presentation viewer and text |
| `assets/` | Images, presentation PDF, slide text, and guide illustration |

Preserve the existing script order in `index.html`. After editing, upload the
changed files to the same publishing branch and check the deployed result.

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
  depends on browser settings. Slide text is not a transcript of that video.

## If the page does not look right

- **Unstyled or mostly blank:** confirm every `.css` and `.js` file was uploaded
  and that JavaScript is enabled. Keep the file and folder names unchanged.
- **Images are missing:** upload the whole `assets` folder, preserving its
  subfolders and capitalization.
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
This package does not add a new license for third-party resources.

## Official GitHub instructions

- [Upload files and folders](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)
- [Configure the publishing branch and folder](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Create and view a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)

Prepared from website source commit: `94332a5c3df1b229595cde6a0dd50f9eeaa338b3`.
