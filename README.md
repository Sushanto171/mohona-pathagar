
```

📦Mohona-Pathagar (library-management-system)/
├── 📁 public/
├── 📁 src/
│   ├── 📁 redux/              # Redux store, RTK Query, slices
│   │   ├── 📁 api/
│   │   │   └── libraryApi.ts
│   │   ├── 📁 features/
│   │   │   └── uiSlice.ts
│   │   ├── store.ts
│   │   ├── hooks.ts
│   │   └── rootReducer.ts
│   │
│   ├── 📁 components/
│   │   ├── 📁 ui/             # UI primitives (Button, Input, etc.)
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   └── Modal.tsx
│   │   │
│   │   ├── BookTable.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── BookForm.tsx
│   │   ├── BorrowForm.tsx
│   │   ├── ConfirmationModal.tsx
│   │   └── Toast.tsx
│   │
│   ├── 📁 lib/         # Shadcn library customizations/components
│   │   ├── cn.ts              # Utility for clsx/cn (commonly used in Shadcn)
│   │   ├── Button.tsx         # Wrapped Shadcn Button if customized
│   │   ├── Dialog.tsx
│   │   └── ThemeProvider.tsx
│   │
│   ├── 📁 pages/
│   │   ├── 📁 books/
│   │   │   ├── BooksPage.tsx
│   │   │   ├── CreateBookPage.tsx
│   │   │   ├── EditBookPage.tsx
│   │   │   ├── BookDetailsPage.tsx
│   │   │   └── BorrowBookPage.tsx
│   │   └── 📁 borrow-summary/
│   │       └── BorrowSummaryPage.tsx
│   │
│   ├── 📁 routes/
│   │   └── AppRoutes.tsx
│   │
│   ├── 📁 types/
│   │   ├── book.ts
│   │   └── borrow.ts
│   │
│   ├── 📁 utils/
│   │   └── helpers.ts
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
```

☀️Light Mood.
| Token        | Color     | Usage                       |
| ------------ | --------- | --------------------------- |
| `primary`    | `#8B3F00` | Primary actions, headings   |
| `accent`     | `#F4A261` | Highlights, buttons, links  |
| `text`       | `#5C2A00` | Primary text color          |
| `secondary`  | `#BC6C25` | Secondary elements, borders |
| `background` | `#FFFFFF` | Light background            |
| `surface`    | `#FDF7F1` | Card/Section backgrounds    |


🌙 Dark Mood
| Token        | Color     | Usage                 |
| ------------ | --------- | --------------------- |
| `primary`    | `#FFB86B` | Primary highlights    |
| `accent`     | `#FF7E5F` | Accent buttons, links |
| `text`       | `#F4F4F4` | Primary text color    |
| `secondary`  | `#A97142` | Secondary texts       |
| `background` | `#121212` | Dark background       |
| `surface`    | `#1E1E1E` | Cards/sections        |
