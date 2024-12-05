# software-company

## Level-one

### Install

1. Clone the repository:
   ```bash
   git clone   https://github.com/hawaryo/software-company.git
   ```
2. Navigate into the project directory:

   ```bash
   cd software-company
   ```

3. Ensure you are on the `Level-one` branch (Ensure that "Level One" is visible in the bottom-left corner of Visual Studio Code):

   ```bash
   git switch Level-one
   ```

4. Install dependencies:

   ```bash
   npm install
   ```

5. To Watch and compile sass files to css (css files will appear under styles/css):
   ```bash
    npm run build-css
   ```

### Adding Features

1. Ensure you are on the `Level-one` branch:
   ```bash
   git switch Level-one
   ```
2. Create a new branch for your task with descriptive name:
   ```bash
   git checkout -b feat/adding-footer
   ```
3. Make your changes.

4. Track your changes:
   ```bash
   git add .
   ```
5. Commit with a meaningful message:
   ```bash
   git commit -m "Adding the footer section"
   ```
6. Push your changes to the new branch:
   ```bash
   git push origin feat/adding-footer
   ```

### Note: always keep you eye on the branch you are working on.
