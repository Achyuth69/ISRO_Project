import { Translation, SupportedLanguage } from '../types';

export const translations: Record<SupportedLanguage, Translation> = {
  en: {
    common: {
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
      cancel: 'Cancel',
      confirm: 'Confirm',
      save: 'Save',
      delete: 'Delete',
      edit: 'Edit',
      view: 'View',
      download: 'Download',
      refresh: 'Refresh',
      search: 'Search',
      filter: 'Filter',
      settings: 'Settings',
      logout: 'Logout',
      login: 'Login'
    },
    header: {
      title: 'ISRO SatNav',
      subtitle: 'Indian Space Research Organisation',
      missionControl: 'Mission Control Active',
      secureConnection: 'Secure Connection',
      systemStatus: 'All Systems Operational'
    },
    navigation: {
      missionControl: 'Mission Control',
      satelliteFleet: 'Satellite Fleet',
      earthObservation: 'Earth Observation',
      dataAnalysis: 'Data Analysis',
      remoteSensing: 'Remote Sensing',
      gisMapping: 'GIS Mapping',
      missionAlerts: 'Mission Alerts',
      orbitTracking: 'Orbit Tracking',
      spaceProjects: 'Space Projects',
      missionReports: 'Mission Reports',
      personnel: 'Personnel',
      securityCenter: 'Security Center',
      systemConfig: 'System Config'
    },
    voice: {
      listening: 'Listening...',
      speak: 'Speak',
      voiceCommand: 'Voice Command',
      sayCommand: 'Say a command',
      voiceEnabled: 'Voice Enabled',
      voiceDisabled: 'Voice Disabled',
      commandNotRecognized: 'Command not recognized',
      commandExecuted: 'Command executed successfully'
    },
    missions: {
      chandrayaan3: 'Chandrayaan-3',
      adityaL1: 'Aditya-L1',
      gaganyaan: 'Gaganyaan Prep',
      lunarSurface: 'Lunar Surface Operations',
      solarObservation: 'Solar Observation',
      preFlightTesting: 'Pre-flight Testing'
    }
  },
  hi: {
    common: {
      loading: 'लोड हो रहा है...',
      error: 'त्रुटि',
      success: 'सफलता',
      cancel: 'रद्द करें',
      confirm: 'पुष्टि करें',
      save: 'सहेजें',
      delete: 'हटाएं',
      edit: 'संपादित करें',
      view: 'देखें',
      download: 'डाउनलोड',
      refresh: 'रीफ्रेश',
      search: 'खोजें',
      filter: 'फिल्टर',
      settings: 'सेटिंग्स',
      logout: 'लॉगआउट',
      login: 'लॉगिन'
    },
    header: {
      title: 'इसरो सैटनेव',
      subtitle: 'भारतीय अंतरिक्ष अनुसंधान संगठन',
      missionControl: 'मिशन कंट्रोल सक्रिय',
      secureConnection: 'सुरक्षित कनेक्शन',
      systemStatus: 'सभी सिस्टम परिचालन में'
    },
    navigation: {
      missionControl: 'मिशन कंट्रोल',
      satelliteFleet: 'उपग्रह बेड़ा',
      earthObservation: 'पृथ्वी अवलोकन',
      dataAnalysis: 'डेटा विश्लेषण',
      remoteSensing: 'रिमोट सेंसिंग',
      gisMapping: 'जीआईएस मैपिंग',
      missionAlerts: 'मिशन अलर्ट',
      orbitTracking: 'कक्षा ट्रैकिंग',
      spaceProjects: 'अंतरिक्ष परियोजनाएं',
      missionReports: 'मिशन रिपोर्ट',
      personnel: 'कर्मचारी',
      securityCenter: 'सुरक्षा केंद्र',
      systemConfig: 'सिस्टम कॉन्फ़िगरेशन'
    },
    voice: {
      listening: 'सुन रहा है...',
      speak: 'बोलें',
      voiceCommand: 'वॉयस कमांड',
      sayCommand: 'एक कमांड कहें',
      voiceEnabled: 'वॉयस सक्षम',
      voiceDisabled: 'वॉयस अक्षम',
      commandNotRecognized: 'कमांड पहचानी नहीं गई',
      commandExecuted: 'कमांड सफलतापूर्वक निष्पादित'
    },
    missions: {
      chandrayaan3: 'चंद्रयान-3',
      adityaL1: 'आदित्य-एल1',
      gaganyaan: 'गगनयान तैयारी',
      lunarSurface: 'चंद्र सतह संचालन',
      solarObservation: 'सौर अवलोकन',
      preFlightTesting: 'प्री-फ्लाइट परीक्षण'
    }
  },
  ta: {
    common: {
      loading: 'ஏற்றுகிறது...',
      error: 'பிழை',
      success: 'வெற்றி',
      cancel: 'ரத்து செய்',
      confirm: 'உறுதிப்படுத்து',
      save: 'சேமி',
      delete: 'நீக்கு',
      edit: 'திருத்து',
      view: 'பார்',
      download: 'பதிவிறக்கு',
      refresh: 'புதுப்பி',
      search: 'தேடு',
      filter: 'வடிகட்டு',
      settings: 'அமைப்புகள்',
      logout: 'வெளியேறு',
      login: 'உள்நுழை'
    },
    header: {
      title: 'இஸ்ரோ சாட்நாவ்',
      subtitle: 'இந்திய விண்வெளி ஆராய்ச்சி அமைப்பு',
      missionControl: 'பணி கட்டுப்பாடு செயலில்',
      secureConnection: 'பாதுகாப்பான இணைப்பு',
      systemStatus: 'அனைத்து அமைப்புகளும் செயல்பாட்டில்'
    },
    navigation: {
      missionControl: 'பணி கட்டுப்பாடு',
      satelliteFleet: 'செயற்கைக்கோள் கடற்படை',
      earthObservation: 'பூமி கண்காணிப்பு',
      dataAnalysis: 'தரவு பகுப்பாய்வு',
      remoteSensing: 'தொலை உணர்வு',
      gisMapping: 'ஜிஐஎஸ் வரைபடம்',
      missionAlerts: 'பணி எச்சரிக்கைகள்',
      orbitTracking: 'சுற்றுப்பாதை கண்காணிப்பு',
      spaceProjects: 'விண்வெளி திட்டங்கள்',
      missionReports: 'பணி அறிக்கைகள்',
      personnel: 'பணியாளர்கள்',
      securityCenter: 'பாதுகாப்பு மையம்',
      systemConfig: 'அமைப்பு கட்டமைப்பு'
    },
    voice: {
      listening: 'கேட்கிறது...',
      speak: 'பேசு',
      voiceCommand: 'குரல் கட்டளை',
      sayCommand: 'ஒரு கட்டளை சொல்',
      voiceEnabled: 'குரல் இயக்கப்பட்டது',
      voiceDisabled: 'குரல் முடக்கப்பட்டது',
      commandNotRecognized: 'கட்டளை அடையாளம் காணப்படவில்லை',
      commandExecuted: 'கட்டளை வெற்றிகரமாக செயல்படுத்தப்பட்டது'
    },
    missions: {
      chandrayaan3: 'சந்திரயான்-3',
      adityaL1: 'ஆதித்ய-எல்1',
      gaganyaan: 'ககன்யான் தயாரிப்பு',
      lunarSurface: 'சந்திர மேற்பரப்பு செயல்பாடுகள்',
      solarObservation: 'சூரிய கண்காணிப்பு',
      preFlightTesting: 'விமான முன் சோதனை'
    }
  },
  te: {
    common: {
      loading: 'లోడ్ అవుతోంది...',
      error: 'లోపం',
      success: 'విజయం',
      cancel: 'రద్దు చేయి',
      confirm: 'నిర్ధారించు',
      save: 'సేవ్ చేయి',
      delete: 'తొలగించు',
      edit: 'సవరించు',
      view: 'చూడు',
      download: 'డౌన్‌లోడ్',
      refresh: 'రిఫ్రెష్',
      search: 'వెతుకు',
      filter: 'ఫిల్టర్',
      settings: 'సెట్టింగ్‌లు',
      logout: 'లాగ్ అవుట్',
      login: 'లాగిన్'
    },
    header: {
      title: 'ఇస్రో సాట్‌నావ్',
      subtitle: 'భారతీయ అంతరిక్ష పరిశోధన సంస్థ',
      missionControl: 'మిషన్ కంట్రోల్ యాక్టివ్',
      secureConnection: 'సురక్షిత కనెక్షన్',
      systemStatus: 'అన్ని సిస్టమ్‌లు పనిచేస్తున్నాయి'
    },
    navigation: {
      missionControl: 'మిషన్ కంట్రోల్',
      satelliteFleet: 'ఉపగ్రహ నౌకాదళం',
      earthObservation: 'భూమి పరిశీలన',
      dataAnalysis: 'డేటా విశ్లేషణ',
      remoteSensing: 'రిమోట్ సెన్సింగ్',
      gisMapping: 'జిఐఎస్ మ్యాపింగ్',
      missionAlerts: 'మిషన్ అలర్ట్‌లు',
      orbitTracking: 'కక్ష్య ట్రాకింగ్',
      spaceProjects: 'అంతరిక్ష ప్రాజెక్ట్‌లు',
      missionReports: 'మిషన్ రిపోర్ట్‌లు',
      personnel: 'సిబ్బంది',
      securityCenter: 'భద్రతా కేంద్రం',
      systemConfig: 'సిస్టమ్ కాన్ఫిగరేషన్'
    },
    voice: {
      listening: 'వింటోంది...',
      speak: 'మాట్లాడు',
      voiceCommand: 'వాయిస్ కమాండ్',
      sayCommand: 'ఒక కమాండ్ చెప్పండి',
      voiceEnabled: 'వాయిస్ ఎనేబుల్ చేయబడింది',
      voiceDisabled: 'వాయిస్ డిసేబుల్ చేయబడింది',
      commandNotRecognized: 'కమాండ్ గుర్తించబడలేదు',
      commandExecuted: 'కమాండ్ విజయవంతంగా అమలు చేయబడింది'
    },
    missions: {
      chandrayaan3: 'చంద్రయాన్-3',
      adityaL1: 'ఆదిత్య-ఎల్1',
      gaganyaan: 'గగన్యాన్ ప్రిప్',
      lunarSurface: 'చంద్ర ఉపరితల కార్యకలాపాలు',
      solarObservation: 'సౌర పరిశీలన',
      preFlightTesting: 'ప్రీ-ఫ్లైట్ టెస్టింగ్'
    }
  },
  kn: {
    common: {
      loading: 'ಲೋಡ್ ಆಗುತ್ತಿದೆ...',
      error: 'ದೋಷ',
      success: 'ಯಶಸ್ಸು',
      cancel: 'ರದ್ದುಮಾಡಿ',
      confirm: 'ದೃಢೀಕರಿಸಿ',
      save: 'ಉಳಿಸಿ',
      delete: 'ಅಳಿಸಿ',
      edit: 'ಸಂಪಾದಿಸಿ',
      view: 'ವೀಕ್ಷಿಸಿ',
      download: 'ಡೌನ್‌ಲೋಡ್',
      refresh: 'ರಿಫ್ರೆಶ್',
      search: 'ಹುಡುಕಿ',
      filter: 'ಫಿಲ್ಟರ್',
      settings: 'ಸೆಟ್ಟಿಂಗ್‌ಗಳು',
      logout: 'ಲಾಗ್ ಔಟ್',
      login: 'ಲಾಗಿನ್'
    },
    header: {
      title: 'ಇಸ್ರೋ ಸ್ಯಾಟ್‌ನಾವ್',
      subtitle: 'ಭಾರತೀಯ ಬಾಹ್ಯಾಕಾಶ ಸಂಶೋಧನಾ ಸಂಸ್ಥೆ',
      missionControl: 'ಮಿಷನ್ ಕಂಟ್ರೋಲ್ ಸಕ್ರಿಯ',
      secureConnection: 'ಸುರಕ್ಷಿತ ಸಂಪರ್ಕ',
      systemStatus: 'ಎಲ್ಲಾ ಸಿಸ್ಟಮ್‌ಗಳು ಕಾರ್ಯಾಚರಣೆಯಲ್ಲಿವೆ'
    },
    navigation: {
      missionControl: 'ಮಿಷನ್ ಕಂಟ್ರೋಲ್',
      satelliteFleet: 'ಉಪಗ್ರಹ ನೌಕಾಪಡೆ',
      earthObservation: 'ಭೂಮಿ ವೀಕ್ಷಣೆ',
      dataAnalysis: 'ಡೇಟಾ ವಿಶ್ಲೇಷಣೆ',
      remoteSensing: 'ರಿಮೋಟ್ ಸೆನ್ಸಿಂಗ್',
      gisMapping: 'ಜಿಐಎಸ್ ಮ್ಯಾಪಿಂಗ್',
      missionAlerts: 'ಮಿಷನ್ ಅಲರ್ಟ್‌ಗಳು',
      orbitTracking: 'ಕಕ್ಷೆ ಟ್ರ್ಯಾಕಿಂಗ್',
      spaceProjects: 'ಬಾಹ್ಯಾಕಾಶ ಯೋಜನೆಗಳು',
      missionReports: 'ಮಿಷನ್ ವರದಿಗಳು',
      personnel: 'ಸಿಬ್ಬಂದಿ',
      securityCenter: 'ಭದ್ರತಾ ಕೇಂದ್ರ',
      systemConfig: 'ಸಿಸ್ಟಮ್ ಕಾನ್ಫಿಗರೇಶನ್'
    },
    voice: {
      listening: 'ಕೇಳುತ್ತಿದೆ...',
      speak: 'ಮಾತನಾಡಿ',
      voiceCommand: 'ಧ್ವನಿ ಆದೇಶ',
      sayCommand: 'ಒಂದು ಆದೇಶ ಹೇಳಿ',
      voiceEnabled: 'ಧ್ವನಿ ಸಕ್ರಿಯಗೊಳಿಸಲಾಗಿದೆ',
      voiceDisabled: 'ಧ್ವನಿ ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಲಾಗಿದೆ',
      commandNotRecognized: 'ಆದೇಶ ಗುರುತಿಸಲಾಗಿಲ್ಲ',
      commandExecuted: 'ಆದೇಶ ಯಶಸ್ವಿಯಾಗಿ ಕಾರ್ಯಗತಗೊಳಿಸಲಾಗಿದೆ'
    },
    missions: {
      chandrayaan3: 'ಚಂದ್ರಯಾನ್-3',
      adityaL1: 'ಆದಿತ್ಯ-ಎಲ್1',
      gaganyaan: 'ಗಗನ್ಯಾನ್ ಪ್ರಿಪ್',
      lunarSurface: 'ಚಂದ್ರ ಮೇಲ್ಮೈ ಕಾರ್ಯಾಚರಣೆಗಳು',
      solarObservation: 'ಸೌರ ವೀಕ್ಷಣೆ',
      preFlightTesting: 'ಪ್ರಿ-ಫ್ಲೈಟ್ ಪರೀಕ್ಷೆ'
    }
  },
  ml: {
    common: {
      loading: 'ലോഡ് ചെയ്യുന്നു...',
      error: 'പിശക്',
      success: 'വിജയം',
      cancel: 'റദ്ദാക്കുക',
      confirm: 'സ്ഥിരീകരിക്കുക',
      save: 'സേവ് ചെയ്യുക',
      delete: 'ഇല്ലാതാക്കുക',
      edit: 'എഡിറ്റ് ചെയ്യുക',
      view: 'കാണുക',
      download: 'ഡൗൺലോഡ്',
      refresh: 'റിഫ്രഷ്',
      search: 'തിരയുക',
      filter: 'ഫിൽട്ടർ',
      settings: 'സെറ്റിംഗ്സ്',
      logout: 'ലോഗ് ഔട്ട്',
      login: 'ലോഗിൻ'
    },
    header: {
      title: 'ഇസ്രോ സാറ്റ്നാവ്',
      subtitle: 'ഇന്ത്യൻ ബഹിരാകാശ ഗവേഷണ സംഘടന',
      missionControl: 'മിഷൻ കൺട്രോൾ സജീവം',
      secureConnection: 'സുരക്ഷിത കണക്ഷൻ',
      systemStatus: 'എല്ലാ സിസ്റ്റങ്ങളും പ്രവർത്തനക്ഷമം'
    },
    navigation: {
      missionControl: 'മിഷൻ കൺട്രോൾ',
      satelliteFleet: 'ഉപഗ്രഹ കപ്പൽപ്പട',
      earthObservation: 'ഭൂമി നിരീക്ഷണം',
      dataAnalysis: 'ഡാറ്റ വിശകലനം',
      remoteSensing: 'റിമോട്ട് സെൻസിംഗ്',
      gisMapping: 'ജിഐഎസ് മാപ്പിംഗ്',
      missionAlerts: 'മിഷൻ അലേർട്ടുകൾ',
      orbitTracking: 'ഭ്രമണപഥ ട്രാക്കിംഗ്',
      spaceProjects: 'ബഹിരാകാശ പദ്ധതികൾ',
      missionReports: 'മിഷൻ റിപ്പോർട്ടുകൾ',
      personnel: 'ജീവനക്കാർ',
      securityCenter: 'സുരക്ഷാ കേന്ദ്രം',
      systemConfig: 'സിസ്റ്റം കോൺഫിഗറേഷൻ'
    },
    voice: {
      listening: 'കേൾക്കുന്നു...',
      speak: 'സംസാരിക്കുക',
      voiceCommand: 'വോയ്സ് കമാൻഡ്',
      sayCommand: 'ഒരു കമാൻഡ് പറയുക',
      voiceEnabled: 'വോയ്സ് പ്രവർത്തനക്ഷമമാക്കി',
      voiceDisabled: 'വോയ്സ് നിർജ്ജീവമാക്കി',
      commandNotRecognized: 'കമാൻഡ് തിരിച്ചറിഞ്ഞില്ല',
      commandExecuted: 'കമാൻഡ് വിജയകരമായി നടപ്പിലാക്കി'
    },
    missions: {
      chandrayaan3: 'ചന്ദ്രയാൻ-3',
      adityaL1: 'ആദിത്യ-എൽ1',
      gaganyaan: 'ഗഗൻയാൻ പ്രിപ്',
      lunarSurface: 'ചാന്ദ്ര ഉപരിതല പ്രവർത്തനങ്ങൾ',
      solarObservation: 'സൗര നിരീക്ഷണം',
      preFlightTesting: 'പ്രീ-ഫ്ലൈറ്റ് ടെസ്റ്റിംഗ്'
    }
  },
  gu: {
    common: {
      loading: 'લોડ થઈ રહ્યું છે...',
      error: 'ભૂલ',
      success: 'સફળતા',
      cancel: 'રદ કરો',
      confirm: 'પુષ્ટિ કરો',
      save: 'સેવ કરો',
      delete: 'ડિલીટ કરો',
      edit: 'એડિટ કરો',
      view: 'જુઓ',
      download: 'ડાઉનલોડ',
      refresh: 'રિફ્રેશ',
      search: 'શોધો',
      filter: 'ફિલ્ટર',
      settings: 'સેટિંગ્સ',
      logout: 'લોગ આઉટ',
      login: 'લોગિન'
    },
    header: {
      title: 'ઇસરો સેટનેવ',
      subtitle: 'ભારતીય અવકાશ સંશોધન સંસ્થા',
      missionControl: 'મિશન કંટ્રોલ સક્રિય',
      secureConnection: 'સુરક્ષિત કનેક્શન',
      systemStatus: 'બધી સિસ્ટમો કાર્યરત'
    },
    navigation: {
      missionControl: 'મિશન કંટ્રોલ',
      satelliteFleet: 'ઉપગ્રહ કાફલો',
      earthObservation: 'પૃથ્વી અવલોકન',
      dataAnalysis: 'ડેટા વિશ્લેષણ',
      remoteSensing: 'રિમોટ સેન્સિંગ',
      gisMapping: 'જીઆઈએસ મેપિંગ',
      missionAlerts: 'મિશન અલર્ટ',
      orbitTracking: 'ભ્રમણકક્ષા ટ્રેકિંગ',
      spaceProjects: 'અવકાશ પ્રોજેક્ટ્સ',
      missionReports: 'મિશન રિપોર્ટ્સ',
      personnel: 'કર્મચારીઓ',
      securityCenter: 'સુરક્ષા કેન્દ્ર',
      systemConfig: 'સિસ્ટમ કોન્ફિગરેશન'
    },
    voice: {
      listening: 'સાંભળી રહ્યું છે...',
      speak: 'બોલો',
      voiceCommand: 'વોઇસ કમાન્ડ',
      sayCommand: 'એક કમાન્ડ કહો',
      voiceEnabled: 'વોઇસ સક્ષમ',
      voiceDisabled: 'વોઇસ અક્ષમ',
      commandNotRecognized: 'કમાન્ડ ઓળખાઈ નથી',
      commandExecuted: 'કમાન્ડ સફળતાપૂર્વક અમલમાં મૂકાઈ'
    },
    missions: {
      chandrayaan3: 'ચંદ્રયાન-3',
      adityaL1: 'આદિત્ય-એલ1',
      gaganyaan: 'ગગનયાન પ્રિપ',
      lunarSurface: 'ચંદ્ર સપાટી કામગીરી',
      solarObservation: 'સૌર અવલોકન',
      preFlightTesting: 'પ્રી-ફ્લાઇટ ટેસ્ટિંગ'
    }
  },
  bn: {
    common: {
      loading: 'লোড হচ্ছে...',
      error: 'ত্রুটি',
      success: 'সফলতা',
      cancel: 'বাতিল',
      confirm: 'নিশ্চিত করুন',
      save: 'সংরক্ষণ',
      delete: 'মুছুন',
      edit: 'সম্পাদনা',
      view: 'দেখুন',
      download: 'ডাউনলোড',
      refresh: 'রিফ্রেশ',
      search: 'অনুসন্ধান',
      filter: 'ফিল্টার',
      settings: 'সেটিংস',
      logout: 'লগ আউট',
      login: 'লগইন'
    },
    header: {
      title: 'ইসরো স্যাটনেভ',
      subtitle: 'ভারতীয় মহাকাশ গবেষণা সংস্থা',
      missionControl: 'মিশন কন্ট্রোল সক্রিয়',
      secureConnection: 'নিরাপদ সংযোগ',
      systemStatus: 'সব সিস্টেম চালু'
    },
    navigation: {
      missionControl: 'মিশন কন্ট্রোল',
      satelliteFleet: 'উপগ্রহ বহর',
      earthObservation: 'পৃথিবী পর্যবেক্ষণ',
      dataAnalysis: 'ডেটা বিশ্লেষণ',
      remoteSensing: 'রিমোট সেন্সিং',
      gisMapping: 'জিআইএস ম্যাপিং',
      missionAlerts: 'মিশন সতর্কতা',
      orbitTracking: 'কক্ষপথ ট্র্যাকিং',
      spaceProjects: 'মহাকাশ প্রকল্প',
      missionReports: 'মিশন রিপোর্ট',
      personnel: 'কর্মীবৃন্দ',
      securityCenter: 'নিরাপত্তা কেন্দ্র',
      systemConfig: 'সিস্টেম কনফিগারেশন'
    },
    voice: {
      listening: 'শুনছে...',
      speak: 'বলুন',
      voiceCommand: 'ভয়েস কমান্ড',
      sayCommand: 'একটি কমান্ড বলুন',
      voiceEnabled: 'ভয়েস সক্রিয়',
      voiceDisabled: 'ভয়েস নিষ্ক্রিয়',
      commandNotRecognized: 'কমান্ড চিনতে পারেনি',
      commandExecuted: 'কমান্ড সফলভাবে সম্পাদিত'
    },
    missions: {
      chandrayaan3: 'চন্দ্রযান-৩',
      adityaL1: 'আদিত্য-এল১',
      gaganyaan: 'গগনযান প্রিপ',
      lunarSurface: 'চাঁদের পৃষ্ঠ অপারেশন',
      solarObservation: 'সৌর পর্যবেক্ষণ',
      preFlightTesting: 'প্রি-ফ্লাইট টেস্টিং'
    }
  },
  mr: {
    common: {
      loading: 'लोड होत आहे...',
      error: 'त्रुटी',
      success: 'यश',
      cancel: 'रद्द करा',
      confirm: 'पुष्टी करा',
      save: 'जतन करा',
      delete: 'हटवा',
      edit: 'संपादित करा',
      view: 'पहा',
      download: 'डाउनलोड',
      refresh: 'रिफ्रेश',
      search: 'शोधा',
      filter: 'फिल्टर',
      settings: 'सेटिंग्ज',
      logout: 'लॉग आउट',
      login: 'लॉगिन'
    },
    header: {
      title: 'इस्रो सॅटनॅव्ह',
      subtitle: 'भारतीय अंतराळ संशोधन संस्था',
      missionControl: 'मिशन कंट्रोल सक्रिय',
      secureConnection: 'सुरक्षित कनेक्शन',
      systemStatus: 'सर्व सिस्टम कार्यरत'
    },
    navigation: {
      missionControl: 'मिशन कंट्रोल',
      satelliteFleet: 'उपग्रह ताफा',
      earthObservation: 'पृथ्वी निरीक्षण',
      dataAnalysis: 'डेटा विश्लेषण',
      remoteSensing: 'रिमोट सेन्सिंग',
      gisMapping: 'जीआयएस मॅपिंग',
      missionAlerts: 'मिशन अलर्ट',
      orbitTracking: 'कक्षा ट्रॅकिंग',
      spaceProjects: 'अंतराळ प्रकल्प',
      missionReports: 'मिशन अहवाल',
      personnel: 'कर्मचारी',
      securityCenter: 'सुरक्षा केंद्र',
      systemConfig: 'सिस्टम कॉन्फिगरेशन'
    },
    voice: {
      listening: 'ऐकत आहे...',
      speak: 'बोला',
      voiceCommand: 'व्हॉइस कमांड',
      sayCommand: 'एक कमांड सांगा',
      voiceEnabled: 'व्हॉइस सक्षम',
      voiceDisabled: 'व्हॉइस अक्षम',
      commandNotRecognized: 'कमांड ओळखली नाही',
      commandExecuted: 'कमांड यशस्वीरित्या अंमलात आणली'
    },
    missions: {
      chandrayaan3: 'चंद्रयान-३',
      adityaL1: 'आदित्य-एल१',
      gaganyaan: 'गगनयान प्रिप',
      lunarSurface: 'चंद्र पृष्ठभाग ऑपरेशन',
      solarObservation: 'सौर निरीक्षण',
      preFlightTesting: 'प्री-फ्लाइट टेस्टिंग'
    }
  },
  pa: {
    common: {
      loading: 'ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...',
      error: 'ਗਲਤੀ',
      success: 'ਸਫਲਤਾ',
      cancel: 'ਰੱਦ ਕਰੋ',
      confirm: 'ਪੁਸ਼ਟੀ ਕਰੋ',
      save: 'ਸੇਵ ਕਰੋ',
      delete: 'ਮਿਟਾਓ',
      edit: 'ਸੰਪਾਦਿਤ ਕਰੋ',
      view: 'ਦੇਖੋ',
      download: 'ਡਾਊਨਲੋਡ',
      refresh: 'ਰਿਫ੍ਰੈਸ਼',
      search: 'ਖੋਜੋ',
      filter: 'ਫਿਲਟਰ',
      settings: 'ਸੈਟਿੰਗਾਂ',
      logout: 'ਲਾਗ ਆਊਟ',
      login: 'ਲਾਗਿਨ'
    },
    header: {
      title: 'ਇਸਰੋ ਸੈਟਨੈਵ',
      subtitle: 'ਭਾਰਤੀ ਸਪੇਸ ਰਿਸਰਚ ਆਰਗੇਨਾਈਜ਼ੇਸ਼ਨ',
      missionControl: 'ਮਿਸ਼ਨ ਕੰਟਰੋਲ ਸਰਗਰਮ',
      secureConnection: 'ਸੁਰੱਖਿਅਤ ਕਨੈਕਸ਼ਨ',
      systemStatus: 'ਸਾਰੇ ਸਿਸਟਮ ਚਾਲੂ'
    },
    navigation: {
      missionControl: 'ਮਿਸ਼ਨ ਕੰਟਰੋਲ',
      satelliteFleet: 'ਸੈਟੇਲਾਈਟ ਫਲੀਟ',
      earthObservation: 'ਧਰਤੀ ਨਿਰੀਖਣ',
      dataAnalysis: 'ਡੇਟਾ ਵਿਸ਼ਲੇਸ਼ਣ',
      remoteSensing: 'ਰਿਮੋਟ ਸੈਂਸਿੰਗ',
      gisMapping: 'ਜੀਆਈਐਸ ਮੈਪਿੰਗ',
      missionAlerts: 'ਮਿਸ਼ਨ ਅਲਰਟ',
      orbitTracking: 'ਔਰਬਿਟ ਟਰੈਕਿੰਗ',
      spaceProjects: 'ਸਪੇਸ ਪ੍ਰੋਜੈਕਟ',
      missionReports: 'ਮਿਸ਼ਨ ਰਿਪੋਰਟਾਂ',
      personnel: 'ਸਟਾਫ',
      securityCenter: 'ਸਿਕਿਉਰਿਟੀ ਸੈਂਟਰ',
      systemConfig: 'ਸਿਸਟਮ ਕੰਫਿਗਰੇਸ਼ਨ'
    },
    voice: {
      listening: 'ਸੁਣ ਰਿਹਾ ਹੈ...',
      speak: 'ਬੋਲੋ',
      voiceCommand: 'ਵਾਇਸ ਕਮਾਂਡ',
      sayCommand: 'ਇੱਕ ਕਮਾਂਡ ਕਹੋ',
      voiceEnabled: 'ਵਾਇਸ ਚਾਲੂ',
      voiceDisabled: 'ਵਾਇਸ ਬੰਦ',
      commandNotRecognized: 'ਕਮਾਂਡ ਪਛਾਣੀ ਨਹੀਂ ਗਈ',
      commandExecuted: 'ਕਮਾਂਡ ਸਫਲਤਾਪੂਰਵਕ ਚਲਾਈ ਗਈ'
    },
    missions: {
      chandrayaan3: 'ਚੰਦਰਯਾਨ-3',
      adityaL1: 'ਆਦਿਤਿਆ-ਐਲ1',
      gaganyaan: 'ਗਗਨਯਾਨ ਪ੍ਰਿਪ',
      lunarSurface: 'ਚੰਦਰ ਸਤਹ ਓਪਰੇਸ਼ਨ',
      solarObservation: 'ਸੂਰਜੀ ਨਿਰੀਖਣ',
      preFlightTesting: 'ਪ੍ਰੀ-ਫਲਾਈਟ ਟੈਸਟਿੰਗ'
    }
  }
};

export const getTranslation = (language: SupportedLanguage, key: string): string => {
  const keys = key.split('.');
  let value: any = translations[language];
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      // Fallback to English if translation not found
      value = translations.en;
      for (const fallbackKey of keys) {
        if (value && typeof value === 'object' && fallbackKey in value) {
          value = value[fallbackKey];
        } else {
          return key; // Return key if no translation found
        }
      }
      break;
    }
  }
  
  return typeof value === 'string' ? value : key;
};