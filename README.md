# BookExplorer: A Vue.js Website Powered by TypeScript

## Running Locally

1. Clone the repository.
2. Install dependencies.

```bash
pnpm i
```

3. Build and preview or start the development server.

```bash
pnpm build && pnpm preview
```

**_or_**

```bash
pnpm dev
```

4. Run tests.

```bash
pnpm test
```

## Optional

- Install recommended VSCode extensions, especially Trello Kanban Board.

## Highlights

1. Code Reuse: Promotes cleanliness, readability, and maintainability.
2. Well-Organized Codebase: Utilizes directories for components, pages, store, utils, and constants, aiding in feature additions and ongoing maintenance.
3. Centralized Store: Implements Pinia store to mitigate prop drilling.
4. Performance Enhancement: Utilizes debounce for improved performance.
5. Responsive Design: Ensures compatibility across various devices.
6. Intuitive Loader Animation: Provides visual feedback during API data retrieval.
7. Pagination with Infinite Scroll: Enhances user experience.
8. Unit Testing with vitest: Ensures code reliability.

# Areas for Improvement

1. Commit Messages: Enhance clarity and consistency in commit messages.
2. Implement Book Preview: Enhance user experience with book previews.
3. Utilize Vue Router: Implement dynamic routing for `isbn/[isbn]` paths.
4. Add more unit tests
