"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ConnectPopup } from "@/components/ui/connect-popup";
import { useConnectPopup } from "@/hooks/useConnectPopup";

export function ConnectPopupExample() {
  const { isOpen, openPopup, closePopup } = useConnectPopup();

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Connect Popup Example</h2>
      <p className="mb-4 text-gray-600">
        Click the button below to open the "Let's get connected" popup form.
      </p>
      
      <Button 
        onClick={openPopup}
        className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg"
      >
        Open Connect Popup
      </Button>

      <ConnectPopup isOpen={isOpen} onClose={closePopup} />
    </div>
  );
}