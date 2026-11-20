"use client";

import { useEffect, useMemo, useState } from "react";

type Domain =
  | "AI & ML"
  | "Generative AI"
  | "Foundation Models"
  | "Responsible AI"
  | "Security & Governance";
type Question = {
  prompt: string;
  options: string[];
  answer: number;
  explanation: string;
  domain: Domain;
};
type Test = {
  id: number;
  title: string;
  subtitle: string;
  level: string;
  minutes: number;
  accent: string;
  questions: Question[];
};

const q = (
  prompt: string,
  options: string[],
  answer: number,
  explanation: string,
  domain: Domain,
): Question => ({ prompt, options, answer, explanation, domain });

const tests: Test[] = [
  {
    id: 1,
    title: "Practice Test 01",
    subtitle: "Core concepts · Bedrock · Prompting",
    level: "Foundation",
    minutes: 35,
    accent: "orange",
    questions: [
      q(
        "A retailer wants to group customers by purchasing behavior without predefined labels. Which learning approach is most appropriate?",
        [
          "Supervised classification",
          "Unsupervised clustering",
          "Reinforcement learning",
          "Time-series regression",
        ],
        1,
        "Clustering is an unsupervised technique that discovers natural groupings in unlabeled data.",
        "AI & ML",
      ),
      q(
        "A model performs extremely well on training data but poorly on new data. What is the most likely issue?",
        [
          "Underfitting",
          "Overfitting",
          "Data encryption",
          "Low inference latency",
        ],
        1,
        "Overfitting happens when a model learns the training data too closely and fails to generalize.",
        "AI & ML",
      ),
      q(
        "Which metric is most useful when both false positives and false negatives matter for an imbalanced classification dataset?",
        ["F1 score", "R-squared", "Mean squared error", "Training loss only"],
        0,
        "F1 balances precision and recall, making it useful for imbalanced classification problems.",
        "AI & ML",
      ),
      q(
        "What does a token represent in a large language model?",
        [
          "A complete database record",
          "A unit of text processed by the model",
          "A model encryption key",
          "A GPU instruction",
        ],
        1,
        "Tokens are the units—often words or word pieces—that language models process.",
        "Generative AI",
      ),
      q(
        "A team needs more deterministic responses from a foundation model. Which change should it make?",
        [
          "Raise temperature",
          "Lower temperature",
          "Increase top-p to 1",
          "Add more output tokens",
        ],
        1,
        "Lower temperature reduces randomness and makes outputs more consistent.",
        "Generative AI",
      ),
      q(
        "Which model family is especially associated with generating images from text prompts?",
        ["Decision trees", "Diffusion models", "Linear regression", "K-means"],
        1,
        "Diffusion models iteratively denoise data and are widely used for text-to-image generation.",
        "Generative AI",
      ),
      q(
        "A company wants a generative AI assistant to answer from its current product manuals without retraining the model. Which pattern should it use?",
        [
          "Retrieval-augmented generation",
          "Batch transform",
          "K-means clustering",
          "Data labeling",
        ],
        0,
        "RAG retrieves relevant private knowledge and includes it as context at inference time.",
        "Foundation Models",
      ),
      q(
        "Which Amazon Bedrock feature can orchestrate actions across company systems from natural-language requests?",
        [
          "Agents for Amazon Bedrock",
          "Amazon Rekognition labels",
          "SageMaker Ground Truth",
          "Amazon Transcribe",
        ],
        0,
        "Agents for Amazon Bedrock can reason about tasks, call APIs, and use knowledge bases.",
        "Foundation Models",
      ),
      q(
        "A prompt includes two examples of the desired input-output format. What prompting technique is this?",
        [
          "Zero-shot prompting",
          "Few-shot prompting",
          "Model distillation",
          "Fine-tuning",
        ],
        1,
        "Few-shot prompting supplies a small number of examples in the prompt.",
        "Foundation Models",
      ),
      q(
        "Which approach is best when a company must deeply adapt a model to specialized medical terminology?",
        [
          "Increase temperature",
          "Domain adaptation fine-tuning",
          "Use a shorter prompt",
          "Switch to batch inference",
        ],
        1,
        "Domain adaptation fine-tuning teaches the model specialized language and patterns.",
        "Foundation Models",
      ),
      q(
        "A hiring model produces systematically different outcomes for equally qualified demographic groups. Which responsible AI principle is most directly affected?",
        ["Fairness", "Latency", "Scalability", "Availability"],
        0,
        "Fairness focuses on avoiding unjust or systematically different outcomes across groups.",
        "Responsible AI",
      ),
      q(
        "Which SageMaker capability helps identify bias and explain model predictions?",
        [
          "SageMaker Clarify",
          "SageMaker Canvas",
          "SageMaker Neo",
          "SageMaker Feature Store",
        ],
        0,
        "SageMaker Clarify provides bias detection and model explainability capabilities.",
        "Responsible AI",
      ),
      q(
        "A workload in a private VPC must call Amazon Bedrock without traversing the public internet. What should be used?",
        [
          "Internet gateway",
          "AWS PrivateLink interface endpoint",
          "Public S3 website",
          "CloudFront distribution",
        ],
        1,
        "An interface VPC endpoint powered by AWS PrivateLink provides private connectivity to supported AWS services.",
        "Security & Governance",
      ),
      q(
        "What is the best way to give a Bedrock knowledge base access only to its required S3 documents?",
        [
          "Make the bucket public",
          "Use a least-privilege IAM service role",
          "Share root credentials",
          "Disable encryption",
        ],
        1,
        "A least-privilege service role grants only the specific permissions the workload needs.",
        "Security & Governance",
      ),
    ],
  },
  {
    id: 2,
    title: "Practice Test 02",
    subtitle: "Evaluation · Responsible AI · Security",
    level: "Exam Ready",
    minutes: 35,
    accent: "violet",
    questions: [
      q(
        "A business analyst with no coding experience needs to build demand forecasts from tabular data. Which AWS service is designed for this use case?",
        [
          "Amazon SageMaker Canvas",
          "Amazon EC2 Trn1",
          "Amazon Bedrock Guardrails",
          "Amazon Rekognition",
        ],
        0,
        "SageMaker Canvas provides a visual, no-code interface for building ML models and predictions.",
        "AI & ML",
      ),
      q(
        "Which type of learning improves a policy through rewards and penalties?",
        [
          "Supervised learning",
          "Unsupervised learning",
          "Reinforcement learning",
          "Transfer encoding",
        ],
        2,
        "Reinforcement learning trains an agent to maximize cumulative rewards through interaction.",
        "AI & ML",
      ),
      q(
        "A company needs to process a multi-gigabyte dataset and does not need immediate predictions. Which SageMaker inference option fits best?",
        [
          "Real-time endpoint",
          "Batch transform",
          "Serverless inference",
          "Streaming inference",
        ],
        1,
        "Batch transform is designed for offline inference on large datasets when immediate responses are unnecessary.",
        "AI & ML",
      ),
      q(
        "What are embeddings used for in a generative AI application?",
        [
          "Representing meaning as numeric vectors",
          "Encrypting prompts",
          "Allocating GPU memory",
          "Counting API calls",
        ],
        0,
        "Embeddings encode semantic meaning as vectors, enabling similarity search and retrieval.",
        "Generative AI",
      ),
      q(
        "A model gives a confident but factually invented response. What is this called?",
        ["Normalization", "Hallucination", "Regularization", "Tokenization"],
        1,
        "A hallucination is plausible-sounding content generated without reliable factual grounding.",
        "Generative AI",
      ),
      q(
        "Which technique can create a smaller, faster model by teaching it to imitate a larger model?",
        [
          "Model distillation",
          "Data encryption",
          "Prompt injection",
          "Feature storage",
        ],
        0,
        "Distillation transfers behavior from a larger teacher model to a smaller student model.",
        "Generative AI",
      ),
      q(
        "A team wants to compare Bedrock foundation models using company-specific prompts and human preference. What should it use?",
        [
          "Model evaluation with custom datasets and human workers",
          "CloudWatch CPU metrics only",
          "A public leaderboard only",
          "Random model selection",
        ],
        0,
        "Human evaluation with representative custom prompts directly measures alignment with company preferences.",
        "Foundation Models",
      ),
      q(
        "Which Bedrock feature helps block denied topics and harmful content?",
        [
          "Knowledge Bases",
          "Guardrails",
          "Model distillation",
          "Provisioned Throughput",
        ],
        1,
        "Guardrails can define denied topics, content filters, and other safeguards for model inputs and outputs.",
        "Foundation Models",
      ),
      q(
        "A support assistant must search internal documents and cite relevant passages. What should the solution add?",
        [
          "A knowledge base with vector retrieval",
          "A higher temperature",
          "Image segmentation",
          "A larger batch size",
        ],
        0,
        "A Bedrock knowledge base supports retrieval over private content for grounded responses.",
        "Foundation Models",
      ),
      q(
        "Which prompt attack tries to override the application’s original instructions?",
        [
          "Prompt injection",
          "Model compression",
          "Cross-validation",
          "Data normalization",
        ],
        0,
        "Prompt injection places malicious instructions in input to manipulate model behavior.",
        "Foundation Models",
      ),
      q(
        "A training dataset underrepresents rural customers. Which issue is most likely?",
        [
          "Sampling bias",
          "Low latency",
          "Model encryption",
          "Concept drift only",
        ],
        0,
        "Sampling bias occurs when the dataset does not adequately represent the target population.",
        "Responsible AI",
      ),
      q(
        "Why should a high-impact AI decision include human review?",
        [
          "To guarantee zero cost",
          "To add oversight and a path to challenge errors",
          "To eliminate all model monitoring",
          "To increase temperature",
        ],
        1,
        "Human oversight improves accountability and enables review of consequential or uncertain decisions.",
        "Responsible AI",
      ),
      q(
        "Which AWS service records API activity for auditing a generative AI workload?",
        [
          "AWS CloudTrail",
          "Amazon Polly",
          "Amazon Personalize",
          "AWS Trainium",
        ],
        0,
        "CloudTrail records account activity and API events for governance, compliance, and auditing.",
        "Security & Governance",
      ),
      q(
        "A company wants to discover sensitive data stored in Amazon S3 before using it for AI. Which service should it consider?",
        ["Amazon Macie", "Amazon Lex", "Amazon Kendra", "AWS DeepRacer"],
        0,
        "Amazon Macie uses machine learning and pattern matching to discover and help protect sensitive S3 data.",
        "Security & Governance",
      ),
    ],
  },
];

const domainColors: Record<Domain, string> = {
  "AI & ML": "#ff9d47",
  "Generative AI": "#f8ce67",
  "Foundation Models": "#79e0d6",
  "Responsible AI": "#b69cff",
  "Security & Governance": "#72a7ff",
};

export default function Home() {
  const [activeTest, setActiveTest] = useState<Test | null>(null);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [flagged, setFlagged] = useState<number[]>([]);
  const [revealed, setRevealed] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);
  const [seconds, setSeconds] = useState(35 * 60);

  useEffect(() => {
    if (!activeTest || finished) return;
    const timer = window.setInterval(
      () =>
        setSeconds((value) => {
          if (value <= 1) {
            setFinished(true);
            return 0;
          }
          return value - 1;
        }),
      1000,
    );
    return () => window.clearInterval(timer);
  }, [activeTest, finished]);

  const score = useMemo(
    () =>
      activeTest?.questions.reduce(
        (sum, question, index) =>
          sum + (answers[index] === question.answer ? 1 : 0),
        0,
      ) ?? 0,
    [activeTest, answers],
  );

  const begin = (test: Test) => {
    setActiveTest(test);
    setCurrent(0);
    setAnswers({});
    setFlagged([]);
    setRevealed([]);
    setFinished(false);
    setSeconds(test.minutes * 60);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (activeTest) {
    const question = activeTest.questions[current];
    const percent = Math.round(
      (Object.keys(answers).length / activeTest.questions.length) * 100,
    );
    const time = `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;

    if (finished) {
      const resultPercent = Math.round(
        (score / activeTest.questions.length) * 100,
      );
      return (
        <main className="exam-shell result-shell">
          <div className="ambient ambient-one" />
          <div className="ambient ambient-two" />
          <section className="result-card">
            <button className="back-link" onClick={() => setActiveTest(null)}>
              ← Back to dashboard
            </button>
            <div
              className={`score-orbit ${resultPercent >= 72 ? "pass" : "review"}`}
            >
              <strong>{resultPercent}%</strong>
              <span>{resultPercent >= 72 ? "PASSED" : "KEEP GOING"}</span>
            </div>
            <p className="eyebrow">TEST COMPLETE</p>
            <h1>
              {resultPercent >= 72
                ? "You’re building real momentum."
                : "Every miss is a map."}
            </h1>
            <p className="result-copy">
              You answered <b>{score}</b> of{" "}
              <b>{activeTest.questions.length}</b> questions correctly. Review
              the explanations, then take another focused run.
            </p>
            <div className="result-stats">
              <div>
                <span>Accuracy</span>
                <strong>{resultPercent}%</strong>
              </div>
              <div>
                <span>Correct</span>
                <strong>{score}</strong>
              </div>
              <div>
                <span>To review</span>
                <strong>{activeTest.questions.length - score}</strong>
              </div>
            </div>
            <div className="result-actions">
              <button
                className="primary-button"
                onClick={() => begin(activeTest)}
              >
                Retake test ↗
              </button>
              <button
                className="secondary-button"
                onClick={() => {
                  setFinished(false);
                  setCurrent(0);
                  setRevealed(activeTest.questions.map((_, i) => i));
                }}
              >
                Review answers
              </button>
            </div>
          </section>
        </main>
      );
    }

    return (
      <main className="exam-shell">
        <header className="exam-header">
          <button
            className="brand-lockup compact"
            onClick={() => setActiveTest(null)}
            aria-label="Back to dashboard"
          >
            <span className="brand-mark">A</span>
            <span>
              <b>AIF-C01</b>
              <small>EXAM LAB</small>
            </span>
          </button>
          <div className="exam-progress">
            <div>
              <span>{activeTest.title}</span>
              <b>{percent}% complete</b>
            </div>
            <div className="progress-track">
              <i style={{ width: `${percent}%` }} />
            </div>
          </div>
          <div className="timer">
            <span>TIME LEFT</span>
            <strong>{time}</strong>
          </div>
        </header>
        <div className="exam-layout">
          <aside className="question-map">
            <div className="map-heading">
              <span>Question navigator</span>
              <b>
                {Object.keys(answers).length}/{activeTest.questions.length}
              </b>
            </div>
            <div className="number-grid">
              {activeTest.questions.map((_, index) => (
                <button
                  key={index}
                  aria-label={`Question ${index + 1}`}
                  className={`${index === current ? "current" : ""} ${answers[index] !== undefined ? "answered" : ""} ${flagged.includes(index) ? "flagged" : ""}`}
                  onClick={() => setCurrent(index)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <div className="map-legend">
              <span>
                <i className="dot answered-dot" />
                Answered
              </span>
              <span>
                <i className="dot current-dot" />
                Current
              </span>
              <span>
                <i className="dot flag-dot" />
                Flagged
              </span>
            </div>
            <div className="focus-tip">
              <span>⌁</span>
              <div>
                <b>Focus mode</b>
                <p>One question at a time. No noise.</p>
              </div>
            </div>
          </aside>
          <section className="question-stage">
            <div className="question-topline">
              <span
                className="domain-pill"
                style={{ color: domainColors[question.domain] }}
              >
                {question.domain}
              </span>
              <button
                className={flagged.includes(current) ? "flag active" : "flag"}
                onClick={() =>
                  setFlagged(
                    flagged.includes(current)
                      ? flagged.filter((n) => n !== current)
                      : [...flagged, current],
                  )
                }
              >
                ⚑ {flagged.includes(current) ? "Flagged" : "Flag for review"}
              </button>
            </div>
            <p className="question-count">
              QUESTION {String(current + 1).padStart(2, "0")}{" "}
              <span>/ {activeTest.questions.length}</span>
            </p>
            <h1 className="question-prompt">{question.prompt}</h1>
            <div className="options">
              {question.options.map((option, index) => {
                const show = revealed.includes(current);
                const state = show
                  ? index === question.answer
                    ? "correct"
                    : answers[current] === index
                      ? "incorrect"
                      : ""
                  : answers[current] === index
                    ? "selected"
                    : "";
                return (
                  <button
                    key={option}
                    className={`option ${state}`}
                    onClick={() =>
                      !show && setAnswers({ ...answers, [current]: index })
                    }
                  >
                    <span>{String.fromCharCode(65 + index)}</span>
                    <p>{option}</p>
                    <i>
                      {state === "correct"
                        ? "✓"
                        : state === "incorrect"
                          ? "×"
                          : ""}
                    </i>
                  </button>
                );
              })}
            </div>
            {revealed.includes(current) && (
              <div className="explanation">
                <span>WHY THIS IS RIGHT</span>
                <p>{question.explanation}</p>
              </div>
            )}
            <div className="question-actions">
              <button
                className="secondary-button"
                disabled={current === 0}
                onClick={() => setCurrent(current - 1)}
              >
                ← Previous
              </button>
              <div>
                {!revealed.includes(current) &&
                  answers[current] !== undefined && (
                    <button
                      className="check-button"
                      onClick={() => setRevealed([...revealed, current])}
                    >
                      Check answer
                    </button>
                  )}
                {current < activeTest.questions.length - 1 ? (
                  <button
                    className="primary-button"
                    onClick={() => setCurrent(current + 1)}
                  >
                    Next question →
                  </button>
                ) : (
                  <button
                    className="primary-button"
                    onClick={() => setFinished(true)}
                  >
                    Finish test →
                  </button>
                )}
              </div>
            </div>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="dashboard">
      <div className="noise" />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <div className="brand-lockup">
          <span className="brand-mark">A</span>
          <span>
            <b>AIF-C01</b>
            <small>EXAM LAB</small>
          </span>
        </div>
        <nav>
          <a href="#tests">Practice tests</a>
          <a href="#blueprint">Exam blueprint</a>
          <a
            href="https://docs.aws.amazon.com/aws-certification/latest/ai-practitioner-01/ai-practitioner-01.html"
            target="_blank"
            rel="noreferrer"
          >
            AWS guide ↗
          </a>
        </nav>
        <button className="profile-chip">
          <span>RV</span>
          <b>Raja</b>
          <i>⌄</i>
        </button>
      </header>
      <section className="hero">
        <div className="hero-copy">
          <div className="live-pill">
            <i /> AIF-C01 EXAM PREP
          </div>
          <h1>
            Make the cloud
            <br />
            <em>think with you.</em>
          </h1>
          <p>
            Master AWS AI concepts through focused practice, instant
            explanations, and exam-weighted insights.
          </p>
          <div className="hero-actions">
            <button
              className="primary-button large"
              onClick={() => begin(tests[0])}
            >
              Start practice test <span>↗</span>
            </button>
            <a href="#blueprint">Explore the blueprint ↓</a>
          </div>
          <div className="trust-row">
            <div className="avatars">
              <span>ML</span>
              <span>AI</span>
              <span>FM</span>
            </div>
            <p>
              <b>Built to the official blueprint</b>
              <small>Original questions · Instant feedback</small>
            </p>
          </div>
        </div>
        <div className="readiness-card">
          <div className="readiness-head">
            <span>YOUR READINESS</span>
            <i>● LIVE</i>
          </div>
          <div className="readiness-score">
            <strong>68</strong>
            <span>/100</span>
            <div>
              <b>On your way</b>
              <small>+12% this week</small>
            </div>
          </div>
          <div className="sparkline">
            <i style={{ height: "24%" }} />
            <i style={{ height: "38%" }} />
            <i style={{ height: "34%" }} />
            <i style={{ height: "56%" }} />
            <i style={{ height: "48%" }} />
            <i style={{ height: "72%" }} />
            <i style={{ height: "68%" }} />
            <i style={{ height: "88%" }} />
            <i style={{ height: "100%" }} />
          </div>
          <div className="readiness-meta">
            <div>
              <span>Questions</span>
              <b>
                0 <small>/ 28</small>
              </b>
            </div>
            <div>
              <span>Best score</span>
              <b>—</b>
            </div>
            <div>
              <span>Study streak</span>
              <b>
                3 <small>days</small>
              </b>
            </div>
          </div>
          <div className="next-move">
            <span>✦</span>
            <div>
              <small>RECOMMENDED NEXT</small>
              <b>Practice Test 01</b>
            </div>
            <button onClick={() => begin(tests[0])}>→</button>
          </div>
        </div>
      </section>
      <section className="tests-section" id="tests">
        <div className="section-heading">
          <div>
            <span className="eyebrow">PRACTICE ARENA</span>
            <h2>Train like it’s test day.</h2>
          </div>
          <p>
            Focused sets with immediate explanations.
            <br />
            Build confidence one decision at a time.
          </p>
        </div>
        <div className="test-grid">
          {tests.map((test, index) => (
            <article className={`test-card ${test.accent}`} key={test.id}>
              <div className="test-visual">
                <span className="test-number">0{test.id}</span>
                <div className="orb">
                  <i>{index === 0 ? "⌁" : "✦"}</i>
                </div>
                <div className="status-pill">
                  {index === 0 ? "START HERE" : "LEVEL UP"}
                </div>
              </div>
              <div className="test-content">
                <div className="test-label">
                  <span>{test.level}</span>
                  <i>{test.minutes} MIN</i>
                </div>
                <h3>{test.title}</h3>
                <p>{test.subtitle}</p>
                <div className="test-meta">
                  <span>
                    <b>{test.questions.length}</b> original questions
                  </span>
                  <span>
                    <b>5</b> domains
                  </span>
                </div>
                <button onClick={() => begin(test)}>
                  Begin test <span>↗</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="blueprint" id="blueprint">
        <div>
          <span className="eyebrow">OFFICIAL EXAM BLUEPRINT</span>
          <h2>
            Know where every
            <br />
            point is hiding.
          </h2>
          <p>
            Practice is distributed across the five official AIF-C01 content
            domains.
          </p>
        </div>
        <div className="domain-list">
          {[
            ["01", "Fundamentals of AI & ML", "20%", "20"],
            ["02", "Fundamentals of Generative AI", "24%", "24"],
            ["03", "Applications of Foundation Models", "28%", "28"],
            ["04", "Guidelines for Responsible AI", "14%", "14"],
            ["05", "Security, Compliance & Governance", "14%", "14"],
          ].map((item, index) => (
            <div className="domain-row" key={item[0]}>
              <span>{item[0]}</span>
              <b>{item[1]}</b>
              <div>
                <i
                  style={{
                    width: `${Number(item[3]) * 3.2}%`,
                    background: Object.values(domainColors)[index],
                  }}
                />
              </div>
              <strong>{item[2]}</strong>
            </div>
          ))}
        </div>
      </section>
      <footer>
        <div className="brand-lockup compact">
          <span className="brand-mark">A</span>
          <span>
            <b>AIF-C01</b>
            <small>EXAM LAB</small>
          </span>
        </div>
        <p>
          Independent study tool. Not affiliated with or endorsed by Amazon Web
          Services.
        </p>
        <span>Built for focused learners ✦</span>
      </footer>
    </main>
  );
}
