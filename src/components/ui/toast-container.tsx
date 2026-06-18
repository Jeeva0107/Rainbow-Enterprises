'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function ToastContainer() {
  const { toasts, dismiss } = useToast();

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 w-full max-w-sm pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className={`pointer-events-auto p-4 rounded-xl shadow-lg border flex gap-3 items-start justify-between ${
              toast.variant === 'destructive'
                ? 'bg-destructive/15 border-destructive/30 text-destructive-foreground dark:bg-destructive/20 dark:border-destructive/40'
                : 'glass dark:glass-dark text-foreground'
            }`}
          >
            <div className="flex gap-2.5">
              {toast.variant === 'destructive' ? (
                <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
              ) : (
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              )}
              <div>
                {toast.title && <h4 className="font-bold text-sm">{toast.title}</h4>}
                {toast.description && (
                  <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                    {toast.description}
                  </p>
                )}
              </div>
            </div>
            <button
              onClick={() => dismiss(toast.id)}
              className="text-muted-foreground hover:text-foreground rounded-full p-0.5 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
