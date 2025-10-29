"use client";

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from './button';
import { Input } from './input';
import { Textarea } from './textarea';
import { Label } from './label';

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    website: '',
    biggestChallenge: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://n8n.liberatorsai.com/webhook/form-submission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          businessName: '',
          website: '',
          biggestChallenge: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full py-24 md:py-32 bg-gradient-to-b from-background via-purple-950/10 to-background overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-medium uppercase tracking-wider text-purple-300">
              Get Started
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400 bg-clip-text text-transparent">
            Start Your Liberation Journey
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed">
            Let's identify where potential gets trapped in your organization.
          </p>
          <p className="text-base text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Together, we'll architect a path to free your team's true capabilities.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative rounded-2xl bg-gradient-to-br from-purple-600/10 to-blue-600/10 p-[2px] backdrop-blur-sm">
            <div className="relative rounded-2xl bg-background/95 backdrop-blur-xl p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-medium">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-card/50 border-purple-500/20 focus:border-purple-500/50 text-foreground"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-medium">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-card/50 border-purple-500/20 focus:border-purple-500/50 text-foreground"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Business Name & Website Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="businessName" className="text-foreground font-medium">
                      Business Name *
                    </Label>
                    <Input
                      id="businessName"
                      name="businessName"
                      type="text"
                      required
                      value={formData.businessName}
                      onChange={handleChange}
                      className="bg-card/50 border-purple-500/20 focus:border-purple-500/50 text-foreground"
                      placeholder="Your company name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website" className="text-foreground font-medium">
                      Website
                    </Label>
                    <Input
                      id="website"
                      name="website"
                      type="url"
                      value={formData.website}
                      onChange={handleChange}
                      className="bg-card/50 border-purple-500/20 focus:border-purple-500/50 text-foreground"
                      placeholder="https://yourwebsite.com"
                    />
                  </div>
                </div>

                {/* Biggest Challenge */}
                <div className="space-y-2">
                  <Label htmlFor="biggestChallenge" className="text-foreground font-medium">
                    Biggest Challenge *
                  </Label>
                  <Textarea
                    id="biggestChallenge"
                    name="biggestChallenge"
                    required
                    value={formData.biggestChallenge}
                    onChange={handleChange}
                    className="bg-card/50 border-purple-500/20 focus:border-purple-500/50 text-foreground min-h-[120px]"
                    placeholder="Describe your biggest operational challenge..."
                  />
                </div>

                {/* Submit Button */}
                <div className="flex flex-col items-center gap-4">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg shadow-purple-500/30 px-12"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Start Your Transformation
                      </>
                    )}
                  </Button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center gap-2 text-green-500 text-sm"
                    >
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Thank you! We'll be in touch soon.</span>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center gap-2 text-red-500 text-sm"
                    >
                      <AlertCircle className="w-5 h-5" />
                      <span>Something went wrong. Please try again.</span>
                    </motion.div>
                  )}
                </div>

                {/* Bottom Text */}
                <div className="text-center pt-4">
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                    Transform your business operations with tailored AI solutions that save you time, 
                    reduce costs, and unlock growth. Let's explore how we can help you thrive.
                  </p>
                </div>
              </form>

              {/* Decorative Elements */}
              <div className="absolute -top-1 -left-1 w-20 h-20 bg-purple-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-1 -right-1 w-20 h-20 bg-blue-500/20 rounded-full blur-2xl" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

