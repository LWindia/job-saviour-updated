"use client"

import React, { useState, useEffect, useRef } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from 'lucide-react';

interface LeadCapturePopupProps {
  googleScriptUrl?: string;
}

export default function LeadCapturePopup({ 
  googleScriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || '' 
}: LeadCapturePopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsappNumber: '',
    city: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  // Use refs to track scroll state
  const hasShownRef = useRef(false);
  const scrollEventsRef = useRef(0);
  const lastScrollYRef = useRef(0);
  const scrollListenerRef = useRef<(() => void) | null>(null);

  // Reset everything on page load/mount
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Reset all state on mount
    hasShownRef.current = false;
    scrollEventsRef.current = 0;
    lastScrollYRef.current = window.scrollY || 0;
    setIsOpen(false);

    // Set up scroll listener after a short delay
    const setupTimer = setTimeout(() => {
      setupScrollListener();
    }, 500);

    // Fallback: Show popup after 15 seconds if user hasn't scrolled enough
    const fallbackTimer = setTimeout(() => {
      if (!hasShownRef.current) {
        setIsOpen(true);
        hasShownRef.current = true;
        if (scrollListenerRef.current) {
          window.removeEventListener('scroll', scrollListenerRef.current);
          scrollListenerRef.current = null;
        }
      }
    }, 15000);

    return () => {
      clearTimeout(setupTimer);
      clearTimeout(fallbackTimer);
      if (scrollListenerRef.current) {
        window.removeEventListener('scroll', scrollListenerRef.current);
      }
    };
  }, []);

  const setupScrollListener = () => {
    if (typeof window === 'undefined' || hasShownRef.current) {
      return;
    }

    const handleScroll = () => {
      if (hasShownRef.current || isOpen) {
        return;
      }

      const currentScrollY = window.scrollY;
      const scrollDifference = Math.abs(currentScrollY - lastScrollYRef.current);
      
      // Count scroll events (minimum 50px scroll)
      if (scrollDifference > 50) {
        scrollEventsRef.current++;
        lastScrollYRef.current = currentScrollY;

        // Show popup after 2 scrolls
        if (scrollEventsRef.current >= 2) {
          setIsOpen(true);
          hasShownRef.current = true;
          // Remove scroll listener once popup is shown
          if (scrollListenerRef.current) {
            window.removeEventListener('scroll', scrollListenerRef.current);
            scrollListenerRef.current = null;
          }
        }
      }
    };

    scrollListenerRef.current = handleScroll;
    window.addEventListener('scroll', handleScroll, { passive: true });
  };

  // Ensure popup is visible when opened
  useEffect(() => {
    if (!isOpen || typeof window === 'undefined') return;

    // Use multiple attempts to ensure visibility
    const ensureVisibility = () => {
      // Set overlay style
      const overlay = document.querySelector('[data-radix-dialog-overlay]') as HTMLElement;
      if (overlay) {
        overlay.style.backgroundColor = 'rgba(255, 0, 0, 0.8)';
        overlay.style.zIndex = '9998';
        overlay.style.position = 'fixed';
        overlay.style.inset = '0';
      }

      // Set content style - ensure it's visible
      const content = document.querySelector('[data-radix-dialog-content]') as HTMLElement;
      if (content) {
        content.style.setProperty('z-index', '9999', 'important');
        content.style.setProperty('position', 'fixed', 'important');
        content.style.setProperty('display', 'grid', 'important');
        content.style.setProperty('visibility', 'visible', 'important');
        content.style.setProperty('opacity', '1', 'important');
        content.style.setProperty('pointer-events', 'auto', 'important');
        content.style.setProperty('background-color', 'white', 'important');
        content.style.setProperty('transform', 'translate(-50%, -50%)', 'important');
        content.style.setProperty('left', '50%', 'important');
        content.style.setProperty('top', '50%', 'important');
        content.style.setProperty('max-width', '500px', 'important');
        content.style.setProperty('width', '90%', 'important');
      }
    };

    // Try immediately
    ensureVisibility();

    // Try after a short delay
    const timer1 = setTimeout(ensureVisibility, 10);
    const timer2 = setTimeout(ensureVisibility, 100);
    const timer3 = setTimeout(ensureVisibility, 200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.fullName.trim()) {
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      return false;
    }
    if (!formData.whatsappNumber.trim() || formData.whatsappNumber.length !== 10) {
      return false;
    }
    if (!formData.city.trim()) {
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus('error');
      return;
    }

    if (!googleScriptUrl) {
      console.error('Google Script URL not configured');
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch(googleScriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName.trim(),
          email: formData.email.trim(),
          whatsappNumber: formData.whatsappNumber.trim(),
          city: formData.city.trim(),
          timestamp: new Date().toISOString(),
        }),
      });

      // With no-cors mode, we can't read the response, but the data should be sent
      setSubmitStatus('success');
      setFormData({ fullName: '', email: '', whatsappNumber: '', city: '' });
      
      // Close popup after 2 seconds
      setTimeout(() => {
        setIsOpen(false);
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setSubmitStatus('idle');
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent 
        className="sm:max-w-[500px] bg-white p-8 rounded-lg border-2 border-[#ff0000] shadow-2xl [&>button]:hidden relative"
        style={{ 
          zIndex: 9999,
          opacity: 1,
          visibility: 'visible',
          display: 'grid',
          position: 'fixed',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-sm opacity-80 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#ff0000] focus:ring-offset-2 transition-opacity z-20 bg-white rounded-full p-1 shadow-sm hover:bg-gray-50"
          aria-label="Close popup"
          type="button"
        >
          <X className="h-5 w-5 text-gray-700" />
        </button>
        
        <DialogHeader className="mb-6">
          <DialogTitle className="text-2xl font-semibold text-black text-left">
            Let's get <span className="text-[#ff0000]">connected</span>
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#ff0000] focus:border-transparent transition-all"
              placeholder="Full Name*"
              aria-label="Full Name"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#ff0000] focus:border-transparent transition-all"
              placeholder="Email Id*"
              aria-label="Email Address"
            />
          </div>

          <div>
            <div className="flex">
              <div className="flex items-center px-3 border border-r-0 rounded-l-md bg-gray-50">
                <img
                  src="/assets/flag.png"
                  alt="India Flag"
                  className="w-7 h-5 object-cover"
                  width={28}
                  height={20}
                />
                <span className="ml-2 text-sm">+91</span>
              </div>
              <input
                type="tel"
                name="whatsappNumber"
                value={formData.whatsappNumber}
                onChange={handleInputChange}
                required
                minLength={10}
                maxLength={10}
                pattern="[0-9]{10}"
                className="flex-1 w-full p-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-[#ff0000] focus:border-transparent transition-all"
                placeholder="WhatsApp Number*"
                aria-label="WhatsApp Number"
              />
            </div>
          </div>

          <div>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#ff0000] focus:border-transparent transition-all"
              placeholder="City*"
              aria-label="City"
            />
          </div>

          {submitStatus === 'success' && (
            <div className="text-green-600 text-sm font-medium p-2 bg-green-50 rounded">
              ✅ Thank you! Your information has been submitted successfully.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="text-red-600 text-sm font-medium p-2 bg-red-50 rounded">
              ❌ Please fill all fields correctly and try again.
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#ff0000] text-white py-2 rounded hover:bg-[#cc0000] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#ff0000] focus:ring-offset-2 font-semibold"
          >
            {isSubmitting ? 'Submitting...' : 'Submit →'}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
