
📚 Node.js Book Store

A simple Book Store CRUD application built with Node.js, Express, MongoDB, and EJS.  
You can add, view, edit, and delete books through a clean UI.

🚀 Live Demo  
🔗 https://node-book-store-wt63.onrender.com/

---

📌 Features
- Add new books
- Edit existing book details
- Delete books
- List all books
- Styled with EJS templates and public CSS

---

🛠️ Tech Stack
- Backend: Node.js, Express.js
- Database: MongoDB + Mongoose
- Templating: EJS
- Styling: CSS (served from /public)
- Deployment: Render

---

📂 Project Structure
.
├── config/
│   └── db.js           # MongoDB connection setup
├── models/
│   └── bookSchema.js   # Mongoose schema for books
├── routers/
│   └── index.js        # Main router
│   └── bookRouter.js   # Book-related routes
├── views/
│   ├── pages/          # EJS pages
│   ├── partials/       # Header & footer
│   └── ...
├── public/             # CSS, JS, images
├── index.js            # Main server file
├── package.json
└── README.md

---

⚙️ Installation & Setup

1. Clone the repository  
   git clone https://github.com/your-username/node-book-store.git  
   cd node-book-store

2. Install dependencies  
   npm install

3. Configure Environment Variables  
   Create a `.env` file with:  
   MONGO_URI=your_mongodb_connection_string  
   PORT=8900

4. Run the project  
   npm start  

   Server will run at:  
   http://localhost:8900

---

📜 License  
This project is open-source and available under the MIT License.
```
