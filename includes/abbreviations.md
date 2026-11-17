<!-- Glossary: every term below gets a hover definition on every page.
     Keep definitions short, plain and factual. Matching is case-sensitive. -->
*[RAG]: Retrieval-augmented generation: look up relevant course material first, then have the model answer using it.
*[BM25]: A classic keyword-ranking method that scores passages by how well their words match the question.
*[LLM]: Large language model, the AI model that writes the tutor's replies.
*[LLMs]: Large language models, the AI models that write tutor replies.
*[vLLM]: An open-source server for running language models on your own GPUs with high throughput.
*[KV]: Key-value. The attention data a model saves for tokens it has already processed, so it does not recompute them.
*[OpenRouter]: A service that gives one API for models from many providers, so the tutor can switch models without code changes.
*[Socket Mode]: A Slack connection type where the app connects out to Slack, so you do not need a public web server.
*[embeddings]: Number vectors that capture meaning, used to find passages similar to a question even when the words differ.
*[LangChain]: A Python library with building blocks for LLM apps, such as prompts, retrievers and model wrappers.
*[LangGraph]: A library from the LangChain team for building multi-step LLM workflows as graphs of steps.
*[OAuth]: The standard sign-in and permission flow apps use to get access to an account or workspace.
*[prefill]: The first phase of generation, where the model reads the whole prompt before writing any reply.
*[latency]: How long it takes from sending a question to getting the reply.
*[throughput]: How many requests or tokens a system can handle in a given time.
*[inference]: Running a trained model to produce output, as opposed to training it.
*[API key]: A secret string that identifies your account to a service. Keep it private, like a password.
*[slash command]: A chat command that starts with a slash, such as /tutor, typed into Slack or Discord.
