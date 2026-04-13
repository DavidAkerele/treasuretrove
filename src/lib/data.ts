export const brands = [
  {
    id: 'brother',
    name: 'Brother',
    description: 'A titan in industrial and domestic sewing, Brother Industries has delivered precision engineering and high-volume reliability since 1908. Favored by tailoring workshops worldwide for consistent, heavy-duty production.',
    logoUrl: '/TREASURE TROVE LOGO.png'
  },
  {
    id: 'juki',
    name: 'Juki',
    description: 'The undisputed backbone of global clothing manufacturing. Juki machines are revered across Saville Row and international factories for their unmatched speed, durability, and commercial-grade lockstitching perfection.',
    logoUrl: '/TREASURE TROVE LOGO.png'
  },
  {
    id: 'janome',
    name: 'Janome',
    description: 'Pioneers of the accessible machine market. Japanese-engineered Janome models are beloved by independent designers and students for their intuitive interfaces, robust build quality, and creative versatility.',
    logoUrl: '/TREASURE TROVE LOGO.png'
  },
  {
    id: 'bernina',
    name: 'Bernina',
    description: 'Swiss precision since 1893. Bernina is the peak of high-end domestic and semi-industrial sewing, beloved by quilters and designers for their flawless stitch quality and legendary durability.',
    logoUrl: '/bernina.webp'
  },
  {
    id: 'bernette',
    name: 'Bernette',
    description: 'A brand of the BERNINA Textile Group. Bernette machines are known for being trend-setting, easy to use, and packed with features at an attractive price point.',
    logoUrl: '/bernette.webp'
  },
  {
    id: 'elna',
    name: 'Elna',
    description: 'A symbol of quality, innovation, and service. Elna machines are designed to be intuitive and creative, making sewing an enjoyable experience for everyone.',
    logoUrl: '/elna.jpg'
  },
  {
    id: 'babylock',
    name: 'Baby Lock',
    description: 'The world leader in sergers and overlockers. Baby Lock revolutionized home sewing with the first domestic overlocker and continues to lead with Jet-Air Threading technology.',
    logoUrl: '/babylock.webp'
  },
  {
    id: 'jack',
    name: 'Jack',
    description: 'Modern, innovative, and highly efficient. Jack sewing mechanics lead the modern industry in integrating direct-drive servo motors with advanced automated tailoring mechanisms.',
    logoUrl: '/TREASURE TROVE LOGO.png'
  },
  {
    id: 'pfaff',
    name: 'Pfaff',
    description: 'Legendary German engineering since 1862. Pfaff is universally recognized for its flawless heavy-duty walking foot mechanisms and unmatched capability with leather and thick fabrics.',
    logoUrl: '/TREASURE TROVE LOGO.png'
  },
  {
    id: 'singer',
    name: 'Singer',
    description: 'The original name in sewing history. Synonymous with traditional tailoring heritage, Singer continues to combine legacy aesthetics with reliable, sturdy mechanics.',
    logoUrl: '/TREASURE TROVE LOGO.png'
  },
  {
    id: 'husqvarna',
    name: 'Husqvarna Viking',
    description: 'Swedish innovation and high-performance engineering. Husqvarna Viking is a leader in computerized garment construction and expressive embroidery technology for the modern studio.',
    logoUrl: '/TREASURE TROVE LOGO.png'
  },
  {
    id: 'merrow',
    name: 'Merrow',
    description: 'The original inventor of the overlock machine. Merrow continues to define industrial edging with robust, specialized machines for heavy textiles and decorative finishing.',
    logoUrl: '/merrow-logo.png'
  }
];

export const machines = [
  // JUKI
  {
    id: 'juki-ddl-7000a',
    brandId: 'juki',
    title: 'JUKI DDL-7000A Lockstitch',
    body: 'High-speed, direct-drive, 1-needle lockstitch machine with automatic thread trimmer.',
    src: 'https://impro.usercontent.one/appid/oneComWsb/domain/treasuretrovesewingmachines.com/media/treasuretrovesewingmachines.com/onewebmedia/ddl-7000a.jpg',
    alt: 'JUKI DDL-7000A',
    price: 680,
    highlights: ['Direct-drive', 'Auto thread trimmer', 'Industrial grade'],
  },
  {
    id: 'juki-ddl-8700',
    brandId: 'juki',
    title: 'JUKI DDL-8700 Industrial',
    body: 'The global standard for high-speed lockstitching. Known for its quiet operation and consistent performance on light to medium fabrics.',
    src: 'https://impro.usercontent.one/appid/oneComWsb/domain/treasuretrovesewingmachines.com/media/treasuretrovesewingmachines.com/onewebmedia/shutterstock_1927236890.jpg',
    alt: 'JUKI DDL-8700',
    price: 620,
    highlights: ['5,500 stitches/min', 'Low vibration', 'Saville Row standard'],
  },
  {
    id: 'juki-dnu-1541',
    brandId: 'juki',
    title: 'JUKI DNU-1541 Walking Foot',
    body: 'Powerful walking foot machine designed for heavy materials like leather and upholstery. Essential for bag makers and furniture workshops.',
    src: 'https://impro.usercontent.one/appid/oneComWsb/domain/treasuretrovesewingmachines.com/media/treasuretrovesewingmachines.com/onewebmedia/istockphoto-939067016-612x612.jpg',
    alt: 'JUKI DNU-1541',
    price: 1450,
    highlights: ['Rectangular feed', 'Leather specialist', 'Triple feed'],
  },

  // BROTHER
  {
    id: 'brother-rh-9820',
    brandId: 'brother',
    title: 'Brother RH-9820',
    body: 'Electronic Eyelet Button Holer. Max sewing speed 2,500 rpm improves productivity.',
    src: 'https://impro.usercontent.one/appid/oneComWsb/domain/treasuretrovesewingmachines.com/media/treasuretrovesewingmachines.com/onewebmedia/Brother%20RH-9820.jpg',
    alt: 'Brother RH-9820',
    price: 1850,
    highlights: ['2,500 rpm max speed', 'Fine finishing', 'Electronic'],
  },
  {
    id: 'brother-s7100a',
    brandId: 'brother',
    title: 'Brother S-7100A Nexio',
    body: 'Direct-drive lockstitcher with electronic feed control. Exceptional at preventing needle breakage and puckering on fine fabrics.',
    src: 'https://impro.usercontent.one/appid/oneComWsb/domain/treasuretrovesewingmachines.com/media/treasuretrovesewingmachines.com/onewebmedia/Brother%207100A.jpg',
    alt: 'Brother S-7100A',
    price: 780,
    highlights: ['Nexio Technology', 'Anti-pucker system', 'Precision feed'],
  },
  {
    id: 'brother-fs40s',
    brandId: 'brother',
    title: 'Brother FS40S Computerised',
    body: 'An easy to use computerized sewing machine featuring an LCD display and a wealth of great features.',
    src: '/machine-domestic.png',
    alt: 'Brother FS40S',
    price: 249,
    highlights: ['40 Stitches', 'LCD Display', 'Start/Stop Button'],
  },

  // JANOME
  {
    id: 'janome-9300dx',
    brandId: 'janome',
    title: 'Janome 9300DX Overlock',
    body: 'A superb introductory level overlocker offering a wide range of features in a compact design.',
    src: 'https://impro.usercontent.one/appid/oneComWsb/domain/treasuretrovesewingmachines.com/media/treasuretrovesewingmachines.com/onewebmedia/9300.png',
    alt: 'Janome 9300DX',
    price: 245,
    highlights: ['Compact design', 'Instructional DVD', 'Sturdy build'],
  },
  {
    id: 'janome-hd9',
    brandId: 'janome',
    title: 'Janome HD9 Professional',
    body: 'The heavy-duty straight stitch machine of choice for high-volume designers. It combines industrial speed with domestic ease of use.',
    src: 'https://impro.usercontent.one/appid/oneComWsb/domain/treasuretrovesewingmachines.com/media/treasuretrovesewingmachines.com/onewebmedia/shutterstock_250777513.jpg',
    alt: 'Janome HD9',
    price: 995,
    highlights: ['1,600 SPM', 'Independent bobbin winding', 'Industrial tension'],
  },

  // BERNINA
  {
    id: 'bernina-b570qe',
    brandId: 'bernina',
    title: 'Bernina B 570 QE',
    body: 'The ultimate quilter\'s companion. Features the Bernina Stitch Regulator (BSR) and world-class embroidery capabilities.',
    src: 'https://impro.usercontent.one/appid/oneComWsb/domain/treasuretrovesewingmachines.com/media/treasuretrovesewingmachines.com/onewebmedia/SAM_1428-1050x1200.jpg',
    alt: 'Bernina B 570 QE',
    price: 2650,
    highlights: ['BSR Included', 'Dual Feed', 'Large bobbins'],
  },
  {
    id: 'bernina-b770-plus',
    brandId: 'bernina',
    title: 'Bernina 770 QE PLUS',
    body: 'New features for quilters, including more stitch patterns and the BSR 3 mode for basting.',
    src: '/machine-heavy-duty.png',
    alt: 'Bernina 770 QE PLUS',
    price: 4295,
    highlights: ['Extended freearm', 'Total stitch control', 'Quilting specialist'],
  },

  // BERNETTE
  {
    id: 'bernette-b77',
    brandId: 'bernette',
    title: 'Bernette b77 Sewing Machine',
    body: 'An affordable sewing machine with a wide range of functions and high stitch quality.',
    src: '/machine-domestic.png',
    alt: 'Bernette b77',
    price: 895,
    highlights: ['5-inch color touchscreen', 'Multi-function knobs', 'Programmable foot control'],
  },

  // ELNA
  {
    id: 'elna-550',
    brandId: 'elna',
    title: 'Elna eXperience 550',
    body: 'A reliable and intuitive computerized sewing machine designed to handle various types of fabrics.',
    src: '/machine-domestic.png',
    alt: 'Elna 550',
    price: 499,
    highlights: ['50 Built-in stitches', 'LCD screen', 'LED lighting'],
  },

  // BABY LOCK
  {
    id: 'babylock-victory',
    brandId: 'babylock',
    title: 'Baby Lock Victory Serger',
    body: 'Features RevolutionAir™ Threading that threads the loopers with just a touch of a button.',
    src: '/machine-overlocker.png',
    alt: 'Baby Lock Victory',
    price: 1995,
    highlights: ['Jet-Air Threading', 'Automatic Thread Delivery', 'Built-in needle threader'],
  },

  // JACK
  {
    id: 'jack-e4',
    brandId: 'jack',
    title: 'Jack E4-3-02 Overlock',
    body: '3-thread overlock with enclosed needle bar mechanism and integrated oil-filtering.',
    src: 'https://impro.usercontent.one/appid/oneComWsb/domain/treasuretrovesewingmachines.com/media/treasuretrovesewingmachines.com/onewebmedia/e4-3_result.jpg',
    alt: 'Jack E4-3-02',
    price: 520,
    highlights: ['Integrated servo motor', 'Oil-returning system', 'Heavy fabric capable'],
  },
  {
    id: 'jack-f4',
    brandId: 'jack',
    title: 'Jack F4 Direct Drive',
    body: 'High-speed lockstitch machine with an integrated direct drive motor for power saving.',
    src: '/machine-industrial.png',
    alt: 'Jack F4',
    price: 495,
    highlights: ['Energy efficient', 'Stitch length adjustment', 'Quiet operation'],
  },

  // PFAFF
  {
    id: 'pfaff-select42',
    brandId: 'pfaff',
    title: 'Pfaff Select 4.2',
    body: 'Featuring the legendary IDT system for even fabric feed. A robust, mechanical workhorse that handles denim and leather with ease.',
    src: 'https://impro.usercontent.one/appid/oneComWsb/domain/treasuretrovesewingmachines.com/media/treasuretrovesewingmachines.com/onewebmedia/rental_6.jpeg',
    alt: 'Pfaff Select 4.2',
    price: 590,
    highlights: ['IDT Dual Feed', 'Industrial hook', 'Deep penetration power'],
  },

  // SINGER
  {
    id: 'singer-4432',
    brandId: 'singer',
    title: 'Singer Heavy Duty 4432',
    body: 'Built for speed and durability. A true workhorse with a heavy-duty metal interior frame.',
    src: '/machine-heavy-duty.png',
    alt: 'Singer 4432',
    price: 369,
    highlights: ['32 Stitches', 'High-speed motor', 'Stainless steel bedplate'],
  },

  // HUSQVARNA
  {
    id: 'husqvarna-amber',
    brandId: 'husqvarna',
    title: 'Husqvarna Viking Amber S100',
    body: 'An easy to use overlocker that gives a professional finish to your projects.',
    src: '/machine-overlocker.png',
    alt: 'Husqvarna Amber',
    price: 349,
    highlights: ['4, 3, 2 Thread', 'Built-in rolled edge', 'Differential feed'],
  },

  // MERROW
  {
    id: 'merrow-mg3u',
    brandId: 'merrow',
    title: 'Merrow MG-3U Emblem',
    body: 'The world standard for emblem and badge edging. Produces a dense, beautiful decorative edge that is impossible to replicate on standard machines.',
    src: 'https://impro.usercontent.one/appid/oneComWsb/domain/treasuretrovesewingmachines.com/media/treasuretrovesewingmachines.com/onewebmedia/MERROW-27-FJ-TWO-IN-ONE-BLANKET-STITCH-overlocker%20%281%29.jpg',
    alt: 'Merrow MG-3U',
    price: 2400,
    highlights: ['Decorative edge', 'Industrial durability', 'Precision cams'],
  }
];
