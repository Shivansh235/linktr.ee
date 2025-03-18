import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      description: 'Boost your digital presence and monetize your socials.',
      features: [
        'Unlimited links',
        'Multi-factor authentication',
        'QR codes',
        'Cross-channel following',
        'Sell merchandise and affiliate products',
      ],
      buttonText: 'Join for free',
    },
    {
      name: 'Starter',
      price: '$5/month',
      description: 'Capture attention and engage visitors effortlessly.',
      features: [
        'All Free plan features',
        'Scheduled links',
        'Link animations',
        'Button customization',
        'Spotlight a link',
      ],
      buttonText: 'Get Starter',
    },
    {
      name: 'Pro',
      price: '$9/month',
      description: 'Unlock advanced features for professionals.',
      features: [
        'All Starter plan features',
        'Advanced analytics',
        'Priority support',
        'Custom domains',
        'Third-party integrations',
      ],
      buttonText: 'Try Pro for free',
    },
    {
      name: 'Premium',
      price: '$24/month',
      description: 'Access all features with premium support.',
      features: [
        'All Pro plan features',
        'Dedicated account manager',
        'Premium integrations',
        'Advanced customization',
        'Team collaboration tools',
      ],
      buttonText: 'Get Premium',
    },
  ];

  return (
    <div className="bg-blue-400 py-12 px-4 md:px-8 min-h-screen pt-40">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-8">Pricing Plans</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col">
            <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
            <p className="text-gray-700 mb-4">{plan.description}</p>
            <div className="text-2xl font-bold mb-4">{plan.price}</div>
            <ul className="flex-1 mb-6">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="text-gray-600 mb-2">
                  • {feature}
                </li>
              ))}
            </ul>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
