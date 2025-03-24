# Secure-Notes-App

🛡️ Secure Notes App

A simple web-based Secure Notes App that allows users to write, encrypt, and save their notes securely using AES encryption with CryptoJS. The notes are stored in the browser's localStorage, ensuring privacy while keeping them accessible.


---

🚀 Features:

🔐 AES Encryption – Protects notes with a password

💾 LocalStorage Support – Saves encrypted notes in the browser

🔓 Decryption on Demand – Retrieve notes using the correct password

🎨 Simple & Clean UI – Minimalistic design for ease of use



---

📌 Steps to Build the Secure Notes App:

🔹 Step 1: Setting Up the Project

Create a new project folder (e.g., secure-notes-app).

Inside, create three files:

index.html → The user interface

style.css → Styling for the app

script.js → Handles encryption, decryption, and storage




---

🔹 Step 2: Designing the User Interface

The UI consists of:

A textarea for users to type notes

A password input field for encryption

Two buttons – One for encrypting & saving, another for decrypting

CryptoJS Library for AES encryption



---

🔹 Step 3: Styling the App

Basic CSS styling for a clean layout

Responsive design for a good user experience



---

🔹 Step 4: Implementing Encryption & Decryption Logic

Encryption Process:

1️⃣ User writes a note in the textarea.
2️⃣ Enters a password in the input field.
3️⃣ Encrypts the note using AES encryption (CryptoJS).
4️⃣ Saves the encrypted note in the browser’s localStorage.
5️⃣ Clears the input fields after saving.


---

Decryption Process:

1️⃣ User enters the password used during encryption.
2️⃣ Retrieves the encrypted note from localStorage.
3️⃣ Decrypts the note using the correct password.
4️⃣ Displays the decrypted note in the app.
5️⃣ If the password is incorrect, an error message is shown.


---

🎯 Code Explanation:

🔐 Encryption (encryptNote())

Retrieves the user’s note and password.

Uses CryptoJS.AES.encrypt() to encrypt the note with the password.

Stores the encrypted data in localStorage.

Clears the textarea and notifies the user that the note is saved securely.



---

🔓 Decryption (decryptNote())

Retrieves the stored encrypted note from localStorage.

Uses CryptoJS.AES.decrypt() with the entered password.

Converts the decrypted content back to plaintext.

Displays the decrypted note if the password is correct.

Shows an error message if decryption fails.



---

📂 Project Structure:

/secure-notes-app  
│── index.html   # User Interface  
│── style.css    # Styling for the app  
│── script.js    # Encryption & Decryption logic  
│── README.md    # Project Documentation


---

🛠️ Technologies Used:

HTML5 → User Interface

CSS3 → Styling

JavaScript → Logic & Functionality

CryptoJS → AES Encryption

LocalStorage → Storing Encrypted Notes



---

🏗️ Future Improvements

🔹 Better UI – Dark mode, improved styling
🔹 Multiple Notes Support – Store multiple encrypted notes
🔹 Note Deletion – Allow users to remove notes
🔹 Password Hint Option – For better usability


---
