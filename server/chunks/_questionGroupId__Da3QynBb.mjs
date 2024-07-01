/* empty css                             */
import { k as createAstro, l as createComponent, m as renderTemplate, n as maybeRenderHead, p as renderComponent, o as addAttribute, u as unescapeHTML } from './astro/server_DJHfVkFr.mjs';
import 'kleur/colors';
import { S as Spinner, k as isLoggedIn, w as httpPut, h as httpGet, a as $$BaseLayout, x as $$Footer } from './BaseLayout_CyQdLUYI.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useRef, useEffect, Fragment as Fragment$1 } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, Sparkles, SkipForward, RotateCcw, PartyPopper, ThumbsUp, RefreshCcw } from 'lucide-react';
import { s as showLoginPopup } from './popup_DWUkHIfQ.mjs';
import { m as markdownToHtml, r as replaceVariables } from './markdown_7JFDt8o8.mjs';
import Prism from 'prismjs';
/* empty css                                     */
import { u as useToast } from './use-toast_BupOxZu-.mjs';
import ReactConfetti from 'react-confetti';
import { g as getAllQuestionGroups } from './question-group_C-CQO0is.mjs';
import { b as getGuideTableOfContent } from './guide_2lwLlurY.mjs';
import { $ as $$MarkdownFile } from './MarkdownFile_CKhC2S16.mjs';
import { T as TableOfContent } from './TableOfContent_CdmXb9C6.mjs';

function QuestionsProgress(props) {
  const {
    showLoginAlert,
    isLoading = false,
    knowCount = 0,
    didNotKnowCount = 0,
    totalCount = 0,
    skippedCount = 0,
    onResetClick = () => null,
    onPrevClick = () => null,
    onNextClick = () => null
  } = props;
  const totalSolved = knowCount + didNotKnowCount + skippedCount;
  const donePercentage = totalSolved / totalCount * 100;
  return /* @__PURE__ */ jsxs("div", { className: "mb-3 overflow-hidden rounded-lg border border-gray-300 bg-white p-4 sm:mb-5 sm:p-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-3 flex items-center text-gray-600", children: [
      /* @__PURE__ */ jsx("div", { className: "relative w-full flex-1 rounded-xl bg-gray-200 p-1", children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "duration-400 absolute bottom-0 left-0 top-0 rounded-xl bg-slate-800 transition-[width]",
          style: {
            width: `${donePercentage}%`
          }
        }
      ) }),
      /* @__PURE__ */ jsxs("span", { className: "ml-3 flex items-center text-sm", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: onPrevClick,
            className: "text-zinc-400 hover:text-black",
            children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4", strokeWidth: 3 })
          }
        ),
        /* @__PURE__ */ jsxs("span", { className: "block min-w-[41px] text-center", children: [
          /* @__PURE__ */ jsx("span", { className: "tabular-nums", children: totalSolved }),
          " / ",
          totalCount
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: onNextClick,
            className: "text-zinc-400 hover:text-black",
            children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-4", strokeWidth: 3 })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative -left-1 flex flex-col gap-2 text-sm text-black sm:flex-row sm:gap-3", children: [
      /* @__PURE__ */ jsxs("span", { className: "flex items-center", children: [
        /* @__PURE__ */ jsx(CheckCircle, { className: "mr-1 h-4" }),
        /* @__PURE__ */ jsx("span", { children: "Knew" }),
        /* @__PURE__ */ jsxs("span", { className: "ml-2 rounded-md bg-gray-200/80 px-1.5 font-medium text-black", children: [
          /* @__PURE__ */ jsx("span", { className: "tabular-nums", children: knowCount }),
          " Items"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("span", { className: "flex items-center", children: [
        /* @__PURE__ */ jsx(Sparkles, { className: "mr-1 h-4" }),
        /* @__PURE__ */ jsx("span", { children: "Learnt" }),
        /* @__PURE__ */ jsxs("span", { className: "ml-2 rounded-md bg-gray-200/80 px-1.5 font-medium text-black", children: [
          /* @__PURE__ */ jsx("span", { className: "tabular-nums", children: didNotKnowCount }),
          " Items"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("span", { className: "flex items-center", children: [
        /* @__PURE__ */ jsx(SkipForward, { className: "mr-1 h-4" }),
        /* @__PURE__ */ jsx("span", { children: "Skipped" }),
        /* @__PURE__ */ jsxs("span", { className: "ml-2 rounded-md bg-gray-200/80 px-1.5 font-medium text-black", children: [
          /* @__PURE__ */ jsx("span", { className: "tabular-nums", children: skippedCount }),
          " Items"
        ] })
      ] }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          disabled: isLoading,
          onClick: onResetClick,
          className: "flex items-center text-red-600 transition-opacity duration-300 hover:text-red-900 disabled:opacity-50",
          children: [
            /* @__PURE__ */ jsx(RotateCcw, { className: "mr-1 h-4" }),
            "Reset",
            /* @__PURE__ */ jsx("span", { className: "inline lg:hidden", children: "Progress" })
          ]
        }
      )
    ] }),
    showLoginAlert && /* @__PURE__ */ jsxs("p", { className: "-mx-6 -mb-6 mt-6 border-t bg-yellow-100 py-3 text-sm text-yellow-900", children: [
      "You progress is not saved. Please",
      " ",
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            showLoginPopup();
          },
          className: "underline-offset-3 font-medium underline hover:text-black",
          children: "login to save your progress."
        }
      )
    ] })
  ] });
}

function QuestionCard(props) {
  const { question } = props;
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const answerRef = useRef(null);
  const questionRef = useRef(null);
  useEffect(() => {
    if (isAnswerVisible) {
      Prism.highlightAll();
      const answerHeight = answerRef.current?.clientHeight || 0;
      const questionHeight = questionRef.current?.clientHeight || 0;
      if (answerHeight > questionHeight) {
        questionRef.current.style.height = `${answerHeight}px`;
      }
    } else {
      questionRef.current.style.height = `auto`;
    }
    const questionTop = (questionRef.current?.getBoundingClientRect().top || 0) - 147;
    if (questionTop < 0) {
      window.scrollTo({
        top: window.scrollY + questionTop - 10
      });
    }
  }, [isAnswerVisible]);
  useEffect(() => {
    setIsAnswerVisible(false);
  }, [question]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        ref: questionRef,
        className: `flex flex-grow flex-col items-center justify-center py-5 sm:py-8`,
        children: [
          /* @__PURE__ */ jsx("div", { className: "hidden text-gray-400 sm:block", children: question.topics?.map((topic, counter) => {
            const totalTopics = question.topics?.length || 0;
            return /* @__PURE__ */ jsxs(Fragment$1, { children: [
              /* @__PURE__ */ jsx("span", { className: "capitalize", children: topic }),
              counter !== totalTopics - 1 && /* @__PURE__ */ jsx("span", { className: "mx-2", children: "·" })
            ] }, topic);
          }) }),
          /* @__PURE__ */ jsx("div", { className: "mx-auto flex max-w-[550px] flex-1 items-center justify-center py-3 sm:py-8", children: /* @__PURE__ */ jsx("p", { className: "px-4 text-xl font-semibold !leading-snug text-black sm:text-3xl", children: question.question }) }),
          /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => {
                setIsAnswerVisible(true);
              },
              className: "cursor-pointer text-sm text-gray-500 underline underline-offset-4 transition-colors hover:text-black sm:text-base",
              children: "Click to Reveal the Answer"
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        ref: answerRef,
        className: `absolute left-0 right-0 flex flex-col items-center justify-center rounded-[7px] bg-neutral-100 py-4 text-sm leading-normal text-black transition-all duration-300 sm:py-8 sm:text-xl ${isAnswerVisible ? "top-0 min-h-[248px] sm:min-h-[398px]" : "top-full"}`,
        children: [
          !question.isLongAnswer && /* @__PURE__ */ jsx(
            "div",
            {
              className: `mx-auto flex max-w-[600px] flex-grow flex-col items-center justify-center py-0 px-5 text-center text-base [&>p]:leading-relaxed sm:text-xl`,
              dangerouslySetInnerHTML: {
                __html: markdownToHtml(question.answer, false)
              }
            }
          ),
          question.isLongAnswer && /* @__PURE__ */ jsx(
            "div",
            {
              className: `qa-answer prose prose-sm prose-quoteless mx-auto flex w-full max-w-[600px] flex-grow flex-col items-start justify-center py-0 px-4 text-left text-sm prose-h1:mb-2.5 prose-h1:mt-7 prose-h2:mb-3 prose-h2:mt-0 prose-h3:mb-[5px] prose-h3:mt-[10px] prose-p:mb-2 prose-p:mt-0 prose-blockquote:font-normal prose-blockquote:not-italic prose-blockquote:text-gray-700 prose-pre:!mb-6 prose-pre:w-full prose-ul:my-2 prose-li:m-0 prose-li:mb-0.5 sm:px-5 sm:text-lg sm:prose-p:mb-4`,
              dangerouslySetInnerHTML: {
                __html: markdownToHtml(question.answer, false)
              }
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "mt-7 text-center", children: /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => {
                setIsAnswerVisible(false);
              },
              className: "cursor-pointer text-sm text-gray-500 underline underline-offset-4 transition-colors hover:text-black sm:text-base",
              children: "Hide the Answer"
            }
          ) })
        ]
      }
    )
  ] });
}

function QuestionLoader() {
  return /* @__PURE__ */ jsx("div", { className: "flex flex-grow flex-col items-center justify-center", children: /* @__PURE__ */ jsxs("p", { className: "text-xl font-medium text-gray-500 flex items-center gap-3.5", children: [
    /* @__PURE__ */ jsx(Spinner, { isDualRing: false, innerFill: "#6b7280", className: "h-5 w-5" }),
    "Please wait .."
  ] }) });
}

function ProgressStatLabel(props) {
  const { icon, label, count } = props;
  return /* @__PURE__ */ jsxs("span", { className: "group relative flex flex-1 items-center overflow-hidden rounded-md border border-gray-300 bg-white px-2 py-2 text-sm text-black transition-colors disabled:opacity-50 sm:rounded-xl sm:px-4 sm:py-3 sm:text-base", children: [
    icon,
    /* @__PURE__ */ jsxs("span", { className: "flex flex-grow justify-between", children: [
      /* @__PURE__ */ jsx("span", { children: label }),
      /* @__PURE__ */ jsx("span", { children: count })
    ] })
  ] });
}
function QuestionFinished(props) {
  const { knowCount, didNotKnowCount, skippedCount, onReset } = props;
  return /* @__PURE__ */ jsxs("div", { className: "relative flex flex-grow flex-col items-center justify-center px-4 sm:px-0", children: [
    /* @__PURE__ */ jsx(PartyPopper, { className: "mb-4 mt-10 h-14 w-14 text-gray-300 sm:mt-0 sm:h-24 sm:w-24" }),
    /* @__PURE__ */ jsx("h1", { className: "text-lg font-semibold text-gray-700 sm:text-2xl", children: "Questions Finished" }),
    /* @__PURE__ */ jsxs("p", { className: "mt-0 text-sm text-gray-500 sm:mt-2 sm:text-base", children: [
      "Click below revisit",
      " ",
      /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "specific or all questions" }),
      " ",
      /* @__PURE__ */ jsx("span", { className: "inline sm:hidden", children: "questions" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-5 mt-5 flex w-full flex-col gap-1.5 px-2 sm:flex-row sm:gap-3 sm:px-16", children: [
      /* @__PURE__ */ jsx(
        ProgressStatLabel,
        {
          icon: /* @__PURE__ */ jsx(ThumbsUp, { className: "mr-1 h-4" }),
          label: "Knew",
          count: knowCount
        }
      ),
      /* @__PURE__ */ jsx(
        ProgressStatLabel,
        {
          icon: /* @__PURE__ */ jsx(Sparkles, { className: "mr-1 h-4" }),
          label: "Learned",
          count: didNotKnowCount
        }
      ),
      /* @__PURE__ */ jsx(
        ProgressStatLabel,
        {
          icon: /* @__PURE__ */ jsx(SkipForward, { className: "mr-1 h-4" }),
          label: "Skipped",
          count: skippedCount
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mb-4 mt-2 text-sm sm:mb-0", children: /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => onReset(),
        className: "flex items-center gap-0.5 text-sm text-red-700 hover:text-black sm:text-base",
        children: [
          /* @__PURE__ */ jsx(RefreshCcw, { className: "mr-1 h-4" }),
          "Restart Asking"
        ]
      }
    ) })
  ] });
}

function Confetti(props) {
  const { element = document.body, onDone = () => null, pieces = 40 } = props;
  const [confettiPos, setConfettiPos] = useState();
  function populateConfettiPosition(element2) {
    const elRect = element2.getBoundingClientRect();
    setConfettiPos({
      x: elRect?.x || 0,
      y: (elRect?.y || 0) + window.scrollY,
      w: elRect?.width || 0,
      h: elRect?.height || 0
    });
  }
  useEffect(() => {
    if (!element) {
      setConfettiPos(void 0);
      return;
    }
    populateConfettiPosition(element);
  }, [element]);
  if (!confettiPos) {
    return null;
  }
  return /* @__PURE__ */ jsx(
    ReactConfetti,
    {
      height: document.body.scrollHeight,
      numberOfPieces: pieces,
      recycle: false,
      onConfettiComplete: (confettiInstance) => {
        setConfettiPos(void 0);
        onDone();
      },
      initialVelocityX: 4,
      initialVelocityY: 8,
      tweenDuration: 10,
      confettiSource: {
        x: confettiPos.x,
        y: confettiPos.y,
        w: confettiPos.w,
        h: confettiPos.h
      }
    }
  );
}

function QuestionsList(props) {
  const { questions: defaultQuestions, groupId } = props;
  const toast = useToast();
  const [questions, setQuestions] = useState(defaultQuestions);
  const [isLoading, setIsLoading] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);
  const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
  const [userProgress, setUserProgress] = useState();
  const containerRef = useRef(null);
  async function fetchUserProgress() {
    if (!isLoggedIn()) {
      return;
    }
    const { response, error } = await httpGet(
      `${{"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://roadmap.sh/", "ASSETS_PREFIX": undefined}.PUBLIC_API_URL}/v1-get-user-question-progress/${groupId}`
    );
    if (error) {
      toast.error(error.message || "Error fetching user progress");
      return;
    }
    return response;
  }
  async function prepareProgress() {
    const userProgress2 = await fetchUserProgress();
    setUserProgress(userProgress2);
    const knownQuestions = userProgress2?.know || [];
    const didNotKnowQuestions = userProgress2?.dontKnow || [];
    const skipQuestions = userProgress2?.skip || [];
    const pendingQuestionIndex = questions.findIndex((question) => {
      return !knownQuestions.includes(question.id) && !didNotKnowQuestions.includes(question.id) && !skipQuestions.includes(question.id);
    });
    setCurrQuestionIndex(pendingQuestionIndex);
    setIsLoading(false);
  }
  async function resetProgress() {
    let knownQuestions = userProgress?.know || [];
    let didNotKnowQuestions = userProgress?.dontKnow || [];
    let skipQuestions = userProgress?.skip || [];
    if (!isLoggedIn()) {
      setQuestions(defaultQuestions);
      knownQuestions = [];
      didNotKnowQuestions = [];
      skipQuestions = [];
    } else {
      setIsLoading(true);
      const { response, error } = await httpPut(
        `${{"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://roadmap.sh/", "ASSETS_PREFIX": undefined}.PUBLIC_API_URL}/v1-reset-question-progress/${groupId}`,
        {
          status: "reset"
        }
      );
      if (error) {
        toast.error(error.message || "Error resetting progress");
        return;
      }
      knownQuestions = response?.know || [];
      didNotKnowQuestions = response?.dontKnow || [];
      skipQuestions = response?.skip || [];
    }
    setCurrQuestionIndex(0);
    setUserProgress({
      know: knownQuestions,
      dontKnow: didNotKnowQuestions,
      skip: skipQuestions
    });
    setIsLoading(false);
  }
  async function updateQuestionStatus(status, questionId) {
    setIsLoading(true);
    let newProgress = userProgress || { know: [], dontKnow: [], skip: [] };
    if (!isLoggedIn()) {
      if (status === "know") {
        newProgress.know.push(questionId);
      } else if (status == "dontKnow") {
        newProgress.dontKnow.push(questionId);
      } else if (status == "skip") {
        newProgress.skip.push(questionId);
      }
    } else {
      const { response, error } = await httpPut(
        `${{"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://roadmap.sh/", "ASSETS_PREFIX": undefined}.PUBLIC_API_URL}/v1-update-question-status/${groupId}`,
        {
          status,
          questionId,
          questionGroupId: groupId
        }
      );
      if (error || !response) {
        toast.error(error?.message || "Error marking question status");
        return;
      }
      newProgress = response;
    }
    const nextQuestionIndex = currQuestionIndex + 1;
    setUserProgress(newProgress);
    setIsLoading(false);
    if (!nextQuestionIndex || !questions[nextQuestionIndex]) {
      setShowConfetti(true);
    }
    setCurrQuestionIndex(nextQuestionIndex);
  }
  useEffect(() => {
    prepareProgress().then(() => null);
  }, [questions]);
  const knowCount = userProgress?.know.length || 0;
  const dontKnowCount = userProgress?.dontKnow.length || 0;
  const skipCount = userProgress?.skip.length || 0;
  const hasProgress = knowCount > 0 || dontKnowCount > 0 || skipCount > 0;
  const currQuestion = questions[currQuestionIndex];
  const hasFinished = !isLoading && hasProgress && currQuestionIndex === -1;
  return /* @__PURE__ */ jsxs("div", { className: "mb-0 gap-3 text-center sm:mb-40", children: [
    /* @__PURE__ */ jsx(
      QuestionsProgress,
      {
        knowCount,
        didNotKnowCount: dontKnowCount,
        skippedCount: skipCount,
        totalCount: questions?.length,
        isLoading,
        showLoginAlert: !isLoggedIn() && hasProgress,
        onResetClick: () => {
          resetProgress().finally(() => null);
        },
        onNextClick: () => {
          if (currQuestionIndex !== -1 && currQuestionIndex < questions.length - 1) {
            updateQuestionStatus("skip", currQuestion.id).finally(() => null);
          }
        },
        onPrevClick: () => {
          if (currQuestionIndex > 0) {
            const prevQuestion = questions[currQuestionIndex - 1];
            const tempUserProgress = {
              know: userProgress?.know.filter((id) => id !== prevQuestion.id) || [],
              dontKnow: userProgress?.dontKnow.filter((id) => id !== prevQuestion.id) || [],
              skip: userProgress?.skip.filter((id) => id !== prevQuestion.id) || []
            };
            setUserProgress(tempUserProgress);
            setCurrQuestionIndex(currQuestionIndex - 1);
          }
        }
      }
    ),
    showConfetti && containerRef.current && /* @__PURE__ */ jsx(
      Confetti,
      {
        pieces: 100,
        element: containerRef.current,
        onDone: () => {
          setShowConfetti(false);
        }
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        ref: containerRef,
        className: "relative mb-4 flex min-h-[250px] w-full overflow-hidden rounded-lg border border-gray-300 bg-white sm:min-h-[400px]",
        children: [
          hasFinished && /* @__PURE__ */ jsx(
            QuestionFinished,
            {
              totalCount: questions?.length || 0,
              knowCount,
              didNotKnowCount: dontKnowCount,
              skippedCount: skipCount,
              onReset: () => {
                resetProgress().finally(() => null);
              }
            }
          ),
          !isLoading && currQuestion && /* @__PURE__ */ jsx(QuestionCard, { question: currQuestion }),
          isLoading && /* @__PURE__ */ jsx(QuestionLoader, {})
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: `flex flex-col gap-1 transition-opacity duration-300 sm:flex-row sm:gap-3 ${hasFinished ? "opacity-0" : "opacity-100"}`,
        children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              disabled: isLoading || !currQuestion,
              onClick: (e) => {
                e.stopPropagation();
                e.preventDefault();
                updateQuestionStatus("know", currQuestion.id).finally(() => null);
              },
              className: "flex flex-1 items-center rounded-md border border-gray-300 bg-white px-2 py-2 text-sm text-black transition-colors hover:border-black hover:bg-black hover:text-white disabled:pointer-events-none disabled:opacity-50 sm:rounded-lg sm:px-4 sm:py-3 sm:text-base",
              children: [
                /* @__PURE__ */ jsx(CheckCircle, { className: "mr-1 h-4 text-current" }),
                "Already Know that"
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => {
                updateQuestionStatus("dontKnow", currQuestion.id).finally(
                  () => null
                );
              },
              disabled: isLoading || !currQuestion,
              className: "flex flex-1 items-center rounded-md border border-gray-300 bg-white px-2 py-2 text-sm text-black transition-colors hover:border-black hover:bg-black hover:text-white disabled:pointer-events-none disabled:opacity-50 sm:rounded-lg sm:px-4 sm:py-3 sm:text-base",
              children: [
                /* @__PURE__ */ jsx(Sparkles, { className: "mr-1 h-4 text-current" }),
                "Didn't Know that"
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => {
                updateQuestionStatus("skip", currQuestion.id).finally(() => null);
              },
              disabled: isLoading || !currQuestion,
              "data-next-question": "skip",
              className: "flex flex-1 items-center rounded-md border border-red-600 px-2 py-2 text-sm text-red-600 hover:bg-red-600 hover:text-white disabled:pointer-events-none disabled:opacity-50 sm:rounded-lg sm:px-4 sm:py-3 sm:text-base",
              children: [
                /* @__PURE__ */ jsx(SkipForward, { className: "mr-1 h-4" }),
                "Skip Question"
              ]
            }
          )
        ]
      }
    )
  ] });
}

const $$Astro$1 = createAstro("https://roadmap.sh/");
const $$QuestionGuide = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$QuestionGuide;
  const { questionGroup } = Astro2.props;
  const allHeadings = questionGroup.getHeadings();
  const tableOfContent = [
    ...getGuideTableOfContent(allHeadings),
    {
      depth: 2,
      title: "Test with Flashcards",
      children: [],
      slug: "test-with-flashcards",
      text: "Test yourself with Flashcards"
    },
    {
      depth: 2,
      title: "Questions List",
      children: [
        {
          depth: 2,
          title: "Beginner Level",
          children: [],
          slug: "beginner-level",
          text: "Beginner Level"
        },
        {
          depth: 2,
          title: "Intermediate Level",
          children: [],
          slug: "intermediate-level",
          text: "Intermediate Level"
        },
        {
          depth: 2,
          title: "Advanced Level",
          children: [],
          slug: "advanced-level",
          text: "Advanced Level"
        }
      ],
      slug: "questions-list",
      text: "Questions List"
    }
  ];
  const showTableOfContent = tableOfContent.length > 0;
  const { frontmatter: guideFrontmatter, author } = questionGroup;
  return renderTemplate`${maybeRenderHead()}<article class="lg:grid lg:max-w-full lg:grid-cols-[1fr_minmax(0,700px)_1fr]"> ${showTableOfContent && renderTemplate`<div class="bg-gradient-to-r from-gray-50 py-0 lg:col-start-3 lg:col-end-4 lg:row-start-1"> ${renderComponent($$result, "TableOfContent", TableOfContent, { "toc": tableOfContent, "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspaces/developer-roadmap/src/components/TableOfContent/TableOfContent", "client:component-export": "TableOfContent" })} </div>`} <div${addAttribute([
    "col-start-2 col-end-3 row-start-1 mx-auto max-w-[700px] py-5 sm:py-10",
    {
      "lg:border-r": showTableOfContent
    }
  ], "class:list")}> ${renderComponent($$result, "MarkdownFile", $$MarkdownFile, {}, { "default": ($$result2) => renderTemplate` <h1 class="mb-3 text-balance text-4xl font-bold"> ${replaceVariables(guideFrontmatter.title)} </h1> ${author && renderTemplate`<p class="my-0 flex items-center justify-start text-sm text-gray-400"> <a${addAttribute(`/authors/${author?.id}`, "href")} class="inline-flex items-center font-medium underline-offset-2 hover:text-gray-600 hover:underline"> <img${addAttribute(author.frontmatter.name, "alt")}${addAttribute(author.frontmatter.imageUrl, "src")} class="mb-0 mr-2 inline h-5 w-5 rounded-full"> ${author.frontmatter.name} </a> <span class="mx-2 hidden sm:inline">&middot;</span> <a class="hidden underline-offset-2 hover:text-gray-600 sm:inline"${addAttribute(`https://github.com/kamranahmedse/developer-roadmap/tree/master/src/data/question-groups/${questionGroup.id}`, "href")} target="_blank">
Improve this Guide
</a> </p>`}${renderComponent($$result2, "questionGroup.Content", questionGroup.Content, {})} <h2 id="test-with-flashcards">Test yourself with Flashcards</h2> <p>
You can either use these flashcards or jump to the questions list
        section below to see them in a list format.
</p> <div class="mx-0 sm:-mb-32"> ${renderComponent($$result2, "QuestionsList", QuestionsList, { "groupId": questionGroup.id, "questions": questionGroup.questions, "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspaces/developer-roadmap/src/components/Questions/QuestionsList", "client:component-export": "QuestionsList" })} </div> <h2 id="questions-list">Questions List</h2> <p>
If you prefer to see the questions in a list format, you can find them
        below.
</p> ${["beginner", "intermediate", "advanced"].map((questionLevel) => renderTemplate`<div class="mb-5"> <h3${addAttribute(`${questionLevel}-level`, "id")} class="mb-0 capitalize"> ${questionLevel} Level
</h3> ${questionGroup.questions.filter((q) => {
    return q.topics.map((t) => t.toLowerCase()).includes(questionLevel);
  }).map((q) => renderTemplate`<div class="mb-5"> <h4>${q.question}</h4> <div>${unescapeHTML(markdownToHtml(q.answer, false))}</div> </div>`)} </div>`)}` })} </div> </article>`;
}, "/workspaces/developer-roadmap/src/components/Questions/QuestionGuide.astro", void 0);

const $$Astro = createAstro("https://roadmap.sh/");
async function getStaticPaths() {
  const questionGroups = await getAllQuestionGroups();
  return questionGroups.map((questionGroup) => {
    return {
      params: { questionGroupId: questionGroup.id },
      props: { questionGroup }
    };
  });
}
const $$questionGroupId = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$questionGroupId;
  const { questionGroup } = Astro2.props;
  const { frontmatter } = questionGroup;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": frontmatter.seo.title, "briefTitle": frontmatter.briefTitle, "description": frontmatter.seo.description, "keywords": frontmatter.seo.keywords, "permalink": `/questions/${questionGroup.id}` }, { "default": ($$result2) => renderTemplate`${!questionGroup.frontmatter.authorId && renderTemplate`${maybeRenderHead()}<div class="flex bg-gray-50 pb-14 pt-4 sm:pb-16 sm:pt-8"> <div class="container !max-w-[740px]"> <div class="mb-3 mt-2 text-left sm:mb-5 sm:mt-8 sm:text-center"> <div class="mb-2 md:mb-6"> <a href="/questions" class="group rounded-md text-sm font-medium text-gray-400 transition-colors duration-200 hover:text-gray-800"> <span class="inline-block transform transition-transform group-hover:translate-x-[-2px]">
&larr;
</span>
Back to all Questions
</a> </div> <h1 class="mb-1 text-2xl font-bold sm:mb-5 sm:text-5xl"> ${frontmatter.title} </h1> <p class="hidden text-xl text-gray-500 sm:block"> ${frontmatter.description} </p> </div> ${renderComponent($$result2, "QuestionsList", QuestionsList, { "groupId": questionGroup.id, "questions": questionGroup.questions, "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspaces/developer-roadmap/src/components/Questions/QuestionsList", "client:component-export": "QuestionsList" })} </div> </div>`}${questionGroup.frontmatter.authorId && renderTemplate`${renderComponent($$result2, "QuestionGuide", $$QuestionGuide, { "questionGroup": questionGroup })}`} `, "page-footer": ($$result2) => renderTemplate`<div> ${renderComponent($$result2, "Footer", $$Footer, {})} </div>` })}`;
}, "/workspaces/developer-roadmap/src/pages/questions/[questionGroupId].astro", void 0);

const $$file = "/workspaces/developer-roadmap/src/pages/questions/[questionGroupId].astro";
const $$url = "/questions/[questionGroupId]";

export { $$questionGroupId as default, $$file as file, getStaticPaths, $$url as url };
