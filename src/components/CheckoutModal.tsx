'use client'

import React, { useState, useEffect } from 'react'
import { X, CheckCircle2, CreditCard, Package } from 'lucide-react'

type CheckoutModalProps = {
  isOpen: boolean
  onClose: () => void
  productName: string
  priceAmount: number
}

export default function CheckoutModal({ isOpen, onClose, productName, priceAmount }: CheckoutModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isProcessing, setIsProcessing] = useState(false)

  // Block body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setStep(1)
      setIsProcessing(false)
      setErrors({})
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => { document.body.style.overflow = 'auto' }
  }, [isOpen])

  if (!isOpen) return null

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' })
    }
  }

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name) newErrors.name = 'Name is required'
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Valid email required'
    if (!formData.address) newErrors.address = 'Delivery address required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.cardName) newErrors.cardName = 'Name on card is required'
    if (!formData.cardNumber || formData.cardNumber.length < 15) newErrors.cardNumber = 'Valid card number required'
    if (!formData.expiry) newErrors.expiry = 'Expiry required'
    if (!formData.cvv || formData.cvv.length < 3) newErrors.cvv = 'CVV required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2)
    } else if (step === 2 && validateStep2()) {
      setIsProcessing(true)
      setTimeout(() => {
        setIsProcessing(false)
        setStep(3)
      }, 2000)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-void/80 backdrop-blur-sm transition-opacity">
      <div className="bg-void border border-line w-full max-w-lg rounded-xl relative overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-line flex justify-between items-center bg-surface sticky top-0 z-10">
          <h2 className="font-display font-semibold text-lg text-brand-teal">Secure Checkout</h2>
          <button onClick={onClose} className="p-2 hover:bg-line rounded-full transition-colors text-foreground">
            <X size={18} />
          </button>
        </div>

        <div className="overflow-y-auto flex-1 custom-scrollbar">
          {/* Progress Flow */}
          {step < 3 && (
            <div className="bg-surface px-6 py-4 border-b border-line flex justify-between text-xs font-semibold text-mist uppercase tracking-widest">
              <span className={step >= 1 ? 'text-brand-terracotta' : ''}>1. Shipping</span>
              <span className={step >= 2 ? 'text-brand-terracotta' : ''}>2. Payment</span>
            </div>
          )}

          <div className="p-6">
            {/* Step 1: Shipping */}
            {step === 1 && (
              <div className="space-y-4 animate-up">
                <div className="bg-brand-teal-fill border border-brand-teal p-4 rounded-lg flex justify-between items-center mb-6">
                  <div>
                    <p className="text-xs text-mist uppercase tracking-widest font-semibold mb-1">Purchasing</p>
                    <p className="font-display font-medium text-[16px] text-brand-teal">{productName} Machine</p>
                  </div>
                  <p className="font-display text-xl font-semibold text-brand-teal">£{priceAmount}</p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-mist uppercase tracking-widest mb-2">Full Name</label>
                  <input
                    type="text" name="name"
                    value={formData.name} onChange={handleInputChange}
                    className={`w-full bg-surface border ${errors.name ? 'border-red-500' : 'border-line'} rounded-md px-4 py-3 text-sm focus:outline-none focus:border-brand-teal transition-colors`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-mist uppercase tracking-widest mb-2">Email Address</label>
                  <input
                    type="email" name="email"
                    value={formData.email} onChange={handleInputChange}
                    className={`w-full bg-surface border ${errors.email ? 'border-red-500' : 'border-line'} rounded-md px-4 py-3 text-sm focus:outline-none focus:border-brand-teal transition-colors`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-mist uppercase tracking-widest mb-2">Delivery Address</label>
                  <textarea
                    name="address" rows={3}
                    value={formData.address} onChange={handleInputChange}
                    className={`w-full bg-surface border ${errors.address ? 'border-red-500' : 'border-line'} rounded-md px-4 py-3 text-sm focus:outline-none focus:border-brand-teal transition-colors resize-none`}
                    placeholder="123 Sewing St, Manchester..."
                  />
                  {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                </div>
              </div>
            )}

            {/* Step 2: Payment */}
            {step === 2 && (
              <div className="space-y-4 animate-up">
                <div className="flex items-center gap-3 text-brand-teal mb-6 border-b border-line pb-4">
                  <CreditCard size={20} />
                  <p className="font-display text-lg font-medium">Payment Details</p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-mist uppercase tracking-widest mb-2">Name on card</label>
                  <input
                    type="text" name="cardName"
                    value={formData.cardName} onChange={handleInputChange}
                    className={`w-full bg-surface border ${errors.cardName ? 'border-red-500' : 'border-line'} rounded-md px-4 py-3 text-sm focus:outline-none focus:border-brand-teal transition-colors`}
                    placeholder="John Doe"
                  />
                  {errors.cardName && <p className="text-red-500 text-xs mt-1">{errors.cardName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-mist uppercase tracking-widest mb-2">Card Number</label>
                  <input
                    type="text" name="cardNumber" maxLength={19}
                    value={formData.cardNumber} onChange={handleInputChange}
                    className={`w-full bg-surface border ${errors.cardNumber ? 'border-red-500' : 'border-line'} rounded-md px-4 py-3 text-sm focus:outline-none focus:border-brand-teal transition-colors tracking-widest`}
                    placeholder="0000 0000 0000 0000"
                  />
                  {errors.cardNumber && <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-mist uppercase tracking-widest mb-2">Expiry Date</label>
                    <input
                      type="text" name="expiry" maxLength={5}
                      value={formData.expiry} onChange={handleInputChange}
                      className={`w-full bg-surface border ${errors.expiry ? 'border-red-500' : 'border-line'} rounded-md px-4 py-3 text-sm focus:outline-none focus:border-brand-teal transition-colors`}
                      placeholder="MM/YY"
                    />
                    {errors.expiry && <p className="text-red-500 text-xs mt-1">{errors.expiry}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-mist uppercase tracking-widest mb-2">CVV</label>
                    <input
                      type="text" name="cvv" maxLength={4}
                      value={formData.cvv} onChange={handleInputChange}
                      className={`w-full bg-surface border ${errors.cvv ? 'border-red-500' : 'border-line'} rounded-md px-4 py-3 text-sm focus:outline-none focus:border-brand-teal transition-colors`}
                      placeholder="123"
                    />
                    {errors.cvv && <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Success */}
            {step === 3 && (
              <div className="text-center py-8 animate-up flex flex-col items-center">
                <div className="w-16 h-16 bg-brand-teal-fill rounded-full flex items-center justify-center text-brand-teal mb-6 relative">
                  <div className="absolute inset-0 border-2 border-brand-teal rounded-full animate-ping opacity-20"></div>
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="font-display text-2xl font-semibold text-brand-teal mb-2">Order Confirmed</h3>
                <p className="text-sm text-mist leading-relaxed max-w-sm mx-auto mb-8">
                  Your payment of <strong>£{priceAmount}</strong> was successful. We've sent a receipt and delivery timeline to <strong>{formData.email}</strong>.
                </p>
                
                <div className="bg-surface border border-line rounded-lg w-full p-4 mb-8 text-left space-y-2 text-sm text-mist">
                  <div className="flex justify-between">
                    <span>Order #</span>
                    <span className="font-medium text-foreground">TT-{Math.floor(Math.random() * 1000000)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Machine</span>
                    <span className="font-medium text-foreground">{productName}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-line mt-2">
                    <span className="flex items-center gap-1"><Package size={12}/> Dispatching</span>
                    <span className="font-medium text-foreground">Next working day</span>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="bg-brand-teal text-white w-full max-w-xs font-semibold py-3 px-6 rounded-md hover:bg-brand-teal-mid transition-colors"
                >
                  Return to Store
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        {step < 3 && (
          <div className="px-6 py-4 border-t border-line bg-surface sticky bottom-0 z-10 flex gap-3 justify-end items-center">
            {step === 2 && (
              <button 
                onClick={() => setStep(1)} 
                className="text-sm font-semibold text-mist hover:text-foreground px-4 py-2 transition-colors mr-auto"
                disabled={isProcessing}
              >
                Back
              </button>
            )}
            
            <button
              onClick={handleNext}
              disabled={isProcessing}
              className="bg-brand-teal text-white px-8 py-3 rounded-md text-sm font-semibold hover:bg-brand-teal-mid transition-colors flex items-center gap-2"
            >
              {isProcessing ? 'Processing payment...' : step === 1 ? 'Continue to Payment' : `Pay £${priceAmount}`}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
