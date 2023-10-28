
import React, { useState } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleFaq = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };


  const faqs = [
    {
      question: "What is a savings account?",
      answer: "A savings account is a basic bank account that allows you to deposit money and earn interest on your balance.",
    },
    {
      question: "How do I open a bank account?",
      answer: "To open a bank account, visit our branch with identification, proof of address, and an initial deposit.",
    },
    {
      question: "What is a checking account used for?",
      answer: "A checking account is for everyday transactions, like writing checks, making debit card purchases.",
    },
    {
      question: "How can I check my account balance?",
      answer: "You can check your account balance through online banking, mobile apps, ATMs, or by visiting our bank branch.",
    },
    {
      question: "What is a CD (Certificate of Deposit)?",
      answer: "A CD is a time-bound savings account with higher interest rates, but funds are locked for a specified period.",
    },
    {
      question: "How can I transfer money to another bank?",
      answer: "You can transfer money to another bank via online banking, wire transfers, checks, or mobile payment apps.",
    },
    {
      question: "What is a credit score and why is it important?",
      answer: "A credit score is a numerical representation of your creditworthiness. It's vital for loan approvals and interest rates.",
    },
    {
      question: "What fees are associated with a bank account?",
      answer: "Common fees include ATM fees and wire transfer fees. Review your bank's fee schedule.",
    },
    {
      question: "How can I protect my account from fraud?",
      answer: "Protect your account by using strong passwords, monitoring transactions, and avoiding suspicious emails or calls.",
    },
    {
      question: "What's the difference between a bank and a credit union?",
      answer: "Banks are for-profit institutions, while credit unions are non-profit and often offer better rates and a community focus.",
    },
  ];

  return (
    <div className="faq-container">
        <h1>FAQs</h1>
      <div className="answer-container">
        {faqs.map((faq, index) => (
          <div className="faq-box" key={index}>
            <span onClick={() => toggleFaq(index)} >
              {openIndex === index ?  <i className="fa-solid fa-angle-up"></i> :  <i className="fa-solid fa-angle-down"></i>} {faq.question}
            </span>
            {openIndex === index && <p style={{backgroundColor:'#BEAE4E', padding:'10px', margin:'5px 0px', color:'white', fontWeight:'bold'}}>{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;





// import { useState } from "react";

// const Faq = () => {
//   const [isOpen, setIsOpen] = useState(new Array(10).fill(false));

//   const toggleFaq = (index) => {
//     const updatedOpen = [...isOpen];
//     updatedOpen[index] = !updatedOpen[index];
//     setIsOpen(updatedOpen);
//   };

//   const faqs = [
//     {
//       question: "What is a savings account?",
//       answer: "A savings account is a basic bank account that allows you to deposit money and earn interest on your balance.",
//     },
//     {
//       question: "How do I open a bank account?",
//       answer: "To open a bank account, visit our branch with identification, proof of address, and an initial deposit.",
//     },
//     {
//       question: "What is a checking account used for?",
//       answer: "A checking account is for everyday transactions, like writing checks, making debit card purchases, and online bill payments.",
//     },
//     {
//       question: "How can I check my account balance?",
//       answer: "You can check your account balance through online banking, mobile apps, ATMs, or by visiting our bank branch.",
//     },
//     {
//       question: "What is a CD (Certificate of Deposit)?",
//       answer: "A CD is a time-bound savings account with higher interest rates, but funds are locked for a specified period.",
//     },
//     {
//       question: "How can I transfer money to another bank?",
//       answer: "You can transfer money to another bank via online banking, wire transfers, checks, or mobile payment apps.",
//     },
//     {
//       question: "What is a credit score and why is it important?",
//       answer: "A credit score is a numerical representation of your creditworthiness. It's vital for loan approvals and interest rates.",
//     },
//     {
//       question: "What fees are associated with a bank account?",
//       answer: "Common fees include ATM fees, overdraft fees, maintenance fees, and wire transfer fees. Review your bank's fee schedule.",
//     },
//     {
//       question: "How can I protect my account from fraud?",
//       answer: "Protect your account by using strong passwords, monitoring transactions, and avoiding suspicious emails or calls.",
//     },
//     {
//       question: "What's the difference between a bank and a credit union?",
//       answer: "Banks are for-profit institutions, while credit unions are non-profit and often offer better rates and a community focus.",
//     },
//   ];

//   return (
//     <>
//       <div className="faq-container1">
//         <div className="faq-box1">
//           <h1>FAQs</h1>
//           <h4>FREQUENTLY ASKED QUESTIONS</h4>
//         </div>
//         <div className="answer-container">
//           {faqs.map((faq, index) => (
//             <div className="faq-box" key={index}>
//               <span onClick={() => toggleFaq(index)}>
//                 {isOpen[index] ? "▲" : "▼"} {faq.question}
//               </span>
//               {isOpen[index] && <p>{faq.answer}</p>}
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Faq;



