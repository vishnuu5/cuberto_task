# Cuberto Homepage Animation Clone

This project is a recreation of selected sections from the Cuberto.com homepage, focusing on their impressive animations and transitions. It was created as part of a frontend developer assignment to demonstrate skills in implementing modern, smooth animations.

## Live Demo

[View Live Demo](https://cuberto-task.vercel.app/)

## Sections Implemented

1. **Hero Section** - Features animated text transitions that cycle through different descriptive words, with smooth gradient background animations.

2. **Work Showcase Section** - Project cards with hover animations, scaling effects, and smooth appearance transitions when scrolling into view.

3. **Scroll Section** - A parallax scrolling section with text that moves at different speeds and changes opacity based on scroll position.

4. **Footer Section** - Text reveal animations and staggered appearance of links and elements as they come into view.

## Technologies Used

- **Next.js** - React framework for building the application
- **TypeScript** - For type safety and better developer experience
- **Tailwind CSS** - For styling and responsive design
- **Framer Motion** - For implementing smooth animations and transitions
- **shadcn/ui** - For UI components
- **EmailJS** - sending emails

## Challenges and Solutions

### Challenge 1: Text Cycling Animation

Creating a smooth text cycling animation in the hero section that properly handles transitions between words.

**Solution:** Used Framer Motion's AnimatePresence and custom variants to create a sequence of animated text entries and exits, with proper timing handled by React's useEffect and useState.

### Challenge 2: Scroll-Based Animations

Implementing animations that respond accurately to scroll position.

**Solution:** Leveraged Framer Motion's useScroll and useTransform hooks to create parallax effects and transform properties based on scroll progress.

### Challenge 3: Staggered Animations

Creating a natural, staggered appearance of elements when they come into view.

**Solution:** Used custom animation variants with delay parameters that increase for each subsequent element in a list.

## Installation and Setup

1. Clone the repository:
```bash
git https://github.com/vishnuu5/cuberto_task
cd project name
```
