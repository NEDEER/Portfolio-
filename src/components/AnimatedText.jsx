import { useState, useEffect } from 'react';

const AnimatedText = ({ text, className = "" }) => {
    const [displayText, setDisplayText] = useState('');
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        // Start the animation sequence only once when component mounts
        const startAnimation = async () => {
            // Input animation - type out the text
            for (let i = 0; i <= text.length; i++) {
                await new Promise(resolve => setTimeout(resolve, 150));
                setDisplayText(text.slice(0, i));
            }
            
            // Animation complete - show cursor
            setShowText(true);
        };

        startAnimation();
    }, [text]); // Only depend on text prop, not on any state that could cause re-runs

    useEffect(() => {
        if (displayText.length > 0) {
            setShowText(true);
        }
    }, [displayText]);

    return (
        <div className={`relative ${className}`}>
            <h1 className="font-orbitron text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-12">
                <span className="inline-block">
                    {displayText}
                    <span 
                        className={`inline-block w-2 h-16 bg-[#00ffff] ml-2 transition-opacity duration-300 ${
                            showText ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{
                            animation: showText ? 'blink 1s infinite' : 'none'
                        }}
                    />
                </span>
            </h1>
        </div>
    );
};

export default AnimatedText;
