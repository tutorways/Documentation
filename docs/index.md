---
hide:
  - navigation
  - toc
  - path
---

<section class="project-hero" markdown>

<div class="project-hero__copy" markdown>

# TutorWays

TutorWays is an open benchmarking framework for AI tutors. We run the same
course tutor on different surfaces and models, and measure what changes in
teaching quality, cost, speed and deployment effort. These docs cover setup for
each surface, model options, and how the benchmark works.

<div class="project-hero__actions" markdown>
[Explore tutor options](tutor-options/index.md){ .md-button .md-button--primary }
[View benchmarks](benchmark.md){ .md-button }
</div>

</div>

</section>

<section class="surfaces-story" aria-labelledby="surfaces-title">
  <div class="surfaces-story__intro">
    <p class="surfaces-story__kicker">One tutor, wherever students are</p>
    <h2 id="surfaces-title">The same question, asked everywhere</h2>
    <p>The Data 8 tutor runs in each of these places. Only the delivery changes, and that delivery is what TutorWays measures.</p>
  </div>
  <ol class="surfaces-story__steps">
    <li class="surfaces-story__step">
      <div class="surfaces-story__text">
        <h3>In a terminal</h3>
        <p>The local CLI is the fastest way to try the tutor: ask one question, chat, or check which course passages it retrieves.</p>
        <a class="surfaces-story__link" href="tutor-options/interfaces/local-cli/">Local CLI guide</a>
      </div>
      <figure class="surfaces-story__figure surfaces-story__figure--terminal">
        <figcaption>Local CLI</figcaption>
        <pre><code><span class="surfaces-story__prompt">$</span> python -m tutor ask "How do I filter rows of a table?"</code></pre>
      </figure>
    </li>
    <li class="surfaces-story__step">
      <div class="surfaces-story__text">
        <h3>In Slack</h3>
        <p>Students mention the tutor, message it directly, or run <code>/tutor</code>. It connects over Socket Mode, so there is no public server to run.</p>
        <a class="surfaces-story__link" href="tutor-options/interfaces/slack/">Slack guide</a>
      </div>
      <figure class="surfaces-story__figure">
        <figcaption>Slack</figcaption>
        <img src="assets/gallery/slack_demo.png" alt="A student asks the Data 8 tutor in Slack how to filter a table, and the tutor explains the where method." loading="lazy">
      </figure>
    </li>
    <li class="surfaces-story__step">
      <div class="surfaces-story__text">
        <h3>In Discord</h3>
        <p>The same engine answers mentions, direct messages and the <code>/tutor</code> slash command in a course server.</p>
        <a class="surfaces-story__link" href="tutor-options/interfaces/discord/">Discord guide</a>
      </div>
      <figure class="surfaces-story__figure">
        <figcaption>Discord</figcaption>
        <img src="assets/gallery/discord_@_command.png" alt="A student mentions the Data 8 tutor in Discord asking how to filter a table, and the tutor answers with an example using where." loading="lazy">
      </figure>
    </li>
    <li class="surfaces-story__step">
      <div class="surfaces-story__text">
        <h3>In Grok Bot</h3>
        <p>A hosted tutor that sets up the Spring 2026 course materials on its own cloud computer. Nothing to install.</p>
        <a class="surfaces-story__link" href="persistent-ais/grok-bot/">Grok Bot guide</a>
      </div>
      <figure class="surfaces-story__figure surfaces-story__figure--agent">
        <figcaption>Grok Bot</figcaption>
        <div class="surfaces-story__agent">
          <img src="assets/gallery/grok.jpg" alt="" loading="lazy">
          <p><strong>Hosted agent</strong>Keeps the course corpus on its own computer</p>
        </div>
      </figure>
    </li>
    <li class="surfaces-story__step">
      <div class="surfaces-story__text">
        <h3>In a Muse side chat</h3>
        <p>Paste the tutor text into a side chat, and Muse sets up the Data 8 corpus on its own secure computer.</p>
        <a class="surfaces-story__link" href="persistent-ais/muse/">Muse guide</a>
      </div>
      <figure class="surfaces-story__figure surfaces-story__figure--agent">
        <figcaption>Muse</figcaption>
        <div class="surfaces-story__agent">
          <img src="assets/gallery/muse.png" alt="" loading="lazy">
          <p><strong>Hosted agent</strong>Runs the tutor in a side chat, separate from the main chat</p>
        </div>
      </figure>
    </li>
  </ol>
</section>

<section class="routes" aria-labelledby="routes-title">
  <div class="routes__intro">
    <h2 id="routes-title">Choose your route</h2>
    <p>Start where you are. Each branch goes straight to the part of these docs written for you.</p>
  </div>
  <div class="routes__map">
    <span class="routes__trunk" aria-hidden="true"></span>
    <span class="routes__spine" aria-hidden="true"></span>
    <a class="routes__branch" href="tutor-options/">
      <span class="routes__stop" aria-hidden="true"></span>
      <span class="routes__label"><strong>Instructors</strong>Pick a surface and set up the tutor</span>
    </a>
    <a class="routes__branch" href="how-to-use-our-bots/">
      <span class="routes__stop" aria-hidden="true"></span>
      <span class="routes__label"><strong>Students</strong>Start using the Data 8 tutor</span>
    </a>
    <a class="routes__branch" href="benchmark/">
      <span class="routes__stop" aria-hidden="true"></span>
      <span class="routes__label"><strong>Researchers</strong>See how the benchmark evaluates tutors</span>
    </a>
  </div>
</section>

<section class="journey" aria-labelledby="journey-title">
  <h2 id="journey-title">How a question travels</h2>
  <p class="journey__intro">Every self-hosted surface shares one tutoring engine. Select a stop to see what happens there.</p>
  <ol class="journey__stops">
    <li class="journey__stop">
      <button type="button" class="journey__name">Question</button>
      <p class="journey__detail">A student asks something like “How do I filter rows of a table?” in the place they already work.</p>
    </li>
    <li class="journey__stop">
      <button type="button" class="journey__name">Surface</button>
      <p class="journey__detail">The local CLI, Discord and Slack all hand the question to the same tutoring engine, so only the delivery changes.</p>
    </li>
    <li class="journey__stop">
      <button type="button" class="journey__name">Retrieval</button>
      <p class="journey__detail">A local BM25 index of Data 8 Spring 2026 material, with optional embeddings, picks the passages that match the question.</p>
    </li>
    <li class="journey__stop">
      <button type="button" class="journey__name">Model</button>
      <p class="journey__detail">A language model, reached through OpenRouter by default, writes a reply from the question, the tutoring instructions and those passages.</p>
    </li>
    <li class="journey__stop">
      <button type="button" class="journey__name">Reply</button>
      <p class="journey__detail">The answer goes back to the same surface, guiding the student toward the solution instead of handing it over.</p>
    </li>
  </ol>
  <p class="journey__note">Persistent AIs such as Grok Bot and Muse work differently: they keep the course corpus on their own hosted computer. See <a href="persistent-ais/">Persistent AIs</a>.</p>
</section>

<section class="project-details" markdown>

## One tutor, many ways to deliver it

There is no single best way to deploy an LLM tutor. The right approach depends
on where learners work, how quickly and reliably the tutor responds, and what
it costs to operate. TutorWays treats each implementation as both a
usable tutor and a research case study. The goal is to document working
deployment patterns and compare them through practical, repeatable benchmarks.

<div class="project-details__grid" markdown>

<div class="project-details__section" markdown>

### What we currently use

- **Course material:** the UC Berkeley Data 8 Spring 2026 corpus
- **Tutor design:** retrieval-augmented generation grounded in course content
- **Retrieval:** a local BM25 index, with optional provider-hosted embeddings
- **Model service:** OpenRouter, using `openai/gpt-4o-mini` by default and
  supporting other selectable models
- **Interfaces:** a local command-line tutor, Discord, and Slack
- **Persistent AIs:** a Grok Bot template and a Muse side-chat tutor

The self-hosted interfaces use one tutoring engine. Persistent AIs keep the
course corpus on a hosted cloud computer. Documenting both patterns lets the
project study how service and deployment choices affect latency, reliability,
usage, operating cost, and the learner experience.

</div>

<div class="project-details__section" markdown>

### Research direction

The current Data 8 GPT corpus and OpenRouter brain are the first framework
combination, not the intended limit of the project. Tutor interfaces and
framework components are documented separately so that future course corpora
and model brains can be added without restructuring the site.

Benchmark work will compare only options that have been implemented, rather
than assume that one approach is universally best. Results will include the
methodology, harness configuration, test questions, and measured data as
experiments are completed. This makes model comparisons repeatable instead of
depending on isolated demonstrations or impressions.

</div>

</div>

</section>
