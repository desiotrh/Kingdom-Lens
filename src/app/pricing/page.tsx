import Link from 'next/link';

export default function Pricing() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#131416] dark group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#2d2f34] px-10 py-3">
          <div className="flex items-center gap-4 text-white">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M39.998 35.764C39.9944 35.7463 39.9875 35.7155 39.9748 35.6706C39.9436 35.5601 39.8949 35.4259 39.8346 35.2825C39.8168 35.2403 39.7989 35.1993 39.7813 35.1602C38.5103 34.2887 35.9788 33.0607 33.7095 32.5189C30.9875 31.8691 27.6413 31.4783 24 31.4783C20.3587 31.4783 17.0125 31.8691 14.2905 32.5189C12.0012 33.0654 9.44505 34.3104 8.18538 35.1832C8.17384 35.2075 8.16216 35.233 8.15052 35.2592C8.09919 35.3751 8.05721 35.4886 8.02977 35.589C8.00356 35.6848 8.00039 35.7333 8.00004 35.7388C8.00004 35.739 8 35.7393 8.00004 35.7388C8.00004 35.7641 8.0104 36.0767 8.68485 36.6314C9.34546 37.1746 10.4222 37.7531 11.9291 38.2772C14.9242 39.319 19.1919 40 24 40C28.8081 40 33.0758 39.319 36.0709 38.2772C37.5778 37.7531 38.6545 37.1746 39.3151 36.6314C39.9006 36.1499 39.9857 35.8511 39.998 35.764ZM4.95178 32.7688L21.4543 6.30267C22.6288 4.4191 25.3712 4.41909 26.5457 6.30267L43.0534 32.777C43.0709 32.8052 43.0878 32.8338 43.104 32.8629L41.3563 33.8352C43.104 32.8629 43.1038 32.8626 43.104 32.8629L43.1051 32.865L43.1065 32.8675L43.1101 32.8739L43.1199 32.8918C43.1276 32.906 43.1377 32.9246 43.1497 32.9473C43.1738 32.9925 43.2062 33.0545 43.244 33.1299C43.319 33.2792 43.4196 33.489 43.5217 33.7317C43.6901 34.1321 44 34.9311 44 35.7391C44 37.4427 43.003 38.7775 41.8558 39.7209C40.6947 40.6757 39.1354 41.4464 37.385 42.0552C33.8654 43.2794 29.133 44 24 44C18.867 44 14.1346 43.2794 10.615 42.0552C8.86463 41.4464 7.30529 40.6757 6.14419 39.7209C4.99695 38.7775 3.99999 37.4427 3.99999 35.7391C3.99999 34.8725 4.29264 34.0922 4.49321 33.6393C4.60375 33.3898 4.71348 33.1804 4.79687 33.0311C4.83898 32.9556 4.87547 32.8935 4.9035 32.8471C4.91754 32.8238 4.92954 32.8043 4.93916 32.7889L4.94662 32.777L4.95178 32.7688ZM35.9868 29.004L24 9.77997L12.0131 29.004C12.4661 28.8609 12.9179 28.7342 13.3617 28.6282C16.4281 27.8961 20.0901 27.4783 24 27.4783C27.9099 27.4783 31.5719 27.8961 34.6383 28.6282C35.082 28.7342 35.5339 28.8609 35.9868 29.004Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
              Kingdom Lens
            </h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="hidden md:flex items-center gap-9">
              <Link href="/" className="text-white text-sm font-medium leading-normal hover:text-[#b7c6e0] transition-colors duration-200">
                Home
              </Link>
              <Link href="/features" className="text-white text-sm font-medium leading-normal hover:text-[#b7c6e0] transition-colors duration-200">
                Features
              </Link>
              <Link href="/login" className="text-white text-sm font-medium leading-normal hover:text-[#b7c6e0] transition-colors duration-200">
                Login
              </Link>
            </div>
            <div className="hidden md:flex gap-2">
              <Link href="/register" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#b7c6e0] text-[#131416] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#b7c6e0]/90 transition-all duration-200">
                <span className="truncate">Start Free Trial</span>
              </Link>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="px-40 py-20">
          <div className="max-w-[960px] mx-auto text-center">
            <h1 className="text-white text-5xl font-black leading-tight tracking-[-0.033em] mb-6">
              📸 <span className="text-[#b7c6e0]">Kingdom Lens</span> Pricing
            </h1>
            <p className="text-white text-xl font-normal leading-normal max-w-3xl mx-auto mb-12">
              Professional photography tools for Kingdom-focused creators. Start free, upgrade when you're ready.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="px-40 py-20">
          <div className="max-w-[960px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Free Plan */}
              <div className="bg-[#131416]/30 border border-[#2d2f34] rounded-xl p-8 hover:bg-[#131416]/50 hover:border-[#b7c6e0]/50 transition-all duration-300">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Free</h3>
                  <div className="text-4xl font-bold text-[#b7c6e0] mb-2">$0</div>
                  <p className="text-white text-sm">per month</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-white">
                    <span className="text-[#b7c6e0] mr-3">✓</span>
                    10 photo edits per month
                  </li>
                  <li className="flex items-center text-white">
                    <span className="text-[#b7c6e0] mr-3">✓</span>
                    Standard photo templates
                  </li>
                  <li className="flex items-center text-white">
                    <span className="text-[#b7c6e0] mr-3">✓</span>
                    Basic AI photo enhancement
                  </li>
                  <li className="flex items-center text-white">
                    <span className="text-[#b7c6e0] mr-3">✓</span>
                    Community support
                  </li>
                  <li className="flex items-center text-white">
                    <span className="text-[#b7c6e0] mr-3">✓</span>
                    2GB storage
                  </li>
                  <li className="flex items-center text-gray-400">
                    <span className="text-gray-500 mr-3">✗</span>
                    No advanced editing
                  </li>
                  <li className="flex items-center text-gray-400">
                    <span className="text-gray-500 mr-3">✗</span>
                    No custom branding
                  </li>
                  <li className="flex items-center text-gray-400">
                    <span className="text-gray-500 mr-3">✗</span>
                    No professional tools
                  </li>
                </ul>
                <Link href="/register" className="w-full block text-center px-6 py-3 bg-[#2d2f34] text-white text-sm font-bold rounded-lg hover:bg-[#2d2f34]/90 transition-all duration-200">
                  Get Started Free
                </Link>
              </div>

              {/* Pro Plan */}
              <div className="bg-[#131416]/30 border-2 border-[#b7c6e0] rounded-xl p-8 hover:bg-[#131416]/50 transition-all duration-300 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#b7c6e0] text-[#131416] px-4 py-1 rounded-full text-sm font-bold">Most Popular</span>
                </div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
                  <div className="text-4xl font-bold text-[#b7c6e0] mb-2">$29</div>
                  <p className="text-white text-sm">per month</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-white">
                    <span className="text-[#b7c6e0] mr-3">✓</span>
                    Everything in Free
                  </li>
                  <li className="flex items-center text-white">
                    <span className="text-[#b7c6e0] mr-3">✓</span>
                    Unlimited photo edits
                  </li>
                  <li className="flex items-center text-white">
                    <span className="text-[#b7c6e0] mr-3">✓</span>
                    Premium photo templates
                  </li>
                  <li className="flex items-center text-white">
                    <span className="text-[#b7c6e0] mr-3">✓</span>
                    Advanced AI photo enhancement
                  </li>
                  <li className="flex items-center text-white">
                    <span className="text-[#b7c6e0] mr-3">✓</span>
                    Professional editing tools
                  </li>
                  <li className="flex items-center text-white">
                    <span className="text-[#b7c6e0] mr-3">✓</span>
                    Custom branding
                  </li>
                  <li className="flex items-center text-white">
                    <span className="text-[#b7c6e0] mr-3">✓</span>
                    Advanced photo effects
                  </li>
                  <li className="flex items-center text-white">
                    <span className="text-[#b7c6e0] mr-3">✓</span>
                    Priority support
                  </li>
                  <li className="flex items-center text-white">
                    <span className="text-[#b7c6e0] mr-3">✓</span>
                    100GB storage
                  </li>
                  <li className="flex items-center text-white">
                    <span className="text-[#b7c6e0] mr-3">✓</span>
                    Multiple export formats
                  </li>
                  <li className="flex items-center text-white">
                    <span className="text-[#b7c6e0] mr-3">✓</span>
                    Photo analytics
                  </li>
                  <li className="flex items-center text-gray-400">
                    <span className="text-gray-500 mr-3">✗</span>
                    No team collaboration
                  </li>
                  <li className="flex items-center text-gray-400">
                    <span className="text-gray-500 mr-3">✗</span>
                    No white-label options
                  </li>
                </ul>
                <Link href="/register" className="w-full block text-center px-6 py-3 bg-[#b7c6e0] text-[#131416] text-sm font-bold rounded-lg hover:bg-[#b7c6e0]/90 transition-all duration-200">
                  Start Pro Trial
                </Link>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-[#131416]/30 border border-[#2d2f34] rounded-xl p-8 hover:bg-[#131416]/50 hover:border-[#b7c6e0]/50 transition-all duration-300">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                  <div className="text-4xl font-bold text-[#b7c6e0] mb-2">$99</div>
                  <p className="text-white text-sm">per month</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-white">
                    <span className="text-[#b7c6e0] mr-3">✓</span>
                    Everything in Pro
                  </li>
                  <li className="flex items-center text-white">
                    <span className="text-[#b7c6e0] mr-3">✓</span>
                    Team collaboration (up to 10 photographers)
                  </li>
                  <li className="flex items-center text-white">
                    <span className="text-[#b7c6e0] mr-3">✓</span>
                    White-label photography platform
                  </li>
                  <li className="flex items-center text-white">
                    <span className="text-[#b7c6e0] mr-3">✓</span>
                    Custom photo integrations
                  </li>
                  <li className="flex items-center text-white">
                    <span className="text-[#b7c6e0] mr-3">✓</span>
                    Advanced photo analytics
                  </li>
                  <li className="flex items-center text-white">
                    <span className="text-[#b7c6e0] mr-3">✓</span>
                    Dedicated photography specialist
                  </li>
                  <li className="flex items-center text-white">
                    <span className="text-[#b7c6e0] mr-3">✓</span>
                    1TB storage
                  </li>
                  <li className="flex items-center text-white">
                    <span className="text-[#b7c6e0] mr-3">✓</span>
                    API access for photo processing
                  </li>
                  <li className="flex items-center text-white">
                    <span className="text-[#b7c6e0] mr-3">✓</span>
                    Custom photo workflows
                  </li>
                  <li className="flex items-center text-white">
                    <span className="text-[#b7c6e0] mr-3">✓</span>
                    Advanced security features
                  </li>
                </ul>
                <Link href="/register" className="w-full block text-center px-6 py-3 bg-[#2d2f34] text-white text-sm font-bold rounded-lg hover:bg-[#2d2f34]/90 transition-all duration-200">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Special Offers */}
        <section className="px-40 py-20 bg-[#131416]/50">
          <div className="max-w-[960px] mx-auto">
            <h2 className="text-white text-3xl font-black leading-tight tracking-[-0.033em] mb-12 text-center">
              🎁 Special Offers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#131416]/30 border border-[#2d2f34] rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">New User Discount</h3>
                <p className="text-white mb-4">50% off first 3 months</p>
                <ul className="text-white text-sm space-y-2">
                  <li>• Available for all Pro and Enterprise plans</li>
                  <li>• No setup fees</li>
                  <li>• Easy cancellation</li>
                </ul>
              </div>
              <div className="bg-[#131416]/30 border border-[#2d2f34] rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Annual Billing</h3>
                <p className="text-white mb-4">Save 20% with annual plans</p>
                <ul className="text-white text-sm space-y-2">
                  <li>• 20% discount on all plans</li>
                  <li>• Better value for long-term users</li>
                  <li>• Annual commitment required</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-40 py-20">
          <div className="max-w-[960px] mx-auto">
            <h2 className="text-white text-3xl font-black leading-tight tracking-[-0.033em] mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-[#131416]/30 border border-[#2d2f34] rounded-xl p-6">
                <h3 className="text-white text-xl font-bold mb-3">Can I cancel anytime?</h3>
                <p className="text-white">Yes, you can cancel your subscription at any time. No long-term contracts or hidden fees.</p>
              </div>
              <div className="bg-[#131416]/30 border border-[#2d2f34] rounded-xl p-6">
                <h3 className="text-white text-xl font-bold mb-3">Is there a free trial?</h3>
                <p className="text-white">Yes! Start with our free plan and upgrade to Pro or Enterprise when you're ready.</p>
              </div>
              <div className="bg-[#131416]/30 border border-[#2d2f34] rounded-xl p-6">
                <h3 className="text-white text-xl font-bold mb-3">What payment methods do you accept?</h3>
                <p className="text-white">We accept all major credit cards, PayPal, and Apple Pay for your convenience.</p>
              </div>
              <div className="bg-[#131416]/30 border border-[#2d2f34] rounded-xl p-6">
                <h3 className="text-white text-xl font-bold mb-3">Do you offer team discounts?</h3>
                <p className="text-white">Yes! Contact our sales team for custom pricing on Enterprise plans for teams of 5+ users.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-40 py-20 bg-[#131416]/50">
          <div className="max-w-[960px] mx-auto text-center">
            <h2 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] mb-6">
              Ready to Start Creating?
            </h2>
            <p className="text-white text-xl font-normal leading-normal mb-8">
              Join thousands of Kingdom creators who are already using Kingdom Lens.
            </p>
            <Link href="/register" className="px-8 py-4 bg-[#b7c6e0] text-[#131416] text-lg font-bold rounded-lg hover:bg-[#b7c6e0]/90 transition-all duration-200">
              Start Free Trial
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 bg-[#131416]/50 border-t border-[#2d2f34]">
          <div className="max-w-[960px] mx-auto px-40 py-12">
            <div className="text-center">
              <p className="text-white text-sm">
                © 2024 Kingdom Lens. Built with the Holy Spirit.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
} 