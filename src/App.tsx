import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Menu, X, ChevronRight, Lock, ArrowRight, TrendingUp, PiggyBank, Home, MessageSquare, Brain, CreditCard, Wallet, MessagesSquare, Bot, Banknote, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Shield, CheckCircle2 } from 'lucide-react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [phone, setPhone] = useState('');
  const [isPhoneValid, setIsPhoneValid] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePhoneChange = (value: string) => {
    setPhone(value);
    setIsPhoneValid(value.length >= 10);
  };

  const features = [
    {
      icon: MessageSquare,
      title: "Sign Up in Seconds on WhatsApp",
      description: "Chat with us to get started—no forms, no stress.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Brain,
      title: "AI Smart Approval",
      description: "We use your phone data (safely!) to check eligibility. No hidden criteria, no bias.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: CreditCard,
      title: "Instant Cash Transfer",
      description: "Approved? Money hits your account in minutes.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Wallet,
      title: "Pay Your Way",
      description: "Flexible repayment plans that fit your budget.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const steps = [
    {
      icon: MessagesSquare,
      title: "Chat on WhatsApp",
      color: "from-green-400 to-green-500",
      delay: 0
    },
    {
      icon: Bot,
      title: "AI Checks Eligibility",
      color: "from-blue-400 to-blue-500",
      delay: 0.2
    },
    {
      icon: Banknote,
      title: "Cash in Minutes",
      color: "from-purple-400 to-purple-500",
      delay: 0.4
    }
  ];

  const trustFeatures = [
    { icon: Shield, text: "Bank-grade Security" },
    { icon: CheckCircle2, text: "Licensed & Regulated" },
    { icon: Lock, text: "Data Protection" }
  ];

  return (
    <div className="min-h-screen bg-[#f2f7f8]">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav shadow-lg' : ''
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <motion.h1 
                className="text-2xl font-satoshi font-bold text-primary cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Banka
              </motion.h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <motion.a 
                href="#product" 
                className="text-gray-700 hover:text-primary transition-colors"
                whileHover={{ y: -2 }}
              >
                Product
              </motion.a>
              <motion.a 
                href="#company" 
                className="text-gray-700 hover:text-primary transition-colors"
                whileHover={{ y: -2 }}
              >
                Company
              </motion.a>
              <motion.button 
                className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get a Loan
              </motion.button>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <motion.button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white shadow-lg overflow-hidden"
            >
              <div className="px-4 pt-2 pb-4 space-y-3">
                <motion.a 
                  href="#product" 
                  className="block text-gray-700 hover:text-primary transition-colors"
                  whileHover={{ x: 10 }}
                >
                  Product
                </motion.a>
                <motion.a 
                  href="#company" 
                  className="block text-gray-700 hover:text-primary transition-colors"
                  whileHover={{ x: 10 }}
                >
                  Company
                </motion.a>
                <motion.button 
                  className="w-full bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get a Loan
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 bg-[#f2f7f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl tracking-tight font-black text-gray-900 sm:text-5xl md:text-6xl font-satoshi leading-tight"
              >
                <span className="block gradient-text mb-2">Your Smart</span>
                <span className="block gradient-text mb-2">Loan Partner</span>
                <span className="block">Right in Your Hands</span>
              </motion.h1>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-8"
              >
                <p className="text-xl text-gray-600">Get Cash in Minutes via WhatsApp</p>
                <p className="mt-4 text-lg">
                  <span className="font-bold text-gray-800">No paperwork. No queues.</span>{" "}
                  Just fast, fair loans for Uganda, Kenya, and Tanzania.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8 sm:mt-12"
              >
                <motion.button 
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-primary-dark transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Apply Now
                  <ChevronRight className="ml-2 -mr-1 h-5 w-5" />
                </motion.button>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="mt-12"
              >
                <div className="flex items-center justify-center lg:justify-start space-x-8">
                  {trustFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      <feature.icon className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium text-gray-600">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden shadow-xl rounded-2xl p-8"
              >
                <div className="text-center mb-8">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-8 w-8 text-green-500" />
                  </div>
                  <h2 className="mt-4 text-2xl font-bold text-gray-900">Start Your Application</h2>
                  <p className="mt-2 text-gray-600">Enter your WhatsApp number to begin</p>
                </div>

                <div className="space-y-6">
                  <div className="relative">
                    <PhoneInput
                      country={'ug'}
                      value={phone}
                      onChange={handlePhoneChange}
                      onlyCountries={['ug', 'ke', 'tz']}
                      countryCodeEditable={false}
                      inputClass="!w-full !px-4 !py-3 !text-gray-900 !border-b-2 !border-gray-200 focus:!border-primary !outline-none !transition-colors !bg-transparent !rounded-lg"
                      buttonClass="!border-0 !bg-transparent"
                      containerClass="!bg-transparent"
                      dropdownClass="!bg-white !shadow-lg !rounded-lg"
                    />
                  </div>
                  <motion.button 
                    className={`w-full flex justify-center items-center py-3 px-4 rounded-lg text-base font-medium text-white transition-all ${
                      isPhoneValid ? 'bg-primary hover:bg-primary-dark' : 'bg-gray-300 cursor-not-allowed'
                    }`}
                    whileHover={isPhoneValid ? { scale: 1.02 } : {}}
                    whileTap={isPhoneValid ? { scale: 0.98 } : {}}
                    disabled={!isPhoneValid}
                  >
                    Continue with WhatsApp
                  </motion.button>
                  <p className="text-xs text-center text-gray-500">
                    By continuing, you agree to our Terms of Service and Privacy Policy
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-24 bg-[#f2f7f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">How Banka works</h2>
            <p className="text-lg text-gray-600">That's it. No branches. No delays.</p>
          </motion.div>

          <div className="relative">
            {/* Connection Lines */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 transform -translate-y-1/2 hidden md:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: step.delay }}
                  className="relative"
                >
                  <motion.div 
                    className="bg-white p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105"
                    whileHover={{ y: -5 }}
                  >
                    <motion.div 
                      className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center`}
                      whileHover={{ rotate: 12 }}
                    >
                      <step.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-center mb-2">{step.title}</h3>
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                        <ArrowRight className="w-6 h-6 text-gray-400" />
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Security Section */}
      <div className="py-16 bg-[#f2f7f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex items-start space-x-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.div 
              className="bg-black p-6 rounded-full"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
            >
              <Lock className="h-12 w-12 text-white" />
            </motion.div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Your security is our priority</h2>
              <p className="text-lg text-gray-600 mb-4">
                Banka uses the highest level of Internet Security and it is secured by 256 bits SSL 
                security encryption to ensure that your information is completely protected from fraud.
              </p>
              <motion.button 
                className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
                whileHover={{ x: 10 }}
              >
                More on our security measures
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16 bg-[#f2f7f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Get a little richer each day
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <motion.div 
                  className="bg-white p-8 h-full transform transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl rounded-2xl"
                  whileHover={{ y: -5 }}
                >
                  <motion.div 
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6`}
                    whileHover={{ rotate: 12, scale: 1.1 }}
                  >
                    <feature.icon className="h-6 w-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Investment Section */}
      <div className="py-16 bg-[#f2f7f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                The Better Way to<br />Save & Invest
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Banka helps over 5 million customers achieve their financial goals by helping 
                them save and invest with ease.
              </p>
              <div className="flex space-x-4">
                <motion.button 
                  className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get on iPhone
                </motion.button>
                <motion.button 
                  className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get on Android
                </motion.button>
              </div>
            </motion.div>

            <motion.div 
              className="mt-12 lg:mt-0 relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80" 
                alt="Woman using phone" 
                className="w-full rounded-2xl shadow-xl"
              />
              
              {/* Floating Cards */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-4 right-4 bg-white p-4 shadow-lg rounded-xl w-48"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-pink-500" />
                  <span className="text-sm font-semibold">Flex Naira</span>
                </div>
                <div className="mt-2">
                  <div className="text-lg font-bold">₦987,250</div>
                  <div className="text-sm text-gray-600">12% interest rate</div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute top-1/2 left-4 bg-white p-4 shadow-lg rounded-xl w-48"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center space-x-2">
                  <PiggyBank className="h-5 w-5 text-blue-500" />
                  <span className="text-sm font-semibold">Piggybank</span>
                </div>
                <div className="mt-2">
                  <div className="text-lg font-bold">₦345,900</div>
                  <div className="text-sm text-gray-600">15% interest rate</div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-4 right-4 bg-white p-4 shadow-lg rounded-xl w-48"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center space-x-2">
                  <Home className="h-5 w-5 text-orange-500" />
                  <span className="text-sm font-semibold">HouseMoney</span>
                </div>
                <div className="mt-2">
                  <div className="text-lg font-bold">₦5,745,000</div>
                  <div className="text-sm text-gray-600">14% interest rate</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#70a2eb] py-24 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to get started?<br />
              Get your loan today
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join millions of people who trust Banka for their financial needs. Fast, secure, and hassle-free.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button 
                className="px-8 py-4 bg-white text-[#70a2eb] font-semibold text-lg hover:bg-opacity-90 transition-all rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now
              </motion.button>
              <motion.button 
                className="px-8 py-4 border-2 border-white text-white font-semibold text-lg hover:bg-white hover:text-[#70a2eb] transition-all rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <motion.h3 
                className="text-2xl font-bold mb-6"
                whileHover={{ x: 5 }}
              >
                Banka
              </motion.h3>
              <p className="text-gray-400 mb-6">
                Making financial services accessible and affordable for everyone in Africa.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                    whileHover={{ y: -3 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Products</h4>
              <ul className="space-y-4">
                {['Personal Loans', 'Business Loans', 'Investment Plans', 'Savings Account'].map((item, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-4">
                {['About Us', 'Careers', 'Press', 'Blog'].map((item, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Contact</h4>
              <ul className="space-y-4">
                <motion.li whileHover={{ x: 5 }} className="flex items-center text-gray-400">
                  <Phone size={16} className="mr-2" />
                  <span>+1 (234) 567-8900</span>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} className="flex items-center text-gray-400">
                  <Mail size={16} className="mr-2" />
                  <span>hello@banka.com</span>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} className="flex items-center text-gray-400">
                  <MapPin size={16} className="mr-2" />
                  <span>Kampala, Uganda</span>
                </motion.li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Banka. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                    whileHover={{ y: -2 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;