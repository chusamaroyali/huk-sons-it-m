import { useState, useEffect } from 'react';
import { 
  Accessibility, 
  ZoomIn, 
  ZoomOut, 
  Eye, 
  Type, 
  MousePointer,
  X,
  Minus,
  Plus,
  RotateCcw,
  Volume2,
  VolumeX
} from 'lucide-react';
import { Button } from './ui/button';

export function AccessibilityMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [contrast, setContrast] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [largerCursor, setLargerCursor] = useState(false);
  const [narratorEnabled, setNarratorEnabled] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const increaseFontSize = () => {
    if (fontSize < 150) {
      const newSize = fontSize + 10;
      setFontSize(newSize);
      document.documentElement.style.fontSize = `${newSize}%`;
    }
  };

  const decreaseFontSize = () => {
    if (fontSize > 80) {
      const newSize = fontSize - 10;
      setFontSize(newSize);
      document.documentElement.style.fontSize = `${newSize}%`;
    }
  };

  const toggleContrast = () => {
    setContrast(!contrast);
    if (!contrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  };

  const toggleLinkHighlight = () => {
    setHighlightLinks(!highlightLinks);
    if (!highlightLinks) {
      document.documentElement.classList.add('highlight-links');
    } else {
      document.documentElement.classList.remove('highlight-links');
    }
  };

  const toggleLargerCursor = () => {
    setLargerCursor(!largerCursor);
    if (!largerCursor) {
      document.documentElement.classList.add('large-cursor');
    } else {
      document.documentElement.classList.remove('large-cursor');
    }
  };

  const toggleNarrator = () => {
    setNarratorEnabled(!narratorEnabled);
    if (narratorEnabled) {
      // Stop any ongoing speech
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  // Narrator functionality - read text on hover
  useEffect(() => {
    if (!narratorEnabled) return;

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Get text content of the element
      let textToRead = '';
      
      // Prioritize different types of elements
      if (target.getAttribute('aria-label')) {
        textToRead = target.getAttribute('aria-label') || '';
      } else if (target.alt) {
        textToRead = target.alt;
      } else if (target.title) {
        textToRead = target.title;
      } else if (target.innerText && target.innerText.trim().length < 200) {
        textToRead = target.innerText.trim();
      }

      if (textToRead && textToRead.length > 0) {
        // Cancel any ongoing speech
        window.speechSynthesis.cancel();
        
        // Create new speech synthesis utterance
        const utterance = new SpeechSynthesisUtterance(textToRead);
        utterance.rate = 1.0;
        utterance.pitch = 1.0;
        utterance.volume = 1.0;
        
        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);
        utterance.onerror = () => setIsSpeaking(false);
        
        window.speechSynthesis.speak(utterance);
      }
    };

    // Add event listener to document
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      window.speechSynthesis.cancel();
    };
  }, [narratorEnabled]);

  const resetAll = () => {
    setFontSize(100);
    setContrast(false);
    setHighlightLinks(false);
    setLargerCursor(false);
    setNarratorEnabled(false);
    document.documentElement.style.fontSize = '100%';
    document.documentElement.classList.remove('high-contrast', 'highlight-links', 'large-cursor');
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  return (
    <>
      {/* Accessibility Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-24 right-8 z-40 w-12 h-12 rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 p-0 flex items-center justify-center"
        aria-label="Accessibility options"
      >
        <Accessibility className="w-6 h-6" />
      </Button>

      {/* Accessibility Panel */}
      {isOpen && (
        <div className="fixed top-40 right-8 z-40 w-80 bg-card border-2 border-primary/20 rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-subtle bg-primary/5">
            <div className="flex items-center gap-2">
              <Accessibility className="w-5 h-5 text-primary" />
              <h3 className="text-lg text-heading">Accessibility</h3>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Options */}
          <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
            
            {/* Font Size */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Type className="w-4 h-4 text-primary" />
                  <span className="text-sm text-heading">Font Size</span>
                </div>
                <span className="text-xs text-body/60">{fontSize}%</span>
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={decreaseFontSize}
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  disabled={fontSize <= 80}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <Button
                  onClick={increaseFontSize}
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  disabled={fontSize >= 150}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Narrator */}
            <div
              className="flex items-center justify-between p-3 rounded-lg border border-subtle hover:border-primary/40 transition-colors cursor-pointer"
              onClick={toggleNarrator}
            >
              <div className="flex items-center gap-2">
                {isSpeaking ? (
                  <Volume2 className="w-4 h-4 text-primary animate-pulse" />
                ) : (
                  <VolumeX className="w-4 h-4 text-primary" />
                )}
                <span className="text-sm text-heading">Screen Reader</span>
              </div>
              <div className={`w-10 h-6 rounded-full transition-colors ${narratorEnabled ? 'bg-primary' : 'bg-body/20'}`}>
                <div className={`w-5 h-5 bg-card rounded-full m-0.5 transition-transform ${narratorEnabled ? 'translate-x-4' : 'translate-x-0'}`} />
              </div>
            </div>

            {/* High Contrast */}
            <div
              className="flex items-center justify-between p-3 rounded-lg border border-subtle hover:border-primary/40 transition-colors cursor-pointer"
              onClick={toggleContrast}
            >
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-primary" />
                <span className="text-sm text-heading">High Contrast</span>
              </div>
              <div className={`w-10 h-6 rounded-full transition-colors ${contrast ? 'bg-primary' : 'bg-body/20'}`}>
                <div className={`w-5 h-5 bg-card rounded-full m-0.5 transition-transform ${contrast ? 'translate-x-4' : 'translate-x-0'}`} />
              </div>
            </div>

            {/* Highlight Links */}
            <div
              className="flex items-center justify-between p-3 rounded-lg border border-subtle hover:border-primary/40 transition-colors cursor-pointer"
              onClick={toggleLinkHighlight}
            >
              <div className="flex items-center gap-2">
                <ZoomIn className="w-4 h-4 text-primary" />
                <span className="text-sm text-heading">Highlight Links</span>
              </div>
              <div className={`w-10 h-6 rounded-full transition-colors ${highlightLinks ? 'bg-primary' : 'bg-body/20'}`}>
                <div className={`w-5 h-5 bg-card rounded-full m-0.5 transition-transform ${highlightLinks ? 'translate-x-4' : 'translate-x-0'}`} />
              </div>
            </div>

            {/* Larger Cursor */}
            <div
              className="flex items-center justify-between p-3 rounded-lg border border-subtle hover:border-primary/40 transition-colors cursor-pointer"
              onClick={toggleLargerCursor}
            >
              <div className="flex items-center gap-2">
                <MousePointer className="w-4 h-4 text-primary" />
                <span className="text-sm text-heading">Larger Cursor</span>
              </div>
              <div className={`w-10 h-6 rounded-full transition-colors ${largerCursor ? 'bg-primary' : 'bg-body/20'}`}>
                <div className={`w-5 h-5 bg-card rounded-full m-0.5 transition-transform ${largerCursor ? 'translate-x-4' : 'translate-x-0'}`} />
              </div>
            </div>

            {/* Narrator info */}
            {narratorEnabled && (
              <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg">
                <p className="text-xs text-heading">
                  Hover over elements to hear them read aloud
                </p>
              </div>
            )}

            {/* Reset Button */}
            <Button
              onClick={resetAll}
              variant="outline"
              className="w-full border-primary/40 text-primary hover:bg-primary/10"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset All
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
