// تحويل الأزرار إلى مصفوفة
let arr = Array.from(document.getElementsByClassName('main-button'));

// إخفاء جميع العناصر النصية عدا قسم features عند تحميل الصفحة
function hideAllExceptFeatures() {
    document.querySelectorAll('.main-content1, .main-content2, .main-content3, .main-content4, .main-content5, .main-content6, .main-content7, .main-content8').forEach((el) => {
        el.style.display = 'none';
    });
    document.querySelector('.features').style.display = 'block';  // إظهار قسم features
}

// إعادة تعيين تنسيقات الأزرار إلى حالتها الافتراضية
function resetButtonStyles() {
    arr.forEach((el) => {
        el.style.backgroundColor = '';  // إعادة لون الخلفية للحالة الافتراضية
        el.style.boxShadow = '';  // إزالة الظل
    });
}

// إخفاء جميع العناصر النصية
function hideAll() {
    document.querySelectorAll('.main-content1, .main-content2, .main-content3 , .main-content4, .main-content5, .main-content6, .main-content7, .main-content8, .features').forEach((el) => {
        el.style.display = 'none';
    });
}

// إضافة حدث تحميل الصفحة
window.addEventListener('DOMContentLoaded', hideAllExceptFeatures); // إخفاء جميع العناصر إلا قسم features عند تحميل الصفحة

arr.forEach((el, index) => {
    el.addEventListener('click', () => {
        hideAll();  // إخفاء جميع العناصر
        resetButtonStyles();  // إعادة تنسيق الأزرار

        // إظهار العنصر المطلوب بناءً على الزر
        document.querySelector(`.main-content${index + 1}`).style.display = 'block';
        el.style.backgroundColor = '#005672';
        el.style.boxShadow = '0 0 10px #008CB9';
    });
});

// تخزين الأزرار الخاصة بالعدادات
let button = Array.from(document.getElementsByClassName("button-sub"));

// تخزين القيم الأصلية للعدادات
let originalCounts = [];

// حفظ القيمة الأصلية لكل عداد عند تحميل الصفحة
button.forEach((el, index) => {
    originalCounts.push(parseInt(el.innerText)); // حفظ القيمة الأصلية للعداد

    el.addEventListener('click', () => {
        let count = parseInt(el.innerText);  // أخذ القيمة الحالية
        if (count > 0) {
            count--;  // إنقاص القيمة
            el.innerText = count;  // تحديث النص
        }

        // إخفاء العنصر إذا وصل العداد إلى 0
        if (count <= 0) {
            el.parentNode.style.display = 'none';  // إخفاء العنصر
        }

        el.style.backgroundColor = count > 0 ? "green" : "red"; // تغيير اللون بناءً على القيمة
    });
});

// دالة لإعادة تعيين العدادات وإظهار العناصر المخفية
function resetCounters() {
    button.forEach((el, index) => {
        el.innerText = originalCounts[index]; // إعادة العداد إلى قيمته الأصلية
        el.style.backgroundColor = "";  // إعادة لون الخلفية إلى الحالة الافتراضية
        el.parentNode.style.display = 'block';  // إظهار العنصر المخفي
    });
}

// إضافة زر لإعادة تعيين العدادات وإظهار العناصر المخفية عند الضغط على الأزرار الرئيسية
const restoreButton = document.querySelectorAll(".main-button"); 
restoreButton.forEach((el) => {
    el.addEventListener('click', resetCounters);  // عند الضغط على أي زر رئيسي، يتم إعادة تعيين العدادات وإظهار العناصر المخفية
});






// تعريف الأزرار والعدادات-- الجزء الخاص بالتسابيح

const buttons = document.querySelectorAll('.button-all'); // جميع الأزرار
const spans = document.querySelectorAll('.block-all'); // جميع العناصر التي ستعرض العدادات
let counts = Array(buttons.length).fill(0); // مصفوفة لتخزين العدادات لكل زر
let totalCount = 0; // العد الكلي

// دالة لزيادة العداد عند النقر على زر
function handleButtonClick(index) {
    counts[index]++; // زيادة العداد الخاص بالزر
    totalCount++; // زيادة العد الكلي

    // تحديث النصوص في العناصر المناسبة
    spans[index].innerText = counts[index];
    spans[spans.length - 1].innerText = totalCount; // تحديث مجموع التسبيحات

    // تغيير لون الزر
    buttons[index].style.backgroundColor = "#4CB050";

    // تعطيل الزر إذا وصل إلى 100
    if (counts[index] >= 100) {
        buttons[index].style.backgroundColor = "#958774"; // تغيير اللون
        buttons[index].disabled = true; // تعطيل الزر
    }
}

// إضافة الأحداث لكل زر
buttons.forEach((button, index) => {
    button.addEventListener("click", () => handleButtonClick(index));
});

// دالة لإعادة القيم إلى حالتها الافتراضية
document.getElementById("icon").addEventListener("click", function() {
    counts.fill(0); // إعادة جميع العدادات إلى 0
    totalCount = 0; // إعادة العد الكلي إلى 0

    // إعادة تعيين النصوص والألوان
    spans.forEach((span, index) => {
        span.innerText = ""; // إعادة النص إلى فارغ
        buttons[index].style.backgroundColor = "#FF9700"; // إعادة لون الزر إلى الافتراضي
        buttons[index].disabled = false; // إعادة تفعيل الزر
    });

    // تحديث مجموع التسبيحات
    spans[spans.length - 1].innerText = ""; // إعادة مجموع التسبيحات إلى فارغ
    buttons[buttons.length - 1].style.backgroundColor = "#018BBA"; // إعادة لون الزر الافتراضي
});
