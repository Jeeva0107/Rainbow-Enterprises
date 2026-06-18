'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight, 
  Send,
  Loader2,
  Clock
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { MapPlaceholder } from '@/components/ui/MapPlaceholder';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(4, 'Subject must be at least 4 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    toast({
      title: 'Message Sent Successfully!',
      description: `Thank you ${values.name}, our team will contact you shortly regarding: ${values.subject}.`,
    });
    reset();
  };

  return (
    <div className="space-y-16 pb-20">
      {/* Page Header */}
      <section className="relative py-20 bg-muted/20 border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-background to-secondary/5 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black font-display tracking-tight">Contact Us</h1>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="font-semibold text-foreground">Contact</span>
          </div>
        </div>
      </section>

      {/* Main Details and Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Contact Info Sidebar */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-black font-display tracking-tight">Get In Touch</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Have questions about our cold-pressed oil extractions, honey collection, or wholesale requirements? Drop us a message, call, or visit our retail store.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 p-4 border border-border bg-card rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                <Phone className="h-5 w-5" />
              </div>
              <div className="space-y-0.5">
                <h4 className="font-bold text-sm">Call Us</h4>
                <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                <p className="text-xs text-muted-foreground mt-0.5">Mon - Sat: 9:00 AM - 7:00 PM</p>
              </div>
            </div>

            <div className="flex gap-4 p-4 border border-border bg-card rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div className="space-y-0.5">
                <h4 className="font-bold text-sm">Email Support</h4>
                <p className="text-sm text-muted-foreground">info@rainbowenterprises.com</p>
                <p className="text-xs text-muted-foreground mt-0.5">We reply in 24 business hours.</p>
              </div>
            </div>

            <div className="flex gap-4 p-4 border border-border bg-card rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="space-y-0.5">
                <h4 className="font-bold text-sm">Main Office & Store</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  123 Organic Lane, Green Field, Chennai, Tamil Nadu - 600001
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 border border-border bg-card rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                <Clock className="h-5 w-5" />
              </div>
              <div className="space-y-0.5">
                <h4 className="font-bold text-sm">Store Hours</h4>
                <p className="text-sm text-muted-foreground">Everyday: 9:00 AM - 9:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-md">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Your Name</label>
                <input
                  {...register('name')}
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-muted/40 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                />
                {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email Address</label>
                <input
                  {...register('email')}
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-muted/40 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                />
                {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Subject</label>
              <input
                {...register('subject')}
                type="text"
                placeholder="Product Inquiry, Wholesale, Partnership"
                className="w-full px-4 py-3 bg-muted/40 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
              />
              {errors.subject && <p className="text-xs text-destructive">{errors.subject.message}</p>}
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Message</label>
              <textarea
                {...register('message')}
                rows={5}
                placeholder="Describe your query in detail..."
                className="w-full px-4 py-3 bg-muted/40 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
              />
              {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/95 text-primary-foreground font-semibold py-6 rounded-xl flex items-center justify-center gap-2 shadow-md shadow-primary/25"
            >
              {isSubmitting ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <>
                  <Send className="h-4.5 w-4.5" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h3 className="font-bold text-lg text-center lg:text-left">Find Us on Google Maps</h3>
        <MapPlaceholder />
      </section>
    </div>
  );
}
