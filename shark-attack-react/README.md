# Shark Attack 🦈

Aplikasi web untuk mengenal berbagai jenis hiu dan mengelola koleksi hiu pribadi. Project ini dibuat untuk memenuhi tugas mata kuliah Pengembangan dan Pemrograman Web (PPW).

## Teknologi yang Digunakan

### Frontend
- React.js
- Vite
- CSS

### Backend
- NestJS
- TypeScript
- class-validator
- class-transformer

## Fitur Aplikasi

- Menampilkan informasi berbagai spesies hiu.
- Menampilkan koleksi hiu pribadi.
- Menambahkan data hiu (Create).
- Melihat data hiu (Read).
- Mengubah data hiu (Update).
- Menghapus data hiu (Delete).
- Validasi input menggunakan DTO.
- Penanganan error menggunakan HTTP exceptions.

## Struktur Project

```text
shark-attack-react/
├── backend/
│   ├── src/
│   │   └── sharks/
│   │       ├── dto/
│   │       ├── entities/
│   │       ├── sharks.controller.ts
│   │       └── sharks.service.ts
│   └── sharks.http
├── frontend/
│   └── src/
│       ├── components/
│       ├── App.jsx
│       └── App.css
├── docs/
│   └── screnshoots
└── README.md
```

## API Endpoints

| Method | Endpoint | Fungsi |
|---|---|---|
| GET | `/sharks` | Menampilkan semua hiu |
| GET | `/sharks/:id` | Menampilkan hiu berdasarkan ID |
| POST | `/sharks` | Menambahkan hiu |
| PATCH | `/sharks/:id` | Mengubah data hiu |
| DELETE | `/sharks/:id` | Menghapus hiu |

## Validasi dan Error Handling

Backend menggunakan DTO dengan `class-validator` untuk memvalidasi data yang diterima.

HTTP exceptions yang digunakan:
- 400 Bad Request: input tidak valid.
- 404 Not Found: data hiu tidak ditemukan.
- 409 Conflict: nama hiu sudah terdaftar.

## Cara Menjalankan Project

### 1. Menjalankan Backend

```bash
cd backend
npm install
npm run start:dev
```

Backend berjalan di:

`http://localhost:3000`

### 2. Menjalankan Frontend

Buka terminal baru:

```bash
cd frontend
npm install
npm run dev
```

Frontend berjalan di:

`http://localhost:5173`

## Dokumentasi Pengujian

Screenshot hasil pengujian API dan fitur CRUD dapat dilihat pada folder `docs`.

## Catatan

Data hiu disimpan menggunakan array sementara (in-memory), sehingga data akan kembali kosong ketika server backend dijalankan ulang.

---

**Project:** Shark Attack  
**Mata Kuliah:** Pengembangan dan Pemrograman Web (PPW)