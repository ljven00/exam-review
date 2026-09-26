
// ============================================================
// QUESTION BANK
// ============================================================

import { french } from "./french.js";
import { biology } from "./biology.js"
import { history } from "./history.js";
import { mathematics } from "./mathematics.js";
import { chemistry } from "./chemistry.js";
import { physics } from "./physics.js";
import { geography } from "./geography.js";
import { newscast } from "./newscast.js";
import { general } from "./general.js";
import { literature } from "./literature.js"
import { english } from "./english.js";
import { spanish } from "./spanish.js";


// Format : [question, "choix A|choix B|choix C|choix D", index de la bonne réponse (0-3)]
const DATA = {

    "Histoire": history,
    "Géographie": geography,
    "Biologie": biology,
    "Physique": physics,
    "Chimie": chemistry,
    "Mathématiques": mathematics,
    "Littérature": literature,
    "Français": french,
    "Actualités": newscast,
    "Culture générale": general,
    "Anglais": english,
    "Espagnol": spanish

};


const MATCH_TIME_LIMIT = 10;

const DEFAULT_TEST_SIZE = 30;
const DEFAULT_CUSTOM_TEST_SIZE = 50;
const DEFAULT_MATCH_SIZE = 10;
const MAX_MATCH_SIZE = 30;


// ============================================================
// PLAYER
// ============================================================

class Player {
    constructor(name) {
        this.name = name || "Joueur";
        this.score = 0;
        this.correctAnswers = 0;
        this.history = [];
    }

    recordAnswer(isCorrect, timedOut = false) {
        if (isCorrect) {
            this.score++;
            this.correctAnswers++;
        }

        this.history.push({
            correct: isCorrect,
            timedOut: Boolean(timedOut)
        });
    }
}


// ============================================================
// DOM / HELPERS

if (typeof document !== "undefined") {

    const select = selector => document.querySelector(selector);

    const app = select("#app");


    // --------------------------------------------------------
    // Shuffle
    // --------------------------------------------------------

    function shuffle(array) {
        const copy = [...array];

        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));

            [copy[i], copy[j]] = [copy[j], copy[i]];
        }

        return copy;
    }


    // --------------------------------------------------------
    // Question pool
    // --------------------------------------------------------

    function getQuestionPool(subject) {
        if (subject === "all") {
            return Object.keys(DATA).flatMap(subjectName =>
                DATA[subjectName].map(question => [
                    subjectName,
                    ...question
                ])
            );
        }

        return DATA[subject].map(question => [
            subject,
            ...question
        ]);
    }


    // --------------------------------------------------------
    // Escape HTML
    // --------------------------------------------------------

    function escapeHtml(value) {
        return String(value).replace(
            /[&<>]/g,
            character => ({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;"
            }[character])
        );
    }


    // --------------------------------------------------------
    // Home button
    // --------------------------------------------------------

    const renderHomeButton = `
        <button
            type="button"
            class="button button--link"
            data-action="home"
        >
            ← Accueil
        </button>
    `;


    // --------------------------------------------------------
    // Timer
    // --------------------------------------------------------

    let matchTimer = null;

    function stopMatchTimer() {
        if (matchTimer) {
            clearInterval(matchTimer);
            matchTimer = null;
        }
    }


    // ========================================================
    // CREATE QUIZ QUESTIONS
    // ========================================================

    function createQuizQuestionsFromPool(questionPool) {

        return questionPool.map(
            ([
                questionSubject,
                questionText,
                optionText,
                correctIndex
            ]) => {

                const options = optionText.split("|");

                return {
                    subject: questionSubject,
                    text: questionText,
                    correctAnswer: options[correctIndex],
                    options: shuffle(options)
                };
            }
        );
    }


    function createQuizQuestions(subject, questionCount) {

        const questionPool = getQuestionPool(subject);

        const selectedQuestions = shuffle(questionPool)
            .slice(0, questionCount);

        return createQuizQuestionsFromPool(selectedQuestions);
    }


    // ========================================================
    // HOME PAGE
    // ========================================================

    function renderHomePage() {

        stopMatchTimer();

        const subjects = Object.keys(DATA);

        app.innerHTML = `
            <h1 class="page-title">
                Préparation à l'examen d'entrée
            </h1>

            <p class="lead">
                Révise une matière question par question,
                lance un test et vérifie tes réponses,
                ou défie un adversaire en duel chronométré.
            </p>

            <div class="subject-grid">
                ${subjects.map(subject => `
                    <article class="subject-card">

                        <h2 class="subject-card__title">
                            ${escapeHtml(subject)}
                        </h2>

                        <p class="subject-card__description">
                            ${DATA[subject].length} questions
                        </p>

                        <div>
                            <button
                                type="button"
                                class="button"
                                data-action="study"
                                data-subject="${escapeHtml(subject)}"
                            >
                                Réviser
                            </button>

                            <button
                                type="button"
                                class="button button--secondary"
                                data-action="test"
                                data-subject="${escapeHtml(subject)}"
                            >
                                Test de ${DEFAULT_TEST_SIZE}
                            </button>
                        </div>

                    </article>
                `).join("")}
            </div>


            <!-- =============================================
                 CUSTOM TEST
            ============================================== -->

            <form id="custom-test" class="form-panel">

                <h2>Test aléatoire</h2>

                <label class="form-field">

                    Matière

                    <select
                        id="test-subject"
                        class="form-control"
                    >
                        <option value="all">
                            Toutes les matières
                            (${getQuestionPool("all").length})
                        </option>

                        ${subjects.map(subject => `
                            <option value="${escapeHtml(subject)}">
                                ${escapeHtml(subject)}
                            </option>
                        `).join("")}

                    </select>

                </label>


                <label class="form-field">

                    Nombre de questions

                    <input
                        id="test-question-count"
                        class="form-control"
                        type="number"
                        min="1"
                        value="${DEFAULT_CUSTOM_TEST_SIZE}"
                    >

                </label>


                <button
                    type="submit"
                    class="button button--large"
                >
                    Commencer le test
                </button>

            </form>


            <!-- =============================================
                 DUEL
            ============================================== -->

            <form id="duel-form" class="form-panel form-panel--duel">

                <h2>⚔️ Match à deux joueurs</h2>

                <p>
                    Chaque joueur possède ses propres questions.
                    Aucun joueur ne reçoit les mêmes questions
                    que son adversaire.
                </p>

                <p>
                    Chaque joueur dispose de
                    ${MATCH_TIME_LIMIT} secondes par question.
                </p>


                <label class="form-field">

                    Nom du joueur 1

                    <input
                        id="player-one-name"
                        class="form-control"
                        type="text"
                        maxlength="20"
                        placeholder="Joueur 1"
                        required
                    >

                </label>


                <label class="form-field">

                    Nom du joueur 2

                    <input
                        id="player-two-name"
                        class="form-control"
                        type="text"
                        maxlength="20"
                        placeholder="Joueur 2"
                        required
                    >

                </label>


                <label class="form-field">

                    Matière

                    <select
                        id="duel-subject"
                        class="form-control"
                    >

                        <option value="all">
                            Toutes les matières
                        </option>

                        ${subjects.map(subject => `
                            <option value="${escapeHtml(subject)}">
                                ${escapeHtml(subject)}
                            </option>
                        `).join("")}

                    </select>

                </label>


                <label class="form-field">

                    Questions par joueur

                    <input
                        id="duel-question-count"
                        class="form-control"
                        type="number"
                        min="1"
                        max="${MAX_MATCH_SIZE}"
                        value="${DEFAULT_MATCH_SIZE}"
                    >

                </label>


                <button
                    type="submit"
                    class="button button--large"
                >
                    Lancer le match
                </button>

            </form>
        `;


        // Custom test
        select("#custom-test").addEventListener(
            "submit",
            event => {

                event.preventDefault();

                const subject =
                    select("#test-subject").value;

                const questionCount =
                    Number(
                        select("#test-question-count").value
                    ) || DEFAULT_CUSTOM_TEST_SIZE;

                startQuiz(subject, questionCount);
            }
        );


        // Duel
        select("#duel-form").addEventListener(
            "submit",
            event => {

                event.preventDefault();

                const playerOneName =
                    select("#player-one-name")
                        .value
                        .trim() || "Joueur 1";

                const playerTwoName =
                    select("#player-two-name")
                        .value
                        .trim() || "Joueur 2";

                const subject =
                    select("#duel-subject").value;

                const questionCount =
                    Number(
                        select("#duel-question-count").value
                    ) || DEFAULT_MATCH_SIZE;

                startMatch(
                    playerOneName,
                    playerTwoName,
                    subject,
                    questionCount
                );
            }
        );


        window.scrollTo(0, 0);
    }


    // ========================================================
    // STUDY MODE
    // ========================================================

    function startStudyMode(subject) {

        app.innerHTML = `
            <div class="action-bar">
                ${renderHomeButton}

                <b>
                    ${escapeHtml(subject)}
                </b>
            </div>

            ${DATA[subject].map((question, index) => {

                const options = question[1].split("|");

                return `
                    <div class="question-card">

                        <p class="question-title">
                            ${index + 1}.
                            ${escapeHtml(question[0])}
                        </p>

                        <ul>
                            ${options.map(option => `
                                <li>
                                    ${escapeHtml(option)}
                                </li>
                            `).join("")}
                        </ul>

                        <details>

                            <summary>
                                Voir la réponse
                            </summary>

                            <p class="correct-answer">
                                ${escapeHtml(options[question[2]])}
                            </p>

                        </details>

                    </div>
                `;

            }).join("")}


            <button
                type="button"
                class="button button--large"
                data-action="test"
                data-subject="${escapeHtml(subject)}"
            >
                Passer le test de ${escapeHtml(subject)}
            </button>
        `;


        window.scrollTo(0, 0);
    }


    // ========================================================
    // NORMAL QUIZ
    // ========================================================

    function startQuiz(subject, questionCount) {

        const questionPool =
            getQuestionPool(subject);

        if (questionPool.length === 0) {
            alert("Aucune question disponible.");
            return;
        }


        const questions =
            createQuizQuestions(
                subject,
                Math.min(
                    questionCount,
                    questionPool.length
                )
            );


        const title =
            subject === "all"
                ? "Toutes les matières"
                : subject;


        app.innerHTML = `
            <div class="action-bar">

                ${renderHomeButton}

                <b>
                    ${escapeHtml(title)}
                    · ${questions.length} questions
                </b>

            </div>


            <form id="quiz-form">

                ${questions.map((question, index) => `

                    <fieldset class="question-card">

                        <legend class="question-title">

                            ${index + 1}.
                            ${escapeHtml(question.text)}

                            ${
                                subject === "all"
                                    ? `
                                        <small class="question-category">
                                            ${escapeHtml(question.subject)}
                                        </small>
                                    `
                                    : ""
                            }

                        </legend>


                        <div class="question-options">

                            ${question.options.map(
                                (option, optionIndex) => `

                                <label class="answer-option">

                                    <input
                                        type="radio"
                                        name="question-${index}"
                                        value="${optionIndex}"
                                    >

                                    ${escapeHtml(option)}

                                </label>

                            `).join("")}

                        </div>


                        <p class="feedback"></p>

                    </fieldset>

                `).join("")}


                <button
                    type="submit"
                    class="button button--large"
                >
                    Soumettre le test
                </button>

            </form>
        `;


        window.scrollTo(0, 0);


        const form = select("#quiz-form");


        form.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                let score = 0;

                const questionElements =
                    form.querySelectorAll(
                        ".question-card"
                    );


                questions.forEach(
                    (question, index) => {

                        const questionElement =
                            questionElements[index];

                        const selected =
                            form.elements[
                                `question-${index}`
                            ].value;

                        const feedback =
                            questionElement.querySelector(
                                ".feedback"
                            );


                        questionElement
                            .querySelectorAll(
                                ".answer-option"
                            )
                            .forEach(
                                (label, optionIndex) => {

                                    const input =
                                        label.querySelector(
                                            "input"
                                        );

                                    input.disabled = true;


                                    if (
                                        question.options[
                                            optionIndex
                                        ] ===
                                        question.correctAnswer
                                    ) {
                                        label.classList.add(
                                            "answer-option--correct"
                                        );

                                    } else if (
                                        selected !== "" &&
                                        Number(selected) ===
                                        optionIndex
                                    ) {
                                        label.classList.add(
                                            "answer-option--incorrect"
                                        );
                                    }
                                }
                            );


                        if (
                            selected !== "" &&
                            question.options[
                                Number(selected)
                            ] === question.correctAnswer
                        ) {

                            score++;

                            questionElement.classList.add(
                                "question-card--correct"
                            );

                            feedback.textContent =
                                "Correct";

                        } else {

                            questionElement.classList.add(
                                "question-card--incorrect"
                            );

                            feedback.textContent =
                                selected === ""
                                    ? `Sans réponse. Bonne réponse : ${question.correctAnswer}`
                                    : `Incorrect. Bonne réponse : ${question.correctAnswer}`;
                        }

                    }
                );


                const percentage =
                    Math.round(
                        100 * score / questions.length
                    );


                form.querySelector(
                    ".button--large"
                ).remove();


                form.insertAdjacentHTML(
                    "beforebegin",

                    `
                        <div class="score-panel">

                            <strong class="score-panel__value">
                                ${score} / ${questions.length}
                            </strong>

                            <span class="score-panel__description">
                                ${percentage} %
                                de bonnes réponses
                                ·
                                ${questions.length - score}
                                à revoir
                            </span>

                            <div>

                                <button
                                    type="button"
                                    class="button"
                                    id="new-quiz"
                                >
                                    Nouveau test
                                </button>

                                <button
                                    type="button"
                                    class="button button--secondary"
                                    data-action="home"
                                >
                                    Accueil
                                </button>

                            </div>

                        </div>
                    `
                );


                select("#new-quiz").addEventListener(
                    "click",
                    () => startQuiz(
                        subject,
                        questionCount
                    )
                );


                window.scrollTo(0, 0);
            }
        );
    }


    // ========================================================
    // START DUEL
    // ========================================================

    function startMatch(
        playerOneName,
        playerTwoName,
        subject,
        questionCount
    ) {

        const players = [
            new Player(playerOneName),
            new Player(playerTwoName)
        ];


        /*
         * IMPORTANT:
         *
         * If each player needs N questions,
         * we need 2 × N different questions.
         *
         * Example:
         *
         * 10 questions/player
         * = 20 questions required.
         */

        const requiredQuestions =
            questionCount * 2;


        const questionPool =
            getQuestionPool(subject);


        if (questionPool.length < requiredQuestions) {

            alert(
                `Il faut au moins ${requiredQuestions} ` +
                `questions disponibles pour organiser ` +
                `un duel de ${questionCount} questions par joueur.\n\n` +
                `Questions disponibles : ${questionPool.length}.`
            );

            return;
        }


        /*
         * Shuffle the complete pool FIRST.
         *
         * Then divide it into two independent sets.
         */

        const shuffledQuestions =
            shuffle(questionPool);


        const playerOnePool =
            shuffledQuestions.slice(
                0,
                questionCount
            );


        const playerTwoPool =
            shuffledQuestions.slice(
                questionCount,
                requiredQuestions
            );


        /*
         * Each player now gets completely different
         * questions.
         */

        const playerOneQuestions =
            createQuizQuestionsFromPool(
                playerOnePool
            );


        const playerTwoQuestions =
            createQuizQuestionsFromPool(
                playerTwoPool
            );


        const matchState = {

            players,

            questionSets: [
                playerOneQuestions,
                playerTwoQuestions
            ],

            subject,

            questionIndex: 0,

            activePlayerIndex: 0,

            questionCount

        };


        /*
         * Start with a transition screen.
         * This prevents the other player from seeing
         * the question.
         */

        showPlayerTransition(matchState);
    }


    // ========================================================
    // PLAYER TRANSITION SCREEN
    // ========================================================

    function showPlayerTransition(matchState) {

        stopMatchTimer();


        const player =
            matchState.players[
                matchState.activePlayerIndex
            ];


        const isFirstTurn =
            matchState.questionIndex === 0 &&
            matchState.activePlayerIndex === 0;


        app.innerHTML = `

            <section class="turn-transition">

                <div class="turn-transition__icon">
                    🎮
                </div>


                <h1 class="page-title">

                    Au tour de
                    ${escapeHtml(player.name)}

                </h1>


                ${
                    isFirstTurn
                        ? `
                            <p>
                                Le duel va commencer.
                            </p>
                        `
                        : `
                            <p>
                                Passez l'appareil à
                                <strong>
                                    ${escapeHtml(player.name)}
                                </strong>.
                            </p>
                        `
                }


                <p>
                    Ne regardez pas la question
                    avant d'être prêt.
                </p>


                <button
                    type="button"
                    class="button button--large"
                    id="ready-button"
                >
                    Je suis prêt
                </button>

            </section>

        `;


        select("#ready-button").addEventListener(
            "click",
            () => runMatchTurn(matchState)
        );


        window.scrollTo(0, 0);
    }


    // ========================================================
    // RUN ONE PLAYER'S TURN
    // ========================================================

    function runMatchTurn(matchState) {

        stopMatchTimer();


        /*
         * THIS IS THE MOST IMPORTANT DIFFERENCE
         * FROM YOUR OLD VERSION.
         *
         * We select the question from the active
         * player's own question set.
         */

        const question =
            matchState.questionSets[
                matchState.activePlayerIndex
            ][
                matchState.questionIndex
            ];


        const player =
            matchState.players[
                matchState.activePlayerIndex
            ];


        let secondsLeft =
            MATCH_TIME_LIMIT;


        app.innerHTML = `

            <div class="action-bar">

                <b>
                    Question
                    ${matchState.questionIndex + 1}
                    /
                    ${matchState.questionCount}
                </b>

                ${
                    matchState.subject === "all"
                        ? `
                            <small>
                                ${escapeHtml(question.subject)}
                            </small>
                        `
                        : ""
                }

            </div>


            <!-- SCOREBOARD -->

            <div class="duel-scoreboard">

                <div
                    class="
                        player-score
                        ${
                            matchState.activePlayerIndex === 0
                                ? "player-score--active"
                                : ""
                        }
                    "
                >

                    <span class="player-score__name">
                        ${escapeHtml(
                            matchState.players[0].name
                        )}
                    </span>

                    <strong class="player-score__points">
                        ${matchState.players[0].score}
                    </strong>

                </div>


                <div class="duel-separator">
                    VS
                </div>


                <div
                    class="
                        player-score
                        ${
                            matchState.activePlayerIndex === 1
                                ? "player-score--active"
                                : ""
                        }
                    "
                >

                    <span class="player-score__name">
                        ${escapeHtml(
                            matchState.players[1].name
                        )}
                    </span>

                    <strong class="player-score__points">
                        ${matchState.players[1].score}
                    </strong>

                </div>

            </div>


            <div class="turn-message">

                Au tour de
                <b>
                    ${escapeHtml(player.name)}
                </b>

            </div>


            <!-- TIMER -->

            <div class="timer">

                <div class="timer__bar">

                    <div
                        id="timer-progress"
                        class="timer__progress"
                    ></div>

                </div>

                <span
                    id="timer-value"
                    class="timer__value"
                >
                    ${secondsLeft}
                </span>

                s

            </div>


            <!-- QUESTION -->

            <fieldset class="question-card">

                <legend class="question-title">

                    ${escapeHtml(question.text)}

                </legend>


                <div class="question-options">

                    ${question.options.map(
                        (option, optionIndex) => `

                        <button
                            type="button"
                            class="duel-answer"
                            data-option="${optionIndex}"
                        >
                            ${escapeHtml(option)}
                        </button>

                    `).join("")}

                </div>

            </fieldset>

        `;


        window.scrollTo(0, 0);


        const timerValue =
            select("#timer-value");

        const timerProgress =
            select("#timer-progress");


        const answerButtons = [
            ...app.querySelectorAll(
                ".duel-answer"
            )
        ];


        let turnFinished = false;


        // ----------------------------------------------------
        // Finish turn
        // ----------------------------------------------------

        function finishTurn(
            selectedIndex,
            timedOut = false
        ) {

            if (turnFinished) {
                return;
            }


            turnFinished = true;


            stopMatchTimer();


            const isCorrect =
                selectedIndex !== null &&
                question.options[selectedIndex] ===
                question.correctAnswer;


            player.recordAnswer(
                isCorrect,
                timedOut
            );


            /*
             * We deliberately DO NOT display the correct answer.
             *
             * This is important because the next player
             * must not see it.
             */


            answerButtons.forEach(
                button => {
                    button.disabled = true;
                }
            );


            let message;


            if (timedOut) {

                message =
                    `⏱️ Temps écoulé pour ` +
                    `${escapeHtml(player.name)} !`;

            } else if (isCorrect) {

                message =
                    `✅ Bonne réponse !`;

            } else {

                message =
                    `❌ Réponse incorrecte.`;

            }


            app.insertAdjacentHTML(
                "beforeend",

                `
                    <p class="feedback feedback--standalone">

                        ${message}

                    </p>

                    <button
                        type="button"
                        class="button button--large"
                        id="next-player"
                    >

                        ${
                            matchState.activePlayerIndex === 0
                                ? `Au tour de ${escapeHtml(
                                    matchState.players[1].name
                                  )}`
                                : "Question suivante"
                        }

                    </button>
                `
            );


            select("#next-player").addEventListener(
                "click",
                moveToNextTurn
            );
        }


        // ----------------------------------------------------
        // Move to next player / round
        // ----------------------------------------------------

        function moveToNextTurn() {

            if (
                matchState.activePlayerIndex === 0
            ) {

                /*
                 * Player 1 finished.
                 *
                 * Same round.
                 * Player 2 gets THEIR OWN question.
                 */

                showPlayerTransition({
                    ...matchState,

                    activePlayerIndex: 1
                });

            } else {

                /*
                 * Player 2 finished.
                 *
                 * Move to the next round.
                 */

                const nextQuestionIndex =
                    matchState.questionIndex + 1;


                if (
                    nextQuestionIndex >=
                    matchState.questionCount
                ) {

                    matchResult(matchState);

                    return;
                }


                showPlayerTransition({

                    ...matchState,

                    questionIndex:
                        nextQuestionIndex,

                    activePlayerIndex: 0

                });
            }
        }


        // ----------------------------------------------------
        // Answer buttons
        // ----------------------------------------------------

        answerButtons.forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        const selectedIndex =
                            Number(
                                button.dataset.option
                            );

                        finishTurn(
                            selectedIndex,
                            false
                        );
                    }
                );
            }
        );


        // ----------------------------------------------------
        // Timer
        // ----------------------------------------------------

        matchTimer = setInterval(
            () => {

                secondsLeft--;


                if (timerValue) {
                    timerValue.textContent =
                        secondsLeft;
                }


                if (timerProgress) {

                    timerProgress.style.width =
                        (
                            secondsLeft /
                            MATCH_TIME_LIMIT *
                            100
                        ) + "%";
                }


                if (secondsLeft <= 0) {

                    finishTurn(
                        null,
                        true
                    );
                }

            },
            1000
        );
    }


    // ========================================================
    // MATCH RESULT
    // ========================================================

    function matchResult(matchState) {

        stopMatchTimer();


        const playerOne =
            matchState.players[0];

        const playerTwo =
            matchState.players[1];


        let winner = null;


        if (
            playerOne.score !==
            playerTwo.score
        ) {

            winner =
                playerOne.score >
                playerTwo.score
                    ? playerOne
                    : playerTwo;
        }


        app.innerHTML = `

            <section class="result-page">

                <div class="result-page__trophy">

                    ${
                        winner
                            ? "🏆"
                            : "🤝"
                    }

                </div>


                <h1 class="page-title">

                    ${
                        winner
                            ? `${escapeHtml(
                                winner.name
                              )} remporte le match !`
                            : "Match nul !"
                    }

                </h1>


                <div class="final-scores">


                    <div
                        class="
                            final-score
                            ${
                                winner === playerOne
                                    ? "final-score--winner"
                                    : ""
                            }
                        "
                    >

                        <span>
                            ${escapeHtml(
                                playerOne.name
                            )}
                        </span>

                        <strong>
                            ${playerOne.score}
                            /
                            ${matchState.questionCount}
                        </strong>

                    </div>


                    <div
                        class="
                            final-score
                            ${
                                winner === playerTwo
                                    ? "final-score--winner"
                                    : ""
                            }
                        "
                    >

                        <span>
                            ${escapeHtml(
                                playerTwo.name
                            )}
                        </span>

                        <strong>
                            ${playerTwo.score}
                            /
                            ${matchState.questionCount}
                        </strong>

                    </div>


                </div>


                <div>

                    <button
                        type="button"
                        class="button button--large"
                        id="rematch"
                    >
                        Revanche
                    </button>


                    <button
                        type="button"
                        class="button button--secondary"
                        data-action="home"
                    >
                        Accueil
                    </button>

                </div>

            </section>

        `;


        select("#rematch").addEventListener(
            "click",
            () => startMatch(
                playerOne.name,
                playerTwo.name,
                matchState.subject,
                matchState.questionCount
            )
        );


        window.scrollTo(0, 0);
    }


    // ========================================================
    // GLOBAL EVENT DELEGATION
    // ========================================================

    app.addEventListener(
        "click",
        event => {

            const target =
                event.target.closest(
                    "[data-action]"
                );


            if (!target) {
                return;
            }


            const action =
                target.dataset.action;


            if (action === "home") {

                renderHomePage();

            } else if (action === "study") {

                startStudyMode(
                    target.dataset.subject
                );

            } else if (action === "test") {

                startQuiz(
                    target.dataset.subject,
                    DEFAULT_TEST_SIZE
                );
            }
        }
    );


    // ========================================================
    // START APPLICATION
    // ========================================================

    renderHomePage();
}