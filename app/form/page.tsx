'use client';

import { useState } from 'react';
import Link from 'next/link';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xbdayren';

const services = [
  { id: 'whatsapp-agent', label: 'WhatsApp Agent Chat', description: 'AI-powered conversational agents for WhatsApp' },
  { id: 'mcp-server', label: 'MCP Server', description: 'Model Context Protocol server implementation' },
  { id: 'whatsapp-api', label: 'WhatsApp API', description: 'Direct WhatsApp Business API integration' },
  { id: 'ai-automation', label: 'AI Automation', description: 'Custom AI workflow automation solutions' }
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    services: [] as string[]
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        services: checked
          ? [...prev.services, value]
          : prev.services.filter(service => service !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate that at least one service is selected
    if (formData.services.length === 0) {
      setSubmitStatus('error');
      setErrorMessage('Please select at least one service you\'re interested in.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const form = new FormData();
      form.append('name', formData.name);
      form.append('email', formData.email);
      form.append('phone', formData.phone);
      form.append('services', formData.services.join(', '));

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: form,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormData({ name: '', email: '', phone: '', services: [] });
        setSubmitStatus('success');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        const json = await response.json().catch(() => null);
        setSubmitStatus('error');
        setErrorMessage(json?.error || 'Submission failed — please try again later.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setErrorMessage('Network error — please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 hover:text-purple-600 transition-colors">
              Logits Technologies
            </h1>
          </Link>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 text-lg max-w-md mx-auto">
            Ready to transform your business with AI automation? Let's discuss your needs.
          </p>
        </div>

        {/* Success Message */}
        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-green-800 font-medium">Thank you! We'll get back to you within 24 hours.</p>
            </div>
          </div>
        )}

        {/* Error Message */}
        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <p className="text-red-800 font-medium">{errorMessage}</p>
            </div>
          </div>
        )}

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            {/* Service Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-4">
                Services Interested In (Select all that apply) *
                {formData.services.length > 0 && (
                  <span className="ml-2 text-xs text-purple-600 font-normal">
                    ({formData.services.length} selected)
                  </span>
                )}
              </label>
              <div className="space-y-3">
                {services.map((service) => (
                  <label key={service.id} className="flex items-start space-x-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="services"
                      value={service.label}
                      checked={formData.services.includes(service.label)}
                      onChange={handleInputChange}
                      className="mt-1 w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500 focus:ring-2"
                    />
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">
                        {service.label}
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        {service.description}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
              {formData.services.length === 0 && (
                <p className="text-sm text-red-600 mt-2">Please select at least one service</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-600 to-purple-600 hover:from-purple-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </div>
              ) : (
                'Send Message'
              )}
            </button>
          </form>

          {/* Back to Home Link */}
          <div className="mt-8 text-center">
            <Link href="/" className="text-purple-600 hover:text-purple-800 font-medium transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>We respect your privacy and will never share your information.</p>
        </div>
      </div>
    </div>
  );
}
