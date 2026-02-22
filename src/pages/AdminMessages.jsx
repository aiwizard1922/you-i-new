import React, { useState, useEffect } from 'react';
import { Lock, Mail, Phone, MapPin, MessageSquare, Calendar, RefreshCw } from 'lucide-react';
import { API_BASE_URL } from '../config';

const AdminMessages = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(false);

  const ADMIN_PASSWORD = process.env.REACT_APP_ADMIN_PASSWORD || 'i&u@1717';

  useEffect(() => {
    const auth = sessionStorage.getItem('adminAuth');
    if (auth === 'true') {
      setIsAuthenticated(true);
      fetchSubmissions();
    }
  }, []);

  const fetchSubmissions = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/contact`);
      const data = await res.json();
      if (data.success) {
        setSubmissions(data.data || []);
      }
    } catch (err) {
      setSubmissions([]);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem('adminAuth', 'true');
      setIsAuthenticated(true);
      fetchSubmissions();
    } else {
      setError('Incorrect password');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('adminAuth');
    setIsAuthenticated(false);
    setPassword('');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center bg-[#f7f5f2] px-4">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-[#0d3d3d] rounded-full flex items-center justify-center">
              <Lock className="text-[#d4af37]" size={32} />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-[#0d3d3d] text-center mb-2">
            Admin Access
          </h1>
          <p className="text-gray-600 text-center text-sm mb-6">
            Enter password to view contact submissions
          </p>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent outline-none"
              autoFocus
            />
            {error && (
              <p className="text-red-500 text-sm mt-2">{error}</p>
            )}
            <button
              type="submit"
              className="w-full mt-4 bg-[#0d3d3d] hover:bg-[#1a4d4d] text-white font-semibold py-3 rounded-lg transition-colors"
            >
              Enter
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#f7f5f2]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <h1 className="text-3xl font-bold text-[#0d3d3d]">
            Contact Submissions
          </h1>
          <div className="flex gap-3">
            <button
              onClick={fetchSubmissions}
              disabled={loading}
              className="flex items-center gap-2 px-4 py-2 bg-[#0d3d3d] hover:bg-[#1a4d4d] text-white rounded-lg transition-colors disabled:opacity-50"
            >
              <RefreshCw size={18} className={loading ? 'animate-spin' : ''} />
              {loading ? 'Loading...' : 'Refresh'}
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 border border-[#0d3d3d] text-[#0d3d3d] hover:bg-[#0d3d3d] hover:text-white rounded-lg transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        {submissions.length === 0 && !loading ? (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <MessageSquare className="mx-auto text-gray-400 mb-4" size={48} />
            <p className="text-gray-600 text-lg">No submissions yet</p>
            <p className="text-gray-500 text-sm mt-2">
              Messages from the Contact Us form will appear here
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {submissions.map((sub) => (
              <div
                key={sub.id}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
              >
                <div className="p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#0d3d3d]">
                        {sub.name}
                      </h3>
                      <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                        <Calendar size={14} />
                        {new Date(sub.created_at).toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                    <a
                      href={`mailto:${sub.email}`}
                      className="flex items-center gap-2 text-gray-700 hover:text-[#d4af37] transition-colors"
                    >
                      <Mail size={18} className="text-[#d4af37]" />
                      {sub.email}
                    </a>
                    {sub.phone && (
                      <a
                        href={`tel:${sub.phone.replace(/\s/g, '')}`}
                        className="flex items-center gap-2 text-gray-700 hover:text-[#d4af37] transition-colors"
                      >
                        <Phone size={18} className="text-[#d4af37]" />
                        {sub.phone}
                      </a>
                    )}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-sm font-medium text-gray-500 mb-2 flex items-center gap-2">
                      <MessageSquare size={16} />
                      Message
                    </p>
                    <p className="text-gray-700 whitespace-pre-wrap">{sub.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminMessages;
