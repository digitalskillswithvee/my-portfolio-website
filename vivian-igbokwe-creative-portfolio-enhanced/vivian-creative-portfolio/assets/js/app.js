const projectData = {
  what: {
    kicker: "SOCIAL MEDIA · STRATEGY · PERFORMANCE REPORTING",
    title: "Building a more intentional digital presence",
    summary: "A media and commentary brand supported across multiple social platforms, with a focus on content direction, consistency and learning from performance.",
    sections: [
      ["The context", "The brand needed consistent publishing and a clearer understanding of which content formats and topics were connecting with its audience."],
      ["My contribution", "Social media management, content coordination, caption development, platform publishing, performance monitoring and monthly reporting. Replace this summary with the exact platforms, dates and responsibilities you personally handled."],
      ["The thinking", "I paid attention to how different topics performed across platforms, identified stronger audience responses and used those observations to inform content recommendations."],
      ["Evidence & outcomes", "Add approved platform screenshots, links to published posts and the original reporting period. One previously reported Facebook post reached 69.8K views, and a reported YouTube period recorded +532 subscribers. Verify dates and attribution before publishing these figures."],
      ["What I'd improve next", "Build a repeatable content testing rhythm, connect each content pillar to a clear audience need and use reporting to guide the next month's creative decisions."]
    ],
    note: "Client work. Confirm the client name, permission to display assets and exact reporting dates before publishing."
  },
  fashion: {
    kicker: "SOCIAL MEDIA · CONTENT · BRAND COMMUNICATION",
    title: "Creating a consistent brand voice",
    summary: "Supporting fashion and lifestyle brands with content execution and social media communication that feels recognisable, relevant and aligned with the brand.",
    sections: [
      ["The context", "A fashion brand needs a steady stream of content that communicates product value, gives customers useful information and keeps the brand present between promotions."],
      ["My contribution", "Add the exact account, platforms, content formats and dates you managed. Potential evidence includes content calendars, approved captions, campaign posts and community engagement examples."],
      ["The creative approach", "Show how you translated product details into customer-facing messages, balanced promotional and non-promotional content and maintained consistency."],
      ["Evidence & outcomes", "Replace this section with real content examples, reach or engagement figures and client feedback. Do not add metrics unless you can verify them."],
      ["What I'd improve next", "Use recurring content formats, customer questions and product education to build a more useful content mix."]
    ],
    note: "Client work. Add only approved brand materials and results that can be attributed to your work."
  },
  golden: {
    kicker: "COMMUNITY MANAGEMENT · CUSTOMER SUPPORT · ONBOARDING",
    title: "Making onboarding feel clear and human",
    summary: "Helping a digital community move from first contact to confident participation through clear communication, structured onboarding and responsive support.",
    sections: [
      ["The context", "A growing digital community needs clear entry points, consistent information and a dependable way to handle questions as new people join."],
      ["My contribution", "Your experience included welcoming and onboarding participants, explaining processes, responding to questions, supporting training sessions, tracking participant progress and escalating issues when needed."],
      ["The approach", "Keep instructions simple, repeat essential information in accessible formats, guide people to the right next step and maintain a calm, helpful tone when questions arise."],
      ["Evidence & outcomes", "Add anonymised screenshots of onboarding messages, training materials, FAQs, community guidelines and any verified participant or response-volume figures."],
      ["What I'd improve next", "Create a searchable knowledge base, standardise recurring answers and build a simple tracking process for unresolved questions."]
    ],
    note: "Anonymise participant details and remove private conversations, phone numbers, account identifiers and financial information."
  },
  ugc: {
    kicker: "UGC · SHORT-FORM VIDEO · STORYTELLING",
    title: "Turning a message into a watchable story",
    summary: "Short-form video work that combines a clear opening, natural delivery and a focused message to make content easier to watch and understand.",
    sections: [
      ["The brief", "Describe the product, service or message, the audience and the intended action. Include usage rights or campaign context where relevant."],
      ["My contribution", "Add your actual role: concept, script, filming, voiceover, editing, on-camera delivery or final revisions. Be specific about what you personally produced."],
      ["The creative choices", "Explain the hook, pacing, framing, on-screen text, visual sequence and call to action. Include the original brief if you have permission."],
      ["Watch the work", "Replace the video placeholder with your own approved video file or an embed from a platform you control."],
      ["What I'd improve next", "Test alternative openings, tighten the first few seconds and make the next action clear without making the delivery feel forced."]
    ],
    note: "Confirm the client's permission and usage-rights period before displaying commissioned UGC publicly."
  },
  campaign: {
    kicker: "SELF-INITIATED CONCEPT · CAMPAIGN STRATEGY",
    title: "A launch campaign built around a real audience need",
    summary: "A demonstration project showing how I move from audience insight to campaign message, content formats and a practical publishing plan.",
    sections: [
      ["The brief", "Create a launch campaign for a fictional Nigerian skincare brand introducing a simple daily routine for busy customers."],
      ["Audience insight", "The audience wants a routine that feels manageable, clear and worth the money. They need product education before they need another promotional message."],
      ["Campaign idea", "A seven-day 'make room for your routine' content series built around one useful product question each day."],
      ["Sample deliverables", "Short-form video scripts, carousel outlines, creator brief, caption bank, publishing schedule and a sample paid-social creative."],
      ["Measurement plan", "Track video retention, saves, product-page clicks, qualified enquiries and conversion. These are proposed measures, not campaign results."]
    ],
    note: "Self-initiated concept project. This is not a campaign commissioned by or run for a real client."
  },
  zero: {
    kicker: "FOUNDER PROJECT · DIGITAL EDUCATION · PRODUCT DEVELOPMENT",
    title: "Zero to SMM Starter Pack",
    summary: "A beginner-focused learning product created to help aspiring social media managers understand the foundations of the role and begin practising with structure.",
    sections: [
      ["The idea", "I wanted to turn practical social media management knowledge into a clear starting point for people who are curious about the field but do not know where to begin."],
      ["What I built", "A self-paced learning experience with structured video lessons, practical templates and a 90-day implementation phase designed to help learners move from understanding concepts to applying them."],
      ["The experience behind it", "This project brings together my experience as a social media practitioner, content strategist and educator. It also demonstrates curriculum planning, information design, audience understanding and learner experience."],
      ["Evidence to add", "Add approved screenshots of the programme, lesson previews, template samples, learner feedback and any verified enrolment or completion figures when available."],
      ["Why it belongs in my portfolio", "It shows that I do not only execute social media work for brands. I can also develop a learning product, organise information and create practical resources for a defined audience."]
    ],
    note: "Founder-created programme. Add actual product visuals and learner feedback only when approved and available. Do not imply learner outcomes or sales figures without evidence."
  },
  support: {
    kicker: "SELF-INITIATED CONCEPT · CUSTOMER EXPERIENCE",
    title: "A thoughtful support journey from first message to resolution",
    summary: "A sample customer-support workflow designed to make responses more consistent while keeping the experience personal and useful.",
    sections: [
      ["The scenario", "A customer has paid for a digital service but cannot access their account. They have already contacted the business once and are frustrated."],
      ["The response principles", "Acknowledge the inconvenience, confirm the relevant details safely, explain the next step and set a realistic expectation for follow-up."],
      ["The workflow", "Receive and categorise the enquiry, verify the issue without requesting sensitive credentials, resolve or escalate, confirm the outcome and record the case."],
      ["Sample assets", "Add an anonymised ticket example, response templates, escalation matrix, FAQ and a simple support tracker."],
      ["Success measures", "Track first response time, resolution time, reopened tickets, customer satisfaction and recurring issue themes."]
    ],
    note: "Self-initiated concept project. The workflow is illustrative and should be adapted to each company's policies and tools."
  }
};

const dialog = document.getElementById("project-dialog");
const dialogContent = document.getElementById("dialog-content");
document.querySelectorAll(".project-open").forEach(button => {
  button.addEventListener("click", () => {
    const key = button.closest("[data-project]").dataset.project;
    const project = projectData[key];
    if (!project) return;
    dialogContent.innerHTML = `
      <span class="dialog-kicker">${project.kicker}</span>
      <h2>${project.title}</h2>
      <p class="dialog-summary">${project.summary}</p>
      ${project.sections.map(([heading, body]) => `<section><h3>${heading}</h3><p>${body}</p></section>`).join("")}
      <div class="dialog-note">${project.note}</div>
      <p><a class="text-link" href="#contact" onclick="document.getElementById('project-dialog').close()">Discuss a similar project ↗</a></p>`;
    dialog.showModal();
  });
});
document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });

document.querySelectorAll(".filter-button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-button").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    document.querySelectorAll(".project-card").forEach(card => {
      card.hidden = filter !== "all" && card.dataset.category !== filter;
    });
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

document.getElementById("year").textContent = new Date().getFullYear();
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Local preview helper: Netlify detects the HTML form at deployment.
// For local testing, the form opens an email draft instead of silently failing.
const contactForm = document.querySelector(".contact-form");
if (location.protocol === "file:" || location.hostname === "localhost" || location.hostname === "127.0.0.1") {
  contactForm.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(contactForm);
    const subject = encodeURIComponent(`Portfolio enquiry: ${data.get("interest")}`);
    const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\nInterest: ${data.get("interest")}\n\n${data.get("message")}`);
    location.href = `mailto:vivianigbokweify@gmail.com?subject=${subject}&body=${body}`;
  });
}
