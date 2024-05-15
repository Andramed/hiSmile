const comments = [
    {
        id:'0',
        user:"Marina Boicenco",
        avatar: "./image/avatarMarina.svg",
        comment: "„Am fost sceptic după ce am încercat diverse produse fără succes și am avut gingii sensibile. Totuși, după doar două utilizări, văd deja efectul mult dorit! Aplic doar pentru 30 secunde, iar dinții mei sunt vizibil mai albi. Recomand 100% – își merită în totalitate banii, iar sticla are dimensiuni generoase!”"
    },
    {
        id:'1',
        user:"Ana-Maria Parahonco",
        avatar: "./image/avatarAnaMaria.svg",
        comment: "„Chiar și după doar 2-3 utilizări, am observat o diferență enormă. Dacă l-aș fi folosit de 2-3 ori pe săptămână sau mai des, sunt sigur că dinții mei ar arăta mult mai strălucitori. Nu caut dinți albi ca la celebrități, dar cu toate acestea, v34 a eliminat unele pete de durată. Aș recomanda cu siguranță!”"

    },
    {
        id:'2',
        user:"Artemie Pavlov",
        avatar: "./image/avatarArtemie.svg",
        comment: "„Am fost surprins de cât de repede a funcționat, mi-am pus puțin pe periuța de dinți și am făcut o periere rapidă și rezultatele au fost imediate, așa că, am făcut-o a doua oară și am lăsat-o să stea câteva minute și dinții mi-au devenit și mai albi. . Este destul de uimitor și nu costă mult pentru rezultatele pe care le oferă.”"

    },
    {
        id:'3',
        user:"Marina Boicenco",
        avatar: "./image/avatarMarina.svg",
        comment: "„Am fost sceptic după ce am încercat diverse produse fără succes și am avut gingii sensibile. Totuși, după doar două utilizări, văd deja efectul mult dorit! Aplic doar pentru 30 secunde, iar dinții mei sunt vizibil mai albi. Recomand 100% – își merită în totalitate banii, iar sticla are dimensiuni generoase!”"
    },
    {
        id:'5',
        user:"Ana-Maria Parahonco",
        avatar: "./image/avatarAnaMaria.svg",
        comment: "„Chiar și după doar 2-3 utilizări, am observat o diferență enormă. Dacă l-aș fi folosit de 2-3 ori pe săptămână sau mai des, sunt sigur că dinții mei ar arăta mult mai strălucitori. Nu caut dinți albi ca la celebrități, dar cu toate acestea, v34 a eliminat unele pete de durată. Aș recomanda cu siguranță!”"

    },
    {
        id:'5',
        user:"Artemie Pavlov",
        avatar: "./image/avatarArtemie.svg",
        comment: "„Am fost surprins de cât de repede a funcționat, mi-am pus puțin pe periuța de dinți și am făcut o periere rapidă și rezultatele au fost imediate, așa că, am făcut-o a doua oară și am lăsat-o să stea câteva minute și dinții mi-au devenit și mai albi. . Este destul de uimitor și nu costă mult pentru rezultatele pe care le oferă.”"

    },
]

const questionsAnswer = [
    {
        id:1,
        question: "Ce este v34 și cum funcționează?",
        answer: "v34 este un tratament de înălbire conceput pentru a ascunde temporar petele, concentrându-se în special pe tonurile galbene ale dinților tăi.",
        isOpen: false
    },
    {
        id:2,
        question:"Ce este inclus în cutie?",
        answer: "v34 este un tratament de înălbire conceput pentru a ascunde temporar petele",
        isOpen: false

    },
    {
        id:3,
        question:"Când ar trebui să folosesc v34?",
        answer: "v34 este un tratament de înălbire conceput pentru a ascunde temporar petele",
        isOpen: false

    },
    {
        id:4,
        question:"Pot folosi v34 cu fațete, cape, implanturi sau punți?",
        answer:"v34 este un tratament de înălbire conceput pentru a ascunde temporar petele",
        isOpen: false

    }

]

const districts = [
    {   
        id:0,
        name: "Anenii Noi",
        villages: ["Anenii Noi", "Balmaz", "Batăr", "Bîc", "Bucovăț", "Butuceni", "Chetrosu", "Cîrpești", "Cupcui", "Fîrlădeni", "Gura Bîcului", "Gura Galbenei", "Hănășenii Noi", "Holercani", "Mălăiești", "Mîndrești", "Roșcani", "Tătărăuca Nouă", "Zahorna"]
    },
    {
        id: 1,
        name: "Bălți", // Numele raionului următor
        villages: ["Bălți", "Vadul-Leca", "Slobozia-Mare", "Cristeștii-Noi", "Bălțata"] // Lista de sate pentru raionul "Bălți"
    },
    {
        id: 2,
        name: "Briceni",
        villages: ["Bălțata", "Bănești", "Beleavînți", "Bolohan", "Cerlina", "Chiurt", "Cotușca", "Cristești", "Cupcini", "Dumbrăveni", "Druța", "Frumoasa", "Găinăuți", "Găvănoasa", "Glodeni", "Goleni", "Grușeni", "Hăsnășenii Mari", "Hlinaia", "Izvoare", "Mărcăuți", "Mihălășeni", "Moșana", "Năvîrneț", "Pelinia", "Popești", "Porumbeni", "Sculeni", "Seliște", "Șendreni", "Știubeieni", "Tătărăuca Veche", "Tocuz", "Vorniceni", "Zăicani"]
    },
    {
        id: 3,
        name: "Cahul",
        cities: ["Cahul"],
        villages: ["Alexandru Ioan Cuza", "Aluatu", "Antonești", "Baimaclia", "Brînza", "Budești", "Bulboaca", "Cahul", "Cahul", "Cîrpești", "Cîrpești", "Colibași", "Doina", "Dolna", "Ferapontievca", "Frumușica", "Găvănoasa", "Ghiliceni", "Ghidirim", "Hiliuți", "Hirbovat", "Iujnoe", "Larga", "Lebedenco", "Leuntea", "Lopatna", "Manta", "Mîndra", "Munteni", "Plop", "Purcari", "Sarata", "Sărătenii Noi", "Seliștea Nouă", "Tănătari", "Tartaul de Salcie", "Tartaul de Sus", "Ucrainca", "Ustia"]
    },
    {
        id: 4,
        name: "Călărași",
        cities: ["Călărași"],
        villages: ["Călărași", "Buda", "Frasin", "Ghiduleni", "Mihailovca", "Peresecina", "Pitușca", "Sofia", "Sverida"]
    },
    {
        id: 5,
        name: "Căușeni",
        cities: ["Căușeni"],
        villages: ["Căușeni", "Alexanderfeld", "Baurci", "Beșghioz", "Borceag", "Căușeni", "Cazaclia", "Ciocîlteni", "Cîrnățeni", "Gîsca", "Ialpug", "Lebedenco", "Manta", "Mihailovca", "Sofia", "Valcinet"]
    },

    {
        id: 6,
        name: "Cimișlia",
        cities: ["Cimișlia"],
        villages: ["Cimișlia", "Caraclău", "Chirca", "Cotovscoe", "Cotul Morii", "Crihana Veche", "Cubolta", "Elizaveta", "Larga Nouă", "Larga Veche", "Mărculești", "Moscovei", "Munteni", "Rădenii Vechi", "Rădenii Vechi", "Răscăieți", "Selemet", "Slobozia Nouă", "Slobozia Veche", "Stolniceni", "Șerpeni", "Tocuz", "Tocuz"]
    },
    {
        id: 7,
        name: "Criuleni",
        cities: ["Criuleni"],
        villages: ["Criuleni", "Bocancea", "Boghiceni", "Colosova", "Costești", "Coșcalia", "Cuhnești", "Doltu", "Dumitreni", "Ghiduleni", "Mândrești", "Mărășești", "Mălăiești", "Nistorești", "Ratuș", "Sălcuța", "Săseni", "Vatra"]
    },
    {
        id: 8,
        name: "Dondușeni",
        cities: ["Dondușeni"],
        villages: ["Dondușeni", "Bocșa", "Brătușeni", "Chirilovca", "Chirilovca Nouă", "Dobrogea Nouă", "Dolna", "Făgădău", "Făgădău Nou", "Fîntîna Albă", "Fîntîna Nouă", "Fîntîna Veche", "Ivanovca", "Ivanovca Nouă", "Malaesti", "Mihălășeni", "Mîndra", "Nihoreni", "Țîmpul Nou", "Țîmpul Vechi", "Valea Mare"]
    },
    {
        id: 9,
        name: "Drochia",
        cities: ["Drochia"],
        villages: ["Drochia", "Borogani", "Cervencaia", "Coteala", "Cuhneștii Noi", "Danu", "Drujineni", "Drujinenii Noi", "Frasin", "Gordinești", "Lazo", "Mihăileni", "Mihăilenii Noi", "Molești", "Roșietici", "Roșieticii Noi", "Scăieni", "Seliște", "Șendreni", "Șuri", "Țîra", "Ursari"]
    }
]

export  {comments, questionsAnswer, districts};

