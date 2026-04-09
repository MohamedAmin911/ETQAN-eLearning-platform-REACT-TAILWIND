export const courseCategories = ['all', 'development', 'design', 'business']

export const categoryLabels = {
  all: 'الكل',
  development: 'برمجة',
  design: 'تصميم',
  business: 'أعمال',
}

export const courses = [
  {
    id: 'ux-advanced',
    slug: 'ux-advanced',
    title: 'أساسيات وتجارب متقدمة في تجربة المستخدم',
    category: 'design',
    price: 89,
    originalPrice: 149,
    rating: 4.9,
    reviews: 1240,
    students: 12400,
    duration: '18 ساعة',
    level: 'متوسط',
    lessons: 24,
    badge: 'الأكثر مبيعاً',
    instructorId: 'ahmed-kamal',
    image:
      'https://www.uxdesigninstitute.com/blog/wp-content/uploads/2025/02/156_UX_Definition_Illustration_blog.png',
    description:
      'رحلة عملية لبناء واجهات واضحة ومنتجات رقمية توازن بين الجمال وسهولة الاستخدام.',
    previewImage:
      'https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/4084859/cover_image/retina_1708x683/0620_UX_Analysis_Lina_Newsletter-462f3e621ad3af365e6ec50534444e28.png',
    includes: [
      '18 ساعة من الفيديو المسجل',
      '24 درساً تطبيقياً',
      '8 ملفات عمل قابلة للتحميل',
      'وصول مدى الحياة',
      'شهادة إتمام معتمدة',
    ],
    curriculum: [
      {
        id: 'ux-module-1',
        title: 'أساسيات التفكير التصميمي',
        duration: '45 دقيقة',
        lessons: [
          { id: 'ux-1', title: 'مقدمة في فلسفة تجربة المستخدم', duration: '12:00' },
          { id: 'ux-2', title: 'فهم احتياجات المستخدم والسياق', duration: '15:30' },
          { id: 'ux-3', title: 'رحلات الاستخدام وبناء السيناريوهات', duration: '17:30' },
        ],
      },
      {
        id: 'ux-module-2',
        title: 'بناء الواجهات القابلة للاختبار',
        duration: '1 ساعة 20 دقيقة',
        lessons: [
          { id: 'ux-4', title: 'الـ Wireframes والنماذج الأولية', duration: '24:00' },
          { id: 'ux-5', title: 'اختبارات الاستخدام وتحليل النتائج', duration: '28:00' },
          { id: 'ux-6', title: 'تحسينات النسخة النهائية', duration: '28:00' },
        ],
      },
    ],
    testimonials: [
      {
        name: 'أحمد منصور',
        rating: 5,
        text: 'دورة استثنائية غيرت طريقتي في النظر للمنتجات الرقمية ومكنتني من تحسين عملي بسرعة.',
      },
      {
        name: 'سارة العتيبي',
        rating: 4,
        text: 'المحتوى غني جداً والتدريبات العملية مفيدة للغاية، خصوصاً في مرحلة اختبار الاستخدام.',
      },
    ],
  },
  {
    id: 'react-modern',
    slug: 'react-modern',
    title: 'بناء تطبيقات الويب الحديثة باستخدام React',
    category: 'development',
    price: 0,
    originalPrice: 0,
    rating: 4.7,
    reviews: 980,
    students: 9200,
    duration: '12 ساعة',
    level: 'مبتدئ',
    lessons: 16,
    badge: 'مجاني',
    instructorId: 'sara-mahmoud',
    image:
'https://miro.medium.com/v2/resize:fit:1400/0*hZK1xVsaAFVjlEyB.jpeg',
    description:
      'من الأساسيات حتى بناء مكونات قابلة لإعادة الاستخدام والتعامل مع الحالة والواجهات المتقدمة.',
    previewImage:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    includes: [
      '12 ساعة فيديو',
      'مشروعان عمليان',
      'قوالب جاهزة للانطلاق',
      'وصول دائم',
    ],
    curriculum: [
      {
        id: 'react-module-1',
        title: 'أساسيات React',
        duration: '50 دقيقة',
        lessons: [
          { id: 'react-1', title: 'المكونات والخصائص', duration: '18:00' },
          { id: 'react-2', title: 'الحالة والأحداث', duration: '16:00' },
          { id: 'react-3', title: 'إدارة القوائم والنماذج', duration: '16:00' },
        ],
      },
    ],
    testimonials: [],
  },
  {
    id: 'marketing-2024',
    slug: 'marketing-2024',
    title: 'استراتيجيات التسويق الرقمي 2024',
    category: 'business',
    price: 120,
    originalPrice: 180,
    rating: 5,
    reviews: 620,
    students: 5400,
    duration: '14 ساعة',
    level: 'متقدم',
    lessons: 19,
    badge: 'جديد',
    instructorId: 'fahad-alotaibi',
    image:
'https://media.geeksforgeeks.org/wp-content/uploads/20231117175150/marketing-landing-page.webp',
    description:
      'خطة تنفيذية متكاملة لإدارة القنوات التسويقية وقياس الأداء وتحسين العائد من الحملات.',
    previewImage:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    includes: ['14 ساعة فيديو', 'أدوات تخطيط عملية', 'قوالب حملات', 'شهادة معتمدة'],
    curriculum: [
      {
        id: 'marketing-module-1',
        title: 'بناء الاستراتيجية',
        duration: '1 ساعة',
        lessons: [
          { id: 'm-1', title: 'تحليل السوق', duration: '20:00' },
          { id: 'm-2', title: 'تقسيم الجمهور', duration: '18:00' },
          { id: 'm-3', title: 'تحديد الرسالة', duration: '22:00' },
        ],
      },
    ],
    testimonials: [],
  },
  {
    id: 'product-storytelling',
    slug: 'product-storytelling',
    title: 'الكتابة التسويقية وسرد القصة للمنتجات الرقمية',
    category: 'business',
    price: 64,
    originalPrice: 94,
    rating: 4.6,
    reviews: 410,
    students: 3100,
    duration: '8 ساعات',
    level: 'مبتدئ',
    lessons: 11,
    badge: 'مميز',
    instructorId: 'reem-alhashmi',
    image:
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80',
    description:
      'تعلم كيف تبني لغة مقنعة ورسائل واضحة ترفع قيمة المنتج وتزيد التحويل.',
    previewImage:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    includes: ['8 ساعات فيديو', 'تمارين كتابة', 'ملفات قابلة للتنزيل'],
    curriculum: [],
    testimonials: [],
  },
  {
    id: 'figma-systems',
    slug: 'figma-systems',
    title: 'بناء Design Systems احترافية في Figma',
    category: 'design',
    price: 95,
    originalPrice: 130,
    rating: 4.8,
    reviews: 705,
    students: 6700,
    duration: '10 ساعات',
    level: 'متوسط',
    lessons: 15,
    badge: 'مفضل',
    instructorId: 'layan-mostafa',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    description:
      'نظام عملي لبناء مكتبات مكونات قابلة للتوسع والتسليم المنظم بين التصميم والتطوير.',
    previewImage:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    includes: ['10 ساعات فيديو', 'مكتبة مكونات جاهزة', 'قوالب Figma'],
    curriculum: [],
    testimonials: [],
  },
  {
    id: 'node-apis',
    slug: 'node-apis',
    title: 'تصميم واجهات API وبناء خدمات Node.js قابلة للتوسع',
    category: 'development',
    price: 110,
    originalPrice: 170,
    rating: 4.9,
    reviews: 560,
    students: 4300,
    duration: '20 ساعة',
    level: 'متقدم',
    lessons: 28,
    badge: 'احترافي',
    instructorId: 'mohammed-alsharif',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
    description:
      'من هيكلة الخدمات وحتى المصادقة والأداء والاختبارات لنقل تطبيقاتك إلى مستوى إنتاجي.',
    previewImage:
      'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=1200&q=80',
    includes: ['20 ساعة فيديو', 'بنية مشروع جاهزة', 'اختبارات وملفات API'],
    curriculum: [],
    testimonials: [],
  },
]

export const products = courses
