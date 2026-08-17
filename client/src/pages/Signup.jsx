import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must contain uppercase, lowercase, and numbers'
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password'
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }
    
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsLoading(true)
    setErrors({})
    
    try {
      // TODO: Replace with actual API call
      // const response = await fetch('/api/signup', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // })
      
      // Simulated signup delay
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Navigate to login on successful signup
      navigate('/login')
    } catch (error) {
      setErrors({ submit: 'Sign up failed. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogin = () => {
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-primary-focus flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="card bg-base-100 shadow-2xl">
          <div className="card-body">
            {/* Header */}
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-primary mb-2">Join Mingo Chat</h2>
              <p className="text-base-content/60">Create your account to get started</p>
            </div>

            {/* Error Message */}
            {errors.submit && (
              <div className="alert alert-error shadow-lg mb-4">
                <div>
                  <span>{errors.submit}</span>
                </div>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* First Name & Last Name Row */}
              <div className="grid grid-cols-2 gap-3">
                {/* First Name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">First Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className={`input input-bordered w-full transition-all ${
                      errors.firstName ? 'input-error' : 'focus:input-primary'
                    }`}
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                  {errors.firstName && (
                    <label className="label">
                      <span className="label-text-alt text-error text-xs">{errors.firstName}</span>
                    </label>
                  )}
                </div>

                {/* Last Name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Last Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className={`input input-bordered w-full transition-all ${
                      errors.lastName ? 'input-error' : 'focus:input-primary'
                    }`}
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                  {errors.lastName && (
                    <label className="label">
                      <span className="label-text-alt text-error text-xs">{errors.lastName}</span>
                    </label>
                  )}
                </div>
              </div>

              {/* Email Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className={`input input-bordered w-full transition-all ${
                    errors.email ? 'input-error' : 'focus:input-primary'
                  }`}
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isLoading}
                />
                {errors.email && (
                  <label className="label">
                    <span className="label-text-alt text-error">{errors.email}</span>
                  </label>
                )}
              </div>

              {/* Password Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className={`input input-bordered w-full transition-all ${
                    errors.password ? 'input-error' : 'focus:input-primary'
                  }`}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  disabled={isLoading}
                />
                {errors.password && (
                  <label className="label">
                    <span className="label-text-alt text-error text-xs">{errors.password}</span>
                  </label>
                )}
                <label className="label">
                  <span className="label-text-alt text-xs text-base-content/50">
                    Must be at least 6 characters with uppercase, lowercase, and numbers
                  </span>
                </label>
              </div>

              {/* Confirm Password Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className={`input input-bordered w-full transition-all ${
                    errors.confirmPassword ? 'input-error' : 'focus:input-primary'
                  }`}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  disabled={isLoading}
                />
                {errors.confirmPassword && (
                  <label className="label">
                    <span className="label-text-alt text-error">{errors.confirmPassword}</span>
                  </label>
                )}
              </div>

              {/* Terms & Conditions */}
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text text-sm">
                    I agree to the <a href="#" className="link link-primary">Terms of Service</a>
                  </span>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                    disabled={isLoading}
                  />
                </label>
              </div>

              {/* Sign Up Button */}
              <button
                type="submit"
                className={`btn btn-primary w-full font-bold mt-6 ${
                  isLoading ? 'loading' : ''
                }`}
                disabled={isLoading}
              >
                {isLoading ? 'Creating Account...' : 'Sign Up'}
              </button>
            </form>

            {/* Divider */}
            <div className="divider my-4">OR</div>

            {/* Login Link */}
            <div className="text-center">
              <p className="text-base-content/60">
                Already have an account?{' '}
                <button
                  onClick={handleLogin}
                  className="link link-primary font-semibold"
                  disabled={isLoading}
                >
                  Log in
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
