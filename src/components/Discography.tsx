import { motion } from 'motion/react';
import { Play, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Album {
  id: number;
  title: string;
  year: string;
  cover: string;
  spotify: string;
  apple: string;
  youtube: string;
}

const albums: Album[] = [
  {
    id: 1,
    title: 'Midnight Dreams',
    year: '2024',
    cover: 'https://images.unsplash.com/photo-1616663395403-2e0052b8e595?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGFsYnVtJTIwY292ZXIlMjB2aW55bHxlbnwxfHx8fDE3Njg2NTU3MjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    spotify: '#',
    apple: '#',
    youtube: '#'
  },
  {
    id: 2,
    title: 'Echoes of Love',
    year: '2023',
    cover: 'https://images.unsplash.com/photo-1709731191876-899e32264420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZ2UlMjBsaWdodHN8ZW58MXx8fHwxNzY4NTQ5NjEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    spotify: '#',
    apple: '#',
    youtube: '#'
  },
  {
    id: 3,
    title: 'Silent Symphony',
    year: '2023',
    cover: 'https://images.unsplash.com/photo-1646206346896-14367dee001b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHN0dWRpbyUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3Njg1OTMyODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    spotify: '#',
    apple: '#',
    youtube: '#'
  },
  {
    id: 4,
    title: 'Golden Hour',
    year: '2022',
    cover: 'https://images.unsplash.com/photo-1750810908078-a4729905bf4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwbmlnaHQlMjBza3lsaW5lfGVufDF8fHx8MTc2ODY1NTcyNXww&ixlib=rb-4.1.0&q=80&w=1080',
    spotify: '#',
    apple: '#',
    youtube: '#'
  }
];

export function Discography() {
  const [hoveredAlbum, setHoveredAlbum] = useState<number | null>(null);

  return (
    <section id="âm nhạc" className="py-24 bg-gradient-to-b from-black to-[#1a1a2e]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="gradient-gold mb-4">Âm Nhạc</h2>
          <p className="text-xl text-gray-400">Khám phá những sản phẩm âm nhạc mới nhất</p>
        </motion.div>

        {/* Albums Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {albums.map((album, index) => (
            <motion.div
              key={album.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredAlbum(album.id)}
              onMouseLeave={() => setHoveredAlbum(null)}
              className="group relative"
            >
              {/* Album Cover */}
              <div className="relative aspect-square rounded-lg overflow-hidden mb-4 bg-gray-900">
                <ImageWithFallback
                  src={album.cover}
                  alt={album.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${
                  hoveredAlbum === album.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  {/* Play Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-16 h-16 rounded-full bg-gradient-neon flex items-center justify-center shadow-lg shadow-pink-500/50"
                  >
                    <Play size={24} fill="white" className="text-white ml-1" />
                  </motion.button>

                  {/* Quick Links */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 justify-center">
                    <motion.a
                      href={album.spotify}
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                      title="Spotify"
                    >
                      <ExternalLink size={16} className="text-white" />
                    </motion.a>
                    <motion.a
                      href={album.apple}
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                      title="Apple Music"
                    >
                      <ExternalLink size={16} className="text-white" />
                    </motion.a>
                    <motion.a
                      href={album.youtube}
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                      title="YouTube Music"
                    >
                      <ExternalLink size={16} className="text-white" />
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Album Info */}
              <div>
                <h3 className="text-white font-sans font-bold mb-1 group-hover:text-yellow-400 transition-colors">
                  {album.title}
                </h3>
                <p className="text-gray-500 text-sm font-sans">{album.year}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
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
            className="border-2 border-yellow-500 text-yellow-500 px-10 py-3 rounded-full font-sans font-semibold hover:bg-yellow-500 hover:text-black transition-all"
          >
            Xem Tất Cả
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
