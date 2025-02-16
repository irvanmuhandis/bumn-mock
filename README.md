# BUMN Web Mocking  

This project is a mock version of the **BUMN website**, built using **HTML, CSS, and JavaScript**. The project utilizes **Tailwind CSS** for styling and **Live Server** for real-time preview.  

## 🚀 Features  
- Responsive **Navbar**  
- Main **Content Section**  
- **Bottom Navigation**  
- Uses **Tailwind CSS** for styling  
- Live preview with **Live Server**  

## 📁 Folder Structure  
```plaintext
/BUMN-TRAINING
│── index.html
│── index.js
│── package.json
│── /components
│   ├── navbar.js
│   ├── bottom-nav.js
│   ├── content.js
│── style.css
```

## 🛠 Installation  

### 1️⃣ Clone the repository  
```sh
git clone https://github.com/irvanmuhandis/bumn-mock.git
cd bumn-mock
```

### 2️⃣ Install dependencies  
```sh
npm install
```



### 3️⃣ Run the Live Server  
```sh
live-server
```

# Coding Standard

### Code formating
- Always use semicolons.
- Use `NAMES_LIKE_THIS` for constants.
- Use spaces for tab.
- Use 2 spaces for tabs and indentations.

### Choose meaningful names that convey the purpose of the variable or function
```ts
// Bad
const cust = "John"
const customer = "Alice"

// Better
const customer_name = "John"
const customer_full_name = "Alice Johnson"
```

### Use snake_case for variable and camelCase for function
```ts
const user_name = "Smith";
                       
function reverseName(name) {
  return name.split("").reverse().join("");
}
```

### Comments serve as a form of documentation within the code, explaining the logic, functionality, or purpose of specific sections.
```ts
// TODO: Refactor this function for better performance
function processItems(items) {

  // ... describe existing logic ...
	
  // TODO: Optimize the sorting algorithm
  items.sort((a, b) => a.value - b.value);
	
  if (items.length === 0) {
	console.warn("Empty items array!");
  }

}
```


## ☠️ Git Strategy

### **1️⃣ Branching**
#### 🔹 **Main Branches**
- **`main`** → The stable production branch.  
#### 🔹 **Supporting Branches**
- **`feature/{feature-name}`** → New features under development.  
- **`bugfix/{description}`** → For fixing specific bugs.  
- **`enchance/{description}`** → Enchancement for App. 


### **2️⃣ Commit Message Strategy**
#### 🔹 **Conventional Commit Format**
Use structured commit messages:
```
<type>(<scope>): <message>
```
#### 🔹 **Commit Types**
| Type | Description |
|------|------------|
| `feat` | New feature added |
| `fix` | Bug fixes |
| `refactor` | Code refactoring (no new feature or fix) |
| `docs` | Documentation updates |
| `style` | UI/UX or formatting changes |
| `test` | Adding or fixing tests |
| `chore` | Maintenance tasks (e.g., dependency updates) |

#### 🔹 **Example Commits**
```bash
git commit -m "feat(auth): add user login flow"
git commit -m "fix(navbar): resolve mobile menu glitch"
git commit -m "refactor(database): optimize query performance"
```

---

### **3️⃣ Workflow Example**
#### **🔹 Feature Development**
```bash
git checkout -b feature/user-authentication
# Develop feature...
git commit -m "feat(auth): implement user login and logout"
git push origin feature/user-authentication
```
#### **🔹 Bug Fix**
```bash
git checkout -b bugfix/123-fix-login-issue
# Fix the issue...
git commit -m "fix(auth): resolve incorrect token refresh"
git push origin bugfix/123-fix-login-issue
```
#### **🔹 Merging Feature into Develop**
```bash
git checkout develop
git merge feature/user-authentication
git push origin develop
```

## 👥 Contributors  
- **Irvan Muhandis** - Tech Lead
- **Nopal** - Frontend Developer
- **Apin** - Frontend Developer  
- **Rahma** - Frontend Developer
## 📜 License  
This project is for educational purposes and does not intend to replicate the official BUMN website.  
