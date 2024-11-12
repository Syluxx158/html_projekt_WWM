
const easyQuestions = [
    {
        question: 'Was ist die Hauptstadt von Deutschland?',
        answers: [
            { text: 'München', correct: false },
            { text: 'Hamburg', correct: false },
            { text: 'Frankfurt', correct: false },
            { text: 'Berlin', correct: true }
        ]
    },
    {
        question: 'Wie viele Tage hat eine normale Woche?',
        answers: [
            { text: '7', correct: true },
            { text: '5', correct: false },
            { text: '6', correct: false },
            { text: '8', correct: false }
        ]
    },
    {
        question: 'Welches Getränk besteht hauptsächlich aus Wasser und Malz?',
        answers: [
            { text: 'Kaffee', correct: false },
            { text: 'Tee', correct: false },
            { text: 'Bier', correct: true },
            { text: 'Limonade', correct: false }
        ]
    },
    {
        question: 'Welches Tier bellt?',
        answers: [
            { text: 'Hund', correct: true },
            { text: 'Katze', correct: false },
            { text: 'Maus', correct: false },
            { text: 'Vogel', correct: false }
        ]
    },
    {
        question: 'Wie viele Beine hat eine Spinne?',
        answers: [
            { text: '6', correct: false },
            { text: '10', correct: false },
            { text: '12', correct: false },
            { text: '8', correct: true }
        ]
    },
    {
        question: 'Was ist die Farbe des Himmels an einem klaren Tag?',
        answers: [
            { text: 'Blau', correct: true },
            { text: 'Grün', correct: false },
            { text: 'Rot', correct: false },
            { text: 'Gelb', correct: false }
        ]
    },
    {
        question: 'Welches Obst ist bekannt für seine gelbe Farbe und Krümmung?',
        answers: [
            { text: 'Apfel', correct: false },
            { text: 'Banane', correct: true },
            { text: 'Orange', correct: false },
            { text: 'Traube', correct: false }
        ]
    },
    {
        question: 'Wie viele Monate hat ein Jahr?',
        answers: [
            { text: '10', correct: false },
            { text: '12', correct: true },
            { text: '11', correct: false },
            { text: '13', correct: false }
        ]
    },
    {
        question: 'Was ist der größte Planet in unserem Sonnensystem?',
        answers: [
            { text: 'Erde', correct: false },
            { text: 'Mars', correct: false },
            { text: 'Venus', correct: false },
            { text: 'Jupiter', correct: true }
        ]
    },
    {
        question: 'Was ist das Gegenteil von heiß?',
        answers: [
            { text: 'Kalt', correct: true },
            { text: 'Warm', correct: false },
            { text: 'Lauwarm', correct: false },
            { text: 'Heiß', correct: false }
        ]
    },
    {
        question: 'Was ist 2 + 2?',
        answers: [
            { text: '4', correct: true },
            { text: '3', correct: false },
            { text: '5', correct: false },
            { text: '6', correct: false }
        ]
    },
    {
        question: 'Welches Tier ist bekannt dafür, im Wasser zu leben und zu schwimmen?',
        answers: [
            { text: 'Hund', correct: false },
            { text: 'Vogel', correct: false },
            { text: 'Fisch', correct: true },
            { text: 'Eichhörnchen', correct: false }
        ]
    },
    {
        question: 'Wie nennt man das Gerät, das zum Telefonieren verwendet wird?',
        answers: [
            { text: 'Fernseher', correct: false },
            { text: 'Computer', correct: false },
            { text: 'Mikrowelle', correct: false },
            { text: 'Telefon', correct: true }
        ]
    },
    {
        question: 'Welches Instrument hat Tasten und wird oft in der klassischen Musik verwendet?',
        answers: [
            { text: 'Gitarre', correct: false },
            { text: 'Klavier', correct: true },
            { text: 'Schlagzeug', correct: false },
            { text: 'Geige', correct: false }
        ]
    },
    {
        question: 'Welches Getränk ist aus Wasser und Teeblättern hergestellt?',
        answers: [
            { text: 'Kaffee', correct: false },
            { text: 'Saft', correct: false },
            { text: 'Tee', correct: true },
            { text: 'Milch', correct: false }
        ]
    },
    {
        question: 'Was trägt man auf dem Kopf, um sich vor der Sonne zu schützen?',
        answers: [
            { text: 'Hut', correct: true },
            { text: 'Schuhe', correct: false },
            { text: 'Jacke', correct: false },
            { text: 'Hose', correct: false }
        ]
    },
    {
        question: 'Welches Tier ist bekannt für seine Fähigkeit, fliegen zu können?',
        answers: [
            { text: 'Elefant', correct: false },
            { text: 'Fisch', correct: false },
            { text: 'Vogel', correct: true },
            { text: 'Schlange', correct: false }
        ]
    },
    {
        question: 'Was ist das erste Monat des Jahres?',
        answers: [
            { text: 'Januar', correct: true },
            { text: 'Februar', correct: false },
            { text: 'März', correct: false },
            { text: 'April', correct: false }
        ]
    },
    {
        question: 'Was ist die Farbe einer reifen Tomate?',
        answers: [
            { text: 'Grün', correct: false },
            { text: 'Rot', correct: true },
            { text: 'Gelb', correct: false },
            { text: 'Blau', correct: false }
        ]
    },
    {
        question: 'Welches Tier hat einen langen Schwanz und lebt in Bäumen?',
        answers: [
            { text: 'Affe', correct: true },
            { text: 'Kuh', correct: false },
            { text: 'Pferd', correct: false },
            { text: 'Schaf', correct: false }
        ]
    }
];

const averageQuestions = [
    {
        question: 'Welcher Planet ist der drittnächste zur Sonne?',
        answers: [
            { text: 'Mars', correct: false },
            { text: 'Erde', correct: true },
            { text: 'Venus', correct: false },
            { text: 'Jupiter', correct: false }
        ]
    },
    {
        question: 'Wer malte das berühmte Bild "Die Sternennacht"?',
        answers: [
            { text: 'Claude Monet', correct: false },
            { text: 'Pablo Picasso', correct: false },
            { text: 'Vincent van Gogh', correct: true },
            { text: 'Salvador Dalí', correct: false }
        ]
    },
    {
        question: 'Welches Gas ist am häufigsten in der Erdatmosphäre?',
        answers: [
            { text: 'Stickstoff', correct: true },
            { text: 'Sauerstoff', correct: false },
            { text: 'Kohlenstoffdioxid', correct: false },
            { text: 'Wasserstoff', correct: false }
        ]
    },
    {
        question: 'Wie viele Kontinente gibt es auf der Erde?',
        answers: [
            { text: '6', correct: false },
            { text: '8', correct: false },
            { text: '7', correct: true },
            { text: '5', correct: false }
        ]
    },
    {
        question: 'Welches Land ist das größte der Welt (nach Fläche)?',
        answers: [
            { text: 'China', correct: false },
            { text: 'Kanada', correct: false },
            { text: 'USA', correct: false },
            { text: 'Russland', correct: true }
        ]
    },
    {
        question: 'Wer war der erste Mensch, der den Mond betrat?',
        answers: [
            { text: 'Neil Armstrong', correct: true },
            { text: 'Yuri Gagarin', correct: false },
            { text: 'Buzz Aldrin', correct: false },
            { text: 'John Glenn', correct: false }
        ]
    },
    {
        question: 'Welches Metall leitet Elektrizität am besten?',
        answers: [
            { text: 'Gold', correct: false },
            { text: 'Kupfer', correct: false },
            { text: 'Silber', correct: true },
            { text: 'Aluminium', correct: false }
        ]
    },
    {
        question: 'Welches Land ist bekannt für das berühmte Bauwerk "Machu Picchu"?',
        answers: [
            { text: 'Peru', correct: true },
            { text: 'Brasilien', correct: false },
            { text: 'Argentinien', correct: false },
            { text: 'Chile', correct: false }
        ]
    },
    {
        question: 'Wie viele Planeten gibt es in unserem Sonnensystem?',
        answers: [
            { text: '8', correct: true },
            { text: '9', correct: false },
            { text: '7', correct: false },
            { text: '10', correct: false }
        ]
    },
    {
        question: 'Wer schrieb das Buch "1984"?',
        answers: [
            { text: 'Aldous Huxley', correct: false },
            { text: 'Ray Bradbury', correct: false },
            { text: 'Arthur C. Clarke', correct: false },
            { text: 'George Orwell', correct: true }
        ]
    },
    {
        question: 'Welches Land liegt am südlichsten?',
        answers: [
            { text: 'Argentinien', correct: false },
            { text: 'Chile', correct: true },
            { text: 'Neuseeland', correct: false },
            { text: 'Südafrika', correct: false }
        ]
    },
    {
        question: 'Welches Tier kann sowohl an Land als auch unter Wasser schlafen?',
        answers: [
            { text: 'Delfin', correct: true },
            { text: 'Hai', correct: false },
            { text: 'Krokodil', correct: false },
            { text: 'Otter', correct: false }
        ]
    },
    {
        question: 'Wie viele Zähne hat ein erwachsener Mensch normalerweise?',
        answers: [
            { text: '28', correct: false },
            { text: '30', correct: false },
            { text: '32', correct: true },
            { text: '34', correct: false }
        ]
    },
    {
        question: 'In welchem Jahr wurde die Berliner Mauer errichtet?',
        answers: [
            { text: '1961', correct: true },
            { text: '1949', correct: false },
            { text: '1989', correct: false },
            { text: '1975', correct: false }
        ]
    },
    {
        question: 'Was ist die Hauptstadt von Kanada?',
        answers: [
            { text: 'Toronto', correct: false },
            { text: 'Vancouver', correct: false },
            { text: 'Ottawa', correct: true },
            { text: 'Montreal', correct: false }
        ]
    },
    {
        question: 'Welches Vitamin wird in der Haut durch Sonneneinstrahlung produziert?',
        answers: [
            { text: 'Vitamin C', correct: false },
            { text: 'Vitamin B12', correct: false },
            { text: 'Vitamin D', correct: true },
            { text: 'Vitamin A', correct: false }
        ]
    },
    {
        question: 'Welches Land hat die längste Küstenlinie der Welt?',
        answers: [
            { text: 'Kanada', correct: true },
            { text: 'Australien', correct: false },
            { text: 'Russland', correct: false },
            { text: 'Indonesien', correct: false }
        ]
    },
    {
        question: 'Welches Material wird hauptsächlich zur Herstellung von Glas verwendet?',
        answers: [
            { text: 'Marmor', correct: false },
            { text: 'Quarz', correct: true },
            { text: 'Graphit', correct: false },
            { text: 'Gips', correct: false }
        ]
    },
    {
        question: 'Wie viele Ringe sind im Symbol der Olympischen Spiele zu sehen?',
        answers: [
            { text: '4', correct: false },
            { text: '6', correct: false },
            { text: '5', correct: true },
            { text: '7', correct: false }
        ]
    },
    {
        question: 'Was ist die chemische Formel von Wasser?',
        answers: [
            { text: 'H2O', correct: true },
            { text: 'CO2', correct: false },
            { text: 'O2', correct: false },
            { text: 'HO2', correct: false }
        ]
    }
]

const hardQuestions = [
    {
        question: 'Welcher Planet hat den größten Mond in unserem Sonnensystem?',
        answers: [
            { text: 'Saturn', correct: false },
            { text: 'Jupiter', correct: true },
            { text: 'Neptun', correct: false },
            { text: 'Uranus', correct: false }
        ]
    },
    {
        question: 'Wer schrieb das Werk "Die Geburtsstunde der Tragödie aus dem Geiste der Musik"?',
        answers: [
            { text: 'Friedrich Nietzsche', correct: true },
            { text: 'Arthur Schopenhauer', correct: false },
            { text: 'Immanuel Kant', correct: false },
            { text: 'Jean-Paul Sartre', correct: false }
        ]
    },
    {
        question: 'Welches Element ist das schwerste in natürlicher Form vorkommende chemische Element?',
        answers: [
            { text: 'Blei', correct: false },
            { text: 'Uran', correct: true },
            { text: 'Plutonium', correct: false },
            { text: 'Quecksilber', correct: false }
        ]
    },
    {
        question: 'Welche Sprache wurde am "Rosetta Stone" verwendet, um Hieroglyphen zu entziffern?',
        answers: [
            { text: 'Latein', correct: false },
            { text: 'Griechisch', correct: true },
            { text: 'Hebräisch', correct: false },
            { text: 'Arabisch', correct: false }
        ]
    },
    {
        question: 'Wer gilt als der "Vater der modernen Physik"?',
        answers: [
            { text: 'Albert Einstein', correct: true },
            { text: 'Isaac Newton', correct: false },
            { text: 'Galileo Galilei', correct: false },
            { text: 'Niels Bohr', correct: false }
        ]
    },
    {
        question: 'Welcher Herrscher begründete das Mongolische Reich?',
        answers: [
            { text: 'Dschingis Khan', correct: true },
            { text: 'Kublai Khan', correct: false },
            { text: 'Timur Lenk', correct: false },
            { text: 'Attila der Hunne', correct: false }
        ]
    },
    {
        question: 'In welchem Jahr endete das Römische Reich (westlicher Teil)?',
        answers: [
            { text: '476 n. Chr.', correct: true },
            { text: '410 n. Chr.', correct: false },
            { text: '395 n. Chr.', correct: false },
            { text: '500 n. Chr.', correct: false }
        ]
    },
    {
        question: 'Wie heißt der größte Ozean der Welt?',
        answers: [
            { text: 'Indischer Ozean', correct: false },
            { text: 'Atlantischer Ozean', correct: false },
            { text: 'Arktischer Ozean', correct: false },
            { text: 'Pazifischer Ozean', correct: true }
        ]
    },
    {
        question: 'Wer entwickelte die allgemeine Relativitätstheorie?',
        answers: [
            { text: 'Isaac Newton', correct: false },
            { text: 'Niels Bohr', correct: false },
            { text: 'Albert Einstein', correct: true },
            { text: 'Galileo Galilei', correct: false }
        ]
    },
    {
        question: 'Welches ist das kleinste Säugetier der Welt?',
        answers: [
            { text: 'Zwergmaus', correct: false },
            { text: 'Goldener Maulwurf', correct: false },
            { text: 'Bumblebee Fledermaus', correct: true },
            { text: 'Kleiner Spitzmaul', correct: false }
        ]
    },
    {
        question: 'Welcher Physiker entwickelte das erste Atommodell?',
        answers: [
            { text: 'Erwin Schrödinger', correct: false },
            { text: 'James Chadwick', correct: false },
            { text: 'Niels Bohr', correct: true },
            { text: 'Werner Heisenberg', correct: false }
        ]
    },
    {
        question: 'Welches Organ ist beim Menschen für die Insulinproduktion verantwortlich?',
        answers: [
            { text: 'Leber', correct: false },
            { text: 'Milz', correct: false },
            { text: 'Niere', correct: false },
            { text: 'Bauchspeicheldrüse', correct: true }
        ]
    },
    {
        question: 'Wer gilt als der Begründer der Psychoanalyse?',
        answers: [
            { text: 'Sigmund Freud', correct: true },
            { text: 'Carl Jung', correct: false },
            { text: 'Jean Piaget', correct: false },
            { text: 'Alfred Adler', correct: false }
        ]
    },
    {
        question: 'Wie lautet der Name des Wissenschaftlers, der die DNA-Struktur entdeckte?',
        answers: [
            { text: 'Gregor Mendel', correct: false },
            { text: 'Charles Darwin', correct: false },
            { text: 'James Watson', correct: true },
            { text: 'Rosalind Franklin', correct: false }
        ]
    },
    {
        question: 'Welcher Künstler ist für das Gemälde "Die Erschaffung Adams" bekannt?',
        answers: [
            { text: 'Leonardo da Vinci', correct: false },
            { text: 'Raphael', correct: false },
            { text: 'Sandro Botticelli', correct: false },
            { text: 'Michelangelo', correct: true }
        ]
    },
    {
        question: 'Welcher Physiker entdeckte die Gesetze des Elektromagnetismus?',
        answers: [
            { text: 'Nikola Tesla', correct: false },
            { text: 'Michael Faraday', correct: false },
            { text: 'James Clerk Maxwell', correct: true },
            { text: 'Thomas Edison', correct: false }
        ]
    },
    {
        question: 'Welches ist das giftigste Tier der Welt?',
        answers: [
            { text: 'Inlandtaipan', correct: true },
            { text: 'Steinfisch', correct: false },
            { text: 'Schwarze Witwe', correct: false },
            { text: 'Pfeilgiftfrosch', correct: false }
        ]
    },
    {
        question: 'In welchem Jahr startete der erste bemannte Flug ins All?',
        answers: [
            { text: '1957', correct: false },
            { text: '1965', correct: false },
            { text: '1961', correct: true },
            { text: '1969', correct: false }
        ]
    },
    {
        question: 'Welches ist die tiefste Stelle im Ozean?',
        answers: [
            { text: 'Marianengraben', correct: true },
            { text: 'Puerto-Rico-Graben', correct: false },
            { text: 'Java-Graben', correct: false },
            { text: 'Tonga-Graben', correct: false }
        ]
    },
    {
        question: 'Wie heißt der Berg mit dem höchsten Gipfel über dem Meeresspiegel?',
        answers: [
            { text: 'K2', correct: false },
            { text: 'Mount Everest', correct: true },
            { text: 'Kangchenjunga', correct: false },
            { text: 'Makalu', correct: false }
        ]
    }
]

const veryHardQuestions = [
    {
        question: 'Welcher Mathematiker bewies den Satz von Fermat nach über 350 Jahren?',
        answers: [
            { text: 'Andrew Wiles', correct: true },
            { text: 'Carl Friedrich Gauß', correct: false },
            { text: 'Pierre-Simon Laplace', correct: false },
            { text: 'Évariste Galois', correct: false }
        ]
    },
    {
        question: 'Welches ist das einzige Element, das in flüssiger Form sowohl Glas als auch Stahl auflösen kann?',
        answers: [
            { text: 'Fluorwasserstoffsäure', correct: true },
            { text: 'Schwefelsäure', correct: false },
            { text: 'Salzsäure', correct: false },
            { text: 'Salpetersäure', correct: false }
        ]
    },
    {
        question: 'Wie viele unterschiedliche Arten von Quarks gibt es im Standardmodell der Teilchenphysik?',
        answers: [
            { text: '6', correct: true },
            { text: '4', correct: false },
            { text: '8', correct: false },
            { text: '10', correct: false }
        ]
    },
    {
        question: 'Wer entwickelte das Konzept der "Noether-Theoreme" in der theoretischen Physik?',
        answers: [
            { text: 'Emmy Noether', correct: true },
            { text: 'Lise Meitner', correct: false },
            { text: 'Marie Curie', correct: false },
            { text: 'Rosalind Franklin', correct: false }
        ]
    },
    {
        question: 'Welche Quasarklasse hat die höchste beobachtete Rotverschiebung?',
        answers: [
            { text: 'Blazare', correct: false },
            { text: 'Radiolaute Quasare', correct: false },
            { text: 'ULIRGs (Ultra Luminous Infrared Galaxies)', correct: false },
            { text: 'Lyman-alpha-Emitter', correct: true }
        ]
    },
    {
        question: 'Welcher Chemiker entdeckte das Element "Technetium", das erste künstlich hergestellte Element?',
        answers: [
            { text: 'Emilio Segrè', correct: true },
            { text: 'Dmitri Mendelejew', correct: false },
            { text: 'Marie Curie', correct: false },
            { text: 'Glenn T. Seaborg', correct: false }
        ]
    },
    {
        question: 'Welches Tier hat die größte Anzahl an Chromosomenpaaren?',
        answers: [
            { text: 'Amerikanische Farnpflanze (Ophioglossum reticulatum)', correct: true },
            { text: 'Mensch', correct: false },
            { text: 'Elefant', correct: false },
            { text: 'Blattlaus', correct: false }
        ]
    },
    {
        question: 'In welcher Sprache wurde der Code der ersten programmierten Maschine (Analytical Engine) von Charles Babbage geschrieben?',
        answers: [
            { text: 'Kein Code, sondern Lochkarten', correct: true },
            { text: 'Maschinenassembler', correct: false },
            { text: 'Fortran', correct: false },
            { text: 'Algol', correct: false }
        ]
    },
    {
        question: 'Welcher Stern in der Milchstraße hat die höchste bekannte Metallizität?',
        answers: [
            { text: '2MASS J18082002–5104378 B', correct: true },
            { text: 'HD 140283 (Methuselah-Stern)', correct: false },
            { text: 'Alpha Centauri', correct: false },
            { text: 'Proxima Centauri', correct: false }
        ]
    },
    {
        question: 'Was ist das seltenste stabile Isotop auf der Erde?',
        answers: [
            { text: 'Tellur-128', correct: true },
            { text: 'Rhenium-187', correct: false },
            { text: 'Uran-238', correct: false },
            { text: 'Krypton-85', correct: false }
        ]
    },
    {
        question: 'Welches ist das älteste bekannte literarische Werk der Menschheit?',
        answers: [
            { text: 'Das Gilgamesch-Epos', correct: true },
            { text: 'Die Ilias', correct: false },
            { text: 'Die Bibel', correct: false },
            { text: 'Beowulf', correct: false }
        ]
    },
    {
        question: 'Wie viele Permutationen gibt es für ein 20-stelliges Zahlensystem?',
        answers: [
            { text: '2.432.902.008.176.640.000', correct: true },
            { text: '243.290.200.817.664.000', correct: false },
            { text: '20.922.789.888.000', correct: false },
            { text: '4.000.004.000.000', correct: false }
        ]
    },
    {
        question: 'Welche kosmische Struktur hat die größte beobachtete Ausdehnung im Universum?',
        answers: [
            { text: 'The Sloan Great Wall', correct: true },
            { text: 'Hercules-Corona Borealis Great Wall', correct: false },
            { text: 'Virgo-Superhaufen', correct: false },
            { text: 'Laniakea-Superhaufen', correct: false }
        ]
    },
    {
        question: 'Wie viele Proteinstrukturen sind derzeit in der Protein Data Bank (PDB) katalogisiert?',
        answers: [
            { text: 'Über 190.000', correct: true },
            { text: 'Über 500.000', correct: false },
            { text: 'Über 50.000', correct: false },
            { text: 'Über 1 Million', correct: false }
        ]
    },
    {
        question: 'Welcher planetare Nebel hat die komplexeste bekannte Struktur?',
        answers: [
            { text: 'NGC 6543 (Katzenaugennebel)', correct: true },
            { text: 'Helix-Nebel', correct: false },
            { text: 'Ring-Nebel', correct: false },
            { text: 'Dumbbell-Nebel', correct: false }
        ]
    },
    {
        question: 'Was ist der Begriff für die mathematische Theorie der idealen Gase, entwickelt von Ludwig Boltzmann?',
        answers: [
            { text: 'Statistische Mechanik', correct: true },
            { text: 'Thermodynamik', correct: false },
            { text: 'Quantenmechanik', correct: false },
            { text: 'Klassische Mechanik', correct: false }
        ]
    },
    {
        question: 'Welches Element hat die höchste elektrische Leitfähigkeit?',
        answers: [
            { text: 'Silber', correct: true },
            { text: 'Kupfer', correct: false },
            { text: 'Gold', correct: false },
            { text: 'Platin', correct: false }
        ]
    },
    {
        question: 'Welcher Galaxientyp ist der häufigste im Universum?',
        answers: [
            { text: 'Elliptische Galaxien', correct: true },
            { text: 'Spiralgalaxien', correct: false },
            { text: 'Linsenförmige Galaxien', correct: false },
            { text: 'Irreguläre Galaxien', correct: false }
        ]
    },
    {
        question: 'Welches biologische Organ hat die höchste Regenerationsfähigkeit?',
        answers: [
            { text: 'Leber', correct: true },
            { text: 'Haut', correct: false },
            { text: 'Knochenmark', correct: false },
            { text: 'Lunge', correct: false }
        ]
    },
    {
        question: 'Welche Theorie beschreibt die Expansion des Universums mit einer beschleunigten Geschwindigkeit?',
        answers: [
            { text: 'Dunkle Energie', correct: true },
            { text: 'Dunkle Materie', correct: false },
            { text: 'Kosmologische Konstante', correct: false },
            { text: 'Quantenfluktuationen', correct: false }
        ]
    }
]

// Initialisieren des FragenIndex
let currentQuestionIndex = 0;

// Initialisieren der Doc-Constanten
const questionElement = document.getElementById('question');
const topGrid = document.getElementById('button-gridTop');
const bottomGrid = document.getElementById('button-gridBottom');
const priceElement = document.getElementById('current-price');

// Initialisieren des Reset- und MM-Knopfs und setzen der EventListener

function setMenueButtons(){
    //const menueKnoepfe = document.getElementById('menuebuttons');
    const resetButton = document.getElementById('resetButton');
    resetButton.addEventListener('click', endGame);
    const backToMainPageButton = document.getElementById('backToMainPageButton');
    backToMainPageButton.addEventListener('click', backToMainPageFunction);

}
// back to Main Page Function
function backToMainPageFunction(){
    window.location.href = "./html_mainPage_WWM.html";
}

// Deklarieren der Variablen
// Preis
let price;
// Fragen-Arrays
let veryhardQuestionArray = [];
let hardQuestionArray = [];
let averageQuestionArray = [];
let easyQuestionArray = [];
// Derzeitiger Stand
let selectedIndexes;
// Fragen-Counter
let veryHardCounter;
let hardCounter;
let averageCounter;
let easyCounter;

// Start-Game Funktion. Hier soll die Localstorage nach 
// gespeicherten informationen geprüft werden

function startGame() {
    // Localstorage Check
    const savedprice = localStorage.getItem('price');
    const savedIndex = localStorage.getItem('currentQuestionIndex');
    
    // Extrahieren des Fragen-Stands aus dem Localstorage
    if (savedIndex){
        currentQuestionIndex = parseInt(savedIndex, 10);
    } else {
        currentQuestionIndex = 0;
    }
    
    // Extrahieren des Gewinns aus dem Localstorage
    if (savedprice !== null) {
        price = parseInt(savedprice, 10);
        priceElement.innerText = "" + price + " €";
    } else {
        price = 0;
    }

    // Laden der Fragen aus dem Localstorage
    const savedVeryHardQuestions = localStorage.getItem('veryhardQuestionArray');
    const savedHardQuestions = localStorage.getItem('hardQuestionArray');
    const savedAverageQuestions = localStorage.getItem('averageQuestionArray');
    const savedEasyQuestions = localStorage.getItem('easyQuestionArray');
    // Laden der Fragencounter aus dem Localstorage
    const veryHardQCounter = localStorage.getItem('veryHardQCounter')
    const hardQCounter = localStorage.getItem('hardQCounter')
    const averageQCounter = localStorage.getItem('averageQCounter')
    const easyQCounter = localStorage.getItem('easyQCounter')
    // Setzen der Fragenarrays falls Localstorage vorhanden war
    if (savedVeryHardQuestions && savedHardQuestions && savedAverageQuestions && savedEasyQuestions) {
        veryhardQuestionArray = JSON.parse(savedVeryHardQuestions);
        hardQuestionArray = JSON.parse(savedHardQuestions);
        averageQuestionArray = JSON.parse(savedAverageQuestions);
        easyQuestionArray = JSON.parse(savedEasyQuestions);
        // Ansonsten: Erstellen neuer Fragen
    } else {
        setQuestions();
    }
    
    // Setzen der Fragencounter falls Localstorage vorhanden war
    if(veryHardQCounter && hardQCounter && averageQCounter && easyQCounter){
        veryHardCounter = JSON.parse(veryHardQCounter);
        hardCounter = JSON.parse(hardQCounter);
        averageCounter = JSON.parse(averageQCounter);
        easyCounter = JSON.parse(easyQCounter);
    }
    else{
        veryHardCounter = 0;
        hardCounter = 0;
        averageCounter = 0;
        easyCounter = 0;
    
        // Ansetzen der nächsten Frage
    }
    setMenueButtons();
    setNextQuestion();
}

// Funktion zum beenden des spiels, leeren der localstorage und neuladen der Seite
function endGame() {
    localStorage.clear();
    window.location.reload();
}

// Die 20 ist die derzeitige statisch eingetragene Array-Länge der Frage-Arrays
// Es wird zufaellig eine Zahl zwischen 0 und 19 generiert und abgerundet
function getRandomIndex() {
    return Math.floor(Math.random() * 20);
}

// Diese Funktion stellt NICHT sicher, dass alle Question-Arrays gleich lang sind. 
// "Zufaellig" hat jedes Array 20 fragen

function setQuestions(){
    // Erstellen eines Index-Sets
    selectedIndexes = new Set();
    // Fuellen der Question-Arrays -> Solange das Array 5 oder weniger
    // einzigartige Zahlen aufweist, wird das Array befuellt
    while (selectedIndexes.size <= 5){
        selectedIndexes.add(getRandomIndex());
    }
    
    // Die Question-Arrays werden alle mit Fragen befuellt indem die 
    // generierten Indizes die Hardcodierten Fragen durchlaufen
    const selectedArray = Array.from(selectedIndexes);
    for(let i = 0; i < selectedArray.length; i++){
        veryhardQuestionArray[i] = veryHardQuestions[selectedArray[i]];
        hardQuestionArray[i] = hardQuestions[selectedArray[i]];
        averageQuestionArray[i] = averageQuestions[selectedArray[i]];
        easyQuestionArray[i] = easyQuestions[selectedArray[i]];
    }
    
    // Die selektierten Fragen werden als Item in die Localstorage gespeichert
    localStorage.setItem('veryhardQuestionArray', JSON.stringify(veryhardQuestionArray));
    localStorage.setItem('hardQuestionArray', JSON.stringify(hardQuestionArray));
    localStorage.setItem('averageQuestionArray', JSON.stringify(averageQuestionArray));
    localStorage.setItem('easyQuestionArray', JSON.stringify(easyQuestionArray));
}

// Diese Funktion setzt die naechsten Fragen
function setNextQuestion() {
    // Uebergabe des derzeitigen Fragenindex in die Localstorage
    localStorage.setItem('currentQuestionIndex', JSON.stringify(currentQuestionIndex))
    localStorage.setItem('veryHardQCounter', JSON.stringify(veryHardCounter));
    localStorage.setItem('hardQCounter', JSON.stringify(hardCounter));
    localStorage.setItem('averageQCounter', JSON.stringify(averageCounter));
    localStorage.setItem('easyQCounter', JSON.stringify(easyCounter));
    
    // leeren der Antwort-Container
    resetState();

    // festlegen anhand des Index', welche Art von Frage eingebaut wird
    if(currentQuestionIndex >= 14){
        showQuestion(veryhardQuestionArray[veryHardCounter]);
        veryHardCounter++;}
    else if(currentQuestionIndex > 10){
        showQuestion(hardQuestionArray[hardCounter]);
        hardCounter++;
    }
    else if(currentQuestionIndex > 5){
        showQuestion(averageQuestionArray[averageCounter]);
        averageCounter++;
    }
    else {
        showQuestion(easyQuestionArray[easyCounter])
        easyCounter++;
    }
}

// Funktion zum befuellen des Fragen-containers
function showQuestion(question) {
    questionElement.innerText = question.question;
    const grid1 = document.getElementById('button-gridTop');
    const grid2 = document.getElementById('button-gridBottom');
    
    // durchlaufen der Antwort-container und befuellen mit neuen Antworten
    for (let i = 0; i < question.answers.length; i++) {
        const answer = question.answers[i];
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        
        // festlegen der richtigen Antwort
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        // setzen des Listeners
        button.addEventListener('click', selectAnswer);
        
        // aufteilen der Buttons in oberes und unteres Gitter
        if (i < 2) {
            grid1.appendChild(button);
        } else {
            grid2.appendChild(button);
        }
    }
}
// Funktion zum leeren der Antwort-container
function resetState() {
    while (topGrid.firstChild || bottomGrid.firstChild) {
        topGrid.removeChild(topGrid.firstChild);
        bottomGrid.removeChild(bottomGrid.firstChild);
    }
}

// Abfrage ob die ausgewaehlte Antwort korrekt war.
function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    if(correct) {
        currentQuestionIndex++;
        alert('Richtig!');
        price = price + 1;
        priceElement.innerText = ""+ price + " €";
        localStorage.setItem('price', price);
    } else {
        alert('Falsch! Das Spiel ist vorbei.');
        alert('Dein erspieltes Preisgeld beträgt: ' + price + ' €');
        priceElement.innerText = ""+ price + " €";
        price = 0;
        endGame();
        return;
    }
    if (currentQuestionIndex <= 15) {
        setNextQuestion();
    } else {
        alert('Du hast das Quiz beendet!');
        endGame();
    }
}

function restart() {
    
}

startGame();