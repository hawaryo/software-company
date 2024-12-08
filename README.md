# software-company

  

## Level-one

  

### Project Setup Guide

  

1. Clone the repository:

```bash
git clone https://github.com/hawaryo/software-company.git
```

2. Navigate into the project directory:

  

```bash
cd software-company
```

  

3. Ensure you are on the `Level-one` branch (make sure that "Level One" is visible in the bottom-left corner of Visual Studio Code):

  

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

  

### Note: Always keep an eye on the branch you are working on.

  
  

----------

  

### Before Pushing Your Changes, Ensure You Have the Latest `Level-one` Branch

Follow these steps to do that:


1.  **Switch to the `Level-one` branch**:
    
    ```bash
    git switch Level-one
    ```
    
2.  **Pull the latest changes from the remote `Level-one` branch**:
    
    ```bash
    git pull origin Level-one
    ```
    
3.  **Switch back to your feature branch** (e.g., `feat:addhtml`):
    
    ```bash
    git switch feat:addhtml
    ```
    
4.  **Merge the latest changes from `Level-one` into your branch**:
    
    ```bash
    git merge Level-one
    ```
    
5.  **Resolve any merge conflicts** (if any) and commit the resolution:
   
  6. Commit with a meaningful message:
  
   
    git add .
    git commit -m "Resolve merge conflicts with Level-one"  
   
    
7.  **Push your feature branch** to the remote:
    
   ```bash
    git push origin feat:addhtml
  ```
    

----------

This process ensures that their feature branch is always in sync with the latest version of `Level-one` before pushing their changes.