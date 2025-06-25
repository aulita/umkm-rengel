const products = [
  {
    id: 1,
    name: "Avocado Kocok & Dragon Kocok",
    description: "Minuman segar kekinian dengan bahan buah asli.",
    fullDescription:
      "Minuman segar kekinian dengan bahan buah asli. Produk ini disajikan dengan kualitas terbaik dan harga terjangkau. Cocok untuk berbagai suasana, dari santai hingga acara spesial.",
    price: "Rp7.000 - Rp13.000",
    image: "img/avocado_kocok.jpg",
  },
  ,
  {
    id: 2,
    name: "Kedai Food & Drink",
    description:
      "Kedai sederhana dengan sajian makanan dan minuman rumahan yang nikmat dan terjangkau.",
    fullDescription:
      "Kedai sederhana dengan sajian makanan dan minuman rumahan yang nikmat dan terjangkau. Produk ini disajikan dengan kualitas terbaik dan harga terjangkau. Cocok untuk berbagai suasana, dari santai hingga acara spesial.",
    price: "Rp2.000 - Rp 10.000",
    image: "img/food_drink.png",
  },
  ,
  {
    id: 3,
    name: "Kedai AA",
    description:
      "Nikmati aneka jajanan pedas dan gurih yang bikin nagih! Cocok buat penikmat makanan berbumbu kuat dan topping melimpah. Harga ramah di kantong, rasa luar biasa!",
    fullDescription:
      "Nikmati aneka jajanan pedas dan gurih yang bikin nagih! Cocok buat penikmat makanan berbumbu kuat dan topping melimpah. Harga ramah di kantong, rasa luar biasa! Produk ini disajikan dengan kualitas terbaik dan harga terjangkau. Cocok untuk berbagai suasana, dari santai hingga acara spesial.",
    price: "Rp6.000",
    image: "img/kedai_AA.png",
  },
  ,
  {
    id: 4,
    name: "Lumpia, Roti Goreng, Molen, Cakwe",
    description: "Cocok untuk teman ngopi, acara keluarga, atau bekal harian.",
    fullDescription:
      "Cocok untuk teman ngopi, acara keluarga, atau bekal harian. Produk ini disajikan dengan kualitas terbaik dan harga terjangkau. Cocok untuk berbagai suasana, dari santai hingga acara spesial.",
    price: "Rp1.000",
    image: "img/lumpia.png",
  },
  ,
  {
    id: 5,
    name: "Queen Seblak",
    description:
      "Nikmati sensasi pedas gurih dari Seblak Prasmanan yang menggugah selera! Disajikan dengan pilihan toping beragam.",
    fullDescription:
      "Nikmati sensasi pedas gurih dari Seblak Prasmanan yang menggugah selera! Disajikan dengan pilihan toping beragam. Produk ini disajikan dengan kualitas terbaik dan harga terjangkau. Cocok untuk berbagai suasana, dari santai hingga acara spesial.",
    price: "Rp500",
    image: "img/queen_seblak.png",
  },
  ,
  {
    id: 6,
    name: "Mie Jebew",
    description: "Cocok untuk teman ngopi, acara keluarga, atau bekal harian.",
    fullDescription:
      "Cocok untuk teman ngopi, acara keluarga, atau bekal harian. Produk ini disajikan dengan kualitas terbaik dan harga terjangkau. Cocok untuk berbagai suasana, dari santai hingga acara spesial.",
    price: "Rp2.000 - Rp10.000",
    image: "img/borcelle.png",
  },
  ,
  {
    id: 7,
    name: "Cemilan Manis ala Ana’s House",
    description:
      "Cemilan dingin anti bosan! Ada puding buah, sirup buah, dan cokelat susu. Manisnya pas, harganya irit – cuma 4K!",
    fullDescription:
      "Cemilan dingin anti bosan! Ada puding buah, sirup buah, dan cokelat susu. Manisnya pas, harganya irit – cuma 4K! Produk ini disajikan dengan kualitas terbaik dan harga terjangkau. Cocok untuk berbagai suasana, dari santai hingga acara spesial.",
    price: "Rp4.000",
    image: "img/cemilan.png",
  },
  ,
  {
    id: 8,
    name: "Kedai Empek-Empek 86 Masuk Pak Eko",
    description:
      "Empek-empek gurih dengan isian ikan yang kenyal dan nikmat, disajikan dengan cuko khas Palembang yang pedas-manis. Camilan murah meriah, bikin nagih!",
    fullDescription:
      "Empek-empek gurih dengan isian ikan yang kenyal dan nikmat, disajikan dengan cuko khas Palembang yang pedas-manis. Camilan murah meriah, bikin nagih! Produk ini disajikan dengan kualitas terbaik dan harga terjangkau. Cocok untuk berbagai suasana, dari santai hingga acara spesial.",
    price: "Rp2.500",
    image: "img/empek_empek.png",
  },
  ,
  {
    id: 9,
    name: "Kedai Embong",
    description:
      "Aneka makanan rumahan dan minuman segar dengan harga ramah di kantong.",
    fullDescription:
      "Aneka makanan rumahan dan minuman segar dengan harga ramah di kantong. Produk ini disajikan dengan kualitas terbaik dan harga terjangkau. Cocok untuk berbagai suasana, dari santai hingga acara spesial.",
    price: "Rp6.000",
    image: "img/kedai_embong.png",
  },
  ,
  {
    id: 10,
    name: "Kedai Mommy D Food And Drink",
    description:
      "Cemilan dan jajanan kekinian, cocok untuk semua suasana dan selera.",
    fullDescription:
      "Cemilan dan jajanan kekinian, cocok untuk semua suasana dan selera. Produk ini disajikan dengan kualitas terbaik dan harga terjangkau. Cocok untuk berbagai suasana, dari santai hingga acara spesial.",
    price: "Rp3.000 - Rp 15.000",
    image: "img/kedai_mommy_D.png",
  },
  ,
  {
    id: 11,
    name: "Kedai SKY",
    description:
      "Hidangan pisang kekinian, seblak pedas, dan minuman hangat maupun dingin yang nikmat.",
    fullDescription:
      "Hidangan pisang kekinian, seblak pedas, dan minuman hangat maupun dingin yang nikmat. Produk ini disajikan dengan kualitas terbaik dan harga terjangkau. Cocok untuk berbagai suasana, dari santai hingga acara spesial.",
    price: "Rp6.000",
    image: "img/kedai_sky.png",
  },
  ,
  {
    id: 12,
    name: "Warung Mbok Nes",
    description:
      "Menu pedas khas rumahan seperti rica-rica dan bumbu kering yang bikin nagih!",
    fullDescription:
      "Menu pedas khas rumahan seperti rica-rica dan bumbu kering yang bikin nagih! Produk ini disajikan dengan kualitas terbaik dan harga terjangkau. Cocok untuk berbagai suasana, dari santai hingga acara spesial.",
    price: "Rp10.000",
    image: "img/mbok_nes.png",
  },
  ,
  {
    id: 13,
    name: "Ngeperas jeruk",
    description: "Minuman segar dengan perasan jeruk asli.",
    fullDescription:
      "Minuman segar dengan perasan jeruk asli. Produk ini disajikan dengan kualitas terbaik dan harga terjangkau. Cocok untuk berbagai suasana, dari santai hingga acara spesial.",
    price: "Rp3.000",
    image: "img/ngeperas_jeruk.png",
  },
  ,
  {
    id: 14,
    name: "Oyefood",
    description:
      "Oyefood menyajikan es jagung manis Hawai yang lezat. Tersedia layanan antar untuk pemesanan 2 cup atau lebih di area Rengel.",
    fullDescription:
      "Oyefood menyajikan es jagung manis Hawai yang lezat. Tersedia layanan antar untuk pemesanan 2 cup atau lebih di area Rengel. Produk ini disajikan dengan kualitas terbaik dan harga terjangkau. Cocok untuk berbagai suasana, dari santai hingga acara spesial.",
    price: "Rp5.000",
    image: "img/es_jagung.png",
  },
  ,
  {
    id: 15,
    name: "Kedai Berkah",
    description:
      "Sajian lengkap es, jajanan, dan camilan untuk berbagai selera.",
    fullDescription:
      "Sajian lengkap es, jajanan, dan camilan untuk berbagai selera. Produk ini disajikan dengan kualitas terbaik dan harga terjangkau. Cocok untuk berbagai suasana, dari santai hingga acara spesial.",
    price: "Rp5.000",
    image: "img/kedai_berkah.png",
  },
  ,
  {
    id: 16,
    name: "TahooBaxoo",
    description:
      "Nikmati TahooBaxoo, tahu bakso dengan tekstur renyah dan lembut, tersedia dalam berbagai varian topping.",
    fullDescription:
      "Nikmati TahooBaxoo, tahu bakso dengan tekstur renyah dan lembut, tersedia dalam berbagai varian topping. Produk ini disajikan dengan kualitas terbaik dan harga terjangkau. Cocok untuk berbagai suasana, dari santai hingga acara spesial.",
    price: "Rp3.000",
    image: "img/TahooBaxoo.png",
  },
  ,
  {
    id: 17,
    name: "Seblak",
    description:
      "Nikmati Seblak Pemula dengan rasa istimewa yang siap memanjakan lidahmu.",
    fullDescription:
      "Nikmati Seblak Pemula dengan rasa istimewa yang siap memanjakan lidahmu. Produk ini disajikan dengan kualitas terbaik dan harga terjangkau. Cocok untuk berbagai suasana, dari santai hingga acara spesial.",
    price: "Rp12.000",
    image: "img/seblak.png",
  },
  ,
  {
    id: 18,
    name: "Kedai Bintang Sembilan",
    description:
      "Kedai Bintang Sembilan menawarkan beragam hidangan lezat, mulai dari aneka nasi goreng, mie, olahan sayur, hingga Chinese fusion.",
    fullDescription:
      "Kedai Bintang Sembilan menawarkan beragam hidangan lezat, mulai dari aneka nasi goreng, mie, olahan sayur, hingga Chinese fusion. Produk ini disajikan dengan kualitas terbaik dan harga terjangkau. Cocok untuk berbagai suasana, dari santai hingga acara spesial.",
    price: "Rp10.000",
    image: "img/kedai_bintang_sembilan.png",
  },
  ,
  {
    id: 19,
    name: "Bakso Sapi YS",
    description:
      "Bakso Sapi YS menawarkan bakso daging sapi yang lezat dengan berbagai pilihan menu, mulai dari bakso biasa, tetelan, hingga bakso komplit. Tersedia juga aneka minuman segar.",
    fullDescription:
      "Bakso Sapi YS menawarkan bakso daging sapi yang lezat dengan berbagai pilihan menu, mulai dari bakso biasa, tetelan, hingga bakso komplit. Tersedia juga aneka minuman segar. Produk ini disajikan dengan kualitas terbaik dan harga terjangkau. Cocok untuk berbagai suasana, dari santai hingga acara spesial.",
    price: "Rp10.000",
    image: "img/bakso_ys.png",
  },
  ,
  {
    id: 20,
    name: "Shangkara Food & Drinks",
    description:
      "Shangkara Food & Drinks menawarkan beragam pilihan makanan dan minuman dengan harga terjangkau.",
    fullDescription:
      "Shangkara Food & Drinks menawarkan beragam pilihan makanan dan minuman dengan harga terjangkau. Produk ini disajikan dengan kualitas terbaik dan harga terjangkau. Cocok untuk berbagai suasana, dari santai hingga acara spesial.",
    price: "Rp1.000",
    image: "img/shangkara.png",
  },
  ,
  {
    id: 21,
    name: "Recoffery Rengel",
    description:
      "Recoffery Rengel menawarkan paket super hemat mulai dari Rp 7.000, dengan berbagai pilihan menu seperti nasi pecel, lele, dan ayam.",
    fullDescription:
      "Recoffery Rengel menawarkan paket super hemat mulai dari Rp 7.000, dengan berbagai pilihan menu seperti nasi pecel, lele, dan ayam. Produk ini disajikan dengan kualitas terbaik dan harga terjangkau. Cocok untuk berbagai suasana, dari santai hingga acara spesial.",
    price: "Rp7.000 - Rp13.000",
    image: "img/recoffery.png",
  },
  ,
  {
    id: 22,
    name: "Angkringan Laperpool",
    description:
      "Angkringan Laperpool menyediakan aneka makanan dan minuman dengan harga mulai 2000-an.",
    fullDescription:
      "Angkringan Laperpool menyediakan aneka makanan dan minuman dengan harga mulai 2000-an. Produk ini disajikan dengan kualitas terbaik dan harga terjangkau. Cocok untuk berbagai suasana, dari santai hingga acara spesial.",
    price: "Rp2.000",
    image: "img/angkringan.png",
  },
  ,
  {
    id: 23,
    name: "Roti Bakar Selera",
    description:
      "Roti Bakar Selera menawarkan Variant Rasa roti bakar dengan 100% asli dibakar. Tersedia berbagai pilihan rasa seperti mentega susu, cokelat, stroberi, nanas, bluberi, keju, tiramisu, dan banyak lagi.",
    fullDescription:
      "Roti Bakar Selera menawarkan Variant Rasa roti bakar dengan 100% asli dibakar. Tersedia berbagai pilihan rasa seperti mentega susu, cokelat, stroberi, nanas, bluberi, keju, tiramisu, dan banyak lagi. Produk ini disajikan dengan kualitas terbaik dan harga terjangkau. Cocok untuk berbagai suasana, dari santai hingga acara spesial.",
    price: "Rp8.000",
    image: "img/roti_bakar_selera.png",
  },
  ,
  {
    id: 24,
    name: "Es Klasik: Podeng dan Kopyor",
    description:
      "Es Klasik: Podeng dan Kopyor, minuman manis dan segar yang memadukan kelezatan es podeng dengan kelembutan es kopyor, cocok untuk melepas dahaga.",
    fullDescription:
      "Es Klasik: Podeng dan Kopyor, minuman manis dan segar yang memadukan kelezatan es podeng dengan kelembutan es kopyor, cocok untuk melepas dahaga. Produk ini disajikan dengan kualitas terbaik dan harga terjangkau. Cocok untuk berbagai suasana, dari santai hingga acara spesial.",
    price: "Rp5.000",
    image: "img/Espodeng_eskopyor.png",
  },
  ,
  {
    id: 25,
    name: "Cemilan Dapur Ibuk",
    description:
      "Cemilan Dapur Ibuk menyediakan Cireng Isi Ayam yang lezat dan juga minuman segar 250ml",
    fullDescription:
      "Cemilan Dapur Ibuk menyediakan Cireng Isi Ayam yang lezat dan juga minuman segar 250ml Produk ini disajikan dengan kualitas terbaik dan harga terjangkau. Cocok untuk berbagai suasana, dari santai hingga acara spesial.",
    price: "Rp1.500",
    image: "img/dapur_ibuk.png",
  },
  ,
  {
    id: 26,
    name: "Cemilan DBL Food",
    description:
      "Cemilan DBL Food menyediakan berbagai pilihan cemilan enak seperti sosis bakaran, springroll, risol mayo, cireng, stiky milk, dan es mojito. ",
    fullDescription:
      "Cemilan DBL Food menyediakan berbagai pilihan cemilan enak seperti sosis bakaran, springroll, risol mayo, cireng, stiky milk, dan es mojito.  Produk ini disajikan dengan kualitas terbaik dan harga terjangkau. Cocok untuk berbagai suasana, dari santai hingga acara spesial.",
    price: "Rp1.000 - Rp10.000",
    image: "img/dbl_food.png",
  },
  ,
  {
    id: 27,
    name: "FJA MANGO",
    description:
      "FJA MANGO menawarkan berbagai olahan mangga dan kedondong yang segar, seperti rujak mekar, manisan & asinan mangga, mangga gading, kedondong cocol, manisan & asinan kedondong, dan mangga cocol.",
    fullDescription:
      "FJA MANGO menawarkan berbagai olahan mangga dan kedondong yang segar, seperti rujak mekar, manisan & asinan mangga, mangga gading, kedondong cocol, manisan & asinan kedondong, dan mangga cocol. Produk ini disajikan dengan kualitas terbaik dan harga terjangkau. Cocok untuk berbagai suasana, dari santai hingga acara spesial.",
    price: "Rp5.000 - Rp25.000",
    image: "img/fja_mango.png",
  },
  ,
  {
    id: 28,
    name: "Ayam Utuh mbak Nay",
    description:
      "Ayam Utuh Mbak Nay menawarkan ayam utuh satu ekor yang lebih besar, enak, dan empuk. Tersedia juga ayam geprek, aneka sosis, dan es.",
    fullDescription:
      "Ayam Utuh Mbak Nay menawarkan ayam utuh satu ekor yang lebih besar, enak, dan empuk. Tersedia juga ayam geprek, aneka sosis, dan es. Produk ini disajikan dengan kualitas terbaik dan harga terjangkau. Cocok untuk berbagai suasana, dari santai hingga acara spesial.",
    price: "Rp2.000 - Rp50.000",
    image: "img/ayam_utuh_mbak_nay.png",
  },
  ,
  {
    id: 29,
    name: "Es teler Bunda",
    description:
      "Es Teler Bunda menawarkan berbagai varian es teler yang lezat: Es Teler Creamy, Es Teler Ice Cream, Es Teler Topping Keju, Es Teler Full Topping Keju, dan Es Teler Topping Durian. Tersedia dalam cup kecil, besar, dan jumbo.",
    fullDescription:
      "Es Teler Bunda menawarkan berbagai varian es teler yang lezat: Es Teler Creamy, Es Teler Ice Cream, Es Teler Topping Keju, Es Teler Full Topping Keju, dan Es Teler Topping Durian. Tersedia dalam cup kecil, besar, dan jumbo. Produk ini disajikan dengan kualitas terbaik dan harga terjangkau. Cocok untuk berbagai suasana, dari santai hingga acara spesial.",
    price: "Rp5.000",
    image: "img/es_teler_bunda.png",
  },
  ,
  {
    id: 30,
    name: "Es Teler Cremy By GGe",
    description:
      "Es Teler Creamy by GGe menawarkan berbagai varian Es Teler. Selain itu, tersedia juga Alpukat Kocok dalam berbagai varian juga.",
    fullDescription:
      "Es Teler Creamy by GGe menawarkan berbagai varian Es Teler. Selain itu, tersedia juga Alpukat Kocok dalam berbagai varian juga. Produk ini disajikan dengan kualitas terbaik dan harga terjangkau. Cocok untuk berbagai suasana, dari santai hingga acara spesial.",
    price: "Rp10.000",
    image: "img/Es_Teler_Cremy_By_GGe.png",
  },
  ,
  {
    id: 31,
    name: "Kaichi Bread",
    description:
      "Kaichi Bread menyajikan donat lembut dan bikin nagih, dibuat dari bahan pilihan.",
    fullDescription:
      "Kaichi Bread menyajikan donat lembut dan bikin nagih, dibuat dari bahan pilihan. Produk ini disajikan dengan kualitas terbaik dan harga terjangkau. Cocok untuk berbagai suasana, dari santai hingga acara spesial.",
    price: "Rp11.000 - Rp60.000",
    image: "img/Kaichi_bread.png",
  },
  ,
  {
    id: 32,
    name: "Dapur RIO",
    description:
      "Dapur RIO menyajikan berbagai makanan dan minuman dengan cita rasa mantap. ",
    fullDescription:
      "Dapur RIO menyajikan berbagai makanan dan minuman dengan cita rasa mantap.  Produk ini disajikan dengan kualitas terbaik dan harga terjangkau. Cocok untuk berbagai suasana, dari santai hingga acara spesial.",
    price: "Rp2.500 - Rp10.000",
    image: "img/dapur_rio.png",
  },
  ,
  {
    id: 33,
    name: "Omah Mie & Steak",
    description:
      "Omah Mie & Steak menyediakan berbagai pilihan mie level dan steak.",
    fullDescription:
      "Omah Mie & Steak menyediakan berbagai pilihan mie level dan steak. Produk ini disajikan dengan kualitas terbaik dan harga terjangkau. Cocok untuk berbagai suasana, dari santai hingga acara spesial.",
    price: "Rp7.000",
    image: "img/Omahmie_steak.png",
  },
  ,
  {
    id: 34,
    name: "Es Teler Creamy Khanza",
    description:
      "Es Teler Creamy Khanza adalah menu spesial yang disajikan dalam dua ukuran: cup kecil dan cup besar",
    fullDescription:
      "Es Teler Creamy Khanza adalah menu spesial yang disajikan dalam dua ukuran: cup kecil dan cup besar Produk ini disajikan dengan kualitas terbaik dan harga terjangkau. Cocok untuk berbagai suasana, dari santai hingga acara spesial.",
    price: "Rp5.000 - Rp10.000",
    image: "img/Es_teler_creamy_Khanza.png",
  },
  ,
  {
    id: 35,
    name: "Risol Gemoy",
    description:
      "Risol Gemoy: Risol Ayam, Mayo, Sayur, dan Martabak Mini. Nikmatnya pas di kantong!",
    fullDescription:
      "Risol Gemoy: Risol Ayam, Mayo, Sayur, dan Martabak Mini. Nikmatnya pas di kantong! Produk ini disajikan dengan kualitas terbaik dan harga terjangkau. Cocok untuk berbagai suasana, dari santai hingga acara spesial.",
    price: "Rp2.000",
    image: "img/risol_mayo.png",
  },
  ,
  {
    id: 36,
    name: "Dimsum Moody",
    description:
      "Dimsum Moody: Nikmati Dimsum Original, Mentai, Bolognese, Udang Keju, dan Gyoza.",
    fullDescription:
      "Dimsum Moody: Nikmati Dimsum Original, Mentai, Bolognese, Udang Keju, dan Gyoza. Produk ini disajikan dengan kualitas terbaik dan harga terjangkau. Cocok untuk berbagai suasana, dari santai hingga acara spesial.",
    price: "Rp10.000 - Rp38.000",
    image: "img/dimsum_moody.png",
  },
  ,
  {
    id: 37,
    name: "Cimory & Kenzler",
    description:
      "Cimory & Kenzler: Segarnya Cimory, lezatnya Kenzler. Lengkap dalam satu tempat!",
    fullDescription:
      "Cimory & Kenzler: Segarnya Cimory, lezatnya Kenzler. Lengkap dalam satu tempat! Produk ini disajikan dengan kualitas terbaik dan harga terjangkau. Cocok untuk berbagai suasana, dari santai hingga acara spesial.",
    price: "Rp3.000 - Rp10.000",
    image: "img/cimory.png",
  },
  ,
  {
    id: 38,
    name: "Raja Ngemil",
    description: "Raja Ngemil: Solusi lapar dadakan, aneka jajanan pilihan!",
    fullDescription:
      "Raja Ngemil: Solusi lapar dadakan, aneka jajanan pilihan! Produk ini disajikan dengan kualitas terbaik dan harga terjangkau. Cocok untuk berbagai suasana, dari santai hingga acara spesial.",
    price: "Rp4.000 - Rp10.000",
    image: "img/raja_ngemil.png",
  },
];

console.log("Jumlah produk:", products.length);
