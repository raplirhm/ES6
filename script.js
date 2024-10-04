//Data Mahasiswa
const dataMahasiswa = [
    {
        id: 1,
        nama: "Budi Santoso",
        tanggalLahir: "2000-01-15",
        fakultas: "Fakultas Ilmu Komputer",
        programStudi: "Teknik Informatika",
        semester: 6,
        nilai: {
            algoritma: 85,
            basisData: 88,
            pemrogramanWeb: 90,
        },
        aktif: true,
        organisasi: ["Himpunan Mahasiswa Teknik", "Komunitas Pemrograman", "DNCC", "Doscom", "Magic Chess"],
    },
    {
        id: 2,
        nama: "Siti Aminah",
        tanggalLahir: "1999-05-10",
        fakultas: "Fakultas Ekonomi Bisnis",
        programStudi: "Manajemen",
        semester: 4,
        nilai: {
            manajemenKeuangan: 78,
            akuntansi: 82,
            pemasaran: 75,
        },
        aktif: true,
        organisasi: ["Koperasi Mahasiswa"],
    },
    {
        id: 3,
        nama: "Rudi Hartono",
        tanggalLahir: "1998-12-01",
        fakultas: "Fakultas Teknik",
        programStudi: "Teknik Elektro",
        semester: 8,
        nilai: {
            mekanikaTanah: 85,
            strukturBangunan: 89,
        },
        aktif: false,
        organisasi: ["Himpunan Mahasiswa Teknik Sipil"],
    },
];

// masukin data json ke variabel
const mhs = dataMahasiswa;
console.log(mhs);

// coba ambil 1 objek dari array
const mhs_pertama = mhs[0];
console.log(mhs_pertama);

// destrukturing, ambil beberapa key dari object
// const nama = mhs_pertama.nama;
// const.fakultas = mhs_pertama.fakultas



// Tugas

// Destrukturing seluruh field
const {nama, fakultas, organisasi, aktif, tanggalLahir} = mhs_pertama;
console.log(nama, fakultas, organisasi, tanggalLahir);

// Destrukturing field nilai
const {algoritma,basisData,pemrogramanWeb} = mhs[0].nilai;
console.log(algoritma,basisData,pemrogramanWeb);

// Destrukturing field organisasi
const [orgPertama, orgKedua, ...orgLainnya] = organisasi;
console.log(orgPertama, orgKedua, orgLainnya)

// Spread operator field organisasi
const newOrg = ["Futsal",...organisasi];
console.log(newOrg);

// Update field fakultas dan semester
const updateMahasiswa = {...mhs_pertama,fakultas: "Fakultas Teknologi Informasi", semester: 7};
console.log(updateMahasiswa)

// Split tanggal lahir dan tampilkan tahun saja
const getYear = tanggalLahir.split("-")[0];
console.log(getYear);

// Confitional operator ?
const statusMhs = aktif ? "masih aktif" : "tidak aktif";
console.log(statusMhs)

// Map semua nama
const namaMhs = mhs.map(mahasiswa => mahasiswa.nama);
console.log(namaMhs)

// Filter mahasiswa aktif dan fik
const mahasiswaAktifIlmuKomputer = dataMahasiswa.filter(mahasiswa => 
mahasiswa.aktif && mahasiswa.fakultas === "Fakultas Ilmu Komputer");
console.log(mahasiswaAktifIlmuKomputer);

// Total nilai seluruh mahasiswa
const totalNilaiMhs = dataMahasiswa.reduce((sum,mhs) => {
const totalNilai = Object.values(mhs.nilai).reduce((acc,nilai) => acc + nilai, 0);
return sum + totalNilai;
}, 0);
console.log(totalNilaiMhs);

// Sort mahasiswa berdasarkan semester
const sortedbySemester = dataMahasiswa.slice().sort((a,b) => a.semester - b.semester);
console.log(sortedbySemester)

// Menambahkan mahasiswa baru
const newMahasiswa = {
    id: 4,
        nama: "Andi Setiawan",
        tanggalLahir: "2001-04-12",
        fakultas: "Fakultas Ilmu Komputer",
        programStudi: "Sistem Informasi",
        semester: 2,
        nilai: {
            algoritma: 80,
            basisData: 82,
            pemrogramanWeb: 85,
        },
        aktif: true,
        organisasi: ["Himpunan Mahasiswa SI"],
};
const dataMahasiswaUpdated = [...dataMahasiswa,newMahasiswa];
console.log(dataMahasiswaUpdated);

// Delete dan update mahasiswa
const dataMahasiswaAfterDelete = dataMahasiswaUpdated.filter((mhs) => mhs.id !== 2);
console.log(dataMahasiswaAfterDelete);

const dataMahasiswaAfterUpdate = dataMahasiswaAfterDelete.map((mhs) => mhs.id === 1 ?  {...mhs,semester: 7} : mhs);
console.log(dataMahasiswaAfterUpdate);

