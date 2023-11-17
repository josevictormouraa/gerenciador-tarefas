function changeImage() {
  document.getElementById('image-input').click();
}

document.getElementById('image-input').addEventListener('change', function(event) {
  const fileInput = event.target;
  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function(e) {
      document.getElementById('profile-image').src = e.target.result;
    };

    reader.readAsDataURL(file);
  }
});

