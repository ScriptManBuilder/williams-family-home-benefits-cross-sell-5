import React, { useState } from 'react';
import {
  FAQContainer,
  FAQContent,
  FAQTitle,
  FAQDescription,
  FAQList,
  FAQItem,
  FAQQuestion,
  FAQAnswer,
  FAQIcon
} from '../styles/FAQSection.styles';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What family and home benefits are included?',
      answer: 'Members enjoy home protection plans covering appliances and systems, family care services including telehealth and prescription discounts, 24/7 emergency assistance, identity theft protection, legal consultations, and exclusive shopping discounts at major retailers.'
    },
    {
      question: 'How do I start using my benefits?',
      answer: 'Simply enroll and receive instant access to our member portal. Browse available services, select what you need, and activate your benefits directly through our platform. Coverage and discounts are automatically applied when you use our network.'
    },
    {
      question: 'Are there any restrictions or waiting periods?',
      answer: 'Most benefits activate immediately upon enrollment. Home protection plans may have a short 30-day waiting period for pre-existing conditions. All benefits and restrictions are clearly outlined in your membership agreement with no hidden limitations.'
    },
    {
      question: 'Can my family members use the benefits?',
      answer: 'Yes! All benefits extend to your entire household. Family care services, home protection, and identity theft protection cover everyone living at your residence. Shopping and lifestyle perks can be used by all family members listed on your account.'
    },
    {
      question: 'What types of home repairs are covered?',
      answer: 'Home protection covers major appliances (refrigerator, washer, dryer), HVAC systems, plumbing, electrical systems, and more. Emergency repairs receive priority 24/7 service with no service call fees on covered items.'
    },
    {
      question: 'How much can I realistically save?',
      answer: 'Families typically save $2,000-$4,000 annually through home repair coverage, prescription discounts, shopping perks, and lifestyle benefits. A single major appliance repair can save you $500-$1,500, and the prescription savings alone often pay for the membership.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQContainer id="faq">
      <FAQContent>
        <FAQTitle>Frequently Asked Questions</FAQTitle>
        <FAQDescription>
          Everything you need to know about our exclusive family & home benefits program
        </FAQDescription>
        <FAQList>
          {faqs.map((faq, index) => (
            <FAQItem key={index} $isOpen={openIndex === index}>
              <FAQQuestion onClick={() => toggleFAQ(index)}>
                {faq.question}
                <FAQIcon $isOpen={openIndex === index}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                  </svg>
                </FAQIcon>
              </FAQQuestion>
              <FAQAnswer $isOpen={openIndex === index}>
                {faq.answer}
              </FAQAnswer>
            </FAQItem>
          ))}
        </FAQList>
      </FAQContent>
    </FAQContainer>
  );
};

export default FAQSection;
