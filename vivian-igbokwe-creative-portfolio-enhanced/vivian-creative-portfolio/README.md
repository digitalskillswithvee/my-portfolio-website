# Vivian Igbokwe | Creative Portfolio

This is the enhanced editorial version of the custom portfolio website.

## Design updates in this version
- Retains the editorial layout, typography and restrained palette from the version you approved.
- Adds small, intentional graphic pattern blocks as design details.
- Presents software tools with logo marks and labels instead of a plain text list.
- Keeps project case studies, mobile navigation, category filters, reveal effects and the Netlify contact form.

## How to replace your photos
Open `assets/images/`. Keep the filenames the same when replacing an image:
- `vivian-portrait-placeholder.svg` — main portrait in the first section.
- `about-portrait-placeholder.svg` — second portrait in the About section.

Prepare portrait images as JPG, PNG or WebP. A vertical image works best. Rename your selected image to the exact filename referenced in `index.html`, or change the image `src` in `index.html` to your new filename. If you use JPG, update the extension in the HTML too.

## How to replace project images
Replace the files below with real, approved screenshots, artwork or video thumbnails:
- `project-media.svg`
- `project-fashion.svg`
- `project-community.svg`
- `project-video.svg`
- `project-campaign.svg`
- `project-support.svg`

Keep the same filenames and extensions if you want the easiest replacement. Use landscape images, ideally around 1400 x 1000 pixels or larger. If you use different filenames, update the matching `src` attributes in `index.html`.

For screenshots, crop out private information first. Do not publish client assets, analytics, customer messages or brand work unless you have permission.

## How to add videos
1. Put an MP4 file in `assets/videos/`, for example `ugc-sample.mp4`.
2. Open `index.html` and find the UGC / video project section or its project card.
3. Add a video element where you want the preview to appear:

   `<video controls playsinline preload="metadata" poster="assets/images/project-video.svg"><source src="assets/videos/ugc-sample.mp4" type="video/mp4"></video>`

4. Add CSS to size it consistently if needed:

   `video { width: 100%; height: 100%; object-fit: cover; }`

Alternatively, use an embed link from a platform where the video is publicly viewable and that you control.

## How to edit case-study text
Open `assets/js/app.js`. Near the top is `projectData`. Each project has a `kicker`, `title`, `summary`, `sections` and `note`. Edit the text between the quotation marks. Keep the punctuation and commas in place. Do not publish unverified results or imply concept work was commissioned client work.

## How to update tools
The logo grid is in `index.html` under `MY TOOLKIT`. Each tool has an image URL and a label. The logo images are loaded from Simple Icons CDN, so the visitor needs an internet connection to see them. If a logo doesn't load, the tool name remains visible. Freshdesk uses a text monogram fallback.

## How to update testimonials
In `index.html`, find the section with `id="kind-words"`. Replace the sample testimonial text, name and role with genuine feedback you have permission to publish. Or remove a testimonial card until you have approved feedback.

## CV download
The CV link expects `assets/documents/vivian-igbokwe-cv.pdf`. Add your PDF with that exact name, or update/remove the link in `index.html`.

## Contact form
The contact form is configured for Netlify Forms. In your Netlify dashboard, enable form detection and redeploy. Submit a test enquiry and confirm it appears in the Forms dashboard.

## Publishing an update
1. Extract this ZIP.
2. Make edits inside the `vivian-creative-portfolio` folder.
3. Open the existing Netlify site and go to Deploys.
4. Upload the updated `vivian-creative-portfolio` folder.
5. Wait for the deploy to finish and refresh your existing site URL.
