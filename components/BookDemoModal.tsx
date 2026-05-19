"use client";

import { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";

export default function BookDemoModal() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    childName: "",
    childAge: "",
    program: "",
    city: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-colors";

  const labelClass = "block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5";

  return (
    <Modal>
      <ModalTrigger className="btn-primary hero__cta">
        <div className="btn-primary__shutter" />
        <span className="btn-primary__text">Book a Free Demo</span>
      </ModalTrigger>

      <ModalBody>
        <ModalContent>
          {!submitted ? (
            <>
              <div className="mb-6 text-center">
                <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-600 mb-2">
                  Free Demo
                </span>
                <h3 className="text-xl font-bold text-gray-900">
                  Book Your Child&apos;s Demo Session
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Fill in the details and we&apos;ll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Parent Name</label>
                    <input
                      type="text"
                      name="parentName"
                      required
                      placeholder="John Smith"
                      value={formData.parentName}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="john@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>City</label>
                    <input
                      type="text"
                      name="city"
                      required
                      placeholder="Mumbai"
                      value={formData.city}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Child&apos;s Name</label>
                    <input
                      type="text"
                      name="childName"
                      required
                      placeholder="Emma Smith"
                      value={formData.childName}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Child&apos;s Age</label>
                    <select
                      name="childAge"
                      required
                      value={formData.childAge}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select age</option>
                      <option value="3">3 years</option>
                      <option value="4">4 years</option>
                      <option value="5">5 years</option>
                      <option value="6">6 years</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Program Interest</label>
                  <select
                    name="program"
                    required
                    value={formData.program}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select program</option>
                    <option value="beginner">Beginner (3–4 years)</option>
                    <option value="explorer">Explorer (4–5 years)</option>
                    <option value="master">Master (5–6 years)</option>
                  </select>
                </div>

                <div>
                  <label className={labelClass}>Message (Optional)</label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Any specific questions or requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold text-sm rounded-lg transition-colors duration-200 mt-2"
                >
                  Submit Request
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
              <p className="text-sm text-gray-500">
                We&apos;ve received your demo request. Our team will reach out to you within 24 hours to confirm your session.
              </p>
            </div>
          )}
        </ModalContent>
        {!submitted && (
          <ModalFooter className="gap-3">
            <p className="text-xs text-gray-400">
              Your information is secure and will never be shared with third parties.
            </p>
          </ModalFooter>
        )}
      </ModalBody>
    </Modal>
  );
}
