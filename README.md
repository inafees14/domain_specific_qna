## GroundedQA — Deterministic Retrieval-Augmented Reasoning Engine for Faithful Document Intelligence on CPU

GroundedQA is a lightweight, CPU-efficient Retrieval-Augmented Generation (RAG) system designed to answer questions strictly from private or domain-specific documents such as resumes, textbooks, and technical notes. Unlike generic chatbot pipelines that prioritize fluency, GroundedQA explicitly prioritizes factual grounding, deterministic behavior, and controlled generation. The system combines semantic retrieval using dense embeddings with a constrained instruction-tuned language model to minimize hallucination and provide reliable, reproducible answers in resource-limited environments.

---

## Why GroundedQA Exists

Large language models are powerful but inherently probabilistic and prone to hallucination when knowledge is missing or ambiguous. This becomes unacceptable in document-centric tasks where factual correctness is more important than creative fluency. GroundedQA addresses this by enforcing three core principles: retrieval-first reasoning, strict answer constraints, and deterministic decoding. If an answer is not explicitly present in the retrieved context, the system refuses to guess and returns a controlled fallback response.

---

## System Architecture

```
User Query
    ↓
Semantic Encoder (MiniLM Embeddings)
    ↓
FAISS Vector Index (Top-K Similarity Search)
    ↓
Token-Bound Context Constructor
    ↓
FLAN-T5-Base (Deterministic Generator)
    ↓
Grounded Answer or Explicit Refusal
```

Documents are loaded from PDFs, split into semantically coherent chunks, embedded into dense vector representations, indexed using FAISS for fast approximate nearest neighbor search, and dynamically assembled into a token-safe context window before being passed to the language model for constrained answer generation.

---

## Core Components

**Document Ingestion:** PDFs are parsed using PyPDFLoader, converting each page into structured text units suitable for downstream processing.

**Text Chunking:** Recursive character splitting ensures chunks remain semantically coherent while preserving overlap for contextual continuity. Chunk sizes are tuned differently for structured documents (e.g., resumes) and narrative documents (e.g., books) to prevent semantic leakage across sections.

**Embedding Model:** Sentence-Transformers MiniLM generates dense embeddings. Each chunk $c_i$ is mapped into a vector $\phi(c_i) \in \mathbb{R}^{384}$. Query similarity is computed using cosine similarity:
$$\text{sim}(q, c_i) = \frac{\phi(q) \cdot \phi(c_i)}{|\phi(q)| |\phi(c_i)|}$$

**Vector Search:** FAISS performs approximate nearest neighbor retrieval to efficiently select the top-k most relevant chunks for a given query.

**Context Construction:** Retrieved chunks are concatenated until the cumulative token count remains below the model’s maximum input capacity (480 tokens for safety). Token-level truncation prevents silent overflow and preserves model stability.

**Language Model:** FLAN-T5-Base (encoder–decoder architecture) is used for instruction-following and grounded generation. This model provides better faithfulness than decoder-only chat models while remaining CPU-efficient.

**Decoding Control:** Deterministic decoding is enforced using temperature = 0 and sampling disabled to eliminate randomness and creative drift.

**Prompt Constraints:** The model is explicitly instructed to answer strictly from provided context and to refuse when information is missing. This transforms the LLM into a conditional extractor rather than a free-form generator.

---

## Mathematical View of the Pipeline

Let the document corpus be $D = {c_1, c_2, ..., c_n}$. Each chunk is embedded using an encoder $\phi(\cdot)$. For a query $q$, the retriever computes similarity scores and selects top-k chunks:
$$C_q = \arg\max_{c_i \in D} \text{sim}(q, c_i)$$

The final generation step computes:
$$\hat{y} = f_{\theta}(\text{Prompt}(q, C_q))$$
subject to strict decoding constraints and token limits.

---

## Example Behavior

**Query:** What is his name?
**Answer:** Mohammad Nafees Iqbal

**Query:** What are his skills?
**Answer:** Returns only the Skills section extracted from the resume chunk.

**Query:** How many stories are there?
**Answer:** The information is not available in the provided document.

This refusal behavior is intentional and prevents hallucinated facts.

---

## Installation

```
pip install -U transformers sentence-transformers langchain langchain-community langchain-text-splitters faiss-cpu pypdf accelerate
```

---

## Usage (High-Level)

1. Mount Google Drive and define project directories.
2. Download and locally store FLAN-T5-Base.
3. Load PDFs and split into chunks.
4. Generate embeddings and build FAISS index.
5. Query using the `answer_question()` function.

The system runs entirely on CPU and requires no external APIs.

---

## Design Decisions

* Encoder–decoder models were chosen over decoder-only models for improved grounding behavior.
* Token-aware context construction prevents hidden truncation and hallucination.
* Deterministic decoding ensures reproducibility and auditability.
* Refusal policy improves reliability in safety-critical or factual domains.

---

## Known Limitations

* Cannot perform global aggregation tasks such as counting across the entire document corpus.
* Performance depends on document structure and chunk quality.
* Not intended for creative or conversational generation.

---

## Future Enhancements

* Source citation per answer.
* Retrieval confidence scoring.
* Reranking models for improved precision.
* Lightweight agent orchestration.
* Cross-document aggregation mechanisms.

---

## Author

Mohammad Nafees Iqbal
M.Sc. Data Science, Aligarh Muslim University
GitHub: [https://github.com/inafees14](https://github.com/inafees14)
LinkedIn: [https://linkedin.com/in/nafees-iqbal](https://linkedin.com/in/nafees-iqbal)

You’ve now built something that looks **professional, credible, and engineering-driven**, not just another demo.
