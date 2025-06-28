"use client"

export const generateMockMessages = () => {
  return [
    {
      id: "1",
      sender: {
        name: "Reflect AI",
        avatar: "/placeholder.svg?height=40&width=40",
        isCurrentUser: false,
      },
      content: "Hello! How can I help you today?",
      timestamp: new Date(Date.now() - 3600000).toISOString(),
      attachments: [],
    },
    {
      id: "2",
      sender: {
        name: "You",
        avatar: "/placeholder.svg?height=40&width=40",
        isCurrentUser: true,
      },
      content: "I need help with creating a React component for my project.",
      timestamp: new Date(Date.now() - 3500000).toISOString(),
      attachments: [],
    },
    {
      id: "3",
      sender: {
        name: "Reflect AI",
        avatar: "/placeholder.svg?height=40&width=40",
        isCurrentUser: false,
      },
      content: "Sure, I can help with that. What kind of component are you trying to create?",
      timestamp: new Date(Date.now() - 3400000).toISOString(),
      attachments: [],
    },
    {
      id: "4",
      sender: {
        name: "You",
        avatar: "/placeholder.svg?height=40&width=40",
        isCurrentUser: true,
      },
      content: "I need a dropdown menu component with search functionality.",
      timestamp: new Date(Date.now() - 3300000).toISOString(),
      attachments: [],
    },
    {
      id: "5",
      sender: {
        name: "Reflect AI",
        avatar: "/placeholder.svg?height=40&width=40",
        isCurrentUser: false,
      },
      content:
        "Here's a basic example of a searchable dropdown menu component in React:\n\n```jsx\nimport React, { useState } from 'react';\n\nconst SearchableDropdown = ({ options, onSelect }) => {\n  const [isOpen, setIsOpen] = useState(false);\n  const [searchTerm, setSearchTerm] = useState('');\n  const [selectedOption, setSelectedOption] = useState(null);\n\n  const filteredOptions = options.filter(option =>\n    option.label.toLowerCase().includes(searchTerm.toLowerCase())\n  );\n\n  const handleSelect = (option) => {\n    setSelectedOption(option);\n    setIsOpen(false);\n    onSelect(option);\n  };\n\n  return (\n    <div className=\"relative\">\n      <div\n        className=\"border p-2 rounded flex justify-between items-center cursor-pointer\"\n        onClick={() => setIsOpen(!isOpen)}\n      >\n        <span>{selectedOption ? selectedOption.label : 'Select an option'}</span>\n        <span>{isOpen ? '▲' : '▼'}</span>\n      </div>\n      \n      {isOpen && (\n        <div className=\"absolute w-full mt-1 border rounded bg-white z-10\">\n          <input\n            type=\"text\"\n            className=\"w-full p-2 border-b\"\n            placeholder=\"Search...\"\n            value={searchTerm}\n            onChange={(e) => setSearchTerm(e.target.value)}\n            onClick={(e) => e.stopPropagation()}\n          />\n          <ul className=\"max-h-60 overflow-y-auto\">\n            {filteredOptions.length > 0 ? (\n              filteredOptions.map((option) => (\n                <li\n                  key={option.value}\n                  className=\"p-2 hover:bg-gray-100 cursor-pointer\"\n                  onClick={() => handleSelect(option)}\n                >\n                  {option.label}\n                </li>\n              ))\n            ) : (\n              <li className=\"p-2 text-gray-500\">No options found</li>\n            )}\n          </ul>\n        </div>\n      )}\n    </div>\n  );\n};\n\nexport default SearchableDropdown;\n```\n\nYou can use it like this:\n\n```jsx\nimport SearchableDropdown from './SearchableDropdown';\n\nfunction App() {\n  const options = [\n    { value: 'apple', label: 'Apple' },\n    { value: 'banana', label: 'Banana' },\n    { value: 'cherry', label: 'Cherry' },\n    // Add more options as needed\n  ];\n\n  const handleSelect = (option) => {\n    console.log('Selected:', option);\n  };\n\n  return (\n    <div className=\"p-4\">\n      <h1 className=\"text-xl mb-4\">Searchable Dropdown Example</h1>\n      <SearchableDropdown options={options} onSelect={handleSelect} />\n    </div>\n  );\n}\n```\n\nThis component includes:\n- A toggle to open/close the dropdown\n- A search input to filter options\n- A scrollable list of options\n- Selection functionality\n\nYou can customize the styling to match your project's design system.",
      timestamp: new Date(Date.now() - 3200000).toISOString(),
      attachments: [],
    },
    {
      id: "6",
      sender: {
        name: "You",
        avatar: "/placeholder.svg?height=40&width=40",
        isCurrentUser: true,
      },
      content: "Thanks! Can you also show me how to add keyboard navigation to this component?",
      timestamp: new Date(Date.now() - 3100000).toISOString(),
      attachments: [],
    },
    {
      id: "7",
      sender: {
        name: "Reflect AI",
        avatar: "/placeholder.svg?height=40&width=40",
        isCurrentUser: false,
      },
      content:
        "Here's how you can add keyboard navigation to the dropdown component:\n\n```jsx\nimport React, { useState, useRef, useEffect } from 'react';\n\nconst SearchableDropdown = ({ options, onSelect }) => {\n  const [isOpen, setIsOpen] = useState(false);\n  const [searchTerm, setSearchTerm] = useState('');\n  const [selectedOption, setSelectedOption] = useState(null);\n  const [highlightedIndex, setHighlightedIndex] = useState(0);\n  const searchInputRef = useRef(null);\n  const optionsRef = useRef([]);\n\n  const filteredOptions = options.filter(option =>\n    option.label.toLowerCase().includes(searchTerm.toLowerCase())\n  );\n\n  // Reset highlighted index when filtered options change\n  useEffect(() => {\n    setHighlightedIndex(0);\n  }, [filteredOptions]);\n\n  // Focus search input when dropdown opens\n  useEffect(() => {\n    if (isOpen && searchInputRef.current) {\n      searchInputRef.current.focus();\n    }\n  }, [isOpen]);\n\n  const handleSelect = (option) => {\n    setSelectedOption(option);\n    setIsOpen(false);\n    onSelect(option);\n  };\n\n  const handleKeyDown = (e) => {\n    if (!isOpen) return;\n    \n    switch (e.key) {\n      case 'ArrowDown':\n        e.preventDefault();\n        setHighlightedIndex(prev => \n          prev < filteredOptions.length - 1 ? prev + 1 : prev\n        );\n        if (optionsRef.current[highlightedIndex + 1]) {\n          optionsRef.current[highlightedIndex + 1].scrollIntoView({ \n            block: 'nearest' \n          });\n        }\n        break;\n      case 'ArrowUp':\n        e.preventDefault();\n        setHighlightedIndex(prev => (prev > 0 ? prev - 1 : 0));\n        if (optionsRef.current[highlightedIndex - 1]) {\n          optionsRef.current[highlightedIndex - 1].scrollIntoView({ \n            block: 'nearest' \n          });\n        }\n        break;\n      case 'Enter':\n        e.preventDefault();\n        if (filteredOptions[highlightedIndex]) {\n          handleSelect(filteredOptions[highlightedIndex]);\n        }\n        break;\n      case 'Escape':\n        e.preventDefault();\n        setIsOpen(false);\n        break;\n      default:\n        break;\n    }\n  };\n\n  return (\n    <div className=\"relative\" onKeyDown={handleKeyDown}>\n      <div\n        className=\"border p-2 rounded flex justify-between items-center cursor-pointer\"\n        onClick={() => setIsOpen(!isOpen)}\n        tabIndex={0}\n        aria-haspopup=\"listbox\"\n        aria-expanded={isOpen}\n      >\n        <span>{selectedOption ? selectedOption.label : 'Select an option'}</span>\n        <span>{isOpen ? '▲' : '▼'}</span>\n      </div>\n      \n      {isOpen && (\n        <div className=\"absolute w-full mt-1 border rounded bg-white z-10\">\n          <input\n            ref={searchInputRef}\n            type=\"text\"\n            className=\"w-full p-2 border-b\"\n            placeholder=\"Search...\"\n            value={searchTerm}\n            onChange={(e) => setSearchTerm(e.target.value)}\n            onClick={(e) => e.stopPropagation()}\n            aria-autocomplete=\"list\"\n          />\n          <ul \n            className=\"max-h-60 overflow-y-auto\" \n            role=\"listbox\"\n            aria-activedescendant={filteredOptions[highlightedIndex]?.value}\n          >\n            {filteredOptions.length > 0 ? (\n              filteredOptions.map((option, index) => (\n                <li\n                  ref={el => optionsRef.current[index] = el}\n                  key={option.value}\n                  id={option.value}\n                  className={`p-2 cursor-pointer ${index === highlightedIndex ? 'bg-blue-100' : 'hover:bg-gray-100'}`}\n                  onClick={() => handleSelect(option)}\n                  role=\"option\"\n                  aria-selected={index === highlightedIndex}\n                >\n                  {option.label}\n                </li>\n              ))\n            ) : (\n              <li className=\"p-2 text-gray-500\">No options found</li>\n            )}\n          </ul>\n        </div>\n      )}\n    </div>\n  );\n};\n\nexport default SearchableDropdown;\n```\n\nThis enhanced version adds:\n\n1. Keyboard navigation with arrow keys (up/down to navigate options)\n2. Enter key to select the highlighted option\n3. Escape key to close the dropdown\n4. Auto-scrolling to keep the highlighted option in view\n5. Proper focus management\n6. ARIA attributes for accessibility\n\nThe component now supports a complete keyboard interaction pattern that follows accessibility best practices.",
      timestamp: new Date(Date.now() - 3000000).toISOString(),
      attachments: [],
    },
    {
      id: "8",
      sender: {
        name: "You",
        avatar: "/placeholder.svg?height=40&width=40",
        isCurrentUser: true,
      },
      content:
        "This is perfect! I'll implement it in my project. Do you have any documentation on React hooks that I can reference?",
      timestamp: new Date(Date.now() - 2900000).toISOString(),
      attachments: [],
    },
    {
      id: "9",
      sender: {
        name: "Reflect AI",
        avatar: "/placeholder.svg?height=40&width=40",
        isCurrentUser: false,
      },
      content:
        "I'm glad that helps! Here's a PDF with comprehensive documentation on React hooks that you can reference.",
      timestamp: new Date(Date.now() - 2800000).toISOString(),
      attachments: [
        {
          id: "file-1",
          name: "react-hooks-cheatsheet.pdf",
          size: 2457600,
          type: "application/pdf",
          url: "/placeholder.svg?height=400&width=300",
        },
      ],
    },
  ]
}
