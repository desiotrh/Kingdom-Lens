'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#131416] dark group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#2d2f34] px-10 py-3">
          <div className="flex items-center gap-4 text-white">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M39.998 35.764C39.9944 35.7463 39.9875 35.7155 39.9748 35.6706C39.9436 35.5601 39.8949 35.4259 39.8346 35.2825C39.8168 35.2403 39.7989 35.1993 39.7813 35.1602C38.5103 34.2887 35.9788 33.0607 33.7095 32.5189C30.9875 31.8691 27.6413 31.4783 24 31.4783C20.3587 31.4783 17.0125 31.8691 14.2905 32.5189C12.0012 33.0654 9.44505 34.3104 8.18538 35.1832C8.17384 35.2075 8.16216 35.233 8.15052 35.2592C8.09919 35.3751 8.05721 35.4886 8.02977 35.589C8.00356 35.6848 8.00039 35.7333 8.00004 35.7388C8.00004 35.739 8 35.7393 8.00004 35.7388C8.00004 35.7641 8.0104 36.0767 8.68485 36.6314C9.34546 37.1746 10.4222 37.7531 11.9291 38.2772C14.9242 39.319 19.1919 40 24 40C28.8081 40 33.0758 39.319 36.0709 38.2772C37.5778 37.7531 38.6545 37.1746 39.3151 36.6314C39.9006 36.1499 39.9857 35.8511 39.998 35.764ZM4.95178 32.7688L21.4543 6.30267C22.6288 4.4191 25.3712 4.41909 26.5457 6.30267L43.0534 32.777C43.0709 32.8052 43.0878 32.8338 43.104 32.8629L41.3563 33.8352C43.104 32.8629 43.1038 32.8626 43.104 32.8629L43.1051 32.865L43.1065 32.8675L43.1101 32.8739L43.1199 32.8918C43.1276 32.906 43.1377 32.9246 43.1497 32.9473C43.1738 32.9925 43.2062 33.0545 43.244 33.1299C43.319 33.2792 43.4196 33.489 43.5217 33.7317C43.6901 34.1321 44 34.9311 44 35.7391C44 37.4427 43.003 38.7775 41.8558 39.7209C40.6947 40.6757 39.1354 41.4464 37.385 42.0552C33.8654 43.2794 29.133 44 24 44C18.867 44 14.1346 43.2794 10.615 42.0552C8.86463 41.4464 7.30529 40.6757 6.14419 39.7209C4.99695 38.7775 3.99999 37.4427 3.99999 35.7391C3.99999 34.8725 4.29264 34.0922 4.49321 33.6393C4.60375 33.3898 4.71348 33.1804 4.79687 33.0311C4.83898 32.9556 4.87547 32.8935 4.9035 32.8471C4.91754 32.8238 4.92954 32.8043 4.93916 32.7889L4.94662 32.777L4.95178 32.7688ZM35.9868 29.004L24 9.77997L12.0131 29.004C12.4661 28.8609 12.9179 28.7342 13.3617 28.6282C16.4281 27.8961 20.0901 27.4783 24 27.4783C27.9099 27.4783 31.5719 27.8961 34.6383 28.6282C35.082 28.7342 35.5339 28.8609 35.9868 29.004Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
              Kingdom Lens
            </h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="hidden md:flex items-center gap-9">
              <Link href="/" className="text-white text-sm font-medium leading-normal hover:text-[#b7c6e0] transition-colors duration-200">
                Home
              </Link>
              <Link href="/dashboard/create" className="text-white text-sm font-medium leading-normal hover:text-[#b7c6e0] transition-colors duration-200">
                Create
              </Link>
              <Link href="/dashboard/saved" className="text-white text-sm font-medium leading-normal hover:text-[#b7c6e0] transition-colors duration-200">
                Saved
              </Link>
              <Link href="/dashboard/settings" className="text-white text-sm font-medium leading-normal hover:text-[#b7c6e0] transition-colors duration-200">
                Settings
              </Link>
            </div>
            <div className="hidden md:flex gap-2">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#b7c6e0] text-[#131416] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#b7c6e0]/90 transition-all duration-200">
                <span className="truncate">New Project</span>
              </button>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#2d2f34] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#2d2f34]/90 transition-all duration-200">
                <span className="truncate">Logout</span>
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex flex-1">
          {/* Sidebar */}
          <aside className="w-64 bg-[#131416]/30 border-r border-[#2d2f34] p-6">
            <nav className="space-y-4">
              <button
                onClick={() => setActiveTab('overview')}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 ${
                  activeTab === 'overview'
                    ? 'bg-[#b7c6e0] text-[#131416]'
                    : 'text-white hover:bg-[#131416]/50'
                }`}
              >
                📊 Overview
              </button>
              <button
                onClick={() => setActiveTab('projects')}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 ${
                  activeTab === 'projects'
                    ? 'bg-[#b7c6e0] text-[#131416]'
                    : 'text-white hover:bg-[#131416]/50'
                }`}
              >
                📁 Projects
              </button>
              <button
                onClick={() => setActiveTab('templates')}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 ${
                  activeTab === 'templates'
                    ? 'bg-[#b7c6e0] text-[#131416]'
                    : 'text-white hover:bg-[#131416]/50'
                }`}
              >
                🎨 Templates
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 ${
                  activeTab === 'analytics'
                    ? 'bg-[#b7c6e0] text-[#131416]'
                    : 'text-white hover:bg-[#131416]/50'
                }`}
              >
                📈 Analytics
              </button>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-8">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div>
                  <h1 className="text-white text-3xl font-black leading-tight tracking-[-0.033em] mb-4">
                    Welcome to Kingdom Lens
                  </h1>
                  <p className="text-white text-base font-normal leading-normal">
                    Capture moments, plan content, and share your vision with Kingdom purpose.
                  </p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-[#131416]/30 border border-[#2d2f34] rounded-xl p-6">
                    <div className="text-4xl mb-2">📸</div>
                    <h3 className="text-xl font-bold text-white mb-2">Total Projects</h3>
                    <p className="text-3xl font-bold text-[#b7c6e0]">12</p>
                  </div>
                  <div className="bg-[#131416]/30 border border-[#2d2f34] rounded-xl p-6">
                    <div className="text-4xl mb-2">🎯</div>
                    <h3 className="text-xl font-bold text-white mb-2">Active Plans</h3>
                    <p className="text-3xl font-bold text-[#b7c6e0]">5</p>
                  </div>
                  <div className="bg-[#131416]/30 border border-[#2d2f34] rounded-xl p-6">
                    <div className="text-4xl mb-2">⭐</div>
                    <h3 className="text-xl font-bold text-white mb-2">Saved Items</h3>
                    <p className="text-3xl font-bold text-[#b7c6e0]">28</p>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-[#131416]/30 border border-[#2d2f34] rounded-xl p-6">
                  <h2 className="text-white text-xl font-bold mb-4">Recent Activity</h2>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-[#131416]/20 rounded-lg">
                      <div className="text-2xl">📷</div>
                      <div className="flex-1">
                        <p className="text-white font-medium">New project created</p>
                        <p className="text-gray-400 text-sm">"Summer Photography Series" - 2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-[#131416]/20 rounded-lg">
                      <div className="text-2xl">📋</div>
                      <div className="flex-1">
                        <p className="text-white font-medium">Content plan updated</p>
                        <p className="text-gray-400 text-sm">"Weekly Content Calendar" - 1 day ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-[#131416]/20 rounded-lg">
                      <div className="text-2xl">💾</div>
                      <div className="flex-1">
                        <p className="text-white font-medium">Template saved</p>
                        <p className="text-gray-400 text-sm">"Faith-Based Photography Template" - 3 days ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="space-y-8">
                <div>
                  <h1 className="text-white text-3xl font-black leading-tight tracking-[-0.033em] mb-4">
                    Your Projects
                  </h1>
                  <p className="text-white text-base font-normal leading-normal">
                    Manage and organize your Kingdom-focused photography projects.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-[#131416]/30 border border-[#2d2f34] rounded-xl p-6 hover:bg-[#131416]/50 hover:border-[#b7c6e0]/50 transition-all duration-300">
                    <div className="text-4xl mb-4">📸</div>
                    <h3 className="text-xl font-bold text-white mb-2">Summer Photography Series</h3>
                    <p className="text-white text-sm mb-4">Capturing the beauty of God's creation through nature photography.</p>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-[#b7c6e0] text-[#131416] text-sm font-bold rounded-lg hover:bg-[#b7c6e0]/90 transition-all duration-200">
                        Edit
                      </button>
                      <button className="px-4 py-2 bg-[#2d2f34] text-white text-sm font-bold rounded-lg hover:bg-[#2d2f34]/90 transition-all duration-200">
                        View
                      </button>
                    </div>
                  </div>

                  <div className="bg-[#131416]/30 border border-[#2d2f34] rounded-xl p-6 hover:bg-[#131416]/50 hover:border-[#b7c6e0]/50 transition-all duration-300">
                    <div className="text-4xl mb-4">📋</div>
                    <h3 className="text-xl font-bold text-white mb-2">Weekly Content Calendar</h3>
                    <p className="text-white text-sm mb-4">Planning and scheduling your Kingdom-focused content.</p>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-[#b7c6e0] text-[#131416] text-sm font-bold rounded-lg hover:bg-[#b7c6e0]/90 transition-all duration-200">
                        Edit
                      </button>
                      <button className="px-4 py-2 bg-[#2d2f34] text-white text-sm font-bold rounded-lg hover:bg-[#2d2f34]/90 transition-all duration-200">
                        View
                      </button>
                    </div>
                  </div>

                  <div className="bg-[#131416]/30 border border-[#2d2f34] rounded-xl p-6 hover:bg-[#131416]/50 hover:border-[#b7c6e0]/50 transition-all duration-300">
                    <div className="text-4xl mb-4">🎨</div>
                    <h3 className="text-xl font-bold text-white mb-2">Vision Board 2024</h3>
                    <p className="text-white text-sm mb-4">Visual planning for your Kingdom goals and aspirations.</p>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-[#b7c6e0] text-[#131416] text-sm font-bold rounded-lg hover:bg-[#b7c6e0]/90 transition-all duration-200">
                        Edit
                      </button>
                      <button className="px-4 py-2 bg-[#2d2f34] text-white text-sm font-bold rounded-lg hover:bg-[#2d2f34]/90 transition-all duration-200">
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'templates' && (
              <div className="space-y-8">
                <div>
                  <h1 className="text-white text-3xl font-black leading-tight tracking-[-0.033em] mb-4">
                    Templates
                  </h1>
                  <p className="text-white text-base font-normal leading-normal">
                    Ready-to-use templates for your Kingdom-focused content creation.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-[#131416]/30 border border-[#2d2f34] rounded-xl p-6 hover:bg-[#131416]/50 hover:border-[#b7c6e0]/50 transition-all duration-300">
                    <div className="text-4xl mb-4">🙏</div>
                    <h3 className="text-xl font-bold text-white mb-2">Prayer Photography</h3>
                    <p className="text-white text-sm mb-4">Template for capturing spiritual moments and prayer spaces.</p>
                    <button className="w-full px-4 py-2 bg-[#b7c6e0] text-[#131416] text-sm font-bold rounded-lg hover:bg-[#b7c6e0]/90 transition-all duration-200">
                      Use Template
                    </button>
                  </div>

                  <div className="bg-[#131416]/30 border border-[#2d2f34] rounded-xl p-6 hover:bg-[#131416]/50 hover:border-[#b7c6e0]/50 transition-all duration-300">
                    <div className="text-4xl mb-4">📖</div>
                    <h3 className="text-xl font-bold text-white mb-2">Scripture Photography</h3>
                    <p className="text-white text-sm mb-4">Template for creating beautiful Bible verse photography.</p>
                    <button className="w-full px-4 py-2 bg-[#b7c6e0] text-[#131416] text-sm font-bold rounded-lg hover:bg-[#b7c6e0]/90 transition-all duration-200">
                      Use Template
                    </button>
                  </div>

                  <div className="bg-[#131416]/30 border border-[#2d2f34] rounded-xl p-6 hover:bg-[#131416]/50 hover:border-[#b7c6e0]/50 transition-all duration-300">
                    <div className="text-4xl mb-4">👥</div>
                    <h3 className="text-xl font-bold text-white mb-2">Community Events</h3>
                    <p className="text-white text-sm mb-4">Template for documenting church and community gatherings.</p>
                    <button className="w-full px-4 py-2 bg-[#b7c6e0] text-[#131416] text-sm font-bold rounded-lg hover:bg-[#b7c6e0]/90 transition-all duration-200">
                      Use Template
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="space-y-8">
                <div>
                  <h1 className="text-white text-3xl font-black leading-tight tracking-[-0.033em] mb-4">
                    Analytics
                  </h1>
                  <p className="text-white text-base font-normal leading-normal">
                    Track your content performance and engagement metrics.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#131416]/30 border border-[#2d2f34] rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Content Performance</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-white">Total Views</span>
                        <span className="text-[#b7c6e0] font-bold">1,247</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white">Engagement Rate</span>
                        <span className="text-[#b7c6e0] font-bold">8.5%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white">Shares</span>
                        <span className="text-[#b7c6e0] font-bold">89</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#131416]/30 border border-[#2d2f34] rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Top Content</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-white text-sm">Prayer Photography Series</span>
                        <span className="text-[#b7c6e0] font-bold">456 views</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white text-sm">Scripture Photography</span>
                        <span className="text-[#b7c6e0] font-bold">342 views</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white text-sm">Community Events</span>
                        <span className="text-[#b7c6e0] font-bold">289 views</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>

        {/* Footer */}
        <footer className="relative z-10 bg-[#131416]/50 border-t border-[#2d2f34]">
          <div className="max-w-[960px] mx-auto px-40 py-12">
            <div className="text-center">
              <p className="text-white text-sm">
                © 2024 Kingdom Lens. Built with the Holy Spirit.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
} 