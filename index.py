# def enkripsi(plaintext, key):
#     ciphertext = ""
#     key = key.upper()
#     key_len = len(key)
#     for i in range(len(plaintext)):
#         # Ubah huruf plaintext dan kunci menjadi bilangan 0-25
#         plaintext_num = ord(plaintext[i]) - ord('A')
#         key_num = ord(key[i % key_len]) - ord('A')
#         # Enkripsi bilangan dengan teknik Vigenere
#         ciphertext_num = (plaintext_num + key_num) % 26
#         # Ubah bilangan menjadi huruf terenkripsi
#         ciphertext += chr(ciphertext_num + ord('A'))
#     return ciphertext

# def deskripsi(ciphertext, key):
#     plaintext = ""
#     key = key.upper()
#     key_len = len(key)
#     for i in range(len(ciphertext)):
#         # Ubah huruf ciphertext dan kunci menjadi bilangan 0-25
#         ciphertext_num = ord(ciphertext[i]) - ord('A')
#         key_num = ord(key[i % key_len]) - ord('A')
#         # Dekripsi bilangan dengan teknik Vigenere
#         plaintext_num = (ciphertext_num - key_num) % 26
#         # Ubah bilangan menjadi huruf plainteks
#         plaintext += chr(plaintext_num + ord('A'))
#     return plaintext
# plaintext = input("Masukan plaintext : ")
# key = input("Masukan key: ")
# ciphertext = enkripsi(plaintext, key)
# print("Ciphertext:", ciphertext)
# deskripsi_text = deskripsi(ciphertext, key)
# print("Decrypted text:", deskripsi_text)

def decrypt_vigenere(ciphertext, key):
    plaintext = ""
    key = key.upper()
    key_len = len(key)
    for i in range(len(ciphertext)):
        ciphertext_num = ord(ciphertext[i]) - ord('A')
        key_num = ord(key[i % key_len]) - ord('A')
        plaintext_num = (ciphertext_num - key_num) % 26
        plaintext += chr(plaintext_num + ord('A'))
    return plaintext

ciphertext = input("Masukan ciphertext : ")
key = input("Masukan key: ")

# Mencetak pesan yang akan didekripsi
print("Ciphertext:", ciphertext)

# Mendekripsi pesan menggunakan kunci yang telah ditentukan
plaintext = decrypt_vigenere(ciphertext, key)

# Mencetak hasil dekripsi
print("Key:", key)
print("Plaintext:", plaintext)
