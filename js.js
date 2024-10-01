// تحويل الأزرار إلى مصفوفة
let arr = Array.from(document.getElementsByClassName('button-all'));

// إخفاء جميع العناصر النصية
function hideAll() {
    document.querySelectorAll('.test1, .test2, .test3').forEach((el) => {
        el.style.display = 'none';
    });
}

// إعادة تعيين تنسيقات الأزرار إلى حالتها الافتراضية
function resetButtonStyles() {
    arr.forEach((button) => {
        button.style.backgroundColor = '';  // إعادة لون الخلفية للحالة الافتراضية
        button.style.boxShadow = '';  // إزالة الظل
    });
}

arr.forEach((el, index) => {
    el.addEventListener('click', () => {
        hideAll();  // إخفاء جميع العناصر
        resetButtonStyles();  // إعادة تنسيق الأزرار

        // إظهار العنصر المطلوب بناءً على الزر
        document.querySelector(`.test${index + 1}`).style.display = 'block';
        el.style.backgroundColor = '#005672';
        el.style.boxShadow = '0 0 10px #008CB9';
    });
});

// تفعيل الزر عند تحميل الصفحة
const targetButton = document.getElementById('targetButton');
document.addEventListener('DOMContentLoaded', function() {
    targetButton.focus();  // تحديد الزر بمجرد تحميل الصفحة
    targetButton.click();  // الضغط على الزر تلقائيًا عند التحميل
});