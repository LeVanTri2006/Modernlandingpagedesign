import { motion } from 'motion/react';
import { Mail, Send, Instagram, Facebook, Youtube, Music2 } from 'lucide-react';
import { useState, FormEvent } from 'react';

export function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.');
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', url: '#', color: 'hover:text-pink-500' },
    { icon: Facebook, label: 'Facebook', url: '#', color: 'hover:text-blue-500' },
    { icon: Youtube, label: 'YouTube', url: '#', color: 'hover:text-red-500' },
    { icon: Music2, label: 'TikTok', url: '#', color: 'hover:text-cyan-400' }
  ];

  return (
    <footer id="liên hệ" className="relative pt-24 pb-12 bg-gradient-to-b from-black to-[#0a0a0a]">
      {/* Newsletter & Contact Section */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-sans font-bold text-white mb-4">
              Nhận Tin Tức Mới Nhất
            </h3>
            <p className="text-gray-400 mb-6">
              Đăng ký để nhận thông tin về ca khúc mới, lịch diễn và các hoạt động đặc biệt.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email của bạn"
                className="flex-grow px-4 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-6 py-3 bg-gradient-neon text-white rounded-full flex items-center gap-2 font-sans font-semibold shadow-lg shadow-pink-500/30"
              >
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-sans font-bold text-white mb-4">
              Liên Hệ Công Việc
            </h3>
            <p className="text-gray-400 mb-6">
              Để hợp tác, booking hoặc các công việc khác, vui lòng liên hệ: 
              <a href="mailto:booking@aria-nguyen.com" className="text-yellow-500 hover:text-yellow-400 ml-2">
                booking@aria-nguyen.com
              </a>
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Tên của bạn"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors"
              />
              <textarea
                placeholder="Nội dung"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={3}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors resize-none"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-6 py-3 bg-yellow-500 text-black rounded-lg font-sans font-bold hover:bg-yellow-400 transition-colors"
              >
                Gửi Tin Nhắn
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Social Media */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 py-12 border-t border-white/10"
      >
        <div className="text-center mb-8">
          <h3 className="text-2xl font-sans font-bold text-white mb-4">Kết Nối Với Tôi</h3>
          <p className="text-gray-400">Theo dõi để cập nhật những hoạt động mới nhất</p>
        </div>
        <div className="flex justify-center gap-6 mb-12">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.1 }}
              className={`w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white transition-all ${social.color}`}
              aria-label={social.label}
            >
              <social.icon size={28} />
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span className="gradient-gold text-xl font-sans font-bold">ARIA</span>
            <span>© 2025 Aria Nguyen. All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Chính Sách Bảo Mật</a>
            <a href="#" className="hover:text-white transition-colors">Điều Khoản Sử Dụng</a>
            <a href="#" className="hover:text-white transition-colors">Press Kit</a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-50" />
    </footer>
  );
}
