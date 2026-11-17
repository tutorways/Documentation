# Architecture tradeoffs

TutorWays documents not only what the current tutors do, but also
which supporting technologies are worth adopting as the project grows. This
section records the **pros and cons** of several options that come up often in
tutor design: retrieval-augmented generation, LangChain and LangGraph, vLLM,
and key–value caching.

None of these choices is universally best. The right decision depends on how
much course material the tutor has, how much agency the tutoring loop needs,
whether models are hosted or self-served, and how predictable student questions
are in practice.

## All the pieces together

Each tradeoff page owns one layer. Read them as stacked blocks in one system,
not as competing products: RAG chooses course text, orchestration orders the
steps, the serving engine runs the model, and KV caching reuses attention
state for shared prefixes.

<div class="piece-map" markdown>

<p class="piece-map__title">Where each tradeoff sits</p>
<p class="piece-map__lede">
Key and value appear only in the cache and serving layers. RAG and orchestration
move content and control flow; they are not key/value stores.
</p>

<ul class="piece-stack">
<li class="piece-stack__row">
<p class="piece-stack__layer">Orchestration</p>
<p class="piece-stack__body"><strong>LangChain / LangGraph</strong> — fixed chain or branching graph of tutor steps</p>
</li>
<li class="piece-stack__row piece-stack__row--focus">
<p class="piece-stack__layer">Grounding</p>
<p class="piece-stack__body"><strong>RAG</strong> — question → corpus → retrieved chunks → reply</p>
</li>
<li class="piece-stack__row">
<p class="piece-stack__layer">Serving</p>
<p class="piece-stack__body"><strong>vLLM</strong> — optional self-hosted engine and paged KV memory</p>
</li>
<li class="piece-stack__row piece-stack__row--focus">
<p class="piece-stack__layer">Cache</p>
<p class="piece-stack__body"><strong>KV caching</strong> — reuse Key/Value tensors for shared prompt prefixes</p>
</li>
</ul>

</div>

## Topics

<div class="option-index" markdown>

- **[RAG](rag.md):** grounding answers in a course corpus versus relying on
  the model alone, and when a small corpus limits the payoff
- **[LangChain and LangGraph](langchain-langgraph.md):** a fixed retrieve-then-
  answer pipeline versus an agent that chooses among tools and steps
- **[vLLM](vllm.md):** self-hosted high-throughput inference for open-weight
  models, and the operational cost that comes with it
- **[KV caching](kv-caching.md):** reusing attention state for shared prompts
  and common course context, rather than memorizing specific answers

</div>

## How to read these pages

Each page opens with a **piece map**—a block diagram of the moving parts—then
describes what the technology does in tutor terms, lists advantages and
limitations for this project, and notes when it is likely to help. Where the
project already uses a technique (for example, RAG with a local BM25 corpus),
the page also explains what that choice buys and what it still leaves open.

On the [KV caching](kv-caching.md) page, the map is literal: every token column
splits into a **key** half (where to look) and a **value** half (what content
that position carries).

These notes are decision documentation, not a commitment to adopt every option.
Benchmark work can later test the claims that are measurable, such as latency
and cost under KV caching or retrieval quality under different corpus sizes.
