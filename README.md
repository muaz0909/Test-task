This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

# Features

Autocomplete Skill Entry: Users can enter skills into a text field, and as they start typing, an autocomplete pop-up window appears. The autocomplete functionality is achieved using [Specify the auto-complete library you plan to use].

Skill Tag Display: Each skill entered is displayed as a tag. Skills are sequentially ordered, with each newly entered skill following the previous one.

Order Preservation: The system ensures that skills are stored in the same order they were entered, both in the frontend array and in the database.

Draggable Skills: Skills can be rearranged by dragging and dropping them. This is implemented using the @dnd-kit library, allowing users to change the order and priority of their skills.

Skill Deletion: Users can delete a skill either by clicking on an "X" icon associated with the skill tag or by swiping the skill out of the tag block in any direction. Choose one of these options for skill deletion based on your preference.

Database Storage: All entered skills are stored in a database, with each skill associated with a fixed ID for efficient retrieval and management.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
