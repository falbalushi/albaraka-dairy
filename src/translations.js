const translations = {
  en: {
    // Navbar
    logoName: 'Albaraka Dairy Farm',
    logoTag: 'Fresh Buffalo Milk & Laban',
    navProducts: 'Products',
    navBook: 'Book Now',
    navContact: 'Contact',

    // Hero
    badge: '🌿 Fresh Daily',
    heroTitle1: 'Pure',
    heroAccent: 'Buffalo Milk',
    heroTitle2: 'From Our Farm to You',
    heroSub:
      'Book your daily supply of fresh buffalo milk & laban. 1.500 OMR per bottle — pick up fresh, same day.',
    heroBtnPrimary: 'Book a Bottle 🛒',
    heroBtnSecondary: 'Contact Us',

    // Products section
    sectionTitle: 'Our Products & Live Stock',
    sectionSub: 'Live bottle count — updated in real time',
    p1Name: 'Buffalo Milk',
    p2Name: 'Fresh Laban',
    pSize: '1.5 Liters per bottle',
    pPer: 'per bottle',
    p1Status: 'In Stock',
    p2Status: 'Limited Stock',
    pAvail: 'bottles available',
    bookBtn: '📦 Book Now',
    waBtn: 'Book via WhatsApp',

    // Info bar
    info1: 'Pure Buffalo',
    info2: 'Fresh Batches',
    info3: 'Per Bottle',
    info4: 'OMR / bottle',

    // Contact
    contactTitle: 'Find Us',
    contactSub: 'We welcome you at the farm for pickup',
    label1: '📞 Phone',
    muted1: 'Available daily',
    label2: '📍 Location',
    muted2: 'Pickup at farm',
    label3: '🕐 Pickup Hours',
    val3: '6 AM – 10 PM',
    muted3: 'Every day',
    label4: '💬 WhatsApp',
    val4: 'Message Us',

    // Footer
    footerSub: 'Fresh buffalo milk & laban · 1.500 OMR · book online, pick up fresh',

    // Modal
    modalMilk: 'Buffalo Milk — 1.5L',
    modalLaban: 'Fresh Laban — 1.5L',
    labelName: 'Full Name',
    placeholderName: 'Your name...',
    labelPhone: 'Phone Number',
    labelDate: 'Pickup Date',
    labelQty: 'Quantity',
    cancelBtn: 'Cancel',
    confirmBtn: 'Confirm ✓',
    waSendBtn: 'Send Booking via WhatsApp',
    alertMsg: 'Please enter your name and phone number.',
    toastMsg: '✅ Booking confirmed! See you at pickup 🐃',

    // WhatsApp messages
    quickMsg: (product) =>
      `Hello Albaraka Dairy Farm 🐃\n\nI'd like to book: ${product} (1.5L)\nPrice: 1.500 OMR\n\nPlease confirm availability!`,
    fullMsg: (name, product, qty, total, date) =>
      `Hello Albaraka Dairy Farm 🐃\n\nNew Booking:\n👤 Name: ${name}\n🛒 Product: ${product} (1.5L)\n📦 Qty: ${qty} bottle(s)\n💰 Total: ${total} OMR\n📅 Pickup: ${date}\n\nPlease confirm. Thank you!`,
  },

  ar: {
    // Navbar
    logoName: 'مزرعة البركة للألبان',
    logoTag: 'حليب جاموس طازج ولبن أصيل',
    navProducts: 'المنتجات',
    navBook: 'احجز الآن',
    navContact: 'تواصل معنا',

    // Hero
    badge: '🌿 طازج كل يوم',
    heroTitle1: 'حليب جاموس',
    heroAccent: 'نقي',
    heroTitle2: 'من مزرعتنا إلى مائدتكم',
    heroSub:
      'احجز كميتك اليومية من حليب الجاموس الطازج واللبن الأصيل. ١٫٥٠٠ ريال للزجاجة — استلام يومي.',
    heroBtnPrimary: 'احجز زجاجة 🛒',
    heroBtnSecondary: 'تواصل معنا',

    // Products section
    sectionTitle: 'منتجاتنا والمخزون المتاح',
    sectionSub: 'عدد الزجاجات المتاحة — يتحدث لحظياً',
    p1Name: 'حليب الجاموس',
    p2Name: 'لبن طازج',
    pSize: '١٫٥ لتر للزجاجة',
    pPer: 'للزجاجة',
    p1Status: 'متاح',
    p2Status: 'كمية محدودة',
    pAvail: 'زجاجة متاحة',
    bookBtn: '📦 احجز الآن',
    waBtn: 'احجز عبر واتساب',

    // Info bar
    info1: 'جاموس نقي ١٠٠٪',
    info2: 'دفعات يومية',
    info3: 'للزجاجة',
    info4: 'ريال / زجاجة',

    // Contact
    contactTitle: 'تواصل معنا',
    contactSub: 'نرحب بكم في المزرعة للاستلام',
    label1: '📞 الهاتف',
    muted1: 'متاح يومياً',
    label2: '📍 الموقع',
    muted2: 'الاستلام من المزرعة',
    label3: '🕐 ساعات الاستلام',
    val3: '٦ص – ١٠م',
    muted3: 'كل يوم',
    label4: '💬 واتساب',
    val4: 'راسلنا',

    // Footer
    footerSub: 'حليب جاموس طازج ولبن · ١٫٥٠٠ ريال · احجز أونلاين واستلم طازجاً',

    // Modal
    modalMilk: 'حليب الجاموس — ١٫٥ لتر',
    modalLaban: 'لبن طازج — ١٫٥ لتر',
    labelName: 'الاسم الكامل',
    placeholderName: 'اسمك...',
    labelPhone: 'رقم الهاتف',
    labelDate: 'تاريخ الاستلام',
    labelQty: 'الكمية',
    cancelBtn: 'إلغاء',
    confirmBtn: 'تأكيد الحجز ✓',
    waSendBtn: 'إرسال الحجز عبر واتساب',
    alertMsg: 'الرجاء إدخال اسمك ورقم هاتفك.',
    toastMsg: '✅ تم الحجز! نراكم عند الاستلام 🐃',

    // WhatsApp messages
    quickMsg: (product) =>
      `مرحباً بمزرعة البركة 🐃\n\nأود الحجز: ${product} (١٫٥ لتر)\nالسعر: ١٫٥٠٠ ريال\n\nأرجو تأكيد التوفر!`,
    fullMsg: (name, product, qty, total, date) =>
      `مرحباً بمزرعة البركة 🐃\n\nحجز جديد:\n👤 الاسم: ${name}\n🛒 المنتج: ${product}\n📦 الكمية: ${qty} زجاجة\n💰 الإجمالي: ${total} ريال\n📅 الاستلام: ${date}\n\nأرجو التأكيد. شكراً!`,
  },
}

export default translations
