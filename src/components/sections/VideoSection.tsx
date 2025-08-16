import { useEffect, useRef, useState } from 'react';
import { Play, Pause, Eye } from 'lucide-react';

export const VideoSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsActive(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section
      id="vision"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(100,100,255,0.1),transparent)]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex items-center justify-center mb-4">
          <Eye className="text-indigo-400 mr-2" size={24} />
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
            Data Intelligence Platform
          </h2>
        </div>
        
        <p className="text-gray-300 text-center max-w-3xl mx-auto mb-16 text-lg">
          Our state-of-the-art data intelligence technology enables machines to interpret and understand the visual world with unprecedented accuracy.
        </p>

        <div className={`transform transition-all duration-1000 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-indigo-900/20 bg-gray-800 aspect-video max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
            
            {/* Video placeholder - replace with actual video in production */}
            <video 
              ref={videoRef}
              className="w-full h-full object-cover"
              poster="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              preload="metadata"
            >
              {/* Note: In production, add a real video source */}
              <source src="https://mazwai.com/videvo_files/video/free/2014-06/small_watermarked/city_lights_night_drive_free_stock_video_preview.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
            
            {/* Play/Pause button */}
            <button 
              onClick={togglePlay}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-indigo-600 text-white p-5 rounded-full hover:bg-indigo-700 transition-colors duration-300 shadow-lg"
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
            
            {/* Video title */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <h3 className="text-2xl font-bold text-white mb-2">data intelligence Action</h3>
              <p className="text-gray-300">See how our platform detects, tracks, and analyzes visual data in real-time for various applications.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-indigo-500/50 transition-colors duration-300">
              <h4 className="text-xl font-semibold text-white mb-3">Object Detection</h4>
              <p className="text-gray-400">Identify and locate objects within images and video streams with high precision and speed.</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-indigo-500/50 transition-colors duration-300">
              <h4 className="text-xl font-semibold text-white mb-3">Facial Recognition</h4>
              <p className="text-gray-400">Advanced facial analysis capabilities with emotion detection and demographic insights.</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-indigo-500/50 transition-colors duration-300">
              <h4 className="text-xl font-semibold text-white mb-3">Behavior Analysis</h4>
              <p className="text-gray-400">Understand patterns and behaviors from video content for security and retail applications.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};