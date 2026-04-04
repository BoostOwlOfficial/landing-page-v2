import React from 'react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-boost-dark mb-8">Privacy Policy</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-boost-dark mb-3">1. Introduction</h2>
            <p className="mb-4">
              Welcome to BoostOwl ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience on our website and in using our products and services (collectively, "Services"). This Privacy Policy applies to our website and Services and governs our data collection, processing, and usage practices.
            </p>
            <p className="mb-4">
              By using our Services, you consent to the data practices described in this policy. If you do not agree with the data practices described in this policy, you should not use the Services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-boost-dark mb-3">2. Information We Collect</h2>
            <p className="mb-2">We collect information to provide better services to all our users. We collect the following types of information:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Information you give us:</strong> For example, our services require you to sign up for a BoostOwl account. When you do, we’ll ask for personal information, like your name, email address, telephone number, or credit card to store with your account.</li>
              <li><strong>Information we get from your use of our services:</strong> We collect information about the services that you use and how you use them. This includes device information, log information, and location information.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-boost-dark mb-3">3. How We Use Information</h2>
            <p className="mb-4">
              We use the information we collect from all of our services to provide, maintain, protect and improve them, to develop new ones, and to protect BoostOwl and our users. We also use this information to offer you tailored content – like giving you more relevant search results and ads.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-boost-dark mb-3">4. Information We Share</h2>
            <p className="mb-4">
              We do not share personal information with companies, organizations and individuals outside of BoostOwl unless one of the following circumstances applies:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>With your consent:</strong> We will share personal information with companies, organizations or individuals outside of BoostOwl when we have your consent to do so.</li>
              <li><strong>For external processing:</strong> We provide personal information to our affiliates or other trusted businesses or persons to process it for us, based on our instructions and in compliance with our Privacy Policy and any other appropriate confidentiality and security measures.</li>
              <li><strong>For legal reasons:</strong> We will share personal information if we have a good-faith belief that access, use, preservation or disclosure of the information is reasonably necessary to meet any applicable law, regulation, legal process or enforceable governmental request.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-boost-dark mb-3">5. Data Security</h2>
            <p className="mb-4">
              We work hard to protect BoostOwl and our users from unauthorized access to or unauthorized alteration, disclosure or destruction of information we hold. In particular:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>We encrypt many of our services using SSL.</li>
              <li>We review our information collection, storage and processing practices, including physical security measures, to guard against unauthorized access to systems.</li>
              <li>We restrict access to personal information to BoostOwl employees, contractors and agents who need to know that information in order to process it for us, and who are subject to strict contractual confidentiality obligations and may be disciplined or terminated if they fail to meet these obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-boost-dark mb-3">6. Meta Platform Data</h2>
            <p className="mb-4">
              If you use our integration with Meta platforms (such as WhatsApp, Facebook, or Instagram), we comply with Meta's Platform Terms and Developer Policies. We only use the data you provide through these platforms to facilitate the specific service or functionality you have requested (e.g., messaging automation). We do not sell, transfer, or use this data for advertising purposes without your explicit consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-boost-dark mb-3">7. Changes to This Policy</h2>
            <p className="mb-4">
              Our Privacy Policy may change from time to time. We will not reduce your rights under this Privacy Policy without your explicit consent. We will post any privacy policy changes on this page and, if the changes are significant, we will provide a more prominent notice (including, for certain services, email notification of privacy policy changes).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-boost-dark mb-3">8. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mb-2"><strong>BoostOwl Support Team</strong></p>
            <p className="mb-2">Email: support@boostowl.io</p>
          </section>
        </div>
      </div>
    </div>
  );
};
