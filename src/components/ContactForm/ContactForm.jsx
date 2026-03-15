import { useState } from 'react';
import { Send, User, Mail, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
// Note: If you want to use your custom ToastContext here, you can import it and swap out the 'status' state!

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    botcheck: '' // The invisible honeypot trap
  });
  
  // Tracks form state: 'idle', 'submitting', 'success', 'error'
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Honeypot Check: If a bot filled this in, we silently pretend it worked
    if (formData.botcheck) {
      setStatus('success');
      return;
    }

    setStatus('submitting');

    try {
      // Pointing to the PHP script we will create next
      const response = await fetch('/backend/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '', botcheck: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-body">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text-main mb-4">Let's Build Something</h2>
          <p className="text-lg text-text-muted">Currently accepting new freelance clients and full-time opportunities.</p>
        </div>

        <div className="bg-surface p-8 rounded-xl shadow-md border border-border">
          {status === 'success' ? (
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-text-main mb-2">Message Sent!</h3>
              <p className="text-text-muted">I'll be in touch with you shortly.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-6 text-primary hover:text-orange-500 font-semibold transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Honeypot Field - Visually hidden from users but visible to screen readers/bots */}
              <div className="opacity-0 absolute -z-10" aria-hidden="true">
                <label htmlFor="botcheck">Do not fill this out if you are human</label>
                <input 
                  type="text" 
                  name="botcheck" 
                  id="botcheck" 
                  value={formData.botcheck} 
                  onChange={handleChange} 
                  tabIndex="-1" 
                  autoComplete="off" 
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block text-sm font-medium text-text-main mb-2">Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-white focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-text-main mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-white focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-text-main mb-2">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
                  <textarea
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-white focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-500 bg-red-50 p-3 rounded-lg">
                  <AlertCircle className="w-5 h-5" />
                  <p className="text-sm font-medium">Something went wrong. Please try again later.</p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-primary text-white font-bold rounded-lg shadow-md hover:bg-orange-500 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}