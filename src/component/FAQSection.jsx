import React, { useState, useEffect } from 'react';
import { BsChevronDown } from 'react-icons/bs'; // Arrow icon for accordion toggle
import { accordionData } from '../data/dataTwo';

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle the same index or close all
    };

    useEffect(() => {
        // Ensure the dark theme is applied
        const htmlTag = document.getElementsByTagName("html")[0];
        htmlTag.classList.add('dark');
        htmlTag.classList.remove('light');
    }, []);

    return (
        <div className="lg:col-span-8 md:mt-0 mt-8" id="faq-section">
            <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
                Frequently Asked Questions
            </h2>
            {accordionData.slice(0, 4).map((item, index) => (
                <div key={index} className="relative shadow-md dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                    <button
                        type="button"
                        onClick={() => toggleAccordion(index)}
                        className={`flex justify-between items-center p-5 w-full text-left font-medium transition duration-300 ${
                            activeIndex === index
                                ? "bg-gray-100 dark:bg-slate-800 text-indigo-600"
                                : "bg-white dark:bg-slate-900 text-gray-800 dark:text-gray-400"
                        }`}
                    >
                        <span>{item.title}</span>
                        <BsChevronDown
                            className={`transform transition-transform ${
                                activeIndex === index ? "rotate-180" : "rotate-0"
                            }`}
                        />
                    </button>
                    {activeIndex === index && (
                        <div className="p-5 bg-gray-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300">
                            <p>{item.content}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FAQSection;