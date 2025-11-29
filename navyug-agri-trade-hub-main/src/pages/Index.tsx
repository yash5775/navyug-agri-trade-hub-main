import React, { useEffect } from 'react';
import { ArrowRight, Mail, Phone, MapPin, Truck, Globe, Award, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate, useLocation } from 'react-router-dom';
import { products } from '@/data/products';

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if there's a hash in the URL (e.g., #contact) and scroll to it
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="/lovable-uploads/ef1bc6e7-7b27-4e12-8ef2-bcf775af4873.png"
                alt="NAVYUG ENTERPRISE Logo"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">NAVYUG ENTERPRISE</h1>
                <p className="text-sm text-gray-600">Quality Agricultural Products</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-amber-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors">About</a>
              <a href="#products" className="text-gray-700 hover:text-amber-600 transition-colors">Products</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-amber-50 to-orange-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Premium Agricultural Products for
                <span className="text-amber-600"> Global Markets</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                NAVYUG ENTERPRISE specializes in the import and export of high-quality agricultural products including peanuts, chana, and coriander. We connect global markets with premium Indian agricultural produce.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-white"
                  onClick={scrollToProducts}
                >
                  View Our Products <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-amber-600 text-amber-600 hover:bg-amber-50"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-12 shadow-2xl">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-8">
                    <img
                      src="/lovable-uploads/ef1bc6e7-7b27-4e12-8ef2-bcf775af4873.png"
                      alt="NAVYUG ENTERPRISE Logo"
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  <h3 className="text-4xl font-bold text-gray-900 mb-4 font-serif">NAVYUG ENTERPRISE</h3>
                  <p className="text-amber-700 font-semibold text-xl mb-6">Established 2003</p>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                    <p className="text-gray-700 font-medium text-lg mb-4">Premium Agricultural Products</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Founded by Mr. Hareshbhai Galani and Mr. Manojbhai Galani, we are committed to supporting farmers and connecting them with genuine buyers through honest, commission-based trade. For over two decades, we have been working as trusted commission agents in agricultural food products.
                    </p>
                  </div>
                  <div className="mt-6 pt-6 border-t border-amber-200">
                    <p className="text-amber-800 font-semibold uppercase tracking-wide">Trusted Global Partner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Globe className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Global Import-Export</h3>
                <p className="text-gray-600">Connecting international markets with premium Indian agricultural products through reliable trade partnerships.</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
                <p className="text-gray-600">Rigorous quality control processes ensure only the finest agricultural products reach our customers.</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Truck className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Reliable Logistics</h3>
                <p className="text-gray-600">Efficient supply chain management with timely delivery and proper handling of all products.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About NAVYUG ENTERPRISE</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                NAVYUG ENTERPRISE was established in 2003 by Mr. Hareshbhai Galani and Mr. Manojbhai Galani with a vision to support farmers and connect them with genuine buyers through honest, commission-based trade. For over two decades, we have been working as a trusted commission agent in agricultural food products such as grains, pulses, and spices. We do not deal in fertilizers or chemicals — only natural, farm-grown produce. Our goal is to ensure that farmers receive fair value for their hard work, while buyers benefit from pure, quality products. Built on transparency, trust, and rural values, NAVYUG ENTERPRISE is committed to promoting ethical trade and strengthening India's agricultural backbone.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Our Mission</h4>
                  <p className="text-gray-600">To provide exceptional agricultural products that meet international quality standards.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Our Vision</h4>
                  <p className="text-gray-600">To become a leading name in global agricultural trade and export excellence.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=600&h=500&fit=crop"
                alt="About us"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in high-quality agricultural products that meet international standards and satisfy global market demands.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {products.map((product) => (
              <Card key={product.id} className="w-72 overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <Button
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to explore business opportunities? Contact us today to discuss your agricultural product requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-amber-600 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <a href="tel:+917016055780" className="text-gray-600 hover:text-amber-600 transition-colors">+91 7016055780</a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-amber-600 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <a href="mailto:info@navyugenterprise.com" className="text-gray-600 hover:text-amber-600 transition-colors">info@navyugenterprise.com</a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-amber-600 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600">A.P.M.C marketing yard, NH-27<br />Gondal-360311, Rajkot, Gujarat</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 h-64 w-full rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://maps.google.com/maps?q=APMC+Marketing+Yard+Gondal&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
              </div>
            </div>

            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Inquiry about products"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="/lovable-uploads/ef1bc6e7-7b27-4e12-8ef2-bcf775af4873.png"
                  alt="NAVYUG ENTERPRISE Logo"
                  className="w-10 h-10 object-contain"
                />
                <h3 className="text-xl font-bold">NAVYUG ENTERPRISE</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Your trusted partner in agricultural product import and export, connecting global markets with premium Indian produce.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={scrollToProducts} className="hover:text-amber-400 transition-colors text-left">Groundnut</button></li>
                <li><button onClick={scrollToProducts} className="hover:text-amber-400 transition-colors text-left">Peanut</button></li>
                <li><button onClick={scrollToProducts} className="hover:text-amber-400 transition-colors text-left">Coriander</button></li>
                <li><button onClick={scrollToProducts} className="hover:text-amber-400 transition-colors text-left">Cumin Seed</button></li>
                <li><button onClick={scrollToProducts} className="hover:text-amber-400 transition-colors text-left">Black Cumin</button></li>
                <li><button onClick={scrollToProducts} className="hover:text-amber-400 transition-colors text-left">Chickpea</button></li>
                <li><button onClick={scrollToProducts} className="hover:text-amber-400 transition-colors text-left">Mung</button></li>
                <li><button onClick={scrollToProducts} className="hover:text-amber-400 transition-colors text-left">Sesame Seed</button></li>
                <li><button onClick={scrollToProducts} className="hover:text-amber-400 transition-colors text-left">Black Sesame Seed</button></li>
                <li><button onClick={scrollToProducts} className="hover:text-amber-400 transition-colors text-left">Wheat</button></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2024 NAVYUG ENTERPRISE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
