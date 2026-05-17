// Μεταβλητές Εφαρμογής
let selectedQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let selectedSection = 1;
let quizSettings = {
    questionCount: 30,
    feedbackMode: 'educational'
};

// Αρχικοποίηση
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
    updateQuestionCounts();
    showMainMenu();
});

// Ενημέρωση δυναμικών αριθμών ερωτήσεων από το questionBank
function updateQuestionCounts() {
    // Ενημέρωση όλων των ενοτήτων 1-8
    for (let i = 1; i <= 8; i++) {
        const sectionCard = document.querySelector(`.section-card[data-section="${i}"]`);
        if (sectionCard && sectionInfo[i]) {
            const questionCountElement = sectionCard.querySelector('.question-count');
            if (questionCountElement) {
                const maxQuestions = sectionInfo[i].maxQuestions;
                questionCountElement.textContent = `${maxQuestions} ερωτήσεις`;
            }
        }
    }

    // Ειδική περίπτωση για την Ενότητα 9 (Μικτή Αξιολόγηση)
    const section9Card = document.querySelector('.section-card[data-section="9"]');
    if (section9Card && sectionInfo[9]) {
        const questionCountElement = section9Card.querySelector('.question-count');
        if (questionCountElement) {
            questionCountElement.textContent = '50 ερωτήσεις';
        }
    }
}

function setupEventListeners() {
    // Επιλογή ενότητας από το κύριο μενού
    document.querySelectorAll('.section-card').forEach(card => {
        card.addEventListener('click', function() {
            document.querySelectorAll('.section-card').forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
            selectedSection = parseInt(this.dataset.section);
            setTimeout(() => showSetupSection(), 300);
        });
    });

    // Επιλογή αριθμού ερωτήσεων
    document.querySelectorAll('.count-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.count-option').forEach(o => o.classList.remove('selected'));
            this.classList.add('selected');
            quizSettings.questionCount = parseInt(this.dataset.count);
        });
    });

    // Επιλογή τρόπου λειτουργίας
    document.querySelectorAll('.feedback-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.feedback-btn').forEach(b => b.classList.remove('selected'));
            this.classList.add('selected');
            quizSettings.feedbackMode = this.dataset.mode;
        });
    });
}

function showMainMenu() {
    document.getElementById('mainMenuSection').style.display = 'block';
    document.getElementById('setupSection').style.display = 'none';
    document.getElementById('quizSection').style.display = 'none';
    document.getElementById('resultsSection').style.display = 'none';
}

function showSetupSection() {
    const sectionData = sectionInfo[selectedSection];

    // Ενημέρωση τίτλου ενότητας
    document.getElementById('sectionTitle').textContent = sectionData.title;

    // Ειδική λογική για την Ενότητα 9 (Μικτή Αξιολόγηση)
    if (selectedSection === 9) {
        // Ενημέρωση των επιλογών αριθμού ερωτήσεων για την Ενότητα 9
        const countOptions = document.querySelectorAll('.count-option');
        if (countOptions.length >= 4) {
            countOptions[0].textContent = '8';
            countOptions[0].dataset.count = '8';
            countOptions[1].textContent = '16';
            countOptions[1].dataset.count = '16';
            countOptions[2].textContent = '32';
            countOptions[2].dataset.count = '32';
            countOptions[3].textContent = '48';
            countOptions[3].dataset.count = '48';

            // Επιλογή του 32 ως προεπιλογή για τη μικτή αξιολόγηση
            countOptions.forEach(option => option.classList.remove('selected'));
            countOptions[2].classList.add('selected');
            quizSettings.questionCount = 32;
        }

        // Αφαίρεση της 5ης επιλογής αν υπάρχει
        const fifthOption = document.querySelector('.count-option[data-count="30"]');
        if (fifthOption) {
            fifthOption.style.display = 'none';
        }
    } else {
        // Επαναφορά των κανονικών επιλογών για τις άλλες ενότητες
        const countOptions = document.querySelectorAll('.count-option');
        if (countOptions.length >= 4) {
            countOptions[0].textContent = '5';
            countOptions[0].dataset.count = '5';
            countOptions[1].textContent = '10';
            countOptions[1].dataset.count = '10';
            countOptions[2].textContent = '15';
            countOptions[2].dataset.count = '15';
            countOptions[3].textContent = '20';
            countOptions[3].dataset.count = '20';
        }

        // Εμφάνιση της 5ης επιλογής
        const fifthOption = document.querySelector('.count-option[data-count="30"]');
        if (fifthOption) {
            fifthOption.style.display = 'block';
            fifthOption.textContent = 'ΟΛΕΣ';
            fifthOption.dataset.count = sectionData.maxQuestions;
        }

        // Επιλογή της πλήρους αξιολόγησης ως προεπιλογή
        const fullAssessmentOption = document.querySelector('.count-option[data-count="30"]');
        if (fullAssessmentOption) {
            countOptions.forEach(option => option.classList.remove('selected'));
            fullAssessmentOption.classList.add('selected');
            quizSettings.questionCount = sectionData.maxQuestions;
        }
    }

    // Εμφάνιση setup section
    document.getElementById('mainMenuSection').style.display = 'none';
    document.getElementById('setupSection').style.display = 'block';
}

function backToMenu() {
    // Επαναφορά στις αρχικές ρυθμίσεις
    resetQuizData();

    // Εμφάνιση του κύριου μενού
    showMainMenu();

    // Επαναφορά επιλογών στις default τιμές
    resetSetupOptions();
}

function resetSetupOptions() {
    // Επαναφορά των επιλογών αριθμού ερωτήσεων στις αρχικές τιμές
    const countOptions = document.querySelectorAll('.count-option');
    if (countOptions.length >= 4) {
        countOptions[0].textContent = '5';
        countOptions[0].dataset.count = '5';
        countOptions[1].textContent = '10';
        countOptions[1].dataset.count = '10';
        countOptions[2].textContent = '15';
        countOptions[2].dataset.count = '15';
        countOptions[3].textContent = '20';
        countOptions[3].dataset.count = '20';
    }

    // Εμφάνιση και επαναφορά της 5ης επιλογής
    const fifthOption = document.querySelector('.count-option[data-count="30"]');
    if (fifthOption) {
        fifthOption.style.display = 'block';
        fifthOption.textContent = 'ΟΛΕΣ';
        fifthOption.dataset.count = '30';
    }

    // Επαναφορά επιλογής αριθμού ερωτήσεων
    document.querySelectorAll('.count-option').forEach(o => o.classList.remove('selected'));
    const defaultCountOption = document.querySelector('.count-option[data-count="30"]');
    if (defaultCountOption) {
        defaultCountOption.classList.add('selected');
        quizSettings.questionCount = 30;
    }

    // Επαναφορά τρόπου λειτουργίας
    document.querySelectorAll('.feedback-btn').forEach(b => b.classList.remove('selected'));
    const defaultModeBtn = document.querySelector('.feedback-btn[data-mode="educational"]');
    if (defaultModeBtn) {
        defaultModeBtn.classList.add('selected');
        quizSettings.feedbackMode = 'educational';
    }
}

function startQuiz() {
    // Λήψη ερωτήσεων για την επιλεγμένη ενότητα
    const sectionQuestions = getSectionQuestions();

    if (sectionQuestions.length === 0) {
        alert('Δεν υπάρχουν διαθέσιμες ερωτήσεις για αυτή την ενότητα.');
        return;
    }

    // Ανάμιξη και επιλογή ερωτήσεων
    const shuffledQuestions = [...sectionQuestions].sort(() => Math.random() - 0.5);
    const questionCount = Math.min(quizSettings.questionCount, shuffledQuestions.length);
    selectedQuestions = shuffledQuestions.slice(0, questionCount);

    // Μηδενισμός μεταβλητών
    currentQuestionIndex = 0;
    userAnswers = new Array(selectedQuestions.length);

    // Εμφάνιση quiz section
    document.getElementById('setupSection').style.display = 'none';
    document.getElementById('quizSection').style.display = 'block';

    showQuestion();
}

function getSectionQuestions() {
    const sectionKey = `section${selectedSection}`;

    if (selectedSection === 9) {
        // Για την ενότητα 9 (μικτή αξιολόγηση), συλλογή ερωτήσεων από όλες τις ενότητες 1-8
        let allQuestions = [];
        for (let i = 1; i <= 8; i++) {
            const questions = questionBank[`section${i}`] || [];
            allQuestions = allQuestions.concat(questions);
        }

        // Ανάμιξη όλων των ερωτήσεων για τυχαία επιλογή
        return allQuestions.sort(() => Math.random() - 0.5);
    }

    return questionBank[sectionKey] || [];
}

function showQuestion() {
    const question = selectedQuestions[currentQuestionIndex];

    // Update progress
    const progress = ((currentQuestionIndex) / selectedQuestions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('progressText').textContent = `Ερώτηση ${currentQuestionIndex + 1} από ${selectedQuestions.length}`;

    // Update question content
    document.getElementById('questionNumber').textContent = currentQuestionIndex + 1;
    document.getElementById('questionType').textContent = question.type === 'true_false' ? 'Σωστό/Λάθος' : 'Πολλαπλή Επιλογή';
    document.getElementById('questionText').textContent = question.question;

    // Create options
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option;
        optionDiv.onclick = () => selectOption(index);

        // Αν είμαστε σε εξεταστικό τρόπο και έχουμε ήδη απαντήσει, δείξε την επιλογή
        if (quizSettings.feedbackMode === 'exam' && userAnswers[currentQuestionIndex] !== undefined) {
            if (index === userAnswers[currentQuestionIndex]) {
                optionDiv.classList.add('selected');
            }
        }

        optionsContainer.appendChild(optionDiv);
    });

    // Reset feedback
    document.getElementById('feedbackMessage').style.display = 'none';

    // Update navigation buttons
    document.getElementById('prevBtn').disabled = currentQuestionIndex === 0;
    updateNextButton();
}

function selectOption(optionIndex) {
    const question = selectedQuestions[currentQuestionIndex];

    // Remove previous selections
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected', 'correct', 'incorrect');
    });

    // Mark selected option
    const selectedOption = document.querySelectorAll('.option')[optionIndex];
    selectedOption.classList.add('selected');

    // Store answer (Answer Memory implementation)
    userAnswers[currentQuestionIndex] = optionIndex;

    // Show immediate feedback in educational mode
    if (quizSettings.feedbackMode === 'educational') {
        showFeedback(optionIndex, question);
    }

    updateNextButton();
}

function showFeedback(selectedIndex, question) {
    const options = document.querySelectorAll('.option');
    const feedbackDiv = document.getElementById('feedbackMessage');

    // Mark correct and incorrect options
    options.forEach((option, index) => {
        if (index === question.correct) {
            option.classList.add('correct');
        } else if (index === selectedIndex && index !== question.correct) {
            option.classList.add('incorrect');
        }
    });

    // Show feedback message
    const isCorrect = selectedIndex === question.correct;
    feedbackDiv.className = `feedback-message ${isCorrect ? 'correct' : 'incorrect'}`;
    feedbackDiv.innerHTML = `
        <strong>${isCorrect ? '✅ Σωστό!' : '❌ Λάθος!'}</strong><br>
        ${question.explanation}
    `;
    feedbackDiv.style.display = 'block';
}

function updateNextButton() {
    const nextBtn = document.getElementById('nextBtn');
    const hasAnswer = userAnswers[currentQuestionIndex] !== undefined;

    nextBtn.disabled = !hasAnswer;

    if (currentQuestionIndex === selectedQuestions.length - 1) {
        nextBtn.textContent = 'Ολοκλήρωση 🏁';
    } else {
        nextBtn.textContent = 'Επόμενη ➡️';
    }
}

function nextQuestion() {
    if (currentQuestionIndex === selectedQuestions.length - 1) {
        showResults();
    } else {
        currentQuestionIndex++;
        showQuestion();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

// Cancel Button functionality
function cancelQuiz() {
    const confirmCancel = confirm('Είστε βέβαιοι ότι θέλετε να ακυρώσετε το τεστ; Όλες οι απαντήσεις θα χαθούν.');

    if (confirmCancel) {
        // Επαναφορά δεδομένων
        resetQuizData();

        // Επιστροφή στην αρχική οθόνη
        backToMenu();
    }
}

function resetQuizData() {
    selectedQuestions = [];
    currentQuestionIndex = 0;
    userAnswers = [];
    selectedSection = 1;
}

function showResults() {
    // Calculate score
    let correctCount = 0;
    selectedQuestions.forEach((question, index) => {
        if (userAnswers[index] === question.correct) {
            correctCount++;
        }
    });

    const percentage = Math.round((correctCount / selectedQuestions.length) * 100);
    const incorrectCount = selectedQuestions.length - correctCount;

    // Update results display
    document.getElementById('correctCount').textContent = correctCount;
    document.getElementById('incorrectCount').textContent = incorrectCount;
    document.getElementById('finalPercentage').textContent = percentage + '%';
    document.getElementById('totalQuestions').textContent = selectedQuestions.length;
    document.getElementById('scoreText').textContent = percentage + '%';

    // Update score circle
    const scoreCircle = document.getElementById('scoreCircle');
    scoreCircle.style.setProperty('--percentage', percentage + '%');

    // Performance badge
    const badge = document.getElementById('performanceBadge');
    if (percentage >= 90) {
        badge.textContent = '🏆 Άριστα! Εξαιρετική Επίδοση!';
        badge.className = 'performance-badge excellent';
    } else if (percentage >= 75) {
        badge.textContent = '🎯 Πολύ Καλά! Καλή Επίδοση!';
        badge.className = 'performance-badge good';
    } else if (percentage >= 60) {
        badge.textContent = '📚 Μέτρια Επίδοση - Χρειάζεται Μελέτη';
        badge.className = 'performance-badge average';
    } else {
        badge.textContent = '📖 Χρειάζεται Περισσότερη Μελέτη';
        badge.className = 'performance-badge poor';
    }

    // Show detailed results for exam mode
    if (quizSettings.feedbackMode === 'exam') {
        showDetailedResults();
    }

    // Show results section
    document.getElementById('quizSection').style.display = 'none';
    document.getElementById('resultsSection').style.display = 'block';
}

function showDetailedResults() {
    const detailedResultsDiv = document.getElementById('detailedResults');
    const containerDiv = document.getElementById('detailedResultsContainer');

    containerDiv.innerHTML = '';

    selectedQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correct;

        const resultItem = document.createElement('div');
        resultItem.className = `detailed-result-item ${isCorrect ? 'correct' : 'incorrect'}`;

        resultItem.innerHTML = `
            <h5>Ερώτηση ${index + 1}: ${question.question}</h5>
            <div class="user-answer">Η απάντησή σας: ${question.options[userAnswer]}</div>
            ${!isCorrect ? `<div class="correct-answer">Σωστή απάντηση: ${question.options[question.correct]}</div>` : ''}
            <div class="explanation">${question.explanation}</div>
        `;

        containerDiv.appendChild(resultItem);
    });

    detailedResultsDiv.style.display = 'block';
}

function restartQuiz() {
    // Reset everything
    resetQuizData();

    // Show setup section για την ίδια ενότητα
    showSetupSection();
    resetSetupOptions();
}

// HTML Export functionality - Τέλεια για ελληνικά, εύκολη εκτύπωση
function exportToHTML() {
    console.log('Δημιουργία HTML αρχείου...');

    // Υπολογισμός αποτελεσμάτων
    const correctCount = selectedQuestions.filter((q, i) => userAnswers[i] === q.correct).length;
    const percentage = Math.round((correctCount / selectedQuestions.length) * 100);
    const sectionData = sectionInfo[selectedSection];
    const currentDate = new Date().toLocaleDateString('el-GR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Καθορισμός badge επίδοσης
    let performanceBadge = '';
    let badgeClass = '';
    if (percentage >= 90) {
        performanceBadge = '🏆 Άριστα! Εξαιρετική Επίδοση!';
        badgeClass = 'excellent';
    } else if (percentage >= 75) {
        performanceBadge = '🎯 Πολύ Καλά! Καλή Επίδοση!';
        badgeClass = 'good';
    } else if (percentage >= 60) {
        performanceBadge = '📚 Μέτρια Επίδοση - Χρειάζεται Μελέτη';
        badgeClass = 'average';
    } else {
        performanceBadge = '📖 Χρειάζεται Περισσότερη Μελέτη';
        badgeClass = 'poor';
    }

    // Δημιουργία HTML περιεχομένου
    const htmlContent = `<!DOCTYPE html>
<html lang="el">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Αποτελέσματα Τεστ - ${sectionData.description}</title>
    <style>
        /* Print και Screen Styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Georgia', 'Times New Roman', serif;
            line-height: 1.6;
            color: #333;
            background-color: #f8f9fa;
            padding: 20px;
        }

        .container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
            overflow: hidden;
        }

        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            text-align: center;
        }

        .header h1 {
            font-size: 2.2em;
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .header h2 {
            font-size: 1.3em;
            opacity: 0.9;
            font-weight: normal;
        }

        .content {
            padding: 30px;
        }

        .results-summary {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 25px;
            margin-bottom: 30px;
            border-left: 5px solid #28a745;
        }

        .results-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 20px;
        }

        .result-item {
            text-align: center;
            padding: 15px;
            background: white;
            border-radius: 8px;
            border: 1px solid #dee2e6;
        }

        .result-value {
            font-size: 2em;
            font-weight: bold;
            color: #495057;
            display: block;
        }

        .result-label {
            color: #6c757d;
            font-size: 0.9em;
            margin-top: 5px;
        }

        .percentage {
            font-size: 3em !important;
            color: #28a745;
        }

        .performance-badge {
            text-align: center;
            padding: 15px;
            border-radius: 8px;
            font-weight: bold;
            font-size: 1.1em;
            margin: 20px 0;
        }

        .performance-badge.excellent {
            background: #d1ecf1;
            color: #0c5460;
            border: 1px solid #bee5eb;
        }

        .performance-badge.good {
            background: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }

        .performance-badge.average {
            background: #fff3cd;
            color: #856404;
            border: 1px solid #ffeaa7;
        }

        .performance-badge.poor {
            background: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }

        .question-item {
            margin-bottom: 25px;
            border: 1px solid #dee2e6;
            border-radius: 8px;
            overflow: hidden;
        }

        .question-header {
            padding: 15px 20px;
            font-weight: bold;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .question-header.correct {
            background: #d4edda;
            color: #155724;
            border-bottom: 1px solid #c3e6cb;
        }

        .question-header.incorrect {
            background: #f8d7da;
            color: #721c24;
            border-bottom: 1px solid #f5c6cb;
        }

        .question-content {
            padding: 20px;
        }

        .question-text {
            font-weight: bold;
            margin-bottom: 15px;
            font-size: 1.1em;
        }

        .answer-section {
            margin-bottom: 15px;
        }

        .answer-label {
            font-weight: bold;
            display: inline-block;
            margin-bottom: 5px;
        }

        .user-answer {
            color: #6c757d;
        }

        .correct-answer {
            color: #28a745;
            font-weight: bold;
        }

        .incorrect-answer {
            color: #dc3545;
            font-weight: bold;
        }

        .explanation {
            background: #f1f3f4;
            padding: 15px;
            border-radius: 5px;
            border-left: 4px solid #6c757d;
            margin-top: 15px;
        }

        .explanation-label {
            font-weight: bold;
            color: #495057;
            margin-bottom: 8px;
            display: block;
        }

        .footer {
            background: #f8f9fa;
            padding: 20px;
            text-align: center;
            color: #6c757d;
            border-top: 1px solid #dee2e6;
        }

        .print-instructions {
            background: #e3f2fd;
            border: 1px solid #90caf9;
            border-radius: 8px;
            padding: 15px;
            margin-bottom: 20px;
            text-align: center;
        }

        .print-instructions strong {
            color: #1565c0;
        }

        /* Print Styles */
        @media print {
            body {
                background: white;
                padding: 0;
            }

            .container {
                box-shadow: none;
                border-radius: 0;
            }

            .print-instructions {
                display: none;
            }

            .question-item {
                break-inside: avoid;
                page-break-inside: avoid;
            }

            .header {
                background: #667eea !important;
                -webkit-print-color-adjust: exact;
                color-adjust: exact;
            }
        }

        @page {
            margin: 1cm;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎓 Αποτελέσματα Τεστ Αυτοαξιολόγησης</h1>
            <h2>${sectionData.description}</h2>
        </div>

        <div class="content">
            <div class="print-instructions">
                <strong>💡 Οδηγίες:</strong> Για εκτύπωση ή αποθήκευση ως PDF: Ctrl+P (ή Cmd+P) → Επιλέξτε "Save as PDF"
            </div>

            <div class="results-summary">
                <h3 style="margin-bottom: 20px; color: #495057;">📊 Σύνοψη Αποτελεσμάτων</h3>

                <div class="results-grid">
                    <div class="result-item">
                        <span class="result-value percentage">${percentage}%</span>
                        <div class="result-label">Ποσοστό Επιτυχίας</div>
                    </div>
                    <div class="result-item">
                        <span class="result-value" style="color: #28a745;">${correctCount}</span>
                        <div class="result-label">Σωστές Απαντήσεις</div>
                    </div>
                    <div class="result-item">
                        <span class="result-value" style="color: #dc3545;">${selectedQuestions.length - correctCount}</span>
                        <div class="result-label">Λανθασμένες</div>
                    </div>
                    <div class="result-item">
                        <span class="result-value">${selectedQuestions.length}</span>
                        <div class="result-label">Σύνολο Ερωτήσεων</div>
                    </div>
                </div>

                <div class="performance-badge ${badgeClass}">
                    ${performanceBadge}
                </div>

                <p style="text-align: center; margin-top: 15px; color: #6c757d;">
                    <strong>Ημερομηνία:</strong> ${currentDate}
                </p>
            </div>

            <h3 style="margin-bottom: 25px; color: #495057; border-bottom: 2px solid #dee2e6; padding-bottom: 10px;">
                📝 Αναλυτικά Αποτελέσματα
            </h3>

            ${selectedQuestions.map((question, index) => {
                const userAnswer = userAnswers[index];
                const isCorrect = userAnswer === question.correct;
                const statusIcon = isCorrect ? '✅' : '❌';
                const statusText = isCorrect ? 'ΣΩΣΤΟ' : 'ΛΑΘΟΣ';
                const headerClass = isCorrect ? 'correct' : 'incorrect';

                return `
                    <div class="question-item">
                        <div class="question-header ${headerClass}">
                            <span>${statusIcon}</span>
                            <span>Ερώτηση ${index + 1} - ${statusText}</span>
                        </div>
                        <div class="question-content">
                            <div class="question-text">${question.question}</div>

                            <div class="answer-section">
                                <span class="answer-label">Η απάντησή σας:</span>
                                <span class="${isCorrect ? 'correct-answer' : 'incorrect-answer'}">
                                    ${question.options[userAnswer] || 'Δεν δόθηκε απάντηση'}
                                </span>
                            </div>

                            ${!isCorrect ? `
                                <div class="answer-section">
                                    <span class="answer-label">Σωστή απάντηση:</span>
                                    <span class="correct-answer">${question.options[question.correct]}</span>
                                </div>
                            ` : ''}

                            <div class="explanation">
                                <span class="explanation-label">💡 Εξήγηση:</span>
                                ${question.explanation}
                            </div>
                        </div>
                    </div>
                `;
            }).join('')}
        </div>

        <div class="footer">
            <p><strong>Διαδραστικό Τεστ Αυτοαξιολόγησης</strong></p>
            <p>Social Media Marketing</p>
            <p style="margin-top: 10px; font-size: 0.9em;">
                Δημιουργήθηκε στις ${currentDate}
            </p>
        </div>
    </div>
</body>
</html>`;

    // Δημιουργία και λήψη αρχείου
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = `αποτελεσματα_τεστ_ενοτητα_${selectedSection}_${new Date().toISOString().split('T')[0]}.html`;
    link.style.display = 'none';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Καθαρισμός URL object
    setTimeout(() => URL.revokeObjectURL(url), 100);

    console.log('HTML αρχείο δημιουργήθηκε επιτυχώς!');
}