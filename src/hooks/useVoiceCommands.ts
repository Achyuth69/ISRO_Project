import { useEffect, useCallback } from 'react';
import { useVoice } from './useVoice';
import { useLanguage } from './useLanguage';
import { SupportedLanguage } from '../types';

interface VoiceCommandsHookProps {
  onNavigate: (tab: string) => void;
  onRefresh: () => void;
  onLogout: () => void;
}

export const useVoiceCommands = ({ onNavigate, onRefresh, onLogout }: VoiceCommandsHookProps) => {
  const { language, t } = useLanguage();
  const { transcript, speak } = useVoice(language);

  const commandMappings: Record<SupportedLanguage, Record<string, string>> = {
    en: {
      'mission control': 'mission-control',
      'satellite fleet': 'satellites',
      'satellites': 'satellites',
      'earth observation': 'earth-observation',
      'data analysis': 'analysis',
      'analysis': 'analysis',
      'remote sensing': 'remote-sensing',
      'mapping': 'mapping',
      'alerts': 'alerts',
      'tracking': 'tracking',
      'projects': 'projects',
      'reports': 'reports',
      'personnel': 'personnel',
      'security': 'security',
      'settings': 'settings',
      'refresh': 'refresh',
      'logout': 'logout',
      'log out': 'logout'
    },
    hi: {
      'मिशन कंट्रोल': 'mission-control',
      'उपग्रह बेड़ा': 'satellites',
      'उपग्रह': 'satellites',
      'पृथ्वी अवलोकन': 'earth-observation',
      'डेटा विश्लेषण': 'analysis',
      'विश्लेषण': 'analysis',
      'रिमोट सेंसिंग': 'remote-sensing',
      'मैपिंग': 'mapping',
      'अलर्ट': 'alerts',
      'ट्रैकिंग': 'tracking',
      'परियोजनाएं': 'projects',
      'रिपोर्ट': 'reports',
      'कर्मचारी': 'personnel',
      'सुरक्षा': 'security',
      'सेटिंग्स': 'settings',
      'रीफ्रेश': 'refresh',
      'लॉगआउट': 'logout'
    },
    ta: {
      'பணி கட்டுப்பாடு': 'mission-control',
      'செயற்கைக்கோள் கடற்படை': 'satellites',
      'செயற்கைக்கோள்': 'satellites',
      'பூமி கண்காணிப்பு': 'earth-observation',
      'தரவு பகுப்பாய்வு': 'analysis',
      'பகுப்பாய்வு': 'analysis',
      'தொலை உணர்வு': 'remote-sensing',
      'வரைபடம்': 'mapping',
      'எச்சரிக்கைகள்': 'alerts',
      'கண்காணிப்பு': 'tracking',
      'திட்டங்கள்': 'projects',
      'அறிக்கைகள்': 'reports',
      'பணியாளர்கள்': 'personnel',
      'பாதுகாப்பு': 'security',
      'அமைப்புகள்': 'settings',
      'புதுப்பி': 'refresh',
      'வெளியேறு': 'logout'
    },
    te: {
      'మిషన్ కంట్రోల్': 'mission-control',
      'ఉపగ్రహ నౌకాదళం': 'satellites',
      'ఉపగ్రహ': 'satellites',
      'భూమి పరిశీలన': 'earth-observation',
      'డేటా విశ్లేషణ': 'analysis',
      'విశ్లేషణ': 'analysis',
      'రిమోట్ సెన్సింగ్': 'remote-sensing',
      'మ్యాపింగ్': 'mapping',
      'అలర్ట్‌లు': 'alerts',
      'ట్రాకింగ్': 'tracking',
      'ప్రాజెక్ట్‌లు': 'projects',
      'రిపోర్ట్‌లు': 'reports',
      'సిబ్బంది': 'personnel',
      'భద్రత': 'security',
      'సెట్టింగ్‌లు': 'settings',
      'రిఫ్రెష్': 'refresh',
      'లాగ్ అవుట్': 'logout'
    },
    kn: {
      'ಮಿಷನ್ ಕಂಟ್ರೋಲ್': 'mission-control',
      'ಉಪಗ್ರಹ ನೌಕಾಪಡೆ': 'satellites',
      'ಉಪಗ್ರಹ': 'satellites',
      'ಭೂಮಿ ವೀಕ್ಷಣೆ': 'earth-observation',
      'ಡೇಟಾ ವಿಶ್ಲೇಷಣೆ': 'analysis',
      'ವಿಶ್ಲೇಷಣೆ': 'analysis',
      'ರಿಮೋಟ್ ಸೆನ್ಸಿಂಗ್': 'remote-sensing',
      'ಮ್ಯಾಪಿಂಗ್': 'mapping',
      'ಅಲರ್ಟ್‌ಗಳು': 'alerts',
      'ಟ್ರ್ಯಾಕಿಂಗ್': 'tracking',
      'ಯೋಜನೆಗಳು': 'projects',
      'ವರದಿಗಳು': 'reports',
      'ಸಿಬ್ಬಂದಿ': 'personnel',
      'ಭದ್ರತೆ': 'security',
      'ಸೆಟ್ಟಿಂಗ್‌ಗಳು': 'settings',
      'ರಿಫ್ರೆಶ್': 'refresh',
      'ಲಾಗ್ ಔಟ್': 'logout'
    },
    ml: {
      'മിഷൻ കൺട്രോൾ': 'mission-control',
      'ഉപഗ്രഹ കപ്പൽപ്പട': 'satellites',
      'ഉപഗ്രഹ': 'satellites',
      'ഭൂമി നിരീക്ഷണം': 'earth-observation',
      'ഡാറ്റ വിശകലനം': 'analysis',
      'വിശകലനം': 'analysis',
      'റിമോട്ട് സെൻസിംഗ്': 'remote-sensing',
      'മാപ്പിംഗ്': 'mapping',
      'അലേർട്ടുകൾ': 'alerts',
      'ട്രാക്കിംഗ്': 'tracking',
      'പദ്ധതികൾ': 'projects',
      'റിപ്പോർട്ടുകൾ': 'reports',
      'ജീവനക്കാർ': 'personnel',
      'സുരക്ഷ': 'security',
      'സെറ്റിംഗ്സ്': 'settings',
      'റിഫ്രഷ്': 'refresh',
      'ലോഗ് ഔട്ട്': 'logout'
    },
    gu: {
      'મિશન કંટ્રોલ': 'mission-control',
      'ઉપગ્રહ કાફલો': 'satellites',
      'ઉપગ્રહ': 'satellites',
      'પૃથ્વી અવલોકન': 'earth-observation',
      'ડેટા વિશ્લેષણ': 'analysis',
      'વિશ્લેષણ': 'analysis',
      'રિમોટ સેન્સિંગ': 'remote-sensing',
      'મેપિંગ': 'mapping',
      'અલર્ટ': 'alerts',
      'ટ્રેકિંગ': 'tracking',
      'પ્રોજેક્ટ્સ': 'projects',
      'રિપોર્ટ્સ': 'reports',
      'કર્મચારીઓ': 'personnel',
      'સુરક્ષા': 'security',
      'સેટિંગ્સ': 'settings',
      'રિફ્રેશ': 'refresh',
      'લોગ આઉટ': 'logout'
    },
    bn: {
      'মিশন কন্ট্রোল': 'mission-control',
      'উপগ্রহ বহর': 'satellites',
      'উপগ্রহ': 'satellites',
      'পৃথিবী পর্যবেক্ষণ': 'earth-observation',
      'ডেটা বিশ্লেষণ': 'analysis',
      'বিশ্লেষণ': 'analysis',
      'রিমোট সেন্সিং': 'remote-sensing',
      'ম্যাপিং': 'mapping',
      'সতর্কতা': 'alerts',
      'ট্র্যাকিং': 'tracking',
      'প্রকল্প': 'projects',
      'রিপোর্ট': 'reports',
      'কর্মীবৃন্দ': 'personnel',
      'নিরাপত্তা': 'security',
      'সেটিংস': 'settings',
      'রিফ্রেশ': 'refresh',
      'লগ আউট': 'logout'
    },
    mr: {
      'मिशन कंट्रोल': 'mission-control',
      'उपग्रह ताफा': 'satellites',
      'उपग्रह': 'satellites',
      'पृथ्वी निरीक्षण': 'earth-observation',
      'डेटा विश्लेषण': 'analysis',
      'विश्लेषण': 'analysis',
      'रिमोट सेन्सिंग': 'remote-sensing',
      'मॅपिंग': 'mapping',
      'अलर्ट': 'alerts',
      'ट्रॅकिंग': 'tracking',
      'प्रकल्प': 'projects',
      'अहवाल': 'reports',
      'कर्मचारी': 'personnel',
      'सुरक्षा': 'security',
      'सेटिंग्ज': 'settings',
      'रिफ्रेश': 'refresh',
      'लॉग आउट': 'logout'
    },
    pa: {
      'ਮਿਸ਼ਨ ਕੰਟਰੋਲ': 'mission-control',
      'ਸੈਟੇਲਾਈਟ ਫਲੀਟ': 'satellites',
      'ਸੈਟੇਲਾਈਟ': 'satellites',
      'ਧਰਤੀ ਨਿਰੀਖਣ': 'earth-observation',
      'ਡੇਟਾ ਵਿਸ਼ਲੇਸ਼ਣ': 'analysis',
      'ਵਿਸ਼ਲੇਸ਼ਣ': 'analysis',
      'ਰਿਮੋਟ ਸੈਂਸਿੰਗ': 'remote-sensing',
      'ਮੈਪਿੰਗ': 'mapping',
      'ਅਲਰਟ': 'alerts',
      'ਟਰੈਕਿੰਗ': 'tracking',
      'ਪ੍ਰੋਜੈਕਟ': 'projects',
      'ਰਿਪੋਰਟਾਂ': 'reports',
      'ਸਟਾਫ': 'personnel',
      'ਸਿਕਿਉਰਿਟੀ': 'security',
      'ਸੈਟਿੰਗਾਂ': 'settings',
      'ਰਿਫ੍ਰੈਸ਼': 'refresh',
      'ਲਾਗ ਆਊਟ': 'logout'
    }
  };

  const processVoiceCommand = useCallback((command: string) => {
    const normalizedCommand = command.toLowerCase().trim();
    const commands = commandMappings[language] || commandMappings.en;
    
    // Check for exact matches first
    for (const [voiceCommand, action] of Object.entries(commands)) {
      if (normalizedCommand.includes(voiceCommand.toLowerCase())) {
        if (action === 'refresh') {
          onRefresh();
          speak(t('voice.commandExecuted'), language);
          return;
        } else if (action === 'logout') {
          onLogout();
          speak(t('voice.commandExecuted'), language);
          return;
        } else {
          onNavigate(action);
          speak(t('voice.commandExecuted'), language);
          return;
        }
      }
    }
    
    // If no command found, notify user
    speak(t('voice.commandNotRecognized'), language);
  }, [language, onNavigate, onRefresh, onLogout, speak, t]);

  useEffect(() => {
    if (transcript) {
      processVoiceCommand(transcript);
    }
  }, [transcript, processVoiceCommand]);

  return { processVoiceCommand };
};