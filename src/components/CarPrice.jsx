import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation Schema
const validationSchema = Yup.object({
  fullName: Yup.string()
    .required('Full Name is required')
    .min(2, 'Full Name must be at least 2 characters'),
  email: Yup.string()
    .required('Email Address is required')
    .email('Invalid email format'),
  country: Yup.string()
    .required('Country is required'),
  phone: Yup.string()
    .required('Phone is required')
    .min(10, 'Phone must be at least 10 digits'),
  phone2: Yup.string()
    .min(10, 'Phone2 must be at least 10 digits')
});

const CarPrice = () => {
  const [inspection, setInspection] = useState(false);
  const [insurance, setInsurance] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [newsletterAgreed, setNewsletterAgreed] = useState(false);

  const initialValues = {
    fullName: '',
    email: '',
    country: '',
    phone: '',
    phone2: ''
  };

  const handleSubmit = (values, { setSubmitting, setFieldError }) => {
    // Additional validation before submission
    const errors = {};
    
    if (!values.fullName || values.fullName.length < 2) {
      errors.fullName = 'Full Name is required and must be at least 2 characters';
    }
    
    if (!values.email || !/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Valid email address is required';
    }
    
    if (!values.country) {
      errors.country = 'Country selection is required';
    }
    
    if (!values.phone || values.phone.length < 10) {
      errors.phone = 'Phone number is required and must be at least 10 digits';
    }
    
    // If there are errors, set them and don't submit
    if (Object.keys(errors).length > 0) {
      Object.keys(errors).forEach(key => {
        setFieldError(key, errors[key]);
      });
      setSubmitting(false);
      return;
    }
    
    // If no errors, proceed with submission
    console.log('Form submitted successfully:', values);
    alert('Form submitted successfully!');
    setSubmitting(false);
  };

  const handleBuyNow = (values, { setSubmitting, setFieldError, validateForm }) => {
    // First validate the form
    validateForm().then((errors) => {
      if (Object.keys(errors).length > 0) {
        // If there are validation errors, show them
        Object.keys(errors).forEach(key => {
          setFieldError(key, errors[key]);
        });
        setSubmitting(false);
        return;
      }
      
      // If no errors, proceed with Buy Now
      console.log('Buy Now clicked with data:', values);
      alert('Buy Now clicked! Redirecting to payment...');
      setSubmitting(false);
    });
  };

  return (
    <div className="bg-white p-6">
      {/* Top Section - Car Price Overview */}
      <div className="mb-6">
        {/* Rating */}
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${i < 4 ? 'text-orange-500' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-orange-500 font-semibold">4.5</span>
          <span className="text-red-500 text-sm">2 Reviews</span>
        </div>

        {/* Car Price */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Car Price</h3>
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-gray-800">US$ 540</span>
            <div className="flex items-center gap-2">
              <span className="bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded">
                13% OFF
              </span>
              <div className="flex flex-col">
                <span className="text-lg text-gray-500 line-through">US$ 620</span>
                <span className="text-sm text-red-500">Save US$ 80</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Total Price Calculator Section */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-5 h-5 bg-red-500 rounded flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">Total Price Calculator</h3>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
            <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500">
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="UK">UK</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Port</label>
            <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500">
              <option value="LONG BEACH">LONG BEACH</option>
              <option value="NEW YORK">NEW YORK</option>
              <option value="MIAMI">MIAMI</option>
            </select>
          </div>
        </div>

        <div className="flex gap-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={inspection}
              onChange={(e) => setInspection(e.target.checked)}
              className="mr-2 text-red-500 focus:ring-red-500"
            />
            <span className="text-sm text-gray-700">Inspection</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={insurance}
              onChange={(e) => setInsurance(e.target.checked)}
              className="mr-2 text-red-500 focus:ring-red-500"
            />
            <span className="text-sm text-gray-700">Insurance</span>
          </label>
        </div>
      </div>

      {/* Free Quote / Inquiry Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Free Quote / Inquiry</h3>
          </div>
          {/* <span className="text-sm text-red-500">*Required fields</span> */}
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <div className='flex items-center justify-between'>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                </div>
                <Field
                  type="text"
                  name="fullName"
                  placeholder="Your Name"
                  className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500 ${
                    errors.fullName && touched.fullName 
                      ? 'border-red-500 bg-red-50' 
                      : 'border-gray-300'
                  }`}
                />
                <ErrorMessage name="fullName" component="div" className="text-red-500 text-xs mt-1" />
              </div>

              <div>
                <div className='flex items-center justify-between'>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                </div>
                <Field
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500 ${
                    errors.email && touched.email 
                      ? 'border-red-500 bg-red-50' 
                      : 'border-gray-300'
                  }`}
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
              </div>

              <div>
                <div className='flex items-center justify-between'>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Country <span className="text-red-500">*</span>
                  </label>
                </div>
                <Field
                  as="select"
                  name="country"
                  className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500 ${
                    errors.country && touched.country 
                      ? 'border-red-500 bg-red-50' 
                      : 'border-gray-300'
                  }`}
                >
                  <option value="">Select Country</option>
                  <option value="USA">USA</option>
                  <option value="Canada">Canada</option>
                  <option value="UK">UK</option>
                </Field>
                <ErrorMessage name="country" component="div" className="text-red-500 text-xs mt-1" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className='flex items-center justify-between'>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone <span className="text-red-500">*</span>
                    </label>
                  </div>
                  <Field
                    type="tel"
                    name="phone"
                    placeholder="Your Tel"
                    className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500 ${
                      errors.phone && touched.phone 
                        ? 'border-red-500 bg-red-50' 
                        : 'border-gray-300'
                    }`}
                  />
                  <ErrorMessage name="phone" component="div" className="text-red-500 text-xs mt-1" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone2</label>
                  <Field
                    type="tel"
                    name="phone2"
                    placeholder="Your Tel2"
                    className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500 ${
                      errors.phone2 && touched.phone2 
                        ? 'border-red-500 bg-red-50' 
                        : 'border-gray-300'
                    }`}
                  />
                  <ErrorMessage name="phone2" component="div" className="text-red-500 text-xs mt-1" />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      {/* Total Price Display */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <div className="text-sm text-gray-600 mb-1">C&F LONG BEACH</div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-gray-800">Total Price</span>
          <span className="text-2xl font-bold text-red-500">US$ 2,084</span>
        </div>
      </div>

      {/* Agreement Checkboxes */}
      <div className="space-y-3 mb-6">
        <label className="flex items-start">
          <input
            type="checkbox"
            checked={termsAgreed}
            onChange={(e) => setTermsAgreed(e.target.checked)}
            className="mr-3 mt-1 text-red-500 focus:ring-red-500"
          />
          <span className="text-sm text-gray-700">
            I agree to{' '}
            <a href="#" className="text-red-500 hover:underline">Terms of Service</a>
            {' '}and confirm{' '}
            <a href="#" className="text-red-500 hover:underline">Privacy Notice</a>
          </span>
        </label>

        <label className="flex items-start">
          <input
            type="checkbox"
            checked={newsletterAgreed}
            onChange={(e) => setNewsletterAgreed(e.target.checked)}
            className="mr-3 mt-1 text-red-500 focus:ring-red-500"
          />
          <span className="text-sm text-gray-700">
            I agree to receive email newsletters
          </span>
        </label>
      </div>

      {/* Action Buttons */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting, isValid, dirty, submitForm, values, setFieldError, validateForm }) => (
          <div className="space-y-3 mb-6">
            <button 
              type="submit"
              disabled={!isValid || !dirty || isSubmitting}
              className={`w-full font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200 ${
                !isValid || !dirty || isSubmitting
                  ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                  : 'bg-red-500 hover:bg-red-600 text-white'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              {isSubmitting ? 'SUBMITTING...' : 'FREE INQUIRY'}
            </button>

            <button 
              type="button"
              disabled={!isValid || !dirty || isSubmitting}
              onClick={() => handleBuyNow(values, { setSubmitting, setFieldError, validateForm })}
              className={`w-full border-2 font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200 ${
                !isValid || !dirty || isSubmitting
                  ? 'border-gray-300 text-gray-400 cursor-not-allowed'
                  : 'border-red-500 text-red-500 hover:bg-red-50'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
              Buy Now
            </button>
          </div>
        )}
      </Formik>

      {/* Additional Information */}
      <div className="mb-6 text-sm text-gray-600">
        <p className="mb-2">
          Use Buy Now and save US$ 62.00. Login is required to use Buy Now!
        </p>
        <a href="#" className="text-red-500 hover:underline flex items-center gap-1">
          What is Buy Now
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </a>
      </div>

      {/* Disclaimers */}
      <div className="mb-6 space-y-2 text-xs text-gray-600">
        <p>• We does not offer its service to children less than eighteen (18) years of age.</p>
        <p>• You can withdraw your consent from the link embedded in each of the email newsletters HanamiCorp will send to you based on your consent.</p>
      </div>

      {/* Share Section */}
      <div>
        <h4 className="text-sm font-semibold text-gray-800 mb-3">Share</h4>
        <div className="flex gap-3">
          <button className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors duration-200">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
          </button>
          <button className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-200">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </button>
          <button className="w-10 h-10 bg-sky-400 hover:bg-sky-500 rounded-full flex items-center justify-center transition-colors duration-200">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarPrice;
