import React, { useState } from 'react';
import { Mic, MicOff, Volume2, VolumeX } from 'lucide-react';
import { useVoice } from '../../hooks/useVoice';
import { useLanguage } from '../../hooks/useLanguage';

interface VoiceControlProps {
  onCommand?: (command: string) => void;
}

export const VoiceControl: React.FC<VoiceControlProps> = ({ onCommand }) => {
  const { language, t } = useLanguage();
  const { isListening, isSupported, transcript, startListening, stopListening, speak, isSpeaking } = useVoice(language);
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(true);

  const handleToggleListening = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const handleToggleVoice = () => {
    setIsVoiceEnabled(!isVoiceEnabled);
    if (isVoiceEnabled) {
      window.speechSynthesis.cancel();
    }
  };

  const handleTestSpeak = () => {
    speak(t('voice.voiceEnabled'));
  };

  React.useEffect(() => {
    if (transcript && onCommand) {
      onCommand(transcript);
    }
  }, [transcript, onCommand]);

  if (!isSupported) {
    return null;
  }

  return (
    <div className="flex items-center space-x-2">
      {/* Voice Recognition Button */}
      <button
        onClick={handleToggleListening}
        className={`p-2 rounded-lg transition-all ${
          isListening 
            ? 'bg-red-100 text-red-600 animate-pulse' 
            : 'bg-white/10 text-white hover:bg-white/20'
        }`}
        title={isListening ? t('voice.listening') : t('voice.speak')}
      >
        {isListening ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
      </button>

      {/* Voice Output Toggle */}
      <button
        onClick={handleToggleVoice}
        className={`p-2 rounded-lg transition-all ${
          isVoiceEnabled 
            ? 'bg-white/10 text-white hover:bg-white/20' 
            : 'bg-gray-100 text-gray-400'
        }`}
        title={isVoiceEnabled ? t('voice.voiceEnabled') : t('voice.voiceDisabled')}
      >
        {isVoiceEnabled ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
      </button>

      {/* Voice Status Indicator */}
      {(isListening || isSpeaking) && (
        <div className="flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-xs text-white">
            {isListening ? t('voice.listening') : isSpeaking ? 'Speaking...' : ''}
          </span>
        </div>
      )}

      {/* Transcript Display */}
      {transcript && (
        <div className="hidden md:block max-w-xs bg-white/10 text-white px-3 py-1 rounded-lg text-xs truncate">
          "{transcript}"
        </div>
      )}
    </div>
  );
};