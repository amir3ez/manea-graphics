
import React from 'react';
import { Phone, Mail, MapPin, Send, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    { icon: <Phone className="w-6 h-6" />, label: 'رقم الهاتف', value: '+967 772 655 825', href: 'tel:+967772655825' },
    { icon: <Mail className="w-6 h-6" />, label: 'البريد الإلكتروني', value: 'manea.izz2013@gmail.com', href: 'mailto:manea.izz2013@gmail.com' },
    { icon: <MapPin className="w-6 h-6" />, label: 'الموقع', value: 'اليمن - صنعاء', href: '#' },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
       {/* Background Glow */}
       <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[150px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div className="text-right">
            <h2 className="text-sm font-bold tracking-[0.2em] text-purple-500 uppercase mb-4">تواصل معي</h2>
            <h3 className="text-4xl font-black mb-8">دعنا نحول فكرتك إلى <span className="gradient-text">واقع</span></h3>
            <p className="text-gray-400 mb-12 text-lg leading-relaxed">
              سواء كنت تبحث عن هوية بصرية جديدة أو ترغب في تطوير واجهات مشروعك القادم، أنا هنا لمساعدتك. تواصل معي الآن لنبدأ الرحلة.
            </p>

            <div className="space-y-8 mb-12">
              {contactInfo.map((info, idx) => (
                <a key={idx} href={info.href} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 flex items-center justify-center rounded-2xl glass-effect text-purple-400 group-hover:gradient-bg group-hover:text-white transition-all duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-bold">{info.label}</p>
                    <p className="text-xl font-bold text-gray-200">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex gap-4">
              <a href="#" className="p-4 glass-effect rounded-2xl hover:bg-purple-600 transition-colors"><Instagram /></a>
              <a href="#" className="p-4 glass-effect rounded-2xl hover:bg-blue-600 transition-colors"><Facebook /></a>
              <a href="#" className="p-4 glass-effect rounded-2xl hover:bg-sky-500 transition-colors"><Twitter /></a>
            </div>
          </div>

          {/* Form Side */}
          <div className="glass-effect p-8 md:p-12 rounded-[3rem] border border-white/10 shadow-2xl relative">
            <div className="absolute -top-10 -left-10 w-24 h-24 gradient-bg rounded-3xl -z-10 rotate-12 blur-2xl opacity-20"></div>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-2 mr-2">الاسم بالكامل</label>
                  <input type="text" placeholder="مثال: أحمد محمد" className="w-full bg-[#0a0514]/50 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-purple-500 transition-colors text-right" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-2 mr-2">رقم الهاتف</label>
                  <input type="tel" placeholder="+967..." className="w-full bg-[#0a0514]/50 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-purple-500 transition-colors text-right" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2 mr-2">الموضوع</label>
                <input type="text" placeholder="ما هو نوع المشروع؟" className="w-full bg-[#0a0514]/50 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-purple-500 transition-colors text-right" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2 mr-2">رسالتك</label>
                <textarea rows={4} placeholder="اكتب تفاصيل مشروعك هنا..." className="w-full bg-[#0a0514]/50 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-purple-500 transition-colors text-right resize-none"></textarea>
              </div>

              <button className="w-full gradient-bg py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-purple-600/30 transition-all hover:scale-[1.02] active:scale-95">
                إرسال الطلب
                <Send size={24} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
