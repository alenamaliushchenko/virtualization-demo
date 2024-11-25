# React-virtualized
This application is a demonstration of using the **react-virtualized** library in a React project, implemented with **Next.js**. It showcases the efficient rendering of a large list of items (e.g., 100,000 entries) while maintaining smooth performance, thanks to virtualization. Here’s an overview of its functionality:

## Key Features:
1. **Virtualized List Rendering:**
   - The app uses the `List` component from `react-virtualized` to display a large dataset in a scrollable container. Only the visible items are rendered, optimizing performance for lists with thousands of entries.

2. **Dynamic Item Data:**
   - The `getData` utility generates a dataset with 100,000 entries, each containing an ID and description.

3. **Scroll Position Control:**
   - A button allows users to increment the `scrollToIndex` by 100, enabling them to jump to specific sections of the list dynamically.

4. **Conditional Rendering:**
   - The list is displayed or hidden based on a toggle button. This demonstrates controlled conditional rendering and dynamic updates to the UI.

5. **Responsive Design:**
   - The list container is styled to align items in a centered, columnar layout, ensuring a clean and accessible user interface.

6. **Dynamic Loading with Next.js:**
   - The `Home` component is loaded dynamically using Next.js's `dynamic` import with client-side rendering (`ssr: false`), ensuring compatibility with `react-virtualized` components that rely on browser-specific APIs.

## Technical Details:
- **List Properties:**
  - `width`: 600px (list width)
  - `height`: 500px (visible height of the list)
  - `rowCount`: Total number of items in the dataset (100,000).
  - `rowHeight`: Fixed height of each row (25px).
  - `scrollToIndex`: Automatically scrolls to a specific index when updated.
  - `rowRenderer`: Custom function for rendering individual rows based on the provided `index`, `key`, and `style`.

- **Dynamic Interactivity:**
  - State hooks (`useState`) manage the visibility of the list and the scrolling index.

This example is ideal for learning how to handle large datasets in React using virtualization, and it demonstrates effective integration of third-party libraries with Next.js.

## How to Run the Application

1. After cloning the project or creating the file, navigate to the project directory and install the necessary dependencies by running:
```
npm install
```
2. Start the Development Server: Use the following command to start the application in development mode:
```
npm run dev
```
3. Open the Application: Once the server starts, you can access the application in your browser by navigating to:
```
http://localhost:3000
```