import Link from 'next/link';

export default function Privacy() {
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
              <Link href="/pricing" className="text-white text-sm font-medium leading-normal hover:text-[#b7c6e0] transition-colors duration-200">
                Pricing
              </Link>
            </div>
            <div className="hidden md:flex gap-2">
              <Link href="/register" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#b7c6e0] text-[#131416] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#b7c6e0]/90 transition-all duration-200">
                <span className="truncate">Start Free Trial</span>
              </Link>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 px-40 py-20">
          <div className="max-w-[960px] mx-auto">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] mb-8">
              Privacy Policy
            </h1>
            <div className="bg-[#131416]/30 border border-[#2d2f34] rounded-xl p-8">
              <div className="text-white space-y-6">
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                  <p className="text-white leading-relaxed mb-4">
                    We collect information you provide directly to us, such as when you create an account, 
                    upload content, or contact us for support. This may include:
                  </p>
                  <ul className="text-white list-disc list-inside space-y-2 ml-4">
                    <li>Name, email address, and other contact information</li>
                    <li>Account credentials and profile information</li>
                    <li>Content you upload, including photos and projects</li>
                    <li>Communications with our support team</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                  <p className="text-white leading-relaxed mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="text-white list-disc list-inside space-y-2 ml-4">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send technical notices, updates, and support messages</li>
                    <li>Respond to your comments and questions</li>
                    <li>Protect against fraudulent, unauthorized, or illegal activity</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing</h2>
                  <p className="text-white leading-relaxed mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties 
                    without your consent, except as described in this policy. We may share your information:
                  </p>
                  <ul className="text-white list-disc list-inside space-y-2 ml-4">
                    <li>With your consent or at your direction</li>
                    <li>With service providers who perform services on our behalf</li>
                    <li>To comply with legal obligations</li>
                    <li>To protect our rights and safety</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
                  <p className="text-white leading-relaxed">
                    We implement appropriate technical and organizational measures to protect your personal 
                    information against unauthorized access, alteration, disclosure, or destruction. However, 
                    no method of transmission over the internet is 100% secure.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights</h2>
                  <p className="text-white leading-relaxed mb-4">
                    You have the right to:
                  </p>
                  <ul className="text-white list-disc list-inside space-y-2 ml-4">
                    <li>Access and update your personal information</li>
                    <li>Delete your account and associated data</li>
                    <li>Opt out of marketing communications</li>
                    <li>Request a copy of your data</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">6. Cookies and Tracking</h2>
                  <p className="text-white leading-relaxed">
                    We use cookies and similar technologies to enhance your experience, analyze usage, 
                    and provide personalized content. You can control cookie settings through your browser.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">7. Children's Privacy</h2>
                  <p className="text-white leading-relaxed">
                    Our services are not intended for children under 13. We do not knowingly collect 
                    personal information from children under 13.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">8. Changes to This Policy</h2>
                  <p className="text-white leading-relaxed">
                    We may update this privacy policy from time to time. We will notify you of any 
                    material changes by posting the new policy on this page.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">9. Contact Us</h2>
                  <p className="text-white leading-relaxed">
                    If you have questions about this privacy policy, please contact us at:
                  </p>
                  <p className="text-[#b7c6e0] mt-2">
                    privacy@kingdomlens.com
                  </p>
                </section>

                <div className="mt-8 pt-6 border-t border-[#2d2f34]">
                  <p className="text-white text-sm">
                    Last updated: December 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

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