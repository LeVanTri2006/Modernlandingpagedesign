import { motion } from 'motion/react';
import { Calendar, MapPin, Ticket } from 'lucide-react';
import { useState } from 'react';

interface Event {
  id: number;
  date: string;
  day: string;
  month: string;
  name: string;
  venue: string;
  city: string;
  country: string;
  backgroundImage: string;
  ticketUrl: string;
}

const events: Event[] = [
  {
    id: 1,
    date: '15',
    day: 'THỨ BẢY',
    month: 'THÁNG 2, 2025',
    name: 'Aria Live in Concert',
    venue: 'Nhà hát Lớn Hà Nội',
    city: 'Hà Nội',
    country: 'Việt Nam',
    backgroundImage: 'https://images.unsplash.com/photo-1583915223588-7d88ebf23414?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2t5byUyMG5pZ2h0JTIwY2l0eXxlbnwxfHx8fDE3Njg2NTU4MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ticketUrl: '#'
  },
  {
    id: 2,
    date: '22',
    day: 'THỨ NĂM',
    month: 'THÁNG 2, 2025',
    name: 'Midnight Dreams Tour',
    venue: 'Sân vận động Phú Thọ',
    city: 'TP. Hồ Chí Minh',
    country: 'Việt Nam',
    backgroundImage: 'https://images.unsplash.com/photo-1664353655151-9d94a9170eb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXclMjB5b3JrJTIwc2t5bGluZSUyMG5pZ2h0fGVufDF8fHx8MTc2ODY1NTgwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    ticketUrl: '#'
  },
  {
    id: 3,
    date: '05',
    day: 'CHỦ NHẬT',
    month: 'THÁNG 3, 2025',
    name: 'Echoes Festival',
    venue: 'Công viên Âm nhạc',
    city: 'Đà Nẵng',
    country: 'Việt Nam',
    backgroundImage: 'https://images.unsplash.com/photo-1578802212053-333ac0989c27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb25kb24lMjBjaXR5JTIwbGlnaHRzfGVufDF8fHx8MTc2ODY1NTgwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    ticketUrl: '#'
  },
  {
    id: 4,
    date: '18',
    day: 'THỨ BẢY',
    month: 'THÁNG 3, 2025',
    name: 'Golden Hour Live',
    venue: 'Trung tâm Hội nghị Quốc gia',
    city: 'Hà Nội',
    country: 'Việt Nam',
    backgroundImage: 'https://images.unsplash.com/photo-1750810908078-a4729905bf4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwbmlnaHQlMjBza3lsaW5lfGVufDF8fHx8MTc2ODY1NTcyNXww&ixlib=rb-4.1.0&q=80&w=1080',
    ticketUrl: '#'
  }
];

export function UpcomingEvents() {
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null);

  return (
    <section id="sự kiện" className="relative py-24 overflow-hidden">
      {/* Background Image with hover effect */}
      <div className="absolute inset-0 transition-opacity duration-700">
        {events.map((event) => (
          <div
            key={event.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              hoveredEvent === event.id ? 'opacity-30' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${event.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(20px)'
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e] via-black/80 to-black" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="gradient-neon mb-4">Lịch Diễn</h2>
          <p className="text-xl text-gray-400">Đặt vé ngay để không bỏ lỡ những đêm nhạc đặc biệt</p>
        </motion.div>

        {/* Events List */}
        <div className="space-y-4">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredEvent(event.id)}
              onMouseLeave={() => setHoveredEvent(null)}
              className={`group border border-white/10 backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-300 ${
                hoveredEvent === event.id
                  ? 'bg-white/10 border-yellow-500/50 shadow-lg shadow-yellow-500/20'
                  : 'bg-white/5 hover:bg-white/10'
              }`}
            >
              <div className="p-6 flex flex-col md:flex-row md:items-center gap-6">
                {/* Date Box */}
                <div className="flex-shrink-0">
                  <div className={`w-20 h-20 rounded-lg flex flex-col items-center justify-center border-2 transition-colors ${
                    hoveredEvent === event.id
                      ? 'border-yellow-500 bg-gradient-to-br from-yellow-500/20 to-pink-500/20'
                      : 'border-white/20 bg-white/5'
                  }`}>
                    <div className="text-3xl font-sans font-bold">{event.date}</div>
                    <div className="text-xs text-gray-400 font-sans">{event.month.split(',')[0]}</div>
                  </div>
                </div>

                {/* Event Info */}
                <div className="flex-grow space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-400 font-sans">
                    <Calendar size={16} />
                    <span>{event.day}</span>
                  </div>
                  <h3 className="text-2xl font-sans font-bold text-white group-hover:text-yellow-400 transition-colors">
                    {event.name}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-gray-300">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-pink-500" />
                      <span className="text-sm">{event.venue}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-sans font-semibold">{event.city}, {event.country}</span>
                    </div>
                  </div>
                </div>

                {/* Ticket Button */}
                <motion.a
                  href={event.ticketUrl}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex-shrink-0 px-8 py-3 rounded-full font-sans font-semibold flex items-center gap-2 transition-all ${
                    hoveredEvent === event.id
                      ? 'bg-gradient-neon text-white shadow-lg shadow-pink-500/50'
                      : 'border-2 border-white/30 text-white hover:bg-white/10'
                  }`}
                >
                  <Ticket size={18} />
                  <span>Mua Vé</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Events */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-pink-500 text-pink-500 px-10 py-3 rounded-full font-sans font-semibold hover:bg-pink-500 hover:text-white transition-all"
          >
            Xem Tất Cả Sự Kiện
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
