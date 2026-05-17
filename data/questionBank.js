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

    // Ενότητα 5: Έρευνα Αγοράς
    section5: [
        {
            type: "true_false",
            question: "Το Μακροπεριβάλλον, οι δημογραφικές, οικονομικές, πολιτικές, τεχνολογικές, φυσικές, νομικές, κοινωνικές δυνάμεις δεν μπορούν να ελεγχτούν, ούτε να επηρεαστούν από την επιχείρηση.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Το μακροπεριβάλλον περιλαμβάνει εξωτερικούς παράγοντες που δεν μπορούν να ελεγχθούν από την επιχείρηση."
        },
        {
            type: "true_false",
            question: "Το Μικροπεριβάλλον: αποτελείται από τους παράγοντες κοντά στην επιχείρηση, οι οποίοι παρόλο που δεν μπορούν άμεσα να ελεγχτούν, είναι δυνατόν να επηρεαστούν έμμεσα, μέσα από διαδικασίες και στρατηγικές marketing.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Το μικροπεριβάλλον μπορεί να επηρεαστεί έμμεσα μέσω στρατηγικών marketing."
        },
        {
            type: "true_false",
            question: "Το Μακροπεριβάλλον δεν μπορεί να επηρεάζει άμεσα το Μικροπεριβάλλον επειδή αυτό κινείται ανεξάρτητα.",
            options: ["Σωστό", "Λάθος"],
            correct: 1,
            explanation: "Λάθος - Το μακροπεριβάλλον επηρεάζει άμεσα το μικροπεριβάλλον και δεν κινούνται ανεξάρτητα."
        },
        {
            type: "true_false",
            question: "Στη SWOT ανάλυση, Οι δυνάμεις και οι αδυναμίες αποτελούν «εσωτερικά» στοιχεία - παράγοντες (internal factors) οι όποιοι δύνανται να είναι ελεγχόμενοι από την επιχείρηση, ενώ οι ευκαιρίες και οι απειλές εξωτερικούς (external factors) οι οποίοι είναι εκτός περιθωρίων ελέγχου.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Η SWOT ανάλυση διακρίνει εσωτερικούς (δυνάμεις/αδυναμίες) και εξωτερικούς παράγοντες (ευκαιρίες/απειλές)."
        },
        {
            type: "multiple_choice",
            question: "Το Οικονομικό περιβάλλον αναφέρεται στην οικονομική ζωή μίας χώρας ή κοινωνίας. Παράγοντες που επηρεάζουν το Οικονομικό περιβάλλον είναι:",
            options: [
                "Επιτόκια δανεισμού, Ύψος πληθωρισμού, Επίπεδα απασχόλησης & ανεργία",
                "Μόνο τα επιτόκια δανεισμού",
                "Μόνο το ύψος πληθωρισμού",
                "Η αύξηση των νοικοκυριών ενός ατόμου"
            ],
            correct: 0,
            explanation: "Το οικονομικό περιβάλλον επηρεάζεται από επιτόκια, πληθωρισμό και επίπεδα απασχόλησης/ανεργίας."
        },
        {
            type: "true_false",
            question: "Όταν έχουμε καταρτίσει μια πλήρη SWOT ανάλυση, δεν χρειάζεται να προβούμε σε ανάλυση PESTEL.",
            options: ["Σωστό", "Λάθος"],
            correct: 1,
            explanation: "Λάθος - Η SWOT και η PESTEL ανάλυση είναι συμπληρωματικά εργαλεία που χρησιμοποιούνται μαζί για πλήρη εικόνα."
        },
        {
            type: "true_false",
            question: "Στο Πολιτικό περιβάλλον εμπίπτει η πολιτική σταθερότητα, οι νόμοι, το πολιτικό καθεστώς και η μορφή κυβέρνησης.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Το πολιτικό περιβάλλον περιλαμβάνει όλους αυτούς τους παράγοντες που επηρεάζουν την επιχειρηματική δραστηριότητα."
        },
        {
            type: "true_false",
            question: "Το Οικονομικό περιβάλλον αναφέρεται στην κοινωνική ζωή μίας χώρας ή κοινωνίας.",
            options: ["Σωστό", "Λάθος"],
            correct: 1,
            explanation: "Λάθος - Το οικονομικό περιβάλλον αναφέρεται στην οικονομική ζωή, όχι στην κοινωνική."
        },
        {
            type: "true_false",
            question: "Η swot analysis, αναδύει τις κρίσιμες για την επιχείρηση δυνάμεις και δυνατότητες της, τις αδυναμίες της, τις ευκαιρίες που μπορεί να υπάρχουν στην αγορά, όπως και τις απειλές.",
            options: ["Σωστό", "Λάθος"],
            correct: 0,
            explanation: "Σωστό - Η SWOT ανάλυση εντοπίζει δυνάμεις (Strengths), αδυναμίες (Weaknesses), ευκαιρίες (Opportunities) και απειλές (Threats)."
        },
        {
            type: "true_false",
            question: "Οι δημογραφικοί παράγοντες δεν είναι σημαντικές για τις επιχειρήσεις.",
            options: ["Σωστό", "Λάθος"],
            correct: 1,
            explanation: "Λάθος - Οι δημογραφικοί παράγοντες είναι εξαιρετικά σημαντικοί για τις επιχειρήσεις καθώς επηρεάζουν τη ζήτηση και τις αγοραστικές συνήθειες."
        }
    ],

    // Ενότητα 6: Ο Ρόλος των Εξαγωγών στην Οικονομία
    section6: [
        {
            type: "multiple_choice",
            question: "Ποια από τις παρακάτω έννοιες περιγράφει την πώληση αγαθών ή υπηρεσιών που παράγονται σε μία χώρα, σε αγοραστές που βρίσκονται σε μία άλλη χώρα;",
            options: [
                "Εισαγωγές",
                "Άμεσες Ξένες Επενδύσεις",
                "Εξαγωγές",
                "Εσωτερικό εμπόριο"
            ],
            correct: 2,
            explanation: "Οι εξαγωγές αναφέρονται στην πώληση αγαθών ή υπηρεσιών που παράγονται σε μία χώρα σε αγοραστές άλλης χώρας."
        },
        {
            type: "multiple_choice",
            question: "Σύμφωνα με τη μακροοικονομική ταυτότητα του ΑΕΠ, ποιες συναλλαγές συμβάλλουν άμεσα και θετικά στην αύξησή του;",
            options: [
                "Εισαγωγές",
                "Κατανάλωση και Εισαγωγές",
                "Εξαγωγές",
                "Κρατικές Δαπάνες και Εισαγωγές"
            ],
            correct: 2,
            explanation: "Στη μακροοικονομική ταυτότητα ΑΕΠ = C + I + G + (X - M), οι εξαγωγές (X) συνεισφέρουν θετικά στο ΑΕΠ."
        },
        {
            type: "multiple_choice",
            question: "Ποια οικονομική θεωρία υποστηρίζει ότι οι χώρες πρέπει να εξειδικεύονται στην παραγωγή αγαθών για τα οποία έχουν το χαμηλότερο κόστος ευκαιρίας;",
            options: [
                "Θεωρία Απολύτου Πλεονεκτήματος",
                "Θεωρία Συγκριτικού Πλεονεκτήματος",
                "Θεωρία Κεϋνσιανισμού",
                "Μερκαντιλισμός"
            ],
            correct: 1,
            explanation: "Η Θεωρία Συγκριτικού Πλεονεκτήματος του David Ricardo υποστηρίζει την εξειδίκευση σε αγαθά με το χαμηλότερο κόστος ευκαιρίας."
        },
        {
            type: "multiple_choice",
            question: "Ποια από τις παρακάτω είναι κύρια πηγή ξένου συναλλάγματος για μια χώρα;",
            options: [
                "Εισαγωγές αγαθών",
                "Κατανάλωση εγχώριων προϊόντων",
                "Εξαγωγές αγαθών και υπηρεσιών",
                "Κρατικές δαπάνες"
            ],
            correct: 2,
            explanation: "Οι εξαγωγές αγαθών και υπηρεσιών αποτελούν την κύρια πηγή εισροής ξένου συναλλάγματος για μια χώρα."
        },
        {
            type: "multiple_choice",
            question: "Ποια από τις παρακάτω αποτελεί βασική μικροοικονομική επίπτωση των εξαγωγών για μια επιχείρηση;",
            options: [
                "Αύξηση της γραφειοκρατίας",
                "Επίτευξη οικονομιών κλίμακας",
                "Μείωση της ζήτησης",
                "Αύξηση του πολιτικού κινδύνου"
            ],
            correct: 1,
            explanation: "Η επίτευξη οικονομιών κλίμακας είναι βασικό όφελος των εξαγωγών, καθώς αυξάνεται η παραγωγή και μειώνεται το μέσο κόστος."
        },
        {
            type: "multiple_choice",
            question: "Ποια από τις παρακάτω είναι μια μορφή εξαγωγής υπηρεσιών;",
            options: [
                "Πώληση αυτοκινήτων στο εξωτερικό",
                "Εισαγωγή πρώτων υλών",
                "Δαπάνες ξένων τουριστών σε μια χώρα",
                "Παραγωγή ρούχων για την εγχώρια αγορά"
            ],
            correct: 2,
            explanation: "Οι δαπάνες ξένων τουριστών αποτελούν εξαγωγή τουριστικών υπηρεσιών και συνεισφέρουν στο ισοζύγιο υπηρεσιών."
        },
        {
            type: "multiple_choice",
            question: "Ποια διεθνής πιστοποίηση αφορά κυρίως τη διασφάλιση της ποιότητας των διαδικασιών μιας επιχείρησης;",
            options: [
                "ISO 14001",
                "CE Mark",
                "ISO 9001",
                "HACCP"
            ],
            correct: 2,
            explanation: "Το ISO 9001 είναι το διεθνές πρότυπο για τη διασφάλιση ποιότητας των διαδικασιών και συστημάτων διαχείρισης ποιότητας."
        },
        {
            type: "multiple_choice",
            question: "Ποια τεχνική διείσδυσης σε ξένη αγορά συνεπάγεται τη χρήση ενός εγχώριου ενδιάμεσου φορέα και έχει χαμηλό ρίσκο για την επιχείρηση;",
            options: [
                "Άμεση Ξένη Επένδυση",
                "Κοινοπραξία",
                "Έμμεσες Εξαγωγές",
                "Franchising"
            ],
            correct: 2,
            explanation: "Οι έμμεσες εξαγωγές μέσω εγχώριου ενδιάμεσου έχουν χαμηλό ρίσκο καθώς η επιχείρηση δεν εκτίθεται άμεσα στην ξένη αγορά."
        },
        {
            type: "multiple_choice",
            question: "Ποια χώρα αναγνωρίζεται ως \"Startup Nation\" λόγω των εξαγωγών τεχνολογίας και καινοτομίας;",
            options: [
                "Κίνα",
                "Γερμανία",
                "Ισραήλ",
                "Ελλάδα"
            ],
            correct: 2,
            explanation: "Το Ισραήλ αναγνωρίζεται ως 'Startup Nation' λόγω της έντονης εξαγωγικής δραστηριότητας σε τεχνολογία και καινοτομία."
        },
        {
            type: "multiple_choice",
            question: "Ποια είναι μια βασική πρόκληση για την Ελλάδα όσον αφορά τις εξαγωγές;",
            options: [
                "Υψηλή ποιότητα αγροτικών προϊόντων",
                "Στρατηγική γεωγραφική θέση",
                "Γραφειοκρατία και διοικητικά εμπόδια",
                "Δυναμικός τουριστικός τομέας"
            ],
            correct: 2,
            explanation: "Η γραφειοκρατία και τα διοικητικά εμπόδια αποτελούν βασική πρόκληση που περιορίζει την εξαγωγική δραστηριότητα στην Ελλάδα."
        },
        {
            type: "multiple_choice",
            question: "Ποια τάση στο διεθνές εμπόριο αφορά την ενίσχυση των εμπορικών σχέσεων με γεωπολιτικά \"φιλικές\" χώρες;",
            options: [
                "Reshoring",
                "Offshoring",
                "Friendshoring",
                "Outsourcing"
            ],
            correct: 2,
            explanation: "Το Friendshoring αναφέρεται στην τάση ενίσχυσης εμπορικών σχέσεων με γεωπολιτικά φιλικές και συμμαχικές χώρες."
        },
        {
            type: "multiple_choice",
            question: "Ποια ψηφιακή τεχνολογία είναι κυρίως υπεύθυνη για την εκδημοκρατικοποίηση των εξαγωγών για τις ΜΜΕ;",
            options: [
                "Τεχνητή Νοημοσύνη (AI)",
                "Blockchain",
                "Εικονική πραγματικότητα (VR)",
                "Ηλεκτρονικό εμπόριο (e-commerce)"
            ],
            correct: 3,
            explanation: "Το ηλεκτρονικό εμπόριο (e-commerce) έχει εκδημοκρατικοποιήσει τις εξαγωγές επιτρέποντας σε ΜΜΕ εύκολη πρόσβαση σε διεθνείς αγορές."
        },
        {
            type: "multiple_choice",
            question: "Ποιος από τους ESG παράγοντες αφορά τη διαχείριση αποβλήτων και τις εκπομπές αερίων του θερμοκηπίου;",
            options: [
                "Περιβαλλοντικός (Environmental)",
                "Κοινωνικός (Social)",
                "Διακυβερνητικός (Governance)",
                "Οικονομικός"
            ],
            correct: 0,
            explanation: "Ο περιβαλλοντικός παράγοντας (Environmental) των ESG αφορά τη διαχείριση αποβλήτων και τις εκπομπές αερίων του θερμοκηπίου."
        },
        {
            type: "multiple_choice",
            question: "Ποια κρατική υπηρεσία ή φορέας συχνά παρέχει ασφάλιση εξαγωγικών πιστώσεων;",
            options: [
                "Υπουργείο Οικονομικών",
                "Κεντρική Τράπεζα",
                "Οργανισμοί Εξαγωγικών Πιστώσεων (ECAs)",
                "Εμπορικά Επιμελητήρια"
            ],
            correct: 2,
            explanation: "Οι Οργανισμοί Εξαγωγικών Πιστώσεων (Export Credit Agencies - ECAs) παρέχουν ασφάλιση και χρηματοδότηση για εξαγωγικές δραστηριότητες."
        },
        {
            type: "multiple_choice",
            question: "Ποιο από τα παρακάτω αποτελεί βασικό πυλώνα του γερμανικού εξαγωγικού μοντέλου;",
            options: [
                "Μαζική παραγωγή χαμηλού κόστους",
                "Εξάρτηση από εισαγωγές πρώτων υλών",
                "Ποιότητα και μηχανική αριστεία",
                "Έμφαση στην εγχώρια κατανάλωση"
            ],
            correct: 2,
            explanation: "Το γερμανικό εξαγωγικό μοντέλο βασίζεται στην υψηλή ποιότητα, τη μηχανική αριστεία και την καινοτομία, όχι στη μαζική παραγωγή χαμηλού κόστους."
        }
    ],

    // Ενότητα 7: Νομοθετικό πλαίσιο και πιστοποιήσεις εξαγωγών
    section7: [
        {
            type: "multiple_choice",
            question: "Ποιος ευρωπαϊκός κανονισμός καθορίζει το πλαίσιο για τους επίσημους ελέγχους τροφίμων;",
            options: [
                "Κανονισμός (ΕΕ) 852/2004",
                "Κανονισμός (ΕΕ) 2017/625",
                "Κανονισμός (ΕΕ) 1333/2008",
                "Κανονισμός (ΕΚ) 178/2002"
            ],
            correct: 1,
            explanation: "Ο Κανονισμός (ΕΕ) 2017/625 καθορίζει τους κανόνες για τους επίσημους ελέγχους που πραγματοποιούνται για να διασφαλιστεί η εφαρμογή της νομοθεσίας για τα τρόφιμα και τις ζωοτροφές, τους κανόνες για την υγεία και την καλή μεταχείριση των ζώων, την υγεία των φυτών και τα φυτοπροστατευτικά προϊόντα."
        },
        {
            type: "multiple_choice",
            question: "Τι δηλώνει το σήμα CE για ένα προϊόν;",
            options: [
                "Ότι παράγεται στην ΕΕ",
                "Ότι συμμορφώνεται με τις απαιτήσεις ποιότητας των ΗΠΑ",
                "Ότι συμμορφώνεται με την ευρωπαϊκή νομοθεσία",
                "Ότι έχει πιστοποιηθεί από ιδιωτικό φορέα"
            ],
            correct: 2,
            explanation: "Το σήμα CE (Conformité Européenne) δηλώνει ότι το προϊόν συμμορφώνεται με τις ισχύουσες ευρωπαϊκές οδηγίες και κανονισμούς και μπορεί να κυκλοφορεί ελεύθερα στην ευρωπαϊκή αγορά."
        },
        {
            type: "multiple_choice",
            question: "Ποιο πρότυπο αφορά αποκλειστικά την ασφάλεια των τροφίμων;",
            options: [
                "ISO 9001",
                "ISO 14001",
                "ISO 22000",
                "ISO 45001"
            ],
            correct: 2,
            explanation: "Το πρότυπο ISO 22000 είναι ειδικά σχεδιασμένο για τη διαχείριση της ασφάλειας των τροφίμων και καθορίζει τις απαιτήσεις για ένα σύστημα διαχείρισης ασφάλειας τροφίμων."
        },
        {
            type: "multiple_choice",
            question: "Ποια πιστοποίηση απαιτείται για τη συμμόρφωση με τις ισλαμικές διατροφικές απαιτήσεις;",
            options: [
                "Organic",
                "Halal",
                "BRC",
                "HACCP"
            ],
            correct: 1,
            explanation: "Η πιστοποίηση Halal διασφαλίζει ότι τα προϊόντα και οι διαδικασίες συμμορφώνονται με τους ισλαμικούς νόμους και είναι κατάλληλα για κατανάλωση από μουσουλμάνους."
        },
        {
            type: "multiple_choice",
            question: "Ποιο πρότυπο χρησιμοποιείται ευρέως από ευρωπαϊκές αλυσίδες σούπερ μάρκετ;",
            options: [
                "ISO 9001",
                "IFS",
                "CE",
                "GRI"
            ],
            correct: 1,
            explanation: "Το πρότυπο IFS (International Featured Standards) χρησιμοποιείται ευρέως από ευρωπαϊκές αλυσίδες λιανικής πώλησης για την αξιολόγηση προμηθευτών τροφίμων και διασφαλίζει την ποιότητα και ασφάλεια των προϊόντων."
        },
        {
            type: "multiple_choice",
            question: "Η νομοθεσία για την επισήμανση τροφίμων στην ΕΕ καλύπτεται από:",
            options: [
                "Κανονισμό (ΕΚ) 178/2002",
                "Κανονισμό (ΕΕ) 1169/2011",
                "Κανονισμό (ΕΕ) 1333/2008",
                "Οδηγία 2000/13/ΕΚ"
            ],
            correct: 1,
            explanation: "Ο Κανονισμός (ΕΕ) 1169/2011 καθορίζει τους κανόνες για την παροχή πληροφοριών για τα τρόφιμα στους καταναλωτές, συμπεριλαμβανομένης της επισήμανσης τροφίμων."
        },
        {
            type: "multiple_choice",
            question: "Ποια κατηγορία κινδύνου σχετίζεται με σαλμονέλα;",
            options: [
                "Φυσικός",
                "Χημικός",
                "Βιολογικός",
                "Ακτινολογικός"
            ],
            correct: 2,
            explanation: "Η σαλμονέλα είναι βακτήριο που αποτελεί βιολογικό κίνδυνο για την ασφάλεια των τροφίμων και μπορεί να προκαλέσει τροφική δηλητηρίαση."
        },
        {
            type: "multiple_choice",
            question: "Τι προβλέπει το HACCP;",
            options: [
                "Εγκατάσταση απολυμαντικών μονάδων",
                "Τυποποίηση εξαγωγικών διαδικασιών",
                "Έλεγχο κρίσιμων σημείων για την ασφάλεια τροφίμων",
                "Έλεγχο φορολογικής συμμόρφωσης"
            ],
            correct: 2,
            explanation: "Το HACCP (Hazard Analysis and Critical Control Points) είναι ένα σύστημα που εντοπίζει, αξιολογεί και ελέγχει τους κινδύνους που είναι σημαντικοί για την ασφάλεια των τροφίμων σε κρίσιμα σημεία ελέγχου."
        },
        {
            type: "multiple_choice",
            question: "Ποια από τις παρακάτω είναι υποχρεωτική πιστοποίηση για εξαγωγές στην ΕΕ;",
            options: [
                "ISO 9001",
                "CE",
                "BRC",
                "Vegan"
            ],
            correct: 1,
            explanation: "Το σήμα CE είναι υποχρεωτικό για πολλά προϊόντα που πωλούνται στην ΕΕ και δηλώνει συμμόρφωση με τις ευρωπαϊκές οδηγίες ασφάλειας, υγείας και προστασίας του περιβάλλοντος."
        },
        {
            type: "multiple_choice",
            question: "Ποια νομοθεσία καλύπτει τα πρόσθετα τροφίμων στην ΕΕ;",
            options: [
                "Κανονισμός (ΕΕ) 1169/2011",
                "Κανονισμός (ΕΚ) 1333/2008",
                "Κανονισμός (ΕΚ) 178/2002",
                "Κανονισμός (ΕΚ) 852/2004"
            ],
            correct: 1,
            explanation: "Ο Κανονισμός (ΕΚ) 1333/2008 καθορίζει τους κανόνες για τα πρόσθετα τροφίμων στην ΕΕ, συμπεριλαμβανομένων των εγκεκριμένων προσθέτων και των συνθηκών χρήσης τους."
        },
        {
            type: "multiple_choice",
            question: "Ποιο πρότυπο εστιάζει στην κοινωνική ευθύνη επιχειρήσεων;",
            options: [
                "ISO 14001",
                "SA8000",
                "ISO 22000",
                "BRC"
            ],
            correct: 1,
            explanation: "Το πρότυπο SA8000 (Social Accountability 8000) εστιάζει στην κοινωνική ευθύνη των επιχειρήσεων και καθορίζει τις απαιτήσεις για ηθικές εργασιακές συνθήκες."
        },
        {
            type: "multiple_choice",
            question: "Η ανάλυση κινδύνου σε ένα σχέδιο HACCP προηγείται της:",
            options: [
                "Κατάρτισης των διαδικασιών πώλησης",
                "Ανάπτυξης κρίσιμων ορίων",
                "Διαμόρφωσης στρατηγικής marketing",
                "Εκπαίδευσης προσωπικού"
            ],
            correct: 1,
            explanation: "Στο σύστημα HACCP, η ανάλυση κινδύνου είναι το πρώτο βήμα και προηγείται της ανάπτυξης κρίσιμων ορίων για τα κρίσιμα σημεία ελέγχου."
        },
        {
            type: "multiple_choice",
            question: "Ποια νομοθεσία αφορά τα γενετικά τροποποιημένα τρόφιμα στην ΕΕ;",
            options: [
                "Κανονισμός (ΕΚ) 1829/2003",
                "Κανονισμός (ΕΚ) 178/2002",
                "Κανονισμός (ΕΚ) 852/2004",
                "Κανονισμός (ΕΚ) 2017/625"
            ],
            correct: 0,
            explanation: "Ο Κανονισμός (ΕΚ) 1829/2003 ρυθμίζει τα γενετικά τροποποιημένα τρόφιμα και ζωοτροφές στην ΕΕ, συμπεριλαμβανομένων των διαδικασιών έγκρισης και επισήμανσης."
        },
        {
            type: "multiple_choice",
            question: "Ποιο πρότυπο πιστοποιεί οργανικά προϊόντα στην ΕΕ;",
            options: [
                "ISO 9001",
                "GLOBALG.A.P.",
                "EU Organic Logo",
                "IFS"
            ],
            correct: 2,
            explanation: "Το EU Organic Logo είναι το επίσημο λογότυπο της ΕΕ για οργανικά προϊόντα και εγγυάται ότι τα προϊόντα πληρούν τους αυστηρούς κανόνες της ΕΕ για τη βιολογική παραγωγή."
        },
        {
            type: "multiple_choice",
            question: "Ποιο από τα παρακάτω θεωρείται \"εθελοντική\" πιστοποίηση;",
            options: [
                "CE",
                "FDA",
                "ISO 22000",
                "Πιστοποίηση καταγωγής"
            ],
            correct: 2,
            explanation: "Το ISO 22000 είναι εθελοντική πιστοποίηση που μπορεί να επιλέξει μια επιχείρηση για να αποδείξει τη δέσμευσή της στην ασφάλεια των τροφίμων, σε αντίθεση με υποχρεωτικές απαιτήσεις όπως το CE."
        }
    ],

    // Ενότητα 8: Κανόνες συμπεριφοράς και εμφάνισης
    section8: [
        {
            type: "multiple_choice",
            question: "Τι εκφράζει ο επαγγελματικός ενδυματολογικός κώδικας σε μια εξαγωγική συνάντηση;",
            options: [
                "Σεβασμό και αξιοπιστία",
                "Απαραίτητη τυπικότητα",
                "Πολιτισμική διαφορά",
                "Επαναστατικότητα"
            ],
            correct: 0,
            explanation: "Ο επαγγελματικός ενδυματολογικός κώδικας εκφράζει σεβασμό προς τους συνομιλητές και προβάλλει αξιοπιστία, συμβάλλοντας στη δημιουργία θετικής πρώτης εντύπωσης σε εξαγωγικές συναντήσεις."
        },
        {
            type: "multiple_choice",
            question: "Ποια είναι η σημασία της πρώτης εντύπωσης σε μια επαγγελματική συνάντηση;",
            options: [
                "Δεν έχει ιδιαίτερη σημασία",
                "Επηρεάζει τη συνολική αντίληψη για τον συνομιλητή",
                "Καθορίζει τη συμφωνία",
                "Αφορά μόνο την εμφάνιση"
            ],
            correct: 1,
            explanation: "Η πρώτη εντύπωση είναι κρίσιμη καθώς επηρεάζει σημαντικά τη συνολική αντίληψη που θα σχηματίσει κάποιος για τον συνομιλητή του και μπορεί να καθορίσει την πορεία της επαγγελματικής σχέσης."
        },
        {
            type: "multiple_choice",
            question: "Τι είναι αποδεκτό ως ενδυμασία για άνδρες σε επαγγελματικές συναντήσεις εξαγωγών;",
            options: [
                "Casual ρούχα",
                "Κοστούμι ή business casual",
                "T-shirt με λογότυπα",
                "Τζιν και αθλητικά παπούτσια"
            ],
            correct: 1,
            explanation: "Σε επαγγελματικές συναντήσεις εξαγωγών, η κατάλληλη ενδυμασία για άνδρες περιλαμβάνει κοστούμι ή business casual ρούχα, που προβάλλουν επαγγελματισμό και σοβαρότητα."
        },
        {
            type: "multiple_choice",
            question: "Η μη λεκτική επικοινωνία περιλαμβάνει:",
            options: [
                "Γλώσσα σώματος, οπτική επαφή, στάση σώματος",
                "Email και SMS",
                "Τον τόνο της φωνής μόνο",
                "Τη χειραψία μόνο"
            ],
            correct: 0,
            explanation: "Η μη λεκτική επικοινωνία είναι ένα ολοκληρωμένο σύστημα που περιλαμβάνει τη γλώσσα του σώματος, την οπτική επαφή, τη στάση σώματος, τις κινήσεις των χεριών και άλλα σωματικά σήματα που μεταδίδουν μηνύματα."
        },
        {
            type: "multiple_choice",
            question: "Ποια είναι η αποδεκτή συμπεριφορά όταν κάποιος καθυστερεί σε επαγγελματική συνάντηση;",
            options: [
                "Αγνόηση του θέματος",
                "Ενημέρωση εκ των προτέρων και απολογία",
                "Απόδοση ευθυνών",
                "Αποχώρηση"
            ],
            correct: 1,
            explanation: "Όταν κάποιος καθυστερεί σε επαγγελματική συνάντηση, η σωστή συμπεριφορά είναι η ενημέρωση εκ των προτέρων και η ειλικρινής απολογία, που δείχνει σεβασμό και επαγγελματισμό."
        },
        {
            type: "multiple_choice",
            question: "Ποια συμπεριφορά δείχνει ενεργή ακρόαση;",
            options: [
                "Η σιωπή",
                "Η βλεμματική επαφή και οι καταφατικές κινήσεις",
                "Η διακοπή του συνομιλητή",
                "Το κοίταγμα του κινητού"
            ],
            correct: 1,
            explanation: "Η ενεργή ακρόαση εκδηλώνεται μέσω της βλεμματικής επαφής και των καταφατικών κινήσεων, που δείχνουν ότι δίνουμε προσοχή και ενδιαφέρον στον συνομιλητή μας."
        },
        {
            type: "multiple_choice",
            question: "Η επαγγελματική κάρτα σε διεθνείς επαφές:",
            options: [
                "Πρέπει να προσφέρεται με σεβασμό και με τα δύο χέρια όπου απαιτείται",
                "Μοιράζεται όπως ένα φυλλάδιο",
                "Δεν έχει σημασία",
                "Είναι ξεπερασμένη πρακτική"
            ],
            correct: 0,
            explanation: "Σε διεθνείς επαφές, η επαγγελματική κάρτα έχει ιδιαίτερη σημασία και πρέπει να προσφέρεται με σεβασμό. Σε πολλούς πολιτισμούς (π.χ. Ιαπωνία) απαιτείται να προσφέρεται με τα δύο χέρια."
        },
        {
            type: "multiple_choice",
            question: "Ποια είναι η σωστή στάση σε επαγγελματικά δείπνα;",
            options: [
                "Άτυπη και αυθόρμητη",
                "Μόνο παραγγελία",
                "Ευγένεια, σωστός τρόπος φαγητού και συζήτησης",
                "Οικειότητα από την αρχή"
            ],
            correct: 2,
            explanation: "Σε επαγγελματικά δείπνα απαιτείται ευγένεια, σωστός τρόπος φαγητού και κατάλληλη συζήτηση που συνδυάζει την επαγγελματική προσέγγιση με τη φιλική ατμόσφαιρα."
        },
        {
            type: "multiple_choice",
            question: "Τι σηματοδοτεί η υπερβολική χρήση αρωμάτων;",
            options: [
                "Προσωπική επιλογή",
                "Μη επαγγελματική εντύπωση",
                "Αυτοπεποίθηση",
                "Πολιτισμική προσέγγιση"
            ],
            correct: 1,
            explanation: "Η υπερβολική χρήση αρωμάτων σηματοδοτεί μη επαγγελματική εντύπωση και μπορεί να δημιουργήσει δυσφορία ή να αποσπάσει την προσοχή από το κύριο αντικείμενο της συνάντησης."
        },
        {
            type: "multiple_choice",
            question: "Τι θεωρείται ουδέτερο και ασφαλές θέμα συζήτησης σε επαγγελματικό πλαίσιο;",
            options: [
                "Πολιτική",
                "Θρησκεία",
                "Καιρός ή επαγγελματικά ενδιαφέροντα",
                "Προσωπική ζωή"
            ],
            correct: 2,
            explanation: "Ο καιρός και τα επαγγελματικά ενδιαφέροντα θεωρούνται ουδέτερα και ασφαλή θέματα συζήτησης που δεν προκαλούν διχόνοια και βοηθούν στην αποφυγή ευαίσθητων θεμάτων."
        },
        {
            type: "multiple_choice",
            question: "Ποιος είναι ο κατάλληλος τρόπος χειραψίας;",
            options: [
                "Σταθερή, σύντομη και με οπτική επαφή",
                "Δυνατή και μακρά",
                "Χωρίς οπτική επαφή",
                "Με κλίση του σώματος προς τα πίσω"
            ],
            correct: 0,
            explanation: "Η κατάλληλη χειραψία είναι σταθερή, σύντομη και συνοδεύεται από οπτική επαφή, που δείχνει αυτοπεποίθηση και σεβασμό προς τον συνομιλητή."
        },
        {
            type: "multiple_choice",
            question: "Ποια ενδυματολογική επιλογή θεωρείται λάθος σε επαγγελματική παρουσίαση;",
            options: [
                "Κοστούμι ή φόρεμα",
                "Διακριτικά χρώματα",
                "Εκκεντρικά αξεσουάρ και ρούχα με σλόγκαν",
                "Κλασικά παπούτσια"
            ],
            correct: 2,
            explanation: "Τα εκκεντρικά αξεσουάρ και τα ρούχα με σλόγκαν θεωρούνται ακατάλληλα για επαγγελματική παρουσίαση καθώς αποσπούν την προσοχή και μπορεί να δημιουργήσουν λάθος εντύπωση."
        },
        {
            type: "multiple_choice",
            question: "Τι ρόλο παίζει η καθαριότητα και η περιποίηση στην επαγγελματική εικόνα;",
            options: [
                "Είναι προσωπική υπόθεση",
                "Υποδηλώνει επαγγελματισμό και σεβασμό",
                "Σπάνια προσέχεται",
                "Μόνο σε συνεντεύξεις"
            ],
            correct: 1,
            explanation: "Η καθαριότητα και η περιποίηση υποδηλώνουν επαγγελματισμό και σεβασμό προς τους συνεργάτες, και είναι βασικά στοιχεία που συμβάλλουν στη δημιουργία θετικής επαγγελματικής εικόνας."
        },
        {
            type: "multiple_choice",
            question: "Ποιο από τα παρακάτω δείχνει ακατάλληλη συμπεριφορά;",
            options: [
                "Διακοπή του συνομιλητή",
                "Συμφωνία με χαμόγελο",
                "Τήρηση σειράς στον λόγο",
                "Υπομονετική ακρόαση"
            ],
            correct: 0,
            explanation: "Η διακοπή του συνομιλητή είναι ακατάλληλη συμπεριφορά που δείχνει έλλειψα σεβασμού και μπορεί να δημιουργήσει αρνητική ατμόσφαιρα στη συνάντηση."
        },
        {
            type: "multiple_choice",
            question: "Ποιος είναι ο σωστός τρόπος να απαντήσουμε σε διεθνή email συνεργασίας;",
            options: [
                "Με σαφήνεια, επαγγελματισμό και έγκαιρα",
                "Με emojis",
                "Μόνο τηλεφωνικά",
                "Μη τυποποιημένα"
            ],
            correct: 0,
            explanation: "Σε διεθνή email συνεργασίας πρέπει να απαντάμε με σαφήνεια, επαγγελματισμό και έγκαιρα, διατηρώντας επίσημο τόνο και σεβόμενοι τις διαφορές στις ζώνες ώρας."
        },
        {
            type: "multiple_choice",
            question: "Η επιλογή ουδέτερων χρωμάτων στην εμφάνιση δείχνει:",
            options: [
                "Εσωστρέφεια",
                "Επαγγελματισμό και διακριτικότητα",
                "Αδιαφορία",
                "Μη τυπικότητα"
            ],
            correct: 1,
            explanation: "Η επιλογή ουδέτερων χρωμάτων στην εμφάνιση δείχνει επαγγελματισμό και διακριτικότητα, καθώς δεν αποσπά την προσοχή και είναι κατάλληλη για όλα τα επαγγελματικά περιβάλλοντα."
        },
        {
            type: "multiple_choice",
            question: "Η ειλικρίνεια στις συναλλαγές υποδεικνύει:",
            options: [
                "Μακροχρόνια εμπιστοσύνη και αξιοπιστία",
                "Ευαλωτότητα",
                "Απειρία",
                "Δυσκαμψία"
            ],
            correct: 0,
            explanation: "Η ειλικρίνεια στις συναλλαγές υποδεικνύει και χτίζει μακροχρόνια εμπιστοσύνη και αξιοπιστία, που είναι θεμελιώδη στοιχεία για επιτυχημένες επαγγελματικές σχέσεις."
        },
        {
            type: "multiple_choice",
            question: "Ο επαγγελματικός τόνος σε διεθνή επικοινωνία πρέπει να είναι:",
            options: [
                "Ελεύθερος και φιλικός",
                "Επίσημος, σαφής και ευγενικός",
                "Αυστηρός και απαιτητικός",
                "Συνοπτικός χωρίς χαιρετισμούς"
            ],
            correct: 1,
            explanation: "Ο επαγγελματικός τόνος σε διεθνή επικοινωνία πρέπει να είναι επίσημος, σαφής και ευγενικός, συνδυάζοντας την τυπικότητα με την ευγένεια για αποτελεσματική επικοινωνία."
        },
        {
            type: "multiple_choice",
            question: "Η τήρηση της ώρας σε ραντεβού δείχνει:",
            options: [
                "Αγωνία",
                "Σεβασμό και οργάνωση",
                "Άγχος",
                "Πίεση"
            ],
            correct: 1,
            explanation: "Η τήρηση της ώρας σε ραντεβού δείχνει σεβασμό προς τον χρόνο των άλλων και καλή οργάνωση, χαρακτηριστικά που εκτιμώνται ιδιαίτερα στον επαγγελματικό κόσμο."
        },
        {
            type: "multiple_choice",
            question: "Ποιος είναι βασικός κανόνας σε διαπολιτισμική επικοινωνία;",
            options: [
                "Επιβολή τοπικών συνηθειών",
                "Σεβασμός στις πολιτισμικές διαφορές και προσαρμοστικότητα",
                "Τυπολατρία",
                "Παρουσία μόνο τεχνικών όρων"
            ],
            correct: 1,
            explanation: "Ο βασικός κανόνας σε διαπολιτισμική επικοινωνία είναι ο σεβασμός στις πολιτισμικές διαφορές και η προσαρμοστικότητα, που διευκολύνουν την αποτελεσματική συνεργασία μεταξύ διαφορετικών πολιτισμών."
        }
    ]
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
        title: "📱 Ενότητα 4: Platforms (Instagram, TikTok, LinkedIn, YouTube)",
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