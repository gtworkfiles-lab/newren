'use client'

import { useState } from 'react'

type AccordionItemProps = {
  question: string
  answer: string
}

export default function AccordionItem({
  question,
  answer,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      style={{
        border: '1px solid #e5e7eb',
        borderRadius: '12px',
        overflow: 'hidden',
      }}
    >
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        style={{
          width: '100%',
          textAlign: 'left',
          background: '#ffffff',
          border: 'none',
          padding: '16px',
          cursor: 'pointer',
          fontWeight: 600,
        }}
      >
        {question}
      </button>

      {isOpen ? (
        <div
          style={{
            padding: '0 16px 16px',
            lineHeight: 1.6,
            color: '#374151',
          }}
        >
          {answer}
        </div>
      ) : null}
    </div>
  )
}