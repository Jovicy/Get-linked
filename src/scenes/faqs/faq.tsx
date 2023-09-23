/* eslint-disable react-refresh/only-export-components */
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

function FAQ() {
  const [faqs, setFaqs] = useState<FAQItem[]>([
    {
      question: 'Can I work on a project I started before the hackathon?',
      answer: 'Answer to Question 1',
      isOpen: false,
    },
    {
      question: 'What happens if I need help during the hackathon?',
      answer: 'Answer to Question 2',
      isOpen: false,
    },
    {
      question: 'What happens if I dont have an idea for a project?',
      answer: 'Answer to Question 3',
      isOpen: false,
    },
    {
      question: 'Can I join a team or do I have to come with one?',
      answer: 'Answer to Question 4',
      isOpen: false,
    },
    {
      question: 'What happens after the hackathon ends',
      answer: 'Answer to Question 5',
      isOpen: false,
    },
    {
      question: 'Can I work on a project I started before the hackathon?',
      answer: 'Answer to Question 6',
      isOpen: false,
    },
  ]);

  const toggleFAQ = (index: number) => {
    const newFaqs = [...faqs];
    newFaqs[index].isOpen = !newFaqs[index].isOpen;
    setFaqs(newFaqs);
  };

  return (
    <div className="max-w-xl mx-auto">
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <div
            className="flex justify-between items-center border-b border-span bg-transparent cursor-pointer pb-3"
            onClick={() => toggleFAQ(index)}
          >
            <p className="text-sm font-normal font-montserrat text-white">{faq.question}</p>
            <p className="text-xl text-span">{faq.isOpen ? '-' : '+'}</p>
          </div>
          {faq.isOpen && (
            <div className="bg-transparent text-sm font-normal font-montserrat py-3 text-white">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FAQ;
