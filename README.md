# NestJS Auth JWT & Prisma ORM

Aplikasi REST API RESTful untuk **Authentication & Authorization** menggunakan **NestJS**, **Prisma ORM**, **MySQL**, **JWT (Access & Refresh Tokens)**, **Role-Based Access Control (RBAC)**, serta mendukung kontainerisasi dengan **Docker Compose**.

---

## 🚀 Fitur Utama

- 🔑 **Otentikasi JWT**: Register, Login dengan enkripsi password `bcrypt`, serta mekanisme Refresh Token.
- 🛡️ **Role-Based Access Control (RBAC)**: Pembatasan akses endpoint berbasis role pengguna (contoh: `admin`, `user`).
- 👤 **Custom Decorators**:
  - `@CurrentUser()` untuk mendapatkan data user terotentikasi langsung dari request.
  - `@Public()` untuk membypass guard pada endpoint publik.
  - `@Roles(...)` untuk menentukan role yang diizinkan pada handler.
- 🗄️ **Database & ORM**: Integrasi MySQL menggunakan Prisma ORM.
- 💼 **Manajemen Data**: Module CRUD `User` dan `Karyawan`.
- 🐳 **Docker & Docker Compose**: Menjalankan aplikasi NestJS dan MySQL secara terisolasi dan mudah.

---

## 🛠️ Tech Stack

- **Framework**: [NestJS](https://nestjs.com/) v11
- **Database ORM**: [Prisma ORM](https://www.prisma.io/) v6
- **Database**: MySQL 8.0
- **Authentication**: Passport.js, `@nestjs/jwt`, `bcrypt`
- **Language**: TypeScript
- **Containerization**: Docker & Docker Compose

---

## ⚙️ Variabel Lingkungan (`.env`)

Buat berkas `.env` di direktori utama proyek (bisa menyalin dari `.env.example`):

```env
DATABASE_URL="mysql://root:rootpassword@localhost:3306/belajar_nestjs"

JWT_SECRET="your-super-secret-key-change-this-in-production"
JWT_EXPIRES_IN="1h"

JWT_REFRESH_SECRET="your-refresh-secret-key"
JWT_REFRESH_EXPIRES_IN="7d"

PORT=3000
```

---

## 🐳 Cara Menjalankan dengan Docker Compose (Direkomendasikan)

Pastikan Docker Engine / Docker Desktop sudah berjalan di komputer Anda.

```bash
# 1. Build & jalankan container (NestJS + MySQL)
docker compose up --build -d

# 2. Cek log aplikasi & database
docker compose logs -f

# 3. Hentikan container
docker compose down
```

Aplikasi akan secara otomatis membuat database dan melakukan `prisma db push`, lalu berjalan di `http://localhost:3000`.

---

## 💻 Cara Menjalankan secara Lokal

### 1. Instalasi Dependensi
```bash
npm install
```

### 2. Setup Database & Prisma ORM
Pastikan service MySQL Anda sudah berjalan lokal, lalu jalankan:

```bash
# Generate Prisma Client
npx prisma generate

# Sinkronkan skema ke database
npx prisma db push
```

### 3. Jalankan Aplikasi
```bash
# Development mode (Watch)
npm run start:dev

# Production mode
npm run build
npm run start:prod
```

---

## 📑 Daftar API Endpoints

### 🔐 Authentication (`/auth`)
| Method | Endpoint | Access | Deskripsi |
| :--- | :--- | :--- | :--- |
| `POST` | `/auth/register` | Public | Pendaftaran user baru |
| `POST` | `/auth/login` | Public | Login & menerima Access Token + Refresh Token |
| `POST` | `/auth/refresh` | Public | Memperbarui Access Token menggunakan `refresh_token` |
| `GET` | `/auth/profile` | Authenticated | Mengambil profil user yang sedang login |
| `GET` | `/auth/me` | Authenticated | Mengambil data user terotentikasi |

### 👤 User (`/user`)
| Method | Endpoint | Access | Deskripsi |
| :--- | :--- | :--- | :--- |
| `POST` | `/user` | Authenticated | Menambah user baru |
| `GET` | `/user` | Authenticated | Mengambil daftar semua user |
| `GET` | `/user/:id` | Authenticated | Mengambil data user berdasarkan ID |
| `PATCH` | `/user/:id` | Authenticated | Memperbarui data user berdasarkan ID |
| `DELETE` | `/user/:id` | Authenticated | Menghapus user berdasarkan ID |
| `GET` | `/user/public` | Public | Contoh data publik |
| `GET` | `/user/admin-only` | Admin Only | Contoh endpoint khusus role `admin` |

### 👔 Karyawan (`/karyawan`)
| Method | Endpoint | Access | Deskripsi |
| :--- | :--- | :--- | :--- |
| `POST` | `/karyawan` | Authenticated | Menambah data karyawan |
| `GET` | `/karyawan` | Authenticated | Mengambil daftar karyawan |
| `GET` | `/karyawan/:id` | Authenticated | Mengambil detail karyawan berdasarkan ID |
| `PATCH` | `/karyawan/:id` | Authenticated | Update data karyawan |
| `DELETE` | `/karyawan/:id` | Authenticated | Hapus data karyawan |

---

## 🛠️ Perintah Bermanfaat Prisma

```bash
# Membuka GUI Prisma Studio di browser
npx prisma studio

# Melakukan format pada file schema.prisma
npx prisma format
```

---

## 📄 Lisensi
[UNLICENSED](LICENSE)
