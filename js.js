// تحويل الأزرار إلى مصفوفة
let arr = Array.from(document.getElementsByClassName('main-button'));

// إخفاء جميع العناصر النصية
function hideAll() {
    document.querySelectorAll('.main-content1, .main-content2, .main-content3').forEach((el) => {
        el.style.display = 'none';
    });
}

// إعادة تعيين تنسيقات الأزرار إلى حالتها الافتراضية
function resetButtonStyles() {
    arr.forEach((el) => {
        el.style.backgroundColor = '';  // إعادة لون الخلفية للحالة الافتراضية
        el.style.boxShadow = '';  // إزالة الظل
    });
}

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

// الوقوف علي الزر عند فتح الصفحة
const targetButton = document.getElementById('targetButton');
document.addEventListener('DOMContentLoaded', function() {
    targetButton.focus();  // تحديد الزر بمجرد تحميل الصفحة
    targetButton.click();  // الضغط على الزر تلقائيًا عند التحميل
    
});


// let button =Array.from(document.getElementsByClassName("button-sub"))

// button.forEach((el) => {
//     el.addEventListener('click', () => {
//        el.style.backgroundColor = "green" ;
//        let count =  el.innerText  ;  // هأخد القيمة اللي في الزر واحطها في متغير 
//        el.innerText = --count ;   // المتغير هينقص من القيمة 
//     //    اخفاءالذكر 
   

//        if (count<=0) {
//         el.parentNode.style.display = "none" ;
       
        
       
//     }
       
      
//     });
// });


let button = Array.from(document.getElementsByClassName("button-sub"));

// تخزين العناصر المخفية في مصفوفة
let hiddenElements = [];

// تخزين القيم الأصلية للعدادات
let originalCounts = [];

button.forEach((el) => {
    originalCounts.push(parseInt(el.innerText)); // حفظ القيمة الأصلية

    el.addEventListener('click', () => {
        el.style.backgroundColor = "green";
        let count = parseInt(el.innerText);  // أخذ القيمة الحالية
        count--;  // إنقاص القيمة
        el.innerText = count;  // تحديث النص

        // إخفاء الذكر
        if (count <= 0) {
            el.parentNode.style.display = "none";
            hiddenElements.push(el.parentNode); // إضافة العنصر المخفي إلى المصفوفة
        }
    });
});

// دالة لإعادة العناصر المخفية وإرجاع القيم الأصلية
function showHiddenElements() {
    hiddenElements.forEach((element, index) => {
        element.style.display = "block"; // إعادة إظهار العنصر
        button[index].innerText = originalCounts[index]; // إعادة القيمة الأصلية
        button[index].style.backgroundColor = ""; // إعادة لون الخلفية
    });
    hiddenElements = []; // إعادة تعيين المصفوفة
}

// إضافة زر لإعادة العناصر المخفية
const restoreButton = document.getElementById('targetButton'); // تأكد من وجود هذا الزر في HTML
restoreButton.addEventListener('click', showHiddenElements);
