import React from 'react';

export const TermsOfUsage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-boost-dark mb-8">Terms of Usage</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-boost-dark mb-3">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using the BoostOwl website and services, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services. Any participation in this service will constitute acceptance of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-boost-dark mb-3">2. Description of Service</h2>
            <p className="mb-4">
              BoostOwl provides users with tools for inventory management, order automation, and customer support via chatbot integrations (the "Service"). You are responsible for obtaining access to the Service, and that access may involve third-party fees (such as Internet service provider or airtime charges).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-boost-dark mb-3">3. User Conduct</h2>
            <p className="mb-4">
              You agree to use the Service only for lawful purposes. You are prohibited from posting on or transmitting through the Service any material that violates or infringes in any way upon the rights of others, or that is threatening, abusive, defamatory, invasive of privacy or publicity rights, or otherwise objectionable.
            </p>
            <p className="mb-4">
              You agree not to use the Service to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Upload, post, email, or otherwise transmit any content that is unlawful, harmful, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, libelous, invasive of another's privacy, hateful, or racially, ethnically, or otherwise objectionable.</li>
              <li>Impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a person or entity.</li>
              <li>Violate any applicable local, state, national, or international law.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-boost-dark mb-3">4. Intellectual Property</h2>
            <p className="mb-4">
              The Service and its original content, features, and functionality are and will remain the exclusive property of BoostOwl and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of BoostOwl.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-boost-dark mb-3">5. Termination</h2>
            <p className="mb-4">
              We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-boost-dark mb-3">6. Disclaimer</h2>
            <p className="mb-4">
              Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-boost-dark mb-3">7. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-boost-dark mb-3">8. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us at support@boostowl.io.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
