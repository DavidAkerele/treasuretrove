'use client'

import React, { useState } from 'react'
import { UploadCloud, CheckCircle2, AlertCircle } from 'lucide-react'

export default function SellMachineForm() {
  const [formData, setFormData] = useState({
    makeLine: '',
    condition: 'used',
    askingPrice: '',
    name: '',
    email: '',
    phone: '',
  })
  
  const [hasImage, setHasImage] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'processing' | 'success'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' })
    }
  }

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setHasImage(true)
      if (errors.image) setErrors({ ...errors, image: '' })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.makeLine) newErrors.makeLine = 'Machine make/model is required'
    if (!formData.askingPrice) newErrors.askingPrice = 'Asking price is required'
    if (!formData.name) newErrors.name = 'Contact name is required'
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Valid email is required'
    if (!formData.phone) newErrors.phone = 'Phone number is required'
    if (!hasImage) newErrors.image = 'At least one photo is required'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      setStatus('processing')
      setTimeout(() => {
        setStatus('success')
      }, 1500)
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-brand-teal-fill border border-brand-teal p-10 rounded-xl text-center max-w-2xl mx-auto animate-up">
        <div className="w-16 h-16 bg-brand-teal text-white rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="font-display text-2xl font-semibold text-brand-teal mb-4">Submission Received</h3>
        <p className="text-mist leading-relaxed mb-6">
          Thank you for uploading your <strong>{formData.makeLine}</strong>. Our technical team will review the details and images provided. We will contact you at <strong>{formData.email}</strong> within 1-2 working days to discuss an offer.
        </p>
        <button 
          onClick={() => {
            setFormData({ makeLine: '', condition: 'used', askingPrice: '', name: '', email: '', phone: '' })
            setHasImage(false)
            setStatus('idle')
          }}
          className="border border-brand-teal text-brand-teal px-6 py-2 rounded-md font-semibold hover:bg-brand-teal hover:text-white transition-colors"
        >
          Submit Another Machine
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto bg-void border border-line rounded-xl p-8">
      <div className="mb-8">
        <h3 className="font-display text-2xl font-semibold text-brand-teal mb-2">Machine Details</h3>
        <p className="text-sm text-mist">Provide accurate details to help our engineers evaluate your machine quickly.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Machine specifics */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-xs font-semibold text-mist uppercase tracking-widest mb-2">Brand, Make & Model</label>
            <input
              type="text" name="makeLine"
              value={formData.makeLine} onChange={handleInputChange}
              className={`w-full bg-surface border ${errors.makeLine ? 'border-red-500' : 'border-line'} rounded-md px-4 py-3 text-sm focus:outline-none focus:border-brand-teal transition-colors`}
              placeholder="e.g. Brother Innov-is M280D"
            />
            {errors.makeLine && <p className="text-red-500 text-xs mt-1">{errors.makeLine}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-mist uppercase tracking-widest mb-2">Condition</label>
            <select
              name="condition"
              value={formData.condition} onChange={handleInputChange}
              className="w-full bg-surface border border-line rounded-md px-4 py-3 text-sm focus:outline-none focus:border-brand-teal transition-colors"
            >
              <option value="new">Brand New (Unused)</option>
              <option value="used">Lightly Used (Working)</option>
              <option value="heavy">Heavily Used (Working)</option>
              <option value="repair">Needs Repair / Parts missing</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-mist uppercase tracking-widest mb-2">Asking Price (£)</label>
            <input
              type="number" name="askingPrice"
              value={formData.askingPrice} onChange={handleInputChange}
              className={`w-full bg-surface border ${errors.askingPrice ? 'border-red-500' : 'border-line'} rounded-md px-4 py-3 text-sm focus:outline-none focus:border-brand-teal transition-colors`}
              placeholder="150"
            />
            {errors.askingPrice && <p className="text-red-500 text-xs mt-1">{errors.askingPrice}</p>}
          </div>
        </div>

        {/* Photo Upload Zone */}
        <div>
          <label className="block text-xs font-semibold text-mist uppercase tracking-widest mb-2">Photos (Required)</label>
          <div className={`relative border-2 border-dashed ${errors.image ? 'border-red-500 bg-red-50' : hasImage ? 'border-brand-teal bg-brand-teal-fill' : 'border-line bg-surface'} rounded-xl p-8 text-center transition-colors`}>
            <input 
              type="file" 
              accept="image/*" 
              multiple
              onChange={handlePhotoUpload}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            
            <div className="flex flex-col items-center justify-center gap-3">
              {hasImage ? (
                <>
                  <CheckCircle2 size={32} className="text-brand-teal" />
                  <p className="font-semibold text-brand-teal text-sm">Photos selected successfully</p>
                  <p className="text-xs text-mist">Click or drag to change files</p>
                </>
              ) : (
                <>
                  <UploadCloud size={32} className="text-mist" />
                  <div>
                    <span className="font-semibold text-brand-teal underline">Click to upload</span>
                    <span className="text-mist text-sm ml-1">or drag and drop</span>
                  </div>
                  <p className="text-xs text-mist/70">SVG, PNG, JPG or GIF (max. 5MB)</p>
                </>
              )}
            </div>
          </div>
          {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image}</p>}
        </div>

        <div className="border-t border-line my-8 pt-8">
          <h3 className="font-display text-lg font-semibold text-brand-teal mb-1">Your Contact Info</h3>
          <p className="text-xs text-mist mb-6">How our team should reach you about this listing.</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-mist uppercase tracking-widest mb-2">Full Name</label>
              <input
                type="text" name="name"
                value={formData.name} onChange={handleInputChange}
                className={`w-full bg-surface border ${errors.name ? 'border-red-500' : 'border-line'} rounded-md px-4 py-3 text-sm focus:outline-none focus:border-brand-teal transition-colors`}
                placeholder="Jane Doe"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-mist uppercase tracking-widest mb-2">Email</label>
              <input
                type="email" name="email"
                value={formData.email} onChange={handleInputChange}
                className={`w-full bg-surface border ${errors.email ? 'border-red-500' : 'border-line'} rounded-md px-4 py-3 text-sm focus:outline-none focus:border-brand-teal transition-colors`}
                placeholder="jane@example.com"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-mist uppercase tracking-widest mb-2">Phone Number</label>
              <input
                type="text" name="phone"
                value={formData.phone} onChange={handleInputChange}
                className={`w-full bg-surface border ${errors.phone ? 'border-red-500' : 'border-line'} rounded-md px-4 py-3 text-sm focus:outline-none focus:border-brand-teal transition-colors`}
                placeholder="07000 000 000"
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={status === 'processing'}
          className="w-full bg-brand-teal text-white py-4 rounded-md font-semibold text-sm hover:bg-brand-teal-mid transition-colors flex items-center justify-center gap-2"
        >
          {status === 'processing' ? 'Submitting Details...' : 'Submit Machine for Review'}
        </button>

      </form>
    </div>
  )
}
