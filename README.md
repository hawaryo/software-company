## Getting Started

First, run the development server:

```bash
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More+


### Convert HTML to React

1. **Page Folder Rules**  
   - In the `page` folder, you are already inside the `<body>` tag.  
     - **No need to add the `<body>` or `<head>` tags**.

2. **Component Structure**  
   - Create reusable components inside the `components` folder.  
   - Import those components into the `page` folder.

3. **Self-Closing Tags**  
   - Ensure all self-closing tags are properly formatted. Example:  
     ```html
     <img />
     ```
     4- use camelCase for atribut like clip-rule will be clipRule and fill-rule will be fillRule and stroke-linecap will be strokeLinecap

4. **Change `class` to `className`**  
   - Replace `class` attributes with `className`. Example:  
     ```html
     <div class="container"></div>
     ```
     Becomes:  
     ```jsx
     <div className="container"></div>
     ```

5. **Path Adjustment for Images**  
   - Change image paths from:  
     ```jsx
     ./assets/images/
     ```  
     To:  
     ```jsx
     /images
     ```

6. **Using SCSS Modules**  
   - When using SCSS modules, convert `class` to `className` using the `styles` object. Example:  
     ```jsx
     <div className={styles.className}></div>
     ```
   - **Important**:  
     Not all classes need to be converted this way. **Only custom classes** should use `styles.className`.  
     Bootstrap classes remain unchanged.

7. **Automating `class` to `className` Conversion**  
   - Use VS Code's search and replace feature:  
     - Press `Ctrl + F`.  
     - Tick the **regular expression** icon (.*).  
     - Find:  
       ```regex
       class="([^"]+)"
       ```  
     - Replace with:  
       ```jsx
       className={styles.$1}
       ```

8. **Bootstrap Classes Compatibility**  
   - Some Bootstrap classes may not work properly when mixed with SCSS modules. For example:  
     ```jsx
     className="accordion-body"
     ```  
     Converting directly to:  
     ```jsx
     className={styles.accordionBody}
     ```  
     **might break behavior**.

   - To handle this, combine Bootstrap classes with SCSS module classes:  
     **Option 1 (Template Literals):**  
     ```jsx
     className={`accordion-body ${styles.myAccordionBody}`}
     ```

     **Option 2 (String Interpolation):**  
     ```jsx
     className={`${'accordion-body'} ${styles.myAccordionBody}`}
     ```

     **Option 3 (Using `classnames` Utility):**  
     ```jsx
     import classNames from 'classnames';
     className={classNames('accordion-body', styles.myAccordionBody)}
     ```

---

This version uses proper **Markdown** formatting, adds clarity, and improves readability with code blocks and headings.