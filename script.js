// Function to encrypt and save the note
function encryptNote() {
    let note = document.getElementById("note").value;
    let password = document.getElementById("password").value;

    if (!note || !password) {
        alert("Please enter a note and a password!");
        return;
    }

    let encrypted = CryptoJS.AES.encrypt(note, password).toString();
    localStorage.setItem("secureNote", encrypted);

    document.getElementById("note").value = "";
    alert("Note encrypted and saved!");
}

// Function to decrypt the note
function decryptNote() {
    let password = document.getElementById("password").value;
    let encrypted = localStorage.getItem("secureNote");
    if (!encrypted) {
        alert("No saved note found!");
        return;
    }
    if (!password) {
        alert("Please enter a password to decrypt!");
        return;
    }
    let decrypted = CryptoJS.AES.decrypt(encrypted, password);
    let note = decrypted.toString(CryptoJS.enc.Utf8);

    if (!note) {
        alert("Wrong password! Try again.");
        return;
    }

    document.getElementById("output").innerText = "Decrypted Note: " + note;
}
