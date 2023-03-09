const message = 'Hello, World!'
const key = '123'
const encrypted = xorEncrypt(message, key)
const decrypted = xorEncrypt(encrypted, key)

console.log(message,'->',key,'->', encrypted)
console.log(encrypted,'->', key,'->', decrypted)

function xorEncrypt(plaintext, key) {
  // Convert plaintext and key to binary format
  let plaintextBin = '';
  for (let i = 0; i < plaintext.length; i++) {
    plaintextBin += plaintext.charCodeAt(i).toString(2).padStart(8, '0');
  }
  let keyBin = '';
  for (let i = 0; i < key.length; i++) {
    keyBin += key.charCodeAt(i).toString(2).padStart(8, '0');
  }
  
  // Repeat key until it is the same length as plaintext
  while (keyBin.length < plaintextBin.length) {
    keyBin += keyBin;
  }
  keyBin = keyBin.substr(0, plaintextBin.length);
  
  // Perform XOR operation between plaintext and key
  let ciphertextBin = '';
  for (let i = 0; i < plaintextBin.length; i++) {
    if (plaintextBin[i] === keyBin[i]) {
      ciphertextBin += '0';
    } else {
      ciphertextBin += '1';
    }
  }
  
  // Convert binary ciphertext back to text format
  let ciphertext = '';
  for (let i = 0; i < ciphertextBin.length; i += 8) {
    let byte = ciphertextBin.substr(i, 8);
    ciphertext += String.fromCharCode(parseInt(byte, 2));
  }
  
  return ciphertext;
}
