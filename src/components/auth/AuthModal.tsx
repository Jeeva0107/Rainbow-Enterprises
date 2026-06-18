'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User, Eye, EyeOff, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { isSupabaseConfigured, supabase } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast'; // We will create this toast hooks shortly

const authSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').optional(),
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type AuthFormValues = z.infer<typeof authSchema>;

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AuthFormValues>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: AuthFormValues) => {
    setIsLoading(true);
    try {
      if (isSupabaseConfigured) {
        if (mode === 'signup') {
          const { error } = await supabase.auth.signUp({
            email: values.email,
            password: values.password,
            options: {
              data: {
                full_name: values.name,
              },
            },
          });
          if (error) throw error;
          toast({
            title: 'Sign Up Successful!',
            description: 'Check your email for confirmation.',
          });
        } else {
          const { error } = await supabase.auth.signInWithPassword({
            email: values.email,
            password: values.password,
          });
          if (error) throw error;
          toast({
            title: 'Welcome Back!',
            description: 'Successfully logged in.',
          });
        }
        onClose();
      } else {
        // Mock authentication flow
        await new Promise((resolve) => setTimeout(resolve, 1500));
        toast({
          title: mode === 'signup' ? 'Account Created (Mock Mode)' : 'Logged In (Mock Mode)',
          description: `Hello, ${values.name || values.email}! Note: Supabase is not configured yet.`,
        });
        onClose();
      }
      reset();
    } catch (error: any) {
      toast({
        title: 'Authentication Error',
        description: error.message || 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const toggleMode = () => {
    setMode(mode === 'login' ? 'signup' : 'login');
    reset();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-md bg-background border border-border rounded-2xl shadow-2xl p-6 sm:p-8 relative overflow-hidden"
            >
              {/* Top Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent" />

              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="absolute top-4 right-4 rounded-full text-muted-foreground hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </Button>

              {/* Title & Description */}
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold tracking-tight">
                  {mode === 'login' ? 'Welcome Back' : 'Create Account'}
                </h2>
                <p className="text-sm text-muted-foreground mt-1.5">
                  {mode === 'login'
                    ? 'Log in to manage orders and checkout fast'
                    : 'Join Rainbow Enterprises for organic & healthy groceries'}
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {mode === 'signup' && (
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <input
                        {...register('name')}
                        type="text"
                        placeholder="John Doe"
                        className="w-full pl-10 pr-4 py-2.5 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                      />
                    </div>
                    {errors.name && (
                      <p className="text-xs text-destructive mt-0.5">{errors.name.message}</p>
                    )}
                  </div>
                )}

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="you@example.com"
                      className="w-full pl-10 pr-4 py-2.5 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-xs text-destructive mt-0.5">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                      Password
                    </label>
                    {mode === 'login' && (
                      <button type="button" className="text-xs font-semibold text-primary hover:underline">
                        Forgot?
                      </button>
                    )}
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <input
                      {...register('password')}
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      className="w-full pl-10 pr-10 py-2.5 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-xs text-destructive mt-0.5">{errors.password.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 rounded-xl font-semibold mt-6"
                >
                  {isLoading ? (
                    <Loader2 className="h-5 w-5 animate-spin mx-auto" />
                  ) : mode === 'login' ? (
                    'Log In'
                  ) : (
                    'Create Account'
                  )}
                </Button>
              </form>

              {/* Mode Toggle */}
              <div className="text-center mt-6 text-sm">
                <span className="text-muted-foreground">
                  {mode === 'login' ? "Don't have an account?" : 'Already have an account?'}
                </span>{' '}
                <button
                  type="button"
                  onClick={toggleMode}
                  className="font-bold text-primary hover:underline"
                >
                  {mode === 'login' ? 'Sign Up' : 'Log In'}
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
