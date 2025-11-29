function hitungBMI() {
  const weight = parseFloat(document.getElementById('beratBadan').value);
  const heightCM = parseFloat(document.getElementById('tinggiBadan').value);
  const height = heightCM / 100;
  const umur = document.getElementById('umur').value;

if (isNaN(weight) || isNaN(heightCM) || isNaN(umur) || weight <= 0 || heightCM <= 0 || umur <=0) {
  Swal.fire({
    theme: 'dark',
    text: 'Input harus berupa angka dan tidak bowleh kosong.',
    icon: 'warning',
    confirmButtonText: 'oke paham'
  })
  return;
}

const IMT = weight / (height * height);
let status;

if (IMT < 17) {
  status = "Kekurangan berat badan  tingkat berat.";
} else if (IMT >= 17 && IMT < 18.5) {
  status = "Kekurangan berat badan tingkat rendah.";
} else if (IMT >= 18.5 && IMT < 25) {
  status = "Berat badan kamu Normal.";
} else if (IMT >= 25 && IMT <= 27) {
  status = "Kelebihan berat badan tingkat ringan.";
} else if (IMT > 27) {
  status = "Kelebihan berat badan tingkat berat.";
}

const resultText = `
  <div class="result-dari-js">
  <p>Berat Badan: ${weight} kg</p>
  <p>Tinggi Badan:  ${height} m</p>
  <p>Umur:  ${umur} tahun</p>
  <p>Hasil BMI: ${IMT.toFixed(2)}</p>
  <p>Status:<b>  ${status}</b></p>
  </div>`;

document.getElementById('result-bmi').innerHTML = resultText;

}
{
function resetForm() {
  document.getElementById('beratBadan').value = '';
  document.getElementById('tinggiBadan').value = '';
  document.getElementById('umur').value = '';
  document.getElementById('result-bmi').innerHTML = '';
}
}
