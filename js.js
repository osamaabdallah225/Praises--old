// تحويل الأزرار إلى مصفوفة
let arr = Array.from(document.getElementsByClassName('main-button'));

// إخفاء جميع العناصر عند فتح البرنامج  
function hideAllExceptFeatures() {
    document.querySelectorAll('.main-content1, .main-content2, .main-content3, .main-content4, .main-content5, .main-content6, .main-content7, .main-content8').forEach((el) => {
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

// إخفاء جميع العناصر النصية
function hideAll() {
    document.querySelectorAll('.main-content1, .main-content2, .main-content3 , .main-content4, .main-content5, .main-content6, .main-content7, .main-content8, .fa-gear').forEach((el) => {
        el.style.display = 'none';
    });
}

// // لو الامر ده مش موجود الصفحة هتيجي فاضية اول لما تفتح
//     // وظيفة لتشغيل النقر التلقائي عند تحميل الصفحة
//     window.onload = function() {
//         // اختيار الزر باستخدام الـ ID الخاص به
//         var buttonFocus = document.getElementById('autoFocus');
//         buttonFocus.click();  // تنفيذ عملية النقر
      
//       };




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
button.forEach((el) => {
    originalCounts.push(parseInt(el.innerText)); // حفظ القيمة الأصلية للعداد

    el.addEventListener('click', () => {
        let count = parseInt(el.innerText);  // أخذ القيمة الحالية
        if (count > 0) {
            count--;  // إنقاص القيمة
            el.innerText = count;  // تحديث النص







        }


        
        // إخفاء العنصر إذا وصل العداد إلى 0
        if (count <= 0) {
    el.parentNode.style.transition = 'transform 1.3s ease-out', 'opacity 1.3s ease'; // إضافة انتقال سلس
    el.parentNode.style.transform = 'translateX(-400px) '; // تحريك العنصر لأعلى وتكبيره
    el.parentNode.style.opacity = '.4 '; // تحريك العنصر لأعلى وتكبيره
    // إخفاء العنصر بعد انتهاء الانتقال
    setTimeout(() => {
        el.parentNode.style.display = 'none';  // إخفاء العنصر بعد 0.5 ثانية
    }, 800); // نفس مدة الانتقال
           
        }

        el.style.backgroundColor = count >= 0 ? "green" : "red"; // تغيير اللون بناءً على القيمة
    });
});

// دالة لإعادة تعيين العدادات وإظهار العناصر المخفية
function resetCounters() {
    button.forEach((el, index) => {
        el.innerText = originalCounts[index]; // إعادة العداد إلى قيمته الأصلية
        el.style.backgroundColor = "";  // إعادة لون الخلفية إلى الحالة الافتراضية
        el.parentNode.style.display = 'block';  // إظهار العنصر المخفي
        el.parentNode.style.transition = "none"; // إضافة انتقال سلس
       el.parentNode.style.transform = "none"; // تحريك العنصر لأعلى وتكبيره
       el.parentNode.style.opacity = "";
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
        // buttons[index].disabled = true; // تعطيل الزر
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


document.getElementById("settingIcon").addEventListener("click", function() {
    const settingList = document.getElementById("settingList");
    // التبديل بين إظهار وإخفاء القائمة
    if (settingList.style.display === "none" || settingList.style.display === "") {
        settingList.style.display = "block"; // إظهار القائمة
    } else {
        settingList.style.display = "none"; // إخفاء القائمة
    }
});
// 

//  الاعدادت


let fontSize = localStorage.getItem("fontSize") ? parseInt(localStorage.getItem("fontSize")) : 25; // استعادة الحجم المحفوظ أو تعيين الحجم الافتراضي

// استعادة حجم الخط عند تحميل الصفحة
window.addEventListener("load", function() {
    let elements = Array.from(document.getElementsByTagName("p")); // الحصول على جميع عناصر <p>
    elements.forEach(el => {
        el.style.fontSize = fontSize + "px"; // تعيين حجم الخط المحفوظ
    });

    // التحقق من تعطيل الأزرار عند تحميل الصفحة
    checkButtonState();
});



// زر التكبير
document.getElementById("plus").addEventListener("click", function() {
    if (fontSize < 60) { // تحقق من عدم تجاوز الحد الأقصى
        fontSize += 2; // زيادة حجم الخط بمقدار 2
        let elements = Array.from(document.getElementsByTagName("p")); // الحصول على جميع عناصر <p>

        // تعديل حجم الخط لكل عنصر <p>
        elements.forEach(el => {
            el.style.fontSize = fontSize + "px";
        });

        // حفظ حجم الخط في Local Storage
        localStorage.setItem("fontSize", fontSize);
        document.getElementById("seeFont").innerHTML = fontSize + "px";

        // التحقق من تعطيل الأزرار بعد التغيير
        checkButtonState();
    }
});

// زر التصغير
document.getElementById("minus").addEventListener("click", function() {
    if (fontSize > 16) { // تحقق من عدم تجاوز الحد الأدنى
        fontSize -= 2; // تقليل حجم الخط بمقدار 2
        let elements = Array.from(document.getElementsByTagName("p")); // الحصول على جميع عناصر <p>

        // تعديل حجم الخط لكل عنصر <p> مع التأكد من أن الحجم لا يقل عن 10px
        elements.forEach(el => {
            el.style.fontSize =  fontSize + "px";
        });

        // حفظ حجم الخط في Local Storage
        localStorage.setItem("fontSize", fontSize);
        document.getElementById("seeFont").innerHTML = fontSize + "px";

        // التحقق من تعطيل الأزرار بعد التغيير
        checkButtonState();

    }
});

 document.getElementById("seeFont").innerHTML =   fontSize + "px";
// دالة للتحقق من حالة الأزرار

function checkButtonState() {
    if (fontSize >= 60) {
        document.getElementById("plus").disabled = true; // تعطيل زر التكبير
    } else {
        document.getElementById("plus").disabled = false; // تفعيل زر التكبير
    }

    if (fontSize <= 15) {
        document.getElementById("minus").disabled = true; // تعطيل زر التصغير
    } else {
        document.getElementById("minus").disabled = false; // تفعيل زر التصغير
    }
}



document.getElementById("theme").addEventListener("click", function() {
    document.body.classList.toggle("dark");
})



// استعادة الوضع المحفوظ من LocalStorage أو تعيين الوضع الافتراضي "light"
let themeMode = localStorage.getItem("theme") || "light";

// تطبيق الوضع المحفوظ عند تحميل الصفحة
document.body.className = themeMode;

// تفعيل زر التبديل
document.getElementById("theme").addEventListener("click", function() {
    // تبديل السمة بين "light" و "dark"
    themeMode = themeMode === "light" ? "dark" : "light";
    
    // تطبيق السمة الجديدة
    document.body.className = themeMode;
    
    // حفظ السمة الجديدة في LocalStorage
    localStorage.setItem("theme", themeMode);
});


//  نهاية الاعدادات


// فانكشين التحديث وعمل فريش للصفحة

// هذه هي الدالة التي تتحقق من حالة التحديث


