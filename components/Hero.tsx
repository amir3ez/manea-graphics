
import React from 'react';
import { Instagram, Facebook, Layout, Video, PenTool, Image as ImageIcon, Briefcase } from 'lucide-react';

const Hero: React.FC = () => {
  const skills = [
    { name: 'UI/UX Design', icon: <Layout size={20} />, color: 'bg-blue-500/20 text-blue-400' },
    { name: 'Montage', icon: <Video size={20} />, color: 'bg-purple-500/20 text-purple-400' },
    { name: 'Branding', icon: <PenTool size={20} />, color: 'bg-pink-500/20 text-pink-400' },
    { name: 'Graphics', icon: <ImageIcon size={20} />, color: 'bg-orange-500/20 text-orange-400' },
  ];

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-purple-400 font-medium text-sm mb-6 border border-purple-500/30">
              <Briefcase size={16} />
              <span>خبير في التصميم الجرافيكي</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              أنا <span className="gradient-text">مانع عزالدين</span> <br />
              مصمم جرافيكي ومبدع
            </h1>
            
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto lg:ml-0 leading-relaxed">
              أسعى دائماً لتحويل الأفكار إلى تجارب بصرية فريدة تلهم الآخرين. متخصص في بناء الهويات البصرية المبتكرة وتصميم واجهات المستخدم الحديثة التي تترك انطباعاً لا ينسى.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-4 mb-12">
              <a href="https://www.instagram.com/9l7iz" target="_blank" rel="noopener noreferrer" className="p-3 glass-effect rounded-xl hover:bg-purple-600/20 hover:text-purple-400 transition-all duration-300">
                <Instagram size={24} />
              </a>
              <a href="https://www.facebook.com/9l7iz" target="_blank" rel="noopener noreferrer" className="p-3 glass-effect rounded-xl hover:bg-blue-600/20 hover:text-blue-400 transition-all duration-300">
                <Facebook size={24} />
              </a>
            </div>

            {/* Skill Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl mx-auto lg:ml-0">
              {skills.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center gap-2 p-4 glass-effect rounded-2xl hover:scale-105 transition-transform cursor-default group">
                  <div className={`p-3 rounded-xl ${skill.color} group-hover:scale-110 transition-transform`}>
                    {skill.icon}
                  </div>
                  <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <div className="flex-1 relative">
            <div className="relative z-10 w-full max-w-[450px] mx-auto group">
              {/* Image Container with Glow */}
              <div className="absolute inset-0 gradient-bg rounded-[40px] rotate-6 scale-95 blur-xl opacity-30 group-hover:rotate-12 group-hover:scale-100 transition-all duration-500"></div>
              <div className="relative bg-[#1a1329] rounded-[40px] p-2 overflow-hidden border border-white/10">
                <img 
                  src="https://i.ibb.co/q3cWB45P/image.png" 
                  alt="Manea Izzuddin" 
                  className="w-full h-auto rounded-[32px] grayscale hover:grayscale-0 transition-all duration-500 object-cover"
                />
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-6 md:-right-10 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-2xl animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl gradient-bg flex items-center justify-center font-black text-2xl">
                    5+
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-400 font-medium">سنوات من</p>
                    <p className="text-xl font-bold text-white leading-none">الخبرة</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
