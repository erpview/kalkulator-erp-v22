export interface ERPSystem {
  name: string;
  vendor: string;
  website: string;
  description: string;
  size: string[];
}

export const systems: ERPSystem[] = [
  {
    name: "ABAS ERP",
    vendor: "Abas Business Solutions Poland Sp. z o.o.",
    website: "https://abas-erp.com/pl/produkt",
    description: "Abas ERP to zaawansowany system klasy ERP, dedykowany średnim i dużym przedsiębiorstwom produkcyjnym. Oferuje kompleksowe moduły zarządzania produkcją, finansami, logistyką, sprzedażą, zakupami oraz relacjami z klientami (CRM). System integruje kluczowe procesy biznesowe, umożliwiając efektywne planowanie, kontrolę i analizę działań operacyjnych. Dzięki elastycznej architekturze, Abas ERP można dostosować do specyficznych potrzeb firmy, co pozwala na optymalizację procesów i zwiększenie konkurencyjności na rynku",
    size: ["Średnie", "Duże"]
  },
  {
    name: "Comarch EGERIA",
    vendor: "COMARCH S.A.",
    website: "https://egeria.comarch.pl/",
    description: "Comarch ERP Egeria to zaawansowany system klasy ERP, dedykowany jednostkom administracji publicznej, uczelniom wyższym, instytucjom zdrowia oraz przedsiębiorstwom użyteczności publicznej. Oferuje moduły wspierające zarządzanie finansami, księgowością, kadrami, logistyką, remontami i inwestycjami, a także obsługę procesów edukacyjnych. Dzięki modułowej budowie, system można elastycznie dostosować do specyficznych potrzeb organizacji, zapewniając pełną integrację procesów, bezpieczeństwo danych oraz zgodność z obowiązującymi przepisami prawa. Comarch ERP Egeria wspiera podejmowanie decyzji poprzez rozbudowane raporty i narzędzia analityczne, co przyczynia się do zwiększenia efektywności i optymalizacji kosztów w zarządzanych jednostkach.",
    size: ["Średnie", "Duże"]
  },
  {
    name: "Comarch ERP XL",
    vendor: "COMARCH S.A.",
    website: "https://www.comarch.pl/erp/xl/",
    description: "Comarch ERP XL to zaawansowany system klasy ERP, dedykowany średnim i dużym przedsiębiorstwom z różnych branż, takich jak produkcja, handel czy usługi. Dzięki modułowej budowie, umożliwia elastyczne dopasowanie funkcjonalności do specyficznych potrzeb firmy. Kluczowe obszary obejmują zarządzanie produkcją, handlem, gospodarką magazynową, finansami, księgowością, kadrami i płacami. System wspiera również integrację z Krajowym Systemem e-Faktur (KSeF), co ułatwia spełnianie wymogów prawnych. Dodatkowo, Comarch ERP XL oferuje narzędzia analityczne i raportowe, wspomagające proces podejmowania decyzji oraz optymalizację procesów biznesowych.",
    size: ["Małe", "Średnie", "Duże"]
  },
  {
    name: "Comarch ERP Altum",
    vendor: "COMARCH S.A.",
    website: "https://www.comarch.pl/erp/comarch-altum/",
    description: "Comarch ERP Altum to zaawansowany system klasy ERP, stworzony z myślą o średnich i dużych przedsiębiorstwach, w tym firmach zagranicznych, sieciach sprzedaży detalicznej, sieciach franczyzowych oraz organizacjach holdingowych. System oferuje moduły wspierające zarządzanie finansami, księgowością, logistyką, sprzedażą, magazynem, kadrami i płacami. Dzięki wbudowanym narzędziom Business Intelligence oraz mechanizmom automatyzacji procesów (BPM), Comarch ERP Altum umożliwia podejmowanie decyzji opartych na analizach i prognozach, a także automatyzację rutynowych czynności. System jest dostępny w wersji chmurowej, co pozwala na pracę z dowolnego miejsca z dostępem do internetu.",
    size: ["Małe", "Średnie", "Duże"]
  },
  {
    name: "Comarch ERP Enterprise",
    vendor: "COMARCH S.A.",
    website: "https://www.comarch.pl/erp/enterprise/",
    description: "Comarch ERP Enterprise to zaawansowany system dedykowany średnim i dużym przedsiębiorstwom, które poszukują automatyzacji oraz wsparcia w zarządzaniu skomplikowanymi procesami biznesowymi. Idealnie sprawdza się zarówno w pojedynczych firmach, jak i w grupach kapitałowych działających na rynku krajowym i międzynarodowym. System wyróżnia się możliwością obsługi dużych wolumenów danych, elastycznością integracji oraz możliwością tworzenia dedykowanych rozwiązań branżowych. Dzięki dostępowi przez przeglądarkę internetową, Comarch ERP Enterprise zapewnia niezależność technologiczną, co zaspokaja potrzeby zarówno biznesu, jak i działów IT.",
    size: ["Średnie", "Duże"]
  },
  {
    name: "Comarch ERP Optima",
    vendor: "COMARCH S.A.",
    website: "https://www.comarch.pl/erp/comarch-optima/",
    description: "Comarch ERP Optima to kompleksowy system ERP stworzony z myślą o małych i średnich firmach z różnych branż. Umożliwia zarządzanie finansami, księgowością, kadrami, płacami, handlem, magazynem oraz relacjami z klientami. System wspiera obsługę procesów sprzedaży, ewidencję VAT, naliczanie wynagrodzeń oraz planowanie produkcji. Dzięki elastycznej architekturze i intuicyjnemu interfejsowi, pozwala na efektywne dostosowanie do specyficznych potrzeb przedsiębiorstwa. Comarch ERP Optima jest dostępny również w chmurze, co umożliwia dostęp z dowolnego miejsca, zapewniając zgodność z przepisami prawa i wspierając rozwój firmy.",
    size: ["Małe", "Średnie"]
  },
  {
    name: "Comarch ERP XT",
    vendor: "COMARCH S.A.",
    website: "https://www.erpxt.pl/",
    description: "Comarch ERP XT to nowoczesny system zarządzania, stworzony z myślą o małych firmach i jednoosobowych działalnościach gospodarczych. Oferuje funkcje takie jak wystawianie faktur online, prowadzenie księgowości w formie ryczałtu, księgi podatkowej lub handlowej, obsługę magazynu oraz integrację z Krajowym Systemem e-Faktur (KSeF). Dzięki technologii opartej na sztucznej inteligencji, umożliwia wprowadzanie dokumentów za pomocą zdjęć, a zaawansowane raportowanie wspiera analizę wyników firmy. Dostępny w polskiej chmurze, zapewnia bezpieczny dostęp z dowolnego miejsca poprzez aplikacje mobilne lub przeglądarkę internetową.",
    size: ["Małe"]
  },
  {
    name: "Corax",
    vendor: "Humansoft Sp. z o.o.",
    website: "https://humansoft.pl/programy-dla-malych-firm/",
    description: "Corax to nowoczesny system ERP stworzony przez firmę Humansoft, dedykowany małym i średnim przedsiębiorstwom z branż handlowych, produkcyjnych oraz usługowych. System integruje kluczowe obszary działalności firmy, oferując moduły do zarządzania sprzedażą, obsługi klientów, gospodarki magazynowej, finansów, księgowości oraz kadr i płac. Dzięki elastycznej architekturze, Corax dostosowuje się do specyficznych potrzeb przedsiębiorstwa, wspierając efektywne planowanie, kontrolę i optymalizację procesów biznesowych. System współpracuje z platformami e-commerce, B2B oraz narzędziami analitycznymi Business Intelligence, co umożliwia kompleksowe zarządzanie działalnością i zwiększa konkurencyjność firmy na rynku.",
    size: ["Małe"]
  },
  {
    name: "CSB BASIC ERP",
    vendor: "CSB-System Polska Sp. z o.o.",
    website: "https://www.csb.com/pl/oprogramowanie/csb-basic-erp",
    description: "CSB BASIC ERP to gotowe rozwiązanie branżowe stworzone z myślą o małych i średnich przedsiębiorstwach. System integruje kluczowe obszary działalności firmy, takie jak produkcja, logistyka, sprzedaż i finanse, w jednym zintegrowanym środowisku. Dzięki dostępności w chmurze, minimalizuje koszty infrastruktury IT i eliminuje potrzebę posiadania wewnętrznego działu IT. Implementacja systemu trwa niespełna miesiąc, a koszty wdrożenia są niższe o 80% w porównaniu z tradycyjnymi systemami ERP. CSB BASIC ERP odwzorowuje specyfikę branży i najważniejsze procesy w wersji standardowej, co pozwala na szybkie i efektywne zarządzanie przedsiębiorstwem.",
    size: ["Małe", "Średnie"]
  },
  {
    name: "CSB FACTORY ERP",
    vendor: "CSB-System Polska Sp. z o.o.",
    website: "https://www.csb.com/pl/oprogramowanie/csb-factory-erp",
    description: "CSB FACTORY ERP to specjalistyczny system ERP przeznaczony dla zakładów produkcyjnych w grupach przedsiębiorstw i koncernach. Stanowi uzupełnienie centralnego ERP Grupy, odwzorowując cały łańcuch produkcyjno-logistyczny w zakładach. System oferuje funkcje integracji z wagami, optymalizacji receptur oraz dokumentowania kontroli pochodzenia produktów. Dzięki standardowym interfejsom zapewnia stabilne i elastyczne środowisko systemowe, umożliwiając pełną przejrzystość i efektywność procesów produkcyjnych.",
    size: ["Średnie", "Duże"]
  },
  {
    name: "CSB INDUSTRY ERP",
    vendor: "CSB-System Polska Sp. z o.o.",
    website: "https://www.csb.com/pl/oprogramowanie/csb-industry-erp",
    description: "CSB INDUSTRY ERP to kompleksowe rozwiązanie dedykowane średnim i dużym przedsiębiorstwom z branż takich jak spożywcza, chemiczna, farmaceutyczna czy kosmetyczna. System integruje wszystkie obszary łańcucha wartości, od produkcji po sprzedaż, zapewniając pełną przejrzystość procesów. Dzięki modułowej budowie i wysokiej skalowalności, CSB INDUSTRY ERP można dostosować do specyficznych potrzeb firmy, co pozwala na efektywne zarządzanie zasobami i optymalizację operacji biznesowych.",
    size: ["Średnie", "Duże"]
  },
  {
    name: "Deltek Workbook",
    vendor: "Todis Consulting Group Sp. z o.o.",
    website: "https://todis.pl/rozwiazanie/workbook/",
    description: "Deltek WorkBook to kompleksowe narzędzie stworzone z myślą o agencjach reklamowych, digitalowych i PR, niezależnie od ich wielkości. System integruje zarządzanie projektami, finansami oraz zasobami ludzkimi w jednym, zintegrowanym środowisku. Oferuje funkcje takie jak planowanie projektów, zarządzanie zadaniami, prognozowanie, fakturowanie oraz karty czasu pracy. Dzięki elastycznym narzędziom, takim jak tablice Kanban i integracja z kalendarzem Outlook, WorkBook umożliwia efektywne zarządzanie zadaniami i czasem. Dodatkowo, portal klienta pozwala na bieżącą współpracę i komunikację z klientami, co zwiększa przejrzystość i efektywność realizowanych projektów.",
    size: ["Małe", "Średnie"]
  },
  {
    name: "DIGITLAND ENTERPRISE",
    vendor: "Digitland",
    website: "https://www.digitland.pl/produkty/digitland-enterprise/",
    description: "DIGITLAND ENTERPRISE to zaawansowany system klasy ERP/MRPII, dedykowany średnim i dużym przedsiębiorstwom z różnych branż. Oferuje ponad 200 modułów, w tym zarządzanie finansami, księgowością, kadrami, płacami, sprzedażą, zakupami, magazynem, produkcją, CRM oraz logistyką. System zapewnia wysokie bezpieczeństwo pracy, szybkie wykonywanie operacji oraz możliwość tworzenia własnych raportów i zestawień. Dzięki otwartej architekturze klient/serwer i terminalowej, DIGITLAND ENTERPRISE można dostosować do specyficznych potrzeb przedsiębiorstwa, co pozwala na efektywne zarządzanie procesami biznesowymi i zwiększenie konkurencyjności na rynku.",
    size: ["Średnie", "Duże"]
  },
  {
    name: "DIGITLAND EX",
    vendor: "Digitland",
    website: "https://www.digitland.pl/produkty/digitland-ex/",
    description: "DIGITLAND EX to nowoczesny system ERP zaprojektowany specjalnie dla średnich przedsiębiorstw. Łączy zaawansowaną technologię z intuicyjną obsługą, wspierając efektywne zarządzanie wszystkimi aspektami działalności firmy. System oferuje ponad 200 modułów, w tym zarządzanie finansami, księgowością, kadrami, płacami, sprzedażą, zakupami, magazynem, produkcją, CRM oraz logistyką. Dzięki architekturze klient/serwer i terminalowej, DIGITLAND EX zapewnia szybkie i sprawne operacje, wysokie bezpieczeństwo danych oraz możliwość tworzenia raportów dostosowanych do indywidualnych potrzeb przedsiębiorstwa.",
    size: ["Średnie"]
  },
  {
    "name": "DIGITLAND JUNIOR",
    "vendor": "Digitland ",
    "website": "https://www.digitland.pl/produkty/digitland-junior/",
    "description": "DIGITLAND JUNIOR to intuicyjny program komputerowy stworzony z myślą o małych firmach handlowych, które rozliczają się z fiskusem na podstawie Podatkowej Księgi Przychodów i Rozchodów. System umożliwia generowanie dokumentów sprzedaży, korekt ilościowych i wartościowych, wydruk rejestrów sprzedaży i zakupów VAT oraz tworzenie plików JPK w układzie miesięcznym i kwartalnym. Dodatkowo, oferuje funkcje takie jak rejestr dłużników i wierzycieli, obsługę kasy, zestawienia wynikowe, rejestr banków i walut, śledzenie przeterminowanych płatności oraz rozliczanie utargu za dany okres. Program obsługuje do trzech magazynów, sprzedaż odręczną i współpracuje z drukarką fiskalną POSNET. DIGITLAND JUNIOR nie wymaga skomplikowanego wdrożenia, a jego obsługę można szybko opanować dzięki załączonej instrukcji. Produkt oparty jest na darmowej wersji bazy danych Oracle i może być wykorzystywany w firmach, w których wielkość danych nie przekracza 10 GB.",
    "size": [
      "Małe"
    ]
  },
  {
    "name": "enova365",
    "vendor": "Soneta Sp. z o. o.",
    "website": "https://www.enova.pl/",
    "description": "Enova365 to nowoczesny system ERP, który integruje kluczowe obszary działalności przedsiębiorstwa, takie jak finanse, księgowość, kadry, płace, handel, magazyn, produkcja oraz zarządzanie projektami. Dzięki modułowej budowie i elastycznym funkcjom, enova365 dostosowuje się do specyficznych potrzeb firm, wspierając efektywne planowanie, kontrolę i optymalizację procesów biznesowych. Integracja z narzędziami Business Intelligence umożliwia zaawansowaną analizę danych, co przekłada się na lepsze decyzje strategiczne i operacyjne.",
    "size": [
      "Małe",
      "Średnie",
      "Duże"
    ]
  },
  {
    "name": "Epicor iScala",
    "vendor": "Todis Consulting Group Sp. z o.o. ",
    "website": "https://todis.pl/rozwiazanie/epicor-iscala/",
    "description": "Epicor iScala to kompleksowy system ERP zaprojektowany dla średnich przedsiębiorstw produkcyjnych, handlowych i usługowych, wspierający ich rozwój i globalną ekspansję. System oferuje moduły zarządzania finansami, łańcuchem dostaw, produkcją, projektami, danymi produktów, serwisem, kapitałem ludzkim, sprzedażą oraz relacjami z klientami (CRM). Dzięki elastycznej architekturze, iScala umożliwia integrację z innymi aplikacjami oraz efektywny przepływ informacji między jednostkami organizacyjnymi i partnerami biznesowymi. Dostępność w 36 wersjach językowych sprawia, że system doskonale sprawdza się w międzynarodowych organizacjach, zapewniając spójność procesów i danych na globalną skalę.",
    "size": [
      "Małe",
      "Średnie",
      "Duże"
    ]
  },
  {
    "name": "Epicor Kinect ERP",
    "vendor": "Todis Consulting Group Sp. z o.o. ",
    "website": "https://todis.pl/rozwiazanie/epicor-kinetic-erp/",
    "description": "Epicor Kinetic to zaawansowany system ERP stworzony z myślą o średnich i dużych przedsiębiorstwach z branż produkcyjnych, dystrybucyjnych oraz usługowych. Dzięki modułowej budowie, umożliwia elastyczne dopasowanie funkcjonalności do specyficznych potrzeb firmy, obejmując zarządzanie finansami, relacjami z klientami (CRM), sprzedażą, łańcuchem dostaw, produkcją, planowaniem i harmonogramowaniem, danymi produktów, projektami, serwisem, majątkiem oraz kapitałem ludzkim. System wspiera globalne zarządzanie firmą, zapewniając zgodność z przepisami oraz narzędzia analityczne i Business Intelligence. Epicor Kinetic oferuje różne modele wdrożenia: lokalne, hostowane lub chmurowe w modelu SaaS, co pozwala na dostosowanie do indywidualnych wymagań przedsiębiorstwa.",
    "size": [
      "Średnie",
      "Duże"
    ]
  },
  {
    "name": "ERP Berberis",
    "vendor": "BMS Creative Sp. z o.o.",
    "website": "https://bms.krakow.pl/",
    "description": "ERP Berberis to wszechstronny system zarządzania przedsiębiorstwem, dedykowany zarówno małym, średnim, jak i dużym firmom z różnych branż, takich jak produkcja, handel czy usługi. System integruje kluczowe obszary działalności, oferując moduły CRM, sprzedaży, gospodarki magazynowej, serwisu oraz produkcji. Dzięki elastycznej konfiguracji, Berberis dostosowuje się do specyficznych potrzeb przedsiębiorstw, wspierając efektywne planowanie, kontrolę i optymalizację procesów biznesowych. Dodatkowo, system umożliwia definiowanie procedur, śledzenie procesów oraz integrację z aplikacjami mobilnymi, co zwiększa wydajność pracy zespołów i poprawia jakość obsługi klientów.",
    "size": [
      "Małe",
      "Średnie",
      "Duże"
    ]
  },
  {
    "name": "ERP ODL",
    "vendor": "ODL Sp. z o.o.",
    "website": "https://odl.com.pl/",
    "description": "System ERP ODL to zaawansowane oprogramowanie dedykowane firmom handlowym, szczególnie z branży odzieżowej, obuwniczej, jubilerskiej oraz wyposażenia wnętrz. Jest odpowiedni zarówno dla małych, jak i dużych przedsiębiorstw posiadających od kilku do kilkuset punktów sprzedaży oraz e-commerce. System oferuje moduły zarządzania sprzedażą detaliczną (POS), sprzedażą B2B, magazynem i logistyką, obsługą serwisu, finansami i księgowością, środkami trwałymi oraz raportami i analizami. Dzięki centralnemu gromadzeniu, przetwarzaniu i udostępnianiu danych, ERP ODL umożliwia pełną kontrolę nad procesami biznesowymi, automatyzację powtarzalnych czynności oraz integrację z popularnymi platformami e-commerce, co pozwala na szybkie dostosowanie się do zmieniających się potrzeb rynku.",
    "size": [
      "Małe",
      "Średnie",
      "Duże"
    ]
  },
  {
    "name": "ERPframe",
    "vendor": "GSD Software Polska Sp. z o.o.",
    "website": "https://gsd.pl/products/erpframe",
    "description": "ERPframe to kompleksowy system ERP stworzony przez firmę GSD, dedykowany średnim i dużym przedsiębiorstwom z różnych branż. Integruje kluczowe obszary działalności firmy, takie jak sprzedaż, zakupy, gospodarka materiałowa, produkcja, finanse oraz księgowość. Dzięki elastycznej architekturze, ERPframe dostosowuje się do specyficznych potrzeb przedsiębiorstwa, wspierając efektywne planowanie, kontrolę i optymalizację procesów biznesowych. System umożliwia automatyzację procesów, zarządzanie relacjami z klientami (CRM) oraz integrację z e-commerce, co zwiększa konkurencyjność i efektywność operacyjną firmy.",
    "size": [
      "Średnie",
      "Duże"
    ]
  },
  {
    "name": "Exact Globe",
    "vendor": "Exact Software Poland Sp. z o.o.",
    "website": "https://www.exact.com/pl/software/exact-globe",
    "description": "Exact Globe+ to zaawansowany system ERP dedykowany średnim i dużym przedsiębiorstwom, integrujący kluczowe procesy biznesowe w jednym rozwiązaniu. Oferuje moduły zarządzania finansami, produkcją, logistyką, projektami oraz usługami, zapewniając pełną kontrolę nad operacjami firmy. System umożliwia integrację z rozwiązaniami CRM, HRM i BPM, co pozwala na kompleksowe zarządzanie relacjami z klientami, zasobami ludzkimi oraz procesami biznesowymi. Dostępny w ponad 40 językach, Exact Globe+ wspiera działalność międzynarodową, dostosowując się do lokalnych przepisów i standardów. Dzięki nowoczesnej technologii i intuicyjnemu interfejsowi, system ułatwia podejmowanie trafnych decyzji opartych na aktualnych danych, wspierając rozwój i konkurencyjność przedsiębiorstwa.",
    "size": [
      "Średnie",
      "Duże"
    ]
  },
  {
    "name": "Exact Synergy",
    "vendor": "Exact Software Poland Sp. z o.o.",
    "website": "https://www.exact.com/pl/software/exact-synergy",
    "description": "Exact Synergy to zaawansowana platforma biznesowa dedykowana średnim i dużym przedsiębiorstwom, integrująca kluczowe procesy w jednym systemie. Oferuje moduły zarządzania relacjami z klientami (CRM), zasobami ludzkimi (HRM) oraz procesami biznesowymi (BPM). System umożliwia automatyzację i kontrolę przepływu pracy, zarządzanie dokumentami oraz projektami, zapewniając pełną integrację z rozwiązaniami finansowymi i ERP. Dzięki dostępowi przez przeglądarkę internetową oraz aplikacjom mobilnym, Exact Synergy wspiera efektywną współpracę zespołów, ułatwia komunikację i zwiększa przejrzystość procesów biznesowych, co przekłada się na lepsze zarządzanie firmą.",
    "size": [
      "Średnie",
      "Duże"
    ]
  },
  {
    "name": "GardensERP",
    "vendor": "Gardens-Software Sp. z o.o.",
    "website": "https://gardens-software.com/",
    "description": "GardensERP to zaawansowany system klasy ERP, dedykowany dynamicznie rozwijającym się firmom różnej wielkości—od małych po duże przedsiębiorstwa. Oferuje moduły zarządzania produkcją, sprzedażą, finansami, kadrami, magazynem oraz CRM, integrując wszystkie procesy biznesowe w jednym środowisku. Dzięki wbudowanej platformie rozwoju aplikacji (IDE GAM), umożliwia elastyczne dostosowywanie funkcjonalności do specyficznych potrzeb klienta, wspierając efektywne zarządzanie i optymalizację procesów operacyjnych.",
    "size": [
      "Małe",
      "Średnie",
      "Duże"
    ]
  },
  {
    "name": "Graffiti.ERP",
    "vendor": "Graffiti.ERP SA",
    "website": "https://graffiti-erp.pl/public/system-erp/graffiti-erp",
    "description": "Graffiti.ERP to elastyczny system klasy ERP, zaprojektowany z myślą o średnich i dużych przedsiębiorstwach produkcyjnych oraz handlowych. Oferuje rozbudowane narzędzia planowania produkcji, zarządzania zasobami logistycznymi, a także moduły CRM, obsługę wieloetapowych zadań zespołowych oraz analitykę biznesową (Business Intelligence). Dzięki modułowej konstrukcji, system można dostosować do specyficznych potrzeb branżowych, takich jak przetwórstwo spożywcze, przedsiębiorstwa remontowe czy firmy transportowe, co pozwala na optymalizację procesów i zwiększenie efektywności operacyjnej.",
    "size": [
      "Średnie",
      "Duże"
    ]
  },
  {
    "name": "HERMES",
    "vendor": "Syriusz Sp. z o.o.",
    "website": "https://www.syriusz.eu/produkty/hermes",
    "description": "Hermes to zaawansowany system zarządzania gospodarką magazynową, stworzony przez firmę Syriusz, dedykowany małym i średnim przedsiębiorstwom handlowym. System obsługuje firmy wielomagazynowe i wielooddziałowe, działające zarówno w sieciach lokalnych, jak i rozległych. Hermes integruje kluczowe procesy biznesowe, oferując elastyczną konfigurację obiegu dokumentów, definiowalny wygląd dokumentów przychodu i rozchodu, możliwość tworzenia własnych cech kartoteki magazynowej oraz budowania indywidualnych analiz. Dodatkowo, system współpracuje z drukarkami fiskalnymi, czytnikami kodów kreskowych, kolektorami danych i wagami, co zwiększa efektywność operacyjną przedsiębiorstwa.",
    "size": [
      "Małe",
      "Średnie"
    ]
  },
  {
    "name": "HermesSQL",
    "vendor": "Humansoft Sp. z o.o.",
    "website": "https://humansoft.pl/system-erp/",
    "description": "HermesSQL to zaawansowany system ERP stworzony przez firmę Humansoft, dedykowany średnim i dużym przedsiębiorstwom z branż handlowych, produkcyjnych oraz usługowych. System integruje kluczowe obszary działalności firmy, oferując moduły do zarządzania sprzedażą, dystrybucją, logistyką, gospodarką magazynową (w tym WMS), produkcją, finansami, księgowością, kadrami i płacami. Dzięki elastycznej architekturze, HermesSQL dostosowuje się do specyficznych potrzeb przedsiębiorstwa, wspierając efektywne planowanie, kontrolę i optymalizację procesów biznesowych. System współpracuje z platformami e-commerce, B2B oraz narzędziami analitycznymi Business Intelligence, co umożliwia kompleksowe zarządzanie działalnością i zwiększa konkurencyjność firmy na rynku.",
    "size": [
      "Średnie",
      "Duże"
    ]
  },
  {
    "name": "IDEA ERP",
    "vendor": "IDEA commerce S.A. ",
    "website": "https://idea-commerce.com/ideaerp/",
    "description": "IDEAerp to nowoczesny, w pełni webowy system ERP stworzony z myślą o firmach działających w branży e-commerce, niezależnie od ich wielkości. Dzięki elastycznej architekturze, system dostosowuje się zarówno do potrzeb małych, średnich, jak i dużych przedsiębiorstw, umożliwiając efektywne zarządzanie sprzedażą, zamówieniami oraz gospodarką magazynową. IDEAerp integruje się z popularnymi platformami sprzedażowymi, takimi jak Allegro, eBay czy Amazon, co pozwala na centralne zarządzanie ofertami i automatyzację procesów sprzedażowych. System oferuje moduły wspierające produkcję, CRM, księgowość oraz analitykę biznesową, umożliwiając kompleksowe zarządzanie przedsiębiorstwem. Dzięki pracy w chmurze, użytkownicy mają dostęp do systemu z dowolnego miejsca i urządzenia, co zwiększa elastyczność i efektywność operacyjną firmy.",
    "size": [
      "Małe",
      "Średnie",
      "Duże"
    ]
  },
  {
    "name": "IFS Cloud",
    "vendor": "IFS Industrial and Financial Systems Poland Sp. z o.o.",
    "website": "https://www.ifs.com/pl/ifs-cloud/ifs-cloud-overview",
    "description": "IFS Cloud to zaawansowana platforma ERP przeznaczona dla średnich i dużych przedsiębiorstw z branż takich jak produkcja, energetyka, budownictwo, lotnictwo oraz sektor usługowy. System integruje kluczowe obszary działalności firmy, oferując moduły do zarządzania finansami, łańcuchem dostaw, produkcją, serwisem w terenie, zarządzaniem majątkiem oraz kapitałem ludzkim. Dzięki elastycznej architekturze, IFS Cloud umożliwia dostosowanie funkcjonalności do specyficznych potrzeb przedsiębiorstwa, wspierając efektywne planowanie, kontrolę i optymalizację procesów biznesowych. Wbudowane narzędzia analityczne oraz sztuczna inteligencja pozwalają na podejmowanie trafnych decyzji opartych na aktualnych danych, co zwiększa konkurencyjność i efektywność operacyjną firmy. ",
    "size": [
      "Średnie",
      "Duże"
    ]
  },
  {
    "name": "Impuls EVO 1.5",
    "vendor": "Biuro Projektowania Systemów Cyfrowych Sp. z o.o. ",
    "website": "https://www.bpsc.com.pl/pl/produkt/erp-bpsc",
    "description": "Impuls EVO 1.5 to nowoczesny system ERP stworzony przez firmę BPSC, dedykowany średnim i dużym przedsiębiorstwom produkcyjnym oraz handlowo-usługowym. System oferuje moduły wspierające zarządzanie produkcją, finansami, księgowością, kadrami, płacami, logistyką oraz relacjami z klientami (CRM). Dzięki elastycznej architekturze, Impuls EVO 1.5 dostosowuje się do specyficznych potrzeb branżowych, umożliwiając efektywne planowanie, kontrolę i optymalizację procesów biznesowych. Integracja z narzędziami analitycznymi oraz aplikacjami mobilnymi pozwala na bieżący dostęp do kluczowych danych, wspierając podejmowanie trafnych decyzji i zwiększając konkurencyjność przedsiębiorstwa.",
    "size": [
      "Małe",
      "Średnie",
      "Duże"
    ]
  },
  {
    "name": "Infor LN",
    "vendor": "INFOR (POLSKA) SP Z O.O.",
    "website": "https://www.infor.com/pl-pl/solutions/erp/ln",
    "description": "Infor LN to zaawansowany system ERP przeznaczony dla średnich i dużych przedsiębiorstw produkcyjnych, zwłaszcza z branż takich jak lotnictwo i obrona, motoryzacja, elektronika oraz przemysł maszynowy. System integruje kluczowe obszary działalności firmy, oferując moduły do zarządzania finansami, łańcuchem dostaw, produkcją, projektami oraz serwisem. Dzięki elastycznej architekturze, Infor LN umożliwia dostosowanie funkcjonalności do specyficznych potrzeb przedsiębiorstwa, wspierając efektywne planowanie, kontrolę i optymalizację procesów biznesowych. System jest dostępny zarówno w wersji on-premise, jak i w chmurze, co pozwala na elastyczne wdrożenie i skalowanie w zależności od wymagań firmy.",
    "size": [
      "Średnie",
      "Duże"
    ]
  },
  {
    "name": "Infor M3",
    "vendor": "iPCC sp. z o. o.",
    "website": "https://i-pcc.pl/system-erp-infor-m3/",
    "description": "Infor M3 to zaawansowany system ERP przeznaczony dla średnich i dużych przedsiębiorstw z branż takich jak spożywcza, chemiczna, modowa, meblarska oraz dystrybucyjna. System integruje kluczowe obszary działalności firmy, oferując moduły do zarządzania produkcją, logistyką, finansami, planowaniem popytu oraz konfiguracją wyrobów. Dzięki elastycznej architekturze, Infor M3 umożliwia dostosowanie funkcjonalności do specyficznych potrzeb przedsiębiorstwa, wspierając efektywne planowanie, kontrolę i optymalizację procesów biznesowych. System jest dostępny zarówno w wersji on-premise, jak i w chmurze, co pozwala na elastyczne wdrożenie i skalowanie w zależności od wymagań firmy.",
    "size": [
      "Średnie",
      "Duże"
    ]
  },
  {
    "name": "InsERT nexo PRO+",
    "vendor": "InseERT S.A.",
    "website": "https://www.insert.com.pl/programy_dla_firm/insert_nexo/nexo_pro_plus.html",
    "description": "InsERT nexo PRO+ to zaawansowany system ERP stworzony z myślą o średnich i dużych przedsiębiorstwach oraz firmach o specyficznych wymaganiach. Składa się z czterech modułów: Dokumenty PRO+, Widoczność danych PRO+, Sfera PRO+ oraz Raportowanie PRO+. Moduły te umożliwiają zaawansowaną pracę z dokumentami, ograniczanie widoczności wybranych informacji, korzystanie z narzędzi programistycznych oraz rozbudowane raportowanie. Dzięki elastycznej architekturze, InsERT nexo PRO+ można dostosować do indywidualnych potrzeb firmy, co pozwala na efektywne zarządzanie procesami biznesowymi i zwiększenie konkurencyjności na rynku.",
    "size": [
      "Małe",
      "Średnie"
    ]
  },
  {
    "name": "ISOF-ERP",
    "vendor": "HEUTHES sp. z o.o.",
    "website": "https://www.isof.pl/",
    "description": "ISOF-ERP to nowoczesny system zarządzania przedsiębiorstwem, dedykowany małym, średnim i dużym firmom z różnych branż. Oferuje moduły wspierające kluczowe obszary działalności, takie jak sprzedaż, magazynowanie, logistyka, CRM, DMS, rachunkowość, produkcja oraz kadry i płace. Dzięki elastycznej architekturze, system dostosowuje się do specyficznych potrzeb przedsiębiorstwa, umożliwiając efektywne planowanie, kontrolę i optymalizację procesów biznesowych. ISOF-ERP jest dostępny w modelu chmurowym, co zapewnia bezpieczny dostęp z dowolnego miejsca i urządzenia. Integracja z e-commerce, portalami B2B oraz narzędziami analitycznymi wspiera kompleksowe zarządzanie firmą, zwiększając jej konkurencyjność na rynku.",
    "size": [
      "Małe",
      "Średnie",
      "Duże"
    ]
  },
  {
    "name": "MAAT ",
    "vendor": "COMP Soft Sp. z o.o.",
    "website": "https://compsoft.pl/produkty/",
    "description": "MAAT to zaawansowany system ERP stworzony przez firmę COMP Soft, dedykowany średnim i dużym przedsiębiorstwom, ze szczególnym uwzględnieniem firm produkcyjnych. System oferuje moduły zarządzania finansami, logistyką, produkcją oraz kadrami i płacami. Dzięki modułowej budowie, MAAT umożliwia elastyczne dostosowanie funkcjonalności do specyficznych potrzeb przedsiębiorstwa, wspierając efektywne planowanie, kontrolę i optymalizację procesów biznesowych. System integruje kluczowe obszary działalności firmy, zapewniając spójność danych i usprawniając przepływ informacji. Dodatkowo, MAAT wspiera zarządzanie relacjami z klientami oraz dostawcami, co przyczynia się do zwiększenia konkurencyjności przedsiębiorstwa na rynku.",
    "size": [
      "Średnie",
      "Duże"
    ]
  },
  {
    "name": "Maconomy ERP",
    "vendor": "Todis Consulting Group Sp. z o.o. ",
    "website": "https://todis.pl/rozwiazanie/maconomy/",
    "description": "Deltek Maconomy to zaawansowany system ERP zaprojektowany specjalnie dla średnich i dużych firm z sektora usług profesjonalnych, takich jak agencje reklamowe, firmy doradcze, informatyczne, badawcze oraz kancelarie prawne. System integruje kluczowe obszary działalności przedsiębiorstwa, oferując moduły do zarządzania projektami, finansami, zasobami ludzkimi, relacjami z klientami (CRM) oraz pełną księgowością i analizą finansową. Dzięki elastycznej architekturze, Maconomy umożliwia dostosowanie funkcjonalności do specyficznych potrzeb organizacji, wspierając efektywne planowanie, kontrolę i optymalizację procesów biznesowych. System jest dostępny zarówno w wersji on-premise, jak i w chmurze, co pozwala na elastyczne wdrożenie i skalowanie w zależności od wymagań firmy.",
    "size": [
      "Średnie",
      "Duże"
    ]
  },
  {
    "name": "Madar 7 ",
    "vendor": "Madar Sp. z o.o.",
    "website": "http://madar.com.pl/madar7.html",
    "description": "Madar 7 to kompleksowy system ERP zaprojektowany dla mikro, małych i średnich przedsiębiorstw oraz organizacji, umożliwiający pracę przez internet. Oferuje moduły do pełnej księgowości, w tym prowadzenia pełnych ksiąg, KPiR oraz ewidencji ryczałtowej, a także zarządzania środkami trwałymi i rozliczeń VAT. System integruje funkcje handlu, magazynowania, produkcji, kadr i płac oraz elektronicznego obiegu dokumentów, wspierając efektywne zarządzanie procesami biznesowymi. Dzięki pracy w chmurze, Madar 7 zapewnia bezpieczny dostęp do danych z dowolnego miejsca i urządzenia, co zwiększa elastyczność i mobilność użytkowników.",
    "size": [
      "Małe",
      "Średnie"
    ]
  },
  {
    "name": "MAKS ERP SYSTEM",
    "vendor": "Softmaks.pl",
    "website": "https://softmaks.pl/produkty/maks-v-erp/",
    "description": "MAKS ERP SYSTEM to polskie oprogramowanie klasy ERP, przeznaczone dla firm różnej wielkości: małych, średnich i dużych, działających w sektorach handlu, usług oraz produkcji. System oferuje moduły zarządzania finansami i księgowością, płatnościami, sprzedażą, zaopatrzeniem, logistyką, produkcją oraz kontrolą jakości. Dodatkowo, wspiera elektroniczny obieg dokumentów i obsługę kodów kreskowych. Dzięki bieżącym aktualizacjom, MAKS ERP SYSTEM zapewnia zgodność z obowiązującymi przepisami prawa, co ułatwia przedsiębiorstwom efektywne zarządzanie procesami biznesowymi.",
    "size": [
      "Małe",
      "Średnie"
    ]
  },
  {
    "name": "Merit ERP",
    "vendor": "Asseco Business Solutions S.A.",
    "website": "https://assecobs.pl",
    "description": "Merit ERP to nowoczesny, procesowy system zarządzania przedsiębiorstwem, oferujący moduły do obsługi finansów, księgowości, logistyki, sprzedaży, produkcji, magazynu (WMS) oraz HR. Dzięki elastycznej architekturze, dostosowuje się do potrzeb średnich i dużych firm, wspierając efektywne planowanie, kontrolę i optymalizację procesów biznesowych. Integracja z platformami e-commerce oraz narzędziami analitycznymi umożliwia kompleksowe zarządzanie działalnością, zwiększając konkurencyjność i efektywność operacyjną przedsiębiorstwa.",
    "size": [
      "Małe",
      "Średnie",
      "Duże"
    ]
  },
  {
    "name": "Microsoft Dynamics 365",
    "vendor": "Microsoft Sp. z o.o.",
    "website": "https://www.microsoft.com/pl-pl/dynamics-365/",
    "description": "Microsoft Dynamics 365 to zintegrowana platforma aplikacji biznesowych, łącząca funkcje ERP i CRM, dedykowana dla firm różnej wielkości—od małych po duże przedsiębiorstwa. System oferuje moduły zarządzania finansami, sprzedażą, obsługą klienta, marketingiem, operacjami, zasobami ludzkimi oraz łańcuchem dostaw. Dzięki elastycznej architekturze i integracji z innymi usługami Microsoft, takimi jak Office 365, Azure czy Power Platform, Dynamics 365 umożliwia dostosowanie funkcjonalności do specyficznych potrzeb przedsiębiorstwa, wspierając efektywne planowanie, kontrolę i optymalizację procesów biznesowych. Dostępny w chmurze, system zapewnia skalowalność, bezpieczeństwo oraz dostęp z dowolnego miejsca i urządzenia, co zwiększa konkurencyjność i efektywność operacyjną firmy.",
    "size": [
      "Średnie",
      "Duże"
    ]
  },
  {
    "name": "Microsoft Dynamics 365 Business Central",
    "vendor": "Microsoft Sp. z o.o.",
    "website": "https://www.microsoft.com/pl-pl/dynamics-365/products/business-central",
    "description": "Microsoft Dynamics 365 Business Central to kompleksowy system ERP zaprojektowany z myślą o małych i średnich przedsiębiorstwach, integrujący kluczowe obszary działalności firmy. Oferuje moduły zarządzania finansami, sprzedażą, zakupami, magazynem, produkcją, projektami oraz obsługą klienta. Dzięki elastycznej architekturze i integracji z innymi usługami Microsoft, takimi jak Office 365, system umożliwia dostosowanie funkcjonalności do specyficznych potrzeb przedsiębiorstwa, wspierając efektywne planowanie, kontrolę i optymalizację procesów biznesowych. Dostępny w chmurze, Business Central zapewnia skalowalność, bezpieczeństwo oraz dostęp z dowolnego miejsca i urządzenia, co zwiększa konkurencyjność i efektywność operacyjną firmy.",
    "size": [
      "Małe",
      "Średnie"
    ]
  },
  {
    "name": "MiS ERP",
    "vendor": "SAI",
    "website": "https://mis.sai.com.pl/",
    "description": "MiS ERP to elastyczny system zarządzania zasobami przedsiębiorstwa, stworzony przez firmę SAI, dedykowany małym i średnim firmom handlowym oraz handlowo-produkcyjnym. System integruje kluczowe obszary działalności, oferując moduły do zarządzania sprzedażą, magazynem, produkcją, finansami, księgowością, kadrami i płacami. Dzięki możliwości personalizacji, MiS ERP dostosowuje się do specyficznych potrzeb przedsiębiorstwa, wspierając efektywne planowanie, kontrolę i optymalizację procesów biznesowych. System wspiera innowacyjne technologie, takie jak wielokanałowość, mobilność, RFID oraz IoT, co zwiększa konkurencyjność i efektywność operacyjną firmy.",
    "size": [
      "Małe",
      "Średnie"
    ]
  },
  {
    "name": "Modus ERP",
    "vendor": "RHO Software",
    "website": "https://rho.pl/modus-erp/",
    "description": "Modus ERP to zaawansowany system zarządzania przedsiębiorstwem, stworzony przez firmę RHO Software, dedykowany głównie średnim i dużym firmom produkcyjnym. System integruje kluczowe obszary działalności, oferując moduły do zarządzania produkcją, gospodarką magazynową, zamówieniami, sprzedażą, projektami oraz dokumentacją. Dzięki wbudowanym funkcjom RCP i MES, Modus ERP umożliwia precyzyjne planowanie, realizację i rozliczanie procesów produkcyjnych. System wspiera również zarządzanie flotą, trasami transportowymi oraz utrzymaniem parku maszynowego. Elastyczna architektura pozwala na dostosowanie funkcjonalności do specyficznych potrzeb przedsiębiorstwa, co zwiększa efektywność operacyjną i konkurencyjność na rynku.",
    "size": [
      "Średnie",
      "Duże"
    ]
  },
  {
    "name": "Monitor ERP",
    "vendor": "Monitor ERP System Polska Sp. z o.o.",
    "website": "https://www.monitorerp.com/pl/",
    "description": "Monitor ERP to kompleksowy system planowania zasobów przedsiębiorstwa, zaprojektowany z myślą o małych i średnich firmach produkcyjnych. System integruje kluczowe obszary działalności, oferując moduły zarządzania produkcją, sprzedażą, zakupami, magazynem, rejestracją czasu pracy oraz księgowością. Dzięki elastycznej architekturze, Monitor ERP dostosowuje się do specyficznych potrzeb przedsiębiorstwa, wspierając efektywne planowanie, kontrolę i optymalizację procesów biznesowych. System jest dostępny zarówno w wersji on-premise, jak i w chmurze, co pozwala na elastyczne wdrożenie i skalowanie w zależności od wymagań firmy.",
    "size": [
      "Małe",
      "Średnie",
      "Duże"
    ]
  },
  {
    "name": "Navireo",
    "vendor": "InseERT S.A.",
    "website": "https://www.navireo.pl/",
    "description": "Navireo to nowoczesny system ERP stworzony przez firmę InsERT, dedykowany średnim i dużym przedsiębiorstwom z różnych branż. Oferuje moduły zarządzania sprzedażą, magazynem, finansami, księgowością, kadrami i płacami, a także relacjami z klientami (CRM). System integruje kluczowe procesy biznesowe, umożliwiając efektywne planowanie, kontrolę i analizę działań operacyjnych. Dzięki elastycznej architekturze, Navireo można dostosować do specyficznych potrzeb firmy, co pozwala na optymalizację procesów i zwiększenie konkurencyjności na rynku.",
    "size": [
      "Małe",
      "Średnie"
    ]
  },
  {
    "name": "Oracle E-Business Suite",
    "vendor": "Oracle Sp. z o.o.",
    "website": "https://www.oracle.com/pl/applications/ebusiness/",
    "description": "Oracle E-Business Suite to kompleksowy system ERP przeznaczony głównie dla średnich i dużych przedsiębiorstw z różnych branż. Integruje kluczowe obszary działalności firmy, oferując moduły do zarządzania finansami, łańcuchem dostaw, produkcją, zasobami ludzkimi oraz relacjami z klientami. Dzięki elastycznej architekturze, system umożliwia dostosowanie funkcjonalności do specyficznych potrzeb przedsiębiorstwa, wspierając efektywne planowanie, kontrolę i optymalizację procesów biznesowych. Oracle E-Business Suite jest dostępny zarówno w wersji on-premise, jak i w chmurze, co pozwala na elastyczne wdrożenie i skalowanie w zależności od wymagań firmy. ",
    "size": [
      "Średnie",
      "Duże"
    ]
  },
  {
    "name": "Oracle Fusion Cloud ERP ",
    "vendor": "Oracle Sp. z o.o.",
    "website": "https://www.oracle.com/erp/",
    "description": "Oracle Fusion Cloud ERP to zaawansowany system planowania zasobów przedsiębiorstwa, przeznaczony dla średnich i dużych firm z różnych branż. Integruje kluczowe obszary działalności, oferując moduły do zarządzania finansami, łańcuchem dostaw, projektami, zakupami oraz ryzykiem. Dzięki elastycznej architekturze i regularnym aktualizacjom, system dostosowuje się do specyficznych potrzeb przedsiębiorstwa, wspierając efektywne planowanie, kontrolę i optymalizację procesów biznesowych. Oracle Fusion Cloud ERP jest dostępny w modelu chmurowym, co zapewnia skalowalność, bezpieczeństwo oraz dostęp z dowolnego miejsca i urządzenia, zwiększając konkurencyjność i efektywność operacyjną firmy. ",
    "size": [
      "Średnie",
      "Duże"
    ]
  },
  {
    "name": "Oracle JD Edwards",
    "vendor": "Oracle Sp. z o.o.",
    "website": "https://www.oracle.com/pl/applications/jd-edwards-enterpriseone/",
    "description": "racle JD Edwards EnterpriseOne to zaawansowany system ERP przeznaczony dla średnich i dużych przedsiębiorstw z różnych branż, takich jak produkcja, dystrybucja, budownictwo czy usługi. System oferuje ponad 80 modułów, w tym zarządzanie finansami, łańcuchem dostaw, produkcją, projektami, zasobami ludzkimi oraz relacjami z klientami. Dzięki elastycznej architekturze, JD Edwards EnterpriseOne umożliwia dostosowanie funkcjonalności do specyficznych potrzeb przedsiębiorstwa, wspierając efektywne planowanie, kontrolę i optymalizację procesów biznesowych. System jest dostępny zarówno w wersji on-premise, jak i w chmurze, co pozwala na elastyczne wdrożenie i skalowanie w zależności od wymagań firmy.",
    "size": [
      "Średnie",
      "Duże"
    ]
  },
  {
    "name": "PolkaSQL",
    "vendor": "M.K.J. Sp. z o.o.",
    "website": "https://www.mkj.com.pl/system-erp-dla-przedsiebiorstw/",
    "description": "PolkaSQL to zaawansowany system ERP stworzony z myślą o średnich i dużych przedsiębiorstwach z branż handlowych, usługowych oraz produkcyjnych. Oferuje moduły zarządzania sprzedażą, magazynem, finansami, księgowością, kadrami, płacami oraz relacjami z klientami (CRM). System integruje kluczowe procesy biznesowe, umożliwiając efektywne planowanie, kontrolę i analizę działań operacyjnych. Dzięki elastycznej architekturze, PolkaSQL można dostosować do specyficznych potrzeb firmy, co pozwala na optymalizację procesów i zwiększenie konkurencyjności na rynku.",
    "size": [
      "Średnie",
      "Duże"
    ]
  },
  {
    "name": "proALPHA ERP",
    "vendor": "proALPHA Polska Sp. z o.o.",
    "website": "https://www.proalpha.com/pl/system-erp",
    "description": "proALPHA ERP to wszechstronny system stworzony dla średnich i dużych przedsiębiorstw produkcyjnych, handlowych i usługowych, które potrzebują kompleksowego zarządzania operacjami. System obejmuje funkcjonalności takie jak zarządzanie produkcją, logistyką, finansami, CRM i analitykę, co pozwala na optymalizację procesów, redukcję kosztów i zwiększenie konkurencyjności. Skalowalność proALPHA sprawia, że system rośnie wraz z firmą, wspierając ją w dynamicznych warunkach rynkowych.",
    "size": [
      "Średnie",
      "Duże"
    ]
  },
  {
    "name": "Prolan ERP",
    "vendor": "Prolan Sp. z o.o.",
    "website": "https://www.prolan.com.pl/prolan-erp.html",
    "description": "Prolan ERP to zaawansowany system klasy ERP, oparty na nowoczesnej bazie danych Oracle (SQL), dedykowany średnim i dużym przedsiębiorstwom z różnych branż, takich jak handel, produkcja czy usługi. System oferuje moduły zarządzania produkcją, finansami, księgowością, kadrami i płacami, gospodarką materiałową, transportem oraz sprawozdawczością finansową i marketingową. Dzięki elastycznej architekturze, Prolan ERP można dostosować do specyficznych potrzeb firmy, co pozwala na efektywne zarządzanie procesami biznesowymi i zwiększenie konkurencyjności na rynku.",
    "size": [
      "Średnie",
      "Duże"
    ]
  },
  {
    "name": "PULSAR",
    "vendor": "InfoBase Systemy Informatyczne",
    "website": "https://www.infobase.com.pl/pl/39/",
    "description": "PULSAR to zaawansowany system ERP stworzony przez firmę Infobase, dedykowany średnim i dużym przedsiębiorstwom z różnych branż. Oferuje moduły zarządzania finansami, księgowością, sprzedażą, zakupami, magazynem, produkcją oraz kadrami i płacami. System integruje kluczowe procesy biznesowe, umożliwiając efektywne planowanie, kontrolę i analizę działań operacyjnych. Dzięki elastycznej architekturze, PULSAR można dostosować do specyficznych potrzeb firmy, co pozwala na optymalizację procesów i zwiększenie konkurencyjności na rynku.",
    "size": [
      "Średnie",
      "Duże"
    ]
  },
  {
    "name": "QAD Adaptive ERP",
    "vendor": "DSR S.A.",
    "website": "https://www.dsr.com.pl/wsparcie-zarzadzania-produkcja-erp/",
    "description": "QAD Adaptive ERP to nowoczesny system planowania zasobów przedsiębiorstwa, zaprojektowany z myślą o średnich i dużych firmach produkcyjnych. System integruje kluczowe obszary działalności, oferując moduły do zarządzania finansami, łańcuchem dostaw, produkcją, sprzedażą oraz relacjami z klientami. Dzięki elastycznej architekturze i wbudowanej analityce, QAD Adaptive ERP umożliwia szybkie dostosowanie się do zmieniających się warunków rynkowych, wspierając efektywne planowanie, kontrolę i optymalizację procesów biznesowych. System jest dostępny w modelu chmurowym, co zapewnia skalowalność, bezpieczeństwo oraz dostęp z dowolnego miejsca i urządzenia, zwiększając konkurencyjność i efektywność operacyjną firmy",
    "size": [
      "Średnie",
      "Duże"
    ]
  },
  {
    "name": "Quatra MAX",
    "vendor": "Sygnity Business Solutions S.A.",
    "website": "https://sygnitysbs.pl/quatra-max-system-erp/",
    "description": "Quatra MAX to elastyczny system ERP stworzony przez Sygnity Business Solutions, dedykowany średnim i dużym przedsiębiorstwom z różnych branż, takich jak sektor publiczny, sprzedaż i dystrybucja, transport kolejowy i lotniczy oraz zarządzanie rozproszonymi organizacjami usługowymi. System integruje kluczowe obszary działalności firmy, oferując moduły zarządzania kapitałem ludzkim, finansami, logistyką oraz personelem. Dzięki modułowej budowie, Quatra MAX umożliwia dostosowanie funkcjonalności do specyficznych potrzeb przedsiębiorstwa, wspierając efektywne planowanie, kontrolę i optymalizację procesów biznesowych. System zapewnia pełną integrację z istniejącymi aplikacjami, co pozwala na płynne wdrożenie bez konieczności wymiany dotychczasowego oprogramowania.",
    "size": [
      "Średnie",
      "Duże"
    ]
  },
  {
    "name": "Raks SQL",
    "vendor": "RAKS Sp. z o.o. ",
    "website": "https://raks.pl/firmy/",
    "description": "RAKSSQL to w pełni zintegrowany system ERP przeznaczony dla firm handlowych, usługowych i produkcyjnych, a także biur rachunkowych. Oferuje moduły zarządzania księgowością i finansami, sprzedażą i gospodarką magazynową, kadrami i płacami oraz produkcją. System rejestruje wszystkie zdarzenia gospodarcze, zapewniając pełny obraz działalności przedsiębiorstwa. Dzięki elastycznej architekturze, RAKSSQL można dostosować do specyficznych potrzeb zarówno małych, jak i dużych firm, co pozwala na efektywne zarządzanie procesami biznesowymi i zwiększenie konkurencyjności na rynku.",
    "size": [
      "Małe"
    ]
  },
  {
    "name": "RamBase CLOUD ERP",
    "vendor": "RamBase sp. z o.o.",
    "website": "https://www.rambase.com/pl/erp",
    "description": "RamBase Cloud ERP to kompleksowy system zarządzania przedsiębiorstwem, stworzony z myślą o małych i średnich firmach z branży produkcyjnej i dystrybucyjnej. Oferuje moduły obejmujące sprzedaż, zaopatrzenie, produkcję, CRM, zarządzanie dokumentami, logistykę, finanse, jakość, projekty, serwis, wynajem oraz HR. Dzięki elastycznej architekturze i integracji z platformą API, RamBase umożliwia dostosowanie funkcjonalności do indywidualnych potrzeb, wspierając efektywne zarządzanie procesami biznesowymi i rozwój przedsiębiorstwa.",
    "size": [
      "Małe",
      "Średnie",
      "Duże"
    ]
  },
  {
    "name": "Rekord.ERP",
    "vendor": "Rekord SI sp. z o.o. ",
    "website": "https://www.rekord.com.pl/erp",
    "description": "Rekord.ERP to zaawansowany system informatyczny, dedykowany dla firm małych, średnich i dużych, który wspiera kompleksowe zarządzanie procesami biznesowymi. Dzięki elastyczności i bogatej funkcjonalności, system ten umożliwia efektywne zarządzanie finansami, logistyką, produkcją oraz zasobami ludzkimi. W skład Rekord.ERP wchodzą moduły do rachunkowości zarządczej, CRM, analityki oraz logistyki, co pozwala na utrzymanie optymalnych stanów magazynowych i podejmowanie trafnych decyzji. Użytkownicy cenią sobie możliwość dostosowania systemu do specyficznych potrzeb organizacji, co czyni go idealnym rozwiązaniem dla zróżnicowanych branż.",
    "size": [
      "Małe",
      "Średnie",
      "Duże"
    ]
  },
  {
    "name": "Sage X3",
    "vendor": "Deveho Consulting Polska",
    "website": "https://deveho.com/pl/produkty/sage-x3/",
    "description": "Sage X3 to zaawansowany system ERP przeznaczony dla średnich i dużych przedsiębiorstw, oferujący kompleksowe zarządzanie finansami, produkcją oraz łańcuchem dostaw. Dzięki elastyczności i skalowalności, system dostosowuje się do specyficznych potrzeb firm, umożliwiając efektywne zarządzanie procesami biznesowymi. Sage X3 integruje kluczowe funkcje, takie jak księgowość, zarządzanie zapasami, sprzedaż, zakupy oraz obsługę klienta, co pozwala na optymalizację operacji i zwiększenie konkurencyjności na rynku.",
    "size": [
      "Średnie",
      "Duże"
    ]
  },
  {
    "name": "SAP Business One",
    "vendor": "SAP Polska Sp. z o.o.",
    "website": "https://www.sap.com/poland/products/erp/business-one.html",
    "description": "SAP Business One to kompleksowy system ERP zaprojektowany z myślą o małych i średnich przedsiębiorstwach, oferujący moduły do zarządzania finansami, sprzedażą, zakupami, zapasami oraz relacjami z klientami (CRM). System integruje kluczowe procesy biznesowe, umożliwiając podejmowanie świadomych decyzji na podstawie danych w czasie rzeczywistym. Dzięki elastycznej architekturze, SAP Business One można dostosować do specyficznych potrzeb firmy, wspierając jej rozwój i zwiększając efektywność operacyjną",
    "size": [
      "Małe",
      "Średnie"
    ]
  },
  {
    "name": "SAP S/4 HANA",
    "vendor": "SAP Polska Sp. z o.o.",
    "website": "https://assecobs.pl",
    "description": "SAP S/4HANA to nowoczesny system ERP przeznaczony dla średnich i dużych przedsiębiorstw, oferujący kompleksowe zarządzanie finansami, produkcją, sprzedażą i łańcuchem dostaw. Dzięki integracji z technologiami chmurowymi, sztuczną inteligencją i uczeniem maszynowym, umożliwia przetwarzanie danych w czasie rzeczywistym, co wspiera podejmowanie szybkich i trafnych decyzji biznesowych. System jest skalowalny i elastyczny, co pozwala na dostosowanie go do specyficznych potrzeb różnych branż, zwiększając efektywność operacyjną i konkurencyjność na rynku.",
    "size": [
      "Średnie",
      "Duże"
    ]
  },
  {
    "name": "sBiznes",
    "vendor": "SOFTINTEGRATION Sp. z o.o.",
    "website": "https://sbiznes.pl/",
    "description": "sBiznes to innowacyjny system ERP zaprojektowany z myślą o małych i średnich przedsiębiorstwach z różnych branż, takich jak księgowość, finanse, biura rachunkowe, gastronomia, HR, NGO, magazynowanie czy produkcja. Oferuje moduły wspierające zarządzanie finansami, logistyką, administracją i magazynem, integrując wszystkie procesy w jednej aplikacji. Dzięki intuicyjnemu interfejsowi, łatwej implementacji oraz możliwości pracy zdalnej, sBiznes zwiększa efektywność operacyjną i ułatwia codzienne zarządzanie firmą.",
    "size": [
      "Małe",
      "Średnie"
    ]
  },
  {
    "name": "SI-ERP",
    "vendor": "ECLSOFT Sp. z o.o.",
    "website": "https://eclsoft.com/oferta/si-erp/",
    "description": "SI-ERP to zintegrowany system zarządzania przedsiębiorstwem, dedykowany średnim i dużym firmom produkcyjnym, usługowym oraz handlowym. Oferuje moduły wspierające planowanie i rozliczanie produkcji, gospodarkę materiałową z logistyką, sprzedaż, kadry i płace, finanse i księgowość, obsługę kas, banków oraz środków trwałych. Dzięki elastycznej architekturze, SI-ERP umożliwia dostosowanie funkcjonalności do specyficznych potrzeb przedsiębiorstwa, co pozwala na efektywne zarządzanie procesami biznesowymi i zwiększenie konkurencyjności na rynku.",
    "size": [
      "Średnie",
      "Duże"
    ]
  },
  {
    "name": "SIMPLE.ERP",
    "vendor": "SIMPLE S.A.",
    "website": "https://simple.com.pl/produkty/simple-erp/dla-kogo/",
    "description": "SIMPLE.ERP to zintegrowany system informatyczny dedykowany średnim i dużym przedsiębiorstwom oraz instytucjom sektora publicznego, takim jak uczelnie wyższe, jednostki medyczne, instytuty badawcze i jednostki rządowe. System oferuje kompleksową obsługę procesów gospodarczych, w tym zarządzanie finansami, księgowością, kadrami, płacami, logistyką, produkcją oraz relacjami z klientami (CRM). Dzięki elastycznej architekturze i bogatej funkcjonalności, SIMPLE.ERP umożliwia efektywne zarządzanie i optymalizację procesów biznesowych, dostosowując się do specyficznych potrzeb różnych branż.",
    "size": [
      "Średnie",
      "Duże"
    ]
  },
  {
    "name": "softlab ERP",
    "vendor": "Asseco Business Solutions S.A.",
    "website": "https://assecobs.pl",
    "description": "Softlab ERP to zaawansowany system zarządzania przedsiębiorstwem, oferujący moduły do obsługi finansów, księgowości, logistyki, sprzedaży, produkcji, magazynu (WMS) oraz HR. Dzięki elastycznej architekturze, dostosowuje się do potrzeb średnich i dużych firm, wspierając efektywne planowanie, kontrolę i optymalizację procesów biznesowych. Integracja z platformami e-commerce oraz narzędziami analitycznymi umożliwia kompleksowe zarządzanie działalnością, zwiększając konkurencyjność i efektywność operacyjną przedsiębiorstwa.",
    "size": [
      "Małe",
      "Średnie",
      "Duże"
    ]
  },
  {
    "name": "Standard ERP",
    "vendor": "Hansaworld",
    "website": "https://www.hansaworld.com/pl/products/standard-erp",
    "description": "Standard ERP to wszechstronny system klasy ERP, zaprojektowany przez firmę HansaWorld, dedykowany przedsiębiorstwom każdej wielkości i branży. Oferuje zintegrowane moduły zarządzania finansami, sprzedażą, zakupami, magazynem, produkcją, projektami oraz relacjami z klientami (CRM). System umożliwia automatyzację kluczowych procesów biznesowych, zapewniając elastyczność i skalowalność, co pozwala na dostosowanie do specyficznych potrzeb firmy. Dzięki integracji z technologiami chmurowymi, Standard ERP oferuje dostęp do danych w czasie rzeczywistym z dowolnego miejsca i urządzenia, wspierając efektywne zarządzanie i podejmowanie decyzji. ",
    "size": [
      "Małe",
      "Średnie",
      "Duże"
    ]
  },
  {
    "name": "Streamsoft Prestiż",
    "vendor": "Streamsoft Spółka z Ograniczoną Odpowiedzialnością Sp. K.",
    "website": "https://www.streamsoft.pl",
    "description": "Streamsoft Prestiż to zaawansowany system ERP dedykowany średnim i dużym przedsiębiorstwom produkcyjnym oraz handlowo-usługowym. Oferuje rozbudowany moduł zarządzania produkcją, wspierający planowanie, harmonogramowanie i kontrolę procesów. System integruje obszary finansów, księgowości, kadr, płac, logistyki oraz CRM, umożliwiając kompleksowe zarządzanie firmą. Dzięki elastycznej architekturze, Streamsoft Prestiż dostosowuje się do specyficznych potrzeb branżowych, wspierając efektywność operacyjną i konkurencyjność przedsiębiorstwa.",
    "size": [
      "Małe",
      "Średnie"
    ]
  },
  {
    "name": "Streamsoft Verto",
    "vendor": "Streamsoft Spółka z Ograniczoną Odpowiedzialnością Sp. K.",
    "website": "https://www.streamsoft.pl",
    "description": "Streamsoft Verto to nowoczesny system ERP stworzony z myślą o firmach działających w dynamicznych sektorach, takich jak e-commerce, retail oraz zarządzanie projektami. Oferuje moduły wspierające sprzedaż, gospodarkę magazynową (WMS), finanse, księgowość, CRM oraz zarządzanie dokumentami (DMS). Dzięki elastycznej architekturze i szerokim możliwościom integracji, Streamsoft Verto dostosowuje się do indywidualnych potrzeb przedsiębiorstw, zapewniając efektywne zarządzanie procesami biznesowymi i wspierając rozwój w modelu omnichannel.",
    "size": [
      "Średnie",
      "Duże"
    ]
  },
  {
    "name": "SykofERP",
    "vendor": "Systemy Informatyczne SYKOM Sp. z o.o.",
    "website": " https://sykom.pl/sykof-erp/moduly/",
    "description": "SyKOF ERP to kompleksowy system zarządzania przedsiębiorstwem, dedykowany małym i średnim firmom z różnych branż, takich jak produkcja, handel, usługi czy budownictwo. Oferuje moduły wspierające zarządzanie finansami, logistyką, produkcją, kadrami, płacami oraz relacjami z klientami (CRM). Dzięki elastycznej architekturze, SyKOF ERP można dostosować do specyficznych potrzeb przedsiębiorstwa, co pozwala na efektywne zarządzanie procesami biznesowymi i zwiększenie konkurencyjności na rynku.",
    "size": [
      "Małe",
      "Średnie"
    ]
  },
  {
    "name": "Symfonia ERP",
    "vendor": "Symfonia Sp. z o.o.",
    "website": "https://www.symfonia.pl",
    "description": "Symfonia ERP to kompleksowe oprogramowanie przeznaczone dla małych i średnich przedsiębiorstw, oferujące moduły do zarządzania finansami, księgowością, kadrami, płacami, sprzedażą, magazynem oraz produkcją. System integruje kluczowe procesy biznesowe, umożliwiając automatyzację codziennych czynności i usprawnienie komunikacji między działami. Dzięki elastycznej budowie, Symfonia ERP pozwala na szybkie dostosowanie rozwiązań do indywidualnych potrzeb firmy, wspierając jej rozwój i konkurencyjność na rynku.",
    "size": [
      "Małe",
      "Średnie"
    ]
  },
  {
    "name": "SZYK 2",
    "vendor": "COIG S.A.",
    "website": "https://www.coig.pl/oprogramowanie/system-erp/",
    "description": "SZYK 2 to zaawansowany system ERP opracowany przez COIG, dedykowany średnim i dużym przedsiębiorstwom, ze szczególnym uwzględnieniem branży górniczej. System oferuje moduły zarządzania finansami, logistyką, produkcją, sprzedażą, kadrami i płacami, a także aplikacje mobilne. Integruje kluczowe procesy biznesowe, umożliwiając automatyzację i optymalizację działań operacyjnych. Dzięki elastycznej architekturze, SZYK 2 można dostosować do specyficznych potrzeb przedsiębiorstwa, co pozwala na efektywne zarządzanie zasobami i zwiększenie konkurencyjności na rynku.",
    "size": [
      "Średnie",
      "Duże"
    ]
  },
  {
    "name": "TENEUM X",
    "vendor": "Sente Sp. z o.o.",
    "website": "https://sente.pl/system-erp/",
    "description": "Teneum X to nowoczesny system ERP stworzony przez firmę Sente, dedykowany średnim i dużym przedsiębiorstwom z branż produkcyjnych, handlowych oraz usługowych. Oferuje kompleksowe moduły wspierające zarządzanie procesami biznesowymi, takimi jak handel i dystrybucja, zaopatrzenie, zarządzanie magazynem (WMS), produkcją, CRM, e-commerce B2B, finanse i księgowość, zarządzanie personelem, workflow oraz raportowanie i analizy. Dzięki elastycznej architekturze, Teneum X można dostosować do indywidualnych potrzeb każdej firmy, co pozwala na optymalizację procesów i zwiększenie efektywności operacyjnej.",
    "size": [
      "Średnie",
      "Duże"
    ]
  },
  {
    "name": "Teta ERP",
    "vendor": "Unit4 Polska sp. z o.o",
    "website": "https://teta.unit4.com/pl/rozwiazania/erp-oraz-planowanie-finansowe",
    "description": "Teta ERP to zaawansowany system klasy ERP, dedykowany średnim i dużym przedsiębiorstwom z różnych branż, takich jak produkcja, handel czy usługi. Oferuje moduły zarządzania finansami, księgowością, logistyką, produkcją oraz zasobami ludzkimi, integrując kluczowe procesy biznesowe w jednym środowisku. Dzięki elastycznej, modułowej budowie, Teta ERP umożliwia dostosowanie funkcjonalności do specyficznych potrzeb firmy, wspierając efektywne zarządzanie i optymalizację procesów operacyjnych.",
    "size": [
      "Średnie",
      "Duże"
    ]
  },
  {
    "name": "TRIVA ERP",
    "vendor": "Soneta Sp. z o. o.",
    "website": "https://triva.pl/",
    "description": "TRIVA ERP to nowoczesny system zarządzania przedsiębiorstwem, stworzony przez polskich specjalistów, zgodny z aktualnymi przepisami prawa. Oferuje moduły do obsługi kadr i płac, finansów, księgowości, zarządzania projektami, CRM oraz sprzedaży i zakupów. Dzięki elastycznej architekturze i intuicyjnym interfejsom, TRIVA ERP dostosowuje się do indywidualnych potrzeb średnich i dużych firm, wspierając efektywne planowanie, kontrolę i optymalizację procesów biznesowych. System zapewnia mobilny dostęp, umożliwiając pracę z dowolnego miejsca i urządzenia.",
    "size": [
      "Małe",
      "Średnie",
      "Duże"
    ]
  },
  {
    "name": "Vendo.365",
    "vendor": "CFI Systemy Informatyczne Sp. z o.o.",
    "website": "https://www.vendo365.pl/",
    "description": "VENDO.365 to nowoczesny system ERP w chmurze, dedykowany małym i średnim przedsiębiorstwom produkcyjnym oraz handlowym, w tym działającym w e-commerce. Oferuje moduły zarządzania sprzedażą, zakupami, płatnościami, magazynem, produkcją oraz CRM. Dzięki integracji z platformami sprzedażowymi i firmami kurierskimi, usprawnia procesy logistyczne. Elastyczność i skalowalność VENDO.365 pozwalają na dostosowanie systemu do indywidualnych potrzeb firmy, wspierając efektywne zarządzanie i rozwój biznesu.",
    "size": [
      "Małe",
      "Średnie"
    ]
  },
  {
    "name": "VENDO.ERP",
    "vendor": "CFI Systemy Informatyczne Sp. z o.o.",
    "website": "https://www.cfi.pl/system-erp/program-erp-vendo/",
    "description": "VENDO.ERP to nowoczesny, kompleksowy system klasy ERP, dedykowany średnim i dużym przedsiębiorstwom produkcyjnym, handlowym oraz usługowym. Oferuje moduły wspierające zarządzanie sprzedażą, produkcją, magazynem, logistyką, CRM, finansami, księgowością, kadrami i płacami. System automatyzuje i optymalizuje procesy biznesowe, integrując kluczowe obszary działalności firmy. Dzięki elastycznej architekturze, VENDO.ERP można dostosować do specyficznych potrzeb przedsiębiorstwa, co pozwala na efektywne zarządzanie zasobami i zwiększenie konkurencyjności na rynku.",
    "size": [
      "Średnie",
      "Duże"
    ]
  },
  {
    "name": "wapro ERP",
    "vendor": "Asseco Business Solutions S.A.",
    "website": "https://assecobs.pl",
    "description": "WAPRO ERP to kompleksowy system zarządzania przedsiębiorstwem, dedykowany małym i średnim firmom. Oferuje moduły do obsługi sprzedaży, magazynu, finansów, księgowości, kadr i płac, e-commerce, środków trwałych oraz analiz biznesowych. Dzięki elastycznej architekturze, WAPRO ERP dostosowuje się do specyficznych potrzeb różnych branż, wspierając efektywne planowanie, kontrolę i optymalizację procesów biznesowych. Integracja z platformami sprzedażowymi oraz narzędziami analitycznymi umożliwia kompleksowe zarządzanie działalnością, zwiększając konkurencyjność i efektywność operacyjną przedsiębiorstwa.",
    "size": [
      "Małe",
      "Średnie"
    ]
  }
].sort((a, b) => a.name.localeCompare(b.name));