'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { cn } from '@/lib/utils'

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email'),
  projectType: z.enum(['frontend', 'automation', 'both', 'other']),
  message: z.string().min(20, 'Please tell me a bit more (at least 20 characters)'),
})

type FormData = z.infer<typeof schema>

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setStatus('sending')
    try {
      /* Formspree endpoint — TODO: replace with real form ID */
      const res = await fetch('https://formspree.io/f/placeholder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('sent')
        reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="py-12 border-l-2 border-accent pl-6">
        <p className="font-display italic text-2xl mb-3">Message received.</p>
        <p className="font-sans text-sm text-muted">
          I&#39;ll get back to you within 24–48 hours.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="font-mono text-xs text-muted hover:text-ink transition-colors duration-150 mt-6 underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      noValidate
      aria-label="Contact form"
    >
      {/* Name */}
      <Field label="Name" error={errors.name?.message}>
        <input
          {...register('name')}
          type="text"
          id="name"
          autoComplete="name"
          placeholder="Your name"
          className={cn(inputClass, errors.name && errorInputClass)}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className={errorClass} role="alert">
            {errors.name.message}
          </p>
        )}
      </Field>

      {/* Email */}
      <Field label="Email" error={errors.email?.message}>
        <input
          {...register('email')}
          type="email"
          id="email"
          autoComplete="email"
          placeholder="your@email.com"
          className={cn(inputClass, errors.email && errorInputClass)}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className={errorClass} role="alert">
            {errors.email.message}
          </p>
        )}
      </Field>

      {/* Project type */}
      <Field label="Project type" error={errors.projectType?.message}>
        <select
          {...register('projectType')}
          id="projectType"
          className={cn(inputClass, errors.projectType && errorInputClass)}
          defaultValue=""
          aria-describedby={errors.projectType ? 'type-error' : undefined}
        >
          <option value="" disabled>Select a type</option>
          <option value="frontend">Web / Frontend</option>
          <option value="automation">Automation / Integrations</option>
          <option value="both">Both</option>
          <option value="other">Something else</option>
        </select>
        {errors.projectType && (
          <p id="type-error" className={errorClass} role="alert">
            {errors.projectType.message}
          </p>
        )}
      </Field>

      {/* Message */}
      <Field label="Message" error={errors.message?.message}>
        <textarea
          {...register('message')}
          id="message"
          rows={5}
          placeholder="Tell me about the project, timeline, and budget if relevant."
          className={cn(inputClass, 'resize-y min-h-[120px]', errors.message && errorInputClass)}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className={errorClass} role="alert">
            {errors.message.message}
          </p>
        )}
      </Field>

      {status === 'error' && (
        <p className="font-sans text-sm text-red-600" role="alert">
          Something went wrong. Please try emailing me directly at hello@laurenz.work.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex items-center gap-3 bg-ink text-paper font-sans text-sm font-medium px-6 py-3.5 hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
        aria-disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Sending…' : 'Send message'}
        {status !== 'sending' && (
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>
    </form>
  )
}

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={label.toLowerCase().replace(/\s+/g, '-')}
        className="font-mono text-xs text-muted uppercase tracking-[0.08em]"
      >
        {label}
      </label>
      {children}
    </div>
  )
}

const inputClass =
  'w-full font-sans text-sm text-ink bg-transparent border border-border px-4 py-3 outline-none focus:border-ink transition-colors duration-150 placeholder:text-subtle appearance-none'

const errorInputClass = 'border-red-400 focus:border-red-500'
const errorClass = 'font-mono text-xs text-red-600 mt-1'
