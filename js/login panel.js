// تعديل دالة التحقق من تسجيل الدخول
function checkLogin(event) {
    event.preventDefault(); // منع إرسال الفورم بشكل افتراضي

    // الحصول على قيم المستخدم وكلمة المرور المدخلة
    var username = document.getElementById('login-username').value;
    var password = document.getElementById('login-password').value;

    // التحقق من صحة البيانات المدخلة
    if ((username === "KLash" && password === "KlachincofX") || (username === "Nero x" && password === "KlachincofX") || (username === "3_1.4" && password === "258963147")) {
        // إذا كانت البيانات صحيحة، اعرض الرسالة
        var successMessage = document.getElementById('success-message');
        successMessage.style.display = 'block'; // إظهار الرسالة

        // إخفاء الرسالة بعد 5 ثوانٍ والتوجه إلى الصفحة الرئيسية
        setTimeout(function() {
            successMessage.style.display = 'none'; // إخفاء الرسالة
            window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSfBcrCEngNo07nF2-qG-LH3BfIFTIKQ-zsRmx89pakXox7LvA/viewform?usp=sf_link'; // التوجه إلى الصفحة الرئيسية (قم بتغيير الرابط حسب حاجتك)
        }, 5000); // 5 ثوانٍ
    } else {
        // إذا كانت البيانات خاطئة، إظهار رسالة الخطأ
        var errorMessage = document.getElementById('error-message');
        errorMessage.style.display = 'block'; // إظهار الرسالة
    }
}