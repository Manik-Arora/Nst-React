# Nst-React

# Parcel

- Bundling
- Dev Build
- Local Server
- HMR: Hot Module Replacement
- File Watching Alogorithm - Written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Compress
- Content Hashing
- Code Splitting
- Differential Bundling - Support older browsers
- Diagnostic
- Error Handling
- HTTPS
- Tree Shaking - remove unused code
- Different dev and prod bundles

# 2 types of Export/Import

- Default Export/Import

export default Component;
import Component from "path";

- Named Export/Import

export Component = {};
import {Component} from "path";

# React hooks

(Normal JS utility functions)

- useState() - Used to generate superpoweful State variables in react
- useEffect()

The Virtual DOM (Document Object Model) is a concept used in React and other modern JavaScript frameworks to improve performance when updating the UI. Here's how it works:

Virtual DOM Representation: When you render a React component, React creates a lightweight, virtual representation of the actual DOM. This virtual DOM is a tree structure that mirrors the actual DOM elements.

Efficient Reconciliation: When a component's state or props change, React re-renders the virtual DOM instead of the actual DOM. React then compares the new virtual DOM with the previous virtual DOM to determine the minimal number of DOM operations needed to update the actual DOM (Diff Algorithm, React Fiber).

Batched Updates: React batches multiple updates together and updates the actual DOM in a single batch, which helps reduce the number of DOM manipulations and improves performance.

DOM Diffing: React uses a process called "diffing" to compare the new virtual DOM with the previous virtual DOM. This process identifies the differences (or "diffs") between the two and generates a minimal set of DOM mutations to apply the changes efficiently.

Update Strategy: React's diffing algorithm is optimized for performance by minimizing the number of DOM manipulations needed to update the UI. This helps ensure that the UI remains responsive, even in complex applications with frequent updates.

In summary, the Virtual DOM is a key part of React's performance optimization strategy, allowing it to efficiently update the UI in response to changes in state or props while minimizing the impact on performance.

# 2 types of Routing

- Client side Routing - No network calls. Just component rendering is happening.
- Server side Routing - Network call to get a page from server to load it.
