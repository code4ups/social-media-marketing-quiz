// Τράπεζα Ερωτήσεων για όλες τις Ενότητες
const questionBank = {
    // Ενότητα 1: Παραδοσιακό Μάρκετινγκ (Foundations)
    section1: [
        {
            type: "true_false",
            question: "Το παραδοσιακό μάρκετινγκ βασίζεται αποκλειστικά σε ψηφιακά κανάλια.",
            options: ["Σωστό", "Λάθος"],
            correct: 1,
            explanation: "Λάθος - Το παραδοσιακό μάρκετινγκ αφορά κυρίως offline κανάλια όπως TV, ραδιόφωνο, έντυπα και υπαίθρια διαφήμιση."
        },
        {
            type: "true_false",
            question: "Η τμηματοποίηση αγοράς βοηθά μια επιχείρηση να προσαρμόσει καλύτερα το μήνυμά της.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Με την τμηματοποίηση, η επιχείρηση στοχεύει πιο αποτελεσματικά ομάδες με κοινά χαρακτηριστικά."
        },
        {
            type: "true_false",
            question: "Το USP (Unique Selling Proposition) περιγράφει τι κάνει ένα προϊόν ξεχωριστό από τον ανταγωνισμό.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Το USP αναδεικνύει το μοναδικό όφελος που προσφέρει η μάρκα."
        },
        {
            type: "true_false",
            question: "Η αναγνωρισιμότητα μάρκας (brand awareness) είναι άσχετη με την πρόθεση αγοράς.",
            options: ["Σωστό", "Λάθος"],
            correct: 1,
            explanation: "Λάθος - Η υψηλή αναγνωρισιμότητα συχνά αυξάνει την πιθανότητα επιλογής της μάρκας."
        },
        {
            type: "true_false",
            question: "Το positioning αφορά το πώς θέλουμε να αντιλαμβάνεται ο πελάτης τη μάρκα μας.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Το positioning είναι η επιθυμητή θέση της μάρκας στο μυαλό του καταναλωτή."
        },
        {
            type: "true_false",
            question: "Η έρευνα αγοράς μπορεί να γίνει μόνο με ποσοτικές μεθόδους.",
            options: ["Σωστό", "Λάθος"],
            correct: 1,
            explanation: "Λάθος - Υπάρχουν ποσοτικές και ποιοτικές μέθοδοι, και συχνά συνδυάζονται."
        },
        {
            type: "true_false",
            question: "Η τιμή είναι ένα από τα 4P του μίγματος μάρκετινγκ.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Τα 4P είναι Product, Price, Place, Promotion."
        },
        {
            type: "true_false",
            question: "Στο παραδοσιακό μάρκετινγκ, το ραδιόφωνο θεωρείται μέσο ευρείας κάλυψης.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Το ραδιόφωνο επιτρέπει μαζική προσέγγιση κοινού."
        },
        {
            type: "true_false",
            question: "Η συσκευασία (packaging) δεν επηρεάζει την αντίληψη αξίας του προϊόντος.",
            options: ["Σωστό", "Λάθος"],
            correct: 1,
            explanation: "Λάθος - Η συσκευασία επηρεάζει έντονα την αντίληψη ποιότητας και αξίας."
        },
        {
            type: "true_false",
            question: "Η διαφήμιση σε υπαίθριες πινακίδες (outdoor) είναι τυπικό εργαλείο παραδοσιακού μάρκετινγκ.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Οι υπαίθριες πινακίδες ανήκουν στα κλασικά offline μέσα."
        },

        {
            type: "multiple_choice",
            question: "Ποιο από τα παρακάτω ΔΕΝ ανήκει στα 4P;",
            options: ["Product", "Price", "People", "Place"],
            correct: 2,
            explanation: "Το People ανήκει συνήθως στα επεκταμένα 7P (κυρίως για υπηρεσίες), όχι στα βασικά 4P."
        },
        {
            type: "multiple_choice",
            question: "Ποια είναι η σωστή σειρά του μοντέλου AIDA;",
            options: [
                "Attention - Interest - Desire - Action",
                "Action - Interest - Desire - Attention",
                "Attention - Desire - Interest - Action",
                "Interest - Attention - Desire - Action"
            ],
            correct: 0,
            explanation: "Η σωστή λογική είναι να τραβήξεις προσοχή, να χτίσεις ενδιαφέρον, επιθυμία και τέλος δράση."
        },
        {
            type: "multiple_choice",
            question: "Ποιος είναι ο κύριος στόχος της τμηματοποίησης αγοράς;",
            options: [
                "Να αυξηθεί η τιμή σε όλα τα προϊόντα",
                "Να στοχευθούν ομάδες με κοινά χαρακτηριστικά",
                "Να καταργηθεί ο ανταγωνισμός",
                "Να μειωθεί η ποιότητα για χαμηλότερο κόστος"
            ],
            correct: 1,
            explanation: "Η τμηματοποίηση βοηθά στην πιο ακριβή και αποτελεσματική στόχευση."
        },
        {
            type: "multiple_choice",
            question: "Ποιο μέσο θεωρείται παραδοσιακό κανάλι διαφήμισης;",
            options: ["Τηλεόραση", "TikTok", "Instagram Stories", "Google Search Ads"],
            correct: 0,
            explanation: "Η τηλεόραση είναι κλασικό παραδοσιακό κανάλι."
        },
        {
            type: "multiple_choice",
            question: "Το branding αφορά κυρίως:",
            options: [
                "Μόνο το λογότυπο",
                "Μόνο την τιμολογιακή πολιτική",
                "Τη συνολική ταυτότητα και εμπειρία μάρκας",
                "Μόνο τη διανομή"
            ],
            correct: 2,
            explanation: "Το branding περιλαμβάνει αξίες, εικόνα, ύφος επικοινωνίας και εμπειρία πελάτη."
        },
        {
            type: "multiple_choice",
            question: "Ποια μεταβλητή είναι δημογραφική;",
            options: ["Ηλικία", "Στάση απέναντι στο ρίσκο", "Τρόπος ζωής", "Προσωπικότητα"],
            correct: 0,
            explanation: "Η ηλικία είναι κλασικό δημογραφικό χαρακτηριστικό."
        },
        {
            type: "multiple_choice",
            question: "Ποιο από τα παρακάτω περιγράφει καλύτερα το positioning statement;",
            options: [
                "Εσωτερικό λογιστικό έγγραφο",
                "Σύντομη δήλωση για την αξία της μάρκας σε συγκεκριμένο κοινό",
                "Τεχνικό εγχειρίδιο παραγωγής",
                "Σχέδιο προσλήψεων"
            ],
            correct: 1,
            explanation: "Το positioning statement ορίζει σε ποιον απευθύνεται η μάρκα και ποια μοναδική αξία προσφέρει."
        },
        {
            type: "multiple_choice",
            question: "Ποια στρατηγική τιμολόγησης χρησιμοποιείται συχνά σε νέο προϊόν για ταχεία διείσδυση;",
            options: ["Premium pricing", "Penetration pricing", "Skimming χωρίς ανταγωνισμό", "Cost-plus μόνο"],
            correct: 1,
            explanation: "Η penetration pricing ξεκινά με χαμηλότερη τιμή για γρήγορη απόκτηση μεριδίου αγοράς."
        },
        {
            type: "multiple_choice",
            question: "Ποια λειτουργία έχει η προώθηση πωλήσεων (sales promotion);",
            options: [
                "Μακροχρόνια αλλαγή εταιρικής δομής",
                "Βραχυχρόνια ενίσχυση αγοράς",
                "Αντικατάσταση όλων των καναλιών διανομής",
                "Κατάργηση branding"
            ],
            correct: 1,
            explanation: "Η προώθηση πωλήσεων στοχεύει σε άμεση αύξηση ζήτησης σε σύντομο χρονικό διάστημα."
        },
        {
            type: "multiple_choice",
            question: "Ποιο KPI συνδέεται άμεσα με αναγνωρισιμότητα μάρκας;",
            options: ["Brand Recall", "Inventory Turnover", "Production Yield", "Debt Ratio"],
            correct: 0,
            explanation: "Το Brand Recall μετρά πόσο εύκολα ο καταναλωτής θυμάται τη μάρκα."
        },

        {
            type: "true_false",
            question: "Η συχνότητα έκθεσης (frequency) σε ένα μήνυμα επηρεάζει την απομνημόνευσή του.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Η επανάληψη μπορεί να ενισχύσει τη μνήμη και την ανάκληση του μηνύματος."
        },
        {
            type: "true_false",
            question: "Η στρατηγική διαφοροποίησης στοχεύει στο να μοιάζει το προϊόν με όλα τα υπόλοιπα.",
            options: ["Σωστό", "Λάθος"],
            correct: 1,
            explanation: "Λάθος - Στόχος της διαφοροποίησης είναι να ξεχωρίζει το προϊόν από τον ανταγωνισμό."
        },
        {
            type: "true_false",
            question: "Το word of mouth μπορεί να επηρεάσει σημαντικά τις αγοραστικές αποφάσεις.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Οι συστάσεις από άλλους καταναλωτές έχουν υψηλή αξιοπιστία."
        },
        {
            type: "true_false",
            question: "Το μάρκετινγκ υπηρεσιών δεν επηρεάζεται από την ανθρώπινη επαφή.",
            options: ["Σωστό", "Λάθος"],
            correct: 1,
            explanation: "Λάθος - Στις υπηρεσίες, η ανθρώπινη επαφή είναι κρίσιμος παράγοντας εμπειρίας."
        },
        {
            type: "true_false",
            question: "Η επιλογή καναλιού διανομής επηρεάζει το τελικό κόστος για τον καταναλωτή.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Διαφορετικά κανάλια έχουν διαφορετικά κόστη, που συχνά περνούν στην τελική τιμή."
        },
        {
            type: "true_false",
            question: "Η εποχικότητα δεν έχει καμία επίδραση στη ζήτηση προϊόντων.",
            options: ["Σωστό", "Λάθος"],
            correct: 1,
            explanation: "Λάθος - Σε πολλές κατηγορίες προϊόντων η εποχικότητα επηρεάζει έντονα τη ζήτηση."
        },
        {
            type: "true_false",
            question: "Η αντιληπτή ποιότητα μπορεί να είναι διαφορετική από την τεχνική ποιότητα.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Η αντίληψη του πελάτη διαμορφώνεται και από εικόνα, τιμή, συσκευασία, εμπειρία."
        },
        {
            type: "true_false",
            question: "Τα focus groups είναι ποιοτική μέθοδος έρευνας αγοράς.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Τα focus groups συλλέγουν εις βάθος απόψεις και στάσεις καταναλωτών."
        },
        {
            type: "true_false",
            question: "Η ελαστικότητα ζήτησης δεν σχετίζεται με την τιμή.",
            options: ["Σωστό", "Λάθος"],
            correct: 1,
            explanation: "Λάθος - Η ελαστικότητα εκφράζει ακριβώς πώς αλλάζει η ζήτηση όταν αλλάζει η τιμή."
        },
        {
            type: "true_false",
            question: "Η συνέπεια στο brand identity βοηθά στη δημιουργία εμπιστοσύνης.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Η συνέπεια σε μήνυμα και εικόνα αυξάνει αξιοπιστία και αναγνωρισιμότητα."
        },

        {
            type: "multiple_choice",
            question: "Ποια από τις παρακάτω είναι ψυχογραφική μεταβλητή;",
            options: ["Φύλο", "Τρόπος ζωής", "Εισόδημα", "Γεωγραφική περιοχή"],
            correct: 1,
            explanation: "Ο τρόπος ζωής ανήκει στις ψυχογραφικές μεταβλητές."
        },
        {
            type: "multiple_choice",
            question: "Ποιο είναι παράδειγμα στρατηγικής pull;",
            options: [
                "Πίεση στους χονδρεμπόρους με εκπτώσεις",
                "Ενίσχυση τελικής ζήτησης με διαφήμιση προς καταναλωτή",
                "Μείωση αποθέματος στο εργοστάσιο",
                "Αύξηση κόστους συσκευασίας"
            ],
            correct: 1,
            explanation: "Η pull στρατηγική δημιουργεί ζήτηση στον καταναλωτή ώστε να 'τραβήξει' το προϊόν από το κανάλι."
        },
        {
            type: "multiple_choice",
            question: "Ποια έννοια περιγράφει καλύτερα το CLV (Customer Lifetime Value);",
            options: [
                "Το κόστος μιας τηλεοπτικής καμπάνιας",
                "Η συνολική αξία που αποφέρει ένας πελάτης σε βάθος χρόνου",
                "Ο ημερήσιος αριθμός επισκεπτών",
                "Η τιμή λιανικής ενός προϊόντος"
            ],
            correct: 1,
            explanation: "Το CLV εκτιμά τα συνολικά κέρδη από έναν πελάτη στη διάρκεια της σχέσης."
        },
        {
            type: "multiple_choice",
            question: "Ποιο από τα παρακάτω είναι παράδειγμα πρωτογενούς έρευνας;",
            options: ["Ανάλυση δημοσιευμένης έκθεσης", "Διεξαγωγή ερωτηματολογίου", "Μελέτη στατιστικής υπηρεσίας", "Ανάγνωση κλαδικού άρθρου"],
            correct: 1,
            explanation: "Το ερωτηματολόγιο συλλέγει νέα δεδομένα απευθείας από το κοινό."
        },
        {
            type: "multiple_choice",
            question: "Στο λιανεμπόριο, το merchandising αφορά κυρίως:",
            options: [
                "Τον τρόπο παρουσίασης προϊόντων στο σημείο πώλησης",
                "Την επιλογή τραπεζικού δανείου",
                "Την παραγωγή πρώτων υλών",
                "Τη νομική σύσταση επιχείρησης"
            ],
            correct: 0,
            explanation: "Το merchandising βελτιώνει ορατότητα και αγοραστική εμπειρία στο κατάστημα."
        },
        {
            type: "multiple_choice",
            question: "Ποια μέτρηση δείχνει κυρίως αποτελεσματικότητα πωλήσεων;",
            options: ["Conversion rate", "Reach", "Impressions", "CPM"],
            correct: 0,
            explanation: "Το conversion rate δείχνει το ποσοστό που ολοκληρώνει την επιθυμητή ενέργεια."
        },
        {
            type: "multiple_choice",
            question: "Τι σημαίνει cannibalization προϊόντος;",
            options: [
                "Αύξηση τιμής από ανταγωνιστή",
                "Όταν νέο προϊόν αφαιρεί πωλήσεις από παλιό προϊόν της ίδιας εταιρείας",
                "Παράνομη αντιγραφή συσκευασίας",
                "Αλλαγή καναλιού διανομής"
            ],
            correct: 1,
            explanation: "Cannibalization είναι η εσωτερική μετατόπιση πωλήσεων μέσα στο ίδιο brand portfolio."
        },
        {
            type: "multiple_choice",
            question: "Ποιο είναι βασικό πλεονέκτημα του direct mail στο παραδοσιακό μάρκετινγκ;",
            options: [
                "Στοχευμένη επικοινωνία σε συγκεκριμένο κοινό",
                "Μηδενικό κόστος παραγωγής",
                "Αδυναμία προσωποποίησης",
                "Αποκλειστικά μαζική και μη στοχευμένη προσέγγιση"
            ],
            correct: 0,
            explanation: "Το direct mail επιτρέπει πιο προσωποποιημένη και στοχευμένη επικοινωνία."
        },
        {
            type: "multiple_choice",
            question: "Ποιο στοιχείο επηρεάζει άμεσα την αντιληπτή αξία σε premium positioning;",
            options: ["Χαμηλή τιμή πάντα", "Εικόνα μάρκας και εμπειρία", "Μόνο η απόσταση καταστήματος", "Μόνο ο αριθμός SKU"],
            correct: 1,
            explanation: "Στο premium positioning καθοριστικός είναι ο συνδυασμός εικόνας, ποιότητας και εμπειρίας."
        },
        {
            type: "multiple_choice",
            question: "Ποια στρατηγική επικοινωνίας στοχεύει σε διατήρηση υπάρχοντων πελατών;",
            options: ["Retention marketing", "Mass undifferentiated μόνο", "Αποκλειστικά cold outreach", "Price war"],
            correct: 0,
            explanation: "Το retention marketing εστιάζει στη διατήρηση και επαναγορά."
        },

        {
            type: "true_false",
            question: "Η συνέργεια μεταξύ προϊόντος, τιμής, διανομής και προώθησης είναι κρίσιμη για αποτελεσματική στρατηγική.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Η συνοχή των 4P ενισχύει τη συνολική απόδοση."
        },
        {
            type: "true_false",
            question: "Οι δημόσιες σχέσεις (PR) δεν επηρεάζουν τη φήμη της μάρκας.",
            options: ["Σωστό", "Λάθος"],
            correct: 1,
            explanation: "Λάθος - Οι PR δράσεις επηρεάζουν ουσιαστικά την εικόνα και τη φήμη."
        },
        {
            type: "true_false",
            question: "Το brand loyalty μπορεί να μειώσει την ευαισθησία στην τιμή.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Πιστοί πελάτες συχνά επιλέγουν τη μάρκα ακόμα και σε υψηλότερη τιμή."
        },
        {
            type: "true_false",
            question: "Η ανάλυση ανταγωνισμού είναι χρήσιμη μόνο για πολύ μεγάλες επιχειρήσεις.",
            options: ["Σωστό", "Λάθος"],
            correct: 1,
            explanation: "Λάθος - Η ανάλυση ανταγωνισμού είναι απαραίτητη για κάθε μέγεθος επιχείρησης."
        },
        {
            type: "true_false",
            question: "Η δοκιμή προϊόντος (sampling) μπορεί να αυξήσει την πιθανότητα πρώτης αγοράς.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Η εμπειρία χρήσης μειώνει αβεβαιότητα και ενισχύει δοκιμή."
        },
        {
            type: "true_false",
            question: "Η διαφημιστική κόπωση εμφανίζεται όταν το ίδιο μήνυμα προβάλλεται υπερβολικά.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Η υπερβολική επανάληψη μειώνει την αποτελεσματικότητα του μηνύματος."
        },
        {
            type: "true_false",
            question: "Η ανάπτυξη νέου προϊόντος δεν χρειάζεται έλεγχο αποδοχής από την αγορά.",
            options: ["Σωστό", "Λάθος"],
            correct: 1,
            explanation: "Λάθος - Ο έλεγχος αποδοχής (test market/feedback) είναι κρίσιμος πριν την ευρεία διάθεση."
        },
        {
            type: "true_false",
            question: "Το SWOT βοηθά στην κατανόηση εσωτερικών και εξωτερικών παραγόντων.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Αναλύει δυνατά/αδύνατα σημεία και ευκαιρίες/απειλές."
        },
        {
            type: "true_false",
            question: "Στρατηγική χαμηλής τιμής χωρίς έλεγχο κόστους είναι βιώσιμη μακροπρόθεσμα.",
            options: ["Σωστό", "Λάθος"],
            correct: 1,
            explanation: "Λάθος - Χωρίς πειθαρχία κόστους, η στρατηγική αυτή υπονομεύει την κερδοφορία."
        },
        {
            type: "true_false",
            question: "Η εμπειρία στο σημείο πώλησης επηρεάζει την πρόθεση επαναγοράς.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Θετική εμπειρία ενισχύει ικανοποίηση και πιστότητα."
        },

        {
            type: "multiple_choice",
            question: "Ποιος είναι ο βασικός στόχος του repositioning;",
            options: [
                "Να αλλάξει η αντίληψη της αγοράς για τη μάρκα",
                "Να μειωθεί ο αριθμός πελατών",
                "Να καταργηθούν τα κανάλια διανομής",
                "Να σταματήσει η προώθηση"
            ],
            correct: 0,
            explanation: "Το repositioning στοχεύει στην ανανέωση της αντίληψης του κοινού για τη μάρκα."
        },
        {
            type: "multiple_choice",
            question: "Ποια ένδειξη δείχνει ισχυρό brand equity;",
            options: [
                "Αγορά μόνο με εκπτώσεις",
                "Υψηλή προτίμηση και εμπιστοσύνη στη μάρκα",
                "Μηδενική αναγνωρισιμότητα",
                "Αδυναμία διαφοροποίησης"
            ],
            correct: 1,
            explanation: "Ισχυρό brand equity σημαίνει αναγνωρισιμότητα, προτίμηση και αντιληπτή αξία."
        },
        {
            type: "multiple_choice",
            question: "Σε ποιο στάδιο PLC (Product Life Cycle) είναι συχνή η έντονη ενημερωτική διαφήμιση;",
            options: ["Εισαγωγή", "Ωρίμανση", "Παρακμή", "Κορεσμός"],
            correct: 0,
            explanation: "Στο στάδιο εισαγωγής χρειάζεται ενημέρωση για το νέο προϊόν."
        },
        {
            type: "multiple_choice",
            question: "Ποιο είναι παράδειγμα καναλιού διανομής δύο επιπέδων;",
            options: [
                "Παραγωγός → Καταναλωτής",
                "Παραγωγός → Χονδρέμπορος → Λιανέμπορος → Καταναλωτής",
                "Παραγωγός → Marketplace μόνο",
                "Παραγωγός → Πράκτορας μόνο"
            ],
            correct: 1,
            explanation: "Υπάρχουν δύο ενδιάμεσοι πριν τον τελικό καταναλωτή: χονδρέμπορος και λιανέμπορος."
        },
        {
            type: "multiple_choice",
            question: "Ποια πρακτική βοηθά στη μείωση αντιλαμβανόμενου ρίσκου αγοράς;",
            options: ["Ασαφείς όροι επιστροφής", "Εγγύηση προϊόντος", "Κρυφές χρεώσεις", "Έλλειψη πληροφοριών"],
            correct: 1,
            explanation: "Η εγγύηση αυξάνει εμπιστοσύνη και μειώνει τον φόβο αποτυχίας αγοράς."
        },
        {
            type: "multiple_choice",
            question: "Ποιο από τα παρακάτω περιγράφει καλύτερα το integrated marketing communication (IMC);",
            options: [
                "Ασύνδετα μηνύματα ανά κανάλι",
                "Ενιαίο και συνεπές μήνυμα σε όλα τα κανάλια",
                "Μόνο τηλεοπτικές καμπάνιες",
                "Μόνο προσφορές τιμής"
            ],
            correct: 1,
            explanation: "Το IMC απαιτεί συνέπεια και συντονισμό σε όλα τα σημεία επαφής."
        },
        {
            type: "multiple_choice",
            question: "Ποιο KPI δείχνει πόσο κοστίζει η απόκτηση νέου πελάτη;",
            options: ["CAC", "NPS", "AOV", "CTR"],
            correct: 0,
            explanation: "CAC (Customer Acquisition Cost) είναι το κόστος απόκτησης πελάτη."
        },
        {
            type: "multiple_choice",
            question: "Ποιο στοιχείο είναι κρίσιμο σε B2C ραδιοφωνικό σποτ;",
            options: ["Καθαρό call-to-action", "Μεγάλο τεχνικό παράρτημα", "Απουσία brand mention", "Χωρίς επανάληψη μηνύματος"],
            correct: 0,
            explanation: "Το ξεκάθαρο CTA βοηθά τον ακροατή να προχωρήσει σε ενέργεια."
        },
        {
            type: "multiple_choice",
            question: "Ποια είναι η καλύτερη περιγραφή της αντιληπτής τοποθέτησης έναντι ανταγωνισμού;",
            options: [
                "Αντικειμενική τιμή κόστους",
                "Το πώς βλέπει ο πελάτης τη μάρκα σε σύγκριση με άλλες",
                "Το οργανόγραμμα της εταιρείας",
                "Η χωρητικότητα αποθήκης"
            ],
            correct: 1,
            explanation: "Η τοποθέτηση είναι αντίληψη του κοινού σε συγκριτικό πλαίσιο."
        },
        {
            type: "multiple_choice",
            question: "Ποια ενέργεια συνδέεται περισσότερο με trade marketing;",
            options: [
                "Αύξηση ορατότητας στο ράφι και συνεργασία με λιανέμπορους",
                "Μόνο εταιρικές αναρτήσεις social",
                "Μόνο έρευνα HR",
                "Αλλαγή νομικής μορφής εταιρείας"
            ],
            correct: 0,
            explanation: "Το trade marketing στοχεύει στη βελτίωση παρουσίας και απόδοσης στο κανάλι λιανικής."
        }
    ],

    // Ενότητα 2: Strategy Basics (στόχοι, funnel, KPI)
    section2: [
        {
            type: "true_false",
            question: "Οι στόχοι μάρκετινγκ πρέπει να είναι ευθυγραμμισμένοι με τους επιχειρηματικούς στόχους.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Το μάρκετινγκ υπηρετεί τη συνολική στρατηγική της επιχείρησης."
        },
        {
            type: "true_false",
            question: "Ένας στόχος SMART πρέπει να είναι αόριστος για να υπάρχει ευελιξία.",
            options: ["Σωστό", "Λάθος"],
            correct: 1,
            explanation: "Λάθος - SMART σημαίνει συγκεκριμένος, μετρήσιμος, εφικτός, σχετικός και χρονικά ορισμένος."
        },
        {
            type: "true_false",
            question: "Το conversion rate είναι KPI που μετρά την αποτελεσματικότητα μετατροπών.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Δείχνει πόσοι χρήστες ολοκληρώνουν την επιθυμητή ενέργεια."
        },
        {
            type: "true_false",
            question: "Όλοι οι KPI είναι vanity metrics.",
            options: ["Σωστό", "Λάθος"],
            correct: 1,
            explanation: "Λάθος - Οι KPI είναι ουσιαστικοί δείκτες απόδοσης, όχι απλώς επιφανειακές μετρήσεις."
        },
        {
            type: "true_false",
            question: "Στο funnel, το awareness βρίσκεται συνήθως στην κορυφή.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Η αναγνωρισιμότητα είναι το πρώτο στάδιο επαφής."
        },
        {
            type: "true_false",
            question: "Το CAC είναι το κόστος διατήρησης υφιστάμενου πελάτη.",
            options: ["Σωστό", "Λάθος"],
            correct: 1,
            explanation: "Λάθος - CAC είναι το κόστος απόκτησης νέου πελάτη."
        },
        {
            type: "true_false",
            question: "Η στρατηγική χωρίς σαφή KPI δυσκολεύει τη λήψη αποφάσεων.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Χωρίς μέτρηση δεν υπάρχει σαφής αξιολόγηση απόδοσης."
        },
        {
            type: "true_false",
            question: "Το ROAS συγκρίνει τα έσοδα από διαφήμιση με τη διαφημιστική δαπάνη.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - ROAS = Revenue from Ads / Ad Spend."
        },
        {
            type: "true_false",
            question: "Το KPI 'reach' δείχνει ακριβώς πόσες πωλήσεις έγιναν.",
            options: ["Σωστό", "Λάθος"],
            correct: 1,
            explanation: "Λάθος - Το reach αφορά μοναδικά άτομα που εκτέθηκαν, όχι πωλήσεις."
        },
        {
            type: "true_false",
            question: "Η σωστή ιεράρχηση στόχων βοηθά στην κατανομή budget.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Οι προτεραιότητες καθοδηγούν την επένδυση πόρων."
        },

        {
            type: "multiple_choice",
            question: "Ποιο από τα παρακάτω είναι SMART στόχος;",
            options: [
                "Να γίνουμε γνωστοί κάποια στιγμή",
                "Να αυξήσουμε τα leads κατά 20% σε 3 μήνες",
                "Να κάνουμε καλύτερο content",
                "Να βελτιώσουμε λίγο την απόδοση"
            ],
            correct: 1,
            explanation: "Είναι συγκεκριμένος, μετρήσιμος και χρονικά ορισμένος."
        },
        {
            type: "multiple_choice",
            question: "Ποιο KPI σχετίζεται περισσότερο με το στάδιο Consideration;",
            options: ["CTR", "Brand recall από τηλεοπτική καμπάνια", "Warehouse capacity", "Employee turnover"],
            correct: 0,
            explanation: "Στο consideration, το CTR δείχνει ενδιαφέρον για περισσότερη πληροφορία."
        },
        {
            type: "multiple_choice",
            question: "Ποια είναι η σωστή σειρά ενός απλού funnel;",
            options: [
                "Conversion → Awareness → Consideration",
                "Awareness → Consideration → Conversion",
                "Consideration → Awareness → Retention",
                "Retention → Awareness → Conversion"
            ],
            correct: 1,
            explanation: "Το κοινό πρώτα γνωρίζει, μετά εξετάζει, τέλος μετατρέπεται."
        },
        {
            type: "multiple_choice",
            question: "Ποιο metric είναι πιο κοντά στην αποδοτικότητα κόστους απόκτησης;",
            options: ["CAC", "Reach", "Impressions", "Followers"],
            correct: 0,
            explanation: "Το CAC μετρά άμεσα κόστος ανά νέο πελάτη."
        },
        {
            type: "multiple_choice",
            question: "Ποιο είναι παράδειγμα KPI για στόχο αύξησης πωλήσεων;",
            options: ["Revenue", "Likes μόνο", "Comments μόνο", "Page color consistency"],
            correct: 0,
            explanation: "Τα έσοδα συνδέονται άμεσα με εμπορικό στόχο."
        },
        {
            type: "multiple_choice",
            question: "Τι δείχνει κυρίως το conversion rate;",
            options: [
                "Κόστος ανά κλικ",
                "Ποσοστό χρηστών που ολοκληρώνουν στόχο",
                "Συνολικό αριθμό εμφανίσεων",
                "Μόνο την ποιότητα δημιουργικού"
            ],
            correct: 1,
            explanation: "Μετρά το ποσοστό μετατροπής σε επιθυμητή ενέργεια."
        },
        {
            type: "multiple_choice",
            question: "Ποιο KPI είναι πιο σχετικό με την αφοσίωση πελατών;",
            options: ["Repeat purchase rate", "CPM", "Impressions", "Reach"],
            correct: 0,
            explanation: "Το repeat purchase δείχνει επιστροφή και πιστότητα."
        },
        {
            type: "multiple_choice",
            question: "Σε στόχο awareness, ποιο KPI είναι κατάλληλο;",
            options: ["Reach", "Refund rate", "Cost of goods sold", "Churn of suppliers"],
            correct: 0,
            explanation: "Το reach μετρά πόσα μοναδικά άτομα είδαν το μήνυμα."
        },
        {
            type: "multiple_choice",
            question: "Πότε ένα metric θεωρείται vanity;",
            options: [
                "Όταν δεν συνδέεται με επιχειρηματικό αποτέλεσμα",
                "Όταν είναι δύσκολο στη μέτρηση",
                "Όταν είναι οικονομικός δείκτης",
                "Όταν χρησιμοποιείται σε dashboard"
            ],
            correct: 0,
            explanation: "Vanity metric είναι εντυπωσιακό αλλά όχι χρήσιμο για αποφάσεις."
        },
        {
            type: "multiple_choice",
            question: "Ποια ενέργεια βοηθά να γίνει ο στόχος πιο μετρήσιμος;",
            options: [
                "Χρήση ρήματος χωρίς αριθμό",
                "Προσθήκη baseline και target value",
                "Αποφυγή deadline",
                "Περιγραφή χωρίς KPI"
            ],
            correct: 1,
            explanation: "Baseline + target ορίζουν σαφές πλαίσιο μέτρησης."
        },

        {
            type: "true_false",
            question: "Το KPI πρέπει να έχει owner (υπεύθυνο παρακολούθησης).",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Η ανάθεση ευθύνης βελτιώνει συνέπεια και λογοδοσία."
        },
        {
            type: "true_false",
            question: "Το ίδιο KPI είναι κατάλληλο για όλα τα στάδια funnel.",
            options: ["Σωστό", "Λάθος"],
            correct: 1,
            explanation: "Λάθος - Κάθε στάδιο απαιτεί διαφορετικούς δείκτες."
        },
        {
            type: "true_false",
            question: "Το attribution βοηθά στην κατανόηση συμβολής καναλιών στο conversion.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Δείχνει πώς συμβάλλει κάθε touchpoint."
        },
        {
            type: "true_false",
            question: "Υψηλό CTR εγγυάται πάντα υψηλές πωλήσεις.",
            options: ["Σωστό", "Λάθος"],
            correct: 1,
            explanation: "Λάθος - Χρειάζεται και καλή εμπειρία μετά το κλικ (landing, offer, price)."
        },
        {
            type: "true_false",
            question: "Η εβδομαδιαία αναφορά KPI βοηθά έγκαιρες διορθωτικές ενέργειες.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Η συχνή παρακολούθηση επιτρέπει ταχύτερη βελτιστοποίηση."
        },

        {
            type: "multiple_choice",
            question: "Ποιο από τα παρακάτω είναι καλύτερο North Star Metric για SaaS;",
            options: [
                "Συνολικά likes σε social",
                "Active subscribers με χρήση προϊόντος",
                "Αριθμός εσωτερικών meetings",
                "Αριθμός σελίδων στο website"
            ],
            correct: 1,
            explanation: "Το North Star πρέπει να αντικατοπτρίζει αξία προς πελάτη και ανάπτυξη."
        },
        {
            type: "multiple_choice",
            question: "Ποια σχέση δείχνει καλύτερα αποδοτικότητα καμπάνιας performance;",
            options: ["ROAS", "Font size", "Image resolution", "Session duration μόνο"],
            correct: 0,
            explanation: "Το ROAS συγκρίνει έσοδα διαφήμισης με δαπάνη."
        },
        {
            type: "multiple_choice",
            question: "Για στόχο lead generation, ποιο KPI είναι πιο άμεσο;",
            options: ["Cost per Lead (CPL)", "Store footfall", "Print circulation", "Share of voice μόνο"],
            correct: 0,
            explanation: "Το CPL μετρά κόστος ανά νέο lead."
        },
        {
            type: "multiple_choice",
            question: "Τι σημαίνει baseline σε KPI setting;",
            options: [
                "Ο τελικός στόχος μετά από 12 μήνες",
                "Η τρέχουσα τιμή εκκίνησης πριν τη βελτίωση",
                "Ο μέσος όρος του ανταγωνισμού",
                "Η μέγιστη θεωρητική τιμή"
            ],
            correct: 1,
            explanation: "Baseline είναι το σημείο αναφοράς για σύγκριση προόδου."
        },
        {
            type: "multiple_choice",
            question: "Ποια πρακτική βελτιώνει την ποιότητα στρατηγικής αναφοράς;",
            options: [
                "Αναφορά χωρίς συμπεράσματα",
                "Σύνδεση KPI με δράσεις και επόμενα βήματα",
                "Παρουσίαση μόνο vanity metrics",
                "Αποφυγή σύγκρισης με στόχους"
            ],
            correct: 1,
            explanation: "Τα KPI πρέπει να οδηγούν σε αποφάσεις και συγκεκριμένες ενέργειες."
        }
    ],

    // Ενότητα 3: Content Creation (formats, hooks, storytelling)
    section3: [
        {
            type: "true_false",
            question: "Το content creation αφορά μόνο το γράψιμο κειμένων και όχι εικόνες ή βίντεο.",
            options: ["Σωστό", "Λάθος"],
            correct: 1,
            explanation: "Λάθος - Το content creation περιλαμβάνει κείμενο, εικόνες, βίντεο, audio και διαδραστικό περιεχόμενο."
        },
        {
            type: "true_false",
            question: "Ένα δυνατό hook στα πρώτα δευτερόλεπτα αυξάνει την πιθανότητα να συνεχίσει ο χρήστης να βλέπει το περιεχόμενο.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Το hook τραβάει προσοχή και μειώνει το early drop-off."
        },
        {
            type: "true_false",
            question: "Το storytelling βοηθά να θυμάται καλύτερα το κοινό το μήνυμα της μάρκας.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Οι ιστορίες δημιουργούν συναισθηματική σύνδεση και ενισχύουν την ανάκληση."
        },
        {
            type: "true_false",
            question: "Όσο μεγαλύτερο είναι ένα caption, τόσο καλύτερη είναι πάντα η απόδοση του post.",
            options: ["Σωστό", "Λάθος"],
            correct: 1,
            explanation: "Λάθος - Το ιδανικό μήκος εξαρτάται από την πλατφόρμα, το κοινό και τον στόχο του περιεχομένου."
        },
        {
            type: "true_false",
            question: "Η συνέπεια στο visual style βοηθά στην αναγνωρισιμότητα του brand.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Συνεπές ύφος (χρώματα, γραμματοσειρές, τόνος) ενισχύει brand recognition."
        },
        {
            type: "true_false",
            question: "Το ίδιο content χωρίς προσαρμογή μπορεί να αποδίδει το ίδιο καλά σε όλες τις πλατφόρμες.",
            options: ["Σωστό", "Λάθος"],
            correct: 1,
            explanation: "Λάθος - Κάθε πλατφόρμα έχει διαφορετική συμπεριφορά χρήστη και format."
        },
        {
            type: "true_false",
            question: "Το call-to-action (CTA) καθοδηγεί τον χρήστη στην επόμενη ενέργεια.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Ένα σαφές CTA βελτιώνει conversions και engagement."
        },
        {
            type: "true_false",
            question: "Το UGC (user-generated content) δεν είναι χρήσιμο για αξιοπιστία μάρκας.",
            options: ["Σωστό", "Λάθος"],
            correct: 1,
            explanation: "Λάθος - Το UGC συχνά αυξάνει εμπιστοσύνη και κοινωνική απόδειξη."
        },
        {
            type: "true_false",
            question: "Η ποιότητα ήχου σε βίντεο μπορεί να επηρεάσει την απόδοση του περιεχομένου.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Κακός ήχος αυξάνει εγκατάλειψη ακόμα κι αν η εικόνα είναι καλή."
        },
        {
            type: "true_false",
            question: "Η ανακύκλωση (repurposing) περιεχομένου σημαίνει απλό copy-paste χωρίς καμία αλλαγή.",
            options: ["Σωστό", "Λάθος"],
            correct: 1,
            explanation: "Λάθος - Το repurposing απαιτεί προσαρμογή ανά κανάλι/format/στόχο."
        },

        {
            type: "multiple_choice",
            question: "Ποιος είναι βασικός στόχος ενός hook;",
            options: [
                "Να αυξήσει το κόστος παραγωγής",
                "Να τραβήξει άμεσα την προσοχή",
                "Να μεγαλώσει πάντα τη διάρκεια βίντεο",
                "Να αποφύγει οποιοδήποτε CTA"
            ],
            correct: 1,
            explanation: "Το hook στοχεύει στο να κρατήσει τον χρήστη από την πρώτη στιγμή."
        },
        {
            type: "multiple_choice",
            question: "Ποιο από τα παρακάτω είναι παράδειγμα storytelling;",
            options: [
                "Μόνο λίστα τεχνικών χαρακτηριστικών",
                "Αφήγηση προβλήματος-λύσης με ήρωα τον πελάτη",
                "Τυχαία hashtags χωρίς νόημα",
                "Αναδημοσίευση χωρίς περιγραφή"
            ],
            correct: 1,
            explanation: "Το storytelling βασίζεται σε αφήγηση με δομή και συναισθηματική σύνδεση."
        },
        {
            type: "multiple_choice",
            question: "Ποιο format είναι πιο κατάλληλο για σύντομα tips σε κάθετη μορφή;",
            options: ["Short-form vertical video", "Μόνο PDF", "Μόνο ραδιοφωνικό σποτ", "Whitepaper 20 σελίδων"],
            correct: 0,
            explanation: "Τα σύντομα κάθετα βίντεο ταιριάζουν ιδανικά σε γρήγορα tips."
        },
        {
            type: "multiple_choice",
            question: "Ποια δομή βοηθά στην ευκρίνεια ενός εκπαιδευτικού post;",
            options: [
                "Hook → Βασικό μήνυμα → Παράδειγμα → CTA",
                "CTA → CTA → CTA → CTA",
                "Μόνο emojis χωρίς κείμενο",
                "Τίτλος χωρίς περιεχόμενο"
            ],
            correct: 0,
            explanation: "Η δομή κρατά συνοχή και καθοδηγεί τον χρήστη στην κατανόηση."
        },
        {
            type: "multiple_choice",
            question: "Τι σημαίνει value-first content;",
            options: [
                "Πρώτα προσφέρεις χρήσιμη αξία, μετά ζητάς ενέργεια",
                "Πρώτα ζητάς αγορά, μετά εξηγείς",
                "Αποφεύγεις πληροφορίες για να υπάρχει μυστήριο",
                "Μιλάς μόνο για το brand"
            ],
            correct: 0,
            explanation: "Η παροχή αξίας αυξάνει εμπιστοσύνη και πιθανότητα ανταπόκρισης."
        },
        {
            type: "multiple_choice",
            question: "Ποιο metric είναι πιο σχετικό με την ποιότητα του hook σε βίντεο;",
            options: ["3-second view rate/retention αρχής", "Αριθμός αρχείων στον φάκελο", "CPU usage", "Χρώμα λογοτύπου"],
            correct: 0,
            explanation: "Η αρχική διατήρηση δείχνει αν ο hook λειτουργεί."
        },
        {
            type: "multiple_choice",
            question: "Ποια πρακτική βελτιώνει το readability σε captions;",
            options: [
                "Μεγάλα συνεχόμενα κείμενα χωρίς κενά",
                "Μικρές παραγράφοι και καθαρή στίξη",
                "Κεφαλαία παντού",
                "Απουσία τίτλου"
            ],
            correct: 1,
            explanation: "Μικρές ενότητες κειμένου κάνουν πιο εύκολη την ανάγνωση."
        },
        {
            type: "multiple_choice",
            question: "Ποιο είναι παράδειγμα effective CTA;",
            options: [
                "«Κάνε save το post για αργότερα»",
                "«Ίσως κάτι να κάνεις κάποτε»",
                "«Δες το αν θες»",
                "«... »"
            ],
            correct: 0,
            explanation: "Το καλό CTA είναι σαφές, άμεσο και συγκεκριμένο."
        },
        {
            type: "multiple_choice",
            question: "Ποιο στοιχείο ενισχύει την αυθεντικότητα περιεχομένου;",
            options: [
                "Ρεαλιστικά παραδείγματα και αληθινός τόνος",
                "Υπερβολικοί ισχυρισμοί χωρίς απόδειξη",
                "Clickbait τίτλοι χωρίς αντίκρισμα",
                "Ασυνεπές brand voice"
            ],
            correct: 0,
            explanation: "Η αυθεντικότητα χτίζεται με ειλικρίνεια και πραγματική αξία."
        },
        {
            type: "multiple_choice",
            question: "Ποιος είναι κύριος λόγος για content calendar;",
            options: [
                "Οργάνωση θεματολογίας, συνέπεια και καλύτερος προγραμματισμός",
                "Να δημοσιεύουμε τυχαία",
                "Να αποφεύγουμε ανάλυση αποτελεσμάτων",
                "Να περιορίζουμε formats"
            ],
            correct: 0,
            explanation: "Το content calendar βοηθά στρατηγική συνέπεια και αποδοτικότητα."
        },

        {
            type: "true_false",
            question: "Το A/B testing μπορεί να εφαρμοστεί και σε thumbnails ή headlines.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Τα δημιουργικά στοιχεία είναι κατάλληλα για συγκριτικές δοκιμές."
        },
        {
            type: "true_false",
            question: "Η υπερβολική χρήση jargon βοηθά πάντα το περιεχόμενο να γίνει πιο κατανοητό.",
            options: ["Σωστό", "Λάθος"],
            correct: 1,
            explanation: "Λάθος - Συχνά δυσκολεύει την κατανόηση, ειδικά σε ευρύ κοινό."
        },
        {
            type: "true_false",
            question: "Οι πρώτες γραμμές ενός caption είναι κρίσιμες για το αν θα πατήσει «περισσότερα».",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Το αρχικό μέρος επηρεάζει την πρόθεση συνέχισης ανάγνωσης."
        },
        {
            type: "true_false",
            question: "Το ίδιο storytelling angle είναι υποχρεωτικό σε κάθε καμπάνια.",
            options: ["Σωστό", "Λάθος"],
            correct: 1,
            explanation: "Λάθος - Το angle προσαρμόζεται σε στόχο, κοινό και context."
        },
        {
            type: "true_false",
            question: "Η σαφήνεια μηνύματος είναι πιο σημαντική από την υπερβολική πολυπλοκότητα.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Ξεκάθαρο μήνυμα σημαίνει μεγαλύτερη κατανόηση και απόκριση."
        },

        {
            type: "multiple_choice",
            question: "Ποιο είναι καλό παράδειγμα hook για εκπαιδευτικό βίντεο;",
            options: [
                "«3 λάθη που ρίχνουν το engagement σου σήμερα»",
                "«Καλησπέρα, σήμερα θα πούμε κάποια πράγματα»",
                "«Δεν ξέρω τι να πω, ας ξεκινήσουμε»",
                "«Δες αν θες»"
            ],
            correct: 0,
            explanation: "Συγκεκριμένη υπόσχεση + σαφές πρόβλημα αυξάνει ενδιαφέρον."
        },
        {
            type: "multiple_choice",
            question: "Ποια επιλογή περιγράφει καλύτερα το repurposing;",
            options: [
                "Μετατροπή long-form webinar σε μικρά clips με νέο context",
                "Ανεβάζω το ίδιο αρχείο παντού χωρίς αλλαγές",
                "Διαγραφή παλιού περιεχομένου",
                "Αποφυγή κάθε analytics"
            ],
            correct: 0,
            explanation: "Repurposing σημαίνει μετασχηματισμός περιεχομένου για νέο format/κανάλι."
        },
        {
            type: "multiple_choice",
            question: "Ποιο KPI συνδέεται πιο άμεσα με αποδοχή εκπαιδευτικού carousel;",
            options: ["Saves", "Server uptime", "Office rent", "Invoice count"],
            correct: 0,
            explanation: "Τα saves δείχνουν αντιληπτή χρησιμότητα περιεχομένου."
        },
        {
            type: "multiple_choice",
            question: "Τι βοηθά περισσότερο τη συνοχή ενός story-driven post;",
            options: [
                "Αρχή-Μέση-Τέλος με καθαρό μήνυμα",
                "Τυχαίες προτάσεις χωρίς σύνδεση",
                "Μόνο hashtags",
                "Μηδενικό context"
            ],
            correct: 0,
            explanation: "Η αφηγηματική δομή ενισχύει κατανόηση και μνήμη."
        },
        {
            type: "multiple_choice",
            question: "Ποια πρακτική αυξάνει πιθανότητες engagement σε ερώτηση κοινού;",
            options: [
                "Κλειστές, πολύπλοκες ερωτήσεις πολλών γραμμών",
                "Σύντομη, συγκεκριμένη ερώτηση με σαφές πλαίσιο",
                "Καμία ερώτηση",
                "Αόριστο μήνυμα χωρίς θέμα"
            ],
            correct: 1,
            explanation: "Οι σαφείς ερωτήσεις κάνουν πιο εύκολη και άμεση τη συμμετοχή."
        }
    ],

    // Ενότητα 4: Platforms (Facebook, Instagram, TikTok, LinkedIn, YouTube)
    section4: [
        // =========================
        // Facebook (10)
        // =========================
        {
            type: "true_false",
            question: "Το Facebook παραμένει χρήσιμη πλατφόρμα για building communities μέσω Groups.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Τα Facebook Groups είναι βασικό εργαλείο για κοινότητες και συζήτηση."
        },
        {
            type: "true_false",
            question: "Στο Facebook, το engagement επηρεάζεται μόνο από τον αριθμό followers και όχι από την ποιότητα περιεχομένου.",
            options: ["Σωστό", "Λάθος"],
            correct: 1,
            explanation: "Λάθος - Η ποιότητα, η συνάφεια και η αλληλεπίδραση επηρεάζουν σημαντικά την απόδοση."
        },
        {
            type: "multiple_choice",
            question: "Ποιο format είναι πιο κατάλληλο για κοινότητα και διάλογο στο Facebook;",
            options: ["Facebook Group posts", "Αποκλειστικά TV spots", "Μόνο PDF χωρίς σχόλια", "SMS καμπάνιες"],
            correct: 0,
            explanation: "Τα Group posts ενθαρρύνουν συζήτηση και συνεχή αλληλεπίδραση."
        },
        {
            type: "multiple_choice",
            question: "Ποια λειτουργία στο Facebook βοηθά σε τοπική προώθηση εκδηλώσεων;",
            options: ["Events", "Only Stories Highlights", "Playlists", "Newsletter tags"],
            correct: 0,
            explanation: "Το Facebook Events βοηθά προσκλήσεις, ενημερώσεις και συμμετοχή."
        },
        {
            type: "true_false",
            question: "Οι σελίδες (Pages) στο Facebook είναι κατάλληλες για επίσημη παρουσία brand.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Οι Pages αποτελούν το βασικό brand hub στην πλατφόρμα."
        },
        {
            type: "multiple_choice",
            question: "Ποιο KPI είναι πιο σχετικό με στόχο awareness στο Facebook;",
            options: ["Reach", "Employee headcount", "Warehouse cost", "Office rent"],
            correct: 0,
            explanation: "Το reach μετρά σε πόσα μοναδικά άτομα εμφανίστηκε το περιεχόμενο."
        },
        {
            type: "true_false",
            question: "Το Facebook απευθύνεται μόνο σε εφηβικό κοινό.",
            options: ["Σωστό", "Λάθος"],
            correct: 1,
            explanation: "Λάθος - Διαθέτει ευρύ ηλικιακό φάσμα χρηστών."
        },
        {
            type: "multiple_choice",
            question: "Ποια στρατηγική περιεχομένου λειτουργεί συχνά καλά στο Facebook;",
            options: ["Συνδυασμός ενημερωτικού/χρήσιμου περιεχομένου και community συζήτησης", "Μόνο αμιγώς διαφημιστικά posts", "Καμία απάντηση σε σχόλια", "Μόνο repost χωρίς context"],
            correct: 0,
            explanation: "Η ισορροπία αξίας και αλληλεπίδρασης ενισχύει μακροπρόθεσμα το engagement."
        },
        {
            type: "multiple_choice",
            question: "Ποιο είναι βασικό πλεονέκτημα των Facebook Ads;",
            options: ["Λεπτομερές targeting κοινού", "Μηδενική ανάγκη για δημιουργικά", "Αυτόματες πωλήσεις χωρίς landing page", "Καμία μέτρηση αποτελεσμάτων"],
            correct: 0,
            explanation: "Το targeting είναι από τα ισχυρότερα χαρακτηριστικά του Facebook Ads ecosystem."
        },
        {
            type: "true_false",
            question: "Η απάντηση σε σχόλια/messages στο Facebook συμβάλλει στη διατήρηση σχέσης με το κοινό.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Η έγκαιρη επικοινωνία βελτιώνει εμπειρία και εμπιστοσύνη."
        },

        // =========================
        // Instagram (10)
        // =========================
        {
            type: "true_false",
            question: "Το Instagram είναι ιδιαίτερα οπτικοκεντρική πλατφόρμα.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Visual storytelling (εικόνα/βίντεο) είναι ο πυρήνας του Instagram."
        },
        {
            type: "multiple_choice",
            question: "Ποιο format είναι πιο συνδεδεμένο με discovery στο Instagram;",
            options: ["Reels", "Fax campaigns", "Desktop pop-ups", "Radio-only content"],
            correct: 0,
            explanation: "Τα Reels ευνοούνται συχνά στην ανακάλυψη νέου περιεχομένου."
        },
        {
            type: "true_false",
            question: "Τα Instagram Stories είναι χρήσιμα για καθημερινή, πιο άμεση επικοινωνία.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Stories προσφέρονται για πιο συχνή και αυθόρμητη επαφή."
        },
        {
            type: "multiple_choice",
            question: "Ποιο KPI είναι σημαντικό για αξιολόγηση Stories;",
            options: ["Story completion rate", "Factory utilization", "Procurement lag", "Server RAM"],
            correct: 0,
            explanation: "Το completion rate δείχνει πόσοι ολοκλήρωσαν τη θέαση των stories."
        },
        {
            type: "true_false",
            question: "Η αισθητική συνέπεια του feed μπορεί να ενισχύσει την εικόνα μάρκας.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Συνεπές visual identity ενισχύει αναγνωρισιμότητα και επαγγελματική εικόνα."
        },
        {
            type: "multiple_choice",
            question: "Ποια λειτουργία βοηθά συγκέντρωση χρήσιμου περιεχομένου στο προφίλ;",
            options: ["Story Highlights", "Pinned emails", "Audio channels", "Pop-under windows"],
            correct: 0,
            explanation: "Τα Highlights οργανώνουν περιεχόμενο για εύκολη πρόσβαση."
        },
        {
            type: "true_false",
            question: "Στο Instagram, τα hashtags μπορούν να βοηθήσουν στην ανακάλυψη περιεχομένου.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Η στρατηγική χρήση hashtags μπορεί να ενισχύσει discoverability."
        },
        {
            type: "multiple_choice",
            question: "Τι είναι πιο σημαντικό για απόδοση ενός Reel;",
            options: ["Ισχυρό hook στα πρώτα δευτερόλεπτα", "Μεγάλο κείμενο χωρίς βίντεο", "Απουσία υπότιτλων πάντα", "Μηδενικό CTA"],
            correct: 0,
            explanation: "Το δυνατό ξεκίνημα αυξάνει retention και πιθανότητα ολοκλήρωσης."
        },
        {
            type: "multiple_choice",
            question: "Σε ποιο κοινό στοχεύει συχνά αποτελεσματικά το Instagram;",
            options: ["Κοινό που καταναλώνει visual/lifestyle περιεχόμενο", "Αποκλειστικά B2B procurement teams", "Μόνο ηλικίες 65+", "Μόνο τεχνικούς συστημάτων"],
            correct: 0,
            explanation: "Instagram είναι ισχυρό σε lifestyle, δημιουργικό και visual-first κοινό."
        },
        {
            type: "true_false",
            question: "Η συνεργασία με creators στο Instagram μπορεί να ενισχύσει social proof.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Οι creator συνεργασίες χτίζουν αξιοπιστία και εμπιστοσύνη."
        },

        // =========================
        // TikTok (10)
        // =========================
        {
            type: "true_false",
            question: "Το TikTok δίνει έμφαση σε short-form βίντεο και γρήγορο ρυθμό κατανάλωσης.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Η πλατφόρμα βασίζεται σε γρήγορη ανακάλυψη σύντομου βίντεο."
        },
        {
            type: "multiple_choice",
            question: "Ποιος παράγοντας είναι κρίσιμος για απόδοση στο TikTok;",
            options: ["Retention στα πρώτα δευτερόλεπτα", "Μόνο το μήκος caption", "Μόνο ο αριθμός hashtags", "Μόνο η ώρα σύνταξης script"],
            correct: 0,
            explanation: "Η αρχική διατήρηση προσοχής είναι καθοριστική για διανομή."
        },
        {
            type: "true_false",
            question: "Το TikTok είναι ακατάλληλο για εκπαιδευτικό περιεχόμενο.",
            options: ["Σωστό", "Λάθος"],
            correct: 1,
            explanation: "Λάθος - Πολλά εκπαιδευτικά formats αποδίδουν πολύ καλά στο TikTok."
        },
        {
            type: "multiple_choice",
            question: "Ποιο είναι συχνό επιτυχημένο format στο TikTok;",
            options: ["How-to / tips σε σύντομο βίντεο", "Long PDF slides", "Χωρίς ήχο και χωρίς υπότιτλους", "Μόνο στατικά banners"],
            correct: 0,
            explanation: "Τα γρήγορα how-to clips είναι ιδιαίτερα αποτελεσματικά."
        },
        {
            type: "true_false",
            question: "Οι τάσεις (trends) στο TikTok αλλάζουν συχνά και χρειάζονται γρήγορη προσαρμογή.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Η ταχύτητα προσαρμογής είναι ανταγωνιστικό πλεονέκτημα."
        },
        {
            type: "multiple_choice",
            question: "Τι βοηθά ένα brand να παραμείνει αυθεντικό στο TikTok;",
            options: ["Natural ύφος και περιεχόμενο προσαρμοσμένο στην πλατφόρμα", "Τηλεοπτικό ύφος χωρίς προσαρμογή", "Αποκλειστικά corporate μονόλογος", "Καμία αλληλεπίδραση με σχόλια"],
            correct: 0,
            explanation: "Η αυθεντικότητα και πλατφορμική προσαρμογή είναι κρίσιμες."
        },
        {
            type: "multiple_choice",
            question: "Ποιο KPI συνδέεται άμεσα με ενδιαφέρον κοινού στο TikTok;",
            options: ["Average watch time", "Payroll tax", "Inventory aging", "Downtime tickets"],
            correct: 0,
            explanation: "Ο μέσος χρόνος θέασης δείχνει πόσο ελκυστικό είναι το περιεχόμενο."
        },
        {
            type: "true_false",
            question: "Το TikTok απευθύνεται αποκλειστικά σε χρήστες κάτω των 18.",
            options: ["Σωστό", "Λάθος"],
            correct: 1,
            explanation: "Λάθος - Το κοινό έχει διευρυνθεί σημαντικά σε περισσότερες ηλικίες."
        },
        {
            type: "multiple_choice",
            question: "Ποια πρακτική υποστηρίζει καλύτερα learning στο TikTok;",
            options: ["Σύντομα βήματα με σαφή δομή και υπότιτλους", "Μακροσκελείς θεωρητικοί μονόλογοι χωρίς οπτικά", "Απουσία context", "Μηδενικό hook"],
            correct: 0,
            explanation: "Η σαφήνεια, δομή και υπότιτλοι αυξάνουν κατανόηση και retention."
        },
        {
            type: "true_false",
            question: "Η απάντηση σε σχόλια με νέο βίντεο είναι δημιουργικός τρόπος engagement στο TikTok.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Είναι native πρακτική που ενισχύει αλληλεπίδραση."
        },

        // =========================
        // LinkedIn (10)
        // =========================
        {
            type: "true_false",
            question: "Το LinkedIn είναι πλατφόρμα με έντονο επαγγελματικό/B2B προσανατολισμό.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Είναι κατάλληλο για επαγγελματικό networking και thought leadership."
        },
        {
            type: "multiple_choice",
            question: "Ποιο περιεχόμενο αποδίδει συχνά καλά στο LinkedIn;",
            options: ["Case studies και επαγγελματικά insights", "Only memes χωρίς context", "Gaming clips χωρίς σχέση με brand", "Αποκλειστικά προσωπικές selfie"],
            correct: 0,
            explanation: "Το κοινό του LinkedIn ανταποκρίνεται σε πρακτική επαγγελματική αξία."
        },
        {
            type: "true_false",
            question: "Η προσωπική φωνή στελεχών (employee advocacy) μπορεί να ενισχύσει το reach στο LinkedIn.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Τα προσωπικά προφίλ συχνά αυξάνουν οργανική διάδοση."
        },
        {
            type: "multiple_choice",
            question: "Ποιο KPI είναι σχετικό με B2B lead strategy στο LinkedIn;",
            options: ["Qualified leads", "TV GRPs", "Shelf share", "Footfall σε κατάστημα"],
            correct: 0,
            explanation: "Η ποιότητα leads είναι βασικό KPI σε B2B."
        },
        {
            type: "true_false",
            question: "Το LinkedIn είναι ακατάλληλο για employer branding.",
            options: ["Σωστό", "Λάθος"],
            correct: 1,
            explanation: "Λάθος - Είναι από τα ισχυρότερα κανάλια για employer branding."
        },
        {
            type: "multiple_choice",
            question: "Ποια μορφή post ενισχύει συχνά τη γνώση/authority στο LinkedIn;",
            options: ["Educational carousel/document post", "Random hashtag-only post", "Empty post", "Audio without description"],
            correct: 0,
            explanation: "Το εκπαιδευτικό, δομημένο περιεχόμενο ενισχύει thought leadership."
        },
        {
            type: "true_false",
            question: "Η συνέπεια δημοσιεύσεων στο LinkedIn βοηθά τη μακροχρόνια ορατότητα.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Η συστηματική παρουσία χτίζει αναγνωρισιμότητα και αξιοπιστία."
        },
        {
            type: "multiple_choice",
            question: "Ποιο κοινό στοχεύεται συχνά στο LinkedIn;",
            options: ["Decision-makers και επαγγελματίες", "Αποκλειστικά μαθητές δημοτικού", "Μόνο gamers", "Μόνο ταξιδιώτες αναψυχής"],
            correct: 0,
            explanation: "Η πλατφόρμα έχει ισχυρή επαγγελματική βάση χρηστών."
        },
        {
            type: "multiple_choice",
            question: "Ποια πρακτική ενισχύει engagement σε LinkedIn post;",
            options: ["Καθαρό point of view + ερώτηση προς το κοινό", "Καμία δομή κειμένου", "Μηδενικό context", "Υπερβολικό jargon χωρίς παράδειγμα"],
            correct: 0,
            explanation: "Η σαφής θέση και η ερώτηση πυροδοτούν ουσιαστικές συζητήσεις."
        },
        {
            type: "true_false",
            question: "Τα LinkedIn Ads μπορούν να στοχεύσουν με επαγγελματικά κριτήρια (π.χ. θέση, κλάδος).",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Το επαγγελματικό targeting είναι ισχυρό χαρακτηριστικό του LinkedIn Ads."
        },

        // =========================
        // YouTube (10)
        // =========================
        {
            type: "true_false",
            question: "Το YouTube είναι κατάλληλο για long-form εκπαιδευτικό περιεχόμενο.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Το YouTube υποστηρίζει σε βάθος περιεχόμενο και learning σειρές."
        },
        {
            type: "multiple_choice",
            question: "Ποιο στοιχείο επηρεάζει έντονα το CTR στο YouTube;",
            options: ["Thumbnail και τίτλος", "Μόνο διάρκεια βίντεο", "Μόνο tags", "Μόνο αριθμός playlists"],
            correct: 0,
            explanation: "Thumbnail + title είναι καθοριστικά για το κλικ."
        },
        {
            type: "true_false",
            question: "Η διατήρηση θεατών (audience retention) είναι κρίσιμο metric στο YouTube.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Το retention δείχνει ποιότητα περιεχομένου και βοηθά διανομή."
        },
        {
            type: "multiple_choice",
            question: "Ποια πρακτική βοηθά SEO στο YouTube;",
            options: ["Σαφής τίτλος, περιγραφή, chapters και σχετικές λέξεις-κλειδιά", "Μόνο emojis στον τίτλο", "Καμία περιγραφή", "Άσχετα tags"],
            correct: 0,
            explanation: "Η σωστή βελτιστοποίηση μεταδεδομένων βελτιώνει discoverability."
        },
        {
            type: "true_false",
            question: "Το YouTube Shorts μπορεί να χρησιμοποιηθεί για top-of-funnel discovery.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Τα Shorts βοηθούν σε ταχύτερη προσέγγιση νέου κοινού."
        },
        {
            type: "multiple_choice",
            question: "Ποιο KPI είναι πιο κατάλληλο για αξιολόγηση watch quality;",
            options: ["Average view duration", "Office expenses", "Supplier count", "Print quantity"],
            correct: 0,
            explanation: "Η μέση διάρκεια θέασης αποτυπώνει το πόσο κρατά το περιεχόμενο."
        },
        {
            type: "true_false",
            question: "Η δημιουργία playlists βοηθά στην αύξηση session time στο κανάλι.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Οι playlists διευκολύνουν συνεχόμενη παρακολούθηση."
        },
        {
            type: "multiple_choice",
            question: "Ποιο κοινό εξυπηρετεί συχνά καλά το YouTube;",
            options: ["Χρήστες που αναζητούν αναλυτική πληροφορία και how-to", "Μόνο κοινό που δεν βλέπει βίντεο", "Αποκλειστικά B2B procurement", "Μόνο audio listeners"],
            correct: 0,
            explanation: "Το YouTube είναι ισχυρό σε εκπαίδευση, reviews και αναλυτικό περιεχόμενο."
        },
        {
            type: "multiple_choice",
            question: "Ποιο είναι καλό CTA για YouTube εκπαιδευτικό βίντεο;",
            options: ["«Κάνε subscribe και δες το επόμενο μάθημα στη playlist»", "«Μην κάνεις τίποτα»", "«Κλείσε το βίντεο τώρα»", "«Δες άσχετο link»"],
            correct: 0,
            explanation: "Σαφές CTA αυξάνει συνέχεια θέασης και πιστότητα κοινού."
        },
        {
            type: "true_false",
            question: "Η σταθερή ποιότητα ήχου/εικόνας στο YouTube επηρεάζει θετικά την εμπειρία χρήστη.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Τεχνική ποιότητα και καθαρή δομή βελτιώνουν retention."
        }
    ],

    // Ενότητα 5: Ads & Performance (CTR, CPC, ROAS, A/B testing)
    section5: [
        {
            type: "true_false",
            question: "Το CTR δείχνει το ποσοστό των εμφανίσεων που κατέληξαν σε κλικ.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - CTR = Clicks / Impressions."
        },
        {
            type: "multiple_choice",
            question: "Ποιος δείκτης δείχνει κόστος ανά κλικ;",
            options: ["CPM", "CPC", "CPA", "ROAS"],
            correct: 1,
            explanation: "Το CPC μετρά το κόστος ανά κλικ."
        },
        {
            type: "true_false",
            question: "Το ROAS συγκρίνει έσοδα διαφήμισης με διαφημιστική δαπάνη.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - ROAS = Revenue from Ads / Ad Spend."
        },
        {
            type: "multiple_choice",
            question: "Σε A/B test πρέπει να αλλάζουμε:",
            options: [
                "Πολλά στοιχεία μαζί",
                "Μόνο budget",
                "Ένα βασικό στοιχείο τη φορά",
                "Μόνο το targeting"
            ],
            correct: 2,
            explanation: "Ένα στοιχείο τη φορά για καθαρό συμπέρασμα."
        },
        {
            type: "true_false",
            question: "Υψηλό CTR σημαίνει πάντα υψηλές πωλήσεις.",
            options: ["Σωστό", "Λάθος"],
            correct: 1,
            explanation: "Λάθος - Χρειάζονται και καλή landing page, offer, funnel."
        },
        {
            type: "multiple_choice",
            question: "Ποιο KPI είναι πιο κατάλληλο για στόχο πωλήσεων;",
            options: ["CPA", "Reach", "Impressions", "Frequency μόνο"],
            correct: 0,
            explanation: "Το CPA (ή Cost per Purchase) συνδέεται άμεσα με conversion στόχο."
        },
        {
            type: "true_false",
            question: "Το frequency δείχνει κατά μέσο όρο πόσες φορές είδε το κοινό μια διαφήμιση.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Υψηλό frequency μπορεί να οδηγήσει σε ad fatigue."
        },
        {
            type: "multiple_choice",
            question: "Τι είναι ad fatigue;",
            options: [
                "Αύξηση conversion με την επανάληψη",
                "Μείωση απόδοσης λόγω υπερβολικής έκθεσης",
                "Αύξηση CTR από νέο κοινό",
                "Μείωση CPC λόγω καλύτερου funnel"
            ],
            correct: 1,
            explanation: "Η υπερβολική έκθεση κουράζει το κοινό και ρίχνει απόδοση."
        },
        {
            type: "true_false",
            question: "Το CPM μετρά κόστος ανά 1.000 εμφανίσεις.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - CPM = Cost per Mille (1.000 impressions)."
        },
        {
            type: "multiple_choice",
            question: "Ποιο στοιχείο επηρεάζει συχνά άμεσα το CTR;",
            options: ["Thumbnail/visual και headline", "Μόνο το λογότυπο", "Μόνο η ώρα παραγωγής", "Μόνο το domain"],
            correct: 0,
            explanation: "Δημιουργικό και μήνυμα είναι κρίσιμα για κλικ."
        },
        {
            type: "true_false",
            question: "Το conversion tracking είναι απαραίτητο για σωστή βελτιστοποίηση καμπάνιας.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Χωρίς tracking δεν υπάρχει σωστή απόδοση ανά ενέργεια."
        },
        {
            type: "multiple_choice",
            question: "Πότε ένα A/B test θεωρείται πιο αξιόπιστο;",
            options: [
                "Με ελάχιστα δεδομένα",
                "Με επαρκές δείγμα και διάρκεια",
                "Όταν αλλάζουμε ταυτόχρονα 5 πράγματα",
                "Όταν κοιτάμε μόνο 1 ημέρα"
            ],
            correct: 1,
            explanation: "Χρειάζεται επαρκές sample για στατιστικά χρήσιμα συμπεράσματα."
        },
        {
            type: "true_false",
            question: "Το CPA δείχνει κόστος ανά μετατροπή/ενέργεια.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - CPA = Cost per Acquisition/Action."
        },
        {
            type: "multiple_choice",
            question: "Ποια στρατηγική βοηθά όταν το CPC ανεβαίνει;",
            options: [
                "Βελτίωση relevance creative και audience",
                "Σταμάτημα όλων των tests",
                "Αύξηση frequency χωρίς όριο",
                "Μείωση tracking"
            ],
            correct: 0,
            explanation: "Η βελτίωση συνάφειας μειώνει κόστος και βελτιώνει quality."
        },
        {
            type: "true_false",
            question: "Retargeting σημαίνει στόχευση χρηστών που είχαν ήδη αλληλεπίδραση.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Το retargeting συχνά έχει καλύτερο conversion."
        },
        {
            type: "multiple_choice",
            question: "Ποιο metric δείχνει καλύτερα αποδοτικότητα spend σε performance campaign;",
            options: ["ROAS", "Followers", "Impressions", "Reach μόνο"],
            correct: 0,
            explanation: "Το ROAS δείχνει επιστροφή εσόδων έναντι δαπάνης."
        },
        {
            type: "true_false",
            question: "Η σωστή ευθυγράμμιση ad message και landing page επηρεάζει conversion.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Συνέπεια μηνύματος μειώνει friction."
        },
        {
            type: "multiple_choice",
            question: "Ποιο είναι καλό πρώτο βήμα πριν scale σε budget;",
            options: [
                "Επιβεβαίωση κερδοφορίας σε μικρότερο spend",
                "Άμεσο 10x budget",
                "Απενεργοποίηση tracking",
                "Κατάργηση segmentation"
            ],
            correct: 0,
            explanation: "Πρώτα επιβεβαιώνεις βιώσιμη απόδοση."
        },
        {
            type: "true_false",
            question: "Το attribution model μπορεί να αλλάξει την ερμηνεία απόδοσης καναλιών.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Διαφορετικά μοντέλα αποδίδουν αξία διαφορετικά."
        },
        {
            type: "multiple_choice",
            question: "Ποιο metric ταιριάζει περισσότερο σε awareness objective;",
            options: ["Reach", "CPA", "Cost per Purchase", "ROAS"],
            correct: 0,
            explanation: "Το reach ταιριάζει σε στόχο αναγνωρισιμότητας."
        },
        {
            type: "true_false",
            question: "Η αύξηση frequency χωρίς creative refresh μπορεί να ρίξει CTR.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Ένδειξη κόπωσης διαφήμισης."
        },
        {
            type: "multiple_choice",
            question: "Ποιος είναι βασικός λόγος χρήσης lookalike audiences;",
            options: [
                "Επέκταση σε νέο σχετικό κοινό",
                "Μείωση tracking quality",
                "Κατάργηση retargeting",
                "Αποφυγή optimization"
            ],
            correct: 0,
            explanation: "Βοηθά εύρεση νέων χρηστών με παρόμοια χαρακτηριστικά."
        },
        {
            type: "true_false",
            question: "Το view-through data μπορεί να είναι χρήσιμο σε upper-funnel campaigns.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Δείχνει έμμεση επίδραση προβολής."
        },
        {
            type: "multiple_choice",
            question: "Σε split test με 2 creatives, τι πρέπει να μένει ίδιο;",
            options: ["Audience, budget, placement όσο γίνεται", "Μόνο το logo", "Μόνο το CTA", "Τίποτα"],
            correct: 0,
            explanation: "Έτσι απομονώνεις την επίδραση του creative."
        },
        {
            type: "true_false",
            question: "Το quality/relevance score μπορεί να επηρεάσει κόστος προβολής.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Καλύτερη συνάφεια συχνά μειώνει κόστος."
        },
        {
            type: "multiple_choice",
            question: "Ποιο από τα παρακάτω είναι warning sign σε funnel;",
            options: [
                "Υψηλό CTR και πολύ χαμηλό conversion rate",
                "Σταθερό CPA",
                "Βελτιωμένο ROAS",
                "Αύξηση AOV"
            ],
            correct: 0,
            explanation: "Δείχνει πιθανό πρόβλημα μετά το κλικ (landing/offer)."
        },
        {
            type: "true_false",
            question: "Το test velocity (συχνότητα δοκιμών) βοηθά συνεχή βελτίωση performance.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Η συστηματική δοκιμή οδηγεί σε incremental gains."
        },
        {
            type: "multiple_choice",
            question: "Ποιο KPI είναι πιο σχετικό με βίντεο creative quality;",
            options: ["Watch time / Video completion rate", "Office rent", "CPU clock", "PR mentions μόνο"],
            correct: 0,
            explanation: "Η παρακολούθηση completion δείχνει πόσο κρατά το creative."
        },
        {
            type: "true_false",
            question: "Το σωστό naming convention στις καμπάνιες βοηθά reporting και scaling.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Διευκολύνει ανάλυση και λήψη αποφάσεων."
        },
        {
            type: "multiple_choice",
            question: "Ποιο είναι συνήθως σωστό επόμενο βήμα όταν ad set έχει σταθερά κακό CPA;",
            options: [
                "Pause ή ανασχεδιασμός (creative/audience/offer)",
                "Αύξηση budget άμεσα",
                "Αγνόηση δεδομένων",
                "Αφαίρεση conversion events"
            ],
            correct: 0,
            explanation: "Χρειάζεται παρέμβαση, όχι τυφλό scaling."
        }
    ],

    // Ενότητα 6: Analytics & Measurement (engagement, retention, attribution)
    section6: [
        {
            type: "true_false",
            question: "Το engagement rate μετρά επίπεδο αλληλεπίδρασης του κοινού με το περιεχόμενο.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Περιλαμβάνει likes, comments, shares, saves κ.λπ."
        },
        {
            type: "multiple_choice",
            question: "Ποιο metric σχετίζεται περισσότερο με διατήρηση χρήστη;",
            options: ["Retention rate", "CPM", "Reach", "Impressions"],
            correct: 0,
            explanation: "Retention δείχνει πόσοι επιστρέφουν/παραμένουν."
        },
        {
            type: "true_false",
            question: "Attribution είναι η απόδοση αξίας conversion στα touchpoints.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Βοηθά κατανόηση συμβολής καναλιών."
        },
        {
            type: "multiple_choice",
            question: "Σε last-click attribution, όλη η αξία conversion πάει:",
            options: [
                "Στο πρώτο touchpoint",
                "Ισομερώς σε όλα",
                "Στο τελευταίο touchpoint πριν conversion",
                "Μόνο στο organic"
            ],
            correct: 2,
            explanation: "Το last-click αποδίδει 100% στο τελευταίο κλικ."
        },
        {
            type: "true_false",
            question: "Το bounce rate αφορά συμπεριφορά μετά το κλικ σε σελίδα.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Υψηλό bounce μπορεί να δείχνει χαμηλή συνάφεια."
        },
        {
            type: "multiple_choice",
            question: "Ποιο metric βοηθά αξιολόγηση ποιότητας video content;",
            options: ["Average watch time", "Inventory turnover", "Payroll", "CTR email subject μόνο"],
            correct: 0,
            explanation: "Ο χρόνος θέασης είναι κρίσιμος για video quality."
        },
        {
            type: "true_false",
            question: "Μόνο ένα metric αρκεί πάντα για σωστό συμπέρασμα.",
            options: ["Σωστό", "Λάθος"],
            correct: 1,
            explanation: "Λάθος - Χρειάζεται συνδυασμός μετρικών και context."
        },
        {
            type: "multiple_choice",
            question: "Τι δείχνει καλύτερα stickiness προϊόντος;",
            options: ["DAU/MAU ratio", "CPM", "CPL", "ROAS μόνο"],
            correct: 0,
            explanation: "Η αναλογία DAU/MAU δείχνει συχνότητα ενεργής χρήσης."
        },
        {
            type: "true_false",
            question: "Οι cohort αναλύσεις βοηθούν να δεις συμπεριφορά ομάδων στον χρόνο.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Κρίσιμο για retention patterns."
        },
        {
            type: "multiple_choice",
            question: "Ποιο attribution μοντέλο δίνει ίση αξία σε όλα τα touchpoints;",
            options: ["Linear", "Last click", "First click", "Time decay"],
            correct: 0,
            explanation: "Το linear μοιράζει ισόποσα την αξία."
        },
        {
            type: "true_false",
            question: "Το session duration μπορεί να δείχνει επίπεδο ενδιαφέροντος χρήστη.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Όχι απόλυτο, αλλά χρήσιμο σήμα εμπλοκής."
        },
        {
            type: "multiple_choice",
            question: "Ποιο metric ταιριάζει περισσότερο σε app retention;",
            options: ["Day-1 / Day-7 / Day-30 retention", "CPM", "Store rent", "Email open only"],
            correct: 0,
            explanation: "Τα retention cohorts ανά ημέρα είναι βασικά σε apps."
        },
        {
            type: "true_false",
            question: "Το assisted conversion δείχνει κανάλια που συνέβαλαν πριν το τελικό conversion.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Αναδεικνύει έμμεση συνεισφορά."
        },
        {
            type: "multiple_choice",
            question: "Τι είναι churn rate;",
            options: ["Ποσοστό απώλειας χρηστών/πελατών", "Ποσοστό προβολών", "Κόστος ανά κλικ", "Ποσοστό νέων followers"],
            correct: 0,
            explanation: "Το churn μετρά αποχώρηση πελατών."
        },
        {
            type: "true_false",
            question: "Η σωστή παραμετροποίηση events είναι κρίσιμη για αξιόπιστα analytics.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Κακή υλοποίηση events οδηγεί σε λάθος αποφάσεις."
        },
        {
            type: "multiple_choice",
            question: "Ποιο metric δείχνει πιο άμεσα αλληλεπίδραση σε social post;",
            options: ["Engagement rate", "Inventory days", "Payroll ratio", "Operating margin μόνο"],
            correct: 0,
            explanation: "Το engagement rate αποτυπώνει συμμετοχή κοινού."
        },
        {
            type: "true_false",
            question: "Τα dashboards πρέπει να είναι ίδια για όλες τις ομάδες χωρίς προσαρμογή.",
            options: ["Σωστό", "Λάθος"],
            correct: 1,
            explanation: "Λάθος - Κάθε ομάδα χρειάζεται διαφορετική οπτική KPI."
        },
        {
            type: "multiple_choice",
            question: "Σε attribution time-decay, περισσότερη αξία δίνεται:",
            options: ["Στα touchpoints κοντά στο conversion", "Στο πρώτο touchpoint μόνο", "Ισομερώς σε όλα", "Μόνο σε paid search"],
            correct: 0,
            explanation: "Το time-decay αυξάνει βάρος στα πιο πρόσφατα touches."
        },
        {
            type: "true_false",
            question: "Η ανάλυση funnel step-by-step βοηθά εντοπισμό bottlenecks.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Βλέπεις πού χάνεις χρήστες."
        },
        {
            type: "multiple_choice",
            question: "Ποιος δείκτης συνδέεται με πιστότητα πελατών;",
            options: ["Repeat purchase rate", "Impressions", "CPM", "Video starts μόνο"],
            correct: 0,
            explanation: "Η επαναγορά υποδηλώνει loyalty."
        },
        {
            type: "true_false",
            question: "Τα outliers πρέπει να ελέγχονται πριν εξαχθούν συμπεράσματα.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Ακραίες τιμές μπορεί να παραμορφώσουν insights."
        },
        {
            type: "multiple_choice",
            question: "Ποιο είναι καλό παράδειγμα leading indicator;",
            options: ["Add-to-cart rate", "Quarterly tax", "Annual rent", "Headcount μόνο"],
            correct: 0,
            explanation: "Το add-to-cart συχνά προμηνύει μελλοντικές πωλήσεις."
        },
        {
            type: "true_false",
            question: "Η σύγκριση MoM ή WoW βοηθά παρακολούθηση τάσης απόδοσης.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Βλέπεις βελτίωση ή επιδείνωση στον χρόνο."
        },
        {
            type: "multiple_choice",
            question: "Ποιο metric δείχνει πιθανή ασυμφωνία ad-message και landing page;",
            options: ["Υψηλό CTR + χαμηλό conversion rate", "Χαμηλό reach", "Υψηλό impressions", "Σταθερό frequency"],
            correct: 0,
            explanation: "Κάνουν κλικ αλλά δεν ολοκληρώνουν ενέργεια."
        },
        {
            type: "true_false",
            question: "Data quality checks (διπλοεγγραφές, missing values) είναι απαραίτητα.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Ποιότητα δεδομένων = ποιότητα αποφάσεων."
        },
        {
            type: "multiple_choice",
            question: "Ποιος δείκτης είναι πιο κατάλληλος για monetization health;",
            options: ["ARPU", "Reach", "CPM μόνο", "View count μόνο"],
            correct: 0,
            explanation: "ARPU δείχνει έσοδο ανά χρήστη."
        },
        {
            type: "true_false",
            question: "Attribution χωρίς privacy-compliant υλοποίηση μπορεί να δημιουργήσει νομικά θέματα.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Χρειάζεται συμμόρφωση σε consent και data handling."
        },
        {
            type: "multiple_choice",
            question: "Τι δείχνει καλύτερα επιτυχία retention ενεργειών;",
            options: ["Βελτίωση Day-30 retention", "Μόνο impressions", "Μόνο CPC", "Μόνο ad spend"],
            correct: 0,
            explanation: "Η αύξηση retention είναι άμεσο αποτέλεσμα retention strategy."
        },
        {
            type: "true_false",
            question: "Correlation δεν σημαίνει απαραίτητα causation.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Χρειάζεται προσοχή στην αιτιότητα."
        },
        {
            type: "multiple_choice",
            question: "Ποια πρακτική βελτιώνει απόδοση reporting;",
            options: [
                "Καθορισμός metric definitions και κοινών ορισμών",
                "Διαφορετικός ορισμός KPI ανά report χωρίς τεκμηρίωση",
                "Απουσία ημερομηνιών",
                "Μηδενικός έλεγχος πηγών"
            ],
            correct: 0,
            explanation: "Κοινοί ορισμοί μειώνουν παρερμηνείες και λάθη."
        }
    ],

    // Ενότητα 7: Community & Growth (UGC, moderation, influencers)
    section7: [
        {
            type: "true_false",
            question: "Το UGC μπορεί να αυξήσει εμπιστοσύνη προς ένα brand.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Το περιεχόμενο χρηστών λειτουργεί ως social proof."
        },
        {
            type: "multiple_choice",
            question: "Ποιο είναι βασικό όφελος της κοινότητας (community) για ένα brand;",
            options: ["Αύξηση πιστότητας", "Μείωση feedback", "Κατάργηση support", "Αποφυγή διαλόγου"],
            correct: 0,
            explanation: "Η κοινότητα ενισχύει σχέση και επαναλαμβανόμενη εμπλοκή."
        },
        {
            type: "true_false",
            question: "Moderation σημαίνει διαγραφή κάθε αρνητικού σχολίου.",
            options: ["Σωστό", "Λάθος"],
            correct: 1,
            explanation: "Λάθος - Σημαίνει κανόνες, ασφάλεια και δίκαιη διαχείριση συζητήσεων."
        },
        {
            type: "multiple_choice",
            question: "Ποιο KPI είναι σχετικό με community health;",
            options: ["Active members", "Factory output", "Rent per m2", "Fuel index"],
            correct: 0,
            explanation: "Οι ενεργοί συμμετέχοντες δείχνουν υγεία κοινότητας."
        },
        {
            type: "true_false",
            question: "Η ταχύτητα απάντησης σε σχόλια/messages επηρεάζει την εμπειρία χρήστη.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Η έγκαιρη απάντηση ενισχύει εμπιστοσύνη."
        },
        {
            type: "multiple_choice",
            question: "Ποια συνεργασία influencer είναι συνήθως πιο βιώσιμη;",
            options: ["Μία μόνο viral ανάρτηση χωρίς fit", "Μακροχρόνια συνεργασία με audience fit", "Καμία μέτρηση", "Μόνο follower count"],
            correct: 1,
            explanation: "Το audience-brand fit είναι σημαντικότερο από vanity μέγεθος."
        },
        {
            type: "true_false",
            question: "Micro-influencers συχνά έχουν υψηλότερο engagement από πολύ μεγάλα accounts.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Συχνά έχουν πιο στενή σχέση με το κοινό."
        },
        {
            type: "multiple_choice",
            question: "Τι πρέπει να περιλαμβάνει policy moderation;",
            options: ["Κανόνες συμπεριφοράς και διαδικασία διαχείρισης παραβάσεων", "Μόνο απαγορεύσεις χωρίς κριτήρια", "Καμία τεκμηρίωση", "Τυχαίες αποφάσεις"],
            correct: 0,
            explanation: "Σαφείς κανόνες και συνέπεια στις αποφάσεις."
        },
        {
            type: "true_false",
            question: "Το sentiment analysis βοηθά στην κατανόηση διάθεσης κοινού.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Εντοπίζει θετικό/αρνητικό/ουδέτερο τόνο."
        },
        {
            type: "multiple_choice",
            question: "Ποιο είναι καλό παράδειγμα UGC activation;",
            options: ["Challenge με σαφές hashtag και βραβείο", "Silent posting χωρίς CTA", "Απόκρυψη όλων των mentions", "Καμία αναδημοσίευση κοινού"],
            correct: 0,
            explanation: "Το σαφές format διευκολύνει συμμετοχή."
        },
        {
            type: "true_false",
            question: "Η διαφάνεια σε paid influencer συνεργασίες είναι σημαντική.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Χρειάζεται σαφής δήλωση συνεργασίας."
        },
        {
            type: "multiple_choice",
            question: "Ποιο metric συνδέεται με quality συζήτησης κοινότητας;",
            options: ["Meaningful comments ratio", "Raw impressions only", "CPC only", "CPM only"],
            correct: 0,
            explanation: "Η ποιότητα σχολίων δείχνει πραγματική εμπλοκή."
        },
        {
            type: "true_false",
            question: "Η community στρατηγική πρέπει να έχει σαφές value proposition για τα μέλη.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Οι άνθρωποι μένουν όταν παίρνουν πραγματική αξία."
        },
        {
            type: "multiple_choice",
            question: "Ποιο είναι συχνό λάθος σε influencer επιλογή;",
            options: ["Εστίαση μόνο σε followers, όχι σε κοινό-στόχο", "Έλεγχος engagement", "Content fit check", "Συμφωνία στόχων"],
            correct: 0,
            explanation: "Το follower count μόνο δεν εγγυάται αποτέλεσμα."
        },
        {
            type: "true_false",
            question: "Η ύπαρξη community guidelines μειώνει πιθανότητα τοξικότητας.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Θέτει πλαίσιο και προσδοκίες."
        },
        {
            type: "multiple_choice",
            question: "Ποιο KPI ταιριάζει περισσότερο σε growth κοινότητας;",
            options: ["Net member growth", "Only CPM", "Only CPC", "Only page views"],
            correct: 0,
            explanation: "Μετρά καθαρή αύξηση ενεργών μελών."
        },
        {
            type: "true_false",
            question: "Η επαναδημοσίευση καλού UGC (με άδεια) ενισχύει αίσθημα συμμετοχής.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Τα μέλη νιώθουν αναγνώριση."
        },
        {
            type: "multiple_choice",
            question: "Σε κρίση σχολίων, πρώτο βήμα είναι:",
            options: ["Γρήγορη αξιολόγηση και συντονισμένη απάντηση", "Αδιαφορία", "Διαγραφή όλων", "Προσωπικές αντιπαραθέσεις"],
            correct: 0,
            explanation: "Χρειάζεται ψυχραιμία, τεκμηρίωση και σαφές response plan."
        },
        {
            type: "true_false",
            question: "Η κοινότητα μπορεί να λειτουργήσει και ως πηγή product feedback.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Πολύτιμα insights για βελτίωση προϊόντος."
        },
        {
            type: "multiple_choice",
            question: "Ποιος δείκτης μετρά ικανότητα κοινότητας να κρατά μέλη;",
            options: ["Community retention rate", "Reach", "CPM", "Impressions only"],
            correct: 0,
            explanation: "Η διατήρηση μελών είναι κεντρικός δείκτης υγείας."
        },
        {
            type: "true_false",
            question: "Η σταθερή παρουσία moderators βοηθά την ποιότητα συζητήσεων.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Διατηρείται πλαίσιο και θετικό κλίμα."
        },
        {
            type: "multiple_choice",
            question: "Ποιο deliverable influencer σχετίζεται συχνά με conversion;",
            options: ["Trackable link/discount code", "Μόνο profile picture", "Μόνο hashtag χωρίς CTA", "Καμία αναφορά brand"],
            correct: 0,
            explanation: "Trackable assets βοηθούν μέτρηση απόδοσης."
        },
        {
            type: "true_false",
            question: "Το advocacy από μέλη κοινότητας μπορεί να μειώσει CAC μακροπρόθεσμα.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Η οργανική σύσταση βελτιώνει οικονομία απόκτησης."
        },
        {
            type: "multiple_choice",
            question: "Ποιο είναι υγιές moderation principle;",
            options: ["Συνέπεια και διαφάνεια κανόνων", "Ασυνέπεια ανά χρήστη", "Προσωπικά κριτήρια", "Μηδενική τεκμηρίωση"],
            correct: 0,
            explanation: "Η συνέπεια χτίζει εμπιστοσύνη στην κοινότητα."
        },
        {
            type: "true_false",
            question: "Η κοινότητα αναπτύσσεται χωρίς καθόλου περιεχόμενο ενεργοποίησης.",
            options: ["Σωστό", "Λάθος"],
            correct: 1,
            explanation: "Λάθος - Χρειάζονται τακτικά prompts/δραστηριότητες."
        },
        {
            type: "multiple_choice",
            question: "Ποιο metric δείχνει βάθος συμμετοχής;",
            options: ["Posts/comments per active member", "Impressions only", "CPM only", "Clicks μόνο ads"],
            correct: 0,
            explanation: "Μετρά ενεργή συμμετοχή ανά μέλος."
        },
        {
            type: "true_false",
            question: "Η επιλογή influencer πρέπει να βασίζεται και σε brand safety.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Προστατεύει φήμη μάρκας."
        },
        {
            type: "multiple_choice",
            question: "Ποια πρακτική αυξάνει πιθανότητα UGC;",
            options: ["Σαφής πρόκληση + απλό συμμετοχικό format", "Ασαφείς οδηγίες", "Καμία αναγνώριση κοινού", "Μηδενικό κίνητρο"],
            correct: 0,
            explanation: "Η απλότητα και η αναγνώριση αυξάνουν συμμετοχή."
        },
        {
            type: "true_false",
            question: "Η ανάλυση αρνητικών σχολίων μπορεί να οδηγήσει σε βελτίωση υπηρεσιών.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Το feedback είναι πηγή βελτίωσης."
        },
        {
            type: "multiple_choice",
            question: "Ποιο είναι καλό sign επιτυχημένης community στρατηγικής;",
            options: ["Αύξηση ενεργών μελών και ποιοτικών συζητήσεων", "Περισσότερα spam σχόλια", "Μείωση απαντήσεων από brand", "Απουσία επιστροφών μελών"],
            correct: 0,
            explanation: "Ποιοτική συμμετοχή + αύξηση ενεργών μελών = πρόοδος."
        }
    ],

    // Ενότητα 8: Campaign Planning & Execution (brief, budget, optimization)
    section8: [
        {
            type: "true_false",
            question: "Ένα καλό campaign brief περιλαμβάνει στόχο, κοινό, μήνυμα και KPI.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Χωρίς αυτά υπάρχει ασάφεια στην εκτέλεση."
        },
        {
            type: "multiple_choice",
            question: "Ποιο είναι βασικό στοιχείο του media plan;",
            options: ["Κατανομή budget ανά κανάλι/χρόνο", "Μόνο logo", "Μόνο χρώματα", "Μόνο τίτλος καμπάνιας"],
            correct: 0,
            explanation: "Το media plan ορίζει πού/πότε/πόσο επενδύεις."
        },
        {
            type: "true_false",
            question: "Η φάση optimization ξεκινά μετά τη λήξη της καμπάνιας μόνο.",
            options: ["Σωστό", "Λάθος"],
            correct: 1,
            explanation: "Λάθος - Η βελτιστοποίηση είναι συνεχής κατά τη διάρκεια."
        },
        {
            type: "multiple_choice",
            question: "Ποιο είναι σωστό sequencing funnel καμπάνιας;",
            options: ["Awareness → Consideration → Conversion", "Conversion → Awareness → Retention", "Retention → Awareness → Consideration", "Only conversion πάντα"],
            correct: 0,
            explanation: "Η φυσική ροή οδηγεί από γνωριμία σε μετατροπή."
        },
        {
            type: "true_false",
            question: "Το contingency budget βοηθά αντιμετώπιση απρόβλεπτων αναγκών.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Προσφέρει ευελιξία στην εκτέλεση."
        },
        {
            type: "multiple_choice",
            question: "Ποιος είναι ρόλος του campaign owner;",
            options: ["Συντονισμός στόχων, ομάδας, timeline και αποφάσεων", "Μόνο επιλογή γραμματοσειράς", "Μόνο posting", "Καμία ευθύνη KPI"],
            correct: 0,
            explanation: "Ο owner διασφαλίζει συνοχή και λογοδοσία."
        },
        {
            type: "true_false",
            question: "Χωρίς baseline metrics είναι δύσκολο να αξιολογηθεί επιτυχία καμπάνιας.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Χρειάζεται σημείο αναφοράς."
        },
        {
            type: "multiple_choice",
            question: "Ποια ενέργεια βοηθά στον έλεγχο ποιότητας πριν launch;",
            options: ["Pre-launch checklist", "Άμεσο publish χωρίς review", "Καμία δοκιμή link", "Απουσία UTM"],
            correct: 0,
            explanation: "Checklist μειώνει λάθη σε tracking/creative/copy."
        },
        {
            type: "true_false",
            question: "Το timeline καμπάνιας πρέπει να περιλαμβάνει milestones και deadlines.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Βελτιώνει εκτέλεση και συντονισμό."
        },
        {
            type: "multiple_choice",
            question: "Τι είναι πιο σωστό για budget pacing;",
            options: ["Παρακολούθηση spend έναντι στόχων σε τακτική βάση", "Αδιαφορία μέχρι το τέλος", "Όλο το budget την 1η μέρα", "Μηδενική αναθεώρηση"],
            correct: 0,
            explanation: "Το pacing προστατεύει από overspend/underspend."
        },
        {
            type: "true_false",
            question: "Τα UTM parameters βοηθούν την αποτύπωση απόδοσης ανά πηγή καμπάνιας.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Κρίσιμα για σωστό analytics attribution."
        },
        {
            type: "multiple_choice",
            question: "Ποιο είναι καλό παράδειγμα optimization action;",
            options: ["Μεταφορά budget σε ad set με καλύτερο CPA", "Κλείσιμο tracking", "Αγνόηση δημιουργικών", "Διακοπή reporting"],
            correct: 0,
            explanation: "Κατευθύνεις spend εκεί που έχει καλύτερη απόδοση."
        },
        {
            type: "true_false",
            question: "Ένα campaign brief πρέπει να περιγράφει και tone of voice.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Εξασφαλίζει συνέπεια επικοινωνίας."
        },
        {
            type: "multiple_choice",
            question: "Ποιο ρίσκο μειώνει το scenario planning;",
            options: ["Λανθασμένες αντιδράσεις σε απρόβλεπτες εξελίξεις", "Ανάπτυξη δημιουργικότητας", "Καλύτερη ευελιξία", "Σαφέστερη λογοδοσία"],
            correct: 0,
            explanation: "Τα σενάρια προετοιμάζουν εναλλακτικές αντιδράσεις."
        },
        {
            type: "true_false",
            question: "Η υπερβολική πολυπλοκότητα σε δομή καμπάνιας μπορεί να δυσκολέψει optimization.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Χρειάζεται απλότητα και καθαρή ιεραρχία."
        },
        {
            type: "multiple_choice",
            question: "Ποιο deliverable ανήκει στο post-campaign phase;",
            options: ["Lessons learned report", "Creative brief initial", "Audience definition only", "Pre-launch QA"],
            correct: 0,
            explanation: "Το post-campaign review συγκεντρώνει insights και βελτιώσεις."
        },
        {
            type: "true_false",
            question: "Η ευθυγράμμιση sales και marketing βοηθά την αποτελεσματικότητα καμπάνιας.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Κοινά objectives μειώνουν αστοχίες funnel."
        },
        {
            type: "multiple_choice",
            question: "Ποια πρακτική βελτιώνει launch readiness;",
            options: ["Dry run ελέγχου links, forms, tracking", "Launch χωρίς έλεγχο", "Χωρίς naming convention", "Χωρίς ownership"],
            correct: 0,
            explanation: "Ο προληπτικός έλεγχος αποφεύγει κρίσιμα σφάλματα."
        },
        {
            type: "true_false",
            question: "Η δημιουργία ενός μόνο creative συνήθως αρκεί για όλη την καμπάνια.",
            options: ["Σωστό", "Λάθος"],
            correct: 1,
            explanation: "Λάθος - Χρειάζονται παραλλαγές για testing και fatigue control."
        },
        {
            type: "multiple_choice",
            question: "Τι πρέπει να ορίζει σαφώς ένα KPI framework;",
            options: ["Owner, target, timeframe, source data", "Μόνο όνομα metric", "Μόνο χρώμα dashboard", "Μόνο weekly meeting"],
            correct: 0,
            explanation: "Πλήρες πλαίσιο = μετρήσιμη λογοδοσία."
        },
        {
            type: "true_false",
            question: "Η αναφορά αποτελεσμάτων χωρίς business context είναι πάντα επαρκής.",
            options: ["Σωστό", "Λάθος"],
            correct: 1,
            explanation: "Λάθος - Τα metrics χρειάζονται σύνδεση με επιχειρηματικό στόχο."
        },
        {
            type: "multiple_choice",
            question: "Ποια είναι σωστή στάση σε underperforming καμπάνια;",
            options: ["Root-cause analysis και γρήγορες διορθώσεις", "Απλή συνέχιση χωρίς αλλαγή", "Διακοπή reporting", "Μηδενική συνεργασία ομάδας"],
            correct: 0,
            explanation: "Συστηματική διάγνωση και βελτιστοποίηση."
        },
        {
            type: "true_false",
            question: "Το campaign cadence (ρυθμός ενεργειών) βοηθά καλύτερη διαχείριση πόρων.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Δίνει προβλεψιμότητα στην ομάδα."
        },
        {
            type: "multiple_choice",
            question: "Ποιο είναι βασικό στοιχείο risk register καμπάνιας;",
            options: ["Πιθανότητα, επίπτωση, mitigation plan", "Μόνο τίτλος κινδύνου", "Μόνο κόστος media", "Μόνο χρονοδιάγραμμα post"],
            correct: 0,
            explanation: "Έτσι γίνεται ουσιαστική διαχείριση κινδύνου."
        },
        {
            type: "true_false",
            question: "Η βελτιστοποίηση landing page μπορεί να βελτιώσει CPA χωρίς αύξηση spend.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Καλύτερο conversion μειώνει κόστος ανά απόκτηση."
        },
        {
            type: "multiple_choice",
            question: "Ποιο είναι σωστό για campaign governance;",
            options: ["Σαφείς ρόλοι, εγκρίσεις και escalation path", "Ασαφείς ρόλοι", "Καμία διαδικασία έγκρισης", "Όλοι αποφασίζουν τα πάντα πάντα"],
            correct: 0,
            explanation: "Η δομημένη διακυβέρνηση αποτρέπει καθυστερήσεις."
        },
        {
            type: "true_false",
            question: "Το post-mortem report βοηθά να μην επαναλαμβάνονται τα ίδια λάθη.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Μετατρέπει την εμπειρία σε επόμενη βελτίωση."
        },
        {
            type: "multiple_choice",
            question: "Ποιο KPI είναι συχνά κατάλληλο για lead campaign;",
            options: ["Cost per Lead", "CPM μόνο", "Reach μόνο", "View count μόνο"],
            correct: 0,
            explanation: "Το CPL συνδέεται άμεσα με στόχο lead generation."
        },
        {
            type: "true_false",
            question: "Η ευθυγράμμιση creative strategy και media strategy είναι κρίσιμη για υψηλή απόδοση.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Μήνυμα και διανομή πρέπει να δουλεύουν μαζί."
        },
        {
            type: "multiple_choice",
            question: "Ποιο είναι σωστό τελικό βήμα μετά το τέλος καμπάνιας;",
            options: [
                "Σύγκριση αποτελεσμάτων με στόχους και τεκμηρίωση next actions",
                "Διαγραφή όλων των δεδομένων",
                "Καμία ανασκόπηση",
                "Ακύρωση όλων των benchmark"
            ],
            correct: 0,
            explanation: "Η ανασκόπηση είναι κλειδί για συνεχή βελτίωση."
        }
    ],
};

// Πληροφορίες για κάθε ενότητα
const sectionInfo = {
    1: {
        title: "📚 Ενότητα 1: Παραδοσιακό Μάρκετινγκ (Foundations)",
        description: "Παραδοσιακό Μάρκετινγκ (Foundations)",
        maxQuestions: 60
    },
    2: {
        title: "🎯 Ενότητα 2: Strategy Basics (στόχοι, funnel, KPI)",
        description: "Strategy Basics (στόχοι, funnel, KPI)",
        maxQuestions: 30
    },
    3: {
        title: "✍️ Ενότητα 3: Content Creation (formats, hooks, storytelling)",
        description: "Content Creation (formats, hooks, storytelling)",
        maxQuestions: 30
    },
    4: {
        title: "📱 Ενότητα 4: Platforms (Facebook, Instagram, TikTok, LinkedIn, YouTube)",
        description: "Platforms (Instagram, TikTok, LinkedIn, YouTube)",
        maxQuestions: 50
    },
    5: {
        title: "📣 Ενότητα 5: Ads & Performance (CTR, CPC, ROAS, A/B testing)",
        description: "Ads & Performance (CTR, CPC, ROAS, A/B testing)",
        maxQuestions: 30
    },
    6: {
        title: "📊 Ενότητα 6: Analytics & Measurement (engagement, retention, attribution)",
        description: "Analytics & Measurement (engagement, retention, attribution)",
        maxQuestions: 30
    },
    7: {
        title: "👥 Ενότητα 7: Community & Growth (UGC, moderation, influencers)",
        description: "Community & Growth (UGC, moderation, influencers)",
        maxQuestions: 30
    },
    8: {
        title: "🗂️ Ενότητα 8: Campaign Planning & Execution (brief, budget, optimization)",
        description: "Campaign Planning & Execution (brief, budget, optimization)",
        maxQuestions: 30
    },
    9: {
        title: "🧩 Ενότητα 9: Όλες οι Κατηγορίες (Mixed Quiz)",
        description: "Όλες οι Κατηγορίες (Mixed Quiz)",
        maxQuestions: 50
    }
};