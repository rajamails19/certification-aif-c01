"use client";

import { useEffect, useMemo, useState } from "react";
import {
  testOneQuestions,
  testTwoQuestions,
  type Domain,
  type Question,
} from "./question-bank";
type Test = {
  id: number;
  title: string;
  subtitle: string;
  level: string;
  minutes: number;
  accent: string;
  questions: Question[];
};

const tests: Test[] = [
  {
    id: 1,
    title: "Practice Test 01",
    subtitle: "Core concepts · Bedrock · Prompting",
    level: "Foundation",
    minutes: 35,
    accent: "orange",
    questions: testOneQuestions,
  },
  {
    id: 2,
    title: "Practice Test 02",
    subtitle: "Evaluation · Responsible AI · Security",
    level: "Exam Ready",
    minutes: 35,
    accent: "violet",
    questions: testTwoQuestions,
  },
];

const domainColors: Record<Domain, string> = {
  "AI & ML": "#ff9d47",
  "Generative AI": "#f8ce67",
  "Foundation Models": "#79e0d6",
  "Responsible AI": "#b69cff",
  "Security & Governance": "#72a7ff",
};

const matchesAnswer = (selected: number[] | undefined, correct: number[]) =>
  Boolean(
    selected &&
      selected.length === correct.length &&
      correct.every((option) => selected.includes(option)),
  );

export default function Home() {
  const [activeTest, setActiveTest] = useState<Test | null>(null);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number[]>>({});
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
          sum + (matchesAnswer(answers[index], question.answer) ? 1 : 0),
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
    const selectOption = (optionIndex: number) => {
      const existing = answers[current] ?? [];
      const isMultiple = question.answer.length > 1;
      const next = isMultiple
        ? existing.includes(optionIndex)
          ? existing.filter((value) => value !== optionIndex)
          : [...existing, optionIndex]
        : [optionIndex];

      if (next.length === 0) {
        const updated = { ...answers };
        delete updated[current];
        setAnswers(updated);
      } else {
        setAnswers({ ...answers, [current]: next });
      }
    };

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
            {question.answer.length > 1 && (
              <p className="multi-hint">Select {question.answer.length} answers</p>
            )}
            <div className="options">
              {question.options.map((option, index) => {
                const show = revealed.includes(current);
                const selected = answers[current]?.includes(index) ?? false;
                const state = show
                  ? question.answer.includes(index)
                    ? "correct"
                    : selected
                      ? "incorrect"
                      : ""
                  : selected
                    ? "selected"
                    : "";
                return (
                  <button
                    key={option}
                    className={`option ${state}`}
                    onClick={() => !show && selectOption(index)}
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
