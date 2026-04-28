// src/data/paguyuban.ts
const paguyuban: {
	name: string;
	description: string;
	image: string;
	slug: string; // Tambahkan slug
	location: string; // Lokasi atau daerah asal paguyuban
	longDescription?: string; // Deskripsi panjang untuk detail
	events?: {
		title: string;
		description: string;
	}[];
	gallery: {
		title: string;
		image: string;
	}[];
	contact: {
		name: string;
		link: string;
	};
}[] = [
	{
		name: 'GAPLEK ASRI INDONESIA-PURWOKERTO',
		slug: 'jawa-tengah',
		location: 'Jawa Tengah',
		description:
			'Organisasi Generasi Penerus Intelektual Asal Wonogiri-Indonesia Purwokerto yang bertujuan mewujudkan persatuan generasi asal Wonogiri. Wadah untuk menciptakan generasi yang bertaqwa, cerdas, inovatif, kreatif, berintergritas dan bertanggung jawab. Turut berpartisipasi dalam pembangunan dan pengembangan daerah Wonogiri.',
		longDescription:
			'Pendidikan memiliki peran sangat penting dalam kehidupan manusia dan suatu hal wajib yang harus didapatkan seluruh generasi yang lahir di Dunia. Pendidikan sebagai langkah awal untuk meneruskan dan membangun peradaban yang lebih baik. Indonesia merupakan Negara Kesatuan Republik Indonesia yang memiliki pedoman Pancasila dan UUD 1945 sebagai dasar serta pemersatu bangsa Indonesia. Bahkan dalam Pembukaan UUD 1945 Alinea ke-4 salah satu tujuan bangsa Indonesia adalah Mencerdaskan Kehidupan Bangsa, sebagaimana tujuan proses pembelajaran dalam Pendidikan. Adanya pendidikan diharapkan mampu menciptakan dan mewujudkan generasi yang baik, cerdas, inovatif, kreatif, dinamis, kritis dan solutif agar mampu menjadi genersi penerus intelektual yang memiliki intergritas tinggi. Oleh karena itu dibentuk suatu wadah organisasi Generasi Penerus Intelektual Asal Wonogiri-Indonesia Purwokerto "GAPLEK ASRI-INDONESIA PURWOKERTO" yang bertujuan terciptanya persatuan dan kesatuan generasi asal Wonogiri yang bertaqwa, cerdas, inovatif, kreatif, berintergritas dan bertanggung jawab berlandaskan intelektual demi terwujudnya generasi penerus intelektual untuk meneruskan dan membangun Wonogiri. Organisasi GAPLEK ASRI-INDONESIA PURWOKERTO yang dibentuk untuk generasi penerus intelektual daerah se-Kabupaten Wonogiri di berbagai daerah di Indonesia, memiliki tanggung jawab yang sama dalam penyelenggaraan, pembinaan dan pengembangan generasi penerus untuk mewujudkan generasi yang berkualitas dan berintegritas yang baik serta turut berpartisipasi dan berkontribusi nyata dalam meneruskan dan membangun demi tercapainya masa depan yang lebih baik di Wonogiri. Dengan adanya wadah yang dibentuk agar lebih peka dan tanggap terhadap kondisi sosial, ekonomi, politik, hukum, budaya, maupun ilmu pengetahuan dan teknologi di Wonogiri. GAPLEK ASRI-INDONESIA PURWOKERTO berasaskan kekeluargaan serta berpedoman pada Pancasila dan UUD 1945.',
		image: '/img/student-organizations/paguyuban/gaplek-asri/logo.webp',
		events: [
			{
				title: 'Kumpul Bulanan',
				description:
					'Program ini dilakukan dengan melakukan pertemuan di luar nongkrong bareng. Program ini digunakan untuk mendekatkan anggota dengan anggota lain tanpa memandang jabatan dan tahun masuk.'
			},
			{
				title: 'Gaplek Go to School',
				description:
					'Program ini dilakukan dengan mengadakan sosialisasi mengenai perguruan tinggi negeri UNSOED kepada sekolah menengah atas yang ada di Wonogiri. Acara ini dilakukan setiap tahun.'
			},
			{
				title: 'Musyang',
				description:
					'Musyang atau musyawarah anggota dilakukan setiap tahun untuk mempertanggung jawabkan rencana program kerja selama 2 periode serta membentuk sistem kepengurusan yang baru.'
			},
			{
				title: 'Munas',
				description:
					'Munas atau musyawarah nasional seluruh paguyuban dan organisasi mahasiswa asal wonogiri yang dilakukan setiap tahun di Kabupaten Wonogiri.'
			},
			{
				title: 'Bazar Buku',
				description:
					'Merupakan kegiatan bazar buku untuk menciptakan generasi penerus intelektual melalui budaya literasi.'
			},
			{
				title: 'Bakti Sosial',
				description:
					'Program bakti sosial memiliki tujuan untuk membantu teman-teman yang mengalami kesusahan atau kesulitan. Teman-teman Gaplek Asri Indonesia-Purwokerto mengadakan bakti sosial sebagai bantuk solidaritas bangsa.'
			},
			{
				title: 'Pelepasan Wisuda',
				description:
					'Sebagai sedulur satu paguyuban maka diperlukan acara untuk memberikan selamat dan perpisahan kepada wisudawan dan wisudawati putra-putri daerah Wonogiri di Purwokerto.'
			}
		],
		gallery: [
			{
				title: 'Bazar Buku',
				image: '/img/student-organizations/paguyuban/gaplek-asri/bazar-buku.webp'
			},
			{
				title: 'Kumpul Bulanan',
				image: '/img/student-organizations/paguyuban/gaplek-asri/kumpul-bulanan.webp'
			},
			{
				title: 'Pelepasan Wisuda',
				image: '/img/student-organizations/paguyuban/gaplek-asri/pelepasan-wisuda.webp'
			}
		],
		contact: {
			name: '@gaplekasri.pwt',
			link: 'https://instagram.com/gaplekasri.pwt'
		}
	},
	{
		name: 'HIMPUNAN MAHASISWA ADIPATI EWANGGA (HIMADIWA) KUNINGAN',
		location: 'Jawa Barat',
		slug: 'jawa-barat',
		description:
			'Himpunan mahasiswa asal Kabupaten Kuningan yang menjadi wadah bagi mahasiswa untuk bertanggung jawab atas nilai-nilai Adipati Ewangga: keberanian, keadilan, kewibawaan, kebijaksanaan, kepedulian sosial, dan integritas.',
		longDescription:
			'Himpunan Mahasiswa Adipati Ewangga (Himadiwa) Kuningan, didirikan pada tanggal 12 Mei 2016, merupakan himpunan yang menaungi mahasiswa asal Kabupaten Kuningan yang sedang menjalankan studi di Universitas Jenderal Soedirman, Banyumas, Jawa Tengah. Himadiwa Kuningan berasaskan Pancasila dan bersifat kekeluargaan serta bertujuan menjadi wadah bagi mahasiswa Kuningan di Purwokerto yang mampu bertanggung jawab atas nilai-nilai yang terdapat dalam diri Adipati Ewangga, yakni keberanian, keadilan, kewibawaan, kebijaksanaan, kepedulian sosial, dan integritas. Lambang Himadiwa Kuningan merupakan simbol identitas dan semangat organisasi. Di bagian tengah terdapat gambar kepala kuda, yang merupakan kuda tunggangan Adipati Ewangga. Kepala kuda ini dikelilingi oleh rantai yang saling terhubung membentuk lingkaran; rantai tersebut mencerminkan kesolidan antaranggota Himadiwa. Dua bintang di sisi kiri dan kanan lambang melambangkan keseimbangan dalam paguyuban, yaitu bahwa setiap anggota memiliki hak yang sama dalam organisasi Himadiwa. Warna biru dalam lambang mencerminkan loyalitas dan kesetiaan anggota Himadiwa, sedangkan warna hitam melambangkan keberanian serta ketegasan paguyuban dalam menyikapi berbagai hal. Secara keseluruhan, bentuk lingkaran dalam lambang melambangkan kesatuan antaranggota Himadiwa. Setiap anggota diharapkan dapat bersatu dalam membentuk paguyuban Himadiwa yang utuh.',
		image: '/img/student-organizations/paguyuban/himadiwa/logo.webp',
		events: [
			{
				title: 'HGTS (Himadiwa Goes to School): Merayakan Budaya Lewat Seni',
				description:
					'Pertunjukan seni tradisional dan modern khas Jawa Barat yang dibawakan di sekolah-sekolah sebagai bentuk pelestarian budaya dan edukasi generasi muda.'
			},
			{
				title: 'Makrab Himadiwa: Diskusi Hangat tentang Masa Depan Jawa Barat',
				description:
					'Forum keakraban yang dikemas dalam diskusi interaktif mengenai pembangunan dan potensi daerah Jawa Barat, mempererat solidaritas sambil bertukar gagasan.'
			},
			{
				title: 'First Meet Himadiwa: Panggung Pertama, Langkah Budaya',
				description:
					'Pertemuan perdana yang dikemas dalam pertunjukan seni tradisional dan modern khas Jawa Barat, sebagai ajang perkenalan dan apresiasi budaya.'
			},
			{
				title: 'Himadiwa Care: Aksi Peduli Lewat Ekspresi Seni',
				description:
					'Kegiatan sosial yang dikolaborasikan dengan pertunjukan seni khas Jawa Barat, sebagai bentuk kepedulian terhadap masyarakat dan pelestarian budaya lokal.'
			}
		],
		gallery: [
			{
				title: 'Himadiwa Goes to School',
				image: '/img/student-organizations/paguyuban/himadiwa/gts.webp'
			},
			{
				title: 'Makrab Himadiwa',
				image: '/img/student-organizations/paguyuban/himadiwa/makrab.webp'
			},
			{
				title: 'First Meet Himadiwa',
				image: '/img/student-organizations/paguyuban/himadiwa/first-meet.webp'
			},
			{
				title: 'Himadiwa Care',
				image: '/img/student-organizations/paguyuban/himadiwa/care.webp'
			}
		],
		contact: {
			name: '@himadiwa_kng',
			link: 'https://instagram.com/himadiwa_kng'
		}
	},
	{
		name: 'HIMAKA PURWOKERTO',
		location: 'Jawa Tengah',
		slug: 'jakarta',
		description:
			'HIMAKA Purwokerto adalah paguyuban mahasiswa asal Majalengka yang menempuh studi di wilayah Purwokerto. Organisasi ini menjadi wadah kebersamaan untuk mempererat persaudaraan, menumbuhkan semangat kekeluargaan, dan mendorong kontribusi aktif bagi kemajuan daerah.',
		longDescription:
			'Himpunan Mahasiswa Majalengka (HIMAKA) Purwokerto merupakan organisasi paguyuban yang menaungi mahasiswa asal Kabupaten Majalengka yang melanjutkan studi di perguruan tinggi wilayah Purwokerto dan sekitarnya. HIMAKA hadir sebagai wadah kebersamaan untuk mempererat tali persaudaraan antar mahasiswa se-daerah serta menumbuhkan semangat kekeluargaan, solidaritas, dan identitas kedaerahan di tengah kehidupan akademik. Tujuan utama HIMAKA Purwokerto adalah memupuk rasa persatuan dan kesatuan berbasis nilai kekeluargaan, sekaligus mendorong anggotanya untuk berperan aktif dalam pembangunan nasional. Hal ini diwujudkan melalui pembinaan mahasiswa yang berintegritas, yakni mereka yang cakap secara intelektual, berbudi luhur, berkepribadian baik, serta memiliki rasa tanggung jawab sosial, khususnya dalam mendukung kemajuan Kabupaten Majalengka. Dalam menjalankan perannya, HIMAKA Purwokerto berlandaskan pada sejumlah asas fundamental yang menjadi pijakan dalam setiap kegiatan organisasi. Asas-asas tersebut meliputi:ketaqwaan, keilmuan, kebersamaan, kebebasan, manfaat, musyawarah, keterpaduan, keadilan, otonomi, dan pengkaderan. Asas pengkaderan menjadi elemen penting dalam menjaga eksistensi HIMAKA secara berkelanjutan. Melalui proses kaderisasi dan pembentukan struktur kepengurusan yang dinamis, HIMAKA terus bertransformasi menjadi organisasi yang adaptif, produktif, dan relevan dengan kebutuhan zaman, baik di lingkup internal maupun eksternal.',
		image: '/img/student-organizations/paguyuban/himaka/logo.webp',
		events: [
			{
				title: 'Goes to School (GTS)',
				description:
					'Kegiatan promosi budaya yang menghadirkan pameran kuliner dan produk khas Jakarta di lingkungan sekolah. Acara ini bertujuan memperkenalkan kekayaan lokal kepada generasi muda secara interaktif dan edukatif.'
			},
			{
				title: 'Diesnatalis HIMAKA Purwokerto',
				description:
					'Perayaan ulang tahun HIMAKA yang dikemas dalam suasana hangat dan penuh kebersamaan. Diisi dengan sesi berbagi pengalaman antar anggota lintas generasi untuk mempererat tali persaudaraan.'
			},
			{
				title: 'Himaka Mengajar',
				description:
					'Program pengabdian masyarakat melalui kegiatan mengajar di sekolah-sekolah sekitar. Bertujuan menumbuhkan semangat belajar dan memberikan inspirasi kepada siswa-siswi di daerah setempat.'
			}
		],
		gallery: [
			{
				title: 'Goes to School',
				image: '/img/student-organizations/paguyuban/himaka/gts.webp'
			},
			{
				title: 'Diesnatalis HIMAKA',
				image: '/img/student-organizations/paguyuban/himaka/diesnat.webp'
			},
			{
				title: 'Himaka Mengajar',
				image: '/img/student-organizations/paguyuban/himaka/mengajar.webp'
			}
		],
		contact: {
			name: '@himakapurwokerto',
			link: 'https://instagram.com/himakapurwokerto'
		}
	},
	{
		name: 'Himpunan Mahasiswa Bekasi (HIMAKASI)',
		location: 'Jawa Barat',
		slug: 'sumatra',
		description:
			'Paguyuban yang menghimpun mahasiswa dari berbagai daerah di Pulau Sumatra untuk melestarikan budaya Melayu.',
		longDescription:
			'Himpunan Mahasiswa Bekasi Unsoed didirikan pada tanggal 29 Juni 2016 merupakan Himpunan Mahasiswa Bekasi Unsoed yang studi di Banyumas. Merupakan satu-satunya organisasi mahasiswa Bekasi di Purwokerto dan berstatus koordinatif Himpunan Mahasiswa Bekasi (HIMAKASI). Himakasi Unsoed berasaskan Pancasila dan bersifat kekeluargaan serta gotong royong. Himakasi Unsoed bertujuan untuk membentuk mahasiswa asal Bekasi di Purwokerto yang bertaqwa, berakhlak mulia, cakap dan mampu berkarya serta bertanggung jawab atas terwujudnya masyarakat adil dan makmur yang diridhoi Allah SWT, dan menjaga nama baik Bekasi.',
		image: '/img/student-organizations/paguyuban/himakasi/logo.webp',
		events: [
			{
				title: 'ABATA (Anak Bekasi Berbagi Takjil)',
				description:
					'Kegiatan berbagi takjil kepada masyarakat sekitar sebagai bentuk kepedulian sosial di bulan Ramadan. Mengajarkan nilai kebersamaan, empati, dan semangat berbagi dari mahasiswa untuk sesama.'
			},
			{
				title: 'BAGASASI (Bareng Keluarga Himakasi)',
				description:
					'Malam keakraban yang dirancang untuk mempererat hubungan antar anggota Himakasi. Diisi dengan berbagai permainan, diskusi santai, dan momen kebersamaan yang hangat dan penuh tawa.'
			},
			{
				title: 'SERASI (Sehari Bersama Himakasi)',
				description:
					'Ajang perkenalan dan orientasi bagi anggota baru Himakasi dalam suasana santai dan menyenangkan. Satu hari penuh kegiatan interaktif untuk membangun rasa memiliki dan kekeluargaan.'
			},
			{
				title: 'HIMAKASI SEHAT',
				description:
					'Kegiatan olahraga bersama seperti senam, futsal, atau jogging untuk menjaga kebugaran dan mempererat solidaritas. Mengusung gaya hidup sehat dan semangat positif dalam kebersamaan.'
			},
			{
				title: 'BERSANAK (Berbagi Bersama Anak Himakasi)',
				description:
					'Aksi sosial Himakasi yang berfokus pada pemberdayaan dan kebahagiaan anak-anak, baik melalui donasi, permainan edukatif, maupun kegiatan inspiratif. Mengajak anggota untuk peduli dan berkontribusi nyata.'
			},
			{
				title: 'HIMAKASI MENGAJAR',
				description:
					'Program pengabdian masyarakat melalui kegiatan mengajar di sekolah atau komunitas. Bertujuan menumbuhkan semangat belajar dan memperluas wawasan generasi muda di lingkungan sekitar.'
			},
			{
				title: 'HIMAKASI THE EXPLORER',
				description:
					'Kegiatan jalan-jalan bersama untuk menjelajahi tempat-tempat menarik sambil mempererat hubungan antar anggota. Menggabungkan petualangan, kebersamaan, dan pengalaman baru dalam satu perjalanan seru.'
			}
		],
		gallery: [
			{
				title: 'Dokumentasi HIMAKASI 1',
				image: '/img/student-organizations/paguyuban/himakasi/doc-1.webp'
			},
			{
				title: 'Dokumentasi HIMAKASI 2',
				image: '/img/student-organizations/paguyuban/himakasi/doc-2.webp'
			},
			{
				title: 'Dokumentasi HIMAKASI 3',
				image: '/img/student-organizations/paguyuban/himakasi/doc-3.webp'
			}
		],
		contact: {
			name: '@himakasi.unsoed',
			link: 'https://instagram.com/himakasi.unsoed'
		}
	},
	{
		name: 'Himpunan Mahasiswa Lampung (HIMALA)',
		location: 'Luar Jawa',
		slug: 'kalimantan',
		description:
			'HIMALA (Himpunan Mahasiswa Lampung) adalah paguyuban mahasiswa asal Lampung di Universitas Jenderal Soedirman. Didirikan sejak 2019, HIMALA menjadi wadah untuk mempererat solidaritas, melestarikan budaya daerah, dan berkontribusi positif bagi kampus maupun tanah kelahiran.',
		longDescription:
			'Paguyuban ini bernama Himpunan Mahasiswa Lampung yang kemudian disingkat menjadi HIMALA. Paguyuban ini awal mulanya dibentuk pada sekitar tahun 2019 oleh para mahasiswa/i rantau asal Provinsi Lampung untuk dapat berkumpul dan membangun solidaritas bersama, yang kemudian terus berlanjut hingga kini dan telah resmi mendapat SK Rektor Universitas Jenderal Soedirman Nomor 3045/UN23/KM.04.00/2024. Pada awalnya, Himpunan Mahasiswa Lampung dibentuk semata-mata menjadi wadah bagi para mahasiswa asal Lampung untuk dapat berhimpun bersama, bersenang-senang, dan mempererat solidaritas di antara sesama mahasiswa/i yang berkuliah di Universitas Jenderal Soedirman. Dengan tujuan awal untuk membangun ikatan dan mempererat hubungan antar anggota. Saat ini, Himala tidak sekedar perkumpulan yang bersifat non formal, melainkan wadah paguyuban bagi mahasiswa/i Lampung yang berkuliah di Universitas Jenderal Soedirman. Paguyaban Himala membentuk menjadi sebuah organisasi yang berusaha untuk data memberikan dampak kepada Unsoed, Lampung, dan kedua citra tersebut tentunya.',
		image: '/img/student-organizations/paguyuban/himala/logo.webp',
		events: [
			{
				title: 'Team Building & Leadership Training',
				description:
					'Pelatihan kepemimpinan dan kerja tim yang dirancang untuk membentuk karakter, meningkatkan komunikasi, dan memperkuat solidaritas antar anggota. Melalui simulasi dan tantangan kolaboratif, peserta diasah untuk menjadi pemimpin yang tangguh dan adaptif.'
			},
			{
				title: 'Bacok Lampung (Budaya Corak Lampung)',
				description:
					'Pentas budaya yang menampilkan kekayaan corak seni dan tradisi khas Lampung. Acara ini menjadi ruang ekspresi dan pelestarian budaya daerah melalui pertunjukan, pameran, dan dialog kebudayaan.'
			},
			{
				title: 'Sang Bumi (Semangat Angkat Nilai dan Gagasan Budaya Lampung Inspiratif)',
				description:
					'Forum kreatif yang mengangkat nilai-nilai luhur dan gagasan inspiratif dari budaya Lampung. Menggabungkan diskusi, karya seni, dan refleksi budaya untuk membangun identitas dan semangat berkarya di kalangan generasi muda.'
			}
		],
		gallery: [
			{
				title: 'Dokumentasi HIMALA 1',
				image: '/img/student-organizations/paguyuban/himala/doc-1.webp'
			},
			{
				title: 'Dokumentasi HIMALA 2',
				image: '/img/student-organizations/paguyuban/himala/doc-1.webp'
			}
		],
		contact: {
			name: '@himala.unsoed',
			link: 'https://instagram.com/himala.unsoed'
		}
	},
	{
		name: 'Himpunan Mahasiswa dan Pelajar Afirmasi Non Afirmasi Papua (HIMAPPA)',
		location: 'Luar Jawa',
		slug: 'indonesia-timur',
		description:
			'HIMAPPA (Himpunan Mahasiswa dan Pelajar Afirmasi Non Afirmasi Papua di Purwokerto) adalah paguyuban resmi yang menjadi rumah bagi pelajar dan mahasiswa Papua di Purwokerto. Didirikan sejak 2016, HIMAPPA hadir sebagai wadah kebersamaan, pengembangan diri, dan solidaritas antar anak Papua dalam menempuh pendidikan.',
		longDescription:
			'Himappa adalah singkatan dari Himpunan Mahasiswa dan Pelajar Afirmasi Non Afirmasi Papua di Purwokerto. Afirmasi adalah salah satu Beasiswa dari kementrian Pendidikan dan kebudayaan yang diberikan kepada Pelajar dan Mahasiswa Papua berprestasi. Himappa didirikan pada tanggal 14 agustus 2016 oleh kaka-kaka mahasiswa afirmasi Papua angakatan pertama di Universitas Jenderal Soedirman dengan jumalh anggota 13 Orang. Awal mulanya Himappa dibentuk dengan tujuan untuk mempermudah masalah administrasi di Universitas Jenderal Soedirman selama 3 tahun namun dengan berjalannya waktu melalui banyak diskusi akhirnya pada tahun 2019 Himappa resmi menjadi Paguyuban yang merangkul seluruh anak Papua yang ada di Purwokerto mulai dari Pelajar hingga Mahasiswa sampai sekarang. Himappa berperan sebagai wadah bagi seluruh anggota himappa untuk belajar berorganisasi, saling merangkul antar anak-anak Papua dan sebagai rumah bagi kami anak-anak Papua. Jumlah Anggota Himappa adalah 129 Anggota terhitung mulai dari Pelajar-Mahasiswa, anggota Himappa adalah Pelajar dan Mahasiswa Papua yang menimba ilmu di Kota study purwokerto. Himappa menjadi Paguyuban yang resmi terdaftar di BEM Universitas Jenderal Soedirman pada tahun 2022.',
		image: '/img/student-organizations/paguyuban/himappa/logo.webp',
		events: [
			{
				title: 'HUT HIMAPPA',
				description:
					'Perayaan ulang tahun HIMAPPA sebagai momen refleksi dan apresiasi atas perjalanan organisasi. Diisi dengan berbagai kegiatan seremonial, hiburan, dan kebersamaan antar anggota lintas generasi.'
			},
			{
				title: 'Malam Keakraban',
				description:
					'Kegiatan untuk mempererat hubungan antar anggota HIMAPPA melalui suasana santai dan penuh kehangatan. Dimeriahkan dengan permainan, diskusi ringan, dan momen berbagi cerita.'
			},
			{
				title: 'Natal HIMAPPA',
				description:
					'Perayaan Natal bersama sebagai bentuk kebersamaan spiritual dan budaya di antara anggota HIMAPPA. Acara ini menjadi ruang untuk memperkuat iman, persaudaraan, dan rasa syukur.'
			},
			{
				title: 'Olahraga Bersama',
				description:
					'Kegiatan rutin seperti futsal, voli, dan joging yang bertujuan menjaga kesehatan sekaligus mempererat solidaritas. HIMAPPA mendorong gaya hidup aktif dan semangat sportivitas di kalangan anggotanya.'
			},
			{
				title: 'Latihan Tarian Rutin (Tari Papua)',
				description:
					'Sesi latihan rutin untuk melestarikan dan menampilkan tarian tradisional Papua. Selain sebagai bentuk ekspresi budaya, kegiatan ini juga memperkuat identitas dan kebanggaan sebagai anak Papua.'
			}
		],
		gallery: [
			{
				title: 'Dokumentasi HIMAPPA 1',
				image: '/img/student-organizations/paguyuban/himappa/doc-1.webp'
			},
			{
				title: 'Dokumentasi HIMAPPA 2',
				image: '/img/student-organizations/paguyuban/himappa/doc-2.webp'
			},
			{
				title: 'Dokumentasi HIMAPPA 3',
				image: '/img/student-organizations/paguyuban/himappa/doc-3.webp'
			}
		],
		contact: {
			name: '@himappa.purwokerto',
			link: 'https://instagram.com/himappa.purwokerto'
		}
	},
	{
		name: 'Himpunan Mahasiswa Cilacap (HMC)',
		location: 'Jawa Tengah',
		slug: 'cilacap',
		description:
			'HMC UNSOED (Himpunan Mahasiswa Cilacap) adalah paguyuban mahasiswa asal Kabupaten Cilacap yang menjadi wadah silaturahmi, pengembangan diri, dan pengabdian kepada masyarakat. Melalui semangat kekeluargaan dan musyawarah, HMC menyusun program kerja yang berdampak positif bagi anggota maupun masyarakat Cilacap.',
		longDescription:
			'HMC UNSOED ( Himpunan Mahasiswa Cilacap) merupakan organisasi berbasis paguyuban kedaerahan yang menjadi wadah silaturahmi dalam rangka menjalin komunikasi antar mahasiswa Unsoed yang berasal dari Kabupaten Cilacap. Tidak hanya menjadi wadah silaturahmi, HMC Unsoed juga dapat menjadi ruang berproses bagi anggota dalam bidang keorganisasian melalui serangkaian program kerja yang disusun berdasarkan musyawarah mufakat. Dalam penyusunannya setidaknya terdapat satu program kerja yang berdampak positif terhadap elemen masyarakat Kabupaten Cilacap. Dengan adanya hal tersebut maka baik secara langsung maupun tidak langsung masyarakat Kabupaten Cilacap dapat merasakan manfaat dari adanya HMC Unsoed ini. Adapun program kerja yang dilaksanakan adalah program kerja yang berbasis pada Tridharma Perguruan Tinggi dengan tidak mengesampingkan rasa kekeluargaan antar anggota. Untuk itu para anggota sangat diharapkan dapat berkontribusi secara aktif, serta mampu memberikan saran dan kritik guna kebaikan organisasi.',
		image: '/img/student-organizations/paguyuban/hmc/logo.webp',
		events: [
			{
				title: 'UDC (Unsoed Day Cilacap)',
				description:
					'Ajang promosi kampus dan motivasi belajar bagi pelajar di Cilacap yang ingin melanjutkan studi ke perguruan tinggi. Kegiatan ini juga menjadi sarana memperkenalkan Unsoed dan peran HMC kepada masyarakat.'
			},
			{
				title: 'DIESNAT HMC (Dies Natalis Himpunan Mahasiswa Cilacap)',
				description:
					'Perayaan hari jadi HMC sebagai bentuk apresiasi atas perjalanan organisasi. Diisi dengan refleksi, hiburan, dan kegiatan kebersamaan untuk mempererat hubungan antar anggota.'
			},
			{
				title: 'BINDES (Bina Desa Cilacap)',
				description:
					'Program pengabdian masyarakat yang berfokus pada pemberdayaan desa di wilayah Cilacap. Melibatkan mahasiswa dalam kegiatan edukatif, sosial, dan pembangunan berbasis Tridharma Perguruan Tinggi.'
			}
		],
		gallery: [
			{
				title: 'Dokumentasi HMC 1',
				image: '/img/student-organizations/paguyuban/hmc/doc-1.webp'
			},
			{
				title: 'Dokumentasi HMC 2',
				image: '/img/student-organizations/paguyuban/hmc/doc-2.webp'
			},
			{
				title: 'Dokumentasi HMC 3',
				image: '/img/student-organizations/paguyuban/hmc/doc-3.webp'
			}
		],
		contact: {
			name: '@hmcunsoed1',
			link: 'https://instagram.com/hmcunsoed1'
		}
	},
	{
		name: 'IKATAN KELUARGA MAHASISWA MINANG UNIVERSITAS JENDERAL SOEDIRMAN (IKAMMI UNSOED)',
		location: 'Luar Jawa',
		slug: 'minang',
		description:
			'IKAMMI adalah paguyuban mahasiswa asal Sumatera Barat dan keturunan Minang di Universitas Jenderal Soedirman. Menjadi rumah bagi mahasiswa Minang di Purwokerto, IKAMMI mempererat persaudaraan dan melestarikan budaya Minangkabau dalam suasana kekeluargaan.',
		longDescription:
			'IKAMMI adalah sebuah paguyuban mahasiswa yang berasal dari Sumatera Barat. Paguyuban ini menjadi wadah untuk mempererat hubungan antar mahasiswa Sumatera Barat serta mahasiswa keturunan urang awak (Minang) yang sedang menempuh pendidikan di Universitas Jenderal Soedirman. IKAMMI hadir sebagai rumah bagi mahasiswa Minang di Purwokerto, dengan berlandaskan pada adat dan budaya Minangkabau.',
		image: '/img/student-organizations/paguyuban/ikammi/logo.webp',
		events: [
			{
				title: 'First Meet & Bonding',
				description:
					'Pertemuan awal untuk menyambut anggota baru dan membangun keakraban antar mahasiswa Minang. Diisi dengan kegiatan santai, permainan, dan sesi perkenalan yang mempererat rasa kekeluargaan.'
			},
			{
				title: 'Bakti Sosial',
				description:
					'Kegiatan pengabdian kepada masyarakat sebagai wujud kepedulian sosial mahasiswa Minang. Melibatkan aksi nyata seperti donasi, edukasi, atau bantuan langsung kepada masyarakat sekitar.'
			},
			{
				title: 'Sanggar Tari',
				description:
					'Wadah pelestarian seni tari Minangkabau yang menjadi ruang ekspresi budaya dan kreativitas. Melalui latihan rutin dan pertunjukan, anggota diajak untuk menjaga dan memperkenalkan kekayaan budaya daerah.'
			}
		],
		gallery: [
			{
				title: 'Dokumentasi IKAMMI 1',
				image: '/img/student-organizations/paguyuban/ikammi/doc-1.webp'
			},
			{
				title: 'Dokumentasi IKAMMI 2',
				image: '/img/student-organizations/paguyuban/ikammi/doc-2.webp'
			},
			{
				title: 'Dokumentasi IKAMMI 3',
				image: '/img/student-organizations/paguyuban/ikammi/doc-3.webp'
			}
		],
		contact: {
			name: '@ikammi_unsoed',
			link: 'https://instagram.com/ikammi_unsoed'
		}
	},
	{
		name: 'IMAKABA Purwokerto',
		location: 'Jawa Tengah',
		slug: 'imakaba',
		description:
			'IMAKABA Purwokerto adalah paguyuban mahasiswa asal Kota/Kabupaten Pekalongan dan Kabupaten Batang yang menempuh studi di Purwokerto. Sejak 2004, IMAKABA menjadi ruang kebersamaan dan persaudaraan yang membersamai perjalanan mahasiswa di tanah rantau.',
		longDescription:
			'IMAKABA Purwokerto adalah organisasi paguyuban yang menaungi mahasiswa/i asal Kota Pekalongan, Kabupaten Pekalongan, dan Kabupaten Batang yang sedang menempuh studi di Purwokerto. IMAKABA berdiri sejak 21 Mei 2004, IMAKABA telah menjadi ruang kebersamaan, kekeluargaan, dan persaudaraan bagi para anggotanya selama lebih dari 22 tahun. IMAKABA hadir bukan hanya untuk menemani perkuliahan, tapi juga untuk membersamai setiap langkah dan cerita para mahasiswanya selama di perantauan.',
		image: '/img/student-organizations/paguyuban/imakaba/logo.webp',
		events: [
			{
				title: 'Pengabdian Masyarakat',
				description:
					'Kegiatan sosial yang melibatkan mahasiswa dalam aksi nyata untuk membantu dan memberdayakan masyarakat. Melalui program ini, IMAKABA menanamkan nilai kepedulian dan kontribusi terhadap lingkungan sekitar.'
			},
			{
				title: 'Rangkaian IMAKABA Dolan ke Sekolah (IDKS)',
				description:
					'Program kunjungan ke sekolah-sekolah di wilayah Pekalongan dan Batang untuk berbagi pengalaman kuliah dan memotivasi siswa. IDKS menjadi jembatan inspirasi antara mahasiswa dan generasi penerus daerah.'
			}
		],
		gallery: [
			{
				title: 'Dokumentasi IMAKABA 1',
				image: '/img/student-organizations/paguyuban/imakaba/doc-1.webp'
			},
			{
				title: 'Dokumentasi IMAKABA 2',
				image: '/img/student-organizations/paguyuban/imakaba/doc-2.webp'
			},
			{
				title: 'Dokumentasi IMAKABA 3',
				image: '/img/student-organizations/paguyuban/imakaba/doc-3.webp'
			}
		],
		contact: {
			name: '@imakaba_purwokerto',
			link: 'https://instagram.com/imakaba_purwokerto'
		}
	},
	{
		name: 'IKATAN MAHASISWA BANJARNEGARA UNIVERSITAS JENDERAL SOEDIRMAN (IMBARA UNSOED)',
		location: 'Jawa Tengah',
		slug: 'banjarnegara',
		description:
			'IMBARA UNSOED (Ikatan Mahasiswa Banjarnegara) adalah paguyuban mahasiswa asal Banjarnegara di Universitas Jenderal Soedirman. Didirikan pada 9 Januari 2012, IMBARA menjadi ruang silaturahmi, pelestarian identitas daerah, dan wadah kontribusi sosial-budaya di lingkungan kampus dan masyarakat.',
		longDescription:
			'IMBARA UNSOED (Ikatan Mahasiswa Banjarnegara Universitas Jenderal Soedirman) adalah paguyuban mahasiswa yang menaungi mahasiswa asal Kabupaten Banjarnegara yang sedang menempuh studi di Universitas Jenderal Soedirman. Didirikan pada tahun 2019, IMBARA hadir sebagai wadah untuk mempererat tali persaudaraan antar mahasiswa Banjarnegara, melestarikan budaya daerah, dan berkontribusi positif bagi kampus serta masyarakat Banjarnegara. Dengan semangat kekeluargaan, IMBARA UNSOED berkomitmen untuk menjadi rumah bagi mahasiswa Banjarnegara di Purwokerto, mendukung pengembangan diri, dan menjaga identitas kedaerahan.',
		image: '/img/student-organizations/paguyuban/imbara/logo.webp',
		events: [
			{
				title: 'Temu Perdana IMBARA',
				description:
					'Kegiatan penyambutan anggota baru yang dikemas dalam suasana hangat dan penuh kekeluargaan. Menjadi ajang perkenalan, penguatan identitas, dan awal dari perjalanan bersama di IMBARA.'
			},
			{
				title: 'IMBARA Goes to School (IGTS)',
				description:
					'Program kunjungan ke sekolah-sekolah di Banjarnegara untuk berbagi pengalaman kuliah dan memberikan motivasi kepada pelajar. IGTS menjadi bentuk kontribusi nyata mahasiswa kepada daerah asal.'
			},
			{
				title: 'IMBARA Mengabdi',
				description:
					'Kegiatan pengabdian masyarakat yang melibatkan mahasiswa dalam aksi sosial dan pemberdayaan di wilayah Banjarnegara. Mengusung semangat gotong royong dan kepedulian terhadap sesama.'
			}
		],
		gallery: [
			{
				title: 'Dokumentasi IMBARA 1',
				image: '/img/student-organizations/paguyuban/imbara/doc-1.webp'
			}
		],
		contact: {
			name: '@imbara_unsoed',
			link: 'https://instagram.com/imbara_unsoed'
		}
	},
	{
		name: 'Ikatan Mahasiswa Pemalang (IMP) Unsoed',
		location: 'Jawa Tengah',
		slug: 'pemalang',
		description:
			'Ikatan Mahasiswa Pemalang (IMP) Unsoed adalah organisasi paguyuban mahasiswa Pemalang yang bergerak di bidang sosial. IMP Unsoed bertujuan untuk membentuk rasa persaudaraan, menampung aspirasi, dan memberdayakan potensi mahasiswa Pemalang di Unsoed.',
		longDescription:
			'Ikatan Mahasiswa Pemalang (IMP) Unsoed adalah organisasi paguyuban perkumpulan mahasiswa Pemalang yang bergerak di bidang sosial yang sedang melanjutkan studinya di Universitas Jenderal Soedirman Purwokerto. Hadirnya IMP Unsoed memiliki tujuan untuk membentuk rasa persaudaraan mahasiswa Pemalang yang berada di Unsoed, menampung aspirasi dan kreativitas mahasiswa Pemalang dalam mengaktualisasikan dirinya, memberdayakan seluruh potensi yang dimiliki mahasiswa pemalang di Unsoed serta sebagai media untuk menjalin hubungan yang baik dengan Paguyuban lain. Ikatan Mahasiswa Pemalang Unsoed adalah wadah dari, oleh, dan untuk mahasiswa Pemalang yang berada di Unsoed yang bersifat sukarela, kekeluargaan, demokratis dan kritis. Paguyuban ini didasari oleh amanat mahasiswa dengan memegang teguh prinsip Ketuhanan Yang Maha Esa, kolektivitas, kreativitas, dan intelektualitas.',
		image: '/img/student-organizations/paguyuban/imp/logo.webp',
		gallery: [
			{
				title: 'Dokumentasi IMP 1',
				image: '/img/student-organizations/paguyuban/imp/doc-1.webp'
			}
		],
		contact: {
			name: '@impunsoed_',
			link: 'https://instagram.com/impunsoed_'
		}
	},
	{
		name: 'Ikatan Pelajar dan Mahasiswa Cirebon (IPMC)',
		location: 'Jawa Barat',
		slug: 'cirebon',
		description:
			'IPMC (Ikatan Pelajar dan Mahasiswa Cirebon) adalah paguyuban mahasiswa asal Cirebon yang menempuh studi di Purwokerto. IPMC berperan sebagai jembatan antara mahasiswa Cirebon di Purwokerto dengan pemerintah daerah, serta menjadi wadah kebersamaan dan pelestarian budaya Cirebon.',
		longDescription:
			'IPMC ( Ikatan Pelajar dan Mahasiswa Cirebon ) ialah wadah untuk seluruh mahasiswa dan mahasiswi yang berasal dari cirebon jawa barat, Sebagai keluarga besar cirebon yang berada di purwokerto. IPMC menjadi salah satu penghubung antara mahasiswa dan mahasiswi yang berada di purwokerto dengan pemerintah daerah.',
		image: '/img/student-organizations/paguyuban/ipmc/logo.webp',
		gallery: [
			{
				title: 'Dokumentasi IPMC 1',
				image: '/img/student-organizations/paguyuban/ipmc/doc-1.webp'
			},
			{
				title: 'Dokumentasi IPMC 2',
				image: '/img/student-organizations/paguyuban/ipmc/doc-2.webp'
			},
			{
				title: 'Dokumentasi IPMC 3',
				image: '/img/student-organizations/paguyuban/ipmc/doc-3.webp'
			}
		],
		contact: {
			name: '@ipmc_purwokerto',
			link: 'https://instagram.com/ipmc_purwokerto'
		}
	},
	{
		name: 'Paguyuban Jakarta Merdeka Universitas Jenderal Soedirman (Jakmer)',
		location: 'Jawa Barat',
		slug: 'jakarta-merdeka',
		description:
			'Jakmer (Paguyuban Jakarta Merdeka) adalah wadah bagi mahasiswa Unsoed yang berasal dari DKI Jakarta, Depok, dan sekitarnya. Sebagai organisasi non-akademik, Jakmer hadir untuk mempererat kekeluargaan, berbagi informasi kampus, dan membangun solidaritas antar anggota.',
		longDescription:
			'Paguyuban Jakarta Merdeka Universitas Jenderal Soedirman, yang kemudian disebut dengan “Jakmer” merupakan salah satu Paguyuban sebagai organisasi non-akademik yang telah berdiri sejak beberapa tahun silam. Organisasi atau himpunan ini menjadi wadah kumpulan Mahasiswa/i asal domisili DKI Jakarta, Depok, dan sekitarnya. Terbentuknya paguyuban ini ditujukan agar mahasiswa/i Unsoed yang berasal dari Jakarta dan sekitarnya dapat dengan mudah mendapatkan informasi seputar kehidupan kampus berdasarkan lingkupnya untuk menonjolkan keakraban dan kekeluargaan yang solid.',
		image: '/img/student-organizations/paguyuban/jakmer/logo.webp',
		events: [
			{
				title: 'Bakti Sosial',
				description:
					'Kegiatan pengabdian kepada masyarakat yang menjadi wujud kepedulian sosial mahasiswa Jakarta dan sekitarnya. Melibatkan aksi nyata seperti donasi, edukasi, dan kegiatan kemanusiaan.'
			},
			{
				title: 'One Day with Jakmer',
				description:
					'Satu hari penuh kebersamaan yang dirancang untuk mempererat hubungan antar anggota Jakmer. Diisi dengan berbagai aktivitas seru, diskusi ringan, dan momen kekeluargaan.'
			},
			{
				title: 'Info Beasiswa',
				description:
					'Sesi berbagi informasi dan tips seputar beasiswa yang tersedia bagi mahasiswa Unsoed. Bertujuan membantu anggota Jakmer dalam mengakses peluang pendidikan secara lebih luas.'
			},
			{
				title: 'Turnamen Antar Paguyuban',
				description:
					'Kompetisi olahraga dan permainan antar paguyuban sebagai ajang silaturahmi dan sportivitas. Menumbuhkan semangat kompetitif sekaligus mempererat hubungan lintas daerah.'
			}
		],
		gallery: [
			{
				title: 'Dokumentasi Jakmer 1',
				image: '/img/student-organizations/paguyuban/jakmer/doc-1.webp'
			},
			{
				title: 'Dokumentasi Jakmer 2',
				image: '/img/student-organizations/paguyuban/jakmer/doc-2.webp'
			},
			{
				title: 'Dokumentasi Jakmer 3',
				image: '/img/student-organizations/paguyuban/jakmer/doc-3.webp'
			}
		],
		contact: {
			name: '@jakarta_merdeka',
			link: 'https://instagram.com/jakarta_merdeka'
		}
	},
	{
		name: 'Keluarga Mahasiswa Jepara Unsoed (KM PARASOED)',
		location: 'Jawa Tengah',
		slug: 'jepara',
		description:
			'KM PARASOED (Keluarga Mahasiswa Jepara Unsoed) adalah paguyuban mahasiswa asal Jepara yang menempuh studi di Universitas Jenderal Soedirman. Didirikan pada 2019, KM PARASOED menjadi wadah kebersamaan, pelestarian budaya Jepara, dan kontribusi sosial di lingkungan kampus.',
		longDescription:
			'KM PARASOED (Keluarga Mahasiswa Jepara Unsoed) adalah paguyuban mahasiswa yang menaungi mahasiswa asal Kabupaten Jepara yang sedang menempuh studi di Universitas Jenderal Soedirman. Didirikan pada tahun 2019, KM PARASOED hadir sebagai wadah untuk mempererat tali persaudaraan antar mahasiswa Jepara, melestarikan budaya daerah, dan berkontribusi positif bagi kampus serta masyarakat Jepara. Dengan semangat kekeluargaan, KM PARASOED berkomitmen untuk menjadi rumah bagi mahasiswa Jepara di Purwokerto, mendukung pengembangan diri, dan menjaga identitas kedaerahan.',
		image: '/img/student-organizations/paguyuban/km-parasoed/logo.webp',
		gallery: [
			{
				title: 'Dokumentasi KM PARASOED 1',
				image: '/img/student-organizations/paguyuban/km-parasoed/doc-1.webp'
			},
			{
				title: 'Dokumentasi KM PARASOED 2',
				image: '/img/student-organizations/paguyuban/km-parasoed/doc-2.webp'
			},
			{
				title: 'Dokumentasi KM PARASOED 3',
				image: '/img/student-organizations/paguyuban/km-parasoed/doc-3.webp'
			}
		],
		contact: {
			name: '@km_parasoed',
			link: 'https://instagram.com/km_parasoed'
		}
	},
	{
		name: 'Keluarga Pelajar Mahasiswa Galuh Pamitran (KGMP)',
		location: 'Jawa Barat',
		slug: 'galuh-pamitran',
		description:
			'KPMGP (Keluarga Pelajar Mahasiswa Galuh Pamitran) adalah paguyuban mahasiswa asal Kabupaten Ciamis yang menempuh pendidikan di Purwokerto. KPMGP menjadi ruang silaturahmi, kekeluargaan, dan pengembangan diri bagi anggotanya dalam menghadapi kehidupan perantauan.',
		longDescription:
			'KGMP (Keluarga Pelajar Mahasiswa Galuh Pamitran) adalah paguyuban mahasiswa yang menaungi mahasiswa asal Galuh Pamitran yang sedang menempuh studi di Universitas Jenderal Soedirman. Didirikan pada tahun 2020, KGMP hadir sebagai wadah untuk mempererat tali persaudaraan antar mahasiswa Galuh Pamitran, melestarikan budaya daerah, dan berkontribusi positif bagi kampus serta masyarakat Galuh Pamitran. Dengan semangat kekeluargaan, KGMP berkomitmen untuk menjadi rumah bagi mahasiswa Galuh Pamitran di Purwokerto, mendukung pengembangan diri, dan menjaga identitas kedaerahan.',
		image: '/img/student-organizations/paguyuban/kgmp/logo.webp',
		events: [
			{
				title: 'Society (Socialization Jenderal Soedirman University)',
				description:
					'Kegiatan sosialisasi kampus kepada pelajar Ciamis yang bertujuan memperkenalkan kehidupan perkuliahan di Universitas Jenderal Soedirman. Acara ini menjadi sarana berbagi pengalaman, motivasi, dan informasi seputar dunia mahasiswa.'
			}
		],
		gallery: [
			{
				title: 'Dokumentasi KGMP 1',
				image: '/img/student-organizations/paguyuban/kgmp/doc-1.webp'
			},
			{
				title: 'Dokumentasi KGMP 2',
				image: '/img/student-organizations/paguyuban/kgmp/doc-2.webp'
			},
			{
				title: 'Dokumentasi KGMP 3',
				image: '/img/student-organizations/paguyuban/kgmp/doc-3.webp'
			}
		],
		contact: {
			name: '@kpmgpciamis',
			link: 'https://instagram.com/kpmgpciamis'
		}
	},
	{
		name: 'Keluarga Mahasiswa Purworejo-Purwokerto (KMPP)',
		location: 'Jawa Tengah',
		slug: 'purworejo',
		description:
			'KMPP (Keluarga Mahasiswa Purworejo-Purwokerto) adalah paguyuban mahasiswa asal Kabupaten Purworejo yang menempuh studi di Universitas Jenderal Soedirman. KMPP berperan sebagai wadah silaturahmi, pengembangan diri, dan kontribusi sosial bagi mahasiswa Purworejo yang merantau.',
		longDescription:
			'Keluarga Mahasiswa Purworejo-Purwokerto (KMPP) adalah sebuah paguyuban mahasiswa yang berasal dari Kabupaten Purworejo dan sedang menempuh pendidikan tinggi di wilayah Banyumas, khususnya Universitas Jenderal Soedirman. KMPP hadir sebagai wadah untuk mempererat tali persaudaraan, memperluas jaringan pertemanan, serta menjadi ruang silaturahmi bagi mahasiswa Purworejo yang merantau untuk menimba ilmu. Dengan semangat kebersamaan, KMPP berkomitmen untuk membangun komunitas yang suportif dan berdaya guna.',
		image: '/img/student-organizations/paguyuban/kmpp/logo.webp',
		events: [
			{
				title: 'Sosialisasi SMA/SMK Se Purworejo',
				description:
					'KMPP aktif turun langsung ke sekolah-sekolah menengah atas dan kejuruan di Purworejo untuk memberikan informasi mengenai dunia perkuliahan, tips lolos seleksi masuk perguruan tinggi, serta membagikan pengalaman mahasiswa secara langsung.'
			},
			{
				title: 'KMPP berbagi',
				description:
					'Program berbagi ini berisi kegiatan sosial seperti santunan, penggalangan dana, dan pembagian sembako yang bertujuan untuk menumbuhkan kepedulian antar sesama.'
			}
		],
		gallery: [
			{
				title: 'Dokumentasi KMPP 1',
				image: '/img/student-organizations/paguyuban/kmpp/doc-1.webp'
			},
			{
				title: 'Dokumentasi KMPP 2',
				image: '/img/student-organizations/paguyuban/kmpp/doc-2.webp'
			},
			{
				title: 'Dokumentasi KMPP 3',
				image: '/img/student-organizations/paguyuban/kmpp/doc-3.webp'
			}
		],
		contact: {
			name: '@kmppunsoed',
			link: 'https://instagram.com/kmppunsoed'
		}
	},
	{
		name: 'Soedirman Perwira (SOEPER)',
		location: 'Jawa Tengah',
		slug: 'soeper',
		description:
			'SOEPER (Soedirman Perwira) adalah paguyuban mahasiswa Universitas Jenderal Soedirman asal Kabupaten Purbalingga. Dikenal aktif dan inovatif, SOEPER menjadi wadah kekeluargaan, pengembangan diri, serta pelestarian budaya melalui berbagai kegiatan sosial dan kreatif.',
		longDescription:
			'SOEPER (Soedirman Perwira) adalah organisasi yang mewadahi mahasiswa/i Universitas Jenderal Soedirman yang berasal dari Kabupaten Purbalingga. SOEPER dikenal sebagai paguyuban yang aktif dengan berbagai kegiatannya seperti Makrab, Sosialisasi, Soeper Mengajar, dan masih banyak lagi. Tahun ini SOEPER membawa gebrakan baru dengan agenda terbesarnya yaitu SOEPERATION yang merupakan acara untuk memperingati hari jadi dari SOEPER dengan berbagai rangkaian kegiatan yang seru dan menarik seperti perlombaan esport, seni musik, dan seni tari.',
		image: '/img/student-organizations/paguyuban/soeper/logo.webp',
		events: [
			{
				title: 'SOEPERATION',
				description:
					'Acara puncak peringatan hari jadi SOEPER yang dikemas dalam rangkaian kegiatan seru seperti lomba e-sport, pertunjukan seni musik, dan tari. SOEPERATION menjadi ajang unjuk kreativitas sekaligus mempererat solidaritas antar anggota.'
			},
			{
				title: 'SOEPER Sosialisasi',
				description:
					'Program sosialisasi kampus kepada pelajar Purbalingga yang bertujuan memberikan informasi seputar kehidupan perkuliahan di Unsoed. Kegiatan ini juga menjadi sarana berbagi pengalaman dan motivasi dari mahasiswa kepada calon mahasiswa.'
			}
		],
		gallery: [
			{
				title: 'Dokumentasi SOEPER 1',
				image: '/img/student-organizations/paguyuban/soeper/doc-1.webp'
			},
			{
				title: 'Dokumentasi SOEPER 2',
				image: '/img/student-organizations/paguyuban/soeper/doc-2.webp'
			},
			{
				title: 'Dokumentasi SOEPER 3',
				image: '/img/student-organizations/paguyuban/soeper/doc-3.webp'
			}
		],
		contact: {
			name: '@soeper_unsoed',
			link: 'https://instagram.com/soeper_unsoed'
		}
	}
];

export default paguyuban;
