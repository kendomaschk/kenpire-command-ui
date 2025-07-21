import React from "react";
import { Bot } from "lucide-react";

const JarvessWidget = () => {
  return (
    <div className="p-4 rounded-2xl shadow-md border bg-background flex items-center space-x-4 hover:shadow-lg transition-all">
      <Bot className="text-primary w-6 h-6" />
      <div>
        <h2 className="text-lg font-semibold">Jarvess Online</h2>
        <p className="text-sm text-muted-foreground">Status: Synced · All Systems Go</p>
      </div>
    </div>
  );
};

export default JarvessWidget;
