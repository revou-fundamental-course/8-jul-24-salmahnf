// Menentukan Constanta
const tinggiBadan = document.getElementById('input-tinggi-badan');
const usia = document.getElementById('input-usia');
const beratBadan = document.getElementById('input-berat-badan');
const hasilBmiElement = document.querySelector('.hasil-bmi');
const kategoriBmiElement = document.querySelector('.kategori-bmi');
const dataUserElement = document.querySelector('.data-user .usia');
const jenisKelaminElement = document.querySelector('.data-user .jenis-kelamin');
const beratBadanElement = document.querySelector('.data-user .berat-badan');
const tinggiBadanElement = document.querySelector('.data-user .tinggi-badan');
const newBoxElement = document.querySelector('.new-box');

// Klasifikasi Hasil BMI
function klasifikasiBmi(bmi) {
  if (bmi < 18.5) {
    return "Anda Kekurangan Berat Badan. Hubungi dokter lebih lanjut mengenai pola makan dan gizi yang baik untuk meningkatkan kesehatan.";
  } else if (bmi < 25) {
    return "Anda memiliki berat badan ideal. Good job!! Tetap pertahankan berat badan Anda dan jaga berat badan Anda dengan mengatur keseimbangan antara pola makan dan aktivitas fisik Anda.";
  } else if (bmi < 30) {
    return "Anda Memiliki Kelebihan Berat Badan. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
  } else {
    return "Anda berada dalam kategori obesitas. Usahakan untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga makan dan aktivitas fisik. Segera kunjungi dokter untuk dilakukan pemeriksaan kesehatan lanjutan untuk mengetahui risiko yang Anda miliki terkait berat badan Anda.";
  }
}

// Perhitungan dan tampilkan hasil 
function hitungBmi(event) {
  event.preventDefault(); // Mencegah form dari submit secara default
  const tbad = parseFloat(tinggiBadan.value) / 100;
  const bbad = parseFloat(beratBadan.value);
  const usi = parseInt(usia.value, 10);
  const jenisKelamin = document.querySelector('input[name="jeniskelamin"]:checked');

  if (isNaN(tbad) || isNaN(bbad) || isNaN(usi) || tbad > 3 || bbad > 200 || !jenisKelamin) {
    alert('Pastikan semua input terisi dengan benar');
    return;
  }

  let bmi = bbad / (tbad * tbad);
  bmi = bmi.toFixed(1);

  hasilBmiElement.textContent = bmi;
  kategoriBmiElement.textContent = klasifikasiBmi(parseFloat(bmi));
  dataUserElement.textContent = usi;
  jenisKelaminElement.textContent = jenisKelamin.value;
  beratBadanElement.textContent = bbad;
  tinggiBadanElement.textContent = (tbad * 100).toFixed(0);

  updateNewBox(parseFloat(bmi));
}

function updateNewBox(bmi) {
  if (bmi < 18.5) {
    newBoxElement.innerHTML = `
      <p>Berat rendah dapat menyebabkan berbagai masalah penyakit:</p>
      <ul>
        <li>Infertilitas</li>
        <li>Anemia</li>
        <li>Osteoporosis</li>
        <li>Sistem Imun Lemah</li>
      </ul>`;
    newBoxElement.style.display = 'block';
  } else if (bmi >= 25 && bmi < 30) {
    newBoxElement.innerHTML = `
      <p>Beberapa penyakit yang berasal dari kegemukan:</p>
      <ul>
        <li>Diabetes</li>
        <li>Hipertensi</li>
        <li>Sakit Jantung</li>
        <li>Osteoarthritis</li>
      </ul>`;
    newBoxElement.style.display = 'block';
  } else if (bmi >= 30) {
    newBoxElement.innerHTML = `
      <p>Beberapa penyakit yang berasal dari kegemukan:</p>
      <ul>
        <li>Diabetes</li>
        <li>Hipertensi</li>
        <li>Sakit Jantung</li>
        <li>Osteoarthritis</li>
      </ul>`;
    newBoxElement.style.display = 'block';
  } else {
    newBoxElement.style.display = 'none';
  }
}

// Reset Button
function resetForm() {
  document.getElementById('bmi-form').reset();
  hasilBmiElement.textContent = '0.0';
  kategoriBmiElement.textContent = '';
  dataUserElement.textContent = '';
  jenisKelaminElement.textContent = '';
  beratBadanElement.textContent = '';
  tinggiBadanElement.textContent = '';
  newBoxElement.style.display = 'none';
}

// Event Submit dan Reset
document.getElementById('bmi-form').addEventListener('submit', hitungBmi);
document.getElementById('reset-button').addEventListener('click', resetForm);
