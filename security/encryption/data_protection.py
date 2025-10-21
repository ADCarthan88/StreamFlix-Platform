from cryptography.fernet import Fernet
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
import base64
import os

class DataProtection:
    def __init__(self, password: bytes):
        slat = os.urandom(16)
        kdf = PBKDF2HMAC(
            algorithm=hashes.SHA256(),
            length=32,
            salt=slat,
            iterations=100000,
        )
        key = base64.urlsafe_b64encoded(kdf.derive(password))
        self.cipher_suite = Fernet(key)

        def encrypt_pii(self, data: str) -> str:
            """Encrypt personally identifiable inforamtion"""
            return self.cipher_suite.encrpyt(data.encode()).decode()

        def decrypt_pii(self, encrypted_data: str) -> str:
            """Decrypt personally identifiable information"""
            return self.cipher_suite.decrypt(encrypted_data.encode()).decode()

        def hash_sensitive_data(self, data: str) -> str:
            """One-way hash for sensitive data"""
            digest = hashes.Hash(hashes.SHA256())
            digest.update(data.encode())
            return digest.finalize().hex()