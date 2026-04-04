import React from 'react';

export const DataDeletionInstructions: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-boost-dark mb-8">User Data Deletion Instructions</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-boost-dark mb-3">1. Introduction</h2>
            <p className="mb-4">
              According to the Facebook Platform rules, we have to provide <strong>User Data Deletion Callback URL</strong> or <strong>Data Deletion Instructions URL</strong>. If you want to delete your activities for the BoostOwl App, you can follow these instructions to initiate a data deletion request.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-boost-dark mb-3">2. How to Request Data Deletion</h2>
            <p className="mb-4">
              If you wish to delete your account and all associated data from BoostOwl, you can do so by contacting our support team. We value your privacy and rights to your data.
            </p>
            <p className="mb-4">
              To request data deletion, please follow these steps:
            </p>
            <ol className="list-decimal pl-6 mb-4 space-y-2">
              <li>Send an email to our Data Protection Officer at <strong>support@boostowl.io</strong>.</li>
              <li>Use the subject line "<strong>Data Deletion Request</strong>".</li>
              <li>In the body of the email, please include your registered email address and clearly state that you would like your account and personal data to be deleted.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-boost-dark mb-3">3. What Happens Next?</h2>
            <p className="mb-4">
              Upon receiving your request, our team will:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Verify your identity to ensure the safety of your data.</li>
              <li>Process your deletion request within 30 days.</li>
              <li>Notify you via email once your data has been permanently removed from our systems.</li>
            </ul>
            <p className="mb-4">
              Please note that some data may be retained for legal or regulatory purposes as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-boost-dark mb-3">4. Contact Us</h2>
            <p className="mb-4">
              If you have any trouble with these steps or have questions regarding your data privacy, please don't hesitate to reach out to us at support@boostowl.io.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
