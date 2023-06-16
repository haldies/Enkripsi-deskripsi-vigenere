const encrypt = document.getElementById("encrypt");
const decrypt = document.getElementById("decrypt");
const encryptDiv = document.getElementById("encrypt-div");
const decryptDiv = document.getElementById("decrypt-div");

encrypt.addEventListener("click", function() {
  encryptDiv.style.display = "block";
  decryptDiv.style.display = "none";
});

decrypt.addEventListener("click", function() {
  encryptDiv.style.display = "none";
  decryptDiv.style.display = "block";
});




// const plaintext = "mATEMATIKA";
// const key = "DISKRIT";
// const encrypted = vigenereEncrypt(plaintext, key);
// console.log(encrypted);


// let plaintext1 = "MATEMATIKA";
// let key1 = "DISKRIT";
// let ciphertext1 = "";
// key1 = key1.toUpperCase();
// const keyLen1 = key1.length;
// for (let i = 0; i < plaintext1.length; i++) {
//   const plaintextNum = plaintext1[i].toUpperCase().charCodeAt() - 'A'.charCodeAt();
//   const keyNum = key1[i % keyLen1].charCodeAt() - 'A'.charCodeAt();
//   const ciphertextNum = (plaintextNum + keyNum) % 26;
//   ciphertext1 += String.fromCharCode(ciphertextNum + 'A'.charCodeAt());
// }
// console.log(ciphertext1); // akan menampilkan ciphertext untuk plaintext1 dan key1

// let plaintext2 = "KRIPTOGRAFI";
// let key2 = "RAHASIA";
// let ciphertext2 = "";
// key2 = key2.toUpperCase();
// const keyLen2 = key2.length;
// for (let i = 0; i < plaintext2.length; i++) {
//   const plaintextNum = plaintext2[i].toUpperCase().charCodeAt() - 'A'.charCodeAt();
//   const keyNum = key2[i % keyLen2].charCodeAt() - 'A'.charCodeAt();
//   const ciphertextNum = (plaintextNum + keyNum) % 26;
//   ciphertext2 += String.fromCharCode(ciphertextNum + 'A'.charCodeAt());
// }
// console.log(ciphertext2); // akan menampilkan ciphertext untuk plaintext2 dan key2


function vigenereEncrypt(plaintext, key) {
    let ciphertext = "";
    key = key.toUpperCase();
    const keyLen = key.length;
    for (let i = 0; i < plaintext.length; i++) {
        console.log("plaintext =" +plaintext.length)
        const plaintextNum = plaintext[i].toUpperCase().charCodeAt() - 'A'.charCodeAt();
        console.log("planintext =" + plaintextNum)
        const keyNum = key[i % keyLen].charCodeAt() - 'A'.charCodeAt();
        console.log("key =" + keyNum)
        const ciphertextNum = (plaintextNum + keyNum) % 26;
        ciphertext += String.fromCharCode(ciphertextNum + 'A'.charCodeAt());
        console.log("ciphertext=" + ciphertextNum )
        console.log("ciphertext =" + ciphertext)
    }
    return ciphertext;
    
}

function vigenereDecrypt(ciphertext, key) {
    let plaintext = "";
    key = key.toUpperCase();
    const keyLen = key.length;
    for (let i = 0; i < ciphertext.length; i++) {
        const ciphertextNum = ciphertext[i].charCodeAt() - 'A'.charCodeAt();
        const keyNum = key[i % keyLen].charCodeAt() - 'A'.charCodeAt();
        const plaintextNum = (ciphertextNum - keyNum + 26) % 26;
        plaintext += String.fromCharCode(plaintextNum + 'A'.charCodeAt());
    }
    return plaintext;
}

const encryptBtn = document.getElementById("encrypt-btn");
const decryptBtn = document.getElementById("decrypt-btn");

encryptBtn.addEventListener("click", () => {
    const plaintext = document.getElementById("plaintext").value;
    const key = document.getElementById("key").value;
    console.log(plaintext)
    const ciphertext = vigenereEncrypt(plaintext, key);
    document.getElementById("ciphertext").textContent = ciphertext;
});

decryptBtn.addEventListener("click", () => {
    const inputCiphertext = document.getElementById("input-ciphertext").value;
    console.log(inputCiphertext)
    const key2 = document.getElementById("key-2").value;
    const plaintext = vigenereDecrypt(inputCiphertext, key2);
    document.getElementById("decrypted-plaintext").textContent = plaintext;
});

const copyBtn = document.getElementById("decrypted-plaintext");

copyBtn.addEventListener("click", () => {
  const plaintext = document.getElementById("decrypted-plaintext").textContent;
  const range = document.createRange();
  range.selectNode(copyBtn);
  window.getSelection().addRange(range);
  document.execCommand("copy");
  copied.style.display = "block";
});

const copyBtnCiphertext = document.getElementById("ciphertext");
const copied = document.getElementById("notifcopy");

copyBtnCiphertext.addEventListener("click", () => {
  const ciphertext = document.getElementById("ciphertext").textContent;
  const range = document.createRange();
  range.selectNode(copyBtnCiphertext);
  window.getSelection().addRange(range);
  document.execCommand("copy");
  copied.style.display = "block";
});