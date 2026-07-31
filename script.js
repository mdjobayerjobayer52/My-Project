document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("hiringForm");
    const phoneInput = document.getElementById("phone");
    const phoneError = document.getElementById("phoneError");

    form.addEventListener("submit", function (event) {
        let isValid = true;

        // Phone Number Validation (১১ ডিজিটের ফোন নম্বর নিশ্চিত করার জন্য)
        const phoneValue = phoneInput.value.trim();
        if (phoneValue.length !== 11 || isNaN(phoneValue)) {
            phoneError.style.display = "block";
            isValid = false;
        } else {
            phoneError.style.display = "none";
        }

        // ভ্যালিডেশন ব্যর্থ হলে ফর্ম জমা হওয়া আটকাবে
        if (!isValid) {
            event.preventDefault();
        }
    });
});