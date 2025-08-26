import { useState, useEffect, useRef } from 'react';
import LightRays from './components/LightRays';
import LetterGlitch from './components/LetterGlitch';
import AnimatedText from './components/AnimatedText';
import LogoLoop from './components/LogoLoop';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

const App = () => {
    const [showIntro, setShowIntro] = useState(true);
    const meRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const contactsRef = useRef(null);

    // Social media logos configuration
    const socialLogos = [
        { 
            node: <FaGithub className="text-white hover:text-[#00ffff] transition-colors duration-300" />, 
            title: "GitHub", 
            href: "https://github.com" 
        },
        { 
            node: <FaLinkedin className="text-white hover:text-[#00ffff] transition-colors duration-300" />, 
            title: "LinkedIn", 
            href: "https://linkedin.com" 
        },
        { 
            node: <FaXTwitter className="text-white hover:text-[#00ffff] transition-colors duration-300" />, 
            title: "X (Twitter)", 
            href: "https://x.com" 
        },
    ];

    useEffect(() => {
        if (showIntro) {
            document.body.classList.add('intro-active');
        } else {
            document.body.classList.remove('intro-active');
        }
        
        return () => {
            document.body.classList.remove('intro-active');
        };
    }, [showIntro]);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    const handleGetStarted = () => {
        setShowIntro(false);
        scrollToSection(meRef);
    };

    const handleLearnMore = () => {
        setShowIntro(false);
        scrollToSection(skillsRef);
    };

    return (
        <>
            {showIntro && (
                <div className="fixed inset-0 bg-black intro-container z-50 transition-opacity duration-1000" style={{ opacity: showIntro ? 1 : 0 }}>
                    <div className="absolute inset-0 w-full h-full">
                        <LetterGlitch
                            glitchSpeed={50}
                            centerVignette={true}
                            outerVignette={false}
                            smooth={true}
                        />
                    </div>
                    <div className="relative z-10 text-center transform transition-all duration-1000 flex flex-col items-center">
                        <AnimatedText text="MEJRI NEDER" />
                        <div className="flex gap-6 justify-center mb-8">
                            <button 
                                className="btn btn-primary px-8 py-4 text-lg rounded-lg"
                                onClick={handleGetStarted}
                            >
                                Get Started
                            </button>
                            <button 
                                className="btn btn-secondary px-8 py-4 text-lg rounded-lg"
                                onClick={handleLearnMore}
                            >
                                Learn More
                            </button>
                        </div>
                        
                        {/* Social Media Links with Animated Logo Loop */}
                        <div className="w-full max-w-md">
                            <LogoLoop
                                logos={socialLogos}
                                speed={80}
                                direction="left"
                                logoHeight={32}
                                gap={48}
                                pauseOnHover={true}
                                scaleOnHover={true}
                                fadeOut={false}
                                ariaLabel="Social media links"
                            />
                        </div>
                    </div>
                </div>
            )}
            
            <div className={`transition-opacity duration-1000 ${showIntro ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <nav className="fixed top-0 w-full bg-black/90 py-4 flex justify-center gap-6 z-40">
                    <a onClick={() => scrollToSection(meRef)} className="font-orbitron text-white text-lg hover:text-[#00ffff] cursor-pointer">Me</a>
                    <a onClick={() => scrollToSection(skillsRef)} className="font-orbitron text-white text-lg hover:text-[#00ffff] cursor-pointer">Skills</a>
                    <a onClick={() => scrollToSection(projectsRef)} className="font-orbitron text-white text-lg hover:text-[#00ffff] cursor-pointer">Projects</a>
                    <a onClick={() => scrollToSection(contactsRef)} className="font-orbitron text-white text-lg hover:text-[#00ffff] cursor-pointer">Contacts</a>
                </nav>
                <section ref={meRef} className="min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center relative">
                    <div className="absolute inset-0 w-full h-full">
                        <LightRays
                            raysOrigin="top-center"
                            raysColor="#00ffff"
                            raysSpeed={1.5}
                            lightSpread={0.8}
                            rayLength={1.2}
                            followMouse={true}
                            mouseInfluence={0.1}
                            noiseAmount={0.1}
                            distortion={0.05}
                            className="custom-rays"
                        />
                    </div>
                    <div className="relative z-10">
                        <h2 className="font-orbitron text-4xl md:text-5xl text-[#00ffff] mb-8 [text-shadow:0_0_10px_#00ffff]">About Me</h2>
                        <p className="max-w-xl text-lg md:text-xl">
                            I'm MEJRI NEDER, a passionate developer and designer with a focus on creating innovative and user-friendly solutions. With a blend of technical expertise and creative vision, I strive to build projects that make an impact.
                        </p>
                    </div>
                </section>
                <section ref={skillsRef} className="min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center">
                    <h2 className="font-orbitron text-4xl md:text-5xl text-[#00ffff] mb-8 [text-shadow:0_0_10px_#00ffff]">Skills</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl w-full">
                        {['JavaScript', 'React', 'Node.js', 'CSS', 'Python', 'UI/UX Design'].map((skill) => (
                            <div key={skill} className="bg-[#1a1a1a] p-6 rounded-lg shadow-[0_0_10px_rgba(0,255,255,0.2)] hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:-translate-y-1 transition-all">
                                {skill}
                            </div>
                        ))}
                    </div>
                </section>
                <section ref={projectsRef} className="min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center">
                    <h2 className="font-orbitron text-4xl md:text-5xl text-[#00ffff] mb-8 [text-shadow:0_0_10px_#00ffff]">Projects</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl w-full">
                        <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-[0_0_10px_rgba(0,255,255,0.2)] hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold">Project One</h3>
                            <p>A web application built with React and Node.js, showcasing seamless user interactions.</p>
                        </div>
                        <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-[0_0_10px_rgba(0,255,255,0.2)] hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold">Project Two</h3>
                            <p>A mobile-responsive portfolio site with dynamic animations and modern design.</p>
                        </div>
                        <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-[0_0_10px_rgba(0,255,255,0.2)] hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold">Project Three</h3>
                            <p>An e-commerce platform with secure payment integration and intuitive UI.</p>
                        </div>
                    </div>
                </section>
                <section ref={contactsRef} className="min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center">
                    <h2 className="font-orbitron text-4xl md:text-5xl text-[#00ffff] mb-8 [text-shadow:0_0_10px_#00ffff]">Contact Me</h2>
                    <p className="max-w-xl text-lg md:text-xl">Feel free to reach out for collaborations or inquiries!</p>
                    <div className="flex flex-col gap-4 mt-8">
                        <a href="mailto:contact@mejrineder.com" className="text-[#00ffff] text-lg hover:underline">contact@mejrineder.com</a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#00ffff] text-lg hover:underline">GitHub</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#00ffff] text-lg hover:underline">LinkedIn</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#00ffff] text-lg hover:underline">Instagram</a>
                    </div>
                </section>
            </div>
        </>
    );
};

export default App;