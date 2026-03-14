"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import LeadCapturePopup from "@/components/customComponents/LeadCapturePopup";
import QueryForm from "@/components/customComponents/coursesComponents/courseDetails/ContactAndSupport";

export default function TestFormsPage() {
  const [showPopup, setShowPopup] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Form Testing Page</h1>
          <p className="text-gray-600 mt-2">
            Test both the popup form and the contact form - both connect to the same Google Sheet
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">
        
        {/* Popup Form Section */}
        <div className="bg-white rounded-lg shadow-sm border p-8">
          <h2 className="text-2xl font-semibold mb-4">Popup Form Test</h2>
          <p className="text-gray-600 mb-6">
            Click the button below to open the "Let's get connected" popup form. 
            This popup normally appears automatically after scrolling or after 5 seconds on the main pages.
          </p>
          
          <Button 
            onClick={() => setShowPopup(true)}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Open Connect Popup
          </Button>

          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Popup Features:</h3>
            <ul className="text-blue-800 text-sm space-y-1">
              <li>• Matches the exact design from your image</li>
              <li>• Red border on focus for form fields</li>
              <li>• Indian flag with +91 prefix for WhatsApp number</li>
              <li>• Current Status field (Student/Professional)</li>
              <li>• Rounded corners and clean styling</li>
              <li>• Connects to Google Apps Script</li>
            </ul>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white rounded-lg shadow-sm border p-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Form</h2>
          <p className="text-gray-600 mb-6">
            This is the main contact form that appears at the bottom of pages. 
            It has been updated to match the same styling as the popup form.
          </p>
          
          <div className="p-4 bg-green-50 rounded-lg mb-6">
            <h3 className="font-semibold text-green-900 mb-2">Form Features:</h3>
            <ul className="text-green-800 text-sm space-y-1">
              <li>• Same styling as popup form</li>
              <li>• Current Status field (Student/Professional)</li>
              <li>• Statistics section showing company achievements</li>
              <li>• Both forms save to the same Google Sheet</li>
            </ul>
          </div>
        </div>

        {/* Embedded Contact Form */}
        <QueryForm />

        {/* Google Apps Script Info */}
        <div className="bg-white rounded-lg shadow-sm border p-8">
          <h2 className="text-2xl font-semibold mb-4">Google Apps Script Integration</h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">Current Configuration:</h3>
              <p className="text-sm text-gray-600 font-mono break-all">
                {process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || 'Not configured'}
              </p>
            </div>
            
            <div className="p-4 bg-yellow-50 rounded-lg">
              <h3 className="font-semibold text-yellow-900 mb-2">Data Structure:</h3>
              <p className="text-yellow-800 text-sm">
                Both forms send the following data to your Google Sheet:
              </p>
              <ul className="text-yellow-800 text-sm mt-2 space-y-1">
                <li>• Timestamp</li>
                <li>• Full Name</li>
                <li>• Email</li>
                <li>• WhatsApp Number</li>
                <li>• City</li>
                <li>• Current Status (popup-form or student/professional)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Component */}
      <LeadCapturePopup />
      
      {/* Manual trigger for testing */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold text-center mb-6">
              Let's get <span className="text-red-500">connected</span>
            </h3>
            <p className="text-center text-gray-600">
              This is a manual trigger for testing. The actual popup component is integrated into the main pages.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="w-full mt-6 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}