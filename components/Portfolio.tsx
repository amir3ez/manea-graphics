
import React, { useState } from 'react';
import { ExternalLink, Search, X, Layers, Info, Target, Quote, Star } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  img: string;
  description: string;
  technologies: string[];
  goals: string;
  feedback?: {
    name: string;
    role: string;
    comment: string;
  };
}

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('الكل');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    'الكل',
    'Branding',
    'UI/UX',
    'Advertising',
    'Montage',
    'Graphics',
    'Web Design'
  ];

  const projects: Project[] = [
    { 
      title: 'هوية تجارية لشركة تقنية', 
      category: 'Branding', 
      img: 'https://picsum.photos/seed/p1/800/600',
      description: 'تصميم هوية بصرية متكاملة تشمل الشعار، الألوان، والخطوط الرسمية لشركة ناشئة في مجال التقنية والذكاء الاصطناعي.',
      technologies: ['Adobe Illustrator', 'Photoshop', 'Brand Strategy'],
      goals: 'خلق انطباع احترافي ومستقبلي يعكس طموح الشركة في قيادة سوق الذكاء الاصطناعي.',
      feedback: {
        name: 'م. عبدالله السقاف',
        role: 'المدير التنفيذي',
        comment: 'لقد تجاوز مانع توقعاتنا في فهم رؤيتنا وتحويلها إلى هوية بصرية مذهلة نعتز بها.'
      }
    },
    { 
      title: 'تصميم تطبيق متجر إلكتروني', 
      category: 'UI/UX', 
      img: 'https://picsum.photos/seed/p2/800/600',
      description: 'تجربة مستخدم حديثة تهدف لتسهيل عملية الشراء عبر الجوال مع واجهات جذابة تدعم الوضع الداكن.',
      technologies: ['Figma', 'UI Design', 'User Testing'],
      goals: 'تبسيط رحلة العميل من البحث عن المنتج وحتى الدفع في أقل من 3 خطوات.',
      feedback: {
        name: 'سارة خالد',
        role: 'مديرة العمليات',
        comment: 'تصميم سلس جداً، واجهات التطبيق مريحة للعين وسهلة الاستخدام، لاحظنا زيادة في التفاعل.'
      }
    },
    { 
      title: 'حملة إعلانية لمطعم فاخر', 
      category: 'Advertising', 
      img: 'https://picsum.photos/seed/p3/800/600',
      description: 'مجموعة من التصاميم الإعلانية المخصصة لمنصات التواصل الاجتماعي لزيادة الوعي بالعلامة التجارية وجذب العملاء.',
      technologies: ['Photoshop', 'Digital Marketing', 'Social Media'],
      goals: 'تحويل زوار صفحة الانستغرام إلى عملاء حقيقيين وزيادة الحجوزات بنسبة 20%.',
      feedback: {
        name: 'عمر الصبري',
        role: 'مالك المطعم',
        comment: 'التصاميم جذابة جداً وتعبر عن رقي المطعم. النتائج كانت فورية في زيادة عدد الحجوزات.'
      }
    },
    { 
      title: 'مونتاج فيديو ترويجي', 
      category: 'Montage', 
      img: 'https://picsum.photos/seed/p4/800/600',
      description: 'تحرير فيديو ترويجي مدته 60 ثانية باستخدام مؤثرات بصرية وصوتية سينمائية لتعزيز التأثير العاطفي.',
      technologies: ['After Effects', 'Premiere Pro', 'Sound Design'],
      goals: 'رواية قصة المنتج بشكل عاطفي يحرك مشاعر المشاهدين ويدفعهم للمشاركة.',
      feedback: {
        name: 'ياسين أحمد',
        role: 'منتج محتوى',
        comment: 'مانع مبدع في اختيار الزوايا والمؤثرات الصوتية، الفيديو حقق انتشاراً واسعاً.'
      }
    },
    { 
      title: 'غلاف مجلة فني', 
      category: 'Graphics', 
      img: 'https://picsum.photos/seed/p5/800/600',
      description: 'تصميم فني لغلاف مجلة ثقافية يمزج بين الحداثة والتراث باستخدام تقنيات دمج الصور المتقدمة.',
      technologies: ['Digital Art', 'Manipulation', 'Typography'],
      goals: 'تقديم غلاف لافت للنظر في أكشاك المجلات يجمع بين الأصالة والحداثة الفنية.',
      feedback: {
        name: 'د. ليلى حسن',
        role: 'رئيسة التحرير',
        comment: 'الغلاف كان قطعة فنية بحد ذاتها، تلقينا الكثير من الإطراءات من القراء والمثقفين.'
      }
    },
    { 
      title: 'تصميم واجهة لوحة تحكم', 
      category: 'Web Design', 
      img: 'https://picsum.photos/seed/p6/800/600',
      description: 'واجهة تحكم معقدة ومبسطة في آن واحد لإدارة البيانات والتحليلات لشركات إدارة المشاريع.',
      technologies: ['Tailwind CSS', 'Figma', 'Web Layout'],
      goals: 'تنظيم كميات ضخمة من البيانات في رسوم بيانية سهلة الفهم لمتخذي القرار.',
      feedback: {
        name: 'م. فؤاد منصور',
        role: 'مدير تكنولوجيا المعلومات',
        comment: 'أصبح فريق العمل أكثر إنتاجية بفضل تنظيم البيانات وسهولة الوصول للمعلومات في لوحة التحكم.'
      }
    },
  ];

  const filteredProjects = activeFilter === 'الكل' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="text-right">
            <h2 className="text-sm font-bold tracking-[0.2em] text-pink-500 uppercase mb-4">معرض الأعمال</h2>
            <h3 className="text-3xl md:text-5xl font-black">أحدث <span className="gradient-text">إبداعاتي</span> الفنية</h3>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-start md:justify-center gap-3 mb-12 overflow-x-auto pb-4 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2.5 rounded-full font-bold transition-all duration-300 whitespace-nowrap ${
                activeFilter === cat
                  ? 'gradient-bg text-white shadow-lg shadow-purple-500/30'
                  : 'glass-effect text-gray-400 hover:text-white border border-white/5 hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[600px]">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div 
                key={project.title} 
                className="group relative overflow-hidden rounded-[2.5rem] bg-[#1a1129] aspect-[4/3] border border-white/5 animate-in fade-in zoom-in duration-500"
              >
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-700 opacity-80 group-hover:opacity-100"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-purple-400 font-bold text-sm mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {project.category}
                  </span>
                  <h4 className="text-2xl font-bold mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {project.title}
                  </h4>
                  
                  <div className="flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="p-3 bg-white/10 backdrop-blur-md rounded-xl hover:bg-white/20 transition-colors"
                    >
                      <Search size={20} />
                    </button>
                    <button className="p-3 bg-purple-600 rounded-xl hover:bg-purple-700 transition-colors shadow-lg shadow-purple-900/40">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-20 text-gray-500">
              <p className="text-xl font-bold">لا توجد مشاريع في هذه الفئة حالياً</p>
            </div>
          )}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-[#0a0514]/90 backdrop-blur-md transition-opacity"
            onClick={() => setSelectedProject(null)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative w-full max-w-5xl bg-[#110a1f] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl flex flex-col lg:flex-row animate-in fade-in zoom-in duration-300 my-auto">
            {/* Enhanced Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 left-6 z-50 w-12 h-12 flex items-center justify-center rounded-full gradient-bg text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] hover:scale-110 hover:rotate-180 active:scale-90 transition-all duration-500 group"
              aria-label="إغلاق"
            >
              <X size={24} className="group-hover:scale-75 transition-transform duration-500" />
            </button>

            {/* Image Section */}
            <div className="lg:w-1/2 h-[300px] lg:h-auto relative">
              <img 
                src={selectedProject.img} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#110a1f] via-transparent to-transparent lg:bg-gradient-to-r"></div>
            </div>

            {/* Details Section */}
            <div className="lg:w-1/2 p-8 lg:p-12 text-right flex flex-col max-h-[90vh] overflow-y-auto custom-scrollbar">
              <div className="flex items-center gap-2 text-purple-400 font-bold mb-4">
                <Layers size={18} />
                <span>{selectedProject.category}</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
                {selectedProject.title}
              </h2>

              <div className="space-y-8">
                {/* Description */}
                <div>
                  <div className="flex items-center gap-2 mb-2 text-white font-bold">
                    <Info size={18} className="text-purple-500" />
                    <h4>حول المشروع</h4>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Goals */}
                <div>
                  <div className="flex items-center gap-2 mb-2 text-white font-bold">
                    <Target size={18} className="text-pink-500" />
                    <h4>أهداف المشروع</h4>
                  </div>
                  <p className="text-gray-400 leading-relaxed italic">
                    {selectedProject.goals}
                  </p>
                </div>

                {/* Client Feedback */}
                {selectedProject.feedback && (
                  <div className="p-6 rounded-2xl glass-effect border-r-4 border-purple-600 relative overflow-hidden">
                    <Quote size={48} className="absolute -top-2 -left-2 text-purple-600/10" />
                    <div className="flex items-center gap-1 mb-3">
                      {[1,2,3,4,5].map(s => <Star key={s} size={14} className="fill-yellow-500 text-yellow-500" />)}
                    </div>
                    <p className="text-gray-200 font-medium mb-4 leading-relaxed relative z-10">
                      "{selectedProject.feedback.comment}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center font-bold text-sm">
                        {selectedProject.feedback.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">{selectedProject.feedback.name}</p>
                        <p className="text-xs text-gray-500">{selectedProject.feedback.role}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Technologies */}
                <div>
                  <h4 className="text-white font-bold mb-4">التقنيات المستخدمة:</h4>
                  <div className="flex flex-wrap gap-2 justify-end">
                    {selectedProject.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-4 py-1.5 rounded-lg glass-effect text-sm font-medium text-gray-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4 justify-end mt-12 pt-8 border-t border-white/5">
                <a 
                  href="#"
                  className="flex items-center gap-2 px-8 py-3.5 rounded-2xl gradient-bg font-black text-lg shadow-lg shadow-purple-900/40 hover:scale-105 transition-transform"
                >
                  <ExternalLink size={20} />
                  مشاهدة المشروع
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(147, 51, 234, 0.3);
          border-radius: 10px;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
