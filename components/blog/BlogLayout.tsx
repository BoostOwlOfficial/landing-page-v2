import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Clock, User, ChevronRight, Search, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getBlogPosts, BlogPost } from './blogData';

// Inline styles for blog content rendering
const blogContentStyles = `
  .blog-content h2 {
    font-size: 1.6rem;
    font-weight: 800;
    color: #fff;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    line-height: 1.25;
    letter-spacing: -0.02em;
  }
  .blog-content h3 {
    font-size: 1.15rem;
    font-weight: 700;
    color: #e0f2f1;
    margin-top: 1.8rem;
    margin-bottom: 0.6rem;
  }
  .blog-content p {
    font-size: 1.05rem;
    line-height: 1.85;
    color: #a0c4c4;
    margin-bottom: 1.1rem;
  }
  .blog-content strong {
    color: #e0f2f1;
    font-weight: 600;
  }
  .blog-content em {
    color: #00dfa2;
    font-style: italic;
  }
  .blog-content blockquote {
    border-left: 3px solid #00dfa2;
    background: rgba(0,91,91,0.25);
    padding: 1.2rem 1.5rem;
    margin: 1.8rem 0;
    border-radius: 0 12px 12px 0;
    font-style: italic;
    color: #e0f2f1;
    font-size: 1.05rem;
    line-height: 1.65;
  }
  .blog-content blockquote cite {
    display: block;
    margin-top: 0.5rem;
    font-size: 0.8rem;
    color: #00dfa2;
    font-style: normal;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  .blog-content ul, .blog-content ol {
    margin: 1.2rem 0;
    padding-left: 1.5rem;
    color: #a0c4c4;
  }
  .blog-content li {
    margin-bottom: 0.7rem;
    font-size: 1.02rem;
    line-height: 1.75;
  }
  .blog-content table {
    width: 100%;
    border-collapse: collapse;
    margin: 1.8rem 0;
    font-size: 0.88rem;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid rgba(224,242,241,0.12);
  }
  .blog-content thead th {
    text-align: left;
    padding: 12px 14px;
    background: #002d31;
    color: #6b9e9e;
    font-weight: 600;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-bottom: 1px solid rgba(224,242,241,0.12);
  }
  .blog-content tbody td {
    padding: 11px 14px;
    border-bottom: 1px solid rgba(224,242,241,0.08);
    color: #a0c4c4;
    vertical-align: top;
  }
  .blog-content tbody tr:hover {
    background: rgba(0,223,162,0.03);
  }
  .blog-content .highlight {
    color: #00dfa2 !important;
    font-weight: 700 !important;
  }
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
`;

export const BlogLayout: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const allPosts = getBlogPosts().filter(p => p.published);
    setPosts(allPosts);
    if (allPosts.length > 0) {
      setSelectedPostId(allPosts[0].id);
    }
  }, []);

  const filteredPosts = posts.filter(p =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedPost = posts.find(p => p.id === selectedPostId);

  return (
    <>
      <style>{blogContentStyles}</style>
      <div className="min-h-screen" style={{ background: '#00383d', paddingTop: '80px' }}>
        <div className="flex" style={{ minHeight: 'calc(100vh - 80px)' }}>

          {/* ── SIDEBAR ── */}
          <motion.aside
            initial={false}
            animate={{ width: sidebarOpen ? 340 : 0, opacity: sidebarOpen ? 1 : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="hidden md:block flex-shrink-0 overflow-hidden"
            style={{
              borderRight: '1px solid rgba(224,242,241,0.08)',
              background: '#002d31',
              height: 'calc(100vh - 80px)',
              position: 'sticky',
              top: '80px',
            }}
          >
            <div className="h-full overflow-y-auto no-scrollbar p-5" style={{ width: 340 }}>
              {/* Header */}
              <div className="flex items-center gap-2 mb-5">
                <BookOpen className="w-5 h-5" style={{ color: '#00dfa2' }} />
                <span className="font-bold text-white text-lg tracking-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Blog Posts
                </span>
              </div>

              {/* Search */}
              <div className="relative mb-5">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#6b9e9e' }} />
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm focus:outline-none transition-all"
                  style={{
                    background: 'rgba(0,91,91,0.25)',
                    border: '1px solid rgba(224,242,241,0.1)',
                    color: '#e0f2f1',
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                />
              </div>

              {/* Post List */}
              <div className="space-y-2">
                {filteredPosts.map((post) => (
                  <motion.button
                    key={post.id}
                    onClick={() => setSelectedPostId(post.id)}
                    whileHover={{ x: 4 }}
                    className="w-full text-left rounded-xl p-3.5 transition-all group"
                    style={{
                      background: selectedPostId === post.id
                        ? 'rgba(0,223,162,0.1)'
                        : 'transparent',
                      border: selectedPostId === post.id
                        ? '1px solid rgba(0,223,162,0.25)'
                        : '1px solid transparent',
                    }}
                  >
                    {/* Category badge */}
                    <span
                      className="inline-block text-xs font-bold px-2 py-0.5 rounded-full mb-2"
                      style={{
                        background: 'rgba(0,223,162,0.1)',
                        color: '#00dfa2',
                        border: '1px solid rgba(0,223,162,0.2)',
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        fontSize: '10px',
                      }}
                    >
                      {post.category}
                    </span>
                    {/* Title */}
                    <h3
                      className="font-semibold text-sm leading-snug mb-1.5 transition-colors"
                      style={{
                        color: selectedPostId === post.id ? '#fff' : '#a0c4c4',
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                      }}
                    >
                      {post.title}
                    </h3>
                    {/* Meta */}
                    <div className="flex items-center gap-3 text-xs" style={{ color: '#6b9e9e' }}>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                      <span>{post.date}</span>
                    </div>
                  </motion.button>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <p className="text-center text-sm mt-6" style={{ color: '#6b9e9e' }}>
                  No posts found.
                </p>
              )}
            </div>
          </motion.aside>

          {/* ── MOBILE SIDEBAR TOGGLE ── */}
          <button
            className="md:hidden fixed bottom-6 left-6 z-50 p-3 rounded-full shadow-lg"
            style={{
              background: '#00dfa2',
              color: '#00383d',
            }}
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <BookOpen className="w-5 h-5" />
          </button>

          {/* ── MOBILE SIDEBAR OVERLAY ── */}
          <AnimatePresence>
            {sidebarOpen && (
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ duration: 0.3 }}
                className="md:hidden fixed inset-0 z-40 flex"
                style={{ paddingTop: '70px' }}
              >
                <div
                  className="w-80 h-full overflow-y-auto p-5"
                  style={{ background: '#002d31', borderRight: '1px solid rgba(224,242,241,0.08)' }}
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5" style={{ color: '#00dfa2' }} />
                      <span className="font-bold text-white text-lg">Blog Posts</span>
                    </div>
                    <button onClick={() => setSidebarOpen(false)} className="text-white">
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="relative mb-5">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#6b9e9e' }} />
                    <input
                      type="text"
                      placeholder="Search posts..."
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm focus:outline-none"
                      style={{
                        background: 'rgba(0,91,91,0.25)',
                        border: '1px solid rgba(224,242,241,0.1)',
                        color: '#e0f2f1',
                      }}
                    />
                  </div>

                  <div className="space-y-2">
                    {filteredPosts.map((post) => (
                      <button
                        key={post.id}
                        onClick={() => { setSelectedPostId(post.id); setSidebarOpen(false); }}
                        className="w-full text-left rounded-xl p-3.5 transition-all"
                        style={{
                          background: selectedPostId === post.id ? 'rgba(0,223,162,0.1)' : 'transparent',
                          border: selectedPostId === post.id ? '1px solid rgba(0,223,162,0.25)' : '1px solid transparent',
                        }}
                      >
                        <span className="inline-block text-xs font-bold px-2 py-0.5 rounded-full mb-2"
                          style={{ background: 'rgba(0,223,162,0.1)', color: '#00dfa2', border: '1px solid rgba(0,223,162,0.2)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                          {post.category}
                        </span>
                        <h3 className="font-semibold text-sm leading-snug mb-1.5"
                          style={{ color: selectedPostId === post.id ? '#fff' : '#a0c4c4' }}>
                          {post.title}
                        </h3>
                        <div className="flex items-center gap-3 text-xs" style={{ color: '#6b9e9e' }}>
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                          <span>{post.date}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex-1" onClick={() => setSidebarOpen(false)} style={{ background: 'rgba(0,0,0,0.5)' }} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── MAIN CONTENT ── */}
          <main className="flex-1 overflow-y-auto">
            <AnimatePresence mode="wait">
              {selectedPost ? (
                <motion.article
                  key={selectedPost.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="max-w-3xl mx-auto px-6 md:px-10 py-10"
                >
                  {/* Cover image */}
                  {selectedPost.coverImage && (
                    <div
                      className="w-full rounded-2xl mb-8 overflow-hidden"
                      style={{
                        aspectRatio: '16/9',
                        background: `url(${selectedPost.coverImage}) center/cover no-repeat`,
                        border: '1px solid rgba(224,242,241,0.1)',
                      }}
                    />
                  )}

                  {/* Category */}
                  <span
                    className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4"
                    style={{
                      background: 'rgba(0,223,162,0.1)',
                      color: '#00dfa2',
                      border: '1px solid rgba(0,223,162,0.25)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.07em',
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}
                  >
                    {selectedPost.category}
                  </span>

                  {/* Title */}
                  <h1
                    className="font-extrabold mb-4"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: 'clamp(28px, 5vw, 44px)',
                      lineHeight: 1.15,
                      letterSpacing: '-0.03em',
                      color: '#fff',
                    }}
                  >
                    {selectedPost.title}
                  </h1>

                  {/* Meta */}
                  <div
                    className="flex items-center flex-wrap gap-3 mb-8 text-sm"
                    style={{
                      color: '#6b9e9e',
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}
                  >
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5" style={{ color: '#00dfa2' }} />
                      <span style={{ color: '#00dfa2', fontWeight: 600 }}>{selectedPost.author}</span>
                    </span>
                    <span style={{ opacity: 0.4 }}>·</span>
                    <span>{selectedPost.date}</span>
                    <span style={{ opacity: 0.4 }}>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {selectedPost.readTime}
                    </span>
                  </div>

                  {/* Divider */}
                  <hr style={{ border: 'none', borderTop: '1px solid rgba(224,242,241,0.1)', margin: '0 0 2rem' }} />

                  {/* Content */}
                  <div
                    className="blog-content"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                  />

                  {/* CTA */}
                  <div
                    className="mt-12 p-8 rounded-2xl text-center relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, #005b5b, #00383d)',
                      border: '1px solid rgba(224,242,241,0.12)',
                    }}
                  >
                    <div
                      className="absolute -top-12 -right-12 w-48 h-48 rounded-full"
                      style={{ background: 'radial-gradient(circle, rgba(0,223,162,0.15), transparent)' }}
                    />
                    <h2 className="text-xl font-bold text-white mb-2 relative" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      Ready to Automate Your Business?
                    </h2>
                    <p className="text-sm mb-5 relative" style={{ color: '#a0c4c4', maxWidth: 440, margin: '0 auto 1.2rem' }}>
                      Get a free Automation Readiness Assessment from BoostOwl's experts.
                    </p>
                    <Link
                      to="/get-started"
                      className="inline-block font-bold rounded-full transition-all hover:scale-105"
                      style={{
                        background: '#00dfa2',
                        color: '#00383d',
                        padding: '12px 28px',
                        fontSize: '14px',
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        boxShadow: '0 0 20px rgba(0,223,162,0.4)',
                      }}
                    >
                      Get Your Free Assessment →
                    </Link>
                  </div>
                </motion.article>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <p style={{ color: '#6b9e9e' }}>Select a blog post from the sidebar to start reading.</p>
                </div>
              )}
            </AnimatePresence>
          </main>
        </div>
      </div>
    </>
  );
};
