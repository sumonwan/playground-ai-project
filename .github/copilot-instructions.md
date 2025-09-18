# GitHub Copilot Instructions

## Project Overview
This is a modern React TypeScript application for an education platform dashboard called "Academy". The application features a comprehensive learning management interface with course management, progress tracking, and calendar functionality.

## Tech Stack & Dependencies
- **Frontend Framework**: React 19.1.1 with TypeScript
- **Build Tool**: Vite 7.1.2
- **Styling**: Tailwind CSS 4.1.13 with utility-first approach
- **Component Documentation**: Storybook 9.1.6
- **Testing**: Vitest 3.2.4 with Playwright for E2E testing
- **Code Quality**: ESLint with TypeScript support

## Code Style & Architecture Guidelines

### Component Structure
- Use functional components with TypeScript interfaces
- Implement proper prop typing with interfaces (e.g., `interface CalendarDay`)
- Use React hooks (useState, useMemo) for state management
- Follow the pattern: imports → interfaces → component → export default

### Styling Guidelines
- **Primary Colors**: Purple (#7C3AED, #A855F7) for branding and active states
- **Secondary Colors**: Orange, Blue, Green for course categories and status indicators
- **Layout**: Use CSS Grid and Flexbox with Tailwind classes
- **Spacing**: Consistent padding (p-4, p-6) and margins (mb-4, mb-6, mb-8)
- **Shadows**: Use shadow-sm and shadow-lg for card elements
- **Rounded Corners**: Use rounded-lg for cards, rounded-full for avatars

### UI Component Patterns
1. **Sidebar Navigation**: Fixed width (w-64) with active state highlighting
2. **Card Components**: White background, rounded corners, subtle shadows
3. **Course Cards**: Include icon, title, lesson count, student avatars, and action button
4. **Status Badges**: Use colored backgrounds with appropriate text colors
5. **Interactive Elements**: Hover states and focus rings for accessibility

### File Organization
```
src/
├── components/          # Reusable UI components
├── stories/            # Storybook component documentation
├── assets/             # Static assets
└── App.tsx             # Main application layout
```

## Component Development Guidelines

### When creating new components:
1. Place in `src/components/` directory
2. Use PascalCase naming (e.g., `Datepicker.tsx`)
3. Include TypeScript interfaces for all props
4. Implement proper accessibility attributes
5. Use semantic HTML elements
6. Follow the existing design system colors and spacing

### State Management
- Use `useState` for local component state
- Use `useMemo` for expensive calculations (date formatting, calendar calculations)
- Implement proper TypeScript typing for state variables

### Event Handling
- Use arrow functions for event handlers
- Implement proper keyboard navigation for interactive elements
- Include loading and error states where appropriate

## Design System Colors
- **Primary Purple**: bg-purple-600, text-purple-600, border-purple-600
- **Success Green**: bg-green-100, text-green-800 (for Elementary level)
- **Warning Orange**: bg-orange-100, text-orange-800 (for Intermediate level)
- **Info Blue**: bg-blue-100, text-blue-600
- **Gray Scale**: bg-gray-50, bg-gray-100, bg-gray-200, text-gray-500, text-gray-600, text-gray-800

## Testing Guidelines
- Write component stories in Storybook for visual testing
- Include accessibility testing with @storybook/addon-a11y
- Use Vitest for unit tests
- Use Playwright for E2E testing
- Test interactive components like the Datepicker thoroughly

## Accessibility Requirements
- Include proper ARIA labels and roles
- Ensure keyboard navigation works correctly
- Use semantic HTML elements
- Maintain proper color contrast ratios
- Include focus indicators for interactive elements

## Performance Considerations
- Use React.memo for expensive renders
- Implement useMemo for complex calculations
- Lazy load components when appropriate
- Optimize Tailwind CSS bundle with purging

## Code Quality Standards
- Follow ESLint configuration
- Use TypeScript strict mode
- Include proper error handling
- Write descriptive component and variable names
- Add JSDoc comments for complex functions

## Common Patterns to Follow
1. **Date Handling**: Use proper Date objects with useMemo for formatting
2. **Conditional Rendering**: Use ternary operators and logical AND for clean JSX
3. **Event Handlers**: Always include proper TypeScript typing
4. **CSS Classes**: Group Tailwind classes logically (layout → spacing → colors → effects)
5. **Component Props**: Always define interfaces, make optional props explicit

## Development Workflow
1. Create components in `src/components/`
2. Add Storybook stories in `src/stories/`
3. Run `npm run dev` for development server
4. Run `npm run storybook` for component development
5. Run `npm run lint` before committing
6. Use `npm run build` to verify production builds