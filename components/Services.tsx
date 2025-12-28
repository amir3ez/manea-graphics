
import React from 'react';
import { Globe, Video, Palette, Megaphone, Camera, AppWindow } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'الهوية البصرية',
      desc: 'بناء علامات تجارية قوية ومتكاملة تعبر عن رؤيتك وتترك أثراً باقياً.',
      icon: <Palette className="w-8 h-8" />,
    },
    {
      title: 'تصميم المواقع',
      desc: 'تصميم واجهات وتجربة مستخدم للمواقع الإلكترونية باحترافية وسهولة استخدام.',
      icon: <Globe className="w-8 h-8" />,
    },
    {
      title: 'المونتاج السينمائي',
      desc: 'تعديل الفيديوهات بلمسة سينمائية جذابة تروي قصتك بفعالية.',
      icon: <Video className="w-8 h-8" />,
    },
    {
      title: 'الإعلانات التسويقية',
      desc: 'تصميم إعلانات مبتكرة تهدف لزيادة المبيعات والانتشار لعلامتك التجارية.',
      icon: <Megaphone className="w-8 h-8" />,
    },
    {
      title: 'التصوير الفوتوغرافي',
      desc: 'توثيق اللحظات والمنتجات بجودة عالية وزوايا فنية احترافية.',
      icon: <Camera className="w-8 h-8" />,
    },
    {
      title: 'تصميم UI/UX',
      desc: 'ابتكار واجهات تطبيقات ذكية تركز على راحة المستخدم وكفاءة الأداء.',
      icon: <AppWindow className="w-8 h-8" />,
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#0d071b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-purple-500 uppercase mb-4">ماذا أقدم؟</h2>
          <h3 className="text-3xl md:text-5xl font-black mb-6">خدمات <span className="gradient-text">إبداعية</span> متكاملة</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            نقدم حلولاً بصرية متكاملة تلبي تطلعاتك وتساعدك على التميز في سوق العمل من خلال تصاميم فريدة ومبتكرة.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative p-8 rounded-[2rem] glass-effect hover:bg-white/5 transition-all duration-300 hover:-translate-y-2 border border-white/5 overflow-hidden">
              <div className="absolute top-0 left-0 w-24 h-24 bg-purple-600/10 rounded-full -translate-x-12 -translate-y-12 blur-2xl group-hover:bg-purple-600/30 transition-all"></div>
              
              <div className="mb-6 inline-flex p-4 rounded-2xl bg-[#1a1129] text-purple-400 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all">
                {service.icon}
              </div>
              
              <h4 className="text-2xl font-bold mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h4>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
