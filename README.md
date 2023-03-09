# xor-encryption-decryption

Here is an XOR encryption algorithm that takes a plaintext message and a secret key, and returns a ciphertext

Descriptor: 

  * XOR encryption is a symmetric encryption algorithm that works by taking the bitwise exclusive OR (XOR) operation between the plaintext message and a secret key. This results in a ciphertext that can only be decrypted by performing the XOR operation with the same secret key.

Algorithm:

1. Convert the plaintext message and the secret key into binary format.

2. If the length of the secret key is shorter than the plaintext message, repeat the key until it is the same length as the plaintext message.

3. Perform the bitwise XOR operation between the binary plaintext message and the binary secret key.

4. Convert the resulting binary ciphertext back into text format.

5. Return the ciphertext.
