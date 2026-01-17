import { motion } from 'motion/react';
import { ArrowRight, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BlogPost {
  id: number;
  title: string;
  category: string;
  date: string;
  readTime: string;
  thumbnail: string;
  excerpt: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Hậu Trường MV "Midnight Dreams" - Những Khoảnh Khắc Chưa Kể',
    category: 'Hậu Trường',
    date: '12 Tháng 1, 2025',
    readTime: '5 phút đọc',
    thumbnail: 'https://images.unsplash.com/photo-1593697725250-6a184f4e9ed0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHJlY29yZGluZyUyMHN0dWRpb3xlbnwxfHx8fDE3Njg2NTU4MzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    excerpt: 'Khám phá những câu chuyện đằng sau quá trình sản xuất MV mới nhất của Aria...'
  },
  {
    id: 2,
    title: 'Nhật Ký Tour Diễn: Những Trải Nghiệm Khó Quên Tại Châu Âu',
    category: 'Tour Diễn',
    date: '08 Tháng 1, 2025',
    readTime: '8 phút đọc',
    thumbnail: 'https://images.unsplash.com/photo-1537132019141-4a1d685f9219?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWhpbmQlMjB0aGUlMjBzY2VuZXMlMjBtdXNpYyUyMHZpZGVvfGVufDF8fHx8MTc2ODY1NTgzMXww&ixlib=rb-4.1.0&q=80&w=1080',
    excerpt: 'Hành trình qua 15 thành phố châu Âu với những khoảnh khắc đáng nhớ và kết nối với fan...'
  },
  {
    id: 3,
    title: 'Album Mới "Echoes of Love" - Câu Chuyện Sáng Tác Và Cảm Hứng',
    category: 'Âm Nhạc',
    date: '03 Tháng 1, 2025',
    readTime: '6 phút đọc',
    thumbnail: 'https://images.unsplash.com/photo-1587545634538-50a9b6b3168f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHRvdXIlMjBiYWNrc3RhZ2V8ZW58MXx8fHwxNzY4NjU1ODMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    excerpt: 'Đi sâu vào quá trình sáng tác và những cảm xúc đặc biệt trong album mới nhất...'
  }
];

export function BlogNews() {
  return (
    <section id="tin tức" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-white mb-4">Tin Tức & Hoạt Động</h2>
              <p className="text-xl text-gray-400">Cập nhật những hoạt động và câu chuyện mới nhất</p>
            </div>
            <motion.button
              whileHover={{ x: 5 }}
              className="text-yellow-500 font-sans font-semibold flex items-center gap-2 hover:gap-3 transition-all"
            >
              Xem Tất Cả
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </motion.div>

        {/* Featured Post */}
        <motion.article
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 group cursor-pointer"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-900">
              <ImageWithFallback
                src={blogPosts[0].thumbnail}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-4 py-2 bg-gradient-neon text-white text-sm font-sans font-semibold rounded-full">
                  {blogPosts[0].category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-4 font-sans">
                <span>{blogPosts[0].date}</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>{blogPosts[0].readTime}</span>
                </div>
              </div>
              <h3 className="text-3xl font-sans font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                {blogPosts[0].title}
              </h3>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                {blogPosts[0].excerpt}
              </p>
              <motion.button
                whileHover={{ x: 5 }}
                className="text-pink-500 font-sans font-semibold flex items-center gap-2 hover:gap-3 transition-all"
              >
                Đọc Thêm
                <ArrowRight size={18} />
              </motion.button>
            </div>
          </div>
        </motion.article>

        {/* Other Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-gray-900">
                <ImageWithFallback
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-sans font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-3 font-sans">
                <span>{post.date}</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>{post.readTime}</span>
                </div>
              </div>
              <h3 className="text-xl font-sans font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-gray-300 mb-4 line-clamp-2">
                {post.excerpt}
              </p>
              <motion.button
                whileHover={{ x: 5 }}
                className="text-pink-500 font-sans font-semibold flex items-center gap-2 hover:gap-3 transition-all text-sm"
              >
                Đọc Thêm
                <ArrowRight size={16} />
              </motion.button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
