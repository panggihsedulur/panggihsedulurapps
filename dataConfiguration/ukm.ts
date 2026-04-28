// src/data/ukm.ts
const ukm: {
	name: string;
	description: string;
	image: string;
	href: string;
	slug: string; // Tambahkan slug
	id: string; // Identifier unik untuk routing
	longDescription?: string; // Deskripsi panjang untuk detail
	events: {
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
		name: 'AIESEC',
		slug: 'organisasi',
		id: 'aiesec',
		description:
			'AIESEC in Unsoed adalah organisasi kepemudaan internasional yang mengembangkan potensi kepemimpinan mahasiswa melalui program pertukaran budaya dan pengembangan diri.',
		longDescription:
			'AIESEC in Unsoed adalah salah satu entitas AIESEC in Indonesia yang berdiri sejak tahun 2015 di bawah naungan Universitas Jenderal Soedirman, Purwokerto. Sebagai bagian dari AIESEC, organisasi kepemudaan internasional yang hadir di 126 negara dan wilayah, AIESEC in Unsoed berkomitmen untuk menjadi wadah pengembangan potensi kepemimpinan pemuda lokal, khususnya mahasiswa di Purwokerto dan sekitarnya.\n\nDengan lebih dari 76 anggota aktif, AIESEC in Unsoed menjalankan berbagai program yang berfokus pada cross-cultural experiences dan berlandaskan pada Sustainable Development Goals (SDGs). Melalui program pertukaran internasional (Exchange Programs) serta kegiatan sosial dan kepemudaan, AIESEC in Unsoed mendorong generasi muda untuk berkontribusi secara nyata terhadap perubahan positif di lingkup lokal maupun global.\n\nSebagai bagian dari jaringan AIESEC global yang independen, not-for-profit, dan non-partisan yang telah diakui oleh UNESCO, berafiliasi dengan DPI PBB, dan memiliki status konsultatif dengan ECOSOC, AIESEC in Unsoed juga mengadaptasi nilai dan prinsip organisasi global ke dalam konteks lokal dengan tujuan untuk menciptakan dampak berkelanjutan melalui kepemimpinan berbasis nilai dan kolaborasi lintas budaya.',
		image: '/img/student-organizations/ukm/AIESEC/logo.webp',
		href: '/ukm/aiesec',
		events: [
			{
				title: 'AIESEC Member',
				description:
					'Adalah program sebagai bagian dari pendidikan nonformal bagi pemuda yang berfokus pada pengembangan kepemimpinan. Kami membentuk anak muda melalui pengalaman kepemimpinan yang personal, relevan, dan terukur.'
			},
			{
				title: 'AIESEC Future Leaders',
				description:
					'AFL merupakan projek yang berjalan selama 2 bulan. Dalam kegiatan ini, participant memiliki kesempatan mengikuti sesi-sesi interaktif bersama coach dan pembicara yang terkualifikasi untuk mengembangkan soft dan hard skills yang mereka miliki.'
			},
			{
				title: 'Global Volunteer',
				description:
					'Program volunteer di luar negeri selama 6-8 minggu di dalam beberapa NGO dan lembaga pendidikan.'
			},
			{
				title: 'Local Volunteer',
				description:
					'Merupakan bagian dari program Incoming Global Volunteer yang memberikan kesempatan kepada anak muda untuk melakukan pendampingan kepada exchange participant dari berbagai negara, serta dapat belajar budaya baru dan mendapatkan soft skill dan hard skill.'
			},
			{
				title: 'Global Talent',
				description:
					'Program magang profesional di luar negeri selama 6-78 minggu di perusahaan MNC, SME, Start-Up, dan umbrella organizations lainnya.'
			},
			{
				title: 'Global Teacher',
				description:
					'Program magang mengajar profesional di luar negeri selama 9-78 minggu di lembaga pendidikan.'
			},
			{
				title: 'Impact Circle',
				description:
					'Impact Circle merupakan platform untuk berdiskusi mengenai masalah terkini yang berkaitan dengan Sustainable Development Goals dan pemupukan rasa empati pemuda Indonesia. Acara ini akan diselenggarakan selama 3-4 kali per tahun.'
			},
			{
				title: 'Youth Today',
				description:
					'Webinar Youth Today berisi tentang diskusi mengenai masalah terkini dan berbagai topik yang terkait dengan karir di masa depan. Acara ini akan diadakan 3-4 kali dalam setahun.'
			},
			{
				title: 'Global Village',
				description:
					'Merupakan bagian dari program Incoming Global Exchange yang menjadi jembatan bagi para peserta untuk merasakan pertukaran budaya langsung dengan para exchange participant dari berbagai negara.'
			}
		],
		gallery: [
			{
				title: 'AIESEC Member Program',
				image: '/img/student-organizations/ukm/AIESEC/AIESEC Member.webp'
			},
			{
				title: 'AIESEC Future Leaders',
				image: '/img/student-organizations/ukm/AIESEC/AIESEC Future Leaders.webp'
			},
			{
				title: 'Global Volunteer Program',
				image: '/img/student-organizations/ukm/AIESEC/Global Volunteer.webp'
			}
		],
		contact: {
			name: '@strivewithunsoed',
			link: 'https://instagram.com/strivewithunsoed'
		}
	},
	{
		name: 'Bandung Karate Club',
		slug: 'olahraga',
		id: 'bandung-karate-club',
		description:
			'Bandung Karate Club (BKC) adalah salah satu perguruan karate tertua dan terbesar di Indonesia. Didirikan pada 16 Juni 1966 oleh Kang Iwa Rahadian Arsanata di Bandung, BKC telah berkembang menjadi organisasi bela diri Karate yang berpengaruh dengan ribuan anggota di seluruh Indonesia.\n\nTermasuk menjadi bagian dari Unit Kegiatan Mahasiswa Bandung Karate Club (UKM BKC) di Universitas Jenderal Soedirman, Purwokerto. Kami membuka pintu bagi semua mahasiswa yang ingin belajar karate dari yang pemula hingga dari yang sudah berpengalaman. Karateka dari perguruan lain juga bisa bergabung tanpa harus pindah perguruan lohh. Mari bersama membawa nama baik Karate Unsoed!!',
		longDescription:
			'Bandung Karate Club (BKC) adalah salah satu perguruan karate tertua dan terbesar di Indonesia.  Didirikan pada 16 Juni 1966 oleh Kang Iwa Rahadian Arsanata di Bandung, BKC telah berkembang menjadi organisasi bela diri Karate yang berpengaruh dengan ribuan anggota di seluruh Indonesia.\n\nTermasuk menjadi bagian dari Unit Kegiatan Mahasiswa Bandung Karate Club (UKM BKC) di Universitas Jenderal Soedirman, Purwokerto. Kami membuka pintu bagi semua mahasiswa yang ingin belajar karate dari yang pemula hingga dari yang sudah berpengalaman. Karateka dari perguruan lain juga bisa bergabung tanpa harus pindah perguruan lohh. Mari bersama membawa nama baik Karate Unsoed!!',
		image: '/img/student-organizations/ukm/BKC/logo.webp',
		href: '/ukm/bandung-karate-club',
		events: [
			{
				title: 'Latihan Rutin',
				description: ''
			},
			{
				title: 'Training Center',
				description: ''
			},
			{
				title: 'Tanding atau kejuaraan',
				description:
					'Single Event (Event open regional, nasional & internasional) & Multi Event (Pomprov)'
			},
			{
				title: 'Makrab',
				description: ''
			},
			{
				title: 'Latihan Alam',
				description: ''
			}
		],
		gallery: [
			{
				title: 'Kejurda BKC Jawa Tengah',
				image: '/img/student-organizations/ukm/BKC/Kejurdo BKC Jawa Tengah.webp'
			},
			{
				title: 'Kejurprov BKC Jawa Tengah',
				image: '/img/student-organizations/ukm/BKC/Kejurprov BKC Jawa Tengah.webp'
			},
			{
				title: 'Kejurprov FORKI Jateng',
				image: '/img/student-organizations/ukm/BKC/Kejurprov FORKI Jateng.webp'
			},
			{
				title: 'Rektor Cup UIN Walisongo',
				image:
					'/img/student-organizations/ukm/BKC/REKTOR CUP UIN WALISONGO, INTERNASIONAL OPEN KARATE CHAMPIONSHIP_.webp'
			}
		],
		contact: {
			name: '@ukmbkcunsoed',
			link: 'https://instagram.com/ukmbkcunsoed'
		}
	},
	{
		name: 'Bulu Tangkis',
		slug: 'olahraga',
		id: 'bulu-tangkis',
		description:
			'Unit Kegiatan Mahasiswa (UKM) Bulu Tangkis Universitas Jenderal Soedirman (Unsoed) merupakan wadah bagi mahasiswa yang memiliki minat dan bakat di bidang olahraga bulu tangkis.',
		longDescription:
			'Unit Kegiatan Mahasiswa (UKM) Bulu Tangkis Universitas Jenderal Soedirman (Unsoed) merupakan wadah bagi mahasiswa yang memiliki minat dan bakat di bidang olahraga bulu tangkis. Resmi didirikan pada tahun 2016, UKM ini bertujuan untuk mengembangkan potensi atletik mahasiswa serta mempererat tali persaudaraan antaranggota melalui kegiatan olahraga. Latihan rutin diadakan dua kali seminggu, yaitu setiap hari Senin pukul 15.00 dan Kamis pukul 18.00 di GOR Soemardjito Unsoed. Kegiatan ini dirancang untuk meningkatkan keterampilan bermain serta membangun semangat sportivitas di antara anggota. Selain itu UKM bulu tangkis juga sering mengikuti kegiatan turnamen di luar daerah seperti kejuaran tingkat daerah maupun tingkat nasional, Adapun prestasi tertinggi yang pernah diraih yaitu Juara 3 kejuaran Liga Mahasiswa tingkat Jateng & DIY, Juara 1 Tunggal Putri Pekan olahraga Mahasiswa tingkat provinsi Jawa Tengah, Juara 3 Tunggal Putri Pekan olahraga Mahasiswa tingkat nasional dan masih banyak lagi prestasi yang pernah UKM Bulu tangkis unsoed raih selama berdiri nya.',
		image: '/img/student-organizations/ukm/Bulu Tangkis/logo.webp',
		href: '/ukm/bulu-tangkis',
		events: [
			{
				title: 'Unsoed Badminton Championship (UBC)',
				description:
					'Salah satu program unggulan UKM ini adalah penyelenggaraan Unsoed Badminton Championship (UBC), sebuah turnamen yang melibatkan peserta dari berbagai fakultas di Unsoed serta universitas lain di wilayah Barlingmascakeb (Banjarnegara, Purbalingga, Banyumas, Cilacap, dan Kebumen). Turnamen ini bertujuan untuk memperluas jaringan dan meningkatkan kompetensi atlet melalui kompetisi yang sehat.'
			}
		],
		gallery: [
			{
				title: 'Dokumentasi UKM Bulu Tangkis',
				image: '/img/student-organizations/ukm/Bulu Tangkis/Picture1.webp'
			},
			{
				title: 'Dokumentasi UKM Bulu Tangkis',
				image: '/img/student-organizations/ukm/Bulu Tangkis/Picture2.webp'
			},
			{
				title: 'Dokumentasi UKM Bulu Tangkis',
				image: '/img/student-organizations/ukm/Bulu Tangkis/Picture5.webp'
			}
		],
		contact: {
			name: '@bulutangkisunsoed',
			link: 'https://instagram.com/bulutangkisunsoed	'
		}
	},
	{
		name: 'Catur',
		slug: 'olahraga',
		id: 'catur',
		description:
			'Unit Kegiatan Mahasiswa (UKM) Catur Universitas Jenderal Soedirman didirikan pada 24 September 2008 yang tidak hanya berfokus dalam bermain tetapi juga mengasah otak seperti memikirkan strategi. Berdirinya UKM ini tidak lepas dari semakin tingginya minat mahasiswa terhadap olahraga catur dan menjadikan UKM Catur ini sebagai wadah untuk mengembangkan minat serta bakat dalam bermain Catur.',
		longDescription:
			'Unit Kegiatan Mahasiswa (UKM) Catur Universitas Jenderal Soedirman didirikan pada 24 September 2008 yang tidak hanya berfokus dalam bermain tetapi juga mengasah otak seperti memikirkan strategi. Berdirinya UKM ini tidak lepas dari semakin tingginya minat mahasiswa terhadap olahraga catur dan menjadikan UKM Catur ini sebagai wadah untuk mengembangkan minat serta bakat dalam bermain Catur. \n\n\Sebagai Unit Kegiatan Mahasiswa yang berfokus pada pengembangan intelektual dan strategi, UKM Catur Unsoed memiliki visi untuk mencetak individu-individu yang tidak hanya unggul dalam papan catur, tetapi juga mampu menerapkan pola pikir strategis dalam kehidupan sehari-hari. Misi kami adalah menyediakan lingkungan yang kondusif untuk belajar, berlatih, dan berkompetisi dalam olahraga catur, sekaligus memupuk semangat kebersamaan dan sportivitas antar anggota.\n\n\UKM Catur Unsoed menawarkan berbagai manfaat. Selain mengasah kemampuan analitis, logis, dan pemecahan masalah, catur juga melatih kesabaran dan konsentrasi. Lebih dari itu, UKM Catur adalah tempat yang tepat untuk memperluas jaringan pertemanan, berinteraksi dengan sesama anggota catur, serta mengembangkan potensi diri dalam berorganisasi.',
		image: '/img/student-organizations/ukm/Catur/logo.webp',
		href: '/ukm/catur',
		events: [
			{
				title: 'SOCT',
				description:
					'SOCT atau Soedirman Open Chess Tournament merupakan sebuah turnamen catur tingkat nasional. Kegiatan ini bertujuan untuk mewadahi para pecatur dari berbagai kalangan, baik dari mahasiswa, pelajar, maupun masyarakat umum, dalam menyalurkan minat dan bakat mereka di bidang olahraga catur.'
			},
			{
				title: 'Sparing',
				description:
					'Sparing merupakan kegiatan latihan tanding yang dilakukan antar sesama anggota UKM. Tujuan utama dari sparing adalah untuk mengasah kemampuan teknis dan taktis para anggota, serta membiasakan diri menghadapi tekanan kompetitif. Sparing juga dapat menjadi sarana untuk mengidentifikasi kekurangan dan kelebihan masing-masing anggota.'
			},
			{
				title: 'Tentoring',
				description:
					'Tentoring merupakan kegiatan bimbingan atau pembelajaran yang dilakukan oleh staff pengurus kepada anggota baru, khususnya dalam hal pemahaman dasar-dasar catur, strategi permainan, dan peningkatan skill secara bertahap. tentoring bukan hanya soal mengajar cara bermain, tapi juga soal membangun solidaritas, meningkatkan kualitas bermain catur para anggota, dan menciptakan suasana belajar yang seru tapi tetap serius.'
			},
			{
				title: 'Upgrading',
				description:
					'Upgrading merupakan kegiatan pembekalan kepada pengurus UKM catur Unsoed mengenai cara berorganisasi dan materi-materi mengenai catur yang bertujuan untuk memberikan pembekalan ilmu tentang cara berorganisasi yang baik dan memahami mengenai materi catur dan Dengan suasana yang lebih santai tapi bermakna, upgrading mendorong pengurus untuk saling peduli, saling membantu, dan membangun solidaritas yang kuat, baik dalam kegiatan internal maupun saat menjalankan program UKM.'
			},
			{
				title: 'Welcoming Party',
				description:
					'Welcoming Party merupakan kegiatan untuk menyambut anggota baru UKM catur Unsoed sebagai sarana agar angggota baru dapat mengenal satu sama lain serta untuk mengakrabkan semua anggota dan pengurus dengan tujuan mempererat silaturahmi'
			},
			{
				title: 'Makrab',
				description:
					'Makrab merupakan Kegiatan yang dirangkai untuk menumbuhkan rasa solidaritas, menciptakan keakraban dan kekompakan para pengurus serta anggota UKM Catur Unsoed yang bertujuan untuk meningkatkan keakraban dan solidaritas pengurus serta anggota UKM Catur Unsoed dan menjaga silaturahmi dan mempererat hubungan antar pengurus UKM Catur Unsoed.'
			}
		],
		gallery: [
			{
				title: 'MAKRAB UKM Catur',
				image: '/img/student-organizations/ukm/Catur/MAKRAB.webp'
			},
			{
				title: 'SOCT Competition',
				image: '/img/student-organizations/ukm/Catur/SOCT.webp'
			},
			{
				title: 'Sparing Session',
				image: '/img/student-organizations/ukm/Catur/SPARING.webp'
			},
			{
				title: 'Tentoring Activities',
				image: '/img/student-organizations/ukm/Catur/TENTORING.webp'
			},
			{
				title: 'Upgrading Program',
				image: '/img/student-organizations/ukm/Catur/UPGRADING.webp'
			},
			{
				title: 'Welcoming Party',
				image: '/img/student-organizations/ukm/Catur/WELCOMING PARTY_.webp'
			}
		],
		contact: {
			name: '@ukm.catur.unsoed',
			link: 'https://instagram.com/ukm.catur.unsoed'
		}
	},
	{
		name: 'Cimsa',
		slug: 'kesenian',
		id: 'cimsa',
		description:
			'CIMSA Universitas Jenderal Soedirman (Unsoed) disahkan sebagai lokal CIMSA pada May Meeting 2019 di Semarang. Saat awal didirikan, CIMSA Unsoed hanya memiliki dua standing committee, yaitu Standing Committee on Public Health (SCOPH) dan SCORA (Standing Committee on Sexual & Reproductive Health and Rights including HIV/AIDS. CIMSA Unsoed terus berkembang dan saat ini CIMSA Unsoed telah memiliki 4 standing committees yaitu SCOPH, SCORA, SCORP (Standing Committee on Human Right and Peace), dan SCORE (Standing Committee on Research Exchange).',
		longDescription:
			'CIMSA Universitas Jenderal Soedirman (Unsoed) disahkan sebagai lokal CIMSA pada May Meeting 2019 di Semarang. Saat awal didirikan, CIMSA Unsoed hanya memiliki dua standing committee, yaitu Standing Committee on Public Health (SCOPH) dan SCORA (Standing Committee on Sexual & Reproductive Health and Rights including HIV/AIDS. CIMSA Unsoed terus berkembang dan saat ini CIMSA Unsoed telah memiliki 4 standing committees yaitu SCOPH, SCORA, SCORP (Standing Committee on Human Right and Peace), dan SCORE (Standing Committee on Research Exchange).',
		image: '/img/student-organizations/ukm/Cimsa/logo.webp',
		href: '/ukm/cimsa',
		events: [
			{
				title: 'GAP EXCHANGE',
				description:
					'Global Action Project Exchange (GAP Exchange) merupakan program kolaboratif antara SCOPH dan SCORE. Dalam aktivitas ini, CIMSA menerima kehadiran mahasiswa asing  dan mendampingi mereka dalam menjalankan penelitian serta fieldwork selama 4 minggu. Tema yang diangkat tahun lalu adalah HARMONY (Hypertension, Action of Reducing Malicious Outcome on Adults and Young Generation). Kegiatan yang dilakukan beragam mulai dari berpartisipasi pada program Prolanis di Puskesmas, sosialisasi di SMA, hingga melakukan pemeriksaan tekanan darah gratis di GOR Satria. Tahun ini, GAP Exchange akan kembali hadir di bulan Agustus. Are you ready to be part of GAP Exchange?'
			},
			{
				title: 'IWD',
				description:
					'International Women’s Day (IWD) diperingati di seluruh dunia pada tanggal 8 Maret, termasuk di Indonesia. Setiap tahunnya, SCORA dan SCORP mengadakan perayaan IWD sebagai bentuk dukungan terhadap berbagai isu seperti gender equality, reproductive rights, dan violance against women. Tema yang diambil pada perayaan IWD tahun ini adalah WAVE (Women Against Violence Everywhere) yang mengangkat isu kekerasan seksual pada wanita. Kegiatan yang diadakan meliputi pelatihan bahasa isyarat, pemberian materi kepada siswa/siswi SMP berkebutuhan khusus, dan ground campaign di GOR Satria.'
			}
		],
		gallery: [
			{
				title: 'GAP Exchange Program',
				image: '/img/student-organizations/ukm/Cimsa/GAP%20EXCHANGE.webp'
			},
			{
				title: "International Women's Day",
				image: '/img/student-organizations/ukm/Cimsa/International-Womens-Day.webp'
			},
			{
				title: 'Officials CIMSA Unsoed 2024/2025',
				image: '/img/student-organizations/ukm/Cimsa/Officials%20CIMSA%20Unsoed%202024_2025.webp'
			}
		],
		contact: {
			name: '@cimsaunsoed',
			link: 'https://instagram.com/cimsaunsoed'
		}
	},
	{
		name: 'FPCI',
		slug: 'organisasi',
		id: 'fpci',
		description:
			'FPCI Chapter Unsoed adalah organisasi berbasis think-tank atau riset yang berdiri sejak Desember 2020. Sebagai bagian dari jaringan FPCI nasional, kami memiliki misi yang sama, yaitu mempromosikan internasionalisme Indonesia yang positif hingga ke tingkat akar rumput.',
		longDescription:
			'FPCI Chapter Unsoed adalah organisasi berbasis think-tank atau riset yang berdiri sejak Desember 2020. Sebagai bagian dari jaringan FPCI nasional, kami memiliki misi yang sama, yaitu mempromosikan internasionalisme Indonesia yang positif hingga ke tingkat akar rumput.\n\nKami terbuka untuk seluruh mahasiswa aktif Unsoed dari berbagai jurusan. Melalui kegiatan yang berlandaskan riset dan diskusi, FPCI berperan sebagai jembatan-jembatan yang menghubungkan masyarakat lokal dengan dunia global. \n\nTagline kami, “Leaping Ahead”, mencerminkan komitmen terhadap pertumbuhan dan pemberdayaan yang berkelanjutan melalui pengakarrumputan kebijakan luar negeri, baik bagi anggota internal maupun komunitas Unsoed secara lebih luas.',
		image: '/img/student-organizations/ukm/FPCI/logo.webp',
		href: '/ukm/fpci',
		events: [
			{
				title: 'Diplomacy Camp',
				description:
					'Diplomacy Camp adalah bootcamp keahlian diplomasi yang terdiri atas kelas-kelas intensif, diskusi interaktif, dan praktik negosiasi yang bertujuan untuk membawa studi dan praktik diplomasi ke tingkat akar rumput yang secara rutin diselenggarakan di akhir tahun secara online dan offline. Delegasi akan berkesempatan untuk mempelajari kehidupan sebagai seorang diplomat dan keahlian-keahlian yang dibutuhkan untuk menjadi diplomat secara langsung dari para praktisi berpengalaman. Keahlian-keahlian tersebut pun dapat bermanfaat untuk diimplementasikan di berbagai bidang. '
			},
			{
				title: 'Climate Agenda',
				description:
					'Climate Agenda merupakan serangkaian kegiatan yang diselenggarakan oleh Foreign Policy Community of Indonesia (FPCI) Chapter Universitas Jenderal Soedirman (Unsoed), dengan tujuan meningkatkan kesadaran masyarakat Indonesia terhadap perubahan iklim. Climate Agenda bertujuan memberikan kontribusi langsung pada pelestarian lingkungan, bukan hanya melalui pendekatan teoritis, tetapi juga dengan tindakan nyata yang berdampak pada lingkungan sekitar. Diharapkan kegiatan ini akan menumbuhkan rasa peduli terhadap isu-isu lingkungan dan isu-isu lain yang terkait dengan keberlanjutan masa depan bumi.'
			},
			{
				title: 'Embassy Visitation',
				description:
					'Embassy Visitation adalah inisiatif kunjungan resmi dari Departemen External Affairs Foreign Policy Community of Indonesia (FPCI) Chapter Universitas Jenderal Soedirman (Unsoed) ke kantor-kantor kedutaan besar dan organisasi internasional yang ada di Indonesia. Program ini bertujuan untuk memperdalam pemahaman mahasiswa mengenai diplomasi internasional dan peran kedutaan dalam hubungan antarnegara. Melalui kunjungan ini, peserta diharapkan dapat menjalin dialog terbuka, meningkatkan apresiasi budaya, mendorong kolaborasi antarbangsa, dan mendapatkan wawasan langsung secara eksklusif dari para praktisi tentang praktik diplomasi dan kebijakan luar negeri.'
			}
		],
		gallery: [
			{
				title: 'Diplomacy Camp FPCI CHAPTER UNSOED',
				image: '/img/student-organizations/ukm/FPCI/DOCUMENTATION 1 (DC_24).webp'
			},
			{
				title: 'Climate Agenda FPCI CHAPTER UNSOED',
				image:
					'/img/student-organizations/ukm/FPCI/DOCUMENTATION 2 (CA_24)_ FPCI CHAPTER UNSOED.webp'
			},
			{
				title: 'Embassy Visitation FPCI CHAPTER UNSOED',
				image:
					'/img/student-organizations/ukm/FPCI/DOCUMENTATION 3 (EV_24)_FPCI CHAPTER UNSOED.webp'
			}
		],
		contact: {
			name: '@fpciunsoed',
			link: 'https://instagram.com/fpciunsoed'
		}
	},
	{
		name: 'Gokasi',
		slug: 'olahraga',
		id: 'gokasi',
		description:
			'UKM Karate Gokasi Unsoed merupakan salah satu organisasi mahasiswa di Universitas Jenderal Soedirman yang berfokus pada seni bela diri karate yang mewadahi semua perguruan dan aliran dengan tujuan utama mempererat tali silaturahmi di lingkungan kampus Universitas Jenderal Soedirman, dan menjalin hubungan yang harmonis dengan dojo karate di seluruh Jawa Tengah yang bernaung di bawah FORKI.',
		longDescription:
			'UKM Karate Gokasi Unsoed merupakan salah satu organisasi mahasiswa di Universitas Jenderal Soedirman yang berfokus pada seni bela diri karate yang mewadahi semua perguruan dan aliran dengan tujuan utama mempererat tali silaturahmi di lingkungan kampus Universitas Jenderal Soedirman, dan menjalin hubungan yang harmonis dengan dojo karate di seluruh Jawa Tengah yang bernaung di bawah FORKI. UKM ini memainkan peran penting dalam membentuk karakter dan keterampilan anggotanya, serta sebagai wadah bagi para mahasiswa untuk mengasah kemampuan karate, tidak hanya menekankan pada aspek fisik, tetapi juga mengajarkan nilai-nilai disiplin, tanggung jawab, dan kerjasama tim. Anggotanya tidak hanya dilatih untuk menjadi karateka yang handal, tetapi juga individu yang siap berkontribusi positif di masyarakat. UKM Karate Gokasi Unsoed bukan hanya tentang belajar bela diri, tetapi juga tentang membangun jaringan pertemanan yang luas, mengembangkan diri, dan menjadi bagian dari keluarga besar karateka yang penuh semangat dan prestasi.',
		image: '/img/student-organizations/ukm/Gokasi/logo.webp',
		href: '/ukm/gokasi',
		events: [
			{
				title: 'Latihan rutin',
				description: 'Setiap senin, rabu, dan jum’at (19.00-selesai)'
			},
			{
				title: 'Training center',
				description: ''
			},
			{
				title: 'Mengikuti kejuaraan',
				description: ''
			},
			{
				title: 'Merchandise',
				description: ''
			},
			{
				title: 'Fun Game',
				description: ''
			},
			{
				title: 'Malam Keakraban',
				description: ''
			}
		],
		gallery: [
			{
				title: 'Dokumentasi Karate Gokasi #1',
				image: '/img/student-organizations/ukm/Gokasi/Dokumentasi-Karate-Gokasi-1.webp'
			},
			{
				title: 'Dokumentasi Karate Gokasi #2',
				image: '/img/student-organizations/ukm/Gokasi/Dokumentasi-Karate-Gokasi-2.webp'
			},
			{
				title: 'Dokumentasi Karate Gokasi #3',
				image: '/img/student-organizations/ukm/Gokasi/Dokumentasi-Karate-Gokasi-3.webp'
			}
		],
		contact: {
			name: '@karateunsoed',
			link: 'https://instagram.com/karateunsoed'
		}
	},
	{
		name: 'Himabisi KIP-K',
		slug: 'kesenian',
		id: 'himabisi',
		description:
			'Himpunan Mahasiswa Bidikmisi & KIP-K (Himabisi KIP-K) Unsoed adalah organisasi atau himpunan yang mengemban misi meningkatkan pemahaman dan rasa saling memiliki terhadap organisasi dan sesama mahasiswa penerima beasiswa Bidikmisi dan Kartu Indonesia Pintar Kuliah Universitas Jenderal Soedirman, membangun solidaritas antar mahasiswa Bidikmisi dan Kartu Indonesia Pintar Kuliah Universitas Jenderal Soedirman, membentuk mahasiswa Bidikmisi dan Kartu Indonesia Pintar Kuliah yang kreatif, inovatif, dan kontributif serta menumbuhkan rasa kepedulian dengan berbasis pengabdian masyarakat.',
		longDescription:
			'Himpunan Mahasiswa Bidikmisi & KIP-K (Himabisi KIP-K) Unsoed adalah organisasi atau himpunan yang mengemban misi meningkatkan pemahaman dan rasa saling memiliki terhadap organisasi dan sesama mahasiswa penerima beasiswa Bidikmisi dan Kartu Indonesia Pintar Kuliah Universitas Jenderal Soedirman, membangun solidaritas antar mahasiswa Bidikmisi dan Kartu Indonesia Pintar Kuliah Universitas Jenderal Soedirman, membentuk mahasiswa Bidikmisi dan Kartu Indonesia Pintar Kuliah yang kreatif, inovatif, dan kontributif serta menumbuhkan rasa kepedulian dengan berbasis pengabdian masyarakat.',
		image: '/img/student-organizations/ukm/Himabisi/logo.webp',
		href: '/ukm/himabisi',
		events: [
			{
				title: 'Bidikmisi Mengabdi',
				description:
					'Merupakan kegiatan pengabdian dalam jangka waktu tertentu di salah satu desa di Purwokerto dengan mengedepankan kesejahteraan masyarakat dan peningkatan taraf hidup masyarakat melalui kegiatan/program yang seru dan menyenangkan.'
			},
			{
				title: 'Essai dan Infografis Competition',
				description:
					'Merupakan kegiatan perlombaan bidang akademik Essay dan Infografis skala nasional yang diikuti oleh peserta di seluruh mahasiswa indonesia'
			},
			{
				title: 'Fun Gathering',
				description:
					'Merupakan kegiatan penyambutan mahasiswa baru KIP-K universitas Jenderal Soedirman sebagai gerbang awal memahami hak dan kewajiban sebagai mahasiswa KIP-K serta meningkatkan kesiapan diri sebagai mahasiswa KI-PK yang mandiri dan siap mengarungi samudra perkuliahan.'
			},
			{
				title: 'Seminar Inspiratif Mahasiswa KIP-K',
				description:
					'Merupakan kegiatan seminar inspiratif dengan menghadirkan pembicara yang pakar di bidangnya dengan topik pengembangan motivasi diri untuk mahasiswa KIP-K universitas Jenderal Soedirman'
			}
		],
		gallery: [
			{
				title: 'Bakti Masyarakat',
				image: '/img/student-organizations/ukm/Himabisi/bm.webp'
			},
			{
				title: 'Fun Gathering',
				image: '/img/student-organizations/ukm/Himabisi/fungath.webp'
			},
			{
				title: 'Kegiatan Visitasi Himabisi KIP-K',
				image: '/img/student-organizations/ukm/Himabisi/IMG-20240520-WA0038.webp'
			}
		],
		contact: {
			name: '@himabisi_kipk_unsoed',
			link: 'https://instagram.com/himabisi_kipk_unsoed'
		}
	},
	{
		name: 'Kazoku',
		slug: 'kesenian',
		id: 'kazoku',
		description:
			'“Kazoku Unsoed” merupakan UKM jejepangan mahasiswa yang bergerak di perguruan tinggi di kota Purwokerto, tepatnya di Universitas Jenderal Soedirman. Secara harfiah, kata “Kazoku” sendiri merupakan istilah dari bahasa Jepang yang berarti “keluarga”, di mana nama tersebut menggambarkan sebuah kekeluargaan bagi mahasiswa yang memiliki minat terkait budaya jejepangan. “Unsoed” merupakan akronim dari Universitas Jenderal Soedirman.',
		longDescription:
			'“Kazoku Unsoed” merupakan UKM jejepangan mahasiswa yang bergerak di perguruan tinggi di kota Purwokerto, tepatnya di Universitas Jenderal Soedirman. Secara harfiah, kata “Kazoku” sendiri merupakan istilah dari bahasa Jepang yang berarti “keluarga”, di mana nama tersebut menggambarkan sebuah kekeluargaan bagi mahasiswa yang memiliki minat terkait budaya jejepangan. “Unsoed” merupakan akronim dari Universitas Jenderal Soedirman.\n\nSecara garis besar, Kazoku mempunyai beberapa jabatan kepengurusan dan komisi. Jabatan kepengurusan yang terdiri atas Shogun, Fukushogun, sekretaris, dan bendahara dan divisi yang terdiri atas Komisi Kedisiplinan, Komisi Artekoi, Komiai Kazohub, dan Komisi Rumah Tangga',
		image: '/img/student-organizations/ukm/Kazoku/logo.webp',
		href: '/ukm/kazoku',
		events: [
			{
				title: 'Bahas Kanji',
				description: ''
			},
			{
				title: 'Kosuto',
				description: ''
			},
			{
				title: 'Irastar',
				description: ''
			}
		],
		gallery: [
			{
				title: 'Kegiatan Komunitas Kazoku',
				image: '/img/student-organizations/ukm/Kazoku/DSC08625 (2).webp'
			},
			{
				title: 'Gathering Januari 2025',
				image: '/img/student-organizations/ukm/Kazoku/IMG_20250126_154023.webp'
			},
			{
				title: 'Kegiatan Februari 2025',
				image: '/img/student-organizations/ukm/Kazoku/IMG_20250202_164346.webp'
			},
			{
				title: 'Event Kazoku',
				image: '/img/student-organizations/ukm/Kazoku/IMG_2456.webp'
			}
		],
		contact: {
			name: '@kazoku.unsoed',
			link: 'https://instagram.com/kazoku.unsoed'
		}
	},
	{
		name: 'Shorinji Kempo',
		slug: 'olahraga',
		id: 'kempo',
		description:
			'UKM Shorinji Kempo sebagai salah satu unit kegiatan mahasiswa bela diri di Universitas Jenderal Soedirman, merupakan wadah pengembangan diri bagi mahasiswa yang memiliki minat dalam bidang seni bela diri, khususnya Shorinji Kempo. UKM ini aktif menyelenggarakan berbagai kegiatan positif yang mencakup aspek keolahragaan, spiritualitas, pengembangan karakter, serta keterampilan organisasi.',
		longDescription:
			'UKM Shorinji Kempo sebagai salah satu unit kegiatan mahasiswa bela diri di Universitas Jenderal Soedirman, merupakan wadah pengembangan diri bagi mahasiswa yang memiliki minat dalam bidang seni bela diri, khususnya Shorinji Kempo. UKM ini aktif menyelenggarakan berbagai kegiatan positif yang mencakup aspek keolahragaan, spiritualitas, pengembangan karakter, serta keterampilan organisasi.',
		image: '/img/student-organizations/ukm/Kempo/logo.webp',
		href: '/ukm/kempo',
		events: [
			{
				title: 'Pelatihan pemantapan teknik dan ujian kenaikan tingkat',
				description:
					'Para Kenshi Dojo Unsoed secara rutin mengikuti kegiatan ini baik dalam skala lokal, regional, maupun nasional. Hasilnya, banyak anggota yang telah meraih prestasi membanggakan melalui kelulusan ujian dan pencapaian dalam kejuaraan baik lokal, regional, dan nasional.'
			},
			{
				title: 'Latihan Bersama Antar Dojo',
				description:
					'Yang menjadi ajang silaturahmi sekaligus peningkatan kemampuan teknik para Kenshi. Kegiatan ini melibatkan dojo-dojo dari berbagai universitas maupun daerah, sehingga menciptakan atmosfer latihan yang kompetitif namun tetap bersahabat.'
			}
		],
		gallery: [
			{
				title: 'Kompetisi Kempo',
				image: '/img/student-organizations/ukm/Kempo/Foto-2.webp'
			},
			{
				title: 'Kompetisi Kempo',
				image: '/img/student-organizations/ukm/Kempo/Foto-3.webp'
			},
			{
				title: 'Kompetisi Kempo',
				image: '/img/student-organizations/ukm/Kempo/Foto-5.webp'
			},
			{
				title: 'Kompetisi Kempo',
				image: '/img/student-organizations/ukm/Kempo/Foto-6.webp'
			}
		],
		contact: {
			name: '@shorinjikempo.unsoed',
			link: 'https://instagram.com/shorinjikempo.unsoed'
		}
	},
	{
		name: 'KSR PMI UNIT UNSOED',
		slug: 'organisasi',
		id: 'ksr-pmi',
		description:
			'KSR PMI Unit Universitas Jenderal Soedirman merupakan organisasi yang bergerak dalam bidang kepalangmerahan dan kemanusiaan. KSR PMI Unit Unsoed merupakan organisasi dibawah naungan birokrasi Universitas Jenderal Soedirman dan Palang Merah Indonesia. UKM ini bertujuan memberikan pemahaman kepada mahasiswa mengenai pertolongan pertama, kebencanaan, serta kegiatan kemanusiaan lainnya.',
		longDescription:
			'KSR PMI Unit Universitas Jenderal Soedirman merupakan organisasi yang bergerak dalam bidang kepalangmerahan dan kemanusiaan. KSR PMI Unit Unsoed merupakan organisasi dibawah naungan birokrasi Universitas Jenderal Soedirman dan Palang Merah Indonesia. UKM ini bertujuan memberikan pemahaman kepada mahasiswa mengenai pertolongan pertama, kebencanaan, serta kegiatan kemanusiaan lainnya. \n\nBeberapa program kerja unggulan KSR PMI Unit Unsoed antara lain: Rangkaian Penerimaan Anggota Baru, Sekolah Binaan, Kelas Pertolongan Pertama, Rescue Class (Vertical Rescue, Sar Gunung, Water Safety), Donor Darah, Desa Binaan, Jaga Medis, dan First Aid Invitation (lomba eksternal untuk KSR dan PMR).',
		image: '/img/student-organizations/ukm/KSR PMI/logo.webp',
		href: '/ukm/ksr-pmi',
		events: [
			{
				title: 'Rangkaian Penerimaan Anggota Baru',
				description: ''
			},
			{
				title: 'Sekolah Binaan',
				description: ''
			},
			{
				title: 'Kelas Pertolongan Pertama',
				description: ''
			},
			{
				title: 'Rescue Class',
				description: 'Vertical Rescue, Sar Gunung, Water Safety'
			},
			{
				title: 'Donor Darah',
				description: ''
			},
			{
				title: 'Desa Binaan',
				description: ''
			},
			{
				title: 'Jaga Medis',
				description: ''
			},
			{
				title: 'First Aid Invitation',
				description: 'lomba eksternal untuk KSR dan PMR'
			}
		],
		gallery: [
			{
				title: 'Dokumentasi KSR PMI Unit Unsoed',
				image: '/img/student-organizations/ukm/KSR PMI/Dokumentasi-KSR-PMI-1.webp'
			},
			{
				title: 'Kegiatan KSR PMI Unit Unsoed',
				image: '/img/student-organizations/ukm/KSR PMI/Dokumentasi-KSR-PMI-2.webp'
			},
			{
				title: 'Aktivitas KSR PMI Unit Unsoed',
				image: '/img/student-organizations/ukm/KSR PMI/Dokumentasi-KSR-PMI-3.webp'
			}
		],
		contact: {
			name: '@ksrpmiunsoed ',
			link: 'https://instagram.com/ksrpmiunsoed '
		}
	},
	{
		name: 'LPM Sketsa',
		slug: 'bahasa',
		id: 'lpm-sketsa',
		description:
			'Unit Kegiatan Mahasiswa Lembaga Pers Mahasiswa Sketsa, atau disingkat LPM Sketsa, merupakan organisasi kemahasiswaan yang bergerak di bidang jurnalistik.',
		longDescription:
			'Unit Kegiatan Mahasiswa Lembaga Pers Mahasiswa Sketsa, atau disingkat LPM Sketsa, merupakan organisasi kemahasiswaan yang bergerak di bidang jurnalistik. Berdiri di Purwokerto pada tahun 1988, baik secara de facto maupun de jure, LPM Sketsa menjadi satu-satunya UKM di Universitas Jenderal Soedirman yang fokus pada dunia jurnalistik. Sejak saat itu, LPM Sketsa menjadi wadah bagi mahasiswa untuk menyampaikan aspirasi serta secara rutin memproduksi berbagai karya jurnalistik, seperti straight news, feature, in-depth news, majalah, dan opini. Mengusung tagline “Pemandu Wawasan Almamater”, LPM Sketsa memiliki visi untuk membentuk masyarakat kampus yang cerdas, terbuka, dan kritis, berdasarkan nilai-nilai humanisme serta menjunjung tinggi prinsip-prinsip jurnalisme.',
		image: '/img/student-organizations/ukm/Lpm Sketsa/logo.webp',
		href: '/ukm/lpm-sketsa',
		events: [
			{
				title: 'Diskusi rutin',
				description: ''
			},
			{
				title: 'Pelatihan rutin',
				description: ''
			},
			{
				title: 'Podcast Sketcast',
				description: ''
			},
			{
				title: 'Majalah infosketsa',
				description: ''
			},
			{
				title: 'Diskusi publik',
				description: ''
			}
		],
		gallery: [
			{
				title: 'Diskusi Publik LPM Sketsa',
				image: '/img/student-organizations/ukm/Lpm Sketsa/Diskusi-Publik.webp'
			},
			{
				title: 'Pelantikan Pengurus LPM Sketsa',
				image: '/img/student-organizations/ukm/Lpm Sketsa/Pelantikan.webp'
			},
			{
				title: 'Pelatihan Rutin LPM Sketsa',
				image: '/img/student-organizations/ukm/Lpm Sketsa/Pelatihan-Rutin.webp'
			}
		],
		contact: {
			name: '@beritaunsoed',
			link: 'https://instagram.com/beritaunsoed'
		}
	},
	{
		name: 'Marching Band Bahana Putra Soedirman',
		slug: 'Kesenian',
		id: 'mb-bps',
		description:
			'Marching Band Bahana Putra Soedirman (MB BPS) adalah Unit Kegiatan Mahasiswa Universitas Jenderal Soedirman (Unsoed), Purwokerto, yang bergerak di bidang seni musik, khususnya marching band. Berdiri sejak tahun 1973, MB BPS menjadi wadah bagi mahasiswa untuk menyalurkan minat dan bakat dalam musik dan tari, sekaligus mengembangkan potensi diri melalui pembinaan dan pelatihan yang terstruktur. Tidak hanya fokus pada pengembangan keterampilan artistik, MB BPS juga menanamkan nilai kekompakan, kedisiplinan, semangat juang (espirit de corps), kemampuan sosial, serta keterampilan manajerial dan organisasi.',
		longDescription:
			'Marching Band Bahana Putra Soedirman (MB BPS) adalah Unit Kegiatan Mahasiswa Universitas Jenderal Soedirman (Unsoed), Purwokerto, yang bergerak di bidang seni musik, khususnya marching band. Berdiri sejak tahun 1973, MB BPS menjadi wadah bagi mahasiswa untuk menyalurkan minat dan bakat dalam musik dan tari, sekaligus mengembangkan potensi diri melalui pembinaan dan pelatihan yang terstruktur. Tidak hanya fokus pada pengembangan keterampilan artistik, MB BPS juga menanamkan nilai kekompakan, kedisiplinan, semangat juang (espirit de corps), kemampuan sosial, serta keterampilan manajerial dan organisasi. \n\nMB BPS terdiri atas empat divisi utama, yakni Brass Line, Battery Percussion, Pit Instrument, dan Color Guard. Untuk mendukung pengembangan kemampuan serta menjaga performa tim.',
		image: '/img/student-organizations/ukm/MB BPS/logo.webp',
		href: '/ukm/mb-bps',
		events: [
			{
				title: 'Latihan Reguler',
				description: ''
			},
			{
				title: 'Band Camp',
				description: ''
			},
			{
				title: 'Grand Event',
				description: ''
			}
		],
		gallery: [
			{
				title: 'Grand Event MB BPS 2024',
				image: '/img/student-organizations/ukm/MB BPS/Grand-Event-2024-1.webp'
			},
			{
				title: 'Grand Event MB BPS 2024',
				image: '/img/student-organizations/ukm/MB BPS/Grand-Event-2024-2.webp'
			},
			{
				title: 'Grand Event MB BPS 2024',
				image: '/img/student-organizations/ukm/MB BPS/Grand-Event-2024-3.webp'
			},
			{
				title: 'Latihan Bersama',
				image: '/img/student-organizations/ukm/MB BPS/Latihan-1.webp'
			},
			{
				title: 'Latihan Bersama',
				image: '/img/student-organizations/ukm/MB BPS/Latihan-2.webp'
			},
			{
				title: 'Latihan Bersama',
				image: '/img/student-organizations/ukm/MB BPS/Latihan-3.webp'
			},
			{
				title: 'Latihan Bersama',
				image: '/img/student-organizations/ukm/MB BPS/Latihan-4.webp'
			},
			{
				title: 'Latihan Bersama',
				image: '/img/student-organizations/ukm/MB BPS/Latihan-5.webp'
			},
			{
				title: 'Latihan Bersama',
				image: '/img/student-organizations/ukm/MB BPS/Latihan-6.webp'
			},
			{
				title: 'Latihan Bersama',
				image: '/img/student-organizations/ukm/MB BPS/Latihan-7.webp'
			},
			{
				title: 'Latihan Bersama',
				image: '/img/student-organizations/ukm/MB BPS/Latihan-Malam.webp'
			}
		],
		contact: {
			name: '@mbbps_unsoed',
			link: 'https://instagram.com/mbbps_unsoed'
		}
	},
	{
		name: 'Resimen Mahasiswa (MENWA)',
		slug: 'organisasi',
		id: 'menwa',
		description:
			'UKM Resimen Mahasiswa Mahadipa Batalyon 904/Kalayudha Universitas Jenderal Soedirman atau lebih dikenal dengan sebutan “MENWA” merupakan organisasi semi militer yang berada di bawah naungan perguruan tinggi, bertujuan untuk membina dan mendidik mahasiswa agar memiliki karakter yang disiplin, berjiwa pemimpin dan pengetahuan luas akan bela negara.',
		longDescription:
			'UKM Resimen Mahasiswa Mahadipa Batalyon 904/Kalayudha Universitas Jenderal Soedirman atau lebih dikenal dengan sebutan “MENWA” merupakan organisasi semi militer yang berada di bawah naungan perguruan tinggi, bertujuan untuk membina dan mendidik mahasiswa agar memiliki karakter yang disiplin, berjiwa pemimpin dan pengetahuan luas akan bela negara. Binaan langsung oleh TNI POLRI mampu menciptakan cikal-bakal mahasiswa yang berpengalaman dan bekal pengetahuan luas sehingga terciptalah generasi tangguh dan cemerlang. Menwa ini juga menjadi wadah pengembangan diri mahasiswa dalam aspek mental, fisik, dan nasionalisme melalui pelatihan-pelatihan semi-militer, pendidikan karakter, dan kegiatan sosial lainnya, terutama bakti serta mengayomi masyarakat dalam kesehariannya.\n\nUKM Menwa rutin mengadakan latihan latapgar (latihan pemantapan dan penyegaran) yang biasanya meliputi kegiatan flying fox, susur hutan, ekspedisi yon ke gunung, berenang, rapling, survival, futsal, mountaineering, serta kegiatan seru lainnya.\n\nMenwa sering dilibatkan dalam kegiatan kampus seperti kegiatan Upacara Peringatan Hari Besar Nasional, pengamanan wisuda, serta menjadi petugas pengibar bendera di lapangan Kampus kebanggaan, Universitas Jenderal Soedirman. Selain kegiatan dalam kampus, menwa juga melakukan kolaborasi dengan instansi kebencanaan seperti BASARNAS, BPBD, Purwokerto Rescue dan instansi lainnya, untuk berpartisipasi dalam menyalurkan bantuan berupa penanganan kebencanaan terhadap masyarakat yang terkena dampak dari tanah longsor, banjir, dan sebagainya.\n\nKamu tertantang ingin mencoba? Nantikan selalu kegiatan menarik kami lainnya di Instagram @menwa_unsoed dan daftarkan dirimu menjadi MAHASISWA YANG TANGGUH BERKARAKTER LUAR BIASA! Dan penuh pengalaman di UKM Resimen Mahasiswa Batalyon 904/Kalayudha Universitas Jenderal Soedirman bersama kami.\n\n“WIDYA CHASTRENA DHARMA SIDDHA, MENWA!”',
		image: '/img/student-organizations/ukm/Menwa/logo.webp',
		href: '/ukm/menwa',
		events: [
			{
				title: 'Latihan Latapgar (latihan pemantapan dan penyegaran)',
				description: ''
			},
			{
				title: 'Flying fox',
				description: ''
			},
			{
				title: 'Susur hutan',
				description: ''
			},
			{
				title: 'Ekspedisi yon ke gunung',
				description: ''
			},
			{
				title: 'Berenang',
				description: ''
			},
			{
				title: 'Rapling',
				description: ''
			},
			{
				title: 'Survival',
				description: ''
			},
			{
				title: 'Futsal',
				description: ''
			},
			{
				title: 'Mountaineering',
				description: ''
			},
			{
				title: 'Upacara Peringatan Hari Besar Nasional',
				description: ''
			},
			{
				title: 'Pengamanan wisuda',
				description: ''
			},
			{
				title: 'Petugas pengibar bendera kampus',
				description: ''
			},
			{
				title: 'Kolaborasi kebencanaan dengan BASARNAS, BPBD, Purwokerto Rescue, dll.',
				description: ''
			},
			{
				title: 'Penyaluran bantuan penanganan bencana (tanah longsor, banjir, dsb.)',
				description: ''
			}
		],
		gallery: [
			{
				title: 'Dokumentasi Menwa',
				image: '/img/student-organizations/ukm/Menwa/Dokumentasi_Menwa.webp'
			},
			{
				title: 'Kegiatan Menwa 1',
				image: '/img/student-organizations/ukm/Menwa/Dokumentasi_Menwa(1).webp'
			},
			{
				title: 'Kegiatan Menwa 2',
				image: '/img/student-organizations/ukm/Menwa/Dokumentasi_Menwa(2).webp'
			}
		],
		contact: {
			name: '@menwa_unsoed',
			link: 'https://instagram.com/menwa_unsoed'
		}
	},
	{
		name: 'Merpati Putih',
		slug: 'olahraga',
		id: 'merpati-putih',
		description:
			'Pencak silat merupakan salah satu warisan budaya bangsa Indonesia yang masih Eksis sampai saat ini,  Merpati putih merupakan salah satu perguruan pencak silat tangan kosong yang ada di Indonesia.',
		longDescription:
			'Pencak silat merupakan salah satu warisan budaya bangsa Indonesia yang masih Eksis sampai saat ini,  Merpati putih merupakan salah satu perguruan pencak silat tangan kosong yang ada di Indonesia. Seni Beladiri Tangan Kosong Merpati Putih yang organisasinya terbentuk pada tanggal 2 april 1963 di Yogyakarta, merupakan nilai budaya bangsa Indonesia yang diturunkan oleh Sang Guru Saring Hadi Purnomo kepada kedua putranya yaitu Poerwoto Hadi Purnomo dan Budi Santoso Hadi Purnomo (Alm).\n\nUKM Merpati Putih  merupakan Unit kegiatan mahasiswa yang berfokus kepada  cabang olahraga beladiri. UKM merpati putih dibentuk untuk mewadahi minat dan bakat mahasiswa dalam cabang olahraga beladiri.  Di UKM Merpati Putih tersendiri dapat dijadikan sebagai tempat membangun prestasi dan relasi yang baik. Di dalam UKM Merpati Putih selain diajarkan ilmu beladiri, terdapat juga ilmu lain  yang diajarkan seperti Getaran, Olah Nafas dan sebagainya.\n\nPengalaman mengikuti kegiatan UKM ini selama satu hari merupakan pengalaman yang sangat menyenangkan. Teman-teman UKM Merpati Putih sangat terbuka pada anggota baru yang bahkan kurang ahli dalam melakukan gerakan seperti tendangan dan pukulan . Prinsip yang mereka tekankan adalah “Sumbangsihku Tak Berharga namun Keikhlasanku Nyata .”',
		image: '/img/student-organizations/ukm/Merpati Putih/logo.webp',
		href: '/ukm/merpati-putih',
		events: [
			{
				title: 'Larut (Latihan Rutin)',
				description: ''
			},
			{
				title: 'TC (Training Center)',
				description: ''
			},
			{
				title: 'Kejuaraan',
				description: 'Fight (Event nasional), Seni, Pomprov'
			},
			{
				title: 'Makrab',
				description: ''
			}
		],
		gallery: [
			{
				title: 'Kegiatan Mei 2024',
				image: '/img/student-organizations/ukm/Merpati Putih/IMG-20240505-WA0192.webp'
			},
			{
				title: 'Kegiatan Agustus 2024',
				image: '/img/student-organizations/ukm/Merpati Putih/IMG-20240805-WA0048.webp'
			},
			{
				title: 'Kegiatan Agustus 2024',
				image: '/img/student-organizations/ukm/Merpati Putih/IMG-20240813-WA0034.webp'
			},
			{
				title: 'Kegiatan November 2024',
				image: '/img/student-organizations/ukm/Merpati Putih/IMG-20241118-WA0062.webp'
			}
		],
		contact: {
			name: '@merpatiputihunsoed',
			link: 'https://instagram.com/merpatiputihunsoed'
		}
	},
	{
		name: 'Muda Bersinar',
		slug: 'akademik',
		id: 'muda-bersinar',
		description:
			'UKM Anti Narkoba "Muda Bersinar" atau Muda Bersih Anti Narkoba merupakan Unit Kegiatan Mahasiswa Universitas Jenderal Soedirman yang memiliki visi untuk mewujudkan garda utama mahasiswa unsoed bebas dari penyalahgunaan dan peredaran gelap narkotika.',
		longDescription:
			'UKM Anti Narkoba "Muda Bersinar" atau Muda Bersih Anti Narkoba merupakan Unit Kegiatan Mahasiswa Universitas Jenderal Soedirman yang memiliki visi untuk mewujudkan garda utama mahasiswa unsoed bebas dari penyalahgunaan dan peredaran gelap narkotika, serta menginspirasi perubahan yang positif.\n\nBersama-sama, kita dapat menciptakan perubahan positif, membantu generasi muda untuk tumbuh dan bersinar tanpa terpengaruh oleh narkoba. Mari bersama-sama menjadi bagian dari perubahan dan membantu menciptakan masa depan yang bebas dari narkoba.\n\nMelalui berbagai program edukasi, sosialisasi, dan kegiatan preventif, Muda Bersinar berkomitmen untuk memberikan pemahaman kepada mahasiswa dan masyarakat tentang bahaya narkoba serta dampak negatifnya. Organisasi ini juga aktif dalam kegiatan pemberdayaan masyarakat dan pengembangan karakter positif bagi generasi muda.',
		image: '/img/student-organizations/ukm/Muda Bersinar/logo.webp',
		href: '/ukm/muda-bersinar',
		events: [
			{
				title: '',
				description: ''
			}
		],
		gallery: [
			{
				title: 'Dokumentasi Kegiatan',
				image: '/img/student-organizations/ukm/Muda Bersinar/documentation-1.webp'
			},
			{
				title: 'Dokumentasi Kegiatan',
				image: '/img/student-organizations/ukm/Muda Bersinar/documentation-2.webp'
			},
			{
				title: 'Dokumentasi Kegiatan',
				image: '/img/student-organizations/ukm/Muda Bersinar/documentation-3.webp'
			}
		],
		contact: {
			name: '@muda_bersinar_unsoed',
			link: 'https://instagram.com/muda_bersinar_unsoed'
		}
	},
	{
		name: 'Panjat Tebing',
		slug: 'alam',
		id: 'panjat-tebing',
		description:
			'UKM Panjat Tebing Unsoed merupakan unit kegiatan mahasiswa yang bergerak di bidang olahraga. Panjat Tebing Unsoed  lahir sejak tahun 2009 dibentuk sebagai wadah bagi mahasiswa dalam mengembangkan bakat olahraga hingga menorehkan prestasinya di bidang panjat tebing.',
		longDescription:
			'UKM Panjat Tebing Unsoed merupakan unit kegiatan mahasiswa yang bergerak di bidang olahraga. Panjat Tebing Unsoed  lahir sejak tahun 2009 dibentuk sebagai wadah bagi mahasiswa dalam mengembangkan bakat olahraga hingga menorehkan prestasinya di bidang panjat tebing. Namun Panjat Tebing Unsoed tidak hanya berkecimpung pada kompetisi dan per atlet an saja, karna di ukm PTU juga ada divisi Rock Climbing yang mengajak kalian untuk traveling manjat ketebing asli, jadi bagi kalian yang ingin eksplor  bisa ikut! Bukan hanya itu sama seperti unit kegiatan lain di PTU kita juga belajar untuk organisasi. Panjat Tebing Unsoed adalah wadah terbaik bagi kamu yang ingin mengasah bakat dan meningkatkan kemampuanmu, Bergabunglah bersama kami untuk menantang diri, memperkuat fisik, dan membangun semangat juang dalam suasana kekeluargaan yang penuh motivasi. Jangan lewatkan kesempatan untuk berkembang, berprestasi, dan menjalin persahabatan baru. Ayo  gabung sekarang! “PTU! Jaya Jaya Jaya”',
		image: '/img/student-organizations/ukm/Panjat Tebing/logo.webp',
		href: '/ukm/panjat-tebing',
		events: [
			{
				title: 'Latihan Panjat Tebing',
				description: 'Latihan teknik panjat tebing secara rutin'
			}
		],
		gallery: [
			{
				title: 'Kegiatan-1',
				image: '/img/student-organizations/ukm/Panjat Tebing/Kegiatan-1.webp'
			},
			{
				title: 'Kegiatan-2',
				image: '/img/student-organizations/ukm/Panjat Tebing/Kegiatan-2.webp'
			}
		],
		contact: {
			name: '@climbing_unsoed',
			link: 'https://instagram.com/climbing_unsoed'
		}
	},
	{
		name: 'PSHT',
		slug: 'olahraga',
		id: 'psht',
		description:
			'Persaudaraan Setia Hati Terate (PSHT) Universitas Jenderal Soedirman adalah unit kegiatan mahasiswa yang berfokus pada pengembangan bela diri pencak silat.',
		longDescription:
			'Persaudaraan Setia Hati Terate (PSHT) Universitas Jenderal Soedirman adalah unit kegiatan mahasiswa yang berfokus pada pengembangan bela diri pencak silat. UKM PSHT didirikan pada 1 September 1989 dengan tujuan mendidik dan menjadikan manusia berbudi luhur, tahu benar dan salah, beriman dan bertakwa kepada Tuhan Yang Maha Esa.\n\tProgram latihan pencak silat PSHT dapat mengasah kemampuan para mahasiswa dengan gerakan pencak silat, saling bertukar pengetahuan tentang teknik pencak silat terbaru untuk mewujudkan prestasi, minat dan bakat mahasiswa, serta menjalin persaudaraan antar siswa dan warga PSHT.',
		image: '/img/student-organizations/ukm/Psht/logo.webp',
		href: '/ukm/psht',
		events: [
			{
				title: 'Latihan rutin keatletan',
				description: ''
			},
			{
				title: 'Latihan reguler',
				description: ''
			},
			{
				title: 'Pendelegasian atlet dalam kejuaraan pencak silat nasional',
				description: ''
			},
			{
				title: 'Soedirman National Terate Championship (SNTC)',
				description: 'Pengadaan kejuaraan nasional setiap 2 tahun sekali'
			},
			{
				title: 'Malam keakraban (makrab) anggota dan pengurus',
				description: ''
			},
			{
				title: 'Ujian Kenaikan Tingkat',
				description: ''
			},
			{
				title: 'Sarasehan sesepuh PSHT',
				description: ''
			}
		],
		gallery: [
			{
				title: 'Latihan Bela Diri PSHT',
				image: '/img/student-organizations/ukm/Psht/Latihan-PSHT.webp'
			},
			{
				title: 'Dokumentasi Kegiatan PSHT',
				image: '/img/student-organizations/ukm/Psht/Dokumentasi-PSHT.webp'
			},
			{
				title: 'Soedirman National Terate Championship (SNTC)',
				image: '/img/student-organizations/ukm/Psht/SNTC-PSHT.webp'
			}
		],
		contact: {
			name: '@psht_unsoed',
			link: 'https://instagram.com/psht_unsoed'
		}
	},
	{
		name: 'Paduan Suara Mahasiswa Gita Buana Soedirman',
		slug: 'kesenian',
		id: 'psm-gbs',
		description:
			'Unit kegiatan mahasiswa Paduan Suara Mahasiswa Gita Buana Soedirman awalnya terbentuk pada tahun 1976 dengan nama Unit Paduan Suara Mahasiswa Jenderal Soedirman (UPSM UNSOED) yang pada saat itu dibina oleh Bapak Dr. Anarna, kemudian pada tahun 1979 terjadi reorganisasi dengan Pembina Bapak Ir. Yohanes Soebagjo, Mp. sedangkan pada tahun 1989 PSM dibina oleh Bapak Haryanto Dwiatmojo, SH, M.Hum hingga sekarang.',
		longDescription:
			'Unit kegiatan mahasiswa Paduan Suara Mahasiswa Gita Buana Soedirman awalnya terbentuk pada tahun 1976 dengan nama Unit Paduan Suara Mahasiswa Jenderal Soedirman (UPSM UNSOED) yang pada saat itu dibina oleh Bapak Dr. Anarna, kemudian pada tahun 1979 terjadi reorganisasi dengan Pembina Bapak Ir. Yohanes Soebagjo, Mp. sedangkan pada tahun 1989 PSM dibina oleh Bapak Haryanto Dwiatmojo, SH, M.Hum hingga sekarang. Berdasarkan hasil Musyawarah Anggota pada tanggal 18 Oktober 2005, UPSM UNSOED resmi berganti nama menjadi Paduan Suara Mahasiswa Gita Buana Soedirman (PSM GBS)\n\nPaduan Suara Mahasiswa Gita Buana Soedirman (PSM GBS) adalah salah satu organisasi di bawah Unit Kegiatan Mahasiswa Universitas Soedirman yang Jenderal mewadahi mahasiswa-mahasiswi UNSOED dalam menyalurkan, mengembangkan serta meningkatkan kemampuan dalam bidang seni suara olah vokal serta menunjang eksistensinya sebagai organisasi paduan suara mahasiswa. Selain itu, Paduan Suara Mahasiswa Gita Buana Soedirman juga berperan aktif dalam upaya melestarikan lagu-lagu daerah dan lagu nasional karya para seniman besar Indonesia dengan cara menyanyikannya di berbagai kegiatan, baik di acara protokoler lingkungan universitas, maupun acara di luar universitas dengan melalui berbagai kompetisi paduan suara. Prestasi yang telah diraih:\n1.\tGold Medal B kategori Mixed Youth Choir pada 10th International Brawijaya Choir Festival Tahun 2022;\n2.\tGold Medal B kategori Folksong Choir pada 10th International Brawijaya Choir Festival Tahun 2022;\n3.\tGold Award kategori Ethnic/Traditional Music di Taipei International Choral Competition 2019;\n4.\tSilver Award kategori Mixed Choir di Taipei International Choral Competition 2019,\n5.\tMedali Emas dalam kompetisi Bali International Choir Festival tahun 2018;',
		image: '/img/student-organizations/ukm/PSM GBS/logo.webp',
		href: '/ukm/psm-gbs',
		events: [
			{
				title:
					'Gold Medal B kategori Mixed Youth Choir - 10th International Brawijaya Choir Festival 2022',
				description: ''
			},
			{
				title:
					'Gold Medal B kategori Folksong Choir - 10th International Brawijaya Choir Festival 2022',
				description: ''
			},
			{
				title:
					'Gold Award kategori Ethnic/Traditional Music - Taipei International Choral Competition 2019',
				description: ''
			},
			{
				title: 'Silver Award kategori Mixed Choir - Taipei International Choral Competition 2019',
				description: ''
			},
			{
				title: 'Medali Emas - Bali International Choir Festival 2018',
				description: ''
			}
		],
		gallery: [
			{
				title: 'Dokumentasi PSM GBS',
				image: '/img/student-organizations/ukm/PSM GBS/DOKUMENTASI-PSM-GBS.webp'
			},
			{
				title: 'Dokumentasi PSM GBS 1',
				image: '/img/student-organizations/ukm/PSM GBS/DOKUMENTASI-PSM-GBS-1.webp'
			},
			{
				title: 'Dokumentasi PSM GBS 2',
				image: '/img/student-organizations/ukm/PSM GBS/DOKUMENTASI-PSM-GBS-2.webp'
			}
		],
		contact: {
			name: '@psmgbs_unsoed',
			link: 'https://instagram.com/psmgbs_unsoed'
		}
	},
	{
		name: 'Racana',
		slug: 'alam',
		id: 'racana',
		description:
			'Racana Soedirman adalah Unit Kegiatan Mahasiswa Universitas Jenderal Soedirman yang bergerak di bidang kepramukaan dengan tujuan mewujudkan keselarasan antara Tri Bina Gerakan Pramuka dan Tri Darma Perguruan Tinggi. Racara Soedirman akan membentuk anggotanya menjadi pemuda yang unggul dalam prestasi dan luhur dalam budi pekerti dengan menerapkan Kode Kehormatan Gerakan Pramuka.',
		longDescription:
			'Racana Soedirman adalah Unit Kegiatan Mahasiswa Universitas Jenderal Soedirman yang bergerak di bidang kepramukaan dengan tujuan mewujudkan keselarasan antara Tri Bina Gerakan Pramuka dan Tri Darma Perguruan Tinggi. Racara Soedirman akan membentuk anggotanya menjadi pemuda yang unggul dalam prestasi dan luhur dalam budi pekerti dengan menerapkan Kode Kehormatan Gerakan Pramuka.',
		image: '/img/student-organizations/ukm/Racana/logo.webp',
		href: '/ukm/racana',
		events: [
			{
				title: 'Pendidikan dan Pelatihan Wajib (Palawa)',
				description: ''
			},
			{
				title: 'Pendidikan dan Pelatihan Instruktur Muda Racana (PIMR)',
				description: ''
			},
			{
				title: 'Amaliyah Ramadan',
				description: ''
			},
			{
				title: 'HUT Racana Soedirman',
				description: ''
			},
			{
				title: 'Penerimaan Anggota Baru (PAB)',
				description: ''
			},
			{
				title: 'Temu Karya Pramuka Penegak (TKPP)',
				description: ''
			},
			{
				title: 'Musyawarah Pandega',
				description: ''
			}
		],
		gallery: [
			{
				title: 'Dokumentasi Racana',
				image: '/img/student-organizations/ukm/Racana/DOKUMENTASI_RACANA.webp'
			},
			{
				title: 'Dokumentasi Racana 2',
				image: '/img/student-organizations/ukm/Racana/DOKUMENTASI 2_RACANA.webp'
			},
			{
				title: 'Dokumentasi Racana 3',
				image: '/img/student-organizations/ukm/Racana/DOKUMENTASI 3_RACANA.webp'
			}
		],
		contact: {
			name: '@racanasoedirman_unsoed',
			link: 'https://instagram.com/racanasoedirman_unsoed'
		}
	},
	{
		name: 'SEF',
		slug: 'bahasa',
		id: 'sef',
		description:
			'Student English Forum (SEF) Unsoed adalah organisasi berbasis Bahasa Inggris terbesar di Universitas Jenderal Soedirman yang berdiri pada tahun 1979. SEF menjadi wadah bagi organizer dan member untuk mengembangkan kemampuan Bahasa Inggris dan interpersonal.',
		longDescription:
			'Student English Forum (SEF) Unsoed adalah organisasi berbasis Bahasa Inggris terbesar di Universitas Jenderal Soedirman yang berdiri pada tahun 1979. SEF menjadi wadah bagi organizer dan member untuk mengembangkan kemampuan Bahasa Inggris dan interpersonal. Mahasiswa dari berbagai disiplin ilmu di Unsoed berkolaborasi dalam SEF untuk menjangkau dunia melalui Bahasa Inggris. “Be One Step Forward” menjadi motto organisasi ini karena kami selalu berusaha memberikan dampak terhadap lingkungan sekitar dengan membuat kemajuan dalam perjalanan SEF.\nEmpat departemen yang ada di SEF Unsoed bersinergi dalam mewujudkan visi misi organisasi yang direalisasikan melalui program-program kerjanya. Selain itu, SEF Unsoed juga berdedikasi dalam pengembangan kemampuan Bahasa Inggris internal maupun eksternal melalui berbagai program khusus lain seperti Translation, Debate Coaching, SGSC (SEF Grammar and Speaking Class) untuk members SEF, TOEFL Class, dan Private Class.\n\nStudent English Forum Unsoed, Be One Step Forward!',
		image: '/img/student-organizations/ukm/SEF/logo.webp',
		href: '/ukm/sef',
		events: [
			{
				title: 'Translation',
				description: ''
			},
			{
				title: 'Debate Coaching',
				description: ''
			},
			{
				title: 'SGSC (SEF Grammar and Speaking Class)',
				description: ''
			},
			{
				title: 'TOEFL Class',
				description: ''
			},
			{
				title: 'Private Class',
				description: ''
			}
		],
		gallery: [
			{
				title: 'SEF Goes to Village (SGV)',
				image: '/img/student-organizations/ukm/SEF/SEF-Goes-to-Village.webp'
			},
			{
				title: 'National Universities Debating Championship',
				image: '/img/student-organizations/ukm/SEF/Debate-NUDC.webp'
			},
			{
				title: 'SGSC Membership Program',
				image: '/img/student-organizations/ukm/SEF/Membership-SGSC.webp'
			}
		],
		contact: {
			name: '@sef.unsoed',
			link: 'https://instagram.com/sef.unsoed'
		}
	},
	{
		name: 'Soedirman Robotic',
		slug: 'teknologi',
		id: 'soedirman-robotic',
		description:
			'Soedirman Robotic Team (SRT) adalah salah satu Unit Kegiatan Mahasiswa (UKM) di Universitas Jenderal Soedirman yang bergerak dalam pengembangan ilmu robotika dan keorganisasian di Universitas Jenderal Soedirman. UKM SRT diresmikan pada tanggal 9 Juni tahun 2021. SRT memiliki 5 Divisi Tim Robot yaitu Tim Blakasutha (KRAI), Tim Satria (KRSRI), Tim Yudishtira (KRTMI), Tim Biantara (KRTI-RP dan KRTI-FW). Selain Divisi Tim Robot, UKM SRT juga memiliki divisi manajemen, yaitu BPH (Ketua dan wakil ketua SRT, Finance Manager, dan Secretary), Creative Media, Public Relations (PR), Human Resource Development (HRD), Sponsorship dan Team Manager.',
		longDescription:
			'Soedirman Robotic Team (SRT) adalah salah satu Unit Kegiatan Mahasiswa (UKM) di Universitas Jenderal Soedirman yang bergerak dalam pengembangan ilmu robotika dan keorganisasian di Universitas Jenderal Soedirman. UKM SRT diresmikan pada tanggal 9 Juni tahun 2021. SRT memiliki 5 Divisi Tim Robot yaitu Tim Blakasutha (KRAI), Tim Satria (KRSRI), Tim Yudishtira (KRTMI), Tim Biantara (KRTI-RP dan KRTI-FW). Selain Divisi Tim Robot, UKM SRT juga memiliki divisi manajemen, yaitu BPH (Ketua dan wakil ketua SRT, Finance Manager, dan Secretary), Creative Media, Public Relations (PR), Human Resource Development (HRD), Sponsorship dan Team Manager.',
		image: '/img/student-organizations/ukm/Soedirman Robotic/logo.webp',
		href: '/ukm/soedirman-robotic',
		events: [
			{
				title: 'Kontes Robot Indonesia (KRI) dan Kontes Robot Terbang Indonesia (KRTI)',
				description: ''
			},
			{
				title: 'Penyetaraan SKS bagi peserta dan juara Kontes Robot Nasional',
				description:
					'Apabila lolos Kontes Robot Nasional maka akan mendapatkan penyetaraan SKS sebesar 5-7sks. Apabila juara pada Kontes Robot Nasional maka jumlah sks yang didapat akan semakin tinggi.'
			}
		],
		gallery: [
			{
				title: 'KRTMI',
				image: '/img/student-organizations/ukm/Soedirman Robotic/KRTMI.webp'
			},
			{
				title: 'KRTI',
				image: '/img/student-organizations/ukm/Soedirman Robotic/KRTI.webp'
			},
			{
				title: '',
				image: '/img/student-organizations/ukm/Soedirman Robotic/UMS14625.webp'
			}
		],
		contact: {
			name: '@srtunsoed',
			link: 'https://instagram.com/srtunsoed'
		}
	},
	{
		name: 'Taekwondo',
		slug: 'olahraga',
		id: 'taekwondo',
		description:
			'Taekwondo Unsoed didirikan tahun 1995 oleh Sabeum Cornelius Prasetyono mahasiswa fakultas biologi asal Jakarta. Pada awal berdiri, Taekwondo Unsoed merupakan UKM Fakultas Biologi dan pada tahun 1997 menjadi UKM Universitas sampai sekarang.',
		longDescription:
			'Taekwondo Unsoed didirikan tahun 1995 oleh Sabeum Cornelius Prasetyono mahasiswa fakultas biologi asal Jakarta. Pada awal berdiri, Taekwondo Unsoed merupakan UKM Fakultas Biologi dan pada tahun 1997 menjadi UKM Universitas sampai sekarang.',
		image: '/img/student-organizations/ukm/Taekwondo/logo.webp',
		href: '/ukm/taekwondo',
		events: [
			{
				title: 'Latihan rutin 2x setiap minggu',
				description: ''
			},
			{
				title: 'Mengikuti event kejuaraan',
				description: ''
			},
			{
				title: 'Malam keakraban pengurus dan anggota UKM Taekwondo',
				description: ''
			},
			{
				title: 'Ujian kenaikan tingkat',
				description: ''
			},
			{
				title: 'Latihan rutin setiap hari untuk persiapan kejuaraan',
				description: ''
			}
		],
		gallery: [
			{
				title: 'Latihan Taekwondo',
				image: '/img/student-organizations/ukm/Taekwondo/Dokumentasi-1.webp'
			},
			{
				title: 'Kompetisi Taekwondo',
				image: '/img/student-organizations/ukm/Taekwondo/Dokumentasi-2.webp'
			},
			{
				title: 'Pelatihan Teknik Taekwondo',
				image: '/img/student-organizations/ukm/Taekwondo/Dokumentasi-3.webp'
			}
		],
		contact: {
			name: '@taekwondounsoed',
			link: 'https://instagram.com/taekwondounsoed'
		}
	},
	{
		name: 'Tenis Meja',
		slug: 'olahraga',
		id: 'tenis-meja',
		description:
			'UKM Tenis Meja Unsoed adalah organisasi mahasiswa yang berfokus pada pengembangan minat dan bakat di bidang olahraga tenis meja.',
		longDescription:
			'UKM Tenis Meja Unsoed, atau Unit Kegiatan Mahasiswa Tenis Meja Unsoed, adalah sebuah organisasi mahasiswa yang berfokus pada pengembangan minat dan bakat di bidang olahraga tenis meja. UKM ini terbuka bagi mahasiswa yang memiliki minat dengan olahraga tenis meja, tidak harus memiliki pengalaman dalam olahraga tenis meja.\n\nUKM ini menawarkan berbagai kegiatan yang meliputi latihan rutin, kompetisi internal, serta partisipasi dalam turnamen tingkat lokal, regional, dan nasional. UKM ini menyediakan fasilitas yang lengkap seperti meja tenis, bola, dan raket, serta dilatih oleh pelatih profesional yang berkompeten.\n\nMelalui program latihan yang terstruktur dan bimbingan dari pelatih berpengalaman, anggota UKM Tenis Meja Unsoed dapat mengembangkan teknik permainan, strategi, dan mental bertanding. Organisasi ini juga memberikan kesempatan bagi anggotanya untuk berpartisipasi dalam berbagai kompetisi dan membangun sportivitas serta kekeluargaan.',
		image: '/img/student-organizations/ukm/Tenis Meja/logo.webp',
		href: '/ukm/tenis-meja',
		events: [
			{
				title: 'Latihan Rutin Tenis Meja',
				description:
					'Latihan teknik dasar, strategi permainan, dan kondisi fisik secara rutin dan terstruktur'
			}
		],
		gallery: [
			{
				title: 'Latihan Rutin Tenis Meja',
				image: '/img/student-organizations/ukm/Tenis Meja/documentation-1.webp'
			},
			{
				title: 'Kompetisi Internal UKM',
				image: '/img/student-organizations/ukm/Tenis Meja/documentation-2.webp'
			},
			{
				title: 'Kompetisi Internal UKM',
				image: '/img/student-organizations/ukm/Tenis Meja/documentation-3.webp'
			}
		],
		contact: {
			name: '@tenismejaunsoed_',
			link: 'https://instagram.com/tenismejaunsoed_'
		}
	},
	{
		name: 'Unsoed Football Club (UFC)',
		slug: 'olahraga',
		id: 'ufc',
		description:
			'Unsoed Football Club (UFC) merupakan salah satu Unit Kegiatan Mahasiswa yang menjadi wadah bagi seluruh mahasiswa Universitas Jenderal Soedirman untuk menyalurkan minat dan bakat mereka di bidang olahraga khususnya cabang olahraga sepak bola.',
		longDescription:
			'Unsoed Football Club (UFC) merupakan salah satu Unit Kegiatan Mahasiswa yang menjadi wadah bagi seluruh mahasiswa Universitas Jenderal Soedirman untuk menyalurkan minat dan bakat mereka di bidang olahraga khususnya cabang olahraga sepak bola. Berdiri sejak tahun 1997, UFC telah menjadi simbol semangat sportifitas dan kebersamaan di kalangan mahasiswa Universitas Jenderal Soedirman. Dengan sejarah panjang dan dedikasi tinggi, UFC terus menjadi tempat bagi mahasiswa UNSOED untuk berprestasi dan membawa nama baik universitas, sekaligus membangun persahabatan dan pengalaman yang tak terlupakan. Sebuah UKM yang tidak hanya berbicara tentang sepakbola, tetapi juga tentang membangun kebersamaan dan semangat juang. Tujuan lain dari UKM ini adalah agar UKM Sepakbola Universitas Jenderal Soedirman menjadi pelopor terdepan dalam berbagai ajang dan perlombaan di tingkat Regional,Nasional maupun Internasional untuk membawa nama Almamater tercinta ini menjadi suatu Universitas yang memiliki banyak prestasi di cabang Olahraga khususnya sepak bola. ',
		image: '/img/student-organizations/ukm/UFC/logo.webp',
		href: '/ukm/ufc',
		events: [
			{
				title: 'Pembentukan Sekolah Sepak Bola (SSB) Unsoed',
				description: ''
			},
			{
				title: 'Menyelenggarakan turnamen sepakbola antar universitas',
				description: ''
			},
			{
				title: 'Menyelenggarakan turnamen sepakbola antar pelajar',
				description: ''
			},
			{
				title: 'Menyelenggarakan festival sepakbola usia dini',
				description: ''
			},
			{
				title: 'Mengikuti event antar universitas',
				description: ''
			},
			{
				title: 'Pelaksanaan kursus pelatih dan wasit',
				description: ''
			},
			{
				title: 'Studi banding universitas',
				description: ''
			},
			{
				title: 'Rapat Besar',
				description: ''
			},
			{
				title: 'Rapat Divisi',
				description: ''
			},
			{
				title: 'Fun game',
				description: ''
			},
			{
				title: 'Main bareng',
				description: ''
			}
		],
		gallery: [
			{
				title: 'Festival Sepak Bola Usia Dini',
				image: '/img/student-organizations/ukm/UFC/Festival-Sepak-Bola-Usia-Dini.webp'
			},
			{
				title: 'Tim Unsoed Football Club',
				image: '/img/student-organizations/ukm/UFC/Tim-UFC.webp'
			},
			{
				title: 'Kegiatan UFC',
				image: '/img/student-organizations/ukm/UFC/Kegiatan.webp'
			}
		],
		contact: {
			name: '@official_unsoedfc',
			link: 'https://instagram.com/official_unsoedfc'
		}
	},
	{
		name: 'UFU',
		slug: 'olahraga',
		id: 'ufu',
		description:
			'UKM Futsal Unsoed (UFU) adalah wadah pengembangan bakat futsal mahasiswa Universitas Jenderal Soedirman yang berkomitmen membangun sportivitas dan prestasi.',
		longDescription:
			'UKM Futsal Unsoed (UFU) merupakan unit kegiatan mahasiswa yang berfokus pada pengembangan olahraga futsal di lingkungan Universitas Jenderal Soedirman. Sebagai wadah bagi mahasiswa yang memiliki passion di bidang futsal, UFU berkomitmen untuk mengembangkan kemampuan teknis, taktis, dan mental para anggotanya melalui latihan rutin dan kompetisi.\n\nUFU tidak hanya berfokus pada aspek kompetitif, tetapi juga pada pembentukan karakter sportif, kerjasama tim, dan jiwa kepemimpinan. Melalui berbagai kegiatan seperti latihan intensif, pertandingan persahabatan, dan turnamen, UFU menjadi tempat mahasiswa mengasah skill futsal sambil membangun networking dan persahabatan yang solid.\n\nSebagai bagian dari komunitas olahraga Unsoed, UFU aktif berpartisipasi dalam berbagai kompetisi futsal tingkat universitas dan regional, serta menyelenggarakan event-event yang dapat mempererat hubungan antar mahasiswa melalui olahraga futsal.',
		image: '/img/student-organizations/ukm/UFU/logo.webp',
		href: '/ukm/ufu',
		events: [
			{
				title: 'Rektor Cup',
				description:
					'Rektor Cup adalah turnamen olahraga futsal antar fakultas di Universitas Jenderal Soedirman yang diselenggarakan setiap dua tahun sekali. Kegiatan ini berada di bawah naungan UKM Futsal Unsoed dan merupakan salah satu ajang olahraga bergengsi di lingkungan kampus. Tujuan utama dari Rektor Cup adalah untuk mempererat hubungan antar fakultas, menumbuhkan semangat kompetisi yang sehat, serta meningkatkan prestasi mahasiswa di bidang olahraga, khususnya futsal. Sebelum dimulainya Rektor Cup, telah dilakukan pertemuan antar perwakilan fakultas untuk membahas kelanjutan Dekan Cup, sebuah turnamen yang sebelumnya rutin diadakan sebelum pandemi COVID-19. Namun, karena belum ada fakultas yang memulai kembali Dekan Cup, maka Rektor Cup menjadi langkah awal untuk menghidupkan kembali tradisi kompetisi antar fakultas.'
			}
		],
		gallery: [
			{
				title: '',
				image: '/img/student-organizations/ukm/UFU/DOKUMENTASI.webp'
			},
			{
				title: '',
				image: '/img/student-organizations/ukm/UFU/dokumentasi-1.webp'
			},
			{
				title: '',
				image: '/img/student-organizations/ukm/UFU/dokumentasi-2.webp'
			}
		],
		contact: {
			name: '@futsal_unsoed',
			link: 'https://instagram.com/futsal_unsoed'
		}
	},
	{
		name: 'UKKI',
		slug: 'organisasi',
		id: 'ukki',
		description:
			'UKKI merupakan sebuah organisasi yang bergerak di bidang dakwah kampus yang didirikan pada tahun 1988. UKKI merupakan organisasi tingkat kampus yang menaungi 12 UKM tingkat fakultas dalam bidang dakwah atau Lembaga Dakwah Fakultas (LDF). UKKI tidak hanya sebagai organisasi, tapi juga sebagai sebuah keluarga yang ingin menciptakan lingkungan yang sehat bagi kita selaku muslim. Di sini kita bersama-sama belajar memperdalam pengetahuan kita tentang Islam serta bersama-sama saling memperbaiki diri. Di sini kamu dapat belajar, berkembang, dan berkontribusi lewat nilai-nilai Islam.',
		longDescription:
			'UKKI merupakan sebuah organisasi yang bergerak di bidang dakwah kampus yang didirikan pada tahun 1988. UKKI merupakan organisasi tingkat kampus yang menaungi 12 UKM tingkat fakultas dalam bidang dakwah atau Lembaga Dakwah Fakultas (LDF). UKKI tidak hanya sebagai organisasi, tapi juga sebagai sebuah keluarga yang ingin menciptakan lingkungan yang sehat bagi kita selaku muslim. Di sini kita bersama-sama belajar memperdalam pengetahuan kita tentang Islam serta bersama-sama saling memperbaiki diri. Di sini kamu dapat belajar, berkembang, dan berkontribusi lewat nilai-nilai Islam.',
		image: '/img/student-organizations/ukm/UKKI/logo.webp',
		href: '/ukm/ukki',
		events: [
			{
				title: 'Soedirman Islamic Events',
				description: ''
			},
			{
				title: 'Female Event Soedirman Teenager',
				description: ''
			},
			{
				title: 'Ramadhan Charity',
				description: ''
			},
			{
				title: 'Aliansi Kurban',
				description: ''
			}
		],
		gallery: [
			{
				title: 'Dokumentasi Kegiatan',
				image: '/img/student-organizations/ukm/UKKI/dokumentasi-1.webp'
			},
			{
				title: 'UKKI Unsoed',
				image: '/img/student-organizations/ukm/UKKI/ukki-unsoed-1.webp'
			},
			{
				title: 'UKKI Unsoed',
				image: '/img/student-organizations/ukm/UKKI/ukki-unsoed-2.webp'
			}
		],
		contact: {
			name: '@ukkiunsoed',
			link: 'https://instagram.com/ukkiunsoed'
		}
	},
	{
		name: 'UKM Hand Ball',
		slug: 'olahraga',
		id: 'ukm-hand-ball',
		description: 'Unit Kegiatan Mahasiswa UKM Hand Ball adalah wadah untuk olahraga bola tangan.',
		longDescription:
			'Unit Kegiatan Mahasiswa UKM Hand Ball merupakan organisasi yang bergerak dalam bidang olahraga bola tangan. UKM ini menjadi tempat mahasiswa mengembangkan kemampuan bermain bola tangan, kebugaran, dan sportivitas. Anggota dilatih untuk menguasai berbagai teknik bola tangan.',
		image: '/img/student-organizations/ukm/UKM Hand Ball/logo.webp',
		href: '/ukm/ukm-hand-ball',
		events: [
			{
				title: 'Latihan Hand Ball',
				description: 'Latihan bola tangan secara rutin'
			},
			{
				title: 'Turnamen',
				description: 'Turnamen bola tangan antar fakultas'
			}
		],
		gallery: [
			{
				title: 'Latihan 2024',
				image: '/img/placeholder.png'
			},
			{
				title: 'Turnamen',
				image: '/img/placeholder.png'
			}
		],
		contact: {
			name: '@ukm_hand_ball_unsoed',
			link: 'https://instagram.com/ukm_hand_ball_unsoed'
		}
	},
	{
		name: 'Unit Kegiatan Mahasiswa Penalaran dan Riset (UKMPR)',
		slug: 'organisasi',
		id: 'ukm-pr',
		description:
			'Unit Kegiatan Mahasiswa Penalaran dan Riset (UKMPR) didirikan pada 23 Januari 2008 sebagai wadah pengembangan potensi intelektual mahasiswa yang berfokus pada kegiatan keilmiahan, penelitian, dan penulisan ilmiah. UKMPR berperan aktif dalam membentuk mahasiswa yang berpikiran terbuka, inovatif, dan siap berkontribusi bagi kemajuan ilmu pengetahuan dan masyarakat.',
		longDescription:
			'Unit Kegiatan Mahasiswa Penalaran dan Riset (UKMPR) didirikan pada 23 Januari 2008 sebagai wadah pengembangan potensi intelektual mahasiswa yang berfokus pada kegiatan keilmiahan, penelitian, dan penulisan ilmiah. UKMPR berperan aktif dalam membentuk mahasiswa yang berpikiran terbuka, inovatif, dan siap berkontribusi bagi kemajuan ilmu pengetahuan dan masyarakat.',
		image: '/img/student-organizations/ukm/UKM PR/logo.webp',
		href: '/ukm/ukm-pr',
		events: [
			{
				title: 'Soedirman Science Competition (SSC)',
				description: ''
			},
			{
				title: 'Pelatihan Metodologi Penelitian (Planet)',
				description: ''
			},
			{
				title: 'Training Soedirman 1 (TS 1)',
				description: ''
			},
			{
				title: 'Pelatihan Desain Grafis',
				description: ''
			},
			{
				title: 'Riset UKMPR',
				description: ''
			},
			{
				title: 'PRAKTIS',
				description: ''
			},
			{
				title: 'Tilik Desa',
				description: ''
			},
			{
				title: 'Kunjungan Ilmiah',
				description: ''
			},
			{
				title: 'Business Plan Seminar (BPS)',
				description: ''
			}
		],
		gallery: [
			{
				title: 'Soedirman Science Competition',
				image: '/img/student-organizations/ukm/UKM PR/SSC.webp'
			},
			{
				title: 'Abdidaya Ormawa',
				image: '/img/student-organizations/ukm/UKM PR/abdidaya-ormawa.webp'
			},
			{
				title: 'Galeri Kegiatan',
				image: '/img/student-organizations/ukm/UKM PR/foto-galeri.webp'
			}
		],
		contact: {
			name: '@ukmprunsoed',
			link: 'https://instagram.com/ukmprunsoed'
		}
	},
	{
		name: 'UMAKA (Unit Kegiatan Mahasiswa Katolik)',
		slug: 'organisasi',
		id: 'umaka',
		description:
			'UMAKA (Unit Kegiatan Mahasiswa Katolik) merupakan wadah bagi mahasiswa Katolik di Universitas Jenderal Soedirman untuk berhimpun dan mengembangkan diri. Organisasi ini secara resmi berdiri pada 10 Juni 2001, menjadi rumah bagi seluruh mahasiswa Katolik yang terdaftar di Unsoed. Sebagai sebuah Unit Kegiatan Mahasiswa (UKM) yang berlandaskan keagamaan, UMAKA berperan penting dalam menjaga tali persaudaraan antar mahasiswa Katolik, memperdalam iman mereka, serta menumbuhkan rasa kasih terhadap Tuhan.',
		longDescription:
			'UMAKA (Unit Kegiatan Mahasiswa Katolik) merupakan wadah bagi mahasiswa Katolik di Universitas Jenderal Soedirman untuk berhimpun dan mengembangkan diri. Organisasi ini secara resmi berdiri pada 10 Juni 2001, menjadi rumah bagi seluruh mahasiswa Katolik yang terdaftar di Unsoed. Sebagai sebuah Unit Kegiatan Mahasiswa (UKM) yang berlandaskan keagamaan, UMAKA berperan penting dalam menjaga tali persaudaraan antar mahasiswa Katolik, memperdalam iman mereka, serta menumbuhkan rasa kasih terhadap Tuhan. \n\nLebih dari sekadar wadah pengembangan spiritual, UMAKA juga berupaya untuk mengimplementasikan nilai-nilai keimanan dalam kehidupan bermasyarakat dan menjaga keutuhan ciptaan. Hal ini diwujudkan melalui berbagai kegiatan sosial, aksi nyata, dan program-program yang relevan dengan kebutuhan lingkungan sekitar. Dengan demikian, UMAKA tidak hanya menjadi tempat bagi mahasiswa Katolik untuk bertumbuh dalam iman, tetapi juga menjadi agen perubahan positif yang berkontribusi pada terciptanya masyarakat yang lebih baik dan selaras dengan nilai-nilai luhur keagamaan.',
		image: '/img/student-organizations/ukm/Umaka/logo.webp',
		href: '/ukm/umaka',
		events: [
			{
				title: 'LKMK (Latihan dasar Kepemimpinan Mahasiswa Katolik)',
				description:
					'LKMK adalah program kerja yang bertujuan untuk membangun solidaritas antara mahasiswa baru Katolik yang ada di Universitas Jenderal Soedirman. Program kerja ini berlangsung selama 2-3 hari dengan berbagai macam kegiatan seperti misa bersama, game, dan juga insight menarik dari pembicara yang akan memaparkan materi.'
			},
			{
				title: 'UNYUK (Umaka Bernyanyi Yuk)',
				description:
					'UNYUK (Umaka Bernyanyi Yuk) adalah program kerja yang fokus pada paduan suara, baik di Gereja maupun acara tertentu yang memerlukan koor. Program ini terbuka untuk seluruh Mahasiswa Katolik Unsoed dan menyediakan latihan rutin untuk memberikan bimbingan serta pengetahuan baru tentang bernyanyi.'
			},
			{
				title: 'WP (Welcoming Party)',
				description:
					'Welcoming Party ini dipergunakan sebagai wadah penyambutan mahasiswa baru di UMAKA, memperkenalkan lebih dalam apa itu UMAKA. Program kerja ini bersifat non-formal dan ada pula beberapa kegiatan di dalamnya seperti bermain games, lalu makan dan juga berdoa bersama.'
			}
		],
		gallery: [
			{
				title: 'Dokumentasi UMAKA',
				image: '/img/student-organizations/ukm/Umaka/dokumentasi-umaka-1.webp'
			},
			{
				title: 'Dokumentasi UMAKA',
				image: '/img/student-organizations/ukm/Umaka/dokumentasi-umaka-2.webp'
			},
			{
				title: 'Dokumentasi UMAKA',
				image: '/img/student-organizations/ukm/Umaka/dokumentasi-umaka-3.webp'
			}
		],
		contact: {
			name: '@umakaunsoed',
			link: 'https://instagram.com/umakaunsoed'
		}
	},
	{
		name: 'UPL MPA',
		slug: 'alam',
		id: 'upl-mpa',
		description:
			'“…Robek-robeklah badanku potong-potonglah jasadku ini tetapi jiwaku yang dilindungi benteng merah putih akan tetap hidup tetap menuntut bela siapapun lawan yang aku hadapi…” -Panglima Besar Soedirman\n\nUnit Pandu Lingkungan Mahasiswa Pencinta Alam Universitas Jenderal Soedirman (UPL MPA Unsoed) berdiri pada tanggal 8 Juni 1979, merupakan satu-satunya unit kegiatan mahasiswa yang bergerak dibidang kepencintaalaman dan lingkungan hidup serta pengabdian masyarakat.',
		longDescription:
			'“…Robek-robeklah badanku potong-potonglah jasadku ini tetapi jiwaku yang dilindungi benteng merah putih akan tetap hidup tetap menuntut bela siapapun lawan yang aku hadapi…” -Panglima Besar Soedirman\n\nUnit Pandu Lingkungan Mahasiswa Pencinta Alam Universitas Jenderal Soedirman (UPL MPA Unsoed) berdiri pada tanggal 8 Juni 1979, merupakan satu-satunya unit kegiatan mahasiswa yang bergerak dibidang kepencintaalaman dan lingkungan hidup serta pengabdian masyarakat. Adapun landasan kerja UPL MPA Unsoed adalah : \n1. Landasan Idil Pancasila. \n2. Landasan Konstitusional adalah UUD 1945. \n 3. Landasan Operasional Adalah Tri Dharma Perguruan Tinggi, Kode Etik Pencinta Alam Indonesia, Wawasan Almamater, Pola Pengembangan Kemahasiswaan, Pola Pengembangan Mahasiswa Pencinta Alam, Kode Kehormatan UPL MPA Unsoed.\n\nUPL MPA Unsoed dalam struktur organisasinya mempunyai beberapa alat kelengkapan, diantaranya Pengurus, Badan Diklat dengan kekuatan hukum Surat Keputusan Rektor Universitas Jenderal Soedirman. Sebagaimana layaknya organisasi yang stabil UPL MPA Unsoed mempunyai beberapa aturan yang mendasar, diantaranya: \n1. Anggaran Dasar dan Anggaran Rumah Tangga;\n2. Untuk Pendidikan dan Latihan ada Pedoman Pendidikan Dasar dan Kurikulum;\n3.	GBPK (Garis-Garis Besar Program Kerja);\n4.	Program Kerja Organisasi UPL MPA Unsoed;\n5. Rapat Anggota (dalam satu tahun ada tiga kali Rapat Anggota dan satu kali Rapat Umum Anggota);\n6.	Sumber pendanaan ada beberapa, diantaranya dari anggota melalui IPWS (Iuran Pokok Wajib Semester), Pihak Universitas, Donatur, dan Sponsor.',
		image: '/img/student-organizations/ukm/UPL MPA/logo.webp',
		href: '/ukm/upl-mpa',
		events: [
			{
				title: 'Pendidikan Dasar (Basic Training)',
				description: ''
			},
			{
				title: 'Pendidikan Jurnalistik dan Fotografi',
				description: ''
			},
			{
				title: 'Kursus SAR, Navigasi Darat, dan Survival',
				description: ''
			},
			{
				title: 'Pelatihan Arung Jeram, Panjat Tebing',
				description: ''
			},
			{
				title: 'Diklat Speleologi HIKESPI',
				description: ''
			},
			{
				title: 'Pendidikan Kader Konservasi',
				description: ''
			},
			{
				title: 'Lomba Konservasi Sumber Daya Alam (KSDA)',
				description: ''
			},
			{
				title: 'Dan lain-lain',
				description: ''
			}
		],
		gallery: [
			{
				title: 'Dokumentasi Kegiatan',
				image: '/img/student-organizations/ukm/UPL MPA/dokumentasi-1.webp'
			},
			{
				title: 'Dokumentasi Kegiatan',
				image: '/img/student-organizations/ukm/UPL MPA/dokumentasi-2.webp'
			},
			{
				title: 'Dokumentasi Kegiatan',
				image: '/img/student-organizations/ukm/UPL MPA/dokumentasi-3.webp'
			}
		],
		contact: {
			name: '@uplmpaunsoed',
			link: 'https://instagram.com/uplmpaunsoed'
		}
	},
	{
		name: 'USMAN',
		slug: 'organisasi',
		id: 'usman',
		description:
			"UKM Seni Islam dan Al Quran merupakan unit kegiatan mahasiswa tingkat universitas yang berfokus pada pengembangan Seni Islam dan Al Qur'an. Usman diresmikan menjadi UKM tingkat universitas pada 5 februari 2017 melalui SK Rektor Nomor 53/UN23/KM.03.02/2017",
		longDescription:
			"UKM Seni Islam dan Al Quran merupakan unit kegiatan mahasiswa tingkat universitas yang berfokus pada pengembangan Seni Islam dan Al Qur'an. Usman diresmikan menjadi UKM tingkat universitas pada 5 februari 2017 melalui SK Rektor Nomor 53/UN23/KM.03.02/2017",
		image: '/img/student-organizations/ukm/Usman/logo.webp',
		href: '/ukm/usman',
		events: [
			{
				title: 'Gebyar Milad Usman “Gemilau”',
				description: 'Terdapat 2 event yaitu Festival Islami Soedirman & Unsoed Bersholawat'
			},
			{
				title: 'Diklat Usman',
				description: ''
			},
			{
				title: 'Study banding',
				description: ''
			},
			{
				title: 'Rutinan Usman',
				description: ''
			},
			{
				title: 'Latian Rutin Seni',
				description: ''
			}
		],
		gallery: [
			{
				title: 'Diklat USMAN',
				image: '/img/student-organizations/ukm/Usman/diklat-usman.webp'
			},
			{
				title: 'Penampilan Branding UKM S3',
				image: '/img/student-organizations/ukm/Usman/penampilan-branding-ukm-s3.webp'
			},
			{
				title: 'Unsoed Bersholawat',
				image: '/img/student-organizations/ukm/Usman/unsoed-bersholawat.webp'
			}
		],
		contact: {
			name: '@usmanunsoed',
			link: 'https://instagram.com/usmanunsoed'
		}
	},
	{
		name: 'Voli',
		slug: 'olahraga',
		id: 'voli',
		description:
			'UKM Bola Voli Unsoed adalah wadah bagi mahasiswa yang memiliki passion dan bakat dalam olahraga bola voli, dengan tujuan meningkatkan prestasi dan mengembangkan kemampuan anggota. Dengan semangat dan kekompakan, kami bertekad untuk menjadi yang terbaik dalam kompetisi bola voli tingkat universitas dan nasional. Melalui latihan yang intensif dan program pembinaan yang terstruktur, kami berusaha untuk meningkatkan kemampuan teknis dan taktis anggota, serta membangun karakter dan jiwa sportif yang kuat. Dengan demikian, kami berharap dapat menjadi salah satu tim bola voli terbaik di Indonesia, serta menjadi contoh bagi mahasiswa lain dalam hal semangat, kekompakan, dan prestasi.',
		longDescription:
			'UKM Bola Voli Unsoed adalah wadah bagi mahasiswa yang memiliki passion dan bakat dalam olahraga bola voli, dengan tujuan meningkatkan prestasi dan mengembangkan kemampuan anggota. Dengan semangat dan kekompakan, kami bertekad untuk menjadi yang terbaik dalam kompetisi bola voli tingkat universitas dan nasional. Melalui latihan yang intensif dan program pembinaan yang terstruktur, kami berusaha untuk meningkatkan kemampuan teknis dan taktis anggota, serta membangun karakter dan jiwa sportif yang kuat. Dengan demikian, kami berharap dapat menjadi salah satu tim bola voli terbaik di Indonesia, serta menjadi contoh bagi mahasiswa lain dalam hal semangat, kekompakan, dan prestasi.',
		image: '/img/student-organizations/ukm/Voli/logo.webp',
		href: '/ukm/voli',
		events: [
			{
				title: 'Latihan Voli',
				description: 'Latihan bola voli secara rutin'
			}
		],
		gallery: [
			{
				title: 'Latihan Voli',
				image: '/img/student-organizations/ukm/Voli/24c4287d-2bde-49c9-ab09-e3c50d46662a.webp'
			},
			{
				title: 'Turnamen Voli',
				image: '/img/student-organizations/ukm/Voli/d6d3608e-ae88-4c12-a05b-49ea5dd6a291.webp'
			},
			{
				title: 'Kompetisi Voli',
				image: '/img/student-organizations/ukm/Voli/e2836922-a707-44c9-ba4a-b1ee3cb0494a.webp'
			}
		],
		contact: {
			name: '@ukmbolavoliunsoed',
			link: 'https://instagram.com/ukmbolavoliunsoed'
		}
	}
];

export default ukm;
